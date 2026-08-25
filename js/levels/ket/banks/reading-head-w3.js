/* KET Prep bank: Matching Headings reading (wave 3) */
(function () {
var BANK = [
  {
    id: "k-head3-01",
    title: "Our School Garden",
    sections: [
      { label: "A", text: "Two years ago, the ground behind the sports hall was full of old chairs, broken boxes and tall grass. Nobody went there. Our science teacher, Mr Alvarez, asked the head teacher if our class could clean it, and she said yes. Twenty of us worked on three Saturdays in October. We carried everything away in a friend's van. At the end we had an empty piece of ground, very dirty hands and a plan." },
      { label: "B", text: "Now there are eight long beds. We grow tomatoes, beans, lettuce, carrots and strawberries, and next to the wall there are herbs: mint, basil and rosemary. Mr Alvarez chose these plants because they grow quickly. That is important in a school, because students want to see something happen before the end of the term. The strawberries are the most popular, and they never arrive in the kitchen." },
      { label: "C", text: "Our first year was difficult. Birds ate the young lettuce almost every night, and snails ate nearly everything else. Now we put nets over two of the beds, and after rain we go out with a bucket and move the snails to the field behind the school. We lose a few plants every week, but we do not use anything from a bottle to kill them, because we eat what we grow." },
      { label: "D", text: "On Wednesday mornings we carry boxes of vegetables to the school kitchen. The cooks use them in the salad and in the soup of the day, and there is a small sign on the counter with the name of the class that grew them. When there is more than the kitchen needs, we sell bags of vegetables to parents at the school gate for one euro, and the money buys seeds for the next year." },
      { label: "E", text: "The hardest time is the summer holiday, when the school is closed for six weeks and nobody is there. Families take turns: each family waters the garden for four or five days, and there is a paper on the gate with all the names and dates. Last August the tomato plants grew so tall that the family in the last week could not reach the top ones without a chair." }
    ],
    options: [
      "Animals that eat our plants",
      "How the garden started",
      "Learning to cook at school",
      "What we plant, and why",
      "A garden competition between schools",
      "From the garden to the school lunch",
      "Keeping the garden alive in the holidays",
      "Why the school moved to a new building"
    ],
    questions: [
      { q: "Paragraph A", answer: 1, explanation: "The paragraph describes the old, dirty ground and the three Saturdays in October when the class cleared it - this is how the garden began." },
      { q: "Paragraph B", answer: 3, explanation: "It lists the vegetables and herbs and explains the reason for choosing them: they grow quickly, so students see results before the end of term." },
      { q: "Paragraph C", answer: 0, explanation: "Birds ate the lettuce and snails ate almost everything else, and the paragraph explains what the students do about them." },
      { q: "Paragraph D", answer: 5, explanation: "The vegetables go to the school kitchen for the salad and soup, and anything extra is sold to parents." },
      { q: "Paragraph E", answer: 6, explanation: "During the six-week holiday the families take turns watering, with a rota on the gate." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
