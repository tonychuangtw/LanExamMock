/* ============================================================
 * CPE Prep — app.js
 * 結構：
 *   §1 Pure logic（瀏覽器 + Node 皆可用，供測試）
 *   §2 Storage helpers
 *   §3 Tab navigation
 *   §4 Use of English quiz engine
 *   §5 Writing (timer + drafts)
 *   §6 Speaking
 *   §7 字彙卡 (Leitner)
 *   §8 進度
 *   §9 Init（全部 try/catch 防護，單一錯誤不會癱瘓其他區塊）
 * ============================================================ */

/* ================= §1 Pure logic ================= */

/** 正規化答案：小寫、去標點、壓縮空白 */
function normalizeAnswer(s) {
  return String(s == null ? "" : s)
    .toLowerCase()
    .replace(/[’‘']/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** 使用者輸入是否符合任一可接受答案 */
function matchAnswer(input, acceptedList) {
  var n = normalizeAnswer(input);
  if (!n) return false;
  for (var i = 0; i < acceptedList.length; i++) {
    if (normalizeAnswer(acceptedList[i]) === n) return true;
  }
  return false;
}

/** 字數統計 */
function countWords(s) {
  var t = String(s == null ? "" : s).trim();
  if (!t) return 0;
  return t.split(/\s+/).length;
}

/** Leitner 間隔（天）：盒1 永遠到期、盒2 每 2 天、盒3 每 5 天 */
var LEITNER_INTERVAL_DAYS = { 1: 0, 2: 2, 3: 5 };
var DAY_MS = 24 * 60 * 60 * 1000;

/** 卡片是否到期。card = {box, last(ms epoch)} */
function leitnerIsDue(card, nowMs) {
  var box = card && card.box ? card.box : 1;
  if (box <= 1) return true;
  var last = card.last || 0;
  var days = LEITNER_INTERVAL_DAYS[box];
  if (days === undefined) days = 0;
  return (nowMs - last) >= days * DAY_MS;
}

/** 複習後的新狀態。known=true → 升盒(最多3)；false → 回盒1 */
function leitnerReview(card, known, nowMs) {
  var box = card && card.box ? card.box : 1;
  var newBox = known ? Math.min(3, box + 1) : 1;
  return { box: newBox, last: nowMs };
}

/** Fisher–Yates 洗牌（回傳新陣列） */
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/* ---------- Daily mission：種子化亂數與組卷（純函式，供測試；函式名沿用 d25 前綴） ---------- */

/** 字串種子 → 決定性亂數產生器（mulberry32 變形）。同種子必產生同序列。 */
function d25Rng(seedStr) {
  var h = 1779033703;
  for (var i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

/** 由 arr 決定性挑出 n 個不重複元素（不改動原陣列） */
function d25Pick(arr, n, rng) {
  var a = arr.slice();
  var out = [];
  while (out.length < n && a.length) {
    out.push(a.splice(Math.floor(rng() * a.length), 1)[0]);
  }
  return out;
}

/** 每日任務長度：可選 10 / 15 / 20 題（2026-08-24 加）。
 *  每種長度一張配額表：UoE 四個 part ＋ 閱讀 rmc 題（psg 篇文章）＋ 聽力 lis 題，
 *  另混入至多 due 題到期錯題湊滿 size；spell = 收尾拼寫字數。
 *  高級數（CAE/CPE）一題的閱讀量是低級數的好幾倍，所以短版**先砍文章篇數**（3→2→1）：
 *  時間主要花在讀長文，不是答題本身。 */
var D25_SIZES = [10, 15, 20];
var D25_QUOTAS = {
  10: { part1: 1, part2: 1, part3: 1, part4: 1, rmc: 3, lis: 2, psg: 1, due: 1, spell: 5 },
  15: { part1: 2, part2: 1, part3: 2, part4: 1, rmc: 4, lis: 3, psg: 2, due: 2, spell: 8 },
  20: { part1: 2, part2: 2, part3: 2, part4: 2, rmc: 6, lis: 4, psg: 3, due: 2, spell: 10 }
};

/** 取合法的任務長度（不認得的值一律回 20，舊紀錄與壞掉的設定都安全） */
function d25Quota(size) { return D25_QUOTAS[size] || D25_QUOTAS[20]; }

/** 依長度給出類別配額（只含六個題型 key，供組卷用）。
 *  弱點加權：rated = [{key,n,acc}]；答過 ≥10 題的類別中，正確率最低 +delta、最高 −delta（不低於 1）；
 *  差距 <10 個百分點就不加權（與 K12Review 同規則）。短版配額小，delta 收斂成 1 免得直接歸零。 */
function d25Counts(rated, size) {
  var q = d25Quota(size);
  var counts = { part1: q.part1, part2: q.part2, part3: q.part3, part4: q.part4, rmc: q.rmc, lis: q.lis };
  var delta = q.rmc >= 6 ? 2 : 1;
  var eligible = (rated || []).filter(function (r) { return r.n >= 10 && counts[r.key] != null; });
  if (eligible.length >= 2) {
    eligible.sort(function (a, b) { return a.acc - b.acc; });
    var weak = eligible[0], strong = eligible[eligible.length - 1];
    if (strong.acc - weak.acc >= 10) {
      counts[weak.key] += delta;
      counts[strong.key] = Math.max(1, counts[strong.key] - delta);
    }
  }
  counts.psg = q.psg;
  return counts;
}

/** 依 gid 把條目分塊（同一篇閱讀/同一段聽力共用 gid，無 gid 者自成一塊），
 *  決定性洗牌「塊」的順序後攤平：同一篇文章／同一段錄音的題目永遠連續出現。 */
function d25Blocks(entries, rng) {
  var blocks = [], byGid = {};
  entries.forEach(function (e) {
    if (e.gid) {
      if (!byGid[e.gid]) { byGid[e.gid] = []; blocks.push(byGid[e.gid]); }
      byGid[e.gid].push(e);
    } else blocks.push([e]);
  });
  var out = [];
  d25Pick(blocks, blocks.length, rng).forEach(function (b) {
    b.forEach(function (e) { out.push(e); });
  });
  return out;
}


/* ---- Reading 防「背答案、不看文章」（2026-08-25 Tony 提問後加）----
   1) 每次作答前把選項重新排列，答案索引跟著搬 —— 同一組再做一次，答案不會還在原位
      （True/False/Not Given 的三個選項有固定意義、Multiple matching 的解析會提到段落字母，
       這兩種改成打散題目順序）
   2) mc / tfng 題組最後追加一題 Evidence check：四個選項全是本文的句子，不回文章挑不出來 */

function rdPrepareSet(type, set) {
  var s = JSON.parse(JSON.stringify(set));
  if (type === "mc") {
    s.questions.forEach(function (q) {
      var order = shuffle(q.options.map(function (_, i) { return i; }));
      var opts = order.map(function (i) { return q.options[i]; });
      q.answer = order.indexOf(q.answer);
      q.options = opts;
    });
  } else if (type === "head" || type === "gap") {
    var ord = shuffle(s.options.map(function (_, i) { return i; }));
    var newOpts = ord.map(function (i) { return s.options[i]; });
    if (type === "gap") {
      s.answers = s.answers.map(function (a) { return ord.indexOf(a); });
    } else {
      s.questions.forEach(function (q) { q.answer = ord.indexOf(q.answer); });
    }
    s.options = newOpts;
  } else if (type === "tfng" || type === "match") {
    s.questions = shuffle(s.questions);
  }
  return s;
}

function rdSentences(text) {
  return String(text || "").split(/\n+/).join(" ").split(/(?<=[.!?])\s+/)
    .map(function (x) { return x.trim(); })
    .filter(function (x) { return x.length >= 40 && x.length <= 220; });
}

/* 解析裡常引用原文（'...'），把那句話在文章裡找回來 */
function rdEvidenceSentence(set, q) {
  var flat = String(set && set.text || "").replace(/\s+/g, " ");
  var quotes = String(q && q.explanation || "").match(/['"\u201c\u201d\u2018\u2019][^'"\u201c\u201d\u2018\u2019]{20,}['"\u201c\u201d\u2018\u2019]/g) || [];
  var sents = null;
  for (var i = 0; i < quotes.length; i++) {
    var key = quotes[i].slice(1, -1).trim().slice(0, 25);
    if (key.length < 20 || flat.indexOf(key) < 0) continue;
    sents = sents || rdSentences(set.text);
    for (var k = 0; k < sents.length; k++) if (sents[k].indexOf(key) >= 0) return sents[k];
  }
  return null;
}

function rdEvidenceQuestion(set, rand) {
  if (!set || !set.text || !Array.isArray(set.questions)) return null;
  var sents = rdSentences(set.text);
  if (sents.length < 4) return null;
  var cands = [];
  set.questions.forEach(function (q) {
    var ev = rdEvidenceSentence(set, q);
    if (ev) cands.push({ q: q, ev: ev });
  });
  if (!cands.length) return null;
  var r = rand || Math.random;
  var pick = cands[Math.floor(r() * cands.length)];
  var pool = sents.filter(function (x) { return x !== pick.ev; });
  if (pool.length < 3) return null;
  var opts = shuffle(shuffle(pool).slice(0, 3).concat([pick.ev]));
  return {
    q: 'Evidence check \u2014 which sentence in the text supports the answer to: "' + pick.q.q + '"',
    options: opts,
    answer: opts.indexOf(pick.ev),
    explanation: 'The text says: "' + pick.ev + '" \u2014 ' + (pick.q.explanation || ""),
    evidence: true
  };
}

/* 光靠 voice.lang 不夠：部分瀏覽器只回報 "en"，得靠聲音名稱補判。
 * 這兩組名字是各平台內建英式／美式聲音的常見命名。 */
var GB_NAME = /\b(gb|uk|british|england)\b|daniel|hazel|george|serena|kate|oliver|libby|sonia|ryan|arthur|martha/i;
var US_NAME = /\b(us|usa|american)\b|samantha|alex|david|zira|mark|aria|guy|jenny|nova|allison/i;

/* 從瀏覽器給的聲音清單挑兩個（對話題要兩個講者）。want 為 "en-GB" 或 "en-US"。
 * matched=false 代表裝置上根本沒有該口音的聲音，播出來會是別的腔調，UI 必須明講，
 * 不能像舊版那樣靜默降級成美式。 */
function lsPickVoices(voices, want) {
  want = want === "en-US" ? "en-US" : "en-GB";
  var all = (voices || []).filter(function (v) {
    return /^en(-|_)/i.test(v.lang || "") || v.lang === "en";
  });
  var wantRe = want === "en-US" ? US_NAME : GB_NAME;
  var otherRe = want === "en-US" ? GB_NAME : US_NAME;
  function langHit(v) { return String(v.lang || "").replace("_", "-").toUpperCase() === want.toUpperCase(); }
  var byLang = all.filter(langHit);
  var byName = all.filter(function (v) { return !langHit(v) && wantRe.test(v.lang + " " + v.name); });
  var pool = byLang.concat(byName);
  var matched = pool.length > 0;
  if (!matched) {
    /* 挑不到想要的口音時，至少避開明確屬於另一個口音的聲音 */
    pool = all.filter(function (v) { return !otherRe.test(v.lang + " " + v.name); }).concat(all);
  }
  return { a: pool[0] || null, b: pool[1] || pool[0] || null, lang: want, matched: matched };
}

/* Node export（測試用） */
if (typeof module !== 'undefined') {
  module.exports = {
    normalizeAnswer: normalizeAnswer,
    matchAnswer: matchAnswer,
    countWords: countWords,
    leitnerIsDue: leitnerIsDue,
    leitnerReview: leitnerReview,
    shuffle: shuffle,
    d25Rng: d25Rng,
    d25Pick: d25Pick,
    d25Counts: d25Counts,
    d25Quota: d25Quota,
    D25_SIZES: D25_SIZES,
    d25Blocks: d25Blocks,
    rdPrepareSet: rdPrepareSet,
    rdSentences: rdSentences,
    rdEvidenceSentence: rdEvidenceSentence,
    rdEvidenceQuestion: rdEvidenceQuestion,
    lsPickVoices: lsPickVoices
  };
}

/* ================= 瀏覽器端（Node 環境跳過） ================= */
if (typeof document !== 'undefined') {
(function () {
  "use strict";

  /* ================= §2 Storage helpers ================= */
  function loadJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function saveJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // 強制登入（2026-08-11 Tony 要求，比照 K12Review）：未登入不能開始練習，紀錄才一定會同步。
  // 只擋「開始」的入口，不擋做到一半的人（token 一小時過期，重新整理會 auto_select 自動續登）。
  var loginToastTimer = null;
  function loginToast(msg) {
    var t = $("login-toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "login-toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(loginToastTimer);
    loginToastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }
  function needLogin() {
    if (!window.CloudSync || !CloudSync.promptLogin) return false;  // sync.js 沒載入（本機開發）不擋
    if (CloudSync.signedIn()) return false;
    loginToast("Please sign in first (top right) so your progress syncs to the cloud ☁️");
    CloudSync.promptLogin();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return true;
  }

  /* ---- 級數相關狀態（CPEApp.init(level) 設定） ---- */
  var LEVEL = "cpe";
  var CFG = {           // 預設 = CPE；init 時會被 window.LEVELS[level] 覆蓋
    timerMin: 45,
    wordGuide: "",
    p4min: 3, p4max: 8,
    spSecs: 120, spLabel: ""
  };
  var K_STATS = "cpe.uoe_stats";
  var K_VOCAB = "cpe.vocab_state";
  var K_DRAFT = "cpe.draft_";   // + prompt id

  function setLevel(level) {
    LEVEL = level || "cpe";
    var levels = (typeof window !== "undefined" && window.LEVELS) || {};
    var cfg = levels[LEVEL];
    if (cfg) CFG = cfg;
    K_STATS = LEVEL + ".uoe_stats";
    K_VOCAB = LEVEL + ".vocab_state";
    K_DRAFT = LEVEL + ".draft_";
    if (LEVEL === "cpe") migrateLegacyKeys();
  }

  /* 舊版未加級數前綴的 key（cpe_uoe_stats 等）一次性搬到 cpe.* */
  function migrateLegacyKeys() {
    try {
      var map = { "cpe_uoe_stats": "cpe.uoe_stats", "cpe_vocab_state": "cpe.vocab_state" };
      Object.keys(map).forEach(function (oldK) {
        var v = localStorage.getItem(oldK);
        if (v !== null && localStorage.getItem(map[oldK]) === null) {
          localStorage.setItem(map[oldK], v);
        }
      });
      var draftKeys = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("cpe_draft_") === 0) draftKeys.push(k);
      }
      draftKeys.forEach(function (oldK) {
        var newK = "cpe.draft_" + oldK.slice("cpe_draft_".length);
        var v = localStorage.getItem(oldK);
        if (v !== null && localStorage.getItem(newK) === null) {
          localStorage.setItem(newK, v);
        }
      });
    } catch (e) {}
  }

  /* ================= §3 Tab navigation ================= */
  function initTabs() {
    var btns = document.querySelectorAll(".tab-btn");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".tab-btn").forEach(function (b) { b.classList.remove("active"); });
        document.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
        btn.classList.add("active");
        var panel = $(btn.dataset.tab);
        if (panel) panel.classList.add("active");
        try { lsStopAudio(); } catch (e) {}
        if (btn.dataset.tab === "tab-progress") { try { renderProgress(); } catch (e) {} }
        if (btn.dataset.tab === "tab-daily") { try { renderDaily(); } catch (e) {} }
        if (btn.dataset.tab === "tab-review") { try { rvRenderHome(); } catch (e) {} }
        if (btn.dataset.tab === "tab-vocab") { try { needLogin(); renderVocabStatus(); } catch (e) {} }
      });
    });
  }

  /* ================= §4 Use of English 模擬考引擎 ================= */
  var PART_LABELS = {
    part1: "Part 1 · Multiple-choice cloze",
    part2: "Part 2 · Open cloze",
    part3: "Part 3 · Word formation",
    part4: "Part 4 · Key word transformations"
  };
  /* 真實考試每個 part 的題數；P4 每題 2 分 */
  var EXAM_SIZE = { part1: 8, part2: 8, part3: 8, part4: 6 };
  var PART_POINTS = { part1: 1, part2: 1, part3: 1, part4: 2 };
  var PARTS = ["part1", "part2", "part3", "part4"];
  var K_MOCK = function () { return LEVEL + ".mock_history"; };

  /* mode: 'single' = 單一 part；'full' = P1–P4 全卷 */
  var quiz = { mode: "single", part: null, items: [], idx: 0, answers: [], times: [], guessed: [], qStart: 0 };

  /* ---- 每日活動 / rolling 精熟度 / streak 儲存 ---- */
  var K_ROLL = function () { return LEVEL + ".roll"; };
  var K_ACT = function () { return LEVEL + ".activity"; };
  var K_STREAK = function () { return LEVEL + ".streak"; };
  var ROLL_WINDOW = 30;

  function todayStr(ms) {
    var d = ms ? new Date(ms) : new Date();
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
  }

  function rollPush(key, isCorrect) {
    var roll = loadJSON(K_ROLL(), {});
    if (!roll[key]) roll[key] = [];
    roll[key].push(isCorrect ? 1 : 0);
    if (roll[key].length > ROLL_WINDOW) roll[key] = roll[key].slice(-ROLL_WINDOW);
    saveJSON(K_ROLL(), roll);
  }
  /* 近 30 題精熟度：{n, acc}；精熟 = n>=30 且 acc>=90 */
  function masteryOf(key) {
    var arr = loadJSON(K_ROLL(), {})[key] || [];
    var ok = arr.reduce(function (a, b) { return a + b; }, 0);
    return { n: arr.length, acc: arr.length ? Math.round(100 * ok / arr.length) : 0 };
  }
  function isMastered(key) {
    var m = masteryOf(key);
    return m.n >= ROLL_WINDOW && m.acc >= 90;
  }

  /* field: "a"=answered, "c"=correct, "v"=vocab review */
  function actBump(field, n) {
    var act = loadJSON(K_ACT(), {});
    var d = todayStr();
    if (!act[d]) act[d] = { a: 0, c: 0, v: 0 };
    act[d][field] = (act[d][field] || 0) + (n || 1);
    var days = Object.keys(act).sort();
    while (days.length > 60) { delete act[days.shift()]; }
    saveJSON(K_ACT(), act);
  }

  function recordResult(part, isCorrect) {
    var stats = loadJSON(K_STATS, {});
    if (!stats[part]) stats[part] = { attempted: 0, correct: 0, last: 0 };
    stats[part].attempted += 1;
    if (isCorrect) stats[part].correct += 1;
    stats[part].last = Date.now();
    saveJSON(K_STATS, stats);
    try {
      rollPush(part, isCorrect);
      actBump("a");
      if (isCorrect) actBump("c");
    } catch (e) {}
  }

  function drawItems(part) {
    return shuffle(QUESTIONS[part]).slice(0, EXAM_SIZE[part]).map(function (q) {
      return { part: part, q: q };
    });
  }

  function startMock(part) {
    quiz.mode = "single";
    quiz.part = part;
    quiz.items = drawItems(part);
    beginExam();
  }

  function startFullMock() {
    quiz.mode = "full";
    quiz.part = null;
    quiz.items = [];
    PARTS.forEach(function (p) { quiz.items = quiz.items.concat(drawItems(p)); });
    beginExam();
  }

  function beginExam() {
    if (needLogin()) return;
    quiz.idx = 0;
    quiz.answers = [];
    quiz.times = [];
    quiz.guessed = [];
    $("uoe-picker").classList.add("hidden");
    $("uoe-summary").classList.add("hidden");
    $("uoe-quiz").classList.remove("hidden");
    renderQuestion();
  }

  function renderQuestion() {
    var item = quiz.items[quiz.idx];
    $("uoe-progress").textContent = PART_LABELS[item.part].split("·")[0].trim() +
      "  Question " + (quiz.idx + 1) + " / " + quiz.items.length;
    renderUoeItemInto(item, $("uoe-question"), $("uoe-answer-area"), submitAnswer);
    addGuessToggle($("uoe-answer-area"));
    addSkipButton($("uoe-answer-area"));
    if (quiz.idx > 0) addUoePrevButton($("uoe-answer-area"));
    quiz.qStart = Date.now();
  }

  /* 考試中的「上一題」：唯讀回顧已作答題目，只顯示自己的答案（未交卷前不揭示正解） */
  function addUoePrevButton(container) {
    var b = document.createElement("button");
    b.className = "ghost-btn skip-btn";
    b.textContent = "← Previous (view only)";
    b.addEventListener("click", function () { showUoeReview(quiz.idx - 1); });
    container.appendChild(b);
  }

  function showUoeReview(j) {
    var item = quiz.items[j];
    $("uoe-progress").textContent = "🔎 Reviewing question " + (j + 1) + " / " + quiz.items.length + " (read-only)";
    var aBox = $("uoe-answer-area");
    renderUoeItemInto(item, $("uoe-question"), aBox, function () {});
    aBox.querySelectorAll("button, input").forEach(function (el) { el.disabled = true; });
    if (item.part === "part1" && typeof quiz.answers[j] === "number") {
      var opt = aBox.querySelectorAll(".option-btn")[quiz.answers[j]];
      if (opt) opt.classList.add("selected");
    }
    var note = document.createElement("p");
    note.className = "hint";
    note.textContent = "Your answer: " + userAnsText(item, quiz.answers[j]) +
      " — answers are locked; scoring comes after you finish the mock.";
    aBox.appendChild(note);
    var nav = document.createElement("div");
    if (j > 0) {
      var pb = document.createElement("button");
      pb.className = "ghost-btn small";
      pb.textContent = "← Previous";
      pb.addEventListener("click", function () { showUoeReview(j - 1); });
      nav.appendChild(pb);
    }
    var rb = document.createElement("button");
    rb.className = "primary-btn";
    rb.textContent = "Return →";
    rb.addEventListener("click", function () {
      if (j + 1 < quiz.idx) showUoeReview(j + 1);
      else renderQuestion();
    });
    nav.appendChild(rb);
    aBox.appendChild(nav);
    window.scrollTo(0, 0);
  }

  /* ---- 信心標記「🤔 I'm guessing」（2026-08-24 起全站題型都有）----
   * 按下 = 這題是猜的。猜對照樣算分，但會進錯題本、而且不讓 Leitner 盒升級（抓「假會」）。
   * store[key] 存旗標：多題一頁的（閱讀／聽力／速讀）記在各自的 guessed 陣列，
   * 逐題作答的（模擬考／每日任務／Review Test／錯題練習）記在 quiz.guessed 或 guessOne。 */
  function guessBtn(store, key, small) {
    var g = document.createElement("button");
    g.type = "button";
    g.className = "ghost-btn guess-btn" + (small ? " small" : "");
    g.textContent = "🤔 I'm guessing";
    g.classList.toggle("selected", !!store[key]);
    g.setAttribute("aria-pressed", store[key] ? "true" : "false");
    g.addEventListener("click", function () {
      store[key] = !store[key];
      g.classList.toggle("selected", !!store[key]);
      g.setAttribute("aria-pressed", store[key] ? "true" : "false");
    });
    return g;
  }

  /* ---- 事後補標「🤔 I was guessing」（2026-08-24 Tony 要求）----
   * 交卷後的檢討清單上，每題都給一顆補標按鈕：作答當下忘了按的，看到答案時還能補，
   * 補了就收進錯題本（已經在本子裡的會被重設回盒 1，等於重新排隊複習）。
   * 只在「這題還沒進錯題本」時出現 —— 答錯的、作答時就標過的不會重複給。 */
  var retroSeq = 0, retroMap = {};
  function retroGuessHtml(kind, payload, alreadyInBook) {
    if (alreadyInBook || !kind || !payload) return "";
    var id = "rg" + (++retroSeq);
    retroMap[id] = { kind: kind, payload: payload };
    return '<button type="button" class="ghost-btn small retro-guess" data-retro="' + id +
      '">🤔 I was guessing</button>';
  }
  function initRetroGuess() {
    document.addEventListener("click", function (ev) {
      var b = ev.target && ev.target.closest ? ev.target.closest(".retro-guess") : null;
      if (!b || b.disabled) return;
      var it = retroMap[b.getAttribute("data-retro")];
      if (!it) return;
      try { mbAdd(it.kind, it.payload); } catch (e) {}
      b.disabled = true;
      b.classList.add("selected");
      b.textContent = "🤔 added to the mistake book";
    });
  }

  /* 逐題作答共用的旗標：每畫一題就歸零，作答當下讀值（guessTaken） */
  var guessOne = { on: false };
  function addGuessOne(container) {
    guessOne.on = false;
    if (container) container.appendChild(guessBtn(guessOne, "on"));
  }
  function guessTaken() { return !!guessOne.on; }

  function addGuessToggle(container) {
    container.appendChild(guessBtn(quiz.guessed, quiz.idx));
  }

  function renderUoeItemInto(item, qBox, aBox, onAnswer) {
    var q = item.q, part = item.part;
    aBox.innerHTML = "";
    /* retrigger entrance animation */
    qBox.classList.remove("q-anim");
    void qBox.offsetWidth;
    qBox.classList.add("q-anim");

    if (part === "part1") {
      qBox.innerHTML = "<p>" + esc(q.text) + "</p>";
      var letters = ["A", "B", "C", "D"];
      q.options.forEach(function (opt, i) {
        var b = document.createElement("button");
        b.className = "option-btn";
        b.innerHTML = "<strong>" + letters[i] + "</strong>&nbsp; " + esc(opt);
        b.addEventListener("click", function () { onAnswer(i); });
        aBox.appendChild(b);
      });
    } else if (part === "part2" || part === "part3") {
      var html = "<p>" + esc(q.text) + "</p>";
      if (part === "part3") html += '<p>Stem word (change the form): <span class="stem-word">' + esc(q.stem) + "</span></p>";
      qBox.innerHTML = html;
      buildTypedInput(aBox, onAnswer);
    } else { // part4
      qBox.innerHTML =
        '<p class="original">' + esc(q.original) + "</p>" +
        '<p>Key word: <span class="kw">' + esc(q.keyword) + "</span> (must be used; " + CFG.p4min + "–" + CFG.p4max + " words in total)</p>" +
        "<p>" + esc(q.gapped) + "</p>";
      buildTypedInput(aBox, onAnswer);
    }
  }

  function buildTypedInput(container, onAnswer) {
    var input = document.createElement("input");
    input.type = "text";
    input.className = "answer-input";
    input.autocapitalize = "off";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.placeholder = "Type your answer…";
    var btn = document.createElement("button");
    btn.className = "primary-btn";
    btn.textContent = "Submit";
    var submit = function () {
      if (!input.value.trim()) return;
      input.disabled = true;
      btn.disabled = true;
      onAnswer(input.value);
    };
    btn.addEventListener("click", submit);
    /* preventDefault：交卷後焦點會移到「下一題」，不擋掉的話同一下 Enter 的 keypress
     * 會落在那顆按鈕上直接觸發，回饋一閃而過（2026-08-08 Tony 桌機回報） */
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); submit(); } });
    container.appendChild(input);
    container.appendChild(btn);
    input.focus();
  }

  function addSkipButton(container) {
    var skip = document.createElement("button");
    skip.className = "ghost-btn skip-btn";
    skip.textContent = "Skip this question";
    skip.addEventListener("click", function () { submitAnswer(null); });
    container.appendChild(skip);
  }

  /* 考試中不給回饋：記錄作答後直接下一題，最後才評分 */
  function submitAnswer(val) {
    quiz.answers.push(val);
    quiz.times[quiz.idx] = Math.round((Date.now() - quiz.qStart) / 1000);
    quiz.idx += 1;
    if (quiz.idx >= quiz.items.length) {
      gradeExam();
    } else {
      renderQuestion();
    }
  }

  function gradeItem(item, userAns) {
    var q = item.q;
    if (item.part === "part1") {
      return typeof userAns === "number" && userAns === q.answer;
    }
    return userAns !== null && matchAnswer(userAns, q.answers);
  }

  function userAnsText(item, userAns) {
    if (userAns === null || userAns === undefined) return "(not answered)";
    if (item.part === "part1") {
      return ["A", "B", "C", "D"][userAns] + ". " + item.q.options[userAns];
    }
    return String(userAns);
  }

  function correctAnsText(item) {
    var q = item.q;
    if (item.part === "part1") return ["A", "B", "C", "D"][q.answer] + ". " + q.options[q.answer];
    if (item.part === "part4") return q.model;
    return q.answers[0];
  }

  function verdictFor(pct) {
    if (pct >= 75) return { cls: "ok", text: "✅ Pass — above the pass mark. Keep it up!" };
    if (pct >= 60) return { cls: "mid", text: "🟡 Borderline pass — just over the pass mark (~60%). Work on your weak spots." };
    return { cls: "bad", text: "❌ Below pass mark — review the material and try again." };
  }

  function gradeExam() {
    var score = 0, max = 0;
    var byPart = {};
    var reviewHtml = "";
    var curPart = null;

    quiz.items.forEach(function (item, i) {
      var pts = PART_POINTS[item.part];
      var isCorrect = gradeItem(item, quiz.answers[i]);
      max += pts;
      if (isCorrect) score += pts;
      recordResult(item.part, isCorrect);
      if (!isCorrect || quiz.guessed[i]) { try { mbAdd("uoe", { part: item.part, q: item.q }); } catch (e) {} }
      if (!byPart[item.part]) byPart[item.part] = { score: 0, max: 0 };
      byPart[item.part].max += pts;
      if (isCorrect) byPart[item.part].score += pts;

      if (item.part !== curPart) {
        curPart = item.part;
        reviewHtml += '<h3 class="review-part">' + esc(PART_LABELS[curPart]) + "</h3>";
      }
      var q = item.q;
      var stemHtml;
      if (item.part === "part4") {
        stemHtml = '<p class="original">' + esc(q.original) + "</p><p>" + esc(q.gapped) +
          ' <span class="kw">[' + esc(q.keyword) + "]</span></p>";
      } else {
        stemHtml = "<p>" + esc(q.text) + "</p>";
        if (item.part === "part3") stemHtml += '<p>Stem word: <span class="stem-word">' + esc(q.stem) + "</span></p>";
      }
      reviewHtml +=
        '<div class="review-item ' + (isCorrect ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (isCorrect ? "✓" : "✗") + " Question " + (i + 1) +
        (quiz.guessed[i] ? ' <span class="guess-tag">🤔 guessed' + (isCorrect ? " — sent to mistake book" : "") + "</span>" : "") +
        (pts > 1 ? '<span class="pts">' + (isCorrect ? pts : 0) + "/" + pts + " pts</span>" : "") + "</div>" +
        stemHtml +
        '<div class="review-ans"><strong>Your answer: </strong>' + esc(userAnsText(item, quiz.answers[i])) + "</div>" +
        '<div class="review-ans"><strong>Correct answer: </strong>' + esc(correctAnsText(item)) + "</div>" +
        '<div class="expl">' + esc(q.explanation) + "</div>" +
        retroGuessHtml("uoe", { part: item.part, q: item.q }, !isCorrect || quiz.guessed[i]) +
        "</div>";
    });

    var pct = Math.round(100 * score / max);
    var v = verdictFor(pct);

    /* 全卷模式：加各 part 小計 */
    var subHtml = "";
    if (quiz.mode === "full") {
      subHtml = '<div class="part-subscores">';
      PARTS.forEach(function (p) {
        var s = byPart[p];
        if (s) subHtml += "<span>" + esc(PART_LABELS[p].split("·")[0].trim()) + " " + s.score + "/" + s.max + "</span>";
      });
      subHtml += "</div>";
    }

    $("uoe-quiz").classList.add("hidden");
    $("uoe-summary").classList.remove("hidden");
    $("uoe-summary-title").textContent = quiz.mode === "full"
      ? "Full mock results (Use of English)"
      : PART_LABELS[quiz.part] + " — Mock results";
    $("uoe-score").textContent = score + " / " + max + " (" + pct + "%)";
    $("uoe-verdict").className = "verdict-text " + v.cls;
    $("uoe-verdict").innerHTML = esc(v.text) + subHtml;
    $("uoe-review").innerHTML = reviewHtml;

    var wrongCount = 0;
    quiz.items.forEach(function (item, i) { if (!gradeItem(item, quiz.answers[i])) wrongCount++; });
    var db = $("uoe-drill-btn");
    db.classList.toggle("hidden", wrongCount === 0);
    db.textContent = "Practice mistakes (" + wrongCount + ")";
    window.scrollTo(0, 0);

    var totalSecs = quiz.times.reduce(function (a, b) { return a + (b || 0); }, 0);
    renderPaceReport();
    saveMockRecord(quiz.mode, quiz.part, score, max, pct, totalSecs);
  }

  /* ---- 考試節奏：每題耗時 vs 建議配速 ---- */
  var TIME_TARGET = { part1: 45, part2: 60, part3: 60, part4: 90 };

  function fmtSecs(s) {
    var m = Math.floor(s / 60), r = s % 60;
    return m ? m + "m " + (r < 10 ? "0" : "") + r + "s" : r + "s";
  }

  function renderPaceReport() {
    var el = $("uoe-pace");
    if (!el) return;
    var byPart = {};
    quiz.items.forEach(function (item, i) {
      if (!byPart[item.part]) byPart[item.part] = { secs: 0, n: 0 };
      byPart[item.part].secs += quiz.times[i] || 0;
      byPart[item.part].n += 1;
    });
    var total = quiz.times.reduce(function (a, b) { return a + (b || 0); }, 0);
    var target = quiz.items.reduce(function (a, item) { return a + TIME_TARGET[item.part]; }, 0);
    var html = "<h3>Pacing</h3><p>Total time: <strong>" + fmtSecs(total) + "</strong> · recommended ≤ " + fmtSecs(target) +
      (total <= target ? ' <span class="ok">✓ on pace</span>' : ' <span class="bad">⚠ over pace</span>') + "</p>";
    PARTS.forEach(function (p) {
      var s = byPart[p];
      if (!s) return;
      var avg = Math.round(s.secs / s.n), tgt = TIME_TARGET[p];
      html += barRow(PART_LABELS[p].split("·")[0].trim() + (avg > tgt ? " ⚠" : ""),
        "avg " + avg + "s/question · target " + tgt + "s",
        Math.min(100, Math.round(100 * avg / (tgt * 2))), avg <= tgt);
    });
    var slow = quiz.items.map(function (item, i) { return { i: i, secs: quiz.times[i] || 0 }; })
      .sort(function (a, b) { return b.secs - a.secs; }).slice(0, 3).filter(function (x) { return x.secs > 0; });
    if (slow.length) {
      html += "<p class='hint'>Slowest: " + slow.map(function (x) {
        return "Q" + (x.i + 1) + " (" + fmtSecs(x.secs) + ")";
      }).join(" · ") + "</p>";
    }
    el.innerHTML = html;
    el.classList.remove("hidden");
  }

  function saveMockRecord(mode, part, score, max, pct, secs) {
    var hist = loadJSON(K_MOCK(), []);
    hist.push({
      date: Date.now(),
      mode: mode,
      part: part,
      score: score, max: max, pct: pct,
      secs: secs || 0
    });
    if (hist.length > 50) hist = hist.slice(hist.length - 50);
    saveJSON(K_MOCK(), hist);
  }

  function initUoe() {
    /* 只綁 UoE 選單的按鈕（級數選擇卡也用 .mode-btn，但沒有 data-part） */
    document.querySelectorAll("#uoe-picker .mode-btn[data-part]").forEach(function (b) {
      b.addEventListener("click", function () { startMock(b.dataset.part); });
    });
    $("uoe-full-mock").addEventListener("click", startFullMock);
    $("uoe-retry").addEventListener("click", function () {
      if (quiz.mode === "full") startFullMock(); else startMock(quiz.part);
    });
    $("uoe-back").addEventListener("click", function () {
      if (quiz.idx > 0) { UIDialog.confirm("You haven't submitted yet. Abandon this mock exam?", backToPicker); return; }
      backToPicker();
    });
    $("uoe-home").addEventListener("click", backToPicker);
    $("uoe-drill-btn").addEventListener("click", startUoeDrill);
    $("uoe-drill-quit").addEventListener("click", function () {
      UIDialog.confirm("Quit mistake practice and go back to the results?", function () {
        $("uoe-drill").classList.add("hidden");
        $("uoe-summary").classList.remove("hidden");
      });
    });
    $("uoe-congrats-home").addEventListener("click", backToPicker);
  }
  function backToPicker() {
    $("uoe-quiz").classList.add("hidden");
    $("uoe-summary").classList.add("hidden");
    $("uoe-drill").classList.add("hidden");
    $("uoe-congrats").classList.add("hidden");
    $("uoe-picker").classList.remove("hidden");
  }

  /* ================= §4.7 Mistake drill ================= */
  var drill = null;

  function startDrillGeneric(cfg) {
    if (needLogin()) return;
    drill = cfg;
    drill.queue = cfg.items.slice();
    drill.total = cfg.items.length;
    drill.mastered = 0;
    drill.snaps = [];          // 已作答題目快照（HTML），供「← Previous」唯讀回顧
    drill.answeredState = false;
    $(cfg.summaryId || cfg.prefix + "-summary").classList.add("hidden");
    $(cfg.prefix + "-drill").classList.remove("hidden");
    renderDrillItem();
  }

  function dropConfetti(container) {
    var card = container.querySelector(".congrats-card") || container;
    var colors = ["#e0a458", "#4ade80", "#f87171", "#7aa8ff", "#e879f9", "#facc15"];
    for (var i = 0; i < 28; i++) {
      var s = document.createElement("span");
      s.className = "confetti-piece";
      s.style.left = (Math.random() * 100) + "%";
      s.style.background = colors[i % colors.length];
      s.style.animationDelay = (Math.random() * 0.6).toFixed(2) + "s";
      card.appendChild(s);
      (function (el) { setTimeout(function () { el.remove(); }, 3600); })(s);
    }
  }

  function renderDrillItem() {
    var p = drill.prefix;
    audioStopAll();   // 換題（或收尾）一律先停掉還在播的聽力
    if (!drill.queue.length) {
      $(p + "-drill").classList.add("hidden");
      $(p + "-congrats").classList.remove("hidden");
      $(p + "-congrats-text").textContent = "You have re-answered all " + drill.total +
        " mistake" + (drill.total > 1 ? "s" : "") + " correctly. Great work — keep this momentum going!";
      if (drill.onComplete) drill.onComplete();
      dropConfetti($(p + "-congrats"));
      window.scrollTo(0, 0);
      return;
    }
    $(p + "-drill-progress").textContent = "Mastered " + drill.mastered + " / " + drill.total +
      " · " + drill.queue.length + " in queue";
    var fb = $(p + "-drill-feedback");
    fb.innerHTML = "";
    drill.answeredState = false;
    drill.render(drill.queue[0], drillAnswered);
    addGuessOne($(p + "-drill-area"));   // 每日任務／錯題練習也能標「這題是猜的」
    if (drill.snaps.length) {
      var pb = document.createElement("button");
      pb.className = "ghost-btn small";
      pb.textContent = "← Previous";
      pb.addEventListener("click", function () { drillShowSnap(drill.snaps.length - 1); });
      fb.appendChild(pb);
    }
    window.scrollTo(0, 0);
  }

  /* 唯讀回顧第 j 題快照；「Return →」逐步走回最新狀態（仿 K12Review 上一題機制） */
  function drillShowSnap(j) {
    var p = drill.prefix;
    audioStopAll();
    var area = $(p + "-drill-area"), fb = $(p + "-drill-feedback");
    var s = drill.snaps[j];
    area.innerHTML = '<p class="hint lock-chip">🔎 Reviewing an answered question (read-only)</p>' + s.q;
    fb.innerHTML = s.f;
    area.querySelectorAll("button, input").forEach(function (el) { el.disabled = true; });
    fb.querySelectorAll("button, input").forEach(function (el) { el.disabled = true; });
    var nav = document.createElement("div");
    if (j > 0) {
      var pb = document.createElement("button");
      pb.className = "ghost-btn small";
      pb.textContent = "← Previous";
      pb.addEventListener("click", function () { drillShowSnap(j - 1); });
      nav.appendChild(pb);
    }
    var rb = document.createElement("button");
    rb.className = "primary-btn";
    rb.textContent = "Return →";
    rb.addEventListener("click", function () {
      var lastLive = drill.answeredState ? drill.snaps.length - 1 : drill.snaps.length;
      if (j + 1 < lastLive) drillShowSnap(j + 1);
      else drillReturnLive();
    });
    nav.appendChild(rb);
    fb.appendChild(nav);
    window.scrollTo(0, 0);
  }

  function drillReturnLive() {
    var p = drill.prefix;
    if (!drill.answeredState) { renderDrillItem(); return; }
    // 已作答狀態：還原最後一題快照 + 重掛「下一題」按鈕
    var s = drill.snaps[drill.snaps.length - 1];
    var area = $(p + "-drill-area"), fb = $(p + "-drill-feedback");
    area.innerHTML = s.q;
    fb.innerHTML = s.f;
    area.querySelectorAll("button, input").forEach(function (el) { el.disabled = true; });
    appendDrillNextControls(fb);
    window.scrollTo(0, 0);
  }

  /* 「← Previous」＋「Next question」控制列（drillAnswered 與回顧還原共用；
   *  防亂做的下一題延遲以 drill.nextUnlockAt 記憶，回顧再回來也躲不掉） */
  function appendDrillNextControls(fb) {
    if (drill.snaps.length >= 2) {
      var pv = document.createElement("button");
      pv.className = "ghost-btn small";
      pv.textContent = "← Previous";
      pv.addEventListener("click", function () { drillShowSnap(drill.snaps.length - 2); });
      fb.appendChild(pv);
    }
    var btn = document.createElement("button");
    btn.className = "primary-btn";
    btn.textContent = drill.queue.length ? "Next question" : "Finish";
    btn.addEventListener("click", renderDrillItem);
    var remain = Math.ceil(((drill.nextUnlockAt || 0) - Date.now()) / 1000);
    if (remain > 0) {
      btn.disabled = true;
      var note = document.createElement("p");
      note.className = "hint lock-chip";
      var leftN = remain;
      note.textContent = "🐢 Slow down — read carefully before you answer. Next question in " + leftN + "s…";
      fb.appendChild(note);
      var ivn = setInterval(function () {
        leftN--;
        if (leftN <= 0) { clearInterval(ivn); btn.disabled = false; note.remove(); btn.focus(); return; }
        note.textContent = "🐢 Slow down — read carefully before you answer. Next question in " + leftN + "s…";
      }, 1000);
    }
    fb.appendChild(btn);
    /* 延後 focus：避免觸發交卷的那一次 Enter 按鍵序列順手按到這顆按鈕 */
    setTimeout(function () { if (!btn.disabled) btn.focus(); }, 0);
  }

  function drillAnswered(isCorrect, userText) {
    var p = drill.prefix;
    var item = drill.queue.shift();
    if (isCorrect) drill.mastered++;
    else drill.queue.push(item);
    $(p + "-drill-area").querySelectorAll("button, input").forEach(function (el) { el.disabled = true; });
    $(p + "-drill-progress").textContent = "Mastered " + drill.mastered + " / " + drill.total +
      " · " + drill.queue.length + " in queue";

    var fb = $(p + "-drill-feedback");
    if (isCorrect) {
      fb.innerHTML = '<div class="review-item ok"><div class="review-verdict">✓ Correct' +
        (guessTaken()
          ? ' <span class="guess-tag">🤔 guessed — kept in the mistake book</span></div>' +
            '<div class="review-ans"><strong>Correct answer: </strong>' + esc(drill.correctText(item)) + "</div>" +
            '<div class="expl">' + esc(drill.explText(item)) + "</div>"
          : " — mastered!</div>") +
        "</div>";
    } else {
      fb.innerHTML =
        '<div class="review-item bad">' +
        '<div class="review-verdict">✗ Not quite — this one goes back in the queue</div>' +
        '<div class="review-ans"><strong>Your answer: </strong>' + esc(userText) + "</div>" +
        '<div class="review-ans"><strong>Correct answer: </strong>' + esc(drill.correctText(item)) + "</div>" +
        '<div class="expl">' + esc(drill.explText(item)) + "</div></div>";
    }
    // 快照（未含控制列）供「← Previous」唯讀回顧
    drill.snaps.push({ q: $(p + "-drill-area").innerHTML, f: fb.innerHTML });
    drill.answeredState = true;
    /* 防亂做：連續倉促答錯時，「下一題」按鈕鎖幾秒逼使用者放慢 */
    var delaySecs = drill.nextDelaySecs ? drill.nextDelaySecs() : 0;
    drill.nextUnlockAt = delaySecs ? Date.now() + delaySecs * 1000 : 0;
    appendDrillNextControls(fb);
  }

  function startUoeDrill() {
    var wrong = [];
    quiz.items.forEach(function (item, i) {
      if (!gradeItem(item, quiz.answers[i])) wrong.push(item);
    });
    if (!wrong.length) return;
    startDrillGeneric({
      prefix: "uoe",
      items: wrong,
      render: renderUoeDrillItem,
      correctText: correctAnsText,
      explText: function (item) { return item.q.explanation; }
    });
  }

  function renderUoeDrillItem(item, done) {
    renderUoeItemInto(item, $("uoe-drill-question"), $("uoe-drill-area"), function (val) {
      done(gradeItem(item, val), userAnsText(item, val));
    });
  }

  function startRdDrill() {
    var wrong = [];
    for (var i = 0; i < rdCount(rd.type); i++) {
      if (rd.answers[i] !== rdCorrectAnswer(i)) wrong.push(i);
    }
    if (!wrong.length) return;
    startDrillGeneric({
      prefix: "rd",
      items: wrong,
      render: renderRdDrillItem,
      correctText: function (i) { return rdAnswerText(i, rdCorrectAnswer(i)); },
      explText: rdExplanation
    });
  }

  function renderRdDrillItem(qi, done) {
    var area = $("rd-drill-area");
    area.innerHTML = "";
    var s = rd.set;
    function pick(idx) { done(idx === rdCorrectAnswer(qi), rdAnswerText(qi, idx)); }

    if (rd.type === "mc" || rd.type === "tfng") {
      var passage = document.createElement("div");
      passage.className = "card rd-passage";
      passage.innerHTML = "<h3>" + esc(s.title) + "</h3>" +
        s.text.split(/\n+/).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
      area.appendChild(passage);
      var q = s.questions[qi];
      var card = document.createElement("div");
      card.className = "card rd-q";
      card.innerHTML = "<p><strong>" + (qi + 1) + ".</strong> " + esc(q.q) + "</p>";
      q.options.forEach(function (opt, oi) {
        var b = document.createElement("button");
        b.className = "option-btn";
        b.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
        b.addEventListener("click", function () { b.classList.add("selected"); pick(oi); });
        card.appendChild(b);
      });
      area.appendChild(card);
    } else if (rd.type === "gap") {
      var n = s.answers.length;
      var art = document.createElement("div");
      art.className = "card rd-passage";
      var html = "<h3>" + esc(s.title) + "</h3>";
      s.segments.forEach(function (seg, i) {
        html += "<p>" + esc(seg) + "</p>";
        if (i < n) html += '<p class="gap-slot' + (i === qi ? " current" : "") + '">(' + (i + 1) + ") ____</p>";
      });
      art.innerHTML = html;
      area.appendChild(art);

      var optCard = document.createElement("div");
      optCard.className = "card";
      var ohtml = "<h3>Options (one is not needed)</h3>";
      s.options.forEach(function (opt, oi) {
        ohtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      optCard.innerHTML = ohtml;
      area.appendChild(optCard);

      var pickCard = document.createElement("div");
      pickCard.className = "card";
      pickCard.innerHTML = "<h3>Which option fills gap " + (qi + 1) + "?</h3>";
      pickCard.appendChild(letterRow(s.options.length, pick));
      area.appendChild(pickCard);
    } else if (rd.type === "head") {
      s.sections.forEach(function (sec) {
        var card = document.createElement("div");
        card.className = "card rd-passage";
        card.innerHTML = "<h3>Paragraph " + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(card);
      });
      var hCard = document.createElement("div");
      var hhtml = "<h3>List of headings</h3>";
      s.options.forEach(function (opt, oi) {
        hhtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      hCard.className = "card";
      hCard.innerHTML = hhtml;
      area.appendChild(hCard);
      var hqCard = document.createElement("div");
      hqCard.className = "card";
      hqCard.innerHTML = "<h3>Best heading for…</h3><p class='match-q'><strong>" +
        (qi + 1) + ".</strong> " + esc(s.questions[qi].q) + "</p>";
      hqCard.appendChild(letterRow(s.options.length, pick));
      area.appendChild(hqCard);
    } else { // match
      s.sections.forEach(function (sec) {
        var card = document.createElement("div");
        card.className = "card rd-passage";
        card.innerHTML = "<h3>" + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(card);
      });
      var qCard = document.createElement("div");
      qCard.className = "card";
      qCard.innerHTML = "<h3>Which section mentions…</h3><p class='match-q'><strong>" +
        (qi + 1) + ".</strong> " + esc(s.questions[qi].q) + "</p>";
      qCard.appendChild(letterRow(s.sections.length, pick));
      area.appendChild(qCard);
    }
  }

  /* ================= §4.5 Reading 模擬考 ================= */
  var RD_LABELS = {
    mc: "Multiple choice",
    gap: "Gapped text",
    match: "Multiple matching",
    tfng: "True / False / Not Given (IELTS)",
    head: "Matching headings (IELTS)"
  };
  var LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

  var rd = { type: null, set: null, answers: [] };

  /* 出題優先給做過次數最少的題組，不會一直碰到同幾篇 */
  var RD_SEEN_KEY = "lem-rd-seen";
  function rdSeenMap() {
    try { return JSON.parse(localStorage.getItem(RD_SEEN_KEY) || "{}"); } catch (e) { return {}; }
  }
  function rdPickSet(pool) {
    var seen = rdSeenMap();
    return shuffle(pool.slice()).sort(function (a, b) {
      return (seen[a.id] || 0) - (seen[b.id] || 0);
    })[0];
  }
  function rdMarkSeen(set) {
    var seen = rdSeenMap();
    seen[set.id] = (seen[set.id] || 0) + 1;
    try { localStorage.setItem(RD_SEEN_KEY, JSON.stringify(seen)); } catch (e) {}
  }

  function rdPool(type) {
    var R = window.READING;
    return (R && R[type]) ? R[type] : [];
  }
  function rdCount(type) {
    if (type === "mc") return rd.set.questions.length;
    if (type === "gap") return rd.set.answers.length;
    return rd.set.questions.length; // match
  }

  function startReading(type) {
    if (needLogin()) return;
    var pool = rdPool(type);
    if (!pool.length) { UIDialog.alert("The question bank for this task type hasn't loaded. Please try again later."); return; }
    rd.type = type;
    var chosen = rdPickSet(pool);
    rd.set = rdPrepareSet(type, chosen);   // 選項每次重排（防背位置）
    if (type === "mc" || type === "tfng") {
      var evq = rdEvidenceQuestion(rd.set);   // 追加一題「回文章找證據」
      if (evq) rd.set.questions.push(evq);
    }
    rdMarkSeen(chosen);
    rd.answers = [];
    rd.guessed = [];
    rd.t0 = Date.now();
    $("rd-picker").classList.add("hidden");
    $("rd-summary").classList.add("hidden");
    $("rd-quiz").classList.remove("hidden");
    renderReading();
    updateRdProgress();
    window.scrollTo(0, 0);
  }

  function updateRdProgress() {
    var n = rdCount(rd.type);
    var done = 0;
    for (var i = 0; i < n; i++) if (rd.answers[i] !== undefined && rd.answers[i] !== null) done++;
    $("rd-progress").textContent = RD_LABELS[rd.type].split("·")[0].trim() + "  Answered " + done + " / " + n;
  }

  /* 一列字母按鈕（單選 toggle），onPick(idx) */
  function letterRow(count, onPick) {
    var row = document.createElement("div");
    row.className = "letter-row";
    for (var i = 0; i < count; i++) {
      (function (idx) {
        var b = document.createElement("button");
        b.className = "letter-btn";
        b.textContent = LETTERS[idx];
        b.addEventListener("click", function () {
          row.querySelectorAll(".letter-btn").forEach(function (x) { x.classList.remove("selected"); });
          b.classList.add("selected");
          onPick(idx);
        });
        row.appendChild(b);
      })(i);
    }
    return row;
  }

  function renderReading() {
    var area = $("rd-area");
    area.innerHTML = "";
    var s = rd.set;
    var head = document.createElement("div");
    head.className = "card";
    head.innerHTML = "<h3>" + esc(s.title) + "</h3><p class='hint'>" + esc(RD_LABELS[rd.type]) + "</p>";
    area.appendChild(head);

    if (rd.type === "mc" || rd.type === "tfng") {
      var passage = document.createElement("div");
      passage.className = "card rd-passage";
      passage.innerHTML = s.text.split(/\n+/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
      area.appendChild(passage);
      s.questions.forEach(function (q, qi) {
        var card = document.createElement("div");
        card.className = "card rd-q";
        card.innerHTML = "<p><strong>" + (qi + 1) + ".</strong> " + esc(q.q) + "</p>";
        q.options.forEach(function (opt, oi) {
          var b = document.createElement("button");
          b.className = "option-btn";
          b.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
          b.addEventListener("click", function () {
            card.querySelectorAll(".option-btn").forEach(function (x) { x.classList.remove("selected"); });
            b.classList.add("selected");
            rd.answers[qi] = oi;
            updateRdProgress();
          });
          card.appendChild(b);
        });
        card.appendChild(guessBtn(rd.guessed, qi));
        area.appendChild(card);
      });
    } else if (rd.type === "gap") {
      var n = s.answers.length;
      var art = document.createElement("div");
      art.className = "card rd-passage";
      var html = "";
      s.segments.forEach(function (seg, i) {
        html += "<p>" + esc(seg) + "</p>";
        if (i < n) html += '<p class="gap-slot">(' + (i + 1) + ") ____</p>";
      });
      art.innerHTML = html;
      area.appendChild(art);

      var optCard = document.createElement("div");
      optCard.className = "card";
      var ohtml = "<h3>Options (one is not needed)</h3>";
      s.options.forEach(function (opt, oi) {
        ohtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      optCard.innerHTML = ohtml;
      area.appendChild(optCard);

      var pickCard = document.createElement("div");
      pickCard.className = "card";
      pickCard.innerHTML = "<h3>Your answers</h3>";
      for (var gi = 0; gi < n; gi++) {
        (function (g) {
          var row = document.createElement("div");
          row.className = "gap-answer-row";
          var lab = document.createElement("span");
          lab.className = "gap-answer-label";
          lab.textContent = "Gap " + (g + 1);
          row.appendChild(lab);
          row.appendChild(letterRow(s.options.length, function (idx) {
            rd.answers[g] = idx;
            updateRdProgress();
          }));
          row.appendChild(guessBtn(rd.guessed, g, true));
          pickCard.appendChild(row);
        })(gi);
      }
      area.appendChild(pickCard);
    } else if (rd.type === "head") {
      s.sections.forEach(function (sec) {
        var card = document.createElement("div");
        card.className = "card rd-passage";
        card.innerHTML = "<h3>Paragraph " + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(card);
      });
      var hCard = document.createElement("div");
      hCard.className = "card";
      var hhtml = "<h3>List of headings (" + (s.options.length - s.questions.length) + " are not needed)</h3>";
      s.options.forEach(function (opt, oi) {
        hhtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      hCard.innerHTML = hhtml;
      area.appendChild(hCard);
      var hqCard = document.createElement("div");
      hqCard.className = "card";
      hqCard.innerHTML = "<h3>Choose the best heading for each paragraph</h3>";
      s.questions.forEach(function (q, qi) {
        var wrap = document.createElement("div");
        wrap.className = "gap-answer-row match-row";
        var lab = document.createElement("p");
        lab.className = "match-q";
        lab.innerHTML = "<strong>" + (qi + 1) + ".</strong> " + esc(q.q);
        wrap.appendChild(lab);
        wrap.appendChild(letterRow(s.options.length, function (idx) {
          rd.answers[qi] = idx;
          updateRdProgress();
        }));
        wrap.appendChild(guessBtn(rd.guessed, qi, true));
        hqCard.appendChild(wrap);
      });
      area.appendChild(hqCard);
    } else { // match
      s.sections.forEach(function (sec) {
        var card = document.createElement("div");
        card.className = "card rd-passage";
        card.innerHTML = "<h3>" + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(card);
      });
      var qCard = document.createElement("div");
      qCard.className = "card";
      qCard.innerHTML = "<h3>Which section mentions…</h3>";
      s.questions.forEach(function (q, qi) {
        var wrap = document.createElement("div");
        wrap.className = "gap-answer-row match-row";
        var lab = document.createElement("p");
        lab.className = "match-q";
        lab.innerHTML = "<strong>" + (qi + 1) + ".</strong> " + esc(q.q);
        wrap.appendChild(lab);
        wrap.appendChild(letterRow(s.sections.length, function (idx) {
          rd.answers[qi] = idx;
          updateRdProgress();
        }));
        wrap.appendChild(guessBtn(rd.guessed, qi, true));
        qCard.appendChild(wrap);
      });
      area.appendChild(qCard);
    }
  }

  function rdCorrectAnswer(i) {
    var s = rd.set;
    if (rd.type === "mc") return s.questions[i].answer;
    if (rd.type === "gap") return s.answers[i];
    return s.questions[i].answer;
  }
  function rdQuestionLabel(i) {
    var s = rd.set;
    if (rd.type === "mc") return s.questions[i].q;
    if (rd.type === "gap") return "Gap " + (i + 1);
    return s.questions[i].q;
  }
  function rdAnswerText(i, idx) {
    var s = rd.set;
    if (idx === undefined || idx === null) return "(not answered)";
    if (rd.type === "mc" || rd.type === "tfng") return LETTERS[idx] + ". " + s.questions[i].options[idx];
    if (rd.type === "gap" || rd.type === "head") return LETTERS[idx] + ". " + s.options[idx];
    return LETTERS[idx] + " (" + s.sections[idx].label + ")";
  }
  function rdExplanation(i) {
    var s = rd.set;
    if (rd.type === "gap") return s.explanations[i];
    return s.questions[i].explanation;
  }

  function gradeReading() {
    var n = rdCount(rd.type);
    var unanswered = 0;
    for (var i = 0; i < n; i++) if (rd.answers[i] === undefined || rd.answers[i] === null) unanswered++;
    if (unanswered > 0) { UIDialog.confirm(unanswered + " question(s) still unanswered. Submit anyway?", gradeReadingNow); return; }
    gradeReadingNow();
  }

  /* 第 j 題對應的錯題本條目（交卷收題與事後補標共用，payload 形狀要跟 mbKey/renderMbDrillItemInto 一致） */
  function rdMbEntry(j) {
    var s0 = rd.set;
    if (rd.type === "mc") return { kind: "rmc", payload: { title: s0.title, text: s0.text, q: s0.questions[j] } };
    if (rd.type === "tfng") return { kind: "rtfng", payload: { title: s0.title, text: s0.text, q: s0.questions[j] } };
    if (rd.type === "head") return { kind: "rhead", payload: { title: s0.title, sections: s0.sections, options: s0.options,
      q: s0.questions[j].q, answer: s0.questions[j].answer, explanation: s0.questions[j].explanation } };
    if (rd.type === "gap") return { kind: "rgap", payload: { title: s0.title, segments: s0.segments, options: s0.options,
      gapCount: s0.answers.length, gapIndex: j, answer: s0.answers[j], explanation: s0.explanations[j] } };
    return { kind: "rmatch", payload: { title: s0.title, sections: s0.sections, q: s0.questions[j].q,
      answer: s0.questions[j].answer, explanation: s0.questions[j].explanation } };
  }

  function gradeReadingNow() {
    var n = rdCount(rd.type);
    var score = 0;
    var reviewHtml = "";
    var statKey = "r" + rd.type;
    for (var j = 0; j < n; j++) {
      var isCorrect = rd.answers[j] === rdCorrectAnswer(j);
      var wasGuess = !!(rd.guessed && rd.guessed[j]);
      if (isCorrect) score++;
      recordResult(statKey, isCorrect);
      var mbe = rdMbEntry(j);
      if (!isCorrect || wasGuess) {   // 猜對的也收進錯題本
        try { mbAdd(mbe.kind, mbe.payload); } catch (e) {}
      }
      reviewHtml +=
        '<div class="review-item ' + (isCorrect ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (isCorrect ? "✓" : "✗") + " Question " + (j + 1) +
        (wasGuess ? ' <span class="guess-tag">🤔 guessed' + (isCorrect ? " — sent to mistake book" : "") + "</span>" : "") +
        "</div>" +
        "<p>" + esc(rdQuestionLabel(j)) + "</p>" +
        '<div class="review-ans"><strong>Your answer: </strong>' + esc(rdAnswerText(j, rd.answers[j])) + "</div>" +
        '<div class="review-ans"><strong>Correct answer: </strong>' + esc(rdAnswerText(j, rdCorrectAnswer(j))) + "</div>" +
        '<div class="expl">' + esc(rdExplanation(j)) + "</div>" +
        retroGuessHtml(mbe.kind, mbe.payload, !isCorrect || wasGuess) +
        "</div>";
    }
    var pct = Math.round(100 * score / n);
    var v = verdictFor(pct);
    $("rd-quiz").classList.add("hidden");
    $("rd-summary").classList.remove("hidden");
    $("rd-summary-title").textContent = RD_LABELS[rd.type] + " — Mock results";
    $("rd-score").textContent = score + " / " + n + " (" + pct + "%)";
    $("rd-verdict").className = "verdict-text " + v.cls;
    var rdSecs = rd.t0 ? Math.round((Date.now() - rd.t0) / 1000) : 0;
    var rdTarget = n * 90;
    $("rd-verdict").textContent = v.text +
      (rdSecs ? "  ·  ⏱ " + fmtSecs(rdSecs) + (rdSecs <= rdTarget ? " (on pace)" : " (over the ~" + fmtSecs(rdTarget) + " target)") : "");
    $("rd-review").innerHTML = reviewHtml;

    var wrongCount = n - score;
    var db = $("rd-drill-btn");
    db.classList.toggle("hidden", wrongCount === 0);
    db.textContent = "Practice mistakes (" + wrongCount + ")";
    window.scrollTo(0, 0);
    saveMockRecord("reading", rd.type, score, n, pct, rdSecs);
  }

  function rdBackToPicker() {
    $("rd-quiz").classList.add("hidden");
    $("rd-summary").classList.add("hidden");
    $("rd-drill").classList.add("hidden");
    $("rd-congrats").classList.add("hidden");
    $("rd-picker").classList.remove("hidden");
  }

  function initReading() {
    document.querySelectorAll("#rd-picker .mode-btn[data-rtype]").forEach(function (b) {
      b.addEventListener("click", function () { startReading(b.dataset.rtype); });
    });
    $("rd-submit").addEventListener("click", gradeReading);
    $("rd-retry").addEventListener("click", function () { startReading(rd.type); });
    $("rd-back").addEventListener("click", function () {
      if (rd.answers.length > 0) { UIDialog.confirm("You haven't submitted yet. Abandon this mock exam?", rdBackToPicker); return; }
      rdBackToPicker();
    });
    $("rd-home").addEventListener("click", rdBackToPicker);
    $("rd-drill-btn").addEventListener("click", startRdDrill);
    $("rd-drill-quit").addEventListener("click", function () {
      UIDialog.confirm("Quit mistake practice and go back to the results?", function () {
        $("rd-drill").classList.add("hidden");
        $("rd-summary").classList.remove("hidden");
      });
    });
    $("rd-congrats-home").addEventListener("click", rdBackToPicker);
  }

  /* ================= §4.6 Speed reading（WPM 訓練） ================= */
  var SR_TARGET = { ket: 90, pet: 110, fce: 140, cae: 170, cpe: 200 };
  var SR_QN = 3;
  var sr = { set: null, kind: "rmc", words: 0, t0: 0, ms: 0, qs: [], answers: [], guessed: [] };
  var srTicker = null;

  function srKey() { return LEVEL + ".speedread"; }
  function srTargetWpm() { return SR_TARGET[LEVEL] || 150; }

  function srShow(id) {
    ["rd-picker", "sr-read", "sr-quiz", "sr-result"].forEach(function (x) {
      $(x).classList.toggle("hidden", x !== id);
    });
    window.scrollTo(0, 0);
  }

  function srStopTicker() {
    if (srTicker) { clearInterval(srTicker); srTicker = null; }
  }

  function startSpeed() {
    if (needLogin()) return;
    /* 題源同時記下是哪一種閱讀題（rmc / rtfng），錯或猜的才收得進錯題本 */
    var pool = rdPool("mc").map(function (x) { return { kind: "rmc", set: x }; })
      .concat(rdPool("tfng").map(function (x) { return { kind: "rtfng", set: x }; }));
    if (!pool.length) { UIDialog.alert("The reading banks haven't loaded. Please try again later."); return; }
    var picked = pool[Math.floor(Math.random() * pool.length)];
    sr.set = picked.set;
    sr.kind = picked.kind;
    sr.words = countWords(sr.set.text);
    sr.qs = shuffle(sr.set.questions).slice(0, SR_QN);
    sr.answers = [];
    sr.guessed = [];
    var area = $("sr-passage");
    area.innerHTML = "";
    var head = document.createElement("div");
    head.className = "card";
    head.innerHTML = "<h3>" + esc(sr.set.title) + "</h3><p class='hint'>" + sr.words +
      " words · target ~" + srTargetWpm() + " wpm at this level · you'll answer " + SR_QN + " questions from memory</p>";
    area.appendChild(head);
    var passage = document.createElement("div");
    passage.className = "card rd-passage";
    passage.innerHTML = sr.set.text.split(/\n+/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    area.appendChild(passage);
    sr.t0 = Date.now();
    srStopTicker();
    srTicker = setInterval(function () {
      $("sr-timer").textContent = fmtSecs(Math.round((Date.now() - sr.t0) / 1000));
    }, 500);
    $("sr-timer").textContent = "0:00";
    srShow("sr-read");
  }

  function srFinishReading() {
    sr.ms = Date.now() - sr.t0;
    srStopTicker();
    if (sr.ms < 5000) { UIDialog.alert("That was too quick — actually read the passage first."); sr.t0 = Date.now() - sr.ms; srTicker = setInterval(function () { $("sr-timer").textContent = fmtSecs(Math.round((Date.now() - sr.t0) / 1000)); }, 500); return; }
    var qarea = $("sr-qarea");
    qarea.innerHTML = "";
    sr.qs.forEach(function (q, qi) {
      var card = document.createElement("div");
      card.className = "card rd-q";
      card.innerHTML = "<p><strong>" + (qi + 1) + ".</strong> " + esc(q.q) + "</p>";
      q.options.forEach(function (opt, oi) {
        var b = document.createElement("button");
        b.className = "option-btn";
        b.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
        b.addEventListener("click", function () {
          card.querySelectorAll(".option-btn").forEach(function (x) { x.classList.remove("selected"); });
          b.classList.add("selected");
          sr.answers[qi] = oi;
        });
        card.appendChild(b);
      });
      card.appendChild(guessBtn(sr.guessed, qi));
      qarea.appendChild(card);
    });
    $("sr-quiz-info").textContent = "⏱ " + fmtSecs(Math.round(sr.ms / 1000)) + " · " + sr.words + " words";
    srShow("sr-quiz");
  }

  function srSubmit() {
    for (var i = 0; i < sr.qs.length; i++) {
      if (sr.answers[i] === undefined) { UIDialog.alert("Answer all " + SR_QN + " questions first."); return; }
    }
    var score = 0;
    var reviewHtml = "";
    sr.qs.forEach(function (q, qi) {
      var ok = sr.answers[qi] === q.answer;
      var wasGuess = !!(sr.guessed && sr.guessed[qi]);
      if (ok) score++;
      if (!ok || wasGuess) {   // 答錯或自承用猜的 → 收進錯題本
        try { mbAdd(sr.kind || "rmc", { title: sr.set.title, text: sr.set.text, q: q }); } catch (e) {}
      }
      reviewHtml +=
        '<div class="review-item ' + (ok ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (ok ? "✓" : "✗") + " Question " + (qi + 1) +
        (wasGuess ? ' <span class="guess-tag">🤔 guessed' + (ok ? " — sent to mistake book" : "") + "</span>" : "") +
        "</div>" +
        "<p>" + esc(q.q) + "</p>" +
        '<div class="review-ans"><strong>Your answer: </strong>' + esc(q.options[sr.answers[qi]]) + "</div>" +
        '<div class="review-ans"><strong>Correct answer: </strong>' + esc(q.options[q.answer]) + "</div>" +
        '<div class="expl">' + esc(q.explanation || "") + "</div>" +
        retroGuessHtml(sr.kind || "rmc", { title: sr.set.title, text: sr.set.text, q: q }, !ok || wasGuess) +
        "</div>";
    });
    var wpm = Math.round(sr.words / (sr.ms / 60000));
    var acc = Math.round(100 * score / sr.qs.length);
    var target = srTargetWpm();
    var hist = loadJSON(srKey(), []);
    hist.push({ t: Date.now(), wpm: wpm, acc: acc, words: sr.words });
    while (hist.length > 50) hist.shift();
    saveJSON(srKey(), hist);
    try { actBump("a", sr.qs.length); if (score) actBump("c", score); } catch (e) {}

    var fast = wpm >= target, good = acc >= 67;
    var verdict, cls;
    if (fast && good) { verdict = "🎯 On exam pace with solid comprehension — excellent."; cls = "ok"; }
    else if (fast && !good) { verdict = "💨 Fast, but comprehension dropped. Slow down slightly — speed only counts if you retain the ideas."; cls = "warn"; }
    else if (!fast && good) { verdict = "🐢 Good comprehension — now push the pace. Try previewing questions and reading in phrase chunks."; cls = "warn"; }
    else { verdict = "📚 Keep practising: aim for steady chunks of 3–4 words per eye stop, and don't re-read sentences."; cls = "bad"; }
    $("sr-wpm").textContent = wpm + " wpm";
    var vEl = $("sr-res-verdict");
    vEl.className = "verdict-text " + cls;
    vEl.textContent = "Comprehension " + score + "/" + sr.qs.length + " (" + acc + "%) · target " + target + " wpm · " + verdict;
    $("sr-history").innerHTML = reviewHtml + srHistoryHtml(hist);
    srShow("sr-result");
    renderSrStats();
  }

  function srHistoryHtml(hist) {
    if (!hist.length) return "";
    var best = 0, i;
    for (i = 0; i < hist.length; i++) if (hist[i].wpm > best) best = hist[i].wpm;
    var recent = hist.slice(-10);
    var avg = Math.round(recent.reduce(function (a, h) { return a + h.wpm; }, 0) / recent.length);
    var h = '<div class="card"><h3>History</h3><p class="hint">Best ' + best + " wpm · last " + recent.length + " avg " + avg + " wpm</p>";
    hist.slice(-8).reverse().forEach(function (e) {
      var d = new Date(e.t);
      h += '<p class="sr-hist-row">' + (d.getMonth() + 1) + "/" + d.getDate() + " · <strong>" + e.wpm + " wpm</strong> · " + e.acc + "% · " + e.words + " words</p>";
    });
    return h + "</div>";
  }

  function renderSrStats() {
    var el = $("sr-stats");
    if (!el) return;
    var hist = loadJSON(srKey(), []);
    if (!hist.length) { el.classList.add("hidden"); return; }
    var recent = hist.slice(-10);
    var avg = Math.round(recent.reduce(function (a, h) { return a + h.wpm; }, 0) / recent.length);
    var accAvg = Math.round(recent.reduce(function (a, h) { return a + h.acc; }, 0) / recent.length);
    var best = 0;
    for (var i = 0; i < hist.length; i++) if (hist[i].wpm > best) best = hist[i].wpm;
    el.innerHTML = "<strong>Your pace:</strong> last " + recent.length + " avg <strong>" + avg +
      " wpm</strong> @ " + accAvg + "% comprehension · best " + best + " wpm · target " + srTargetWpm() + " wpm";
    el.classList.remove("hidden");
  }

  function srQuit(fromRead) {
    UIDialog.confirm("Quit this speed-reading session?", function () {
      srStopTicker();
      srShow("rd-picker");
      renderSrStats();
    });
  }

  function initSpeedReading() {
    if (!$("sr-start")) return;
    $("sr-start").addEventListener("click", startSpeed);
    $("sr-done").addEventListener("click", srFinishReading);
    $("sr-submit").addEventListener("click", srSubmit);
    $("sr-quit").addEventListener("click", srQuit);
    $("sr-quiz-quit").addEventListener("click", srQuit);
    $("sr-again").addEventListener("click", startSpeed);
    $("sr-home").addEventListener("click", function () { srShow("rd-picker"); renderSrStats(); });
    renderSrStats();
  }

  /* ================= §4.8 Listening 模擬考 ================= */
  var LS_LABELS = { monologue: "Monologue", dialogue: "Dialogue" };
  var ls = { set: null, answers: [], playsUsed: 0, playing: false, queue: [], drillMode: false };

  function lsPool(kind) {
    var L = window.LISTENING || [];
    return L.filter(function (s) { return s.kind === kind; });
  }

  /* 口音偏好（跨級別共用，屬於裝置上的個人設定，不加 LEVEL 前綴） */
  var K_ACCENT = "lanexam.accent";
  function lsAccent() {
    var a = loadJSON(K_ACCENT, "en-GB");
    return a === "en-US" ? "en-US" : "en-GB";
  }

  function lsVoices(accent) {
    var all = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    return lsPickVoices(all, accent || lsAccent());
  }

  /* 聽力頁顯示目前實際使用的聲音；挑不到指定口音時要明講，不能靜默換腔調 */
  function lsUpdateVoiceHint() {
    var el = $("ls-voice");
    if (!el) return;
    if (!window.speechSynthesis) { el.textContent = "This browser does not support speech synthesis."; return; }
    var v = lsVoices();
    if (!v.a) { el.textContent = "Loading voices\u2026"; return; }
    if (v.matched) {
      el.textContent = "Voice: " + v.a.name + " (" + v.a.lang + ")";
    } else {
      el.textContent = "No " + (v.lang === "en-US" ? "American" : "British") +
        " voice is installed on this device, so you will hear " + v.a.name + " (" + v.a.lang +
        ") instead. Add one in your system speech settings to hear the accent you picked.";
    }
  }

  /* 把 script 切成 utterance 清單；dialogue 依 "Name:" 行首交替兩個聲音 */
  function lsBuildQueue(set, rate) {
    var voices = lsVoices();
    var speakers = {};
    var order = 0;
    return set.script.split(/\n+/).filter(Boolean).map(function (line) {
      var m = set.kind === "dialogue" ? line.match(/^([A-Z][\w]*):\s*(.*)$/) : null;
      var text = m ? m[2] : line;
      var who = m ? m[1] : "_";
      if (!(who in speakers)) speakers[who] = order++;
      var u = new SpeechSynthesisUtterance(text);
      u.rate = rate;
      /* voice 與 lang 都要設：部分平台（尤其手機）會忽略 voice 而照 lang 挑腔調 */
      u.lang = voices.lang;
      var second = speakers[who] % 2 === 1;
      var v = second ? voices.b : voices.a;
      if (v) u.voice = v;
      if (second && voices.a === voices.b) u.pitch = 0.8;
      return u;
    });
  }

  /* 播放世代 token：speechSynthesis.cancel() 在部分瀏覽器會觸發被取消句子的
   * onend，播放鏈的 onend=next 就接著唸下一句 → 按停或跳下一題後仍一直播。
   * 每條播放鏈綁定當下 token，token 一過期鏈就斷，cancel 才真的停得住。 */
  var audioGen = 0;
  function audioStopAll() {
    audioGen++;
    try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}
  }

  function lsStopAudio() {
    audioStopAll();
    ls.playing = false;
    ls.queue = [];
    var b = $("ls-play");
    if (b) b.textContent = "▶ Play";
    lsUpdatePlays();
  }

  function lsUpdatePlays() {
    var left = 2 - ls.playsUsed;
    $("ls-plays").textContent = ls.drillMode
      ? "Practice mode — unlimited replays"
      : (left > 0 ? "Plays remaining: " + left + " / 2" : "No plays left — answer from memory");
    $("ls-play").disabled = ls.playing || (!ls.drillMode && left <= 0);
  }

  function lsPlay() {
    if (!window.speechSynthesis) { UIDialog.alert("This browser does not support speech synthesis."); return; }
    if (ls.playing) return;
    var rate = parseFloat($("ls-rate").value) || 1;
    ls.queue = lsBuildQueue(ls.set, rate);
    ls.playing = true;
    if (!ls.drillMode) ls.playsUsed++;
    $("ls-play").textContent = "Playing…";
    lsUpdatePlays();
    audioGen++;
    var tok = audioGen;
    var i = 0;
    (function next() {
      if (audioGen !== tok) return;   // 已被停止或換題
      if (!ls.playing || i >= ls.queue.length) {
        ls.playing = false;
        $("ls-play").textContent = "▶ Play again";
        lsUpdatePlays();
        return;
      }
      var u = ls.queue[i++];
      u.onend = next;
      u.onerror = next;
      speechSynthesis.speak(u);
    })();
  }
  function startListening(kind) {
    if (needLogin()) return;
    var pool = lsPool(kind);
    if (!pool.length) { UIDialog.alert("The question bank for this task type hasn't loaded. Please try again later."); return; }
    ls.set = pool[Math.floor(Math.random() * pool.length)];
    ls.answers = [];
    ls.guessed = [];
    ls.playsUsed = 0;
    ls.drillMode = false;
    lsStopAudio();
    $("ls-picker").classList.add("hidden");
    $("ls-summary").classList.add("hidden");
    $("ls-quiz").classList.remove("hidden");
    $("ls-title").textContent = ls.set.title;
    $("ls-play").textContent = "▶ Play";
    renderListening();
    lsUpdatePlays();
    updateLsProgress();
    window.scrollTo(0, 0);
  }

  function updateLsProgress() {
    var n = ls.set.questions.length;
    var done = 0;
    for (var i = 0; i < n; i++) if (ls.answers[i] !== undefined && ls.answers[i] !== null) done++;
    $("ls-progress").textContent = LS_LABELS[ls.set.kind] + "  Answered " + done + " / " + n;
  }

  function renderListening() {
    var area = $("ls-area");
    area.innerHTML = "";
    ls.set.questions.forEach(function (q, qi) {
      var card = document.createElement("div");
      card.className = "card rd-q";
      card.innerHTML = "<p><strong>" + (qi + 1) + ".</strong> " + esc(q.q) + "</p>";
      q.options.forEach(function (opt, oi) {
        var b = document.createElement("button");
        b.className = "option-btn";
        b.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
        b.addEventListener("click", function () {
          card.querySelectorAll(".option-btn").forEach(function (x) { x.classList.remove("selected"); });
          b.classList.add("selected");
          ls.answers[qi] = oi;
          updateLsProgress();
        });
        card.appendChild(b);
      });
      card.appendChild(guessBtn(ls.guessed, qi));
      area.appendChild(card);
    });
  }

  function lsAnswerText(qi, idx) {
    if (idx === undefined || idx === null) return "(not answered)";
    return LETTERS[idx] + ". " + ls.set.questions[qi].options[idx];
  }

  function gradeListening() {
    var qs = ls.set.questions, n = qs.length;
    var unanswered = 0;
    for (var i = 0; i < n; i++) if (ls.answers[i] === undefined || ls.answers[i] === null) unanswered++;
    if (unanswered > 0) { UIDialog.confirm(unanswered + " question(s) still unanswered. Submit anyway?", gradeListeningNow); return; }
    gradeListeningNow();
  }

  function gradeListeningNow() {
    var qs = ls.set.questions, n = qs.length;
    lsStopAudio();

    var score = 0, reviewHtml = "";
    for (var j = 0; j < n; j++) {
      var isCorrect = ls.answers[j] === qs[j].answer;
      var wasGuess = !!(ls.guessed && ls.guessed[j]);
      if (isCorrect) score++;
      recordResult("lis", isCorrect);
      if (!isCorrect || wasGuess) {   // 猜對的也收進錯題本
        try { mbAdd("lis", { title: ls.set.title, kind: ls.set.kind, script: ls.set.script, q: qs[j] }); } catch (e) {}
      }
      reviewHtml +=
        '<div class="review-item ' + (isCorrect ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (isCorrect ? "✓" : "✗") + " Question " + (j + 1) +
        (wasGuess ? ' <span class="guess-tag">🤔 guessed' + (isCorrect ? " — sent to mistake book" : "") + "</span>" : "") +
        "</div>" +
        "<p>" + esc(qs[j].q) + "</p>" +
        '<div class="review-ans"><strong>Your answer: </strong>' + esc(lsAnswerText(j, ls.answers[j])) + "</div>" +
        '<div class="review-ans"><strong>Correct answer: </strong>' + esc(lsAnswerText(j, qs[j].answer)) + "</div>" +
        '<div class="expl">' + esc(qs[j].explanation) + "</div>" +
        retroGuessHtml("lis", { title: ls.set.title, kind: ls.set.kind, script: ls.set.script, q: qs[j] },
          !isCorrect || wasGuess) +
        "</div>";
    }
    var pct = Math.round(100 * score / n);
    var v = verdictFor(pct);
    $("ls-quiz").classList.add("hidden");
    $("ls-summary").classList.remove("hidden");
    $("ls-summary-title").textContent = LS_LABELS[ls.set.kind] + " — Mock results";
    $("ls-score").textContent = score + " / " + n + " (" + pct + "%)";
    $("ls-verdict").className = "verdict-text " + v.cls;
    $("ls-verdict").textContent = v.text;
    $("ls-review").innerHTML = reviewHtml;

    var wrongCount = n - score;
    var db = $("ls-drill-btn");
    db.classList.toggle("hidden", wrongCount === 0);
    db.textContent = "Practice mistakes (" + wrongCount + ")";
    window.scrollTo(0, 0);
    saveMockRecord("listening", ls.set.kind, score, n, pct);
  }

  function startLsDrill() {
    var wrong = [];
    ls.set.questions.forEach(function (q, i) { if (ls.answers[i] !== q.answer) wrong.push(i); });
    if (!wrong.length) return;
    ls.drillMode = true;
    startDrillGeneric({
      prefix: "ls",
      items: wrong,
      render: renderLsDrillItem,
      correctText: function (i) { return lsAnswerText(i, ls.set.questions[i].answer); },
      explText: function (i) { return ls.set.questions[i].explanation; }
    });
  }

  function renderLsDrillItem(qi, done) {
    var area = $("ls-drill-area");
    area.innerHTML = "";
    var q = ls.set.questions[qi];
    var player = document.createElement("div");
    player.className = "card center";
    var rp = document.createElement("button");
    rp.className = "ghost-btn small";
    rp.dataset.audio = "1";
    var rpIdle = "🔊 Play recording";
    var rpPlaying = false;
    rp.textContent = rpIdle;
    rp.addEventListener("click", function () {
      if (rpPlaying) { lsStopAudio(); rpPlaying = false; rp.textContent = rpIdle; return; }
      rpPlaying = true; rp.textContent = "⏹ Stop";
      lsDrillReplay(function () { rpPlaying = false; rp.textContent = rpIdle; });
    });
    player.appendChild(rp);
    area.appendChild(player);

    var card = document.createElement("div");
    card.className = "card rd-q";
    card.innerHTML = "<p><strong>" + (qi + 1) + ".</strong> " + esc(q.q) + "</p>";
    q.options.forEach(function (opt, oi) {
      var b = document.createElement("button");
      b.className = "option-btn";
      b.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
      b.addEventListener("click", function () {
        lsStopAudio();
        b.classList.add("selected");
        done(oi === q.answer, lsAnswerText(qi, oi));
      });
      card.appendChild(b);
    });
    area.appendChild(card);
  }

  function lsDrillReplay(onDone) {
    if (!window.speechSynthesis) return;
    audioStopAll();
    var tok = audioGen;
    var queue = lsBuildQueue(ls.set, parseFloat($("ls-rate").value) || 1);
    var i = 0;
    (function next() {
      if (audioGen !== tok) return;
      if (i >= queue.length) { if (onDone) onDone(); return; }
      var u = queue[i++];
      u.onend = next;
      u.onerror = next;
      speechSynthesis.speak(u);
    })();
  }

  function lsBackToPicker() {
    lsStopAudio();
    $("ls-quiz").classList.add("hidden");
    $("ls-summary").classList.add("hidden");
    $("ls-drill").classList.add("hidden");
    $("ls-congrats").classList.add("hidden");
    $("ls-picker").classList.remove("hidden");
  }

  function initListening() {
    document.querySelectorAll("#ls-picker .mode-btn[data-lkind]").forEach(function (b) {
      b.addEventListener("click", function () { startListening(b.dataset.lkind); });
    });
    $("ls-play").addEventListener("click", lsPlay);
    $("ls-stop").addEventListener("click", lsStopAudio);
    $("ls-submit").addEventListener("click", gradeListening);
    $("ls-retry").addEventListener("click", function () { startListening(ls.set.kind); });
    $("ls-back").addEventListener("click", function () {
      if (ls.answers.length > 0) { UIDialog.confirm("You haven't submitted yet. Abandon this mock exam?", lsBackToPicker); return; }
      lsBackToPicker();
    });
    $("ls-home").addEventListener("click", lsBackToPicker);
    $("ls-drill-btn").addEventListener("click", startLsDrill);
    $("ls-drill-quit").addEventListener("click", function () {
      UIDialog.confirm("Quit mistake practice and go back to the results?", function () {
        lsStopAudio();
        $("ls-drill").classList.add("hidden");
        $("ls-summary").classList.remove("hidden");
      });
    });
    $("ls-congrats-home").addEventListener("click", lsBackToPicker);
    var acc = $("ls-accent");
    if (acc) {
      acc.value = lsAccent();
      acc.addEventListener("change", function () {
        saveJSON(K_ACCENT, acc.value);
        lsStopAudio();                         /* 播到一半換口音會半英半美，先停掉 */
        lsUpdateVoiceHint();
      });
    }
    /* Chrome 第一次 getVoices() 會回空陣列，聲音清單要等 voiceschanged 才載好。
     * 少了這段，第一次按播放時挑不到指定口音，會靜默用系統預設（通常是美式）。 */
    if (window.speechSynthesis) {
      speechSynthesis.getVoices();
      if ("onvoiceschanged" in speechSynthesis) {
        speechSynthesis.addEventListener("voiceschanged", lsUpdateVoiceHint);
      }
    }
    lsUpdateVoiceHint();
  }

  /* ================= §4.9 長期錯題本 (Leitner spaced repetition) ================= */
  var K_MB = function () { return LEVEL + ".mistake_book"; };
  var MB_CAP = 200, MB_SESSION_CAP = 20;
  var mbReviewedThisSession = {};

  function mbLoad() { return loadJSON(K_MB(), []); }
  function mbSave(book) { saveJSON(K_MB(), book); }

  function mbKey(kind, payload) {
    if (kind === "uoe") return "uoe|" + payload.part + "|" + (payload.q.text || payload.q.original || "");
    if (kind === "rmc") return "rmc|" + payload.title + "|" + payload.q.q;
    if (kind === "rtfng") return "rtfng|" + payload.title + "|" + payload.q.q;
    if (kind === "rgap") return "rgap|" + payload.title + "|" + payload.gapIndex;
    if (kind === "rmatch") return "rmatch|" + payload.title + "|" + payload.q;
    if (kind === "rhead") return "rhead|" + payload.title + "|" + payload.q;
    return "lis|" + payload.title + "|" + payload.q.q;
  }

  /* 答錯即收進錯題本；已存在則重設回盒1 */
  function mbAdd(kind, payload) {
    var book = mbLoad();
    var key = mbKey(kind, payload);
    var now = Date.now();
    for (var i = 0; i < book.length; i++) {
      if (book[i].key === key) {
        book[i].box = 1;
        book[i].last = now;
        book[i].payload = payload;
        mbSave(book);
        return;
      }
    }
    book.push({ key: key, kind: kind, payload: payload, box: 1, last: now, added: now });
    if (book.length > MB_CAP) book = book.slice(book.length - MB_CAP);
    mbSave(book);
  }

  function mbDueEntries() {
    var now = Date.now();
    return mbLoad().filter(function (e) { return leitnerIsDue(e, now); });
  }

  /* 每個 session 只依「第一次作答」升降盒；盒3 答對 → 畢業移除 */
  function mbReview(key, isCorrect) {
    if (mbReviewedThisSession[key]) return;
    mbReviewedThisSession[key] = true;
    var book = mbLoad();
    for (var i = 0; i < book.length; i++) {
      if (book[i].key !== key) continue;
      if (isCorrect && book[i].box >= 3) {
        book.splice(i, 1);
      } else {
        var st = leitnerReview(book[i], isCorrect, Date.now());
        book[i].box = st.box;
        book[i].last = st.last;
      }
      break;
    }
    mbSave(book);
  }

  function mbCorrectText(e) {
    var p = e.payload;
    if (e.kind === "uoe") return correctAnsText({ part: p.part, q: p.q });
    if (e.kind === "rmc" || e.kind === "rtfng" || e.kind === "lis") return LETTERS[p.q.answer] + ". " + p.q.options[p.q.answer];
    if (e.kind === "rgap" || e.kind === "rhead") return LETTERS[p.answer] + ". " + p.options[p.answer];
    return LETTERS[p.answer] + " (" + p.sections[p.answer].label + ")";
  }

  function mbExplText(e) {
    var p = e.payload;
    if (e.kind === "rgap" || e.kind === "rmatch" || e.kind === "rhead") return p.explanation;
    return p.q.explanation;
  }

  /* ---- 家長儀表板用的兩個輕量紀錄（隨 <level>.* 前綴自動雲端同步） ----
   * wrong_log：每日任務/拼寫的「第一次答錯」流水帳（14 天內顯示，留 30 天/120 筆上限）
   * word_wrong：單字拼錯/不會的次數統計（字彙卡、拼寫練習共用） */
  var K_WLOG = function () { return LEVEL + ".wrong_log"; };
  var K_WW = function () { return LEVEL + ".word_wrong"; };

  function wlogAdd(sec, qText, chosen, correct) {
    try {
      var log = loadJSON(K_WLOG(), []);
      log.push({ ts: Date.now(), sec: sec, q: String(qText || "").slice(0, 160),
                 chosen: String(chosen || "").slice(0, 80), correct: String(correct || "").slice(0, 80) });
      var cut = Date.now() - 30 * DAY_MS;
      log = log.filter(function (e) { return e.ts >= cut; });
      if (log.length > 120) log = log.slice(log.length - 120);
      saveJSON(K_WLOG(), log);
    } catch (e) {}
  }

  function wwBump(front) {
    try {
      var ww = loadJSON(K_WW(), {});
      if (!ww[front]) ww[front] = { n: 0, last: 0 };
      ww[front].n += 1;
      ww[front].last = Date.now();
      saveJSON(K_WW(), ww);
    } catch (e) {}
  }

  /* 錯題流水帳用的題目摘要 */
  function wlogQText(e) {
    var p = e.payload;
    if (e.kind === "uoe") return p.q.text || p.q.original || p.q.q || "";
    if (e.kind === "rmc" || e.kind === "rtfng" || e.kind === "lis") return p.q.q || "";
    if (e.kind === "rgap") return (p.title || "") + " — gapped text";
    if (e.kind === "rhead") return (p.title || "") + " — matching headings";
    if (e.kind === "rmatch") return (p.title || "") + " — multiple matching";
    return "";
  }

  function mbStopAudio() {
    audioStopAll();
  }

  function mbReplay(p, onDone) {
    if (!window.speechSynthesis) return;
    audioStopAll();
    var tok = audioGen;
    var queue = lsBuildQueue({ script: p.script, kind: p.kind }, 1);
    var i = 0;
    (function next() {
      if (audioGen !== tok) return;
      if (i >= queue.length) { if (onDone) onDone(); return; }
      var u = queue[i++];
      u.onend = next;
      u.onerror = next;
      speechSynthesis.speak(u);
    })();
  }

  function renderMbDrillItem(e, done) {
    renderMbDrillItemInto($((drill && drill.prefix ? drill.prefix : "mb") + "-drill-area"), e, done);
  }

  /* 把單一錯題本型條目（uoe/rmc/rtfng/rgap/rhead/rmatch/lis）畫進指定容器；Daily 與 Review Test 共用 */
  function renderMbDrillItemInto(area, e, done) {
    area.innerHTML = "";
    var p = e.payload;

    function answered(isCorrect, userText) {
      mbStopAudio();
      /* 自承用猜的 → 這題當作沒答對來升降盒子，免得猜對就畢業 */
      mbReview(e.key, isCorrect && !guessTaken());
      done(isCorrect, userText);
    }

    if (e.kind === "uoe") {
      var qBox = document.createElement("div");
      qBox.className = "card";
      var aBox = document.createElement("div");
      area.appendChild(qBox);
      area.appendChild(aBox);
      var item = { part: p.part, q: p.q };
      renderUoeItemInto(item, qBox, aBox, function (val) {
        answered(gradeItem(item, val), userAnsText(item, val));
      });
    } else if (e.kind === "rmc" || e.kind === "rtfng") {
      var passage = document.createElement("div");
      passage.className = "card rd-passage";
      passage.innerHTML = "<h3>" + esc(p.title) + "</h3>" +
        p.text.split(/\n+/).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
      area.appendChild(passage);
      var card = document.createElement("div");
      card.className = "card rd-q";
      card.innerHTML = "<p>" + esc(p.q.q) + "</p>";
      p.q.options.forEach(function (opt, oi) {
        var b = document.createElement("button");
        b.className = "option-btn";
        b.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
        b.addEventListener("click", function () {
          b.classList.add("selected");
          answered(oi === p.q.answer, LETTERS[oi] + ". " + p.q.options[oi]);
        });
        card.appendChild(b);
      });
      area.appendChild(card);
    } else if (e.kind === "rgap") {
      var art = document.createElement("div");
      art.className = "card rd-passage";
      var html = "<h3>" + esc(p.title) + "</h3>";
      p.segments.forEach(function (seg, i) {
        html += "<p>" + esc(seg) + "</p>";
        if (i < p.gapCount) html += '<p class="gap-slot' + (i === p.gapIndex ? " current" : "") + '">(' + (i + 1) + ") ____</p>";
      });
      art.innerHTML = html;
      area.appendChild(art);

      var optCard = document.createElement("div");
      optCard.className = "card";
      var ohtml = "<h3>Options (one is not needed)</h3>";
      p.options.forEach(function (opt, oi) {
        ohtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      optCard.innerHTML = ohtml;
      area.appendChild(optCard);

      var pickCard = document.createElement("div");
      pickCard.className = "card";
      pickCard.innerHTML = "<h3>Which option fills gap " + (p.gapIndex + 1) + "?</h3>";
      pickCard.appendChild(letterRow(p.options.length, function (idx) {
        answered(idx === p.answer, LETTERS[idx] + ". " + p.options[idx]);
      }));
      area.appendChild(pickCard);
    } else if (e.kind === "rhead") {
      p.sections.forEach(function (sec) {
        var hc = document.createElement("div");
        hc.className = "card rd-passage";
        hc.innerHTML = "<h3>Paragraph " + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(hc);
      });
      var hoCard = document.createElement("div");
      hoCard.className = "card";
      var hohtml = "<h3>List of headings</h3>";
      p.options.forEach(function (opt, oi) {
        hohtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      hoCard.innerHTML = hohtml;
      area.appendChild(hoCard);
      var hqCard = document.createElement("div");
      hqCard.className = "card";
      hqCard.innerHTML = "<h3>Best heading for…</h3><p class='match-q'>" + esc(p.q) + "</p>";
      hqCard.appendChild(letterRow(p.options.length, function (idx) {
        answered(idx === p.answer, LETTERS[idx] + ". " + p.options[idx]);
      }));
      area.appendChild(hqCard);
    } else if (e.kind === "rmatch") {
      p.sections.forEach(function (sec) {
        var sc = document.createElement("div");
        sc.className = "card rd-passage";
        sc.innerHTML = "<h3>" + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(sc);
      });
      var qCard = document.createElement("div");
      qCard.innerHTML = "<h3>Which section mentions…</h3><p class='match-q'>" + esc(p.q) + "</p>";
      qCard.className = "card";
      qCard.appendChild(letterRow(p.sections.length, function (idx) {
        answered(idx === p.answer, LETTERS[idx] + " (" + p.sections[idx].label + ")");
      }));
      area.appendChild(qCard);
    } else { // lis
      var player = document.createElement("div");
      player.className = "card center";
      var rp = document.createElement("button");
      rp.className = "ghost-btn small";
      rp.dataset.audio = "1";
      var rpIdle = "🔊 Play recording";
      var rpPlaying = false;
      rp.textContent = rpIdle;
      rp.addEventListener("click", function () {
        if (rpPlaying) { audioStopAll(); rpPlaying = false; rp.textContent = rpIdle; return; }
        rpPlaying = true; rp.textContent = "⏹ Stop";
        mbReplay(p, function () { rpPlaying = false; rp.textContent = rpIdle; });
      });
      player.appendChild(rp);
      area.appendChild(player);

      var lcard = document.createElement("div");
      lcard.className = "card rd-q";
      lcard.innerHTML = "<p>" + esc(p.q.q) + "</p>";
      p.q.options.forEach(function (opt, oi) {
        var lb = document.createElement("button");
        lb.className = "option-btn";
        lb.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
        lb.addEventListener("click", function () {
          lb.classList.add("selected");
          answered(oi === p.q.answer, LETTERS[oi] + ". " + p.q.options[oi]);
        });
        lcard.appendChild(lb);
      });
      area.appendChild(lcard);
    }
  }

  function startMbDrill() {
    var due = mbDueEntries();
    if (!due.length) return;
    mbReviewedThisSession = {};
    startDrillGeneric({
      prefix: "mb",
      items: shuffle(due).slice(0, MB_SESSION_CAP),
      render: renderMbDrillItem,
      correctText: mbCorrectText,
      explText: mbExplText
    });
  }

  /* ================= §5 Writing ================= */
  function makeCountdown(displayEl, onDone) {
    var remaining = 0, timerId = null;
    function render() {
      var m = Math.floor(remaining / 60), s = remaining % 60;
      displayEl.textContent = m + ":" + (s < 10 ? "0" : "") + s;
      displayEl.classList.toggle("warn", remaining <= 60 && remaining > 0);
    }
    return {
      set: function (secs) { remaining = secs; render(); },
      start: function () {
        if (timerId || remaining <= 0) return;
        timerId = setInterval(function () {
          remaining -= 1;
          render();
          if (remaining <= 0) {
            clearInterval(timerId); timerId = null;
            if (onDone) onDone();
          }
        }, 1000);
      },
      pause: function () { if (timerId) { clearInterval(timerId); timerId = null; } },
      isRunning: function () { return !!timerId; }
    };
  }

  function initWriting() {
    // level-specific guidance
    var guide = $("wr-guidance");
    if (guide) guide.textContent = CFG.wordGuide || "";
    // timer
    var wrTimer = makeCountdown($("wr-timer"), function () { UIDialog.alert("Time's up!"); });
    var minInput = $("wr-minutes");
    minInput.value = CFG.timerMin;
    function resetWr() {
      wrTimer.pause();
      var m = parseInt(minInput.value, 10);
      if (isNaN(m) || m < 1) m = CFG.timerMin;
      wrTimer.set(m * 60);
    }
    resetWr();
    $("wr-start").addEventListener("click", function () { if (needLogin()) return; wrTimer.start(); });
    $("wr-pause").addEventListener("click", function () { wrTimer.pause(); });
    $("wr-reset").addEventListener("click", resetWr);
    minInput.addEventListener("change", function () { if (!wrTimer.isRunning()) resetWr(); });

    // prompt cards
    var list = $("writing-list");
    WRITING.forEach(function (p) {
      var wrap = document.createElement("div");
      wrap.className = "wr-card";

      var head = document.createElement("button");
      head.className = "wr-head";
      head.innerHTML = "<span>" + esc(p.title) + "</span>" +
        '<span class="badge">' + (typeof p.part === "number" ? "Part " + p.part : esc(String(p.part))) + " · " + esc(p.type) + "</span>";

      var body = document.createElement("div");
      body.className = "wr-body hidden";

      var bodyHtml = "<p>" + esc(p.task) + "</p>";
      if (p.texts) {
        p.texts.forEach(function (t, i) {
          bodyHtml += "<blockquote><strong>Text " + (i + 1) + ".</strong> " + esc(t) + "</blockquote>";
        });
      }
      if (p.chart && typeof window !== "undefined" && typeof window.renderChart === "function") {
        try { bodyHtml += '<div class="chart-wrap">' + window.renderChart(p.chart) + "</div>"; } catch (e) {}
      }
      bodyHtml += "<h4>Target length</h4><p>" + esc(p.length) + "</p>";
      bodyHtml += "<h4>Marking checklist</h4><ul>";
      p.checklist.forEach(function (c) { bodyHtml += "<li>" + esc(c) + "</li>"; });
      bodyHtml += "</ul>";
      bodyHtml += '<h4>Model</h4><p class="model">' + esc(p.model) + "</p>";
      bodyHtml += "<h4>Draft (auto-saved)</h4>";
      body.innerHTML = bodyHtml;

      var ta = document.createElement("textarea");
      ta.className = "wr-draft";
      ta.placeholder = "Draft your answer here…";
      ta.value = (function () {
        try { return localStorage.getItem(K_DRAFT + p.id) || ""; } catch (e) { return ""; }
      })();
      var wc = document.createElement("div");
      wc.className = "wordcount";
      function updateWc() { wc.textContent = countWords(ta.value) + " words"; }
      updateWc();
      ta.addEventListener("input", function () {
        updateWc();
        try { localStorage.setItem(K_DRAFT + p.id, ta.value); } catch (e) {}
      });
      body.appendChild(ta);
      body.appendChild(wc);

      var fb = document.createElement("button");
      fb.className = "ghost-btn small wr-ai-btn";
      fb.textContent = "📋 Copy for AI feedback";
      fb.addEventListener("click", function () {
        var essay = ta.value.trim();
        if (!essay) { UIDialog.alert("Write your draft first, then copy it for feedback."); return; }
        var isIelts = typeof p.part !== "number";
        var msg = (isIelts
          ? "Please grade this IELTS Writing Task 1 answer using the official IELTS band descriptors " +
            "(Task Achievement / Coherence & Cohesion / Lexical Resource / Grammatical Range & Accuracy, band 0\u20139). "
          : "Please grade this " + LEVEL.toUpperCase() + " Writing answer using the official Cambridge assessment scales " +
            "(Content / Communicative Achievement / Organisation / Language, each 0\u20135). ") +
          "Give a band per criterion, an overall verdict, and 3 concrete improvements with rewritten examples.\n\n" +
          "Task: " + p.title + " (" + (isIelts ? String(p.part) : "Part " + p.part) + " \u00b7 " + p.type + ")\n" +
          p.task +
          (p.chart ? "\nThe visual (shown to me as a chart) contains this data: " + JSON.stringify(p.chart) : "") +
          "\nTarget length: " + p.length + "\n\n" +
          "My answer (" + countWords(essay) + " words):\n" + essay;
        var done = function () { fb.textContent = "\u2713 Copied — paste it to your AI chat"; setTimeout(function () { fb.textContent = "\ud83d\udccb Copy for AI feedback"; }, 3000); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(msg).then(done, function () { fallbackCopy(msg); done(); });
        } else { fallbackCopy(msg); done(); }
      });
      body.appendChild(fb);

      var gb = document.createElement("button");
      gb.className = "primary-btn small wr-ai-btn";
      gb.textContent = "\ud83e\udd16 AI grade my essay";
      var gradeOut = document.createElement("div");
      gradeOut.className = "wr-grade hidden";
      gb.addEventListener("click", function () {
        var essay = ta.value.trim();
        if (countWords(essay) < 10) { UIDialog.alert("Write your draft first (at least a few sentences)."); return; }
        var token = null;
        try { token = sessionStorage.getItem("sync.token"); } catch (e) {}
        if (!token) { UIDialog.alert("Sign in with Google first — AI grading needs your account."); return; }
        var isIelts = typeof p.part !== "number";
        gb.disabled = true;
        gb.textContent = "\u23f3 Grading\u2026 (up to 90s)";
        gradeOut.classList.add("hidden");
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://claudebot500.tailfcf67f.ts.net/api/grade");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer " + token);
        xhr.timeout = 100000;
        function done(err, feedback) {
          gb.disabled = false;
          gb.textContent = "\ud83e\udd16 AI grade my essay";
          if (err) {
            gradeOut.innerHTML = '<p class="wr-grade-err">' + esc(err) + "</p>";
          } else {
            gradeOut.innerHTML = renderGradeFeedback(feedback);
          }
          gradeOut.classList.remove("hidden");
        }
        xhr.onload = function () {
          var data = null;
          try { data = JSON.parse(xhr.responseText); } catch (e) {}
          if (xhr.status === 200 && data && data.feedback) done(null, data.feedback);
          else if (xhr.status === 401) done("Session expired — sign in again, then retry.");
          else if (xhr.status === 429) done("Too many requests — wait a minute and retry.");
          else done("Grading failed (" + (data && data.error ? data.error : xhr.status) + "). Try again later.");
        };
        xhr.onerror = function () { done("Network error — check your connection and try again."); };
        xhr.ontimeout = function () { done("Grading timed out — try again."); };
        xhr.send(JSON.stringify({
          level: LEVEL,
          exam: isIelts ? "ielts" : "cambridge",
          task: p.task,
          essay: essay,
          chart: p.chart || undefined,
          targetLength: p.length
        }));
      });
      body.appendChild(gb);
      body.appendChild(gradeOut);

      head.addEventListener("click", function () { body.classList.toggle("hidden"); });
      wrap.appendChild(head);
      wrap.appendChild(body);
      list.appendChild(wrap);
    });
  }

  function renderGradeFeedback(f) {
    var h = '<h4>\ud83e\udd16 AI feedback</h4>';
    if (Array.isArray(f.scores)) {
      h += '<table class="wr-grade-scores"><tbody>';
      f.scores.forEach(function (s) {
        h += "<tr><td>" + esc(s.criterion || "") + "</td><td><strong>" + esc(String(s.score)) + "</strong> / " + esc(String(s.max)) + "</td><td>" + esc(s.comment || "") + "</td></tr>";
      });
      h += "</tbody></table>";
    }
    if (f.overall) h += '<p class="wr-grade-overall">' + esc(f.overall) + "</p>";
    if (Array.isArray(f.improvements) && f.improvements.length) {
      h += "<h4>Improvements</h4><ul>";
      f.improvements.forEach(function (im) {
        h += "<li><strong>" + esc(im.issue || "") + "</strong> — " + esc(im.fix || "") +
          (im.example ? '<br><em>e.g. ' + esc(im.example) + "</em>" : "") + "</li>";
      });
      h += "</ul>";
    }
    if (Array.isArray(f.corrections) && f.corrections.length) {
      h += "<h4>Corrections</h4><ul>";
      f.corrections.forEach(function (c) {
        h += '<li><span class="wr-grade-orig">' + esc(c.original || "") + "</span> \u2192 <strong>" + esc(c.corrected || "") + "</strong>" +
          (c.reason ? " <span class='muted'>(" + esc(c.reason) + ")</span>" : "") + "</li>";
      });
      h += "</ul>";
    }
    if (Array.isArray(f.upgrades) && f.upgrades.length) {
      h += "<h4>Phrase upgrades</h4><ul>";
      f.upgrades.forEach(function (u) {
        h += '<li><span class="wr-grade-orig">' + esc(u.original || "") + "</span> \u2192 <strong>" + esc(u.better || "") + "</strong></li>";
      });
      h += "</ul>";
    }
    return h;
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ================= §6 Speaking ================= */
  /* Part 1 interview 題庫（各級通用的個人性問題） */
  var SP_INTERVIEW = [
    "Where are you from, and what do you like most about living there?",
    "What do you enjoy doing in your free time?",
    "Do you prefer spending time alone or with other people? Why?",
    "What kind of music do you listen to, and has your taste changed over the years?",
    "Tell me about a place you would like to visit one day.",
    "What did you enjoy studying at school, and why?",
    "How important is it for you to keep in touch with old friends?",
    "Do you prefer reading books or watching films? Why?",
    "What is your favourite time of year, and what makes it special?",
    "How do you usually celebrate special occasions with your family?",
    "What piece of technology could you not live without, and why?",
    "Would you rather live in a big city or in the countryside? Why?",
    "What is something new you have learned recently?",
    "How do you like to stay healthy?",
    "Tell me about a person who has influenced you.",
    "Do you think you will still live in the same place in ten years' time?",
    "What kind of food do you enjoy, and do you like cooking?",
    "How do you usually plan your weekends?",
    "What was the last thing that made you laugh a lot?",
    "If you had more free time, how would you spend it?",
    "Do you enjoy travelling? What do you get out of it?",
    "How has the area where you live changed in recent years?",
    "What ambitions do you have for the next few years?",
    "Do you work better in the morning or in the evening? Why?"
  ];
  var SP_EVAL_ITEMS = [
    "I extended every answer beyond yes/no (2–3 sentences)",
    "I gave concrete examples or reasons",
    "I kept going without long silences",
    "I used a range of vocabulary, not just simple words",
    "I sounded natural, not memorised"
  ];

  function initInterview() {
    var run = { qs: [], idx: 0 };
    var timer = makeCountdown($("sp-int-timer"), null);

    function speakQ(text) {
      if (!window.speechSynthesis) return;
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      var vs = lsVoices();
      u.lang = vs.lang;
      if (vs.a) u.voice = vs.a;
      u.onend = function () { timer.set(45); timer.start(); };
      speechSynthesis.speak(u);
    }

    function showQ() {
      $("sp-int-progress").textContent = "Question " + (run.idx + 1) + " / " + run.qs.length;
      $("sp-int-q").textContent = run.qs[run.idx];
      $("sp-int-next").textContent = run.idx === run.qs.length - 1 ? "Finish" : "Next question";
      timer.pause();
      timer.set(45);
      speakQ(run.qs[run.idx]);
    }

    function stopAll() {
      try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}
      timer.pause();
    }

    $("sp-int-start").addEventListener("click", function () {
      run.qs = shuffle(SP_INTERVIEW).slice(0, 4);
      run.idx = 0;
      $("sp-int-card").classList.add("hidden");
      $("sp-int-eval").classList.add("hidden");
      $("sp-int-run").classList.remove("hidden");
      showQ();
    });
    $("sp-int-repeat").addEventListener("click", function () { timer.pause(); speakQ(run.qs[run.idx]); });
    $("sp-int-next").addEventListener("click", function () {
      run.idx += 1;
      if (run.idx >= run.qs.length) {
        stopAll();
        $("sp-int-run").classList.add("hidden");
        var list = $("sp-int-eval-list");
        list.innerHTML = "";
        SP_EVAL_ITEMS.forEach(function (t) {
          var lab = document.createElement("label");
          lab.className = "sp-eval-item";
          var cb = document.createElement("input");
          cb.type = "checkbox";
          lab.appendChild(cb);
          lab.appendChild(document.createTextNode(" " + t));
          list.appendChild(lab);
        });
        $("sp-int-eval").classList.remove("hidden");
      } else {
        showQ();
      }
    });
    $("sp-int-quit").addEventListener("click", function () {
      stopAll();
      $("sp-int-run").classList.add("hidden");
      $("sp-int-card").classList.remove("hidden");
    });
    $("sp-int-done").addEventListener("click", function () {
      var boxes = $("sp-int-eval-list").querySelectorAll("input");
      var ticked = 0;
      boxes.forEach(function (b) { if (b.checked) ticked++; });
      $("sp-int-eval").classList.add("hidden");
      $("sp-int-card").classList.remove("hidden");
      UIDialog.alert(ticked >= 4 ? "Strong interview — " + ticked + "/5. Keep that consistency!"
        : "You ticked " + ticked + "/5. Pick one unticked habit and make it your focus next round.");
    });
  }

  function initSpeaking() {
    initInterview();
    var hint = $("sp-mode-hint");
    if (hint && CFG.spLabel) hint.textContent = CFG.spLabel;
    var spTimer = makeCountdown($("sp-timer"), function () {
      $("sp-phrases").classList.remove("hidden");
    });
    spTimer.set(CFG.spSecs);

    $("sp-draw").addEventListener("click", function () {
      var p = SPEAKING[Math.floor(Math.random() * SPEAKING.length)];
      var html = "<h3>" + esc(p.question) + "</h3><ul>";
      p.bullets.forEach(function (b) { html += "<li>" + esc(b) + "</li>"; });
      html += "</ul>";
      $("sp-card").innerHTML = html;
      $("sp-card").classList.remove("hidden");
      $("sp-timer-box").classList.remove("hidden");
      $("sp-phrases").classList.add("hidden");
      spTimer.pause();
      spTimer.set(CFG.spSecs);
      spRecNewTask(p.question + " (" + p.bullets.join("; ") + ")");
    });
    $("sp-start").addEventListener("click", function () { if (needLogin()) return; spTimer.start(); });
    $("sp-reset").addEventListener("click", function () { spTimer.pause(); spTimer.set(CFG.spSecs); });

    var ul = $("sp-phrase-list");
    SPEAKING_PHRASES.forEach(function (ph) {
      var li = document.createElement("li");
      li.textContent = ph;
      ul.appendChild(li);
    });
  }

  /* ---------- §6.1 口說錄音 → 逐字稿 → AI 批改 ---------- */
  var spRec = { on: false, engine: null, finalText: "", t0: 0, secs: 0, question: "" };

  function spRecSupported() {
    return typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  function spRecNewTask(question) {
    spRec.question = question;
    var box = $("sp-rec-box");
    if (!box) return;
    if (!spRecSupported()) { box.classList.add("hidden"); return; }
    spRecStop(true);
    spRec.finalText = "";
    $("sp-rec-live").textContent = "";
    $("sp-rec-live").classList.add("hidden");
    $("sp-rec-edit").classList.add("hidden");
    $("sp-feedback").classList.add("hidden");
    $("sp-rec-btn").textContent = "\ud83c\udf99 Start recording";
    box.classList.remove("hidden");
  }

  function spRecStop(silent) {
    spRec.on = false;
    if (spRec.engine) { try { spRec.engine.stop(); } catch (e) {} spRec.engine = null; }
  }

  function spRecToggle() {
    var btn = $("sp-rec-btn");
    if (spRec.on) {
      spRec.secs = Math.round((Date.now() - spRec.t0) / 1000);
      spRecStop();
      btn.textContent = "\ud83c\udf99 Record again";
      var text = spRec.finalText.trim();
      if (!text) { UIDialog.alert("Nothing was transcribed — check the microphone permission and try again."); return; }
      $("sp-transcript").value = text;
      spRecUpdateStats();
      $("sp-rec-edit").classList.remove("hidden");
      return;
    }
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    var eng = new SR();
    eng.lang = "en-GB";
    eng.continuous = true;
    eng.interimResults = true;
    eng.onresult = function (ev) {
      var interim = "";
      for (var i = ev.resultIndex; i < ev.results.length; i++) {
        if (ev.results[i].isFinal) spRec.finalText += ev.results[i][0].transcript + " ";
        else interim += ev.results[i][0].transcript;
      }
      var live = $("sp-rec-live");
      live.textContent = (spRec.finalText + interim).slice(-200);
      live.classList.remove("hidden");
    };
    /* iOS/Safari 常自行結束辨識——還在錄音狀態就自動重啟 */
    eng.onend = function () {
      if (spRec.on && spRec.engine === eng) {
        try { eng.start(); } catch (e) {}
      }
    };
    eng.onerror = function (ev) {
      if (ev.error === "not-allowed" || ev.error === "service-not-allowed") {
        spRecStop();
        $("sp-rec-btn").textContent = "\ud83c\udf99 Start recording";
        UIDialog.alert("Microphone access was blocked. Allow the microphone for this site and try again.");
      }
    };
    spRec.engine = eng;
    spRec.on = true;
    spRec.finalText = "";
    spRec.t0 = Date.now();
    try { eng.start(); } catch (e) {}
    btn.textContent = "\u23f9 Stop recording";
    $("sp-rec-edit").classList.add("hidden");
    $("sp-feedback").classList.add("hidden");
  }

  function spRecUpdateStats() {
    var words = countWords($("sp-transcript").value);
    var wpm = spRec.secs > 0 ? Math.round(words / (spRec.secs / 60)) : 0;
    $("sp-rec-stats").textContent = fmtSecs(spRec.secs) + " \u00b7 " + words + " words \u00b7 ~" + wpm + " wpm";
  }

  function spSendForFeedback() {
    var transcript = $("sp-transcript").value.trim();
    if (countWords(transcript) < 15) { UIDialog.alert("The transcript is too short to grade — speak for longer first."); return; }
    var token = null;
    try { token = sessionStorage.getItem("sync.token"); } catch (e) {}
    if (!token) { UIDialog.alert("Sign in with Google first — AI feedback needs your account."); return; }
    var btn = $("sp-send");
    var out = $("sp-feedback");
    btn.disabled = true;
    btn.textContent = "\u23f3 Grading\u2026 (up to 90s)";
    out.classList.add("hidden");
    var words = countWords(transcript);
    var wpm = spRec.secs > 0 ? Math.round(words / (spRec.secs / 60)) : 0;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://claudebot500.tailfcf67f.ts.net/api/speak");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + token);
    xhr.timeout = 100000;
    function done(err, feedback) {
      btn.disabled = false;
      btn.textContent = "\ud83e\udd16 Send for AI feedback";
      out.innerHTML = err ? '<p class="wr-grade-err">' + esc(err) + "</p>" : renderGradeFeedback(feedback);
      out.classList.remove("hidden");
    }
    xhr.onload = function () {
      var data = null;
      try { data = JSON.parse(xhr.responseText); } catch (e) {}
      if (xhr.status === 200 && data && data.feedback) done(null, data.feedback);
      else if (xhr.status === 401) done("Session expired — sign in again, then retry.");
      else if (xhr.status === 429) done("Too many requests — wait a minute and retry.");
      else done("Grading failed (" + (data && data.error ? data.error : xhr.status) + "). Try again later.");
    };
    xhr.onerror = function () { done("Network error — check your connection and try again."); };
    xhr.ontimeout = function () { done("Grading timed out — try again."); };
    xhr.send(JSON.stringify({
      level: LEVEL,
      question: spRec.question,
      transcript: transcript,
      secs: spRec.secs,
      wpm: wpm
    }));
  }

  function initSpeakRec() {
    if (!$("sp-rec-btn")) return;
    $("sp-rec-btn").addEventListener("click", spRecToggle);
    $("sp-send").addEventListener("click", spSendForFeedback);
    $("sp-transcript").addEventListener("input", spRecUpdateStats);
  }

  /* ================= §7 字彙卡 (Leitner) =================
     2026-08-25 Tony：「一次 2000 多個全部出來太多了，要能選今天做幾張；錯的放回去重複出現，
     對的就過去；最後的統計一樣要能按 I was guessing。」
     → 一輪固定 5/10/15/20 張（各級數各記各的）；答錯的排回佇列隔兩張再出現，直到答對；
       Leitner 一律以「第一次」的結果計；收尾清單可以補標 guessing，補標的降回 Box 1。 */
  var vocabQueue = [];
  var vbMode = "flip"; // "flip" 自評翻卡 | "type" 拼寫主動回憶
  var VB_SIZES = [5, 10, 15, 20];
  var VB_DEFAULT_SIZE = 10;
  var vbSess = null;   // { total, results: [{front, ok, again, guessed}], seen: {} }

  function K_VBSIZE() { return LEVEL + ".vocab_size"; }
  function vbSize() {
    var n = loadJSON(K_VBSIZE(), null);
    return VB_SIZES.indexOf(n) >= 0 ? n : VB_DEFAULT_SIZE;
  }
  function vbSizeSet(n) { saveJSON(K_VBSIZE(), n); }

  function getVocabState() {
    var st = loadJSON(K_VOCAB, {});
    VOCAB.forEach(function (c) {
      if (!st[c.front]) st[c.front] = { box: 1, last: 0 };
    });
    return st;
  }

  function vocabDue() {
    var st = getVocabState();
    var now = Date.now();
    return VOCAB.filter(function (c) { return leitnerIsDue(st[c.front], now); });
  }

  function buildVocabQueue() {
    var due = shuffle(vocabDue());
    var n = Math.min(vbSize(), due.length);
    vocabQueue = due.slice(0, n);
    vbSess = { total: n, results: [], seen: {} };
  }

  /* 一張卡作答：第一次的結果才進 Leitner／統計；答錯的排回佇列，隔兩張再出現直到答對 */
  function vbAnswer(card, ok) {
    if (!vbSess) buildVocabQueue();
    var st = getVocabState();
    var rec = null;
    for (var i = 0; i < vbSess.results.length; i++) {
      if (vbSess.results[i].front === card.front) { rec = vbSess.results[i]; break; }
    }
    if (!vbSess.seen[card.front]) {
      vbSess.seen[card.front] = true;
      st[card.front] = leitnerReview(st[card.front], ok, Date.now());
      saveJSON(K_VOCAB, st);
      rec = { front: card.front, def: card.def, ok: ok, again: 0, guessed: false };
      vbSess.results.push(rec);
      try { actBump("v"); } catch (e) {}
    }
    if (!ok) {
      if (rec) rec.again++;
      wwBump(card.front);
    }
    vocabQueue.shift();
    if (!ok) vocabQueue.splice(Math.min(2, vocabQueue.length), 0, card);
  }

  function vbProgressHtml() {
    var total = vbSess ? vbSess.total : 0;
    var seen = vbSess ? Object.keys(vbSess.seen).length : 0;
    return "<p>New cards seen: <strong>" + seen + " / " + total +
      "</strong> · still in the pile (including ones you missed): <strong>" + vocabQueue.length + "</strong></p>";
  }

  /* 一輪做完的收尾清單：每張卡都能補標「🤔 I was guessing」（補標＝降回 Box 1 重新排隊） */
  function showVocabSummary() {
    $("vb-card-wrap").classList.add("hidden");
    var tw = $("vb-type-wrap");
    if (tw) tw.classList.add("hidden");
    var res = (vbSess && vbSess.results) || [];
    var right = res.filter(function (r) { return r.ok; }).length;
    var rows = res.map(function (r) {
      return '<div class="review-item ' + (r.ok ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (r.ok ? "✓" : "✗") + " " + esc(r.front) +
        (r.again ? ' <span class="guess-tag">came back ' + r.again + "×</span>" : "") + "</div>" +
        '<div class="review-ans">' + esc(r.def || "") + "</div>" +
        (r.ok ? '<button type="button" class="ghost-btn small vb-guess" data-front="' + esc(r.front) +
          '">🤔 I was guessing</button>' : "") +
        "</div>";
    }).join("");
    var more = vocabDue().length;
    $("vb-status").innerHTML =
      "<h3>Session complete — " + right + " / " + res.length + " right first time</h3>" +
      "<p class='hint'>Got one right but you were really guessing? Tap “🤔 I was guessing” and that card drops back to Box 1, so it comes back tomorrow.</p>" +
      rows +
      "<div class='timer-row center'>" +
      (more ? '<button id="vb-again" class="primary-btn">Next ' + Math.min(vbSize(), more) + " cards (" + more + " still due)</button>" : "<p>🎉 No cards due today.</p>") +
      "</div>";
    var again = $("vb-again");
    if (again) again.addEventListener("click", function () { vbSess = null; vocabQueue = []; renderVocabStatus(); });
  }

  function vbSizeChipsHtml() {
    var cur = vbSize();
    return '<div class="d25-size-row"><span class="hint">Cards this session:</span>' +
      VB_SIZES.map(function (n) {
        return '<button type="button" class="ghost-btn small vb-size' + (n === cur ? " selected" : "") +
          '" data-vbsize="' + n + '">' + n + "</button>";
      }).join("") + "</div>";
  }

  function renderVocabStatus() {
    var sizeRow = $("vb-size-row");
    if (window.CloudSync && CloudSync.promptLogin && !CloudSync.signedIn()) {
      $("vb-status").innerHTML = "<p>🔒 Please sign in (top right) to review vocabulary — so your progress syncs to the cloud.</p>";
      $("vb-card-wrap").classList.add("hidden");
      var tw = $("vb-type-wrap");
      if (tw) tw.classList.add("hidden");
      if (sizeRow) sizeRow.innerHTML = "";
      return;
    }
    if (sizeRow) sizeRow.innerHTML = vbSizeChipsHtml();
    var due = vocabDue().length;
    var statusEl = $("vb-status");
    if (vbSess && vocabQueue.length === 0) { showVocabSummary(); return; }   // 這一輪做完了
    if (due === 0) {
      statusEl.innerHTML = "<p>🎉 No cards due today.</p>";
      $("vb-card-wrap").classList.add("hidden");
      var tw2 = $("vb-type-wrap");
      if (tw2) tw2.classList.add("hidden");
      return;
    }
    if (vocabQueue.length === 0) buildVocabQueue();
    statusEl.innerHTML = "<p>Cards due today: <strong>" + due + "</strong> / " + VOCAB.length +
      " — this session: <strong>" + (vbSess ? vbSess.total : 0) + "</strong></p>";
    if (vocabQueue.length > 0) {
      if (vbMode === "type") {
        $("vb-card-wrap").classList.add("hidden");
        $("vb-type-wrap").classList.remove("hidden");
        showVocabTypeCard();
      } else {
        $("vb-type-wrap").classList.add("hidden");
        $("vb-card-wrap").classList.remove("hidden");
        showVocabCard();
      }
    }
  }

  /* 拼寫模式：定義+例句挖空 → 使用者拼出單字，結果直接餵 Leitner */
  function clozeExample(example, front) {
    try {
      var re = new RegExp(front.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+"), "i");
      if (re.test(example)) return example.replace(re, "______");
    } catch (e) {}
    return null;
  }

  function typeHintCount(front) {
    var words = front.trim().split(/\s+/);
    if (words.length === 1) return front.length + " letters";
    return words.length + " words (" + words.map(function (w) { return w.length; }).join(" + ") + " letters)";
  }

  function showVocabTypeCard() {
    var c = vocabQueue[0];
    var wrap = $("vb-type-wrap");
    if (!c) { showVocabSummary(); return; }
    var st = getVocabState();
    var cloze = clozeExample(c.example, c.front);
    $("vb-type-q").innerHTML =
      '<div class="vb-boxtag">Box ' + st[c.front].box + "</div>" +
      '<div class="def"><strong>' + esc(c.pos) + "</strong> — " + esc(c.def) + "</div>" +
      (cloze ? '<div class="ex">' + esc(cloze) + "</div>" : "") +
      '<div class="hint">First letter: <strong>' + esc(c.front.charAt(0)) + "</strong> · " + typeHintCount(c.front) + "</div>";
    var input = $("vb-type-input");
    input.value = "";
    input.disabled = false;
    $("vb-type-submit").disabled = false;
    $("vb-type-feedback").innerHTML = "";
    $("vb-type-next").classList.add("hidden");
    input.focus();
  }

  function submitVocabType() {
    var c = vocabQueue[0];
    if (!c) return;
    var input = $("vb-type-input");
    var val = input.value.trim();
    if (!val) return;
    var ok = normalizeAnswer(val) === normalizeAnswer(c.front);
    input.disabled = true;
    $("vb-type-submit").disabled = true;
    $("vb-type-feedback").innerHTML = ok
      ? '<p class="verdict-text ok">✓ Correct — <strong>' + esc(c.front) + "</strong></p>"
      : '<p class="verdict-text bad">✗ It was <strong>' + esc(c.front) + "</strong></p><p class='ex'>" + esc(c.example) + "</p>";
    $("vb-type-next").classList.remove("hidden");
    $("vb-type-next").dataset.ok = ok ? "1" : "0";
  }

  function nextVocabType() {
    var ok = $("vb-type-next").dataset.ok === "1";
    var c = vocabQueue[0];
    if (c) vbAnswer(c, ok);
    if (vocabQueue.length > 0) {
      $("vb-status").innerHTML = vbProgressHtml();
      showVocabTypeCard();
    } else showVocabSummary();
  }

  function showVocabCard() {
    var c = vocabQueue[0];
    if (!c) { showVocabSummary(); return; }
    var st = getVocabState();
    var box = st[c.front].box;
    $("vb-card").classList.remove("flipped");
    $("vb-front").innerHTML =
      '<div class="word">' + esc(c.front) + "</div>" +
      '<div class="pos">' + esc(c.pos) + "</div>" +
      '<div class="vb-boxtag">Box ' + box + "</div>";
    $("vb-back").innerHTML =
      '<div class="def"><strong>Definition:</strong> ' + esc(c.def) + "</div>" +
      '<div class="ex">' + esc(c.example) + "</div>";
  }

  function reviewVocab(known) {
    var c = vocabQueue[0];
    if (!c) return;
    vbAnswer(c, known);
    if (vocabQueue.length > 0) {
      $("vb-status").innerHTML = vbProgressHtml();
      showVocabCard();
    } else showVocabSummary();
  }

  function initVocab() {
    // 張數選擇（5/10/15/20）——換張數等於重開一輪
    var sizeRow = $("vb-size-row");
    if (sizeRow) sizeRow.addEventListener("click", function (ev) {
      var b = ev.target && ev.target.closest ? ev.target.closest(".vb-size") : null;
      if (!b) return;
      vbSizeSet(parseInt(b.dataset.vbsize, 10));
      vbSess = null; vocabQueue = [];
      renderVocabStatus();
    });
    // 收尾清單的「🤔 I was guessing」：對的卡片補標後降回 Box 1，明天再出現
    document.addEventListener("click", function (ev) {
      var b = ev.target && ev.target.closest ? ev.target.closest(".vb-guess") : null;
      if (!b || b.disabled) return;
      var front = b.getAttribute("data-front");
      var st = getVocabState();
      st[front] = leitnerReview(st[front], false, Date.now());
      saveJSON(K_VOCAB, st);
      wwBump(front);
      if (vbSess) vbSess.results.forEach(function (r) { if (r.front === front) r.guessed = true; });
      b.disabled = true;
      b.classList.add("selected");
      b.textContent = "🤔 back to Box 1 — you'll see it again";
    });
    $("vb-card").addEventListener("click", function () {
      $("vb-card").classList.toggle("flipped");
    });
    $("vb-yes").addEventListener("click", function () { reviewVocab(true); });
    $("vb-no").addEventListener("click", function () { reviewVocab(false); });
    document.querySelectorAll("[data-vbmode]").forEach(function (b) {
      b.addEventListener("click", function () {
        vbMode = b.dataset.vbmode;
        document.querySelectorAll("[data-vbmode]").forEach(function (x) {
          x.classList.toggle("selected", x === b);
        });
        renderVocabStatus();
      });
    });
    $("vb-type-submit").addEventListener("click", submitVocabType);
    $("vb-type-input").addEventListener("keydown", function (e) {
      if (e.key !== "Enter") return;
      e.preventDefault();
      if ($("vb-type-next").classList.contains("hidden")) submitVocabType(); else nextVocabType();
    });
    $("vb-type-next").addEventListener("click", nextVocabType);
    renderVocabStatus();
  }

  /* ================= §8 進度 ================= */
  function fmtDate(ms) {
    if (!ms) return "—";
    var d = new Date(ms);
    return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() +
      " " + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  }

  function barRow(label, sub, pct, green) {
    return '<div class="pg-row">' +
      '<div class="pg-label"><span>' + esc(label) + '</span><span class="sub">' + esc(sub) + "</span></div>" +
      '<div class="pg-bar-bg"><div class="pg-bar-fill' + (green ? " green" : "") + '" style="width:' + pct + '%"></div></div>' +
      "</div>";
  }

  /* ---------- §8.1 弱點儀表板 ---------- */
  var WK_AREAS = [
    { id: "part1", stat: "part1", paper: "uoe", label: "UoE P1 · MC cloze",
      hist: function (m) { return m.mode === "single" && m.part === "part1"; },
      mb: function (e) { return e.kind === "uoe" && e.payload.part === "part1"; } },
    { id: "part2", stat: "part2", paper: "uoe", label: "UoE P2 · Open cloze",
      hist: function (m) { return m.mode === "single" && m.part === "part2"; },
      mb: function (e) { return e.kind === "uoe" && e.payload.part === "part2"; } },
    { id: "part3", stat: "part3", paper: "uoe", label: "UoE P3 · Word formation",
      hist: function (m) { return m.mode === "single" && m.part === "part3"; },
      mb: function (e) { return e.kind === "uoe" && e.payload.part === "part3"; } },
    { id: "part4", stat: "part4", paper: "uoe", label: "UoE P4 · Key word transformations",
      hist: function (m) { return m.mode === "single" && m.part === "part4"; },
      mb: function (e) { return e.kind === "uoe" && e.payload.part === "part4"; } },
    { id: "rmc", stat: "rmc", paper: "reading", label: "Reading · Multiple choice",
      hist: function (m) { return m.mode === "reading" && m.part === "mc"; },
      mb: function (e) { return e.kind === "rmc"; } },
    { id: "rgap", stat: "rgap", paper: "reading", label: "Reading · Gapped text",
      hist: function (m) { return m.mode === "reading" && m.part === "gap"; },
      mb: function (e) { return e.kind === "rgap"; } },
    { id: "rmatch", stat: "rmatch", paper: "reading", label: "Reading · Multiple matching",
      hist: function (m) { return m.mode === "reading" && m.part === "match"; },
      mb: function (e) { return e.kind === "rmatch"; } },
    { id: "rtfng", stat: "rtfng", paper: "reading", label: "Reading · T/F/Not Given (IELTS)",
      hist: function (m) { return m.mode === "reading" && m.part === "tfng"; },
      mb: function (e) { return e.kind === "rtfng"; } },
    { id: "rhead", stat: "rhead", paper: "reading", label: "Reading · Matching headings (IELTS)",
      hist: function (m) { return m.mode === "reading" && m.part === "head"; },
      mb: function (e) { return e.kind === "rhead"; } },
    { id: "lis", stat: "lis", paper: "listening", label: "Listening",
      hist: function (m) { return m.mode === "listening"; },
      mb: function (e) { return e.kind === "lis"; } }
  ];

  function wkTrend(pcts) {
    if (pcts.length < 4) return null;
    var recent = pcts.slice(-2), earlier = pcts.slice(-4, -2);
    var avg = function (a) { return a.reduce(function (x, y) { return x + y; }, 0) / a.length; };
    var diff = avg(recent) - avg(earlier);
    if (diff >= 5) return { arrow: "↑", cls: "ok", text: "improving" };
    if (diff <= -5) return { arrow: "↓", cls: "bad", text: "declining" };
    return { arrow: "→", cls: "mid", text: "steady" };
  }

  function renderWeakness() {
    var el = $("pg-weakness");
    if (!el) return;
    var stats = loadJSON(K_STATS, {});
    var hist = loadJSON(K_MOCK(), []);
    var book = mbLoad();

    var rows = [];
    WK_AREAS.forEach(function (a) {
      var s = stats[a.stat];
      if (!s || !s.attempted) return;
      var acc = Math.round(100 * s.correct / s.attempted);
      var pcts = hist.filter(a.hist).map(function (m) { return m.pct; });
      rows.push({
        area: a, acc: acc, attempted: s.attempted,
        trend: wkTrend(pcts),
        recent: pcts.slice(-5),
        mbCount: book.filter(a.mb).length
      });
    });

    if (rows.length < 2) {
      el.innerHTML = "<h3>Weakness dashboard</h3><p class='hint'>Complete a few mock exams across different task types and your weak spots will show up here.</p>";
      return;
    }

    /* 預估總分：各 paper 取最近 5 次 mock 平均，再取有資料 paper 的平均 */
    var papers = { uoe: [], reading: [], listening: [] };
    hist.forEach(function (m) {
      var paper = (m.mode === "reading") ? "reading" : (m.mode === "listening") ? "listening" : "uoe";
      papers[paper].push(m.pct);
    });
    var paperAvgs = [];
    Object.keys(papers).forEach(function (k) {
      var p = papers[k].slice(-5);
      if (p.length) paperAvgs.push(p.reduce(function (x, y) { return x + y; }, 0) / p.length);
    });
    var predicted = Math.round(paperAvgs.reduce(function (x, y) { return x + y; }, 0) / paperAvgs.length);
    var passProb = Math.round(100 / (1 + Math.exp(-(predicted - 60) / 6)));
    var v = verdictFor(predicted);

    var html = "<h3>Weakness dashboard</h3>" +
      '<div class="wk-predict"><span class="wk-num ' + v.cls + '">' + predicted + "%</span>" +
      '<span class="wk-sub">estimated overall score · pass probability ~' + passProb + "%</span></div>";

    rows.sort(function (a, b) { return a.acc - b.acc; });
    rows.forEach(function (r, i) {
      var t = r.trend;
      var sub = r.attempted + " answered" +
        (t ? " · " + t.text : "") +
        (r.mbCount ? " · " + r.mbCount + " in mistake book" : "");
      var label = (i === 0 && r.acc < 80 ? "⚠ " : "") + r.area.label +
        (t ? " " + t.arrow : "");
      html += barRow(label, sub, r.acc, r.acc >= 80);
    });

    var weakest = rows[0];
    if (weakest.acc < 80) {
      html += "<p class='hint wk-advice'>Focus suggestion: <strong>" + esc(weakest.area.label) +
        "</strong> (" + weakest.acc + "% correct) — run a few targeted mocks and clear its mistake-book items.</p>";
    }
    el.innerHTML = html;
  }

  function renderMistakeCard() {
    var el = $("pg-mistakes");
    if (!el) return;
    var book = mbLoad();
    var due = mbDueEntries();
    if (!book.length) {
      el.innerHTML = "<h3>Mistake book</h3><p class='hint'>No mistakes saved yet — wrong answers from mock exams are collected here for spaced review.</p>";
      return;
    }
    var html = "<h3>Mistake book</h3><p>" + book.length + " item" + (book.length > 1 ? "s" : "") +
      " in the book · " + due.length + " due for review</p>";
    if (due.length) {
      html += '<button id="mb-review-btn" class="primary-btn">Review now (' + Math.min(due.length, MB_SESSION_CAP) + ")</button>";
    } else {
      html += "<p class='hint'>Nothing due right now — answer correctly to graduate items out of the book.</p>";
    }
    el.innerHTML = html;
    var rb = $("mb-review-btn");
    if (rb) rb.addEventListener("click", startMbDrill);
  }

  /* ---------- §8.2 每日任務 + streak + 週報 + 精熟度 ---------- */
  function switchTab(tabId) {
    var btn = document.querySelector('.tab-btn[data-tab="' + tabId + '"]');
    if (btn) btn.click();
    window.scrollTo(0, 0);
  }

  /* 弱項 = 有作答紀錄的 WK_AREAS 中 rolling 正確率最低者；沒紀錄的排最前（該去練） */
  function weakestArea() {
    var stats = loadJSON(K_STATS, {});
    var best = null;
    WK_AREAS.forEach(function (a) {
      var s = stats[a.stat];
      var m = masteryOf(a.stat);
      var acc = m.n ? m.acc : (s && s.attempted ? Math.round(100 * s.correct / s.attempted) : -1);
      if (best === null || acc < best.acc) best = { area: a, acc: acc };
    });
    return best;
  }

  function startWeakArea(a) {
    if (a.paper === "uoe") { switchTab("tab-uoe"); startMock(a.stat); }
    else if (a.paper === "reading") { switchTab("tab-reading"); startReading(a.id.slice(1)); }
    else { switchTab("tab-listening"); var b = document.querySelector("#ls-picker .mode-btn[data-lkind]"); if (b) b.click(); }
  }

  /* ================= Daily mission — K12 式每日任務 =================
   * 每天 10 / 15 / 20 題（使用者可選，見 d25SizeGet）：UoE（弱點加權）＋閱讀（同篇連續）
   * ＋聽力（同錄音連續）＋到期錯題，配額表在 D25_QUOTAS。
   * 種子 = 日期|級數|長度 → 同一天同一設定永遠同一組題；答錯排回隊尾重做到全對（精熟迴圈）。
   * 紀錄存 <level>.daily25，連續天數沿用 <level>.streak，皆隨雲端同步。 */
  var K_D25 = function () { return LEVEL + ".daily25"; };
  var d25 = null;

  /* ---- 任務長度（2026-08-24）：預設依級數 —— CAE/CPE 一題的閱讀量遠大於 KET/PET，
   *      同樣 20 題實際時間差 2–3 倍，所以高級數預設短一點，使用者仍可自己調。 */
  var K_DSIZE = function () { return LEVEL + ".daily_size"; };
  var D25_DEFAULT_SIZE = { ket: 20, pet: 20, fce: 15, cae: 10, cpe: 10 };
  /* 每題平均分鐘數（估給使用者看的，含讀文章／聽錄音與重做錯題） */
  var D25_MIN_PER_Q = { ket: 0.8, pet: 0.9, fce: 1.1, cae: 1.3, cpe: 1.4 };

  function d25SizeDefault() { return D25_DEFAULT_SIZE[LEVEL] || 20; }

  function d25SizeGet() {
    var n = loadJSON(K_DSIZE(), null);
    return D25_SIZES.indexOf(n) >= 0 ? n : d25SizeDefault();
  }

  function d25SizeSet(n) { saveJSON(K_DSIZE(), n); }

  /* 完成一輪要花多久（分鐘，含收尾拼寫約 3 分鐘）——按鈕上標給使用者判斷今天做不做得完 */
  function d25EstMins(size) {
    return Math.max(5, Math.round(size * (D25_MIN_PER_Q[LEVEL] || 1) + 3));
  }

  function d25TodayRec() { return loadJSON(K_D25(), {})[todayStr()]; }

  function d25SaveRec(rec) {
    var all = loadJSON(K_D25(), {});
    all[todayStr()] = rec;
    var days = Object.keys(all).sort();
    while (days.length > 90) delete all[days.shift()];
    saveJSON(K_D25(), all);
  }

  /* 依配額組出 UoE＋閱讀（counts.psg 篇，同篇共用 gid）＋聽力（同錄音共用 gid）的基本題組。
   * 只吃 rng 與 counts → 同種子同配額必出同一組（Review Test 重組舊日題目也用它）。 */
  function d25ComposeBase(rng, counts) {
    var entries = [];
    PARTS.forEach(function (p) {
      d25Pick(QUESTIONS[p] || [], counts[p], rng).forEach(function (q) {
        entries.push({ kind: "uoe", stat: p, payload: { part: p, q: q } });
      });
    });
    var psg = counts.psg || Math.min(3, Math.max(1, Math.ceil(counts.rmc / 2)));
    var mcSets = d25Pick(rdPool("mc"), Math.min(psg, counts.rmc), rng);
    var rNeed = counts.rmc;
    mcSets.forEach(function (s, si) {
      if (rNeed <= 0) return;
      var take = Math.min(Math.ceil(counts.rmc / mcSets.length), s.questions.length, rNeed);
      d25Pick(s.questions, take, rng).forEach(function (q) {
        entries.push({ kind: "rmc", stat: "rmc", gid: "r" + si, payload: { title: s.title, text: s.text, q: q } });
      });
      rNeed -= take;
    });
    var lsSets = window.LISTENING || [];
    if (lsSets.length && counts.lis) {
      var set = d25Pick(lsSets, 1, rng)[0];
      d25Pick(set.questions, Math.min(counts.lis, set.questions.length), rng).forEach(function (q) {
        entries.push({ kind: "lis", stat: "lis", gid: "l0", payload: { title: set.title, kind: set.kind, script: set.script, q: q } });
      });
    }
    return entries;
  }

  function d25Compose(size) {
    size = D25_SIZES.indexOf(size) >= 0 ? size : d25SizeGet();
    var rng = d25Rng(todayStr() + "|" + LEVEL + "|" + size);
    var stats = loadJSON(K_STATS, {});
    var rated = ["part1", "part2", "part3", "part4", "rmc", "lis"].map(function (k) {
      var s = stats[k] || { attempted: 0, correct: 0 };
      return { key: k, n: s.attempted, acc: s.attempted ? Math.round(100 * s.correct / s.attempted) : 0 };
    });
    var entries = d25ComposeBase(rng, d25Counts(rated, size));
    // 到期錯題混入（配額內）；不足就用備用 UoE 題補滿 size
    var due = mbDueEntries().slice(0, d25Quota(size).due);
    due.forEach(function (e) { entries.push(e); });
    var spareParts = ["part1", "part2", "part3"];
    for (var si2 = 0; entries.length < size && si2 < spareParts.length; si2++) {
      var pool = (QUESTIONS[spareParts[si2]] || []).filter(function (q) {
        return !entries.some(function (e) { return e.kind === "uoe" && e.payload.q === q; });
      });
      var extra = d25Pick(pool, 1, rng)[0];
      if (extra) entries.push({ kind: "uoe", stat: spareParts[si2], payload: { part: spareParts[si2], q: extra } });
    }
    entries = d25Blocks(entries, rng);   // 決定性打散「塊」序：同篇/同錄音題目保持連續
    entries.forEach(function (e, i) { e.d25i = i; });
    return entries;
  }

  /* ---- 防亂做：作答前先鎖住選項（閱讀要先讀文章、聽力要先播錄音） ---- */
  function d25LockAnswers(secs, chipHtml, onUnlock) {
    var area = $("d25-drill-area");
    drill.answersReadyAt = 0;
    var chip = document.createElement("p");
    chip.className = "hint lock-chip";
    area.insertBefore(chip, area.firstChild);
    area.classList.add("answers-locked");
    var token = {};
    drill.lockToken = token;
    function unlock() {
      if (drill.lockToken !== token) return;
      area.classList.remove("answers-locked");
      chip.remove();
      drill.answersReadyAt = Date.now();
      if (onUnlock) onUnlock();
    }
    if (secs === "audio") {   // 聽力：播放過錄音才解鎖
      chip.innerHTML = chipHtml;
      var ab = area.querySelector("[data-audio]");
      if (!ab) { unlock(); return; }
      ab.addEventListener("click", function h() { ab.removeEventListener("click", h); unlock(); });
      return;
    }
    var left = secs;
    chip.innerHTML = chipHtml.replace("{s}", left);
    var iv = setInterval(function () {
      if (drill.lockToken !== token) { clearInterval(iv); return; }
      left--;
      if (left <= 0) { clearInterval(iv); unlock(); return; }
      chip.innerHTML = chipHtml.replace("{s}", left);
    }, 1000);
  }

  function d25ApplyLock(e) {
    if (!d25) return;
    if (e.kind === "rmc" || e.kind === "rtfng") {
      var first = !d25.passSeen[e.payload.title];
      d25.passSeen[e.payload.title] = true;
      d25LockAnswers(first ? 8 : 4, "👀 Read the passage first — answers unlock in {s}s");
    } else if (e.kind === "lis") {
      if (d25.lisPlayed[e.payload.title]) { drill.answersReadyAt = Date.now(); return; }
      d25LockAnswers("audio", "🎧 Play the recording first to unlock the answers", function () {
        d25.lisPlayed[e.payload.title] = true;
      });
    } else {
      d25LockAnswers(3, "🤔 Think it through — answers unlock in {s}s");
    }
  }

  /* 單一條目 → 輕量參照（rvDecodeRef 的反向）；錯題本條目與未知型別回 null */
  function d25RefOf(e) {
    if (e.key) return null;   // 錯題本條目另以 key 表示
    if (e.kind === "uoe") {
      var qi = (QUESTIONS[e.payload.part] || []).indexOf(e.payload.q);
      return qi >= 0 ? { k: e.payload.part, i: qi } : null;
    }
    if (e.kind === "rmc") {
      var mcSets = rdPool("mc");
      for (var s = 0; s < mcSets.length; s++) {
        if (mcSets[s].title !== e.payload.title) continue;
        var ri = mcSets[s].questions.indexOf(e.payload.q);
        return ri >= 0 ? { k: "rmc", s: s, q: ri } : null;
      }
      return null;
    }
    if (e.kind === "lis") {
      var L = window.LISTENING || [];
      for (var t = 0; t < L.length; t++) {
        if (L[t].title !== e.payload.title) continue;
        var li = L[t].questions.indexOf(e.payload.q);
        return li >= 0 ? { k: "lis", s: t, q: li } : null;
      }
      return null;
    }
    return null;
  }

  /* 把當天題目存成輕量參照（Review Test 依此精確重組當日題組）；錯題本混入的條目不存 */
  function d25Refs(entries) {
    var refs = [];
    entries.forEach(function (e) {
      var r = d25RefOf(e);
      if (r) refs.push(r);
    });
    return refs;
  }

  /* ---- 中途進度續做（2026-08-08）：剩餘題目隊列存成參照，隨 <level>.* 雲端同步 ----
   * 換裝置（或關掉分頁）再進 Daily，會從剩下的題目繼續，第一次答對數/用時照舊累計。 */
  var K_DRUN = function () { return LEVEL + ".daily_run"; };

  function d25SaveRun() {
    if (!d25 || !drill || drill.prefix !== "d25") return;
    var q = [];
    drill.queue.forEach(function (e) {
      var r = e.key ? { mb: e.key } : d25RefOf(e);
      if (r) q.push({ r: r, s: d25.seen[e.d25i] ? 1 : 0 });
    });
    saveJSON(K_DRUN(), {
      date: todayStr(), queue: q, firstTotal: d25.firstTotal,
      firstOk: d25.firstOk, rush: d25.rush || 0, elapsed: Date.now() - d25.t0,
      log: d25.log || []
    });
  }

  function d25Resume(run) {
    var book = mbLoad(), items = [];
    (run.queue || []).forEach(function (it) {
      var e = null;
      if (it.r && it.r.mb) {
        for (var i = 0; i < book.length; i++) {
          if (book[i].key === it.r.mb) { e = { key: book[i].key, kind: book[i].kind, payload: book[i].payload }; break; }
        }
      } else if (it.r) {
        e = rvDecodeRef(it.r);
      }
      if (e) { e._seen = it.s === 1; items.push(e); }
    });
    if (!items.length) { saveJSON(K_DRUN(), null); return false; }
    items.forEach(function (e, i) { e.d25i = i; });
    mbReviewedThisSession = {};
    d25 = { seen: {}, firstOk: run.firstOk || 0, firstTotal: run.firstTotal || items.length,
            t0: Date.now() - (run.elapsed || 0), rush: run.rush || 0, rushStreak: 0,
            log: Array.isArray(run.log) ? run.log : [],
            slowdown: false, passSeen: {}, lisPlayed: {} };
    items.forEach(function (e, i) { if (e._seen) d25.seen[i] = true; });
    switchTab("tab-daily");
    startDrillGeneric(d25DrillCfg(items));
    drill.total = d25.firstTotal;
    drill.mastered = Math.max(0, d25.firstTotal - drill.queue.length);
    $("d25-drill-progress").textContent = "Mastered " + drill.mastered + " / " + drill.total +
      " · " + drill.queue.length + " in queue";
    return true;
  }

  function d25DrillCfg(entries) {
    return {
      prefix: "d25",
      summaryId: "daily-home",
      items: entries,
      render: function (e, done) {
        renderMbDrillItem(e, function (ok, txt) {
          /* 倉促作答偵測：解鎖後 <2.5 秒就答錯 = 亂猜；連 2 次觸發強制放慢 */
          if (d25) {
            var fast = drill.answersReadyAt && (Date.now() - drill.answersReadyAt < 2500);
            if (fast && !ok) { d25.rush++; d25.rushStreak++; } else { d25.rushStreak = 0; }
            if (d25.rushStreak >= 2) { d25.slowdown = true; d25.rushStreak = 0; }
          }
          if (d25 && !d25.seen[e.d25i]) {
            d25.seen[e.d25i] = true;
            if (ok) d25.firstOk++;
            if (e.stat) { try { recordResult(e.stat, ok); } catch (err) {} }
            if (!ok) { try { wlogAdd(e.stat || e.kind, wlogQText(e), txt, mbCorrectText(e)); } catch (err) {} }
            /* 猜對的照樣進錯題本（已經在本子裡的由 mbReview 處理） */
            if (ok && guessTaken() && !e.key) { try { mbAdd(e.kind, e.payload); } catch (err) {} }
            /* 逐題紀錄，供完成後的「今天做了哪些題」回顧與事後補標 */
            try {
              d25.log.push({ r: e.key ? { mb: e.key } : d25RefOf(e), ok: ok ? 1 : 0, g: guessTaken() ? 1 : 0 });
            } catch (err) {}
          }
          done(ok, txt);
          try { d25SaveRun(); } catch (err) {}   // 每答一題就把剩餘隊列存檔（換裝置可續做）
        });
        d25ApplyLock(e);
      },
      nextDelaySecs: function () {
        if (d25 && d25.slowdown) { d25.slowdown = false; return 8; }
        return 0;
      },
      correctText: mbCorrectText,
      explText: mbExplText,
      onComplete: d25Complete
    };
  }

  function startDaily25() {
    if (needLogin()) return;
    var rec = d25TodayRec();
    if (rec && rec.done) { switchTab("tab-daily"); return; }
    var run = loadJSON(K_DRUN(), null);
    if (run && run.date === todayStr() && run.queue && run.queue.length && d25Resume(run)) return;
    var size = d25SizeGet();
    var entries = d25Compose(size);
    if (entries.length < Math.min(10, size)) { UIDialog.alert("Not enough questions available at this level yet."); return; }
    var prev = d25TodayRec() || {};
    prev.refs = d25Refs(entries);
    d25SaveRec(prev);
    mbReviewedThisSession = {};
    d25 = { seen: {}, firstOk: 0, firstTotal: entries.length, t0: Date.now(), log: [],
            rush: 0, rushStreak: 0, slowdown: false, passSeen: {}, lisPlayed: {} };
    switchTab("tab-daily");
    startDrillGeneric(d25DrillCfg(entries));
  }

  function d25Complete() {
    if (!d25) return;
    var ms = Date.now() - d25.t0;
    var prevRec = d25TodayRec() || {};
    d25SaveRec({ done: true, total: d25.firstTotal, firstOk: d25.firstOk, ms: ms,
                 rushed: d25.rush || 0, finishedAt: Date.now(), refs: prevRec.refs,
                 log: d25.log || [], spell: prevRec.spell });
    saveJSON(K_DRUN(), null);   // 今日已完成，清掉中途進度
    var s = checkStreak(true);
    var mins = Math.max(1, Math.round(ms / 60000));
    var perfect = d25.firstOk === d25.firstTotal;
    dspSummaryHtml =
      "🎯 Questions: <strong>" + d25.firstOk + " / " + d25.firstTotal + "</strong> right on the first try" +
      (perfect ? " — a perfect run! 🏅" : "") +
      "<br>About " + mins + " min · 🔥 " + s.current + "-day streak" +
      (s.best > s.current ? " (best " + s.best + ")" : "") +
      (d25.rush > 0 ? "<br>⚡ " + d25.rush + " rushed answer" + (d25.rush > 1 ? "s" : "") + " — take your time tomorrow!" : "");
    d25 = null;
    renderDailyBanner();
    dspBegin();   // 收尾接拼寫練習；沒有單字資料時會直接顯示總結
  }

  /* ================= Daily Spelling — 每日任務收尾的拼寫練習 =================
   * 完成每日任務後：以「日期|級數|spell」種子決定性抽出當天 5–10 個本級單字（依任務長度），
   * 先逐張複習（單字＋定義＋例句），再看定義拼出單字；拼錯排回隊尾重做到全對。
   * 第一次作答結果餵 Leitner 字彙盒與 word_wrong/wrong_log；紀錄存當日 rec.spell。 */
  var dsp = null;           // { words, idx, queue, first, firstOk, total }
  var dspSummaryHtml = "";  // 每日任務成績摘要，最後與拼寫成績一起顯示

  function dspWords() {
    var pool = (typeof VOCAB !== "undefined" && VOCAB && VOCAB.length) ? VOCAB : [];
    var n = d25Quota(d25SizeGet()).spell;   // 任務縮短時拼寫也跟著縮（10 題版 5 字）
    var rng = d25Rng(todayStr() + "|" + LEVEL + "|spell");
    return d25Pick(pool, Math.min(n, pool.length), rng);
  }

  function dspHideAll() {
    ["daily-home", "d25-drill", "d25-congrats", "dsp-review", "dsp-quiz", "dsp-congrats"]
      .forEach(function (id) { var el = $(id); if (el) el.classList.add("hidden"); });
  }

  function dspBegin() {
    var words = dspWords();
    if (!words.length) { dspFinish(null); return; }
    dsp = { words: words, idx: 0, queue: [], first: {}, firstOk: 0, total: words.length };
    dspHideAll();
    $("dsp-review").classList.remove("hidden");
    dspRenderReview();
    window.scrollTo(0, 0);
  }

  function dspRenderReview() {
    var c = dsp.words[dsp.idx];
    $("dsp-review-card").innerHTML =
      '<div class="hint">Word ' + (dsp.idx + 1) + " / " + dsp.words.length + "</div>" +
      '<div class="dsp-word">' + esc(c.front) + "</div>" +
      '<div class="def"><strong>' + esc(c.pos) + "</strong> — " + esc(c.def) + "</div>" +
      '<div class="ex">' + esc(c.example) + "</div>";
    $("dsp-review-prev").disabled = dsp.idx === 0;
    $("dsp-review-next").textContent = dsp.idx === dsp.words.length - 1 ? "Start spelling quiz ✍️" : "Next word →";
  }

  function dspStartQuiz() {
    var rng = d25Rng(todayStr() + "|" + LEVEL + "|spellquiz");
    dsp.queue = d25Pick(dsp.words, dsp.words.length, rng);
    dspHideAll();
    $("dsp-quiz").classList.remove("hidden");
    dspRenderQ();
    window.scrollTo(0, 0);
  }

  function dspRenderQ() {
    if (!dsp.queue.length) { dspComplete(); return; }
    $("dsp-progress").textContent = "Mastered " + (dsp.total - dsp.queue.length) + " / " + dsp.total +
      " · " + dsp.queue.length + " to go";
    var c = dsp.queue[0];
    var cloze = clozeExample(c.example, c.front);
    $("dsp-q").innerHTML =
      '<div class="def"><strong>' + esc(c.pos) + "</strong> — " + esc(c.def) + "</div>" +
      (cloze ? '<div class="ex">' + esc(cloze) + "</div>" : "") +
      '<div class="hint">First letter: <strong>' + esc(c.front.charAt(0)) + "</strong> · " + typeHintCount(c.front) + "</div>";
    var input = $("dsp-input");
    input.value = "";
    input.disabled = false;
    $("dsp-submit").disabled = false;
    $("dsp-feedback").innerHTML = "";
    $("dsp-next").classList.add("hidden");
    input.focus();
  }

  function dspSubmit() {
    if (!dsp || !dsp.queue.length) return;
    var c = dsp.queue[0];
    var input = $("dsp-input");
    var val = input.value.trim();
    if (!val) return;
    var ok = normalizeAnswer(val) === normalizeAnswer(c.front);
    input.disabled = true;
    $("dsp-submit").disabled = true;
    if (!dsp.first[c.front]) {           // 只有第一次作答計分、餵 Leitner／錯字統計
      dsp.first[c.front] = true;
      if (ok) dsp.firstOk++;
      try {
        var st = getVocabState();
        st[c.front] = leitnerReview(st[c.front], ok, Date.now());
        saveJSON(K_VOCAB, st);
        actBump("v");
      } catch (e) {}
      if (!ok) {
        wwBump(c.front);
        wlogAdd("spell", "Spell the word: " + c.def, val, c.front);
      }
    }
    $("dsp-feedback").innerHTML = ok
      ? '<p class="verdict-text ok">✓ Correct — <strong>' + esc(c.front) + "</strong></p>"
      : '<p class="verdict-text bad">✗ It’s spelled <strong>' + esc(c.front) +
        '</strong> — this word goes back in the queue.</p><p class="ex">' + esc(c.example) + "</p>";
    var nb = $("dsp-next");
    nb.textContent = (dsp.queue.length === 1 && ok) ? "Finish" : "Next";
    nb.classList.remove("hidden");
    nb.dataset.ok = ok ? "1" : "0";
    setTimeout(function () { nb.focus(); }, 0);
  }

  function dspNextWord() {
    if (!dsp) return;
    var ok = $("dsp-next").dataset.ok === "1";
    var c = dsp.queue.shift();
    if (!ok) dsp.queue.push(c);
    dspRenderQ();
  }

  function dspComplete() {
    var rec = d25TodayRec() || {};
    rec.spell = { done: true, total: dsp.total, firstOk: dsp.firstOk,
                  words: dsp.words.map(function (c) { return c.front; }) };
    d25SaveRec(rec);
    dspFinish(dsp);
  }

  function dspFinish(d) {
    dsp = null;
    dspHideAll();
    var html = dspSummaryHtml || "";
    if (d) {
      html += (html ? "<br>" : "") + "✍️ Spelling: <strong>" + d.firstOk + " / " + d.total +
        "</strong> right first try" +
        (d.firstOk === d.total ? " — perfect! 🐝" : " — and you mastered every word in the redo loop.");
    }
    html += (html ? "<br>" : "") +
      "Back on the Daily tab you can go through today's questions one by one — if you got one right " +
      "but were really guessing, tap “🤔 I was guessing” there and it joins your mistake book." +
      "<br>Come back tomorrow — a fresh mission arrives at midnight.";
    $("dsp-congrats-text").innerHTML = html;
    $("dsp-congrats").classList.remove("hidden");
    dropConfetti($("dsp-congrats"));
    dspSummaryHtml = "";
    renderDailyBanner();
    window.scrollTo(0, 0);
  }

  function initDailySpelling() {
    if (!$("dsp-review")) return;
    $("dsp-review-prev").addEventListener("click", function () {
      if (dsp && dsp.idx > 0) { dsp.idx--; dspRenderReview(); }
    });
    $("dsp-review-next").addEventListener("click", function () {
      if (!dsp) return;
      if (dsp.idx >= dsp.words.length - 1) dspStartQuiz();
      else { dsp.idx++; dspRenderReview(); }
    });
    $("dsp-quit").addEventListener("click", function () {
      UIDialog.confirm("Quit spelling practice? Today's questions are already saved; the spelling round won't be recorded.", function () {
        dsp = null;
        dspSummaryHtml = "";
        dspHideAll();
        $("daily-home").classList.remove("hidden");
        renderDaily();
      });
    });
    $("dsp-submit").addEventListener("click", dspSubmit);
    $("dsp-input").addEventListener("keydown", function (e) {
      if (e.key !== "Enter") return;
      e.preventDefault();
      if ($("dsp-next").classList.contains("hidden")) dspSubmit(); else dspNextWord();
    });
    $("dsp-next").addEventListener("click", dspNextWord);
    $("dsp-congrats-home").addEventListener("click", function () {
      dspHideAll();
      $("daily-home").classList.remove("hidden");
      renderDaily();
    });
  }

  function initDaily25() {
    renderDailyBanner();
    var banner = $("daily-banner");
    if (banner) banner.addEventListener("click", function () {
      var rec = d25TodayRec();
      if (rec && rec.done) switchTab("tab-daily");
      else startDaily25();
    });
    $("d25-drill-quit").addEventListener("click", function () {
      UIDialog.confirm("Pause today's mission? Your progress is saved — continue any time, even on another device.", function () {
        mbStopAudio();
        d25 = null;
        $("d25-drill").classList.add("hidden");
        $("daily-home").classList.remove("hidden");
        renderDaily();
      });
    });
    $("d25-congrats-home").addEventListener("click", function () {
      $("d25-congrats").classList.add("hidden");
      $("daily-home").classList.remove("hidden");
      renderDaily();
    });
  }

  function renderDailyBanner() {
    var el = $("daily-banner");
    if (!el) return;
    el.classList.remove("hidden");
    var rec = d25TodayRec();
    var s = loadJSON(K_STREAK(), { current: 0 });
    if (rec && rec.done) {
      el.innerHTML = "🎯 Daily " + rec.total + " &nbsp;✅ " + rec.firstOk + "/" + rec.total + " today" +
        (s.current ? " &nbsp;·&nbsp; 🔥 " + s.current + " day" + (s.current === 1 ? "" : "s") : "");
      el.classList.add("done");
    } else {
      el.innerHTML = "🎯 <strong>Daily " + d25SizeGet() + "</strong> — start today's mission" +
        (s.current ? " &nbsp;·&nbsp; 🔥 " + s.current + " day" + (s.current === 1 ? "" : "s") + " — keep it alive!" : "");
      el.classList.remove("done");
    }
  }

  function checkStreak(allDone) {
    var s = loadJSON(K_STREAK(), { current: 0, best: 0, lastDone: null });
    if (!allDone || s.lastDone === todayStr()) return s;
    var yesterday = todayStr(Date.now() - DAY_MS);
    s.current = (s.lastDone === yesterday) ? s.current + 1 : 1;
    s.best = Math.max(s.best, s.current);
    s.lastDone = todayStr();
    saveJSON(K_STREAK(), s);
    return s;
  }

  function dailyRow(done, label, sub, btnId, btnText) {
    return '<div class="daily-row' + (done ? " done" : "") + '">' +
      '<span class="daily-check">' + (done ? "✅" : "⬜") + "</span>" +
      '<span class="daily-label">' + label + '<span class="sub">' + esc(sub) + "</span></span>" +
      (done || !btnId ? "" : '<button id="' + btnId + '" class="ghost-btn small">' + esc(btnText) + "</button>") +
      "</div>";
  }

  function renderDaily() {
    var el = $("pg-daily");
    if (!el) return;
    var rec = d25TodayRec();
    var s = checkStreak(!!(rec && rec.done));
    var hist = loadJSON(K_D25(), {});
    var wk = weakestArea();
    var size = d25SizeGet();

    var html = "<h3>🎯 Daily " + size +
      '<span class="streak-tag">🔥 ' + s.current + " day" + (s.current === 1 ? "" : "s") +
      (s.best > s.current ? " · best " + s.best : "") + "</span></h3>";
    if (rec && rec.done) {
      html += "<p class='verdict-text ok daily-done-msg'>✅ Done today — <strong>" +
        rec.firstOk + " / " + rec.total + "</strong> right first try · about " +
        Math.max(1, Math.round(rec.ms / 60000)) + " min" +
        (rec.rushed > 0 ? " · ⚡ " + rec.rushed + " rushed answer" + (rec.rushed > 1 ? "s" : "") : "") +
        (rec.spell && rec.spell.done ? " · ✍️ spelling " + rec.spell.firstOk + " / " + rec.spell.total + " first try" : "") +
        ". See you tomorrow!</p>";
      if (!(rec.spell && rec.spell.done)) {
        html += "<p class='hint'>One thing left: today's " + d25Quota(size).spell + "-word spelling round.</p>" +
          '<button id="dsp-start-late" class="primary-btn">✍️ Start spelling practice</button>';
      }
      html += d25RecapHtml(rec);
    } else {
      var run = loadJSON(K_DRUN(), null);
      var resumable = run && run.date === todayStr() && run.queue && run.queue.length;
      html += "<p>Your mission today: <strong>" + size + " questions</strong> mixed from Use of English, Reading and Listening" +
        (wk && wk.acc >= 0 && wk.acc < 100 ? ", tuned toward your weakest area (" + esc(wk.area.label) + ")" : "") +
        ", then a <strong>" + d25Quota(size).spell + "-word spelling round</strong>. Wrong answers go back in the queue until you master every one.</p>" +
        d25SizeChipsHtml(size, resumable) +
        (resumable
          ? '<button id="d25-start" class="primary-btn">Continue today\'s mission (' + run.queue.length + ' left)</button>'
          : '<button id="d25-start" class="primary-btn">Start today\'s mission · ' + size +
            " questions · about " + d25EstMins(size) + " min</button>");
    }
    var dots = "";
    for (var i = 6; i >= 0; i--) {
      var dkey = todayStr(Date.now() - i * DAY_MS);
      var r = hist[dkey];
      dots += '<span class="d25-dot' + (r && r.done ? " on" : "") + '" title="' + dkey +
        (r && r.done ? " · " + r.firstOk + "/" + r.total : "") + '">' + (r && r.done ? "✓" : "·") + "</span>";
    }
    html += '<div class="d25-week">' + dots + "</div>";
    html += "<p class='hint'>Same set all day — a fresh one arrives at midnight. Due mistake-book items are mixed in automatically.</p>";
    el.innerHTML = html;

    var b = $("d25-start");
    if (b) b.addEventListener("click", startDaily25);
    var sb = $("dsp-start-late");
    if (sb) sb.addEventListener("click", function () { dspSummaryHtml = ""; dspBegin(); });
    el.querySelectorAll("[data-d25size]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var n = parseInt(btn.getAttribute("data-d25size"), 10);
        if (n === d25SizeGet()) return;
        var run = loadJSON(K_DRUN(), null);
        var live = run && run.date === todayStr() && run.queue && run.queue.length;
        function apply() {
          d25SizeSet(n);
          if (live) saveJSON(K_DRUN(), null);   // 換長度 → 今天重新組卷，舊的半套進度作廢
          renderDaily();
          renderDailyBanner();
        }
        if (live) {
          UIDialog.confirm("Switch to " + n + " questions a day? Today's half-finished set will be replaced by a fresh one.", apply);
        } else apply();
      });
    });
  }

  /* 今天做了哪些題（2026-08-24 Tony 要求）：完成後在 Daily 頁列出逐題對錯與解析，
   * 每題附「🤔 I was guessing」，作答當下忘了按的可以事後補標，補了就進錯題本。
   * 資料來自當日紀錄的 log（參照式，隨 <level>.daily25 雲端同步）。 */
  function d25RecapHtml(rec) {
    var log = (rec && rec.log) || [];
    if (!log.length) return "";
    var book = mbLoad();
    var rows = "", shown = 0;
    log.forEach(function (it) {
      var e = null;
      if (it.r && it.r.mb) {
        for (var k = 0; k < book.length; k++) {
          if (book[k].key === it.r.mb) { e = { key: book[k].key, kind: book[k].kind, payload: book[k].payload }; break; }
        }
      } else if (it.r) {
        e = rvDecodeRef(it.r);
      }
      if (!e) return;   // 題庫改版後參照失效就略過，不要整段壞掉
      shown++;
      rows +=
        '<div class="review-item ' + (it.ok ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (it.ok ? "✓" : "✗") + " Question " + shown +
        (it.g ? ' <span class="guess-tag">🤔 guessed — in the mistake book</span>' : "") + "</div>" +
        "<p>" + esc(wlogQText(e)) + "</p>" +
        '<div class="review-ans"><strong>Correct answer: </strong>' + esc(mbCorrectText(e)) + "</div>" +
        '<div class="expl">' + esc(mbExplText(e)) + "</div>" +
        retroGuessHtml(e.kind, e.payload, !!(it.g || e.key)) +
        "</div>";
    });
    if (!shown) return "";
    return '<details class="d25-recap"><summary>📋 Today\'s questions — check the ones you guessed (' +
      shown + ")</summary>" +
      "<p class='hint'>Got one right but you were really guessing? Tap “🤔 I was guessing” on it and " +
      "it goes into the mistake book, so it comes back another day.</p>" + rows + "</details>";
  }

  /* 任務長度選擇（10 / 15 / 20），每個級數各記各的，隨 <level>.* 雲端同步 */
  function d25SizeChipsHtml(size, resumable) {
    var chips = D25_SIZES.map(function (n) {
      return '<button type="button" class="ghost-btn small d25-size' + (n === size ? " selected" : "") +
        '" data-d25size="' + n + '">' + n + ' <span class="sub">≈' + d25EstMins(n) + " min</span></button>";
    }).join("");
    return '<div class="d25-size-row"><span class="hint">Questions per day' +
      (resumable ? " — changing this starts a fresh set for today" : "") + ":</span>" + chips + "</div>";
  }

  /* ================= Review Test — 挑日期＋錯題出 100 分考卷 =================
   * 題源：所選日期的每日任務題目（新紀錄有 rec.refs 可精確重組；舊紀錄無 refs
   * 則以中性配額＋當日種子近似重組）＋錯題本隨機抽題。真隨機組卷（每次不同），
   * 同篇文章/同段錄音的題目連續出現；每題等分、滿分 100。答錯照樣進錯題本。 */
  var K_RV = function () { return LEVEL + ".review_tests"; };
  /* 考卷長度可選 10 / 15 / 20（2026-08-24，與每日任務同一組選項；分數一律換算成滿分 100）。
   * 錯題本佔比固定約三成，長度縮短時跟著縮。 */
  var RV_SIZES = [10, 15, 20];
  var RV_MB_SHARE_OF = { 10: 3, 15: 5, 20: 6 };
  var K_RVSIZE = function () { return LEVEL + ".review_size"; };
  var rv = null;

  function rvSize() {
    var n = loadJSON(K_RVSIZE(), null);
    if (RV_SIZES.indexOf(n) >= 0) return n;
    return d25SizeGet();   // 沒特別設就跟著每日任務的長度（高級數預設短一點）
  }
  function rvMbShare(size) { return RV_MB_SHARE_OF[size] || 6; }

  function rvDecodeRef(r) {
    if (r.k === "rmc") {
      var s = rdPool("mc")[r.s];
      if (!s || !s.questions[r.q]) return null;
      return { kind: "rmc", stat: "rmc", payload: { title: s.title, text: s.text, q: s.questions[r.q] } };
    }
    if (r.k === "lis") {
      var set = (window.LISTENING || [])[r.s];
      if (!set || !set.questions[r.q]) return null;
      return { kind: "lis", stat: "lis", payload: { title: set.title, kind: set.kind, script: set.script, q: set.questions[r.q] } };
    }
    var q = (QUESTIONS[r.k] || [])[r.i];
    if (!q) return null;
    return { kind: "uoe", stat: r.k, payload: { part: r.k, q: q } };
  }

  function rvEntriesForDate(date) {
    var rec = loadJSON(K_D25(), {})[date];
    if (rec && rec.refs && rec.refs.length) {
      return rec.refs.map(rvDecodeRef).filter(Boolean);
    }
    return d25ComposeBase(d25Rng(date + "|" + LEVEL), d25Counts([]));
  }

  function rvCompose(dates, includeMb, total) {
    var seen = {}, pool = [], items = [];
    total = total || rvSize();
    dates.forEach(function (d) {
      rvEntriesForDate(d).forEach(function (e) {
        var k = mbKey(e.kind, e.payload);
        if (seen[k]) return;
        seen[k] = true;
        pool.push({ kind: e.kind, stat: e.stat, payload: e.payload, src: d });
      });
    });
    if (includeMb) {
      shuffle(mbLoad()).forEach(function (m) {
        if (items.length >= rvMbShare(total) || seen[m.key]) return;
        seen[m.key] = true;
        items.push({ kind: m.kind, key: m.key, payload: m.payload, src: "mb" });
      });
    }
    shuffle(pool).slice(0, Math.max(0, total - items.length)).forEach(function (e) { items.push(e); });
    // 同篇文章/同段錄音共用 gid（跨日期也合併），洗牌後仍連續出現
    items.forEach(function (e) {
      if (e.kind === "rmc" || e.kind === "rtfng") e.gid = "r|" + e.payload.title;
      else if (e.kind === "lis") e.gid = "l|" + e.payload.title;
      else e.gid = null;
    });
    return d25Blocks(items, Math.random);
  }

  function rvRenderHome() {
    var el = $("rv-days");
    if (!el) return;
    var all = loadJSON(K_D25(), {});
    var days = Object.keys(all).sort().reverse().slice(0, 21);
    if (!days.length) {
      el.innerHTML = "<p class='hint'>No daily records yet — finish a daily mission first, then come back to test it.</p>";
    } else {
      el.innerHTML = days.map(function (d) {
        var r = all[d];
        var sub = r && r.done ? "✅ " + r.firstOk + "/" + r.total : "started, not finished";
        return '<label class="rv-day"><input type="checkbox" value="' + d + '"> <span>' + d +
          '</span><span class="rv-day-sub">' + sub + "</span></label>";
      }).join("");
    }
    rvRenderSize();
    rvRenderHistory();
  }

  /* 考卷長度晶片（10 / 15 / 20），與 mastery check 共用同一個設定 */
  function rvRenderSize() {
    var box = $("rv-size");
    if (!box) return;
    var size = rvSize();
    box.innerHTML = RV_SIZES.map(function (n) {
      return '<button type="button" class="ghost-btn small d25-size' + (n === size ? " selected" : "") +
        '" data-rvsize="' + n + '">' + n + ' <span class="sub">questions</span></button>';
    }).join("") +
      "<p class='hint'>Scored out of 100 either way — a shorter test just means each question is worth more." +
      (rvMbShare(size) ? " About " + rvMbShare(size) + " of them come from your mistake book." : "") + "</p>";
    box.className = "d25-size-row";
    box.querySelectorAll("[data-rvsize]").forEach(function (b) {
      b.addEventListener("click", function () {
        saveJSON(K_RVSIZE(), parseInt(b.getAttribute("data-rvsize"), 10));
        rvRenderSize();
      });
    });
    var mn = $("rv-mastery-n");
    if (mn) mn.textContent = size;
  }

  function rvRenderHistory() {
    var el = $("rv-history");
    if (!el) return;
    var hist = loadJSON(K_RV(), []);
    var html = "<h3>Past tests</h3>";
    if (!hist.length) {
      html += "<p class='hint'>No review tests taken yet.</p>";
    } else {
      hist.slice(-8).reverse().forEach(function (h) {
        html += "<p><strong>" + h.score + " / 100</strong> · " + h.correct + "/" + h.n + " correct · " +
          esc(h.date) + " · " +
          (h.mastery ? "🎯 mastery check" : h.days.length + " day" + (h.days.length === 1 ? "" : "s") + " tested") +
          (h.rushed ? " · ⚡" + h.rushed + " rushed" : "") + "</p>";
      });
    }
    el.innerHTML = html;
  }

  function rvSrc(e) { return e.src === "mb" ? "mistake book" : e.src; }

  /* ---- Mastery check（Tony 2026-08-12）：從近 7 天練過的區塊（模擬考/閱讀/聽力/每日都算）
   * 抽「新題」出卷檢驗是否真的精熟；成績記入同一份 review_tests，家長檢視看得到。 */
  var RV_SEC_SHORT = { part1: "UoE P1", part2: "UoE P2", part3: "UoE P3", part4: "UoE P4", rmc: "Reading", lis: "Listening" };

  function rvRecentSections() {
    var stats = loadJSON(K_STATS, {});
    var cut = Date.now() - 7 * DAY_MS;
    return ["part1", "part2", "part3", "part4", "rmc", "lis"].filter(function (k) {
      return stats[k] && stats[k].attempted > 0 && (stats[k].last || 0) >= cut;
    });
  }

  function rvMasteryPool(k) {
    var out = [];
    if (k === "rmc") {
      rdPool("mc").forEach(function (s) {
        s.questions.forEach(function (q) {
          out.push({ kind: "rmc", stat: "rmc", payload: { title: s.title, text: s.text, q: q }, src: RV_SEC_SHORT[k] });
        });
      });
    } else if (k === "lis") {
      (window.LISTENING || []).forEach(function (s) {
        s.questions.forEach(function (q) {
          out.push({ kind: "lis", stat: "lis", payload: { title: s.title, kind: s.kind, script: s.script, q: q }, src: RV_SEC_SHORT[k] });
        });
      });
    } else {
      (QUESTIONS[k] || []).forEach(function (q) {
        out.push({ kind: "uoe", stat: k, payload: { part: k, q: q }, src: RV_SEC_SHORT[k] });
      });
    }
    return shuffle(out);
  }

  function rvStartMastery() {
    var secs = rvRecentSections();
    if (!secs.length) { UIDialog.alert("No practice recorded in the last 7 days — do some practice first, then come back to check mastery."); return; }
    var pools = secs.map(rvMasteryPool);
    var total = rvSize();
    var items = [], seen = {}, more = true;
    while (items.length < total && more) {   // round-robin：每個練過的區塊輪流抽一題
      more = false;
      pools.forEach(function (p) {
        if (items.length >= total) return;
        while (p.length) {
          var e = p.pop();
          var kk = mbKey(e.kind, e.payload);
          if (seen[kk]) continue;
          seen[kk] = true;
          items.push(e);
          more = true;
          break;
        }
      });
    }
    if (items.length < 5) { UIDialog.alert("Not enough questions available for a mastery check."); return; }
    items.forEach(function (e) {
      if (e.kind === "rmc" || e.kind === "rtfng") e.gid = "r|" + e.payload.title;
      else if (e.kind === "lis") e.gid = "l|" + e.payload.title;
      else e.gid = null;
    });
    items = d25Blocks(items, Math.random);
    mbReviewedThisSession = {};
    rv = { items: items, idx: 0, correct: 0, rushed: 0, t0: Date.now(), days: [], mastery: true,
           secs: secs.map(function (k) { return RV_SEC_SHORT[k]; }), reviewHtml: "" };
    $("rv-home").classList.add("hidden");
    $("rv-summary").classList.add("hidden");
    $("rv-quiz").classList.remove("hidden");
    rvRenderItem();
    window.scrollTo(0, 0);
  }

  function rvStart() {
    var days = Array.prototype.slice.call(document.querySelectorAll("#rv-days input:checked"))
      .map(function (c) { return c.value; });
    var includeMb = $("rv-mb").checked;
    if (!days.length && !includeMb) { UIDialog.alert("Pick at least one day, or include mistake-book questions."); return; }
    var items = rvCompose(days, includeMb);
    if (items.length < 5) { UIDialog.alert("Not enough questions from that selection — pick more days."); return; }
    mbReviewedThisSession = {};
    rv = { items: items, idx: 0, correct: 0, rushed: 0, t0: Date.now(), days: days, reviewHtml: "" };
    $("rv-home").classList.add("hidden");
    $("rv-summary").classList.add("hidden");
    $("rv-quiz").classList.remove("hidden");
    rvRenderItem();
    window.scrollTo(0, 0);
  }

  function rvRenderItem() {
    audioStopAll();
    var e = rv.items[rv.idx];
    $("rv-progress").textContent = "Question " + (rv.idx + 1) + " / " + rv.items.length;
    $("rv-feedback").innerHTML = "";
    var shownAt = Date.now();
    renderMbDrillItemInto($("rv-area"), e, function (ok, txt) {
      audioStopAll();
      var wasGuess = guessTaken();
      if (ok) rv.correct++;
      else if (Date.now() - shownAt < 2500) rv.rushed++;
      if (e.stat) { try { recordResult(e.stat, ok); } catch (err) {} }
      if ((!ok || wasGuess) && e.src !== "mb" && (e.kind === "uoe" || e.kind === "rmc" || e.kind === "lis")) {
        try { mbAdd(e.kind, e.payload); } catch (err) {}
      }
      rv.reviewHtml +=
        '<div class="review-item ' + (ok ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (ok ? "✓" : "✗") + " Question " + (rv.idx + 1) +
        ' <span class="rv-src-tag">(from ' + esc(rvSrc(e)) + ")</span>" +
        (wasGuess ? ' <span class="guess-tag">🤔 guessed' + (ok ? " — sent to mistake book" : "") + "</span>" : "") +
        "</div>" +
        '<div class="review-ans"><strong>Your answer: </strong>' + esc(txt) + "</div>" +
        '<div class="review-ans"><strong>Correct answer: </strong>' + esc(mbCorrectText(e)) + "</div>" +
        (ok ? "" : '<div class="expl">' + esc(mbExplText(e)) + "</div>") +
        retroGuessHtml(e.kind, e.payload, !ok || wasGuess || e.src === "mb") +
        "</div>";
      $("rv-area").querySelectorAll("button, input").forEach(function (el) { el.disabled = true; });
      var fb = $("rv-feedback");
      fb.innerHTML = ok
        ? '<div class="review-item ok"><div class="review-verdict">✓ Correct' +
          (wasGuess ? ' <span class="guess-tag">🤔 guessed — sent to mistake book</span></div>' +
            '<div class="expl">' + esc(mbExplText(e)) + "</div>" : "</div>") + "</div>"
        : '<div class="review-item bad"><div class="review-verdict">✗ Wrong</div>' +
          '<div class="review-ans"><strong>Correct answer: </strong>' + esc(mbCorrectText(e)) + "</div>" +
          '<div class="expl">' + esc(mbExplText(e)) + "</div></div>";
      var btn = document.createElement("button");
      btn.className = "primary-btn";
      btn.textContent = rv.idx + 1 < rv.items.length ? "Next question" : "Finish";
      btn.addEventListener("click", function () {
        rv.idx++;
        if (rv.idx >= rv.items.length) rvFinish();
        else { rvRenderItem(); window.scrollTo(0, 0); }
      });
      fb.appendChild(btn);
      btn.focus();
    });
    addGuessOne($("rv-area"));   // Review Test 也能標「這題是猜的」
  }

  function rvFinish() {
    audioStopAll();
    var n = rv.items.length;
    var score = Math.round(100 * rv.correct / n);
    var hist = loadJSON(K_RV(), []);
    hist.push({ ts: Date.now(), date: todayStr(), days: rv.days, n: n, correct: rv.correct,
                score: score, rushed: rv.rushed, ms: Date.now() - rv.t0, mastery: rv.mastery ? 1 : 0 });
    if (hist.length > 30) hist = hist.slice(-30);
    saveJSON(K_RV(), hist);
    var v = verdictFor(score);
    $("rv-quiz").classList.add("hidden");
    $("rv-summary").classList.remove("hidden");
    $("rv-score").textContent = score + " / 100";
    $("rv-verdict").className = "verdict-text " + v.cls;
    $("rv-verdict").textContent = v.text;
    $("rv-meta").textContent = rv.correct + " / " + n + " correct · about " +
      Math.max(1, Math.round((Date.now() - rv.t0) / 60000)) + " min" +
      (rv.rushed ? " · ⚡ " + rv.rushed + " rushed answer" + (rv.rushed > 1 ? "s" : "") : "") +
      (rv.days.length ? " · days: " + rv.days.map(function (d) { return d.slice(5); }).join(", ")
        : rv.mastery ? " · 🎯 mastery check — fresh questions from " + rv.secs.join(", ") : "");
    $("rv-review").innerHTML = rv.reviewHtml;
    rv = null;
    window.scrollTo(0, 0);
  }

  function initReview() {
    if (!$("rv-start")) return;
    $("rv-start").addEventListener("click", rvStart);
    if ($("rv-mastery")) $("rv-mastery").addEventListener("click", rvStartMastery);
    $("rv-last7").addEventListener("click", function () {
      var cut = todayStr(Date.now() - 6 * DAY_MS);
      document.querySelectorAll("#rv-days input").forEach(function (c) { c.checked = c.value >= cut; });
    });
    $("rv-none").addEventListener("click", function () {
      document.querySelectorAll("#rv-days input").forEach(function (c) { c.checked = false; });
    });
    $("rv-quit").addEventListener("click", function () {
      UIDialog.confirm("Quit this review test? The attempt won't be scored.", function () {
        audioStopAll();
        rv = null;
        $("rv-quiz").classList.add("hidden");
        $("rv-home").classList.remove("hidden");
        rvRenderHome();
      });
    });
    $("rv-home-btn").addEventListener("click", function () {
      $("rv-summary").classList.add("hidden");
      $("rv-home").classList.remove("hidden");
      rvRenderHome();
    });
  }

  function renderMastery() {
    var el = $("pg-mastery");
    if (!el) return;
    var html = "<h3>Mastery <span class='hint-inline'>(last " + ROLL_WINDOW + " answers · 90% to master)</span></h3>";
    var any = false;
    var masteredCount = 0;
    WK_AREAS.forEach(function (a) {
      var m = masteryOf(a.stat);
      if (!m.n) return;
      any = true;
      var mastered = isMastered(a.stat);
      if (mastered) masteredCount++;
      var sub = mastered ? "🏆 Mastered" :
        m.n < ROLL_WINDOW ? m.acc + "% · " + m.n + "/" + ROLL_WINDOW + " answers — keep going"
        : m.acc + "% · need 90%";
      html += barRow((mastered ? "🏆 " : "") + a.label, sub, m.acc, mastered);
    });
    if (!any) {
      html += "<p class='hint'>Answer questions in mocks to start building mastery per task type.</p>";
    } else {
      html += "<p class='hint'>" + masteredCount + " / " + WK_AREAS.length + " task types mastered.</p>";
    }
    el.innerHTML = html;
  }

  function renderWeekReport() {
    var el = $("pg-week");
    if (!el) return;
    var act = loadJSON(K_ACT(), {});
    var s = loadJSON(K_STREAK(), { current: 0, best: 0 });
    var days = [];
    for (var i = 6; i >= 0; i--) days.push(todayStr(Date.now() - i * DAY_MS));
    var tot = { a: 0, c: 0, v: 0 }, active = 0;
    var maxA = 1;
    days.forEach(function (d) {
      var x = act[d];
      if (x) {
        tot.a += x.a || 0; tot.c += x.c || 0; tot.v += x.v || 0;
        if ((x.a || 0) + (x.v || 0) > 0) active++;
        maxA = Math.max(maxA, (x.a || 0) + (x.v || 0));
      }
    });
    var acc = tot.a ? Math.round(100 * tot.c / tot.a) : 0;
    var html = "<h3>Last 7 days</h3>" +
      '<div class="week-stats">' +
      "<span><strong>" + tot.a + "</strong> questions</span>" +
      "<span><strong>" + (tot.a ? acc + "%" : "—") + "</strong> accuracy</span>" +
      "<span><strong>" + tot.v + "</strong> vocab reviews</span>" +
      "<span><strong>" + active + "/7</strong> active days</span>" +
      "</div>" +
      '<div class="week-chart">';
    days.forEach(function (d) {
      var x = act[d] || { a: 0, v: 0 };
      var n = (x.a || 0) + (x.v || 0);
      var h = Math.round(100 * n / maxA);
      html += '<div class="week-col"><div class="week-bar" style="height:' + Math.max(h, n ? 8 : 2) + '%"></div>' +
        '<span class="week-day">' + d.slice(8) + "</span></div>";
    });
    html += "</div>";
    el.innerHTML = html;
  }

  function renderProgress() {
    renderMistakeCard();
    try { renderWeakness(); } catch (e) {}
    try { renderMastery(); } catch (e) {}
    try { renderWeekReport(); } catch (e) {}
    var stats = loadJSON(K_STATS, {});
    var html = "<h3>Use of English</h3>";
    ["part1", "part2", "part3", "part4"].forEach(function (p) {
      var s = stats[p];
      var label = PART_LABELS[p];
      if (!s || !s.attempted) {
        html += barRow(label, "Not practised yet", 0, false);
      } else {
        var pct = Math.round(100 * s.correct / s.attempted);
        html += barRow(label,
          s.attempted + " answered · " + pct + "% correct · last " + fmtDate(s.last),
          pct, pct >= 80);
      }
    });
    html += "<h3 class='pg-mock-title'>Reading</h3>";
    ["mc", "gap", "match"].forEach(function (t) {
      var s = stats["r" + t];
      var label = RD_LABELS[t];
      if (!s || !s.attempted) {
        html += barRow(label, "Not practised yet", 0, false);
      } else {
        var rp = Math.round(100 * s.correct / s.attempted);
        html += barRow(label,
          s.attempted + " answered · " + rp + "% correct · last " + fmtDate(s.last),
          rp, rp >= 80);
      }
    });

    html += "<h3 class='pg-mock-title'>Listening</h3>";
    (function () {
      var s = stats["lis"];
      if (!s || !s.attempted) {
        html += barRow("Listening comprehension", "Not practised yet", 0, false);
      } else {
        var lp = Math.round(100 * s.correct / s.attempted);
        html += barRow("Listening comprehension",
          s.attempted + " answered · " + lp + "% correct · last " + fmtDate(s.last),
          lp, lp >= 80);
      }
    })();

    var hist = loadJSON(K_MOCK(), []);
    if (hist.length) {
      html += '<h3 class="pg-mock-title">Recent mock exams</h3><ul class="mock-history">';
      hist.slice(-8).reverse().forEach(function (m) {
        var label = m.mode === "full" ? "UoE full mock"
          : m.mode === "reading" ? "Reading · " + (RD_LABELS[m.part] || m.part).split("·")[0].trim()
          : m.mode === "listening" ? "Listening · " + (LS_LABELS[m.part] || m.part)
          : (PART_LABELS[m.part] || m.part).split("·")[0].trim();
        var cls = m.pct >= 75 ? "ok" : (m.pct >= 60 ? "mid" : "bad");
        html += '<li><span class="mh-date">' + esc(fmtDate(m.date)) + "</span>" +
          '<span class="mh-label">' + esc(label) + "</span>" +
          '<span class="mh-score ' + cls + '">' + m.score + "/" + m.max + " (" + m.pct + "%)</span></li>";
      });
      html += "</ul>";
    }
    $("pg-uoe").innerHTML = html;

    var st = getVocabState();
    var counts = { 1: 0, 2: 0, 3: 0 };
    VOCAB.forEach(function (c) {
      var b = st[c.front].box;
      counts[b] = (counts[b] || 0) + 1;
    });
    var vhtml = "<h3>Vocabulary</h3>";
    [1, 2, 3].forEach(function (b) {
      var pct = Math.round(100 * counts[b] / VOCAB.length);
      vhtml += barRow("Box " + b, counts[b] + " cards", pct, b === 3);
    });
    $("pg-vocab").innerHTML = vhtml;
  }

  function initProgress() {
    $("mb-drill-quit").addEventListener("click", function () {
      UIDialog.confirm("Quit mistake review and go back to Progress?", function () {
        mbStopAudio();
        $("mb-drill").classList.add("hidden");
        $("mb-summary").classList.remove("hidden");
        renderProgress();
      });
    });
    $("mb-congrats-home").addEventListener("click", function () {
      $("mb-congrats").classList.add("hidden");
      $("mb-summary").classList.remove("hidden");
      renderProgress();
    });
    $("pg-clear").addEventListener("click", function () {
      UIDialog.confirm("Clear all practice records, vocabulary progress and drafts for this level? This cannot be undone.", pgClearNow);
    });
    function pgClearNow() {
      try {
        var keys = [];
        for (var i = 0; i < localStorage.length; i++) {
          var k = localStorage.key(i);
          if (!k) continue;
          if (k.indexOf(LEVEL + ".") === 0) keys.push(k);
          /* CPE 也清掉舊版未加前綴的 key；主題 (cpe_theme) 與級數選擇 (cpe.level) 全域，保留 */
          if (LEVEL === "cpe" && k.indexOf("cpe_") === 0 && k !== "cpe_theme") keys.push(k);
        }
        keys.forEach(function (k) {
          if (k === "cpe.level") return;
          localStorage.removeItem(k);
        });
      } catch (e) {}
      vocabQueue = [];
      renderProgress();
      UIDialog.alert("Cleared.");
    }
    renderProgress();
  }

  /* ================= §8.4 Parent / Teacher dashboard =================
   * 唯讀快照：連續天數、14 天完成格、7 天首次答對率、單字量、各項正確率、
   * 一直記不住的單字（word_wrong）、近 14 天錯題流水帳（wrong_log）。全英文。 */
  var PT_SEC_LABELS = {
    part1: "Use of English", part2: "Use of English", part3: "Use of English", part4: "Use of English",
    uoe: "Use of English", rmc: "Reading", rtfng: "Reading", rgap: "Reading", rmatch: "Reading",
    rhead: "Reading", lis: "Listening", spell: "Spelling"
  };

  function ptTile(num, label) {
    return '<div class="pt-tile"><div class="pt-num">' + num + '</div><div class="pt-label">' + label + "</div></div>";
  }

  /* ext = { level, blob, email }：家長帳號檢視被授權孩子時，資料改讀對方雲端 blob（唯讀） */
  function renderParent(ext) {
    var body = $("parent-body");
    function sget(suffix, fb) {
      if (ext) {
        var raw = ext.blob[ext.level + "." + suffix];
        if (raw == null) return fb;
        try { return JSON.parse(raw); } catch (e) { return fb; }
      }
      return loadJSON(LEVEL + "." + suffix, fb);
    }
    var lvlLabel = (ext ? ext.level : LEVEL).toUpperCase();
    var hist = sget("daily25", {});
    var s = sget("streak", { current: 0, best: 0 });
    var act = sget("activity", {});   // 每日活動：所有練習（模擬考/閱讀/聽力/每日/複習測驗）的作答數
    var todayRec = hist[todayStr()];
    var actToday = act[todayStr()];
    var html = "";

    html += '<div class="card"><h3>' + esc(lvlLabel) + " learner" +
      (ext ? ' <span class="hint-inline">viewing ' + esc(ext.email) + "</span>" : "") +
      '<span class="streak-tag">🔥 ' + (s.current || 0) + "-day streak" +
      (s.best > (s.current || 0) ? " · best " + s.best : "") + "</span></h3>" +
      (todayRec && todayRec.done
        ? "<p class='verdict-text ok'>✅ Today's daily practice is done — " + todayRec.firstOk + " / " + todayRec.total + " right first try" +
          (todayRec.spell && todayRec.spell.done ? " · ✍️ spelling " + todayRec.spell.firstOk + " / " + todayRec.spell.total : "") + ".</p>"
        : "<p class='verdict-text bad'>⬜ Today's daily practice is not done yet" +
          (actToday && actToday.a ? " — but " + actToday.a + " question" + (actToday.a === 1 ? "" : "s") + " answered in other practice today" : "") + ".</p>");
    html += "<p class='hint'>Last 14 days · ✓ daily mission done · <span class='pt-cell half' style='width:14px;height:14px'>•</span> practised without finishing the mission</p><div class='pt-strip'>";
    for (var i = 13; i >= 0; i--) {
      var dk = todayStr(Date.now() - i * DAY_MS);
      var r = hist[dk];
      var on = r && r.done;
      var ad = act[dk];
      var some = !on && ad && (ad.a || ad.v);
      html += '<span class="pt-cell' + (on ? " on" : some ? " half" : "") + '" title="' + dk +
        (on ? " · " + r.firstOk + "/" + r.total
          : some ? " · practice: " + (ad.a || 0) + " answered" + (ad.v ? ", " + ad.v + " words reviewed" : "")
          : " · no practice") + '">' + (on ? "✓" : some ? "•" : "") + "</span>";
    }
    html += "</div></div>";

    var ok7 = 0, tot7 = 0, act7 = 0, actOk7 = 0;
    for (var j = 6; j >= 0; j--) {
      var dj = todayStr(Date.now() - j * DAY_MS);
      var rj = hist[dj];
      if (rj && rj.done) { ok7 += rj.firstOk || 0; tot7 += rj.total || 0; }
      var aj = act[dj];
      if (aj) { act7 += aj.a || 0; actOk7 += aj.c || 0; }
    }
    var vst = ext ? sget("vocab_state", {}) : loadJSON(K_VOCAB, {});
    var practiced = 0, mastered = 0;
    Object.keys(vst).forEach(function (k) {
      if (vst[k] && vst[k].last) practiced++;
      if (vst[k] && vst[k].last && vst[k].box >= 3) mastered++;
    });
    html += '<div class="pt-tiles">' +
      ptTile(tot7 ? Math.round(100 * ok7 / tot7) + "%" : "—", "daily-mission first-try accuracy, last 7 days") +
      ptTile(act7 ? act7 + " · " + Math.round(100 * actOk7 / act7) + "%" : "—", "questions answered, last 7 days · all practice") +
      ptTile(String(practiced), "words practised") +
      ptTile(String(mastered), "words mastered") +
      "</div>";

    // 複習/精熟測驗成績（Review Test + Mastery check 共用 review_tests 紀錄）
    var rvh = sget("review_tests", []);
    if (rvh.length) {
      var rrows = "";
      rvh.slice(-6).reverse().forEach(function (h) {
        rrows += '<li><span class="mh-date">' + esc(h.date) + "</span>" +
          '<span class="mh-label">' + (h.mastery ? "🎯 mastery check" : "review · " + h.days.length + " day" + (h.days.length === 1 ? "" : "s")) + "</span>" +
          '<span class="mh-score ' + (h.score >= 75 ? "ok" : h.score >= 60 ? "mid" : "bad") + '">' + h.score + " / 100</span></li>";
      });
      html += '<div class="card"><h3>Review & mastery test scores</h3>' +
        "<p class='hint'>Review Tests re-test past daily sets; Mastery checks draw fresh questions from recently practised sections.</p>" +
        '<ul class="mock-history">' + rrows + "</ul></div>";
    }

    var roll = sget("roll", {});
    var secHtml = "";
    WK_AREAS.forEach(function (a) {
      var arr = roll[a.stat] || [];
      if (!arr.length) return;
      var okN = arr.reduce(function (x, y) { return x + y; }, 0);
      var acc = Math.round(100 * okN / arr.length);
      secHtml += barRow(a.label, "last " + arr.length + " answers · " + acc + "% correct", acc, acc >= 80);
    });
    html += '<div class="card"><h3>Accuracy by section</h3>' +
      "<p class='hint'>Based on the most recent 30 answers in each section.</p>" +
      (secHtml || "<p class='hint'>No answers recorded yet — accuracy appears after some practice.</p>") + "</div>";

    var ww = sget("word_wrong", {});
    var defs = {};
    ((typeof VOCAB !== "undefined" && VOCAB) || []).forEach(function (c) { defs[c.front] = c.def; });
    var sticky = Object.keys(ww).map(function (k) { return { w: k, n: ww[k].n, last: ww[k].last }; })
      .sort(function (a, b) { return b.n - a.n || b.last - a.last; }).slice(0, 10);
    html += '<div class="card"><h3>Words that won\'t stick</h3>';
    if (!sticky.length) {
      html += "<p class='hint'>No trouble words yet — misses from vocabulary review and spelling practice show up here.</p>";
    } else {
      html += '<div class="pt-words">';
      sticky.forEach(function (x) {
        html += '<span class="pt-word"><strong>' + esc(x.w) + "</strong> ✗" + x.n +
          (defs[x.w] ? '<span class="pt-word-def">' + esc(defs[x.w]) + "</span>" : "") + "</span>";
      });
      html += "</div>";
    }
    html += "</div>";

    var cut = Date.now() - 14 * DAY_MS;
    var log = sget("wrong_log", []).filter(function (e) { return e.ts >= cut; });
    log.sort(function (a, b) { return b.ts - a.ts; });
    html += '<div class="card"><h3>Recent mistakes <span class="hint-inline">last 14 days · ' + log.length + "</span></h3>";
    if (!log.length) {
      html += "<p class='hint'>No first-try mistakes recorded in the last 14 days. Mistakes from Daily practice and spelling rounds are listed here.</p>";
    } else {
      log.slice(0, 12).forEach(function (e) {
        html += '<div class="review-item bad">' +
          '<div class="pt-mist-q">' + esc(e.q) + "</div>" +
          '<div class="review-ans">Chose: <strong>' + esc(e.chosen || "—") + "</strong> · Correct: <strong>" + esc(e.correct) + "</strong></div>" +
          '<div class="expl">' + esc(PT_SEC_LABELS[e.sec] || e.sec) + " · " + esc(fmtDate(e.ts)) + "</div></div>";
      });
      if (log.length > 12) html += "<p class='hint'>Showing the 12 most recent.</p>";
    }
    html += "</div>";

    var rows = "";
    Object.keys(hist).sort().reverse().slice(0, 14).forEach(function (dk2) {
      var r2 = hist[dk2];
      if (!r2 || !r2.done) return;
      var pct = r2.total ? Math.round(100 * r2.firstOk / r2.total) : 0;
      rows += '<li><span class="mh-date">' + esc(dk2) + "</span>" +
        '<span class="mh-label">' + Math.max(1, Math.round((r2.ms || 0) / 60000)) + " min" +
        (r2.spell && r2.spell.done ? " · ✍️ " + r2.spell.firstOk + "/" + r2.spell.total : "") + "</span>" +
        '<span class="mh-score ' + (pct >= 75 ? "ok" : pct >= 60 ? "mid" : "bad") + '">' +
        r2.firstOk + "/" + r2.total + " (" + pct + "%)</span></li>";
    });
    if (rows) html += '<div class="card"><h3>Daily practice history</h3><ul class="mock-history">' + rows + "</ul></div>";

    body.innerHTML = html;
    renderParentCloud(body, ext);
  }

  /* ---- Cross-account viewing: grant a parent/teacher email read access (backend /api/grants) ---- */

  var ptChild = null;   // { email, levels: [{level, blob, updatedAt}] } while viewing a child

  function ptApi(method, path, body, cb) {
    var cs = window.CloudSync;
    if (!cs || !cs.signedIn()) { cb("auth"); return; }
    var xhr = new XMLHttpRequest();
    xhr.open(method, cs.apiBase + path);
    xhr.setRequestHeader("Authorization", "Bearer " + cs.token());
    if (body) xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      var data = null;
      try { data = JSON.parse(xhr.responseText); } catch (e) {}
      if (xhr.status < 200 || xhr.status >= 300) cb((data && data.error) || ("http " + xhr.status));
      else cb(null, data);
    };
    xhr.onerror = function () { cb("network"); };
    xhr.send(body ? JSON.stringify(body) : null);
  }

  /* A child may practise at any level — probe all five and default to the freshest. */
  function ptLoadChild(email, wantLevel) {
    if (ptChild && ptChild.email === email && ptChild.levels.length) {
      var pick0 = null;
      ptChild.levels.forEach(function (c) { if (c.level === wantLevel) pick0 = c; });
      pick0 = pick0 || ptChild.levels[0];
      renderParent({ level: pick0.level, blob: pick0.blob, email: email });
      return;
    }
    var levels = ["ket", "pet", "fce", "cae", "cpe"];
    var found = [], pending = levels.length;
    levels.forEach(function (lvl) {
      ptApi("GET", "/api/progress?level=" + lvl + "&app=lanexammock&owner=" + encodeURIComponent(email), null, function (err, res) {
        if (!err && res && res.blob) found.push({ level: lvl, blob: res.blob, updatedAt: res.updatedAt || 0 });
        if (--pending > 0) return;
        if (!found.length) { UIDialog.alert("No cloud data for " + email + " yet — they need to sign in and practise first."); return; }
        found.sort(function (a, b) { return b.updatedAt - a.updatedAt; });
        ptChild = { email: email, levels: found };
        var pick = found[0];
        found.forEach(function (c) { if (c.level === wantLevel) pick = c; });
        renderParent({ level: pick.level, blob: pick.blob, email: email });
      });
    });
  }

  function renderParentCloud(body, ext) {
    var box = document.createElement("div");
    box.className = "card pt-cloud";
    body.insertBefore(box, body.firstChild);
    var cs = window.CloudSync;
    if (!cs || !cs.signedIn()) {
      box.innerHTML = "<p class='hint'>☁️ Sign in with Google (top right) to grant a parent or teacher read access to this learner's progress — they can then open this page from their own account on any device.</p>";
      return;
    }
    box.innerHTML = "<p class='hint'>☁️ Loading sharing settings…</p>";
    ptApi("GET", "/api/grants?app=lanexammock", null, function (err, res) {
      if (err) { box.innerHTML = "<p class='hint'>⚠️ Cloud unavailable (" + esc(err) + ") — showing this device's data only.</p>"; return; }
      box.innerHTML = "";
      var received = (res && res.received) || [];
      if (received.length || ext) {
        var row = document.createElement("div");
        row.className = "pt-viewrow";
        var lab = document.createElement("span");
        lab.className = "hint-inline";
        lab.textContent = "Viewing: ";
        row.appendChild(lab);
        var selfBtn = document.createElement("button");
        selfBtn.className = "ghost-btn small" + (ext ? "" : " selected");
        selfBtn.textContent = "This device (me)";
        selfBtn.addEventListener("click", function () { renderParent(); });
        row.appendChild(selfBtn);
        received.forEach(function (g) {
          var b = document.createElement("button");
          b.className = "ghost-btn small" + (ext && ext.email === g.ownerEmail ? " selected" : "");
          b.textContent = "👧 " + g.ownerEmail;
          b.addEventListener("click", function () { ptLoadChild(g.ownerEmail); });
          row.appendChild(b);
        });
        box.appendChild(row);
        /* level switcher while viewing a child with data at several levels */
        if (ext && ptChild && ptChild.email === ext.email && ptChild.levels.length > 1) {
          var lrow = document.createElement("div");
          lrow.className = "pt-viewrow";
          var llab = document.createElement("span");
          llab.className = "hint-inline";
          llab.textContent = "Level: ";
          lrow.appendChild(llab);
          ptChild.levels.forEach(function (c) {
            var lb = document.createElement("button");
            lb.className = "ghost-btn small" + (c.level === ext.level ? " selected" : "");
            lb.textContent = c.level.toUpperCase();
            lb.addEventListener("click", function () { ptLoadChild(ext.email, c.level); });
            lrow.appendChild(lb);
          });
          box.appendChild(lrow);
        }
      }
      if (ext) return;   // hide my own grant management while viewing someone else
      var granted = (res && res.granted) || [];
      var title = document.createElement("p");
      title.className = "hint";
      title.textContent = "🔗 Grant a parent / teacher read access (their Google email):";
      box.appendChild(title);
      if (granted.length) {
        var glist = document.createElement("div");
        glist.className = "pt-words";
        granted.forEach(function (g) {
          var em = g.viewer_email || g.viewerEmail || "";
          var chip = document.createElement("span");
          chip.className = "pt-word";
          var bb = document.createElement("strong");
          bb.textContent = em;
          chip.appendChild(bb);
          var del = document.createElement("button");
          del.className = "ghost-btn small pt-revoke";
          del.textContent = "✕";
          del.title = "Revoke access";
          del.addEventListener("click", function () {
            UIDialog.confirm("Revoke access for " + em + "?", function () {
              ptApi("DELETE", "/api/grants?app=lanexammock&viewerEmail=" + encodeURIComponent(em), null, function (derr) {
                if (derr) { UIDialog.alert("Failed: " + derr); return; }
                renderParent();
              });
            });
          });
          chip.appendChild(del);
          glist.appendChild(chip);
        });
        box.appendChild(glist);
      }
      var form = document.createElement("div");
      form.className = "vb-type-row";
      var inp = document.createElement("input");
      inp.type = "email";
      inp.className = "answer-input";
      inp.placeholder = "parent@gmail.com";
      var btn2 = document.createElement("button");
      btn2.className = "primary-btn";
      btn2.textContent = "Grant access";
      btn2.addEventListener("click", function () {
        var em = (inp.value || "").trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { UIDialog.alert("Please enter a valid email."); return; }
        btn2.disabled = true;
        ptApi("POST", "/api/grants?app=lanexammock", { viewerEmail: em, role: "viewer" }, function (aerr) {
          btn2.disabled = false;
          if (aerr) { UIDialog.alert("Failed: " + aerr); return; }
          renderParent();
        });
      });
      form.appendChild(inp);
      form.appendChild(btn2);
      box.appendChild(form);
    });
  }

  function initParent() {
    var btn = $("pg-parent-btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      $("mb-summary").classList.add("hidden");
      renderParent();
      $("parent-view").classList.remove("hidden");
      window.scrollTo(0, 0);
    });
    $("parent-back").addEventListener("click", function () {
      $("parent-view").classList.add("hidden");
      $("mb-summary").classList.remove("hidden");
      renderProgress();
      window.scrollTo(0, 0);
    });
  }

  /* ================= §8.5 色系主題 ================= */
  var K_THEME = "cpe_theme";
  var THEMES = [
    { id: "ink",     name: "Ink Black",   bg: "#0d0d10", accent: "#e0a458" },
    { id: "navy",    name: "Deep Navy",   bg: "#0a1220", accent: "#d6b25e" },
    { id: "forest",  name: "Forest Green", bg: "#0c1410", accent: "#d8c69a" },
    { id: "paper",   name: "Warm Paper",  bg: "#f4efe4", accent: "#8a5a26" },
    { id: "plum",    name: "Rose Plum",   bg: "#16101a", accent: "#e08ba1" },
    { id: "celadon", name: "Celadon",     bg: "#0d1416", accent: "#62c4b8" }
  ];

  function applyTheme(id) {
    var theme = null;
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === id) { theme = THEMES[i]; break; }
    }
    if (!theme) theme = THEMES[0];
    if (theme.id === "ink") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme.id);
    }
    try { localStorage.setItem(K_THEME, theme.id); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme.bg);
  }

  function currentTheme() {
    try { return localStorage.getItem(K_THEME) || "ink"; } catch (e) { return "ink"; }
  }

  function initTheme() {
    var btn = $("theme-btn"), sheet = $("theme-sheet"),
        backdrop = $("theme-backdrop"), grid = $("theme-grid");
    if (!btn || !sheet || !backdrop || !grid) return;

    function closeSheet() {
      sheet.classList.add("hidden");
      backdrop.classList.add("hidden");
    }
    function renderSwatches() {
      grid.innerHTML = "";
      var cur = currentTheme();
      THEMES.forEach(function (t) {
        var b = document.createElement("button");
        b.className = "theme-swatch" + (t.id === cur ? " selected" : "");
        b.setAttribute("aria-label", t.name);
        var dot = document.createElement("span");
        dot.className = "theme-dot";
        dot.style.background =
          "linear-gradient(135deg, " + t.bg + " 55%, " + t.accent + " 55%)";
        b.appendChild(dot);
        b.appendChild(document.createTextNode(t.name));
        b.addEventListener("click", function () {
          applyTheme(t.id);
          renderSwatches();
        });
        grid.appendChild(b);
      });
    }
    btn.addEventListener("click", function () {
      renderSwatches();
      sheet.classList.remove("hidden");
      backdrop.classList.remove("hidden");
    });
    backdrop.addEventListener("click", closeSheet);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeSheet();
    });

    /* text size: 85–175% in 10% steps, global like the theme */
    var K_FS = "cpe_fontsize";
    var fsMinus = $("fs-minus"), fsPlus = $("fs-plus"), fsVal = $("fs-val");
    if (fsMinus && fsPlus && fsVal) {
      function fsGet() {
        var v = 100;
        try { v = parseInt(localStorage.getItem(K_FS), 10) || 100; } catch (e) {}
        return Math.min(175, Math.max(85, v));
      }
      function fsApply(v) {
        v = Math.min(175, Math.max(85, v));
        document.documentElement.style.fontSize = (v === 100 ? "" : v + "%");
        try { localStorage.setItem(K_FS, String(v)); } catch (e) {}
        fsVal.textContent = v + "%";
        fsMinus.disabled = v <= 85;
        fsPlus.disabled = v >= 175;
      }
      fsApply(fsGet());
      fsMinus.addEventListener("click", function () { fsApply(fsGet() - 10); });
      fsPlus.addEventListener("click", function () { fsApply(fsGet() + 10); });
    }
  }

  /* ================= §9 Init（防護式啟動） ================= */
  function safeInit(name, fn) {
    try { fn(); } catch (e) {
      if (typeof console !== "undefined") console.error("init failed: " + name, e);
    }
  }

  var booted = false;
  function boot(level) {
    if (booted) return;
    booted = true;
    safeInit("level", function () { setLevel(level); });
    safeInit("tabs", initTabs);
    safeInit("retroguess", initRetroGuess);
    safeInit("uoe", initUoe);
    safeInit("reading", initReading);
    safeInit("speedreading", initSpeedReading);
    safeInit("listening", initListening);
    safeInit("writing", initWriting);
    safeInit("speaking", initSpeaking);
    safeInit("speakrec", initSpeakRec);
    safeInit("vocab", initVocab);
    safeInit("progress", initProgress);
    safeInit("parent", initParent);
    safeInit("daily25", initDaily25);
    safeInit("spelling", initDailySpelling);
    safeInit("review", initReview);
  }

  /* 使用說明＋版本紀錄（ℹ️）：全域功能，資料在 js/versions.js */
  function initHelp() {
    var btn = $("help-btn"), page = $("help-page"), close = $("help-close"), list = $("version-list");
    if (!btn || !page) return;
    var rendered = false;
    btn.addEventListener("click", function () {
      if (!rendered) {
        rendered = true;
        var html = "";
        (window.APP_VERSIONS || []).forEach(function (ver) {
          html += '<div class="card version-card"><h3>' + esc(ver.v) + ' <span class="hint-inline">' + esc(ver.date) + "</span></h3><ul>";
          ver.items.forEach(function (it) { html += "<li>" + esc(it) + "</li>"; });
          html += "</ul></div>";
        });
        list.innerHTML = html || "<p class='hint'>No version notes yet.</p>";
      }
      page.classList.remove("hidden");
      page.scrollTop = 0;
    });
    close.addEventListener("click", function () { page.classList.add("hidden"); });
  }

  /* 主題為全域功能：不等選級數，載入即啟用（含級數選擇畫面）。 */
  safeInit("theme", initTheme);
  safeInit("help", initHelp);

  /* loader.js 載完該級數的資料檔後呼叫 CPEApp.init(level) */
  window.CPEApp = { init: boot };
})();
}
