/* FCE Prep bank: multiple matching (wave 5) */
(function () {
var BANK = [
  {
    id: "f-rmatch5-01",
    title: "Four People Look Back on a Year Living Abroad",
    sections: [
      { label: "A", text: "Hannah: I went to Seville at twenty as a language assistant, and I spent the first two months convinced I had made an expensive mistake. My Spanish was worse in Spain than it had been in my classroom at home, because real people do not speak in exercises. What rescued me was joining a choir I had no business joining, since I cannot really sing. Nobody there wanted to practise their English on me, so I had to manage. By March I was arguing about football in a language I had arrived unable to order coffee in, and my accent still amuses my former students today." },
      { label: "B", text: "Owen: My company sent me to Osaka for a year, and they prepared me thoroughly for everything except loneliness. The work was straightforward, the city was extraordinary, and the flat they rented for me was clean, silent and forty minutes from anyone I knew. I have never been so professionally productive or so personally miserable. I would tell anyone considering a posting like mine to ask one question at the interview that nobody asks: not what will I be doing, but who will I be having dinner with on a Wednesday in February?" },
      { label: "C", text: "Ines: I did a research year in Uppsala expecting the science to be the difficult part. It wasn't. The difficulty was the dark: in December the sun appears reluctantly around nine and gives up by two, and no one warns you what that does to a person who grew up in Lisbon. Swedish colleagues treated it as a solved problem — daylight lamps, exercise, iron supplements, cake at four — and handed me the whole kit within a fortnight. I now think the hardest parts of moving abroad are rarely the parts you can prepare for by reading." },
      { label: "D", text: "Marcus: I taught in Hanoi for a year and left with the uncomfortable realisation that I had learned more about my own country than about Vietnam. Being the foreigner in the room means being asked constantly to explain things you have never examined: why we queue, why we apologise when someone steps on us, why our students argue with teachers. I could not answer most of it. Ten years on, that is what I actually took home — not the language, which I have lost, but the habit of noticing what I would otherwise assume was normal." }
    ],
    questions: [
      { q: "Who was surprised to find their language skills got worse at first?", answer: 0, explanation: "A: Hannah's Spanish was worse in Spain than in her classroom, because real people do not speak in exercises." },
      { q: "Who says their employer overlooked one part of the preparation?", answer: 1, explanation: "B: Owen says the company prepared him for everything except loneliness." },
      { q: "Who found the local people already had a practical answer to the problem?", answer: 2, explanation: "C: Ines's Swedish colleagues treated the darkness as a solved problem and handed her the whole kit." },
      { q: "Who gained a new perspective on their own culture?", answer: 3, explanation: "D: Marcus learned more about his own country and now notices what he would otherwise assume is normal." },
      { q: "Who joined an activity they were not really qualified for?", answer: 0, explanation: "A: Hannah joined a choir she 'had no business joining', since she cannot really sing." },
      { q: "Who suggests a question people should ask before accepting a job abroad?", answer: 1, explanation: "B: Owen says to ask who you will be having dinner with on a Wednesday in February." },
      { q: "Who mentions the effect of the local climate or environment on their mood?", answer: 2, explanation: "C: Ines describes what the December darkness does to someone who grew up in Lisbon." },
      { q: "Who admits they can no longer speak the language they learned?", answer: 3, explanation: "D: Marcus says he has lost the language ten years on." },
      { q: "Who describes being productive at work but unhappy outside it?", answer: 1, explanation: "B: Owen says he has never been so professionally productive or so personally miserable." },
      { q: "Who mentions being unable to answer questions they were asked?", answer: 3, explanation: "D: Marcus was constantly asked to explain his own customs and could not answer most of it." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
