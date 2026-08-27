/* PET Prep bank: Reading gapped text (B1) — wave 20 */
(function () {
var BANK = [
  {
    id: "p-rgap20-01",
    title: "The Key Under the Flowerpot",
    segments: [
      "For nineteen years my parents kept a spare front door key under a flowerpot beside the step. Everybody in the family knew, several neighbours knew, and my mother once told a delivery driver.",
      "I raised it with them perhaps six times over those years and got the same answer each time, which was that nothing had ever happened.",
      "What eventually changed it was not an argument. My father locked himself out in February, at eleven at night, in the rain, and discovered that the key was not there.",
      "It had been moved by my mother about eight months earlier, to a different pot, after a conversation with a neighbour whose house had been entered. She had not mentioned it to anybody.",
      "They now have a small metal box on the wall with a code, which cost twenty-two pounds and which my father describes as a fuss. Four people know the code and all four of them are family.",
      "What I take from the whole thing is that the risk everybody argues about is rarely the one that causes the trouble. Nineteen years of a key under a pot caused nothing at all, and one unshared decision cost my father two hours in the rain and a locksmith's callout of ninety pounds."
    ],
    options: [
      "That is a fair answer to an argument and a poor answer to a question.",
      "Most break-ins involve a door or a window that was not locked at all.",
      "He had no way of knowing that and no way of asking at that hour.",
      "The box is on the wall in full view, which is the part they both find strange.",
      "She had meant to and had then forgotten entirely.",
      "Insurance policies frequently exclude entry by a key left outside."
    ],
    answers: [0, 2, 4, 3, 1],
    explanations: [
      "承接父母每次都說「又沒出過事」，這句指出那是吵架時的好回答、卻不是對問題的回答。",
      "前段講父親半夜淋雨、發現鑰匙不見了，這句說他當下無從得知、也無從詢問。",
      "本段講母親八個月前把鑰匙換了地方卻沒說，這句補上她本來要說、後來完全忘了。",
      "承接他們現在改用牆上密碼盒，這句說盒子就大剌剌掛在牆上、兩人都覺得怪，語氣輕鬆。",
      "最後講被爭論的風險往往不是真正出事的那個，這句以「多數竊案其實是門窗根本沒鎖」呼應。"
    ]
  },
  {
    id: "p-rgap20-02",
    title: "The Photographs I Print",
    segments: [
      "I take about nine hundred photographs a year on a telephone and I print eleven of them. The eleven go into an album, one page each, with a date and a sentence written underneath in pen.",
      "I began doing this after my grandfather died and my family spent an evening looking at a box of his photographs, of which there were perhaps two hundred from a life of eighty-six years.",
      "The comparison with my own is uncomfortable. I have somewhere over nine thousand photographs stored, and I could not tell you what is in any particular year of them.",
      "Choosing eleven is the entire exercise. It takes an evening in January, it is much harder than it sounds, and about half of what I choose is not what I would have expected in the moment it was taken.",
      "The sentence underneath matters as much as the picture. A photograph of four people at a table means nothing in forty years without a line saying who they are and why that evening happened.",
      "There are now six albums. My daughter, who is eleven, has looked through them considerably more often than she has looked at anything on a screen that I have taken, which was not the reason I started and is the reason I will not stop."
    ],
    options: [
      "His had names and places written on the back in pencil.",
      "None of them is a photograph anybody would call good.",
      "Two hundred photographs can be looked at in an evening; nine thousand cannot be looked at at all.",
      "Printing costs about four pounds a year.",
      "The best ones are usually the ones taken before anybody was ready.",
      "That is the difference, and it has nothing to do with the quality of the camera."
    ],
    answers: [0, 2, 4, 1, 3],
    explanations: [
      "承接祖父一生只留下約兩百張照片，這句補上他的照片背面用鉛筆寫著人名與地點。",
      "前段講作者存了九千多張、卻說不出哪一年有什麼，這句對照兩百張一晚看得完、九千張根本看不了。",
      "本段講選十一張很難、選出的常不是當下以為的那張，這句說最好的往往是沒人準備好時拍的。",
      "承接下方那句話比照片本身重要，這句說這些照片沒有一張稱得上拍得好。",
      "最後講女兒常翻相簿，這句補上一年印照片只花約四鎊，收在成本與價值的對比上。"
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
