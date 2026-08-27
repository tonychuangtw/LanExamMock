/* PET Prep bank: Reading matching (B1) — wave 16 */
(function () {
var BANK = [
  {
    id: "p-rmatch16-01",
    title: "Four People Talk About Borrowing and Lending",
    sections: [
      { label: "A", text: "Rina: I lend tools to anybody who asks and I have lost about eleven items in nine years, which I regard as a running cost rather than a problem. The rule I keep is that I never lend anything I would mind losing, which sounds obvious and which most people do not actually apply: they lend the good thing, resent it quietly for four months, and then stop lending anything. I would rather own slightly worse tools and be the person who says yes." },
      { label: "B", text: "Adam: I do not lend money to friends and I do not borrow it, and this is a rule I made at twenty-four after one experience that cost me a friendship of eleven years over four hundred pounds. What I do instead, when somebody needs help, is give whatever I can afford to give, with the amount decided by me and no expectation of return. Nobody has ever been offended. Two people have refused, and both of them came back four or five weeks later." },
      { label: "C", text: "Nell: There is a book I lent in 2011 that I still think about, which tells you something about me rather than about the borrower. It was not valuable and it had my grandfather's writing in it, and I did not say that when I lent it because it would have seemed excessive. What I have learned is to say the excessive thing at the moment of lending, and I now hand things over with about nine words of explanation that I would once have been embarrassed to say." },
      { label: "D", text: "Kofi: In the street where I grew up there was a shared ladder, a shared strimmer and, for about four years, a shared car, and nobody in my family ever bought any of those things. Eleven households used the ladder. It lived in a specific garage and there was a notebook beside it in which you wrote your name, and I have never since lived anywhere where anything like that existed, and I am not sure whether that is about the places or about the years." }
    ],
    questions: [
      { q: "Who deliberately owns less valuable versions of things?", answer: 0, explanation: "A: Rina would rather own slightly worse tools." },
      { q: "Who gives money instead of lending it?", answer: 1, explanation: "B: Adam gives what he can afford." },
      { q: "Who regrets not explaining an object's importance?", answer: 2, explanation: "C: Nell did not say the book had her grandfather's writing." },
      { q: "Who describes shared equipment in a whole street?", answer: 3, explanation: "D: Kofi's street shared a ladder and other things." },
      { q: "Who lost a friendship over a loan?", answer: 1, explanation: "B: Adam lost a friendship of eleven years." },
      { q: "Who accepts losing items as a normal cost?", answer: 0, explanation: "A: Rina regards eleven lost items as a running cost." },
      { q: "Who now says something at the moment of lending?", answer: 2, explanation: "C: Nell now says about nine words of explanation." },
      { q: "Who mentions a record kept beside a shared item?", answer: 3, explanation: "D: There was a notebook beside the ladder." },
      { q: "Who says most people lend the wrong things and then stop?", answer: 0, explanation: "A: Rina says people lend the good thing and then stop." },
      { q: "Who mentions people who declined help and later accepted it?", answer: 1, explanation: "B: Two people refused and came back weeks later." }
    ]
  },
  {
    id: "p-rmatch16-02",
    title: "Four People Talk About a Day That Changed Their Plans",
    sections: [
      { label: "A", text: "Suzy: I went to an open day at a college with a friend who wanted to go, having no interest in it at all, and I was in a room for about eleven minutes listening to somebody describe a course I had never heard of. I applied four weeks later. My friend did not. I have now worked in that field for nineteen years, and the entire thing rests on the fact that a bus I was waiting for did not come and she asked me to come with her instead." },
      { label: "B", text: "Nathan: I was made redundant on a Tuesday with four hours' notice, after nine years, and I would describe the following six months as the worst period of my life and the most necessary. I had been unhappy in that job for about four years and had not moved because there was no reason to, and there is a version of me that stayed until sixty. What I would say is that I did not choose the change and I did choose everything after it." },
      { label: "C", text: "Ivy: My plans changed because of a letter that arrived on a day when I happened to be at home, which I was not usually. It was from a hospital, about an appointment for my father that he had not told anybody about, and everything that followed in the next eleven months came from the fact that I opened it. He was not pleased. Four years on he says that it was the best thing anybody did for him, and he still would not have told us." },
      { label: "D", text: "Bruno: I missed a flight by nine minutes in 2016 and had to stay in a city for two days, and in a café on the second morning I sat next to a woman who was reading something I recognised. We spoke for about four hours. We were married in 2019 and have two children, and I am entirely aware of how this sounds and I would say that it is not a story about fate. It is a story about how few of the important things are chosen." }
    ],
    questions: [
      { q: "Who attended something only to accompany somebody else?", answer: 0, explanation: "A: Suzy went with a friend who wanted to go." },
      { q: "Who lost their job with almost no warning?", answer: 1, explanation: "B: Nathan had four hours' notice." },
      { q: "Who found out something a relative had concealed?", answer: 2, explanation: "C: Ivy opened a letter about her father's appointment." },
      { q: "Who met their partner because of a missed connection?", answer: 3, explanation: "D: Bruno missed a flight by nine minutes." },
      { q: "Who says they did not choose the change but chose what followed?", answer: 1, explanation: "B: Nathan chose everything after it." },
      { q: "Who says the relative still would not have told them?", answer: 2, explanation: "C: Ivy's father still would not have told them." },
      { q: "Who rejects the idea that the story is about fate?", answer: 3, explanation: "D: Bruno says it is not a story about fate." },
      { q: "Who mentions that the friend did not follow the same path?", answer: 0, explanation: "A: Suzy's friend did not apply." },
      { q: "Who had been unhappy for years without acting?", answer: 1, explanation: "B: Nathan had been unhappy for about four years." },
      { q: "Who was at home at an unusual time?", answer: 2, explanation: "C: Ivy was at home when she was not usually." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
