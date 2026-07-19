/* KET Prep extra bank: part4 wave 3 */
(function () {
  var BANK = [
    {
      original: "Emma started teaching at this school four years ago.",
      keyword: "for",
      gapped: "Emma has taught at this school ____ four years.",
      answers: ["for"],
      model: "for",
      explanation: "'Started ... ago' becomes present perfect + 'for' + a length of time."
    },
    {
      original: "We got our dog three years ago and still have him.",
      keyword: "for",
      gapped: "We have had our dog ____ three years.",
      answers: ["for"],
      model: "for",
      explanation: "Use 'have had ... for' + a period to show it continues now."
    },
    {
      original: "Victor began working at the cafe a month ago.",
      keyword: "for",
      gapped: "Victor has worked at the cafe ____ a month.",
      answers: ["for"],
      model: "for",
      explanation: "'Began ... ago' changes to present perfect with 'for' + time period."
    },
    {
      original: "Marta started living in Paris ten years ago.",
      keyword: "for",
      gapped: "Marta has lived in Paris ____ ten years.",
      answers: ["for"],
      model: "for",
      explanation: "'For' + a length of time goes with the present perfect."
    },
    {
      original: "I bought these boots two winters ago and still wear them.",
      keyword: "for",
      gapped: "I have had these boots ____ two winters.",
      answers: ["for"],
      model: "for",
      explanation: "Present perfect + 'for' shows how long you have owned something."
    },
    {
      original: "Olga moved to London in 2019.",
      keyword: "since",
      gapped: "Olga has lived in London ____ 2019.",
      answers: ["since"],
      model: "since",
      explanation: "Use 'since' + a point in time (like a year) with the present perfect."
    },
    {
      original: "The cafe opened in March and is still open.",
      keyword: "since",
      gapped: "The cafe has been open ____ March.",
      answers: ["since"],
      model: "since",
      explanation: "'Since March' shows when the continuing situation started."
    },
    {
      original: "Bruno started playing football when he was five.",
      keyword: "since",
      gapped: "Bruno has played football ____ he was five.",
      answers: ["since"],
      model: "since",
      explanation: "'Since' + the starting moment goes with the present perfect."
    },
    {
      original: "I got my phone last summer and still use it.",
      keyword: "since",
      gapped: "I have had my phone ____ last summer.",
      answers: ["since"],
      model: "since",
      explanation: "'Since last summer' shows the point when you got it."
    },
    {
      original: "Diana started her diary in January.",
      keyword: "since",
      gapped: "Diana has written her diary ____ January.",
      answers: ["since"],
      model: "since",
      explanation: "'Started in January' becomes present perfect + 'since January'."
    },
    {
      original: "Hannah can paint very well.",
      keyword: "at",
      gapped: "Hannah is good ____ painting.",
      answers: ["at"],
      model: "at",
      explanation: "'Can do X well' means 'is good at + -ing form'."
    },
    {
      original: "My cousin can ride horses very well.",
      keyword: "good",
      gapped: "My cousin is ____ riding horses.",
      answers: ["good at"],
      model: "good at",
      explanation: "'Can ride well' becomes 'is good at riding'."
    },
    {
      original: "Simon can take photos very well.",
      keyword: "at",
      gapped: "Simon is good ____ taking photos.",
      answers: ["at"],
      model: "at",
      explanation: "After 'good' we always use 'at' + the -ing form."
    },
    {
      original: "Irene can play tennis very well.",
      keyword: "good",
      gapped: "Irene is ____ playing tennis.",
      answers: ["good at"],
      model: "good at",
      explanation: "'Can play well' means the same as 'is good at playing'."
    },
    {
      original: "Our teacher can tell stories very well.",
      keyword: "at",
      gapped: "Our teacher is good ____ telling stories.",
      answers: ["at"],
      model: "at",
      explanation: "Use 'good at + -ing' to describe someone's ability."
    },
    {
      original: "Clara is good at swimming.",
      keyword: "can",
      gapped: "Clara ____ swim very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Is good at swimming' equals 'can swim very well'."
    },
    {
      original: "Felix is good at cooking pasta.",
      keyword: "can",
      gapped: "Felix ____ cook pasta very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Good at + -ing' can be rewritten with 'can + verb + well'."
    },
    {
      original: "My mum is good at singing.",
      keyword: "can",
      gapped: "My mum ____ sing very well.",
      answers: ["can"],
      model: "can",
      explanation: "Use 'can' + base verb for the same ability as 'good at'."
    },
    {
      original: "Nick is good at drawing animals.",
      keyword: "can",
      gapped: "Nick ____ draw animals very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Is good at drawing' means 'can draw very well'."
    },
    {
      original: "Eva is good at dancing.",
      keyword: "can",
      gapped: "Eva ____ dance very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Good at dancing' equals 'can dance very well'."
    },
    {
      original: "Clean your room before the weekend.",
      keyword: "must",
      gapped: "You ____ clean your room before the weekend.",
      answers: ["must"],
      model: "must",
      explanation: "An imperative order can be rewritten with 'You must + verb'."
    },
    {
      original: "Take an umbrella because it will rain.",
      keyword: "must",
      gapped: "You ____ take an umbrella because it will rain.",
      answers: ["must"],
      model: "must",
      explanation: "'Must' expresses the same instruction as an imperative."
    },
    {
      original: "Feed the cat every morning.",
      keyword: "must",
      gapped: "You ____ feed the cat every morning.",
      answers: ["must"],
      model: "must",
      explanation: "Use 'You must' to give the same order as the imperative."
    },
    {
      original: "Do your homework before dinner tonight.",
      keyword: "must",
      gapped: "You ____ do your homework before dinner tonight.",
      answers: ["must"],
      model: "must",
      explanation: "'You must + verb' repeats an instruction as an obligation."
    },
    {
      original: "Be quiet during the test.",
      keyword: "must",
      gapped: "You ____ be quiet during the test.",
      answers: ["must"],
      model: "must",
      explanation: "'Be quiet' as an order equals 'You must be quiet'."
    },
    {
      original: "Don't use your phone during lessons.",
      keyword: "must",
      gapped: "You ____ use your phone during lessons.",
      answers: ["must not"],
      model: "must not",
      explanation: "A negative order ('Don't ...') becomes 'You must not ...'."
    },
    {
      original: "Don't swim after a big meal.",
      keyword: "must",
      gapped: "You ____ swim after a big meal.",
      answers: ["must not"],
      model: "must not",
      explanation: "'Don't + verb' can be rewritten as 'You must not + verb'."
    },
    {
      original: "Don't leave your bag on the bus.",
      keyword: "must",
      gapped: "You ____ leave your bag on the bus.",
      answers: ["must not"],
      model: "must not",
      explanation: "Use 'must not' for something you are told not to do."
    },
    {
      original: "Don't feed the animals at the zoo.",
      keyword: "must",
      gapped: "You ____ feed the animals at the zoo.",
      answers: ["must not"],
      model: "must not",
      explanation: "'Don't feed' means the same as 'You must not feed'."
    },
    {
      original: "Don't pick the flowers in the park.",
      keyword: "must",
      gapped: "You ____ pick the flowers in the park.",
      answers: ["must not"],
      model: "must not",
      explanation: "A rule against doing something uses 'must not'."
    },
    {
      original: "Maria reads a book every night.",
      keyword: "always",
      gapped: "Maria ____ a book at night.",
      answers: ["always reads"],
      model: "always reads",
      explanation: "'Every night' can become 'always' + present simple verb."
    },
    {
      original: "Peter plays football every Saturday.",
      keyword: "always",
      gapped: "Peter ____ football on Saturdays.",
      answers: ["always plays"],
      model: "always plays",
      explanation: "'Every Saturday' means the same as 'always ... on Saturdays'."
    },
    {
      original: "We eat fish every Friday.",
      keyword: "always",
      gapped: "We ____ fish on Fridays.",
      answers: ["always eat"],
      model: "always eat",
      explanation: "'Always' replaces 'every Friday' and goes before the verb."
    },
    {
      original: "Mum drinks juice at breakfast every day.",
      keyword: "always",
      gapped: "Mum ____ juice at breakfast.",
      answers: ["always drinks"],
      model: "always drinks",
      explanation: "'Every day' can be rewritten as 'always' before the main verb."
    },
    {
      original: "I take the bus every morning.",
      keyword: "always",
      gapped: "I ____ the bus in the morning.",
      answers: ["always take"],
      model: "always take",
      explanation: "'Always' + verb expresses the same habit as 'every morning'."
    },
    {
      original: "Sam doesn't ever watch horror films.",
      keyword: "never",
      gapped: "Sam ____ horror films.",
      answers: ["never watches"],
      model: "never watches",
      explanation: "'Doesn't ever' means 'never'; the verb becomes positive."
    },
    {
      original: "My dad doesn't ever cook dinner.",
      keyword: "never",
      gapped: "My dad ____ dinner.",
      answers: ["never cooks"],
      model: "never cooks",
      explanation: "'Never' replaces 'doesn't ever' and takes a positive verb."
    },
    {
      original: "We don't ever swim in winter.",
      keyword: "never",
      gapped: "We ____ in winter.",
      answers: ["never swim"],
      model: "never swim",
      explanation: "'Don't ever' equals 'never' with a positive verb form."
    },
    {
      original: "Rita doesn't ever forget her keys.",
      keyword: "never",
      gapped: "Rita ____ her keys.",
      answers: ["never forgets"],
      model: "never forgets",
      explanation: "'Never' means 'not ever' and goes before the main verb."
    },
    {
      original: "I don't ever play games on Sundays.",
      keyword: "never",
      gapped: "I ____ games on Sundays.",
      answers: ["never play"],
      model: "never play",
      explanation: "'Don't ever play' becomes 'never play' — no extra negative."
    },
    {
      original: "The vegetables at this market are cheap.",
      keyword: "expensive",
      gapped: "The vegetables at this market are not ____.",
      answers: ["expensive"],
      model: "expensive",
      explanation: "'Cheap' means the same as 'not expensive'."
    },
    {
      original: "Lunch at the school cafe is cheap.",
      keyword: "expensive",
      gapped: "Lunch at the school cafe is not ____.",
      answers: ["expensive"],
      model: "expensive",
      explanation: "Something cheap is not expensive — the opposite with 'not'."
    },
    {
      original: "These trainers were cheap.",
      keyword: "expensive",
      gapped: "These trainers were not ____.",
      answers: ["expensive"],
      model: "expensive",
      explanation: "'Cheap' can be rewritten as 'not expensive'."
    },
    {
      original: "The boat trip was cheap.",
      keyword: "expensive",
      gapped: "The boat trip was not ____.",
      answers: ["expensive"],
      model: "expensive",
      explanation: "Use 'not' + the opposite adjective: cheap = not expensive."
    },
    {
      original: "Books in that shop are cheap.",
      keyword: "expensive",
      gapped: "Books in that shop are not ____.",
      answers: ["expensive"],
      model: "expensive",
      explanation: "'Cheap' and 'not expensive' mean the same thing."
    },
    {
      original: "This restaurant is not expensive.",
      keyword: "cheap",
      gapped: "This restaurant is ____.",
      answers: ["cheap"],
      model: "cheap",
      explanation: "'Not expensive' means the same as 'cheap'."
    },
    {
      original: "The train tickets were not expensive.",
      keyword: "cheap",
      gapped: "The train tickets were ____.",
      answers: ["cheap"],
      model: "cheap",
      explanation: "'Not expensive' can be rewritten with one word: 'cheap'."
    },
    {
      original: "Our new sofa was not expensive.",
      keyword: "cheap",
      gapped: "Our new sofa was ____.",
      answers: ["cheap"],
      model: "cheap",
      explanation: "'Cheap' is the opposite of 'expensive'."
    },
    {
      original: "The cinema in our town is not expensive.",
      keyword: "cheap",
      gapped: "The cinema in our town is ____.",
      answers: ["cheap"],
      model: "cheap",
      explanation: "'Not expensive' equals 'cheap'."
    },
    {
      original: "Postcards at the museum are not expensive.",
      keyword: "cheap",
      gapped: "Postcards at the museum are ____.",
      answers: ["cheap"],
      model: "cheap",
      explanation: "Use 'cheap' to replace 'not expensive'."
    },
    {
      original: "I like summer more than winter.",
      keyword: "prefer",
      gapped: "I ____ summer to winter.",
      answers: ["prefer"],
      model: "prefer",
      explanation: "'Like A more than B' means 'prefer A to B'."
    },
    {
      original: "We like walking more than cycling.",
      keyword: "prefer",
      gapped: "We ____ walking to cycling.",
      answers: ["prefer"],
      model: "prefer",
      explanation: "Use 'prefer A to B' instead of 'like A more than B'."
    },
    {
      original: "Kate likes cats more than dogs.",
      keyword: "prefers",
      gapped: "Kate ____ cats to dogs.",
      answers: ["prefers"],
      model: "prefers",
      explanation: "With he/she, use 'prefers A to B'."
    },
    {
      original: "Marco likes pasta more than rice.",
      keyword: "prefers",
      gapped: "Marco ____ pasta to rice.",
      answers: ["prefers"],
      model: "prefers",
      explanation: "'Likes A more than B' equals 'prefers A to B'."
    },
    {
      original: "My grandparents like the radio more than TV.",
      keyword: "prefer",
      gapped: "My grandparents ____ the radio to TV.",
      answers: ["prefer"],
      model: "prefer",
      explanation: "'Prefer A to B' means to like A more than B."
    },
    {
      original: "I want a cheese sandwich, please.",
      keyword: "would",
      gapped: "I ____ like a cheese sandwich, please.",
      answers: ["would"],
      model: "would",
      explanation: "'Want X' can be said politely as 'would like X'."
    },
    {
      original: "Emma wants to travel by train.",
      keyword: "would",
      gapped: "Emma ____ like to travel by train.",
      answers: ["would"],
      model: "would",
      explanation: "'Wants to' becomes 'would like to'."
    },
    {
      original: "We want to sit near the window.",
      keyword: "would",
      gapped: "We ____ like to sit near the window.",
      answers: ["would"],
      model: "would",
      explanation: "'Would like to' is a polite way to say 'want to'."
    },
    {
      original: "My brother wants a new skateboard.",
      keyword: "like",
      gapped: "My brother would ____ a new skateboard.",
      answers: ["like"],
      model: "like",
      explanation: "'Wants X' can be rewritten as 'would like X'."
    },
    {
      original: "I want to try that new cafe.",
      keyword: "like",
      gapped: "I would ____ to try that new cafe.",
      answers: ["like"],
      model: "like",
      explanation: "'Want to' means the same as 'would like to'."
    },
    {
      original: "How much is the bus ticket?",
      keyword: "cost",
      gapped: "How much does the bus ticket ____?",
      answers: ["cost"],
      model: "cost",
      explanation: "'How much is X?' means 'How much does X cost?'."
    },
    {
      original: "How much are the cinema tickets?",
      keyword: "cost",
      gapped: "How much do the cinema tickets ____?",
      answers: ["cost"],
      model: "cost",
      explanation: "With plural nouns, use 'How much do ... cost?'."
    },
    {
      original: "How much is a sandwich here?",
      keyword: "cost",
      gapped: "How much does a sandwich ____ here?",
      answers: ["cost"],
      model: "cost",
      explanation: "Asking a price with 'is' can use 'does ... cost' instead."
    },
    {
      original: "How much are those jeans?",
      keyword: "cost",
      gapped: "How much do those jeans ____?",
      answers: ["cost"],
      model: "cost",
      explanation: "'Jeans' is plural, so we ask 'How much do they cost?'."
    },
    {
      original: "How much is the guitar in the window?",
      keyword: "cost",
      gapped: "How much does the guitar in the window ____?",
      answers: ["cost"],
      model: "cost",
      explanation: "'How much is X?' equals 'How much does X cost?'."
    },
    {
      original: "This is Karen's umbrella.",
      keyword: "belongs",
      gapped: "This umbrella ____ Karen.",
      answers: ["belongs to"],
      model: "belongs to",
      explanation: "'This is X's Y' means 'This Y belongs to X'."
    },
    {
      original: "That is our neighbour's dog.",
      keyword: "belongs",
      gapped: "That dog ____ our neighbour.",
      answers: ["belongs to"],
      model: "belongs to",
      explanation: "Use 'belongs to' + person to show who owns something."
    },
    {
      original: "This is my sister's camera.",
      keyword: "belongs",
      gapped: "This camera ____ my sister.",
      answers: ["belongs to"],
      model: "belongs to",
      explanation: "'Belongs to' shows possession, like an apostrophe s."
    },
    {
      original: "That is Mr Brown's garden.",
      keyword: "belongs",
      gapped: "That garden ____ Mr Brown.",
      answers: ["belongs to"],
      model: "belongs to",
      explanation: "'X's Y' can be rewritten as 'Y belongs to X'."
    },
    {
      original: "This is the teacher's desk.",
      keyword: "belongs",
      gapped: "This desk ____ the teacher.",
      answers: ["belongs to"],
      model: "belongs to",
      explanation: "'Belongs to' means it is that person's property."
    },
    {
      original: "Paula's husband is called Marco.",
      keyword: "married",
      gapped: "Paula is ____ Marco.",
      answers: ["married to"],
      model: "married to",
      explanation: "'X's husband is Y' means 'X is married to Y'."
    },
    {
      original: "My uncle's wife is a nurse.",
      keyword: "married",
      gapped: "My uncle is ____ a nurse.",
      answers: ["married to"],
      model: "married to",
      explanation: "'His wife is a nurse' can become 'He is married to a nurse'."
    },
    {
      original: "Mrs Green's husband is our doctor.",
      keyword: "married",
      gapped: "Our doctor is ____ Mrs Green.",
      answers: ["married to"],
      model: "married to",
      explanation: "'X's husband is Y' means 'Y is married to X'."
    },
    {
      original: "Elena's husband comes from Spain.",
      keyword: "married",
      gapped: "Elena is ____ a man from Spain.",
      answers: ["married to"],
      model: "married to",
      explanation: "Use 'married to' + a person, never 'married with'."
    },
    {
      original: "Victor's wife is called Rosa.",
      keyword: "married",
      gapped: "Victor is ____ Rosa.",
      answers: ["married to"],
      model: "married to",
      explanation: "'X's wife is Y' means 'X is married to Y'."
    },
    {
      original: "Leo likes space very much.",
      keyword: "interested",
      gapped: "Leo is very ____ space.",
      answers: ["interested in"],
      model: "interested in",
      explanation: "'Likes X very much' can become 'is very interested in X'."
    },
    {
      original: "My mum likes gardening very much.",
      keyword: "interested",
      gapped: "My mum is very ____ gardening.",
      answers: ["interested in"],
      model: "interested in",
      explanation: "Use 'interested in' + noun or -ing form."
    },
    {
      original: "Hannah likes old films very much.",
      keyword: "interested",
      gapped: "Hannah is very ____ old films.",
      answers: ["interested in"],
      model: "interested in",
      explanation: "'Interested in' always takes the preposition 'in'."
    },
    {
      original: "We like sport very much.",
      keyword: "interested",
      gapped: "We are very ____ sport.",
      answers: ["interested in"],
      model: "interested in",
      explanation: "'Like X very much' means 'be very interested in X'."
    },
    {
      original: "Chris likes trains very much.",
      keyword: "interested",
      gapped: "Chris is very ____ trains.",
      answers: ["interested in"],
      model: "interested in",
      explanation: "'Is interested in X' describes something a person likes a lot."
    },
    {
      original: "The train journey to the coast lasts an hour.",
      keyword: "takes",
      gapped: "It ____ an hour to get to the coast by train.",
      answers: ["takes"],
      model: "takes",
      explanation: "'The journey lasts X' becomes 'It takes X to get there'."
    },
    {
      original: "Making this cake lasts forty minutes.",
      keyword: "takes",
      gapped: "It ____ forty minutes to make this cake.",
      answers: ["takes"],
      model: "takes",
      explanation: "Use 'It takes + time + to do' for how long something lasts."
    },
    {
      original: "The walk to the station lasts ten minutes.",
      keyword: "takes",
      gapped: "It ____ ten minutes to walk to the station.",
      answers: ["takes"],
      model: "takes",
      explanation: "'It takes + time' describes the length of a walk or journey."
    },
    {
      original: "Cleaning my room lasts half an hour.",
      keyword: "takes",
      gapped: "It ____ half an hour to clean my room.",
      answers: ["takes"],
      model: "takes",
      explanation: "'It takes X to do Y' shows how long the activity is."
    },
    {
      original: "The drive to the airport lasts fifty minutes.",
      keyword: "takes",
      gapped: "It ____ fifty minutes to drive to the airport.",
      answers: ["takes"],
      model: "takes",
      explanation: "'The drive lasts X' can become 'It takes X to drive'."
    },
    {
      original: "Our plan is to watch the match tonight.",
      keyword: "going",
      gapped: "We are ____ to watch the match tonight.",
      answers: ["going"],
      model: "going",
      explanation: "A plan for the future uses 'be going to + verb'."
    },
    {
      original: "Kate's plan is to make a cake tomorrow.",
      keyword: "going",
      gapped: "Kate is ____ to make a cake tomorrow.",
      answers: ["going"],
      model: "going",
      explanation: "'Her plan is to do X' means 'She is going to do X'."
    },
    {
      original: "My plan is to tidy the garden on Saturday.",
      keyword: "going",
      gapped: "I am ____ to tidy the garden on Saturday.",
      answers: ["going"],
      model: "going",
      explanation: "Use 'be going to' for plans and intentions."
    },
    {
      original: "Their plan is to sell their old car.",
      keyword: "going",
      gapped: "They are ____ to sell their old car.",
      answers: ["going"],
      model: "going",
      explanation: "'Their plan is to X' can become 'They are going to X'."
    },
    {
      original: "Adam's plan is to join the tennis club.",
      keyword: "going",
      gapped: "Adam is ____ to join the tennis club.",
      answers: ["going"],
      model: "going",
      explanation: "'Be going to + verb' talks about a future plan."
    },
    {
      original: "The museum had many visitors yesterday.",
      keyword: "were",
      gapped: "There ____ many visitors at the museum yesterday.",
      answers: ["were"],
      model: "were",
      explanation: "With plural nouns in the past, use 'There were'."
    },
    {
      original: "The film had a lot of funny moments.",
      keyword: "were",
      gapped: "There ____ a lot of funny moments in the film.",
      answers: ["were"],
      model: "were",
      explanation: "'Moments' is plural, so we say 'There were'."
    },
    {
      original: "The wedding had wonderful food.",
      keyword: "was",
      gapped: "There ____ wonderful food at the wedding.",
      answers: ["was"],
      model: "was",
      explanation: "'Food' is uncountable, so we use 'There was'."
    },
    {
      original: "The street had a lot of snow this morning.",
      keyword: "was",
      gapped: "There ____ a lot of snow in the street this morning.",
      answers: ["was"],
      model: "was",
      explanation: "'Snow' is uncountable, so we say 'There was'."
    },
    {
      original: "The meeting had only three people.",
      keyword: "were",
      gapped: "There ____ only three people at the meeting.",
      answers: ["were"],
      model: "were",
      explanation: "Use 'There were' + plural noun to describe the past."
    },
    {
      original: "Can I borrow your camera for the trip?",
      keyword: "lend",
      gapped: "Can you ____ me your camera for the trip?",
      answers: ["lend"],
      model: "lend",
      explanation: "You borrow something from someone; they lend it to you."
    },
    {
      original: "Can I borrow your ruler?",
      keyword: "lend",
      gapped: "Can you ____ me your ruler?",
      answers: ["lend"],
      model: "lend",
      explanation: "'Can I borrow X?' means 'Can you lend me X?'."
    },
    {
      original: "Can you lend me your phone charger?",
      keyword: "borrow",
      gapped: "Can I ____ your phone charger?",
      answers: ["borrow"],
      model: "borrow",
      explanation: "'Can you lend me X?' equals 'Can I borrow X?'."
    },
    {
      original: "Can you lend me a pencil?",
      keyword: "borrow",
      gapped: "Can I ____ a pencil?",
      answers: ["borrow"],
      model: "borrow",
      explanation: "'Borrow' means to take something you will give back."
    },
    {
      original: "Can I borrow your football this afternoon?",
      keyword: "lend",
      gapped: "Can you ____ me your football this afternoon?",
      answers: ["lend"],
      model: "lend",
      explanation: "'Lend' is what the owner does; 'borrow' is what the taker does."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
