/* KET Prep bank: Matching Headings reading (wave 2) */
(function () {
var BANK = [
  {
    id: "k-head2-01",
    title: "The School That Learned to Cook",
    sections: [
      { label: "A", text: "Three years ago, the teachers at Hillside School asked their students a simple question: 'Can you cook one hot meal?' Only nine children in the whole school said yes. Many students ate bread or crisps for dinner because nobody at home had time to cook. The head teacher decided to do something. She turned an old art room into a small kitchen with six tables, six cookers and a big sink, and every class now has one cooking lesson a week." },
      { label: "B", text: "The first lessons are not about food at all. Students learn how to wash their hands, how to hold a knife and how to keep the cooker clean. Then they make very easy things: tomato soup, egg sandwiches and pasta with cheese. 'We start slowly,' says Mr Baker, the cooking teacher. 'A child who can make good soup is happy. A child who burns a big dinner on the first day never wants to cook again.'" },
      { label: "C", text: "Behind the school there is a garden. Students grow tomatoes, potatoes, beans, carrots and lots of herbs in it. On Monday morning, one class picks the vegetables, washes them and puts them in boxes for the kitchen. The children like this part very much because they can eat something they planted themselves. In summer, the garden gives the kitchen almost half of its vegetables, and the school buys much less food from shops." },
      { label: "D", text: "On the last Friday of every month, the school hall becomes a café. Students cook lunch for their parents and grandparents, and they also write the menu, put flowers on the tables and take the money. A meal costs two pounds. The café is always full, and families sometimes wait outside the door. The money goes back into the kitchen for new pans, new plates and more seeds for the garden." },
      { label: "E", text: "The best result is not in the school but in the houses around it. Parents say their children now cook dinner at home once or twice a week. Some students cook for younger brothers and sisters when their parents work late. One girl in Year 6 makes soup every Sunday for her grandmother, who lives alone. 'They started with a lesson,' says the head teacher, 'and now they have a new habit for life.'" }
    ],
    options: [
      "Growing the food in the school garden",
      "A café for families once a month",
      "The problem that started everything",
      "Cooking competitions between schools",
      "Simple first lessons, simple first meals",
      "New habits that travel home",
      "How to open a restaurant in town",
      "Teaching parents to grow flowers"
    ],
    questions: [
      { q: "Paragraph A", answer: 2, explanation: "Only nine children could cook a hot meal, so the head teacher built a school kitchen - this is the problem that started the whole project." },
      { q: "Paragraph B", answer: 4, explanation: "The first lessons are about washing hands and easy dishes like soup and sandwiches - simple first lessons with simple food." },
      { q: "Paragraph C", answer: 0, explanation: "This paragraph is about the garden behind the school, where students grow and pick vegetables for the kitchen." },
      { q: "Paragraph D", answer: 1, explanation: "On the last Friday of the month the hall becomes a café where students cook lunch for their families." },
      { q: "Paragraph E", answer: 5, explanation: "Children now cook at home for brothers, sisters and grandparents - the habit has travelled from school to their houses." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
