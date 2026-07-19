/* PET Prep extra bank: part2 wave 5 */
(function () {
  var BANK = [
    {
      text: "That bookshop has been in the same family ____ four generations.",
      answers: ["for"],
      explanation: "'For four generations' expresses the length of time with the present perfect."
    },
    {
      text: "Prices in this café have doubled ____ my last visit two years ago.",
      answers: ["since"],
      explanation: "'Since my last visit' marks the starting point of the price rise."
    },
    {
      text: "Is the washing machine fixed ____, or should we go to the launderette?",
      answers: ["yet"],
      explanation: "'Yet' in a question asks whether something has happened by now."
    },
    {
      text: "Slow down — you've ____ eaten two burgers and a portion of chips!",
      answers: ["already", "just"],
      explanation: "'Already/just' with present perfect stresses how soon or recently it happened."
    },
    {
      text: "Have you ____ slept in a tent on a mountain? It's unforgettable.",
      answers: ["ever"],
      explanation: "'Ever' in a present perfect question means at any time in your life."
    },
    {
      text: "The volunteers ____ cleaned the beach were thanked by the town council.",
      answers: ["who", "that"],
      explanation: "'Who/that' is the subject of the clause describing the volunteers."
    },
    {
      text: "I finally visited the stadium ____ my favourite team plays its home matches.",
      answers: ["where"],
      explanation: "'Where' links the stadium to the matches played there."
    },
    {
      text: "We interviewed a farmer ____ family has worked this land for a century.",
      answers: ["whose"],
      explanation: "'Whose' shows the family belongs to the farmer."
    },
    {
      text: "The jacket ____ I ordered online turned out to be the wrong size.",
      answers: ["which", "that"],
      explanation: "'Which/that' refers to the jacket, the object of 'ordered'."
    },
    {
      text: "____ you leave now, you'll catch the express train at half past.",
      answers: ["if"],
      explanation: "First conditional: if + present simple, will + infinitive."
    },
    {
      text: "The picnic will go ahead ____ it pours with rain.",
      answers: ["unless"],
      explanation: "'Unless it pours' means 'if it does not pour': rain is the only thing that stops it."
    },
    {
      text: "If I ____ where she lived, I would send her an invitation.",
      answers: ["knew"],
      explanation: "Second conditional uses the past simple after 'if': if I knew."
    },
    {
      text: "If we had left earlier, we ____ have missed the beginning of the play.",
      answers: ["wouldn't", "couldn't", "mightn't"],
      explanation: "Third conditional result: wouldn't/couldn't have + past participle."
    },
    {
      text: "The prizes ____ handed out by the head teacher at the end of term.",
      answers: ["were", "are", "got", "get"],
      explanation: "Passive voice with plural subject: were/are handed out."
    },
    {
      text: "This documentary ____ filmed over three years in the Arctic.",
      answers: ["was"],
      explanation: "Past simple passive with a singular subject: was filmed."
    },
    {
      text: "Mobile phones must be switched ____ before the performance begins.",
      answers: ["off"],
      explanation: "'Switch off' means stop a device working; here in a passive rule."
    },
    {
      text: "A new bus route is ____ introduced to connect the two villages.",
      answers: ["being"],
      explanation: "Present continuous passive: is being + past participle."
    },
    {
      text: "Learning to skate is harder ____ it looks, believe me.",
      answers: ["than"],
      explanation: "'Harder' is a comparative and requires 'than'."
    },
    {
      text: "Our new teacher is just as strict ____ the one who retired.",
      answers: ["as"],
      explanation: "The equal comparison 'as strict as' needs the second 'as'."
    },
    {
      text: "The traffic today is even worse ____ usual because of the roadworks.",
      answers: ["than"],
      explanation: "'Worse than usual' compares today with a normal day."
    },
    {
      text: "That was ____ least interesting lecture of the whole conference.",
      answers: ["the"],
      explanation: "'The least + adjective' is the negative superlative and takes 'the'."
    },
    {
      text: "My cousin plays ____ drums in a band that practises in our garage.",
      answers: ["the"],
      explanation: "Musical instruments take the definite article: play the drums."
    },
    {
      text: "She got ____ job at the new hotel by the harbour.",
      answers: ["a", "the"],
      explanation: "'A job' for first mention; 'the job' if a specific one is known — both fit."
    },
    {
      text: "Honesty is ____ quality I value most in a friend.",
      answers: ["the"],
      explanation: "'The quality I value most' is specific and superlative in meaning, so it takes 'the'."
    },
    {
      text: "How ____ does a single ticket to the city centre cost?",
      answers: ["much"],
      explanation: "'How much does it cost?' asks about price."
    },
    {
      text: "There's ____ point arguing with him; he never changes his mind.",
      answers: ["no", "little"],
      explanation: "'There's no point + -ing' means the action is useless."
    },
    {
      text: "____ of the cakes had sold out by ten o'clock — every single one.",
      answers: ["all"],
      explanation: "'All of the cakes' means the complete set; 'every single one' confirms it."
    },
    {
      text: "I've read ____ of his novels, but not the latest one.",
      answers: ["most", "some", "many", "several", "all", "two", "three", "four", "five"],
      explanation: "A quantifier before 'of his novels' works: most/some/many of them."
    },
    {
      text: "You ____ touch the paintings in the gallery; there's an alarm.",
      answers: ["mustn't", "can't", "cannot", "shouldn't"],
      explanation: "'Mustn't/can't' expresses prohibition by the gallery rules."
    },
    {
      text: "Visitors ____ to sign in at reception before entering the building.",
      answers: ["have", "need", "ought"],
      explanation: "'Have to / need to / ought to' + infinitive express obligation."
    },
    {
      text: "You ____ have left your gloves on the bus — check your coat pockets first.",
      answers: ["might", "may", "could", "must"],
      explanation: "'Might/may/could have + past participle' guesses about a past possibility."
    },
    {
      text: "____ you speak any other languages besides English and Chinese?",
      answers: ["can", "do", "could"],
      explanation: "'Can you speak...?' asks about ability; 'do you speak' asks about habit."
    },
    {
      text: "I didn't use ____ enjoy vegetables, but my tastes have changed completely.",
      answers: ["to"],
      explanation: "The negative of 'used to' is 'didn't use to + infinitive'."
    },
    {
      text: "There's a lot more traffic than there ____ to be in this street.",
      answers: ["used"],
      explanation: "'There used to be' compares the past situation with now."
    },
    {
      text: "Nothing went wrong during the trip, ____ it?",
      answers: ["did"],
      explanation: "'Nothing' is negative in meaning, so the tag is positive: did it?"
    },
    {
      text: "Your sister has just started university, ____ she?",
      answers: ["hasn't"],
      explanation: "Positive present perfect with 'has' takes the tag 'hasn't she?'."
    },
    {
      text: "Pass me that towel, ____ you? My hands are covered in flour.",
      answers: ["will", "would", "could", "can"],
      explanation: "Imperatives often take the softening tag 'will/would/could you?'."
    },
    {
      text: "____ the shop was about to close, the assistant happily helped us.",
      answers: ["although", "though", "while"],
      explanation: "'Although/though' contrasts closing time with the assistant's helpfulness."
    },
    {
      text: "____ arriving two hours early, we still couldn't find good seats.",
      answers: ["despite"],
      explanation: "'Despite + -ing' shows the early arrival didn't help."
    },
    {
      text: "The flat is tiny. ____, the view over the park makes up for it.",
      answers: ["however", "nevertheless", "nonetheless", "still"],
      explanation: "A contrast adverb like 'however' introduces the compensating point."
    },
    {
      text: "I wrote the address down ____ that I wouldn't forget it.",
      answers: ["so"],
      explanation: "'So that' expresses purpose: in order not to forget."
    },
    {
      text: "She whispered so ____ to disturb the students who were reading.",
      answers: ["as"],
      explanation: "'So as not to + infinitive' — the gap completes the purpose phrase 'so as'."
    },
    {
      text: "The children made the entire meal by ____ , without any help from adults.",
      answers: ["themselves"],
      explanation: "'By themselves' means alone, with nobody helping them."
    },
    {
      text: "I often talk to ____ when I'm trying to solve a difficult problem.",
      answers: ["myself"],
      explanation: "'Talk to myself' — the speaker is both talker and listener."
    },
    {
      text: "The soup was ____ salty that nobody could finish it.",
      answers: ["so"],
      explanation: "'So + adjective + that' expresses the result of the saltiness."
    },
    {
      text: "It was ____ a boring speech that half the audience fell asleep.",
      answers: ["such"],
      explanation: "'Such + a + adjective + noun + that' expresses result before a noun phrase."
    },
    {
      text: "These trousers are ____ small for me now; I've grown a lot this year.",
      answers: ["too"],
      explanation: "'Too small' means smaller than is acceptable or wearable."
    },
    {
      text: "Is your English good ____ to follow a film without subtitles?",
      answers: ["enough"],
      explanation: "'Adjective + enough + to' expresses the necessary level."
    },
    {
      text: "The ferry sails ____ the island twice a day in summer.",
      answers: ["to"],
      explanation: "'Sail to + place' expresses the destination of the journey."
    },
    {
      text: "We waited ____ the rain to stop before setting off on our walk.",
      answers: ["for"],
      explanation: "'Wait for something to happen' is the fixed pattern."
    },
    {
      text: "She's been ____ a diet since the doctor advised her to lose weight.",
      answers: ["on"],
      explanation: "The fixed expression is 'be on a diet'."
    },
    {
      text: "I read about the flood ____ the front page of this morning's paper.",
      answers: ["on"],
      explanation: "News appears 'on' the front page of a newspaper."
    },
    {
      text: "He answered the phone ____ a very sleepy voice.",
      answers: ["in", "with"],
      explanation: "'In a ... voice' (or 'with') describes the manner of speaking."
    },
    {
      text: "Our team is ____ the top of the league for the first time ever.",
      answers: ["at"],
      explanation: "The phrase is 'at the top of' a table or league."
    },
    {
      text: "The twins are so alike that even their teacher mixes them ____.",
      answers: ["up"],
      explanation: "'Mix up' means confuse two people or things with each other."
    },
    {
      text: "Could you write ____ your email address so I don't forget it?",
      answers: ["down"],
      explanation: "'Write down' means record something on paper."
    },
    {
      text: "The meeting has been put ____ until next Thursday afternoon.",
      answers: ["off", "back"],
      explanation: "'Put off/back' means delay something until a later time."
    },
    {
      text: "I really get ____ well with my mother-in-law, luckily.",
      answers: ["on", "along"],
      explanation: "'Get on/along (well) with somebody' means have a good relationship."
    },
    {
      text: "She takes ____ her father — they have exactly the same laugh.",
      answers: ["after"],
      explanation: "'Take after somebody' means resemble an older family member."
    },
    {
      text: "Don't give ____ — you're so close to finishing the puzzle!",
      answers: ["up"],
      explanation: "'Give up' means stop trying."
    },
    {
      text: "We set ____ at dawn to avoid the midday heat in the desert.",
      answers: ["off", "out"],
      explanation: "'Set off/out' means begin a journey."
    },
    {
      text: "The alarm went ____ at three in the morning and woke the whole street.",
      answers: ["off"],
      explanation: "'Go off' means suddenly ring or make a loud noise."
    },
    {
      text: "____ did you learn to make sushi? It's absolutely delicious.",
      answers: ["where", "when", "how"],
      explanation: "'Where/when/how' can all ask about the learning: place, time or method."
    },
    {
      text: "____ much does your suitcase weigh? Mine is nearly twenty kilos.",
      answers: ["how"],
      explanation: "'How much does it weigh?' asks about weight."
    },
    {
      text: "____ one of you broke the window? Someone must tell me the truth.",
      answers: ["which"],
      explanation: "'Which one of you' asks for the responsible person from a known group."
    },
    {
      text: "I've looked ____ for my passport, but it's simply not in the house.",
      answers: ["everywhere"],
      explanation: "'Everywhere' means in all places; it fits the exhaustive search."
    },
    {
      text: "Would you like ____ else, or shall I bring the bill?",
      answers: ["anything", "something"],
      explanation: "'Anything/something else' offers one more item in a restaurant."
    },
    {
      text: "____ of them wanted to admit the mistake, so they both stayed silent.",
      answers: ["neither"],
      explanation: "'Neither of them' means not one and not the other of two people."
    },
    {
      text: "The tickets cost ten pounds ____, so twenty pounds for the pair.",
      answers: ["each"],
      explanation: "'Each' after a price means per single item or person."
    },
    {
      text: "My mum has been a nurse ____ more than half her life.",
      answers: ["for"],
      explanation: "'For more than half her life' gives the duration with the present perfect."
    },
    {
      text: "He hasn't spoken to his best friend ____ their silly argument.",
      answers: ["since"],
      explanation: "'Since their argument' marks the starting point of the silence."
    },
    {
      text: "By next June, they will ____ finished building the new bridge.",
      answers: ["have"],
      explanation: "Future perfect: will + have + past participle for completion before a time."
    },
    {
      text: "When the phone rang, I ____ having a shower, so I missed the call.",
      answers: ["was"],
      explanation: "Past continuous: was having a shower, the interrupted background action."
    },
    {
      text: "We ____ going to visit the caves tomorrow if the weather stays dry.",
      answers: ["are", "were"],
      explanation: "'Be going to' expresses a plan: we are going to visit."
    },
    {
      text: "The couple ____ bought the house next door have two friendly dogs.",
      answers: ["who", "that"],
      explanation: "'Who/that' is the subject of the clause identifying the couple."
    },
    {
      text: "The song ____ was playing on the radio reminded me of my school days.",
      answers: ["which", "that"],
      explanation: "'Which/that' introduces the clause about the song."
    },
    {
      text: "Autumn is the time of year ____ the park looks its most beautiful.",
      answers: ["when"],
      explanation: "'When' relates the time (autumn) to what happens then."
    },
    {
      text: "____ you feel dizzy at any point, stop the exercise immediately.",
      answers: ["if", "should", "whenever"],
      explanation: "'If you feel dizzy' is the normal conditional; formal 'should you feel' also fits."
    },
    {
      text: "I would have called you ____ my phone hadn't run out of battery.",
      answers: ["if"],
      explanation: "Third conditional: would have + past participle, if + past perfect."
    },
    {
      text: "Dinner is nearly ready; the table just needs to ____ laid.",
      answers: ["be"],
      explanation: "Passive infinitive after 'needs to': needs to be laid."
    },
    {
      text: "The lost puppy ____ found safe and well by a group of hikers.",
      answers: ["was", "got"],
      explanation: "Past simple passive: was found; informal 'got found' is possible."
    },
    {
      text: "Every essay ____ checked twice before it is returned to the student.",
      answers: ["is", "gets"],
      explanation: "Present simple passive with singular subject: is checked."
    },
    {
      text: "Skiing is far more tiring ____ it appears on television.",
      answers: ["than"],
      explanation: "The comparative 'more tiring' is completed by 'than'."
    },
    {
      text: "Her cooking is not quite as spicy ____ her mother's, but it's close.",
      answers: ["as"],
      explanation: "'Not as spicy as' compares the two cooks' food."
    },
    {
      text: "It was ____ hottest day the town had recorded in fifty years.",
      answers: ["the"],
      explanation: "The superlative 'hottest' needs the definite article."
    },
    {
      text: "He gave me ____ useful piece of advice about job interviews.",
      answers: ["a"],
      explanation: "'A useful piece of advice' — 'piece' makes uncountable 'advice' countable."
    },
    {
      text: "____ breakfast, I usually just have toast and a glass of juice.",
      answers: ["for", "at"],
      explanation: "'For breakfast' describes what you eat; 'at breakfast' the mealtime."
    },
    {
      text: "There wasn't ____ bread left, so I made rice instead of sandwiches.",
      answers: ["any", "enough", "much"],
      explanation: "Negative sentence with uncountable 'bread': any/enough/much all fit."
    },
    {
      text: "____ little brother follows me around the house all day long.",
      answers: ["my", "her", "his", "our", "your", "the"],
      explanation: "A determiner such as a possessive is needed before 'little brother'."
    },
    {
      text: "You ____ have watered the plants; look, the soil is still wet.",
      answers: ["needn't", "shouldn't"],
      explanation: "'Needn't have + past participle' means the past action was unnecessary."
    },
    {
      text: "____ we ask the waiter for the menu? We've been waiting ages.",
      answers: ["shall", "should", "can", "could"],
      explanation: "'Shall/should we' makes a suggestion about asking the waiter."
    },
    {
      text: "My dad ____ to smoke, but he gave it up ten years ago.",
      answers: ["used"],
      explanation: "'Used to smoke' describes a past habit that has stopped."
    },
    {
      text: "Nobody in the class likes cold weather, ____ they?",
      answers: ["do"],
      explanation: "'Nobody' makes the sentence negative, so the tag is positive: do they?"
    },
    {
      text: "Open the window a little, ____ you? It's stuffy in here.",
      answers: ["will", "would", "could", "can"],
      explanation: "After an imperative, the tag 'will/would/could you?' softens the request."
    },
    {
      text: "____ being the youngest player, she scored the winning goal.",
      answers: ["despite"],
      explanation: "'Despite + -ing' contrasts her age with her achievement."
    },
    {
      text: "____ some people love spicy food, others can't stand it at all.",
      answers: ["while", "although", "though", "whereas"],
      explanation: "'While/whereas' contrasts two groups of people in one sentence."
    },
    {
      text: "He's saving every penny ____ that he can travel around Asia next year.",
      answers: ["so"],
      explanation: "'So that + clause' expresses the purpose of the saving."
    },
    {
      text: "The birthday girl blew ____ all twelve candles in one go.",
      answers: ["out"],
      explanation: "'Blow out' means extinguish a flame with your breath."
    },
    {
      text: "Please try this jumper ____ before you decide to buy it.",
      answers: ["on"],
      explanation: "'Try on' means put clothes on to test the size and look."
    },
    {
      text: "I can't tell the difference ____ butter and margarine, can you?",
      answers: ["between"],
      explanation: "'The difference between A and B' is the fixed pattern for comparing two things."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
