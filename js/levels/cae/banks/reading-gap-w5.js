/* CAE Prep bank: Reading gapped text (C1) — week 5 */
(function () {
var BANK = [
  {
    id: "c-rgap5-01",
    title: "The Orchard That Outlived Its Owners",
    segments: [
      "When the last member of the Halloran family died in 1994, the farm was sold to a developer, the house was demolished, and the twelve acres behind it were left to whatever the market decided next. Planning permission was refused twice, the developer went quietly bankrupt in the recession, and the land simply stopped being anybody's project. Nobody mowed it, nobody fenced it, and nobody, for the better part of two decades, thought about it at all.",
      "What survived that neglect was an orchard: eighty-odd apple trees planted in rows in the 1920s, now half-strangled by bramble and elder but still, remarkably, fruiting. Locals took apples occasionally on the way past. It was widely assumed that the trees were ordinary commercial varieties gone wild, and that the whole plot would eventually be cleared.",
      "The assumption turned out to be wrong in an unusually consequential way. In 2013 a volunteer from a county fruit group walked the rows with a hand lens and a reference book and identified eleven varieties, three of which were on the national list of cultivars presumed lost. One of them had last been recorded, in a nurseryman's catalogue, in 1931.",
      "News of this kind travels faster than anyone expects. Within a year the site had a volunteer group, a grafting programme and an argument. The heritage enthusiasts wanted the trees propagated and distributed as widely as possible; the ecologists pointed out that two decades of neglect had produced an extraordinarily good habitat, and that tidying the orchard to make it manageable would destroy the very conditions that had kept it interesting.",
      "The compromise reached after eighteen months of meetings is, by the participants' own admission, untidy. A third of the orchard is now actively managed and open to visitors; a third is cut on a long rotation; and a third is left alone entirely, with fallen wood where it lies. Grafted trees from the three rediscovered varieties have gone to nine collections in four countries, so that the loss of this site would no longer mean the loss of the cultivars.",
      "Sustaining the arrangement has proved harder than establishing it. The grafting programme depends on four people, three of whom are over seventy, and the long-rotation cutting requires equipment the group does not own. Two funding applications have been rejected on the grounds that the site is neither a nature reserve nor a working farm, which is precisely the point of it.",
      "It is tempting to draw a straightforward moral about the value of leaving things alone, but that is not quite what happened here. Neglect preserved the orchard only because nothing profitable could be done with the land, and it very nearly destroyed it: another decade of bramble would have finished several of the older trees. What actually saved it was neglect followed, at the right moment, by somebody who knew what they were looking at."
    ],
    options: [
      "Very few of the visitors who now come each October are aware of how close the site came to being cleared.",
      "The result is a landscape that satisfies nobody's preferred model and appears to work.",
      "Neither group was being unreasonable, which is what made the disagreement so difficult to settle.",
      "That claim required verification, and it got it: DNA analysis at a research station confirmed two of the three identifications the following spring.",
      "Apple trees are among the longest-lived fruit trees in temperate regions.",
      "This turned out to be the most fortunate thing that could have happened to it.",
      "Categories designed to simplify funding decisions can make genuinely unusual places invisible."
    ],
    answers: [5, 0, 3, 2, 1, 6],
    explanations: [
      "'The most fortunate thing that could have happened to it' comments on the total neglect described above and prepares for what that neglect allowed to survive.",
      "'Very few of the visitors who now come each October are aware of how close the site came to being cleared' rounds off the paragraph about locals assuming the trees were ordinary and the plot doomed.",
      "'That claim required verification, and it got it' follows directly from the volunteer's identification of varieties presumed lost.",
      "'Neither group was being unreasonable' comments on the dispute between heritage enthusiasts and ecologists just described.",
      "'The result is a landscape that satisfies nobody's preferred model and appears to work' summarises the untidy three-way compromise set out above.",
      "'Categories designed to simplify funding decisions can make genuinely unusual places invisible' generalises the rejected applications: the site fits neither category the forms allow."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
