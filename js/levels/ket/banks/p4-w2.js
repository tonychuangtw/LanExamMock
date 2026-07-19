/* KET Prep extra bank: part4 wave 2 */
(function () {
  var BANK = [
    {
      original: "Laura's husband is called Pete.",
      keyword: "married",
      gapped: "Laura is ____ Pete.",
      answers: ["married to"],
      model: "married to",
      explanation: "'X's husband is Y' means 'X is married to Y'."
    },
    {
      original: "David's wife is called Elena.",
      keyword: "married",
      gapped: "David is ____ Elena.",
      answers: ["married to"],
      model: "married to",
      explanation: "Use 'married to' + a person, never 'married with'."
    },
    {
      original: "My aunt's husband is a doctor.",
      keyword: "married",
      gapped: "My aunt is ____ a doctor.",
      answers: ["married to"],
      model: "married to",
      explanation: "'Her husband is a doctor' can become 'She is married to a doctor'."
    },
    {
      original: "Mr Lee's wife is our teacher.",
      keyword: "married",
      gapped: "Our teacher is ____ Mr Lee.",
      answers: ["married to"],
      model: "married to",
      explanation: "'X's wife is Y' means 'Y is married to X'."
    },
    {
      original: "Karen's husband is from Brazil.",
      keyword: "married",
      gapped: "Karen is ____ a man from Brazil.",
      answers: ["married to"],
      model: "married to",
      explanation: "We say 'married to someone' to describe a husband or wife."
    },
    {
      original: "Sam likes history very much.",
      keyword: "interested",
      gapped: "Sam is very ____ history.",
      answers: ["interested in"],
      model: "interested in",
      explanation: "'Likes X very much' can become 'is very interested in X'."
    },
    {
      original: "My brother likes old cars very much.",
      keyword: "interested",
      gapped: "My brother is very ____ old cars.",
      answers: ["interested in"],
      model: "interested in",
      explanation: "Use 'interested in' + noun to show what someone likes."
    },
    {
      original: "Rita likes science very much.",
      keyword: "interested",
      gapped: "Rita is very ____ science.",
      answers: ["interested in"],
      model: "interested in",
      explanation: "'Interested in' always takes the preposition 'in'."
    },
    {
      original: "We like music very much.",
      keyword: "interested",
      gapped: "We are very ____ music.",
      answers: ["interested in"],
      model: "interested in",
      explanation: "'Like X very much' means the same as 'be very interested in X'."
    },
    {
      original: "Oscar likes photography very much.",
      keyword: "interested",
      gapped: "Oscar is very ____ photography.",
      answers: ["interested in"],
      model: "interested in",
      explanation: "'Is interested in X' describes something a person likes a lot."
    },
    {
      original: "The journey to the city lasts one hour.",
      keyword: "takes",
      gapped: "It ____ one hour to get to the city.",
      answers: ["takes"],
      model: "takes",
      explanation: "'The journey lasts X' becomes 'It takes X to get there'."
    },
    {
      original: "The walk to the beach lasts twenty minutes.",
      keyword: "takes",
      gapped: "It ____ twenty minutes to walk to the beach.",
      answers: ["takes"],
      model: "takes",
      explanation: "Use 'It takes + time + to do' to say how long something lasts."
    },
    {
      original: "Cooking this soup lasts half an hour.",
      keyword: "takes",
      gapped: "It ____ half an hour to cook this soup.",
      answers: ["takes"],
      model: "takes",
      explanation: "'It takes + time + to do' describes the length of an activity."
    },
    {
      original: "The flight to Rome lasts two hours.",
      keyword: "takes",
      gapped: "It ____ two hours to fly to Rome.",
      answers: ["takes"],
      model: "takes",
      explanation: "'The flight lasts X' can be rewritten as 'It takes X to fly'."
    },
    {
      original: "The bus ride to school lasts fifteen minutes.",
      keyword: "takes",
      gapped: "It ____ fifteen minutes to get to school by bus.",
      answers: ["takes"],
      model: "takes",
      explanation: "'It takes' + time expresses how long a journey is."
    },
    {
      original: "Our plan is to visit Spain in June.",
      keyword: "going",
      gapped: "We are ____ to visit Spain in June.",
      answers: ["going"],
      model: "going",
      explanation: "A plan for the future is expressed with 'be going to + verb'."
    },
    {
      original: "Hugo's plan is to study art next year.",
      keyword: "going",
      gapped: "Hugo is ____ to study art next year.",
      answers: ["going"],
      model: "going",
      explanation: "'His plan is to do X' means 'He is going to do X'."
    },
    {
      original: "My plan is to cook dinner tonight.",
      keyword: "going",
      gapped: "I am ____ to cook dinner tonight.",
      answers: ["going"],
      model: "going",
      explanation: "Use 'be going to' for plans and intentions."
    },
    {
      original: "Their plan is to buy a new sofa.",
      keyword: "going",
      gapped: "They are ____ to buy a new sofa.",
      answers: ["going"],
      model: "going",
      explanation: "'Their plan is to X' can become 'They are going to X'."
    },
    {
      original: "Paula's plan is to run in the race on Sunday.",
      keyword: "going",
      gapped: "Paula is ____ to run in the race on Sunday.",
      answers: ["going"],
      model: "going",
      explanation: "'Be going to + verb' talks about a future plan."
    },
    {
      original: "The party had lots of music.",
      keyword: "was",
      gapped: "There ____ lots of music at the party.",
      answers: ["was"],
      model: "was",
      explanation: "'The party had X' becomes 'There was X at the party' (uncountable)."
    },
    {
      original: "The concert had a big crowd.",
      keyword: "was",
      gapped: "There ____ a big crowd at the concert.",
      answers: ["was"],
      model: "was",
      explanation: "Use 'There was' + singular noun for the past."
    },
    {
      original: "The lake had many boats on it yesterday.",
      keyword: "were",
      gapped: "There ____ many boats on the lake yesterday.",
      answers: ["were"],
      model: "were",
      explanation: "With plural nouns in the past, use 'There were'."
    },
    {
      original: "The match had thousands of fans.",
      keyword: "were",
      gapped: "There ____ thousands of fans at the match.",
      answers: ["were"],
      model: "were",
      explanation: "'Thousands of fans' is plural, so we say 'There were'."
    },
    {
      original: "The garden had beautiful flowers last spring.",
      keyword: "were",
      gapped: "There ____ beautiful flowers in the garden last spring.",
      answers: ["were"],
      model: "were",
      explanation: "Use 'There were' + plural noun to describe the past."
    },
    {
      original: "Can I borrow your pen?",
      keyword: "lend",
      gapped: "Can you ____ me your pen?",
      answers: ["lend"],
      model: "lend",
      explanation: "You borrow something from someone; they lend it to you."
    },
    {
      original: "Can I borrow your bike this afternoon?",
      keyword: "lend",
      gapped: "Can you ____ me your bike this afternoon?",
      answers: ["lend"],
      model: "lend",
      explanation: "'Can I borrow X?' means the same as 'Can you lend me X?'."
    },
    {
      original: "Can I borrow your dictionary?",
      keyword: "lend",
      gapped: "Can you ____ me your dictionary?",
      answers: ["lend"],
      model: "lend",
      explanation: "'Lend' is what the owner does; 'borrow' is what the taker does."
    },
    {
      original: "Can you lend me your umbrella?",
      keyword: "borrow",
      gapped: "Can I ____ your umbrella?",
      answers: ["borrow"],
      model: "borrow",
      explanation: "'Can you lend me X?' equals 'Can I borrow X?'."
    },
    {
      original: "Can you lend me some money for lunch?",
      keyword: "borrow",
      gapped: "Can I ____ some money for lunch?",
      answers: ["borrow"],
      model: "borrow",
      explanation: "'Borrow' means to take something that you will give back."
    },
    {
      original: "No student in the class is taller than Marco.",
      keyword: "tallest",
      gapped: "Marco is the ____ student in the class.",
      answers: ["tallest"],
      model: "tallest",
      explanation: "'No one is taller than X' means 'X is the tallest'."
    },
    {
      original: "No day this week was hotter than Tuesday.",
      keyword: "hottest",
      gapped: "Tuesday was the ____ day this week.",
      answers: ["hottest"],
      model: "hottest",
      explanation: "'No day was hotter' means it was the hottest day — a superlative."
    },
    {
      original: "No shop in town is cheaper than this one.",
      keyword: "cheapest",
      gapped: "This is the ____ shop in town.",
      answers: ["cheapest"],
      model: "cheapest",
      explanation: "'No shop is cheaper' means this shop is the cheapest."
    },
    {
      original: "No room in the house is bigger than the kitchen.",
      keyword: "biggest",
      gapped: "The kitchen is the ____ room in the house.",
      answers: ["biggest"],
      model: "biggest",
      explanation: "Use the superlative 'the biggest' when nothing else is bigger."
    },
    {
      original: "No boy in the team runs faster than Ryan.",
      keyword: "fastest",
      gapped: "Ryan is the ____ runner in the team.",
      answers: ["fastest"],
      model: "fastest",
      explanation: "'No one runs faster than X' means 'X is the fastest runner'."
    },
    {
      original: "Let's go to the beach today.",
      keyword: "shall",
      gapped: "____ we go to the beach today?",
      answers: ["Shall"],
      model: "Shall",
      explanation: "'Let's do X' can become the suggestion 'Shall we do X?'."
    },
    {
      original: "Let's play tennis after school.",
      keyword: "shall",
      gapped: "____ we play tennis after school?",
      answers: ["Shall"],
      model: "Shall",
      explanation: "'Shall we ...?' is a question form for making a suggestion."
    },
    {
      original: "Let's watch a film tonight.",
      keyword: "shall",
      gapped: "____ we watch a film tonight?",
      answers: ["Shall"],
      model: "Shall",
      explanation: "Use 'Shall we + verb?' to suggest doing something together."
    },
    {
      original: "Let's have pizza for dinner.",
      keyword: "shall",
      gapped: "____ we have pizza for dinner?",
      answers: ["Shall"],
      model: "Shall",
      explanation: "'Let's have X' means the same as 'Shall we have X?'."
    },
    {
      original: "Let's visit Grandma at the weekend.",
      keyword: "shall",
      gapped: "____ we visit Grandma at the weekend?",
      answers: ["Shall"],
      model: "Shall",
      explanation: "'Shall we ...?' turns 'Let's ...' into a question."
    },
    {
      original: "Let's listen to some music.",
      keyword: "about",
      gapped: "How ____ listening to some music?",
      answers: ["about"],
      model: "about",
      explanation: "'Let's do X' can become 'How about + -ing form?'."
    },
    {
      original: "Let's take the early train.",
      keyword: "about",
      gapped: "How ____ taking the early train?",
      answers: ["about"],
      model: "about",
      explanation: "'How about + -ing?' is another way to make a suggestion."
    },
    {
      original: "Let's make a cake for Dad.",
      keyword: "about",
      gapped: "How ____ making a cake for Dad?",
      answers: ["about"],
      model: "about",
      explanation: "After 'How about' the verb takes the -ing form."
    },
    {
      original: "Let's meet at the cafe at six.",
      keyword: "about",
      gapped: "How ____ meeting at the cafe at six?",
      answers: ["about"],
      model: "about",
      explanation: "'How about meeting ...?' suggests the same plan as 'Let's meet'."
    },
    {
      original: "Let's invite Julia to the party.",
      keyword: "about",
      gapped: "How ____ inviting Julia to the party?",
      answers: ["about"],
      model: "about",
      explanation: "Use 'How about + -ing' to suggest an idea."
    },
    {
      original: "We arrived at the hotel at noon.",
      keyword: "got",
      gapped: "We ____ to the hotel at noon.",
      answers: ["got"],
      model: "got",
      explanation: "'Arrived at' means the same as 'got to'."
    },
    {
      original: "The train arrived in London at six.",
      keyword: "got",
      gapped: "The train ____ to London at six.",
      answers: ["got"],
      model: "got",
      explanation: "'Arrive in/at' can be rewritten as 'get to'."
    },
    {
      original: "Sara arrived home late last night.",
      keyword: "got",
      gapped: "Sara ____ home late last night.",
      answers: ["got"],
      model: "got",
      explanation: "'Arrived home' means 'got home' — no 'to' before 'home'."
    },
    {
      original: "They arrived at the airport early.",
      keyword: "got",
      gapped: "They ____ to the airport early.",
      answers: ["got"],
      model: "got",
      explanation: "'Got to' + place is an informal way to say 'arrived at'."
    },
    {
      original: "I arrived at school before the teacher.",
      keyword: "got",
      gapped: "I ____ to school before the teacher.",
      answers: ["got"],
      model: "got",
      explanation: "'Get to school' means the same as 'arrive at school'."
    },
    {
      original: "The shop closes at six o'clock.",
      keyword: "until",
      gapped: "The shop stays open ____ six o'clock.",
      answers: ["until"],
      model: "until",
      explanation: "'Closes at X' means it stays open until X."
    },
    {
      original: "The pool closes at eight in the evening.",
      keyword: "until",
      gapped: "The pool stays open ____ eight in the evening.",
      answers: ["until"],
      model: "until",
      explanation: "'Until' + a time shows when something stops."
    },
    {
      original: "The museum closes at five.",
      keyword: "until",
      gapped: "The museum stays open ____ five.",
      answers: ["until"],
      model: "until",
      explanation: "'Open until five' means it closes at five."
    },
    {
      original: "The cafe closes at ten at night.",
      keyword: "until",
      gapped: "The cafe stays open ____ ten at night.",
      answers: ["until"],
      model: "until",
      explanation: "Use 'until' + closing time to say how long a place is open."
    },
    {
      original: "The library closes at seven on Fridays.",
      keyword: "until",
      gapped: "The library stays open ____ seven on Fridays.",
      answers: ["until"],
      model: "until",
      explanation: "'Stays open until X' means the same as 'closes at X'."
    },
    {
      original: "I do my homework and then I watch TV.",
      keyword: "after",
      gapped: "I watch TV ____ I do my homework.",
      answers: ["after"],
      model: "after",
      explanation: "'A and then B' means 'B happens after A'."
    },
    {
      original: "Ben has breakfast and then he brushes his teeth.",
      keyword: "after",
      gapped: "Ben brushes his teeth ____ breakfast.",
      answers: ["after"],
      model: "after",
      explanation: "Use 'after' to show which action comes second."
    },
    {
      original: "We had dinner and then we played cards.",
      keyword: "after",
      gapped: "We played cards ____ dinner.",
      answers: ["after"],
      model: "after",
      explanation: "'And then' can be replaced with 'after' + the first event."
    },
    {
      original: "Lucy finished her book and then she went to bed.",
      keyword: "after",
      gapped: "Lucy went to bed ____ finishing her book.",
      answers: ["after"],
      model: "after",
      explanation: "'After + -ing' shows which action happened first."
    },
    {
      original: "First wash the fruit, and then eat it.",
      keyword: "before",
      gapped: "Wash the fruit ____ you eat it.",
      answers: ["before"],
      model: "before",
      explanation: "'First A, then B' means 'Do A before B'."
    },
    {
      original: "Brush your teeth and then go to bed.",
      keyword: "before",
      gapped: "Brush your teeth ____ you go to bed.",
      answers: ["before"],
      model: "before",
      explanation: "'Before' introduces the action that comes later."
    },
    {
      original: "Do your homework and then play games.",
      keyword: "before",
      gapped: "Do your homework ____ you play games.",
      answers: ["before"],
      model: "before",
      explanation: "'A and then B' can become 'A before B'."
    },
    {
      original: "First read the questions, and then write your answers.",
      keyword: "before",
      gapped: "Read the questions ____ you write your answers.",
      answers: ["before"],
      model: "before",
      explanation: "Use 'before' to show the order of two actions."
    },
    {
      original: "First buy a ticket, and then get on the train.",
      keyword: "before",
      gapped: "Buy a ticket ____ you get on the train.",
      answers: ["before"],
      model: "before",
      explanation: "'First A, then B' means A happens before B."
    },
    {
      original: "First turn off the lights, and then leave the room.",
      keyword: "before",
      gapped: "Turn off the lights ____ you leave the room.",
      answers: ["before"],
      model: "before",
      explanation: "'Before you leave' means leaving comes after the first action."
    },
    {
      original: "The sports centre has a large gym.",
      keyword: "is",
      gapped: "There ____ a large gym in the sports centre.",
      answers: ["is"],
      model: "is",
      explanation: "'The place has X' can be rewritten as 'There is X in the place'."
    },
    {
      original: "The station has a small bookshop.",
      keyword: "is",
      gapped: "There ____ a small bookshop at the station.",
      answers: ["is"],
      model: "is",
      explanation: "Use 'There is' + singular noun to say what a place has."
    },
    {
      original: "The farm has many sheep.",
      keyword: "are",
      gapped: "There ____ many sheep on the farm.",
      answers: ["are"],
      model: "are",
      explanation: "'Many sheep' is plural, so we use 'There are'."
    },
    {
      original: "The library has lots of comics.",
      keyword: "are",
      gapped: "There ____ lots of comics in the library.",
      answers: ["are"],
      model: "are",
      explanation: "With plural nouns, 'The place has X' becomes 'There are X'."
    },
    {
      original: "The castle has two tall towers.",
      keyword: "are",
      gapped: "There ____ two tall towers on the castle.",
      answers: ["are"],
      model: "are",
      explanation: "Use 'There are' before plural nouns like 'two towers'."
    },
    {
      original: "There is a bus stop in front of the school.",
      keyword: "got",
      gapped: "The school has ____ a bus stop in front of it.",
      answers: ["got"],
      model: "got",
      explanation: "'There is X' can become 'The place has got X'."
    },
    {
      original: "There are lots of pictures in this book.",
      keyword: "got",
      gapped: "This book has ____ lots of pictures.",
      answers: ["got"],
      model: "got",
      explanation: "'Has got' means the same as 'has' — what something contains."
    },
    {
      original: "There is a swimming pool at the hotel.",
      keyword: "got",
      gapped: "The hotel has ____ a swimming pool.",
      answers: ["got"],
      model: "got",
      explanation: "'There is X at the hotel' equals 'The hotel has got X'."
    },
    {
      original: "There are five floors in that building.",
      keyword: "got",
      gapped: "That building has ____ five floors.",
      answers: ["got"],
      model: "got",
      explanation: "'There are X in Y' can be rewritten as 'Y has got X'."
    },
    {
      original: "There is a small window in the kitchen.",
      keyword: "got",
      gapped: "The kitchen has ____ a small window.",
      answers: ["got"],
      model: "got",
      explanation: "'Has got' describes what a room or place contains."
    },
    {
      original: "The music is too quiet to hear.",
      keyword: "enough",
      gapped: "The music is not loud ____ to hear.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too quiet' means the same as 'not loud enough'."
    },
    {
      original: "This street is too narrow for the bus.",
      keyword: "enough",
      gapped: "This street is not wide ____ for the bus.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too narrow' equals 'not wide enough'; 'enough' follows the adjective."
    },
    {
      original: "The film was too long for the children.",
      keyword: "enough",
      gapped: "The film was not short ____ for the children.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too long' can be rewritten as 'not short enough'."
    },
    {
      original: "My phone is too old for this game.",
      keyword: "enough",
      gapped: "My phone is not new ____ for this game.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too old' means 'not new enough' — the opposite adjective + enough."
    },
    {
      original: "The path is not dry enough for cycling.",
      keyword: "too",
      gapped: "The path is ____ wet for cycling.",
      answers: ["too"],
      model: "too",
      explanation: "'Not dry enough' means the same as 'too wet'."
    },
    {
      original: "This exercise is not easy enough for beginners.",
      keyword: "too",
      gapped: "This exercise is ____ difficult for beginners.",
      answers: ["too"],
      model: "too",
      explanation: "'Not easy enough' equals 'too difficult'."
    },
    {
      original: "The music was not quiet enough for studying.",
      keyword: "too",
      gapped: "The music was ____ loud for studying.",
      answers: ["too"],
      model: "too",
      explanation: "'Not quiet enough' can become 'too loud'."
    },
    {
      original: "My old shoes are not big enough now.",
      keyword: "too",
      gapped: "My old shoes are ____ small now.",
      answers: ["too"],
      model: "too",
      explanation: "'Not big enough' means 'too small'."
    },
    {
      original: "The bag is not strong enough for these books.",
      keyword: "too",
      gapped: "The bag is ____ weak for these books.",
      answers: ["too"],
      model: "too",
      explanation: "'Not strong enough' means the same as 'too weak'."
    },
    {
      original: "This road is longer than that one.",
      keyword: "shorter",
      gapped: "That road is ____ this one.",
      answers: ["shorter than"],
      model: "shorter than",
      explanation: "If A is longer than B, then B is shorter than A."
    },
    {
      original: "Today is hotter than yesterday.",
      keyword: "cooler",
      gapped: "Yesterday was ____ today.",
      answers: ["cooler than"],
      model: "cooler than",
      explanation: "Swap the comparison and use the opposite comparative: cooler than."
    },
    {
      original: "The kitchen is cleaner than the garage.",
      keyword: "dirtier",
      gapped: "The garage is ____ the kitchen.",
      answers: ["dirtier than"],
      model: "dirtier than",
      explanation: "If the kitchen is cleaner, the garage is dirtier than the kitchen."
    },
    {
      original: "My new phone is lighter than my old one.",
      keyword: "heavier",
      gapped: "My old phone is ____ my new one.",
      answers: ["heavier than"],
      model: "heavier than",
      explanation: "Use the opposite comparative to reverse the sentence: heavier than."
    },
    {
      original: "The train is quicker than the bus.",
      keyword: "slower",
      gapped: "The bus is ____ the train.",
      answers: ["slower than"],
      model: "slower than",
      explanation: "If the train is quicker, the bus is slower than the train."
    },
    {
      original: "Dan is stronger than Nick.",
      keyword: "as",
      gapped: "Nick is not ____ strong as Dan.",
      answers: ["as"],
      model: "as",
      explanation: "'A is stronger than B' means 'B is not as strong as A'."
    },
    {
      original: "The red apples are sweeter than the green ones.",
      keyword: "as",
      gapped: "The green apples are not ____ sweet as the red ones.",
      answers: ["as"],
      model: "as",
      explanation: "Rewrite a comparative with 'not as ... as' from the other side."
    },
    {
      original: "The city is noisier than the village.",
      keyword: "as",
      gapped: "The village is not ____ noisy as the city.",
      answers: ["as"],
      model: "as",
      explanation: "'Noisier than' from one side becomes 'not as noisy as'."
    },
    {
      original: "My room is tidier than my brother's room.",
      keyword: "as",
      gapped: "My brother's room is not ____ tidy as mine.",
      answers: ["as"],
      model: "as",
      explanation: "Use 'not as + adjective + as' to reverse a comparison."
    },
    {
      original: "This lake is deeper than that river.",
      keyword: "as",
      gapped: "That river is not ____ deep as this lake.",
      answers: ["as"],
      model: "as",
      explanation: "'A is deeper than B' equals 'B is not as deep as A'."
    },
    {
      original: "Pizza is Leo's favourite food.",
      keyword: "best",
      gapped: "Leo likes pizza ____ of all foods.",
      answers: ["best"],
      model: "best",
      explanation: "'Favourite' means the thing you like best of all."
    },
    {
      original: "My favourite animal is the horse.",
      keyword: "like",
      gapped: "I ____ horses best of all animals.",
      answers: ["like"],
      model: "like",
      explanation: "'My favourite X is Y' can become 'I like Y best of all'."
    },
    {
      original: "Winter is Elena's favourite season.",
      keyword: "best",
      gapped: "Elena likes winter ____ of all the seasons.",
      answers: ["best"],
      model: "best",
      explanation: "'X is her favourite' means 'She likes X best of all'."
    },
    {
      original: "I like the colour red best of all.",
      keyword: "favourite",
      gapped: "Red is my ____ colour.",
      answers: ["favourite"],
      model: "favourite",
      explanation: "The colour you like best is your favourite colour."
    },
    {
      original: "Sofia likes chocolate cake best of all cakes.",
      keyword: "favourite",
      gapped: "Chocolate cake is Sofia's ____ cake.",
      answers: ["favourite"],
      model: "favourite",
      explanation: "'Likes ... best of all' means the same as 'favourite'."
    },
    {
      original: "Adam likes rock music best of all.",
      keyword: "favourite",
      gapped: "Rock is Adam's ____ kind of music.",
      answers: ["favourite"],
      model: "favourite",
      explanation: "Your favourite is the one you like best of all."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
