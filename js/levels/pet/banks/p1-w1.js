/* PET Prep extra bank: part1 wave 1 — Travel, Holidays, Food, Shopping */
(function () {
  var BANK = [
    /* ---------- Travel & Transport ---------- */
    {
      text: "The plane finally ____ off two hours late because of the fog.",
      options: ["took", "got", "set", "put"],
      answer: 0,
      explanation: "'Take off' means to leave the ground. 'Set off' means to start a journey by land, and 'got off' and 'put off' do not describe a plane leaving the ground."
    },
    {
      text: "You should ____ your hotel room online before you travel.",
      options: ["order", "book", "hire", "keep"],
      answer: 1,
      explanation: "'Book' means to reserve a room in advance. You 'order' food, 'hire' a car or equipment, and 'keep' means to not give something back."
    },
    {
      text: "We ____ off early in the morning to avoid the heavy traffic.",
      options: ["moved", "went", "set", "took"],
      answer: 2,
      explanation: "'Set off' means to begin a journey. 'Went off' means exploded or rang, 'moved off' is unusual here, and 'took off' is used for planes."
    },
    {
      text: "How long does it ____ to get from the airport to the city centre?",
      options: ["spend", "last", "need", "take"],
      answer: 3,
      explanation: "'It takes + time' is the fixed pattern for duration. People 'spend' time, events 'last', and 'need' does not fit with 'it' here."
    },
    {
      text: "The hotel is within walking ____ of the beach.",
      options: ["distance", "length", "way", "space"],
      answer: 0,
      explanation: "'Within walking distance' is the set phrase. 'Way', 'length' and 'space' do not form this expression."
    },
    {
      text: "We got completely ____ trying to find the museum without a map.",
      options: ["missed", "lost", "late", "wrong"],
      answer: 1,
      explanation: "'Get lost' means to lose your way. 'Missed' and 'wrong' don't combine with 'get' in this meaning, and 'late' would not fit 'completely'."
    },
    {
      text: "The ticket ____ forty euros if you buy it in advance.",
      options: ["pays", "charges", "costs", "spends"],
      answer: 2,
      explanation: "Things 'cost' money. People 'pay' or 'spend' money, and companies 'charge' customers — a ticket cannot do these things."
    },
    {
      text: "You must ____ in at the airport at least two hours before your flight.",
      options: ["sign", "fill", "log", "check"],
      answer: 3,
      explanation: "'Check in' means to register at an airport or hotel. 'Sign in' and 'log in' are for buildings or computers, and 'fill in' is for forms."
    },
    {
      text: "Hurry up, or we'll ____ the last train home!",
      options: ["miss", "lose", "fail", "drop"],
      answer: 0,
      explanation: "'Miss a train' means to arrive too late to catch it. 'Lose', 'fail' and 'drop' do not collocate with 'train' in this meaning."
    },
    {
      text: "The ____ from London to Paris takes about two hours by train.",
      options: ["travel", "journey", "voyage", "sightseeing"],
      answer: 1,
      explanation: "'Journey' is the countable noun for travelling from one place to another. 'Travel' is uncountable, a 'voyage' is by sea, and 'sightseeing' is visiting attractions."
    },
    {
      text: "Our flight was ____ for three hours because of a technical problem.",
      options: ["expected", "waited", "delayed", "remained"],
      answer: 2,
      explanation: "'Delayed' means made late. 'Waited' and 'remained' are not used in the passive like this, and 'expected' doesn't describe lateness."
    },
    {
      text: "The train to Manchester leaves from ____ four in ten minutes.",
      options: ["stage", "stop", "channel", "platform"],
      answer: 3,
      explanation: "Trains leave from a 'platform'. A 'stage' is in a theatre, a 'channel' is for TV or water, and a 'stop' is for buses."
    },
    {
      text: "The beach was really ____ , so we looked for a quieter spot.",
      options: ["crowded", "filled", "complete", "occupied"],
      answer: 0,
      explanation: "'Crowded' means full of people. 'Filled' needs 'with', 'complete' means finished, and 'occupied' describes a seat or room, not a beach."
    },
    {
      text: "We decided to ____ a car so we could explore the whole island.",
      options: ["lend", "hire", "borrow", "let"],
      answer: 1,
      explanation: "'Hire' means to pay to use something for a short time. 'Lend' is giving, 'borrow' is taking without paying, and 'let' is renting out property."
    },
    {
      text: "You can buy a ticket from the driver when you ____ on the bus.",
      options: ["go", "come", "get", "take"],
      answer: 2,
      explanation: "'Get on' is the phrasal verb for boarding a bus. 'Go on' means continue, and 'come on' and 'take on' don't mean boarding."
    },
    {
      text: "My uncle kindly offered to ____ us up from the station.",
      options: ["take", "bring", "catch", "pick"],
      answer: 3,
      explanation: "'Pick somebody up' means to collect them in a car. 'Take up', 'bring up' and 'catch up' have completely different meanings."
    },
    {
      text: "We all went to the airport to ____ my sister off.",
      options: ["see", "watch", "look", "wave"],
      answer: 0,
      explanation: "'See somebody off' means to say goodbye at their departure point. 'Watch off', 'look off' and 'wave off'... only 'see off' is the standard phrasal verb here."
    },
    {
      text: "Have you ever travelled ____ completely on your own?",
      options: ["foreign", "abroad", "external", "apart"],
      answer: 1,
      explanation: "'Abroad' is an adverb meaning in or to another country. 'Foreign' and 'external' are adjectives and need a noun, and 'apart' means separated."
    },
    {
      text: "From our balcony we had a wonderful ____ of the mountains.",
      options: ["sight", "scene", "view", "look"],
      answer: 2,
      explanation: "You have a 'view' of something from a place. 'Sight' is the ability to see or a famous place, a 'scene' is part of a film or event, and 'look' doesn't fit with 'of the mountains'."
    },
    {
      text: "What time does your train ____ in? I'll come and meet you.",
      options: ["turn", "reach", "arrive", "get"],
      answer: 3,
      explanation: "'Get in' means to arrive (for trains and flights). 'Reach' and 'arrive' cannot be followed by 'in' alone here, and 'turn in' means go to bed."
    },
    {
      text: "I bought a small ____ to remember our trip to Kyoto.",
      options: ["souvenir", "reminder", "memory", "monument"],
      answer: 0,
      explanation: "A 'souvenir' is an object you buy to remember a place. A 'memory' is in your mind, a 'reminder' helps you not forget a task, and a 'monument' is a large public structure."
    },
    {
      text: "Surprisingly, the ferry left exactly ____ time.",
      options: ["in", "on", "at", "by"],
      answer: 1,
      explanation: "'On time' means at the scheduled time. 'In time' means early enough, and 'at time' and 'by time' are not correct phrases."
    },
    {
      text: "It can be hard to find cheap ____ in the city centre in summer.",
      options: ["habitation", "residence", "accommodation", "household"],
      answer: 2,
      explanation: "'Accommodation' means somewhere to stay. 'Habitation' and 'residence' are formal words for living somewhere permanently, and a 'household' is the people in a home."
    },
    {
      text: "We had to leave the party early to ____ our flight.",
      options: ["hold", "grab", "pick", "catch"],
      answer: 3,
      explanation: "'Catch a flight' means to be in time for it. 'Hold', 'grab' and 'pick' do not collocate with 'flight' in this meaning."
    },
    {
      text: "The Eiffel Tower is one of the most famous ____ in Paris.",
      options: ["sights", "views", "scenes", "looks"],
      answer: 0,
      explanation: "'Sights' are famous places tourists visit. 'Views' are what you see from a place, 'scenes' are parts of films, and 'looks' means appearance."
    },
    /* ---------- Holidays & Places ---------- */
    {
      text: "It was far too hot to lie on the sand and ____ all afternoon.",
      options: ["sunburn", "sunbathe", "sunshine", "sunset"],
      answer: 1,
      explanation: "'Sunbathe' is the verb meaning to lie in the sun. 'Sunburn', 'sunshine' and 'sunset' are nouns, not verbs."
    },
    {
      text: "I'm really looking forward to ____ you again next month.",
      options: ["see", "saw", "seeing", "be seen"],
      answer: 2,
      explanation: "'Look forward to' is followed by the -ing form because 'to' is a preposition here. The bare infinitive 'see', past 'saw' and passive 'be seen' are all wrong."
    },
    {
      text: "Benidorm is a popular seaside ____ on the Spanish coast.",
      options: ["site", "station", "court", "resort"],
      answer: 3,
      explanation: "A 'resort' is a town where people go on holiday. A 'station' is for trains, a 'court' is for sport or law, and a 'site' is a location for building or camping."
    },
    {
      text: "The ____ in the Alps is absolutely breathtaking in spring.",
      options: ["scenery", "view", "nature", "environment"],
      answer: 0,
      explanation: "'Scenery' describes the natural beauty of an area. 'Nature' and 'environment' are more general concepts, and a 'view' is seen from one particular place."
    },
    {
      text: "Every August my family and I ____ camping by the lake.",
      options: ["do", "go", "make", "take"],
      answer: 1,
      explanation: "'Go camping' is the standard pattern with activities (go swimming, go fishing). 'Do', 'make' and 'take' are not used with camping."
    },
    {
      text: "If the weather is nice tomorrow, we ____ to the beach.",
      options: ["went", "would go", "will go", "had gone"],
      answer: 2,
      explanation: "First conditional: 'if + present, will + infinitive'. 'Would go' belongs to the second conditional, and 'went' and 'had gone' are past forms."
    },
    {
      text: "We booked a ____ holiday that included flights, hotel and all meals.",
      options: ["packet", "packed", "parcel", "package"],
      answer: 3,
      explanation: "A 'package holiday' includes everything in one price. A 'packet' contains food, a 'parcel' is sent by post, and 'packed' means full or crowded."
    },
    {
      text: "We asked a ____ person for directions to the castle.",
      options: ["local", "near", "close", "natural"],
      answer: 0,
      explanation: "A 'local' person lives in that area. 'Near' and 'close' describe distance, not people from an area, and 'natural' means from nature."
    },
    {
      text: "We quickly ____ down the tent before the storm arrived.",
      options: ["put", "took", "got", "set"],
      answer: 1,
      explanation: "'Take down' a tent means to remove it. 'Put down' means place on the ground, 'get down' means descend, and 'set down' doesn't fit tents."
    },
    {
      text: "According to the ____ , the museum is closed on Mondays.",
      options: ["notebook", "handbook", "guidebook", "textbook"],
      answer: 2,
      explanation: "A 'guidebook' gives tourist information. A 'handbook' gives instructions, a 'notebook' is for your own notes, and a 'textbook' is for studying."
    },
    {
      text: "We had to ____ for nearly an hour to get into the exhibition.",
      options: ["line", "order", "row", "queue"],
      answer: 3,
      explanation: "'Queue' is the verb for waiting in a line (British English). 'Line' needs 'up', 'row' is a noun for seats, and 'order' means to request something."
    },
    {
      text: "It took us three hours to ____ to the top of the hill.",
      options: ["climb", "rise", "raise", "lift"],
      answer: 0,
      explanation: "People 'climb' to the top of hills. 'Rise' is for the sun or prices, and 'raise' and 'lift' need an object that you move upwards."
    },
    {
      text: "The little village is ____ by beautiful green hills.",
      options: ["circled", "surrounded", "covered", "closed"],
      answer: 1,
      explanation: "'Surrounded by' means having something all around. 'Circled' means drawn around, 'covered' means on top of, and 'closed' means not open."
    },
    {
      text: "Our school is organising a day ____ to the science museum.",
      options: ["travel", "voyage", "trip", "crossing"],
      answer: 2,
      explanation: "A 'day trip' is a short visit somewhere. 'Travel' is uncountable, a 'voyage' is a long sea journey, and a 'crossing' is a journey over water or a road."
    },
    {
      text: "A ____ ticket is usually cheaper than buying two singles.",
      options: ["back", "double", "circle", "return"],
      answer: 3,
      explanation: "A 'return' ticket covers travel there and back. 'Double', 'circle' and 'back' are not used for this type of ticket."
    },
    {
      text: "My grandparents live ____ the countryside, far from any town.",
      options: ["in", "on", "at", "by"],
      answer: 0,
      explanation: "We say 'in the countryside'. 'On', 'at' and 'by' are not used with 'the countryside' in this meaning."
    },
    {
      text: "The old harbour is really worth ____ if you have some free time.",
      options: ["to visit", "visiting", "visit", "visited"],
      answer: 1,
      explanation: "'Worth' is followed by the -ing form. The infinitive 'to visit', bare form 'visit' and past participle 'visited' are all incorrect after 'worth'."
    },
    {
      text: "This is the first time I ____ to Japan, and I love it already.",
      options: ["was", "am", "have been", "had been"],
      answer: 2,
      explanation: "'It's the first time + present perfect' is the fixed pattern. 'Was' and 'had been' are past forms, and 'am' is not used in this structure."
    },
    {
      text: "Marco suggested ____ the cathedral early to avoid the crowds.",
      options: ["visited", "to visit", "visit", "visiting"],
      answer: 3,
      explanation: "'Suggest' is followed by the -ing form, not the infinitive. 'To visit', 'visit' and 'visited' do not follow 'suggest' correctly."
    },
    {
      text: "You need to show your passport when you cross the ____ .",
      options: ["border", "edge", "limit", "line"],
      answer: 0,
      explanation: "A 'border' separates two countries. A 'limit' is a maximum, an 'edge' is the side of an object, and a 'line' is too general here."
    },
    {
      text: "It took me a while to get ____ to driving on the left.",
      options: ["use", "used", "using", "usual"],
      answer: 1,
      explanation: "'Get used to + -ing' means to become familiar with. 'Use', 'using' and 'usual' cannot follow 'get' in this pattern."
    },
    {
      text: "It was ____ a beautiful beach that we stayed there all day.",
      options: ["very", "so", "such", "too"],
      answer: 2,
      explanation: "'Such + a + adjective + noun' is correct. 'So', 'very' and 'too' cannot come before 'a beautiful beach' in this structure."
    },
    {
      text: "____ it was raining heavily, we still enjoyed the coastal walk.",
      options: ["Because", "Despite", "However", "Although"],
      answer: 3,
      explanation: "'Although' introduces a contrast clause with a subject and verb. 'Despite' needs a noun or -ing form, 'however' joins two sentences, and 'because' gives a reason, not a contrast."
    },
    {
      text: "We'll have the picnic outside ____ it gets too cold this evening.",
      options: ["unless", "if", "although", "in case"],
      answer: 0,
      explanation: "'Unless' means 'if not' — we'll eat outside if it does NOT get cold. 'If' would give the opposite meaning, and 'although' and 'in case' don't express this condition."
    },
    {
      text: "We finally arrived ____ Paris late in the evening.",
      options: ["at", "in", "to", "on"],
      answer: 1,
      explanation: "'Arrive in' is used with cities and countries. 'Arrive at' is for buildings, and 'arrive to' and 'arrive on' are incorrect."
    },
    /* ---------- Food & Restaurants ---------- */
    {
      text: "Are you ready to ____ , or do you need a few more minutes with the menu?",
      options: ["ask", "command", "order", "demand"],
      answer: 2,
      explanation: "You 'order' food in a restaurant. 'Command' and 'demand' are too strong and not used for food, and 'ask' needs an object like 'ask for'."
    },
    {
      text: "I've ____ a table for four at eight o'clock this evening.",
      options: ["ordered", "held", "kept", "booked"],
      answer: 3,
      explanation: "You 'book' a table in advance. You 'order' food, not tables, and 'kept' and 'held' don't mean reserving in advance."
    },
    {
      text: "Could we have the ____ , please? We're in a bit of a hurry.",
      options: ["bill", "ticket", "account", "recipe"],
      answer: 0,
      explanation: "The 'bill' shows what you must pay in a restaurant. A 'ticket' is for travel or events, an 'account' is at a bank, and a 'recipe' tells you how to cook."
    },
    {
      text: "The service was excellent, so we left the waiter a generous ____ .",
      options: ["gift", "tip", "prize", "bonus"],
      answer: 1,
      explanation: "A 'tip' is extra money for good service. A 'gift' is a present, a 'prize' is won in a competition, and a 'bonus' is extra pay from an employer."
    },
    {
      text: "For my ____ I'll have the tomato soup, please.",
      options: ["beginner", "opener", "starter", "entrance"],
      answer: 2,
      explanation: "A 'starter' is the first course of a meal. An 'opener' is a tool, a 'beginner' is a person learning something, and an 'entrance' is a door."
    },
    {
      text: "This sauce ____ a bit too salty for me.",
      options: ["feels", "sounds", "looks", "tastes"],
      answer: 3,
      explanation: "'Tastes' describes flavour, which is what 'salty' refers to. 'Feels', 'sounds' and 'looks' describe touch, hearing and appearance."
    },
    {
      text: "My grandmother gave me her secret ____ for apple pie.",
      options: ["recipe", "receipt", "prescription", "formula"],
      answer: 0,
      explanation: "A 'recipe' tells you how to cook a dish. A 'receipt' proves you paid for something, a 'prescription' is from a doctor, and a 'formula' is scientific."
    },
    {
      text: "The ____ were so big that I couldn't finish my main course.",
      options: ["parts", "portions", "pieces", "amounts"],
      answer: 1,
      explanation: "A 'portion' is the amount of food served to one person. 'Parts', 'pieces' and 'amounts' are not used for servings in a restaurant."
    },
    {
      text: "My sister never eats meat — she's been a ____ for ten years.",
      options: ["veterinarian", "vegetable", "vegetarian", "vegetation"],
      answer: 2,
      explanation: "A 'vegetarian' is a person who doesn't eat meat. A 'vegetable' is a plant you eat, a 'veterinarian' is an animal doctor, and 'vegetation' means plants in general."
    },
    {
      text: "This milk smells strange — I think it has ____ off.",
      options: ["turned", "fallen", "run", "gone"],
      answer: 3,
      explanation: "'Go off' means food has become bad. 'Turned off' is for machines, 'run off' means escaped, and 'fallen off' means dropped from something."
    },
    {
      text: "The doctor advised me to cut ____ on sugar and fried food.",
      options: ["down", "off", "away", "up"],
      answer: 0,
      explanation: "'Cut down on' means to reduce. 'Cut off' means to disconnect, 'cut away' means remove, and 'cut up' means cut into pieces — none work with 'on'."
    },
    {
      text: "Would you like another ____ of chocolate cake?",
      options: ["chop", "slice", "strip", "block"],
      answer: 1,
      explanation: "A 'slice' is a thin flat piece of cake or bread. A 'chop' is a piece of meat, a 'strip' is long and narrow, and a 'block' is for cheese or wood."
    },
    {
      text: "____ the pasta for about ten minutes until it is soft.",
      options: ["Melt", "Burn", "Boil", "Roast"],
      answer: 2,
      explanation: "You 'boil' pasta in hot water. 'Burn' means to damage with heat, 'melt' is for butter or chocolate, and 'roast' is for meat in an oven."
    },
    {
      text: "I love Indian food, but sometimes it's a little too ____ for me.",
      options: ["warm", "tasteful", "heated", "spicy"],
      answer: 3,
      explanation: "'Spicy' means with a strong hot flavour. 'Warm' and 'heated' describe temperature, and 'tasteful' means showing good style, not flavour."
    },
    {
      text: "We were too tired to cook, so we ordered a ____ from the Chinese place.",
      options: ["takeaway", "handout", "leftover", "turnout"],
      answer: 0,
      explanation: "A 'takeaway' is a meal you buy to eat at home. A 'handout' is given free, a 'leftover' is uneaten food from earlier, and a 'turnout' is the number of people at an event."
    },
    {
      text: "Paella is a traditional Spanish ____ made with rice and seafood.",
      options: ["plate", "dish", "bowl", "course"],
      answer: 1,
      explanation: "A 'dish' is a type of prepared food. A 'plate' and 'bowl' are containers, and a 'course' is one part of a meal, like a starter."
    },
    {
      text: "Dinner's nearly ready — could you ____ the table, please?",
      options: ["put", "place", "lay", "stand"],
      answer: 2,
      explanation: "'Lay the table' means to put plates and cutlery on it. 'Put', 'place' and 'stand' need an object plus a position and don't form this collocation."
    },
    {
      text: "Check that you have all the ____ before you start cooking.",
      options: ["materials", "components", "elements", "ingredients"],
      answer: 3,
      explanation: "'Ingredients' are the foods used in a recipe. 'Components' and 'elements' are for machines or chemistry, and 'materials' are for building or making objects."
    },
    {
      text: "Since January I've been on a ____ to lose a few kilos.",
      options: ["diet", "menu", "meal", "course"],
      answer: 0,
      explanation: "To be 'on a diet' means to eat less to lose weight. A 'menu' lists food in a restaurant, a 'meal' is one occasion of eating, and a 'course' is part of a meal."
    },
    {
      text: "After the long walk we were all really ____ , so we bought cold drinks.",
      options: ["hungry", "thirsty", "starving", "dry"],
      answer: 1,
      explanation: "'Thirsty' means needing a drink. 'Hungry' and 'starving' mean needing food, and 'dry' describes objects or weather, not people needing drinks."
    },
    {
      text: "Put your money away — it's my ____ to celebrate my new job.",
      options: ["offer", "invite", "treat", "charge"],
      answer: 2,
      explanation: "'It's my treat' means I will pay for you. 'Invite' is a verb, an 'offer' is a proposal, and a 'charge' is a price or accusation."
    },
    {
      text: "I'll just ____ up yesterday's soup in the microwave.",
      options: ["cook", "hot", "boil", "heat"],
      answer: 3,
      explanation: "'Heat up' means to make food warm again. 'Hot' is an adjective, not a verb, and 'boil up' and 'cook up' don't mean re-warming leftovers."
    },
    {
      text: "Sushi is traditionally made with ____ fish and seasoned rice.",
      options: ["raw", "rough", "rare", "crude"],
      answer: 0,
      explanation: "'Raw' means not cooked. 'Rough' means not smooth, 'rare' describes lightly cooked steak or something unusual, and 'crude' is for oil or rude behaviour."
    },
    {
      text: "Do you ____ going out for pizza tonight?",
      options: ["want", "fancy", "hope", "wish"],
      answer: 1,
      explanation: "'Fancy + -ing' means to feel like doing something. 'Want', 'hope' and 'wish' are followed by the infinitive with 'to', not the -ing form."
    },
    {
      text: "Which ____ of ice cream would you like — chocolate or vanilla?",
      options: ["taste", "smell", "flavour", "savour"],
      answer: 2,
      explanation: "A 'flavour' is a particular type of taste, like chocolate. 'Taste' is the general sense, 'smell' is through the nose, and 'savour' is a verb meaning to enjoy slowly."
    },
    /* ---------- Shopping & Money ---------- */
    {
      text: "We simply can't ____ to buy a new car this year.",
      options: ["offer", "effort", "allow", "afford"],
      answer: 3,
      explanation: "'Can't afford' means not having enough money. 'Effort' is a noun, 'allow' means permit, and 'offer' means propose to give."
    },
    {
      text: "Keep the ____ in case you need to return the shirt.",
      options: ["receipt", "recipe", "prescription", "label"],
      answer: 0,
      explanation: "A 'receipt' proves you paid for something. A 'recipe' is for cooking, a 'prescription' is for medicine, and a 'label' shows the size or price."
    },
    {
      text: "That colour really ____ you — you should definitely buy the jacket.",
      options: ["fits", "suits", "matches", "meets"],
      answer: 1,
      explanation: "A colour 'suits' you if it looks good on you. 'Fits' is about size, 'matches' means goes with another item, and 'meets' is for people or requirements."
    },
    {
      text: "These shoes don't ____ me properly — they're far too tight.",
      options: ["suit", "match", "fit", "measure"],
      answer: 2,
      explanation: "'Fit' is about being the right size. 'Suit' is about looking good, 'match' is about going with other clothes, and 'measure' means to check the size."
    },
    {
      text: "Can I ____ this dress on before I decide whether to buy it?",
      options: ["put", "get", "take", "try"],
      answer: 3,
      explanation: "'Try on' means to wear something to test the size and look. 'Put on' just means to dress, 'take on' means accept work, and 'get on' means board or make progress."
    },
    {
      text: "Students get a ten per cent ____ if they show their ID card.",
      options: ["discount", "refund", "bargain", "sale"],
      answer: 0,
      explanation: "A 'discount' is a reduction in price. A 'refund' is money returned, a 'bargain' is a cheap purchase, and a 'sale' is a period of reduced prices."
    },
    {
      text: "The shop gave me a full ____ because the phone was faulty.",
      options: ["discount", "refund", "reward", "deposit"],
      answer: 1,
      explanation: "A 'refund' is money returned for faulty goods. A 'discount' lowers the price before buying, a 'reward' is for good actions, and a 'deposit' is paid in advance."
    },
    {
      text: "Only five euros for this winter coat? What a ____ !",
      options: ["economy", "cheap", "bargain", "saving"],
      answer: 2,
      explanation: "A 'bargain' is something bought for much less than its value. 'Cheap' is an adjective, and 'economy' and 'saving' don't fit this exclamation."
    },
    {
      text: "Would you like to pay in ____ or by card?",
      options: ["coins", "notes", "change", "cash"],
      answer: 3,
      explanation: "'Pay in cash' is the set phrase meaning with physical money. 'Coins', 'change' and 'notes' are types of money but don't complete this expression."
    },
    {
      text: "The assistant gave me the wrong ____ , so I went back to the till.",
      options: ["change", "cash", "rest", "refund"],
      answer: 0,
      explanation: "'Change' is the money returned when you pay too much. 'Cash' is money in general, 'rest' means the remaining part, and a 'refund' is for returned goods."
    },
    {
      text: "I'm saving ____ for a new laptop at the moment.",
      options: ["on", "up", "in", "out"],
      answer: 1,
      explanation: "'Save up' means to keep money for a future purchase. 'Save on' means spend less on something, and 'save in' and 'save out' are not phrasal verbs."
    },
    {
      text: "Teenagers spend a lot of money ____ clothes and video games.",
      options: ["in", "for", "on", "at"],
      answer: 2,
      explanation: "'Spend money on something' is the correct pattern. 'For', 'in' and 'at' are not used after 'spend money'."
    },
    {
      text: "Could you ____ me twenty pounds until Friday?",
      options: ["owe", "borrow", "rent", "lend"],
      answer: 3,
      explanation: "'Lend' means to give temporarily. 'Borrow' means to take temporarily (you borrow FROM someone), 'rent' involves regular payment, and 'owe' means having a debt."
    },
    {
      text: "Thanks for buying my cinema ticket — how much do I ____ you?",
      options: ["owe", "own", "earn", "charge"],
      answer: 0,
      explanation: "'Owe' means to need to pay money back. 'Own' means to possess, 'earn' means to receive for work, and 'charge' is what a seller does."
    },
    {
      text: "There was a long ____ at the checkout, so we waited ten minutes.",
      options: ["tail", "queue", "row", "chain"],
      answer: 1,
      explanation: "A 'queue' is a line of waiting people. A 'tail' is on an animal, a 'row' is a line of seats, and a 'chain' is metal links or a group of shops."
    },
    {
      text: "Have you got this T-shirt in a larger ____ ?",
      options: ["number", "measure", "size", "figure"],
      answer: 2,
      explanation: "Clothes come in different 'sizes'. 'Measure', 'number' and 'figure' are not used for clothing in this way."
    },
    {
      text: "That designer handbag must have cost her a ____ .",
      options: ["million", "treasure", "wealth", "fortune"],
      answer: 3,
      explanation: "'Cost a fortune' means to be very expensive. 'Treasure', 'wealth' and 'million' do not complete this fixed expression."
    },
    {
      text: "He buys most of his books ____ because it's much cheaper.",
      options: ["second-hand", "old-fashioned", "out of date", "antique"],
      answer: 0,
      explanation: "'Second-hand' means previously owned. 'Old-fashioned' means no longer in style, 'out of date' means no longer valid, and 'antique' means old and valuable."
    },
    {
      text: "We didn't buy anything at all — we just went window ____ .",
      options: ["looking", "shopping", "watching", "viewing"],
      answer: 1,
      explanation: "'Window shopping' means looking at goods without buying. 'Looking', 'watching' and 'viewing' do not combine with 'window' in this expression."
    },
    {
      text: "I'm afraid those trainers are no longer ____ stock in your size.",
      options: ["at", "on", "in", "of"],
      answer: 2,
      explanation: "'In stock' means available in the shop. 'On', 'at' and 'of' do not form this expression with 'stock'."
    },
    {
      text: "The company promises to ____ your order within forty-eight hours.",
      options: ["remove", "transport", "carry", "deliver"],
      answer: 3,
      explanation: "'Deliver' means to bring goods to the customer. 'Transport' and 'carry' just mean to move, and 'remove' means to take away."
    },
    {
      text: "House ____ in this area have risen sharply over the last year.",
      options: ["prices", "costs", "values", "charges"],
      answer: 0,
      explanation: "'House prices' is the standard collocation for what houses sell for. 'Costs' are what you spend, 'values' is less natural here, and 'charges' are fees for services."
    },
    {
      text: "I'd like to pay ____ credit card, if that's possible.",
      options: ["with", "by", "in", "on"],
      answer: 1,
      explanation: "'Pay by credit card' is the fixed phrase. 'With' would need 'a' ('with a credit card'), and 'in' and 'on' are incorrect here."
    },
    {
      text: "I couldn't pay for lunch because I'd left my ____ at home.",
      options: ["folder", "pocket", "wallet", "case"],
      answer: 2,
      explanation: "A 'wallet' holds your money and cards. A 'pocket' is part of your clothes, a 'folder' holds papers, and a 'case' is for glasses or travel."
    },
    {
      text: "The house next door has been ____ sale for several months now.",
      options: ["at", "on", "in", "for"],
      answer: 3,
      explanation: "'For sale' means available to buy. 'On sale' means at a reduced price, and 'in sale' and 'at sale' are incorrect."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
