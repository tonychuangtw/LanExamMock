/* KET Prep bank: Reading multiple matching (A2) — wave 11 */
(function () {
var BANK = [
  {
    id: "ket-rmatch11-01",
    title: "Four People Talk About Getting to Work",
    sections: [
      { label: "A", text: "Rita: I walk, which takes twenty-eight minutes each way, and I have done it for six years in every kind of weather. I have a good coat and boots and I have never once taken a bus instead. My colleagues think this is remarkable and it is simply that I live two and a half kilometres from the office and there is a pavement all the way." },
      { label: "B", text: "Dmitri: I drive nineteen kilometres and it takes between twenty-five minutes and an hour and ten, depending entirely on one roundabout. I leave at six forty to avoid it. That means I am at my desk fifty minutes before I need to be, and I read in the car park, which I have decided is better than sitting in traffic." },
      { label: "C", text: "Ellen: I work at home four days a week and go into the office on Wednesdays, which is a ninety-minute train journey each way. I know that sounds a long way for one day. It is much better than doing it five times, and on the train I do the reading that I cannot do at home with two children in the house." },
      { label: "D", text: "Bo: I cycle six kilometres along a river path with no roads on it at all, which is the reason I took this job rather than one that pays more. It takes twenty-two minutes, it is the same in the dark with lights, and I have not been in a car on a working day since 2021." }
    ],
    questions: [
      { q: "Who walks to work?", answer: 0, explanation: "A: Rita walks twenty-eight minutes each way." },
      { q: "Who drives?", answer: 1, explanation: "B: Dmitri drives nineteen kilometres." },
      { q: "Who mostly works at home?", answer: 2, explanation: "C: Ellen works at home four days a week." },
      { q: "Who cycles?", answer: 3, explanation: "D: Bo cycles six kilometres." },
      { q: "Who arrives very early on purpose?", answer: 1, explanation: "B: Dmitri leaves at six forty to avoid the roundabout." },
      { q: "Who chose the job partly because of the journey?", answer: 3, explanation: "D: Bo took this job rather than one that pays more." },
      { q: "Who uses the journey to read?", answer: 2, explanation: "C: Ellen reads on the train." },
      { q: "Who says the distance is short?", answer: 0, explanation: "A: Rita lives two and a half kilometres away." },
      { q: "Whose journey time varies a great deal?", answer: 1, explanation: "B: It takes between twenty-five minutes and an hour and ten." },
      { q: "Who travels a long way but rarely?", answer: 2, explanation: "C: Ellen's ninety-minute journey happens once a week." }
    ]
  },
  {
    id: "ket-rmatch11-02",
    title: "Four People Talk About Learning a Language",
    sections: [
      { label: "A", text: "Jonas: I am learning Italian because my wife's family is Italian and nobody in that family under sixty speaks much English. I have been doing it for three years. I can follow a conversation at a table and I cannot join it, which is the most frustrating stage and which I am told everybody spends about two years in." },
      { label: "B", text: "Mei: I learned English at school for eight years and could not speak it at all when I arrived here at twenty-two. What changed everything was working in a café, where I had to speak to about two hundred people a day and where nobody had time to wait for me to say something perfectly." },
      { label: "C", text: "Sara: I do fifteen minutes of Greek every morning on an app and I have done it for four hundred and eleven days without missing one. I can read menus and signs and I cannot have a conversation, and I am aware that this is a limit of the method and I am doing it anyway." },
      { label: "D", text: "Peter: I go to a class on Monday evenings with eleven other people, all of us over fifty. We are learning Spanish and none of us is fast. What the class actually gives us is other beginners: nobody in that room minds being wrong, which is the whole difficulty when you learn as an adult." }
    ],
    questions: [
      { q: "Who is learning because of family?", answer: 0, explanation: "A: Jonas's wife's family is Italian." },
      { q: "Who learned mainly through work?", answer: 1, explanation: "B: Mei learned by working in a café." },
      { q: "Who uses an app every day?", answer: 2, explanation: "C: Sara does fifteen minutes each morning." },
      { q: "Who attends a class with others?", answer: 3, explanation: "D: Peter goes to a Monday evening class." },
      { q: "Who can understand more than they can say?", answer: 0, explanation: "A: Jonas can follow a conversation but not join it." },
      { q: "Who says school lessons did not make them fluent?", answer: 1, explanation: "B: Mei could not speak after eight years at school." },
      { q: "Who knows the limits of their method?", answer: 2, explanation: "C: Sara is aware this is a limit of the app." },
      { q: "Who values being among other beginners?", answer: 3, explanation: "D: Nobody in the room minds being wrong." },
      { q: "Who had to speak quickly and imperfectly?", answer: 1, explanation: "B: Nobody had time to wait for perfect sentences." },
      { q: "Who has kept up a daily habit for over a year?", answer: 2, explanation: "C: Sara has done 411 days without missing one." }
    ]
  },
  {
    id: "ket-rmatch11-03",
    title: "Four People Talk About Clothes",
    sections: [
      { label: "A", text: "Ines: I wear more or less the same thing every day: dark trousers, a plain shirt and one of two jumpers. It is not a fashion decision. It is that I make about four hundred decisions before ten o'clock in my job and I am not willing to make another one at seven in the morning about a shirt." },
      { label: "B", text: "Cal: I buy almost everything second-hand and I have done since I was sixteen. There is a shop in our town that gets new stock on Thursdays and I go about twice a month. Two things I am wearing today cost four pounds together, and one of them is a make that I could not afford new." },
      { label: "C", text: "Priya: I make about a third of my own clothes. I started with a machine that belonged to my grandmother and a very bad skirt, and I have made about forty things since. The difference is fit: I am short and everything I buy in a shop needs shortening anyway, so I might as well make it." },
      { label: "D", text: "Tom: I own eleven items of clothing that are not for work and I know that because I counted them in January. I did not set out to have few things. I simply stopped replacing anything until it wore out, which was four years ago, and the number has gone down every year since." }
    ],
    questions: [
      { q: "Who wears the same kind of outfit daily?", answer: 0, explanation: "A: Ines wears more or less the same thing every day." },
      { q: "Who buys used clothes?", answer: 1, explanation: "B: Cal buys almost everything second-hand." },
      { q: "Who makes clothes?", answer: 2, explanation: "C: Priya makes about a third of her clothes." },
      { q: "Who owns very few clothes?", answer: 3, explanation: "D: Tom owns eleven non-work items." },
      { q: "Who explains it in terms of decisions?", answer: 0, explanation: "A: Ines does not want another decision at seven in the morning." },
      { q: "Who visits a shop regularly on a particular day?", answer: 1, explanation: "B: The shop gets new stock on Thursdays." },
      { q: "Who mentions a problem with fit?", answer: 2, explanation: "C: Priya is short and shop clothes need shortening." },
      { q: "Who did not plan the situation?", answer: 3, explanation: "D: Tom did not set out to have few things." },
      { q: "Who inherited equipment?", answer: 2, explanation: "C: The machine belonged to her grandmother." },
      { q: "Who mentions paying very little?", answer: 1, explanation: "B: Two items cost four pounds together." }
    ]
  },
  {
    id: "ket-rmatch11-04",
    title: "Four People Talk About a Job They Would Like",
    sections: [
      { label: "A", text: "Ravi: I want to be a nurse and I have wanted to since I was eleven, when my grandfather was in hospital for three weeks and I visited about ten times. I know the training is three years and I know what the pay is, because I have looked it up, and neither of those things has changed my mind." },
      { label: "B", text: "Nell: I would like to work outside and I do not yet know doing what. I have looked at forestry, at gardening for a council and at working on a farm, and the thing all three have in common is the only part I am sure about. I am seventeen and I think that not knowing the job yet is fine." },
      { label: "C", text: "Bo: I want to repair things. I am doing an apprenticeship with a company that services heating systems, which is four days working and one day at college, and I will be qualified in three years. My teachers wanted me to stay at school and two of them have since told me it was the right decision." },
      { label: "D", text: "Ada: I would like to teach primary school children, and I have been helping at a school on Friday afternoons for a year to find out whether that is true. It is much harder than it looks and I still want to do it, which is more useful information than anything anybody could have told me." }
    ],
    questions: [
      { q: "Who has wanted the same job for years?", answer: 0, explanation: "A: Ravi has wanted to be a nurse since he was eleven." },
      { q: "Who knows the type of work but not the job?", answer: 1, explanation: "B: Nell wants to work outside but does not know doing what." },
      { q: "Who has already started training?", answer: 2, explanation: "C: Bo is doing an apprenticeship." },
      { q: "Who is testing their idea by helping out?", answer: 3, explanation: "D: Ada helps at a school on Fridays." },
      { q: "Who has researched the pay?", answer: 0, explanation: "A: Ravi has looked up the pay." },
      { q: "Who is comfortable with not deciding yet?", answer: 1, explanation: "B: Nell thinks not knowing at seventeen is fine." },
      { q: "Who went against a teacher's advice?", answer: 2, explanation: "C: Bo's teachers wanted him to stay at school." },
      { q: "Who found the work harder than expected?", answer: 3, explanation: "D: Ada found it much harder than it looks." },
      { q: "Who mentions a hospital visit?", answer: 0, explanation: "A: Ravi visited his grandfather about ten times." },
      { q: "Who studies one day a week?", answer: 2, explanation: "C: Bo has one day at college." }
    ]
  },
  {
    id: "ket-rmatch11-05",
    title: "Four People Talk About a Holiday That Went Wrong",
    sections: [
      { label: "A", text: "Sofia: Our flight was cancelled and we spent the first two days of a week's holiday in an airport hotel eleven kilometres from an airport we did not want to be at. The company paid for the hotel and the food. We got five days instead of seven and my father says it is the holiday the family talks about most." },
      { label: "B", text: "Marek: It rained for nine days out of ten. We were camping. On the fourth day we moved into a small hotel in the same town, which cost money we had not planned to spend, and we played about forty games of cards. My brother won thirty-one of them, which he still mentions." },
      { label: "C", text: "Alice: I was ill for the whole week, from the second morning. It was nothing serious and I spent five days in an apartment with a book while everybody else went out, and they came back every lunchtime and told me about it, which was kind and which was not the same." },
      { label: "D", text: "Kwame: We booked an apartment that did not exist. We arrived at eleven at night at an address that was a building site, with two children, and my mother spent forty minutes on the telephone and found somewhere at midnight. We got our money back four months later after eleven emails." }
    ],
    questions: [
      { q: "Whose transport was cancelled?", answer: 0, explanation: "A: Sofia's flight was cancelled." },
      { q: "Whose holiday was ruined by weather?", answer: 1, explanation: "B: It rained for nine days out of ten." },
      { q: "Who was unwell?", answer: 2, explanation: "C: Alice was ill for the whole week." },
      { q: "Whose accommodation did not exist?", answer: 3, explanation: "D: Kwame's apartment was a building site." },
      { q: "Who had to spend unplanned money?", answer: 1, explanation: "B: The hotel cost money they had not planned to spend." },
      { q: "Who says the family talks about it most?", answer: 0, explanation: "A: Sofia's father says so." },
      { q: "Who was told about the days by others?", answer: 2, explanation: "C: The family came back and told Alice about it." },
      { q: "Who eventually got a refund?", answer: 3, explanation: "D: They got their money back after eleven emails." },
      { q: "Who mentions a sibling winning?", answer: 1, explanation: "B: Marek's brother won thirty-one games." },
      { q: "Who arrived very late at night?", answer: 3, explanation: "D: Kwame's family arrived at eleven at night." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
