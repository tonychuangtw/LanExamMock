/* PET Prep bank: IELTS-style True/False/Not Given reading (B1) */
(function () {
var BANK = [
  {
    id: "p-tfng-01",
    title: "The Sweet History of Ice Cream",
    text: "Ice cream feels like a modern pleasure, but people have been cooling their desserts for thousands of years. More than two thousand years ago, wealthy families in China mixed snow with milk and rice, and rulers in ancient Persia enjoyed a dish of ice flavoured with fruit juice and rose water. Because there were no freezers, ice had to be collected from mountains in winter and stored underground in special ice houses, packed with straw so that it would last through the summer. Only the very rich could afford such luxury.\nFor centuries, frozen desserts remained a secret of royal courts. In the 1600s, Italian cooks brought new recipes to France, and cafés in Paris began serving flavoured ices to the public. One famous café, opened in 1686, still serves ice cream today. Even then, however, ice cream stayed expensive, because making it required large amounts of ice and salt and hours of tiring work by hand.\nEverything changed in the nineteenth century. In 1843, an American woman named Nancy Johnson invented a hand-turned machine that made ice cream faster and smoother, and her design is still the basis of some machines used today. Later, factories, cheap sugar and, finally, electric freezers turned ice cream from a royal treat into an everyday one. Street sellers appeared in many cities, selling small portions that ordinary workers could afford.\nThe twentieth century added the ice cream cone, which, according to a popular story, became famous at a fair in America in 1904, when an ice cream seller ran out of dishes and a nearby waffle maker rolled his waffles into cones to help. Today, ice cream is a global industry, and surveys regularly place vanilla among the most popular flavours in the world, although new varieties appear every year, from green tea to olive oil. From mountain snow carried on horseback to supermarket freezers, the journey of ice cream shows how a luxury can slowly melt into ordinary life.",
    questions: [
      {
        q: "In ancient times, only wealthy people could enjoy frozen desserts.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the text says ice had to be collected and stored at great cost, and \"Only the very rich could afford such luxury\"."
      },
      {
        q: "Ice for ancient desserts was kept in buildings above the ground.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the ice was \"stored underground in special ice houses\", not in buildings above the ground."
      },
      {
        q: "The Paris café that opened in 1686 has now closed down.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the text states that this famous café \"still serves ice cream today\"."
      },
      {
        q: "Nancy Johnson earned a large amount of money from her invention.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text describes her machine and its lasting influence, but says nothing about how much money she made."
      },
      {
        q: "Electric freezers helped make ice cream an everyday product.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - factories, cheap sugar and \"finally, electric freezers turned ice cream from a royal treat into an everyday one\"."
      },
      {
        q: "The story about the 1904 fair says the cone was invented to solve a problem.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - in the story, the seller \"ran out of dishes\" and the waffle maker rolled cones to help, solving the problem of missing dishes."
      },
      {
        q: "Chocolate is the world's most popular ice cream flavour.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text mentions that vanilla is regularly among the most popular flavours, but it does not rank chocolate at all."
      }
    ]
  },
  {
    id: "p-tfng-02",
    title: "Foxes in the City",
    text: "If you walk through a European city late at night, you may see an unexpected resident: the red fox. Foxes began moving into British cities in the 1930s, when new suburbs with large gardens spread into the countryside, and they have been urban neighbours ever since. Today, some studies suggest that certain cities have more foxes per square kilometre than the surrounding farmland. London alone is thought to be home to around ten thousand of them.\nCities suit foxes surprisingly well. Gardens, parks, railway banks and cemeteries offer quiet places to rest and raise cubs, while food is easy to find. Urban foxes eat an extremely varied menu: insects, fruit, earthworms, rats and pigeons, as well as food that people leave out for them, either on purpose or in unsecured rubbish bags. A fox will bury extra food and return to it later, sometimes remembering dozens of hiding places. Contrary to their reputation, foxes are not a significant danger to people, and they generally avoid cats, which are often heavy enough to defend themselves confidently.\nCity life has even started to change foxes themselves. Researchers who compared urban and rural foxes found that city animals are bolder around traffic and noise, and some scientists have measured small differences in the shape of their skulls, possibly connected to their different diet. Urban foxes also live in smaller territories than country foxes, because food is so much easier to find that a few streets can support a whole family.\nNot everyone welcomes them. Some residents complain about noise during the winter, when foxes call to each other, and about holes dug in flower beds. Others feed them regularly and give them names. Wildlife organisations advise something in between: enjoy watching foxes, but do not try to tame them, because a fox that loses its natural caution around one person may approach others, and not every human it meets will wish it well.",
    questions: [
      {
        q: "Foxes first appeared in British cities in the 1930s.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the text says foxes \"began moving into British cities in the 1930s\" as new suburbs spread."
      },
      {
        q: "London has more foxes than any other European city.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - London is said to have around ten thousand foxes, but the text never compares it with other European cities."
      },
      {
        q: "Urban foxes depend on one main type of food.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - their menu is \"extremely varied\": insects, fruit, earthworms, rats, pigeons and food left by people."
      },
      {
        q: "Foxes often attack pet cats in cities.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the text says foxes \"generally avoid cats\", which are often heavy enough to defend themselves."
      },
      {
        q: "City foxes need less space than foxes living in the countryside.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - urban foxes \"live in smaller territories than country foxes\" because food is easier to find."
      },
      {
        q: "Scientists have proved that city foxes live longer than rural foxes.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the research mentioned covers boldness, skull shape and territory size, but nothing is said about how long foxes live."
      },
      {
        q: "Wildlife organisations recommend that people should not try to tame foxes.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - their advice is to enjoy watching foxes \"but do not try to tame them\", because a too-trusting fox may approach the wrong person."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
