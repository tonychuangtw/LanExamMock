#!/usr/bin/env node
/* 把 reading-mc bank 檔裡的答案位置攤平成 A/B/C/D 各約四分之一。
 *
 * 為什麼需要：一題一題手寫時，正解很容易不自覺集中在前面的選項，
 * 學生「不會就選 A」反而會被獎勵。這支把每題的選項陣列旋轉，
 * 讓正解落在指定位置——旋轉不會改動任何文字，
 * 而解析是引用原文、不提選項字母，所以旋轉是安全的。
 *
 * 用法：node tools/balance-answers.js js/levels/fce/banks/reading-mc-w9.js [...]
 */
const fs = require("fs");

for (const file of process.argv.slice(2)) {
  let src = fs.readFileSync(file, "utf8");
  let n = 0, want = 0;
  /* 逐題處理：抓 options 陣列與其後的 answer 值 */
  src = src.replace(/options:\s*(\[[^\]]*\]),\s*answer:\s*(\d+)/g, (m, optsRaw, ansRaw) => {
    let opts;
    try { opts = JSON.parse(optsRaw); } catch (e) { return m; }
    if (!Array.isArray(opts) || opts.length !== 4) return m;
    const ans = Number(ansRaw);
    const target = want % 4;
    want++;
    if (ans === target) return m;
    /* 旋轉，使正解移到 target 位置 */
    const shift = (target - ans + 4) % 4;
    const rotated = opts.map((_, i) => opts[(i - shift + 4) % 4]);
    n++;
    return 'options: ' + JSON.stringify(rotated) + ', answer: ' + target;
  });
  fs.writeFileSync(file, src);
  console.log(file.split("/").pop() + "：調整 " + n + " 題");
}
