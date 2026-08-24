/* CPE Prep bank: IELTS-style True/False/Not Given reading (wave 2) */
(function () {
var BANK = [
  {
    id: "p-tfng2-01",
    title: "The Invention of the Weekend",
    text: "The weekend is so thoroughly naturalised a feature of modern life that it is easy to mistake it for a fact of nature, a rhythm as given as the tides. It is nothing of the kind. The two-day break is a nineteenth- and twentieth-century construction, assembled piecemeal out of religious observance, industrial self-interest and a great deal of conflict, and its arrival was resisted by many of the people it would come to benefit.\nIts unofficial ancestor was Saint Monday, the working-class custom of not turning up on the first day of the week. Artisans who controlled the pace of their own labour were widely observed to drink on Sunday and recover on Monday, making up the shortfall with punishing hours later in the week. Employers denounced the practice as idleness. It is more revealing to read it as a form of bargaining: workers who could not shorten the week formally simply took time at the front of it.\nThe factory system made such arrangements untenable, since a production line cannot function with a third of its operators absent. Some manufacturers, notably in the textile towns of northern England, concluded that a controlled concession was preferable to an uncontrolled one, and from the 1840s began closing early on Saturday afternoon in exchange for reliable attendance on Monday. Contemporary accounts credit the half-holiday with the rapid growth of Saturday football, and the fixture lists of the period were built around it.\nThe second free day owed as much to religious pluralism as to labour militancy. Jewish workers observing Saturday as the Sabbath faced an impossible choice in a Christian country that rested on Sunday, and some employers in cities with large Jewish populations found that closing on both days solved a recruitment problem. The term 'week-end' appears in English print from the 1870s, initially describing a visit to the country rather than a right.\nThat a shorter week might raise output rather than reduce it was long dismissed as sentimental. When Henry Ford adopted a five-day week in 1926, he made no such argument in public, presenting the change instead as a commercial calculation: employees with leisure would consume more, including motor cars. Economic historians remain divided about how far his productivity claims were borne out.\nWhat is not in doubt is the direction of travel since. Statutory limits followed in most industrial economies during the twentieth century, and the weekend passed from concession to entitlement to something close to invisibility, noticed chiefly by those whose work denies it to them. Recent four-day-week trials have therefore attracted a familiar mixture of enthusiasm and scepticism, the arguments on both sides recognisably those of the 1840s in modern dress.",
    questions: [
      {
        q: "The writer argues that the weekend evolved rather than being deliberately introduced at a single moment.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - it is described as 'assembled piecemeal' from religious, industrial and political pressures, not as a single reform."
      },
      {
        q: "Saint Monday was a custom formally agreed between artisans and their employers.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - it was an unofficial custom that 'employers denounced as idleness'; the writer reads it as informal bargaining, not agreement."
      },
      {
        q: "The writer suggests Saint Monday functioned as a way of negotiating working hours.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'It is more revealing to read it as a form of bargaining: workers who could not shorten the week formally simply took time at the front of it.'"
      },
      {
        q: "Northern textile manufacturers introduced the Saturday half-holiday because they were compelled to do so by law.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - they judged 'that a controlled concession was preferable to an uncontrolled one'; statutory limits came later, in the twentieth century."
      },
      {
        q: "Saturday football matches were scheduled to fit the half-holiday.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'the fixture lists of the period were built around it'."
      },
      {
        q: "Jewish workers campaigned publicly for a two-day weekend.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text describes the difficulty they faced and employers' response to it, but reports no campaign by the workers themselves."
      },
      {
        q: "Ford publicly justified the five-day week on the grounds that rested workers produce more.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'he made no such argument in public', presenting it instead as a commercial calculation about consumption."
      },
      {
        q: "The writer regards current four-day-week debates as a continuation of much older arguments.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the arguments are 'recognisably those of the 1840s in modern dress'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
