/* PET Prep bank: Matching Headings reading (wave 5) */
(function () {
var BANK = [
  {
    id: "p-head5-01",
    title: "The Bakery That Works at Night",
    sections: [
      { label: "A", text: "The ovens are lit at half past eleven at night and the first batch is out by three. Nobody in the bakery uses an alarm clock any more; after a few months the body simply wakes at ten in the evening whether you want it to or not. The two bakers eat their main meal at midnight, and both say the hardest part of the job is not the hours but explaining the hours to friends who keep inviting them to dinner." },
      { label: "B", text: "Bread cannot be hurried, and that is the whole reason for the night shift. The dough for the sourdough loaves is mixed at eight in the evening and left to rise slowly in a cool room for seven hours, which is what gives it the flavour and the open texture people pay for. Warm the room and you can halve the time, but the bread tastes flat, and the bakers say a customer notices within a week." },
      { label: "C", text: "The first customers arrive before five: taxi drivers finishing a shift, two nurses from the hospital who come every Thursday, and a man who has bought the same rye loaf every morning for nine years and has never given his name. The shop is not officially open, but the door is unlocked, and anybody who knows is served." },
      { label: "D", text: "Whatever is unsold by six in the evening goes into three groups. The best is collected by a charity that runs a soup kitchen; slightly older bread is sold in bags at a third of the price; anything left is dried and turned into breadcrumbs for the restaurant next door. The owner says the day they throw bread away is the day they have priced or baked badly." },
      { label: "E", text: "Twice the owner has been asked to open a second shop, and twice she has said no. Her reason is not modesty but arithmetic: a second bakery would need a manager she trusts to be awake at midnight, and she has never met one who lasted. She would rather sell four hundred loaves well than eight hundred badly, and she says the decision gets easier every year." }
    ],
    options: [
      "Living on the opposite clock",
      "Why the work has to happen at night",
      "The customers who come before opening",
      "How the bread is delivered across the city",
      "Nothing is thrown away",
      "Choosing not to grow",
      "Training new bakers",
      "The cost of flour"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "Ovens at half past eleven, waking at ten in the evening, dinner at midnight - life on an inverted clock." },
      { q: "Paragraph B", answer: 1, explanation: "The seven-hour cool rise is why the shift is at night: hurry it and the bread tastes flat." },
      { q: "Paragraph C", answer: 2, explanation: "Taxi drivers, nurses and the man with the rye loaf are served before the shop officially opens." },
      { q: "Paragraph D", answer: 4, explanation: "Charity, cheap bags and breadcrumbs mean unsold bread never becomes waste." },
      { q: "Paragraph E", answer: 5, explanation: "Two refusals to open a second shop, for a practical reason - a deliberate decision not to expand." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
