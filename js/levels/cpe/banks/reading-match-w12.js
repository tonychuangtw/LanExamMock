/* CPE Prep bank: Reading multiple matching (C2) — wave 12 */
(function () {
var BANK = [
  {
    id: "cpe-rmatch12-01",
    title: "Five Fundraisers on Asking",
    sections: [
      { label: "A", text: "The single largest error in this work is asking too early, and it is made by people who are anxious rather than by people who are greedy. A request made before somebody understands what the organisation does converts a potential long relationship into a small transaction and a decision not to be approached again. What I do instead is spend the first two meetings finding out what the person cares about, which sometimes turns out not to be us, in which case I say so and introduce them to somebody else. Three of those introductions have come back to me as substantial gifts years later." },
      { label: "B", text: "I raise money from very small donations and the discipline is entirely different from the one everybody writes about. My concern is not the size of a gift but whether it happens again, and the variable that determines that is not the appeal, the cause or the amount; it is what arrives afterwards. A donor who receives a specific description of what their money did gives again at a rate that is several times higher than one who receives a thank you and a newsletter, and the second costs almost exactly the same to produce as the first." },
      { label: "C", text: "The part of this work that troubles me is that the story that raises the most money is not the story that describes the problem accurately. An individual case with a face and a name outperforms a statistic by an enormous margin, and everybody in the sector knows it, and the effect is that we present a structural problem as a series of exceptional misfortunes because that is what people respond to. I have stopped believing that this is harmless. The public understanding of what we do is downstream of how we ask, and we have been asking in a way that misdescribes the work." },
      { label: "D", text: "My difficulty is with restricted funding, which sounds technical and determines everything. A donor who wishes to fund a specific project rather than the organisation is expressing a perfectly reasonable preference and is, in effect, requiring that the least visible costs be paid by somebody else. Every organisation I know maintains an unrestricted reserve for exactly this purpose and describes it in language designed not to attract attention. The honest sentence, which nobody can say, is that the salaries and the rent are what makes the project possible and that somebody has to pay for them." },
      { label: "E", text: "I came into this from sales and the transferable part is smaller than my colleagues assume. What transfers is discipline: recording what was said, following up when promised, knowing the pipeline. What does not transfer is the closing, because a gift is not a purchase and a donor who feels pressed will complete the transaction and never return. The skill here is patience of a kind that a sales environment actively trains out of people, and I spent my first year unlearning techniques that worked immediately and cost me the second gift every time." },
    ],
    questions: [
      { q: "Which fundraiser sometimes directs a prospective donor elsewhere?", answer: 0, explanation: "A introduces people to another organisation when their interest lies elsewhere." },
      { q: "Which fundraiser focuses on what follows a donation?", answer: 1, explanation: "B says the variable determining repeat giving is what arrives afterwards." },
      { q: "Which fundraiser believes the sector's methods distort public understanding?", answer: 2, explanation: "C says the public understanding is downstream of how we ask." },
      { q: "Which fundraiser describes a cost that donors prefer not to fund?", answer: 3, explanation: "D says restricted funding requires the least visible costs to be paid by somebody else." },
      { q: "Which fundraiser had to discard techniques from a previous career?", answer: 4, explanation: "E spent a year unlearning sales techniques that cost the second gift." },
      { q: "Which fundraiser attributes a common mistake to anxiety?", answer: 0, explanation: "A says asking too early is made by people who are anxious rather than greedy." },
      { q: "Which fundraiser says two approaches cost the same to produce?", answer: 1, explanation: "B says the specific description costs almost exactly the same as a thank you and a newsletter." },
      { q: "Which fundraiser has changed their view about a widespread practice?", answer: 2, explanation: "C has stopped believing that the individual-case approach is harmless." },
      { q: "Which fundraiser refers to language chosen to avoid scrutiny?", answer: 3, explanation: "D says reserves are described in language designed not to attract attention." },
      { q: "Which fundraiser distinguishes a gift from a purchase?", answer: 4, explanation: "E says a gift is not a purchase and a pressed donor never returns." },
    ]
  },
  {
    id: "cpe-rmatch12-02",
    title: "Four Pilots on What the Aircraft Does",
    sections: [
      { label: "A", text: "The automation is better than I am at almost everything it does, and the difficulty is precisely that. A system that handles the ordinary flight perfectly for four hundred hours produces a pilot who has not hand-flown an approach in months and who is then required to do so, without warning, in the conditions that caused the system to disconnect. The industry's answer has been more training in the simulator, which is correct and is not sufficient, because a skill practised twice a year in a machine you cannot fall out of is not the same skill as one used regularly." },
      { label: "B", text: "What I would emphasise is that the errors have changed rather than reduced. We do not now mishandle an aircraft; we mishandle a system, by selecting a mode that does something other than what we expected, and the aircraft then does exactly what it was told with complete competence. The phrase used for this is mode confusion and it accounts for a category of incident that did not exist in the previous generation of machines. The total number of accidents has fallen enormously. The remaining ones look nothing like the old ones." },
      { label: "C", text: "My concern is the design of the interface rather than the automation itself, and I say this having flown three types. On one of them, information that determines whether a decision is safe is available on a page you have to select, which nobody selects at the moment when it matters, because at that moment they are doing four other things. The engineering is superb and the arrangement of the information assumes an attentive reader in an office. Everything I have seen go wrong in my own flying began with information that was present, accessible and not in front of me." },
      { label: "D", text: "The part nobody outside understands is the monitoring. Two of us sit for eleven hours in a state that is neither working nor resting, watching a system that will not require anything of us for hours and may require everything of us within four seconds. Human beings are extremely poor at this, it is well documented, and the profession's response is procedural: a call-out at each transition, a discipline about verbalising what you see, deliberate cross-checks at fixed points. Those procedures exist because the underlying capacity cannot be improved, and I would rather passengers understood that than believed we are simply alert." },
    ],
    questions: [
      { q: "Which pilot says infrequent practice produces a different skill?", answer: 0, explanation: "A says a skill practised twice a year in a simulator is not the same skill." },
      { q: "Which pilot says the nature of errors has changed?", answer: 1, explanation: "B says we now mishandle a system rather than an aircraft." },
      { q: "Which pilot criticises how information is presented?", answer: 2, explanation: "C says the arrangement of information assumes an attentive reader in an office." },
      { q: "Which pilot describes a state that is neither work nor rest?", answer: 3, explanation: "D describes eleven hours in a state that is neither working nor resting." },
      { q: "Which pilot says an existing remedy is correct but inadequate?", answer: 0, explanation: "A says simulator training is correct and is not sufficient." },
      { q: "Which pilot notes that overall safety has improved substantially?", answer: 1, explanation: "B says the total number of accidents has fallen enormously." },
      { q: "Which pilot wants passengers to understand a limitation?", answer: 3, explanation: "D would rather passengers understood that the capacity cannot be improved." },
      { q: "Which pilot draws on experience of several aircraft types?", answer: 2, explanation: "C says this having flown three types." },
      { q: "Which pilot describes a machine performing correctly on a wrong instruction?", answer: 1, explanation: "B says the aircraft does exactly what it was told with complete competence." },
      { q: "Which pilot says the necessary information was available but unseen?", answer: 2, explanation: "C says everything that went wrong began with information present and not in front of them." },
    ]
  },
  {
    id: "cpe-rmatch12-03",
    title: "Five Actors on the Audition",
    sections: [
      { label: "A", text: "What took me a decade to accept is that the decision is frequently made before I speak and is almost never about the quality of what I do. They need somebody who looks plausible beside an actor already cast, or who is four inches shorter, or who is available in April. None of that is a judgement I can improve by preparing harder, and the discipline is to prepare completely and then to let the outcome go, because a career spent extracting a verdict about your worth from a series of decisions about scheduling will end badly and quickly." },
      { label: "B", text: "The self-taped audition has changed the work more than any development in my lifetime and I resist the sector's enthusiasm about it. It removes travel, which is a real benefit to anybody with a child or no money. It also transfers the cost of production to the actor, requires equipment and a room and somebody to read the other lines, and removes the one thing that used to make an audition tolerable, which is that you were in a room with people who responded. I now perform to a phone on a shelf and post it, and receive nothing at all unless I am cast." },
      { label: "C", text: "I stopped trying to give them what I imagined they wanted, and my working life improved immediately and my success rate did not change at all, which is worth saying. What changed was that the auditions became interesting to me. A decision to do the thing I actually think is in the scene means that when I am cast, I am cast for something I can sustain for eleven weeks, and when I am not, I have spent twenty minutes doing work I found worth doing rather than twenty minutes performing an imitation of a person I guessed at." },
      { label: "D", text: "The part nobody discusses is the money, and it determines who is still doing this at forty. An audition costs a day, a fare and frequently a shift given up, and the profession is structured as though everybody has a reserve to draw on. I do not, and I have declined auditions for good parts because the week could not absorb the loss. Every conversation about who gets cast concerns taste, and a substantial part of it is simply about who could afford to be in the room, which is not a matter of taste at all." },
      { label: "E", text: "I sit on the other side of it now as well, and what I want to say to actors is that the room is frequently anxious and almost never hostile. We have seen forty people, we want the next one to be the answer, and the discomfort you read as judgement is generally exhaustion or a director who is worried about a script. Almost nothing is being withheld from you, and the mysteriousness that actors attribute to casting is mostly a set of practical constraints that nobody thought to explain, plus a genuine and unglamorous inability to say why one person is right." },
    ],
    questions: [
      { q: "Which actor says decisions often turn on practical requirements?", answer: 0, explanation: "A cites plausibility beside another actor, height and availability." },
      { q: "Which actor objects to costs being shifted onto performers?", answer: 1, explanation: "B says self-taping transfers the cost of production to the actor." },
      { q: "Which actor reports a change that improved their experience but not their results?", answer: 2, explanation: "C says working life improved immediately and the success rate did not change." },
      { q: "Which actor says financial capacity determines who continues?", answer: 3, explanation: "D says the money determines who is still doing this at forty." },
      { q: "Which actor has experience of casting as well as auditioning?", answer: 4, explanation: "E sits on the other side of it now as well." },
      { q: "Which actor warns against reading the outcome as a verdict on themselves?", answer: 0, explanation: "A warns against extracting a verdict about your worth from scheduling decisions." },
      { q: "Which actor acknowledges a genuine benefit of a practice they dislike?", answer: 1, explanation: "B says removing travel is a real benefit to anybody with a child or no money." },
      { q: "Which actor says a casting room's discomfort is usually misread?", answer: 4, explanation: "E says the discomfort read as judgement is generally exhaustion or worry." },
      { q: "Which actor has turned down opportunities for financial reasons?", answer: 3, explanation: "D has declined auditions for good parts because the week could not absorb the loss." },
      { q: "Which actor values the work itself regardless of the result?", answer: 2, explanation: "C spends twenty minutes doing work they found worth doing." },
    ]
  },
  {
    id: "cpe-rmatch12-04",
    title: "Five Guides on the Same Two Hours",
    sections: [
      { label: "A", text: "I have delivered essentially the same walk more than two thousand times and the material is not the difficulty. What determines whether it works is whether I can read the group in the first four minutes: who is cold, who has been brought along by somebody else, whether there is a person who will ask questions and a person who will resent them. The route does not change and the emphasis does, continuously, and a version delivered identically to two different groups will succeed with one and fail with the other for reasons that have nothing to do with the content." },
      { label: "B", text: "I stopped telling the best story on my route, which cost me the laugh I used to rely on at the halfway point. I could not verify it. I had inherited it from a previous guide, repeated it for six years, and when I finally looked for a source there was nothing before a guidebook of the nineteen-seventies which cites nothing either. Nobody would ever have known. But the whole basis on which people are listening to me is that I have checked, and a guide who tells one thing he knows to be unsupported has no way of drawing a line afterwards." },
      { label: "C", text: "What I have changed most is how much I say, and the direction is downwards every year. I began with a continuous commentary because silence felt like failure, and I now stop for thirty seconds in three places and let people look at the thing. The feedback improved measurably when I did this, and the reason is obvious in retrospect: they came to see a place and I had been standing between them and it, providing a soundtrack that prevented anybody from having their own reaction to what was in front of them." },
      { label: "D", text: "My route passes a site where something extremely unpleasant happened, and how to handle that has been the professional question of my career. The tour is a commercial product, people are on holiday, and the easy options are to omit it, which is a lie by silence, or to deliver it in the register of everything else, which is worse. What I do is change my voice, say plainly what occurred and why we are standing here, and then move on without inviting questions. Roughly one person in every group speaks to me about it afterwards, always privately." },
      { label: "E", text: "I want to defend the standard route against my colleagues who consider it beneath them. Everybody in this trade eventually wants to do the specialist tour for the twelve people who already know a great deal, and there is a snobbery about the general walk that I think is exactly backwards. The people on the ordinary tour have two hours and no prior knowledge, and what they take away is the whole of what they will ever know about this place. That is a considerably greater responsibility than entertaining a dozen enthusiasts, and it is much harder to do well." },
    ],
    questions: [
      { q: "Which guide adjusts delivery according to the group in front of them?", answer: 0, explanation: "A reads the group in the first four minutes and changes the emphasis continuously." },
      { q: "Which guide dropped material they could not substantiate?", answer: 1, explanation: "B stopped telling a story that could not be verified beyond a nineteen-seventies guidebook." },
      { q: "Which guide has reduced the amount they talk?", answer: 2, explanation: "C says the direction is downwards every year and now stops for thirty seconds in three places." },
      { q: "Which guide describes handling a distressing subject on the route?", answer: 3, explanation: "D changes voice, says plainly what occurred, and moves on without inviting questions." },
      { q: "Which guide defends the value of the general tour?", answer: 4, explanation: "E defends the standard route against colleagues who consider it beneath them." },
      { q: "Which guide says silence used to feel like failure?", answer: 2, explanation: "C began with continuous commentary because silence felt like failure." },
      { q: "Which guide argues that a single lapse would undermine everything else?", answer: 1, explanation: "B says a guide who tells one unsupported thing has no way of drawing a line afterwards." },
      { q: "Which guide reports private responses from individual visitors?", answer: 3, explanation: "D says roughly one person in every group speaks to them afterwards, always privately." },
      { q: "Which guide says an identical delivery produces different results?", answer: 0, explanation: "A says the same version will succeed with one group and fail with another." },
      { q: "Which guide considers a widely held professional attitude mistaken?", answer: 4, explanation: "E thinks the snobbery about the general walk is exactly backwards." },
    ]
  },
  {
    id: "cpe-rmatch12-05",
    title: "Four Scientists on Working at Sea",
    sections: [
      { label: "A", text: "Ship time is the constraint that shapes every project I have ever run, and it is not obvious to anybody who has not applied for it. A vessel costs a very large sum per day, the allocation is made a year or more in advance, and the weather does not consult the allocation. I have lost half a cruise to a storm and returned with a dataset that answered a smaller question than the one I had funding for, and the report I wrote had to describe that without appearing to have failed, which is a genre of scientific writing that nobody is taught and everybody in this field can produce." },
      { label: "B", text: "The equipment is the part that determines whether anything is achieved, and the equipment is deployed into an environment that is actively hostile to it. Everything corrodes, connectors fail under pressure, and an instrument that worked perfectly in a laboratory two weeks earlier will not respond at four hundred metres for reasons that cannot be diagnosed from a deck. What I have learnt is redundancy: two of everything, and a rule that no instrument goes over the side unless somebody on board can repair it, which halves what we can take and doubles what we recover." },
      { label: "C", text: "What people find hard to believe is the social dimension. Thirty people in a small steel space for five weeks, working shifts around the clock, including four who have never been to sea and two who are on their fourteenth cruise and know everything, and a chief scientist who is also a colleague they will meet at conferences for the next thirty years. I now spend more preparation time on who is going than on what we will measure, and every experienced person I know says the same thing and none of it appears in any proposal." },
      { label: "D", text: "The thing I would tell a student is that the data will not look like the data in the papers. A published record is clean, gridded and continuous; what you actually obtain is a set of measurements interrupted by a broken cable, a change of ship's course requested by the master for reasons of safety, and a six-hour gap that somebody will ask about in review. The processing that converts one into the other is the least documented part of the discipline and is learnt entirely by apprenticeship, which is a serious weakness that everybody acknowledges and nobody has funded a solution to." },
    ],
    questions: [
      { q: "Which scientist describes writing up a reduced result?", answer: 0, explanation: "A wrote a report describing a smaller answer without appearing to have failed." },
      { q: "Which scientist imposes a rule about repairability?", answer: 1, explanation: "B allows no instrument over the side unless somebody aboard can repair it." },
      { q: "Which scientist prioritises the composition of the team?", answer: 2, explanation: "C spends more preparation time on who is going than on what will be measured." },
      { q: "Which scientist warns that raw data differ from published data?", answer: 3, explanation: "D says the data will not look like the data in the papers." },
      { q: "Which scientist mentions a scheduling decision made long in advance?", answer: 0, explanation: "A says the allocation is made a year or more in advance." },
      { q: "Which scientist describes a trade-off between capacity and reliability?", answer: 1, explanation: "B says redundancy halves what can be taken and doubles what is recovered." },
      { q: "Which scientist notes that colleagues will meet again for decades?", answer: 2, explanation: "C mentions a chief scientist who will meet colleagues at conferences for thirty years." },
      { q: "Which scientist identifies an undocumented stage of the work?", answer: 3, explanation: "D says the processing is the least documented part of the discipline." },
      { q: "Which scientist says an important consideration never appears in proposals?", answer: 2, explanation: "C says none of it appears in any proposal." },
      { q: "Which scientist describes a genre of writing that is never formally taught?", answer: 0, explanation: "A describes a genre nobody is taught and everybody in the field can produce." },
    ]
  },
  {
    id: "cpe-rmatch12-06",
    title: "Four Probation Officers on What Actually Helps",
    sections: [
      { label: "A", text: "The single strongest predictor in my experience is housing, and everything else in my job is downstream of it. A person released to an address has an appointment they can keep, a place to store documents, and a reason to structure a week; a person released to nothing spends every hour on accommodation and has no capacity left for any programme I can offer. I write this in every report I submit and I have written it for nineteen years, and the response is invariably a course, because a course can be commissioned and a flat cannot." },
      { label: "B", text: "What works is a relationship and the system is arranged to prevent one. My caseload has risen by half in a decade, the appointments are shorter, and a person who has been assigned four officers in two years is not going to tell the fifth anything that matters. The programmes we deliver have evidence behind them and the evidence was gathered in conditions that no longer exist, with caseloads a fraction of mine, delivered by somebody the person had known for a year. We are running a tested intervention with its active ingredient removed." },
      { label: "C", text: "I want to say something about the enforcement side, which the profession is uncomfortable discussing. I have recalled people to prison and I would do it again; the alternative in those cases was somebody being hurt. What I object to is recall for missed appointments by people whose lives are chaotic in precisely the way that produces missed appointments, which converts a support system into a tripwire. The distinction between somebody who is dangerous and somebody who is disorganised is the most important judgement I make and the one the paperwork is least designed to record." },
      { label: "D", text: "The part that surprised me is how much of the work is with families rather than with the person on the order. A mother who is exhausted, a partner deciding whether to allow somebody back, a sibling who is the only stable contact and is not consulted by anybody: these are the people who determine what actually happens, and none of them appears in my case file or in any measure of my performance. I spend perhaps a third of my time on conversations I cannot record, and I regard that third as the most useful work I do." },
    ],
    questions: [
      { q: "Which officer identifies accommodation as the decisive factor?", answer: 0, explanation: "A says housing is the strongest predictor and everything else is downstream." },
      { q: "Which officer says an evidence-based programme has lost its key element?", answer: 1, explanation: "B says the tested intervention is being run with its active ingredient removed." },
      { q: "Which officer defends the use of enforcement in some cases?", answer: 2, explanation: "C has recalled people to prison and would do it again." },
      { q: "Which officer describes unrecorded work with people around the offender?", answer: 3, explanation: "D spends a third of their time on conversations that cannot be recorded." },
      { q: "Which officer says a solution is not adopted because it cannot be commissioned?", answer: 0, explanation: "A says the response is invariably a course because a flat cannot be commissioned." },
      { q: "Which officer cites the effect of staff turnover on trust?", answer: 1, explanation: "B says a person assigned four officers in two years will not tell the fifth anything." },
      { q: "Which officer distinguishes danger from disorganisation?", answer: 2, explanation: "C calls that distinction the most important judgement they make." },
      { q: "Which officer says the people who matter most are absent from official records?", answer: 3, explanation: "D says none of them appears in the case file or performance measures." },
      { q: "Which officer says the paperwork fails to capture their key judgement?", answer: 2, explanation: "C says the paperwork is least designed to record that distinction." },
      { q: "Which officer reports having made the same recommendation for many years?", answer: 0, explanation: "A has written it in every report for nineteen years." },
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
