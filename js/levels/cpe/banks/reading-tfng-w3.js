/* CPE Prep bank: True/False/Not Given reading (wave 3) */
(function () {
var BANK = [
  {
    id: "p-tfng3-01",
    title: "The Weight of the World: Retiring the Standard Kilogram",
    text: "For 130 years the kilogram was a thing rather than an idea. A cylinder of platinum and iridium, made in 1889 and roughly the size of a plum, sat under three glass bells in a vault at Sevres, outside Paris, and was by definition the mass of one kilogram. If the cylinder gained or lost material, the kilogram itself changed with it; the object could not, in any meaningful sense, be wrong. Official copies were distributed to national laboratories, brought back periodically and compared with the original.\nThose comparisons were what eventually undid the arrangement. Over the course of a century, the copies drifted relative to the prototype by amounts of the order of fifty micrograms - the mass of a large grain of sand. Nobody could say with confidence whether the copies had gained mass, perhaps from contamination, or the prototype had lost it, because the prototype was the reference against which everything else was measured. A definition that cannot be checked is an uncomfortable foundation for a system of units, particularly one on which the mole, the ampere and the candela also depended.\nThe metre had already escaped this difficulty. Redefined in 1983 in terms of the distance light travels in a specified fraction of a second, it became reproducible in any suitably equipped laboratory rather than resident in a French vault. The kilogram required a comparable trick, and two competing routes emerged. One, the Kibble balance, uses electromagnetic force to balance a mass and relates the result to the Planck constant. The other, the Avogadro project, involved manufacturing near-perfect spheres of isotopically pure silicon, counting the atoms in them with great precision, and arriving at the same constant from an entirely different direction. That the two approaches converged was, for metrologists, the decisive evidence.\nIn November 2018, at a meeting in Versailles, delegates voted to fix the numerical value of the Planck constant and to define the kilogram in terms of it. The change took effect on 20 May 2019. Nothing observable happened. The new kilogram was constructed to equal the old one to within the precision of the best available measurements, so no scales required adjustment, no packet of flour was relabelled, and the cylinder at Sevres remains in its vault as an object of historical interest with no remaining authority.\nWhat the change bought was not accuracy in everyday life but the possibility of improvement. Because the definition is now a statement about nature rather than about an artefact, any laboratory that can realise it may do so, and the realisation will improve as instruments improve. The second, still defined by a transition in caesium-133, is expected to follow the same path once optical clocks are agreed upon - at which point the last of the base units will have stopped depending on anything anyone can drop.",
    questions: [
      {
        q: "Before 2019, the kilogram was defined by a physical object kept near Paris.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - a platinum-iridium cylinder 'sat under three glass bells in a vault at Sevres, outside Paris, and was by definition the mass of one kilogram'."
      },
      {
        q: "Scientists could determine whether the drift was caused by the prototype losing mass or the copies gaining it.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'Nobody could say with confidence', precisely because the prototype was the reference for everything else."
      },
      {
        q: "The metre was redefined before the kilogram was.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the metre was 'Redefined in 1983 in terms of the distance light travels', while the kilogram followed decades later."
      },
      {
        q: "The Kibble balance and the Avogadro project produced incompatible results.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'That the two approaches converged was, for metrologists, the decisive evidence'."
      },
      {
        q: "The silicon spheres used in the Avogadro project were the most expensive objects ever manufactured for a measurement.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the spheres and their purpose are described, but the text makes no claim about their cost."
      },
      {
        q: "The 2018 vote required weighing scales in shops to be recalibrated.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'Nothing observable happened ... no scales required adjustment, no packet of flour was relabelled'."
      },
      {
        q: "The original cylinder was destroyed once the new definition came into force.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - it 'remains in its vault as an object of historical interest with no remaining authority'."
      },
      {
        q: "The second is expected to be redefined at some point in the future.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the second 'is expected to follow the same path once optical clocks are agreed upon'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
