/* KET Prep bank: reading matching (wave 4) */
(function () {
var BANK = [
  {
    id: "k-rmatch4-01",
    title: "Four People Talk About Shopping",
    sections: [
      {
        label: "A",
        text: "Vera: I do almost all my shopping at the Saturday market. The fruit is fresher than in any supermarket, and it costs less if you come in the last hour, when the sellers lower their prices. I know all the sellers by name now. The fish man keeps the best pieces for me, and the egg lady always asks about my exams. Shopping there takes twice as long as in a shop, but for me, the talking is half the fun."
      },
      {
        label: "B",
        text: "Stan: I buy nearly everything on the internet. Clothes, books, even my football boots came in a box to our door. My mum thinks it is lazy, but I think it is clever: the prices are easy to compare, and I can read what other buyers say before I pay. Once I bought a jacket that looked great in the photos but was terrible in real life. Sending it back took three weeks. That is the one thing I hate about it."
      },
      {
        label: "C",
        text: "Rita: My favourite place is the second-hand shop on Mill Street. Everything there has already had one life, and I like giving things a second one. Last winter, I found a leather school bag for three pounds that my friends thought was from an expensive shop. The money the shop makes goes to old people in our town, so my shopping helps somebody every time. You need patience, though. Some days I find gold, and some days I find nothing."
      },
      {
        label: "D",
        text: "Marek: I only go shopping twice a year, in one long, terrible day each time. My mum takes me to the big shopping centre, we write a list in the car, and we buy everything for the next six months: shoes, trousers, shirts, a coat. I hate every minute, and my mum knows it, so at the end, we always eat burgers and laugh about the day. The burger is the only part I look forward to."
      }
    ],
    questions: [
      { q: "Who saves money by shopping at a special time?", answer: 0, explanation: "Vera says market fruit \"costs less if you come in the last hour, when the sellers lower their prices\"." },
      { q: "Who enjoys talking while shopping?", answer: 0, explanation: "Vera knows all the sellers by name and says \"the talking is half the fun\"." },
      { q: "Who checks other people's opinions before buying?", answer: 1, explanation: "Stan can \"read what other buyers say before I pay\" when shopping on the internet." },
      { q: "Who had a problem returning something?", answer: 1, explanation: "Stan's jacket looked great in photos but was terrible in real life, and \"sending it back took three weeks\"." },
      { q: "Whose shopping helps other people in the town?", answer: 2, explanation: "The money Rita's second-hand shop makes \"goes to old people in our town\"." },
      { q: "Who found something that looked much more expensive than it was?", answer: 2, explanation: "Rita's three-pound leather bag made her friends think it \"was from an expensive shop\"." },
      { q: "Who shops very rarely?", answer: 3, explanation: "Marek only goes shopping \"twice a year, in one long, terrible day each time\"." },
      { q: "Who ends their shopping trips with a meal?", answer: 3, explanation: "At the end of the day, Marek and his mum \"always eat burgers and laugh about the day\"." },
      { q: "Who says you cannot always find what you want?", answer: 2, explanation: "Rita says you need patience: \"Some days I find gold, and some days I find nothing.\"" },
      { q: "Whose family member disagrees with their way of shopping?", answer: 1, explanation: "Stan's mum \"thinks it is lazy\" that he buys nearly everything on the internet." }
    ]
  },
  {
    id: "k-rmatch4-02",
    title: "Four Children Talk About Their Families",
    sections: [
      {
        label: "A",
        text: "Nadia: There are seven people in our flat: my parents, my three brothers, my grandma, and me. I am the only girl, and I share nothing with nobody - that is my dream, anyway. In real life, I share a room with Grandma. She snores like a small tractor, but she also tells the best stories after the light goes off, so I forgive her. In our family, you must be fast at dinner and loud in discussions, or you get neither food nor a word."
      },
      {
        label: "B",
        text: "Oscar: It is just me and my dad at home. My parents separated when I was six, and I see my mum in the holidays, because she lives in another country now. People sometimes make a sad face when I tell them, but our team of two works well. Dad cooks, I clean, and on Fridays we have a film night with pizza. When I miss my mum, we call her, and last summer, Dad even took me to her wedding. Her new husband is actually funny."
      },
      {
        label: "C",
        text: "Priti: I am an only child, and everyone thinks I am spoiled. The truth is different: all the plans my parents have, they have for me alone. Piano on Monday, maths help on Wednesday, swimming on Friday. Sometimes I would love a brother, so half of the plans could be his. But there are good sides too. I never wait for the bathroom, my things stay where I put them, and on long car trips, the whole back seat is my kingdom."
      },
      {
        label: "D",
        text: "Jonty: My family is big and lives in four different countries, but we are close in our own way. Every Sunday at five o'clock, we all join one big video call: my grandparents in Jamaica, my aunt in Canada, my cousins in Germany, and us. It lasts about two hours, and everyone talks at the same time. Once a year, we all meet at my grandparents' house for two weeks. Twenty-three people, one kitchen. It is loud, hot, and absolutely the best time of my year."
      }
    ],
    questions: [
      { q: "Who shares a bedroom with an old person?", answer: 0, explanation: "Nadia shares a room with Grandma, who snores \"like a small tractor\" but tells the best stories." },
      { q: "Who lives with just one parent?", answer: 1, explanation: "Oscar says \"It is just me and my dad at home\" since his parents separated." },
      { q: "Who went to a family wedding abroad?", answer: 1, explanation: "Oscar's dad took him to his mum's wedding last summer; she lives in another country." },
      { q: "Who sometimes wishes for a brother or sister?", answer: 2, explanation: "Priti says \"Sometimes I would love a brother, so half of the plans could be his\"." },
      { q: "Whose family talks together online every week?", answer: 3, explanation: "Jonty's family joins \"one big video call\" every Sunday at five o'clock from four countries." },
      { q: "Who has a full timetable of activities?", answer: 2, explanation: "Priti has piano on Monday, maths help on Wednesday and swimming on Friday - all plans made for her alone." },
      { q: "Who must be quick to get their dinner?", answer: 0, explanation: "In Nadia's family of seven, \"you must be fast at dinner and loud in discussions, or you get neither food nor a word\"." },
      { q: "Whose whole family meets once a year?", answer: 3, explanation: "Once a year Jonty's family meets at the grandparents' house: \"Twenty-three people, one kitchen.\"" },
      { q: "Who has a regular weekly evening with food and a film?", answer: 1, explanation: "Oscar and his dad have \"a film night with pizza\" every Friday." },
      { q: "Who says other people have a wrong idea about them?", answer: 2, explanation: "Priti says everyone thinks an only child is spoiled, but \"The truth is different\"." }
    ]
  },
  {
    id: "k-rmatch4-03",
    title: "Four People Talk About Getting to School",
    sections: [
      {
        label: "A",
        text: "Milly: I walk to school with my two little sisters, and it takes us twenty minutes. Mum pays me one pound a week for taking them, because they walk like sleepy snails and I have to pull them along. We have our games on the way: we count red cars, and we always jump over the same three cracks in the path. In winter, when it is dark in the morning, Dad walks with us, and the games stop because he walks too fast."
      },
      {
        label: "B",
        text: "Aaron: My school is twelve kilometres away in the next town, so I take the seven-forty bus every morning. The same driver has driven us for five years, and he knows every child's name. I always sit in the same seat, third row on the left, next to my friend Billy. We test each other before exams on the bus, and I am sure my marks are better because of those twenty-five minutes. When the bus is late, the whole school knows, because thirty of us walk in together."
      },
      {
        label: "C",
        text: "Keira: I cycle to school along the river path, and it is the best part of my day. No cars, just water, ducks, and two fishermen who wave at me every morning. It takes twelve minutes when the wind sleeps and twenty when it does not. The bad days are rain days. Mum drives me then, and we always nearly arrive late because of the traffic near the bridge. On my bike, I am never late. My bike is faster than all those cars."
      },
      {
        label: "D",
        text: "Tobias: We live on a farm high on a hill, and my journey to school has two parts. First, Dad drives me down our long bumpy road to the main road in his old green tractor - yes, a tractor, and no, I am not joking. Then I wait at the corner for my neighbour, Mrs Field, who drives her daughter and me the rest of the way. On the tractor part, we see deer some mornings, and once we saw a fox carrying her cub."
      }
    ],
    questions: [
      { q: "Who is paid for helping on the way to school?", answer: 0, explanation: "Milly's mum pays her one pound a week for taking her little sisters to school." },
      { q: "Who studies during the journey?", answer: 1, explanation: "Aaron and Billy test each other before exams on the bus, and his marks are better because of it." },
      { q: "Who is slower when the weather is windy?", answer: 2, explanation: "Keira's ride takes \"twelve minutes when the wind sleeps and twenty when it does not\"." },
      { q: "Whose journey has two different parts?", answer: 3, explanation: "Tobias goes first by tractor down the hill, then in Mrs Field's car the rest of the way." },
      { q: "Who plays games on the way to school?", answer: 0, explanation: "Milly and her sisters count red cars \"and always jump over the same three cracks in the path\"." },
      { q: "Who sees wild animals on some mornings?", answer: 3, explanation: "From the tractor, Tobias sees deer some mornings, \"and once we saw a fox carrying her cub\"." },
      { q: "Who says they are almost late when travelling by car?", answer: 2, explanation: "On rain days Mum drives Keira, and they \"always nearly arrive late because of the traffic near the bridge\"." },
      { q: "Who travels with the same adult driver every day?", answer: 1, explanation: "The same bus driver has driven Aaron's route for five years \"and he knows every child's name\"." },
      { q: "Who gets help from a neighbour?", answer: 3, explanation: "Tobias's neighbour, Mrs Field, drives her daughter and him the rest of the way to school." },
      { q: "Whose journey changes in the dark winter months?", answer: 0, explanation: "In winter, when mornings are dark, Milly's dad walks with them \"and the games stop because he walks too fast\"." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = window.READING.match.concat(BANK);
})();
