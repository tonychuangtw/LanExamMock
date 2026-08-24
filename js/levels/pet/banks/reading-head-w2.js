/* PET Prep bank: Matching Headings reading (wave 2) */
(function () {
var BANK = [
  {
    id: "p-head2-01",
    title: "Saturday Morning at the Farmers' Market",
    sections: [
      { label: "A", text: "The market opens at eight, but the square is busy long before that. Vans arrive in the dark, and by six o'clock the stallholders are lifting tables out of the back and clipping covers over them in case of rain. Boxes of apples, cheese and bread come out in a careful order, because everything has to look full and fresh at eight, and nothing may block the narrow paths between the stalls. Setting up takes two hours; taking everything down again takes forty minutes." },
      { label: "B", text: "Most of the food at the stalls has travelled less than fifty kilometres. The cheese comes from a farm in the next valley, the bread from a bakery three streets away, and the vegetables were picked the previous afternoon. Short journeys mean less packaging and less waste, and they also mean the seller can answer any question about the food: which field it grew in, what the weather did to this year's crop, why the carrots are small but sweet." },
      { label: "C", text: "Prices at the market are not always low. A loaf of bread costs more than in the supermarket, and so does the cheese. Customers who come for the cheapest food are often disappointed. But the farmer keeps almost all of the money instead of a small share, and regular customers say they buy less and waste less, because food bought from a person you know somehow does not get forgotten at the back of the fridge." },
      { label: "D", text: "By ten o'clock the square is full, and it is clear that people are not only here to shop. Neighbours stop in the middle of the path to talk. Children are given a strawberry to try. An old man sits on the wall with a coffee every week without buying anything at all, and nobody minds. For some visitors who live alone, this hour is the longest conversation of the week." },
      { label: "E", text: "At one o'clock, whatever is left goes into three groups. The best of it is packed away for the farm shop on Sunday. Slightly damaged fruit is put into low-price boxes at the front of each stall and usually disappears within ten minutes. Everything else is collected by two volunteers from the community kitchen at the end of the street, who turn Saturday's leftovers into Monday's soup." }
    ],
    options: [
      "Food that has not travelled far",
      "The long, careful work before opening",
      "Why the market is not the cheapest option",
      "A meeting place as much as a shop",
      "Nothing goes in the bin",
      "How to become a stallholder",
      "Competing with online supermarkets",
      "The history of the town square"
    ],
    questions: [
      { q: "Paragraph A", answer: 1, explanation: "The stallholders arrive in the dark and spend two hours setting up before the market opens at eight." },
      { q: "Paragraph B", answer: 0, explanation: "The food has 'travelled less than fifty kilometres', which means less packaging and a seller who knows the field it came from." },
      { q: "Paragraph C", answer: 2, explanation: "Bread and cheese cost more than in the supermarket, and the paragraph explains why people still buy them." },
      { q: "Paragraph D", answer: 3, explanation: "Neighbours talk, children taste fruit and one man comes only for the company - the market works as a social place." },
      { q: "Paragraph E", answer: 4, explanation: "Leftovers are saved for the farm shop, sold cheaply or collected by the community kitchen, so nothing is thrown away." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
