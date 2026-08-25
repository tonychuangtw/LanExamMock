/* FCE Prep bank: True/False/Not Given reading (wave 5) */
(function () {
var BANK = [
  {
    id: "f-tfng5-01",
    title: "Why Ships Keep Getting Bigger",
    text: "In 1968 a large container ship carried around a thousand boxes. The largest ships now in service carry more than twenty thousand. The growth was not driven by engineering ambition but by a stubborn piece of economics: the cost of moving a container falls as the ship gets bigger, because a hull twice the volume does not need twice the crew, twice the fuel or twice the paperwork.\nThe savings are real, and they have been passed on. Shipping a pair of trainers from Asia to Europe now costs a fraction of the retail price, which is why the phrase 'made locally' has become a marketing claim rather than a default. Container shipping is also, per tonne moved, among the least carbon-intensive forms of transport; the industry's total emissions are large because the volumes are enormous, not because ships are inefficient.\nThe difficulty is that the savings occur at sea and the costs occur on land. A ship carrying twenty thousand boxes needs a deeper channel, longer cranes and more storage space than the port was built for, and it delivers its cargo in a single enormous wave that the roads and railways behind the port must absorb. Ports have spent heavily to keep up, and not all of that investment was recovered.\nThe system is also less resilient than it looks. When one ship blocked the Suez Canal for six days in 2021, several hundred vessels queued behind it and the effects on supply chains were measurable for months. Concentrating so much cargo in so few hulls and so few routes means that a single incident is no longer local.\nWhether ships will keep growing is now genuinely uncertain. The largest classes can only call at a handful of ports, insurers are uneasy about the value concentrated in one hull, and some operators have begun ordering slightly smaller vessels that can serve more destinations. The economics that produced the giants may, at some size, start working the other way.",
    questions: [
      {
        q: "Ships grew larger mainly because larger ships move each container more cheaply.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'the cost of moving a container falls as the ship gets bigger', since crew, fuel and paperwork do not double with volume."
      },
      {
        q: "The fall in shipping costs has had no effect on where goods are made.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - cheap shipping is why 'made locally' has become 'a marketing claim rather than a default'."
      },
      {
        q: "Container shipping produces more carbon per tonne carried than road transport.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - it is 'among the least carbon-intensive forms of transport' per tonne moved; the total is large because of the volumes."
      },
      {
        q: "Ports have had to invest to handle the largest ships.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - deeper channels, longer cranes and more storage were needed, and 'Ports have spent heavily to keep up'."
      },
      {
        q: "Most ports have recovered the money they spent on these upgrades.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the text says 'not all of that investment was recovered'."
      },
      {
        q: "The Suez Canal blockage in 2021 affected supply chains for months.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'the effects on supply chains were measurable for months'."
      },
      {
        q: "The ship that blocked the canal was the largest in the world at the time.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the incident is described, but the text says nothing about the ship's size ranking."
      },
      {
        q: "Some operators are now ordering ships that are not as large as the biggest ones.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'some operators have begun ordering slightly smaller vessels that can serve more destinations'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
