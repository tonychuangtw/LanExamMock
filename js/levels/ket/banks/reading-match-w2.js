/* KET Prep bank: reading matching (wave 2) */
(function () {
var BANK = [
  {
    id: "k-rmatch2-01",
    title: "Four Children Talk About Their Holidays",
    sections: [
      {
        label: "A",
        text: "Ella: We went to a big city in Italy for a week. I loved the old buildings and the ice cream, but not the weather. It was forty degrees, and we had to rest in the hotel every afternoon because it was too hot to walk. My favourite day was when we cooked pizza with a real Italian chef. He said my pizza was the best in the class, and he gave me his recipe to take home."
      },
      {
        label: "B",
        text: "Finn: My family does not fly anywhere. Every summer we take our old caravan to the same little field by a river in Wales. Some people at school think that is boring, but they are wrong. I know every path and every tree there. This year I built a small wooden bridge over the stream with Dad, and we fished every evening. The same families come every year, so I have summer friends I have known all my life."
      },
      {
        label: "C",
        text: "Grace: We planned a beach holiday in France, but there was a big problem with our tickets, and we could not go. Mum was sad, so my brother and I made a holiday at home. Every day had a different country. On Italy day we ate pasta and watched an Italian film. On Japan day we tried to make sushi, which went very wrong but tasted fine. It was the cheapest holiday we ever had, and maybe the funniest."
      },
      {
        label: "D",
        text: "Hassan: I spent two weeks at my grandparents' house in the mountains. There is no internet there, and at first I thought I would die of boredom. My grandfather laughed and gave me a fishing rod, an old map, and a bicycle. By the end, I did not want to leave. I learned to make cheese with my grandmother, and I rode to a waterfall that is not on any tourist website. I am going back in winter."
      }
    ],
    questions: [
      { q: "Who could not travel because of a ticket problem?", answer: 2, explanation: "Grace's family planned a beach holiday in France, \"but there was a big problem with our tickets, and we could not go\"." },
      { q: "Who goes to the same place every year?", answer: 1, explanation: "Finn's family takes the caravan \"to the same little field by a river in Wales\" every summer." },
      { q: "Who had to rest indoors because of the weather?", answer: 0, explanation: "Ella says it was forty degrees and they \"had to rest in the hotel every afternoon because it was too hot\"." },
      { q: "Who learned to cook something from a professional?", answer: 0, explanation: "Ella cooked pizza with \"a real Italian chef\", who praised her pizza and gave her his recipe." },
      { q: "Who built something during the holiday?", answer: 1, explanation: "Finn built \"a small wooden bridge over the stream\" with his dad this year." },
      { q: "Who says their holiday cost very little money?", answer: 2, explanation: "Grace says the holiday at home \"was the cheapest holiday we ever had, and maybe the funniest\"." },
      { q: "Who expected to be bored at first?", answer: 3, explanation: "Hassan says there was no internet at his grandparents' house and \"at first I thought I would die of boredom\"." },
      { q: "Who visited a place that tourists do not know about?", answer: 3, explanation: "Hassan rode his bicycle \"to a waterfall that is not on any tourist website\"." },
      { q: "Who has friends they only see in the summer?", answer: 1, explanation: "Finn says the same families come every year, \"so I have summer friends I have known all my life\"." },
      { q: "Who is planning to return in a different season?", answer: 3, explanation: "Hassan ends by saying \"I am going back in winter\" to his grandparents' house in the mountains." }
    ]
  },
  {
    id: "k-rmatch2-02",
    title: "Four People Talk About Their Favourite Food",
    sections: [
      {
        label: "A",
        text: "Tomas: My favourite food is my grandmother's chicken soup. She makes it every Sunday, and the whole family comes to eat it. Nobody knows the full recipe, not even my mother, because Grandma keeps one part secret. She says she will tell the secret to the first grandchild who learns to cook everything else in her kitchen. I have already learned five of her dishes, so I think I am winning the race against my cousins."
      },
      {
        label: "B",
        text: "Julia: I love sushi more than any other food. The funny thing is that I did not want to try it for years, because I thought cold rice and fish sounded horrible. Then, on my thirteenth birthday, my best friend took me to a small Japanese restaurant, and I had to be polite and eat. It was wonderful. Now I go there once a month, always with the money I get for washing my neighbour's car."
      },
      {
        label: "C",
        text: "Ryan: For me, nothing beats a full English breakfast: eggs, beans, toast, tomatoes and mushrooms. My dad and I cook it together every Saturday, and we have clear jobs. He does the eggs, I do everything else. We started this when Mum began working on Saturday mornings, and now it is our special time. We talk about football and school while we cook. My dream is to open a small breakfast café one day, and Dad says he will wash the dishes there."
      },
      {
        label: "D",
        text: "Amina: My favourite food is mango. When I lived in my old country, we had a mango tree behind our house, and my sister and I ate them warm from the sun. In our new country, mangoes come in plastic boxes and taste like water. My mum says I am too hard on the poor supermarket mangoes. Maybe she is right, but for me, a real mango means summer, my sister laughing, and the smell of our old garden."
      }
    ],
    questions: [
      { q: "Whose favourite food has a secret part?", answer: 0, explanation: "Tomas's grandmother keeps one part of her chicken soup recipe secret, even from his mother." },
      { q: "Who is competing with family members?", answer: 0, explanation: "Grandma will tell the secret to the first grandchild who learns her dishes, so Tomas is \"winning the race against my cousins\"." },
      { q: "Who refused to try their favourite food for a long time?", answer: 1, explanation: "Julia did not want to try sushi for years because \"cold rice and fish sounded horrible\"." },
      { q: "Who earns money to pay for their favourite food?", answer: 1, explanation: "Julia goes to the restaurant \"with the money I get for washing my neighbour's car\"." },
      { q: "Who first ate their favourite food to be polite?", answer: 1, explanation: "At the restaurant on her birthday, Julia \"had to be polite and eat\" - and loved it." },
      { q: "Who cooks their favourite food with a parent?", answer: 2, explanation: "Ryan and his dad cook the full English breakfast together every Saturday with clear jobs." },
      { q: "Who has a plan for a future business?", answer: 2, explanation: "Ryan's dream is \"to open a small breakfast café one day\", and Dad will wash the dishes." },
      { q: "Who thinks the food tastes worse in their new home?", answer: 3, explanation: "Amina says that in the new country \"mangoes come in plastic boxes and taste like water\"." },
      { q: "Whose favourite food brings back family memories?", answer: 3, explanation: "For Amina a real mango means \"summer, my sister laughing, and the smell of our old garden\"." },
      { q: "Whose weekly cooking started because of a parent's job?", answer: 2, explanation: "Ryan and his dad started their Saturday breakfasts \"when Mum began working on Saturday mornings\"." }
    ]
  },
  {
    id: "k-rmatch2-03",
    title: "Four Teenagers Talk About Sport",
    sections: [
      {
        label: "A",
        text: "Leah: I do judo twice a week at a club near my house. I started when I was eight because some big kids at school were unkind to me, and my parents wanted me to feel stronger. The funny thing is that judo did not teach me to fight; it taught me to stay calm. I have a brown belt now, and next year I can try for the black one. My little brother has just started at the same club, and I sometimes help teach the small children."
      },
      {
        label: "B",
        text: "Kofi: Running is my sport, and the best thing about it is that it is free. You do not need a club, a team, or expensive things - only shoes. I run with my dad by the river three mornings a week before school. In April, we ran in a five-kilometre race for a children's hospital. Hundreds of people ran together, some in funny costumes. I finished in twenty-nine minutes, and next year I want to finish in under twenty-five."
      },
      {
        label: "C",
        text: "Maddie: I am the goalkeeper in our school hockey team. Everyone wants to score goals, so nobody else wanted this job, but I love it. A goalkeeper sees the whole game and must shout to help the team. My equipment is heavy and smells terrible, and my mum makes me keep it in the garage. Last season, we came second in the schools cup. I saved a penalty in the final, and even the other team's parents clapped for me."
      },
      {
        label: "D",
        text: "Alexei: To be honest, I hated all sport until last year. In PE lessons, I was always the slowest, and I dreamed of being somewhere else. Then a climbing centre opened in our town, and my uncle took me there one boring Sunday. Climbing changed everything. It is not about being fast; it is about thinking. Every wall is like a puzzle for your hands and feet. I go every Friday now, and my PE teacher cannot believe the change in me."
      }
    ],
    questions: [
      { q: "Who started their sport because of a problem at school?", answer: 0, explanation: "Leah started judo because \"some big kids at school were unkind to me\" and her parents wanted her to feel stronger." },
      { q: "Who helps to teach younger children?", answer: 0, explanation: "Leah sometimes helps teach the small children at her judo club, where her brother has just started." },
      { q: "Who says their sport costs nothing?", answer: 1, explanation: "Kofi says the best thing about running \"is that it is free\" - you only need shoes." },
      { q: "Who took part in an event that helped other people?", answer: 1, explanation: "Kofi ran in a five-kilometre race \"for a children's hospital\" in April." },
      { q: "Who has a clear time goal for next year?", answer: 1, explanation: "Kofi finished in twenty-nine minutes and \"next year I want to finish in under twenty-five\"." },
      { q: "Who does a job in their team that nobody else wanted?", answer: 2, explanation: "Maddie says everyone wants to score goals, \"so nobody else wanted this job\" of goalkeeper." },
      { q: "Whose sports equipment is not allowed in the house?", answer: 2, explanation: "Maddie's equipment smells terrible, and her mum \"makes me keep it in the garage\"." },
      { q: "Who was praised by supporters of the other team?", answer: 2, explanation: "After Maddie saved a penalty in the final, \"even the other team's parents clapped for me\"." },
      { q: "Who used to dislike sport completely?", answer: 3, explanation: "Alexei says honestly that he \"hated all sport until last year\" and was always the slowest in PE." },
      { q: "Who compares their sport to solving a puzzle?", answer: 3, explanation: "Alexei says climbing is about thinking: \"Every wall is like a puzzle for your hands and feet\"." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = window.READING.match.concat(BANK);
})();
