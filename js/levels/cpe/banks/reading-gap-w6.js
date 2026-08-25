/* CPE Prep bank: Reading gapped text (C2) — week 6 */
(function () {
var BANK = [
  {
    id: "p-rgap6-01",
    title: "The River That Became a Person",
    segments: [
      "In 2017 the New Zealand parliament passed an act declaring the Whanganui River a legal person, with the rights, powers, duties and liabilities that the status entails. The wording was not metaphorical and not decorative; it was the settlement of a claim that the local iwi had pursued, in one forum or another, for well over a century.",
      "To lawyers from other traditions the move looked eccentric, which says more about the traditions than about the river. Corporations, ships, temples and estates have long been treated as persons capable of holding property and appearing in court.",
      "The practical machinery is deliberately modest. Two guardians, one appointed by the iwi and one by the Crown, speak for the river; they can bring proceedings, hold assets and be consulted on decisions affecting the catchment.",
      "The act also embeds a formulation drawn from the iwi's own language, in which the river and the people who belong to it are not separable entities standing in a relation of ownership. Whether a common-law court can give operative content to that idea, rather than merely reciting it in a preamble, is the question the drafting quietly declines to settle.",
      "Comparable moves elsewhere have had mixed fortunes. An Indian court declared the Ganges and Yamuna legal persons in the same year and was overturned within months, partly on the practical objection that nobody could say who would be liable when a river in flood destroyed a village.",
      "The strongest argument for the model is procedural rather than poetic. Environmental law in most countries requires a claimant to demonstrate personal injury, which converts an ecological question into a question about the plaintiff's garden.",
      "Sceptics reply, not unreasonably, that a river with rights and a river with a well-funded regulator may end up in much the same place, and that personhood risks being an elegant answer to a problem that money and enforcement would solve more directly.",
      "Whether the Whanganui arrangement is a template or a curiosity will not be clear for a generation. What it has already done is force a question that environmental legislation is usually designed to avoid: not what the river is worth to us, but on whose behalf anyone is speaking when the river cannot."
    ],
    options: [
      "Granting the entity itself standing removes that awkward step, and with it a great deal of doctrinal contortion.",
      "The novelty is not legal personhood as such, but extending it to something that was previously the object rather than the subject of ownership.",
      "New Zealand has three official languages.",
      "That objection has not been answered anywhere, including in New Zealand.",
      "What they cannot do is override planning law, and nobody claims otherwise.",
      "The settlement also included a formal apology and a fund for the river's health.",
      "Courts elsewhere have been readier to quote such language than to decide anything with it.",
      "The response is that regulators are periodically defunded, and that a legal person is harder to abolish quietly than a budget line."
    ],
    answers: [5, 1, 4, 6, 3, 0, 7],
    explanations: [
      "The apology and the fund complete the description of the 2017 settlement in the opening paragraph.",
      "'The novelty is not legal personhood as such, but extending it to something that was previously the object rather than the subject of ownership' follows the list of corporations, ships and temples.",
      "'What they cannot do is override planning law' qualifies the guardians' powers described immediately before it.",
      "'Courts elsewhere have been readier to quote such language than to decide anything with it' follows the paragraph about the iwi formulation that the drafting declines to settle.",
      "'That objection has not been answered anywhere, including in New Zealand' follows the Indian courts' liability problem and prevents the paragraph reading as a simple contrast.",
      "'Granting the entity itself standing removes that awkward step' answers the personal-injury requirement described in the preceding paragraph, completing the procedural argument.",
      "'The response is that regulators are periodically defunded, and that a legal person is harder to abolish quietly than a budget line' answers the sceptics' objection in the paragraph before it."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
