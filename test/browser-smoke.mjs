/* 瀏覽器 smoke test（無 npm 依賴，用 CDP 直接驅動 chrome-headless-shell）
 *
 * 為什麼要有這支：test/test.js 只跑純函式，DOM 行為（每日任務長度、組卷題數）測不到。
 * 用法：node test/browser-smoke.mjs
 *   找不到 chrome-headless-shell 就跳過（exit 0），不會擋住一般的資料測試流程。
 *   需要 python3（起靜態 server）與 node ≥ 22（內建 WebSocket）。
 */
import { spawn } from 'node:child_process';
import { existsSync, rmSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SHELL = process.env.CHROME_SHELL || process.env.HOME + '/.cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell';
if (!existsSync(SHELL)) {
  console.log('（跳過瀏覽器 smoke test：找不到 ' + SHELL + '，可用 CHROME_SHELL=<路徑> 指定）');
  process.exit(0);
}

console.log('每日任務長度（10 / 15 / 20 題）');

const fails = [];
const check = (n, c, x = '') => { console.log((c ? '  ✓ ' : '  ✗ ') + n + (c ? '' : ' — ' + x)); if (!c) fails.push(n); };

const PORT = 8791, CDP = 9391;
const server = spawn('python3', ['-m', 'http.server', String(PORT)], { cwd: ROOT, stdio: 'ignore' });
/* 每次跑都用全新的 profile：chrome 預設 profile 會把上一輪的 localStorage 留著，
 * 級數／任務長度就會從上一輪漏進來（2026-08-24 實測踩到） */
const PROFILE = mkdtempSync(join(tmpdir(), 'lanexam-smoke-'));
const chrome = spawn(SHELL, [`--remote-debugging-port=${CDP}`, '--no-sandbox', '--disable-gpu',
  `--user-data-dir=${PROFILE}`, 'about:blank'], { stdio: 'ignore' });
try {
  await sleep(1500);
  const list = await (await fetch(`http://127.0.0.1:${CDP}/json/list`)).json();
  const ws = new WebSocket(list.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let id = 0; const pending = new Map();
  ws.addEventListener('message', ev => { const m = JSON.parse(ev.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
  const send = (method, params = {}) => { const mid = ++id; ws.send(JSON.stringify({ id: mid, method, params })); return new Promise(r => pending.set(mid, r)); };
  const js = async expr => {
    const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
    if (r.result?.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails));
    return r.result?.result?.value;
  };
  await send('Runtime.enable'); await send('Page.enable'); await send('Network.enable');
  await send('Network.setBlockedURLs', { urls: ['*js/sync.js'] });
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `if (!localStorage.getItem('cpe.level')) localStorage.setItem('cpe.level','cae');` });
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
  await sleep(4000);

  /* 題庫真的被 loader 載進來（BANK_FILES 漏登記時 test.js 抓不到，只有瀏覽器看得出來） */
  check('reading 題庫全部載入（含 tfng / head）', await js(`(function(){
    var R = window.READING || {};
    return R.mc.length >= 28 && R.gap.length >= 18 && R.match.length >= 12 &&
           (R.tfng || []).length >= 3 && (R.head || []).length >= 3; })()`),
    JSON.stringify(await js(`(function(){var R=window.READING||{};return {mc:R.mc.length,gap:R.gap.length,match:R.match.length,tfng:(R.tfng||[]).length,head:(R.head||[]).length};})()`)));

  await js(`document.querySelector('.tab-btn[data-tab="tab-daily"]').click()`);
  await sleep(500);
  const head = await js(`document.getElementById('pg-daily').textContent`);
  check('CAE 預設 10 題', /Daily 10/.test(head) && /10 questions/.test(head), head.slice(0, 160));
  check('顯示預估時間', /about \d+ min/.test(head), head.slice(0, 240));
  check('三顆長度晶片都在', await js(`document.querySelectorAll('[data-d25size]').length === 3`));
  check('目前長度被標選', await js(`document.querySelector('[data-d25size="10"]').classList.contains('selected')`));
  check('拼寫字數跟著縮', /5-word spelling/.test(head), head.slice(0, 400));

  await js(`document.querySelector('[data-d25size="20"]').click()`);
  await sleep(400);
  const head2 = await js(`document.getElementById('pg-daily').textContent`);
  check('切成 20 題後標題與說明同步', /Daily 20/.test(head2) && /20 questions/.test(head2) && /10-word spelling/.test(head2), head2.slice(0, 200));
  check('設定寫進 localStorage', (await js(`localStorage.getItem('cae.daily_size')`)) === '20');
  check('20 題的預估時間比 10 題長', await js(`(function(){
    var t = document.querySelector('[data-d25size="20"]').textContent.match(/(\\d+) min/)[1];
    var s = document.querySelector('[data-d25size="10"]').textContent.match(/(\\d+) min/)[1];
    return +t > +s; })()`));

  // 真的跑一輪 10 題任務：題數必須剛好 10
  await js(`document.querySelector('[data-d25size="10"]').click()`);
  await sleep(300);
  await js(`document.getElementById('d25-start').click()`);
  await sleep(1500);
  const prog = await js(`document.getElementById('d25-drill-progress').textContent`);
  check('開始 10 題任務 → 隊列剛好 10 題', /Mastered 0 \/ 10/.test(prog), prog);

  /* ---------- 信心標記「🤔 I'm guessing」：每個題型都要有 ---------- */
  console.log("\n信心標記「🤔 I'm guessing」");
  check('每日任務有信心標記', await js(`!!document.querySelector('#d25-drill-area .guess-btn')`));
  check('按下會標選', await js(`(function(){
    var g = document.querySelector('#d25-drill-area .guess-btn');
    g.click(); return g.classList.contains('selected') && g.getAttribute('aria-pressed') === 'true'; })()`));

  // 閱讀（多選題卷）：每題都有，全部標「用猜的」交卷 → 全部進錯題本
  await js(`localStorage.setItem('cae.mistake_book','[]')`);
  await js(`document.querySelector('.tab-btn[data-tab="tab-reading"]').click()`);
  await sleep(300);
  await js(`document.querySelector('#rd-picker .mode-btn[data-rtype="mc"]').click()`);
  await sleep(600);
  const rdQs = await js(`document.querySelectorAll('#rd-area .rd-q').length`);
  check('閱讀每題都有信心標記', await js(`document.querySelectorAll('#rd-area .rd-q .guess-btn').length`) === rdQs, 'q=' + rdQs);
  await js(`document.querySelectorAll('#rd-area .rd-q').forEach(function (c) {
    c.querySelector('.option-btn').click(); c.querySelector('.guess-btn').click(); })`);
  await js(`document.getElementById('rd-submit').click()`);
  await sleep(600);
  const rdReview = await js(`document.getElementById('rd-review').textContent`);
  check('交卷後每題標明是猜的', (rdReview.match(/🤔 guessed/g) || []).length === rdQs, rdReview.slice(0, 120));
  check('猜的題目（含猜對的）全進錯題本',
    await js(`JSON.parse(localStorage.getItem('cae.mistake_book') || '[]').length`) === rdQs);
  check('猜對的那幾題標示已送進錯題本', /guessed — sent to mistake book/.test(rdReview) || !/✓/.test(rdReview), rdReview.slice(0, 200));

  // 配對題（字母列版面）每題也要有
  await js(`document.getElementById('rd-back').click()`);
  await sleep(300);
  await js(`document.querySelector('#rd-picker .mode-btn[data-rtype="match"]').click()`);
  await sleep(600);
  const matchRows = await js(`document.querySelectorAll('#rd-area .match-row').length`);
  check('配對題每題都有信心標記',
    matchRows > 0 && await js(`document.querySelectorAll('#rd-area .match-row .guess-btn').length`) === matchRows,
    'rows=' + matchRows);

  // 速讀：讀完文章後的理解題
  await js(`document.getElementById('rd-back').click()`);
  await sleep(300);
  await js(`document.getElementById('sr-start').click()`);
  await sleep(600);
  await js(`document.getElementById('sr-done').click()`);
  await sleep(5200);   // <5 秒會被擋（「太快了，先真的讀」），等過門檻再按一次
  await js(`document.getElementById('sr-done').click()`);
  await sleep(600);
  const srQs = await js(`document.querySelectorAll('#sr-qarea .rd-q').length`);
  check('速讀理解題每題都有信心標記',
    srQs > 0 && await js(`document.querySelectorAll('#sr-qarea .rd-q .guess-btn').length`) === srQs, 'q=' + srQs);

  // 聽力／模擬考／Review Test 都要有
  await js(`document.querySelector('.tab-btn[data-tab="tab-listening"]').click()`);
  await sleep(300);
  await js(`document.querySelector('#ls-picker .mode-btn[data-lkind]').click()`);
  await sleep(600);
  const lsQs = await js(`document.querySelectorAll('#ls-area .rd-q').length`);
  check('聽力每題都有信心標記',
    lsQs > 0 && await js(`document.querySelectorAll('#ls-area .rd-q .guess-btn').length`) === lsQs, 'q=' + lsQs);

  await js(`document.querySelector('.tab-btn[data-tab="tab-uoe"]').click()`);
  await sleep(300);
  await js(`document.querySelector('#uoe-picker .mode-btn[data-part]').click()`);
  await sleep(600);
  check('模擬考有信心標記', await js(`!!document.querySelector('#uoe-answer-area .guess-btn')`));

  await js(`document.querySelector('.tab-btn[data-tab="tab-review"]').click()`);
  await sleep(400);
  check('Review Test 有三種長度可選', await js(`document.querySelectorAll('[data-rvsize]').length === 3`));
  check('Review Test 預設跟著每日任務長度（CAE 10）',
    await js(`document.querySelector('[data-rvsize="10"]').classList.contains('selected')`));
  await js(`document.querySelector('[data-rvsize="15"]').click()`);
  await sleep(200);
  check('換長度會記起來', (await js(`localStorage.getItem('cae.review_size')`)) === '15');
  check('Mastery check 題數跟著改', (await js(`document.getElementById('rv-mastery-n').textContent`)) === '15');
  // 題源：今天的每日任務（開場就存了 refs）＋錯題本 → 湊得滿 15 題
  await js(`document.querySelectorAll('#rv-days input').forEach(function (c) { c.checked = true; });
            document.getElementById('rv-mb').checked = true;
            document.getElementById('rv-start').click()`);
  await sleep(800);
  const rvProg = await js(`document.getElementById('rv-progress').textContent`);
  check('Review Test 出 15 題', /\/ 15$/.test(rvProg), rvProg);
  check('Review Test 有信心標記', await js(`!!document.querySelector('#rv-area .guess-btn')`));

  // 換 KET：預設應為 20（每級各記各的）
  await js(`localStorage.setItem('cpe.level','ket')`);
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
  await sleep(4000);
  await js(`document.querySelector('.tab-btn[data-tab="tab-daily"]').click()`);
  await sleep(500);
  const ket = await js(`document.getElementById('pg-daily').textContent`);
  check('KET 預設 20 題（各級數各記各的）', /Daily 20/.test(ket), ket.slice(0, 120));

  ws.close();
} finally {
  chrome.kill(); server.kill();
  try { rmSync(PROFILE, { recursive: true, force: true }); } catch (e) {}
}
console.log(fails.length ? `\n${fails.length} 項失敗` : '\n全部通過');
process.exit(fails.length ? 1 : 0);
