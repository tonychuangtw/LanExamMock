/* FCE Prep bank: Matching Headings reading (wave 5) */
(function () {
var BANK = [
  {
    id: "f-head5-01",
    title: "Learning a Language After Forty",
    sections: [
      { label: "A", text: "The belief that adults cannot learn languages is one of the most durable half-truths in education. What research actually shows is narrower: after adolescence most learners will retain an accent, and the ability to hear certain contrasts that do not exist in the first language declines. Almost everything else - vocabulary, grammar, reading, the capacity to hold a conversation - is learnable at any age, and in some respects adults progress faster because they already understand how a language is put together." },
      { label: "B", text: "What adults genuinely lack is time and tolerance for looking foolish. A four-year-old spends most of the day immersed and has no professional dignity to protect; a forty-year-old has ninety minutes on a Tuesday and a strong preference for not making mistakes in front of strangers. Teachers of adult classes say the second problem is the larger one, and that the students who improve fastest are simply the ones who volunteer to speak while still unsure." },
      { label: "C", text: "The evidence on method is less contested than the marketing suggests. Spaced repetition beats massed study, retrieval beats rereading, and speaking beats listening for building fluency, though listening builds comprehension faster. The most effective schedule for a working adult is not two hours on Sunday but twenty minutes daily, which is exactly the schedule that feels least impressive and is hardest to sustain." },
      { label: "D", text: "Motivation research draws a distinction that most learners recognise immediately. Learners driven by an external requirement - a promotion, an exam - typically stop when the requirement is met. Learners with a personal connection to the language, a family, a place, a body of music or film, keep going through the long middle period where progress becomes invisible. Choosing the language you have a reason to love is not sentimentality; it is a survival strategy." },
      { label: "E", text: "Almost everyone who reaches conversational level describes the same turning point, and it is not grammatical. It is the first time somebody replies at normal speed and is not understood, and the learner asks them to repeat it rather than smiling and pretending. From that moment the language stops being a performance to be graded and becomes a tool that occasionally fails, which is what it is for native speakers too." }
    ],
    options: [
      "What actually gets harder with age",
      "How grammar should be taught",
      "The real obstacles for adult learners",
      "What the research says about method",
      "Why the reason for learning matters",
      "The moment something changes",
      "Choosing between online and classroom courses",
      "Why children learn faster in every respect"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "Accent and certain sound contrasts decline; the rest remains learnable - a precise correction of the myth." },
      { q: "Paragraph B", answer: 2, explanation: "Time and the fear of looking foolish, not capacity, are what hold adult learners back." },
      { q: "Paragraph C", answer: 3, explanation: "Spaced repetition, retrieval, speaking versus listening and twenty minutes daily are findings about method." },
      { q: "Paragraph D", answer: 4, explanation: "External requirements run out; a personal connection carries learners through the invisible middle." },
      { q: "Paragraph E", answer: 5, explanation: "Asking someone to repeat instead of pretending is the turning point the paragraph describes." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
