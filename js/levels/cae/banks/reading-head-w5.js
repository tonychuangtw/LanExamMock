/* CAE Prep bank: Matching Headings reading (wave 5) */
(function () {
var BANK = [
  {
    id: "c-head5-01",
    title: "The Second Life of the Shipping Container",
    sections: [
      { label: "A", text: "The box exists because Malcom McLean, a road haulier rather than a shipowner, was tired of watching cargo handled twice. Standardising the dimensions in the 1960s did not merely speed up loading; it collapsed the cost of moving goods to the point where the location of a factory became a decision about labour and tax rather than about distance from the customer. Few pieces of industrial design have rearranged the world so thoroughly while attracting so little attention." },
      { label: "B", text: "Containers accumulate where goods are consumed rather than where they are made, which produces a chronic surplus at the importing end. Repositioning an empty box across an ocean costs money that nobody wants to spend, so a proportion is simply retired. That surplus, not any aesthetic quality, is why the container became available to architects: it is a strong steel frame that arrives on a lorry and costs less than the materials inside a conventional wall." },
      { label: "C", text: "The architectural results have been uneven. A container is the wrong shape for most rooms, its steel conducts heat enthusiastically in both directions, and the interior must be insulated inward, which removes much of the space the box appeared to offer. Cutting large openings weakens the structure that made it attractive in the first place. Experienced practices now say the honest use case is a small, repeatable, temporary unit, not a family house." },
      { label: "D", text: "Where the model has genuinely worked is in situations defined by time rather than by taste: emergency clinics after earthquakes, student rooms on sites awaiting redevelopment, laboratories that must be moved between campuses, cafes on land whose lease will expire. The virtue is not the steel but the fact that the building can leave, which changes what a landowner is prepared to permit and what a council is prepared to approve." },
      { label: "E", text: "There is an environmental argument on both sides. Reusing a retired box avoids melting and recasting several tonnes of steel, which is not nothing. Against that, the insulation required, the steel wasted in cutting, and the transport of the finished unit can exceed the impact of building conventionally on the same site. The reasonable conclusion is that a container is a good answer to a specific question, and a fashionable answer to several questions it does not fit." }
    ],
    options: [
      "Why empty boxes become cheap",
      "The invention that rearranged trade",
      "How containers are secured at sea",
      "The practical problems of building with them",
      "Where the idea genuinely works",
      "A contested environmental balance",
      "The economics of port labour",
      "Designing container terminals"
    ],
    questions: [
      { q: "Paragraph A", answer: 1, explanation: "McLean's standardisation collapsed transport costs and changed where factories are located." },
      { q: "Paragraph B", answer: 0, explanation: "Boxes pile up at the importing end and repositioning costs money, so retired containers are cheap." },
      { q: "Paragraph C", answer: 3, explanation: "Wrong shape, conductive steel, inward insulation and weakened structure are the building difficulties." },
      { q: "Paragraph D", answer: 4, explanation: "Clinics, student rooms, mobile laboratories and short-lease cafes: cases defined by time, where the model works." },
      { q: "Paragraph E", answer: 5, explanation: "Steel saved versus insulation, cutting waste and transport - the environmental case cuts both ways." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
