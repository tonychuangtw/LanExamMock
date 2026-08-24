/* FCE Prep bank: True/False/Not Given reading (wave 2) */
(function () {
var BANK = [
  {
    id: "f-tfng2-01",
    title: "The Wristwatch Went to War",
    text: "For most of the nineteenth century, a gentleman kept his watch in his waistcoat pocket on a chain, and a watch worn on the wrist was regarded as jewellery for women. Advertisements aimed at men described pocket watches as reliable and dignified; wristlets, as they were then called, were sold in jewellers' cases beside bracelets. A soldier who strapped a watch to his arm risked being laughed at by his own officers.\nThe change began at the edges of empire rather than in fashionable cities. Officers in colonial campaigns of the 1880s and 1890s found that fumbling in a pocket while holding a rifle or the reins of a horse was, at best, inconvenient. Some cut the loop off a small pocket watch and sewed it into a leather strap. Watchmakers noticed. By the turn of the century a few firms were producing purpose-built wristlets with wire loops soldered to the case, though sales remained modest.\nIt was the First World War that settled the question. Coordinated artillery barrages required officers in different positions to act at precisely the same minute, and an officer climbing out of a trench could not stop to search his clothing. Military suppliers responded with watches designed for the conditions: luminous dials that could be read at night, and metal grilles over the glass to protect it. Soldiers who survived came home wearing them, and the object that had once seemed effeminate now carried the opposite association entirely.\nThe pocket watch did not vanish overnight, and for a decade the two styles competed. But by the mid-1930s wristwatches outsold pocket watches by a wide margin, and the trade press, which had confidently predicted a return to the pocket, quietly stopped mentioning it.\nThe story has repeated itself more recently. When smartwatches first appeared, many reviewers dismissed them as toys for people who already owned a phone. What eventually persuaded a wider public was not the technology in the advertisements but a practical argument of exactly the same kind as the one that convinced those cavalry officers: some information is worth having on your wrist because your hands are busy.",
    questions: [
      {
        q: "In the nineteenth century, wrist-worn watches were mainly marketed to women.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'a watch worn on the wrist was regarded as jewellery for women' and wristlets were sold 'beside bracelets'."
      },
      {
        q: "Some officers adapted pocket watches themselves before manufacturers offered wrist versions.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'Some cut the loop off a small pocket watch and sewed it into a leather strap' and only then did watchmakers respond."
      },
      {
        q: "Purpose-built wristlets sold in large numbers as soon as they appeared.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - a few firms produced them at the turn of the century, 'though sales remained modest'."
      },
      {
        q: "Wristwatches issued to soldiers included features to make them usable in the dark.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - military suppliers provided 'luminous dials that could be read at night'."
      },
      {
        q: "Watches with protective grilles were more expensive than ordinary military watches.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the grilles are mentioned, but the text says nothing about their price."
      },
      {
        q: "Pocket watches disappeared from sale immediately after the First World War.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'The pocket watch did not vanish overnight, and for a decade the two styles competed.'"
      },
      {
        q: "The writer sees a similarity between the rise of the wristwatch and that of the smartwatch.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the final paragraph says the smartwatch was accepted through 'a practical argument of exactly the same kind' about busy hands."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
