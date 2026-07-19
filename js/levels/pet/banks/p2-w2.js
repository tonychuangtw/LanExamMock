/* PET Prep extra bank: part2 wave 2 */
(function () {
  var BANK = [
    {
      text: "My parents have been married ____ almost twenty-five years.",
      answers: ["for"],
      explanation: "'For' introduces a length of time with the present perfect: for twenty-five years."
    },
    {
      text: "He hasn't eaten anything ____ breakfast, so he must be starving.",
      answers: ["since"],
      explanation: "'Since' marks the starting point (breakfast) of a period continuing until now."
    },
    {
      text: "I've ____ seen that film twice, but I'd happily watch it again.",
      answers: ["already"],
      explanation: "'Already' emphasises that something has happened before now, perhaps sooner than expected."
    },
    {
      text: "The plane hasn't landed ____, so we still have time for a coffee.",
      answers: ["yet"],
      explanation: "'Yet' appears at the end of negative present perfect sentences."
    },
    {
      text: "Has your family ____ been camping in the mountains?",
      answers: ["ever"],
      explanation: "'Ever' in present perfect questions means 'at any time in your life'."
    },
    {
      text: "Careful, the floor is wet. I have ____ washed it.",
      answers: ["just"],
      explanation: "'Just' + present perfect describes something completed moments ago."
    },
    {
      text: "The doctor ____ treated my grandfather was extremely kind.",
      answers: ["who", "that"],
      explanation: "'Who' or 'that' can be the subject of a defining relative clause about a person."
    },
    {
      text: "I've found the book ____ explains how volcanoes are formed.",
      answers: ["which", "that"],
      explanation: "'Which' or 'that' introduces a defining relative clause about a thing."
    },
    {
      text: "That's the café ____ we first met five years ago.",
      answers: ["where"],
      explanation: "'Where' connects a place (the café) with what happened there."
    },
    {
      text: "I spoke to the neighbour ____ cat keeps sleeping in our garden.",
      answers: ["whose"],
      explanation: "'Whose' shows possession: the cat belongs to the neighbour."
    },
    {
      text: "____ you mix blue and yellow paint, you get green.",
      answers: ["if", "when", "whenever"],
      explanation: "Zero conditional for general truths accepts 'if', 'when' or 'whenever'."
    },
    {
      text: "We won't get good seats ____ we arrive at least an hour early.",
      answers: ["unless"],
      explanation: "'Unless' means 'if we do not': no good seats if we don't arrive early."
    },
    {
      text: "If you ____ harder, you would pass the exam easily.",
      answers: ["studied", "worked", "tried", "practised"],
      explanation: "Second conditional needs a past simple verb after 'if': if you studied harder."
    },
    {
      text: "If she catches the early train, she ____ be here before lunch.",
      answers: ["will", "should", "might", "may", "could"],
      explanation: "First conditional result clause takes 'will' or another modal of probability."
    },
    {
      text: "The stolen paintings ____ found in an old garage last week.",
      answers: ["were"],
      explanation: "Past simple passive with a plural subject uses 'were' + past participle."
    },
    {
      text: "Breakfast ____ served in the hotel dining room from seven o'clock.",
      answers: ["is"],
      explanation: "Present simple passive with a singular subject: is + served."
    },
    {
      text: "A new shopping centre is ____ built on the edge of town.",
      answers: ["being"],
      explanation: "Present continuous passive: is/are + being + past participle."
    },
    {
      text: "The winners will ____ announced at the end of the ceremony.",
      answers: ["be"],
      explanation: "Future passive: will + be + past participle."
    },
    {
      text: "Travelling by train is usually cheaper ____ flying, at least in my country.",
      answers: ["than"],
      explanation: "'Cheaper' is a comparative and must be followed by 'than'."
    },
    {
      text: "My little sister is not ____ tall as our mother yet.",
      answers: ["as", "so"],
      explanation: "In negatives, both 'not as... as' and 'not so... as' are correct."
    },
    {
      text: "The exam was much easier ____ I had expected.",
      answers: ["than"],
      explanation: "'Easier than' compares the real exam with my expectation."
    },
    {
      text: "What is ____ longest river in the world, the Nile or the Amazon?",
      answers: ["the"],
      explanation: "Superlative adjectives always take the definite article 'the'."
    },
    {
      text: "We had ____ wonderful time at the beach last summer.",
      answers: ["a"],
      explanation: "The fixed expression is 'have a wonderful/great time'."
    },
    {
      text: "She goes to ____ gym three times a week to stay fit.",
      answers: ["the", "a"],
      explanation: "'Go to the gym' is the usual expression for the place you exercise."
    },
    {
      text: "How ____ people are coming to your birthday dinner on Friday?",
      answers: ["many"],
      explanation: "'People' is countable, so we ask 'how many', not 'how much'."
    },
    {
      text: "I've got ____ homework tonight that I can't come out.",
      answers: ["so"],
      explanation: "'So much' homework: 'so' intensifies the quantity before 'much' — here the missing word is 'so'."
    },
    {
      text: "Would you like ____ more rice, or have you had enough?",
      answers: ["some", "any"],
      explanation: "'Some' is normal in offers; 'any' is also possible in questions."
    },
    {
      text: "____ of the students in my class walks to school; they all cycle.",
      answers: ["none"],
      explanation: "'None of' + plural noun means not a single one of the group."
    },
    {
      text: "You ____ be quiet in the library; other people are studying.",
      answers: ["must", "should"],
      explanation: "'Must' expresses obligation from rules; 'should' is softer but also possible."
    },
    {
      text: "You ____ to book a table because the restaurant gets very busy.",
      answers: ["ought", "need", "have"],
      explanation: "'Ought to', 'need to' and 'have to' all fit before 'to + infinitive' for advice or necessity."
    },
    {
      text: "She ____ be at home; her car is parked outside the house.",
      answers: ["must", "should"],
      explanation: "'Must' expresses logical certainty: the car outside is strong evidence."
    },
    {
      text: "It ____ be Jack at the door; he said he was staying at home tonight.",
      answers: ["can't", "cannot", "couldn't"],
      explanation: "'Can't/couldn't' expresses that something is logically impossible."
    },
    {
      text: "____ you mind closing the door? There's a cold wind coming in.",
      answers: ["would", "do"],
      explanation: "'Would/Do you mind + -ing' is a polite request."
    },
    {
      text: "My grandfather ____ to walk five kilometres to school when he was a boy.",
      answers: ["used", "had"],
      explanation: "'Used to' describes a past habit; 'had to' expresses past obligation — both fit."
    },
    {
      text: "She didn't ____ to like vegetables, but now she eats them every day.",
      answers: ["use"],
      explanation: "In negatives, 'used to' becomes 'didn't use to'."
    },
    {
      text: "You've been to Paris before, ____ you?",
      answers: ["haven't"],
      explanation: "Positive present perfect statements take the tag 'haven't you?'."
    },
    {
      text: "Your brother works in a bank, ____ he?",
      answers: ["doesn't"],
      explanation: "Present simple positive with 'works' takes the tag 'doesn't he?'."
    },
    {
      text: "They didn't win the match, ____ they?",
      answers: ["did"],
      explanation: "A negative past simple sentence takes the positive tag 'did they?'."
    },
    {
      text: "Let's go for a walk, ____ we?",
      answers: ["shall"],
      explanation: "The question tag for 'Let's' is always 'shall we?'."
    },
    {
      text: "____ she practised every day, she didn't win the tennis tournament.",
      answers: ["although", "though"],
      explanation: "'Although/though' introduces a contrast clause with a subject and verb."
    },
    {
      text: "____ being tired after the journey, the children wanted to explore the city.",
      answers: ["despite"],
      explanation: "'Despite' + -ing form expresses contrast without a full clause."
    },
    {
      text: "The hotel was small but comfortable; ____, the staff were very helpful.",
      answers: ["moreover", "furthermore", "also", "additionally", "besides"],
      explanation: "A linking adverb like 'moreover' or 'also' adds another positive point."
    },
    {
      text: "First we visited the museum, and ____ we had lunch by the river.",
      answers: ["then", "afterwards", "later", "next"],
      explanation: "'Then/afterwards/later/next' orders events in a narrative."
    },
    {
      text: "My grandmother taught ____ to use a computer at the age of seventy.",
      answers: ["herself"],
      explanation: "The reflexive 'herself' shows she did the teaching to herself."
    },
    {
      text: "The cat cleaned ____ carefully after eating its dinner.",
      answers: ["itself"],
      explanation: "'Itself' is the reflexive pronoun for animals and things."
    },
    {
      text: "The concert tickets sold out ____ quickly that many fans were disappointed.",
      answers: ["so"],
      explanation: "'So + adverb + that' expresses result: so quickly that fans missed out."
    },
    {
      text: "It was ____ an interesting museum that we stayed until closing time.",
      answers: ["such"],
      explanation: "'Such + a/an + adjective + noun' is the pattern before a noun phrase."
    },
    {
      text: "I'm ____ tired to cook tonight; let's order a pizza instead.",
      answers: ["too"],
      explanation: "'Too + adjective + to' means the quality prevents the action."
    },
    {
      text: "He didn't run fast ____ to catch the bus, so he waited for the next one.",
      answers: ["enough"],
      explanation: "'Enough' follows the adverb: fast enough to catch the bus."
    },
    {
      text: "My cousin arrived ____ the airport two hours before her flight.",
      answers: ["at"],
      explanation: "We arrive 'at' a building or specific point: at the airport."
    },
    {
      text: "When did your family arrive ____ Spain for the first time?",
      answers: ["in"],
      explanation: "We arrive 'in' a country or city: arrive in Spain."
    },
    {
      text: "I always listen ____ music while I'm doing the housework.",
      answers: ["to"],
      explanation: "The verb 'listen' always takes the preposition 'to'."
    },
    {
      text: "She's worried ____ her exam results, which come out tomorrow.",
      answers: ["about"],
      explanation: "'Worried' takes the preposition 'about': worried about results."
    },
    {
      text: "This song reminds me ____ our summer holiday in Greece.",
      answers: ["of"],
      explanation: "'Remind somebody of something' means make them remember it."
    },
    {
      text: "The film is based ____ a true story that happened in the 1950s.",
      answers: ["on", "upon"],
      explanation: "The fixed expression is 'based on' (or formal 'upon') a story."
    },
    {
      text: "Are you still waiting ____ the results of your blood test?",
      answers: ["for"],
      explanation: "'Wait for something' is the correct verb + preposition pattern."
    },
    {
      text: "My town is famous ____ its beautiful mediaeval castle.",
      answers: ["for"],
      explanation: "'Famous for' introduces the reason something is well known."
    },
    {
      text: "He apologised ____ arriving late to the wedding.",
      answers: ["for"],
      explanation: "'Apologise for + -ing' explains what the apology is about."
    },
    {
      text: "The teacher was very pleased ____ our presentation on climate change.",
      answers: ["with", "about"],
      explanation: "'Pleased with/about' expresses satisfaction with something."
    },
    {
      text: "____ do you usually get to work — by bus or by car?",
      answers: ["how"],
      explanation: "'How' asks about the way or method of doing something."
    },
    {
      text: "____ often does your football team train during the season?",
      answers: ["how"],
      explanation: "'How often' asks about the frequency of an activity."
    },
    {
      text: "____ colour did you finally choose for the living room walls?",
      answers: ["what", "which"],
      explanation: "'What/Which colour' asks for a choice; 'which' suggests a limited set."
    },
    {
      text: "____ does this suitcase belong to? It's been here all morning.",
      answers: ["who", "whom"],
      explanation: "'Who does it belong to?' asks about the owner; formal 'whom' also fits."
    },
    {
      text: "I can't find my glasses ____; can you help me look for them?",
      answers: ["anywhere"],
      explanation: "'Anywhere' is used in negative sentences instead of 'somewhere'."
    },
    {
      text: "There's ____ at the door; I can hear them knocking.",
      answers: ["someone", "somebody"],
      explanation: "'Someone/somebody' refers to an unknown person in a positive sentence."
    },
    {
      text: "She said ____ interesting about the history of our street.",
      answers: ["something"],
      explanation: "'Something' + adjective: something interesting, something strange."
    },
    {
      text: "____ in the class passed the test; the teacher was delighted.",
      answers: ["everyone", "everybody"],
      explanation: "'Everyone/everybody' means all the people and takes a singular verb."
    },
    {
      text: "We have lived in this flat ____ my father changed jobs in 2019.",
      answers: ["since"],
      explanation: "'Since' + a past event (he changed jobs) marks the start of the period."
    },
    {
      text: "They have been friends ____ more than a decade.",
      answers: ["for"],
      explanation: "'For' + length of time: for more than a decade."
    },
    {
      text: "I have ____ been so embarrassed in all my life!",
      answers: ["never"],
      explanation: "'Never' + present perfect means at no time until now."
    },
    {
      text: "Have you spoken to the manager ____ the problem with your order?",
      answers: ["about"],
      explanation: "We speak to somebody 'about' a topic or problem."
    },
    {
      text: "The girl ____ sits next to me in maths is from Argentina.",
      answers: ["who", "that"],
      explanation: "'Who/that' is the subject of the relative clause describing the girl."
    },
    {
      text: "The restaurant ____ serves the best noodles in town is always full.",
      answers: ["which", "that"],
      explanation: "'Which/that' introduces the defining clause about the restaurant."
    },
    {
      text: "Summer is the season ____ our little town is busiest with tourists.",
      answers: ["when"],
      explanation: "'When' introduces a relative clause about a time (the season)."
    },
    {
      text: "If we ____ the bus, we'll have to walk all the way home.",
      answers: ["miss"],
      explanation: "First conditional uses the present simple after 'if': if we miss the bus."
    },
    {
      text: "I wouldn't say that ____ I were absolutely sure it was true.",
      answers: ["unless", "if"],
      explanation: "'Unless' means 'except if': only if I were sure would I say it."
    },
    {
      text: "This bridge ____ designed by a famous engineer in the nineteenth century.",
      answers: ["was"],
      explanation: "Past simple passive: singular subject + was + designed."
    },
    {
      text: "All the classroom windows ____ cleaned during the school holidays.",
      answers: ["were", "are", "get"],
      explanation: "Passive with plural subject: were/are + cleaned; informal 'get cleaned' also works."
    },
    {
      text: "Portuguese is ____ in both Portugal and Brazil.",
      answers: ["spoken", "used"],
      explanation: "Passive voice needs the past participle: is spoken/used."
    },
    {
      text: "My marks this term are worse ____ last term's, so I must study more.",
      answers: ["than"],
      explanation: "'Worse' is the comparative of 'bad' and takes 'than'."
    },
    {
      text: "The sooner we leave, ____ earlier we will arrive.",
      answers: ["the"],
      explanation: "The pattern 'the + comparative, the + comparative' links two changes."
    },
    {
      text: "Of all my subjects, I find chemistry ____ most difficult.",
      answers: ["the"],
      explanation: "Superlative structures need 'the': the most difficult."
    },
    {
      text: "He is one of ____ best chess players in the whole country.",
      answers: ["the"],
      explanation: "'One of the + superlative + plural noun' is the fixed pattern."
    },
    {
      text: "I've never ridden ____ horse, but I'd love to try one day.",
      answers: ["a"],
      explanation: "First mention of a singular countable noun takes 'a': a horse."
    },
    {
      text: "____ moon looked huge and orange as it rose over the sea.",
      answers: ["the"],
      explanation: "Unique things like the moon, the sun and the sky take 'the'."
    },
    {
      text: "There is too ____ noise in here; I can't concentrate on my reading.",
      answers: ["much"],
      explanation: "'Noise' is uncountable, so 'too much', not 'too many'."
    },
    {
      text: "There are too ____ cars in the city centre during rush hour.",
      answers: ["many"],
      explanation: "'Cars' is a plural countable noun, so 'too many'."
    },
    {
      text: "Could I have a ____ more time to finish this exercise, please?",
      answers: ["little", "bit"],
      explanation: "'A little more time' or 'a bit more time' asks for a small extra amount."
    },
    {
      text: "____ my friends nor my brother knew about the surprise party.",
      answers: ["neither"],
      explanation: "'Neither... nor' joins two negative alternatives."
    },
    {
      text: "You can have ____ tea or coffee, but I'm afraid we've run out of juice.",
      answers: ["either"],
      explanation: "'Either... or' presents a choice between two options."
    },
    {
      text: "You ____ better take a map; it's easy to get lost in those hills.",
      answers: ["had"],
      explanation: "'Had better + infinitive' gives strong advice: you'd better take a map."
    },
    {
      text: "When my dad was a student, he ____ to work in a supermarket at weekends.",
      answers: ["used", "had"],
      explanation: "'Used to' for repeated past habit; 'had to' for past obligation — both fit."
    },
    {
      text: "She's your cousin, ____ she?",
      answers: ["isn't"],
      explanation: "A positive sentence with 'is' takes the negative tag 'isn't she?'."
    },
    {
      text: "You couldn't lend me five pounds, ____ you?",
      answers: ["could"],
      explanation: "A negative sentence with 'couldn't' takes the positive tag 'could you?'."
    },
    {
      text: "____ it was nearly midnight, the streets were still full of people.",
      answers: ["although", "though", "while"],
      explanation: "A contrast clause before a comma uses 'although/though/while'."
    },
    {
      text: "He passed his driving test ____ making two small mistakes.",
      answers: ["despite"],
      explanation: "'Despite + -ing' shows the mistakes did not stop him passing."
    },
    {
      text: "I cut ____ while I was chopping onions for the soup.",
      answers: ["myself"],
      explanation: "The reflexive 'myself' is needed because the subject and object are the same person."
    },
    {
      text: "The town was ____ crowded during the festival that we could hardly move.",
      answers: ["so"],
      explanation: "'So + adjective + that' introduces the result of the crowding."
    },
    {
      text: "It's never ____ late to learn a new language or skill.",
      answers: ["too"],
      explanation: "The saying uses 'too late' — beyond the right time; 'never too late' denies it."
    },
    {
      text: "The classroom wasn't big ____ for all forty students, so we moved to the hall.",
      answers: ["enough"],
      explanation: "'Adjective + enough + for' expresses the necessary size: big enough for forty students."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
