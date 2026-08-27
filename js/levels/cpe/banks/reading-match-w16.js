/* CPE Prep bank: Reading multiple matching (C2) — wave 16 */
(function () {
var BANK = [
  {
    id: "cpe-rmatch16-01",
    title: "Four Composers on Working to a Commission",
    sections: [
      { label: "A", text: "The constraint is the commission and I mean that as praise. Twelve minutes, these forces, playable by an ensemble of this standard, in a hall with four seconds of reverberation, by March: every one of those is a decision I do not have to make, and the number of decisions is what paralyses anybody working without a brief. The pieces I have written entirely for myself took twice as long and are not better. I have come to think that the romantic account of composition, in which constraint is an obstacle to expression, was invented by people with private incomes." },
      { label: "B", text: "What I insist on knowing is who will play it, by name where possible. Writing for an instrument is an abstraction; writing for the person who plays it is a practical activity, because I know what they do well, what they will refuse, and what they will make of a passage that looks unpromising on paper. The difference is audible. A part written for somebody produces a performance in which they are doing something they recognise as theirs, and audiences hear that without being able to say what they are hearing." },
      { label: "C", text: "The occasion is the difficulty nobody warns you about. A commission for an anniversary, a memorial or an opening carries an expectation that the music will perform a social function, and the function and the music frequently want different things. I have written a piece for a solemn occasion that the committee found insufficiently affirmative, and they were not wrong about the occasion and I was not wrong about the piece. What I do now is have that conversation before I write anything, in terms specific enough to be uncomfortable." },
      { label: "D", text: "The money determines the form and this is almost never stated. A commission that pays for eight rehearsals produces a different piece from one that pays for two, and the second is the normal case, so what gets written across the profession is music that can be assembled quickly by excellent players reading well. I do not regard that as a compromise, since writing something unplayable in the time available is a failure and not an act of integrity, but I would like it acknowledged that the rehearsal budget is a compositional decision made by somebody who is not the composer." },
    ],
    questions: [
      { q: "Which composer regards a brief as reducing paralysis?", answer: 0, explanation: "A says the number of decisions is what paralyses anybody working without a brief." },
      { q: "Which composer writes for named individuals?", answer: 1, explanation: "B insists on knowing who will play it, by name where possible." },
      { q: "Which composer describes a conflict between music and occasion?", answer: 2, explanation: "C says the function and the music frequently want different things." },
      { q: "Which composer says financial provision shapes the music itself?", answer: 3, explanation: "D says a commission paying for eight rehearsals produces a different piece." },
      { q: "Which composer says a difference is audible without being identifiable?", answer: 1, explanation: "B says audiences hear it without being able to say what they are hearing." },
      { q: "Which composer now holds a difficult conversation in advance?", answer: 2, explanation: "C has that conversation before writing anything, in uncomfortable terms." },
      { q: "Which composer denies that an unplayable work would show integrity?", answer: 3, explanation: "D says writing something unplayable is a failure and not an act of integrity." },
      { q: "Which composer questions a romantic view of creative freedom?", answer: 0, explanation: "A says that account was invented by people with private incomes." },
      { q: "Which composer accepts that a dissatisfied client had a point?", answer: 2, explanation: "C says the committee were not wrong about the occasion." },
      { q: "Which composer compares their commissioned and uncommissioned work?", answer: 0, explanation: "A says pieces written entirely for themselves took twice as long and are not better." },
    ]
  },
  {
    id: "cpe-rmatch16-02",
    title: "Four Physiotherapists on What People Believe About Pain",
    sections: [
      { label: "A", text: "The belief I spend most of my time addressing is that pain is a reliable measure of damage, and it is not. A person can have a scan showing considerable wear and no symptoms whatever, and another can be in genuine and disabling pain with an image that shows nothing remarkable, and both of those are ordinary rather than exceptional. Until somebody has accepted that, every conversation about activity is heard as being asked to damage themselves further, and no programme I can design will survive that interpretation." },
      { label: "B", text: "The scan itself is frequently the problem, which is an awkward thing for a clinician to say. A report describing degeneration, in language that is accurate and alarming, hands somebody a sentence they will repeat for years: my back is worn out. The findings described are present in a large proportion of people of the same age who have no pain at all, and nothing in the report says so. I now spend the first session on that report rather than on the person's body, and I would rather they had never seen it." },
      { label: "C", text: "Rest is the instruction that does the most damage and it is the one everybody has been given by somebody. A short period is sensible and the extended version produces deconditioning, fear of movement, and a person who has been horizontal for three weeks and is now genuinely weaker, which confirms their belief that something is seriously wrong. Undoing that is considerably harder than treating the original problem, and I spend a substantial part of my working life on the consequences of advice given with entirely good intentions." },
      { label: "D", text: "What I have learnt is not to argue with the belief directly. Telling somebody that their pain is not caused by what they think is heard as being told that it is not real, whatever words are used, and the conversation is lost. So I ask what they have stopped doing and what they would do first if they could, and we work towards that specific thing rather than towards an argument about mechanism. The belief usually changes on its own about six weeks later, when they have done something they had assumed was impossible." },
    ],
    questions: [
      { q: "Which physiotherapist says pain does not indicate the extent of damage?", answer: 0, explanation: "A says pain is not a reliable measure of damage." },
      { q: "Which physiotherapist regards an imaging report as the obstacle?", answer: 1, explanation: "B says the scan itself is frequently the problem." },
      { q: "Which physiotherapist identifies a common instruction as harmful?", answer: 2, explanation: "C says rest is the instruction that does the most damage." },
      { q: "Which physiotherapist avoids challenging a belief head-on?", answer: 3, explanation: "D has learnt not to argue with the belief directly." },
      { q: "Which physiotherapist says a phrase is repeated for years?", answer: 1, explanation: "B describes the sentence 'my back is worn out' being repeated for years." },
      { q: "Which physiotherapist says a patient's deterioration appears to confirm their fear?", answer: 2, explanation: "C says being weaker confirms the belief that something is seriously wrong." },
      { q: "Which physiotherapist works towards a specific activity chosen by the patient?", answer: 3, explanation: "D asks what they would do first and works towards that specific thing." },
      { q: "Which physiotherapist says advice was given with good intentions?", answer: 2, explanation: "C says the advice was given with entirely good intentions." },
      { q: "Which physiotherapist says a programme cannot succeed against a particular belief?", answer: 0, explanation: "A says no programme will survive that interpretation." },
      { q: "Which physiotherapist wishes a patient had not seen a document?", answer: 1, explanation: "B would rather they had never seen the report." },
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
