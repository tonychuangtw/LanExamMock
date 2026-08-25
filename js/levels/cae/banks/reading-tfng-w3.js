/* CAE Prep bank: True/False/Not Given reading (wave 3) */
(function () {
var BANK = [
  {
    id: "c-tfng3-01",
    title: "The Economics of the Second-Hand Wardrobe",
    text: "Buying used clothes has completed an unlikely journey. Within living memory it carried a stigma; today it is marketed as the responsible choice, and resale platforms are valued like technology companies. The reasons are partly generational and partly arithmetical: global clothing production roughly doubled between 2000 and 2015, and the average garment is now worn markedly fewer times before it is discarded than it was two decades ago. A great deal of nearly new material is therefore circulating.\nWhat happens to it is less romantic than the advertising suggests. Charity shops in wealthy countries receive far more than they can hope to sell on their own shelves, and the surplus enters a global trade in used textiles worth billions. Bales are sorted, graded and exported, much of it to West Africa, South Asia and Eastern Europe. The largest single destination in Ghana, the Kantamanto market in Accra, receives many millions of garments every week. Traders there buy bales unseen, at a fixed price, and discover only on opening them whether the contents can be resold. A substantial proportion cannot, and what cannot be sold becomes the receiving city's waste problem rather than the exporting country's.\nRecycling is often presented as the answer, but the chemistry is unforgiving. Most garments are blends, and separating polyester from cotton at scale remains difficult and expensive; the share of clothing that is genuinely turned back into new clothing fibre is, by most estimates, well under one per cent. The rest is downcycled into insulation and cleaning cloths, burned, or buried. New European rules requiring member states to collect textiles separately have improved the raw material available, but collection is not the same as reprocessing, and processing capacity has not kept pace.\nThere is a further complication that the industry rarely advertises. If second-hand clothing is cheap and abundant, some shoppers treat their existing wardrobe as more disposable, selling last season's purchases to fund next season's. Resale then becomes not a brake on consumption but a subsidy for it. The most useful measure, on almost every analysis, remains the least commercially attractive one: buying fewer things and keeping them for longer.",
    questions: [
      {
        q: "Second-hand clothing was once seen less positively than it is now.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'Within living memory it carried a stigma; today it is marketed as the responsible choice'."
      },
      {
        q: "Clothes are typically worn more times before disposal than they were twenty years ago.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'the average garment is now worn markedly fewer times before it is discarded than it was two decades ago'."
      },
      {
        q: "Charity shops sell most of what they receive in their own shops.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - they 'receive far more than they can hope to sell on their own shelves', and the surplus is exported."
      },
      {
        q: "Traders at Kantamanto can inspect the contents of a bale before agreeing a price.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'Traders there buy bales unseen, at a fixed price, and discover only on opening them whether the contents can be resold'."
      },
      {
        q: "Ghana has introduced a tax on imported second-hand clothing.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text describes the trade and the waste it creates, but mentions no taxes or import measures."
      },
      {
        q: "Less than one per cent of clothing is turned back into new clothing fibre.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the share is 'by most estimates, well under one per cent', with the rest downcycled, burned or buried."
      },
      {
        q: "European separate-collection rules have been matched by an equivalent growth in processing capacity.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'collection is not the same as reprocessing, and processing capacity has not kept pace'."
      },
      {
        q: "The availability of cheap resale may encourage some people to buy more, not less.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - shoppers may treat their wardrobe as disposable, so 'Resale then becomes not a brake on consumption but a subsidy for it'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
