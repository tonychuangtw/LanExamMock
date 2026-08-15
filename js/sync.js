/* LanExamMock cloud sync — Google Identity Services + progress sync API.
 * Disabled (site behaves exactly like offline version) until both values below are set. */
(function () {
  var CLIENT_ID = "481860179039-gb37qsdogd4vgnn2g5umh73jen02avj4.apps.googleusercontent.com";
  var API_BASE = "https://claudebot500.tailfcf67f.ts.net";

  if (!CLIENT_ID || !API_BASE || typeof window === "undefined") return;

  var TOKEN_KEY = "sync.token";
  var PUSH_INTERVAL_MS = 60000;
  var lastPushedHash = null;

  function token() { try { return sessionStorage.getItem(TOKEN_KEY) || ""; } catch (e) { return ""; } }
  function setToken(t) { try { sessionStorage.setItem(TOKEN_KEY, t); } catch (e) {} }
  function clearToken() { try { sessionStorage.removeItem(TOKEN_KEY); } catch (e) {} }

  function jwtPayload(t) {
    try { return JSON.parse(atob(t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))); }
    catch (e) { return null; }
  }
  function signedIn() {
    var p = jwtPayload(token());
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
    var xhr = new XMLHttpRequest();
    xhr.open(method, API_BASE + "/api/progress?level=" + encodeURIComponent(level));
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

  function syncTs(level) {
    try { return parseInt(localStorage.getItem(level + ".sync_ts") || "0", 10) || 0; } catch (e) { return 0; }
  }
  function setSyncTs(level, ts) {
    try { localStorage.setItem(level + ".sync_ts", String(ts)); } catch (e) {}
  }

  function pull(level, done) {
    api("GET", level, null, function (err, res) {
      if (err || !res || !res.blob) { if (done) done(err); return; }
      var serverTs = res.updatedAt || 0;
      if (serverTs > syncTs(level)) {
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
      if (!gerr && gres && (gres.updatedAt || 0) > syncTs(level)) {
        if (gres.blob) {
          try {
            Object.keys(gres.blob).forEach(function (k) {
              if (k.indexOf(level + ".") === 0) localStorage.setItem(k, gres.blob[k]);
            });
          } catch (e) {}
          setSyncTs(level, gres.updatedAt);
          location.reload();
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
        UIDialog.confirm("Sign out of cloud sync? (local progress stays on this device)", function () {
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
      if (window.google && google.accounts && google.accounts.id) {
        google.accounts.id.renderButton(slot, { type: "icon", shape: "circle", size: "medium" });
      } else {
        // GSI 沒載入（App 內建瀏覽器常擋 accounts.google.com）時，登入入口不能消失
        var pill = document.createElement("button");
        pill.type = "button";
        pill.className = "sync-chip";
        pill.textContent = "Sign in";
        pill.title = "Sign in with Google to sync progress";
        pill.addEventListener("click", function () {
          UIDialog.alert("This in-app browser blocks Google Sign-In.\nOpen this site in Safari or Chrome to sign in.");
        });
        slot.appendChild(pill);
      }
    }
  }

  function onCredential(resp) {
    if (!resp || !resp.credential) return;
    setToken(resp.credential);
    renderUi();
    var level = currentLevel();
    setStatus("syncing…");
    pull(level, function (err, applied) {
      if (applied) { location.reload(); return; }
      push(level);
    });
  }

  function initGis() {
    google.accounts.id.initialize({ client_id: CLIENT_ID, callback: onCredential, auto_select: true });
    renderUi();
  }

  function boot() {
    var header = document.querySelector(".app-header");
    if (!header) return;
    ui = document.createElement("div");
    ui.className = "sync-ui";
    header.appendChild(ui);
    renderUi(); // 先畫出登入鈕：GSI 被擋時入口也不能消失（2026-08-15 Tony 回報）

    var s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client";
    s.async = true;
    s.onload = initGis;
    document.head.appendChild(s);

    setInterval(function () { if (signedIn()) push(currentLevel()); }, PUSH_INTERVAL_MS);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden" && signedIn()) push(currentLevel());
      // 切回分頁時拉一次雲端（2026-08-08）：修「另一台做完、這台舊分頁看不到」——
      // 原本只有登入那一刻會 pull，掛在背景的分頁永遠不更新。
      if (document.visibilityState === "visible" && signedIn()) {
        pull(currentLevel(), function (err, applied) { if (applied) location.reload(); });
      }
    });
    // 開頁時若已是登入狀態（分頁還原、session 未過期）也先拉一次
    if (signedIn()) pull(currentLevel(), function (err, applied) { if (applied) location.reload(); });
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
