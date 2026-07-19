/* PET Prep bank: Reading matching (B1) — week 4 */
(function () {
var BANK = [
  {
    id: "p-rmatch4-01",
    title: "Five People Talk About Moving House",
    sections: [
      {
        label: "A",
        text: "Joanna: We moved from the city to a village of four hundred people when I was fifteen, and I cried for the whole first week. No cinema, one bus a day, and a silence at night so complete that I could not sleep. Then autumn came, and with it the village apple pressing, when everyone brings fruit to the square and shares the juice. Somebody handed me a crate and a job without asking my name, and by evening I knew more people than I had met in three years in our old apartment block. The city has everything except that. I still visit my old friends, but I no longer call the city home."
      },
      {
        label: "B",
        text: "Milo: Our family has moved five times in eleven years because of my mother's job, and I have developed a system. In every new school, I join two things in the first week: one sport and one club, no exceptions, even if the only options are volleyball and beekeeping. Friendships need a shared activity to grow in, and waiting to be invited wastes months. My sister does the opposite: she keeps her three old friends close online and takes years to add new ones. Neither system is wrong, my dad says, they are just different tools. But I notice she phones my friends' houses when she needs company in a hurry."
      },
      {
        label: "C",
        text: "Rosa: We did not move far, just eleven streets, from a flat above a busy road to a small house with a garden. Eleven streets, it turns out, is a different world. I can hear birds in the morning instead of buses, my brother finally has his own room, which has improved everybody's life, and my mother has planted so many vegetables that our neighbours have started closing their curtains when they see her coming with courgettes. The strange part is what I miss: the noise. I grew up with the road's sound like a sea, and for the first month, the quiet kept waking me up at night."
      },
      {
        label: "D",
        text: "Ahmed: Moving to another country at thirteen means moving twice: once with your suitcases and once inside your head, and the second move takes much longer. The language was my mountain; I knew grammar from school but nobody on a real playground speaks like an exercise book. What saved me was football at the park, where my feet spoke for me until my mouth caught up. Two years later, I dream in both languages, sometimes in the same dream. My parents still measure distances in kilometres to our old city. I measure them in friends, and by that measurement, I now live very close to home."
      },
      {
        label: "E",
        text: "Petra: My move was the smallest and the biggest of all: I moved out of my family home into a student room, forty minutes away by train. The room is tiny and the kitchen is shared with five strangers who have strong opinions about washing up. But it is mine: my alarm, my shopping list, my mistakes. I burned my first three attempts at rice and phoned my mother more in September than in the whole previous year. By December, the five strangers had become something like a noisy new family, and cooking for them on Sundays is now my favourite job. Growing up, I have decided, is homesickness slowly changing into recipes."
      }
    ],
    questions: [
      { q: "Who has a personal method for settling into new places?", answer: 1, explanation: "In B, Milo's system is to \"join two things in the first week: one sport and one club, no exceptions\"." },
      { q: "Who found that sport helped them communicate before language did?", answer: 3, explanation: "In D, Ahmed says football saved him: \"my feet spoke for me until my mouth caught up\"." },
      { q: "Who was welcomed by strangers during a community event?", answer: 0, explanation: "In A, at the village apple pressing \"somebody handed me a crate and a job without asking my name\"." },
      { q: "Who misses a sound from their old home?", answer: 2, explanation: "In C, Rosa strangely misses the traffic noise: \"the quiet kept waking me up at night\" for the first month." },
      { q: "Who moved because of a parent's work?", answer: 1, explanation: "In B, the family \"moved five times in eleven years because of my mother's job\"." },
      { q: "Who describes learning practical skills through failure?", answer: 4, explanation: "In E, Petra \"burned my first three attempts at rice\" while learning to look after herself." },
      { q: "Who moved only a very short distance?", answer: 2, explanation: "In C, the family moved \"just eleven streets\", yet it felt like \"a different world\"." },
      { q: "Who contrasts their own approach with a sibling's?", answer: 1, explanation: "In B, Milo joins activities immediately while his sister \"keeps her three old friends close online and takes years to add new ones\"." },
      { q: "Who says the emotional part of moving takes longer than the physical part?", answer: 3, explanation: "In D, moving abroad \"means moving twice: once with your suitcases and once inside your head, and the second move takes much longer\"." },
      { q: "Who now enjoys doing something for the people they live with?", answer: 4, explanation: "In E, the five strangers became \"a noisy new family, and cooking for them on Sundays is now my favourite job\"." }
    ]
  },
  {
    id: "p-rmatch4-02",
    title: "Four Teenagers on Saving Money",
    sections: [
      {
        label: "A",
        text: "Nils: I wanted a proper telescope, which costs more than three birthdays put together, so my dad and I made a deal: whatever I saved, he would add half as much again. I put money in a glass jar, not a bank, because my dad believes you should watch savings grow the way you watch plants. It took me fourteen months, including a summer of washing windows, and there were weeks when the jar seemed to be laughing at me. The night we finally set up the telescope, we saw the rings of Saturn from our balcony, and my dad went very quiet. Worth every window."
      },
      {
        label: "B",
        text: "Carmen: My problem was never earning money, it was keeping it; coins escaped from my pockets like water. What fixed me was an app my aunt recommended that shows spending as a picture, and my picture was ninety per cent bubble tea. I set myself one rule: for anything over ten euros, I must wait two days before buying, and if I still want it after two days, I can have it. It sounds too simple to work. In six months, the two-day rule has quietly cancelled about forty purchases, because most wanting, it turns out, evaporates overnight. My savings paid for a summer language camp, chosen after two days of thinking, obviously."
      },
      {
        label: "C",
        text: "Tariq: I keep three envelopes, an idea from my grandfather, who ran a shop his whole life: one envelope for spending, one for saving, and one for other people. Every coin I earn from my paper round gets divided the same way, most into saving, some into spending, and a tenth into the third envelope. The third envelope surprised my friends until they saw it work; this year it bought school supplies for two younger kids on our street and food for the animal shelter. My grandfather says money is a tool, and a tool is only as good as what you build with it. The third envelope is the best thing I build."
      },
      {
        label: "D",
        text: "Lily: I stopped buying new clothes completely one year ago, partly for money and partly for the planet. Everything I wear now comes from swap parties, charity shops or my mother's astonishing 1990s wardrobe, which my friends now regularly raid. I fix things too: a jacket's life can be doubled by one evening with a needle, a video tutorial and some patience. The money I do not spend on clothes goes into an account for a bicycle trip along the coast next summer. My style has honestly never been more praised, which makes me laugh, because it has never cost less. The most sustainable clothes, my mum says, are the ones that already exist."
      }
    ],
    questions: [
      { q: "Who receives extra money matching part of what they save?", answer: 0, explanation: "In A, the deal was \"whatever I saved, he would add half as much again\" from Dad." },
      { q: "Who uses a waiting period before larger purchases?", answer: 1, explanation: "In B, Carmen's rule is \"for anything over ten euros, I must wait two days before buying\"." },
      { q: "Who regularly gives away a fixed share of their income?", answer: 2, explanation: "In C, Tariq divides every coin and puts \"a tenth into the third envelope\" for other people." },
      { q: "Who saves money by repairing and reusing?", answer: 3, explanation: "In D, Lily buys nothing new, uses swaps and charity shops, and doubles a jacket's life \"with a needle, a video tutorial and some patience\"." },
      { q: "Who learned their saving method from a grandparent?", answer: 2, explanation: "In C, the three envelopes are \"an idea from my grandfather, who ran a shop his whole life\"." },
      { q: "Who used technology to understand their spending habits?", answer: 1, explanation: "In B, the app \"shows spending as a picture, and my picture was ninety per cent bubble tea\"." },
      { q: "Who is saving for a future journey?", answer: 3, explanation: "In D, Lily's unspent clothes money \"goes into an account for a bicycle trip along the coast next summer\"." },
      { q: "Who worked at an extra job to reach their goal?", answer: 0, explanation: "In A, Nils's saving included \"a summer of washing windows\" to afford the telescope." },
      { q: "Whose saving method also helps people and animals nearby?", answer: 2, explanation: "In C, the third envelope \"bought school supplies for two younger kids on our street and food for the animal shelter\"." },
      { q: "Who says their choices are motivated by the environment as well as money?", answer: 3, explanation: "In D, Lily stopped buying new clothes \"partly for money and partly for the planet\"." }
    ]
  },
  {
    id: "p-rmatch4-03",
    title: "Four People and the Sports They Love",
    sections: [
      {
        label: "A",
        text: "Klara: Table tennis found me by accident, when rain cancelled athletics and the only dry place in school was the room with the old green tables. I discovered I have fast hands, something that had never once been useful in the long jump. Our club trains twice a week, and my coach films my serves in slow motion, which is equal parts helpful and embarrassing. What I love most is that size does not matter: I am the shortest player in the league, and last season I beat a girl a whole head taller than me in the regional final. The trophy is small. The feeling was not."
      },
      {
        label: "B",
        text: "Anton: Rowing owns my mornings: on the water at six, before school, four days a week. People ask why anyone would choose this, and the honest answer is the moment when eight rowers finally move as one and the boat stops fighting you and starts flying. It took our crew a full year to find that moment, and we chase it every session since. The sport has rules about everything, sleep included, and my weekends start with a training plan instead of a lie-in. My friends outside the club think we are slightly mad. My friends inside the club are the closest I have ever had."
      },
      {
        label: "C",
        text: "June: I do orienteering, the sport where you run through a forest with a map and a compass, choosing your own route between control points. My family joke is that I inherited it: my parents actually met at a competition, arguing over a shortcut that turned out to be a swamp. What makes it different from plain running is that the fastest legs lose to the smartest route, and I have beaten runners far quicker than me by reading the hills better. Every forest is a new puzzle, no two races are ever the same, and my muddy shoes by the door drive my grandmother quietly mad."
      },
      {
        label: "D",
        text: "Bruno: Judo looked terrifying from the outside, which is exactly why my mum signed me up, after a year in which I was pushed around at school and came home smaller each day. Here is what nobody told me: judo is polite. You bow, you help your partner up, and the first thing you learn, before any throw, is how to fall without getting hurt, which it turns out is a skill for life in every possible sense. Two years later, nobody pushes me around, not because I fight, but because I stand differently now. My little sister starts in the beginners' class next month. She can already fall beautifully."
      }
    ],
    questions: [
      { q: "Who took up their sport because of a problem outside sport?", answer: 3, explanation: "In D, Bruno's mum signed him up after \"a year in which I was pushed around at school\"." },
      { q: "Who discovered their sport because of bad weather?", answer: 0, explanation: "In A, rain cancelled athletics, and the only dry place \"was the room with the old green tables\" - table tennis." },
      { q: "Whose parents met through the sport?", answer: 2, explanation: "In C, June's parents \"actually met at a competition, arguing over a shortcut that turned out to be a swamp\"." },
      { q: "Who trains very early in the day?", answer: 1, explanation: "In B, Anton is \"on the water at six, before school, four days a week\"." },
      { q: "Who says intelligence can beat physical speed in their sport?", answer: 2, explanation: "In C, \"the fastest legs lose to the smartest route\", and June has beaten quicker runners by reading the hills." },
      { q: "Who mentions that being small is not a disadvantage in their sport?", answer: 0, explanation: "In A, \"size does not matter\": Klara, the shortest in the league, beat a much taller opponent in the final." },
      { q: "Who values a safety skill their sport taught first of all?", answer: 3, explanation: "In D, before any throw, judo teaches \"how to fall without getting hurt, which it turns out is a skill for life\"." },
      { q: "Who describes a special team feeling that is hard to achieve?", answer: 1, explanation: "In B, the magic is \"when eight rowers finally move as one\" - it took the crew a full year to find it." },
      { q: "Whose training is recorded on video?", answer: 0, explanation: "In A, Klara's coach \"films my serves in slow motion, which is equal parts helpful and embarrassing\"." },
      { q: "Who is about to be followed into the sport by a family member?", answer: 3, explanation: "In D, Bruno's little sister \"starts in the beginners' class next month\" and can already fall beautifully." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = window.READING.match.concat(BANK);
})();
