/* FCE Prep bank: Reading multiple matching (B2) — wave 8 */
(function () {
var BANK = [
  {
    id: "fce-rmatch8-01",
    title: "Four People on Their First Month in a New Job",
    sections: [
      { label: "A", text: "Ines: I joined an organisation of nine thousand people and spent most of my first three weeks unable to open anything. My account existed but had the wrong permissions, the request to correct it went to a team that answers within five working days, and each correction revealed the next missing one. Nobody was at fault and everybody was sympathetic. What I learned, and what I would tell anybody starting somewhere that size, is that you have to ask the same question of three different people, because no single person knows the whole route through it." },
      { label: "B", text: "Rob: I went from a company of four hundred to one of six, and the difference is not the culture, it is that there is nobody whose job includes explaining anything. There was no induction, no handbook and no first-week meeting, because none of those exist when everybody is doing two jobs already. I was given a live client on the second day. It was terrifying and it was also, I now think, the fastest four weeks of learning I have ever had, and I would not repeat it voluntarily." },
      { label: "C", text: "Wen: I moved from one department to another inside the same employer, which everybody treats as a small event and which is not. I knew the building, the systems and the people, so nobody told me anything, and there is a great deal in a new team that is never written down. I spent a month being assumed to know things that I did not know, and being unable to ask without appearing to have wasted the last six years." },
      { label: "D", text: "Aled: I started remotely in the February and did not meet a single colleague in person until the middle of March. The work itself transferred perfectly well; what did not transfer was everything people say when they are not addressing you. I could not hear the conversation two desks away that tells you which project is in trouble, who to avoid on a Friday, and what the thing everybody groans about actually is. I asked for a written handbook and was told, correctly, that it would not contain any of that." }
    ],
    questions: [
      { q: "Who could not use the systems for several weeks?", answer: 0, explanation: "A: Ines spent three weeks unable to open anything because of permissions." },
      { q: "Who moved between departments within the same employer?", answer: 2, explanation: "C: Wen moved from one department to another inside the same organisation." },
      { q: "Who did not meet colleagues face to face at the start?", answer: 3, explanation: "D: Aled started remotely and met nobody in person until the middle of March." },
      { q: "Who was given real work almost immediately?", answer: 1, explanation: "B: Rob was given a live client on the second day." },
      { q: "Who found that people assumed knowledge they did not have?", answer: 2, explanation: "C: Wen was assumed to know things and could not ask without seeming foolish." },
      { q: "Who advises asking the same question of several people?", answer: 0, explanation: "A: Ines says you must ask three different people because nobody knows the whole route." },
      { q: "Who received no formal introduction of any kind?", answer: 1, explanation: "B: Rob says there was no induction, handbook or first-week meeting." },
      { q: "Who missed the information colleagues pass on informally?", answer: 3, explanation: "D: Aled could not hear the conversation two desks away." },
      { q: "Who came from a much larger organisation?", answer: 1, explanation: "B: Rob went from a company of four hundred to one of six." },
      { q: "Who says the size of the organisation was itself the difficulty?", answer: 0, explanation: "A: Ines describes the problems of starting somewhere with nine thousand people." }
    ]
  },
  {
    id: "fce-rmatch8-02",
    title: "Four People on Working From Home",
    sections: [
      { label: "A", text: "Priya: I have worked at home full time for four years and the single thing that made it sustainable was a door. For the first eighteen months I worked at a desk in the bedroom and I was still answering messages at ten at night, not because anybody expected it but because the laptop was there and the day had no edge to it. We converted the smallest bedroom in 2023. I now finish, close a door, and the difference that one physical act makes is out of all proportion to the cost of it." },
      { label: "B", text: "Marcus: I am in the office on Tuesdays and Wednesdays and at home for the rest, and my strong view after three years is that hybrid working fails or succeeds on one question, which is whether the team comes in on the same days. A day in an office where four of the six people you need are at home is a commute for the privilege of using a worse chair. Ours are fixed by agreement, everybody grumbled about it for a month, and nobody now wants it changed." },
      { label: "C", text: "Ellie: I live by myself and for the first year of home working I would occasionally realise at nine in the evening that I had not spoken aloud to another human being since the previous morning. That is not a complaint about the work; it is a description of what happens when you remove the incidental part of a day. I now rent a desk in a shared building for two days a week, which costs me about a hundred and ten pounds a month and is the best money I spend." },
      { label: "D", text: "Sam: We have a two-bedroom flat, two children under six and no room that is not shared, so I work at the kitchen table with a pair of headphones that cost more than the table did. On school holidays it is not workable at all and I take leave or work at seven in the morning. I do not want to go back to five days in an office and I would like it recorded that working from home is a very different arrangement depending on how many rooms you have." }
    ],
    questions: [
      { q: "Who has no separate space to work in?", answer: 3, explanation: "D: Sam works at the kitchen table in a flat with no spare room." },
      { q: "Who says office days only work if the team attends together?", answer: 1, explanation: "B: Marcus says hybrid working depends on whether the team comes in on the same days." },
      { q: "Who pays to work somewhere other than home?", answer: 2, explanation: "C: Ellie rents a desk in a shared building for two days a week." },
      { q: "Who found that a physical change solved the problem?", answer: 0, explanation: "A: Priya says a door, and finishing behind it, made home working sustainable." },
      { q: "Who had difficulty stopping work in the evening?", answer: 0, explanation: "A: Priya was answering messages at ten at night because the laptop was there." },
      { q: "Who lives alone?", answer: 2, explanation: "C: Ellie says she lives by herself." },
      { q: "Who is interrupted by family during the working day?", answer: 3, explanation: "D: Sam has two children under six and says school holidays are unworkable." },
      { q: "Who works from home every day?", answer: 0, explanation: "A: Priya has worked at home full time for four years." },
      { q: "Who divides the week between two places?", answer: 1, explanation: "B: Marcus is in the office on Tuesdays and Wednesdays." },
      { q: "Who describes going a long time without speaking to anyone?", answer: 2, explanation: "C: Ellie would realise she had not spoken aloud since the previous morning." }
    ]
  },
  {
    id: "fce-rmatch8-03",
    title: "Four People Who Gave Something Up",
    sections: [
      { label: "A", text: "Ravi: I stopped drinking three years ago and the alcohol was the easy part. What I was not prepared for was that other people require an explanation, that a short answer is treated as evasive and a long one as a lecture, and that this happens at every new social occasion for the first year and a half. I have four answers now, calibrated by setting. I should also say that the benefit I had been promised, which is sleep, did not arrive for about five months." },
      { label: "B", text: "Chloe: I came off social media in the January of last year and the first fortnight was genuinely unpleasant, in the way that stopping any habit is, after which it simply stopped being a subject. What I did lose, and had not anticipated at all, is local information: the fete, the road closure, the fact that the pharmacy had moved. All of that now lives in two village groups that I am not in, and there is no other route to it. I have not solved this and I am not going back." },
      { label: "C", text: "Bea: I got rid of the television in 2019 and the honest consequence is that I read about forty books a year instead of about six. The awkward consequence is at work, where a substantial part of ordinary conversation is programmes, and I have nothing to contribute and have learned not to explain why, because explaining why sounds like a criticism of everybody in the room. I do keep a projector in a cupboard and watch a film with friends about once a month, which I regard as within the rules." },
      { label: "D", text: "Owen: I played rugby from the age of nine until I was thirty-four, when a shoulder injury made the decision for me over about six weeks. I had expected to miss the matches. What actually happened was that I had no idea who I was on a Saturday, having spent twenty-five years knowing exactly where I would be and who with, and that took considerably longer to sort out than the shoulder did." }
    ],
    questions: [
      { q: "Who found other people's reactions harder than the change itself?", answer: 0, explanation: "A: Ravi says the alcohol was easy and that others requiring explanations was not." },
      { q: "Who lost access to local information?", answer: 1, explanation: "B: Chloe no longer hears about the fete, road closures or the pharmacy moving." },
      { q: "Who reads a great deal more than before?", answer: 2, explanation: "C: Bea reads about forty books a year instead of six." },
      { q: "Who stopped because of a physical problem?", answer: 3, explanation: "D: Owen stopped playing because of a shoulder injury." },
      { q: "Who felt they had lost part of their identity?", answer: 3, explanation: "D: Owen had no idea who he was on a Saturday." },
      { q: "Who has prepared several different answers for the same question?", answer: 0, explanation: "A: Ravi has four answers calibrated by setting." },
      { q: "Who found the first two weeks the worst?", answer: 1, explanation: "B: Chloe says the first fortnight was genuinely unpleasant." },
      { q: "Who cannot take part in a common topic of conversation at work?", answer: 2, explanation: "C: Bea has nothing to contribute when colleagues discuss programmes." },
      { q: "Who says the expected benefit took months to appear?", answer: 0, explanation: "A: Ravi says the promised improvement in sleep did not arrive for about five months." },
      { q: "Who allows themselves one regular exception?", answer: 2, explanation: "C: Bea watches a film with friends about once a month using a projector." }
    ]
  },
  {
    id: "fce-rmatch8-04",
    title: "Four People Looking After an Older Relative",
    sections: [
      { label: "A", text: "Nadia: My mother moved in with us in 2022 and the practical side has been much easier to arrange than I expected: the equipment, the adaptations, the carer who comes at eight. What nobody tells you about is the other thing, which is that there is now no room in this house in which my husband and I can have a disagreement. I would not undo the decision. I would also say that the two hours between four and six, when she and my daughter watch something together, are the best part of my week." },
      { label: "B", text: "Joe: My father is ninety miles away and will not move, which is his right and which shapes my entire year. I drive up every second weekend and I am, in between, permanently listening for the telephone. It is not the driving that is difficult, although it is four hours of a Saturday. It is that a call at an unexpected hour produces a physical reaction that I cannot talk myself out of and that has not lessened in three years." },
      { label: "C", text: "Sara: There are three of us and we have a rota, which sounds organised and which is the source of every argument this family has had since 2021. My brother does two weekends a month and regards that as equal to my three afternoons a week. He is not being unreasonable; the two things simply cannot be compared. We have stopped trying to make it fair and now aim for something lower, which is that nobody feels they are being taken for a fool." },
      { label: "D", text: "Ken: I have looked after my wife since 2014, which is eleven years, and I do not use the word carer about myself and would rather other people did not either. I understand why the word exists and why services need it. It is simply that we have been married for fifty-one years and this is one of the arrangements within that, in the way that her doing all the driving after my eyes went was another one." }
    ],
    questions: [
      { q: "Who travels a considerable distance regularly?", answer: 1, explanation: "B: Joe drives ninety miles every second weekend." },
      { q: "Who shares the responsibility with other family members?", answer: 2, explanation: "C: Sara is one of three siblings operating a rota." },
      { q: "Who objects to the usual word for what they do?", answer: 3, explanation: "D: Ken does not use the word carer about himself." },
      { q: "Who has lost private space at home?", answer: 0, explanation: "A: Nadia says there is no room where she and her husband can disagree." },
      { q: "Who reacts physically to an unexpected phone call?", answer: 1, explanation: "B: Joe describes a physical reaction to a call at an unexpected hour." },
      { q: "Who says organising the schedule causes disagreements?", answer: 2, explanation: "C: Sara says the rota is the source of every family argument." },
      { q: "Who mentions something they enjoy about the arrangement?", answer: 0, explanation: "A: Nadia describes the two hours between four and six as the best part of her week." },
      { q: "Who has been doing this for the longest time?", answer: 3, explanation: "D: Ken has looked after his wife since 2014, which is eleven years." },
      { q: "Who found the practical arrangements easier than expected?", answer: 0, explanation: "A: Nadia says the equipment, adaptations and carer were easy to arrange." },
      { q: "Who has given up trying to make the division equal?", answer: 2, explanation: "C: Sara says they have stopped trying to make it fair." }
    ]
  },
  {
    id: "fce-rmatch8-05",
    title: "Four People Who Took a Year Out",
    sections: [
      { label: "A", text: "Lena: I worked in a hotel in Austria for eight months and then in a bar in the same town for three more, and I came home in the September with four thousand pounds and absolutely no idea what to do next. The money was the point and the money turned out to be the least useful thing about it. If I were advising anybody, I would tell them to decide before they go what the last month of the year is for, because the first month organises itself and the last one does not." },
      { label: "B", text: "Idris: Mine was not a choice. My mother was ill in the spring of what should have been my first year, I deferred, and I spent eleven months at home doing the school run for my sister and learning how a hospital appointment system works. People say gap year to me and I let it stand. What it did do, and this is not a consolation, is change my subject: I applied for medicine at the end of it, having applied for economics at the beginning." },
      { label: "C", text: "Mia: I travelled for seven months, mostly alone, mostly in South America, and the photographs are excellent. What the photographs do not contain is the fortnight in Bolivia when I did not have a conversation of more than four sentences with anybody and seriously considered coming home. I am glad I did not, I would do it again, and I think somebody should tell people beforehand that travelling alone contains long periods in which the only thing happening is that you are on your own." },
      { label: "D", text: "Ben: I stayed in my home town, worked in a distribution warehouse from six in the morning, and saved almost everything. It was the dullest year of my life by a considerable distance and it is the one I would repeat. I started university with no debt on top of the loan, an entirely accurate idea of what a forty-hour week feels like, and a slightly reduced tolerance for people who describe warehouse work as unskilled." }
    ],
    questions: [
      { q: "Who did not choose to take the year?", answer: 1, explanation: "B: Idris deferred because his mother was ill." },
      { q: "Who says the year was not enjoyable but was worthwhile?", answer: 3, explanation: "D: Ben calls it the dullest year of his life and the one he would repeat." },
      { q: "Who travelled by themselves for a long period?", answer: 2, explanation: "C: Mia travelled for seven months, mostly alone." },
      { q: "Who came back with money but no plan?", answer: 0, explanation: "A: Lena returned with four thousand pounds and no idea what to do next." },
      { q: "Who found the experience lonelier than expected?", answer: 2, explanation: "C: Mia describes a fortnight without a real conversation." },
      { q: "Who changed what they intended to study?", answer: 1, explanation: "B: Idris applied for medicine having originally applied for economics." },
      { q: "Who worked in another country?", answer: 0, explanation: "A: Lena worked in a hotel and a bar in Austria." },
      { q: "Who stayed in their home town for the year?", answer: 3, explanation: "D: Ben stayed at home and worked in a distribution warehouse." },
      { q: "Who advises planning the end of the year in advance?", answer: 0, explanation: "A: Lena says to decide beforehand what the last month is for." },
      { q: "Who lets other people describe their year inaccurately?", answer: 1, explanation: "B: Idris says people call it a gap year and he lets it stand." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
