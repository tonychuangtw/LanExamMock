/* CAE Prep bank: Reading gapped text (C1) — wave 20 */
(function () {
var BANK = [
  {
    id: "cae-rgap20-01",
    title: "The Thing We Stopped Doing",
    segments: [
      "The activity had been running for nineteen years, occupied about a day a week of one person's time, and was stopped in an afternoon once somebody asked what would happen if it were not done.",
      "Nobody could answer. This is not evidence that it was worthless, and it is evidence that nobody had examined the question in nineteen years, which is a different failing and a more common one.",
      "The origin was traced with some difficulty. It had been introduced in response to a requirement imposed by a funder that had ceased to fund the organisation in 2011, and the requirement had been specific to a programme that had ended before that.",
      "What kept it running was the ordinary mechanism. It appeared in a job description, it was reported on quarterly, and the report was read by somebody who assumed that a thing being reported was a thing somebody had decided to do.",
      "The decision to stop it was taken with an explicit condition, which is the part I would recommend to anybody. It was suspended for four months rather than abolished, and a note was circulated asking anybody who noticed its absence to say so.",
      "Two people noticed. One was using a by-product of the activity in a way that nobody had known about, and that use was preserved by a process taking about eleven minutes a month.",
      "The day a week was reallocated to work that the organisation had been describing as impossible for lack of capacity for about four years. Nobody has proposed reinstating the original activity, and the four-month suspension is now the standard mechanism, because it converts an argument about whether something matters into an observation about whether anybody notices."
    ],
    options: [
      "Suspension is reversible and abolition is not, which is the whole of why the objection to it disappears.",
      "That is a form of decision-making in which nobody has decided anything.",
      "Nobody had asked because asking implies a criticism of whoever established it.",
      "That is a considerably better outcome than either abolition or continuation would have produced.",
      "Both were in other departments and neither had ever been consulted.",
      "The person doing it had inherited it from a predecessor who had inherited it.",
      "The funder's requirement had itself been dropped in 2009."
    ],
    answers: [2, 6, 1, 0, 4, 3],
    explanations: [
      "The unanswerable question is explained by asking implying criticism.",
      "The traced origin is completed by the requirement itself having lapsed even earlier.",
      "The reporting mechanism is characterised as decision-making without decisions.",
      "The suspension condition is justified by reversibility disarming objection.",
      "The two people who noticed are placed as unconsulted colleagues elsewhere.",
      "The preserved by-product is marked as better than either extreme."
    ]
  },
  {
    id: "cae-rgap20-02",
    title: "The Handover Note I Read Four Years Late",
    segments: [
      "I found it in a shared folder while looking for something else: eleven pages written by my predecessor in the week before she left, describing the role, the people, the recurring problems and the four things she would have done differently.",
      "I had never been told it existed. She had left before I arrived, the post had been vacant for two months, and the person who had covered it in the interval had not known about the document either.",
      "Reading it four years in was a peculiar experience. About half of it I had worked out for myself, at a cost I could now estimate.",
      "The other half was more interesting. Several of the recurring problems she described had, in the intervening four years, been solved by changes I had made for other reasons and without knowing they were solutions.",
      "The four things she would have done differently were the part I read twice. Two were straightforward and I had done them. One I had considered and rejected for reasons she had not had.",
      "The fourth was a judgement about a relationship with another department, and it was wrong, or had become wrong, in a way that illustrates the limit of any handover document.",
      "What I have done since is unremarkable. My own version is written, is updated twice a year rather than in a final week, and its location is recorded in the job description rather than in a folder, which is where the previous one failed and where every document of this kind fails."
    ],
    options: [
      "The people in that department had changed entirely.",
      "That estimate is about eleven months of avoidable difficulty.",
      "A document written in a final week is written by somebody who is already leaving.",
      "The reasons were changes in the funding arrangements that she could not have anticipated.",
      "Neither of them had ever been described to me by anybody.",
      "It had been saved in a folder belonging to a project that closed in 2019.",
      "Nobody had thought to look for one, including me."
    ],
    answers: [5, 6, 1, 4, 3, 0],
    explanations: [
      "The discovery is explained by the document's location in a closed project folder.",
      "Nobody knowing of it is completed by the writer never having looked.",
      "The self-worked-out half is quantified as eleven months of avoidable difficulty.",
      "The solved problems are sharpened by their never having been described to him.",
      "The rejected suggestion is explained by funding changes she could not foresee.",
      "The wrong fourth judgement is explained by the department's personnel having changed."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
