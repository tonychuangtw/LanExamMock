/* FCE Prep bank: Reading gapped text (B2) — week 5 */
(function () {
var BANK = [
  {
    id: "f-rgap5-01",
    title: "A Summer at the Lighthouse Museum",
    segments: [
      "The advertisement said 'summer assistant wanted, small museum, coastal location, accommodation included', which sounded considerably more glamorous than it turned out to be. The accommodation was a room in the former keeper's cottage with a window that faced directly into the prevailing wind, and the museum was three rooms of brass instruments, faded charts and one enormous lens.",
      "That lens is the entire reason anyone visits. It is nearly two metres tall, was built in France in 1873, and consists of hundreds of separate prisms arranged so that a single oil flame could be seen thirty kilometres out to sea. Visitors who had wandered in only to shelter from the rain would stop mid-sentence when they came round the corner and found it above them.",
      "My job description was 'front of house', which in practice meant selling tickets, sweeping sand out of the doorway and answering the same eleven questions in rotation. I had memorised the answers within a fortnight and could deliver them while thinking about something else entirely, which I am not proud of.",
      "Numbers were modest — thirty visitors on a good day, four on a wet Tuesday — and the quiet hours were long. I read most of the museum's small library of shipping histories simply because there was nothing else within reach of the ticket desk, and none of it, at the time, seemed connected to my job.",
      "Everything changed in July, when a retired engineer spent forty minutes explaining why the prisms are cut at the angles they are, and what the designers had to understand about light in order to build the thing decades before anyone could photograph a beam. He drew diagrams on the back of a leaflet, which I kept.",
      "By August I had begun adding material that was not in the script: the shipwreck that prompted the tower's construction, the keeper who maintained a garden on solid rock, the argument about automation that split the village in 1958. Visitors stayed longer and asked better questions. The manager noticed, and rather than telling me off, asked me to rewrite two of the display cards.",
      "I have never worked in a museum since, but that summer permanently altered how I look at exhibitions. Whenever I see a room of objects labelled with nothing but names and dates, I think the same thing: somebody in this building knows the stories, and nobody has asked them."
    ],
    options: [
      "Their reaction was always identical, and it never stopped being satisfying.",
      "What I had not expected was that the building would contain something genuinely extraordinary.",
      "Neither, in fairness, was the manager, who had been reciting the same lines for eleven years.",
      "Only later did I realise how much of it I had absorbed.",
      "After that, I could not deliver the answers automatically any more, because I had begun to find them interesting.",
      "The tower itself is closed to visitors for safety reasons.",
      "As far as I know, those cards are still on the wall."
    ],
    answers: [1, 0, 2, 3, 4, 6],
    explanations: [
      "'The building would contain something genuinely extraordinary' bridges the disappointing accommodation and the description of the lens that follows.",
      "'Their reaction was always identical' refers back to visitors stopping mid-sentence when they saw the lens, closing that paragraph.",
      "'Neither, in fairness, was the manager' picks up 'which I am not proud of' and extends the point about reciting answers mechanically.",
      "'Only later did I realise how much of it I had absorbed' follows the reading done in the quiet hours, which seemed unconnected to the job at the time.",
      "'I could not deliver the answers automatically any more' is the consequence of the engineer's explanation, and leads into the enriched tours of August.",
      "'Those cards are still on the wall' follows the manager asking the writer to rewrite two display cards."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
