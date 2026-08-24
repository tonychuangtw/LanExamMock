/* CPE Prep bank: Reading gapped text (C2) — week 5 */
(function () {
var BANK = [
  {
    id: "p-rgap5-01",
    title: "An Apprenticeship in Silence",
    segments: [
      "I went to learn bookbinding because I wanted to make something with my hands, and I assumed, as most people do, that the difficulty would lie in the making. The workshop I was accepted into occupied the ground floor of a building in a town whose principal industry had closed a generation earlier, and it was run by a woman who had trained in Florence in the 1970s and had, by her own cheerful account, no gift whatever for teaching.",
      "For the first three weeks I was not permitted to touch a book. I swept, I sorted offcuts by grain direction, I mixed paste and threw most of it away because it was lumpy, and I watched. When I asked questions, they were answered so briefly that I stopped asking, which I later understood to have been the point rather than a failure of communication.",
      "The reason, when it eventually declared itself, was not mystical. Bookbinding is a sequence of irreversible decisions, and almost every error is committed several steps before it becomes visible: a spine that will not open properly in a finished volume was mis-shaped an hour earlier, by someone who felt nothing wrong at the time. Watching, it turns out, teaches the hand what to notice; explaining teaches only the ear.",
      "This runs against nearly everything contemporary instruction assumes. We are encouraged to articulate, to break skills into named components, to assess understanding by asking learners to describe what they are doing. Much of that is genuinely useful, and for a certain class of knowledge it is indispensable. But it quietly presumes that what can be said is the whole of what can be known, and there are crafts in which that presumption is simply false.",
      "None of this is an argument for mystification, and I want to be careful here, because the romance of the silent master has been used to excuse a great deal of bad teaching. My binder's silence was not withheld wisdom; it was a considered judgement that a description delivered before the hand was ready would be received as words and stored as words, and would then have to be unlearned.",
      "The proof came in the fourth month, when she began to talk. Suddenly the explanations were detailed, technical and generous, and I could hear them, because every term she used now referred to something my hands had already met. Instruction that would have been noise in week one was, in month four, extraordinarily efficient.",
      "I no longer bind books; the workshop closed when she retired, and the trade has fewer practitioners each year. What I took away was not a craft but a suspicion, which has been useful in every field I have worked in since: that when a subject resists explanation, the resistance is worth examining before it is dismissed as obscurity.",
      "It may be, of course, that this is simply a rationalisation of an unusual education, and that a more articulate teacher would have got me to the same place in half the time. I have no way of testing it. I notice only that the things I learned in silence are the things I have not forgotten."
    ],
    options: [
      "The sequence, in other words, was deliberate: silence until the hands had something to attach the words to.",
      "Handmade paper is graded by weight as well as by fibre content.",
      "It took me an embarrassingly long time to work out why.",
      "That distinction matters, and it is easily lost.",
      "Whether the method could be defended in general, I am not sure.",
      "Craft knowledge of this kind is not secret; it is merely slow, and it does not survive being summarised.",
      "What I did not anticipate was how much of the training would consist of not being told things.",
      "It is a suspicion, not a doctrine, and I hold it loosely."
    ],
    answers: [6, 2, 3, 5, 0, 4, 7],
    explanations: [
      "'How much of the training would consist of not being told things' sets up the three weeks in which the writer was not allowed to touch a book and questions went unanswered.",
      "'It took me an embarrassingly long time to work out why' follows the unexplained silence and introduces the explanation given in the next paragraph.",
      "'That distinction matters, and it is easily lost' picks up the contrast just drawn between teaching the hand and teaching the ear, and leads into the critique of articulation-based instruction.",
      "'Craft knowledge of this kind is not secret; it is merely slow, and it does not survive being summarised' closes the paragraph on articulation-based instruction and sets up the warning against mystification that follows.",
      "'The sequence, in other words, was deliberate' restates the binder's reasoning: silence until the hands were ready for the words.",
      "'Whether the method could be defended in general, I am not sure' introduces the closing reservation after the successful fourth month.",
      "'It is a suspicion, not a doctrine, and I hold it loosely' follows the writer's account of what was taken away and prepares the final hedged paragraph."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
