/* PET Prep bank: multiple matching (wave 5) */
(function () {
var BANK = [
  {
    id: "p-rmatch5-01",
    title: "Four People Talk About Learning to Drive",
    sections: [
      { label: "A", text: "Priya: I started lessons at seventeen and failed my first test after eleven minutes, which I am told is close to a record. I turned right without checking the mirror properly, and the examiner stopped the test there. I was so embarrassed that I did not book another one for six months. When I finally did, my instructor made me talk out loud through every junction — 'mirror, signal, position' — and it worked. I passed with two minor faults. I still say it quietly to myself now, five years later, whenever I am tired." },
      { label: "B", text: "Daniel: My father taught me in a supermarket car park on Sunday evenings, which saved my family a lot of money but nearly ended our relationship. He shouted, I sulked, and we agreed after four weeks that a professional would be better for everyone. My instructor was calm in a way my father simply cannot be. What surprised me most was how little of driving is about the car. It is about reading other people: who is about to pull out, who has not seen you, who is looking at their phone." },
      { label: "C", text: "Ruth: I learned late — at forty-three, after my company moved to a site with no bus route. Being an older learner has advantages nobody mentions. I was not trying to impress anyone, I could pay for lessons without asking my parents, and I already understood that being slightly late is better than being dead. The disadvantage is fear: at seventeen you think nothing can happen to you, and at forty-three you have read the news for twenty-six years. My instructor said adult learners are safer drivers and worse test candidates." },
      { label: "D", text: "Sam: I passed first time, which sounds impressive until I explain that I had been driving tractors on my uncle's farm since I was thirteen. The test itself was the easy part. The hard part came afterwards, in the city, where everything I had learned about wide empty lanes was useless. My first month of driving alone in traffic frightened me far more than any lesson. I would advise anyone who learns somewhere quiet to book two or three extra lessons in the busiest place they can find, before they need them." }
    ],
    questions: [
      { q: "Who says a family member was not a good teacher?", answer: 1, explanation: "B: Daniel's father shouted and they agreed a professional would be better for everyone." },
      { q: "Who repeats a phrase to themselves years after passing?", answer: 0, explanation: "A: Priya still says 'mirror, signal, position' quietly when she is tired." },
      { q: "Who found real driving harder than the test?", answer: 3, explanation: "D: Sam passed first time but found his first month driving alone in city traffic far more frightening." },
      { q: "Who learned to drive because of a change at work?", answer: 2, explanation: "C: Ruth learned at forty-three after her company moved to a site with no bus route." },
      { q: "Who waited a long time before trying the test again?", answer: 0, explanation: "A: Priya was so embarrassed that she did not book another test for six months." },
      { q: "Who says driving is mostly about understanding other people?", answer: 1, explanation: "B: Daniel says it is about reading other people — who is about to pull out, who has not seen you." },
      { q: "Who had experience with vehicles before starting lessons?", answer: 3, explanation: "D: Sam had been driving tractors on his uncle's farm since he was thirteen." },
      { q: "Who mentions an advantage of not being young?", answer: 2, explanation: "C: Ruth lists advantages of being an older learner, such as not trying to impress anyone." },
      { q: "Who gives advice about booking extra lessons?", answer: 3, explanation: "D: Sam advises learners from quiet areas to book extra lessons in the busiest place they can find." },
      { q: "Who says fear is the main problem for older learners?", answer: 2, explanation: "C: Ruth says the disadvantage is fear, because at forty-three you have read the news for twenty-six years." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
