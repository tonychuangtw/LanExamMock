/* KET Prep bank: Reading multiple matching (A2) — wave 9 */
(function () {
var BANK = [
  {
    id: "ket-rmatch9-01",
    title: "Four Students Talk About a School Trip",
    sections: [
      { label: "A", text: "Iris: We went to a castle about ninety minutes away in Year 8. It rained all day and we were outside for most of it. What I remember is not the castle at all: it is that our teacher had a bag with eleven umbrellas in it, which she had brought without telling anybody, and that she gave them out at the gate as if this were completely normal." },
      { label: "B", text: "Dev: Ours was a day at a science museum in the city. There were four hundred students there from six schools and it was extremely loud. I did not enjoy the morning. In the afternoon we had a workshop in a small room with fourteen people in it and that hour was the best hour of that school year." },
      { label: "C", text: "Marta: We went to a farm in Year 7 and I was the only person in my class who had never been to one. I did not say so. I learned that afternoon that cows are much larger than they look on television and that everybody else already knew that, which nobody mentioned and which I noticed." },
      { label: "D", text: "Sam: Our trip was cancelled two days before because not enough people paid. Eleven of us had paid and twenty-two had not, and the company needed thirty. We got the money back. The teacher who had organised it took the eleven of us to a museum in our own town on the same day instead, on the bus, for nothing." }
    ],
    questions: [
      { q: "Whose trip was in bad weather?", answer: 0, explanation: "A: It rained all day at the castle." },
      { q: "Who was in a very crowded place?", answer: 1, explanation: "B: There were four hundred students from six schools." },
      { q: "Who had never been to that kind of place before?", answer: 2, explanation: "C: Marta had never been to a farm." },
      { q: "Whose trip did not happen?", answer: 3, explanation: "D: Sam's trip was cancelled." },
      { q: "Who mentions a teacher who had prepared something?", answer: 0, explanation: "A: The teacher had brought eleven umbrellas." },
      { q: "Who preferred the second half of the day?", answer: 1, explanation: "B: The afternoon workshop was the best hour." },
      { q: "Who kept quiet about something?", answer: 2, explanation: "C: Marta did not say she had never been to a farm." },
      { q: "Who did something else on the same day?", answer: 3, explanation: "D: They went to a local museum instead." },
      { q: "Who was in a small group at one point?", answer: 1, explanation: "B: The workshop had fourteen people in it." },
      { q: "Who mentions money being returned?", answer: 3, explanation: "D: They got the money back." }
    ]
  },
  {
    id: "ket-rmatch9-02",
    title: "Four People Talk About Being Ill",
    sections: [
      { label: "A", text: "Nadia: I had something for four days in February and I do not know what it was. I stayed in bed, drank a great deal of water and slept about fourteen hours a day, and on the fifth day I was completely fine. My mother did not take me to a doctor and she was right, and I would probably have gone if it had been my decision." },
      { label: "B", text: "Karl: I broke my ankle in November and was on crutches for six weeks. The illness was not the difficult part. The difficult part was stairs, and our flat is on the third floor with no lift, and I went out four times in six weeks because getting down and up again took forty minutes." },
      { label: "C", text: "Emine: I have asthma and I have had it since I was three. Most of the time it is nothing at all. I carry an inhaler, I know which things make it worse, and I have not missed a day of school for it in two years, and people who know me are often surprised when it comes up." },
      { label: "D", text: "Josh: I had my appendix out at fourteen. I was in hospital for two nights and I remember about four things clearly, one of which is a nurse who explained everything before she did it and one of which is that the food was much better than everybody had told me it would be." }
    ],
    questions: [
      { q: "Who had something that was never diagnosed?", answer: 0, explanation: "A: Nadia does not know what it was." },
      { q: "Who had a broken bone?", answer: 1, explanation: "B: Karl broke his ankle." },
      { q: "Who has a long-term condition?", answer: 2, explanation: "C: Emine has had asthma since she was three." },
      { q: "Who stayed in hospital?", answer: 3, explanation: "D: Josh was in hospital for two nights." },
      { q: "Who could not get out of the building easily?", answer: 1, explanation: "B: Karl's flat is on the third floor with no lift." },
      { q: "Who was better after a few days?", answer: 0, explanation: "A: Nadia was fine on the fifth day." },
      { q: "Who says people are surprised?", answer: 2, explanation: "C: People who know Emine are often surprised." },
      { q: "Who praises a member of staff?", answer: 3, explanation: "D: Josh remembers a nurse who explained everything." },
      { q: "Who says a parent made the right decision?", answer: 0, explanation: "A: Nadia's mother did not take her to a doctor and was right." },
      { q: "Who has not missed school because of it?", answer: 2, explanation: "C: Emine has not missed a day in two years." }
    ]
  },
  {
    id: "ket-rmatch9-03",
    title: "Four People Talk About a Birthday",
    sections: [
      { label: "A", text: "Alice: For my sixteenth I did not want a party and my family found this difficult to believe. What I wanted was to go to a particular restaurant with four people, which we did, and it cost about the same as a party would have cost and lasted three hours and I remember all of it, which I would not say about my thirteenth." },
      { label: "B", text: "Bruno: My birthday is on the twenty-seventh of December, which is the worst possible date. People are away, people have already eaten too much, and I have had presents that were clearly bought for Christmas and given to me two days later. My family now does my birthday in June, which was my grandmother's idea and which is much better." },
      { label: "C", text: "Hana: My eighteenth was in March and about thirty people came to a hall that we hired for four hours. My father made all the food, which took him two days, and he says he enjoyed it and I know that he was extremely tired. Six people helped to clear up afterwards and I remember every one of them." },
      { label: "D", text: "Tobias: I was ill on my fifteenth birthday and spent the day in bed. Nothing happened at all. My friends came round two weeks later, on a Saturday, and we did the thing we had planned, and it was better than it would have been because everybody was free and nobody had to leave early." }
    ],
    questions: [
      { q: "Who did not want a party?", answer: 0, explanation: "A: Alice did not want a party for her sixteenth." },
      { q: "Whose birthday is near Christmas?", answer: 1, explanation: "B: Bruno's is on the twenty-seventh of December." },
      { q: "Who had the largest celebration?", answer: 2, explanation: "C: About thirty people came to Hana's eighteenth." },
      { q: "Who was unwell on the day?", answer: 3, explanation: "D: Tobias spent the day in bed." },
      { q: "Whose family now celebrates at a different time of year?", answer: 1, explanation: "B: Bruno's family celebrates in June." },
      { q: "Whose parent prepared the food?", answer: 2, explanation: "C: Hana's father made all the food." },
      { q: "Who says a later celebration was better?", answer: 3, explanation: "D: Tobias's friends came two weeks later and it was better." },
      { q: "Who compares it with an earlier birthday?", answer: 0, explanation: "A: Alice compares it with her thirteenth." },
      { q: "Who mentions people who helped afterwards?", answer: 2, explanation: "C: Six people helped to clear up." },
      { q: "Who has received unsuitable presents?", answer: 1, explanation: "B: Bruno has had presents clearly bought for Christmas." }
    ]
  },
  {
    id: "ket-rmatch9-04",
    title: "Four People Talk About Their Phones",
    sections: [
      { label: "A", text: "Ellie: I got my first phone at fourteen, which was later than everybody in my class, and I was extremely annoyed about it at the time. My parents' rule was that it stays downstairs at night, which I argued about for a year and which I now do without being told, because I sleep better and I know that I sleep better." },
      { label: "B", text: "Marc: Mine is four years old and the screen has a crack across one corner from 2023. It works perfectly. Everybody asks me when I am going to replace it and the answer is when it stops working, which is not a principle, it is that I would rather spend the money on other things." },
      { label: "C", text: "Ines: I use my phone mostly for one thing, which is talking to my cousins in another country. There are eleven of us in a group and we send messages every day, and I have met four of them once and two of them never, and they are still the people I talk to most after my family." },
      { label: "D", text: "Owen: I turned off almost all the notifications last September after counting them for a week. There were about two hundred a day and I decided that about six of them mattered. It took me two evenings to go through the settings and I have not turned any of them back on." }
    ],
    questions: [
      { q: "Who got a phone later than their friends?", answer: 0, explanation: "A: Ellie got hers at fourteen, later than her class." },
      { q: "Whose phone is damaged?", answer: 1, explanation: "B: Marc's screen has a crack." },
      { q: "Who uses it mainly to contact family?", answer: 2, explanation: "C: Ines talks to her cousins abroad." },
      { q: "Who changed the settings?", answer: 3, explanation: "D: Owen turned off almost all notifications." },
      { q: "Who has a rule about night-time?", answer: 0, explanation: "A: Ellie's phone stays downstairs at night." },
      { q: "Who is asked about replacing it?", answer: 1, explanation: "B: Everybody asks Marc when he will replace it." },
      { q: "Who counted something for a week?", answer: 3, explanation: "D: Owen counted his notifications." },
      { q: "Who has never met some of the people they talk to?", answer: 2, explanation: "C: Ines has never met two of her cousins." },
      { q: "Who now agrees with a rule they once disliked?", answer: 0, explanation: "A: Ellie now follows the rule without being told." },
      { q: "Who mentions spending money on other things?", answer: 1, explanation: "B: Marc would rather spend the money elsewhere." }
    ]
  },
  {
    id: "ket-rmatch9-05",
    title: "Four People Talk About the Weather Where They Live",
    sections: [
      { label: "A", text: "Petra: I live in a town near the sea and the wind is the thing people who visit notice. It blows almost every day. Nobody here uses an umbrella, because an umbrella lasts about four minutes in that wind, and everybody has a coat with a hood instead. My cousin visited in March and bought an umbrella and it broke on the first afternoon." },
      { label: "B", text: "Ahmed: It is very hot here in July and August, about thirty-eight degrees in the middle of the day, and everything is arranged around that. Shops close from two until five. Nobody does anything outside between those hours. In the evening the whole town is out and children are still playing in the square at eleven o'clock." },
      { label: "C", text: "Sanne: We get a lot of rain and it is not dramatic rain: it is grey and it goes on for four days. People who do not live here find this depressing. What I would say is that everything is extremely green, that nobody ever cancels anything because of it, and that we go out in it exactly as we would on any other day." },
      { label: "D", text: "Karl: The winters here are long and the snow arrives in November and is often still there in April. The town is completely ready for it: the roads are cleared by six in the morning, everybody has the right tyres by law from December, and school is almost never closed. Two years ago it closed for one day and people talked about it for a week." }
    ],
    questions: [
      { q: "Who mentions wind?", answer: 0, explanation: "A: Petra says the wind blows almost every day." },
      { q: "Who lives somewhere very hot?", answer: 1, explanation: "B: Ahmed says it is about thirty-eight degrees in July." },
      { q: "Who describes long periods of rain?", answer: 2, explanation: "C: Sanne says it goes on for four days." },
      { q: "Who has long winters?", answer: 3, explanation: "D: Karl says snow lasts from November to April." },
      { q: "Who says shops close in the middle of the day?", answer: 1, explanation: "B: Shops close from two until five." },
      { q: "Who says visitors find the weather difficult?", answer: 2, explanation: "C: People who do not live there find it depressing." },
      { q: "Who mentions a rule about vehicles?", answer: 3, explanation: "D: Everybody must have the right tyres from December." },
      { q: "Who describes what a visitor did wrong?", answer: 0, explanation: "A: Petra's cousin bought an umbrella." },
      { q: "Who says life happens late in the evening?", answer: 1, explanation: "B: Children play in the square at eleven o'clock." },
      { q: "Who says nothing is cancelled because of the weather?", answer: 2, explanation: "C: Nobody ever cancels anything because of the rain." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
