/* PET Prep bank: True/False/Not Given reading (wave 3) */
(function () {
var BANK = [
  {
    id: "p-tfng3-01",
    title: "The Return of the Night Train",
    text: "Fifty years ago, travelling across Europe by night train was completely normal. You got on in one city in the evening, slept while the train crossed two or three borders, and had breakfast somewhere quite different. Then, in the 1990s and 2000s, the night trains began to disappear. Budget airlines sold tickets for less than the price of a taxi to the airport, and new high-speed lines made day journeys so fast that a bed on a train seemed unnecessary. One by one, the routes were closed.\nThe low point came in 2016, when Germany's railway company decided to stop running its night services. Instead of scrapping the carriages, however, it sold them to the Austrian railway, OBB, which believed the market was not dead but simply badly managed. OBB repainted the carriages, gave the service the name Nightjet, and added routes rather than cutting them. Within a few years, Nightjet trains were running from Vienna to Paris, Brussels, Amsterdam and Rome.\nSeveral things helped. Flying became less popular with some travellers who were worried about the climate, especially in northern Europe, where the Swedish word 'flygskam', meaning shame about flying, became well known. Governments also began to see night trains as a way of connecting cities without building new airports. Sweden and the Netherlands both put public money into new services.\nRunning a night train is still difficult. A sleeping carriage carries far fewer passengers than an ordinary one, staff must be paid for the whole night, and the train earns money only once a day instead of making several journeys. Crossing borders means dealing with different electrical systems, different safety rules and several national railway companies at the same time. New carriages, with small single cabins for travellers who do not want to share, took years to design and build, and the first ones only entered service in the 2020s.\nEven so, the trains are usually full. Passengers say they like arriving in the centre of a city in the morning, without a night in a hotel and without an airport at either end. Whether the night train becomes a normal choice again, or stays a pleasant exception, will probably depend less on passengers than on how much governments are willing to pay.",
    questions: [
      {
        q: "Night trains became less common partly because of cheap flights.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'Budget airlines sold tickets for less than the price of a taxi to the airport', and the routes closed one by one."
      },
      {
        q: "Germany's railway company destroyed its night train carriages in 2016.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'Instead of scrapping the carriages, however, it sold them to the Austrian railway, OBB'."
      },
      {
        q: "OBB reduced the number of night routes to save money.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - OBB 'added routes rather than cutting them'."
      },
      {
        q: "The Nightjet service is more popular with young travellers than with older ones.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text describes why passengers like night trains but never compares age groups."
      },
      {
        q: "Some European governments have paid money towards new night train services.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'Sweden and the Netherlands both put public money into new services'."
      },
      {
        q: "A night train earns more money per day than a normal daytime train.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'the train earns money only once a day instead of making several journeys', and it carries fewer passengers."
      },
      {
        q: "The newest carriages include cabins for one person.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'New carriages, with small single cabins for travellers who do not want to share'."
      },
      {
        q: "Night train tickets cost about the same as a flight on the same route.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text mentions cheap airline tickets in the past but never compares today's night train and flight prices."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
