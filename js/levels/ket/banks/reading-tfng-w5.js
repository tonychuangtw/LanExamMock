/* KET Prep bank: True/False/Not Given reading (wave 5) */
(function () {
var BANK = [
  {
    id: "k-tfng5-01",
    title: "Why Bread Rises",
    text: "Bread is made from four simple things: flour, water, salt and yeast. Yeast is not a chemical. It is a living thing, a very small fungus, and it is asleep in the little dry pieces you buy in a packet.\nWhen you add warm water, the yeast wakes up. It starts to eat the sugars in the flour, and while it eats, it makes a gas called carbon dioxide. The gas cannot get out easily, because the dough is soft and sticky, so it stays inside in thousands of tiny bubbles. The bubbles push the dough up. That is why bread rises.\nTemperature is important. If the water is cold, the yeast works very slowly and you will wait a long time. If the water is too hot, the yeast dies and the bread stays flat, like a heavy biscuit. Warm, not hot, is the rule that every baker learns first.\nWhen the bread goes into the oven, two more things happen. The bubbles of gas get bigger in the heat, so the loaf grows a little more, and then the outside becomes hard and brown. Bakers call this the crust. Inside, the little bubbles leave holes, and that is why a slice of bread is full of small holes when you look at it in the light.\nSalt has a job too. It makes the bread taste better, but it also slows the yeast down a little, so the dough does not rise too fast. Bread made without any salt rises quickly and tastes of very little. Every part of the recipe is there for a reason.",
    questions: [
      {
        q: "Yeast is a living thing.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'It is a living thing, a very small fungus', asleep in the dry packet."
      },
      {
        q: "The gas that makes bread rise is carbon dioxide.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the yeast eats sugars in the flour and 'makes a gas called carbon dioxide'."
      },
      {
        q: "Cold water kills the yeast.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - cold water makes the yeast work 'very slowly'; it is water that is too hot that kills it."
      },
      {
        q: "Most bakers use a thermometer to check the water.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text says the water should be warm and not hot, but says nothing about thermometers."
      },
      {
        q: "The loaf grows a little more when it is in the oven.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'The bubbles of gas get bigger in the heat, so the loaf grows a little more'."
      },
      {
        q: "The holes in a slice of bread are made by the bubbles of gas.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'the little bubbles leave holes, and that is why a slice of bread is full of small holes'."
      },
      {
        q: "Salt makes the dough rise faster.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - salt 'slows the yeast down a little, so the dough does not rise too fast'."
      },
      {
        q: "Bread made without salt has very little taste.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'Bread made without any salt rises quickly and tastes of very little'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
