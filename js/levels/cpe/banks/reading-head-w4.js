/* CPE Prep bank: Matching Headings reading (wave 4) */
(function () {
var BANK = [
  {
    id: "p-head4-01",
    title: "The Argument Inside Every Map",
    sections: [
      { label: "A", text: "A map is an argument disguised as a description. The earth is a curved surface and the page is not, and no transformation between them can preserve area, shape, distance and direction at once; something must be sacrificed, and the choice of what to sacrifice is not a technical detail but the whole of the matter. Every projection is therefore a proposition about what its user is expected to care about." },
      { label: "B", text: "The most familiar case is also the most misunderstood. Mercator's construction of 1569 preserves angles, which is precisely what a navigator holding a compass requires: a straight line drawn on the chart corresponds to a constant bearing. The price is area, inflated without limit towards the poles, so that Greenland arrives on the classroom wall at roughly the size of Africa, which is fourteen times larger. The projection is not lying; it is answering a question nobody in the classroom asked." },
      { label: "C", text: "The twentieth century turned this into a political quarrel. The Gall-Peters projection, promoted from the 1970s as a corrective, preserves area and distorts shape severely, and its advocates argued that the older map had flattered the temperate colonial powers at the expense of the tropics. Cartographers objected that swapping one distortion for another settled nothing and that the aesthetic cost was considerable; the argument was conducted, revealingly, as though only one map could be displayed at a time." },
      { label: "D", text: "Projection is only the most visible of the choices. What is named, and in which language; which settlements are large enough to appear; whether a disputed border is drawn solid, dashed or twice; what is left as blank space and therefore appears to be empty rather than merely unrecorded — each of these is a decision, and each was made by an institution with interests. Colonial surveys did not simply record territory; they produced the categories in which territory could subsequently be governed." },
      { label: "E", text: "Digital mapping has not dissolved these questions; it has distributed them. A phone shows a continuous scaleless surface with no visible projection, but it also decides which businesses appear at a given zoom, renders contested boundaries differently according to the country the device believes it is in, and defines the shortest route by criteria the user never sees. The old map declared its point of view on the sheet, where it could be examined. The new one embeds it in a service, where it cannot." }
    ],
    options: [
      "Why no flat map can be faithful",
      "Mercator and the price of preserving angles",
      "How satellite images are processed",
      "A dispute over which distortion is acceptable",
      "The choices that come after projection",
      "Teaching geography in schools",
      "Hidden decisions in digital maps",
      "The history of surveying instruments"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "A curved earth cannot be flattened without sacrificing something, so every projection embodies a choice." },
      { q: "Paragraph B", answer: 1, explanation: "Mercator preserves bearings for navigators and pays for it in area - Greenland against Africa is the standard illustration." },
      { q: "Paragraph C", answer: 3, explanation: "Gall-Peters versus Mercator is presented as a quarrel about which distortion is politically acceptable." },
      { q: "Paragraph D", answer: 4, explanation: "Naming, selection, border styling and blank space are decisions beyond projection, made by interested institutions." },
      { q: "Paragraph E", answer: 6, explanation: "Digital maps hide their point of view inside a service: zoom-dependent selection, country-specific borders, invisible routing criteria." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
