/* PET Prep bank: Reading gapped text (B1) — week 6 */
(function () {
var BANK = [
  {
    id: "p-rgap6-01",
    title: "How Our Street Got a Bench",
    segments: [
      "There is a bus stop at the end of our street with no shelter and, until last spring, nowhere to sit. Most of the people who use it are over seventy, because the school children walk and everybody else drives. My neighbour Mrs Ferreira waits there twice a week for the hospital bus, standing, for up to twenty minutes.",
      "I assumed that somebody had decided a bench was too expensive. When I finally telephoned the council to complain, a very patient man in the highways department explained that nobody had decided anything at all.",
      "So I filled in the form. It asked for the exact location, a reason, and evidence that local people supported the idea. The first two took five minutes. The third took me six weeks, a clipboard and a great many conversations on doorsteps.",
      "What surprised me was who objected. Two households near the stop were worried that a bench would attract teenagers at night, and they were not being unreasonable: the same thing had happened outside the shops two streets away.",
      "The compromise came from Mrs Ferreira herself. A bench without a back and with two armrests in the middle is comfortable for a short wait and useless for lying down, and the council already used that model elsewhere in the borough.",
      "It was installed in April, eleven months after my telephone call. That sounds slow, and it is, but I now understand the sentence the man in the highways department said to me at the beginning, which I did not believe at the time: most things do not happen because nobody asks for them."
    ],
    options: [
      "The council had a form for exactly this, and in eleven years nobody in our street had ever sent one in.",
      "I stopped counting after the fortieth door, and in the end sixty-three people signed.",
      "The bus company itself owns most of the shelters in the city.",
      "Once that was agreed, the two objecting households signed as well.",
      "Buses to the hospital run only on Tuesdays and Fridays.",
      "I decided that the fair thing was to knock on their doors too, rather than treat them as an obstacle."
    ],
    answers: [4, 0, 1, 5, 3],
    explanations: [
      "'Buses to the hospital run only on Tuesdays and Fridays' follows directly from Mrs Ferreira waiting there twice a week, and explains why the wait is a fixed part of her life.",
      "'The council had a form for exactly this, and in eleven years nobody in our street had ever sent one in' explains the official's point that 'nobody had decided anything at all', and leads into 'So I filled in the form'.",
      "'I stopped counting after the fortieth door, and in the end sixty-three people signed' belongs after the six weeks of doorstep conversations that the evidence requirement cost.",
      "'I decided that the fair thing was to knock on their doors too' follows the objections and explains how the writer dealt with them, which is why a compromise became possible.",
      "'Once that was agreed, the two objecting households signed as well' comes after the description of the backless bench with armrests, and before the bench is finally installed."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
