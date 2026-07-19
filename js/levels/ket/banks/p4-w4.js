/* KET Prep extra bank: part4 wave 4 */
(function () {
  var BANK = [
    {
      original: "No mountain in the country is higher than this one.",
      keyword: "highest",
      gapped: "This is the ____ mountain in the country.",
      answers: ["highest"],
      model: "highest",
      explanation: "'No mountain is higher' means this is the highest one."
    },
    {
      original: "No girl in the class sings better than Julia.",
      keyword: "best",
      gapped: "Julia is the ____ singer in the class.",
      answers: ["best"],
      model: "best",
      explanation: "'No one sings better than X' means 'X is the best singer'."
    },
    {
      original: "No month here is wetter than November.",
      keyword: "wettest",
      gapped: "November is the ____ month here.",
      answers: ["wettest"],
      model: "wettest",
      explanation: "'No month is wetter' means it is the wettest — a superlative."
    },
    {
      original: "No cafe in town is nicer than this one.",
      keyword: "nicest",
      gapped: "This is the ____ cafe in town.",
      answers: ["nicest"],
      model: "nicest",
      explanation: "'No cafe is nicer' means this cafe is the nicest."
    },
    {
      original: "No building in the city is older than the castle.",
      keyword: "oldest",
      gapped: "The castle is the ____ building in the city.",
      answers: ["oldest"],
      model: "oldest",
      explanation: "Use the superlative 'the oldest' when nothing else is older."
    },
    {
      original: "Let's go for a walk by the river.",
      keyword: "shall",
      gapped: "____ we go for a walk by the river?",
      answers: ["Shall"],
      model: "Shall",
      explanation: "'Let's do X' can become the suggestion 'Shall we do X?'."
    },
    {
      original: "Let's ask the teacher for help.",
      keyword: "shall",
      gapped: "____ we ask the teacher for help?",
      answers: ["Shall"],
      model: "Shall",
      explanation: "'Shall we ...?' is a question form for a suggestion."
    },
    {
      original: "Let's cook dinner together tonight.",
      keyword: "shall",
      gapped: "____ we cook dinner together tonight?",
      answers: ["Shall"],
      model: "Shall",
      explanation: "Use 'Shall we + verb?' to suggest doing something together."
    },
    {
      original: "Let's buy Mum some flowers.",
      keyword: "shall",
      gapped: "____ we buy Mum some flowers?",
      answers: ["Shall"],
      model: "Shall",
      explanation: "'Let's buy X' means the same as 'Shall we buy X?'."
    },
    {
      original: "Let's sit outside in the garden.",
      keyword: "shall",
      gapped: "____ we sit outside in the garden?",
      answers: ["Shall"],
      model: "Shall",
      explanation: "'Shall we ...?' turns 'Let's ...' into a question."
    },
    {
      original: "Let's play a board game this evening.",
      keyword: "about",
      gapped: "How ____ playing a board game this evening?",
      answers: ["about"],
      model: "about",
      explanation: "'Let's do X' can become 'How about + -ing form?'."
    },
    {
      original: "Let's go to the new pizza place.",
      keyword: "about",
      gapped: "How ____ going to the new pizza place?",
      answers: ["about"],
      model: "about",
      explanation: "'How about + -ing?' is another way to make a suggestion."
    },
    {
      original: "Let's paint the kitchen blue.",
      keyword: "about",
      gapped: "How ____ painting the kitchen blue?",
      answers: ["about"],
      model: "about",
      explanation: "After 'How about' the verb takes the -ing form."
    },
    {
      original: "Let's take the dog to the park.",
      keyword: "about",
      gapped: "How ____ taking the dog to the park?",
      answers: ["about"],
      model: "about",
      explanation: "'How about taking ...?' suggests the same plan as 'Let's take'."
    },
    {
      original: "Let's watch the tennis final together.",
      keyword: "about",
      gapped: "How ____ watching the tennis final together?",
      answers: ["about"],
      model: "about",
      explanation: "Use 'How about + -ing' to suggest an idea."
    },
    {
      original: "We arrived at the beach before lunch.",
      keyword: "got",
      gapped: "We ____ to the beach before lunch.",
      answers: ["got"],
      model: "got",
      explanation: "'Arrived at' means the same as 'got to'."
    },
    {
      original: "The bus arrived at the stop on time.",
      keyword: "got",
      gapped: "The bus ____ to the stop on time.",
      answers: ["got"],
      model: "got",
      explanation: "'Arrive at' can be rewritten as 'get to'."
    },
    {
      original: "Nina arrived home after dark.",
      keyword: "got",
      gapped: "Nina ____ home after dark.",
      answers: ["got"],
      model: "got",
      explanation: "'Arrived home' means 'got home' — no 'to' before 'home'."
    },
    {
      original: "They arrived at the party at nine.",
      keyword: "got",
      gapped: "They ____ to the party at nine.",
      answers: ["got"],
      model: "got",
      explanation: "'Got to' + place is an informal way to say 'arrived at'."
    },
    {
      original: "I arrived at the office at half past eight.",
      keyword: "got",
      gapped: "I ____ to the office at half past eight.",
      answers: ["got"],
      model: "got",
      explanation: "'Get to the office' means 'arrive at the office'."
    },
    {
      original: "The market closes at two o'clock.",
      keyword: "until",
      gapped: "The market stays open ____ two o'clock.",
      answers: ["until"],
      model: "until",
      explanation: "'Closes at X' means it stays open until X."
    },
    {
      original: "The restaurant closes at eleven at night.",
      keyword: "until",
      gapped: "The restaurant stays open ____ eleven at night.",
      answers: ["until"],
      model: "until",
      explanation: "'Until' + a time shows when something stops."
    },
    {
      original: "The bank closes at four.",
      keyword: "until",
      gapped: "The bank stays open ____ four.",
      answers: ["until"],
      model: "until",
      explanation: "'Open until four' means it closes at four."
    },
    {
      original: "The sports centre closes at nine in the evening.",
      keyword: "until",
      gapped: "The sports centre stays open ____ nine in the evening.",
      answers: ["until"],
      model: "until",
      explanation: "Use 'until' + closing time to say how long a place is open."
    },
    {
      original: "The bakery closes at one on Sundays.",
      keyword: "until",
      gapped: "The bakery stays open ____ one on Sundays.",
      answers: ["until"],
      model: "until",
      explanation: "'Stays open until X' means the same as 'closes at X'."
    },
    {
      original: "First do the shopping, and then cook lunch.",
      keyword: "before",
      gapped: "Do the shopping ____ you cook lunch.",
      answers: ["before"],
      model: "before",
      explanation: "'First A, then B' means 'Do A before B'."
    },
    {
      original: "First put on sun cream, and then go to the beach.",
      keyword: "before",
      gapped: "Put on sun cream ____ you go to the beach.",
      answers: ["before"],
      model: "before",
      explanation: "'Before' introduces the action that comes later."
    },
    {
      original: "First finish your soup, and then have ice cream.",
      keyword: "before",
      gapped: "Finish your soup ____ you have ice cream.",
      answers: ["before"],
      model: "before",
      explanation: "Use 'before' to show the order of two actions."
    },
    {
      original: "Marta had a shower and then she got dressed.",
      keyword: "after",
      gapped: "Marta got dressed ____ her shower.",
      answers: ["after"],
      model: "after",
      explanation: "'A and then B' means 'B happens after A'."
    },
    {
      original: "We watched the film and then we talked about it.",
      keyword: "after",
      gapped: "We talked about the film ____ we watched it.",
      answers: ["after"],
      model: "after",
      explanation: "'After' shows which action happened first."
    },
    {
      original: "The airport has a big car park.",
      keyword: "is",
      gapped: "There ____ a big car park at the airport.",
      answers: ["is"],
      model: "is",
      explanation: "'The place has X' can be rewritten as 'There is X at the place'."
    },
    {
      original: "Our school has a music room.",
      keyword: "is",
      gapped: "There ____ a music room in our school.",
      answers: ["is"],
      model: "is",
      explanation: "Use 'There is' + singular noun to say what a place has."
    },
    {
      original: "The beach has a little cafe.",
      keyword: "is",
      gapped: "There ____ a little cafe on the beach.",
      answers: ["is"],
      model: "is",
      explanation: "'The beach has X' means 'There is X on the beach'."
    },
    {
      original: "The town has two supermarkets.",
      keyword: "are",
      gapped: "There ____ two supermarkets in the town.",
      answers: ["are"],
      model: "are",
      explanation: "With plural nouns, use 'There are', not 'There is'."
    },
    {
      original: "The garden has lots of birds.",
      keyword: "are",
      gapped: "There ____ lots of birds in the garden.",
      answers: ["are"],
      model: "are",
      explanation: "'Lots of birds' is plural, so we say 'There are'."
    },
    {
      original: "There is a clock on the kitchen wall.",
      keyword: "got",
      gapped: "The kitchen has ____ a clock on the wall.",
      answers: ["got"],
      model: "got",
      explanation: "'There is X' can become 'The place has got X'."
    },
    {
      original: "There are two big windows in my bedroom.",
      keyword: "got",
      gapped: "My bedroom has ____ two big windows.",
      answers: ["got"],
      model: "got",
      explanation: "'There are X in Y' can be rewritten as 'Y has got X'."
    },
    {
      original: "There is a map in the front of the book.",
      keyword: "got",
      gapped: "The book has ____ a map in the front.",
      answers: ["got"],
      model: "got",
      explanation: "'Has got' means the same as 'has'."
    },
    {
      original: "There are lots of games on this phone.",
      keyword: "got",
      gapped: "This phone has ____ lots of games.",
      answers: ["got"],
      model: "got",
      explanation: "'There are X on Y' equals 'Y has got X'."
    },
    {
      original: "There is a small shop at the station.",
      keyword: "got",
      gapped: "The station has ____ a small shop.",
      answers: ["got"],
      model: "got",
      explanation: "'Has got' describes what a place contains."
    },
    {
      original: "The cupboard is too high for the children to reach.",
      keyword: "enough",
      gapped: "The cupboard is not low ____ for the children to reach.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too high' means the same as 'not low enough'."
    },
    {
      original: "This jacket is too small for my brother.",
      keyword: "enough",
      gapped: "This jacket is not big ____ for my brother.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too small' equals 'not big enough'; 'enough' follows the adjective."
    },
    {
      original: "The bread is too old to eat.",
      keyword: "enough",
      gapped: "The bread is not fresh ____ to eat.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too old' can be rewritten as 'not fresh enough' here."
    },
    {
      original: "The garden is too wet for playing football.",
      keyword: "enough",
      gapped: "The garden is not dry ____ for playing football.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too wet' means 'not dry enough'."
    },
    {
      original: "The lesson was too fast for me.",
      keyword: "enough",
      gapped: "The lesson was not slow ____ for me.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too fast' means the same as 'not slow enough'."
    },
    {
      original: "This suitcase is not light enough for the plane.",
      keyword: "too",
      gapped: "This suitcase is ____ heavy for the plane.",
      answers: ["too"],
      model: "too",
      explanation: "'Not light enough' means the same as 'too heavy'."
    },
    {
      original: "The room is not bright enough for reading.",
      keyword: "too",
      gapped: "The room is ____ dark for reading.",
      answers: ["too"],
      model: "too",
      explanation: "'Not bright enough' equals 'too dark'."
    },
    {
      original: "These trousers are not long enough for Dad.",
      keyword: "too",
      gapped: "These trousers are ____ short for Dad.",
      answers: ["too"],
      model: "too",
      explanation: "'Not long enough' can become 'too short'."
    },
    {
      original: "The soup is not hot enough now.",
      keyword: "too",
      gapped: "The soup is ____ cold now.",
      answers: ["too"],
      model: "too",
      explanation: "'Not hot enough' means 'too cold'."
    },
    {
      original: "The path is not wide enough for two bikes.",
      keyword: "too",
      gapped: "The path is ____ narrow for two bikes.",
      answers: ["too"],
      model: "too",
      explanation: "'Not wide enough' means the same as 'too narrow'."
    },
    {
      original: "The bus is cheaper than the train.",
      keyword: "than",
      gapped: "The train is more expensive ____ the bus.",
      answers: ["than"],
      model: "than",
      explanation: "'A is cheaper than B' means 'B is more expensive than A'."
    },
    {
      original: "The maths homework was easier than the English homework.",
      keyword: "than",
      gapped: "The English homework was more difficult ____ the maths homework.",
      answers: ["than"],
      model: "than",
      explanation: "'Easier than' from one side means 'more difficult than' from the other."
    },
    {
      original: "My brother is younger than me.",
      keyword: "older",
      gapped: "I am ____ my brother.",
      answers: ["older than"],
      model: "older than",
      explanation: "If he is younger than me, I am older than him."
    },
    {
      original: "This film is shorter than the book.",
      keyword: "longer",
      gapped: "The book is ____ this film.",
      answers: ["longer than"],
      model: "longer than",
      explanation: "Swap the comparison and use the opposite comparative: longer than."
    },
    {
      original: "Anna's bike is newer than mine.",
      keyword: "older",
      gapped: "My bike is ____ Anna's.",
      answers: ["older than"],
      model: "older than",
      explanation: "If her bike is newer, mine is older than hers."
    },
    {
      original: "The kitchen is warmer than the hall.",
      keyword: "as",
      gapped: "The hall is not ____ warm as the kitchen.",
      answers: ["as"],
      model: "as",
      explanation: "'A is warmer than B' means 'B is not as warm as A'."
    },
    {
      original: "Simon is taller than his dad now.",
      keyword: "as",
      gapped: "Simon's dad is not ____ tall as Simon now.",
      answers: ["as"],
      model: "as",
      explanation: "Rewrite a comparative with 'not as ... as' from the other side."
    },
    {
      original: "The blue pen writes better than the black one.",
      keyword: "as",
      gapped: "The black pen does not write ____ well as the blue one.",
      answers: ["as"],
      model: "as",
      explanation: "'Better than' from one side becomes 'not as well as'."
    },
    {
      original: "Saturday was sunnier than Sunday.",
      keyword: "as",
      gapped: "Sunday was not ____ sunny as Saturday.",
      answers: ["as"],
      model: "as",
      explanation: "Use 'not as + adjective + as' to reverse a comparison."
    },
    {
      original: "The new game is more exciting than the old one.",
      keyword: "as",
      gapped: "The old game is not ____ exciting as the new one.",
      answers: ["as"],
      model: "as",
      explanation: "'A is more exciting than B' equals 'B is not as exciting as A'."
    },
    {
      original: "My favourite drink is orange juice.",
      keyword: "like",
      gapped: "I ____ orange juice best of all drinks.",
      answers: ["like"],
      model: "like",
      explanation: "'My favourite X is Y' means 'I like Y best of all'."
    },
    {
      original: "Science is Marco's favourite subject.",
      keyword: "best",
      gapped: "Marco likes science ____ of all subjects.",
      answers: ["best"],
      model: "best",
      explanation: "'Favourite' can be rewritten as 'like ... best of all'."
    },
    {
      original: "The lion is Ben's favourite animal.",
      keyword: "best",
      gapped: "Ben likes lions ____ of all animals.",
      answers: ["best"],
      model: "best",
      explanation: "'X is his favourite' means 'He likes X best of all'."
    },
    {
      original: "I like Fridays best of all the days.",
      keyword: "favourite",
      gapped: "Friday is my ____ day of the week.",
      answers: ["favourite"],
      model: "favourite",
      explanation: "The day you like best is your favourite day."
    },
    {
      original: "Grace likes spring best of all the seasons.",
      keyword: "favourite",
      gapped: "Spring is Grace's ____ season.",
      answers: ["favourite"],
      model: "favourite",
      explanation: "'Likes ... best of all' means the same as 'favourite'."
    },
    {
      original: "Oscar started studying Spanish two years ago.",
      keyword: "for",
      gapped: "Oscar has studied Spanish ____ two years.",
      answers: ["for"],
      model: "for",
      explanation: "'Started ... ago' becomes present perfect + 'for' + a period."
    },
    {
      original: "They opened the shop ten years ago and still run it.",
      keyword: "for",
      gapped: "They have run the shop ____ ten years.",
      answers: ["for"],
      model: "for",
      explanation: "Use 'for' + a length of time with the present perfect."
    },
    {
      original: "I met my best friend eight years ago.",
      keyword: "for",
      gapped: "I have known my best friend ____ eight years.",
      answers: ["for"],
      model: "for",
      explanation: "'Met ... ago' becomes 'have known ... for' + a period."
    },
    {
      original: "Karen got her cat a year ago and still has it.",
      keyword: "for",
      gapped: "Karen has had her cat ____ a year.",
      answers: ["for"],
      model: "for",
      explanation: "Present perfect + 'for' shows how long something has continued."
    },
    {
      original: "We started this game an hour ago and are still playing.",
      keyword: "for",
      gapped: "We have played this game ____ an hour.",
      answers: ["for"],
      model: "for",
      explanation: "'Started ... ago' changes to present perfect with 'for'."
    },
    {
      original: "Adam moved to this street in 2021.",
      keyword: "since",
      gapped: "Adam has lived in this street ____ 2021.",
      answers: ["since"],
      model: "since",
      explanation: "Use 'since' + a point in time with the present perfect."
    },
    {
      original: "The two boys became friends in primary school.",
      keyword: "since",
      gapped: "The two boys have been friends ____ primary school.",
      answers: ["since"],
      model: "since",
      explanation: "'Since' + the starting point shows when a friendship began."
    },
    {
      original: "Rosa became a nurse when she was twenty.",
      keyword: "since",
      gapped: "Rosa has been a nurse ____ she was twenty.",
      answers: ["since"],
      model: "since",
      explanation: "'Since she was twenty' marks when the situation started."
    },
    {
      original: "It started snowing early this morning.",
      keyword: "since",
      gapped: "It has snowed ____ early this morning.",
      answers: ["since"],
      model: "since",
      explanation: "'Started + time' becomes present perfect + 'since' + that time."
    },
    {
      original: "Paula got her job in September.",
      keyword: "since",
      gapped: "Paula has had her job ____ September.",
      answers: ["since"],
      model: "since",
      explanation: "'Got it in September' becomes 'has had it since September'."
    },
    {
      original: "Bruno can play the drums very well.",
      keyword: "at",
      gapped: "Bruno is good ____ playing the drums.",
      answers: ["at"],
      model: "at",
      explanation: "'Can do X well' means 'is good at + -ing form'."
    },
    {
      original: "My grandad can grow tomatoes very well.",
      keyword: "good",
      gapped: "My grandad is ____ growing tomatoes.",
      answers: ["good at"],
      model: "good at",
      explanation: "'Can grow well' becomes 'is good at growing'."
    },
    {
      original: "Lily can make pizza very well.",
      keyword: "at",
      gapped: "Lily is good ____ making pizza.",
      answers: ["at"],
      model: "at",
      explanation: "After 'good' we always use 'at' + the -ing form."
    },
    {
      original: "Diana can run very well.",
      keyword: "at",
      gapped: "Diana is good ____ running.",
      answers: ["at"],
      model: "at",
      explanation: "Use 'good at + -ing' to talk about someone's ability."
    },
    {
      original: "Omar can skate very well.",
      keyword: "good",
      gapped: "Omar is ____ skating.",
      answers: ["good at"],
      model: "good at",
      explanation: "'Can skate well' means the same as 'is good at skating'."
    },
    {
      original: "Hannah is good at speaking Italian.",
      keyword: "can",
      gapped: "Hannah ____ speak Italian very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Is good at speaking' equals 'can speak very well'."
    },
    {
      original: "Our dog is good at catching balls.",
      keyword: "can",
      gapped: "Our dog ____ catch balls very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Good at + -ing' can be rewritten with 'can + verb + well'."
    },
    {
      original: "Ivan is good at telling jokes.",
      keyword: "can",
      gapped: "Ivan ____ tell jokes very well.",
      answers: ["can"],
      model: "can",
      explanation: "Use 'can' + base verb for the same ability as 'good at'."
    },
    {
      original: "Paula is good at riding a bike.",
      keyword: "can",
      gapped: "Paula ____ ride a bike very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Is good at riding' means 'can ride very well'."
    },
    {
      original: "Chris is good at climbing trees.",
      keyword: "can",
      gapped: "Chris ____ climb trees very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Good at climbing' equals 'can climb very well'."
    },
    {
      original: "Water the plants while we are away.",
      keyword: "must",
      gapped: "You ____ water the plants while we are away.",
      answers: ["must"],
      model: "must",
      explanation: "An imperative order can be rewritten with 'You must + verb'."
    },
    {
      original: "Lock the door when you leave.",
      keyword: "must",
      gapped: "You ____ lock the door when you leave.",
      answers: ["must"],
      model: "must",
      explanation: "'Must' expresses the same instruction as an imperative."
    },
    {
      original: "Wear warm clothes in the mountains.",
      keyword: "must",
      gapped: "You ____ wear warm clothes in the mountains.",
      answers: ["must"],
      model: "must",
      explanation: "Use 'You must' to give the same order as the imperative."
    },
    {
      original: "Listen carefully to the instructions.",
      keyword: "must",
      gapped: "You ____ listen carefully to the instructions.",
      answers: ["must"],
      model: "must",
      explanation: "'Listen carefully' as an order equals 'You must listen carefully'."
    },
    {
      original: "Show your ticket at the gate.",
      keyword: "must",
      gapped: "You ____ show your ticket at the gate.",
      answers: ["must"],
      model: "must",
      explanation: "'You must + verb' repeats an instruction as an obligation."
    },
    {
      original: "Don't walk on the grass here.",
      keyword: "must",
      gapped: "You ____ walk on the grass here.",
      answers: ["must not"],
      model: "must not",
      explanation: "A negative order ('Don't ...') becomes 'You must not ...'."
    },
    {
      original: "Don't make noise after ten o'clock.",
      keyword: "must",
      gapped: "You ____ make noise after ten o'clock.",
      answers: ["must not"],
      model: "must not",
      explanation: "'Don't + verb' can be rewritten as 'You must not + verb'."
    },
    {
      original: "Don't take photos in this museum.",
      keyword: "must",
      gapped: "You ____ take photos in this museum.",
      answers: ["must not"],
      model: "must not",
      explanation: "Use 'must not' for something that is not allowed."
    },
    {
      original: "Don't ride your bike inside the park.",
      keyword: "must",
      gapped: "You ____ ride your bike inside the park.",
      answers: ["must not"],
      model: "must not",
      explanation: "'Don't ride' means the same as 'You must not ride'."
    },
    {
      original: "Don't forget your keys again.",
      keyword: "must",
      gapped: "You ____ forget your keys again.",
      answers: ["must not"],
      model: "must not",
      explanation: "A rule against doing something uses 'must not'."
    },
    {
      original: "Grandma phones us every Sunday.",
      keyword: "always",
      gapped: "Grandma ____ us on Sundays.",
      answers: ["always phones"],
      model: "always phones",
      explanation: "'Every Sunday' can become 'always ... on Sundays'."
    },
    {
      original: "I tidy my desk every evening.",
      keyword: "always",
      gapped: "I ____ my desk in the evening.",
      answers: ["always tidy"],
      model: "always tidy",
      explanation: "'Always' replaces 'every evening' and goes before the verb."
    },
    {
      original: "Nick doesn't ever eat breakfast.",
      keyword: "never",
      gapped: "Nick ____ breakfast.",
      answers: ["never eats"],
      model: "never eats",
      explanation: "'Doesn't ever' means 'never'; the verb becomes positive."
    },
    {
      original: "We don't ever travel by plane.",
      keyword: "never",
      gapped: "We ____ by plane.",
      answers: ["never travel"],
      model: "never travel",
      explanation: "'Don't ever' equals 'never' with a positive verb form."
    },
    {
      original: "Sara doesn't ever wear a hat.",
      keyword: "never",
      gapped: "Sara ____ a hat.",
      answers: ["never wears"],
      model: "never wears",
      explanation: "'Never' means 'not ever' and goes before the main verb."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
