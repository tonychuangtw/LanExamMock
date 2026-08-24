/* KET Prep bank: Reading gapped text (A2) — week 5 */
(function () {
var BANK = [
  {
    id: "k-rgap5-01",
    title: "The Day We Painted the Classroom",
    segments: [
      "Our classroom was grey and rather sad. The paint was old, and in one corner there was a large mark that looked like a map of an island. In March, our teacher Miss Foster asked the head teacher if we could paint the room ourselves. To everyone's surprise, the answer was yes.",
      "Nobody could agree. Half the class wanted dark blue, because it looks like space, and half wanted yellow, because it looks like sunshine. In the end we voted, and yellow won by two votes. The blue group were not happy, so Miss Foster promised them one blue wall.",
      "We carried the tables into the corridor and covered the floor with old newspapers. Miss Foster showed us how to hold a brush properly and how to paint in one direction. She also told us three times not to run with an open tin, which was good advice, because Leo ran with an open tin.",
      "By four o'clock, three walls were yellow, one wall was blue, and my hair was both. We were tired and our arms hurt, but nobody wanted to stop. The room already looked twice as big. Even the island-shaped mark had disappeared under the new paint.",
      "On Monday morning, students from other classes came to look through our door. Our head teacher took a photograph for the school website. Miss Foster said the room felt like a different place, and she was right.",
      "That was two years ago, and the paint is still bright. When I visit the school next year, I will look through that door too, and I will remember the day my hair was yellow and blue."
    ],
    options: [
      "First we had to choose a colour.",
      "On Saturday morning, twelve of us came to school in old clothes.",
      "Painting is a very popular hobby in many countries.",
      "We finished the whole room in one day.",
      "We locked the door and left the paint to dry over the weekend.",
      "I am in a different school now."
    ],
    answers: [0, 1, 3, 4, 5],
    explanations: [
      "'First we had to choose a colour' introduces the disagreement about blue and yellow and the vote that follows.",
      "'Twelve of us came to school in old clothes' explains who did the work described next: carrying tables and covering the floor.",
      "'We finished the whole room in one day' fits before 'By four o'clock, three walls were yellow' and the tired but happy ending of the day.",
      "'We locked the door and left the paint to dry over the weekend' explains the gap between Saturday's painting and Monday morning, when other students came to look.",
      "'I am in a different school now' explains why the writer talks about visiting the school next year and looking through the door."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
