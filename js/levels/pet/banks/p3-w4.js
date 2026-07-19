/* PET Prep extra bank: part3 wave 4 */
(function () {
  var BANK = [
    {
      stem: "DECIDE",
      text: "After hours of talking, the judges finally reached a ____.",
      answers: ["decision"],
      explanation: "A noun is needed after 'a'. 'Decide' becomes 'decision' with the suffix -sion."
    },
    {
      stem: "TRAVEL",
      text: "Regular ____ on this route can buy a cheaper monthly ticket.",
      answers: ["travellers", "travelers"],
      explanation: "A plural person noun is needed. 'Travel' becomes 'travellers' with -er."
    },
    {
      stem: "ATTEND",
      text: "Regular ____ at training sessions is important if you want to play in matches.",
      answers: ["attendance"],
      explanation: "A noun is needed after 'Regular'. 'Attend' becomes 'attendance' with -ance."
    },
    {
      stem: "SHARP",
      text: "Could you ____ this pencil for me before the drawing lesson?",
      answers: ["sharpen"],
      explanation: "A verb is needed after 'Could you'. 'Sharp' becomes 'sharpen' with -en."
    },
    {
      stem: "FAME",
      text: "The little fishing village is now ____ for its seafood festival.",
      answers: ["famous"],
      explanation: "An adjective is needed after 'is'. 'Fame' becomes 'famous' with the suffix -ous."
    },
    {
      stem: "KIND",
      text: "It was ____ of him to laugh at his brother's mistake.",
      answers: ["unkind"],
      explanation: "The meaning is negative, so we add the prefix un- to 'kind'."
    },
    {
      stem: "PRODUCE",
      text: "This factory is famous for the ____ of small electric cars.",
      answers: ["production"],
      explanation: "A noun is needed after 'the'. 'Produce' becomes 'production' with -tion."
    },
    {
      stem: "GEOGRAPHY",
      text: "Chile is long and narrow because of its unusual ____ position.",
      answers: ["geographical", "geographic"],
      explanation: "An adjective is needed before 'position'. 'Geography' becomes 'geographical'."
    },
    {
      stem: "SELF",
      text: "It was ____ of her to eat the last piece of cake without asking.",
      answers: ["selfish"],
      explanation: "An adjective is needed after 'It was'. 'Self' becomes 'selfish' with -ish."
    },
    {
      stem: "DISCOVER",
      text: "The ____ of the ancient ship surprised the whole village.",
      answers: ["discovery"],
      explanation: "A noun is needed after 'The'. 'Discover' becomes 'discovery' with -y."
    },
    {
      stem: "MEMORY",
      text: "That summer by the lake was truly ____ for all of us.",
      answers: ["memorable"],
      explanation: "An adjective is needed after 'truly'. 'Memory' becomes 'memorable' with -able."
    },
    {
      stem: "CYCLE",
      text: "Hundreds of ____ took part in the charity ride across the city.",
      answers: ["cyclists"],
      explanation: "A plural person noun is needed. 'Cycle' becomes 'cyclists' with -ist."
    },
    {
      stem: "WARM",
      text: "Remember to dress ____ because the stadium has no roof.",
      answers: ["warmly"],
      explanation: "An adverb is needed to describe how to dress. Add -ly to 'warm'."
    },
    {
      stem: "POLITIC",
      text: "The young ____ promised to build more schools in the region.",
      answers: ["politician"],
      explanation: "A person noun is needed. The root gives 'politician' with the suffix -ian."
    },
    {
      stem: "FAIR",
      text: "The referee was accused of treating the away team ____.",
      answers: ["unfairly"],
      explanation: "A negative adverb is needed: un- + fair + -ly = 'unfairly'."
    },
    {
      stem: "KNOW",
      text: "Her ____ of local plants helped us find safe berries to eat.",
      answers: ["knowledge"],
      explanation: "A noun is needed after 'Her'. The noun form of 'know' is 'knowledge'."
    },
    {
      stem: "MASS",
      text: "There was a ____ crowd outside the theatre waiting for the star.",
      answers: ["massive"],
      explanation: "An adjective is needed before 'crowd'. 'Mass' becomes 'massive' with -ive."
    },
    {
      stem: "REPAIR",
      text: "The lift is out of order and, worse still, it may be ____.",
      answers: ["irreparable", "unrepairable"],
      explanation: "A negative adjective is needed, meaning it cannot be repaired."
    },
    {
      stem: "ADVISE",
      text: "My grandmother gave me some excellent ____ about saving money.",
      answers: ["advice"],
      explanation: "A noun is needed after 'excellent'. The noun form of 'advise' is 'advice'."
    },
    {
      stem: "TALENT",
      text: "She is a ____ young violinist who already plays in an orchestra.",
      answers: ["talented"],
      explanation: "An -ed adjective is needed before 'young violinist': 'talented'."
    },
    {
      stem: "PART",
      text: "Two hundred runners are expected to be ____ in Sunday's race.",
      answers: ["participants"],
      explanation: "A plural person noun is needed. 'Part' is the root of 'participants'."
    },
    {
      stem: "LIFE",
      text: "In winter the little seaside town seems grey and almost ____.",
      answers: ["lifeless"],
      explanation: "An adjective is needed after 'almost'. 'Life' becomes 'lifeless' with -less."
    },
    {
      stem: "MEASURE",
      text: "Write down the ____ of the room before you buy the carpet.",
      answers: ["measurements"],
      explanation: "A plural noun is needed after 'the'. 'Measure' becomes 'measurements'."
    },
    {
      stem: "OPEN",
      text: "The grand ____ of the sports centre is on Saturday at noon.",
      answers: ["opening"],
      explanation: "A noun is needed after 'The grand'. 'Open' becomes 'opening' with -ing."
    },
    {
      stem: "STRANGE",
      text: "My parents told me never to accept lifts from ____.",
      answers: ["strangers"],
      explanation: "A plural person noun is needed after 'from'. 'Strange' becomes 'strangers'."
    },
    {
      stem: "ECONOMY",
      text: "It is more ____ to buy vegetables at the market than at the supermarket.",
      answers: ["economical"],
      explanation: "An adjective meaning 'cheaper' is needed. 'Economy' becomes 'economical'."
    },
    {
      stem: "CROSS",
      text: "Always use the pedestrian ____ when you go over the main road.",
      answers: ["crossing"],
      explanation: "A noun is needed after 'pedestrian'. 'Cross' becomes 'crossing' with -ing."
    },
    {
      stem: "BRAVE",
      text: "The firefighter received a medal for her ____ during the rescue.",
      answers: ["bravery"],
      explanation: "A noun is needed after 'her'. 'Brave' becomes 'bravery' with the suffix -ry."
    },
    {
      stem: "DEPEND",
      text: "Since starting work, my sister has become much more ____.",
      answers: ["independent"],
      explanation: "An adjective with in- is needed: 'independent', not needing others' help."
    },
    {
      stem: "MOMENT",
      text: "The power cut lasted only a few seconds, so it was a ____ problem.",
      answers: ["momentary"],
      explanation: "An adjective is needed before 'problem'. 'Moment' becomes 'momentary'."
    },
    {
      stem: "RECEIVE",
      text: "Keep your ____ in case you need to bring the jacket back.",
      answers: ["receipt"],
      explanation: "A noun is needed after 'your'. 'Receive' relates to the noun 'receipt'."
    },
    {
      stem: "MOUNTAIN",
      text: "The road to the village is steep and ____ in places.",
      answers: ["mountainous"],
      explanation: "An adjective is needed after 'and'. 'Mountain' becomes 'mountainous' with -ous."
    },
    {
      stem: "EDIT",
      text: "The newspaper's ____ decided not to print the story.",
      answers: ["editor"],
      explanation: "A person noun is needed after the possessive. 'Edit' becomes 'editor' with -or."
    },
    {
      stem: "FRESH",
      text: "The morning air by the lake smelled of pine trees and ____.",
      answers: ["freshness"],
      explanation: "A noun is needed after 'and'. 'Fresh' becomes 'freshness' with -ness."
    },
    {
      stem: "BELIEVE",
      text: "The special effects in the film were almost ____ — like real magic.",
      answers: ["unbelievable"],
      explanation: "An adjective with un- and -able is needed: 'unbelievable'."
    },
    {
      stem: "MIST",
      text: "The valley looked beautiful in the ____ autumn morning.",
      answers: ["misty"],
      explanation: "An adjective is needed before 'autumn morning'. 'Mist' becomes 'misty' with -y."
    },
    {
      stem: "OPERATE",
      text: "You need a trained ____ to use this crane safely.",
      answers: ["operator"],
      explanation: "A person noun is needed after 'a trained'. 'Operate' becomes 'operator' with -or."
    },
    {
      stem: "FINAL",
      text: "After weeks of doubt, she ____ chose the university in Scotland.",
      answers: ["finally"],
      explanation: "An adverb is needed before 'chose'. Add -ly to 'final' to make 'finally'."
    },
    {
      stem: "MUSIC",
      text: "The film's opening scene has no words, only soft ____ sounds.",
      answers: ["musical"],
      explanation: "An adjective is needed before 'sounds'. 'Music' becomes 'musical' with -al."
    },
    {
      stem: "PREDICT",
      text: "The weather in the mountains is ____ , so pack clothes for sun and snow.",
      answers: ["unpredictable"],
      explanation: "A negative adjective is needed: 'unpredictable', impossible to predict."
    },
    {
      stem: "HOSPITAL",
      text: "Thanks to the family's kind ____ , we stayed for a whole week.",
      answers: ["hospitality"],
      explanation: "A noun is needed after 'kind'. 'Hospital' is the root of 'hospitality'."
    },
    {
      stem: "SPEND",
      text: "Try to keep a record of your weekly ____ if you want to save money.",
      answers: ["spending"],
      explanation: "A noun is needed after 'weekly'. 'Spend' becomes 'spending' with -ing."
    },
    {
      stem: "GREEN",
      text: "The village is surrounded by the fresh ____ of spring fields.",
      answers: ["greenery"],
      explanation: "A noun is needed after 'the fresh'. 'Green' becomes 'greenery' with -ery."
    },
    {
      stem: "CONFIDENT",
      text: "Passing the driving test gave him a lot more ____.",
      answers: ["confidence"],
      explanation: "A noun is needed after 'more'. 'Confident' becomes 'confidence'."
    },
    {
      stem: "TWIST",
      text: "Follow the narrow, ____ road until you reach the lighthouse.",
      answers: ["twisting", "twisty"],
      explanation: "An -ing adjective is needed before 'road': 'twisting', with many bends."
    },
    {
      stem: "ANNOUNCE",
      text: "Passengers should listen for the ____ about platform changes.",
      answers: ["announcement", "announcements"],
      explanation: "A noun is needed after 'the'. 'Announce' becomes 'announcement' with -ment."
    },
    {
      stem: "SKILL",
      text: "The bowl was made by a highly ____ potter from the mountains.",
      answers: ["skilled", "skilful", "skillful"],
      explanation: "An adjective is needed after 'highly'. 'Skill' becomes 'skilled'."
    },
    {
      stem: "ROMANCE",
      text: "They had a ____ dinner by candlelight on the beach.",
      answers: ["romantic"],
      explanation: "An adjective is needed before 'dinner'. 'Romance' becomes 'romantic'."
    },
    {
      stem: "PUNISH",
      text: "Staying in at break time is the usual ____ for forgotten homework.",
      answers: ["punishment"],
      explanation: "A noun is needed after 'the usual'. 'Punish' becomes 'punishment' with -ment."
    },
    {
      stem: "HOT",
      text: "You can ____ the soup in the microwave in two minutes.",
      answers: ["heat"],
      explanation: "A verb is needed after 'can'. 'Hot' is related to the verb 'heat'."
    },
    {
      stem: "VIEW",
      text: "Millions of ____ watched the final episode of the series last night.",
      answers: ["viewers"],
      explanation: "A plural person noun is needed. 'View' becomes 'viewers' with -er."
    },
    {
      stem: "CULTURE",
      text: "The capital offers many ____ activities, from opera to street art.",
      answers: ["cultural"],
      explanation: "An adjective is needed before 'activities'. 'Culture' becomes 'cultural'."
    },
    {
      stem: "LATE",
      text: "Have you heard the ____ song by that Canadian singer?",
      answers: ["latest"],
      explanation: "The superlative adjective 'latest' means the most recent."
    },
    {
      stem: "OBSERVE",
      text: "From the ____ deck you can see the whole city and the river.",
      answers: ["observation"],
      explanation: "A noun is needed before 'deck'. 'Observe' becomes 'observation'."
    },
    {
      stem: "SLIP",
      text: "Be careful — the rocks near the waterfall are extremely ____.",
      answers: ["slippery"],
      explanation: "An adjective is needed after 'extremely'. 'Slip' becomes 'slippery'."
    },
    {
      stem: "REPORT",
      text: "According to news ____ , the storm will reach the coast tonight.",
      answers: ["reports"],
      explanation: "A plural noun is needed after 'news'. The noun form of 'report' fits here."
    },
    {
      stem: "APPEAR",
      text: "The actor changed his ____ completely for the new role.",
      answers: ["appearance"],
      explanation: "A noun is needed after 'his'. 'Appear' becomes 'appearance' with -ance."
    },
    {
      stem: "COUNT",
      text: "The votes were ____ , so we still don't know who won.",
      answers: ["uncountable", "miscounted", "uncounted"],
      explanation: "A negative -ed adjective is needed: 'uncounted', not yet counted."
    },
    {
      stem: "FARM",
      text: "Modern ____ uses machines that can drive themselves across fields.",
      answers: ["farming"],
      explanation: "A noun is needed after 'Modern'. 'Farm' becomes 'farming' with -ing."
    },
    {
      stem: "AFFORD",
      text: "The town needs more ____ homes for young families.",
      answers: ["affordable"],
      explanation: "An adjective is needed before 'homes'. 'Afford' becomes 'affordable' with -able."
    },
    {
      stem: "SIMILAR",
      text: "I noticed a strong ____ between the twins' handwriting.",
      answers: ["similarity"],
      explanation: "A noun is needed after 'a strong'. 'Similar' becomes 'similarity' with -ity."
    },
    {
      stem: "ACHIEVE",
      text: "Winning the science prize was her greatest ____ at school.",
      answers: ["achievement"],
      explanation: "A noun is needed after 'her greatest'. 'Achieve' becomes 'achievement'."
    },
    {
      stem: "NOISE",
      text: "The fridge hums ____ all night, and it keeps me awake.",
      answers: ["noisily"],
      explanation: "An adverb is needed to describe how it hums. 'Noise' becomes 'noisily'."
    },
    {
      stem: "WILD",
      text: "The national park protects all kinds of ____ , from birds to bears.",
      answers: ["wildlife"],
      explanation: "The compound noun 'wildlife' names wild animals and plants together."
    },
    {
      stem: "GRADUATE",
      text: "After ____ , she plans to work abroad for a year.",
      answers: ["graduation"],
      explanation: "A noun is needed after 'After'. 'Graduate' becomes 'graduation' with -ion."
    },
    {
      stem: "STEEP",
      text: "The path climbs ____ for the first kilometre, then becomes flat.",
      answers: ["steeply"],
      explanation: "An adverb is needed to describe how the path climbs. Add -ly to 'steep'."
    },
    {
      stem: "CHAMPION",
      text: "Our team hopes to win the ____ for the third year running.",
      answers: ["championship"],
      explanation: "A noun is needed after 'the'. 'Champion' becomes 'championship' with -ship."
    },
    {
      stem: "REMARK",
      text: "It is ____ that the little boat survived such a terrible storm.",
      answers: ["remarkable"],
      explanation: "An adjective is needed after 'It is'. 'Remark' becomes 'remarkable' with -able."
    },
    {
      stem: "PRISON",
      text: "The ____ escaped through a window in the hospital wing.",
      answers: ["prisoner"],
      explanation: "A person noun is needed after 'The'. 'Prison' becomes 'prisoner' with -er."
    },
    {
      stem: "WASTE",
      text: "Leaving the tap running is very ____ , so please turn it off.",
      answers: ["wasteful"],
      explanation: "An adjective is needed after 'very'. 'Waste' becomes 'wasteful' with -ful."
    },
    {
      stem: "ARRIVE",
      text: "The board shows all ____ and departures at the bus station.",
      answers: ["arrivals"],
      explanation: "A plural noun is needed to match 'departures'. 'Arrive' becomes 'arrivals'."
    },
    {
      stem: "SECURE",
      text: "Airport ____ checked every bag before the flight.",
      answers: ["security"],
      explanation: "A noun is needed after 'Airport'. 'Secure' becomes 'security' with -ity."
    },
    {
      stem: "FOOL",
      text: "It was a ____ mistake to leave the tent door open in the rain.",
      answers: ["foolish"],
      explanation: "An adjective is needed before 'mistake'. 'Fool' becomes 'foolish' with -ish."
    },
    {
      stem: "PAINT",
      text: "There is a lovely ____ of the harbour hanging in the café.",
      answers: ["painting"],
      explanation: "A thing noun is needed after 'a lovely'. 'Paint' becomes 'painting' with -ing."
    },
    {
      stem: "CHEAP",
      text: "It is usually ____ to book train tickets several weeks early.",
      answers: ["cheaper", "cheapest"],
      explanation: "A comparative adjective is needed: 'cheaper', costing less money."
    },
    {
      stem: "PERSON",
      text: "Our new coach has a warm and friendly ____.",
      answers: ["personality"],
      explanation: "A noun is needed at the end. 'Person' becomes 'personality' with -ality."
    },
    {
      stem: "EMBARRASS",
      text: "Falling over in front of the whole school was so ____.",
      answers: ["embarrassing"],
      explanation: "The event causes the feeling, so we use the -ing adjective 'embarrassing'."
    },
    {
      stem: "GOVERN",
      text: "The ____ has promised free bus travel for all students.",
      answers: ["government"],
      explanation: "A noun is needed after 'The'. 'Govern' becomes 'government' with -ment."
    },
    {
      stem: "SPORT",
      text: "Both my cousins are very ____ and spend every weekend outdoors.",
      answers: ["sporty"],
      explanation: "An adjective is needed after 'very'. 'Sport' becomes 'sporty' with -y."
    },
    {
      stem: "REPLACE",
      text: "The battery is old, and a ____ will cost about twenty pounds.",
      answers: ["replacement"],
      explanation: "A noun is needed after 'a'. 'Replace' becomes 'replacement' with -ment."
    },
    {
      stem: "SPECIAL",
      text: "The doctor sent me to a heart ____ at the city hospital.",
      answers: ["specialist"],
      explanation: "A person noun is needed after 'heart'. 'Special' becomes 'specialist' with -ist."
    },
    {
      stem: "ELECTRIC",
      text: "An ____ came to fix the broken lights in our classroom.",
      answers: ["electrician"],
      explanation: "A person noun is needed after 'An'. 'Electric' becomes 'electrician' with -ian."
    },
    {
      stem: "SATISFY",
      text: "The customers seemed completely ____ with the new menu.",
      answers: ["satisfied"],
      explanation: "The people feel the emotion, so we use the -ed adjective 'satisfied'."
    },
    {
      stem: "ORIGIN",
      text: "The plan was ____ much smaller, but it grew every month.",
      answers: ["originally"],
      explanation: "An adverb is needed before 'much smaller'. 'Origin' becomes 'originally'."
    },
    {
      stem: "REFUSE",
      text: "Her polite ____ of the job offer surprised the company.",
      answers: ["refusal"],
      explanation: "A noun is needed after 'polite'. 'Refuse' becomes 'refusal' with -al."
    },
    {
      stem: "TASTE",
      text: "This lemon cake is the most ____ dessert on the menu.",
      answers: ["delicious", "tasty"],
      explanation: "An adjective is needed after 'the most'. From 'taste' we get 'tasty'."
    },
    {
      stem: "WORK",
      text: "The ____ arrived early to repair the broken water pipe.",
      answers: ["workers", "workmen", "worker", "workman"],
      explanation: "A person noun is needed after 'The'. Add -er to 'work' to make 'worker'."
    },
    {
      stem: "SOCIETY",
      text: "Volleyball is a very ____ game, perfect for making new friends.",
      answers: ["sociable", "social"],
      explanation: "An adjective is needed after 'very'. 'Society' relates to 'sociable'."
    },
    {
      stem: "SHARP",
      text: "At the bend, the road turns ____ to the left, so slow down.",
      answers: ["sharply"],
      explanation: "An adverb is needed to describe how the road turns. Add -ly to 'sharp'."
    },
    {
      stem: "IMPORTANT",
      text: "Nothing matches the ____ of clean drinking water for a village.",
      answers: ["importance"],
      explanation: "A noun is needed after 'the'. 'Important' becomes 'importance'."
    },
    {
      stem: "RELATION",
      text: "I have a very close ____ with my grandmother.",
      answers: ["relationship"],
      explanation: "A noun is needed after 'close'. 'Relation' becomes 'relationship' with -ship."
    },
    {
      stem: "BORE",
      text: "The students looked ____ during the long grammar lecture.",
      answers: ["bored"],
      explanation: "The students feel the emotion, so we use the -ed adjective 'bored'."
    },
    {
      stem: "HAND",
      text: "Please write your answers clearly — your ____ is hard to read.",
      answers: ["handwriting"],
      explanation: "The compound noun 'handwriting' names the way a person writes by hand."
    },
    {
      stem: "CERTAIN",
      text: "There is still some ____ about the time of tomorrow's match.",
      answers: ["uncertainty"],
      explanation: "A noun with a negative prefix is needed: 'uncertainty', not being sure."
    },
    {
      stem: "PLAY",
      text: "The children spent the whole afternoon in the ____ behind the school.",
      answers: ["playground"],
      explanation: "The compound noun 'playground' names the place where children play."
    },
    {
      stem: "VARY",
      text: "The market sells a wide ____ of cheeses from local farms.",
      answers: ["variety"],
      explanation: "A noun is needed after 'a wide'. 'Vary' becomes 'variety' with -iety."
    },
    {
      stem: "DEMONSTRATE",
      text: "The chef gave a cooking ____ in the square on Saturday.",
      answers: ["demonstration"],
      explanation: "A noun is needed after 'cooking'. 'Demonstrate' becomes 'demonstration'."
    },
    {
      stem: "TIRE",
      text: "Looking after three small children can be really ____.",
      answers: ["tiring"],
      explanation: "The activity causes the feeling, so we use the -ing adjective 'tiring'."
    },
    {
      stem: "QUALIFY",
      text: "You need a teaching ____ to work at this language school.",
      answers: ["qualification"],
      explanation: "A noun is needed after 'teaching'. 'Qualify' becomes 'qualification'."
    },
    {
      stem: "SOFT",
      text: "The snow fell ____ on the quiet streets all evening.",
      answers: ["softly"],
      explanation: "An adverb is needed to describe how the snow fell. Add -ly to 'soft'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part3 = QUESTIONS.part3.concat(BANK);
})();
