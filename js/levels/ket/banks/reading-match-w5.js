/* KET Prep bank: multiple matching (wave 5) */
(function () {
var BANK = [
  {
    id: "k-rmatch5-01",
    title: "Four People Talk About Their Favourite Season",
    sections: [
      { label: "A", text: "Mia: I love summer because my family goes to my aunt's house near the sea every August. We stay for two weeks. I swim every morning before breakfast, and the water is cold at first but then it feels wonderful. In the afternoon it is too hot to play outside, so my cousin and I make ice cream in my aunt's kitchen. My favourite is banana and chocolate. The only bad thing about summer is that my best friend goes to her grandmother's village, so I do not see her for a whole month." },
      { label: "B", text: "Tomás: Autumn is the best season for me. The trees near my school turn red and orange, and I take photos of them with my phone. My father and I go to the forest on Sundays and look for mushrooms. He knows which ones are safe, and I carry the basket. My mother cooks them with rice on Sunday evening. I also like autumn because school starts again. I know many students hate that, but I miss my friends in the holidays, and I like buying new pens." },
      { label: "C", text: "Ella: I choose winter, but not because of snow. In my city it almost never snows; it just rains. I like winter because it is the season of my birthday and because the swimming pool is empty in January, so I can practise properly. I train four times a week. My coach says winter is when swimmers get faster, because nobody wants to come. I wear two jumpers to school and I drink hot chocolate at break time. My brother says I am the only person who is happy in December." },
      { label: "D", text: "Karim: Spring is my season. My grandmother has a small garden behind her flat, and in March we plant tomatoes and beans together. She is eighty-one and she cannot bend down easily, so I do the digging and she tells me exactly where every plant must go. By June we eat our own tomatoes. Spring is also when the football season finishes, and last year my team won the final. It rained during the match and everybody's clothes were brown at the end, but nobody cared." }
    ],
    questions: [
      { q: "Who takes photographs of trees?", answer: 1, explanation: "B: Tomás says the trees turn red and orange and he takes photos of them with his phone." },
      { q: "Who does a sport four times a week?", answer: 2, explanation: "C: Ella trains four times a week at the swimming pool." },
      { q: "Who grows vegetables with an older person?", answer: 3, explanation: "D: Karim plants tomatoes and beans with his eighty-one-year-old grandmother." },
      { q: "Who does not see a friend for several weeks?", answer: 0, explanation: "A: Mia's best friend goes to her grandmother's village, so Mia does not see her for a whole month." },
      { q: "Who is happy when school starts again?", answer: 1, explanation: "B: Tomás likes autumn partly because school starts and he misses his friends in the holidays." },
      { q: "Who likes a place better when there are few people there?", answer: 2, explanation: "C: Ella likes January because the swimming pool is empty and she can practise properly." },
      { q: "Who makes food with a family member in the afternoon?", answer: 0, explanation: "A: Mia and her cousin make ice cream in her aunt's kitchen when it is too hot outside." },
      { q: "Who won a competition last year?", answer: 3, explanation: "D: Karim's football team won the final last year." },
      { q: "Who mentions their birthday?", answer: 2, explanation: "C: Ella says winter is the season of her birthday." },
      { q: "Who collects something in a forest?", answer: 1, explanation: "B: Tomás and his father look for mushrooms in the forest on Sundays." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
