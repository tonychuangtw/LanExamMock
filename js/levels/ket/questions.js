/* ============================================================
 * KET Prep — 原創題庫 (Use of English Parts 1-4 + Writing + Speaking)
 * All items are original, written in A2 Key style at A2 level.
 * Dual export: browser global + Node module.
 * ============================================================ */

var QUESTIONS = {

  /* ---------- Part 1: Multiple-choice cloze ---------- */
  part1: [
    {
      text: "I usually ____ breakfast at seven o'clock before school.",
      options: ["have", "make", "do", "take"],
      answer: 0,
      explanation: "'Have breakfast' is the standard collocation in English. We do not 'make', 'do' or 'take' breakfast when we mean eating it."
    },
    {
      text: "My sister is very good ____ swimming.",
      options: ["at", "in", "on", "for"],
      answer: 0,
      explanation: "The adjective 'good' takes the preposition 'at' when talking about skills: 'good at swimming'."
    },
    {
      text: "Can you ____ me your pen, please? I forgot mine.",
      options: ["lend", "borrow", "take", "keep"],
      answer: 0,
      explanation: "'Lend' means to give something to someone for a short time. 'Borrow' is the opposite — you borrow FROM someone, but they lend TO you."
    }
  ],

  /* ---------- Part 2: Open cloze ---------- */
  part2: [
    {
      text: "There ____ a big park near my house.",
      answers: ["is"],
      explanation: "'There is' introduces one singular thing — 'a big park'. With plural nouns we use 'there are'."
    },
    {
      text: "I go to school ____ bus every day.",
      answers: ["by"],
      explanation: "We use 'by' with means of transport: by bus, by car, by train."
    },
    {
      text: "What time ____ you get up on Sundays?",
      answers: ["do"],
      explanation: "Present simple questions with 'you' need the auxiliary 'do': 'What time do you get up?'"
    }
  ],

  /* ---------- Part 3: Word formation ---------- */
  part3: [
    {
      stem: "SING",
      text: "My favourite ____ is from Canada and her songs are great.",
      answers: ["singer"],
      explanation: "We need a person noun. Add '-er' to the verb 'sing' to make 'singer', the person who sings."
    },
    {
      stem: "SUN",
      text: "It was a ____ day, so we went to the beach.",
      answers: ["sunny"],
      explanation: "We need an adjective to describe 'day'. Add '-ny' to 'sun' to make 'sunny'."
    },
    {
      stem: "TEACH",
      text: "Our English ____ gives us homework every Friday.",
      answers: ["teacher"],
      explanation: "We need a person noun. Add '-er' to the verb 'teach' to make 'teacher'."
    }
  ],

  /* ---------- Part 4: Key word transformations ---------- */
  part4: [
    {
      original: "The film starts at eight o'clock.",
      keyword: "at",
      gapped: "The film begins ____ eight o'clock.",
      answers: ["at"],
      model: "at",
      explanation: "'Start' and 'begin' mean the same thing, and both take the preposition 'at' with clock times."
    },
    {
      original: "I like football more than tennis.",
      keyword: "than",
      gapped: "I think football is better ____ tennis.",
      answers: ["than"],
      model: "than",
      explanation: "Comparatives like 'better' are followed by 'than' when we compare two things."
    }
  ]
};

/* ---------- Writing prompts ---------- */
var WRITING = [
  {
    id: "w1",
    part: 1,
    type: "Email",
    title: "Email — Visiting a friend",
    length: "25+ words",
    task: "You are going to visit your friend Sam next Saturday. Write an email to Sam. Say: 1. what time you will arrive, 2. what you would like to do together, 3. what food you want to eat. Write 25 words or more.",
    checklist: [
      "Content: answer all three points",
      "Organisation: greeting and ending (Hi Sam / See you soon)",
      "Language: simple present and future forms are correct",
      "Length: 25 words or more"
    ],
    model: "Hi Sam! I will arrive at your house at ten o'clock on Saturday morning. Let's play video games and go to the park together. Can we eat pizza for lunch? It's my favourite! See you soon, Alex"
  },
  {
    id: "w2",
    part: 2,
    type: "Story",
    title: "Story — The lost dog",
    length: "about 35 words",
    task: "Look at this sentence: 'When Maria opened the door, a small dog ran into her house.' Write a story that begins with this sentence. Write about 35 words.",
    checklist: [
      "Content: continue the story from the first sentence",
      "Organisation: events in a clear order",
      "Language: simple past tense is correct",
      "Length: about 35 words"
    ],
    model: "When Maria opened the door, a small dog ran into her house. It was wet and hungry, so she gave it some food. Later, a boy knocked at the door. It was his dog! He said thank you and they became friends."
  }
];

/* ---------- Speaking long-turn prompts ---------- */
var SPEAKING = [
  {
    question: "Tell me about your favourite food.",
    bullets: ["what it is", "when you eat it", "why you like it"]
  },
  {
    question: "Talk about what you do at the weekend.",
    bullets: ["who you spend time with", "places you go", "your favourite activity"]
  }
];

/* ---------- Speaking sample phrases (A2 register) ---------- */
var SPEAKING_PHRASES = [
  "I like… because…",
  "My favourite … is…",
  "I usually… on Saturdays.",
  "I go to… with my friends.",
  "It is fun / nice / great.",
  "I think…",
  "For example, …",
  "Sometimes I…",
  "I don't like… very much.",
  "And you? What about you?"
];

if (typeof module !== 'undefined') {
  module.exports = { QUESTIONS: QUESTIONS, WRITING: WRITING, SPEAKING: SPEAKING, SPEAKING_PHRASES: SPEAKING_PHRASES };
}
