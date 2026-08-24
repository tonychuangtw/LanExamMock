/* CPE Prep bank: IELTS-style Matching Headings reading (wave 2) */
(function () {
var BANK = [
  {
    id: "p-head2-01",
    title: "The Afterlife of Buildings",
    sections: [
      { label: "A", text: "Demolition was for most of the twentieth century the default response to a building that had outlived its purpose, and the arithmetic appeared to support it: clearing a site and starting again produced exactly the floor plan a client wanted, at a cost that could be predicted with some confidence. What that arithmetic omitted was everything already spent. The energy embodied in existing brick, steel and concrete does not reappear on a balance sheet, and until carbon accounting began to make it visible, the greenest building on any site was routinely knocked down to make way for a more efficient one." },
      { label: "B", text: "Reuse imposes constraints that architects have learned to describe, not always ironically, as liberating. Floor-to-ceiling heights are fixed, columns fall where a former use required them, and services must be threaded through structures that never anticipated them. The results are frequently more interesting than a free hand would have produced: a power station whose turbine hall becomes a gallery of unrepeatable scale, a market whose iron canopy dictates the rhythm of the flats beneath it. Constraint, in this reading, is not the price of reuse but its principal aesthetic dividend." },
      { label: "C", text: "The difficulties are rarely architectural. Lenders classify conversions as higher risk and price them accordingly; insurers hesitate over structures whose past they cannot fully document; and building regulations written around new construction can require interventions - additional stairs, wider openings - that consume the very qualities the conversion was undertaken to preserve. Practitioners report that the decisive costs of a reuse project are typically incurred before a single tool is lifted, in surveys, negotiation and delay." },
      { label: "D", text: "Conservation orthodoxy has meanwhile shifted from fabric towards use. An earlier generation of preservationists sought to arrest buildings at a chosen moment, stripping later accretions to reveal an authentic original; the prevailing view now treats successive alterations as part of the record and asks instead whether a building can continue to be occupied at all. A structure maintained by its occupants, on this argument, is better protected than one embalmed as a monument and visited twice a year." },
      { label: "E", text: "Not every failing building deserves rescue, and the strongest advocates of reuse concede as much. Deep-plan office blocks with sealed facades and low floor heights resist conversion to housing at almost any price, and there are structures whose material toxicity makes careful dismantling the responsible course. The useful question is no longer whether to keep or clear, but which of the two a particular structure can support - a judgement that requires the survey to precede the decision rather than confirm one already taken." }
    ],
    options: [
      "The hidden ledger of embodied energy",
      "Limits that improve the design",
      "Obstacles that arise before construction begins",
      "From preserving fabric to sustaining occupation",
      "Knowing when demolition is the honest answer",
      "Training the next generation of craftspeople",
      "Public consultation and local opposition",
      "Tax incentives for heritage owners"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "The paragraph turns on what conventional costing omitted - the energy already embodied in existing structures, invisible until carbon accounting revealed it." },
      { q: "Paragraph B", answer: 1, explanation: "Fixed heights and awkward columns yield results 'more interesting than a free hand would have produced': constraint as an aesthetic dividend." },
      { q: "Paragraph C", answer: 2, explanation: "Lending, insurance and regulation are the real obstacles, and the decisive costs come 'before a single tool is lifted'." },
      { q: "Paragraph D", answer: 3, explanation: "Conservation thinking has moved from freezing original fabric to asking whether a building can go on being occupied." },
      { q: "Paragraph E", answer: 4, explanation: "Some buildings resist conversion or are too toxic to keep, so the honest judgement is sometimes demolition." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
