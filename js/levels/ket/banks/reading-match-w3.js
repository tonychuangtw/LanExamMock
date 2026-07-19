/* KET Prep bank: reading matching (wave 3) */
(function () {
var BANK = [
  {
    id: "k-rmatch3-01",
    title: "Four People Talk About Their Homes",
    sections: [
      {
        label: "A",
        text: "Iris: I live in a flat on the ninth floor of a tall building in the city centre. From my bedroom window, I can see the whole town, and on clear days, even the mountains. The lift breaks about once a month, and then the stairs feel like a mountain too. We have no garden, but my mum grows tomatoes and flowers on our little balcony. The best thing is that everything is close: my school, the pool, and my three best friends all live five minutes away."
      },
      {
        label: "B",
        text: "Noah: My family lives in an old farmhouse that my great-grandfather built. The walls are so thick that the house stays cool in summer and warm in winter. My room has a wooden roof with dark beams, and my grandpa says a family of owls lived there before I was born. The bad side? The nearest shop is six kilometres away, and my school bus comes at seven o'clock, when my friends in town are still sleeping. But I would not change my home for any flat."
      },
      {
        label: "C",
        text: "Ada: We moved to a new house last year because my parents wanted a garden. The house is nice, but honestly, I miss our old street. Here, I have my own room for the first time, and I do not have to share with my little sister any more. That is the good part. The hard part is that my friends live on the other side of town now, and I can only see them at school or at weekends. Mum says I will make friends on this street soon. I am still waiting."
      },
      {
        label: "D",
        text: "Felix: My home is a houseboat on the canal, and yes, everyone at school asks me about it. My dad painted it blue and white, and we have flowers in pots on the roof. Inside, it is small but very clever: my bed folds into the wall, and the table becomes a sofa. Ducks knock on our window in the morning because my mum feeds them. In winter, storms sometimes rock the boat, but for me, that feeling is like being in a cradle."
      }
    ],
    questions: [
      { q: "Who lives in a home built by a family member?", answer: 1, explanation: "Noah lives in an old farmhouse \"that my great-grandfather built\", with thick walls and dark beams." },
      { q: "Who can see very far from their home?", answer: 0, explanation: "From her ninth-floor bedroom window, Iris can see the whole town \"and on clear days, even the mountains\"." },
      { q: "Who has furniture that changes its shape?", answer: 3, explanation: "On Felix's houseboat, his bed folds into the wall \"and the table becomes a sofa\"." },
      { q: "Who no longer shares a room?", answer: 2, explanation: "In the new house Ada has her own room for the first time and does not share with her little sister." },
      { q: "Who lives far from the nearest shop?", answer: 1, explanation: "Noah says \"the nearest shop is six kilometres away\" and his school bus comes very early." },
      { q: "Who misses seeing their friends every day?", answer: 2, explanation: "Ada's friends now live on the other side of town, so she only sees them at school or at weekends." },
      { q: "Whose family grows plants in a small space?", answer: 0, explanation: "Iris's flat has no garden, but her mum \"grows tomatoes and flowers on our little balcony\"." },
      { q: "Who gets visits from animals in the morning?", answer: 3, explanation: "Felix says ducks knock on the window in the morning \"because my mum feeds them\"." },
      { q: "Who likes a feeling that other people might find frightening?", answer: 3, explanation: "Winter storms rock Felix's boat, but for him \"that feeling is like being in a cradle\"." },
      { q: "Who has a problem with the lift in their building?", answer: 0, explanation: "Iris says the lift \"breaks about once a month\", and then the stairs feel like a mountain." }
    ]
  },
  {
    id: "k-rmatch3-02",
    title: "Four Students Talk About School Clubs",
    sections: [
      {
        label: "A",
        text: "Ben: I am in the chess club, which meets every Monday lunchtime in the library. I joined because of the rain, honestly. One wet October day, the playground was closed, and the librarian invited me in to watch a game. I learned the rules in a week and lost every game for a month. Now I am the second-best player in the school. In March, we played against another school and I won both of my games. My next goal is to beat our maths teacher, who has never lost."
      },
      {
        label: "B",
        text: "Tara: The drama club is my favourite hour of the whole week. We meet on Thursdays in the school hall. In the summer show, I played an old queen, and I had to wear a grey wig and speak in a funny deep voice. My little brothers came to watch and did not recognise me until the end, which was the best part for me. Our teacher says the club is not really about acting. It is about being brave in front of people, and that helps everywhere in life."
      },
      {
        label: "C",
        text: "Dev: I joined the science club because of one video about volcanoes, and I have stayed for two years now. We meet after school on Tuesdays and do experiments that are too big or too messy for normal lessons. Last month, we built a water rocket that flew over the sports hall, and the caretaker was not happy because it landed in his flower bed. Next term, we are growing plants in the dark and in different colours of light for a big experiment."
      },
      {
        label: "D",
        text: "Poppy: My club is the gardening club, and people are surprised when I say it is exciting. We grow vegetables behind the gym and give them to the school kitchen. The cooks made soup for the whole school with our potatoes in November, and our names were read out in the hall. Some Saturdays, we sell flowers at the town market, and the money buys seeds for spring. My grandad gives me old gardening books, and I test his tricks. Most of them work."
      }
    ],
    questions: [
      { q: "Who joined their club because of bad weather?", answer: 0, explanation: "Ben joined the chess club on a wet October day when the playground was closed and the librarian invited him in." },
      { q: "Who lost many times before getting better?", answer: 0, explanation: "Ben \"lost every game for a month\" but is now the second-best player in the school." },
      { q: "Who wants to beat a teacher at something?", answer: 0, explanation: "Ben's next goal is \"to beat our maths teacher, who has never lost\" at chess." },
      { q: "Whose family did not know them in a costume?", answer: 1, explanation: "Tara's little brothers \"did not recognise me until the end\" when she played an old queen with a grey wig." },
      { q: "Who says their club teaches courage?", answer: 1, explanation: "Tara's teacher says drama club is about \"being brave in front of people\", not really about acting." },
      { q: "Who caused a small problem for a school worker?", answer: 2, explanation: "Dev's water rocket flew over the sports hall and \"landed in his flower bed\" - the caretaker's flowers." },
      { q: "Who joined a club after watching something online?", answer: 2, explanation: "Dev joined the science club \"because of one video about volcanoes\" and stayed for two years." },
      { q: "Whose club gave food to the whole school?", answer: 3, explanation: "The cooks made soup for the whole school with the gardening club's potatoes in November." },
      { q: "Whose club earns money to buy new things?", answer: 3, explanation: "Poppy's club sells flowers at the town market, and \"the money buys seeds for spring\"." },
      { q: "Who tries out ideas from an older relative?", answer: 3, explanation: "Poppy's grandad gives her old gardening books, and she tests his tricks - \"Most of them work\"." }
    ]
  },
  {
    id: "k-rmatch3-03",
    title: "Four Friends Talk About Weekends",
    sections: [
      {
        label: "A",
        text: "Zara: My weekends belong to my horse, Copper. He is not really mine, he belongs to the riding school, but I have looked after him every Saturday for two years, so my heart says he is mine. I clean his home, brush him, and ride for one hour. In return for my work, my lessons are free, which is good because riding costs a lot. In summer, I am at the stables from eight until five, and I come home smelling terrible and feeling wonderful."
      },
      {
        label: "B",
        text: "Callum: On Saturdays, I help my dad at his little repair shop. He fixes bicycles, and now I can change a wheel faster than he can, although he will never say so. Dad pays me five pounds each Saturday, and I am saving for a computer. On Sundays, I do nothing, and I mean beautiful, wonderful nothing. I stay in my pyjamas until lunch, read comics, and play games. Mum calls it lazy. I call it resting after a hard week."
      },
      {
        label: "C",
        text: "Daisy: Both my parents work on Saturdays, so I spend the day at my grandpa's house with my two cousins. Grandpa has three rules: no phones at the table, everyone helps cook lunch, and afternoon is for the park, whatever the weather. We have been going since we were small, and we have a hundred traditions, like pancake races and a secret handshake. My friends have quieter weekends, I think, but not funnier ones."
      },
      {
        label: "D",
        text: "Ethan: My weekend is split in two halves. Saturday is for sport: I swim in the morning and play basketball in the afternoon. Sunday is for homework, and there is nothing I can do about it, because my mum checks everything before dinner. If I finish early and my work is good, I choose a film for the whole family to watch in the evening. Last week I chose a space film, and even my grandma liked it, although she slept through the middle part."
      }
    ],
    questions: [
      { q: "Who works instead of paying for their hobby?", answer: 0, explanation: "Zara looks after Copper every Saturday, and \"in return for my work, my lessons are free\"." },
      { q: "Who is saving money for something special?", answer: 1, explanation: "Callum gets five pounds each Saturday at the repair shop and is \"saving for a computer\"." },
      { q: "Who is better than a parent at one job?", answer: 1, explanation: "Callum can change a wheel faster than his dad, \"although he will never say so\"." },
      { q: "Who spends Saturdays with other family children?", answer: 2, explanation: "Daisy spends Saturdays at her grandpa's house \"with my two cousins\" while her parents work." },
      { q: "Who follows special rules at the weekend?", answer: 2, explanation: "Daisy's grandpa has three rules: no phones at the table, everyone cooks, and afternoon is for the park." },
      { q: "Who does schoolwork on Sundays?", answer: 3, explanation: "For Ethan, \"Sunday is for homework\", and his mum checks everything before dinner." },
      { q: "Who can win a prize for finishing their work well?", answer: 3, explanation: "If Ethan finishes early and his work is good, he \"chooses a film for the whole family\"." },
      { q: "Who says doing nothing is important?", answer: 1, explanation: "Callum's Sundays are for \"beautiful, wonderful nothing\" - he calls it resting, not lazy." },
      { q: "Who goes outside in every kind of weather?", answer: 2, explanation: "One of Grandpa's rules is that \"afternoon is for the park, whatever the weather\"." },
      { q: "Who comes home dirty but happy?", answer: 0, explanation: "After a day at the stables, Zara comes home \"smelling terrible and feeling wonderful\"." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = window.READING.match.concat(BANK);
})();
