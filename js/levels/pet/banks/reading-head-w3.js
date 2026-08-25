/* PET Prep bank: Matching Headings reading (wave 3) */
(function () {
var BANK = [
  {
    id: "p-head3-01",
    title: "The Village That Shares Its Tools",
    sections: [
      { label: "A", text: "In a village of two thousand people, the old fire station has one room that is no longer used for engines. Along its walls there are now about six hundred tools: drills, sanders, ladders, garden equipment, a tile cutter, even a machine for cleaning carpets. Anyone who lives in the area can join for twenty euros a year and borrow whatever is on the shelves. The room is open on Tuesday evenings and on Saturday mornings." },
      { label: "B", text: "The idea came from two neighbours who were clearing out a shed. Between them they found three electric drills, and neither could remember using one for years. Somebody told them that an average home drill is used for only about a quarter of an hour in its whole life. They put a note through every door in the street asking what other machines were sleeping in people's garages, and the answers filled two pages." },
      { label: "C", text: "Borrowing is simple, but there are rules. Members book online, take the tool for one week, and bring it back clean. Anything broken must be reported, not quietly returned, and nobody is charged for damage that happens during normal use. On Saturday mornings a volunteer checks every tool that has come back, tests the electrical parts and writes the date on a card that hangs from the handle." },
      { label: "D", text: "Not every tool is easy to use, and a broken machine is no use to anyone. A retired engineer repairs whatever he can at a bench in the corner, and the group buys spare parts rather than new machines wherever possible. Twice a month there are short courses for members: how to use a circular saw safely, how to put up a shelf that stays straight, how to sharpen a chisel. The courses are free and usually full." },
      { label: "E", text: "The effects have been bigger than anyone expected. Members say they spend less and store less, and several families have given away tools they no longer need. Because people come back every week, the room has also become a place where neighbours meet and talk. Three nearby villages have now asked how the scheme works, and one of them has already opened a similar room in a former school building." }
    ],
    options: [
      "How the scheme began",
      "Buying tools online more cheaply",
      "What members can borrow, and where",
      "Repairs and lessons for members",
      "The rules of borrowing",
      "More than a place to collect a drill",
      "Why the fire station closed",
      "Problems with members who never return anything"
    ],
    questions: [
      { q: "Paragraph A", answer: 2, explanation: "It describes the room in the old fire station, the six hundred tools on the shelves, the annual fee and the opening hours." },
      { q: "Paragraph B", answer: 0, explanation: "Two neighbours clearing a shed found three unused drills and asked the street what else was sleeping in garages - this is the origin of the idea." },
      { q: "Paragraph C", answer: 4, explanation: "The paragraph lists what members must do: book online, keep the tool a week, return it clean and report damage." },
      { q: "Paragraph D", answer: 3, explanation: "A retired engineer repairs the machines, and there are free short courses teaching members how to use tools safely." },
      { q: "Paragraph E", answer: 5, explanation: "As well as saving money and space, the room has become a meeting place for neighbours, and other villages are copying it." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
