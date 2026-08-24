/* CPE Prep bank: multiple matching (wave 5) */
(function () {
var BANK = [
  {
    id: "p-rmatch5-01",
    title: "The Cutting Room: Four Film Editors on What They Removed",
    sections: [
      { label: "A", text: "Editor A: The scene everybody remembers is invariably the one I cut. Audiences credit the director with restraint when what actually happened was six weeks of argument and a Tuesday afternoon when the performance we all loved was quietly removed because it answered a question the film was better for leaving open. I have stopped describing this as sacrifice. A film is not the sum of its best moments; it is a structure, and a beautiful passage that relieves the pressure at the wrong point does more harm than an indifferent one that holds it. The craft lies in distinguishing between the two under conditions of exhaustion and affection." },
      { label: "B", text: "Editor B: Directors talk about finding the film in the edit, which is true, and also an alibi. Material that was never shot cannot be found, and I have spent whole autumns trying to construct a transition out of coverage that does not exist because someone lost the light. The unglamorous truth is that most of my inventiveness is remedial: I am not shaping a vision so much as concealing an absence, and the audience's inability to detect the join is the entire measure of my success. It is a strange profession in which excellence is defined by leaving no evidence." },
      { label: "C", text: "Editor C: What I remove most often is not footage but time — three frames here, a held breath there. Nobody notices any individual cut, and everybody notices the cumulative effect, which they attribute to the script or the acting. Early in my career I fought for scenes; now I fight for rhythm, which is harder to defend in a room because you cannot show anyone the version they did not see. My advice to younger editors is to learn to describe rhythm in words, because the people who sign off on your work cannot feel it until the film is finished, and by then the argument is over." },
      { label: "D", text: "Editor D: The cut I regret is not one that harmed a film but one I won. I persuaded a first-time director to lose a long, unfashionable, badly framed conversation between two minor characters, and I was correct by every professional standard I had been taught. The film was tighter and it was also, in a way I could not have articulated then, smaller. That scene was where the director's actual sensibility lived, and I had efficiently removed it. I have been more careful since with work that does not resemble what I already admire, because my instincts are trained on what already exists." }
    ],
    questions: [
      { q: "Who says their best work is invisible to the audience by definition?", answer: 1, explanation: "B: success is measured by the audience's inability to detect the join — 'excellence is defined by leaving no evidence'." },
      { q: "Who describes the difficulty of arguing for something colleagues cannot yet perceive?", answer: 2, explanation: "C: you cannot show anyone the version they did not see, and decision-makers cannot feel rhythm until the film is finished." },
      { q: "Who regrets a decision that was professionally correct?", answer: 3, explanation: "D: the cut they regret is one they won, made 'correct by every professional standard I had been taught'." },
      { q: "Who says a strong sequence can damage a film by its placement?", answer: 0, explanation: "A: a beautiful passage that relieves the pressure at the wrong point does more harm than an indifferent one." },
      { q: "Who criticises a common phrase used about editing?", answer: 1, explanation: "B: 'finding the film in the edit' is true 'and also an alibi', since unshot material cannot be found." },
      { q: "Who notes that credit for their decisions goes to someone else?", answer: 0, explanation: "A: audiences credit the director with restraint for what was in fact the editor's removal." },
      { q: "Who says their priorities changed as they became more experienced?", answer: 2, explanation: "C: 'Early in my career I fought for scenes; now I fight for rhythm'." },
      { q: "Who warns about the limits of their own trained judgement?", answer: 3, explanation: "D: 'my instincts are trained on what already exists', hence more care with unfamiliar work." },
      { q: "Who says the emotional conditions of the work make judgement harder?", answer: 0, explanation: "A: the craft is distinguishing the two cases 'under conditions of exhaustion and affection'." },
      { q: "Who mentions viewers wrongly attributing an effect to other departments?", answer: 2, explanation: "C: the cumulative effect of small trims is attributed to the script or the acting." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
