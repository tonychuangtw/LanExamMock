/* ============================================================
 * PET Prep — B1 字彙卡 (seed items)
 * front = word/phrase, pos = part of speech,
 * def = English definition, example, zh = 繁中釋義
 * ============================================================ */

var VOCAB = [
  { front: "arrange", pos: "v.", def: "to plan or organise something in advance", example: "We arranged to meet outside the cinema at seven.", zh: "安排" },
  { front: "give up", pos: "phr. v.", def: "to stop doing or trying something", example: "He gave up eating sweets to get healthier.", zh: "放棄、戒除" },
  { front: "journey", pos: "n.", def: "the act of travelling from one place to another", example: "The journey to the coast takes about three hours.", zh: "旅程" },
  { front: "disappointed", pos: "adj.", def: "unhappy because something was not as good as you hoped", example: "She was disappointed when the concert was cancelled.", zh: "失望的" },
  { front: "improve", pos: "v.", def: "to get better or make something better", example: "My English improved a lot after the summer course.", zh: "改善、進步" }
];

if (typeof module !== 'undefined') {
  module.exports = { VOCAB: VOCAB };
}
