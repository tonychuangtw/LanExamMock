STATUS: in-progress
OBJECTIVE: 五個級數（KET/PET/FCE/CAE/CPE）的閱讀題庫各擴增 5 倍。FCE 已完工（2026-08-27），其餘四級進行中
NEXT_ACTION: CPE 多選 140 ✅、克漏字 100 ✅ 皆完工。接著 CPE 配對 14→70（每篇 4 位人物各約 90-100 字、10 題，answer 為區段索引），檔案 `js/levels/cpe/banks/reading-match-wN.js`；之後 tfng 6→30（正文 ≥250 字、8 題、選項固定 True/False/Not Given 且三種都要出現）、head 6→30（5 段各 ≥50 字、8 個標題選項、5 題答案相異）。新檔要註冊到 `js/loader.js` 的 `LEVEL_EXTRA_BANKS.cpe`。⚠️ 只有 FCE 需要同步 CamReview
VALIDATION: node test/test.js 全綠；該級 rmc/rgap/rmatch/rtfng/rhead 數字有增加
BLOCKERS: 無
PATHS: js/levels/<級>/banks/reading-*.js、js/loader.js（LEVEL_EXTRA_BANKS）、~/TelegramClaude/CamReview/tools/sync-banks.js（只有 FCE 需要）
UPDATED: 2026-08-27 20:29 台北

# 五級閱讀擴題進度

一天之內把 FCE 閱讀五個題型全部擴到 5 倍，共新增 **242 篇原創文章／題組**：
mc 84 篇（504 題）、gap 65 篇、match 51 組（各 4 段人物敘述＋10 題）、
tfng 18 篇、head 24 篇。全部原創，題材彼此不重複。


| 級數 | mc 28→140 | gap 20→100 | match 14→70 | tfng 6→30 | head 6→30 |
| --- | --- | --- | --- | --- | --- |
| **FCE** | 140 ✅ | 100 ✅ | 70 ✅ | 30 ✅ | 30 ✅ |
| **KET** | 140 ✅ | 100 ✅ | 70 ✅ | 30 ✅ | 30 ✅ |
| **PET** | 140 ✅ | 100 ✅ | 70 ✅ | 30 ✅ | 30 ✅ |
| **CAE** | 140 ✅ | 100 ✅ | 70 ✅ | 30 ✅ | 30 ✅ |
| **CPE** | 140 ✅ | 100 ✅ | 50 | 6 | 6 |

## 各級規格差異（動筆前必看）

| 級數 | CEFR | mc 正文長度 | 克漏字結構 |
| --- | --- | --- | --- |
| KET | A2 | 約 280 字、生活題材、用字簡單 | 6 段 / 6 選項 / 5 空 |
| **PET** | B1 | 約 300 字、敘事為主 | 6 段 / 6 選項 / 5 空 |
| FCE | B2 | 約 320 字 | 7 段 / 7 選項 / 6 空 |
| CAE | C1 | 約 400 字、論說與抽象概念 | 7 段 / 7 選項 / 6 空 |
| CPE | C2 | 約 420 字、密度最高 | 8 段 / 8 選項 / 7 空 |

配對（4-6 段各 ≥50 字＋10 題）、是非（正文 ≥250 字、6-8 題、三種答案都要有）、
標題（5 段各 ≥50 字＋8 個標題＋5 題）四級規格相同。

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

## gap 正文長度別壓到下限

`test.js` 要求 gap 正文 ≥200 字。wave 12 有一組寫到 203 字，離線太近，
段落一短、空格前後的線索就不夠，學生只能用刪去法猜。**目標寫 250-300 字**，
七段各 35-45 字左右。寫完用這個查：

```bash
node -e "require('./js/levels/fce/banks/reading-gap-wN.js').forEach(s=>console.log(s.id, s.segments.join(' ').split(/\s+/).length))"
```

## tfng / head 的格式（test.js 硬性要求）

**tfng（是非未提及）**：`{id, title, text, questions:[…]}`，正文 **≥250 字**，6-8 題，
每題 `options` 必須剛好是 `["True","False","Not Given"]`，`answer` 0-2，要有 explanation，
而且**一組裡三種答案都要出現**（`uses all three verdicts`）。掛載 `window.READING.tfng`。
Not Given 要真的是「文章沒說」，不是「文章說相反」——後者是 False。

**head（標題配對）**：`{id, title, sections:[5 段], options:[8 個標題], questions:[5 題]}`，
每段 ≥50 字、8 個標題不可重複（其中 3 個是誘答）、5 題答案不可重複且都是 0-7 的索引。
掛載 `window.READING.head`。

## 證據題只認「完整句子」的引文（2026-08-27 補）

前面說過解析引文要跟原文一字不差，還有第二個條件：`rdSentences()` 會過濾掉過長的句子，
所以引文必須落在**它切得出來的那些句子**裡。tfng wave 7/8 有三組是引了一個超長句子的片段，
結果整組生不出證據題。修法是改引一個中等長度的完整句子。要看某一組有哪些句子可用：

```bash
node -e "const l=require('./js/app.js');const s=require('./js/levels/fce/banks/reading-tfng-wN.js')[0];l.rdSentences(s.text).forEach((x,i)=>console.log(i,'['+x.length+']',x))"
```

## mc 正文也有 250 字下限（2026-08-27 補）

`test/test.js` 對 reading mc 的正文一樣要求 **≥250 字**，五個級數都一樣。
KET 因為句子短，很容易寫到 245 字就以為夠了（wave 9 有兩篇被擋）。
每支檔案寫完先跑：

```bash
node -e "require('./js/levels/<級>/banks/reading-mc-wN.js').forEach(s=>console.log(s.id,s.text.split(/\s+/).length))"
```

## match 每一段都要 ≥50 字（A2 特別容易踩到）

配對題的每一段人物敘述都必須 ≥50 字。KET 因為句子短，寫四段時很容易有一段只有
四十幾字（wave 8 有一段 48 字被擋）。寫完先查：

```bash
node -e "require('./js/levels/<級>/banks/reading-match-wN.js').forEach(s=>console.log(s.id, Math.min(...s.sections.map(x=>x.text.split(/\s+/).length))))"
```

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

### heredoc 寫檔時的換行陷阱（2026-08-27）

用 `cat > file <<'EOF'` 寫 bank 檔時，引號括住的 heredoc **不做任何跳脫處理**：
- 檔案裡寫 `\n` → JS 解析成真正換行 ✅（這是要的）
- 檔案裡寫 `\\n` → JS 解析成「反斜線 + n」兩個字元 ❌（正文會出現看得見的 \n）

pet reading-mc w9–w17 全中這個坑，test 不會抓（只檢字數／證據引用），是自己寫的
evidence 自檢 `ev=0` 才發現。寫完一律加驗：

```bash
node -e "const b=require('./檔案');console.log(b[0].text.includes(String.fromCharCode(92)+'n')?'BAD':'OK')"
```

