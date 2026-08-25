/* PET Prep bank: multiple matching (wave 6) */
(function () {
var BANK = [
  {
    id: "p-rmatch6-01",
    title: "Four People Remember Their First Job",
    sections: [
      { label: "A", text: "Hana: I was sixteen and I washed dishes in a hotel kitchen on Saturdays, from seven in the morning until three. The chef shouted at everyone equally, which I decided was fairer than shouting at some people, and by the third week I could keep up. What I remember most is the heat and the smell of the machine. I earned enough to buy the guitar I still play, and I learned that if you are twenty minutes early, nobody ever asks you anything." },
      { label: "B", text: "Petar: My first job was delivering free newspapers, which sounds easy until you meet a letterbox with a strong spring and a dog behind it. I had four hundred houses and I was paid by the round, not by the hour, so a slow week cost me money. My father drove me on the first Saturday and then never again, which I was annoyed about at the time and grateful for later. I still notice how heavy a bag of paper is." },
      { label: "C", text: "Lucia: I helped in my aunt's flower shop the summer I turned seventeen, mainly because nobody else would give me a job. I expected to arrange flowers and instead I swept, carried buckets and wrote out cards for funerals, which taught me more about people than any lesson at school. My aunt paid me properly, in an envelope, and made me write down what I spent it on. I did not enjoy that part, and I have kept the habit for thirty years." },
      { label: "D", text: "Tomas: I worked in a supermarket, on the tills at first and then in the stockroom, which I preferred because nobody talks to you. The training was two hours long and most of it was about not arguing with customers. Once a woman shouted at me for eleven minutes because the offer she wanted had finished on Sunday. My manager stood next to me and said nothing until she left, and then he said: 'You did that well, and it was not about you.'" }
    ],
    questions: [
      { q: "Who was paid according to the amount of work finished, not the time spent?", answer: 1, explanation: "B: Petar was 'paid by the round, not by the hour, so a slow week cost me money'." },
      { q: "Who was defended by a manager during a difficult moment?", answer: 3, explanation: "D: Tomas's manager stood next to him through eleven minutes of shouting and reassured him afterwards." },
      { q: "Who bought something with the money that they still own?", answer: 0, explanation: "A: Hana earned enough for the guitar she still plays." },
      { q: "Who got the job through a family member?", answer: 2, explanation: "C: Lucia helped in her aunt's flower shop." },
      { q: "Who mentions a habit they have kept ever since?", answer: 2, explanation: "C: Lucia was made to write down what she spent and 'has kept the habit for thirty years'." },
      { q: "Who was helped on the first day and then left to manage alone?", answer: 1, explanation: "B: Petar's father drove him on the first Saturday 'and then never again'." },
      { q: "Who preferred a part of the job where there was little contact with people?", answer: 3, explanation: "D: Tomas preferred the stockroom 'because nobody talks to you'." },
      { q: "Who found the work physically hard?", answer: 0, explanation: "A: Hana remembers the heat of the kitchen and the dish machine, and how long it took to keep up." },
      { q: "Who did work that was completely different from what they expected?", answer: 2, explanation: "C: Lucia expected to arrange flowers and instead swept, carried buckets and wrote funeral cards." },
      { q: "Who learned a rule about arriving at work?", answer: 0, explanation: "A: Hana learned that 'if you are twenty minutes early, nobody ever asks you anything'." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
