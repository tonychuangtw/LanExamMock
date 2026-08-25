/* KET Prep bank: Matching Headings reading (wave 5) */
(function () {
var BANK = [
  {
    id: "k-head5-01",
    title: "Learning to Swim at the Town Pool",
    sections: [
      { label: "A", text: "The pool opens at half past six in the morning, and the first hour belongs to the people who swim before work. It is quiet then; the water is flat and the only sound is the clock on the wall. At half past seven the schools arrive, and from that moment until four in the afternoon the building is loud, wet and full of children in coloured hats." },
      { label: "B", text: "The beginners' class has eight children and two teachers, which is more teachers than most classes in the school. Nobody starts by swimming. In the first three lessons the children learn to put their faces in the water, to blow bubbles and to float on their backs while a teacher holds them. Only in the fourth lesson does anyone move forward, and even then it is with a board." },
      { label: "C", text: "Adults come on Tuesday evenings. Most of them are between thirty and sixty and nearly all of them are afraid, usually because of something that happened when they were small. The teacher never uses the word 'afraid'. She says 'this takes time' and she stays within one arm's length for as long as it takes, which for one man last year was eleven weeks." },
      { label: "D", text: "The pool costs the town a great deal of money. The water must be heated and cleaned all day and all night, and the roof was replaced two years ago. The council pays most of it, a swimming club pays for its own lanes, and there is a small charge for everyone else, with free entry for children under five and for people over sixty-five." },
      { label: "E", text: "In July the pool closes for two weeks for cleaning, and everybody who works there says the same thing: the building is strange without the noise. The tiles are checked, the machines are serviced, the floor is scrubbed, and on the last Friday the water goes back in, warm and clear, ready for the six-thirty swimmers on Monday morning." }
    ],
    options: [
      "How the youngest ones begin",
      "Who pays for the pool",
      "The two weeks when it is empty",
      "How to become a swimming teacher",
      "The day from early morning to afternoon",
      "Adults who are starting late",
      "Competitions held at the pool",
      "Rules about food and drink"
    ],
    questions: [
      { q: "Paragraph A", answer: 4, explanation: "Half past six, the quiet first hour, the schools at half past seven and the noise until four - this is the shape of the day." },
      { q: "Paragraph B", answer: 0, explanation: "Faces in the water, bubbles, floating and only later a board: how the beginners' class starts." },
      { q: "Paragraph C", answer: 5, explanation: "Tuesday evenings, adults between thirty and sixty, mostly afraid - people learning late." },
      { q: "Paragraph D", answer: 1, explanation: "Heating, cleaning, the new roof, the council, the club and the small charge are all about the money." },
      { q: "Paragraph E", answer: 2, explanation: "The July closure for cleaning, and the building that feels strange without the noise." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
