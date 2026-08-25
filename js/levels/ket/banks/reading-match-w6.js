/* KET Prep bank: multiple matching (wave 6) */
(function () {
var BANK = [
  {
    id: "k-rmatch6-01",
    title: "Four Students Talk About Getting to School",
    sections: [
      { label: "A", text: "Nuri: I walk, and it takes eighteen minutes. My mother timed it once with her phone. I like walking because I meet my friend Deniz at the corner of the park and we talk the whole way, so the time goes quickly. In winter it is still dark when we start, and my father makes me wear a jacket with a bright yellow stripe on the back. The only thing I hate is rain, because my shoes get wet and stay wet all morning." },
      { label: "B", text: "Marta: I go by bus, and the bus takes twenty-five minutes when the traffic is normal. It is never normal on Mondays. I get up at six twenty, which my sister thinks is crazy, but I sleep on the bus, so it is fine. My bus pass costs my parents forty euros a month. Last year I left my bag on the seat and a woman ran after the bus with it. I always check the seat now before I stand up." },
      { label: "C", text: "Ivan: I cycle. It is four kilometres and I do it in about fifteen minutes, faster than the bus, which makes me happy every single morning. My bike is old and green and my uncle gave it to me. I keep it in the bike shed behind the gym and I always use two locks, because a bike was stolen from there in March. When it rains I still cycle, but I put my books in a plastic bag inside my rucksack." },
      { label: "D", text: "Sofia: My father drives me because he passes the school on the way to his office. We leave at seven thirty and we listen to a programme about animals on the radio. I know it is not good for the air, and my geography teacher says so too, so this term I have started getting out at the traffic lights and walking the last part, about six minutes. My father says it is the only exercise he sees me do." }
    ],
    questions: [
      { q: "Who talks to a friend on the way to school?", answer: 0, explanation: "A: Nuri meets Deniz at the corner of the park and they talk the whole way." },
      { q: "Who sleeps during the journey?", answer: 1, explanation: "B: Marta gets up at six twenty but sleeps on the bus, so she says it is fine." },
      { q: "Who says their way of travelling is quicker than the bus?", answer: 2, explanation: "C: Ivan cycles four kilometres in fifteen minutes, 'faster than the bus'." },
      { q: "Who has changed the way they travel this term?", answer: 3, explanation: "D: Sofia now gets out at the traffic lights and walks the last six minutes." },
      { q: "Who mentions the cost of travelling to school?", answer: 1, explanation: "B: Marta says the bus pass costs her parents forty euros a month." },
      { q: "Who was given their vehicle by a relative?", answer: 2, explanation: "C: Ivan's uncle gave him the old green bike." },
      { q: "Who wears something to be seen in the dark?", answer: 0, explanation: "A: Nuri's father makes him wear a jacket with a bright yellow stripe on the back." },
      { q: "Who listens to something on the way?", answer: 3, explanation: "D: Sofia and her father listen to a programme about animals on the radio." },
      { q: "Who is careful because something was lost or stolen before?", answer: 1, explanation: "B: Marta left her bag on the seat once, so she always checks the seat now. (Ivan also has a reason, but Marta's is about her own loss.)" },
      { q: "Who protects their things when it rains?", answer: 2, explanation: "C: Ivan puts his books in a plastic bag inside his rucksack when it rains." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
