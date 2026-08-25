/* CAE Prep bank: Matching Headings reading (wave 4) */
(function () {
var BANK = [
  {
    id: "c-head4-01",
    title: "Who Owns the View Upwards?",
    sections: [
      { label: "A", text: "Until recently the number of working satellites was measured in the low thousands and had grown slowly for half a century. The arrival of reusable launch vehicles and mass-produced spacecraft changed the arithmetic within a few years: single constellations are now licensed in the tens of thousands, and the objects in low orbit outnumber the naked-eye stars visible from a dark site. Nothing in the regulatory system was designed for that rate of change." },
      { label: "B", text: "Astronomers noticed first, because their instruments are built to detect the faint. A satellite crossing a long exposure leaves a bright trail that ruins the frame or, worse, is subtracted imperfectly and leaves a residue that looks like data. Wide-field survey telescopes, whose entire purpose is to photograph large areas repeatedly, are the most affected: a meaningful proportion of their twilight images now carry trails, and the software written to remove them is itself a source of uncertainty." },
      { label: "C", text: "Operators have not been indifferent. Darkening coatings, sunshades that keep the reflective surfaces out of direct sunlight, and adjustments to the attitude of the spacecraft during the most sensitive hours have all been trialled, and some have measurably reduced brightness. None has yet brought a large constellation reliably below the threshold that observatories asked for, and each imposes a cost in heat management or fuel that the operator alone bears." },
      { label: "D", text: "For many communities the sky is not principally a scientific resource. Navigation traditions, ceremonial calendars and stories that fix a people's place in the world are tied to particular risings and settings, and consultation on satellite licensing has almost never included the groups who hold them. When a licence is granted in one jurisdiction and the sky it alters is global, the usual mechanisms for objecting simply have no address to write to." },
      { label: "E", text: "The legal position is thin. The foundational space treaties predate commercial constellations and speak of the exploration of space as the province of all humankind without defining who may object to a change in its appearance. National regulators licence launches on grounds of radio spectrum and collision risk; brightness has no formal standing in most of them. Proposals now under discussion range from voluntary brightness limits attached to licences to treating the visible night sky as a form of shared heritage, which would give it, for the first time, something like a legal defender." }
    ],
    options: [
      "A sudden change of scale",
      "How satellites are launched",
      "The damage to research telescopes",
      "Cultural claims on the night sky",
      "What operators have tried",
      "Rules that were written for another era",
      "The risk of collisions in orbit",
      "Light pollution from cities"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "Reusable rockets and mass production took satellite numbers from thousands to tens of thousands - a change of scale the rules never anticipated." },
      { q: "Paragraph B", answer: 2, explanation: "Trails across long exposures and imperfect subtraction are the specific harm to survey astronomy." },
      { q: "Paragraph C", answer: 4, explanation: "Coatings, sunshades and attitude changes are the mitigations operators have tested, none yet sufficient." },
      { q: "Paragraph D", answer: 3, explanation: "Navigation traditions, ceremonial calendars and stories are claims on the sky that are not scientific and not consulted." },
      { q: "Paragraph E", answer: 5, explanation: "Treaties predating commercial constellations, and regulators who licence on spectrum and collision grounds only, show the law lagging behind." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
