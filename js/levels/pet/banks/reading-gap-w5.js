/* PET Prep bank: Reading gapped text (B1) — week 5 */
(function () {
var BANK = [
  {
    id: "p-rgap5-01",
    title: "The Dog on Platform Two",
    segments: [
      "The first time I saw him, I assumed he belonged to the man reading a newspaper on the bench. He was a medium-sized brown dog with one ear that refused to stand up, and he was sitting very upright at the yellow line, watching the tunnel as though he had bought a ticket and was slightly annoyed about the delay.",
      "He was there again on Tuesday, and on Thursday, and always alone. He never begged, never barked and never followed anyone up the stairs. At about half past five he would sit down at exactly the same spot, watch three or four trains arrive, and then walk calmly out of the station.",
      "Marta, who has worked at the ticket office for nineteen years, told me his name was Bruno and that he had been coming since the spring. She had asked around. Nobody knew who fed him, although everybody assumed somebody else did, which is usually how these arrangements work.",
      "The obvious explanation was the sad one, and for weeks I believed it: that Bruno was waiting for an owner who was never coming back. Marta thought so too. We had both read that story somewhere, and it fitted so neatly that neither of us questioned it.",
      "In November a woman in a hospital uniform came down the steps at twenty past five, and Bruno stood up so fast that his back legs slipped on the tiles. She crouched down, said something into his neck, and the two of them walked out together. She had been on night shifts for six weeks; he had been meeting the wrong trains at the right time.",
      "I still think about how confidently we had explained him. A dog sits on a platform every evening, and we supply the tragedy ourselves, because it is a better story than the truth, which was only that somebody was working late."
    ],
    options: [
      "Nobody at the station had ever seen him with a lead.",
      "After a week I realised that the man had simply been sitting there at the same time.",
      "Trains to the coast leave from platform four.",
      "It took me a while to find anyone who knew anything about him.",
      "Then, one evening, the explanation walked down the steps.",
      "The routine never varied."
    ],
    answers: [1, 5, 3, 0, 4],
    explanations: [
      "'The man had simply been sitting there at the same time' corrects the writer's first assumption that the dog belonged to the man with the newspaper.",
      "'The routine never varied' introduces the description of exactly what Bruno did each day at half past five.",
      "'It took me a while to find anyone who knew anything about him' leads into Marta, who had worked there nineteen years and knew his name.",
      "'Nobody at the station had ever seen him with a lead' fits the paragraph about assuming the sad explanation — the evidence that made an abandoned dog seem likely.",
      "'Then, one evening, the explanation walked down the steps' introduces the woman in the hospital uniform arriving at twenty past five."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
