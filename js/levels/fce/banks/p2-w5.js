/* FCE Prep extra bank: part2 wave 5 */
(function () {
  var BANK = [
    {"text": "The film was so dull that we left before it came to ____ end.", "answers": ["an"], "explanation": "The fixed phrase is 'come to an end'."},
    {"text": "____ having studied all night, he still failed the test.", "answers": ["despite"], "explanation": "'Despite + -ing' introduces a contrast: Despite having studied…"}
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
