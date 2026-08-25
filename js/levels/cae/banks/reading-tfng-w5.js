/* CAE Prep bank: True/False/Not Given reading (wave 5) */
(function () {
var BANK = [
  {
    id: "c-tfng5-01",
    title: "The Insects We Stopped Counting",
    text: "Anyone who drove long distances in Europe in the 1980s remembers cleaning the windscreen at every stop. The disappearance of that chore has become a piece of folk evidence for insect decline, and folk evidence is exactly what makes the subject difficult: nobody was systematically counting insects, so the baseline against which decline must be measured barely exists.\nThe most cited study came from an unlikely source. Amateur entomologists in a network of German nature reserves had used identical traps in identical places since 1989, and when the catches were finally weighed together in 2017, the total flying insect biomass had fallen by more than seventy per cent over twenty-seven years. The result was startling precisely because the method was so unglamorous; it survived scrutiny largely because the protocol had never changed.\nGeneralising from it is another matter. The reserves were surrounded by intensive agriculture, most were in one country, and biomass is not the same as diversity. Subsequent syntheses have found declines that are real but smaller and geographically uneven, with terrestrial insects falling while some freshwater groups recover, the latter apparently reflecting decades of investment in water treatment.\nCauses are plural and interact, which frustrates anyone hoping for a single villain. Habitat conversion is generally ranked first, followed by pesticide use, light pollution, invasive species and climate change; disentangling them is hard because they occur in the same places. Neonicotinoid insecticides became the public face of the argument, and the European restriction on their outdoor use was defensible, but treating them as the whole explanation would leave most of the decline unaccounted for.\nWhat is not in dispute is the consequence. Insects pollinate a large share of flowering crops, recycle waste, control other insects and feed birds, bats, fish and amphibians. The awkward part of the story is not that we damaged something we valued; it is that we ran a large uncontrolled experiment on a system we had never bothered to measure.",
    questions: [
      {
        q: "There is abundant long-term data on historical insect numbers.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'nobody was systematically counting insects, so the baseline against which decline must be measured barely exists'."
      },
      {
        q: "The much-cited German study was carried out by amateur entomologists.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'Amateur entomologists in a network of German nature reserves had used identical traps in identical places since 1989'."
      },
      {
        q: "The German study measured the number of individual insects rather than their weight.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - it measured biomass: the catches 'were finally weighed together', and 'biomass is not the same as diversity'."
      },
      {
        q: "The study's credibility rested partly on the fact that its method never changed.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'it survived scrutiny largely because the protocol had never changed'."
      },
      {
        q: "All groups of insects studied since have shown decline.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - declines are 'geographically uneven, with terrestrial insects falling while some freshwater groups recover'."
      },
      {
        q: "The recovery of some freshwater insects is linked to improved water treatment.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - it 'apparently reflect[s] decades of investment in water treatment'."
      },
      {
        q: "Neonicotinoid restrictions have reversed insect decline in Europe.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the restriction is called defensible, but no outcome after it is reported."
      },
      {
        q: "The writer argues that habitat conversion alone explains the decline.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - causes are 'plural and interact'; habitat conversion ranks first but is followed by several others."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
