/* 瀏覽器 smoke test（無 npm 依賴，用 CDP 直接驅動 chrome-headless-shell）
 *
 * 為什麼要有這支：test/test.js 只跑純函式，DOM 行為（每日任務長度、組卷題數）測不到。
 * 用法：node test/browser-smoke.mjs
 *   找不到 chrome-headless-shell 就跳過（exit 0），不會擋住一般的資料測試流程。
 *   需要 python3（起靜態 server）與 node ≥ 22（內建 WebSocket）。
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
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
const chrome = spawn(SHELL, [`--remote-debugging-port=${CDP}`, '--no-sandbox', '--disable-gpu', 'about:blank'], { stdio: 'ignore' });
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

  // 換 KET：預設應為 20（每級各記各的）
  await js(`localStorage.setItem('cpe.level','ket')`);
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
  await sleep(4000);
  await js(`document.querySelector('.tab-btn[data-tab="tab-daily"]').click()`);
  await sleep(500);
  const ket = await js(`document.getElementById('pg-daily').textContent`);
  check('KET 預設 20 題（各級數各記各的）', /Daily 20/.test(ket), ket.slice(0, 120));

  ws.close();
} finally { chrome.kill(); server.kill(); }
console.log(fails.length ? `\n${fails.length} 項失敗` : '\n全部通過');
process.exit(fails.length ? 1 : 0);
