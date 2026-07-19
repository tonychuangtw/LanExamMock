/* PET Prep extra bank: IELTS Writing Task 1 */
(function () {
  var BANK = [
    {
      id: "piw01",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Visitors to three attractions bar chart",
      length: "at least 150 words · about 20 minutes",
      task: "The chart below shows the number of visitors, in thousands, to three attractions in the town of Porton during each season of one year. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chart: {
        type: "bar",
        title: "Visitors to Porton attractions by season (thousands)",
        yUnit: "thousand",
        categories: ["Spring", "Summer", "Autumn", "Winter"],
        series: [
          { name: "Castle", values: [42, 78, 35, 12] },
          { name: "Aquarium", values: [30, 45, 33, 28] },
          { name: "Science Museum", values: [25, 22, 31, 40] }
        ]
      },
      checklist: [
        "Task Achievement: give an overview (castle peaks in summer, museum peaks in winter, aquarium stays steady) supported by key numbers",
        "Coherence & Cohesion: group the data by attraction or by season and keep the same order throughout",
        "Lexical Resource: comparison language (the most popular, almost twice as many, far fewer)",
        "Grammar: past simple for the year described; take care with 'the number of visitors was/were'"
      ],
      model: "Model outline — Overview: the castle attracted the most visitors overall but depended heavily on summer, while the science museum was the only attraction busiest in winter and the aquarium changed least. Para 2: castle figures across the seasons, from its summer peak to its winter low. Para 3: the museum's opposite pattern and the aquarium's stability, ending with a direct winter comparison."
    },
    {
      id: "piw02",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Teenagers' weekly activities line graph",
      length: "at least 150 words · about 20 minutes",
      task: "The graph below shows the average number of hours per week that teenagers in one country spent on three free-time activities between 2005 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chart: {
        type: "line",
        title: "Average weekly hours spent by teenagers on three activities",
        yUnit: "hours",
        yMax: 25,
        xLabels: ["2005", "2010", "2015", "2020", "2025"],
        series: [
          { name: "Watching television", values: [21, 18, 13, 9, 6] },
          { name: "Online activities", values: [4, 8, 14, 19, 22] },
          { name: "Outdoor sport", values: [10, 9, 8, 8, 7] }
        ]
      },
      checklist: [
        "Task Achievement: clear overview (online time rose sharply, television fell, sport declined slightly) with figures for start and end years",
        "Coherence & Cohesion: organise rising and falling trends into separate paragraphs linked with while and whereas",
        "Lexical Resource: trend verbs (climbed steadily, dropped, remained fairly stable) without repetition",
        "Grammar: past simple across the period; practise 'the amount of time spent on + noun'"
      ],
      model: "Model outline — Overview: over the twenty years, online activities replaced television as the main pastime, while time on outdoor sport changed only a little. Para 2: the steep rise in online hours, noting the crossover point with television around the middle of the period. Para 3: the steady fall in television viewing and the slight decline in sport, closing with a comparison of the first and final years."
    },
    {
      id: "piw03",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — How bottled orange juice is made (process)",
      length: "at least 150 words · about 20 minutes",
      task: "The diagram shows how orange juice is produced and bottled, in six stages: 1) oranges are picked on farms and transported to the factory by lorry; 2) the fruit is washed and any damaged oranges are removed; 3) machines squeeze the oranges and the juice is collected in large steel tanks; 4) the juice is heated quickly to kill bacteria and then cooled; 5) it is poured into clean bottles, which are sealed and labelled; 6) the bottles are packed into boxes and delivered to supermarkets. Summarise the information by selecting and reporting the main features.",
      checklist: [
        "Task Achievement: overview giving the number of stages plus the start and end points; mention every stage briefly",
        "Coherence & Cohesion: sequencing words (first, next, once, after that, finally) to move through the process",
        "Lexical Resource: paraphrase the prompt verbs (picked → harvested, squeezed → pressed, delivered → distributed)",
        "Grammar: present simple passive is essential (is washed, are removed, is heated)"
      ],
      model: "Model outline — Overview: a six-stage industrial process turning fresh oranges into bottled juice, beginning on the farm and ending at supermarkets. Para 2: stages 1-3 in the passive, from harvesting and washing to squeezing and storage in tanks. Para 3: stages 4-6, covering heating and cooling, bottling and labelling, and final packing and delivery."
    }
  ];
  if (typeof module !== "undefined") { module.exports = BANK; return; }
  window.WRITING = (window.WRITING || []).concat(BANK);
})();
