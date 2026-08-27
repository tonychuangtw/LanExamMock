/* CPE Prep bank: Reading multiple matching (C2) — wave 15 */
(function () {
var BANK = [
  {
    id: "cpe-rmatch15-01",
    title: "Five Statisticians on Advising People Who Are Not",
    sections: [
      { label: "A", text: "The most valuable thing I do is arrive before the data are collected, and I am almost never invited then. By the time somebody brings me a spreadsheet the design has been fixed, the comparison group does not exist, and my honest advice is that the question cannot be answered with what they have, which is received as obstruction. I have started declining to analyse anything I was not consulted about at the design stage, which sounds arrogant and has produced more good work in three years than a decade of rescuing studies afterwards ever did." },
      { label: "B", text: "What I have learnt is never to say significant. The word means one thing in my discipline and something entirely different in every room I sit in, and a listener who hears it takes away a claim about importance that I did not make. I now say how large the effect is, how uncertain, and what would follow if it were at the top or the bottom of that range, which takes three sentences instead of one and has never once been misunderstood. Abandoning the vocabulary of my own field was the single most useful thing I have done." },
      { label: "C", text: "My difficulty is that people want an answer and I am offering a range, and they experience the range as evasion. So I have stopped presenting uncertainty as a property of my analysis, which sounds like a confession of weakness, and started presenting it as a property of the world, which is what it is. The effect could be anything between these two figures, and here is what you would do differently in each case. Once the conversation is about the decision rather than about the number, nobody objects to the range at all." },
      { label: "D", text: "The pressure I have to name is the one that is never explicit. Nobody has ever asked me to falsify anything. What happens is that a result comes out unhelpfully, and I am asked whether I have considered a different adjustment, and whether the outlying site should be included, and each question is legitimate and could be asked of any analysis. The pattern is only visible in aggregate: the questions arrive when the answer is inconvenient and never when it is not, and I have learnt to pre-register what I am going to do precisely so that I can decline them without accusing anybody." },
      { label: "E", text: "I want to defend the simple analysis against my own profession. There is a strong incentive to demonstrate technique, and a sophisticated model with eleven assumptions is more impressive than a difference of two means, and it is frequently less reliable and always less comprehensible to the person who must act on it. If a conclusion holds under a crude method and a refined one, present the crude one. If it holds only under the refined one, be considerably more careful than the paper describing that method encourages you to be." },
    ],
    questions: [
      { q: "Which statistician insists on involvement before data collection?", answer: 0, explanation: "A declines to analyse anything they were not consulted about at the design stage." },
      { q: "Which statistician abandoned a technical term?", answer: 1, explanation: "B has learnt never to say significant." },
      { q: "Which statistician reframes uncertainty as a feature of the world?", answer: 2, explanation: "C presents uncertainty as a property of the world rather than of the analysis." },
      { q: "Which statistician describes pressure that is never stated openly?", answer: 3, explanation: "D says nobody has asked them to falsify anything and the questions arrive selectively." },
      { q: "Which statistician argues against unnecessary sophistication?", answer: 4, explanation: "E defends the simple analysis against their own profession." },
      { q: "Which statistician says a pattern is visible only in aggregate?", answer: 3, explanation: "D says the pattern is only visible in aggregate." },
      { q: "Which statistician says their advice is heard as obstruction?", answer: 0, explanation: "A says the honest advice is received as obstruction." },
      { q: "Which statistician replaced one sentence with three?", answer: 1, explanation: "B says it takes three sentences instead of one." },
      { q: "Which statistician shifts discussion from the figure to the choice it informs?", answer: 2, explanation: "C makes the conversation about the decision rather than the number." },
      { q: "Which statistician advises extra caution when a result depends on a method?", answer: 4, explanation: "E says be considerably more careful if it holds only under the refined method." },
    ]
  },
  {
    id: "cpe-rmatch15-02",
    title: "Four Volunteers on Mountain Rescue",
    sections: [
      { label: "A", text: "The call-out everybody imagines is a casualty on a ridge in a storm, and the great majority of what we do is walking somebody down who is uninjured, cold, and out of daylight. That is not a lesser task; it is the task, and a team that trains only for the dramatic version is a team that is bored by four fifths of its work. I would rather have members who are content to spend three hours escorting a frightened family than members who are magnificent on a rope and impatient on a path." },
      { label: "B", text: "The change in the last decade is that we are found rather than that we find. A telephone with a location has removed the search from most searches, and what remains is the extraction, which is where the difficulty and the danger always were anyway. What worries me is a second effect: people going further, later, in worse conditions, on the understanding that they can call. I have no evidence for that beyond what I see on the hill, and everybody in my team believes it." },
      { label: "C", text: "I want to say something about how we speak about the people we collect. There is a strong temptation, particularly in the vehicle afterwards, to be contemptuous about somebody's footwear and their planning, and it is corrosive. The person on that hill is having the worst day of their year and did not set out intending to require us. A team that develops a culture of judging its casualties will eventually be slower to them, and I have watched it happen once and have been strict about it ever since." },
      { label: "D", text: "The part nobody sees is the employer. Every member of my team has a job, the call comes at eleven in the morning on a Wednesday, and whether we can respond depends entirely on how somebody's manager feels about it. The rescue is unpaid, the training is unpaid, and the willingness of employers to release people is the invisible infrastructure that the whole service rests on. When a team folds, and several have, it is almost never for lack of volunteers. It is because the volunteers could no longer leave work." },
    ],
    questions: [
      { q: "Which volunteer emphasises the ordinary nature of most call-outs?", answer: 0, explanation: "A says most work is walking somebody down who is uninjured and cold." },
      { q: "Which volunteer describes a change in how casualties are located?", answer: 1, explanation: "B says a telephone with a location has removed the search from most searches." },
      { q: "Which volunteer objects to a culture of judging casualties?", answer: 2, explanation: "C says contempt in the vehicle afterwards is corrosive." },
      { q: "Which volunteer identifies employers as essential to the service?", answer: 3, explanation: "D calls the willingness of employers the invisible infrastructure." },
      { q: "Which volunteer prefers patient members to technically brilliant ones?", answer: 0, explanation: "A would rather have members content to escort a frightened family." },
      { q: "Which volunteer reports a belief held without formal evidence?", answer: 1, explanation: "B has no evidence beyond what they see on the hill." },
      { q: "Which volunteer has intervened after witnessing a consequence?", answer: 2, explanation: "C watched it happen once and has been strict ever since." },
      { q: "Which volunteer explains why teams cease to operate?", answer: 3, explanation: "D says teams fold because volunteers could no longer leave work." },
      { q: "Which volunteer says the difficulty was always in the recovery?", answer: 1, explanation: "B says the extraction is where the difficulty and danger always were." },
      { q: "Which volunteer warns against training only for exceptional events?", answer: 0, explanation: "A says a team training only for the dramatic version is bored by most of its work." },
    ]
  },
  {
    id: "cpe-rmatch15-03",
    title: "Five Buyers on Choosing What to Stock",
    sections: [
      { label: "A", text: "I buy for a single shop and my constraint is shelf space, which nobody outside retail understands as a constraint at all. Every item I take is an item I do not take, and the decision is therefore never about whether something is good; it is about whether it earns its place against the thing it displaces. I have declined excellent products from people I like because the space they would occupy is currently producing more, and there is no way of saying that which does not sound like a judgement about their work." },
      { label: "B", text: "The buying is the easy part and the forecasting is where careers end. I commit to quantities six months before the season, against a prediction of weather, mood and what a competitor will do, and I am assessed on markdowns that arise from decisions taken before anybody knew anything. Everybody in this trade has a story about the year they were right, and the stories are not evidence of skill; the distribution of outcomes across a career is the evidence, and mine says that I am slightly better than the average and that most of it is luck." },
      { label: "C", text: "What I have learnt is to distrust the sample. A supplier brings me the best example of what they make, produced with attention, in a quantity of one, and the question I am actually deciding is whether the four hundredth unit in March will be like this. So I ask about the factory, the second source of the material, and what happens when their main machine fails, and I decline suppliers who cannot answer, however good the sample is. The people who are surprised by that question are the ones who will disappoint me later." },
      { label: "D", text: "My difficulty is that I am buying for a customer I am not. My shop serves an area whose income, age and habits differ from mine in every respect, and my instincts are therefore an unreliable instrument that I must correct for continuously. What I do is spend one day a month behind the counter, which is unusual at my level and which is the only thing that has consistently prevented me from buying what I would like to see rather than what somebody will pay for." },
      { label: "E", text: "The relationship with the small supplier is the part of this job I find hardest to do decently. I can make somebody's year with an order and I can end them with a change of plan, and the power in the arrangement is entirely one-sided in a way that everybody understands and nobody says. What I try to do is give a decision early rather than a maybe, pay to the terms rather than to the limit of them, and tell somebody when I am going to stop, in time for it to be survivable. None of that is generosity. It is the minimum, and it is not universal." },
    ],
    questions: [
      { q: "Which buyer describes every decision as a displacement?", answer: 0, explanation: "A says every item taken is an item not taken." },
      { q: "Which buyer says outcomes across a career reveal skill?", answer: 1, explanation: "B says the distribution of outcomes across a career is the evidence." },
      { q: "Which buyer investigates a supplier's production capacity?", answer: 2, explanation: "C asks about the factory, the second source and what happens when a machine fails." },
      { q: "Which buyer corrects for differing from their customers?", answer: 3, explanation: "D says their instincts are unreliable because they are not the customer." },
      { q: "Which buyer describes an unequal relationship?", answer: 4, explanation: "E says the power is entirely one-sided." },
      { q: "Which buyer commits far in advance of the season?", answer: 1, explanation: "B commits to quantities six months before the season." },
      { q: "Which buyer works a shift in the shop itself?", answer: 3, explanation: "D spends one day a month behind the counter." },
      { q: "Which buyer says a decision cannot be explained without appearing critical?", answer: 0, explanation: "A says there is no way of saying it that does not sound like a judgement." },
      { q: "Which buyer treats a supplier's reaction to a question as informative?", answer: 2, explanation: "C says those surprised by the question will disappoint later." },
      { q: "Which buyer describes their conduct as a minimum rather than a kindness?", answer: 4, explanation: "E says none of that is generosity, it is the minimum." },
    ]
  },
  {
    id: "cpe-rmatch15-04",
    title: "Four Tutors on Teaching Adults to Read",
    sections: [
      { label: "A", text: "The first thing to understand is that nobody arrives without a strategy. A person who has reached forty without reading fluently has an elaborate system for managing it: a partner who deals with letters, a habit of arriving early to watch what others do, an explanation about forgotten glasses that is deployed perhaps twice a week. My first task is not teaching; it is being told about that system, which requires a level of trust that takes about six weeks and which the funding assumes takes about none." },
      { label: "B", text: "What defeats most learners is not difficulty but time. They have a job, frequently two, and children, and the sessions are in the evening, and a course requiring attendance for nine months will lose people at a rate that has nothing to do with their capability. I now teach in fragments designed to be picked up after a gap, and I never begin a session by reviewing what was missed, because the person who missed it is precisely the person who will not come back if the first ten minutes establish that they are behind." },
      { label: "C", text: "The material matters more than any method. An adult reading about a family pet is being asked to accept a humiliation, and the enthusiasm of the tutor makes it worse rather than better. What works is what they actually need to read: a tenancy agreement, a letter from a school, the instructions on a machine at their workplace. It is harder to teach from, because the vocabulary is irregular and the sentences are appalling, and it is the only material that produces the sentence I am waiting for, which is somebody saying that they read something at home this week." },
      { label: "D", text: "What surprised me most is how much of the difficulty is about shame rather than skill. I have taught people who acquired the technical ability within a year and could not use it in front of anybody for another two, because reading aloud badly in a room is the exact situation they have organised a life around avoiding. So I do not ask anybody to read aloud, ever, unless they offer, which is unorthodox and which my training told me was indulgent. The people I have taught have been reading for years and are still not comfortable being watched doing it." },
    ],
    questions: [
      { q: "Which tutor describes learners' existing coping arrangements?", answer: 0, explanation: "A describes an elaborate system including a partner who deals with letters." },
      { q: "Which tutor designs teaching around interrupted attendance?", answer: 1, explanation: "B teaches in fragments designed to be picked up after a gap." },
      { q: "Which tutor uses documents from learners' own lives?", answer: 2, explanation: "C uses tenancy agreements, school letters and workplace instructions." },
      { q: "Which tutor has abandoned a standard classroom practice?", answer: 3, explanation: "D does not ask anybody to read aloud unless they offer." },
      { q: "Which tutor says funding assumes trust is instant?", answer: 0, explanation: "A says the funding assumes it takes about none." },
      { q: "Which tutor avoids beginning by covering missed work?", answer: 1, explanation: "B never begins by reviewing what was missed." },
      { q: "Which tutor says a tutor's enthusiasm can aggravate the problem?", answer: 2, explanation: "C says the enthusiasm of the tutor makes it worse rather than better." },
      { q: "Which tutor distinguishes acquiring a skill from using it?", answer: 3, explanation: "D taught people who acquired the ability and could not use it in front of anybody." },
      { q: "Which tutor identifies the response they are working towards?", answer: 2, explanation: "C waits for somebody saying they read something at home this week." },
      { q: "Which tutor says a practice contradicts their own training?", answer: 3, explanation: "D says their training called it indulgent." },
    ]
  },
  {
    id: "cpe-rmatch15-05",
    title: "Five Cyclists on Sharing the Road",
    sections: [
      { label: "A", text: "The infrastructure argument is the only one that matters and everything else is a distraction. I have cycled in cities where the provision is continuous and separated, and the behaviour of everybody, including cyclists, is transformed; I have cycled in cities where it consists of a painted line that ends at the junction where it would be useful, and the behaviour is what you would expect from people negotiating for space. Nobody's character changes at a national boundary. What changes is what the design permits, and every conversation about courtesy is a conversation about the wrong variable." },
      { label: "B", text: "What I would say to drivers, and I am one, is that almost everything cyclists do that looks reckless is a response to something. Moving out from the kerb is avoiding a door or a drain; taking the middle of a lane at a pinch point is preventing an overtake that will not fit; going before the lights is getting clear of the vehicles that will otherwise pass within a foot. None of it is announced and all of it is legible once you know, which is why drivers who also cycle are, in my experience, the least dangerous people on the road." },
      { label: "C", text: "I want to say something unpopular among my own kind. A cyclist riding through a crossing while somebody elderly is on it has not committed a small offence excused by the greater danger from motor traffic; they have frightened a person who now believes the pavement is unsafe. The asymmetry of danger is real and it is not an argument for behaving badly towards the people below us in it. Every complaint I hear from pedestrians is a complaint I recognise, and the movement I belong to answers it by changing the subject." },
      { label: "D", text: "The helmet argument consumes an enormous amount of oxygen and I have come to think it is a proxy for something else. It converts a question about the design of a road into a question about the equipment of an individual, and it is therefore extremely attractive to everybody who does not wish to alter a road. I wear one. I would not spend a minute of political effort on requiring anybody else to, because the countries that made cycling safe did it by separating vehicles and not by regulating what is on anybody's head." },
      { label: "E", text: "I began commuting by bicycle for reasons that were entirely selfish and remain so. It is the only part of my day that is not negotiable by anybody else, it takes a fixed and reliable time that no other mode in this city can promise, and I arrive at work having had forty minutes that belonged to me. The environmental argument is true and it is not why I do it, and I am suspicious of the way advocacy in this area assumes that people act from principle. The way to get people onto bicycles is to make it the fastest and least unpleasant option, and then they will find their own reasons." },
    ],
    questions: [
      { q: "Which cyclist says design rather than character determines behaviour?", answer: 0, explanation: "A says nobody's character changes at a national boundary." },
      { q: "Which cyclist explains apparently reckless manoeuvres?", answer: 1, explanation: "B explains moving out from the kerb and taking the lane at pinch points." },
      { q: "Which cyclist criticises other cyclists' conduct towards pedestrians?", answer: 2, explanation: "C says frightening an elderly person is not excused by the greater danger from traffic." },
      { q: "Which cyclist regards a familiar debate as a distraction from road design?", answer: 3, explanation: "D says the helmet argument converts a question about roads into one about equipment." },
      { q: "Which cyclist gives personal convenience as their motive?", answer: 4, explanation: "E says the reasons were entirely selfish and remain so." },
      { q: "Which cyclist says drivers who cycle are safer?", answer: 1, explanation: "B says drivers who also cycle are the least dangerous people on the road." },
      { q: "Which cyclist accuses their own movement of evasion?", answer: 2, explanation: "C says the movement answers pedestrians' complaints by changing the subject." },
      { q: "Which cyclist follows a practice they would not impose on others?", answer: 3, explanation: "D wears a helmet and would not require anybody else to." },
      { q: "Which cyclist doubts that people act from principle?", answer: 4, explanation: "E is suspicious of advocacy that assumes people act from principle." },
      { q: "Which cyclist describes provision that stops where it is needed?", answer: 0, explanation: "A describes a painted line that ends at the junction where it would be useful." },
    ]
  },
  {
    id: "cpe-rmatch15-06",
    title: "Four Land Managers on Letting People In",
    sections: [
      { label: "A", text: "Access and conservation are presented as opposites and are, on my ground, the same project. The species I am trying to protect need this landscape to remain undeveloped, that requires public support, and public support is not sustained by people who have never been here. So I have opened paths, accepted the litter and the dogs, and spent money on a car park that produces nothing, because the alternative is a protected site that nobody has any reason to defend when a proposal arrives to build on it." },
      { label: "B", text: "The difficulty is not numbers; it is distribution. Ninety per cent of my visitors use eleven per cent of the ground, which means that eleven per cent is eroded to bare earth and the rest is entirely undisturbed. Everything I do is an attempt to move people rather than to reduce them: a surfaced route that is more pleasant than the desire line beside it, a gate that is easier to reach in one direction, a bench in a place that produces a pause where a pause does no harm. It is manipulation and I am unapologetic about it." },
      { label: "C", text: "What I would like the public to understand is that this is a workplace. The field they are crossing contains animals that were calm before the dog arrived, the track they are parked across is the only route for a vehicle that may be needed urgently, and the gate they left open cost somebody four hours on a Sunday. Almost none of this is malice; it is that the countryside is read as scenery by people for whom it is scenery, and there is no route by which the working version reaches them except a sign, which nobody reads." },
      { label: "D", text: "My site has a season and everything turns on it. For four months the birds I am responsible for cannot tolerate disturbance, and for the remaining eight the ground can absorb almost anything. So I close sections rather than the site, explain why on a board with a photograph, and open everything the moment the season ends. Compliance is far better than my colleagues expect, and the reason is that a restriction with a stated reason and a stated end date is accepted by people who would resent a permanent one imposed without explanation." },
    ],
    questions: [
      { q: "Which manager treats access as necessary to conservation?", answer: 0, explanation: "A says public support is not sustained by people who have never been here." },
      { q: "Which manager concentrates on where visitors go rather than how many?", answer: 1, explanation: "B says the difficulty is distribution and describes moving people." },
      { q: "Which manager stresses that the land is a working environment?", answer: 2, explanation: "C says this is a workplace and describes the costs of visitors' actions." },
      { q: "Which manager applies restrictions only at certain times?", answer: 3, explanation: "D closes sections for four months and opens everything afterwards." },
      { q: "Which manager describes deliberate influence on visitor movement?", answer: 1, explanation: "B calls it manipulation and is unapologetic about it." },
      { q: "Which manager says a temporary restriction is more readily accepted?", answer: 3, explanation: "D says a restriction with a stated reason and end date is accepted." },
      { q: "Which manager accepts costs that produce no direct return?", answer: 0, explanation: "A spent money on a car park that produces nothing." },
      { q: "Which manager says visitors' behaviour is not malicious?", answer: 2, explanation: "C says almost none of this is malice." },
      { q: "Which manager describes a communication method that fails?", answer: 2, explanation: "C says there is no route except a sign, which nobody reads." },
      { q: "Which manager reports better cooperation than colleagues anticipate?", answer: 3, explanation: "D says compliance is far better than colleagues expect." },
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
