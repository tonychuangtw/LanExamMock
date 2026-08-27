STATUS: in-progress
OBJECTIVE: 依 Tony 2026-08-26 指示，FCE 閱讀題庫擴增 5 倍
NEXT_ACTION: mc 已達標 140 組（2026-08-27）。接著做克漏字：新增 `js/levels/fce/banks/reading-gap-wN.js`（每支 4-5 組），在 `js/loader.js` 的 `LEVEL_EXTRA_BANKS.fce` 加檔名，跑 `node test/test.js` 看 [fce] rgap 數字（20 → 目標 100）。gap 做完再做 match（14→70）、tfng（6→30）、head（6→30）。每批做完要到 ~/TelegramClaude/CamReview 跑 `node tools/sync-banks.js`、`python3 tools/stamp-version.py` 並 push
VALIDATION: node test/test.js 全綠且 [fce] rmc/rgap/rmatch/rtfng/rhead 數字有增加；CamReview `node test/test.js` 全綠
BLOCKERS: 無
PATHS: js/levels/fce/banks/reading-*.js、js/loader.js（LEVEL_EXTRA_BANKS）、~/TelegramClaude/CamReview/tools/sync-banks.js
UPDATED: 2026-08-27 10:48 台北

# FCE 閱讀擴題進度

| 類型 | 原本 | 目標(5×) | 目前 |
| --- | --- | --- | --- |
| reading mc（選擇） | 28 | 140 | **140 ✅ 達標** |
| reading gap（克漏字） | 20 | 100 | **35** |
| reading match（配對） | 14 | 70 | 14 |
| reading tfng（是非） | 6 | 30 | 6 |
| reading head（標題） | 6 | 30 | 6 |

## 為什麼先做 mc

CamReview（課堂版）的 `js/pick.js` 只抽 `reading.mc`，其他四類只有 LanExamMock 自學站用得到。
老師實際派得到的就是 mc，所以先補這一類。

## ⚠️ 開新 wave 前先看既有標題

wave 12 第一次寫的時候，第 2 篇不小心寫成 wave 9 已有的 trap street（假街道防盜版），
題目角度幾乎一樣。`test/test.js` 的「titles unique」有擋下來，但它只比標題，
**同主題換個標題它擋不住**。動筆前先跑一次：

```bash
node -e "const fs=require('fs'),p='js/levels/fce/banks/';fs.readdirSync(p).filter(f=>/^reading-mc/.test(f)).sort().forEach(f=>require('./'+p+f).forEach(s=>console.log(s.id,'|',s.title)))"
```

已用過的題材（到 wave 12）：麵包店×3、菜園×3、圖書館×2、修東西的人×2 —— 場景重複到這個
程度已經偏多，新 wave 盡量換場域。

## ⚠️ 解析裡的引文要跟原文一字不差（含大小寫）

`test/test.js` 有一條「evidence check questions generate for most reading sets」，
它會拿解析裡 `'…'` 引起來的句子去原文比對，比對**是區分大小寫的**（`flat.indexOf(key)`）。
手寫時很自然會把句中引文的第一個字母大寫（原文 `and the work that makes it possible…`
寫成 `'The work that makes it possible…'`），這樣就對不上，那一題就生不出證據題。
一組六題全都對不上，該組就完全沒有證據題，超過 2 組測試就紅。

寫完一支檔案跑這個掃一遍（會自動把句中引文的首字母改小寫，只在確定對得上時才改）：

```bash
node -e "const fs=require('fs');const path='js/levels/fce/banks/reading-mc-wN.js';let src=fs.readFileSync(path,'utf8');require('./'+path).forEach(set=>{const flat=set.text.replace(/\s+/g,' ');set.questions.forEach(q=>{const out=q.explanation.replace(/'([^']{20,}?)'/g,(m,i)=>{if(flat.indexOf(i)>=0)return m;const a=i[0].toLowerCase()+i.slice(1);return flat.indexOf(a)>=0?\"'\"+a+\"'\":m;});if(out!==q.explanation)src=src.replace('explanation: \"'+q.explanation+'\"','explanation: \"'+out+'\"');});});fs.writeFileSync(path,src)"
```

引文中間用 `…` 省略是可以的，但**前 25 個字元必須是原文連續片段**，否則那一題不算數。

## 注意事項

- `BANK_FILES` 是五個級數共用的清單；只擴 FCE 要用 `LEVEL_EXTRA_BANKS.fce`，
  否則 KET/PET/CAE/CPE 每次載入都會多幾個 404。
- ⛔ 題庫內容不可交給 subagent 量產（見 CLAUDE.md，之前試過交出來是假貨）。
- 每組格式：`{id, title, text, questions:[{q, options[4], answer, explanation}]}`，
  文章約 300–400 字原創，解析要引用原文。

## 答案位置要攤平

一題一題手寫時，正解會不自覺集中在 A（wave 11 原始分布是 18/11/14/5），
學生「不會就選 A」反而會被獎勵。寫完一支檔案就跑：

```bash
node tools/balance-answers.js js/levels/fce/banks/reading-mc-wN.js
```

它只旋轉選項陣列的順序、不改任何文字；解析引用的是原文而不是選項字母，所以旋轉是安全的。
