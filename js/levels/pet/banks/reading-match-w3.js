/* PET Prep bank: Reading matching (B1) — week 3 */
(function () {
var BANK = [
  {
    id: "p-rmatch3-01",
    title: "Five Reviews of Family Days Out",
    sections: [
      {
        label: "A",
        text: "The Wildwood Adventure Park: We took our three children, aged six to thirteen, and for once nobody complained of boredom. The rope bridges and zip wires are sorted by difficulty, with colour bands like ski runs, so our youngest was never pushed beyond her level. Staff at every platform were patient and safety checks were constant. Two warnings: wear old clothes, because mud is guaranteed, and book online in advance, because the Saturday queue for tickets snaked past the car park. We took a picnic, which saved us a fortune, as the only café on site charges airport prices for sandwiches."
      },
      {
        label: "B",
        text: "The Steam Railway Experience: My father is seventy-eight and grew up beside this railway line, so this trip was really his birthday present. The volunteers who restore the old engines clearly love every bolt of them, and several stopped to chat with Dad about the past, which made his day. The forty-minute ride through the hills is beautiful, and tea in the restored station room feels like 1935 in the best way. It is not ideal for restless small children, as the main pleasure is slow and gentle. For grandparents, however, I cannot imagine a better afternoon, and we have already booked the winter trip."
      },
      {
        label: "C",
        text: "Splash World: Let me be honest: it is loud, it is crowded, and the changing rooms on a Sunday resemble a small friendly war. But the slides are genuinely brilliant, including the new Tornado, which my teenagers rode eleven times. The wave pool has lifeguards every ten metres, which relaxed me enough to actually read a chapter of my book. Food inside is fine but you cannot bring your own, which annoyed us. Off-peak tickets on Wednesday afternoons cost nearly half the weekend price, and if you can possibly go then instead, you will have a much calmer, cheaper day."
      },
      {
        label: "D",
        text: "Hartley Open Farm: This place understands small children completely. My four-year-old fed lambs, collected warm eggs, and drove a pedal tractor around a miniature farmyard for a solid hour. Everything is designed at child height, hand-washing stations are everywhere, and staff explain animals with real knowledge. The gift shop exit is cleverly placed so you cannot avoid it, so prepare for negotiations. Our ten-year-old enjoyed it less; there is little here for children who consider themselves too old for lambs, which, apparently, happens at about nine. Go early: the baby animals are liveliest, and parking fills by ten thirty."
      },
      {
        label: "E",
        text: "The City Science Dome: We came on a rainy Tuesday in the school holidays expecting crowds, and yes, it was busy, but the building swallows people well. The exhibits are hands-on and shameless fun: my children built bridges, launched rockets and froze their own shadows on a wall, and my husband had to be dragged away from the earthquake table. Everything is included in one ticket price, even the planetarium show, which genuinely amazed all of us. The café is reasonable and lets you refill water bottles free. One tip: the rocket workshop needs signing up at the entrance desk the moment you arrive, because places vanish within half an hour."
      }
    ],
    questions: [
      { q: "Which place is recommended for a cheaper visit at a particular time?", answer: 2, explanation: "In C, off-peak Wednesday afternoon tickets \"cost nearly half the weekend price\" at Splash World." },
      { q: "Which reviewer says one activity must be booked immediately on arrival?", answer: 4, explanation: "In E, the rocket workshop \"needs signing up at the entrance desk the moment you arrive\" as places go in half an hour." },
      { q: "Which place suited an elderly visitor especially well?", answer: 1, explanation: "In B, the steam railway was the seventy-eight-year-old father's birthday treat, and volunteers chatting about the past \"made his day\"." },
      { q: "Which reviewer warns that visitors will get dirty?", answer: 0, explanation: "In A, the reviewer advises \"wear old clothes, because mud is guaranteed\" at the adventure park." },
      { q: "Which place was less successful for an older child?", answer: 3, explanation: "In D, the ten-year-old \"enjoyed it less; there is little here for children who consider themselves too old for lambs\"." },
      { q: "Which reviewer was annoyed that outside food is not allowed?", answer: 2, explanation: "In C, at Splash World \"you cannot bring your own\" food, \"which annoyed us\"." },
      { q: "Which place offers activities graded by difficulty?", answer: 0, explanation: "In A, the rope bridges and zip wires \"are sorted by difficulty, with colour bands like ski runs\"." },
      { q: "Which reviewer mentions that everything is covered by a single ticket?", answer: 4, explanation: "In E, \"Everything is included in one ticket price, even the planetarium show\"." },
      { q: "Which reviewer complains about the position of the shop?", answer: 3, explanation: "In D, \"The gift shop exit is cleverly placed so you cannot avoid it, so prepare for negotiations\"." },
      { q: "Which reviewer felt safe enough to relax completely?", answer: 2, explanation: "In C, lifeguards every ten metres \"relaxed me enough to actually read a chapter of my book\"." }
    ]
  },
  {
    id: "p-rmatch3-02",
    title: "Four People Talk About Their Morning Routines",
    sections: [
      {
        label: "A",
        text: "Irena: I am a baker, so my morning starts at half past three, when the rest of the city is deep asleep. People pity me when they hear this, but the first two hours of my day are my favourite: the streets are silent, the ovens warm up slowly, and I listen to entire albums from beginning to end while I work the dough. By the time the first customers arrive at seven, I have already done what feels like a full day of good work. The real price is social: I leave every dinner party at nine like Cinderella, and my friends have finally stopped arguing about it."
      },
      {
        label: "B",
        text: "Devon: I invented a rule for myself two years ago that changed everything: no screen until after breakfast. Before that, I would wake up, grab my phone, and lose forty minutes to news and messages before my feet even touched the floor, arriving at work already tired of the world. Now the phone charges in the kitchen overnight, and my alarm is an old clock I bought at a market. I read over coffee, sometimes just ten pages. Colleagues ask if I have been on holiday, because I look rested. Honestly, the first two weeks were genuinely difficult, like giving up sugar. Then it simply became who I am."
      },
      {
        label: "C",
        text: "Fatima: Three mornings a week, I swim in the sea before work, all year round, including January, when getting into the water requires shouting. I joined the dawn swimming group after my doctor suggested exercise for stress, and I chose the strangest option on the list. The cold is real but short, and what follows is two hours of feeling absolutely awake and calm, better than anything a coffee has ever done for me. The group has become close: we have swum through birthdays, retirements and one wedding morning, when the bride wore her veil into the water. My rule is simple: I never regret a swim, only the ones I miss."
      },
      {
        label: "D",
        text: "Stefan: My mornings are a military operation with two commanders aged five and seven. I prepare everything the night before: clothes on chairs, bags by the door, breakfast table already set like a restaurant. Colleagues laugh at my system until they hear the numbers: we have missed the school bus once in two years, and that was because of a lost shoe that was eventually found in the refrigerator, a mystery nobody has solved. The secret is that the children have jobs too; even the five-year-old checks the weather and chooses hats. I used to think routines were boring. Now I know they are the only reason I arrive at work calm."
      }
    ],
    questions: [
      { q: "Who prepares for the morning on the previous evening?", answer: 3, explanation: "In D, Stefan prepares \"everything the night before: clothes on chairs, bags by the door, breakfast table already set\"." },
      { q: "Who changed their routine after medical advice?", answer: 2, explanation: "In C, Fatima joined the dawn swimming group \"after my doctor suggested exercise for stress\"." },
      { q: "Who says their new habit was hard only at the beginning?", answer: 1, explanation: "In B, Devon says \"the first two weeks were genuinely difficult, like giving up sugar. Then it simply became who I am\"." },
      { q: "Whose routine limits their evening social life?", answer: 0, explanation: "In A, Irena leaves \"every dinner party at nine like Cinderella\" because of her half-past-three start." },
      { q: "Who gives responsibilities to other members of the household?", answer: 3, explanation: "In D, \"the children have jobs too; even the five-year-old checks the weather and chooses hats\"." },
      { q: "Who enjoys music as part of the start of their day?", answer: 0, explanation: "In A, Irena listens \"to entire albums from beginning to end\" while working the dough." },
      { q: "Who replaced a modern device with an older object?", answer: 1, explanation: "In B, Devon's phone stays in the kitchen and his alarm \"is an old clock I bought at a market\"." },
      { q: "Who describes their activity as better than caffeine?", answer: 2, explanation: "In C, the after-swim feeling is \"better than anything a coffee has ever done for me\"." },
      { q: "Who mentions an unexplained event in their home?", answer: 3, explanation: "In D, the lost shoe \"was eventually found in the refrigerator, a mystery nobody has solved\"." },
      { q: "Who says other people have noticed a change in their appearance?", answer: 1, explanation: "In B, colleagues ask Devon \"if I have been on holiday, because I look rested\"." }
    ]
  },
  {
    id: "p-rmatch3-03",
    title: "Four Volunteers Describe Their Work",
    sections: [
      {
        label: "A",
        text: "Hana: Every Wednesday evening, I help at the library's homework club for primary school children. Most of them just need a quiet table and someone to say \"read the question again, slowly\", which, I have learned, solves about half of all homework problems in the world. I started volunteering because it looks good on university applications, and I am not going to pretend otherwise. But something changed around the third week, when a small boy ran across the library to show me a spelling test with a star on it. I now understand why my mother has done volunteer work for twenty years. You arrive to give something, and you leave having received more."
      },
      {
        label: "B",
        text: "Robert: After I retired from forty years as an electrician, my wife said the house was not big enough for both me and my energy. So now I volunteer at the repair café in the community hall two mornings a week, fixing toasters, lamps and radios that people would otherwise throw away. Last month we saved sixty-three appliances from the rubbish tip. I also teach; there is always a teenager assigned to sit with me, officially to learn repair basics, and my current apprentice, Marta, has become faster with a soldering iron than I am. Do not tell her I said that. The café gave my skills somewhere to go, and it gave me somewhere to be."
      },
      {
        label: "C",
        text: "Alina: I spend Sunday afternoons at the riding stables that offer therapy sessions for children with disabilities. My job is to walk beside the pony, steady and boring, for safety, while magic happens above me. There is a girl who barely speaks at school, her mother told us, but who chats non-stop to her pony, Marmalade, and gives him a full report of her week. The horses seem to understand their job completely; Marmalade, who is famously impatient with adults, stands like a statue while small hands fasten his saddle. I get no certificate and no pay, and my boots are ruined. I would not swap my Sundays with anyone."
      },
      {
        label: "D",
        text: "Georgio: Our stretch of coast has no professional lifeguards, so a volunteer team watches the beach on summer weekends, and I joined as soon as I turned eighteen. The training was serious: months of first aid, swimming tests in cold water, and learning to read the sea, because the dangerous current by the rocks does not look dangerous at all. Most shifts are quiet, sun cream and lost children and one memorable escaped birthday balloon. But twice last summer we pulled tired swimmers out of the current, and one of them, a man my father's age, comes to the beach hut every summer since with a box of pastries. Quiet shifts are the goal. Full boxes of pastries are the reminder of why we train."
      }
    ],
    questions: [
      { q: "Who began volunteering for slightly selfish reasons?", answer: 0, explanation: "In A, Hana admits she started \"because it looks good on university applications, and I am not going to pretend otherwise\"." },
      { q: "Who needed months of preparation before being allowed to volunteer?", answer: 3, explanation: "In D, the training took months: first aid, cold-water swimming tests and learning to read the sea." },
      { q: "Who passes on their professional skills to a younger person?", answer: 1, explanation: "In B, retired electrician Robert always has a teenager assigned to him, and his apprentice Marta is learning repair skills." },
      { q: "Who volunteers in a role that supports a kind of therapy?", answer: 2, explanation: "In C, Alina helps at riding \"therapy sessions for children with disabilities\", walking beside the pony for safety." },
      { q: "Whose volunteering helps reduce waste?", answer: 1, explanation: "In B, the repair café fixed appliances people would throw away - \"we saved sixty-three appliances from the rubbish tip\" in one month." },
      { q: "Who describes a moment when their attitude changed?", answer: 0, explanation: "In A, \"something changed around the third week\" when the boy showed her his spelling test with a star." },
      { q: "Who receives a regular thank-you gift from someone they helped?", answer: 3, explanation: "In D, a rescued swimmer \"comes to the beach hut every summer since with a box of pastries\"." },
      { q: "Who mentions an animal behaving differently with children than with adults?", answer: 2, explanation: "In C, Marmalade is \"famously impatient with adults\" but \"stands like a statue\" for the children." },
      { q: "Who started volunteering partly because of a family member's comment?", answer: 1, explanation: "In B, Robert's wife said \"the house was not big enough for both me and my energy\", so he joined the repair café." },
      { q: "Who says most of their volunteering time involves no drama?", answer: 3, explanation: "In D, \"Most shifts are quiet\" - sun cream, lost children and a balloon - and \"Quiet shifts are the goal\"." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = window.READING.match.concat(BANK);
})();
