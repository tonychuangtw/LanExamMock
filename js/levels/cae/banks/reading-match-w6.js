/* CAE Prep bank: multiple matching (wave 6) */
(function () {
var BANK = [
  {
    id: "c-rmatch6-01",
    title: "Four Researchers on Fieldwork That Went Wrong",
    sections: [
      { label: "A", text: "Adaeze (hydrology): We installed eighteen river gauges and lost eleven in the first wet season, not to flooding but to theft, because a sealed metal box beside a river looks exactly like something worth opening. The failure was mine: I had designed the study in an office and consulted nobody who lived within fifty kilometres of the sites. The redesign took a year and involved paying two people in each village to maintain the equipment, which improved both the survival rate and, I am fairly sure, the data." },
      { label: "B", text: "Rune (archaeology): Our permit allowed six weeks and the ground gave us four days of workable weather. Everything after that was mud. The temptation, when a season collapses, is to dig faster and record less, and I have watched colleagues destroy stratigraphy that way. We stopped on day nine and spent the remaining time surveying the surface and photographing sections, which produced a smaller and much duller publication than the one I had promised the funder." },
      { label: "C", text: "Mireille (marine biology): The equipment worked, the weather held, and the results were beautiful — which was the problem. A sensor had been calibrated against the wrong reference solution, so every reading in six weeks was consistently and elegantly wrong. We found it only because a student insisted on repeating a measurement she had already taken. I now build a deliberately redundant measurement into every protocol, and I say her name when I explain why to new postgraduates." },
      { label: "D", text: "Tomasz (anthropology): I arrived with a questionnaire, which is a document that assumes you already know which questions matter. Within a fortnight people were answering politely and telling me nothing, and I could not work out why until an elderly man asked whether I was from the ministry. The instrument itself made me look like an official. I abandoned it, spent three months doing unpaid work in the co-operative, and the material I eventually published came from conversations I never planned." }
    ],
    questions: [
      { q: "Who lost equipment for reasons unconnected with the weather?", answer: 0, explanation: "A: Adaeze's river gauges were taken by thieves, not damaged by flooding." },
      { q: "Who describes results that looked convincing but were systematically wrong?", answer: 2, explanation: "C: Mireille's readings were 'consistently and elegantly wrong' because of a calibration error." },
      { q: "Who deliberately produced a less impressive output rather than compromise standards?", answer: 1, explanation: "B: Rune stopped digging and surveyed instead, accepting 'a smaller and much duller publication'." },
      { q: "Who found that the research method itself created mistrust?", answer: 3, explanation: "D: Tomasz's questionnaire made him look like a ministry official, so people told him nothing." },
      { q: "Who credits a junior colleague with uncovering the error?", answer: 2, explanation: "C: a student insisted on repeating a measurement, and Mireille names her when teaching postgraduates." },
      { q: "Who accepts that the failure was caused by their own planning?", answer: 0, explanation: "A: 'The failure was mine: I had designed the study in an office and consulted nobody' living nearby." },
      { q: "Who warns about the danger of rushing when time runs short?", answer: 1, explanation: "B: Rune describes the temptation to 'dig faster and record less' and colleagues destroying stratigraphy that way." },
      { q: "Who changed method completely and gathered material informally?", answer: 3, explanation: "D: Tomasz abandoned the questionnaire and worked in the co-operative for three months." },
      { q: "Who now builds a safeguard into every study as a result?", answer: 2, explanation: "C: Mireille adds 'a deliberately redundant measurement into every protocol'." },
      { q: "Who ended up paying local people to take part in the work?", answer: 0, explanation: "A: the redesign involved paying two people in each village to maintain the gauges." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
