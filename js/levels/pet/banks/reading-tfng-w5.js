/* PET Prep bank: True/False/Not Given reading (wave 5) */
(function () {
var BANK = [
  {
    id: "p-tfng5-01",
    title: "Why Roundabouts Work",
    text: "Drivers who grew up with traffic lights often dislike roundabouts on first meeting, and then discover that they spend less time waiting. The reason is not driver skill; it is arithmetic.\nA set of traffic lights gives each direction a turn, which means that for most of every cycle, most of the junction is empty. A roundabout has no turns to give out. Traffic enters whenever there is a gap, so the junction is in use almost continuously, and a driver arriving at three in the morning does not sit at a red light with no other car in sight.\nSafety is the stronger argument. Studies in several countries have found that converting a junction to a roundabout reduces serious injury crashes substantially, and the explanation is geometric. At a crossroads, vehicles can meet at right angles or head on, which are the collision types that hurt people most. On a roundabout everyone is travelling in the same direction, so the crashes that do happen are usually glancing impacts at lower speed. The design also forces drivers to slow down before entering, because the approach is curved; a straight road through a green light does not.\nRoundabouts are not always the right answer. They take more land than a signalised junction, which is why they are rare in dense city centres. Pedestrians and cyclists can find them harder to use, since there is no red light to create a gap, and poorly designed examples with several lanes are genuinely intimidating. Blind and partially sighted pedestrians in particular rely on the sound of stopped traffic, which a roundabout does not provide.\nThe modern compromise is the small single-lane roundabout with raised crossings on each approach, which keeps the flow benefit while giving people on foot a place to cross. Good junctions, like good software, are usually the ones where somebody thought about the people who were not driving.",
    questions: [
      {
        q: "Roundabouts keep traffic moving because they do not give each direction a fixed turn.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'A roundabout has no turns to give out. Traffic enters whenever there is a gap'."
      },
      {
        q: "At traffic lights, most of the junction is unused for most of the cycle.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - lights give each direction a turn, 'which means that for most of every cycle, most of the junction is empty'."
      },
      {
        q: "Roundabouts reduce the number of crashes that cause serious injury.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - studies have found that converting a junction 'reduces serious injury crashes substantially'."
      },
      {
        q: "The safety benefit is mainly explained by drivers being more careful on roundabouts.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'the explanation is geometric': same direction of travel, glancing impacts, and a curved approach that forces lower speeds."
      },
      {
        q: "Roundabouts need more space than a junction with traffic lights.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'They take more land than a signalised junction, which is why they are rare in dense city centres'."
      },
      {
        q: "Most drivers prefer roundabouts the first time they use one.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - drivers used to traffic lights 'often dislike roundabouts on first meeting'."
      },
      {
        q: "Roundabouts are cheaper to build than traffic lights.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text compares land use, safety and flow, but never construction costs."
      },
      {
        q: "Blind pedestrians can find roundabouts difficult because traffic does not stop.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - they 'rely on the sound of stopped traffic, which a roundabout does not provide'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
