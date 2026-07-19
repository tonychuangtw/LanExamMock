/* ============================================================
 * KET Prep — A2 字彙卡 (seed items)
 * front = word/phrase, pos = part of speech,
 * def = English definition, example, zh = 繁中釋義
 * ============================================================ */

var VOCAB = [
  { front: "hungry", pos: "adj.", def: "wanting to eat food", example: "I'm hungry — can we have lunch now?", zh: "餓的" },
  { front: "get up", pos: "phr. v.", def: "to leave your bed in the morning", example: "I get up at seven o'clock every day.", zh: "起床" },
  { front: "cheap", pos: "adj.", def: "costing little money", example: "The bus is cheaper than the train.", zh: "便宜的" },
  { front: "borrow", pos: "v.", def: "to take something from someone for a short time and then give it back", example: "Can I borrow your pencil, please?", zh: "借（入）" },
  { front: "weekend", pos: "n.", def: "Saturday and Sunday", example: "We play football at the weekend.", zh: "週末" }
];

if (typeof module !== 'undefined') {
  module.exports = { VOCAB: VOCAB };
}
