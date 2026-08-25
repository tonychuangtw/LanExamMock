/* CAE Prep bank: Reading gapped text (C1) — week 6 */
(function () {
var BANK = [
  {
    id: "c-rgap6-01",
    title: "The Label That Took Four Years",
    segments: [
      "The object is a carved wooden figure about forty centimetres high, and until 2019 the card beside it in the gallery said this: 'Figure, West Africa, 19th century. Presented by the family of Colonel R. H. Marden, 1931.' Nine words of description and eleven of provenance, in a case at the end of a corridor that most visitors walked past on their way to the ceramics.",
      "The reappraisal did not begin with a campaign. A curator preparing a routine condition report noticed that the accession file contained a shipping manifest, and that the manifest listed the figure among items removed during a punitive expedition.",
      "The museum's first instinct was legal, and it was the wrong instinct. Lawyers established what everybody already suspected, which is that under the law of the time nothing improper had occurred, and that this fact answered a question nobody in the community concerned had asked.",
      "What followed took four years and involved three institutions, a national museum in the country of origin, and a family who had maintained an oral record of the object's removal across four generations. Almost none of that time was spent on the physical object.",
      "The new label is longer, and it does something museums are trained not to do: it says who took the figure, in what circumstances, and that the museum's own account of its acquisition was incomplete for eighty-eight years.",
      "Reaction within the profession was not uniform. Some colleagues argued that a label is not restitution and risks becoming a comfortable substitute for it; others pointed out that thousands of objects with comparable histories still carry their original wording, and that changing one card changes very little.",
      "The figure itself has not moved. A long-term loan agreement, renewable and terminable by either side, keeps it in the gallery for now, and the question of where it will eventually rest has been left, deliberately, to a decision that has not yet been made."
    ],
    options: [
      "That single line changed the status of the object from an anonymous gift into evidence.",
      "The real work was establishing who had the standing to speak about it, and agreeing what a resolution would look like.",
      "Ceramics remain the museum's most visited collection.",
      "Legality and legitimacy had been quietly treated as the same thing, and they are not.",
      "Visitors now spend an average of four minutes at the case, against forty seconds before.",
      "Every museum of a certain age has a store full of such files, and most have not been read since they were written.",
      "Both criticisms are accurate, and neither of them is an argument for keeping the original nine words."
    ],
    answers: [5, 0, 3, 1, 4, 6],
    explanations: [
      "'Every museum of a certain age has a store full of such files' generalises from the sparse original label to the archives that nobody reads - which is why the discovery was accidental.",
      "'That single line changed the status of the object from an anonymous gift into evidence' refers directly to the manifest entry the curator found.",
      "'Legality and legitimacy had been quietly treated as the same thing, and they are not' explains why the legal answer was 'the wrong instinct'.",
      "'The real work was establishing who had the standing to speak' explains why four years were spent on something other than the object itself.",
      "The visitor-dwell figure belongs after the description of the new, longer label, as evidence of its effect.",
      "'Both criticisms are accurate, and neither of them is an argument for keeping the original nine words' answers the two professional objections raised immediately before it."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
