/* ============================================================
 * PET Prep — 原創題庫 (Use of English Parts 1-4 + Writing + Speaking)
 * All items are original, written in B1 Preliminary style at B1 level.
 * Dual export: browser global + Node module.
 * ============================================================ */

var QUESTIONS = {

  /* ---------- Part 1: Multiple-choice cloze ---------- */
  part1: [
    {
      text: "We decided to ____ the trip until the weather got better.",
      options: ["put off", "put on", "put up", "put out"],
      answer: 0,
      explanation: "'Put off' means to delay something until later. 'Put on' is for clothes, 'put up' means to build or offer accommodation, and 'put out' means to extinguish."
    },
    {
      text: "I'm really looking forward ____ my cousins this summer.",
      options: ["to seeing", "to see", "seeing", "for seeing"],
      answer: 0,
      explanation: "'Look forward to' is followed by a noun or the -ing form, because 'to' here is a preposition: 'looking forward to seeing'."
    },
    {
      text: "The restaurant was so ____ that we had to wait an hour for a table.",
      options: ["crowded", "filled", "complete", "closed"],
      answer: 0,
      explanation: "'Crowded' means full of people, which explains the long wait. 'Filled' needs 'with', 'complete' means finished, and 'closed' would mean no table at all."
    }
  ],

  /* ---------- Part 2: Open cloze ---------- */
  part2: [
    {
      text: "I have lived in this town ____ I was a child.",
      answers: ["since"],
      explanation: "The present perfect with a starting point in the past takes 'since': 'since I was a child'."
    },
    {
      text: "You don't have to come ____ you don't want to.",
      answers: ["if"],
      explanation: "'If' introduces the condition: coming is not necessary in the case that you don't want to."
    },
    {
      text: "This is the best pizza I have ____ eaten.",
      answers: ["ever"],
      explanation: "With superlatives and the present perfect we use 'ever': 'the best... I have ever eaten'."
    }
  ],

  /* ---------- Part 3: Word formation ---------- */
  part3: [
    {
      stem: "DECIDE",
      text: "Choosing a university is a big ____ for every student.",
      answers: ["decision"],
      explanation: "We need a noun after 'a big'. The noun form of 'decide' is 'decision'."
    },
    {
      stem: "COMFORT",
      text: "These new train seats are much more ____ than the old ones.",
      answers: ["comfortable"],
      explanation: "We need an adjective after 'more'. Add '-able' to 'comfort' to make 'comfortable'."
    },
    {
      stem: "FAME",
      text: "The town is ____ for its beautiful old castle.",
      answers: ["famous"],
      explanation: "We need an adjective before 'for'. The adjective form of 'fame' is 'famous'."
    }
  ],

  /* ---------- Part 4: Key word transformations ---------- */
  part4: [
    {
      original: "The museum is too far to walk to.",
      keyword: "enough",
      gapped: "The museum is not near ____ to walk to.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too far' can be rephrased as 'not near enough' — 'enough' follows the adjective it modifies."
    },
    {
      original: "Sam started playing the guitar two years ago.",
      keyword: "for",
      gapped: "Sam has played the guitar ____ two years.",
      answers: ["for"],
      model: "for",
      explanation: "'Started two years ago' becomes present perfect + 'for' + a period of time: 'has played for two years'."
    }
  ]
};

/* ---------- Writing prompts ---------- */
var WRITING = [
  {
    id: "w1",
    part: 1,
    type: "Email",
    title: "Email — A concert invitation",
    length: "about 100 words",
    task: "You received this email from your English friend Jo: 'I've got two tickets for a concert next Friday. Would you like to come? We could meet in town first and get something to eat. Let me know what music you like too!' Write your email to Jo, answering the questions. Write about 100 words.",
    checklist: [
      "Content: accept the invitation and answer every question",
      "Organisation: friendly opening and closing, clear paragraphs",
      "Language: invitations, suggestions and preferences",
      "Length: about 100 words"
    ],
    model: "Hi Jo, Thanks so much for inviting me — I'd love to come to the concert on Friday! It sounds really exciting. Meeting in town first is a great idea. How about the square outside the station at six o'clock? There's a nice burger place nearby where we could eat before the show. As for music, I mostly listen to pop and rock, but I enjoy almost everything live. Who is playing, by the way? I can't wait to find out. Thanks again for thinking of me — see you on Friday! Love, Alex"
  },
  {
    id: "w2",
    part: 2,
    type: "Story",
    title: "Story — The unexpected message",
    length: "about 100 words",
    task: "Write a story that begins with this sentence: 'When Dan turned on his phone, he saw a message that made him smile.' Write about 100 words.",
    checklist: [
      "Content: continue naturally from the opening sentence",
      "Organisation: clear beginning, middle and end",
      "Language: past tenses and time expressions",
      "Length: about 100 words"
    ],
    model: "When Dan turned on his phone, he saw a message that made him smile. It was from his best friend Marco, who had moved to Canada a year before. 'Look out of your window,' it said. Confused, Dan walked to the window and could not believe his eyes. Marco was standing in the street below, waving with both arms! Dan ran downstairs without even putting on his shoes. 'Surprise!' Marco laughed. 'We're back for the whole summer.' That evening they cycled to their favourite pizza place, talking non-stop. It was the best surprise Dan had ever had."
  }
];

/* ---------- Speaking long-turn prompts ---------- */
var SPEAKING = [
  {
    question: "Describe a place you like visiting in your free time.",
    bullets: ["where it is", "what you do there", "why you enjoy it"]
  },
  {
    question: "Talk about a person who has helped you a lot.",
    bullets: ["who the person is", "how they helped you", "how you felt about it"]
  }
];

/* ---------- Speaking sample phrases (B1 register) ---------- */
var SPEAKING_PHRASES = [
  "I'd like to talk about…",
  "One thing I really enjoy is…",
  "The reason I like it is that…",
  "For instance, last month I…",
  "It makes me feel…",
  "Another thing is that…",
  "I'm not sure, but I think…",
  "Compared to…, it is…",
  "What I mean is…",
  "All in all, I'd say…"
];

if (typeof module !== 'undefined') {
  module.exports = { QUESTIONS: QUESTIONS, WRITING: WRITING, SPEAKING: SPEAKING, SPEAKING_PHRASES: SPEAKING_PHRASES };
}
