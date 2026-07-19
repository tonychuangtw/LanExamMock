/* PET Prep extra bank: part3 wave 2 */
(function () {
  var BANK = [
    {
      stem: "INFORM",
      text: "You can find more ____ about the courses on our website.",
      answers: ["information"],
      explanation: "A noun is needed after 'more'. 'Inform' becomes 'information' with -ation."
    },
    {
      stem: "DEPART",
      text: "Please arrive at the airport two hours before your ____.",
      answers: ["departure"],
      explanation: "A noun is needed after 'your'. 'Depart' becomes 'departure' with the suffix -ure."
    },
    {
      stem: "SPEAK",
      text: "The first ____ at the conference talked about healthy eating.",
      answers: ["speaker"],
      explanation: "A person noun is needed after 'The first'. Add -er to 'speak'."
    },
    {
      stem: "STORM",
      text: "The ferry could not leave the port because of the ____ weather.",
      answers: ["stormy"],
      explanation: "An adjective is needed before 'weather'. 'Storm' becomes 'stormy' with -y."
    },
    {
      stem: "ANGRY",
      text: "The driver shouted ____ at the cyclist who crossed the red light.",
      answers: ["angrily"],
      explanation: "An adverb is needed to describe how he shouted. 'Angry' becomes 'angrily'."
    },
    {
      stem: "MEMBER",
      text: "Gym ____ costs less if you pay for a whole year.",
      answers: ["membership"],
      explanation: "A noun is needed as the subject. 'Member' becomes 'membership' with -ship."
    },
    {
      stem: "COMPLAIN",
      text: "The waiter received a ____ about the cold soup.",
      answers: ["complaint"],
      explanation: "A noun is needed after 'a'. The noun form of 'complain' is 'complaint'."
    },
    {
      stem: "FAME",
      text: "The actor became ____ after appearing in just one film.",
      answers: ["famous"],
      explanation: "An adjective is needed after 'became'. 'Fame' becomes 'famous' with -ous."
    },
    {
      stem: "LIKE",
      text: "It is ____ that the match will be played if this rain continues.",
      answers: ["unlikely"],
      explanation: "The meaning is negative, so we add un- and -ly to 'like' to make 'unlikely'."
    },
    {
      stem: "EQUIP",
      text: "The school bought new sports ____ for the gym last term.",
      answers: ["equipment"],
      explanation: "A noun is needed after 'sports'. 'Equip' becomes 'equipment' with -ment."
    },
    {
      stem: "FOG",
      text: "The airport was closed this morning because it was too ____.",
      answers: ["foggy"],
      explanation: "An adjective is needed after 'too'. 'Fog' becomes 'foggy' with a double g and -y."
    },
    {
      stem: "ELECTRIC",
      text: "Our ____ bill is much higher in winter because of the heating.",
      answers: ["electricity"],
      explanation: "A noun is needed before 'bill'. 'Electric' becomes 'electricity' with -ity."
    },
    {
      stem: "DANCE",
      text: "The best ____ in the show trained at a famous academy in Moscow.",
      answers: ["dancer"],
      explanation: "A person noun is needed after 'The best'. Add -r to 'dance' to make 'dancer'."
    },
    {
      stem: "CONFUSE",
      text: "The map was so ____ that we took the wrong road twice.",
      answers: ["confusing"],
      explanation: "The map causes the feeling, so we use the -ing adjective 'confusing'."
    },
    {
      stem: "NEIGHBOUR",
      text: "We live in a quiet ____ close to the city centre.",
      answers: ["neighbourhood", "neighborhood"],
      explanation: "A place noun is needed after 'a quiet'. 'Neighbour' becomes 'neighbourhood'."
    },
    {
      stem: "ATTRACT",
      text: "The castle is the most popular tourist ____ in the region.",
      answers: ["attraction"],
      explanation: "A noun is needed after 'tourist'. 'Attract' becomes 'attraction' with -ion."
    },
    {
      stem: "COMFORT",
      text: "These shoes look nice, but they are really ____ to walk in.",
      answers: ["uncomfortable"],
      explanation: "The meaning is negative, so we add un- and -able to 'comfort'."
    },
    {
      stem: "SAIL",
      text: "The young ____ crossed the Atlantic alone in a small boat.",
      answers: ["sailor"],
      explanation: "A person noun is needed after 'The young'. 'Sail' becomes 'sailor' with -or."
    },
    {
      stem: "MYSTERY",
      text: "The lights in the empty house looked very ____ at night.",
      answers: ["mysterious"],
      explanation: "An adjective is needed after 'very'. 'Mystery' becomes 'mysterious' with -ous."
    },
    {
      stem: "IMPROVE",
      text: "Your English will show a big ____ if you practise every day.",
      answers: ["improvement"],
      explanation: "A noun is needed after 'a big'. 'Improve' becomes 'improvement' with -ment."
    },
    {
      stem: "SILENT",
      text: "He read the letter ____ and then put it back in the envelope.",
      answers: ["silently"],
      explanation: "An adverb is needed to describe how he read. Add -ly to 'silent'."
    },
    {
      stem: "VALUE",
      text: "Keep your ____ things in the hotel safe, not in your room.",
      answers: ["valuable"],
      explanation: "An adjective is needed before 'things'. 'Value' becomes 'valuable' with -able."
    },
    {
      stem: "APPLY",
      text: "Send your ____ for the summer job before the end of May.",
      answers: ["application"],
      explanation: "A noun is needed after 'your'. 'Apply' becomes 'application' with -ation."
    },
    {
      stem: "SLEEP",
      text: "I felt really ____ during the afternoon lesson after lunch.",
      answers: ["sleepy"],
      explanation: "An adjective is needed after 'really'. 'Sleep' becomes 'sleepy' with -y."
    },
    {
      stem: "ORGANISE",
      text: "The ____ of the festival gave free tickets to local schools.",
      answers: ["organisers", "organizers", "organiser", "organizer"],
      explanation: "A person noun is needed after 'The'. 'Organise' becomes 'organiser' with -er."
    },
    {
      stem: "CENTRE",
      text: "The hotel is very ____, so you can walk to all the main sights.",
      answers: ["central"],
      explanation: "An adjective is needed after 'very'. 'Centre' becomes 'central' with -al."
    },
    {
      stem: "LONG",
      text: "The ____ of the swimming pool is exactly fifty metres.",
      answers: ["length"],
      explanation: "A noun is needed after 'The'. The noun form of 'long' is 'length'."
    },
    {
      stem: "EMPLOY",
      text: "The factory has more than two hundred ____ working in three teams.",
      answers: ["employees"],
      explanation: "A plural person noun is needed. 'Employ' becomes 'employees', the people employed."
    },
    {
      stem: "TASTE",
      text: "The cake looked beautiful and it was really ____ too.",
      answers: ["tasty"],
      explanation: "An adjective is needed after 'really'. 'Taste' becomes 'tasty' with -y."
    },
    {
      stem: "AGREE",
      text: "After a short ____ about the price, we bought the car.",
      answers: ["disagreement"],
      explanation: "A noun with a negative meaning is needed; 'agree' becomes 'disagreement'."
    },
    {
      stem: "PROFESSION",
      text: "She plays the piano so well that she sounds like a ____ musician.",
      answers: ["professional"],
      explanation: "An adjective is needed before 'musician'. 'Profession' becomes 'professional'."
    },
    {
      stem: "DELIVER",
      text: "There is no extra charge for ____ if you spend over thirty pounds.",
      answers: ["delivery"],
      explanation: "A noun is needed after 'for'. 'Deliver' becomes 'delivery' with the suffix -y."
    },
    {
      stem: "FUN",
      text: "That comedian is so ____ that I laughed until I cried.",
      answers: ["funny"],
      explanation: "An adjective is needed after 'so'. 'Fun' becomes 'funny' with a double n and -y."
    },
    {
      stem: "SCARE",
      text: "The children thought the old house at the end of the street was ____.",
      answers: ["scary"],
      explanation: "The house causes the feeling, so we use the adjective 'scary'."
    },
    {
      stem: "TRANSLATE",
      text: "She works as a ____ for a company that sells books abroad.",
      answers: ["translator"],
      explanation: "A person noun is needed after 'a'. 'Translate' becomes 'translator' with -or."
    },
    {
      stem: "HIGH",
      text: "The plane was flying at a ____ of ten thousand metres.",
      answers: ["height"],
      explanation: "A noun is needed after 'a'. The noun form of 'high' is 'height'."
    },
    {
      stem: "COMPLETE",
      text: "I ____ forgot about the meeting until my phone reminded me.",
      answers: ["completely"],
      explanation: "An adverb is needed to describe 'forgot'. Add -ly to 'complete'."
    },
    {
      stem: "ADVERTISE",
      text: "I saw an ____ for cheap flights to Rome on the internet.",
      answers: ["advertisement", "advert"],
      explanation: "A noun is needed after 'an'. 'Advertise' becomes 'advertisement' with -ment."
    },
    {
      stem: "SNOW",
      text: "The mountain roads are often ____ from December to March.",
      answers: ["snowy"],
      explanation: "An adjective is needed after 'often'. 'Snow' becomes 'snowy' with -y."
    },
    {
      stem: "INVENT",
      text: "The telephone was an ____ that changed the whole world.",
      answers: ["invention"],
      explanation: "A noun is needed after 'an'. 'Invent' becomes 'invention' with the suffix -ion."
    },
    {
      stem: "FORGET",
      text: "Watching the sunrise from the mountain top was an ____ experience.",
      answers: ["unforgettable"],
      explanation: "An adjective is needed before 'experience'; 'forget' becomes 'unforgettable'."
    },
    {
      stem: "SCIENCE",
      text: "There is no ____ proof that the lake monster really exists.",
      answers: ["scientific"],
      explanation: "An adjective is needed before 'proof'. 'Science' becomes 'scientific'."
    },
    {
      stem: "WEIGH",
      text: "The doctor checked my ____ and my height during the examination.",
      answers: ["weight"],
      explanation: "A noun is needed after 'my'. The noun form of 'weigh' is 'weight'."
    },
    {
      stem: "GOLD",
      text: "The wheat fields turn a beautiful ____ colour in late summer.",
      answers: ["golden"],
      explanation: "An adjective is needed before 'colour'. 'Gold' becomes 'golden' with -en."
    },
    {
      stem: "DECIDE",
      text: "He is very ____ and always knows exactly what he wants to order.",
      answers: ["decisive"],
      explanation: "An adjective is needed after 'very'. 'Decide' becomes 'decisive' with -ive."
    },
    {
      stem: "FREEZE",
      text: "Put the pizza in the ____ and cook it next weekend.",
      answers: ["freezer"],
      explanation: "A thing noun is needed here. 'Freeze' becomes 'freezer', the machine that freezes food."
    },
    {
      stem: "NERVE",
      text: "I always feel ____ before I speak in front of the whole class.",
      answers: ["nervous"],
      explanation: "An adjective is needed after 'feel'. 'Nerve' becomes 'nervous' with -ous."
    },
    {
      stem: "SUGGEST",
      text: "The waiter made a good ____ about which fish to try.",
      answers: ["suggestion"],
      explanation: "A noun is needed after 'a good'. 'Suggest' becomes 'suggestion' with -ion."
    },
    {
      stem: "HUNGER",
      text: "The children were really ____ after their long bike ride.",
      answers: ["hungry"],
      explanation: "An adjective is needed after 'really'. 'Hunger' becomes 'hungry' with -y."
    },
    {
      stem: "LEAD",
      text: "She is a natural ____ and always organises our group projects.",
      answers: ["leader"],
      explanation: "A person noun is needed after 'a natural'. Add -er to 'lead' to make 'leader'."
    },
    {
      stem: "POPULAR",
      text: "The ____ of online shopping has grown quickly in the last ten years.",
      answers: ["popularity"],
      explanation: "A noun is needed after 'The'. 'Popular' becomes 'popularity' with -ity."
    },
    {
      stem: "RIDE",
      text: "The best ____ in the race fell off his horse at the last fence.",
      answers: ["rider"],
      explanation: "A person noun is needed after 'The best'. Add -r to 'ride' to make 'rider'."
    },
    {
      stem: "CHEER",
      text: "Our neighbour is always ____ and says hello with a big smile.",
      answers: ["cheerful"],
      explanation: "An adjective is needed after 'always'. 'Cheer' becomes 'cheerful' with -ful."
    },
    {
      stem: "PREPARE",
      text: "Good ____ is the secret of passing any exam.",
      answers: ["preparation"],
      explanation: "A noun is needed after 'Good'. 'Prepare' becomes 'preparation' with -ation."
    },
    {
      stem: "LOVE",
      text: "What a ____ surprise to see you here in town!",
      answers: ["lovely"],
      explanation: "An adjective is needed before 'surprise'. 'Love' becomes 'lovely'."
    },
    {
      stem: "EXPLORE",
      text: "The famous ____ spent two years travelling across the desert.",
      answers: ["explorer"],
      explanation: "A person noun is needed after 'The famous'. 'Explore' becomes 'explorer' with -r."
    },
    {
      stem: "SICK",
      text: "Several students were absent last week because of ____.",
      answers: ["sickness"],
      explanation: "A noun is needed after 'because of'. 'Sick' becomes 'sickness' with -ness."
    },
    {
      stem: "AMBITION",
      text: "My cousin is very ____ and wants to run her own company one day.",
      answers: ["ambitious"],
      explanation: "An adjective is needed after 'very'. 'Ambition' becomes 'ambitious' with -ous."
    },
    {
      stem: "PACK",
      text: "The biscuits come in a small blue ____ with a picture of a bear.",
      answers: ["packet", "package"],
      explanation: "A noun is needed after 'blue'. 'Pack' becomes 'packet', a small container."
    },
    {
      stem: "GENTLE",
      text: "The nurse lifted the baby ____ out of its bed.",
      answers: ["gently"],
      explanation: "An adverb is needed to describe how she lifted the baby. 'Gentle' becomes 'gently'."
    },
    {
      stem: "ENTER",
      text: "The main ____ to the stadium is on the north side.",
      answers: ["entrance"],
      explanation: "A noun is needed after 'The main'. 'Enter' becomes 'entrance' with -ance."
    },
    {
      stem: "FASCINATE",
      text: "The programme about deep-sea fish was absolutely ____.",
      answers: ["fascinating"],
      explanation: "The programme causes the feeling, so we use the -ing adjective 'fascinating'."
    },
    {
      stem: "HISTORY",
      text: "Many ____ buildings in the old town are open to the public.",
      answers: ["historic", "historical"],
      explanation: "An adjective is needed before 'buildings'. 'History' becomes 'historic'."
    },
    {
      stem: "OWN",
      text: "The ____ of the café also runs a small bakery next door.",
      answers: ["owner"],
      explanation: "A person noun is needed after 'The'. Add -er to 'own' to make 'owner'."
    },
    {
      stem: "LAZY",
      text: "On Sundays we enjoy the ____ of a late breakfast in the garden.",
      answers: ["laziness"],
      explanation: "A noun is needed after 'the'. 'Lazy' becomes 'laziness' with the suffix -ness."
    },
    {
      stem: "PROTECT",
      text: "Wear a helmet for ____ when you go skateboarding.",
      answers: ["protection"],
      explanation: "A noun is needed after 'for'. 'Protect' becomes 'protection' with -ion."
    },
    {
      stem: "THIRST",
      text: "Playing sport in the sun always makes me really ____.",
      answers: ["thirsty"],
      explanation: "An adjective is needed after 'really'. 'Thirst' becomes 'thirsty' with -y."
    },
    {
      stem: "ART",
      text: "The young ____ sells her paintings at the street market.",
      answers: ["artist"],
      explanation: "A person noun is needed after 'The young'. 'Art' becomes 'artist' with -ist."
    },
    {
      stem: "LOUD",
      text: "The audience clapped ____ when the band came back on stage.",
      answers: ["loudly"],
      explanation: "An adverb is needed to describe how they clapped. Add -ly to 'loud'."
    },
    {
      stem: "IMAGINE",
      text: "You need a good ____ to write exciting adventure stories.",
      answers: ["imagination"],
      explanation: "A noun is needed after 'a good'. 'Imagine' becomes 'imagination' with -ation."
    },
    {
      stem: "COMPARE",
      text: "In ____ with July, August was cool and wet this year.",
      answers: ["comparison"],
      explanation: "A noun is needed after 'In'. 'Compare' becomes 'comparison'."
    },
    {
      stem: "PEACE",
      text: "The campsite is in a ____ valley far from any main roads.",
      answers: ["peaceful"],
      explanation: "An adjective is needed before 'valley'. 'Peace' becomes 'peaceful' with -ful."
    },
    {
      stem: "TIDY",
      text: "His desk is always ____ , covered with papers, cups and pens.",
      answers: ["untidy"],
      explanation: "The meaning is negative because the desk is covered in mess; add un- to 'tidy'."
    },
    {
      stem: "OPERATE",
      text: "The ____ on her knee was successful and she can play tennis again.",
      answers: ["operation"],
      explanation: "A noun is needed after 'The'. 'Operate' becomes 'operation' with -ion."
    },
    {
      stem: "BAKE",
      text: "The ____ opens at six in the morning to sell fresh bread.",
      answers: ["bakery", "baker"],
      explanation: "A noun is needed after 'The'. 'Bake' becomes 'bakery', the place where bread is made."
    },
    {
      stem: "SECRET",
      text: "The ____ answers all the phone calls and organises the boss's diary.",
      answers: ["secretary"],
      explanation: "A person noun is needed after 'The'. 'Secret' is the root of 'secretary'."
    },
    {
      stem: "WIDE",
      text: "The council plans to ____ the main road to reduce traffic jams.",
      answers: ["widen"],
      explanation: "A verb is needed after 'to'. 'Wide' becomes 'widen' with the suffix -en."
    },
    {
      stem: "GLASS",
      text: "My eyes are getting worse, so I probably need ____.",
      answers: ["glasses"],
      explanation: "The plural noun 'glasses' means the things you wear to see better."
    },
    {
      stem: "MARRY",
      text: "Their ____ took place in a little church by the sea.",
      answers: ["marriage"],
      explanation: "A noun is needed after 'Their'. 'Marry' becomes 'marriage' with -age."
    },
    {
      stem: "COURAGE",
      text: "It was very ____ of the boy to jump into the river to save the dog.",
      answers: ["courageous"],
      explanation: "An adjective is needed after 'very'. 'Courage' becomes 'courageous' with -ous."
    },
    {
      stem: "SHOP",
      text: "Some ____ waited outside the store all night for the big sale.",
      answers: ["shoppers"],
      explanation: "A plural person noun is needed. 'Shop' becomes 'shoppers' with double p and -ers."
    },
    {
      stem: "BREATH",
      text: "It was hard to ____ at the top of the mountain because of the thin air.",
      answers: ["breathe"],
      explanation: "A verb is needed after 'to'. The verb form of the noun 'breath' is 'breathe'."
    },
    {
      stem: "MODERN",
      text: "The city spent millions on the ____ of its old underground system.",
      answers: ["modernisation", "modernization"],
      explanation: "A noun is needed after 'the'. 'Modern' becomes 'modernisation'."
    },
    {
      stem: "BANK",
      text: "My aunt has worked as a ____ in the city for twenty years.",
      answers: ["banker"],
      explanation: "A person noun is needed after 'a'. Add -er to 'bank' to make 'banker'."
    },
    {
      stem: "STRESS",
      text: "Moving house can be very ____ for the whole family.",
      answers: ["stressful"],
      explanation: "An adjective is needed after 'very'. 'Stress' becomes 'stressful' with -ful."
    },
    {
      stem: "REFER",
      text: "The ____ blew his whistle and stopped the match for a foul.",
      answers: ["referee"],
      explanation: "A person noun is needed after 'The'. 'Refer' is the root of 'referee'."
    },
    {
      stem: "SIMPLE",
      text: "The teacher explained the rule ____ so everyone could understand.",
      answers: ["simply"],
      explanation: "An adverb is needed to describe how she explained. 'Simple' becomes 'simply'."
    },
    {
      stem: "OBEY",
      text: "The puppy is sweet but very ____ — it never comes when we call.",
      answers: ["disobedient"],
      explanation: "A negative adjective is needed; 'obey' becomes 'disobedient' with dis-."
    },
    {
      stem: "MOUNTAIN",
      text: "Two experienced ____ led our group to the top of the peak.",
      answers: ["mountaineers"],
      explanation: "A plural person noun is needed. 'Mountain' becomes 'mountaineers'."
    },
    {
      stem: "PLEASE",
      text: "It was a ____ to meet your parents at the concert last night.",
      answers: ["pleasure"],
      explanation: "A noun is needed after 'a'. 'Please' becomes 'pleasure' with the suffix -ure."
    },
    {
      stem: "ENERGY",
      text: "My little sister is so ____ that she never sits still.",
      answers: ["energetic"],
      explanation: "An adjective is needed after 'so'. 'Energy' becomes 'energetic'."
    },
    {
      stem: "ROB",
      text: "The police caught the ____ as he was leaving the bank.",
      answers: ["robber"],
      explanation: "A person noun is needed after 'the'. 'Rob' becomes 'robber' with double b and -er."
    },
    {
      stem: "SEE",
      text: "The fog was thick and ____ was very poor on the motorway.",
      answers: ["visibility"],
      explanation: "A noun meaning 'how well you can see' is needed: 'visibility', related to 'see'."
    },
    {
      stem: "HUMOUR",
      text: "Our grandfather tells very ____ stories about his school days.",
      answers: ["humorous"],
      explanation: "An adjective is needed before 'stories'. 'Humour' becomes 'humorous' with -ous."
    },
    {
      stem: "CONNECT",
      text: "The internet ____ in the mountain hotel was slow but free.",
      answers: ["connection"],
      explanation: "A noun is needed after 'internet'. 'Connect' becomes 'connection' with -ion."
    },
    {
      stem: "WEALTH",
      text: "A ____ businessman paid for the new library in our town.",
      answers: ["wealthy"],
      explanation: "An adjective is needed before 'businessman'. 'Wealth' becomes 'wealthy' with -y."
    },
    {
      stem: "INSTRUCT",
      text: "Our skiing ____ showed us how to stop safely.",
      answers: ["instructor"],
      explanation: "A person noun is needed after 'skiing'. 'Instruct' becomes 'instructor' with -or."
    },
    {
      stem: "TEACH",
      text: "My mother left ____ last year and now writes children's books.",
      answers: ["teaching"],
      explanation: "A noun is needed after 'left' to name the job. 'Teach' becomes 'teaching'."
    },
    {
      stem: "POWER",
      text: "The new sports car has an extremely ____ engine.",
      answers: ["powerful"],
      explanation: "An adjective is needed after 'extremely'. 'Power' becomes 'powerful' with -ful."
    },
    {
      stem: "APOLOGY",
      text: "You should ____ to your sister for breaking her headphones.",
      answers: ["apologise", "apologize"],
      explanation: "A verb is needed after 'should'. The verb form of 'apology' is 'apologise'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part3 = QUESTIONS.part3.concat(BANK);
})();
