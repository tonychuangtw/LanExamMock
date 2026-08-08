/* FCE Prep extra bank: part1 wave 5 */
(function () {
  var BANK = [
    {"text": "She has a real ____ for languages — she speaks four fluently.", "options": ["ability", "knowledge", "gift", "practice"], "answer": 2, "explanation": "A 'gift for' something is a natural talent. 'Ability' takes 'to' + verb, and 'knowledge' takes 'of'."},
    {"text": "I didn't ____ to offend you — it was only a joke.", "options": ["mean", "suppose", "regard", "accuse"], "answer": 0, "explanation": "'I didn't mean to…' = it was not my intention. The other verbs don't fit this pattern."}
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
