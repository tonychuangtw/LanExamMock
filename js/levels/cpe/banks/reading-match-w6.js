/* CPE Prep bank: multiple matching (wave 6) */
(function () {
var BANK = [
  {
    id: "p-rmatch6-01",
    title: "Four Translators on the Sentence They Could Not Solve",
    sections: [
      { label: "A", text: "Ilse (German to English, philosophy): The difficulty was a single compound noun that the author had coined and used forty times, each occurrence depending on the reader remembering the previous thirty-nine. English can coin such words but wears them badly; a repeated invention that looks profound in German looks like a tic in English. I eventually rendered it three different ways according to context and added a translator's note admitting the inconsistency, which purists dislike and which I would do again." },
      { label: "B", text: "Mahmoud (Arabic to English, poetry): My problem was rhythm rather than meaning. The line scans in a metre with no natural equivalent, and every English version I produced was either faithful and inert or lively and unfaithful. I tried for eleven months. What broke the deadlock was abandoning the line as a unit: I let the sense run across three shorter lines, which no reader of the original would recognise as the same shape, and which finally sounded like something a person had written rather than a machine." },
      { label: "C", text: "Yumiko (English to Japanese, courtroom transcript): Legal interpreting does not permit invention, and the sentence in question was a witness's grammatical error that changed the implication of her testimony. Translate it correctly and you improve on the witness; translate the error and you appear incompetent. The convention is to render it faithfully and flag it, so I did, and defence counsel spent twenty minutes arguing that my footnote was itself an interpretation. He was, technically, right." },
      { label: "D", text: "Pau (Catalan to English, children's picture book): Thirty-two words on the page and eight months of work. A rhyme in the original carried the joke, the joke carried the moral, and the moral had to land on the same page as an illustration I could not change. The publisher wanted the rhyme kept, the author wanted the moral kept, and the illustrator, sensibly, wanted somebody to decide. I kept the moral, lost the rhyme, and added a sound pattern the original never had." }
    ],
    questions: [
      { q: "Who solved the problem by changing the structural unit of the original?", answer: 1, explanation: "B: Mahmoud abandoned the line as a unit and let the sense run across three shorter lines." },
      { q: "Who was constrained by a fixed image on the page?", answer: 3, explanation: "D: Pau had to make the joke land on the same page as an illustration he could not change." },
      { q: "Who acknowledges that a critic's objection to their solution was valid?", answer: 2, explanation: "C: Yumiko says defence counsel was 'technically, right' that her footnote was itself an interpretation." },
      { q: "Who deliberately translated the same item in more than one way?", answer: 0, explanation: "A: Ilse rendered the coined compound three different ways according to context." },
      { q: "Who introduced an effect that did not exist in the original?", answer: 3, explanation: "D: Pau added 'a sound pattern the original never had' after losing the rhyme." },
      { q: "Who says the problem was one of sound rather than sense?", answer: 1, explanation: "B: Mahmoud's difficulty was 'rhythm rather than meaning'." },
      { q: "Who worked in a setting where inventing a solution is not permitted?", answer: 2, explanation: "C: 'Legal interpreting does not permit invention'." },
      { q: "Who defends a decision that specialists in the field disapprove of?", answer: 0, explanation: "A: Ilse's inconsistency and translator's note are what 'purists dislike and which I would do again'." },
      { q: "Who describes competing demands from different people involved in the project?", answer: 3, explanation: "D: the publisher wanted the rhyme, the author wanted the moral, and the illustrator wanted a decision." },
      { q: "Who spent close to a year on the problem before finding a solution?", answer: 1, explanation: "B: Mahmoud 'tried for eleven months' before the breakthrough." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
