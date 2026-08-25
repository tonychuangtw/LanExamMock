/* CAE Prep bank: True/False/Not Given reading (wave 4) */
(function () {
var BANK = [
  {
    id: "c-tfng4-01",
    title: "The Pollution We Stopped Hearing",
    text: "Noise is the pollutant that everybody experiences and almost nobody measures. It leaves no residue, cannot be photographed, and disappears the moment the source is switched off, which is precisely why it has spent decades near the bottom of the environmental agenda. The evidence that has accumulated in the meantime is uncomfortable.\nThe damage is not principally to hearing. Traffic noise at levels found beside any arterial road triggers a stress response even in people who insist they have grown used to it: the body reacts during sleep, when conscious habituation is not available. Long-running European cohort studies have associated chronic exposure with elevated blood pressure and increased risk of ischaemic heart disease, and the World Health Organization has attributed a substantial annual loss of healthy life years in western Europe to environmental noise, with traffic the dominant source.\nChildren appear to be particularly susceptible in a different way. Research around several major airports has found that reading comprehension develops more slowly in schools under flight paths than in matched schools further away, an effect that persists after adjusting for household income. The mechanism is thought to be interrupted attention rather than hearing damage.\nWhat makes noise politically awkward is that its distribution is not random. Cheaper housing is systematically closer to motorways, railways, flight paths and industrial estates; the quietest addresses in almost every city are also the most expensive. Quiet, in other words, has become a purchasable commodity, which is why campaigners increasingly frame it as a question of environmental justice rather than of amenity.\nRemedies exist and are unglamorous. Low-noise road surfaces, speed reduction, night flight restrictions, quieter freight rolling stock, and the simple expedient of putting bedrooms on the side of the building away from the road all work. The difficulty is that they are cheap only if specified before construction and expensive afterwards, and that no individual measure produces a dramatic result. Noise policy is a matter of accumulating decibels avoided, which is a poor subject for a ribbon-cutting ceremony and an excellent subject for postponement.",
    questions: [
      {
        q: "Noise is difficult to place on the environmental agenda partly because it leaves nothing behind.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'It leaves no residue, cannot be photographed, and disappears the moment the source is switched off, which is precisely why' it has been neglected."
      },
      {
        q: "People who say they have got used to traffic noise no longer show a stress response.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the response is triggered 'even in people who insist they have grown used to it', because the body reacts during sleep."
      },
      {
        q: "Environmental noise has been linked to heart disease.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - cohort studies associate chronic exposure with 'elevated blood pressure and increased risk of ischaemic heart disease'."
      },
      {
        q: "The reading difference found near airports disappears once family income is taken into account.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the effect 'persists after adjusting for household income'."
      },
      {
        q: "Schools under flight paths in the studies had worse hearing test results.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text attributes the effect to interrupted attention 'rather than hearing damage' but reports no hearing tests."
      },
      {
        q: "Quieter locations tend to be more expensive.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'the quietest addresses in almost every city are also the most expensive', which is the basis of the environmental justice argument."
      },
      {
        q: "Noise reduction measures cost about the same whether they are built in or added later.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'they are cheap only if specified before construction and expensive afterwards'."
      },
      {
        q: "The writer suggests that noise policy is easy to delay because no single measure is spectacular.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - it is 'a poor subject for a ribbon-cutting ceremony and an excellent subject for postponement'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
