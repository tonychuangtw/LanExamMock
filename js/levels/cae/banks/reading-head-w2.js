/* CAE Prep bank: IELTS-style Matching Headings reading (wave 2) */
(function () {
var BANK = [
  {
    id: "c-head2-01",
    title: "The City After Midnight",
    sections: [
      { label: "A", text: "Municipal statistics tend to describe cities as they are between nine and five, which is one reason the night economy was for decades invisible to planners. Counts of employment by workplace record where people are registered, not when they are there, and transport surveys have historically stopped running before the shifts that matter most. When several European cities finally commissioned overnight studies in the 2010s, the results surprised their own authors: somewhere between one worker in seven and one in five was routinely on duty after midnight, and only a minority of them worked in entertainment." },
      { label: "B", text: "The composition of that workforce dismantles the popular image of nightlife. Hospital staff, cleaners, bakers, warehouse pickers, port workers, refuse crews and the technicians who maintain rail track when no trains are running vastly outnumber bar staff and DJs. Much of this labour is deliberately arranged to be unseen: streets are swept, shelves restocked and cables replaced precisely so that the daytime city can present itself as effortlessly functional each morning." },
      { label: "C", text: "Working against the body's internal clock exacts a measurable price. Circadian research links long-term night work with disrupted sleep, metabolic disorders and elevated cardiovascular risk, and the effects are worse where rotas rotate rapidly, giving the body no chance to adjust to any pattern at all. Occupational health specialists increasingly argue that the schedule itself, rather than the task performed, is the hazard, and that stable rotas would do more for night workers' health than most of the wellbeing programmes currently offered to them." },
      { label: "D", text: "Services designed around daytime users compound the difficulty. Nurseries close before an evening shift begins, clinics offer appointments only in office hours, and buses that run every six minutes at eight in the morning may run once an hour at three. A cleaner finishing at five may wait forty minutes in the cold for a service that a commuter would never tolerate. Several cities have concluded that the cheapest intervention available to them is not new infrastructure but a rescheduled timetable." },
      { label: "E", text: "The response in a growing number of cities has been institutional. Amsterdam appointed a night mayor in 2014, and the model has since been copied from Berlin to Bogota, usually as a small office with no budget of its own but a mandate to be consulted. Their record is mixed and their powers modest, yet the appointments have had one clear effect: when licensing, transport and housing decisions are made, somebody in the room is now required to ask what those decisions will mean at four in the morning." }
    ],
    options: [
      "Why the night workforce went uncounted",
      "Who is actually awake and working",
      "The health cost of the rota, not the job",
      "Daytime services that fail night workers",
      "Giving the night a voice in city government",
      "The economics of late-night licensing",
      "Noise complaints and residential neighbourhoods",
      "Automation replacing the night shift"
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "Statistics gathered between nine and five made night work invisible until overnight studies were finally commissioned." },
      { q: "Paragraph B", answer: 1, explanation: "The paragraph lists hospital staff, cleaners, bakers and track technicians, who 'vastly outnumber bar staff and DJs'." },
      { q: "Paragraph C", answer: 2, explanation: "Specialists argue 'the schedule itself, rather than the task performed, is the hazard' - the harm comes from the rota." },
      { q: "Paragraph D", answer: 3, explanation: "Nurseries, clinics and bus timetables are all built around daytime users, leaving night workers waiting." },
      { q: "Paragraph E", answer: 4, explanation: "Night mayors from Amsterdam to Bogota ensure someone represents the night when city decisions are made." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
