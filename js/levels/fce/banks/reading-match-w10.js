/* FCE Prep bank: Reading multiple matching (B2) — wave 10 */
(function () {
var BANK = [
  {
    id: "fce-rmatch10-01",
    title: "Four People Who Bought a First Home",
    sections: [
      { label: "A", text: "Priya: We saved for six years and the monthly payment was never the problem; the deposit was, and it is a peculiar sort of test because it measures how long you can go on doing something dull rather than how much you earn. We were outbid twice. In the end we bought eleven miles further out than we had wanted, on a road neither of us had heard of, and I would tell anybody in the same position that the compromise you make on location is the one you stop noticing within about a year." },
      { label: "B", text: "Callum: I bought with a friend, which everybody warned us about and which has worked perfectly for nine years, entirely because we spent four hundred pounds on a solicitor before we spent anything else. We have a document that says what happens if one of us wants out, how much notice is required, and how the property is valued. We have never needed it. The point of it was never the crisis; it was that writing it forced two twenty-six-year-olds to have a conversation neither of us would otherwise have started." },
      { label: "C", text: "Nadia: My grandmother left me eleven thousand pounds in 2019 and that is the only reason I own anything. I am completely clear about this and I find it uncomfortable to say out loud, because friends of mine work harder than I do, earn about the same and are still renting, and the difference between us is not effort or judgement. It was not a fortune. It was the exact size of the gap between what we had and what we needed, which is what made it decisive." },
      { label: "D", text: "Ron: I rented for twenty-five years and bought at forty-seven, and the obstacle at that age is not the deposit, because by then I had one. It is the term. A lender looking at a man of forty-seven is looking at eighteen years of working life, and eighteen years is a shorter mortgage and therefore a much larger monthly payment for the same house. Nobody had ever explained this to me and I had assumed, for two decades, that saving was the whole task." }
    ],
    questions: [
      { q: "Who saved over a long period?", answer: 0, explanation: "A: Priya and her partner saved for six years." },
      { q: "Who bought a property jointly with a friend?", answer: 1, explanation: "B: Callum bought with a friend nine years ago." },
      { q: "Who was given money by a relative?", answer: 2, explanation: "C: Nadia's grandmother left her eleven thousand pounds." },
      { q: "Who bought much later in life than most people?", answer: 3, explanation: "D: Ron rented for twenty-five years and bought at forty-seven." },
      { q: "Who accepted a location they had not wanted?", answer: 0, explanation: "A: Priya bought eleven miles further out than intended." },
      { q: "Who drew up a written agreement in advance?", answer: 1, explanation: "B: Callum paid a solicitor before anything else." },
      { q: "Who is uncomfortable about how they were able to buy?", answer: 2, explanation: "C: Nadia finds it uncomfortable to say that an inheritance is the only reason she owns anything." },
      { q: "Who had a problem caused by the length of the loan?", answer: 3, explanation: "D: Ron explains that a shorter term means a much larger monthly payment." },
      { q: "Who says the deposit rather than the repayments was the difficulty?", answer: 0, explanation: "A: Priya says the monthly payment was never the problem." },
      { q: "Who says a modest sum made all the difference?", answer: 2, explanation: "C: Nadia says it was not a fortune but was exactly the size of the gap." }
    ]
  },
  {
    id: "fce-rmatch10-02",
    title: "Four People Who Went Back to Study",
    sections: [
      { label: "A", text: "Femi: I started a part-time degree at thirty-eight and finished it at forty-three, working four days a week throughout, and the honest summary of those five years is that there were no evenings in them. The third year was when I nearly stopped: the novelty had gone, the end was still a long way off, and I had an assignment due in a week when my daughter had chickenpox. My wife talked me out of it in about forty minutes, and I have never established what she said." },
      { label: "B", text: "Margaret: I took a course in the history of the county at fifty-five and I was not after a qualification of any kind, which the person enrolling me found difficult to process. I wanted to know about the place I have lived in since 1994. I will say that studying at that age is easier rather than harder: nobody is assessing me, I am not doing it to become anything, and I read the things on the list rather than the minimum required to write the essay." },
      { label: "C", text: "Jonas: I gave up a salary at twenty-nine to retrain full time for two years and I underestimated exactly one thing, which is what it does to you to have no income when you have had one. The course was fine. The teaching was fine. Being twenty-nine and unable to go to a wedding because of the train fare is a specific experience that I had not had since I was a student the first time and had forgotten entirely." },
      { label: "D", text: "Aisha: My employer paid, which I was grateful for and which came with a clause: if I left within three years of finishing I would repay a proportion of the fees on a sliding scale. That is entirely reasonable from their side. It also means that for the whole of the course, and for three years afterwards, a decision I might otherwise have made freely was a decision with a number attached to it, and I did not fully understand that when I signed." }
    ],
    questions: [
      { q: "Who studied part-time while continuing to work?", answer: 0, explanation: "A: Femi worked four days a week throughout a five-year degree." },
      { q: "Who was not seeking a qualification?", answer: 1, explanation: "B: Margaret says she was not after a qualification of any kind." },
      { q: "Who gave up their income entirely?", answer: 2, explanation: "C: Jonas gave up a salary to retrain full time." },
      { q: "Who had their fees paid by an employer?", answer: 3, explanation: "D: Aisha's employer paid for the course." },
      { q: "Who was required to stay with an employer afterwards?", answer: 3, explanation: "D: Aisha would repay a proportion of the fees if she left within three years." },
      { q: "Who took five years to complete the course?", answer: 0, explanation: "A: Femi started at thirty-eight and finished at forty-three." },
      { q: "Who says studying is easier at their age?", answer: 1, explanation: "B: Margaret says studying at fifty-five is easier rather than harder." },
      { q: "Who found the loss of salary the hardest part?", answer: 2, explanation: "C: Jonas underestimated what having no income would be like." },
      { q: "Who nearly abandoned the course?", answer: 0, explanation: "A: Femi nearly stopped in the third year." },
      { q: "Who mentions being unable to afford a social occasion?", answer: 2, explanation: "C: Jonas could not go to a wedding because of the train fare." }
    ]
  },
  {
    id: "fce-rmatch10-03",
    title: "Four People Who Work With the Public",
    sections: [
      { label: "A", text: "Grace: I am a library assistant and perhaps a third of what I am asked has nothing to do with books. How to fill in a form. Whether this letter means what the person thinks it means. Where the nearest place is that will let you sit down for two hours without buying anything, which is a question people ask indirectly and which the answer to is usually us. There is no other building on that high street that a person can enter, stay in and leave without spending money, and that is a large part of what we are." },
      { label: "B", text: "Tomasz: I am on a hotel reception desk and I would estimate that ninety per cent of the complaints I receive concern something that did not happen at this desk: the room, the noise, the breakfast, the booking site. I used to explain that immediately, which is accurate and is the wrong thing to do. What works is letting the person finish, entirely, without a single interruption, and then dealing with the part I can actually deal with. It takes ninety seconds longer and it changes the conversation completely." },
      { label: "C", text: "Bev: I drive a bus, and almost everything difficult about the job comes from one thing, which is that I am measured against a timetable written by somebody who has never sat at that junction at ten past eight. If I wait for the man running for the stop, I am late at the next four stops and it shows on a screen in an office. If I do not, I am the person who drove away. There is no version of that afternoon in which somebody is not annoyed, and it is always with me rather than with the timetable." },
      { label: "D", text: "Alan: I am a room attendant in a museum, which people imagine is about security and is mostly about geography. Where are the toilets, where is the café, where is the painting that was on the poster. I answer the same nine questions perhaps two hundred times a day and I have concluded that answering the two hundredth one exactly as well as the first is the entire skill. I am also on my feet for seven hours, which is the part of it that ends careers." }
    ],
    questions: [
      { q: "Who is asked about matters unconnected with their job?", answer: 0, explanation: "A: Grace says a third of questions have nothing to do with books." },
      { q: "Who receives complaints about things others are responsible for?", answer: 1, explanation: "B: Tomasz says ninety per cent of complaints concern something that did not happen at the desk." },
      { q: "Who says a schedule causes most of the conflict?", answer: 2, explanation: "C: Bev says the difficulty comes from being measured against a timetable." },
      { q: "Who spends the day on their feet?", answer: 3, explanation: "D: Alan is on his feet for seven hours." },
      { q: "Who says most enquiries are about directions?", answer: 3, explanation: "D: Alan answers the same nine questions about toilets, café and paintings." },
      { q: "Who has learned to let people speak without interrupting?", answer: 1, explanation: "B: Tomasz lets the person finish entirely before responding." },
      { q: "Who describes their workplace as somewhere people can stay without spending?", answer: 0, explanation: "A: Grace says no other building on the high street allows that." },
      { q: "Who cannot help one person without inconveniencing others?", answer: 2, explanation: "C: Bev cannot wait for a passenger without being late at the next stops." },
      { q: "Who says their service matters to people with nowhere else to go?", answer: 0, explanation: "A: Grace says that is a large part of what the library is." },
      { q: "Who is judged on something outside their control?", answer: 2, explanation: "C: Bev is measured against a timetable she did not write." }
    ]
  },
  {
    id: "fce-rmatch10-04",
    title: "Four People on Learning to Cook",
    sections: [
      { label: "A", text: "Ellie: I could not cook at all until I was thirty and I learned from a single book, which somebody gave me and which I still own. For about a year I made the same six things, over and over, until I could do all of them without opening it. That sounds joyless and it was the opposite: repeating a small number of dishes is how the confidence arrives, and once you have six you are not afraid of a seventh. I would recommend one book and six recipes over any course." },
      { label: "B", text: "Yusuf: I learned standing next to my grandmother from about the age of six, and there was never a written recipe of any kind in that kitchen. She measured everything by handful, by eye and by a particular cup, and when I ask her for quantities now she becomes irritable, because the question is not one that her way of cooking can answer. I can produce her food. I cannot write it down, and I have tried three times." },
      { label: "C", text: "Marcus: I learned entirely from videos during 2020 and the results are lopsided in a way I have come to recognise in other people who learned the same way. My knife work is genuinely good. My timing is good. What I cannot do is open a fridge containing four things and produce a meal, because I have never once cooked without a plan in front of me, and every one of those plans was somebody else's." },
      { label: "D", text: "Sinead: I spent seven months in a professional kitchen at nineteen, which was long enough to acquire two habits and not long enough to acquire the skill. The habits are that I clear as I go and that I put everything I need on the bench before I light anything, and both of them make me faster at home than people who cook better than I do. The rest of it does not transfer at all: a domestic hob will not do what a professional one does, and most of what I was taught assumed that it would." }
    ],
    questions: [
      { q: "Who repeated a small number of dishes for a long time?", answer: 0, explanation: "A: Ellie made the same six things for about a year." },
      { q: "Who learned without any written recipes?", answer: 1, explanation: "B: Yusuf says there was never a written recipe in that kitchen." },
      { q: "Who learned by watching online?", answer: 2, explanation: "C: Marcus learned entirely from videos in 2020." },
      { q: "Who has worked in a professional kitchen?", answer: 3, explanation: "D: Sinead spent seven months in one at nineteen." },
      { q: "Who says preparation and tidiness make them fast?", answer: 3, explanation: "D: Sinead clears as she goes and lays everything out before starting." },
      { q: "Who cannot cook without instructions?", answer: 2, explanation: "C: Marcus has never cooked without a plan in front of him." },
      { q: "Who says one book was all they needed?", answer: 0, explanation: "A: Ellie recommends one book and six recipes over any course." },
      { q: "Who cannot record the recipes they can cook?", answer: 1, explanation: "B: Yusuf can produce the food but cannot write it down." },
      { q: "Who says confidence came from repetition?", answer: 0, explanation: "A: Ellie says repeating a small number of dishes is how confidence arrives." },
      { q: "Who says professional methods do not work at home?", answer: 3, explanation: "D: Sinead says a domestic hob will not do what a professional one does." }
    ]
  },
  {
    id: "fce-rmatch10-05",
    title: "Four People Who Have Moved House Often",
    sections: [
      { label: "A", text: "Dan: Eleven addresses in twenty years, all of them for work, and I have arrived at a rule which I apply without exception: if I have not used it in the time between two moves, it does not come to the third. It sounds severe and it is the reason I can empty a two-bedroom flat into a van in a single day with one other person. What I have lost by it is not much. What I have gained is that a move is now a Saturday rather than a fortnight." },
      { label: "B", text: "Hannah: My father was in the army and I went to seven schools before I was sixteen. The houses did not matter. The schools were the whole of it, and what you develop is a technique: you work out within about two days who the group is that will take a new person, and you go there, and you do not attempt the group you would have chosen. I am extremely good at arriving somewhere I know nobody, which is a real skill, and I would rather not have needed to acquire it." },
      { label: "C", text: "Ollie: Six moves in nine years and not one of them was my decision. Two landlords sold, one moved a family member in, one raised the rent by an amount I could not meet, and twice the property was withdrawn from the market entirely. What that does is not primarily financial, although it is that too. It is that you cannot make any plan longer than the notice period, and after a while you stop making them, and then you notice that you have stopped." },
      { label: "D", text: "Val: I have moved fourteen times because I like it. I am aware this is unusual. Somewhere around the third year in any house I become restless, and I find that I am looking at other places on my telephone in the evenings, and I have learned to recognise that as a signal rather than as a mood. My husband, who grew up in one house and would happily die in this one, regards the whole thing as a mild condition, and we compromise." }
    ],
    questions: [
      { q: "Who moved because of other people's decisions?", answer: 2, explanation: "C: Ollie's six moves were all caused by landlords." },
      { q: "Who moved frequently as a child?", answer: 1, explanation: "B: Hannah went to seven schools before she was sixteen." },
      { q: "Who has a rule about what to keep?", answer: 0, explanation: "A: Dan discards anything unused between two moves." },
      { q: "Who enjoys moving house?", answer: 3, explanation: "D: Val has moved fourteen times because she likes it." },
      { q: "Who changed schools repeatedly?", answer: 1, explanation: "B: Hannah attended seven schools." },
      { q: "Who says the loss of control was the worst part?", answer: 2, explanation: "C: Ollie says you cannot make any plan longer than the notice period." },
      { q: "Who moved for employment reasons?", answer: 0, explanation: "A: Dan's eleven addresses were all for work." },
      { q: "Who becomes restless after a few years?", answer: 3, explanation: "D: Val becomes restless around the third year in any house." },
      { q: "Who can pack up a home very quickly?", answer: 0, explanation: "A: Dan can empty a two-bedroom flat into a van in a day." },
      { q: "Who has become skilled at joining new groups?", answer: 1, explanation: "B: Hannah is extremely good at arriving somewhere she knows nobody." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
