/* CPE Prep bank: Matching Headings reading (wave 3) */
(function () {
var BANK = [
  {
    id: "p-head3-01",
    title: "The Archive Problem",
    sections: [
      { label: "A", text: "There is an irony at the centre of the digital age. A monastic manuscript of the ninth century can be read today by anyone with the relevant Latin and a reading-room ticket, whereas a government report written in 1994 may survive only as a file that no living program will open. Durability and accessibility have come apart. The medium that copies most cheaply and travels most freely has turned out to be, in the long term, among the most fragile that human beings have ever entrusted their memory to." },
      { label: "B", text: "Part of the difficulty is formal rather than physical. A file is intelligible only in relation to the software that produced it, and proprietary formats abandoned by their vendors take their documents with them. Archivists respond in two ways: migration, in which material is repeatedly converted into current formats, at the cost of small cumulative losses of fidelity; and emulation, in which the original environment is reconstructed so that the file can be opened as it was meant to be. Both are laborious, and neither is a permanent settlement." },
      { label: "C", text: "The physical layer is scarcely more reassuring. Magnetic tape demineralises, optical discs delaminate, and consumer hard drives are engineered to a life expectancy measured in single-digit years. Institutions therefore keep multiple copies in different places and check them constantly against stored checksums, replacing whatever has silently decayed. This works, but it converts preservation from an act into a subscription: the archive survives only for as long as somebody continues to pay the electricity bill and renew the hardware." },
      { label: "D", text: "The web poses the problem in its most acute form, because it was designed to be current rather than cumulative. Pages are rewritten without notice and disappear without record, and studies of scholarly and judicial citation have repeatedly found that a substantial proportion of the links in published work no longer resolve, in some samples approaching half. Voluntary bodies and national libraries now crawl and store what they can, and several countries have extended legal deposit to websites, but no crawler captures material behind a login, and the most heavily used platforms are precisely the least accessible to them." },
      { label: "E", text: "Underlying all of this is a decision nobody enjoys making. Keeping everything is not a policy but an evasion, since indiscriminate accumulation makes retrieval harder and consumes the budget that curation requires. Someone must therefore judge what a future reader will want, in ignorance of who that reader will be, and the judgement is unavoidably political: whose correspondence is worth the storage, whose community is documented, which version of a contested record is preserved. The archive is not a neutral deposit of what happened. It is an argument about what will be allowed to have happened." }
    ],
    options: [
      "Deciding what deserves to survive",
      "The fragility of the storage media",
      "The paradox of a durable past and a vanishing present",
      "Copyright disputes between libraries and publishers",
      "Software obsolescence and the two standard responses",
      "How search engines rank archived material",
      "The particular difficulty of preserving the web",
      "Training the next generation of archivists"
    ],
    questions: [
      { q: "Paragraph A", answer: 2, explanation: "A ninth-century manuscript remains readable while a 1994 file may not - durability and accessibility have come apart." },
      { q: "Paragraph B", answer: 4, explanation: "Abandoned proprietary formats are met with migration and emulation, the two standard but imperfect responses." },
      { q: "Paragraph C", answer: 1, explanation: "Tape, optical discs and hard drives all decay, so archives depend on multiple copies, checksums and continuous funding." },
      { q: "Paragraph D", answer: 6, explanation: "The web was designed to be current: pages vanish, links rot, and crawlers cannot reach material behind a login." },
      { q: "Paragraph E", answer: 0, explanation: "Keeping everything is an evasion; someone must judge what to preserve, and that judgement is political." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
