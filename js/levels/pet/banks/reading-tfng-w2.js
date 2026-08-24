/* PET Prep bank: True/False/Not Given reading (wave 2) */
(function () {
var BANK = [
  {
    id: "p-tfng2-01",
    title: "Why the World Agreed on Time",
    text: "For most of human history, every town kept its own time. People set their clocks by the sun: when the sun was at its highest point, it was twelve o'clock. Because the sun reaches that point a little later as you travel west, a town thirty kilometres away had a slightly different time. Nobody minded. A traveller on a horse could not notice a difference of two or three minutes, and letters did not care.\nThe railways changed that completely. Trains moved faster than any horse, and a railway timetable had to work in every town on the line. In Britain in the 1840s, railway companies simply decided to ignore local time and print their timetables using the time in London. Station clocks sometimes had two minute hands, one for railway time and one for the town, and passengers argued about which one was correct. Slowly, towns gave up and accepted railway time.\nThe same problem appeared in North America, but it was far worse, because the continent is so wide. By the 1870s, American railways were using about fifty different local times, and a single journey could involve several changes. In 1883, the railway companies agreed among themselves to divide the country into four wide bands, each one hour apart. The plan worked so well that ordinary towns copied it, although the American government did not make it law until 1918.\nAn international conference in Washington in 1884 took the idea further and chose the line through Greenwich, in London, as the starting point for measuring the world's time zones. Not everyone was happy. The French continued to measure from Paris for many years, and some scientists argued that a neutral line in the middle of the ocean would be fairer.\nToday almost every country uses time zones, but they are not tidy. Some are half an hour or even forty-five minutes different from their neighbours, and several large countries use a single time zone from one side to the other, so the sun rises at very different hours within the same country. Time, it turns out, is a political decision as much as an astronomical one.",
    questions: [
      {
        q: "In the past, two towns near each other could have slightly different clock times.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'a town thirty kilometres away had a slightly different time' because people set clocks by the sun."
      },
      {
        q: "British railway companies waited for the government to tell them which time to use.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the companies 'simply decided to ignore local time and print their timetables using the time in London'."
      },
      {
        q: "Some British station clocks showed two different times at once.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'Station clocks sometimes had two minute hands, one for railway time and one for the town'."
      },
      {
        q: "American railway passengers complained about time zones in letters to newspapers.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - we are told about the confusion of fifty local times, but nothing about passengers writing to newspapers."
      },
      {
        q: "The United States government made the four time zones legal in the same year the railways created them.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the railways agreed in 1883, but 'the American government did not make it law until 1918'."
      },
      {
        q: "France used a different starting line from Greenwich for some years after 1884.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'The French continued to measure from Paris for many years'."
      },
      {
        q: "Every modern time zone is exactly one hour different from the zone beside it.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'Some are half an hour or even forty-five minutes different from their neighbours'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
