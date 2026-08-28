/* LanExamMock cloud sync — Google Identity Services + progress sync API.
 * Disabled (site behaves exactly like offline version) until both values below are set. */
(function () {
  var CLIENT_ID = "481860179039-gb37qsdogd4vgnn2g5umh73jen02avj4.apps.googleusercontent.com";
  var API_BASE = "https://claudebot500.tailfcf67f.ts.net";

  if (!CLIENT_ID || !API_BASE || typeof window === "undefined") return;

  // In-app browser (LINE/Telegram/FB webview) detection: Google blocks OAuth inside
  // webviews — even when the GSI script loads, tapping sign-in just opens a blank
  // accounts.google.com page (Tony confirmed on device, 2026-08-15).
  var IN_WEBVIEW = (function () {
    var ua = navigator.userAgent || "";
    // ⚠️ Never use window.webkit.messageHandlers as a signal: Chrome/Edge/Firefox on
    // iOS/iPadOS are WKWebView shells that all inject it — 2026-08-24 it false-positived
    // Tony's iPad Chrome as an in-app browser and locked sign-in out entirely (Google
    // sign-in works fine in those real browsers).
    return /\bwv\b/.test(ua) ||
      (/iPhone|iPad|iPod/.test(ua) && !/Safari\//.test(ua)) ||
      /Line\/|FBAN|FBAV|Instagram|MicroMessenger|Telegram|LIFF/i.test(ua) ||
      !!window.TelegramWebviewProxy;                               // Telegram iOS（UA 無任何標記，只能認注入物件）
  })();

  // LINE's in-app browser honors an official escape hatch: a URL carrying
  // openExternalBrowser=1 is opened in the external browser automatically. Redirect once
  // when opened inside LINE so shared links "just work" (Tony 2026-08-24). Harmless in real
  // browsers; the query guard prevents a reload loop on old LINE versions that ignore it.
  if (/Line\//i.test(navigator.userAgent || "") && !/[?&]openExternalBrowser=/.test(location.search)) {
    var q = location.search ? location.search + "&openExternalBrowser=1" : "?openExternalBrowser=1";
    location.replace(location.origin + location.pathname + q + location.hash);
  }
  var WEBVIEW_MSG = "Google doesn't allow sign-in inside in-app browsers (LINE / Telegram, etc.) — it only shows a blank page.\nUse the menu (⋯ or share button) in the corner to open this site in Safari or Chrome, then sign in.";
  var GIS_RETRY_MSG = "Can't reach Google's sign-in component (accounts.google.com isn't responding). Usually a flaky network or an ad/content blocker. Try again?";

  // UIDialog 可能因混版快取（舊 HTML 沒載 dialog.js + 新 sync.js）不存在——退回原生框保底
  function dlgAlert(msg) { if (window.UIDialog) UIDialog.alert(msg); else alert(msg); }
  function dlgConfirm(msg, ok) { if (window.UIDialog) UIDialog.confirm(msg, ok); else if (confirm(msg)) ok(); }

  var TOKEN_KEY = "sync.token";
  // 長效 session（2026-08-22 Tony 回報「不要一直要求登入」）：Google ID token 只有 1 小時，
  // 又存在 sessionStorage，關掉分頁就沒了 → 手機幾乎每次開站都要重登。改成登入後打
  // POST /api/session 換一顆後端簽的 30 天 token 存 localStorage，每次開頁再換新（滾動續期）。
  // ⚠️ key 不能長得像 "<level>."（ket./pet./fce./cae./cpe.）—— gatherKeys() 會把那些整包
  //    推上雲端再同步到別台裝置，token 會跟著外流。
  var SESS_KEY = "sync.sess";
  var PROFILE_KEY = "sync.profile";
  var PUSH_INTERVAL_MS = 60000;
  var lastPushedHash = null;

  function ls(k) { try { return localStorage.getItem(k) || ""; } catch (e) { return ""; } }
  function ss(k) { try { return sessionStorage.getItem(k) || ""; } catch (e) { return ""; } }
  // 長效 token 優先；剛登入還沒換到手時才用 sessionStorage 裡的 Google ID token
  function token() { return ls(SESS_KEY) || ss(TOKEN_KEY); }
  function setToken(t) { try { sessionStorage.setItem(TOKEN_KEY, t); } catch (e) {} }
  function setSess(t) {
    try { localStorage.setItem(SESS_KEY, t); sessionStorage.removeItem(TOKEN_KEY); } catch (e) {}
  }
  function clearToken() {
    try { sessionStorage.removeItem(TOKEN_KEY); } catch (e) {}
    try { localStorage.removeItem(SESS_KEY); localStorage.removeItem(PROFILE_KEY); } catch (e) {}
  }

  function b64Payload(seg) {
    try { return JSON.parse(atob(seg.replace(/-/g, "+").replace(/_/g, "/"))); }
    catch (e) { return null; }
  }
  function jwtPayload(t) { return t ? b64Payload(String(t).split(".")[1] || "") : null; }
  function profile() { try { return JSON.parse(ls(PROFILE_KEY) || "null"); } catch (e) { return null; } }
  // 兩種 token 格式都吃：sess.<payload>.<sig>（後端 HMAC，payload {e,s,x}）與 Google ID token（JWT）
  function signedIn() {
    var t = token();
    if (!t) return null;
    if (t.indexOf("sess.") === 0) {
      var s = b64Payload(t.split(".")[1] || "");
      if (!s || !s.e || !(s.x > Date.now())) return null;
      var pr = profile() || {};
      return { email: s.e, sub: s.s, exp: Math.floor(s.x / 1000), name: pr.name, given_name: pr.given_name };
    }
    var p = jwtPayload(t);
    return p && p.exp * 1000 > Date.now() ? p : null;
  }

  function currentLevel() {
    try { return localStorage.getItem("cpe.level") || "cpe"; } catch (e) { return "cpe"; }
  }

  function gatherKeys(level) {
    var out = {};
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(level + ".") === 0 && k !== level + ".sync_ts") {
          out[k] = localStorage.getItem(k);
        }
      }
    } catch (e) {}
    return out;
  }
  function blobHash(obj) {
    var s = JSON.stringify(obj), h = 0;
    for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; }
    return h + ":" + s.length;
  }

  function api(method, level, body, cb) {
    req(method, "/api/progress?level=" + encodeURIComponent(level), body, cb);
  }

  function req(method, path, body, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, API_BASE + path);
    xhr.setRequestHeader("Authorization", "Bearer " + token());
    if (body) xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status === 401) { clearToken(); renderUi(); cb("auth"); return; }
      if (xhr.status < 200 || xhr.status >= 300) { cb("http " + xhr.status); return; }
      var data = null;
      try { data = JSON.parse(xhr.responseText); } catch (e) {}
      cb(null, data);
    };
    xhr.onerror = function () { cb("network"); };
    xhr.send(body ? JSON.stringify(body) : null);
  }

  // 拿現有 token（Google ID token 或還沒過期的 sess）換一顆新的 30 天 token。
  // 登入當下呼叫一次，之後每次開頁再呼叫一次 → 只要 30 天內開過站就永遠不用重登。
  function refreshSession(done) {
    if (!token()) { if (done) done("no token"); return; }
    req("POST", "/api/session", {}, function (err, res) {
      if (!err && res && res.token) { setSess(res.token); renderUi(); }
      if (done) done(err || null);
    });
  }

  function syncTs(level) {
    try { return parseInt(localStorage.getItem(level + ".sync_ts") || "0", 10) || 0; } catch (e) { return 0; }
  }
  function setSyncTs(level, ts) {
    try { localStorage.setItem(level + ".sync_ts", String(ts)); } catch (e) {}
  }

  // 只有雲端資料跟本機真的不同才需要重載（2026-08-28 Tony 回報「做練習到一半跳回主頁」）：
  // 手機把分頁凍結／切走時，PUT 已寫進雲端、回應卻沒收到，本機 sync_ts 於是落後雲端。
  // 回到分頁時 pull 看到「雲端比較新」就 location.reload()，但內容其實一模一樣，
  // 等於白白把做到一半的測驗中斷（作答狀態只在記憶體，重載就回到首頁）。
  function sameAsLocal(level, blob) {
    if (!blob) return false;
    var local = gatherKeys(level), k;
    for (k in blob) {
      if (!Object.prototype.hasOwnProperty.call(blob, k)) continue;
      if (k.indexOf(level + ".") !== 0) continue;
      if (local[k] !== blob[k]) return false;
    }
    for (k in local) {
      if (!Object.prototype.hasOwnProperty.call(local, k)) continue;
      if (local[k] !== blob[k]) return false;
    }
    return true;
  }
  // 真的有新資料要套用時，也不在測驗／練習進行中重載，等使用者離開那一頁再更新
  var reloadTimer = null;
  function busyNow() {
    try {
      var els = document.querySelectorAll('[id$="-quiz"], [id$="-drill"], [id$="-card"]');
      for (var i = 0; i < els.length; i++) {
        if (!els[i].classList.contains("hidden") && els[i].offsetParent !== null) return true;
      }
    } catch (e) {}
    return false;
  }
  function safeReload() {
    if (!busyNow()) { location.reload(); return; }
    if (reloadTimer) return;
    setStatus("cloud progress pending — will refresh after this exercise");
    reloadTimer = setInterval(function () {
      if (busyNow()) return;
      clearInterval(reloadTimer); reloadTimer = null;
      location.reload();
    }, 3000);
  }

  function pull(level, done) {
    api("GET", level, null, function (err, res) {
      if (err || !res || !res.blob) { if (done) done(err); return; }
      var serverTs = res.updatedAt || 0;
      if (serverTs > syncTs(level)) {
        if (sameAsLocal(level, res.blob)) { setSyncTs(level, serverTs); if (done) done(null, false); return; }
        try {
          Object.keys(res.blob).forEach(function (k) {
            if (k.indexOf(level + ".") === 0) localStorage.setItem(k, res.blob[k]);
          });
        } catch (e) {}
        setSyncTs(level, serverTs);
        if (done) done(null, true);   // applied → caller should reload
        return;
      }
      if (done) done(null, false);
    });
  }

  function push(level, done) {
    var data = gatherKeys(level);
    var h = blobHash(data);
    if (h === lastPushedHash) { if (done) done(null, false); return; }
    // 防蓋舊（2026-08-08）：背景舊分頁的定時 push 會把另一台裝置的新進度整包蓋掉。
    // 推送前先看雲端時間戳：比本機 sync_ts 新代表別台寫過 → 改成套用雲端資料並重載，不推。
    api("GET", level, null, function (gerr, gres) {
      if (!gerr && gres && (gres.updatedAt || 0) > syncTs(level) && sameAsLocal(level, gres.blob)) {
        setSyncTs(level, gres.updatedAt);    // 內容相同（多半是上一次 PUT 的回應沒收到），不必重載
      } else if (!gerr && gres && (gres.updatedAt || 0) > syncTs(level)) {
        if (gres.blob) {
          try {
            Object.keys(gres.blob).forEach(function (k) {
              if (k.indexOf(level + ".") === 0) localStorage.setItem(k, gres.blob[k]);
            });
          } catch (e) {}
          setSyncTs(level, gres.updatedAt);
          safeReload();
          return;
        }
      }
      api("PUT", level, data, function (err, res) {
        if (err) { if (done) done(err); return; }
        lastPushedHash = h;
        if (res && res.updatedAt) setSyncTs(level, res.updatedAt);
        setStatus("✓ synced");
        if (done) done(null, true);
      });
    });
  }

  /* ---------------- UI ---------------- */
  var ui = null, statusEl = null, statusTimer = null;

  function setStatus(msg) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    clearTimeout(statusTimer);
    statusTimer = setTimeout(function () { statusEl.textContent = ""; }, 3000);
  }

  function renderUi() {
    if (!ui) return;
    var p = signedIn();
    if (p) {
      ui.innerHTML = "";
      var chip = document.createElement("button");
      chip.className = "icon-btn sync-chip";
      chip.title = (p.email || "") + " — click to sign out";
      chip.textContent = (p.given_name || p.name || "?").charAt(0).toUpperCase();
      chip.addEventListener("click", function () {
        dlgConfirm("Sign out of cloud sync? (local progress stays on this device)", function () {
          clearToken(); lastPushedHash = null; renderUi();
        });
      });
      statusEl = document.createElement("span");
      statusEl.className = "sync-status";
      ui.appendChild(statusEl);
      ui.appendChild(chip);
    } else {
      ui.innerHTML = "";
      statusEl = null;
      var slot = document.createElement("div");
      ui.appendChild(slot);
      // In webviews never mount the official button — it leads to a blank sign-in page.
      if (!IN_WEBVIEW && window.google && google.accounts && google.accounts.id) {
        google.accounts.id.renderButton(slot, { type: "icon", shape: "circle", size: "medium" });
      } else {
        // Sign-in entry must never disappear (GSI blocked or webview)
        var pill = document.createElement("button");
        pill.type = "button";
        pill.className = "sync-chip";
        pill.textContent = "Sign in";
        pill.title = "Sign in with Google to sync progress";
        pill.addEventListener("click", function () {
          if (IN_WEBVIEW) {
            dlgAlert(WEBVIEW_MSG);
          } else if (gisFailed) {
            dlgConfirm(GIS_RETRY_MSG, function () { gisFailed = false; gisAttempts = 0; loadGis(); });
          } else {
            dlgAlert("The Google sign-in button is still loading — try again in a few seconds.");
          }
        });
        slot.appendChild(pill);
      }
    }
  }

  function onCredential(resp) {
    if (!resp || !resp.credential) return;
    setToken(resp.credential);
    // sess token 裡只有 email，頭像字母要用的名字先留一份在本機
    var p = jwtPayload(resp.credential) || {};
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify({
        email: p.email || "", name: p.name || "", given_name: p.given_name || "",
      }));
    } catch (e) {}
    renderUi();
    var level = currentLevel();
    setStatus("syncing…");
    // 先換長效 token 再同步：換到手才算真的「登入一次就好」
    refreshSession(function () {
      pull(level, function (err, applied) {
        if (applied) { safeReload(); return; }
        push(level);
      });
    });
  }

  function initGis() {
    google.accounts.id.initialize({ client_id: CLIENT_ID, callback: onCredential, auto_select: true });
    renderUi();
  }

  /* Retry gsi/client loading (2026-08-23 lesson from the poker site: when Google's widget
     transiently fails to load, a bare "use an external browser" message misleads users who
     are already in a real browser). Up to 3 attempts, 8s each. */
  var gisAttempts = 0, gisFailed = false;
  function loadGis() {
    gisAttempts++;
    var settled = false;
    var s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client";
    s.async = true;
    s.onload = function () { settled = true; gisFailed = false; initGis(); };
    s.onerror = function () { if (!settled) { settled = true; gisRetryOrFail(); } };
    setTimeout(function () {
      if (settled || (window.google && google.accounts && google.accounts.id)) return;
      settled = true;
      gisRetryOrFail();
    }, 8000);
    document.head.appendChild(s);
  }
  function gisRetryOrFail() {
    if (gisAttempts < 3) { loadGis(); return; }
    gisFailed = true;
  }

  function boot() {
    var header = document.querySelector(".app-header");
    if (!header) return;
    ui = document.createElement("div");
    ui.className = "sync-ui";
    header.appendChild(ui);
    renderUi(); // 先畫出登入鈕：GSI 被擋時入口也不能消失（2026-08-15 Tony 回報）

    if (!IN_WEBVIEW) loadGis();

    setInterval(function () { if (signedIn()) push(currentLevel()); }, PUSH_INTERVAL_MS);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden" && signedIn()) push(currentLevel());
      // 切回分頁時拉一次雲端（2026-08-08）：修「另一台做完、這台舊分頁看不到」——
      // 原本只有登入那一刻會 pull，掛在背景的分頁永遠不更新。
      if (document.visibilityState === "visible" && signedIn()) {
        pull(currentLevel(), function (err, applied) { if (applied) safeReload(); });
      }
    });
    // 開頁時若已是登入狀態（30 天 sess token）：續期一次再拉雲端進度
    if (signedIn()) {
      refreshSession();
      pull(currentLevel(), function (err, applied) { if (applied) safeReload(); });
    }
  }

  // 觸發 Google One Tap 登入提示（強制登入守門用，2026-08-11，同 K12Review）
  function promptLogin() {
    try {
      if (window.google && google.accounts && google.accounts.id) google.accounts.id.prompt();
    } catch (e) {}
    var pill = document.querySelector(".sync-ui");
    if (pill) {
      pill.classList.add("sync-flash");
      setTimeout(function () { pill.classList.remove("sync-flash"); }, 2400);
    }
  }

  // Minimal interface for the Parent/Teacher dashboard (grants API needs the token)
  window.CloudSync = { signedIn: signedIn, token: token, apiBase: API_BASE, promptLogin: promptLogin };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
