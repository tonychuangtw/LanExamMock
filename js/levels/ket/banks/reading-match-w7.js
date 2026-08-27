/* KET Prep bank: Reading multiple matching (A2) — wave 7 */
(function () {
var BANK = [
  {
    id: "ket-rmatch7-01",
    title: "Four People Talk About Their Bedrooms",
    sections: [
      { label: "A", text: "Nina: I share a room with my sister and we have done since I was four. There is a line of tape on the floor that we put there in 2019 and it is still there, although neither of us takes it seriously now. Her half is very tidy and mine is not. The good part is that we talk in the dark for about twenty minutes every night, which I know I will miss when she goes to university next year." },
      { label: "B", text: "Callum: My room is very small. There is a bed, a desk under the window and a cupboard, and there is no space for anything else at all. My friends think this is bad and I have decided that I like it, because I cannot keep things I do not use. Twice a year I take everything out, clean it, and put back only what I actually want, which takes about an hour." },
      { label: "C", text: "Priya: I moved into my brother's old room in September when he left home. It is much bigger than my old one and it does not feel like mine yet. I have painted one wall and put my things on the shelves and it still feels like his room, which my mother says will change and which has not changed in six months." },
      { label: "D", text: "Tomas: The best thing about my room is the window. I can see the hill behind our town and a big tree, and I have taken a photograph of that tree in every month for two years. The worst thing is the noise from the road, which I do not hear any more but which my cousin could not sleep through when he stayed." }
    ],
    questions: [
      { q: "Who shares a room?", answer: 0, explanation: "A: Nina shares with her sister." },
      { q: "Who has a very small room?", answer: 1, explanation: "B: Callum says there is no space for anything else." },
      { q: "Who moved into a different room recently?", answer: 2, explanation: "C: Priya moved into her brother's old room in September." },
      { q: "Who likes the view from the window?", answer: 3, explanation: "D: Tomas can see the hill and a big tree." },
      { q: "Who clears everything out twice a year?", answer: 1, explanation: "B: Callum takes everything out twice a year." },
      { q: "Who will miss something next year?", answer: 0, explanation: "A: Nina will miss the talking when her sister leaves." },
      { q: "Who says the room does not feel like theirs?", answer: 2, explanation: "C: Priya says it still feels like her brother's room." },
      { q: "Who takes a photograph every month?", answer: 3, explanation: "D: Tomas photographs the tree every month." },
      { q: "Who says a small room stops you keeping useless things?", answer: 1, explanation: "B: Callum cannot keep things he does not use." },
      { q: "Who mentions a visitor who could not sleep?", answer: 3, explanation: "D: Tomas's cousin could not sleep through the noise." }
    ]
  },
  {
    id: "ket-rmatch7-02",
    title: "Four Students Talk About Lunch at School",
    sections: [
      { label: "A", text: "Sam: I bring my lunch from home every day and I make it myself the night before, because in the morning there is no time. It is nearly always the same: two sandwiches, an apple and a drink. My friends say this is boring. It costs about a pound and the school lunch costs two pounds seventy, and over a year that is a great deal of money." },
      { label: "B", text: "Zoe: I have a school lunch every day and I like it. There is a choice of three hot things and a salad bar, and Tuesday is the best day. The queue is the problem: if you are at the end of it you can lose fifteen minutes of your lunchtime, so my friends and I take turns to leave the lesson first when the teacher lets us." },
      { label: "C", text: "Idris: I do not eat much at lunchtime because I eat a big breakfast at half past seven. I usually have a piece of fruit and then go outside. The teachers do not like this and one of them spoke to my mother about it, and my mother explained the breakfast, and now nobody says anything." },
      { label: "D", text: "Mei: I started bringing food from home in October because there was nothing at school that I could eat. I have a list of things I cannot have and the kitchen was very helpful, but there were only two choices for me every day and after a term I was tired of both of them. Now I bring rice and vegetables and I eat with everybody else." }
    ],
    questions: [
      { q: "Who prepares lunch the evening before?", answer: 0, explanation: "A: Sam makes it the night before." },
      { q: "Who eats a school lunch every day?", answer: 1, explanation: "B: Zoe has a school lunch every day." },
      { q: "Who eats very little at lunchtime?", answer: 2, explanation: "C: Idris has only a piece of fruit." },
      { q: "Who changed what they do in October?", answer: 3, explanation: "D: Mei started bringing food from home in October." },
      { q: "Who mentions how much money is saved?", answer: 0, explanation: "A: Sam compares one pound with two pounds seventy." },
      { q: "Who has a problem with the queue?", answer: 1, explanation: "B: Zoe can lose fifteen minutes." },
      { q: "Who had a teacher speak to a parent?", answer: 2, explanation: "C: A teacher spoke to Idris's mother." },
      { q: "Who could only choose from two dishes?", answer: 3, explanation: "D: Mei had only two choices every day." },
      { q: "Who eats the same food nearly every day?", answer: 0, explanation: "A: Sam has nearly always the same lunch." },
      { q: "Who says one particular day is the best?", answer: 1, explanation: "B: Zoe says Tuesday is the best day." }
    ]
  },
  {
    id: "ket-rmatch7-03",
    title: "Four People Talk About Their Bicycles",
    sections: [
      { label: "A", text: "Owen: Mine is second-hand and it cost forty pounds. It is heavy and slow and it has been repaired about six times, mostly by me with my uncle's tools. I use it to get to school, which takes twelve minutes, and to get to my job on Saturdays. I would like a better one and I am not going to buy one until this one cannot be repaired again." },
      { label: "B", text: "Farah: I did not ride a bicycle until I was fifteen because nobody in my family had one. A friend taught me in a car park on four Sunday mornings and I fell off twice. I now ride to the shops and to see my grandmother, but not on the main road, because I do not feel safe there and I do not think I am wrong about that." },
      { label: "C", text: "Jack: I ride about a hundred kilometres a week, which is much more than anybody else in my family. I go out on Saturday mornings with a group of six people, all of them older than me, and we do about forty kilometres and stop at a café. My parents thought it was a phase and it has been three years." },
      { label: "D", text: "Lena: My bicycle was stolen in March from outside the library, where I had locked it with a cheap lock. The police could do nothing. My aunt gave me her old one in April, which is too big for me and which I am growing into, and I now use a lock that cost more than the lock that was stolen with the bicycle." }
    ],
    questions: [
      { q: "Who bought a second-hand bicycle?", answer: 0, explanation: "A: Owen's cost forty pounds second-hand." },
      { q: "Who learned to ride quite late?", answer: 1, explanation: "B: Farah did not ride until she was fifteen." },
      { q: "Who rides the furthest each week?", answer: 2, explanation: "C: Jack rides about a hundred kilometres a week." },
      { q: "Who had a bicycle stolen?", answer: 3, explanation: "D: Lena's was stolen in March." },
      { q: "Who repairs the bicycle themselves?", answer: 0, explanation: "A: Owen repairs it with his uncle's tools." },
      { q: "Who avoids busy roads?", answer: 1, explanation: "B: Farah does not ride on the main road." },
      { q: "Who rides with a group?", answer: 2, explanation: "C: Jack goes out with six people on Saturdays." },
      { q: "Who is riding a bicycle that is too large?", answer: 3, explanation: "D: Lena's aunt's bicycle is too big for her." },
      { q: "Who uses the bicycle to get to work?", answer: 0, explanation: "A: Owen rides to his Saturday job." },
      { q: "Who says their family expected them to stop?", answer: 2, explanation: "C: Jack's parents thought it was a phase." }
    ]
  },
  {
    id: "ket-rmatch7-04",
    title: "Four People Talk About Their Grandparents",
    sections: [
      { label: "A", text: "Dara: My grandmother lives with us and has done since 2021. She is eighty-four and she cooks about three times a week, which she says she does because she wants to and which my mother says we should not let her do so often. She and I watch the same programme on Wednesdays and she falls asleep in the middle of it every single week." },
      { label: "B", text: "Marcus: Both of my grandparents live about four hundred kilometres away and I see them twice a year. We talk on a video call every Sunday, which is not the same and is much better than nothing. My grandfather has learned to use it properly in the last two years and now telephones me rather than waiting for me to call him." },
      { label: "C", text: "Ines: I never met my grandfather; he died before I was born. What I have is a box of his letters, about forty of them, and my mother has read all of them to me over about three years. He wrote to my grandmother every week for two years when he was working in another country." },
      { label: "D", text: "Tobias: My grandmother taught me to swim, to make bread and to play cards, all before I was ten. She lives twenty minutes away and I see her every Friday after school. She is seventy-nine and last year she started going to a Spanish class, and she now knows more Spanish than I do after four years at school." }
    ],
    questions: [
      { q: "Whose grandparent lives in the same house?", answer: 0, explanation: "A: Dara's grandmother has lived with them since 2021." },
      { q: "Who sees their grandparents only twice a year?", answer: 1, explanation: "B: Marcus sees them twice a year." },
      { q: "Who never met one of their grandparents?", answer: 2, explanation: "C: Ines's grandfather died before she was born." },
      { q: "Who was taught several skills by a grandparent?", answer: 3, explanation: "D: Tobias was taught swimming, bread-making and cards." },
      { q: "Who talks to a grandparent every week online?", answer: 1, explanation: "B: Marcus has a video call every Sunday." },
      { q: "Who has a grandparent who is learning a language?", answer: 3, explanation: "D: Tobias's grandmother goes to a Spanish class." },
      { q: "Who watches television with a grandparent?", answer: 0, explanation: "A: Dara and her grandmother watch the same programme on Wednesdays." },
      { q: "Who has old letters?", answer: 2, explanation: "C: Ines has a box of about forty letters." },
      { q: "Whose grandparent cooks for the family?", answer: 0, explanation: "A: Dara's grandmother cooks about three times a week." },
      { q: "Who says a grandparent has learned to use technology?", answer: 1, explanation: "B: Marcus's grandfather now telephones him." }
    ]
  },
  {
    id: "ket-rmatch7-05",
    title: "Four Friends Talk About Learning to Cook",
    sections: [
      { label: "A", text: "Kofi: I learned from my father and I can make about six things well. He does not use recipes at all and it took me a long time to understand that this is not because he is clever but because he has made the same six things about a thousand times each. I now cook on Wednesdays for the whole family, which is four people." },
      { label: "B", text: "Sara: I started last year because I moved into a flat with two other students and none of us could cook anything. We each learned one dish properly and then taught the other two, which took a month and which means that we now have three meals between us. It is not a lot and it is better than the first fortnight." },
      { label: "C", text: "Ravi: I cannot cook and I am not going to pretend that I am learning. My mother has offered to teach me four times. What I do instead is wash up every evening without being asked, which everybody in my family says is a fair arrangement and which I think is a very good deal for me." },
      { label: "D", text: "Ella: I watch videos and I follow them exactly. This works when I have the right ingredients and it does not work at all when something is missing, because I do not know what can be changed. Last week I had no lemon and stopped completely, and my grandmother, who was there, told me four things I could have used instead." }
    ],
    questions: [
      { q: "Who learned from a parent?", answer: 0, explanation: "A: Kofi learned from his father." },
      { q: "Who learned with other people in a flat?", answer: 1, explanation: "B: Sara learned with two other students." },
      { q: "Who does not cook at all?", answer: 2, explanation: "C: Ravi says he cannot cook." },
      { q: "Who follows videos exactly?", answer: 3, explanation: "D: Ella follows videos exactly." },
      { q: "Who cooks for the family once a week?", answer: 0, explanation: "A: Kofi cooks on Wednesdays." },
      { q: "Who taught somebody else a dish?", answer: 1, explanation: "B: Sara and her flatmates taught each other." },
      { q: "Who does a different job in the kitchen?", answer: 2, explanation: "C: Ravi washes up every evening." },
      { q: "Who cannot change a recipe?", answer: 3, explanation: "D: Ella does not know what can be changed." },
      { q: "Who says practice rather than talent explains it?", answer: 0, explanation: "A: Kofi's father has made the same six things a thousand times." },
      { q: "Who was helped by a grandparent?", answer: 3, explanation: "D: Ella's grandmother suggested four alternatives." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
