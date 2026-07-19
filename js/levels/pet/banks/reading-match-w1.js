/* PET Prep bank: Reading matching (B1) */
(function () {
var BANK = [
  {
    id: "p-rmatch1-01",
    title: "Four People Talk About Their Hobbies",
    sections: [
      {
        label: "A",
        text: "Elena: I started making bracelets from old buttons and beads during the school holidays two years ago, mostly because I was bored and my grandmother had boxes of sewing things she never used. Now I sell them at the craft market once a month, and last year I earned enough to buy myself a proper bicycle. My mum helps with the money side because numbers make my head hurt. The only annoying thing is that everyone now gives me their broken jewellery instead of throwing it away, so my bedroom looks like a very small, very messy factory."
      },
      {
        label: "B",
        text: "Marcus: Fishing with my grandad is the quietest part of my week, and that is exactly why I love it. We sit by the canal for hours, sometimes without speaking at all, and it never feels boring. People assume fishing is about catching fish, but we put back everything we catch, so it is really about the sitting and the waiting. My friends think it sounds like torture. I tried to explain that after a noisy week at school, silence feels like a present, but they just laughed, so now I simply say I like fish and leave it there."
      },
      {
        label: "C",
        text: "Yuki: I joined the climbing gym because my doctor said I needed exercise, and I chose climbing only because the gym is next to my bus stop. I never expected to become obsessed. Climbing is a puzzle you solve with your whole body, and every wall is a new problem. I have made friends of all ages there; my regular climbing partner is a fifty-year-old baker who brings us bread rolls after every session. My arms were sore for the entire first month, but now I am the one giving advice to nervous beginners on their first visit."
      },
      {
        label: "D",
        text: "Tom: I collect old maps of our town, which I know sounds like the most boring hobby on earth, but listen. On my oldest map, from 1898, our shopping centre is a farm, our street is an orchard, and there is a railway station where the swimming pool now stands. I find the maps at flea markets and in boxes in second-hand bookshops, and I never pay more than a few pounds. My dream find would be the missing map of 1920 that shows the old theatre before the fire. A museum offered to buy my collection last year, and I said no without even thinking."
      }
    ],
    questions: [
      { q: "Which person makes money from their hobby?", answer: 0, explanation: "In A, Elena sells her bracelets at the craft market monthly and earned enough last year to buy a bicycle." },
      { q: "Which person began their hobby for health reasons?", answer: 2, explanation: "In C, Yuki joined the climbing gym \"because my doctor said I needed exercise\"." },
      { q: "Which person values their hobby because it is peaceful?", answer: 1, explanation: "In B, Marcus loves fishing as \"the quietest part of my week\" and says silence feels like a present after a noisy week." },
      { q: "Which person refused to sell what their hobby has produced?", answer: 3, explanation: "In D, a museum offered to buy Tom's map collection \"and I said no without even thinking\"." },
      { q: "Which person gets help from a family member with part of their hobby?", answer: 0, explanation: "In A, Elena's mum \"helps with the money side because numbers make my head hurt\"." },
      { q: "Which person now teaches or advises people newer than themselves?", answer: 2, explanation: "In C, Yuki is \"the one giving advice to nervous beginners on their first visit\" at the climbing gym." },
      { q: "Which person's friends do not understand the attraction of their hobby?", answer: 1, explanation: "In B, Marcus's friends think fishing \"sounds like torture\" and laughed at his explanation." },
      { q: "Which person hopes to find one special item one day?", answer: 3, explanation: "In D, Tom's \"dream find would be the missing map of 1920 that shows the old theatre before the fire\"." },
      { q: "Which person complains about the effect of the hobby on their room?", answer: 0, explanation: "In A, Elena says her bedroom \"looks like a very small, very messy factory\" because people give her broken jewellery." },
      { q: "Which person shares food with a friend made through the hobby?", answer: 2, explanation: "In C, Yuki's climbing partner is a baker \"who brings us bread rolls after every session\"." }
    ]
  },
  {
    id: "p-rmatch1-02",
    title: "Five Teenagers and Their Weekend Jobs",
    sections: [
      {
        label: "A",
        text: "Sara: I walk dogs for four families on our street every Saturday and Sunday morning. It started with one nervous poodle, and now I sometimes have five dogs at once, which looks funnier than it feels when they all see the same cat. The pay is good and I love animals, but what I did not expect was how early dog owners want their dogs walked. My alarm rings at half past six at the weekend, earlier than on school days, and my friends refuse to believe that I chose this life voluntarily."
      },
      {
        label: "B",
        text: "Dev: I help my parents in our corner shop on Sundays, and I have done since I was tall enough to see over the counter. My parents pay me the same wage they would pay a stranger, which my dad says is important, because family should not mean free. I know most customers by name and what newspaper they buy. The part I hate is the magazine delivery at seven, when I have to count hundreds of copies with freezing fingers. The part I love is when Mrs Cole tells me every single week that I have grown."
      },
      {
        label: "C",
        text: "Amelia: I coach the under-nine football team at our local club on Saturday mornings. I get a small payment from the club, but honestly I would do it for nothing, and sometimes, when the payments are late, I basically do. The children are seven and eight, and they treat every match like a cup final, crying when they lose and building human pyramids when they win. Being in charge has changed me: my mum points out that a girl who cannot tidy her room somehow manages fifteen small footballers, their water bottles and their lost shin pads every single week."
      },
      {
        label: "D",
        text: "Leon: I wash cars in our neighbourhood, and I run it like a real business, with a price list, a loyalty card and a waterproof notebook for bookings. I studied videos about car cleaning for a whole winter before I started, because if you are going to do something, you should do it properly. Most customers are neighbours, but word has spread, and a man now drives from the next town every second Saturday. I am saving every cent for flying lessons, which surprises people, but I have wanted to be a pilot since I was six and I am not joking about it."
      },
      {
        label: "E",
        text: "Grace: I babysit for two families on Friday and Saturday evenings, mostly after the children are already in bed, which my friends call money for doing homework. They are not completely wrong, but they have never tried getting the twins back to sleep after a nightmare, or answering the seventeen questions a five-year-old can ask about dinosaurs in one bedtime story. I take it seriously: I did a first-aid course at the community centre before I accepted my first evening, and both mothers said that was the reason they chose me over older babysitters."
      }
    ],
    questions: [
      { q: "Who prepared for the job by studying before starting it?", answer: 3, explanation: "In D, Leon \"studied videos about car cleaning for a whole winter\" before starting his business." },
      { q: "Who has to get up earlier at weekends than on school days?", answer: 0, explanation: "In A, Sara's alarm rings at half past six at the weekend, \"earlier than on school days\"." },
      { q: "Who is saving their earnings for an unusual long-term goal?", answer: 3, explanation: "In D, Leon is \"saving every cent for flying lessons\" because he wants to be a pilot." },
      { q: "Who is paid by their own family?", answer: 1, explanation: "In B, Dev's parents \"pay me the same wage they would pay a stranger\" for working in the family shop." },
      { q: "Who took a safety qualification before beginning the job?", answer: 4, explanation: "In E, Grace \"did a first-aid course at the community centre before I accepted my first evening\"." },
      { q: "Who would continue the job even without payment?", answer: 2, explanation: "In C, Amelia says \"honestly I would do it for nothing, and sometimes, when the payments are late, I basically do\"." },
      { q: "Who has customers coming from outside the local area?", answer: 3, explanation: "In D, \"a man now drives from the next town every second Saturday\" to have his car washed by Leon." },
      { q: "Whose job has revealed a skill their family did not expect?", answer: 2, explanation: "In C, Amelia's mum points out that a girl who cannot tidy her room \"somehow manages fifteen small footballers\" every week." },
      { q: "Whose friends think the job is easier than it really is?", answer: 4, explanation: "In E, Grace's friends call babysitting \"money for doing homework\", but they have never handled the twins' nightmares or endless questions." },
      { q: "Who enjoys a weekly comment from a regular customer?", answer: 1, explanation: "In B, Dev loves it \"when Mrs Cole tells me every single week that I have grown\"." }
    ]
  },
  {
    id: "p-rmatch1-03",
    title: "Four Friends Describe Their Summer Holidays",
    sections: [
      {
        label: "A",
        text: "Nadia: We spent two weeks at my aunt's farm in the mountains, which I complained about for the whole car journey and then never wanted to leave. There is no internet signal in the valley, a fact my parents definitely knew in advance. Instead, I learned to milk goats, drove a tractor with my uncle sitting very nervously beside me, and read four books in a hammock. The best part was the evening meals outside with the whole family, which lasted for hours. I slept better there than I have ever slept at home, probably because of the mountain air, or possibly the tractor driving."
      },
      {
        label: "B",
        text: "Felix: My family does the same thing every August: ten days at the same small seaside town, in the same guesthouse, eating breakfast at the same corner table. My sister and I used to find this embarrassing; other families go to new countries, and we go to Room 14. But this summer I understood it differently. The guesthouse owner has known me since I was a baby, the man at the boat hire gives us the good kayak without asking, and the waiter knows my order before I sit down. Other people have holidays. We have a second home that we only visit once a year."
      },
      {
        label: "C",
        text: "Priti: This was the summer of the great camping disaster, and I say that with love. Our tent flooded on the second night, the campsite shop sold out of everything except mustard, and a goat, an actual goat, ate my paperback book while I was swimming. We ended up sleeping one night in the car, all four of us, with our feet on the windows. My dad kept apologising, but here is the strange thing: my brother and I have not laughed that much in years. We are already planning next summer, and Dad has bought a tent that, according to the box, can survive a storm at sea."
      },
      {
        label: "D",
        text: "Oscar: I stayed at home this summer while my friends went away, because my parents could not take time off work. I expected six boring weeks, but my grandad had other ideas. He gave me a project: we repaired his 1974 motorbike together, every morning, in his shed. I learned to name every part of an engine, to be patient with rusty screws, and to drink tea the way mechanics do, with the cup balanced on the toolbox. When the engine finally started, on the last Friday of the holidays, the sound was better than any beach. My friends came home with tans. I came home with oil under my fingernails and a grandad who calls me his colleague."
      }
    ],
    questions: [
      { q: "Who was unhappy about the holiday before it began?", answer: 0, explanation: "In A, Nadia \"complained about it for the whole car journey and then never wanted to leave\" the farm." },
      { q: "Who did not travel anywhere during the holidays?", answer: 3, explanation: "In D, Oscar \"stayed at home this summer\" because his parents could not take time off work." },
      { q: "Who describes a holiday where many things went wrong?", answer: 2, explanation: "In C, Priti's tent flooded, the shop sold out of everything, a goat ate her book and the family slept in the car - \"the great camping disaster\"." },
      { q: "Who changed their opinion about a repeated family tradition?", answer: 1, explanation: "In B, Felix used to find the same guesthouse embarrassing, but this summer he \"understood it differently\" - it is like a second home." },
      { q: "Who spent the holiday without being able to go online?", answer: 0, explanation: "In A, \"there is no internet signal in the valley\", a fact Nadia's parents knew in advance." },
      { q: "Who completed a mechanical project with a relative?", answer: 3, explanation: "In D, Oscar and his grandad \"repaired his 1974 motorbike together, every morning, in his shed\"." },
      { q: "Who mentions being recognised and well treated by local people?", answer: 1, explanation: "In B, the guesthouse owner has known Felix since babyhood, the boat man gives the family the good kayak, and the waiter knows his order." },
      { q: "Whose family is already planning to repeat the same kind of holiday?", answer: 2, explanation: "In C, Priti says \"We are already planning next summer\", and Dad has bought a storm-proof tent." },
      { q: "Who says they slept unusually well on holiday?", answer: 0, explanation: "In A, Nadia \"slept better there than I have ever slept at home\", crediting the mountain air." },
      { q: "Who feels their summer gave them something better than their friends' trips?", answer: 3, explanation: "In D, Oscar's friends came home with tans, but he came home \"with oil under my fingernails and a grandad who calls me his colleague\" - and the engine sound was \"better than any beach\"." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = window.READING.match.concat(BANK);
})();
