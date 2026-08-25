/* KET Prep bank: Matching Headings reading (wave 4) */
(function () {
var BANK = [
  {
    id: "k-head4-01",
    title: "A Saturday at the Animal Shelter",
    sections: [
      { label: "A", text: "The shelter is a low white building behind the sports field, and on Saturday mornings it opens at nine. Twelve volunteers arrive before that, because the dogs have been alone since ten o'clock the night before. The first hour is always the same: clean water in every bowl, food for the young animals first, and a quick look at each cage to see who ate and who did not. Nobody talks much before the coffee at ten." },
      { label: "B", text: "Most of the animals here did not come from the street. Some arrived because a family moved to a flat where animals are not allowed. Others came when an old person went into hospital and could not go home again. A few were found in a box by the river. The staff write the story of every animal on a card by the cage, because the next family has the right to know where their new friend comes from." },
      { label: "C", text: "Walking the dogs is the job everybody wants, and there is a list on the wall so that it is fair. Each dog goes out for twenty minutes, twice a day, on a red lead. Volunteers under sixteen always walk with an adult. The rule is simple: no phones in your hand. A dog that pulls suddenly can be strong enough to take a lead out of fingers that are busy with something else." },
      { label: "D", text: "People who want to take an animal home cannot do it the same day. First they talk to a member of staff for half an hour about their flat, their working hours and who will be at home. Then they visit the animal three times. Only after that do they sign the papers and pay a small fee, which covers the injections the animal has already had. About one family in four changes its mind, and the staff say that is a good thing." },
      { label: "E", text: "The shelter costs money every day: food, heating, and above all the vet. There is a box for coins at the door, but most of the money comes from other places — a second-hand shop in town that gives its Saturday takings, a school that runs a cake sale every spring, and about two hundred people who send a small amount every month. Without the last group, the doors would close." }
    ],
    options: [
      "Where the animals come from",
      "How the money is found",
      "The first hour of the day",
      "Taking the dogs out",
      "How to become a vet",
      "Why some animals are ill",
      "The rules for taking an animal home",
      "A new building for the shelter"
    ],
    questions: [
      { q: "Paragraph A", answer: 2, explanation: "Volunteers arrive before nine to give water and food and to check every cage - this is the routine of the first hour." },
      { q: "Paragraph B", answer: 0, explanation: "Families moving, an owner going into hospital, a box by the river - the paragraph explains how the animals arrived." },
      { q: "Paragraph C", answer: 3, explanation: "The list on the wall, twenty minutes twice a day, the red lead and the no-phones rule are all about walking the dogs." },
      { q: "Paragraph D", answer: 6, explanation: "The interview, three visits, the papers and the fee are the conditions for adopting an animal." },
      { q: "Paragraph E", answer: 1, explanation: "The coin box, the second-hand shop, the cake sale and the monthly donors are where the shelter's money comes from." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
