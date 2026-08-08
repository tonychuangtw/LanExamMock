/* CAE Prep extra bank: part2 wave 5 */
(function () {
  var BANK = [
    {"text": "Under no circumstances ____ passengers open the doors between stations.", "answers": ["should", "must", "may"], "explanation": "After the negative adverbial 'Under no circumstances', the auxiliary comes before the subject: should/must/may passengers open…"},
    {"text": "The results, ____ surprising at first glance, are consistent with earlier findings.", "answers": ["while", "though", "although", "albeit"], "explanation": "A concessive linker fits: 'while/though/although/albeit surprising at first glance'."}
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
