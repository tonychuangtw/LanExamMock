/* CPE Prep bank: Matching Headings reading (wave 5) */
(function () {
var BANK = [
  {
    id: "p-head5-01",
    title: "The Museum of the Ordinary",
    sections: [
      { label: "A", text: "Museums have always been better at preserving the exceptional than the usual. A coronation robe survives because it was recognised as significant while it still existed; the clothes worn by the people watching the coronation do not, because nobody thought them worth a drawer. The result is a documentary record systematically biased towards ceremony, wealth and catastrophe, and correspondingly thin on the objects through which most lives were actually conducted." },
      { label: "B", text: "The attempts to correct this have their own history. Scandinavian folk museums began collecting rural domestic material in the late nineteenth century, at the precise moment industrialisation was destroying it, and the timing was not coincidental: a category of object becomes collectable at the point when it stops being ordinary. What is gathered under the banner of everyday life is therefore rarely everyday life; it is the residue of a way of living already recognised as ending." },
      { label: "C", text: "The practical obstacles are considerable. Ordinary objects arrive without documentation, and an unlabelled kitchen implement of uncertain date is a curatorial liability rather than an asset. They are also numerous: any acquisition policy that admits mass-produced goods must decide how many identical kettles constitute a collection, and storage, at current costs, is the binding constraint on almost every museum in the world." },
      { label: "D", text: "Some institutions have responded by collecting the immaterial instead. Recorded interviews, photographs of interiors, receipts, shopping lists and the contents of a single household's cupboards on a chosen day are cheaper to keep and often more informative than the objects themselves. Critics argue that this substitutes documentation for the thing documented, and that a photograph of a chair carries none of the wear that tells you how somebody sat in it." },
      { label: "E", text: "The unresolved question is who decides. Selection by curators reproduces professional taste; selection by public nomination reproduces whatever a self-selecting group of enthusiasts happens to care about; selection by algorithm, now seriously proposed for digital material, reproduces the biases of whatever corpus trained it. There is no neutral procedure available, and the honest institutions have begun saying so on the label rather than in the annual report." }
    ],
    options: [
      "The bias built into what survives",
      "How museums are funded",
      "Collecting the ordinary only as it disappears",
      "Why documentation may not be enough",
      "The problems of storing common objects",
      "Conservation techniques for textiles",
      "Nobody has a neutral way of choosing",
      "The rise of the private collector"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "The coronation robe survives and the spectators' clothes do not - the record is biased towards the exceptional." },
      { q: "Paragraph B", answer: 2, explanation: "Folk museums began collecting rural material exactly as industrialisation destroyed it: things become collectable when they stop being ordinary." },
      { q: "Paragraph C", answer: 4, explanation: "Undocumented implements, identical kettles and the cost of storage are the practical obstacles." },
      { q: "Paragraph D", answer: 3, explanation: "Interviews, photographs and receipts are cheaper, but critics say a photograph of a chair lacks the wear on the real one." },
      { q: "Paragraph E", answer: 6, explanation: "Curators, public nomination and algorithms each import a bias; no neutral procedure exists." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
