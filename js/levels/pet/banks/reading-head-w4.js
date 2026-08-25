/* PET Prep bank: Matching Headings reading (wave 4) */
(function () {
var BANK = [
  {
    id: "p-head4-01",
    title: "Learning to Cook at Sixty",
    sections: [
      { label: "A", text: "The class began because a district nurse noticed something in her notes. Among the men she visited who lived alone, a surprising number ate the same three or four things every day, and several admitted they had never cooked a meal in their lives; a wife, a mother or a canteen had always done it. She asked the community centre for a room on Tuesday afternoons, and eleven men aged between fifty-eight and eighty-four came to the first session." },
      { label: "B", text: "Nobody starts with recipes. The first four weeks cover knife grip, how hot a pan should be before anything goes into it, how to tell when onions are ready, and what to do with a chicken so that it becomes three meals instead of one. The teacher, a retired school cook, refuses to let anyone write things down in the first hour: she says a hand learns faster when the head is not busy taking notes." },
      { label: "C", text: "Cost is part of every lesson. Each week the group is given a budget and walks to the market together, and the same dish is priced against its supermarket ready-made version. A chicken and vegetable stew that feeds four works out at less than a third of the price of four chilled meals, and the men who were most doubtful at the beginning are now the ones who calculate loudest at the till." },
      { label: "D", text: "What surprised the organisers was the talking. The kitchen turned out to be a place where men who would never attend anything described as a support group could say, while chopping, that the house was very quiet since their wife died, or that they had not spoken to anyone since Friday. Nobody has to look at anybody else across a table; you look at the pan, and the conversation happens sideways." },
      { label: "E", text: "The class has now run for three years, and it has changed shape. Six of the original eleven cook regularly for themselves, and four of them take turns cooking for the whole group once a month. Two have started a Saturday session for younger men who have just separated from a partner. The nurse who began it all says the health benefit she can actually measure is small; the one she cannot measure is the reason she keeps going." }
    ],
    options: [
      "The problem a nurse noticed",
      "Skills before recipes",
      "Why supermarkets are expensive",
      "Cooking as a way of talking",
      "Learning to shop for less",
      "How the group has grown",
      "Choosing the right equipment",
      "Cooking competitions for older people"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "A district nurse saw that men living alone ate the same few things and had never cooked, so she asked for a room." },
      { q: "Paragraph B", answer: 1, explanation: "Knife grip, pan temperature, onions and jointing a chicken come first - technique rather than recipes." },
      { q: "Paragraph C", answer: 4, explanation: "The weekly budget, the walk to the market and the price comparison are about buying food for less." },
      { q: "Paragraph D", answer: 3, explanation: "Men who would avoid a support group talk while chopping - the kitchen makes conversation possible." },
      { q: "Paragraph E", answer: 5, explanation: "Three years on, members cook for each other and have started a second session: the group has developed." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
