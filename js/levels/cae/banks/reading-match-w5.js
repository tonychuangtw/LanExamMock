/* CAE Prep bank: multiple matching (wave 5) */
(function () {
var BANK = [
  {
    id: "c-rmatch5-01",
    title: "Making Good: Four Conservators on Repairing Damaged Objects",
    sections: [
      { label: "A", text: "Textiles conservator: The public imagines us restoring things to how they looked when new, and almost everything we actually do is the opposite. A seventeenth-century embroidery that has faded unevenly is telling you where it hung and which side faced a window; brighten it and you have deleted that. My working rule is that every intervention must be reversible by whoever comes after me, because they will know things I don't. That principle sounds humble, but it is also self-protective: the field has revised its consensus twice in my career, and the practitioners who suffered were the ones who could not be undone." },
      { label: "B", text: "Ceramics conservator: I spend a surprising proportion of my week undoing the work of enthusiastic amateurs. A broken bowl arrives held together with hardware-shop adhesive that has yellowed, shrunk and pulled the fragments out of alignment, and my first month goes on removing it without taking the glaze with it. I try not to be sniffy about this. The person who did it was trying to save something they loved, at a time when nobody told them there was an alternative. If I am honest, the greater damage in my caseload comes from good intentions rather than accidents." },
      { label: "C", text: "Paper conservator: Everyone asks about the dramatic cases — flood, fire, the folder left on a radiator — but the real adversary is chemistry with no story attached. Cheap wood-pulp paper from the nineteenth century is slowly digesting itself; the acid is in the sheet, not the environment. A book can sit undisturbed on a shelf in perfect conditions and still become unusable within a lifetime. It changes what you prioritise. I would rather spend a budget deacidifying two thousand ordinary pamphlets than spectacularly rescuing one famous manuscript that is not, in fact, deteriorating." },
      { label: "D", text: "Furniture conservator: The hardest conversations are with owners, not objects. Someone brings in a chair their grandfather made and wants the missing leg replaced so that it can be sat on again; the museum-trained part of me wants it stabilised, documented and left alone. I have come round to the view that these are simply different purposes, and that neither is a betrayal, provided the choice is made consciously and written down. What I refuse to do is produce a repair so convincing that a future owner cannot tell what is original — that is not conservation, it is forgery with good manners." }
    ],
    questions: [
      { q: "Who says most of their work involves correcting previous repairs?", answer: 1, explanation: "B: the ceramics conservator spends a surprising proportion of the week undoing enthusiastic amateurs' work." },
      { q: "Who argues that damage itself can carry historical information?", answer: 0, explanation: "A: uneven fading tells you where the embroidery hung and which side faced a window." },
      { q: "Who says the most common threat receives the least attention?", answer: 2, explanation: "C: the real adversary is 'chemistry with no story attached' — acidic paper, not dramatic disasters." },
      { q: "Who describes a disagreement about what an object is for?", answer: 3, explanation: "D: owners want a chair usable again while the museum-trained instinct is to stabilise and leave it alone." },
      { q: "Who mentions that professional opinion in their field has changed over time?", answer: 0, explanation: "A: 'the field has revised its consensus twice in my career', which is why work must be reversible." },
      { q: "Who declines to criticise the people who caused the damage?", answer: 1, explanation: "B: 'I try not to be sniffy about this' — the person was trying to save something they loved." },
      { q: "Who explains how a particular risk shapes their spending decisions?", answer: 2, explanation: "C: they would rather deacidify two thousand pamphlets than rescue one famous manuscript that is not deteriorating." },
      { q: "Who sets a limit on how invisible a repair should be?", answer: 3, explanation: "D: refuses a repair so convincing that a future owner cannot tell what is original." },
      { q: "Who gives a self-interested reason for a cautious principle?", answer: 0, explanation: "A: reversibility 'sounds humble, but it is also self-protective' — those who could not be undone suffered." },
      { q: "Who says an object can deteriorate even when it is stored correctly?", answer: 2, explanation: "C: a book in perfect conditions can still become unusable because the acid is in the sheet itself." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
