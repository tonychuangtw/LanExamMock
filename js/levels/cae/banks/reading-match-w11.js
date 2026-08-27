/* CAE Prep bank: Reading matching (C1) — wave 11 */
(function () {
var BANK = [
  {
    id: "cae-rmatch11-01",
    title: "Four Pilots on Checklists",
    sections: [
      { label: "A", text: "Marta: The purpose is misunderstood outside the profession as a memory aid, which is the least of it. A checklist is a device for making two people verify the same thing independently, and the value is in the challenge and response rather than in the list. Where a crew reads it as a monologue, which happens when one of them is senior and the other is not, it performs almost none of its function, and the culture that permits a junior officer to say that they have not seen the item confirmed is what the procedure actually rests on." },
      { label: "B", text: "Idris: The design lesson that transfers to every other field is length. A checklist of forty items is not run properly by anybody after the fourth week, and what happens is a fluent recitation that touches nothing. The ones that work contain between four and nine items, all of them things that are occasionally omitted and consequential when they are, and every item that is on a list because somebody could not bear to remove it makes the remaining items less likely to be checked." },
      { label: "C", text: "Nils: What I would emphasise is when they are run. The critical checklists are those performed at a transition, and the transitions are precisely the moments of highest workload, which is why the discipline of pausing to run one feels wrong at exactly the point where it matters most. I have watched competent crews defer an item because they were busy, which is the circumstance the item exists for, and the training that addresses this is not about the list at all; it is about tolerating a delay when everything is telling you to proceed." },
      { label: "D", text: "Ayse: My interest is in what happens when the situation is not on any list. Procedures cover the anticipated, and about four times in a career something occurs that is not covered, and a crew trained only in compliance is poorly placed. What we practise now, deliberately, is the transition from following a procedure to reasoning from principles, including the sentence that authorises it, and the crews that manage it best are the ones who have been permitted, in training, to depart from a checklist and to be asked why afterwards rather than corrected during." }
    ],
    questions: [
      { q: "Who describes the checklist as a device for mutual verification?", answer: 0, explanation: "A: making two people verify the same thing independently." },
      { q: "Who emphasises the number of items?", answer: 1, explanation: "B: the design lesson is length." },
      { q: "Who is concerned with the timing of checks?", answer: 2, explanation: "C: what I would emphasise is when they are run." },
      { q: "Who focuses on situations no procedure covers?", answer: 3, explanation: "D: something occurs that is not covered." },
      { q: "Who says seniority can undermine the procedure?", answer: 0, explanation: "A: read as a monologue when one is senior." },
      { q: "Who says unnecessary items weaken the whole list?", answer: 1, explanation: "B: every item somebody could not bear to remove." },
      { q: "Who describes the discipline as feeling wrong when most needed?", answer: 2, explanation: "C: pausing feels wrong at exactly the point where it matters." },
      { q: "Who values training that permits deliberate departure?", answer: 3, explanation: "D: permitted in training to depart from a checklist." },
      { q: "Who mentions a fluent recitation that achieves nothing?", answer: 1, explanation: "B: a fluent recitation that touches nothing." },
      { q: "Who identifies the culture that underpins the procedure?", answer: 0, explanation: "A: culture permitting a junior to speak." }
    ]
  },
  {
    id: "cae-rmatch11-02",
    title: "Four Historians on Testimony",
    sections: [
      { label: "A", text: "Ruth: The objection that memory is unreliable is correct and is a poor reason to disregard testimony, because the unreliability is patterned rather than random. People are accurate about what they did and inaccurate about when, they compress sequences, and they incorporate what they have subsequently read as though they had witnessed it. A historian who knows the pattern reads an interview as evidence about some things and not others, which is exactly how one reads a document, and nobody proposes disregarding documents because they are partial." },
      { label: "B", text: "Kofi: What interests me is the question I do not ask. An interview conducted with a schedule produces answers to the interviewer's questions, and the material that has changed my work has almost always arrived in the four minutes after I stopped asking, when the recorder was still running and the subject said something that no schedule would have reached. I now build that silence in deliberately and I tell people the recorder is on, which is an ethical requirement and reduces the effect by about half." },
      { label: "C", text: "Lena: My work is with people describing events that happened to them at four or five years old, and the methodological difficulties are considerable and not the ones people expect. Early memory is fragmentary and is generally reliable in its fragments; what is unreliable is the narrative connecting them, which is constructed later, frequently from what a parent said. I therefore record the fragments separately from the account, and treat the account as evidence about the family's telling rather than about the event." },
      { label: "D", text: "Otto: The methodological point I would make is about who is available. Testimony comes from survivors, from people who remained in a place, from those willing to speak and those who lived long enough to be asked, and every one of those is a selection. A collection of eleven interviews about a factory closure is a collection of eleven people who stayed in the town, and the people who left, who are the majority and whose experience was different, are unrepresented in a way that no amount of care in the interviewing corrects." }
    ],
    questions: [
      { q: "Who argues that memory errors follow predictable patterns?", answer: 0, explanation: "A: the unreliability is patterned rather than random." },
      { q: "Who values what is said after the formal questions end?", answer: 1, explanation: "B: the four minutes after I stopped asking." },
      { q: "Who works with memories of very early childhood?", answer: 2, explanation: "C: events at four or five years old." },
      { q: "Who emphasises who is missing from any collection?", answer: 3, explanation: "D: every one of those is a selection." },
      { q: "Who compares testimony with the reading of documents?", answer: 0, explanation: "A: exactly how one reads a document." },
      { q: "Who mentions an ethical requirement that weakens their method?", answer: 1, explanation: "B: telling people the recorder is on reduces the effect." },
      { q: "Who separates fragments from the narrative connecting them?", answer: 2, explanation: "C: records the fragments separately from the account." },
      { q: "Who says careful interviewing cannot correct a structural gap?", answer: 3, explanation: "D: no amount of care in the interviewing corrects." },
      { q: "Who says people are accurate about actions and not timing?", answer: 0, explanation: "A: accurate about what they did and inaccurate about when." },
      { q: "Who treats an account as evidence about a family rather than an event?", answer: 2, explanation: "C: evidence about the family's telling." }
    ]
  },
  {
    id: "cae-rmatch11-03",
    title: "Four Product Managers on Refusing Requests",
    sections: [
      { label: "A", text: "Sam: The refusal that matters is not to a customer; it is to the internal request that arrives with authority attached. About a third of what my team is asked to build originates in a conversation somebody senior had at a conference, and the request arrives as a decision. What I have learned to do is to accept it as a hypothesis and to ask what we would expect to observe if it were correct, which converts an instruction into a question and has never once been refused, because refusing it would require saying that the evidence does not matter." },
      { label: "B", text: "Priya: My difficulty is the request that is entirely reasonable and would be used by four customers. Every such feature is defensible individually and the aggregate is a product that does eleven things adequately and nothing well. I therefore maintain a written statement of what the product is not for, which is circulated, is argued about annually and is the single most useful document I have, because a refusal that cites a principle agreed in advance is heard differently from a refusal that appears to be a judgement about the person asking." },
      { label: "C", text: "Diego: What I refuse most often is a solution rather than a request. A customer asks for a particular button and what they need is not to have to do the task at all, and building the button removes any prospect of discovering that, because the complaint stops. I now respond to every feature request with a question about the last occasion on which the person needed it, which takes about four minutes and which about a third of the time produces a completely different problem." },
      { label: "D", text: "Yuki: I have stopped saying no and started saying not before. Every refusal I issued as a refusal produced an appeal, an escalation and, about half the time, an instruction; the same answer expressed as a position in a published order of work produces an argument about the order, which is a much more productive argument and which the requester can win by making a case rather than by finding somebody senior. The list is public, it is updated fortnightly, and nothing is on it that nobody has asked for." }
    ],
    questions: [
      { q: "Who is chiefly concerned with requests from senior colleagues?", answer: 0, explanation: "A: the internal request that arrives with authority." },
      { q: "Who maintains a written statement of what is out of scope?", answer: 1, explanation: "B: a written statement of what the product is not for." },
      { q: "Who questions whether the request addresses the real problem?", answer: 2, explanation: "C: refuses a solution rather than a request." },
      { q: "Who replaced refusal with prioritisation?", answer: 3, explanation: "D: stopped saying no and started saying not before." },
      { q: "Who converts an instruction into a testable proposition?", answer: 0, explanation: "A: accepts it as a hypothesis." },
      { q: "Who says individually reasonable features accumulate badly?", answer: 1, explanation: "B: a product that does eleven things adequately." },
      { q: "Who asks about the last time the feature was needed?", answer: 2, explanation: "C: asks about the last occasion the person needed it." },
      { q: "Who says the new approach produces a better argument?", answer: 3, explanation: "D: an argument about the order is more productive." },
      { q: "Who notes that building a feature ends the useful complaint?", answer: 2, explanation: "C: the complaint stops." },
      { q: "Who says a principle agreed in advance changes how refusal is heard?", answer: 1, explanation: "B: a refusal citing an agreed principle is heard differently." }
    ]
  },
  {
    id: "cae-rmatch11-04",
    title: "Four Vets on Conversations With Owners",
    sections: [
      { label: "A", text: "Ndidi: The conversation I prepare for most carefully is about cost, and the profession is poor at it. An owner who cannot afford an investigation is frequently offered a choice between the recommended course and nothing, when what exists is a sequence of intermediate options with different information yields. I now present three costed courses in every case where cost is likely to matter, which takes about four extra minutes, and the number of animals that leave untreated has fallen noticeably since I started doing it." },
      { label: "B", text: "Gareth: What I have changed is how I describe prognosis. I used to give a probability of recovery and I now describe what the next four weeks will involve for the owner, in specific terms: how often, at what times, what it will look like when it is going badly. A decision to treat is a decision about a household's next month, and an owner who agrees to a course without that description agrees to something they have not been told about and frequently cannot sustain." },
      { label: "C", text: "Mira: My particular interest is the consultation in which the animal is not the problem. A proportion of my appointments concern an owner who is isolated, or unwell, or in circumstances that have made an animal's ordinary needs impossible, and the presenting complaint is a symptom of that. I have four contacts in local services that I can offer, which is not veterinary practice and is what the situation requires, and no part of my training prepared me to recognise it or to say anything." },
      { label: "D", text: "Piotr: The hardest conversation is about ending, and the thing I would say to colleagues is to give the owner a criterion rather than a recommendation. Owners ask when they will know, and the honest answer is that they will not, and what helps is choosing together, in advance, three things the animal currently enjoys and agreeing that the loss of two of them is the point. It converts a judgement made in distress into a decision made calmly some weeks earlier, and every owner I have done it with has thanked me afterwards." }
    ],
    questions: [
      { q: "Who offers a range of costed options?", answer: 0, explanation: "A: presents three costed courses." },
      { q: "Who describes the practical demands on the household?", answer: 1, explanation: "B: what the next four weeks will involve for the owner." },
      { q: "Who addresses situations where the owner needs help?", answer: 2, explanation: "C: the consultation in which the animal is not the problem." },
      { q: "Who agrees criteria in advance for a difficult decision?", answer: 3, explanation: "D: choosing together three things the animal enjoys." },
      { q: "Who says their training did not prepare them?", answer: 2, explanation: "C: no part of my training prepared me." },
      { q: "Who reports a fall in animals leaving untreated?", answer: 0, explanation: "A: the number has fallen noticeably." },
      { q: "Who says an owner may agree to something unsustainable?", answer: 1, explanation: "B: frequently cannot sustain it." },
      { q: "Who converts a distressing judgement into an earlier calm decision?", answer: 3, explanation: "D: a decision made calmly some weeks earlier." },
      { q: "Who criticises the profession's handling of a subject?", answer: 0, explanation: "A: the profession is poor at it." },
      { q: "Who keeps contacts for services outside their own field?", answer: 2, explanation: "C: four contacts in local services." }
    ]
  },
  {
    id: "cae-rmatch11-05",
    title: "Four Composers on Writing to Order",
    sections: [
      { label: "A", text: "Elin: The constraint I find productive is the ensemble. A commission for a specific group of eleven players, four of whom I know personally, produces decisions that an abstract commission does not: I write for the particular sound of a particular section and for a player whose way of shaping a phrase I can hear while writing. Composers who describe commissions as compromising are generally describing commissions for nobody in particular, which is the version that actually restricts, because it forces every choice to be defensible in the abstract." },
      { label: "B", text: "Tobias: My difficulty is the occasion. A piece commissioned for an anniversary is expected to be about something, and the expectation arrives with a brief describing a theme in language that has been agreed by a committee. What I do now, and what I would not have had the confidence to do at thirty, is to write the piece I would have written and to provide a title and a paragraph that connect it honestly to the occasion, which takes about ninety minutes and satisfies everybody, including me." },
      { label: "C", text: "Saoirse: The practical constraint nobody discusses is rehearsal time. A commission that will receive four hours of rehearsal cannot contain anything that requires eight, and a composer who ignores this produces a first performance that is a sight-reading and a piece that is never played again. I write with a specific number of rehearsal hours in mind, ask for it in writing, and have twice declined commissions where the answer indicated that the piece would not be prepared." },
      { label: "D", text: "Amir: What I have learned to negotiate is not the fee but the second performance. A commission produces one occasion, and a piece performed once is a piece that does not exist in any practical sense. I now ask for a commitment to a second performance within two years, which about a third of commissioners will give, and I have found that a piece with two scheduled performances is programmed by other people at roughly four times the rate of one with a single premiere." }
    ],
    questions: [
      { q: "Who values writing for specific known players?", answer: 0, explanation: "A: writes for particular players she knows." },
      { q: "Who reconciles an occasion's brief with their own intentions?", answer: 1, explanation: "B: writes the piece he would have written and connects it honestly." },
      { q: "Who considers rehearsal time a decisive constraint?", answer: 2, explanation: "C: writes with a specific number of rehearsal hours in mind." },
      { q: "Who negotiates for a further performance?", answer: 3, explanation: "D: asks for a commitment to a second performance." },
      { q: "Who has refused work on the basis of preparation offered?", answer: 2, explanation: "C: twice declined commissions." },
      { q: "Who says abstract commissions are the truly restrictive ones?", answer: 0, explanation: "A: commissions for nobody in particular restrict most." },
      { q: "Who reports a measurable effect on subsequent programming?", answer: 3, explanation: "D: programmed at roughly four times the rate." },
      { q: "Who describes gaining confidence with age?", answer: 1, explanation: "B: would not have had the confidence at thirty." },
      { q: "Who mentions a document produced to accompany the work?", answer: 1, explanation: "B: provides a title and a paragraph." },
      { q: "Who warns that a premiere may amount to sight-reading?", answer: 2, explanation: "C: a first performance that is a sight-reading." }
    ]
  },
  {
    id: "cae-rmatch11-06",
    title: "Four Analysts on Predicting Demand",
    sections: [
      { label: "A", text: "Hendrik: The forecast that matters is not the central estimate; it is the range, and the organisations I work with consistently ask for the first and act as though the second did not exist. What I now supply is a set of four scenarios with explicit triggers: if this observation occurs by March, we are in scenario two and the following decisions become available. It converts a forecast into a monitoring plan, and the value is not that the prediction is better but that being wrong is detected in about eight weeks rather than at the year end." },
      { label: "B", text: "Aiko: My work is dominated by a problem that sounds technical and is organisational. The demand data we hold are records of demand that was met, and every constraint in the system appears in them as an absence of demand. A shop that sold out at eleven in the morning records the sales it made, and the forecast built from that record perpetuates the constraint indefinitely, which is why the same four locations have been under-supplied for a decade and why nobody in the data can see it." },
      { label: "C", text: "Rui: What I have stopped doing is extending a trend. Almost every serious forecasting error I have made or reviewed involved projecting a growth rate forward without identifying the mechanism producing it, and mechanisms saturate. A rate that has held for four years is evidence about the past and about the mechanism, and the useful question is what would have to remain true for it to continue, which almost always reveals a quantity that is finite and that nobody has counted." },
      { label: "D", text: "Nadia: The uncomfortable observation from eleven years of this work is that the accuracy of a forecast matters less than who produced it. A forecast prepared by the team who will be judged against it is optimistic by a margin that is stable enough to be corrected for arithmetically, and everybody knows it and nobody says it. Where I have been able to separate the forecast from the target, which is about a third of the time, the forecasts have improved immediately and the arguments have become considerably worse." }
    ],
    questions: [
      { q: "Who supplies scenarios with observable triggers?", answer: 0, explanation: "A: four scenarios with explicit triggers." },
      { q: "Who identifies constraints hidden inside the data?", answer: 1, explanation: "B: constraints appear as an absence of demand." },
      { q: "Who warns against extrapolating a trend?", answer: 2, explanation: "C: has stopped extending a trend." },
      { q: "Who says who produces a forecast matters more than accuracy?", answer: 3, explanation: "D: accuracy matters less than who produced it." },
      { q: "Who values early detection of error over precision?", answer: 0, explanation: "A: being wrong is detected in about eight weeks." },
      { q: "Who describes a long-standing supply problem invisible in the data?", answer: 1, explanation: "B: four locations under-supplied for a decade." },
      { q: "Who asks what must remain true for a rate to continue?", answer: 2, explanation: "C: what would have to remain true." },
      { q: "Who reports that separating two functions worsened relationships?", answer: 3, explanation: "D: the arguments have become considerably worse." },
      { q: "Who says an organisation ignores the range it asked for?", answer: 0, explanation: "A: acts as though the range did not exist." },
      { q: "Who says a known bias goes unmentioned?", answer: 3, explanation: "D: everybody knows it and nobody says it." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
