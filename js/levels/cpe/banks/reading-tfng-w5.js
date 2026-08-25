/* CPE Prep bank: True/False/Not Given reading (wave 5) */
(function () {
var BANK = [
  {
    id: "p-tfng5-01",
    title: "The Women Who Measured the Sky",
    text: "Photographic astronomy created a problem that telescopes had not: data. By the 1880s the Harvard College Observatory held thousands of glass plates, each carrying the spectra of hundreds of stars, and no method of turning them into knowledge except by human examination. Edward Pickering, the director, hired women to do the examining, at rates well below what a man would have been paid, and in doing so assembled what became the most productive research group in nineteenth-century American astronomy.\nThe arrangement was exploitative and consequential at the same time. The women were classified as 'computers', were generally not permitted to operate the telescopes whose plates they analysed, and were paid roughly twenty-five to fifty cents an hour. What they were given was access to the data, and the data turned out to be where the discoveries were.\nWilliamina Fleming, who had arrived as Pickering's housekeeper, catalogued over ten thousand stars and identified the first white dwarf. Antonia Maury developed a classification scheme finer than the one the observatory officially used, and her insistence on it caused a lasting quarrel with Pickering; it was later vindicated when her categories proved to distinguish giant from dwarf stars. Annie Jump Cannon reorganised stellar classification into the sequence still taught today and classified, over her career, several hundred thousand stars.\nThe most consequential result came from Henrietta Swan Leavitt. Studying variable stars in the Magellanic Clouds, she noticed that the brighter ones pulsed more slowly, and that the relationship was regular enough to be expressed as a law. Because the stars in question were all at approximately the same distance, the relation gave astronomy its first reliable way of measuring distances beyond our own galaxy.\nEverything that followed rested on it. Hubble's demonstration that the spiral nebulae were separate galaxies, and then that they were receding, used Leavitt's relation as its ruler. She died in 1921; a Swedish mathematician who intended to nominate her for the Nobel Prize discovered that she was no longer eligible, the prize not being awarded posthumously.",
    questions: [
      {
        q: "Harvard employed women partly because they could be paid less than men.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - Pickering hired them 'at rates well below what a man would have been paid'."
      },
      {
        q: "The women were generally allowed to use the observatory's telescopes.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - they 'were generally not permitted to operate the telescopes whose plates they analysed'."
      },
      {
        q: "Williamina Fleming was working in Pickering's household before she joined the observatory.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - she 'had arrived as Pickering's housekeeper'."
      },
      {
        q: "Antonia Maury's classification scheme was accepted by Pickering at the time.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - her insistence on it 'caused a lasting quarrel with Pickering' and was vindicated only later."
      },
      {
        q: "Annie Jump Cannon's classification sequence is still used in teaching.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - she 'reorganised stellar classification into the sequence still taught today'."
      },
      {
        q: "Leavitt found that brighter variable stars pulse more quickly than fainter ones.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'the brighter ones pulsed more slowly'."
      },
      {
        q: "Leavitt's relation was useful because the stars she studied were at roughly the same distance.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - that shared distance is what allowed period and brightness to be related, giving astronomy a distance ruler."
      },
      {
        q: "Hubble acknowledged Leavitt's contribution in his published work.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text says Hubble used her relation, but nothing about whether he credited her."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
