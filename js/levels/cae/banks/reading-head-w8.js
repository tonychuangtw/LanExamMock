/* CAE Prep bank: Reading matching headings (C1) — wave 8 */
(function () {
var BANK = [
  {
    id: "cae-rhead8-01",
    title: "Putting a New System Into an Organisation",
    sections: [
      { label: "A", text: "Document what the existing arrangement actually does before deciding what should replace it, including the parts nobody authorised. Every long-standing process is surrounded by workarounds that address situations the official version does not handle, and those workarounds are invisible until the process is replaced and they stop working. This takes months, produces nothing demonstrable, and is the difference between a transition and a failure in every case anybody has examined." },
      { label: "B", text: "Budget for discovery rather than for construction. The estimate for a replacement covers the visible system, and the work consists of finding the invisible one, which is why such projects overrun with a consistency that no amount of experience in individual organisations appears to correct. A contingency expressed as a percentage of the build is the wrong instrument; what is required is a period, before commitment, in which the scope is established rather than assumed." },
      { label: "C", text: "Run both arrangements together for longer than anybody wants to. Parallel operation is expensive, is disliked by the people performing every transaction twice, and produces a list of discrepancies that would otherwise be discovered by users individually over the following year. Each discrepancy is either a defect or an undocumented behaviour, and the distinction is exactly what the exercise exists to establish, at a cost that is trivial against the alternative." },
      { label: "D", text: "Have the testing done by the people who will use the system, on real material. A test conducted against a specification establishes that the system does what was written down, which is a different question from whether it does what the work requires, and constructed test cases exercise the system a designer imagined rather than the one that exists. Last week's actual transactions are available, are free, and produce findings that no test plan generates." },
      { label: "E", text: "Decide who is permitted to stop the transition and on what evidence, before it begins. A cutover in progress generates enormous pressure to continue, since reversing is visible and expensive and proceeding defers the cost, and the decision to abandon is therefore taken late or not at all. Naming a person, a set of criteria and a point at which they will be examined converts an unmakeable decision into a scheduled one." }
    ],
    options: [
      "Record what the current arrangement really does",
      "Selecting a supplier",
      "Cost the finding out, not the building",
      "Run the old and the new together",
      "Training the users",
      "Test with real work and real people",
      "Agree in advance who can stop it",
      "Migrating historical records"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "Document the existing process including workarounds." },
      { q: "Paragraph B", answer: 2, explanation: "Budget for discovering scope, not building." },
      { q: "Paragraph C", answer: 3, explanation: "Parallel running reveals discrepancies." },
      { q: "Paragraph D", answer: 5, explanation: "Users test with actual transactions." },
      { q: "Paragraph E", answer: 6, explanation: "Name who may halt the cutover." }
    ]
  },
  {
    id: "cae-rhead8-02",
    title: "Telling People Something They Will Not Want to Hear",
    sections: [
      { label: "A", text: "Say it first and completely. An announcement that arrives after four paragraphs of context has already been read as evasion, and the recipients will have stopped attending to the context in order to search for the substance. State what has happened or what will happen, in one sentence, and then explain; the explanation is heard considerably better after the fact than before it, and the alternative arrangement is the one that generates most of the anger such announcements produce." },
      { label: "B", text: "Give the information to the people most affected before anybody else. A person who learns from a general communication, or from somebody else's account of it, has been told twice: once about the substance and once about their position in the organisation's ordering. This requires a sequence that is planned rather than convenient, and it frequently means telling somebody on a Friday because Monday would be easier for everybody else." },
      { label: "C", text: "Distinguish clearly between what is settled and what is not. Announcements typically contain both, and the reader cannot tell which is which unless the document says so explicitly. Anything presented as under consideration will be treated as decided, and anything decided will be argued about if the language leaves an opening, and the resulting confusion is generally attributed to poor communication when it is a failure to state which category each element belongs to." },
      { label: "D", text: "Do not explain the reasoning of a decision by describing the process that produced it. An account of the committees consulted and the analysis conducted answers a question nobody asked and reads as a defence. What is required is the reason, stated in terms of what was being weighed and what was chosen, which is shorter, more difficult to write and is what the audience will attempt to reconstruct if it is not supplied." },
      { label: "E", text: "State when the next information will be available, even if it is nothing. The interval after a difficult announcement is filled by whatever is available, and a commitment to say something on a fixed date, kept even when there is no news, is the mechanism that prevents that. Organisations that go quiet during the period between announcement and detail lose more confidence in that interval than in either of the events surrounding it." }
    ],
    options: [
      "Lead with the substance",
      "Preparing a press statement",
      "Order of telling matters",
      "Separate the decided from the open",
      "Legal review of wording",
      "Give reasons, not procedure",
      "Commit to the next update",
      "Handling questions afterwards"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "State the substance in the first sentence." },
      { q: "Paragraph B", answer: 2, explanation: "Tell those most affected first." },
      { q: "Paragraph C", answer: 3, explanation: "Mark clearly what is settled." },
      { q: "Paragraph D", answer: 5, explanation: "Give reasons rather than process." },
      { q: "Paragraph E", answer: 6, explanation: "Promise a date for the next update." }
    ]
  },
  {
    id: "cae-rhead8-03",
    title: "Deciding What to Count",
    sections: [
      { label: "A", text: "Begin by asking what decision the number will inform, and abandon any measure for which the answer is that it will be reported. A measure attached to no decision consumes collection effort, appears on a dashboard and accumulates a constituency that will resist its removal, and organisations routinely produce dozens of them. If nobody can state what would be done differently at a different value, the measure is a description rather than an instrument." },
      { label: "B", text: "Expect the measure to change the thing measured, and design accordingly. Any indicator with consequences attached will alter behaviour, and the alteration will be towards the indicator rather than towards the outcome it represents, which is not a failure of integrity but an entirely predictable response. The question at the design stage is therefore not whether distortion will occur but which distortion is acceptable, and a measure whose distortions have not been enumerated has not been designed." },
      { label: "C", text: "Prefer several imperfect measures to one good one. A single indicator can be optimised; a set of four, chosen so that improving one at the expense of the outcome degrades another, cannot be gamed without the effect being visible somewhere. This is administratively heavier and produces a picture rather than a score, which is the reason organisations that want a score continue to use single measures despite understanding all of this." },
      { label: "D", text: "Publish the distribution rather than the average. A mean conceals whether an experience is common to everybody or is a mixture of two very different populations, and the second is the ordinary case. Where a service reports an average wait of eleven weeks, the useful information is what proportion waited more than twenty-four, and that figure is generally available and is generally not the one that appears in any summary." },
      { label: "E", text: "Set a date on which the measure itself is reviewed. Indicators outlive the circumstances that produced them, and a measure introduced to address a specific problem continues to be collected and reported for a decade after the problem was resolved or superseded. The review that works asks what would be lost if the measure were discontinued, and the answer is frequently that somebody would have to explain its absence, which is not a reason to keep it." }
    ],
    options: [
      "Every measure should serve a decision",
      "Choosing data sources",
      "Assume the measure will distort behaviour",
      "Use a set rather than a single figure",
      "Presenting figures to a board",
      "Show the spread, not the middle",
      "Give the indicator an expiry date",
      "Benchmarking against other organisations"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "Discard measures attached to no decision." },
      { q: "Paragraph B", answer: 2, explanation: "Distortion is predictable and must be designed for." },
      { q: "Paragraph C", answer: 3, explanation: "A balanced set resists gaming." },
      { q: "Paragraph D", answer: 5, explanation: "Publish distributions rather than means." },
      { q: "Paragraph E", answer: 6, explanation: "Review whether the measure is still needed." }
    ]
  },
  {
    id: "cae-rhead8-04",
    title: "Working With Another Organisation",
    sections: [
      { label: "A", text: "Write down how the arrangement ends before it begins. The section describing termination is drafted most easily at the point when everybody is enthusiastic and nobody has anything to protect, and it is the provision that determines whether a partnership can be wound up without consuming the goodwill that produced it. Its existence also makes the conversation possible: a party proposing an ending under an agreed mechanism is following a procedure rather than manoeuvring." },
      { label: "B", text: "Establish who owns what is produced, including the things nobody expects to exist. Joint work generates materials, data, methods and reputation, and founding agreements routinely allocate none of them because nobody anticipated them. Disputes about ownership at the end of a successful collaboration are more common than disputes about money and are considerably harder to resolve, since both parties have contributed and neither can demonstrate how much." },
      { label: "C", text: "Assume that the differences that matter are not the ones in the agreement. Two organisations working in one arrangement discover incompatibilities in working hours, decision speed, tolerance for informality and expectations about who greets whom, none of which either party has ever had to describe because both experience their own practice as normal. These produce most of the friction, and the remedy is a regular low-level conversation between two people who are not senior enough for it to be an escalation." },
      { label: "D", text: "Identify what each party is not saying about why they are here. A collaboration has stated objectives and an actual purpose for each participant, which may be access to a funder, a relationship with a third party, or a need to demonstrate activity in a particular area. None of these is illegitimate and all of them shape behaviour, and a partnership in which the actual purposes have never been stated will produce decisions that appear inexplicable to the other side." },
      { label: "E", text: "Agree what will be measured and by whom while the arrangement is being formed. Joint work is reported to two sets of governance with different requirements, and a partnership that has not resolved this produces two accounts of itself that diverge, which is discovered by somebody comparing them at an inconvenient moment. One agreed set of figures, produced once and used by both, costs an afternoon at the outset and prevents a category of difficulty that is entirely avoidable." }
    ],
    options: [
      "Draft the ending at the beginning",
      "Choosing a partner",
      "Decide who owns what you create",
      "The frictions nobody wrote down",
      "Managing shared staff",
      "Name the unstated motives",
      "One set of numbers for both",
      "Publicity and joint branding"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "Write the termination provision early." },
      { q: "Paragraph B", answer: 2, explanation: "Allocate ownership of what is produced." },
      { q: "Paragraph C", answer: 3, explanation: "Cultural differences cause most friction." },
      { q: "Paragraph D", answer: 5, explanation: "Surface each party's real purpose." },
      { q: "Paragraph E", answer: 6, explanation: "Agree a single set of reported figures." }
    ]
  },
  {
    id: "cae-rhead8-05",
    title: "Keeping a Record of What You Have Done",
    sections: [
      { label: "A", text: "Record the reasoning rather than the outcome. A file containing what was decided is of limited use to anybody, including the person who decided it, four years later; a file containing what was being weighed, what was rejected and why, permits a successor to depart from the decision intelligently when circumstances change. This is the difference between a record that constrains and one that enables, and it takes about eleven minutes per significant decision." },
      { label: "B", text: "Do it as you go and accept that the version produced at the end will not exist. Documentation deferred to the completion of a piece of work is documentation that competes with the next piece of work, and the next piece of work wins. A short note written on the day, in whatever form is available, is worth more than the comprehensive account that is scheduled for a period that will not arrive." },
      { label: "C", text: "Store it where somebody other than you will find it. A record in a personal folder, on a device, in a structure that reflects how one individual thinks, is a record with a single point of failure, and the failure occurs at departure. The test is whether a colleague who does not know what they are looking for could locate it, and almost every personal archive fails that test while satisfying its owner entirely." },
      { label: "D", text: "Include what did not work. The successful version of any piece of work is recoverable from its output; the four approaches that were tried and abandoned are not, and they are what prevents a successor from repeating them. This is the part omitted from every account, partly because it is uncomfortable and mostly because nobody has ever been asked for it, and it is consistently the most useful material in any file." },
      { label: "E", text: "Write it so that it can be read by somebody who has never met you. The record that exists in the head of its author supported by a few notes is not a record, and the transition at which it fails is precisely the one it exists for. Names without roles, abbreviations without expansion and references to conversations that are not described are the ordinary failures, and each of them is trivial to correct at the moment of writing and impossible afterwards." }
    ],
    options: [
      "Capture why, not just what",
      "Choosing a filing system",
      "Write it at the time",
      "Put it where others will look",
      "Retention periods and disposal",
      "Record the failures too",
      "Assume a reader who does not know you",
      "Version control"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "Record the reasoning behind decisions." },
      { q: "Paragraph B", answer: 2, explanation: "Write it on the day rather than later." },
      { q: "Paragraph C", answer: 3, explanation: "Store where a colleague could find it." },
      { q: "Paragraph D", answer: 5, explanation: "Include abandoned approaches." },
      { q: "Paragraph E", answer: 6, explanation: "Write for a stranger." }
    ]
  },
  {
    id: "cae-rhead8-06",
    title: "Training That Is Still There in a Year",
    sections: [
      { label: "A", text: "Deliver almost nothing in advance of need. Material presented before anybody has encountered the situation it addresses answers a question the learner does not yet have, and retention of it is close to zero regardless of the quality of the delivery. The version that works distributes the content across the point at which each element becomes relevant, which is administratively awkward, requires four short interventions rather than one long one, and is supported by every study of the subject." },
      { label: "B", text: "Stop evaluating with a form completed at the end. Satisfaction measured immediately correlates with the confidence and warmth of the presenter and is close to uncorrelated with what anybody retains, and a session requiring genuine effort will score lower than one that does not. An organisation using that instrument is selecting its training for comfort, which is a defensible objective and is not the one anybody states." },
      { label: "C", text: "Have the material delivered by somebody who did it recently rather than by somebody who owns the policy. A department presenting its own procedure uses its own vocabulary and cannot identify which parts require explanation, and the resulting session is evaluated as clear by people who do not yet know enough to notice that it was not. A colleague who was in the audience a year ago knows exactly where the difficulty is." },
      { label: "D", text: "Assess by asking somebody to do the thing. A test of recall establishes what can be retrieved in the conditions of a test, and the conditions that matter are different in every respect. A short practical assessment at three months, conducted in the working environment, is the only measure that distinguishes training that produced capability from training that produced attendance, and it is uncomfortable for everybody involved, which is why it is rare." },
      { label: "E", text: "Report the retention figure and the satisfaction figure together, and expect them to diverge. Sessions that produce durable capability are frequently rated lower than those that do not, and an organisation that reports only one of the two numbers will optimise for it. Publishing both makes the trade-off visible and forces somebody to state which is being pursued, which is a decision that is currently made by default in almost every organisation that provides training at all." }
    ],
    options: [
      "Teach it when it is needed",
      "Choosing an external provider",
      "Abandon the end-of-session form",
      "Who should present the material",
      "Accreditation and certificates",
      "Test by observing the task",
      "Publish both figures",
      "Calculating the cost of training"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "Distribute content to the point of need." },
      { q: "Paragraph B", answer: 2, explanation: "End-of-session forms measure comfort." },
      { q: "Paragraph C", answer: 3, explanation: "A recent learner makes a better presenter." },
      { q: "Paragraph D", answer: 5, explanation: "Assess by practical task at three months." },
      { q: "Paragraph E", answer: 6, explanation: "Report retention and satisfaction together." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
