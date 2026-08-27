/* CPE Prep bank: Reading multiple matching (C2) — wave 13 */
(function () {
var BANK = [
  {
    id: "cpe-rmatch13-01",
    title: "Five Coaches on Recognising Talent",
    sections: [
      { label: "A", text: "What I look for at twelve is not performance and I have to explain this to parents constantly. A child who is winning at twelve is frequently a child who developed early, and the physical advantage that produces those results disappears within three years, by which time they have been selected, praised and coached while somebody more capable was told they were not good enough. I look at how a child moves when they are doing something they have not practised, because that is the only thing I can see at that age which will still be there at nineteen." },
      { label: "B", text: "The quality I have come to value above everything is what a player does in the fortnight after a bad performance. I can teach technique and I cannot teach a person to return to a session having thought about what went wrong rather than having decided not to think about it. This is not the same as being tough, which is what everybody says: some of the most durable athletes I have worked with are visibly upset for two days. The question is whether they come back with a question or with a grievance." },
      { label: "C", text: "I want to be honest about how much of this is luck of birth date. The selection systems in my sport group children by year, the ones born in the first months are up to eleven months older, and at that age the difference is enormous. So we select them, give them the better coaching, and by the time the age gap ceases to matter they have had four years of advantage that the others did not. The effect is documented, everybody in coaching knows it, and the structures have not changed because changing them would require somebody to redesign an entire competition calendar." },
      { label: "D", text: "The talent everybody wants to discuss is physical and the one that decides careers is attention. What separates the players who reach the top from an enormous number of similarly gifted ones is the capacity to work on a small thing for a long period without visible improvement, which is not a personality trait and can be developed. I do it by making the units very short and the feedback immediate, so that a fourteen-year-old experiences progress that is real and measurable, and the tolerance for the longer unrewarded stretches is built from that." },
      { label: "E", text: "I have stopped identifying talent and started identifying access, which sounds political and is a practical observation about my own results. The children I coach who succeed are overwhelmingly those whose parents can drive them to training four times a week, and the ones I lose are lost to fixtures on the other side of a city with no transport. Whatever ability is distributed at birth, what arrives at my sessions has already been filtered through that, and a coach who believes they are seeing a cross-section of the population is seeing a cross-section of the people who could get here." },
    ],
    questions: [
      { q: "Which coach watches how a child performs an unfamiliar task?", answer: 0, explanation: "A looks at how a child moves when doing something they have not practised." },
      { q: "Which coach is most interested in the response to failure?", answer: 1, explanation: "B values what a player does in the fortnight after a bad performance." },
      { q: "Which coach describes a documented effect of selection by year?", answer: 2, explanation: "C describes the advantage of children born in the first months of a year group." },
      { q: "Which coach regards sustained attention as developable?", answer: 3, explanation: "D says the capacity is not a personality trait and can be developed." },
      { q: "Which coach says the population they see has already been filtered?", answer: 4, explanation: "E says what arrives at sessions has been filtered through access." },
      { q: "Which coach distinguishes their criterion from being tough?", answer: 1, explanation: "B says this is not the same as being tough." },
      { q: "Which coach says early success is often a physical accident?", answer: 0, explanation: "A says a child winning at twelve is frequently one who developed early." },
      { q: "Which coach explains how they build tolerance for slow progress?", answer: 3, explanation: "D makes units short and feedback immediate to build tolerance for unrewarded stretches." },
      { q: "Which coach attributes an unchanged system to administrative difficulty?", answer: 2, explanation: "C says changing it would require redesigning an entire competition calendar." },
      { q: "Which coach identifies transport as a decisive obstacle?", answer: 4, explanation: "E loses children to fixtures across a city with no transport." },
    ]
  },
  {
    id: "cpe-rmatch13-02",
    title: "Four Librarians on What People Actually Ask",
    sections: [
      { label: "A", text: "The question somebody asks is almost never the question they need answered, and the whole of the professional skill is in getting from one to the other without making them feel interrogated. Somebody asks where the law books are and needs to know whether they can be evicted; somebody asks for a printer and needs an application form they cannot open on a phone. The technique is a series of open questions that would sound intrusive if the purpose were not obvious, and the moment you get it right is visible: the shoulders drop and the actual question arrives." },
      { label: "B", text: "What has changed in twenty years is not the volume of questions but their difficulty. The easy ones have gone: nobody asks me for a date, a spelling or a capital city, because those are answered in four seconds by a device. What arrives at my desk is what could not be resolved that way, which means every question I now handle is one where the person has already tried and failed, and they arrive frustrated. The job got harder and the statistics record fewer enquiries, which is how the service came to be described as declining." },
      { label: "C", text: "A substantial part of my work has nothing to do with information and I have stopped pretending otherwise in my returns. I complete forms with people who cannot complete them, I explain letters from public bodies, and I sit with somebody who has nowhere else warm to be until they are ready to leave. None of this is librarianship as it was taught to me and all of it is what the building is for. The profession's difficulty is that the things I have described are not counted anywhere, and a service assessed on issues and enquiries will be closed on the strength of the wrong numbers." },
      { label: "D", text: "My work is with researchers and the questions are the opposite problem. They arrive knowing exactly what they want and are frequently wrong about whether it exists, and the useful contribution is to say so early rather than to help them look. A great deal of my job consists of telling somebody that the archive they are describing was destroyed, that the run of that journal stops in a particular year, or that the material is held in a form they cannot use in the time they have. Nobody thanks you for that at the moment. They thank you two years later." },
    ],
    questions: [
      { q: "Which librarian describes uncovering an unstated need?", answer: 0, explanation: "A says the question asked is almost never the question that needs answering." },
      { q: "Which librarian says the remaining enquiries are the difficult ones?", answer: 1, explanation: "B says the easy questions have gone and what arrives has already defeated the person." },
      { q: "Which librarian describes work outside the professional definition?", answer: 2, explanation: "C completes forms, explains letters and sits with people who have nowhere warm to be." },
      { q: "Which librarian's main contribution is telling people something is unavailable?", answer: 3, explanation: "D tells researchers the archive was destroyed or the run stops in a particular year." },
      { q: "Which librarian says a service is judged on figures that miss its work?", answer: 2, explanation: "C says a service assessed on issues and enquiries will be closed on the wrong numbers." },
      { q: "Which librarian says a change in statistics misrepresents the service?", answer: 1, explanation: "B says the statistics record fewer enquiries, which is how the service came to be called declining." },
      { q: "Which librarian describes a visible moment of relief in a user?", answer: 0, explanation: "A says the shoulders drop and the actual question arrives." },
      { q: "Which librarian's users are confident and frequently mistaken?", answer: 3, explanation: "D says researchers arrive knowing what they want and are often wrong about whether it exists." },
      { q: "Which librarian says gratitude arrives long afterwards?", answer: 3, explanation: "D says nobody thanks you at the moment but they thank you two years later." },
      { q: "Which librarian uses questions that would otherwise seem intrusive?", answer: 0, explanation: "A uses open questions that would sound intrusive if the purpose were not obvious." },
    ]
  },
  {
    id: "cpe-rmatch13-03",
    title: "Five Producers on a Difficult Vintage",
    sections: [
      { label: "A", text: "The year everybody describes as a disaster produced the wine I am proudest of, and I want to be careful about why. It was not that difficulty improves quality, which is a romance the trade sells. It was that the conditions removed every option except one, and the wine that resulted is a more honest expression of this ground than the years in which I had choices and made comfortable ones. Given the same weather again I would be alarmed. Given the same wine again I would take it, which is a contradiction I have stopped trying to resolve." },
      { label: "B", text: "What a bad year exposes is your equipment and your discipline, not your talent. Fruit arriving in poor condition has to be sorted, and sorting takes people, tables, time and a willingness to discard a third of what you have grown, which is a decision made in the week when your income for the year is being determined. Everybody says they would do it. Rather fewer do it on the day. The difference between the estates that came through that vintage and the ones that did not is almost entirely visible in what was thrown away." },
      { label: "C", text: "I sold the entire crop to a merchant and made nothing under my own name, and I regard that as the most professional decision of my career. The wine would have been adequate, the label carries the reputation of thirty years, and adequate under my name would have cost more than the year was worth. Colleagues who bottled everything that season are still explaining it to customers. Nobody remembers a year in which a producer did not release, and everybody remembers a bottle that disappointed them." },
      { label: "D", text: "The part nobody in the trade discusses is the debt. A poor vintage is not a bad year of trading; it is a year with almost no income arriving against costs that were incurred twelve months earlier and payments that continue regardless. Two poor years in succession end estates that have existed for a century, and the buyers are always larger operations with reserves. Every account of these seasons is written in terms of weather and skill, and the actual determinant of who survives is who had a facility with a bank." },
      { label: "E", text: "I have changed what I plant because of that year and it will take fifteen years to know whether I was right. The varieties that failed were failing for reasons that are not going to become less common, and the ones that came through were the ones I had planted almost as an afterthought on the worst corner of the property. Replanting is the most expensive and least reversible decision available to me, made on evidence from a single season, and I made it, and I lie awake about it perhaps twice a year." },
    ],
    questions: [
      { q: "Which producer rejects the idea that hardship improves quality?", answer: 0, explanation: "A calls that a romance the trade sells." },
      { q: "Which producer says the decisive factor was what was discarded?", answer: 1, explanation: "B says the difference is almost entirely visible in what was thrown away." },
      { q: "Which producer chose not to release wine under their own name?", answer: 2, explanation: "C sold the entire crop to a merchant." },
      { q: "Which producer identifies finance as the real determinant of survival?", answer: 3, explanation: "D says the actual determinant is who had a facility with a bank." },
      { q: "Which producer made a long-term change on limited evidence?", answer: 4, explanation: "E replanted on evidence from a single season." },
      { q: "Which producer says a decision is taken when income is at stake?", answer: 1, explanation: "B says the sorting decision is made in the week your income is being determined." },
      { q: "Which producer contrasts what is remembered by customers?", answer: 2, explanation: "C says nobody remembers a year without a release and everybody remembers a disappointing bottle." },
      { q: "Which producer holds two incompatible views without reconciling them?", answer: 0, explanation: "A has stopped trying to resolve the contradiction." },
      { q: "Which producer notes who acquires estates that fail?", answer: 3, explanation: "D says the buyers are always larger operations with reserves." },
      { q: "Which producer expects to wait many years for confirmation?", answer: 4, explanation: "E says it will take fifteen years to know whether they were right." },
    ]
  },
  {
    id: "cpe-rmatch13-04",
    title: "Four Radiologists on Reading an Image",
    sections: [
      { label: "A", text: "The error I fear is not the one I make from ignorance; it is satisfaction of search. I find the thing I was asked about, the question is answered, and my attention releases before I have examined the parts of the image nobody was asking about. Everything I know about my own errors indicates that this is where they live, and my defence is procedural rather than intellectual: I look at the same regions in the same order every time, including after I have found something, which feels absurd on the four hundredth occasion and is the whole of my protection." },
      { label: "B", text: "What the request says determines what I see, and this is well demonstrated and impossible to eliminate. A clinician who writes that they suspect a particular condition has installed that possibility in my reading before I have looked, and the effect is measurable: I am more likely to find it and less likely to find something else. I would prefer to read blind and the system cannot function that way, since without the clinical question I do not know what matters. So I read the image first and the request second, which is the only compromise available and which I fail to do when I am busy." },
      { label: "C", text: "The software has changed my work in a direction that surprised me. It is genuinely good at the specific thing it was trained on and it produces a category of prompt that is difficult to disregard: once a region has been flagged, the effort of concluding that it is nothing is greater than the effort of mentioning it, and a report that mentions everything is a report that has transferred the decision to somebody else. My discipline now is to form my own view before I look at the overlay, which the workflow does not encourage and which takes forty seconds longer per study." },
      { label: "D", text: "My concern is volume rather than any of this. The number of studies has risen far faster than the number of people qualified to read them, the time per study has fallen accordingly, and every discussion of accuracy in my field treats the reader as a constant while the conditions have changed enormously. An error made at the fortieth study of a shift is not the same event as an error made at the fourth, and no quality system I have worked under records which it was. The profession has an excellent literature on how we read and almost nothing on how many." },
    ],
    questions: [
      { q: "Which radiologist guards against stopping once something is found?", answer: 0, explanation: "A describes satisfaction of search and a fixed order of examination." },
      { q: "Which radiologist says the referral text shapes what they perceive?", answer: 1, explanation: "B says a suspected condition is installed before they have looked." },
      { q: "Which radiologist deliberately forms a view before consulting an aid?", answer: 2, explanation: "C forms their own view before looking at the overlay." },
      { q: "Which radiologist emphasises workload rather than perception?", answer: 3, explanation: "D says the concern is volume and time per study." },
      { q: "Which radiologist describes a defence that feels absurd in practice?", answer: 0, explanation: "A says the fixed order feels absurd on the four hundredth occasion." },
      { q: "Which radiologist admits to abandoning their own safeguard under pressure?", answer: 1, explanation: "B fails to read image first and request second when busy." },
      { q: "Which radiologist says a prompt makes dismissal harder than mention?", answer: 2, explanation: "C says concluding that a flagged region is nothing takes more effort than mentioning it." },
      { q: "Which radiologist says quality systems ignore working conditions?", answer: 3, explanation: "D says no quality system records whether it was the fortieth or the fourth study." },
      { q: "Which radiologist accepts a compromise as the only workable option?", answer: 1, explanation: "B calls reading image first and request second the only compromise available." },
      { q: "Which radiologist notes a cost in time from their own practice?", answer: 2, explanation: "C says it takes forty seconds longer per study." },
    ]
  },
  {
    id: "cpe-rmatch13-05",
    title: "Five Hoteliers on the Guest Who Complains",
    sections: [
      { label: "A", text: "A complaint made at the desk is a gift and one made online is a bill, and the entire management task is converting the second into the first before the guest leaves. What produces that conversion is not compensation, which most people do not want and which converts a relationship into a transaction; it is being asked a question by somebody with the authority to change something. I have watched a guest arrive at reception furious and leave the conversation as an advocate, and nothing had been refunded. Somebody had simply believed them within thirty seconds rather than after four sentences of explanation." },
      { label: "B", text: "What I have learnt is to distinguish between the complaint that is about the hotel and the one that is not. A person who has had a difficult journey, an argument, or a piece of bad news arrives with something that has to go somewhere, and it goes to whoever is behind the desk. Treating that as a service failure produces an investigation of a room that is perfectly satisfactory. Treating it as a person having a bad evening produces a conversation, a cup of tea, and a guest who apologises the following morning. Getting this wrong in either direction is the commonest error my staff make." },
      { label: "C", text: "I want to defend the guest who complains about everything, because that person is the most useful customer I have. They are describing, in an irritating way, a list of things that a hundred other guests noticed and did not mention, and every one of those hundred simply will not return. The complaint I fear is the polite one at checkout that says everything was lovely, from somebody I will never see again. Silence is not satisfaction, and an establishment that judges itself by the absence of complaints is measuring the courtesy of its guests." },
      { label: "D", text: "The reviews are the part of the business I find hardest to manage rationally, because their arithmetic is brutal. A hundred guests have a good stay, four write about it, one has a bad night and writes at length, and the average that a future guest sees is determined by a sample that is not remotely representative. I have stopped responding defensively and now reply to the worst of them factually, briefly and without argument, because the reply is not for the person who wrote it. It is for the next eight hundred people who will read the exchange." },
      { label: "E", text: "The complaints that reach me are almost never about the thing that went wrong. They are about how long it took somebody to respond, whether the response contained a defence, and whether anybody with authority appeared. A broken shower is an event; a broken shower and forty minutes of a night porter explaining that the plumber comes on Tuesdays is a story that a guest tells for years. I now judge my staff entirely on the interval and the manner and not at all on the underlying fault, which is frequently nobody's doing and always somebody's responsibility." },
    ],
    questions: [
      { q: "Which hotelier says being believed matters more than compensation?", answer: 0, explanation: "A describes a guest becoming an advocate with nothing refunded, having been believed quickly." },
      { q: "Which hotelier distinguishes complaints that are not really about the hotel?", answer: 1, explanation: "B distinguishes a service failure from a person having a bad evening." },
      { q: "Which hotelier regards the persistent complainer as valuable?", answer: 2, explanation: "C defends the guest who complains about everything as the most useful customer." },
      { q: "Which hotelier writes replies aimed at future readers?", answer: 3, explanation: "D says the reply is for the next eight hundred people who read the exchange." },
      { q: "Which hotelier assesses staff on response rather than fault?", answer: 4, explanation: "E judges staff entirely on the interval and the manner." },
      { q: "Which hotelier says an absence of complaints measures politeness?", answer: 2, explanation: "C says an establishment judging itself by absent complaints is measuring guests' courtesy." },
      { q: "Which hotelier identifies an error made in both directions by staff?", answer: 1, explanation: "B says getting this wrong in either direction is the commonest error staff make." },
      { q: "Which hotelier describes an unrepresentative sample of opinion?", answer: 3, explanation: "D describes an average determined by a sample that is not remotely representative." },
      { q: "Which hotelier says a delay turns an incident into a story?", answer: 4, explanation: "E says forty minutes of explanation produces a story a guest tells for years." },
      { q: "Which hotelier says compensation can damage a relationship?", answer: 0, explanation: "A says compensation converts a relationship into a transaction." },
    ]
  },
  {
    id: "cpe-rmatch13-06",
    title: "Four Care Workers on the Clock",
    sections: [
      { label: "A", text: "The visits are scheduled in units and the units do not contain the work. Fifteen minutes is enough to complete a task list and is not enough to do the task list for a person who is frightened, slow or in pain, and every carer I know absorbs the difference personally by running late for the rest of the day. The schedule is not a description of the work; it is a description of what the funding will pay for, and the gap between those two things is being covered, unrecorded, by the wages of people earning very little." },
      { label: "B", text: "The travel is the part that is invisible in every account of this job. My rota assumes I arrive instantly, the visits are eleven minutes apart in different streets, and the time between them is unpaid in practice whatever the contract says. What that produces is not merely unfairness; it produces a carer arriving out of breath into somebody's front room and beginning by apologising, which sets the tone of a visit that was supposed to be the best twenty minutes of that person's day." },
      { label: "C", text: "What I want to say something about is continuity, because it is treated as a nicety and is a clinical matter. I have noticed a change in somebody's breathing that mattered, and I noticed it because I had seen them on Tuesday and knew what usual was. A rota that sends a different person each day may deliver every task correctly and cannot do that, and the deterioration that gets noticed late is the one that ends with an ambulance. Nothing in the way this service is commissioned records continuity, and everything about the way it is priced works against it." },
      { label: "D", text: "The relationship is the whole of the job and the paperwork records the opposite. My log lists washing, medication, a meal, and a box for comments that nobody reads; it does not record that a man who has not spoken to another person since my visit yesterday talked for six minutes about his brother. That six minutes is why I am there, it is what he would say if anybody asked him, and it is invisible to every system that assesses whether I am doing my job. I have stopped believing that this is an oversight. It is invisible because it cannot be timed." },
    ],
    questions: [
      { q: "Which care worker says the schedule describes funding rather than work?", answer: 0, explanation: "A says the schedule is a description of what the funding will pay for." },
      { q: "Which care worker highlights unpaid travel between visits?", answer: 1, explanation: "B says the time between visits is unpaid in practice whatever the contract says." },
      { q: "Which care worker treats continuity as clinically significant?", answer: 2, explanation: "C says continuity is treated as a nicety and is a clinical matter." },
      { q: "Which care worker says the most valuable element cannot be recorded?", answer: 3, explanation: "D says the six minutes is invisible to every system that assesses the job." },
      { q: "Which care worker says the shortfall is absorbed by workers themselves?", answer: 0, explanation: "A says the gap is covered by the wages of people earning very little." },
      { q: "Which care worker describes the effect of hurry on a visit's tone?", answer: 1, explanation: "B describes arriving out of breath and beginning by apologising." },
      { q: "Which care worker gives an example of noticing a change?", answer: 2, explanation: "C noticed a change in somebody's breathing because they knew what usual was." },
      { q: "Which care worker rejects the idea that an omission is accidental?", answer: 3, explanation: "D has stopped believing it is an oversight, saying it is invisible because it cannot be timed." },
      { q: "Which care worker says commissioning works against a valuable practice?", answer: 2, explanation: "C says everything about the pricing works against continuity." },
      { q: "Which care worker describes the consequence of running late all day?", answer: 0, explanation: "A says carers absorb the difference by running late for the rest of the day." },
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
