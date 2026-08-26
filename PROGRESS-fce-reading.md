STATUS: in-progress
OBJECTIVE: 依 Tony 2026-08-26 指示，FCE 閱讀題庫擴增 5 倍
NEXT_ACTION: 繼續寫 `js/levels/fce/banks/reading-mc-wN.js`（每支 8 組、每組一篇約 330 字原創文章＋6 題），寫完在 `js/loader.js` 的 `LEVEL_EXTRA_BANKS.fce` 加檔名，跑 `node test/test.js` 看 [fce] rmc 數字。mc 做完再做 gap／match／tfng／head。每批做完要到 ~/TelegramClaude/CamReview 跑 `node tools/sync-banks.js` 並 push，兩站才會同步
VALIDATION: node test/test.js 全綠且 [fce] rmc/rgap/rmatch/rtfng/rhead 數字有增加；CamReview `node test/test.js` 全綠
BLOCKERS: 無
PATHS: js/levels/fce/banks/reading-*.js、js/loader.js（LEVEL_EXTRA_BANKS）、~/TelegramClaude/CamReview/tools/sync-banks.js
UPDATED: 2026-08-26 21:30 台北

# FCE 閱讀擴題進度

| 類型 | 原本 | 目標(5×) | 目前 |
| --- | --- | --- | --- |
| reading mc（選擇） | 28 | 140 | **48** |
| reading gap（克漏字） | 20 | 100 | 20 |
| reading match（配對） | 14 | 70 | 14 |
| reading tfng（是非） | 6 | 30 | 6 |
| reading head（標題） | 6 | 30 | 6 |

## 為什麼先做 mc

CamReview（課堂版）的 `js/pick.js` 只抽 `reading.mc`，其他四類只有 LanExamMock 自學站用得到。
老師實際派得到的就是 mc，所以先補這一類。

## 注意事項

- `BANK_FILES` 是五個級數共用的清單；只擴 FCE 要用 `LEVEL_EXTRA_BANKS.fce`，
  否則 KET/PET/CAE/CPE 每次載入都會多幾個 404。
- ⛔ 題庫內容不可交給 subagent 量產（見 CLAUDE.md，之前試過交出來是假貨）。
- 每組格式：`{id, title, text, questions:[{q, options[4], answer, explanation}]}`，
  文章約 300–400 字原創，解析要引用原文。
