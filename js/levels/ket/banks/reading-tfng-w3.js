/* KET Prep bank: True/False/Not Given reading (wave 3) */
(function () {
var BANK = [
  {
    id: "k-tfng3-01",
    title: "The Story of the Umbrella",
    text: "Umbrellas are much older than most people think. More than two thousand years ago, people in China, Egypt and other hot countries carried them, but not because of the rain. They used them for shade, to keep the sun off kings, queens and other important people. These early umbrellas were made of paper, leaves or feathers, and ordinary people did not have them.\nIn China, someone had a good idea: put wax or oil on the paper. Water then ran off the umbrella instead of going through it, so it worked in the rain too. This idea travelled slowly from country to country.\nIn Europe in the 1700s, umbrellas were popular with women, but men did not carry them. A gentleman who did not want to get wet took a carriage. An Englishman called Jonas Hanway walked around London with an umbrella for about thirty years. People laughed at him in the street, and the men who drove carriages shouted at him, because he did not pay for their carriages when it rained. After Hanway died, more and more men began to carry umbrellas, and for many years British people called an umbrella a 'Hanway'.\nOld umbrellas were heavy. They had thick wooden sticks and heavy covers, and one umbrella could weigh more than a kilo. In 1852, an Englishman called Samuel Fox made an umbrella with thin steel bars inside. It was much lighter and stronger, and umbrellas like this are still made today. Later, in the twentieth century, engineers in Germany made the first small folding umbrella, which people could put in a bag.\nToday umbrellas are cheap, light and easy to buy. That is also a problem: after a windy day, you can see broken umbrellas in the bins of every city. Some companies now make strong umbrellas with parts that you can change, so one umbrella can last for many years.",
    questions: [
      {
        q: "The first umbrellas were made to keep people dry in the rain.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the text says people used them 'for shade, to keep the sun off kings, queens and other important people', not for rain."
      },
      {
        q: "Two thousand years ago, ordinary people did not have umbrellas.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'These early umbrellas were made of paper, leaves or feathers, and ordinary people did not have them'."
      },
      {
        q: "Wax or oil on the paper stopped the water from going through the umbrella.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'Water then ran off the umbrella instead of going through it, so it worked in the rain too'."
      },
      {
        q: "Jonas Hanway had a shop in London where he sold umbrellas.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - we are told that he walked around London with an umbrella, but nothing about a shop or selling them."
      },
      {
        q: "The carriage drivers were pleased when Hanway walked in the rain.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - they 'shouted at him, because he did not pay for their carriages when it rained'."
      },
      {
        q: "British people once used the name of a person as a word for 'umbrella'.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'for many years British people called an umbrella a Hanway'."
      },
      {
        q: "Samuel Fox's steel umbrella cost less than the old wooden ones.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text says the steel umbrella was 'lighter and stronger', but it says nothing about the price."
      },
      {
        q: "Umbrellas today are lighter than umbrellas two hundred years ago.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - old umbrellas 'could weigh more than a kilo', and today umbrellas are described as 'cheap, light and easy to buy'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
