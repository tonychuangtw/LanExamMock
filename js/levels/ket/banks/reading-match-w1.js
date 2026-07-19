/* KET Prep bank: reading matching (wave 1) */
(function () {
var BANK = [
  {
    id: "k-rmatch1-01",
    title: "Four Friends Talk About Their Pets",
    sections: [
      {
        label: "A",
        text: "Mia: My cat is called Luna. I did not buy her from a shop. One cold morning two years ago, I found her in our garden. She was a small kitten then, and she was very hungry. Now she is big and lazy and sleeps all day on my bed. She scratches the sofa sometimes, and Mum gets angry about that. But Luna does not eat much, so she does not cost a lot of money to keep."
      },
      {
        label: "B",
        text: "Jack: I have a big dog called Rex. He needs a walk twice a day, in the morning and in the evening. I walk him even when it rains, so it is hard work sometimes. Dog food is not cheap, and Rex eats a lot, so I spend most of my pocket money on him. But I love him. He can sit, jump, and bring the ball back when I throw it in the park."
      },
      {
        label: "C",
        text: "Sofia: I have three goldfish in a tank in my bedroom. My aunt gave them to me for my birthday last year. Fish are easy pets because they do not need walks and they are very quiet. Once a month I have to clean the tank, and that job is quite boring. Before a big test at school, I sit and watch my fish swim. It always makes me feel calm and relaxed."
      },
      {
        label: "D",
        text: "Omar: My pet is a green parrot called Kiwi. He can say ten words, and my favourite is \"good morning\". The problem is that he says it very loudly at six o'clock, so he wakes up the whole family every day. Before I got Kiwi, I read three books about parrots from the library, so I knew how to look after him. Now I am asking my parents for a second parrot, because I think Kiwi feels lonely."
      }
    ],
    questions: [
      { q: "Who found their pet outside their house?", answer: 0, explanation: "Mia says she found Luna in the garden one cold morning; the cat was a hungry kitten then." },
      { q: "Who says their pet does not cost much money?", answer: 0, explanation: "Mia says Luna does not eat much, \"so she does not cost a lot of money to keep\"." },
      { q: "Whose pet sometimes damages the furniture?", answer: 0, explanation: "Mia says Luna \"scratches the sofa sometimes, and Mum gets angry about that\"." },
      { q: "Who takes their pet out even in bad weather?", answer: 1, explanation: "Jack walks Rex twice a day and says \"I walk him even when it rains\"." },
      { q: "Who spends most of their pocket money on their pet?", answer: 1, explanation: "Jack says dog food is not cheap and \"I spend most of my pocket money on him\"." },
      { q: "Who got their pet as a birthday present?", answer: 2, explanation: "Sofia says her aunt gave her the three goldfish for her birthday last year." },
      { q: "Who has a boring job to do once a month?", answer: 2, explanation: "Sofia cleans the fish tank once a month and says \"that job is quite boring\"." },
      { q: "Whose pet helps them feel calm before school tests?", answer: 2, explanation: "Sofia watches her fish before a big test and it \"always makes me feel calm and relaxed\"." },
      { q: "Whose pet wakes the family up early every day?", answer: 3, explanation: "Omar's parrot Kiwi says \"good morning\" very loudly at six o'clock and wakes up the whole family." },
      { q: "Who would like to have another pet?", answer: 3, explanation: "Omar is asking his parents for a second parrot because he thinks Kiwi feels lonely." }
    ]
  },
  {
    id: "k-rmatch1-02",
    title: "Four Students Talk About Their Hobbies",
    sections: [
      {
        label: "A",
        text: "Katya: My hobby is drawing. I draw every evening after my homework, mostly animals and faces. I learned by watching free videos on the internet, because there are no art classes in our small town. Last month, my picture of a horse won second prize in a competition at the library. My dream is to draw pictures for children's books one day. Paper and pencils do not cost much, so it is a cheap hobby too."
      },
      {
        label: "B",
        text: "Marco: I play basketball three times a week at the sports club. I started two years ago because I was the tallest boy in my class and everyone said I should try it. At first I was terrible, and I nearly stopped after a month. My coach told me to be patient, and now I am one of the best players in the team. The only problem is the early training on Sunday mornings. Getting up at seven at the weekend is really hard for me."
      },
      {
        label: "C",
        text: "Holly: I collect stamps from different countries. My grandfather started the collection fifty years ago, and he gave it to me when I was nine. Now we work on it together every Friday afternoon at his house. I love the little pictures of birds, ships and famous people. My friends think stamps are boring, and they laugh at my hobby sometimes. I don't care. When I hold an old stamp, I feel like I am holding a piece of history."
      },
      {
        label: "D",
        text: "Deniz: My hobby is cooking. It started last year when my mum broke her arm and I had to help in the kitchen. Now I cook dinner for my family every Wednesday. My best dish is chicken with rice and tomatoes. I watch cooking programmes on television and write the recipes in a red notebook. Cooking can go wrong, of course. Once I put salt in a cake instead of sugar, and only our dog wanted to eat it."
      }
    ],
    questions: [
      { q: "Who taught themselves their hobby using the internet?", answer: 0, explanation: "Katya learned to draw \"by watching free videos on the internet\" because her town has no art classes." },
      { q: "Who won a prize for their hobby?", answer: 0, explanation: "Katya's picture of a horse \"won second prize in a competition at the library\" last month." },
      { q: "Who says their hobby does not cost much money?", answer: 0, explanation: "Katya says paper and pencils do not cost much, \"so it is a cheap hobby too\"." },
      { q: "Who almost gave up their hobby at the beginning?", answer: 1, explanation: "Marco was terrible at first and \"nearly stopped after a month\", but his coach told him to be patient." },
      { q: "Who dislikes getting up early for their hobby?", answer: 1, explanation: "Marco says getting up at seven for Sunday training \"is really hard for me\"." },
      { q: "Who shares their hobby with an older family member?", answer: 2, explanation: "Holly works on the stamp collection with her grandfather \"every Friday afternoon at his house\"." },
      { q: "Whose friends make fun of their hobby?", answer: 2, explanation: "Holly says her friends think stamps are boring and \"laugh at my hobby sometimes\"." },
      { q: "Who started their hobby because of a family problem?", answer: 3, explanation: "Deniz started cooking when his mum broke her arm and he \"had to help in the kitchen\"." },
      { q: "Who writes information about their hobby in a notebook?", answer: 3, explanation: "Deniz watches cooking programmes and \"writes the recipes in a red notebook\"." },
      { q: "Who tells a funny story about a big mistake?", answer: 3, explanation: "Deniz once put salt in a cake instead of sugar, \"and only our dog wanted to eat it\"." }
    ]
  },
  {
    id: "k-rmatch1-03",
    title: "Four People Talk About Their Jobs",
    sections: [
      {
        label: "A",
        text: "Rosa: I am a baker in a small shop near the market square. My work starts at four o'clock in the morning, when the streets are still dark and quiet. Getting up so early was terrible in the first year, but now I like the quiet mornings. The best moment of my day is when I open the shop door and the smell of fresh bread goes out into the street. Many customers have come every day for years, and I know most of their names."
      },
      {
        label: "B",
        text: "Sam: I drive a school bus in a small village. I do the same journey four times a day, morning and afternoon. The children are usually funny and friendly, but the noise can give me a headache on Fridays, when they are excited about the weekend. In the middle of the day, I have three free hours. I use them to fix things in my garden or to have a long lunch with my wife. In summer, when the school is closed, I drive tourists to the mountains instead."
      },
      {
        label: "C",
        text: "Nina: I work in a flower shop in the city centre. People think my job is just standing near beautiful flowers, but there is a lot to learn. I studied for two years to know the names of hundreds of plants and how to care for them. The water and the cold room make my hands hurt in winter. But when a customer buys flowers for a wedding or a birthday, I feel part of their happy day, and that is worth everything."
      },
      {
        label: "D",
        text: "Paul: I am a postman in a busy part of town. I walk about fifteen kilometres every day, so I never need to go to a gym. Rain is my enemy in autumn, and dogs are sometimes a problem too, although most of them just want to play. Old people on my street often wait for me at their doors, because I am the only person they talk to some days. I always find two or three minutes for them. Letters can wait a little; people should not."
      }
    ],
    questions: [
      { q: "Who starts work when it is still dark outside?", answer: 0, explanation: "Rosa's work starts at four in the morning, \"when the streets are still dark and quiet\"." },
      { q: "Who found their working hours difficult at first?", answer: 0, explanation: "Rosa says getting up so early \"was terrible in the first year\", but now she likes the quiet mornings." },
      { q: "Who does a different job in the summer?", answer: 1, explanation: "In summer, when the school is closed, Sam drives \"tourists to the mountains instead\"." },
      { q: "Who has free time in the middle of the working day?", answer: 1, explanation: "Sam has three free hours in the middle of the day for his garden or a long lunch with his wife." },
      { q: "Who says the noise at work is sometimes a problem?", answer: 1, explanation: "Sam says the children's noise \"can give me a headache on Fridays\" when they are excited." },
      { q: "Who needed to study for their job?", answer: 2, explanation: "Nina studied for two years to learn the names of hundreds of plants and how to care for them." },
      { q: "Whose hands hurt because of their job in winter?", answer: 2, explanation: "Nina says \"the water and the cold room make my hands hurt in winter\"." },
      { q: "Who gets a lot of exercise at work?", answer: 3, explanation: "Paul walks about fifteen kilometres every day, so he \"never needs to go to a gym\"." },
      { q: "Who spends time talking to lonely people?", answer: 3, explanation: "Old people wait for Paul because he is the only person they talk to some days, and he always finds a few minutes for them." },
      { q: "Who knows the names of most of their customers?", answer: 0, explanation: "Rosa says many customers have come for years and \"I know most of their names\"." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = window.READING.match.concat(BANK);
})();
