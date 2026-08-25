/* CAE Prep bank: Matching Headings reading (wave 3) */
(function () {
var BANK = [
  {
    id: "c-head3-01",
    title: "The Return of the Tram",
    sections: [
      { label: "A", text: "By the middle of the twentieth century the tram was widely regarded as an obstacle. It ran in the middle of the road, it could not overtake a parked delivery van, and its rails were blamed for accidents involving the increasingly numerous motor car. City after city tore up its network, sold the vehicles for scrap and congratulated itself on modernisation. In much of Britain, North America and France the process was essentially complete within twenty years." },
      { label: "B", text: "The arguments that brought the tram back were largely the arguments that had removed it, read in reverse. A single modern vehicle carries as many passengers as several buses without adding several drivers; it emits nothing at street level; and because the route is fixed and visible in the pavement, passengers who will not study a bus timetable will use it without hesitation. Planners also noticed that developers behaved differently towards a line of rails than towards a bus stop, which could be moved by a memo." },
      { label: "C", text: "None of this is cheap or quick. Laying track means excavating a street to a considerable depth, and the utilities beneath - water, gas, fibre, sometimes an unrecorded Victorian sewer - must be relocated first. Two or three years of roadworks along a city's main shopping street is a political ordeal, and the compensation claims from businesses that lost trade during construction have in several cities exceeded the sums budgeted for them." },
      { label: "D", text: "The engineering has nevertheless improved out of recognition. Floors are level with the platform, so passengers with pushchairs or wheelchairs board without assistance and dwell times fall. Signals give the vehicle priority at junctions. Track can be laid in grass to absorb noise and rainwater, and battery sections now allow trams to cross historic squares without overhead wires, removing the visual objection that stopped several schemes in the past." },
      { label: "E", text: "The awkward question is who the investment is really for. Lines are frequently routed through districts scheduled for redevelopment rather than through the poorer neighbourhoods with the least car ownership and the greatest need. Property values rise near stops, which is presented as a benefit, though not by tenants. Critics add that a well-designed bus corridor delivers much of the same capacity for a fraction of the cost - to which the reply, awkward but persistent, is that cities keep building the expensive option because passengers keep choosing it." }
    ],
    options: [
      "Why cities removed their tram networks",
      "The disruption and expense of building",
      "How ticket prices are decided",
      "Technical advances in modern vehicles",
      "Who gains, and who is left out",
      "The case for bringing trams back",
      "Trams as a tourist attraction",
      "Safety records compared with the underground"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "It explains why networks were torn up: trams blocked traffic, were blamed for accidents, and removal was seen as modernisation." },
      { q: "Paragraph B", answer: 5, explanation: "Capacity without extra drivers, no street-level emissions, a visible fixed route and developer confidence are the arguments for the tram's return." },
      { q: "Paragraph C", answer: 1, explanation: "Excavating streets, relocating utilities, years of roadworks and compensation claims are the costs and disruption of construction." },
      { q: "Paragraph D", answer: 3, explanation: "Level boarding, signal priority, grass track and battery operation without overhead wires are all engineering improvements." },
      { q: "Paragraph E", answer: 4, explanation: "Routes favour redevelopment districts over poorer neighbourhoods and property owners over tenants - the question of who benefits." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
