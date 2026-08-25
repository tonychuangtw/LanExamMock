/* PET Prep bank: True/False/Not Given reading (wave 4) */
(function () {
var BANK = [
  {
    id: "p-tfng4-01",
    title: "The Codes That Sort Your Post",
    text: "Every letter you send passes through a machine that reads it faster than any person could. What makes this possible is the postcode, a short string of letters and numbers that has quietly reorganised the way post is handled in almost every country.\nThe idea is older than most people think. In 1941, wartime Germany divided its territory into numbered postal zones because so many experienced sorters had been called up and the replacements did not know the geography. Britain tested its own system in Norwich in 1959 and finished covering the whole country in 1974. The United States introduced the five-digit ZIP code in 1963 and spent a great deal of money persuading the public to use it, including a cartoon character called Mr ZIP who appeared on stamps and in television advertisements.\nCodes are not designed the same way everywhere. The British code narrows down to a very small area — often a single street, sometimes a single large building — which is why it is used far beyond the post office, by satellite navigation, by insurance companies and by shops working out delivery charges. American ZIP codes cover much larger areas, so an address usually needs the street number as well.\nSorting itself is now almost entirely automatic. A machine photographs the envelope, reads the code, sprays a line of orange bars along the bottom that other machines can read at speed, and drops the letter into the right box. Handwriting that a machine cannot read is sent to a screen where a human types it in, usually in a few seconds.\nThe system has one weakness that its designers did not expect. Because a postcode says so much about where someone lives, it can also be used to judge them. Studies in several countries have found that job applications from certain postcodes are less likely to receive a reply, and that insurance quotes can change from one street to the next. A tool built to move paper efficiently has become, without anyone deciding it, a label attached to a person.",
    questions: [
      {
        q: "Germany introduced numbered postal zones during a war.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'In 1941, wartime Germany divided its territory into numbered postal zones'."
      },
      {
        q: "Britain covered the whole country with postcodes in the same year it began testing them.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - testing began in Norwich in 1959 and the country was finished in 1974."
      },
      {
        q: "Mr ZIP was used to encourage Americans to use the new codes.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the US 'spent a great deal of money persuading the public to use it, including a cartoon character called Mr ZIP'."
      },
      {
        q: "British postcodes identify a smaller area than American ZIP codes.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the British code 'narrows down to a very small area', while ZIP codes 'cover much larger areas'."
      },
      {
        q: "Most British people can remember their full postcode without checking.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text describes how precise the codes are, but says nothing about whether people remember them."
      },
      {
        q: "Letters that machines cannot read are returned to the sender.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - unreadable handwriting 'is sent to a screen where a human types it in, usually in a few seconds'."
      },
      {
        q: "Postcodes are used by companies that have nothing to do with the post.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - they are used 'by satellite navigation, by insurance companies and by shops working out delivery charges'."
      },
      {
        q: "The designers of the postcode expected it to affect job applications.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - this is called 'one weakness that its designers did not expect', and it happened 'without anyone deciding it'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
