/* FCE Prep bank: True/False/Not Given reading (wave 3) */
(function () {
var BANK = [
  {
    id: "f-tfng3-01",
    title: "Losing the Dark",
    text: "For almost all of human history, a clear night meant a sky full of stars. That is no longer true for most of us. Studies of satellite images suggest that around four fifths of the world's population now lives under skies affected by artificial light, and that roughly a third of humanity can no longer see the Milky Way from home. In parts of Europe and North America the figure is far higher. Astronomers were the first to complain, but they are no longer the only ones.\nThe change accelerated when cities replaced their old orange lamps with white LEDs. LEDs use far less electricity for the same amount of light, and councils across the world switched over in order to cut their bills. What happened next surprised some of them. Because light had become cheap, many places installed more of it, or made existing lights brighter, and the money saved on electricity was quietly spent on illuminating car parks, buildings and signs that had previously been dark. Researchers call this the rebound effect, and it is one reason why measurements of night-time brightness have kept rising even as lamps have become more efficient.\nThe colour matters as well as the quantity. The blue-rich white light produced by many early LEDs scatters more easily in the atmosphere than warmer, yellower light, so it spreads the glow further from its source. Blue light also has stronger effects on living things. Migrating birds are drawn towards lit buildings and towers, sometimes fatally. Newly hatched sea turtles, which have evolved to crawl towards the brightest horizon, turn inland towards streetlights instead of towards the sea. Insect numbers around bright lamps fall sharply, and with them the food supply of the animals that eat insects.\nWhat is unusual about light pollution is that, unlike most kinds of pollution, it disappears the moment you switch off the source. The remedies are neither expensive nor dramatic. Shielded fittings that direct light downwards, warmer colour temperatures, lower brightness levels, and dimming or switching off lamps in the middle of the night all reduce the glow considerably. In England, a large study of authorities that had reduced street lighting found no clear evidence that crime or road accidents had increased as a result, although the debate continues locally whenever a council proposes it.\nNobody serious is arguing that towns should go dark. Light at night keeps people safe, extends the working day and makes cities pleasant. The argument is about where the light goes, what colour it is, and how much of it escapes upwards into a sky that, in principle, we could still share with the rest of the universe.",
    questions: [
      {
        q: "Most people in the world now live under skies affected by artificial light.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'around four fifths of the world's population now lives under skies affected by artificial light'."
      },
      {
        q: "LEDs produce the same amount of light using less electricity than the lamps they replaced.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'LEDs use far less electricity for the same amount of light'."
      },
      {
        q: "LED street lamps are more expensive to install than the older orange lamps.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text discusses running costs and the money saved on electricity, but says nothing about installation costs."
      },
      {
        q: "Warmer, yellower light scatters more in the atmosphere than blue-rich white light.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - it is the other way round: 'blue-rich white light ... scatters more easily in the atmosphere than warmer, yellower light'."
      },
      {
        q: "Baby sea turtles can be led away from the sea by street lighting.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - they 'have evolved to crawl towards the brightest horizon' and so 'turn inland towards streetlights instead of towards the sea'."
      },
      {
        q: "Reducing street lighting in England was shown to cause a clear rise in crime.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the study 'found no clear evidence that crime or road accidents had increased as a result'."
      },
      {
        q: "Most towns that dim their lights at night do so after a public vote.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - local debate is mentioned, but the text never says how such decisions are made."
      },
      {
        q: "The writer believes towns should stop using outdoor lighting altogether.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'Nobody serious is arguing that towns should go dark'; the argument is about direction, colour and quantity of light."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
