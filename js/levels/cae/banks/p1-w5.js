/* CAE Prep extra bank: part1 wave 5 */
(function () {
  var BANK = [
    {"text": "All the evidence ____ to a single, uncomfortable conclusion.", "options": ["aims", "heads", "directs", "points"], "answer": 3, "explanation": "Evidence 'points to' a conclusion — the standard collocation."},
    {"text": "Her latest novel has been ____ acclaimed by critics on both sides of the Atlantic.", "options": ["thickly", "widely", "deeply", "openly"], "answer": 1, "explanation": "'Widely acclaimed' is the natural collocation, meaning praised by many people."}
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
