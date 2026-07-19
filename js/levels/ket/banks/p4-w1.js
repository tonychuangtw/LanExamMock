/* KET Prep extra bank: part4 wave 1 */
(function () {
  var BANK = [
    {
      original: "The school has a big library.",
      keyword: "is",
      gapped: "There ____ a big library in the school.",
      answers: ["is"],
      model: "is",
      explanation: "'The school has X' means the same as 'There is X in the school'."
    },
    {
      original: "The hotel has a small swimming pool.",
      keyword: "is",
      gapped: "There ____ a small swimming pool in the hotel.",
      answers: ["is"],
      model: "is",
      explanation: "'The hotel has X' can be rewritten as 'There is X in the hotel'."
    },
    {
      original: "The village has an old church.",
      keyword: "is",
      gapped: "There ____ an old church in the village.",
      answers: ["is"],
      model: "is",
      explanation: "Use 'There is' with a singular noun to say what a place has."
    },
    {
      original: "Our flat has a sunny balcony.",
      keyword: "is",
      gapped: "There ____ a sunny balcony in our flat.",
      answers: ["is"],
      model: "is",
      explanation: "'Our flat has X' means the same as 'There is X in our flat'."
    },
    {
      original: "The museum has a nice cafe.",
      keyword: "is",
      gapped: "There ____ a nice cafe in the museum.",
      answers: ["is"],
      model: "is",
      explanation: "Use 'There is' + singular noun to describe what a place contains."
    },
    {
      original: "The hotel has two restaurants.",
      keyword: "are",
      gapped: "There ____ two restaurants in the hotel.",
      answers: ["are"],
      model: "are",
      explanation: "Use 'There are' with a plural noun to say what a place has."
    },
    {
      original: "The park has three tennis courts.",
      keyword: "are",
      gapped: "There ____ three tennis courts in the park.",
      answers: ["are"],
      model: "are",
      explanation: "'The park has X' can become 'There are X in the park' with plural nouns.",
    },
    {
      original: "Our street has many tall trees.",
      keyword: "are",
      gapped: "There ____ many tall trees in our street.",
      answers: ["are"],
      model: "are",
      explanation: "With plural nouns like 'trees', use 'There are', not 'There is'."
    },
    {
      original: "The zoo has lots of monkeys.",
      keyword: "are",
      gapped: "There ____ lots of monkeys in the zoo.",
      answers: ["are"],
      model: "are",
      explanation: "'Lots of monkeys' is plural, so we say 'There are'."
    },
    {
      original: "The town has two cinemas.",
      keyword: "are",
      gapped: "There ____ two cinemas in the town.",
      answers: ["are"],
      model: "are",
      explanation: "Use 'There are' before a plural noun such as 'two cinemas'."
    },
    {
      original: "There is a big garden behind the house.",
      keyword: "got",
      gapped: "The house has ____ a big garden behind it.",
      answers: ["got"],
      model: "got",
      explanation: "'There is X' can become 'The house has got X' in British English."
    },
    {
      original: "There are four bedrooms in the flat.",
      keyword: "got",
      gapped: "The flat has ____ four bedrooms.",
      answers: ["got"],
      model: "got",
      explanation: "'There are X in the flat' means the same as 'The flat has got X'."
    },
    {
      original: "There is a small kitchen in the flat.",
      keyword: "got",
      gapped: "The flat has ____ a small kitchen.",
      answers: ["got"],
      model: "got",
      explanation: "'Has got' means the same as 'has'; both describe what a place contains."
    },
    {
      original: "There are two computer rooms in the school.",
      keyword: "got",
      gapped: "The school has ____ two computer rooms.",
      answers: ["got"],
      model: "got",
      explanation: "'There are X in the school' becomes 'The school has got X'."
    },
    {
      original: "There is a long beach near the hotel.",
      keyword: "got",
      gapped: "The hotel has ____ a long beach near it.",
      answers: ["got"],
      model: "got",
      explanation: "'Has got' is another way to say 'has' when describing a place."
    },
    {
      original: "The tea is too hot to drink.",
      keyword: "enough",
      gapped: "The tea is not cool ____ to drink.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too hot' means the same as 'not cool enough'; 'enough' follows the adjective."
    },
    {
      original: "The box is too heavy for me to lift.",
      keyword: "enough",
      gapped: "The box is not light ____ for me to lift.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too heavy' equals 'not light enough'; use the opposite adjective + enough."
    },
    {
      original: "This puzzle is too difficult for young children.",
      keyword: "enough",
      gapped: "This puzzle is not easy ____ for young children.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too difficult' means 'not easy enough'; 'enough' comes after the adjective."
    },
    {
      original: "The room is too small for a party.",
      keyword: "enough",
      gapped: "The room is not big ____ for a party.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too small' means the same as 'not big enough'."
    },
    {
      original: "The water is too cold for swimming.",
      keyword: "enough",
      gapped: "The water is not warm ____ for swimming.",
      answers: ["enough"],
      model: "enough",
      explanation: "'Too cold' can be rewritten as 'not warm enough'."
    },
    {
      original: "Tim is not old enough to drive a car.",
      keyword: "too",
      gapped: "Tim is ____ young to drive a car.",
      answers: ["too"],
      model: "too",
      explanation: "'Not old enough' means the same as 'too young'; 'too' goes before the adjective."
    },
    {
      original: "This coat is not big enough for me.",
      keyword: "too",
      gapped: "This coat is ____ small for me.",
      answers: ["too"],
      model: "too",
      explanation: "'Not big enough' equals 'too small'; use 'too' + opposite adjective."
    },
    {
      original: "The bus was not fast enough, so we were late.",
      keyword: "too",
      gapped: "The bus was ____ slow, so we were late.",
      answers: ["too"],
      model: "too",
      explanation: "'Not fast enough' means the same as 'too slow'."
    },
    {
      original: "My bedroom is not warm enough in winter.",
      keyword: "too",
      gapped: "My bedroom is ____ cold in winter.",
      answers: ["too"],
      model: "too",
      explanation: "'Not warm enough' can be rewritten as 'too cold'."
    },
    {
      original: "The shelf is not low enough for the children.",
      keyword: "too",
      gapped: "The shelf is ____ high for the children.",
      answers: ["too"],
      model: "too",
      explanation: "'Not low enough' means 'too high'; 'too' comes before the adjective."
    },
    {
      original: "Tom is taller than Ben.",
      keyword: "shorter",
      gapped: "Ben is ____ Tom.",
      answers: ["shorter than"],
      model: "shorter than",
      explanation: "If Tom is taller than Ben, then Ben is shorter than Tom; swap the comparison."
    },
    {
      original: "My bag is heavier than yours.",
      keyword: "lighter",
      gapped: "Your bag is ____ mine.",
      answers: ["lighter than"],
      model: "lighter than",
      explanation: "Use the opposite comparative: 'heavier than' from one side means 'lighter than' from the other."
    },
    {
      original: "The red car is faster than the blue one.",
      keyword: "slower",
      gapped: "The blue car is ____ the red one.",
      answers: ["slower than"],
      model: "slower than",
      explanation: "If A is faster than B, then B is slower than A."
    },
    {
      original: "Grandpa is older than Grandma.",
      keyword: "younger",
      gapped: "Grandma is ____ Grandpa.",
      answers: ["younger than"],
      model: "younger than",
      explanation: "Turn the sentence around with the opposite comparative: younger than."
    },
    {
      original: "My house is bigger than Jim's house.",
      keyword: "smaller",
      gapped: "Jim's house is ____ mine.",
      answers: ["smaller than"],
      model: "smaller than",
      explanation: "If my house is bigger, Jim's house is smaller than mine."
    },
    {
      original: "The green shirt is cheaper than the white one.",
      keyword: "as",
      gapped: "The white shirt is not ____ cheap as the green one.",
      answers: ["as"],
      model: "as",
      explanation: "'B is cheaper than A' can become 'A is not as cheap as B'."
    },
    {
      original: "Ben runs faster than Carlos.",
      keyword: "as",
      gapped: "Carlos does not run ____ fast as Ben.",
      answers: ["as"],
      model: "as",
      explanation: "Use 'not as + adjective/adverb + as' to compare from the other side."
    },
    {
      original: "The book was more interesting than the film.",
      keyword: "as",
      gapped: "The film was not ____ interesting as the book.",
      answers: ["as"],
      model: "as",
      explanation: "'A was more interesting than B' means 'B was not as interesting as A'."
    },
    {
      original: "January is colder than March here.",
      keyword: "as",
      gapped: "March is not ____ cold as January here.",
      answers: ["as"],
      model: "as",
      explanation: "Rewrite a comparative with 'not as ... as' from the other side."
    },
    {
      original: "Lucy's hair is longer than Emma's.",
      keyword: "as",
      gapped: "Emma's hair is not ____ long as Lucy's.",
      answers: ["as"],
      model: "as",
      explanation: "'Longer than' from one side becomes 'not as long as' from the other."
    },
    {
      original: "My favourite subject is history.",
      keyword: "best",
      gapped: "I like history ____ of all subjects.",
      answers: ["best"],
      model: "best",
      explanation: "'My favourite X is Y' means the same as 'I like Y best of all'."
    },
    {
      original: "Bananas are Anna's favourite fruit.",
      keyword: "best",
      gapped: "Anna likes bananas ____ of all fruits.",
      answers: ["best"],
      model: "best",
      explanation: "'Favourite' can be rewritten as 'like ... best of all'."
    },
    {
      original: "My favourite season is summer.",
      keyword: "like",
      gapped: "I ____ summer best of all the seasons.",
      answers: ["like"],
      model: "like",
      explanation: "'My favourite X is Y' equals 'I like Y best of all'."
    },
    {
      original: "Mark likes tennis best of all sports.",
      keyword: "favourite",
      gapped: "Tennis is Mark's ____ sport.",
      answers: ["favourite"],
      model: "favourite",
      explanation: "'Likes ... best of all' means the same as 'favourite'."
    },
    {
      original: "Lucy likes the colour green best of all.",
      keyword: "favourite",
      gapped: "Green is Lucy's ____ colour.",
      answers: ["favourite"],
      model: "favourite",
      explanation: "The thing you like best is your favourite."
    },
    {
      original: "Lucy started working at the shop three years ago.",
      keyword: "for",
      gapped: "Lucy has worked at the shop ____ three years.",
      answers: ["for"],
      model: "for",
      explanation: "'Started ... ago' becomes present perfect + 'for' + a length of time."
    },
    {
      original: "We bought this car two years ago and still have it.",
      keyword: "for",
      gapped: "We have had this car ____ two years.",
      answers: ["for"],
      model: "for",
      explanation: "Use 'have had ... for' + a period of time to show something continues now."
    },
    {
      original: "Paul began learning English five years ago.",
      keyword: "for",
      gapped: "Paul has learnt English ____ five years.",
      answers: ["for"],
      model: "for",
      explanation: "'Began ... ago' changes to present perfect with 'for' + length of time."
    },
    {
      original: "They moved to this town six months ago.",
      keyword: "for",
      gapped: "They have lived in this town ____ six months.",
      answers: ["for"],
      model: "for",
      explanation: "'Moved ... ago' becomes 'have lived ... for' + a period of time."
    },
    {
      original: "I got this watch a year ago and still wear it.",
      keyword: "for",
      gapped: "I have had this watch ____ a year.",
      answers: ["for"],
      model: "for",
      explanation: "Present perfect + 'for' shows how long you have had something."
    },
    {
      original: "Mark moved to Rome in 2020.",
      keyword: "since",
      gapped: "Mark has lived in Rome ____ 2020.",
      answers: ["since"],
      model: "since",
      explanation: "Use 'since' + a point in time (a year, a month) with the present perfect."
    },
    {
      original: "Sara started her job in May.",
      keyword: "since",
      gapped: "Sara has had her job ____ May.",
      answers: ["since"],
      model: "since",
      explanation: "'Started in May' becomes 'has had ... since May'."
    },
    {
      original: "Nina bought her bike in April.",
      keyword: "since",
      gapped: "Nina has had her bike ____ April.",
      answers: ["since"],
      model: "since",
      explanation: "'Since' + the starting point shows when something began."
    },
    {
      original: "Leo started playing the piano when he was six.",
      keyword: "since",
      gapped: "Leo has played the piano ____ he was six.",
      answers: ["since"],
      model: "since",
      explanation: "Use 'since' + the moment something started, with the present perfect."
    },
    {
      original: "The shop opened at nine o'clock and is still open.",
      keyword: "since",
      gapped: "The shop has been open ____ nine o'clock.",
      answers: ["since"],
      model: "since",
      explanation: "'Since' + a time point shows when a continuing situation began."
    },
    {
      original: "Emma can cook very well.",
      keyword: "at",
      gapped: "Emma is good ____ cooking.",
      answers: ["at"],
      model: "at",
      explanation: "'Can do something well' means 'is good at + -ing form'."
    },
    {
      original: "Ben can swim very well.",
      keyword: "good",
      gapped: "Ben is ____ swimming.",
      answers: ["good at"],
      model: "good at",
      explanation: "'Can swim well' becomes 'is good at swimming'."
    },
    {
      original: "My sister can draw very well.",
      keyword: "at",
      gapped: "My sister is good ____ drawing.",
      answers: ["at"],
      model: "at",
      explanation: "After 'good' we use 'at' + the -ing form of the verb."
    },
    {
      original: "Carlos can dance very well.",
      keyword: "good",
      gapped: "Carlos is ____ dancing.",
      answers: ["good at"],
      model: "good at",
      explanation: "'Can dance well' means the same as 'is good at dancing'."
    },
    {
      original: "Julia can sing very well.",
      keyword: "at",
      gapped: "Julia is good ____ singing.",
      answers: ["at"],
      model: "at",
      explanation: "Use 'good at + -ing' to talk about ability."
    },
    {
      original: "Peter is good at skiing.",
      keyword: "can",
      gapped: "Peter ____ ski very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Is good at skiing' means 'can ski very well'."
    },
    {
      original: "Rosa is good at making cakes.",
      keyword: "can",
      gapped: "Rosa ____ make cakes very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Good at + -ing' can be rewritten with 'can + verb + well'."
    },
    {
      original: "My dad is good at fixing bikes.",
      keyword: "can",
      gapped: "My dad ____ fix bikes very well.",
      answers: ["can"],
      model: "can",
      explanation: "Use 'can' + base verb to express the same ability as 'good at'."
    },
    {
      original: "Mia is good at speaking French.",
      keyword: "can",
      gapped: "Mia ____ speak French very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Good at speaking French' equals 'can speak French very well'."
    },
    {
      original: "Alex is good at playing chess.",
      keyword: "can",
      gapped: "Alex ____ play chess very well.",
      answers: ["can"],
      model: "can",
      explanation: "'Is good at playing' means 'can play very well'."
    },
    {
      original: "Wash your hands before dinner.",
      keyword: "must",
      gapped: "You ____ wash your hands before dinner.",
      answers: ["must"],
      model: "must",
      explanation: "An imperative order can be rewritten with 'You must + verb'."
    },
    {
      original: "Finish your homework before the film.",
      keyword: "must",
      gapped: "You ____ finish your homework before the film.",
      answers: ["must"],
      model: "must",
      explanation: "'Must' expresses the same instruction as an imperative sentence."
    },
    {
      original: "Wear a helmet when you ride your bike.",
      keyword: "must",
      gapped: "You ____ wear a helmet when you ride your bike.",
      answers: ["must"],
      model: "must",
      explanation: "Use 'You must' to give the same order as an imperative."
    },
    {
      original: "Turn off your phone in the library.",
      keyword: "must",
      gapped: "You ____ turn off your phone in the library.",
      answers: ["must"],
      model: "must",
      explanation: "An instruction like 'Turn off X' equals 'You must turn off X'."
    },
    {
      original: "Bring your sports clothes tomorrow.",
      keyword: "must",
      gapped: "You ____ bring your sports clothes tomorrow.",
      answers: ["must"],
      model: "must",
      explanation: "'You must + verb' gives the same instruction as the imperative."
    },
    {
      original: "Don't be late for class.",
      keyword: "must",
      gapped: "You ____ be late for class.",
      answers: ["must not"],
      model: "must not",
      explanation: "A negative order ('Don't ...') becomes 'You must not ...'."
    },
    {
      original: "Don't run near the pool.",
      keyword: "must",
      gapped: "You ____ run near the pool.",
      answers: ["must not"],
      model: "must not",
      explanation: "'Don't + verb' can be rewritten as 'You must not + verb'."
    },
    {
      original: "Don't eat in the classroom.",
      keyword: "must",
      gapped: "You ____ eat in the classroom.",
      answers: ["must not"],
      model: "must not",
      explanation: "Use 'must not' for something that is not allowed."
    },
    {
      original: "Don't touch the paintings in the museum.",
      keyword: "must",
      gapped: "You ____ touch the paintings in the museum.",
      answers: ["must not"],
      model: "must not",
      explanation: "'Don't touch' means the same as 'You must not touch'."
    },
    {
      original: "Don't open the window on the train.",
      keyword: "must",
      gapped: "You ____ open the window on the train.",
      answers: ["must not"],
      model: "must not",
      explanation: "A rule against doing something uses 'must not'."
    },
    {
      original: "Kate drinks tea every morning.",
      keyword: "always",
      gapped: "Kate ____ tea in the morning.",
      answers: ["always drinks"],
      model: "always drinks",
      explanation: "'Every morning' can become 'always' + present simple verb."
    },
    {
      original: "Ben walks to school every day.",
      keyword: "always",
      gapped: "Ben ____ to school.",
      answers: ["always walks"],
      model: "always walks",
      explanation: "'Every day' means the same as 'always'; it goes before the main verb."
    },
    {
      original: "We watch the news every evening.",
      keyword: "always",
      gapped: "We ____ the news in the evening.",
      answers: ["always watch"],
      model: "always watch",
      explanation: "'Always' replaces 'every evening' and goes before the verb."
    },
    {
      original: "Dad makes pancakes every Sunday.",
      keyword: "always",
      gapped: "Dad ____ pancakes on Sundays.",
      answers: ["always makes"],
      model: "always makes",
      explanation: "'Every Sunday' can be rewritten as 'always ... on Sundays'."
    },
    {
      original: "I check my emails every morning.",
      keyword: "always",
      gapped: "I ____ my emails in the morning.",
      answers: ["always check"],
      model: "always check",
      explanation: "'Always' + verb expresses the same habit as 'every morning'."
    },
    {
      original: "Dan doesn't ever eat meat.",
      keyword: "never",
      gapped: "Dan ____ meat.",
      answers: ["never eats"],
      model: "never eats",
      explanation: "'Doesn't ever' means 'never'; the verb becomes positive after 'never'."
    },
    {
      original: "Lucy doesn't ever arrive late.",
      keyword: "never",
      gapped: "Lucy ____ late.",
      answers: ["never arrives"],
      model: "never arrives",
      explanation: "'Never' replaces 'doesn't ever' and takes a positive verb form."
    },
    {
      original: "We don't ever go out on Mondays.",
      keyword: "never",
      gapped: "We ____ out on Mondays.",
      answers: ["never go"],
      model: "never go",
      explanation: "'Don't ever' equals 'never' with a positive verb."
    },
    {
      original: "My grandma doesn't ever use a computer.",
      keyword: "never",
      gapped: "My grandma ____ a computer.",
      answers: ["never uses"],
      model: "never uses",
      explanation: "'Never' means 'not ever' and goes before the main verb."
    },
    {
      original: "I don't ever drink coffee at night.",
      keyword: "never",
      gapped: "I ____ coffee at night.",
      answers: ["never drink"],
      model: "never drink",
      explanation: "'Don't ever drink' becomes 'never drink' — no extra negative is needed."
    },
    {
      original: "The bus tickets were cheap.",
      keyword: "expensive",
      gapped: "The bus tickets were not ____.",
      answers: ["expensive"],
      model: "expensive",
      explanation: "'Cheap' means the same as 'not expensive'."
    },
    {
      original: "This T-shirt was cheap.",
      keyword: "expensive",
      gapped: "This T-shirt was not ____.",
      answers: ["expensive"],
      model: "expensive",
      explanation: "Something cheap is not expensive — use the opposite with 'not'."
    },
    {
      original: "The meal at the cafe was cheap.",
      keyword: "expensive",
      gapped: "The meal at the cafe was not ____.",
      answers: ["expensive"],
      model: "expensive",
      explanation: "'Cheap' can be rewritten as 'not expensive'."
    },
    {
      original: "Food at the market is cheap.",
      keyword: "expensive",
      gapped: "Food at the market is not ____.",
      answers: ["expensive"],
      model: "expensive",
      explanation: "Use 'not' + the opposite adjective: cheap = not expensive."
    },
    {
      original: "Our hotel room was cheap.",
      keyword: "expensive",
      gapped: "Our hotel room was not ____.",
      answers: ["expensive"],
      model: "expensive",
      explanation: "'Cheap' and 'not expensive' mean the same thing."
    },
    {
      original: "I like apples more than oranges.",
      keyword: "prefer",
      gapped: "I ____ apples to oranges.",
      answers: ["prefer"],
      model: "prefer",
      explanation: "'Like A more than B' means 'prefer A to B'."
    },
    {
      original: "We like the beach more than the mountains.",
      keyword: "prefer",
      gapped: "We ____ the beach to the mountains.",
      answers: ["prefer"],
      model: "prefer",
      explanation: "Use 'prefer A to B' instead of 'like A more than B'."
    },
    {
      original: "Nina likes trains more than buses.",
      keyword: "prefers",
      gapped: "Nina ____ trains to buses.",
      answers: ["prefers"],
      model: "prefers",
      explanation: "With he/she, use 'prefers A to B' for 'likes A more than B'."
    },
    {
      original: "Tom likes tea more than coffee.",
      keyword: "prefers",
      gapped: "Tom ____ tea to coffee.",
      answers: ["prefers"],
      model: "prefers",
      explanation: "'Likes A more than B' equals 'prefers A to B'."
    },
    {
      original: "My parents like the countryside more than the city.",
      keyword: "prefer",
      gapped: "My parents ____ the countryside to the city.",
      answers: ["prefer"],
      model: "prefer",
      explanation: "'Prefer A to B' means to like A more than B."
    },
    {
      original: "I want to visit Japan one day.",
      keyword: "like",
      gapped: "I would ____ to visit Japan one day.",
      answers: ["like"],
      model: "like",
      explanation: "'Want to do' can be said more politely as 'would like to do'."
    },
    {
      original: "Sara wants to be a doctor.",
      keyword: "like",
      gapped: "Sara would ____ to be a doctor.",
      answers: ["like"],
      model: "like",
      explanation: "'Wants to' means the same as 'would like to'."
    },
    {
      original: "We want to see that new film.",
      keyword: "would",
      gapped: "We ____ like to see that new film.",
      answers: ["would"],
      model: "would",
      explanation: "'Want to' becomes 'would like to' in polite English."
    },
    {
      original: "Tom wants a glass of water.",
      keyword: "would",
      gapped: "Tom ____ like a glass of water.",
      answers: ["would"],
      model: "would",
      explanation: "'Wants X' can be rewritten as 'would like X'."
    },
    {
      original: "I want to learn the guitar.",
      keyword: "would",
      gapped: "I ____ like to learn the guitar.",
      answers: ["would"],
      model: "would",
      explanation: "'Would like to' is a polite way to say 'want to'."
    },
    {
      original: "How much is this jacket?",
      keyword: "cost",
      gapped: "How much does this jacket ____?",
      answers: ["cost"],
      model: "cost",
      explanation: "'How much is X?' means the same as 'How much does X cost?'."
    },
    {
      original: "How much are these shoes?",
      keyword: "cost",
      gapped: "How much do these shoes ____?",
      answers: ["cost"],
      model: "cost",
      explanation: "With plural nouns, use 'How much do ... cost?'."
    },
    {
      original: "How much is a ticket to the museum?",
      keyword: "cost",
      gapped: "How much does a ticket to the museum ____?",
      answers: ["cost"],
      model: "cost",
      explanation: "Asking a price with 'is' can be rewritten with 'does ... cost'."
    },
    {
      original: "This is Maria's phone.",
      keyword: "belongs",
      gapped: "This phone ____ Maria.",
      answers: ["belongs to"],
      model: "belongs to",
      explanation: "'This is X's Y' means 'This Y belongs to X'."
    },
    {
      original: "That is my uncle's car.",
      keyword: "belongs",
      gapped: "That car ____ my uncle.",
      answers: ["belongs to"],
      model: "belongs to",
      explanation: "Use 'belongs to' + person to show who owns something."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
