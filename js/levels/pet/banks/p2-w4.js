/* PET Prep extra bank: part2 wave 4 */
(function () {
  var BANK = [
    {
      text: "Our neighbours have owned that little dog ____ nearly ten years.",
      answers: ["for"],
      explanation: "'For' + a period (nearly ten years) with the present perfect."
    },
    {
      text: "I haven't ridden my bike ____ the accident last spring.",
      answers: ["since"],
      explanation: "'Since' + a past event (the accident) marks the start of the period."
    },
    {
      text: "Have they repaired the lift ____? I don't fancy climbing eight floors.",
      answers: ["yet"],
      explanation: "'Yet' in questions asks whether something has happened by now."
    },
    {
      text: "She has ____ won three medals this season, and it's only March.",
      answers: ["already"],
      explanation: "'Already' highlights that the achievement came sooner than expected."
    },
    {
      text: "Neither of us had ____ tasted mango before that holiday.",
      answers: ["ever"],
      explanation: "'Ever' after 'had' means at any time up to that moment in the past."
    },
    {
      text: "Wait a second — I've ____ remembered where I put the tickets!",
      answers: ["just", "suddenly", "finally"],
      explanation: "'Just' with the present perfect signals a very recent moment of remembering."
    },
    {
      text: "The nurse ____ looked after me in hospital sent me a lovely card.",
      answers: ["who", "that"],
      explanation: "'Who/that' is the subject of the clause describing the nurse."
    },
    {
      text: "They knocked down the cinema ____ my parents watched their first film together.",
      answers: ["where"],
      explanation: "'Where' relates the place (the cinema) to the event that happened there."
    },
    {
      text: "He's the author ____ books have been translated into thirty languages.",
      answers: ["whose"],
      explanation: "'Whose' shows the books belong to the author."
    },
    {
      text: "The recipe ____ my grandmother wrote down is still our family favourite.",
      answers: ["which", "that"],
      explanation: "'Which/that' refers to the recipe, the object of 'wrote down'."
    },
    {
      text: "____ you don't water these plants regularly, they will die very quickly.",
      answers: ["if"],
      explanation: "'If + negative present simple' sets the condition; 'unless' would need a positive verb."
    },
    {
      text: "Take your phone with you in ____ you need to call us.",
      answers: ["case"],
      explanation: "'In case' means 'because it might happen': take it as a precaution."
    },
    {
      text: "We can go sailing tomorrow as ____ as the wind isn't too strong.",
      answers: ["long"],
      explanation: "'As long as' means 'on condition that': only if the wind is gentle."
    },
    {
      text: "If they ____ invited us earlier, we could have arranged to come.",
      answers: ["had"],
      explanation: "Third conditional: if + had + past participle, could have + past participle."
    },
    {
      text: "The competition winner will be ____ a free weekend in Edinburgh.",
      answers: ["given", "offered", "awarded"],
      explanation: "Passive with two objects: the winner will be given/offered a prize."
    },
    {
      text: "The old lighthouse ____ built more than two hundred years ago.",
      answers: ["was"],
      explanation: "Past simple passive: singular subject + was + built."
    },
    {
      text: "These days most tickets ____ bought online rather than at the station.",
      answers: ["are", "get"],
      explanation: "Present simple passive with a plural subject: are bought."
    },
    {
      text: "The injured player was taken ____ hospital straight after the match.",
      answers: ["to"],
      explanation: "'Take somebody to hospital' — movement towards a place needs 'to'."
    },
    {
      text: "Her new laptop is lighter ____ her old one but twice as powerful.",
      answers: ["than"],
      explanation: "The comparative 'lighter' is followed by 'than'."
    },
    {
      text: "The second film wasn't nearly as funny ____ the first one.",
      answers: ["as"],
      explanation: "'As funny as' completes the comparison of equality."
    },
    {
      text: "City life is getting more and ____ expensive every year.",
      answers: ["more"],
      explanation: "'More and more + adjective' describes a continuing increase."
    },
    {
      text: "Out of the whole family, my uncle tells ____ funniest stories.",
      answers: ["the"],
      explanation: "Superlative 'funniest' requires the article 'the'."
    },
    {
      text: "Could you turn ____ the television? The baby is trying to sleep.",
      answers: ["off", "down"],
      explanation: "'Turn off' means stop it completely; 'turn down' means make it quieter."
    },
    {
      text: "Please fill ____ this form and hand it to the receptionist.",
      answers: ["in", "out"],
      explanation: "'Fill in' (British) or 'fill out' (American) means complete a form."
    },
    {
      text: "I need to give ____ eating so many sweets before summer.",
      answers: ["up"],
      explanation: "'Give up + -ing' means stop doing a habit."
    },
    {
      text: "The plane took ____ twenty minutes late because of fog.",
      answers: ["off"],
      explanation: "'Take off' means leave the ground; a phrasal verb about planes."
    },
    {
      text: "Can you look ____ my goldfish while I'm away next week?",
      answers: ["after"],
      explanation: "'Look after' means take care of somebody or something."
    },
    {
      text: "I grew ____ in a small fishing village on the south coast.",
      answers: ["up"],
      explanation: "'Grow up' means spend your childhood and become an adult."
    },
    {
      text: "We've run ____ of milk again, so I'll pop to the corner shop.",
      answers: ["out"],
      explanation: "'Run out of something' means have none left."
    },
    {
      text: "How ____ luggage are you allowed to take on this airline?",
      answers: ["much"],
      explanation: "'Luggage' is uncountable, so we ask 'how much luggage'."
    },
    {
      text: "There were ____ many people at the sale that the doors had to be closed.",
      answers: ["so"],
      explanation: "'So many + plural noun + that' expresses result."
    },
    {
      text: "Very ____ pupils chose history this year — only six in the whole school.",
      answers: ["few"],
      explanation: "'Few' + plural countable noun means a surprisingly small number."
    },
    {
      text: "____ of the two routes is quicker, the motorway or the coast road?",
      answers: ["which"],
      explanation: "'Which' asks for a choice between two known options."
    },
    {
      text: "We ____ better hurry; the last ferry leaves in fifteen minutes.",
      answers: ["had"],
      explanation: "'Had better' gives urgent advice: we'd better hurry."
    },
    {
      text: "Passengers ____ keep their seatbelts fastened during take-off.",
      answers: ["must", "should"],
      explanation: "'Must' states an official rule; 'should' is a weaker recommendation."
    },
    {
      text: "You ____ have told me it was your birthday — I would have baked a cake!",
      answers: ["should", "could", "might"],
      explanation: "'Should/could/might have + past participle' criticises a missed past action."
    },
    {
      text: "She ____ be French; she was speaking French on the phone just now.",
      answers: ["must", "may", "might", "could"],
      explanation: "'Must' shows strong deduction; 'may/might/could' weaker possibility."
    },
    {
      text: "____ I borrow your charger for half an hour? Mine's at home.",
      answers: ["can", "could", "may", "might"],
      explanation: "'Can/could/may I' politely asks for permission."
    },
    {
      text: "There ____ to be a sweet shop on this corner when I was a child.",
      answers: ["used"],
      explanation: "'There used to be' describes something that existed in the past but not now."
    },
    {
      text: "You'd rather stay in tonight, ____ you?",
      answers: ["wouldn't"],
      explanation: "'You'd rather' contains 'would', so the tag is 'wouldn't you?'."
    },
    {
      text: "I'm not too late for the meeting, ____ I?",
      answers: ["am"],
      explanation: "A negative sentence with 'I'm not' takes the positive tag 'am I?'."
    },
    {
      text: "Everyone enjoyed the show, ____ they?",
      answers: ["didn't"],
      explanation: "'Everyone' + past simple positive takes the tag 'didn't they?'."
    },
    {
      text: "____ the map was twenty years old, it still showed most of the footpaths.",
      answers: ["although", "though", "while"],
      explanation: "'Although/though/while' contrasts the map's age with its usefulness."
    },
    {
      text: "____ the delay, all the passengers stayed remarkably calm.",
      answers: ["despite"],
      explanation: "'Despite + noun' shows the delay didn't affect the passengers' mood."
    },
    {
      text: "The instructions looked simple. ____, building the wardrobe took all day.",
      answers: ["however", "nevertheless", "nonetheless", "unfortunately"],
      explanation: "A contrast adverb such as 'however' links the two sentences."
    },
    {
      text: "I turned the key quietly so ____ not to wake the baby.",
      answers: ["as"],
      explanation: "'So as not to + infinitive' expresses a negative purpose."
    },
    {
      text: "She saved money every month in ____ to buy her first car.",
      answers: ["order"],
      explanation: "'In order to + infinitive' expresses purpose formally."
    },
    {
      text: "My brother taught ____ to juggle by watching online videos.",
      answers: ["himself"],
      explanation: "'Taught himself' — he was both teacher and learner, so a reflexive is needed."
    },
    {
      text: "Help ____ to more salad, everyone — there's plenty in the bowl.",
      answers: ["yourselves", "yourself"],
      explanation: "'Help yourself/yourselves' invites people to take food freely."
    },
    {
      text: "It was ____ noisy in the café that we couldn't hear each other speak.",
      answers: ["so"],
      explanation: "'So + adjective + that' shows the result of the noise."
    },
    {
      text: "I'd never seen ____ tall buildings before my first trip to New York.",
      answers: ["such"],
      explanation: "'Such + adjective + plural noun' (no article) intensifies the noun phrase."
    },
    {
      text: "The coffee was ____ strong for me, so I added some milk.",
      answers: ["too", "very", "quite"],
      explanation: "'Too strong' means more than I like; 'very/quite' also fit the gap grammatically."
    },
    {
      text: "Have we got ____ chairs for twelve guests, or shall I borrow some?",
      answers: ["enough"],
      explanation: "'Enough + plural noun' asks about a sufficient number of chairs."
    },
    {
      text: "The museum is open every day ____ Mondays, when it is closed for cleaning.",
      answers: ["except", "excluding", "besides"],
      explanation: "'Except' introduces the one day that is different from the rest."
    },
    {
      text: "We walked ____ the forest for hours without seeing another person.",
      answers: ["through", "in", "around", "round"],
      explanation: "'Through' describes movement from one side of the forest to the other."
    },
    {
      text: "The children ran ____ the hill and rolled back down, laughing.",
      answers: ["up"],
      explanation: "'Up the hill' describes movement towards the top."
    },
    {
      text: "Our flat is ____ the third floor, so we usually take the stairs.",
      answers: ["on"],
      explanation: "We live 'on' a floor of a building: on the third floor."
    },
    {
      text: "I'll be home ____ six o'clock at the latest, I promise.",
      answers: ["by", "before", "at"],
      explanation: "'By six' means no later than six; 'before/at' also fit the sentence."
    },
    {
      text: "The bakery has been closed ____ the end of last month.",
      answers: ["since"],
      explanation: "'Since + the end of last month' gives the starting point of the closure."
    },
    {
      text: "She translated the letter ____ Italian for her grandmother.",
      answers: ["into"],
      explanation: "'Translate into + language' shows the target language."
    },
    {
      text: "He borrowed twenty euros ____ his flatmate and paid it back on Friday.",
      answers: ["from"],
      explanation: "You borrow something 'from' a person."
    },
    {
      text: "This scarf was knitted ____ hand by my great-aunt.",
      answers: ["by"],
      explanation: "The fixed phrase 'by hand' means without a machine."
    },
    {
      text: "The team was congratulated ____ winning the regional championship.",
      answers: ["on", "for"],
      explanation: "'Congratulate somebody on/for something' is the standard pattern."
    },
    {
      text: "I'm not very fond ____ horror films; they give me nightmares.",
      answers: ["of"],
      explanation: "'Fond of' expresses liking: not very fond of horror films."
    },
    {
      text: "The village is proud ____ its four-hundred-year-old oak tree.",
      answers: ["of"],
      explanation: "'Proud of' introduces the source of pride."
    },
    {
      text: "Are you aware ____ the new rules about parking outside the school?",
      answers: ["of"],
      explanation: "'Aware of' means knowing about something."
    },
    {
      text: "____ idea was it to paint the kitchen bright orange?",
      answers: ["whose"],
      explanation: "'Whose idea was it?' asks which person the idea belonged to."
    },
    {
      text: "____ long did it take you to learn to drive?",
      answers: ["how"],
      explanation: "'How long' asks about the duration of an action."
    },
    {
      text: "____ kind of music does your band play — rock, jazz or pop?",
      answers: ["what", "which"],
      explanation: "'What/which kind of' asks about the type or category."
    },
    {
      text: "There's ____ wrong with the printer; it keeps making a strange noise.",
      answers: ["something"],
      explanation: "'Something wrong with' means an unknown fault exists."
    },
    {
      text: "____ knows the answer, so we'll have to ask the teacher tomorrow.",
      answers: ["nobody"],
      explanation: "'Nobody' means no person and takes a singular verb without another negative."
    },
    {
      text: "You can sit ____ you like; none of the seats are reserved.",
      answers: ["wherever", "anywhere", "where"],
      explanation: "'Wherever/anywhere' means in any place you choose."
    },
    {
      text: "I have been a member of this book club ____ it started in 2020.",
      answers: ["since"],
      explanation: "'Since it started' marks the beginning of my membership."
    },
    {
      text: "It hasn't snowed here ____ years, which makes the children sad.",
      answers: ["for", "in"],
      explanation: "'For years' (or informal 'in years') expresses the long period without snow."
    },
    {
      text: "By the time we arrived, the concert ____ already started.",
      answers: ["had"],
      explanation: "Past perfect: had + started, for the earlier of two past events."
    },
    {
      text: "While I ____ cooking dinner, the lights suddenly went out.",
      answers: ["was"],
      explanation: "Past continuous 'was cooking' sets the background for the sudden event."
    },
    {
      text: "This time next week we ____ be lying on a beach in Croatia.",
      answers: ["will", "should", "might", "may", "could"],
      explanation: "Future continuous: will (or another modal) + be + -ing form."
    },
    {
      text: "The tour guide ____ showed us the palace spoke five languages.",
      answers: ["who", "that"],
      explanation: "'Who/that' is the subject of the clause identifying the guide."
    },
    {
      text: "The photos ____ you posted from the mountains are absolutely stunning.",
      answers: ["which", "that"],
      explanation: "'Which/that' refers to the photos as the object of 'posted'."
    },
    {
      text: "That's the reason ____ I never lend my headphones to anyone.",
      answers: ["why", "that"],
      explanation: "'The reason why/that' introduces an explanation clause."
    },
    {
      text: "If you ____ ice cream in the sun, it melts within minutes.",
      answers: ["leave", "put", "keep"],
      explanation: "Zero conditional with present simple: if you leave it, it melts."
    },
    {
      text: "I'd travel around the world if I ____ enough money.",
      answers: ["had", "earned", "won", "saved"],
      explanation: "Second conditional needs past simple after 'if': if I had enough money."
    },
    {
      text: "Dinner will be ready ____ the time you get home from training.",
      answers: ["by"],
      explanation: "'By the time' means 'not later than the moment when'."
    },
    {
      text: "The castle gardens ____ visited by thousands of tourists every summer.",
      answers: ["are", "get"],
      explanation: "Present simple passive with plural subject: are visited."
    },
    {
      text: "A famous architect has ____ chosen to design the new library.",
      answers: ["been"],
      explanation: "Present perfect passive: has + been + chosen."
    },
    {
      text: "My results were slightly better ____ I had feared, luckily.",
      answers: ["than"],
      explanation: "The comparative 'better' is completed by 'than I had feared'."
    },
    {
      text: "This puzzle is twice ____ hard as the one we did last night.",
      answers: ["as"],
      explanation: "'Twice as + adjective + as' compares by multiplication."
    },
    {
      text: "The longer the meeting went on, ____ more bored everyone became.",
      answers: ["the"],
      explanation: "The 'the + comparative, the + comparative' pattern links two increases."
    },
    {
      text: "She's ____ only person I know who can wiggle her ears.",
      answers: ["the"],
      explanation: "'The only + noun' always takes the definite article."
    },
    {
      text: "What ____ amazing view you get from the top of that tower!",
      answers: ["an"],
      explanation: "Exclamations with singular countable nouns use 'What + a/an': what an amazing view."
    },
    {
      text: "He works as ____ electrician for a big energy company.",
      answers: ["an"],
      explanation: "Jobs need a/an; 'electrician' begins with a vowel sound, so 'an'."
    },
    {
      text: "Almost ____ the shops in the old town close for lunch at one.",
      answers: ["all"],
      explanation: "'Almost all the + plural noun' means nearly one hundred per cent."
    },
    {
      text: "Take ____ jacket with you; the evenings get chilly by the lake.",
      answers: ["a", "your", "this", "that"],
      explanation: "A determiner is needed before 'jacket': a/your/this jacket."
    },
    {
      text: "We haven't got ____ left to drink except tap water.",
      answers: ["anything"],
      explanation: "'Anything' is used after a negative verb: haven't got anything."
    },
    {
      text: "____ wants the last slice of cake? Don't all shout at once!",
      answers: ["who", "anybody", "anyone", "nobody"],
      explanation: "'Who wants...?' asks which person; 'anybody/anyone' also make a natural offer."
    },
    {
      text: "You can't blame ____ for the mistake; it was an accident.",
      answers: ["yourself", "anyone", "anybody", "her", "him", "them", "me", "us"],
      explanation: "An object pronoun or 'yourself' fits: don't blame yourself/anyone for it."
    },
    {
      text: "The twins often finish ____ other's sentences.",
      answers: ["each"],
      explanation: "'Each other' expresses a mutual action between the twins."
    },
    {
      text: "We send ____ another birthday cards every year without fail.",
      answers: ["one"],
      explanation: "'One another' is the reciprocal pronoun, similar to 'each other'."
    },
    {
      text: "The recipe is easy: ____ you need is flour, eggs and a little milk.",
      answers: ["all"],
      explanation: "'All you need is...' means the only things required are these."
    },
    {
      text: "My phone battery died, ____ I couldn't call to say I'd be late.",
      answers: ["so"],
      explanation: "'So' introduces the result: the dead battery caused the missed call."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
