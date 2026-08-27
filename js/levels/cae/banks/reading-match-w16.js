/* CAE Prep bank: Reading matching (C1) — wave 16 */
(function () {
var BANK = [
  {
    id: "cae-rmatch16-01",
    title: "Four Professionals on Advice They Ignored",
    sections: [
      { label: "A", text: "Halina: I was told at twenty-six to specialise and I did not, and I would give the same advice to somebody else and would not take it. The generalist position is genuinely weaker in a market that recruits for defined capabilities, and I have been passed over four times for posts that went to somebody narrower and better. What it has produced is a set of connections between fields that nobody else in my organisation can make, which was worth nothing for about eleven years and is now the reason I am employed." },
      { label: "B", text: "Ravi: The advice I ignored was to leave, given by four separate people over about two years, all of whom were correct about the organisation and wrong about the timing. I stayed eleven months longer than any of them would have, and in those months the thing I had been building became something somebody else could run, which was the only version of leaving I could have lived with. I do not present this as wisdom; another eleven months and it would have been a mistake." },
      { label: "C", text: "Meret: I was advised repeatedly not to take on the difficult client, and the advice was sound and I took him anyway, for reasons I would now describe as vanity. It was four years of difficulty. What I would say in mitigation is that everything I know about managing a relationship in which the other party is not reasonable was learned in those four years, and the two clients I have since declined were declined on evidence that I would not otherwise have had." },
      { label: "D", text: "Tunde: The advice I disregarded was about documentation, which everybody gives and nobody follows, and I disregarded it for eleven years until an event made the case unanswerable. What I would say to anybody in the position I was in is that the advice is not wrong and is delivered in a form that cannot be acted on: keep records is not an instruction, and what I needed was somebody to sit with me for four hours and set up the specific arrangement that I have now used for a decade." }
    ],
    questions: [
      { q: "Who would give advice they did not themselves follow?", answer: 0, explanation: "A: would give the same advice and would not take it." },
      { q: "Who delayed a departure to complete something?", answer: 1, explanation: "B: stayed eleven months longer." },
      { q: "Who attributes a decision to vanity?", answer: 2, explanation: "C: reasons I would now describe as vanity." },
      { q: "Who says the advice was unusable in the form given?", answer: 3, explanation: "D: delivered in a form that cannot be acted on." },
      { q: "Who says a difficult experience improved later judgement?", answer: 2, explanation: "C: declined on evidence I would not otherwise have had." },
      { q: "Who says the value of their choice appeared only after many years?", answer: 0, explanation: "A: worth nothing for about eleven years." },
      { q: "Who acknowledges their decision could easily have been wrong?", answer: 1, explanation: "B: another eleven months and it would have been a mistake." },
      { q: "Who describes what would actually have helped?", answer: 3, explanation: "D: somebody to sit with me for four hours." },
      { q: "Who mentions being passed over for posts?", answer: 0, explanation: "A: passed over four times." },
      { q: "Who says the advisers were right about the situation?", answer: 1, explanation: "B: correct about the organisation." }
    ]
  },
  {
    id: "cae-rmatch16-02",
    title: "Four Specialists on Explaining Their Field",
    sections: [
      { label: "A", text: "Nkechi: The error I made for years was to simplify, which is not the same as explaining and is frequently its opposite. A simplified account removes the qualifications, and the qualifications are where the understanding is; what an audience needs is not a smaller version of the argument but a different entry to the same one. I now begin with a question the listener already has, which takes about four minutes to identify and which does more than any amount of reducing the vocabulary." },
      { label: "B", text: "Petr: What I have learned is to state the disagreement. A field described as settled is a field about which a listener can form no view, and every subject I work in contains four or five live arguments that specialists conduct constantly and that never reach any public account. Presenting one of them is more work, produces questions I cannot answer, and is the only version in which the listener understands that the knowledge was made by people rather than found." },
      { label: "C", text: "Aoife: My concern is the metaphor, which is the standard instrument and which is more dangerous than it appears. Every comparison is accurate in about three respects and misleading in four, and the misleading ones are not visible to the person who cannot check them. I now say explicitly where the comparison stops working, in one sentence, which about a third of editors remove because it interrupts the flow, and the sentence is the only reason the metaphor is safe to use." },
      { label: "D", text: "Bo: What I attend to is what the listener will do with it. An explanation given to somebody who will act on it and one given to somebody who is curious are different documents, and the failure I see most often is a specialist delivering the second when the first is required. I now ask, before explaining anything, what decision the person is facing, which occasionally reveals that they are facing none, in which case the curious version is correct and considerably more enjoyable to give." }
    ],
    questions: [
      { q: "Who distinguishes simplification from explanation?", answer: 0, explanation: "A: simplifying is not the same as explaining." },
      { q: "Who presents live disagreements within the field?", answer: 1, explanation: "B: state the disagreement." },
      { q: "Who warns about the limits of comparisons?", answer: 2, explanation: "C: says where the comparison stops working." },
      { q: "Who asks what the listener intends to do?", answer: 3, explanation: "D: asks what decision the person is facing." },
      { q: "Who mentions editors removing a qualification?", answer: 2, explanation: "C: about a third of editors remove it." },
      { q: "Who begins from a question the audience already has?", answer: 0, explanation: "A: begins with a question the listener already has." },
      { q: "Who says an approach produces unanswerable questions?", answer: 1, explanation: "B: produces questions I cannot answer." },
      { q: "Who accepts that sometimes no decision is involved?", answer: 3, explanation: "D: they are facing none." },
      { q: "Who says knowledge should be shown as made rather than found?", answer: 1, explanation: "B: made by people rather than found." },
      { q: "Who says removing qualifications removes understanding?", answer: 0, explanation: "A: the qualifications are where the understanding is." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
