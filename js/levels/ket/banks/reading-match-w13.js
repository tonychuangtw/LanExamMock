/* KET Prep bank: Reading multiple matching (A2) — wave 13 */
(function () {
var BANK = [
  {
    id: "ket-rmatch13-01",
    title: "Four People Talk About a Teacher They Remember",
    sections: [
      { label: "A", text: "Nell: Mine was a mathematics teacher in Year 8 who used to write a question on the board at the start of the lesson and say nothing for four minutes. Nobody was allowed to speak. I hated it for a term and then discovered that I could do things in those four minutes that I could not do when somebody was explaining." },
      { label: "B", text: "Ade: My teacher in Year 5 read to the class for fifteen minutes every day after lunch, whatever else was happening that week. She did the voices. I could not read well at that age and I did not tell anybody, and those fifteen minutes are the reason I found out that books are worth the difficulty." },
      { label: "C", text: "Marta: Mine was a chemistry teacher who told us, in the first lesson, that she would be wrong about something roughly once a fortnight and that the first person to prove it would be thanked. I proved it once, in two years, and she stopped the lesson and thanked me in front of everybody." },
      { label: "D", text: "Femi: Mine did not teach me anything academic. He ran the football team and he was the first adult outside my family who told me that I was good at something, which I did not believe at the time and which changed how I behaved in every other lesson within about a year." }
    ],
    questions: [
      { q: "Whose teacher used silence in lessons?", answer: 0, explanation: "A: The teacher said nothing for four minutes." },
      { q: "Whose teacher read aloud?", answer: 1, explanation: "B: She read to the class for fifteen minutes daily." },
      { q: "Whose teacher admitted making mistakes?", answer: 2, explanation: "C: She said she would be wrong about once a fortnight." },
      { q: "Whose teacher was not teaching a subject?", answer: 3, explanation: "D: Femi's teacher ran the football team." },
      { q: "Who disliked the method at first?", answer: 0, explanation: "A: Nell hated it for a term." },
      { q: "Who had a difficulty they kept hidden?", answer: 1, explanation: "B: Ade could not read well and told nobody." },
      { q: "Who was thanked publicly?", answer: 2, explanation: "C: She thanked Marta in front of everybody." },
      { q: "Who changed their behaviour in other lessons?", answer: 3, explanation: "D: It changed how Femi behaved within a year." },
      { q: "Who mentions a daily routine?", answer: 1, explanation: "B: It happened every day after lunch." },
      { q: "Who found they worked better without explanation?", answer: 0, explanation: "A: Nell could do things she could not do when somebody explained." }
    ]
  },
  {
    id: "ket-rmatch13-02",
    title: "Four People Talk About Where They Live Now",
    sections: [
      { label: "A", text: "Bea: I live in a village of about four hundred people with one shop, one pub and a bus that comes six times a day. Everybody knows everybody, which is exactly as good and exactly as difficult as people say. I moved here from a city four years ago and I am not going back, and I understand completely why my sister could not live here." },
      { label: "B", text: "Tomas: I live in a city of two million and I like the fact that I can be completely anonymous. I have lived in the same flat for six years and I know two of my neighbours slightly. Everything I need is within about eleven minutes' walk and I have not owned a car since 2019." },
      { label: "C", text: "Ines: I live in a town of about thirty thousand, which is the size that nobody writes about. There is a supermarket, a cinema with two screens, a hospital and a train station. It is not exciting and I have everything I actually use within two kilometres, and my rent is half what my cousin pays." },
      { label: "D", text: "Jon: I live about six kilometres outside a small town, on a road with four houses on it. The nearest shop is a fifteen-minute drive. It suits two of us in this house and it does not suit my son, who is fifteen and cannot go anywhere without somebody driving him, and that is a real problem that we have not solved." }
    ],
    questions: [
      { q: "Who lives in a very small community?", answer: 0, explanation: "A: Bea's village has about four hundred people." },
      { q: "Who lives in a large city?", answer: 1, explanation: "B: Tomas lives in a city of two million." },
      { q: "Who lives in a medium-sized town?", answer: 2, explanation: "C: Ines's town has about thirty thousand people." },
      { q: "Who lives outside a town?", answer: 3, explanation: "D: Jon lives six kilometres outside a small town." },
      { q: "Who values not being known?", answer: 1, explanation: "B: Tomas likes being completely anonymous." },
      { q: "Who mentions cheaper housing?", answer: 2, explanation: "C: Ines's rent is half her cousin's." },
      { q: "Whose family member finds it difficult?", answer: 3, explanation: "D: Jon's son cannot go anywhere without a lift." },
      { q: "Who understands why others would not like it?", answer: 0, explanation: "A: Bea understands why her sister could not live there." },
      { q: "Who does not own a car?", answer: 1, explanation: "B: Tomas has not owned a car since 2019." },
      { q: "Who says the place is not exciting?", answer: 2, explanation: "C: Ines says it is not exciting." }
    ]
  },
  {
    id: "ket-rmatch13-03",
    title: "Four People Talk About a Hobby That Costs Nothing",
    sections: [
      { label: "A", text: "Ola: I walk. That is the whole hobby. I have walked about four hundred kilometres of paths within twenty kilometres of this town, I use a map that cost nine pounds in 2019, and the only thing I have spent money on since is boots, which I would need anyway because I walk everywhere." },
      { label: "B", text: "Ravi: I draw. I use a pencil and whatever paper is in the house, including the backs of letters, and I have filled about eleven notebooks in four years. People assume that drawing requires equipment and it requires a pencil, and my drawings got better when I stopped buying things and started doing it every day." },
      { label: "C", text: "Sara: I identify birds. I use my eyes, a pair of my grandfather's binoculars from about 1980 and a library book that I renew every three weeks. I have identified sixty-one species without leaving this town, which surprised me a great deal more than it surprises anybody I tell about it. I write each new one in the back of a notebook with the date and the place, and there are three that I have seen only once." },
      { label: "D", text: "Bo: I read, and everything I read comes from the library or from a free shelf outside a shop on the high street. I have read about ninety books in two years and I have bought two. The library also lends films and music, which about half the people I know do not realise." }
    ],
    questions: [
      { q: "Whose hobby involves going for long distances?", answer: 0, explanation: "A: Ola has walked about four hundred kilometres of paths." },
      { q: "Who makes things on paper?", answer: 1, explanation: "B: Ravi draws with a pencil." },
      { q: "Who watches wildlife?", answer: 2, explanation: "C: Sara identifies birds." },
      { q: "Who borrows almost everything?", answer: 3, explanation: "D: Bo gets books from the library or a free shelf." },
      { q: "Who uses equipment inherited from a relative?", answer: 2, explanation: "C: The binoculars were her grandfather's." },
      { q: "Who improved by practising daily?", answer: 1, explanation: "B: Ravi got better when he did it every day." },
      { q: "Who mentions a map?", answer: 0, explanation: "A: Ola uses a map that cost nine pounds." },
      { q: "Who says other people do not know about a service?", answer: 3, explanation: "D: Half the people Bo knows do not know the library lends films." },
      { q: "Who was surprised by their own total?", answer: 2, explanation: "C: Sixty-one species surprised Sara." },
      { q: "Who uses whatever materials are available at home?", answer: 1, explanation: "B: Ravi uses the backs of letters." }
    ]
  },
  {
    id: "ket-rmatch13-04",
    title: "Four People Talk About Learning to Drive",
    sections: [
      { label: "A", text: "Priya: I passed at seventeen after thirty-one lessons, which is about average, and I failed once. The reason I failed was a roundabout that I had practised about forty times and got wrong on the day. I drove almost every day for the first year, which my instructor said is the only thing that turns a test pass into a driver." },
      { label: "B", text: "Karl: I learned at forty-three and the difficult part was nothing to do with the car. It was being a beginner in front of a stranger at an age when I am good at my job and used to knowing what I am doing. My instructor was twenty-six and extremely good at not noticing when I was embarrassed." },
      { label: "C", text: "Femi: I have had eleven lessons and I have stopped for now, because it costs thirty-eight pounds an hour here and I cannot do it properly at one lesson a month. My instructor said, honestly, that it would be cheaper to wait a year and do it in three months than to spread it over two years." },
      { label: "D", text: "Ines: I passed nine years ago and I have driven perhaps four times since, all of them in the first year. I live in a city, I do not own a car and I do not need one, and I have kept the licence and I am aware that I could not safely drive on a motorway tomorrow." }
    ],
    questions: [
      { q: "Who failed the test once?", answer: 0, explanation: "A: Priya failed once because of a roundabout." },
      { q: "Who learned as an older adult?", answer: 1, explanation: "B: Karl learned at forty-three." },
      { q: "Who has paused their lessons?", answer: 2, explanation: "C: Femi has stopped for now." },
      { q: "Who rarely drives now?", answer: 3, explanation: "D: Ines has driven about four times in nine years." },
      { q: "Who found being a beginner uncomfortable?", answer: 1, explanation: "B: Karl found being a beginner in front of a stranger hard." },
      { q: "Who received honest advice about cost?", answer: 2, explanation: "C: The instructor advised waiting a year." },
      { q: "Who drove a great deal after passing?", answer: 0, explanation: "A: Priya drove almost every day for a year." },
      { q: "Who admits they would not be safe now?", answer: 3, explanation: "D: Ines could not safely drive on a motorway tomorrow." },
      { q: "Who mentions the price of a lesson?", answer: 2, explanation: "C: It costs thirty-eight pounds an hour." },
      { q: "Whose instructor was much younger?", answer: 1, explanation: "B: Karl's instructor was twenty-six." }
    ]
  },
  {
    id: "ket-rmatch13-05",
    title: "Four People Talk About Something That Broke",
    sections: [
      { label: "A", text: "Mira: Our washing machine stopped in January, four days after the guarantee ended, which everybody says happens and which happened. A man came, said it was one part, and fixed it for ninety pounds. It is now three years old and works perfectly, and I would have replaced it if he had not told me the part was cheap." },
      { label: "B", text: "Otto: My laptop stopped charging in the middle of an examination year. My school lends laptops to students who need one and I did not know that, because it is not advertised, and I found out from a friend. I had one within two days and I gave it back in July with a note." },
      { label: "C", text: "Sanne: The heating in our flat failed in December and the landlord did not answer for four days. My mother telephoned a council office and was told exactly what to write in an email, including one sentence about the law, and the heating was repaired within twenty-four hours of that email being sent." },
      { label: "D", text: "Ben: My bicycle chain broke eleven kilometres from home on a Sunday. I did not have a tool and I did not know how to fix it anyway. I walked for two hours and then a man in a van stopped, put the bicycle in the back and drove me the last four kilometres without being asked." }
    ],
    questions: [
      { q: "Whose machine broke just after the guarantee?", answer: 0, explanation: "A: It stopped four days after the guarantee ended." },
      { q: "Who borrowed equipment?", answer: 1, explanation: "B: Otto borrowed a laptop from school." },
      { q: "Who had a problem with a landlord?", answer: 2, explanation: "C: Sanne's landlord did not answer for four days." },
      { q: "Who was helped by a stranger?", answer: 3, explanation: "D: A man in a van drove Ben the last four kilometres." },
      { q: "Who found out about a service by chance?", answer: 1, explanation: "B: Otto found out from a friend." },
      { q: "Who was told exactly what to write?", answer: 2, explanation: "C: A council office told her mother what to put in the email." },
      { q: "Who nearly replaced something that could be repaired?", answer: 0, explanation: "A: Mira would have replaced the machine." },
      { q: "Who had to walk a long way?", answer: 3, explanation: "D: Ben walked for two hours." },
      { q: "Who returned the borrowed item?", answer: 1, explanation: "B: Otto gave the laptop back in July." },
      { q: "Whose problem was solved within a day of one action?", answer: 2, explanation: "C: The heating was repaired within twenty-four hours of the email." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
