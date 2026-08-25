/* FCE Prep bank: Matching Headings reading (wave 4) */
(function () {
var BANK = [
  {
    id: "f-head4-01",
    title: "The Return of the Repair Shop",
    sections: [
      { label: "A", text: "For most of the twentieth century, every high street had someone who mended things: a cobbler, a watchmaker, a man at the back of the electrical shop with a soldering iron. They disappeared for an unromantic reason. As manufacturing moved and volumes rose, the price of a new kettle fell below the cost of an hour of skilled labour, and the arithmetic that had kept repair alive quietly reversed." },
      { label: "B", text: "What replaced them, thirty years later, was not a business but a Saturday morning. The first Repair Cafe opened in Amsterdam in 2009: volunteers with tools, free coffee, and a rule that the owner of the object must sit at the table while it is being mended. Several thousand now operate worldwide. They are not trying to compete with shops; they are trying to make repair visible again, and to pass on the assumption that a broken thing is a question rather than a verdict." },
      { label: "C", text: "Volunteers quickly discovered that some objects fight back. Cases glued rather than screwed, screws with unusual heads, batteries bonded to the frame, software that refuses to work after an unauthorised part is fitted, and spare components that manufacturers will supply only to approved partners. None of this is accidental; all of it lengthens the queue for a replacement." },
      { label: "D", text: "Campaigners spent a decade turning that frustration into law. The European Union's ecodesign rules now require makers of certain appliances to supply spare parts for a fixed number of years and to design them so that they can be removed with ordinary tools; several US states have passed their own right-to-repair statutes, and a French repairability score has appeared on the shelf edge next to the price. Enforcement is uneven, and the rules cover far fewer products than campaigners wanted." },
      { label: "E", text: "The environmental case is straightforward for large items and less obvious for small ones. Most of a phone's lifetime carbon is emitted before it is switched on, so keeping one for four years instead of two is among the most effective things an individual can do. For a cheap toaster the saving is modest, and volunteers admit that a repair which takes ninety minutes of two people's time is not, in narrow economic terms, worth it. Their answer is that the toaster is not really the point: what is being repaired is the habit of assuming that things can be." }
    ],
    options: [
      "Why the menders vanished",
      "Designs that resist repair",
      "The volunteer movement that followed",
      "How to set up a repair business",
      "The law begins to catch up",
      "Which repairs are worth making",
      "Training young engineers",
      "The rising cost of electricity"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "Cheap new goods made an hour of skilled labour uneconomic, and the trades on the high street disappeared." },
      { q: "Paragraph B", answer: 2, explanation: "The Amsterdam Repair Cafe of 2009 and the thousands that followed are a volunteer movement, not a business." },
      { q: "Paragraph C", answer: 1, explanation: "Glued cases, odd screws, bonded batteries and restricted parts are deliberate obstacles to repair." },
      { q: "Paragraph D", answer: 4, explanation: "EU ecodesign rules, US right-to-repair statutes and the French repairability score are the legal response." },
      { q: "Paragraph E", answer: 5, explanation: "Phones justify repair on carbon grounds, cheap toasters barely do - the paragraph weighs which repairs pay." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
