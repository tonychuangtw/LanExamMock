/* KET Prep bank: True/False/Not Given reading (wave 4) */
(function () {
var BANK = [
  {
    id: "k-tfng4-01",
    title: "The Story of Popcorn",
    text: "People have been eating popcorn for a very long time. In caves in Mexico and Peru, scientists have found old corn that people cooked thousands of years ago. Not every kind of corn pops. The corn we buy for popcorn has a hard shell and a little water inside each seed. When you heat the seed, the water turns into steam. The steam wants to get out, the shell breaks, and the soft white part jumps out — that is the 'pop' you hear.\nFor many years, people made popcorn in a pan on the fire, and it was easy to burn it. Then, in the 1890s, an American called Charles Cretors built a machine on wheels that made popcorn in the street. People could smell it from far away, and they stopped to buy some. Popcorn became a street food, like ice cream.\nWhen cinemas first opened, they did not want popcorn inside. The owners said it was noisy and dirty, and it made the carpets sticky. People bought popcorn outside and hid it in their bags. Later, in the 1930s, many people had little money, but popcorn was cheap. Cinemas began to sell it themselves, and they made more money from popcorn than from tickets. Today it is difficult to imagine a cinema without it.\nAt home, most people now use a microwave. The bag has a little oil and salt inside, and the seeds pop in about two minutes. Some people say the old way, in a pan with a lid, tastes better. What everybody agrees on is the sound: two minutes of noise, and then silence — which means it is time to stop cooking.",
    questions: [
      {
        q: "People ate popcorn thousands of years ago.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'In caves in Mexico and Peru, scientists have found old corn that people cooked thousands of years ago'."
      },
      {
        q: "Every kind of corn can pop.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'Not every kind of corn pops'; popping corn has a hard shell and water inside."
      },
      {
        q: "The corn pops because the water inside turns into steam.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'the water turns into steam. The steam wants to get out, the shell breaks'."
      },
      {
        q: "Charles Cretors sold his popcorn machines to cinemas.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - we are told he built a street machine in the 1890s, but nothing about selling machines to cinemas."
      },
      {
        q: "The first cinema owners were happy to have popcorn in their cinemas.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'they did not want popcorn inside ... it was noisy and dirty, and it made the carpets sticky'."
      },
      {
        q: "In the 1930s, cinemas earned more from popcorn than from tickets.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'Cinemas began to sell it themselves, and they made more money from popcorn than from tickets'."
      },
      {
        q: "Popcorn made in a microwave is cheaper than popcorn made in a pan.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text compares the taste and the method, but never the price of the two ways."
      },
      {
        q: "When the popping noise stops, the popcorn is ready.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'two minutes of noise, and then silence — which means it is time to stop cooking'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
