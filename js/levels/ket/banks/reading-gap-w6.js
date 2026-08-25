/* KET Prep bank: Reading gapped text (A2) — week 6 */
(function () {
var BANK = [
  {
    id: "k-rgap6-01",
    title: "The Morning the Lift Broke",
    segments: [
      "Our school library is on the fourth floor, and the lift is old. It makes a noise like an animal waking up, and every year somebody says that it will be replaced. On the first Monday of October, at ten past eight, it stopped between the second and third floors with four people inside.",
      "Nobody was in danger. There is a phone in the lift, and Mr Osei, the caretaker, answered it within a minute and told them to sit down and wait. The engineer, he said, would come before nine o'clock.",
      "The real problem was not the lift. It was the timetable. Aylin uses a wheelchair, and her first three lessons that day were on the third and fourth floors. Without the lift she could not get to a single one of them.",
      "Her form teacher moved the class down to a free room on the ground floor, which took about ten minutes. The maths teacher did the same thing in the second lesson. By break time, half the school had heard what had happened.",
      "In the afternoon the student council asked for a meeting with the head teacher. They did not ask for a new lift, because everybody knew the school could not pay for one that term. They asked for something much smaller and completely free.",
      "The rule is now printed on a card in every classroom: if the lift stops working, the lessons come downstairs. It cost nothing at all, and Aylin says the difference is that she no longer has to ask."
    ],
    options: [
      "Aylin was not one of them; she was waiting on the ground floor for the lift to come down.",
      "They asked for a plan, written before it is needed, saying which ground-floor rooms stay free and who moves each class.",
      "The engineer arrived at ten to nine and had the doors open five minutes later.",
      "Most schools in the city have two lifts.",
      "Everybody said afterwards that this was the obvious thing to do, but it happened only because two teachers thought of it by themselves.",
      "Her friends offered to carry her up the stairs, and she said no, which is also what the school's own safety rules say."
    ],
    answers: [0, 2, 5, 4, 1],
    explanations: [
      "'Aylin was not one of them' follows the four people stuck in the lift, and introduces the person whose whole day the breakdown changed.",
      "The engineer's arrival belongs straight after Mr Osei's promise that the engineer 'would come before nine o'clock'.",
      "'Her friends offered to carry her up the stairs, and she said no' comes after 'she could not get to a single one of them' and before the teachers find a proper solution.",
      "'It happened only because two teachers thought of it by themselves' comments on the two lessons that were moved, and explains why a rule was needed at all.",
      "'They asked for a plan, written before it is needed' is what the student council asked for, and the last paragraph describes exactly that card in every classroom."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
