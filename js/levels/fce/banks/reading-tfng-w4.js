/* FCE Prep bank: True/False/Not Given reading (wave 4) */
(function () {
var BANK = [
  {
    id: "f-tfng4-01",
    title: "Selling Water to People Who Already Have It",
    text: "In most of Europe, North America and Japan, water arrives in the kitchen at a price of roughly a fraction of a penny per litre, tested more often than almost any other food or drink. Bottled water sells for several hundred times that, and demand has risen every decade since the 1970s. Explaining that gap says a great deal about how modern marketing works.\nThe modern industry begins with a change of category. Early advertising did not compare bottled water with tap water at all; it compared it with fizzy drinks and, later, with wine. The bottle was placed on restaurant tables, given a glass shape closer to a wine bottle than a milk carton, and priced accordingly. Two mineral waters that would once have been sold as medicine became, within a generation, symbols of a certain kind of evening out.\nThe second move was to make the tap look suspicious without saying anything untrue. Campaigns emphasised purity, mountains and glaciers. In some countries this succeeded so completely that surveys now find substantial numbers of people who believe their tap water is unsafe, in cities where it demonstrably is not. Meanwhile a significant share of bottled water sold worldwide is not spring water at all but treated municipal supply, a fact printed in small type on the label.\nThe environmental accounting is less debated than it once was. Producing and transporting a litre of bottled water uses far more energy than piping the same litre, and although PET bottles are technically recyclable, global collection rates remain far below the industry's own targets, with a large proportion ending up in landfill, incinerators or waterways.\nNone of this makes bottled water indefensible. Where supply is genuinely unsafe, or after an earthquake or flood, bottles save lives, and portable water is a reasonable convenience for a long journey. What is striking is the size of the market in exactly those places where the public system works best. The industry's real achievement was not finding a better product; it was persuading people who already owned something to buy it again, in a container, at a markup.",
    questions: [
      {
        q: "Tap water in wealthy countries is tested more often than most other drinks.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - it is 'tested more often than almost any other food or drink'."
      },
      {
        q: "Early bottled-water advertising compared the product directly with tap water.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'Early advertising did not compare bottled water with tap water at all; it compared it with fizzy drinks and, later, with wine'."
      },
      {
        q: "Some bottled water sold today is treated water from public supplies.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'a significant share of bottled water sold worldwide is not spring water at all but treated municipal supply'."
      },
      {
        q: "Advertisements have stated that tap water is dangerous to drink.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the campaigns made 'the tap look suspicious without saying anything untrue', emphasising purity and mountains instead."
      },
      {
        q: "Bottled water is more expensive in restaurants than in shops.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - restaurants are mentioned as a setting, but no comparison of prices between shops and restaurants is made."
      },
      {
        q: "PET bottles cannot be recycled.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - they are 'technically recyclable'; the problem is that collection rates are low."
      },
      {
        q: "The writer accepts that bottled water is necessary in some situations.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'Where supply is genuinely unsafe, or after an earthquake or flood, bottles save lives'."
      },
      {
        q: "Sales of bottled water are highest in countries where tap water is unsafe.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - the writer finds it striking that the market is large 'in exactly those places where the public system works best'."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
