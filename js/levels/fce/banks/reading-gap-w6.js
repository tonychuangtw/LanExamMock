/* FCE Prep bank: Reading gapped text (B2) — week 6 */
(function () {
var BANK = [
  {
    id: "f-rgap6-01",
    title: "The Summer I Worked in a Bookshop",
    segments: [
      "I applied because I wanted to spend a summer surrounded by books, which is roughly as accurate a description of bookselling as 'surrounded by food' is of working in a kitchen. The interview lasted nine minutes and consisted almost entirely of one question: what had I read recently that I would not recommend to somebody, and why.",
      "The first week destroyed a comfortable idea I had about myself. I knew a great deal about the books I liked and almost nothing about the books people actually buy, and a shop that sells only what the staff admire closes within a year.",
      "By the third week I had learned the real skill, which is not knowledge but listening. Somebody comes in and says they want a present for a father-in-law who 'reads a bit of history'. That sentence contains almost no information, so you ask two or three careful questions and watch which answer makes them lean forward.",
      "There were failures. I sold a beautiful, difficult novel to a woman who wanted something for a long flight, because I loved it and could not stop myself. She came back a fortnight later, politely, to say that it had been the wrong book.",
      "Not every request could be met. A man came in twice a week for a fortnight looking for a novel he could describe only as green, set partly in Lisbon, and read at school in 1974; we had, between us, no author, no title and no publisher.",
      "What I did not expect was how much of the job was physical. Boxes arrive on pallets; a shop's stock has to be counted, moved, returned and shelved in an order that somebody decided in 1876 and nobody has improved on since.",
      "I went back to college in September with a better vocabulary for talking to strangers and a permanently mild ache in my lower back. Both, I now think, were part of the education."
    ],
    options: [
      "The manager told me afterwards that she had stopped listening to the answer and was listening to whether I could disagree with somebody without insulting them.",
      "Most of the recommendations that worked were not clever; they were simply aimed at the right person.",
      "I learned to say 'that one is not for everybody' before handing anything over, which is not dishonest and saves both people a fortnight.",
      "The shop had been in the same family for three generations.",
      "Selling books, it turns out, is a service industry that happens to involve paper.",
      "By the end of August I could tell from the weight of a box roughly how many hardbacks were inside.",
      "We found it in the end by telephoning a bookseller two counties away, which is a network that appears on no website and is held together entirely by people who have met at trade fairs."
    ],
    answers: [0, 4, 1, 2, 6, 5],
    explanations: [
      "The manager's comment explains the odd interview question about a book you would not recommend, and closes that opening paragraph.",
      "'Selling books, it turns out, is a service industry that happens to involve paper' states the lesson of the first week: the shop does not exist to display the staff's taste.",
      "'Most of the recommendations that worked were not clever; they were simply aimed at the right person' follows the description of listening and asking careful questions.",
      "'I learned to say \"that one is not for everybody\"' is the lesson drawn from the failure with the difficult novel and the customer who returned a fortnight later.",
      "'We found it in the end by telephoning a bookseller two counties away' resolves the man looking for the green novel, and describes the informal network the trade runs on.",
      "'By the end of August I could tell from the weight of a box roughly how many hardbacks were inside' belongs with the paragraph about the physical side of the work."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
