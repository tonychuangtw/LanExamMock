/* KET Prep bank: True/False/Not Given reading (wave 1) */
(function () {
var BANK = [
  {
    id: "k-tfng-01",
    title: "The Story of Ice Cream",
    text: "Ice cream is one of the most popular sweet foods in the world. People eat it in hot countries and in cold countries, in summer and in winter. But where does it come from? The story is very old. More than a thousand years ago, people in China mixed snow from the mountains with fruit and honey. Rich families in old Rome also enjoyed cold sweet food. Runners brought ice down from the mountains, and cooks mixed it with fruit juice for special dinners. For many centuries, only rich people could eat ice cream. Ice was hard to find and expensive to keep, so ordinary families never tasted it. That changed in the nineteenth century. New machines could make ice cheaply, and shops began to sell ice cream in the street. In America, a woman called Nancy Johnson invented a small hand machine for making ice cream at home in 1843. It was cheap and easy to use, and soon many families had one in the kitchen. The ice cream cone also has an interesting story. Many people say it became popular at a big fair in America in 1904. An ice cream seller had no more clean plates, so a man selling thin waffles rolled one into the shape of a cone. Customers loved eating the ice cream and the plate together. Today, people around the world eat billions of litres of ice cream every year. There are hundreds of flavours, from chocolate and strawberry to green tea and even cheese. Vanilla is still one of the most popular flavours in many countries. Some towns have ice cream museums, and some restaurants make ice cream that looks like spaghetti. Simple or strange, ice cream makes people happy, and that has not changed in a thousand years.",
    questions: [
      {
        q: "More than a thousand years ago, people in China mixed snow with fruit and honey.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the text says that more than a thousand years ago, \"people in China mixed snow from the mountains with fruit and honey\"."
      },
      {
        q: "In old Rome, everyone could eat cold sweet food at dinner.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the text says \"Rich families in old Rome\" enjoyed it, and that for centuries only rich people could eat ice cream."
      },
      {
        q: "Nancy Johnson invented a hand machine for making ice cream at home.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the text says Nancy Johnson \"invented a small hand machine for making ice cream at home in 1843\"."
      },
      {
        q: "Nancy Johnson became very rich because of her machine.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text says the machine was cheap and popular, but it says nothing about how much money Nancy Johnson made."
      },
      {
        q: "The ice cream cone story happened at a fair in America.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the text says many people say the cone became popular \"at a big fair in America in 1904\"."
      },
      {
        q: "The man at the fair rolled a plate to make the first cone.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - he was selling thin waffles and \"rolled one into the shape of a cone\"; he did not roll a plate."
      },
      {
        q: "Chocolate is the most popular ice cream flavour in the world.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text says vanilla is \"one of the most popular flavours\", but it does not say which flavour is the most popular in the world."
      }
    ]
  },
  {
    id: "k-tfng-02",
    title: "Elephants: Big and Clever",
    text: "Elephants are the biggest animals that live on land. An adult African elephant can weigh as much as six family cars. There are two main kinds of elephants: African elephants and Asian elephants. African elephants are bigger and have larger ears. Asian elephants are a little smaller, and their ears are smaller too. Elephants live in family groups. The leader of the group is usually the oldest female. She remembers where to find water and food, even in very dry years, and the others follow her. Young elephants stay close to their mothers, and aunts and sisters also help to look after them. Elephants use their long trunks for many jobs. A trunk can pick up a small fruit or pull down a heavy branch. Elephants drink by putting water in the trunk and then pouring it into the mouth. On hot days, they use the trunk like a shower and cover their skin with water or mud. The mud keeps their skin safe from the strong sun. Elephants are also very clever. They can remember other elephants and people for many years. Scientists have watched elephants use branches to keep flies away, and some elephants can open simple locks with their trunks. Elephants talk to each other with deep sounds. Some of these sounds are so low that people cannot hear them, but other elephants can hear them from far away. An elephant eats a lot. In one day, an adult can eat more than one hundred kilograms of grass, leaves and fruit, and it spends most of the day eating. Elephants also love water and are very good swimmers. Many people around the world are working to keep elephants safe, because these big, clever animals need a lot of space to live.",
    questions: [
      {
        q: "African elephants have bigger ears than Asian elephants.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the text says African elephants \"are bigger and have larger ears\", while Asian elephants' ears are smaller."
      },
      {
        q: "The leader of an elephant family is usually the strongest male.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the text says the leader \"is usually the oldest female\", not a male."
      },
      {
        q: "Elephants drink water through their trunks like a straw.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - elephants put water in the trunk \"and then pour it into the mouth\"; they do not drink through the trunk."
      },
      {
        q: "Mud helps to protect elephants' skin from the sun.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the text says elephants cover their skin with mud and \"the mud keeps their skin safe from the strong sun\"."
      },
      {
        q: "Elephants can hear some sounds that people cannot hear.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - some elephant sounds are so low that people cannot hear them, \"but other elephants can hear them from far away\"."
      },
      {
        q: "Asian elephants live longer than African elephants.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text compares their size and ears, but it says nothing about how long each kind of elephant lives."
      },
      {
        q: "Baby elephants can swim before they can walk.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text says elephants are very good swimmers, but it does not talk about when baby elephants learn to swim or walk."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
