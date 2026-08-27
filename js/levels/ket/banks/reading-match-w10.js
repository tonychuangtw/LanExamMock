/* KET Prep bank: Reading multiple matching (A2) — wave 10 */
(function () {
var BANK = [
  {
    id: "ket-rmatch10-01",
    title: "Four People Talk About Swimming",
    sections: [
      { label: "A", text: "Nadia: I learned at four and I have swum every week since, which is fourteen years. I am not fast and I have never been in a race. I go on Tuesday evenings and swim for forty minutes, and it is the only forty minutes in my week when nobody can speak to me, which is the actual reason I go." },
      { label: "B", text: "Piotr: I could not swim until I was twenty-six. I had four lessons as an adult in a class of six people, all of them older than thirty, and the teacher was extremely good at not making anybody feel stupid. I can now swim about two hundred metres and I am completely happy with that." },
      { label: "C", text: "Femi: I swim in the sea from May until October, which people here think is normal and people from other towns think is strange. The water is about fifteen degrees in June. I go with a group of about eight and we never stay in for more than fifteen minutes, and there is always somebody watching from the beach." },
      { label: "D", text: "Bea: I swam for a club until I was sixteen: five mornings a week, in the water at half past five, and about eleven hours a week in total. Then I stopped completely for two years, which the coach said happens to about half of them. I now swim twice a week for pleasure and I enjoy it much more." }
    ],
    questions: [
      { q: "Who learned as an adult?", answer: 1, explanation: "B: Piotr could not swim until he was twenty-six." },
      { q: "Who swims outdoors?", answer: 2, explanation: "C: Femi swims in the sea." },
      { q: "Who trained very seriously in the past?", answer: 3, explanation: "D: Bea swam eleven hours a week for a club." },
      { q: "Who has swum regularly since childhood?", answer: 0, explanation: "A: Nadia has swum every week for fourteen years." },
      { q: "Who values the time alone?", answer: 0, explanation: "A: Nobody can speak to her for forty minutes." },
      { q: "Who mentions a good teacher?", answer: 1, explanation: "B: The teacher did not make anybody feel stupid." },
      { q: "Who is careful about safety?", answer: 2, explanation: "C: There is always somebody watching from the beach." },
      { q: "Who stopped for a period?", answer: 3, explanation: "D: Bea stopped completely for two years." },
      { q: "Who is satisfied with a short distance?", answer: 1, explanation: "B: Piotr is happy swimming two hundred metres." },
      { q: "Who enjoys it more now than before?", answer: 3, explanation: "D: Bea enjoys swimming much more now." }
    ]
  },
  {
    id: "ket-rmatch10-02",
    title: "Four Students Talk About Where They Study",
    sections: [
      { label: "A", text: "Ola: I work at the kitchen table with everybody else in the room, which everybody tells me is wrong and which works for me. I think it is because I cannot start doing something else without four people seeing me do it. My marks went down in the year when I had a desk in my own room." },
      { label: "B", text: "Hugo: I go to the town library after school on three days a week. I have the same seat, on the first floor by the window, and if somebody is in it I find it genuinely difficult to settle. That is not a sensible way to be and I have decided not to fight it." },
      { label: "C", text: "Mira: I work in my bedroom with the door shut and music on, which every adult I know says is impossible. I have tested it: I did four practice papers with music and four without, and there was no difference at all in the marks and a large difference in whether I finished them." },
      { label: "D", text: "Sam: I cannot work at home. There are five of us in a small flat and there is nowhere quiet at any time of day. I stay at school until six, in a room that two teachers keep open for exactly this reason, and about fifteen of us are in there every evening." }
    ],
    questions: [
      { q: "Who works where the family is?", answer: 0, explanation: "A: Ola works at the kitchen table." },
      { q: "Who goes to a public building?", answer: 1, explanation: "B: Hugo goes to the town library." },
      { q: "Who listens to music while working?", answer: 2, explanation: "C: Mira works with music on." },
      { q: "Who stays at school?", answer: 3, explanation: "D: Sam stays until six." },
      { q: "Who says having their own desk was worse?", answer: 0, explanation: "A: Ola's marks went down that year." },
      { q: "Who has a particular seat?", answer: 1, explanation: "B: Hugo has the same seat by the window." },
      { q: "Who tested their method?", answer: 2, explanation: "C: Mira did four papers with and four without music." },
      { q: "Who has no quiet space at home?", answer: 3, explanation: "D: There are five people in a small flat." },
      { q: "Who accepts something about themselves rather than changing it?", answer: 1, explanation: "B: Hugo has decided not to fight it." },
      { q: "Who studies with a large group?", answer: 3, explanation: "D: About fifteen students are in the room." }
    ]
  },
  {
    id: "ket-rmatch10-03",
    title: "Four People Talk About Helping at Home",
    sections: [
      { label: "A", text: "Karim: I cook two evenings a week, which started when I was fourteen and which was not my idea. I complained for about two months. I now know how to cook nine things properly and I will be able to feed myself when I leave home, and my sister, who is nineteen and never cooked, cannot." },
      { label: "B", text: "Lucy: I do the washing for the whole family, which is four loads a week. It sounds like a lot and it is about forty minutes of actual work: putting it in, hanging it up and taking it down. My mother did it for years and never once said it was a lot of work, which I now know it is." },
      { label: "C", text: "Theo: My job is the shopping list and the shopping. I check what we have on Thursday evening, write the list and go on Friday after school, which takes about an hour. The list is the part that matters: if the list is wrong, somebody has to go back on Saturday for one thing." },
      { label: "D", text: "Anya: I look after my brother, who is six, between four and six o'clock on three days while my mother is at work. I get him from school, give him something to eat and do his reading with him. It is not a small job and it is the reason I do not do any other job at the moment." }
    ],
    questions: [
      { q: "Who prepares meals?", answer: 0, explanation: "A: Karim cooks two evenings a week." },
      { q: "Who deals with clothes?", answer: 1, explanation: "B: Lucy does the washing." },
      { q: "Who buys the food?", answer: 2, explanation: "C: Theo does the shopping." },
      { q: "Who looks after a child?", answer: 3, explanation: "D: Anya looks after her six-year-old brother." },
      { q: "Who did not want the job at first?", answer: 0, explanation: "A: Karim complained for about two months." },
      { q: "Who says the work is less than it sounds?", answer: 1, explanation: "B: It is about forty minutes of actual work." },
      { q: "Who says one part of the task decides everything?", answer: 2, explanation: "C: If the list is wrong, somebody must go back." },
      { q: "Who cannot take on other work?", answer: 3, explanation: "D: Anya does no other job because of it." },
      { q: "Who compares themselves with a sibling?", answer: 0, explanation: "A: Karim's sister cannot cook." },
      { q: "Who now understands something about a parent?", answer: 1, explanation: "B: Lucy now knows how much work it is." }
    ]
  },
  {
    id: "ket-rmatch10-04",
    title: "Four People Talk About a Competition",
    sections: [
      { label: "A", text: "Ruth: I entered a photography competition in our town last year with a picture of the market on a wet morning. There were about two hundred entries and I did not win anything. My photograph was on the wall of the library for a month with everybody else's, which was the part I had not expected and which was worth much more than a prize." },
      { label: "B", text: "Milo: I was in a school quiz team of four people and we won the county competition in March. We had practised on Tuesday lunchtimes since October, which is about twenty-five hours, and the final took forty minutes. Two of the four of us are not in the same year and we had never spoken before September." },
      { label: "C", text: "Ines: I entered a cake competition at our village fair three times and came second, fourth and second. The woman who wins every year is seventy-eight and has won eleven times, and last summer she told me exactly what I do wrong, in about two sentences, without being asked and without any unkindness at all. I have entered again this year and I have used her advice, and I have not told her that." },
      { label: "D", text: "Ben: I ran a race in my town in April with about six hundred other people. I was not trying to win anything: I was trying to finish in under thirty minutes, which I did not do, and I was eighteen seconds over. I am doing it again this year and that is the whole reason I am still running in January." }
    ],
    questions: [
      { q: "Who entered a photography competition?", answer: 0, explanation: "A: Ruth entered with a picture of the market." },
      { q: "Who was in a team?", answer: 1, explanation: "B: Milo was in a quiz team of four." },
      { q: "Who has entered the same competition several times?", answer: 2, explanation: "C: Ines entered the cake competition three times." },
      { q: "Who had a target rather than a prize in mind?", answer: 3, explanation: "D: Ben wanted to finish in under thirty minutes." },
      { q: "Who did not win but valued the experience?", answer: 0, explanation: "A: Ruth's photograph was displayed for a month." },
      { q: "Who practised for months?", answer: 1, explanation: "B: They practised from October." },
      { q: "Who was given advice by a rival?", answer: 2, explanation: "C: The winner told Ines what she does wrong." },
      { q: "Who missed their target narrowly?", answer: 3, explanation: "D: Ben was eighteen seconds over." },
      { q: "Who worked with people they had not known?", answer: 1, explanation: "B: Two team members had never spoken before September." },
      { q: "Who is still training because of it?", answer: 3, explanation: "D: Ben is still running in January." }
    ]
  },
  {
    id: "ket-rmatch10-05",
    title: "Four People Talk About a Book",
    sections: [
      { label: "A", text: "Iris: The book I always mention is one I read at eleven and have read four times since. It is not a difficult book and I would not say it is the best book I have read. It is the one that made me a person who reads, and I can still remember exactly where I was sitting when I finished it." },
      { label: "B", text: "Dan: I did not read anything at all outside school until I was seventeen. A friend lent me a book about a man walking across a country, and I read it in five days, and I have read about twenty since. I still read slowly and I have stopped thinking that this matters." },
      { label: "C", text: "Su: I read the same book every January. It is about four hundred pages and I have done this for six years, and it is different each time, which sounds impossible and is completely true. Last January I noticed something on page two hundred that I had not seen in five previous readings." },
      { label: "D", text: "Elias: The book I remember most is one I did not finish. I read about a hundred and forty pages, put it down in 2022 and have not picked it up again, and I still think about it about once a month. I am not sure whether I will finish it and I have kept it on the shelf." }
    ],
    questions: [
      { q: "Who read a book that changed their habits?", answer: 0, explanation: "A: It made Iris a person who reads." },
      { q: "Who started reading late?", answer: 1, explanation: "B: Dan read nothing outside school until seventeen." },
      { q: "Who rereads the same book yearly?", answer: 2, explanation: "C: Su reads it every January." },
      { q: "Who did not finish a book?", answer: 3, explanation: "D: Elias stopped after a hundred and forty pages." },
      { q: "Who was given the book by a friend?", answer: 1, explanation: "B: A friend lent it to Dan." },
      { q: "Who noticed something new on a later reading?", answer: 2, explanation: "C: Su noticed something on page two hundred." },
      { q: "Who remembers the moment of finishing?", answer: 0, explanation: "A: Iris remembers where she was sitting." },
      { q: "Who still thinks about the book regularly?", answer: 3, explanation: "D: Elias thinks about it about once a month." },
      { q: "Who is not troubled by reading slowly?", answer: 1, explanation: "B: Dan has stopped thinking that it matters." },
      { q: "Who has kept the book without reading it?", answer: 3, explanation: "D: Elias has kept it on the shelf." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
