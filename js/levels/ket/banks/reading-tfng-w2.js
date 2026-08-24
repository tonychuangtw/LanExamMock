/* KET Prep bank: True/False/Not Given reading (wave 2) */
(function () {
var BANK = [
  {
    id: "k-tfng2-01",
    title: "The First Stamp in the World",
    text: "Today we put a small piece of paper on a letter, and the letter can travel to the other side of the world. This piece of paper is a stamp. Stamps look very ordinary, but they are not very old.\nBefore 1840, sending a letter in Britain was difficult and expensive. The person who received the letter paid for it, not the person who sent it. The price was different for every journey. A long journey cost more than a short one, and two pieces of paper cost more than one. Sometimes a letter cost more than a worker could earn in a day. Poor families could not pay, so they did not write.\nSome clever people found a way to send news for free. They wrote a secret sign on the outside of the envelope. Their friend looked at the envelope in the street, understood the sign and then said, 'No, thank you, I do not want this letter.' Nobody paid, and nobody opened the letter, but the news arrived.\nA teacher called Rowland Hill thought this system was silly. He wrote a small book with a new idea: one low price for every letter in the country, and the person who sends the letter pays first. Many people in the government did not like the plan, but in 1840 they tried it.\nThe first stamp was black, and it showed the head of the young Queen Victoria. It cost one penny, so people called it the Penny Black. In the first year, the number of letters in Britain more than doubled. Poor families could write to their children at last.\nThe Penny Black did not have the name of the country on it, because at that time no other country had stamps. British stamps still do not show the country name today. They show the head of the king or queen instead, and everybody knows where they come from.",
    questions: [
      {
        q: "Before 1840, the person who received a letter usually paid for it.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the text says 'The person who received the letter paid for it, not the person who sent it.'"
      },
      {
        q: "Before 1840, every letter in Britain cost the same price.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'The price was different for every journey. A long journey cost more than a short one.'"
      },
      {
        q: "Some people sent news without paying by writing a sign on the envelope.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the friend 'looked at the envelope in the street, understood the sign' and then refused the letter, so nobody paid."
      },
      {
        q: "The government gave Rowland Hill money for his idea.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - we are told the government tried his plan in 1840, but nothing is said about paying him."
      },
      {
        q: "The first stamp showed a picture of the queen.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'it showed the head of the young Queen Victoria'."
      },
      {
        q: "British stamps today show the name of the country.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'British stamps still do not show the country name today. They show the head of the king or queen instead.'"
      },
      {
        q: "Children in Britain collect stamps more often than adults do.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text never talks about collecting stamps."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
