/* PET Prep extra bank: part3 wave 5 */
(function () {
  var BANK = [
    {
      stem: "ENGINE",
      text: "My sister studied for five years to become an ____.",
      answers: ["engineer"],
      explanation: "A person noun is needed after 'an'. 'Engine' becomes 'engineer' with -eer."
    },
    {
      stem: "MEAN",
      text: "I looked up the ____ of the word in an online dictionary.",
      answers: ["meaning"],
      explanation: "A noun is needed after 'the'. 'Mean' becomes 'meaning' with -ing."
    },
    {
      stem: "DENT",
      text: "The ____ told me to brush my teeth twice a day.",
      answers: ["dentist"],
      explanation: "A person noun is needed after 'The'. The root gives 'dentist' with -ist."
    },
    {
      stem: "WEIGH",
      text: "This suitcase is heavy — I hope it isn't over the ____ limit.",
      answers: ["weight"],
      explanation: "A noun is needed before 'limit'. The noun form of 'weigh' is 'weight'."
    },
    {
      stem: "ENTERTAIN",
      text: "The hotel offers evening ____ , including live music and quizzes.",
      answers: ["entertainment"],
      explanation: "A noun is needed after 'evening'. 'Entertain' becomes 'entertainment'."
    },
    {
      stem: "TRUTH",
      text: "To be ____ , I didn't enjoy the book as much as the film.",
      answers: ["truthful"],
      explanation: "An adjective is needed after 'to be'. 'Truth' becomes 'truthful' with -ful."
    },
    {
      stem: "MIST",
      text: "I took the wrong bus by ____ and ended up at the harbour.",
      answers: ["mistake"],
      explanation: "A noun is needed after 'by'. The phrase 'by mistake' means accidentally."
    },
    {
      stem: "SUIT",
      text: "Those thin shoes are ____ for walking in the mountains.",
      answers: ["unsuitable"],
      explanation: "A negative adjective is needed: un- + suit + -able = 'unsuitable'."
    },
    {
      stem: "BLOOD",
      text: "My hands were cold, wet and ____ after I fell off my bike.",
      answers: ["bloody"],
      explanation: "An adjective is needed after 'and'. 'Blood' becomes 'bloody' with -y."
    },
    {
      stem: "RECEPTION",
      text: "The ____ at the front desk gave us a map of the city.",
      answers: ["receptionist"],
      explanation: "A person noun is needed after 'The'. 'Reception' becomes 'receptionist'."
    },
    {
      stem: "LONELY",
      text: "Some old people suffer from ____ because family visits are rare.",
      answers: ["loneliness"],
      explanation: "A noun is needed after 'from'. 'Lonely' becomes 'loneliness' with -ness."
    },
    {
      stem: "PROMOTE",
      text: "After her ____ , my mother became head of the whole department.",
      answers: ["promotion"],
      explanation: "A noun is needed after 'her'. 'Promote' becomes 'promotion' with -ion."
    },
    {
      stem: "ABLE",
      text: "Her ____ to remember names makes her a great tour guide.",
      answers: ["ability"],
      explanation: "A noun is needed after 'Her'. 'Able' becomes 'ability' with -ity."
    },
    {
      stem: "DUST",
      text: "The books in the attic were old, ____ and full of spiders.",
      answers: ["dusty"],
      explanation: "An adjective is needed in the list. 'Dust' becomes 'dusty' with -y."
    },
    {
      stem: "ACCURATE",
      text: "Check your answers carefully, because ____ costs marks in this test.",
      answers: ["inaccuracy"],
      explanation: "A negative noun is needed: in- + accuracy = 'inaccuracy', being wrong."
    },
    {
      stem: "SHOCK",
      text: "The news of the flood was deeply ____ for the whole country.",
      answers: ["shocking"],
      explanation: "The news causes the feeling, so we use the -ing adjective 'shocking'."
    },
    {
      stem: "OBVIOUS",
      text: "____ , you will need a visa before you travel to that country.",
      answers: ["Obviously", "obviously"],
      explanation: "A sentence adverb is needed at the start. Add -ly to 'obvious'."
    },
    {
      stem: "FRIEND",
      text: "Their ____ began at primary school and has lasted forty years.",
      answers: ["friendship"],
      explanation: "A noun is needed after 'Their'. 'Friend' becomes 'friendship' with -ship."
    },
    {
      stem: "CHEM",
      text: "You can buy this medicine at any ____ without a prescription.",
      answers: ["chemist", "chemists"],
      explanation: "A noun is needed after 'any'. The root gives 'chemist', the shop or person."
    },
    {
      stem: "DRAMA",
      text: "The rescue of the climbers was the most ____ moment of the year.",
      answers: ["dramatic"],
      explanation: "An adjective is needed after 'the most'. 'Drama' becomes 'dramatic'."
    },
    {
      stem: "PROBABLE",
      text: "We will ____ spend the summer at my aunt's house by the sea.",
      answers: ["probably"],
      explanation: "An adverb is needed after 'will'. 'Probable' becomes 'probably'."
    },
    {
      stem: "DIET",
      text: "The hospital ____ planned meals for patients with allergies.",
      answers: ["dietician", "dietitian"],
      explanation: "A person noun is needed after 'The hospital'. 'Diet' becomes 'dietician'."
    },
    {
      stem: "COLLECT",
      text: "My uncle is a serious stamp ____ with albums from fifty countries.",
      answers: ["collector"],
      explanation: "A person noun is needed after 'stamp'. 'Collect' becomes 'collector' with -or."
    },
    {
      stem: "PATIENT",
      text: "Learning an instrument takes years of practice and great ____.",
      answers: ["patience"],
      explanation: "A noun is needed after 'great'. 'Patient' becomes 'patience'."
    },
    {
      stem: "FREE",
      text: "The prisoners finally won their ____ after ten long years.",
      answers: ["freedom"],
      explanation: "A noun is needed after 'their'. 'Free' becomes 'freedom' with -dom."
    },
    {
      stem: "LAW",
      text: "The family ____ helped us write my grandfather's will.",
      answers: ["lawyer"],
      explanation: "A person noun is needed after 'family'. 'Law' becomes 'lawyer' with -yer."
    },
    {
      stem: "SURPRISE",
      text: "____ , the smallest player scored three goals in the final.",
      answers: ["Surprisingly", "surprisingly"],
      explanation: "A sentence adverb is needed at the start: 'surprisingly'."
    },
    {
      stem: "ADVENTURE",
      text: "My grandmother is very ____ — last year she tried skydiving.",
      answers: ["adventurous"],
      explanation: "An adjective is needed after 'very'. 'Adventure' becomes 'adventurous'."
    },
    {
      stem: "DIFFICULT",
      text: "She passed her driving test without any ____ at all.",
      answers: ["difficulty"],
      explanation: "A noun is needed after 'any'. 'Difficult' becomes 'difficulty' with -y."
    },
    {
      stem: "LOCATE",
      text: "The campsite's ____ next to the river makes it popular with families.",
      answers: ["location"],
      explanation: "A noun is needed after the possessive. 'Locate' becomes 'location' with -ion."
    },
    {
      stem: "GUILT",
      text: "The boy felt ____ about hiding his brother's football boots.",
      answers: ["guilty"],
      explanation: "An adjective is needed after 'felt'. 'Guilt' becomes 'guilty' with -y."
    },
    {
      stem: "PRESENT",
      text: "Each student must give a ten-minute ____ about their project.",
      answers: ["presentation"],
      explanation: "A noun is needed after 'ten-minute'. 'Present' becomes 'presentation'."
    },
    {
      stem: "OIL",
      text: "The mechanic's hands were black and ____ after fixing the engine.",
      answers: ["oily"],
      explanation: "An adjective is needed after 'and'. 'Oil' becomes 'oily' with -y."
    },
    {
      stem: "RESIDE",
      text: "Only ____ of the building may park in the underground garage.",
      answers: ["residents"],
      explanation: "A plural person noun is needed. 'Reside' becomes 'residents' with -ent."
    },
    {
      stem: "STRESS",
      text: "Yoga helps many people feel calm and less ____ after work.",
      answers: ["stressed"],
      explanation: "The people feel the pressure, so we use the -ed adjective 'stressed'."
    },
    {
      stem: "IMPORT",
      text: "Most of the fruit in this supermarket is ____ from warmer countries.",
      answers: ["imported"],
      explanation: "The -ed form is needed after 'is' to make the passive: 'imported'."
    },
    {
      stem: "EXIST",
      text: "Do you believe in the ____ of life on other planets?",
      answers: ["existence"],
      explanation: "A noun is needed after 'the'. 'Exist' becomes 'existence' with -ence."
    },
    {
      stem: "CLEAR",
      text: "Speak ____ into the microphone so everyone can hear you.",
      answers: ["clearly"],
      explanation: "An adverb is needed to describe how to speak. Add -ly to 'clear'."
    },
    {
      stem: "ASTONISH",
      text: "It is ____ how quickly the little village has grown into a town.",
      answers: ["astonishing"],
      explanation: "The fact causes the feeling, so we use the -ing adjective 'astonishing'."
    },
    {
      stem: "MILK",
      text: "I like my coffee ____ , with two spoons of sugar.",
      answers: ["milky"],
      explanation: "An adjective is needed after 'coffee'. 'Milk' becomes 'milky' with -y."
    },
    {
      stem: "PERMIT",
      text: "You need written ____ from a parent to join the diving course.",
      answers: ["permission"],
      explanation: "A noun is needed after 'written'. 'Permit' becomes 'permission'."
    },
    {
      stem: "HEALTH",
      text: "Eating too many sweets is ____ for your teeth.",
      answers: ["unhealthy"],
      explanation: "A negative adjective is needed: un- + health + -y = 'unhealthy'."
    },
    {
      stem: "ICE",
      text: "Drive slowly tonight because the roads will be ____.",
      answers: ["icy"],
      explanation: "An adjective is needed after 'will be'. 'Ice' becomes 'icy' with -y."
    },
    {
      stem: "SUPPORT",
      text: "Thousands of ____ travelled north to watch the away match.",
      answers: ["supporters"],
      explanation: "A plural person noun is needed. 'Support' becomes 'supporters' with -er."
    },
    {
      stem: "REALITY",
      text: "Be ____ — you cannot learn a language in only one week.",
      answers: ["realistic"],
      explanation: "An adjective is needed after 'Be'. 'Reality' relates to 'realistic'."
    },
    {
      stem: "VOLUNTEER",
      text: "She does ____ work at the animal shelter every weekend.",
      answers: ["voluntary"],
      explanation: "An adjective is needed before 'work'. 'Volunteer' relates to 'voluntary'."
    },
    {
      stem: "WOOL",
      text: "She knitted me a thick ____ scarf for the winter.",
      answers: ["woollen", "woolen", "woolly"],
      explanation: "An adjective is needed before 'scarf'. 'Wool' becomes 'woollen'."
    },
    {
      stem: "ENTHUSIASM",
      text: "The new coach is young, friendly and extremely ____.",
      answers: ["enthusiastic"],
      explanation: "An adjective is needed after 'extremely'. 'Enthusiasm' becomes 'enthusiastic'."
    },
    {
      stem: "REPEAT",
      text: "Factory work can be boring because the tasks are so ____.",
      answers: ["repetitive"],
      explanation: "An adjective is needed after 'so'. 'Repeat' becomes 'repetitive' with -ive."
    },
    {
      stem: "HARM",
      text: "Don't worry about the spider — it is completely ____.",
      answers: ["harmless"],
      explanation: "An adjective meaning 'not dangerous' is needed: 'harm' + -less = 'harmless'."
    },
    {
      stem: "INSTRUCT",
      text: "Read the ____ on the packet before you take the medicine.",
      answers: ["instructions"],
      explanation: "A plural noun is needed after 'the'. 'Instruct' becomes 'instructions'."
    },
    {
      stem: "WORRY",
      text: "It has not rained for two months, which is ____ for the farmers.",
      answers: ["worrying"],
      explanation: "The situation causes the feeling, so we use the -ing adjective 'worrying'."
    },
    {
      stem: "NOVEL",
      text: "The prize went to a young ____ for her first book.",
      answers: ["novelist"],
      explanation: "A person noun is needed after 'a young'. 'Novel' becomes 'novelist' with -ist."
    },
    {
      stem: "SPACE",
      text: "The kitchen in our new flat is bright and surprisingly ____.",
      answers: ["spacious"],
      explanation: "An adjective is needed after 'surprisingly'. 'Space' becomes 'spacious'."
    },
    {
      stem: "TREAT",
      text: "The new ____ for this illness has helped thousands of patients.",
      answers: ["treatment"],
      explanation: "A noun is needed after 'The new'. 'Treat' becomes 'treatment' with -ment."
    },
    {
      stem: "PHYSICS",
      text: "A famous ____ gave a talk at our school about black holes.",
      answers: ["physicist"],
      explanation: "A person noun is needed after 'A famous'. 'Physics' becomes 'physicist'."
    },
    {
      stem: "GRACE",
      text: "The dancers moved ____ across the stage like swans.",
      answers: ["gracefully"],
      explanation: "An adverb is needed to describe how they moved. 'Grace' becomes 'gracefully'."
    },
    {
      stem: "TOUCH",
      text: "The old man's speech at the wedding was really ____.",
      answers: ["touching"],
      explanation: "The speech causes the emotion, so we use the -ing adjective 'touching'."
    },
    {
      stem: "MEDICINE",
      text: "Some plants in this forest have ____ uses known for centuries.",
      answers: ["medicinal", "medical"],
      explanation: "An adjective is needed before 'uses'. 'Medicine' becomes 'medicinal'."
    },
    {
      stem: "BUSY",
      text: "My father runs a small ____ selling bicycles and spare parts.",
      answers: ["business"],
      explanation: "A noun is needed after 'a small'. 'Busy' is the root of 'business'."
    },
    {
      stem: "DANGER",
      text: "The old rope bridge swung ____ in the strong wind.",
      answers: ["dangerously"],
      explanation: "An adverb is needed to describe how it swung. 'Danger' becomes 'dangerously'."
    },
    {
      stem: "CONVENIENT",
      text: "Living far from the station is a real ____ in the winter.",
      answers: ["inconvenience"],
      explanation: "A negative noun is needed: in- + convenience = 'inconvenience'."
    },
    {
      stem: "TIGHT",
      text: "Hold the rope ____ and don't look down.",
      answers: ["tightly"],
      explanation: "An adverb is needed to describe how to hold. Add -ly to 'tight'."
    },
    {
      stem: "ECOLOGY",
      text: "Cycling to work is cheap and much more ____ than driving.",
      answers: ["ecological"],
      explanation: "An adjective is needed after 'more'. 'Ecology' becomes 'ecological'."
    },
    {
      stem: "ARRIVE",
      text: "We were tired when we finally ____ at the mountain hut after dark.",
      answers: ["arrived"],
      explanation: "The past tense verb is needed after 'finally': 'arrived'."
    },
    {
      stem: "PRICE",
      text: "The necklace was ____ , so I looked for something cheaper.",
      answers: ["pricey", "priceless"],
      explanation: "An adjective is needed after 'was'. 'Price' becomes 'pricey', meaning expensive."
    },
    {
      stem: "OFFEND",
      text: "His joke was rather ____ and several guests left the party early.",
      answers: ["offensive"],
      explanation: "An adjective is needed after 'rather'. 'Offend' becomes 'offensive' with -ive."
    },
    {
      stem: "GLOBE",
      text: "____ warming is causing the ice at the poles to melt.",
      answers: ["Global", "global"],
      explanation: "An adjective is needed before 'warming'. 'Globe' becomes 'global' with -al."
    },
    {
      stem: "DECORATE",
      text: "We plan to ____ the living room walls before the party.",
      answers: ["redecorate"],
      explanation: "A verb with re- is needed: 'redecorate', to paint the room again."
    },
    {
      stem: "THREAT",
      text: "The dark clouds over the sea looked cold and ____.",
      answers: ["threatening"],
      explanation: "The clouds cause the feeling of danger: the -ing adjective 'threatening'."
    },
    {
      stem: "ATTRACT",
      text: "The old harbour is the most ____ part of the whole city.",
      answers: ["attractive"],
      explanation: "An adjective is needed after 'the most'. 'Attract' becomes 'attractive'."
    },
    {
      stem: "ABSENT",
      text: "The teacher asked about my ____ from Monday's lesson.",
      answers: ["absence"],
      explanation: "A noun is needed after 'my'. 'Absent' becomes 'absence'."
    },
    {
      stem: "SHADOW",
      text: "We rested in a cool, ____ corner of the garden.",
      answers: ["shadowy", "shady"],
      explanation: "An adjective is needed before 'corner'. 'Shadow' becomes 'shadowy'."
    },
    {
      stem: "PROFIT",
      text: "The little bookshop is finally ____ after three hard years.",
      answers: ["profitable"],
      explanation: "An adjective is needed after 'finally'. 'Profit' becomes 'profitable' with -able."
    },
    {
      stem: "STORE",
      text: "There is not enough ____ space for all our winter clothes.",
      answers: ["storage"],
      explanation: "A noun is needed before 'space'. 'Store' becomes 'storage' with -age."
    },
    {
      stem: "WRITE",
      text: "Please send a ____ request to the manager, not just a phone call.",
      answers: ["written"],
      explanation: "The -en adjective is needed before 'request': 'written', on paper."
    },
    {
      stem: "ROUND",
      text: "The children sat ____ the campfire listening to ghost stories.",
      answers: ["around"],
      explanation: "The preposition 'around' is needed, formed from 'round' with the prefix a-."
    },
    {
      stem: "APPRECIATE",
      text: "We sent flowers to show our ____ of the nurses' hard work.",
      answers: ["appreciation"],
      explanation: "A noun is needed after 'our'. 'Appreciate' becomes 'appreciation'."
    },
    {
      stem: "CLOSE",
      text: "Look ____ at the photo and you can see a tiny boat on the lake.",
      answers: ["closely"],
      explanation: "An adverb is needed after 'Look'. Add -ly to 'close' to make 'closely'."
    },
    {
      stem: "IDEA",
      text: "The weather was ____ for sailing — sunny with a light wind.",
      answers: ["ideal"],
      explanation: "An adjective is needed after 'was'. 'Idea' becomes 'ideal' with -l."
    },
    {
      stem: "REACT",
      text: "Her first ____ to the prize was to phone her parents.",
      answers: ["reaction"],
      explanation: "A noun is needed after 'first'. 'React' becomes 'reaction' with -ion."
    },
    {
      stem: "FAVOUR",
      text: "Chocolate is still the nation's ____ ice-cream flavour.",
      answers: ["favourite", "favorite"],
      explanation: "An adjective is needed after the possessive. 'Favour' becomes 'favourite'."
    },
    {
      stem: "COMPLICATE",
      text: "The rules of this card game are too ____ for young children.",
      answers: ["complicated"],
      explanation: "The -ed adjective is needed after 'too': 'complicated', hard to understand."
    },
    {
      stem: "HOME",
      text: "The charity cooks hot meals for ____ people in the city centre.",
      answers: ["homeless"],
      explanation: "An adjective is needed before 'people'. 'Home' becomes 'homeless' with -less."
    },
    {
      stem: "OPTION",
      text: "The school trip is ____ , so you can stay behind if you prefer.",
      answers: ["optional"],
      explanation: "An adjective is needed after 'is'. 'Option' becomes 'optional' with -al."
    },
    {
      stem: "BURGLE",
      text: "The ____ climbed in through the bathroom window while we slept.",
      answers: ["burglar"],
      explanation: "A person noun is needed after 'The'. 'Burgle' becomes 'burglar' with -ar."
    },
    {
      stem: "HURRY",
      text: "He packed his bag ____ and forgot his toothbrush.",
      answers: ["hurriedly"],
      explanation: "An adverb is needed to describe how he packed. 'Hurry' becomes 'hurriedly'."
    },
    {
      stem: "ACCOMMODATE",
      text: "Cheap student ____ is hard to find in this city.",
      answers: ["accommodation"],
      explanation: "A noun is needed after 'student'. 'Accommodate' becomes 'accommodation'."
    },
    {
      stem: "SENSE",
      text: "Wearing a helmet on a bike is the only ____ choice.",
      answers: ["sensible"],
      explanation: "An adjective is needed before 'choice'. 'Sense' becomes 'sensible' with -ible."
    },
    {
      stem: "PAIN",
      text: "My shoulder has been really ____ since I fell during the match.",
      answers: ["painful"],
      explanation: "An adjective is needed after 'really'. 'Pain' becomes 'painful' with -ful."
    },
    {
      stem: "ENVIRONMENT",
      text: "The company says its new bottles are more ____ friendly.",
      answers: ["environmentally"],
      explanation: "An adverb is needed before 'friendly'. 'Environment' becomes 'environmentally'."
    },
    {
      stem: "KING",
      text: "Long ago, this whole valley belonged to a tiny mountain ____.",
      answers: ["kingdom"],
      explanation: "A noun is needed after 'mountain'. 'King' becomes 'kingdom' with -dom."
    },
    {
      stem: "CRIME",
      text: "The police caught the ____ two days after the robbery.",
      answers: ["criminal", "criminals"],
      explanation: "A person noun is needed after 'the'. 'Crime' becomes 'criminal' with -inal."
    },
    {
      stem: "MODEST",
      text: "Despite all her prizes, the scientist spoke with great ____.",
      answers: ["modesty"],
      explanation: "A noun is needed after 'great'. 'Modest' becomes 'modesty' with -y."
    },
    {
      stem: "GENEROUS",
      text: "Thanks to the ____ of local shops, every child received a gift.",
      answers: ["generosity"],
      explanation: "A noun is needed after 'the'. 'Generous' becomes 'generosity' with -ity."
    },
    {
      stem: "EXPLODE",
      text: "The ____ at the fireworks factory could be heard ten miles away.",
      answers: ["explosion"],
      explanation: "A noun is needed after 'The'. 'Explode' becomes 'explosion' with -sion."
    },
    {
      stem: "FLAVOUR",
      text: "This soup is a bit ____ — could you pass the pepper?",
      answers: ["flavourless", "flavorless"],
      explanation: "An adjective meaning 'without taste' is needed: 'flavour' + -less."
    },
    {
      stem: "PUBLISH",
      text: "The ____ printed five thousand copies of her first novel.",
      answers: ["publisher", "publishers"],
      explanation: "A person noun is needed after 'The'. 'Publish' becomes 'publisher' with -er."
    },
    {
      stem: "HUNGER",
      text: "The walkers ate ____ after eight hours on the hills.",
      answers: ["hungrily"],
      explanation: "An adverb is needed to describe how they ate. 'Hunger' becomes 'hungrily'."
    },
    {
      stem: "MAGIC",
      text: "The ____ pulled a rabbit out of his hat at the children's party.",
      answers: ["magician"],
      explanation: "A person noun is needed after 'The'. 'Magic' becomes 'magician' with -ian."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part3 = QUESTIONS.part3.concat(BANK);
})();
