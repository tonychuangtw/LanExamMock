/* FCE Prep bank: multiple matching (wave 6) */
(function () {
var BANK = [
  {
    id: "f-rmatch6-01",
    title: "Four Volunteers on a Season Coaching a Junior Team",
    sections: [
      { label: "A", text: "Ines: I took the under-elevens because the previous coach left in September and the alternative was folding the team. I had played to a decent level and I assumed that would be the useful part; it was not. What mattered was remembering that a nine-year-old who has been dropped off by a parent in a hurry may simply need five minutes before she can concentrate on anything at all. I stopped starting sessions with drills and started them with a game, and attendance went up." },
      { label: "B", text: "Karl: My son was in the squad, which is why I volunteered and also why the first two months were difficult. He behaved worse with me than with any other adult, and the other parents watched to see whether he would get picked ahead of better players. I asked another coach to choose the starting line-up for the first six matches, and once that was public, the temperature dropped. I would recommend it to anyone in the same position." },
      { label: "C", text: "Delphine: I coach the under-fifteens, the age at which most players quit. Some of it is exams and some of it is that sport stops being play and starts being assessed, but a lot of it, I have come to think, is the shouting: from the touchline, from the bench, occasionally from me. We agreed a rule in November that adults may say a player's name and one instruction, and nothing else. Three players who had stopped coming came back." },
      { label: "D", text: "Owen: I do the least glamorous job, which is the fixtures, the pitch bookings and the forms. Nobody photographs it and it takes about four hours a week. What I understood by Christmas is that the club does not lose teams because of coaching; it loses them when a match is cancelled twice in a row and eleven families decide the club is not serious. Sorting a pitch is not admin, it is the thing that keeps the season alive." }
    ],
    questions: [
      { q: "Who changed the structure of training sessions?", answer: 0, explanation: "A: Ines stopped starting with drills and began with a game, and attendance rose." },
      { q: "Who removed themselves from a decision to avoid suspicion of favouritism?", answer: 1, explanation: "B: Karl asked another coach to pick the starting line-up for the first six matches." },
      { q: "Who works with the age group where players are most likely to give up?", answer: 2, explanation: "C: Delphine coaches the under-fifteens, 'the age at which most players quit'." },
      { q: "Who says their most important contribution is not visible?", answer: 3, explanation: "D: Owen does fixtures, bookings and forms - 'nobody photographs it'." },
      { q: "Who admits to being part of the problem they later solved?", answer: 2, explanation: "C: Delphine includes herself in the shouting - 'occasionally from me' - before the new rule." },
      { q: "Who took the role because otherwise the team would not have continued?", answer: 0, explanation: "A: Ines took the under-elevens because 'the alternative was folding the team'." },
      { q: "Who mentions how much time the job takes each week?", answer: 3, explanation: "D: Owen says the fixtures and paperwork take about four hours a week." },
      { q: "Who had a difficult start because of a family relationship?", answer: 1, explanation: "B: Karl's son was in the squad and behaved worse with him than with other adults." },
      { q: "Who reports players returning after a change was made?", answer: 2, explanation: "C: after the one-instruction rule, 'three players who had stopped coming came back'." },
      { q: "Who found that their playing experience was less useful than expected?", answer: 0, explanation: "A: Ines assumed her playing level would be the useful part - 'it was not'." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
