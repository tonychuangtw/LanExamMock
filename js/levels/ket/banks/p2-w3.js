/* KET Prep extra bank: part2 wave 3 */
(function () {
  var BANK = [
    {
      text: "We travelled to Italy ____ plane last August.",
      answers: ["by"],
      explanation: "'By + transport' describes how you travel: by plane, by train."
    },
    {
      text: "The train leaves ____ platform three in five minutes.",
      answers: ["from"],
      explanation: "Trains leave 'from' a platform; the phrase shows the starting point."
    },
    {
      text: "____ far is the beach from the hotel?",
      answers: ["how"],
      explanation: "'How far' asks about distance between two places."
    },
    {
      text: "It was sunny, ____ we went for a walk by the river.",
      answers: ["so"],
      explanation: "'So' shows the result of the sunny weather."
    },
    {
      text: "We stayed ____ a small hotel near the station.",
      answers: ["in", "at"],
      explanation: "'Stay in/at a hotel' — both prepositions are used for accommodation."
    },
    {
      text: "____ did you get here so quickly? I took a taxi.",
      answers: ["how"],
      explanation: "'How' asks about the way something was done."
    },
    {
      text: "The mountains were covered ____ snow in December.",
      answers: ["in", "with"],
      explanation: "'Covered in/with snow' — both prepositions follow 'covered'."
    },
    {
      text: "I have never ____ such a beautiful sunset before.",
      answers: ["seen", "watched"],
      explanation: "Present perfect needs a past participle: never seen/watched."
    },
    {
      text: "____ it rains tomorrow, we will stay at home.",
      answers: ["if"],
      explanation: "'If' introduces the condition in a first conditional sentence."
    },
    {
      text: "The bus was full, so we had to ____ for the next one.",
      answers: ["wait", "look"],
      explanation: "'Wait for' the next bus is the natural action; 'look for' also fits."
    },
    {
      text: "She swims in the sea every day ____ summer.",
      answers: ["in", "during", "every", "each"],
      explanation: "'In/during summer' places the action in the season."
    },
    {
      text: "We arrived ____ the airport two hours before the flight.",
      answers: ["at"],
      explanation: "'Arrive at' is used with buildings and points like the airport."
    },
    {
      text: "It is ____ colder today than it was yesterday.",
      answers: ["much", "far", "even"],
      explanation: "'Much/far/even' can strengthen a comparative adjective like 'colder'."
    },
    {
      text: "____ was your trip to London? It was fantastic.",
      answers: ["how"],
      explanation: "'How was...?' asks for an opinion or description of an experience."
    },
    {
      text: "You can see the whole city ____ the top of the tower.",
      answers: ["from"],
      explanation: "'From the top' shows the viewpoint of what you can see."
    },
    {
      text: "He runs faster ____ anyone else in his team.",
      answers: ["than"],
      explanation: "'Than' follows the comparative 'faster' in a comparison."
    },
    {
      text: "We went fishing ____ the lake with my uncle.",
      answers: ["at", "on", "in", "near", "by"],
      explanation: "'At/on/near/by the lake' all describe where the fishing happened."
    },
    {
      text: "____ time is your flight on Sunday?",
      answers: ["what"],
      explanation: "'What time' is the fixed question phrase for clock times."
    },
    {
      text: "The weather ____ terrible during our whole holiday.",
      answers: ["was"],
      explanation: "The singular subject 'the weather' takes 'was' in the past."
    },
    {
      text: "I'm going to learn to ski ____ winter.",
      answers: ["this", "next", "in", "every"],
      explanation: "'This/next winter' or 'in winter' places the plan in time."
    },
    {
      text: "Don't swim here. The water is very ____.",
      answers: ["deep", "cold", "dirty", "dangerous"],
      explanation: "An adjective explains why swimming is a bad idea: deep, cold, dirty."
    },
    {
      text: "We walked ____ the bridge to the old town.",
      answers: ["across", "over"],
      explanation: "'Across' or 'over' the bridge describes movement from one side to the other."
    },
    {
      text: "____ do you usually go on holiday? To the mountains.",
      answers: ["where"],
      explanation: "'Where' asks about the place; the answer names a destination."
    },
    {
      text: "My team won the match, ____ everyone was happy.",
      answers: ["so", "and"],
      explanation: "'So' or 'and' links the win with the happy result."
    },
    {
      text: "He hurt his leg ____ he was playing basketball.",
      answers: ["while", "when", "as"],
      explanation: "'While/when/as' introduces the action in progress during the accident."
    },
    {
      text: "The ticket office is ____ the entrance of the stadium.",
      answers: ["at", "near", "by", "beside", "opposite", "inside"],
      explanation: "A place preposition like 'at' or 'near' locates the ticket office."
    },
    {
      text: "____ sport do you prefer, tennis or football?",
      answers: ["which", "what"],
      explanation: "'Which' is used when choosing between named options."
    },
    {
      text: "I can't play tennis today ____ I have hurt my arm.",
      answers: ["because", "as", "since"],
      explanation: "A reason word explains why playing is impossible."
    },
    {
      text: "It snowed all night, and ____ the morning everything was white.",
      answers: ["in", "by"],
      explanation: "'In the morning' places the scene in time; 'by the morning' also works."
    },
    {
      text: "We go camping ____ year in the same forest.",
      answers: ["every", "each"],
      explanation: "'Every year' or 'each year' expresses a repeated annual activity."
    },
    {
      text: "____ long does the journey take? About two hours.",
      answers: ["how"],
      explanation: "'How long' asks about the duration of something."
    },
    {
      text: "She was swimming ____ the pool when I arrived.",
      answers: ["in"],
      explanation: "'In the pool' describes where the swimming happened."
    },
    {
      text: "Look at those clouds! It is going ____ rain soon.",
      answers: ["to"],
      explanation: "'Going to' + verb makes a prediction from present evidence."
    },
    {
      text: "This is the ____ hotel I have ever stayed in.",
      answers: ["best", "nicest", "worst", "cheapest", "biggest"],
      explanation: "A superlative fits before the noun with 'ever': the best/worst hotel."
    },
    {
      text: "We took lots ____ photos of the old castle.",
      answers: ["of"],
      explanation: "'Lots of' is the quantity phrase before a plural noun."
    },
    {
      text: "____ not walk there? It's only ten minutes away.",
      answers: ["why"],
      explanation: "'Why not + verb?' is a way of making a suggestion."
    },
    {
      text: "The wind was ____ strong that my hat flew away.",
      answers: ["so"],
      explanation: "'So + adjective + that' shows the result of the strong wind."
    },
    {
      text: "He scored two goals ____ the second half of the match.",
      answers: ["in", "during"],
      explanation: "'In/during the second half' places the goals in that period."
    },
    {
      text: "____ you been to the new sports centre yet?",
      answers: ["have"],
      explanation: "Present perfect questions with 'you' start with 'Have'."
    },
    {
      text: "I left my sunglasses ____ the beach yesterday.",
      answers: ["on", "at"],
      explanation: "'On/at the beach' both describe where the sunglasses were left."
    },
    {
      text: "The river runs ____ the middle of the city.",
      answers: ["through"],
      explanation: "'Through' describes movement or a path inside something: through the city."
    },
    {
      text: "We were late, ____ the match had not started yet.",
      answers: ["but", "and"],
      explanation: "'But' contrasts being late with the match not having started."
    },
    {
      text: "It's too dark to play outside ____ .",
      answers: ["now", "tonight", "today"],
      explanation: "A time adverb completes the sentence: now, tonight or today."
    },
    {
      text: "My brother is a member ____ the school swimming club.",
      answers: ["of"],
      explanation: "'A member of' a club or group is the fixed phrase."
    },
    {
      text: "____ was the score at the end of the game?",
      answers: ["what"],
      explanation: "'What' asks about the score, which is a thing, not a person."
    },
    {
      text: "We couldn't see the sea ____ our hotel window.",
      answers: ["from"],
      explanation: "'From the window' describes the viewpoint."
    },
    {
      text: "Take your coat ____ you go out. It's freezing.",
      answers: ["when", "before", "if"],
      explanation: "'When/before/if you go out' all fit as time or condition clauses."
    },
    {
      text: "The plane took ____ on time despite the fog.",
      answers: ["off"],
      explanation: "'Take off' is the phrasal verb for a plane leaving the ground."
    },
    {
      text: "I enjoy ____ in the mountains every summer.",
      answers: ["walking", "hiking", "camping", "climbing"],
      explanation: "'Enjoy' is followed by an -ing form: walking, hiking, camping."
    },
    {
      text: "____ bus goes to the city centre, the 12 or the 14?",
      answers: ["which", "what"],
      explanation: "'Which' asks about a choice between two named buses."
    },
    {
      text: "There was nothing ____ do in the village in the evening.",
      answers: ["to"],
      explanation: "'Nothing to do' uses 'to' + infinitive after the pronoun."
    },
    {
      text: "She jumped ____ the cold water without waiting.",
      answers: ["into", "in"],
      explanation: "'Jump into/in the water' shows movement from outside to inside."
    },
    {
      text: "____ often is there a bus to the airport? Every half hour.",
      answers: ["how"],
      explanation: "'How often' asks about frequency; the answer is 'every half hour'."
    },
    {
      text: "The game was cancelled because ____ the storm.",
      answers: ["of"],
      explanation: "'Because of' + noun gives the reason: because of the storm."
    },
    {
      text: "He has played hockey ____ he was six years old.",
      answers: ["since"],
      explanation: "'Since' + a starting point is used with the present perfect."
    },
    {
      text: "We sat ____ the front of the boat to watch the dolphins.",
      answers: ["at", "in", "near"],
      explanation: "'At/in the front of' the boat describes the position."
    },
    {
      text: "____ a lovely view! You can see three islands.",
      answers: ["what"],
      explanation: "'What a + adjective + noun' forms an exclamation."
    },
    {
      text: "You must not take photos ____ the museum.",
      answers: ["in", "inside"],
      explanation: "'In/inside the museum' locates where photos are forbidden."
    },
    {
      text: "The race starts at nine, so ____ be late!",
      answers: ["don't"],
      explanation: "'Don't be late' is a negative imperative with 'be'."
    },
    {
      text: "My town is famous ____ its beautiful bridges.",
      answers: ["for"],
      explanation: "'Famous for' explains why a place is well known."
    },
    {
      text: "I'll send you a postcard ____ I arrive in Paris.",
      answers: ["when", "after", "once", "if"],
      explanation: "A time conjunction like 'when' or 'once' links arrival and sending."
    },
    {
      text: "We got ____ the train just before the doors closed.",
      answers: ["on", "onto", "off"],
      explanation: "'Get on/onto' a train means board it; 'get off' means leave it."
    },
    {
      text: "____ way is the beach, left or right?",
      answers: ["which"],
      explanation: "'Which way' asks about direction between choices."
    },
    {
      text: "The hotel was cheap ____ very comfortable.",
      answers: ["but", "and", "yet"],
      explanation: "'But/yet' contrasts cheap and comfortable; 'and' simply joins them."
    },
    {
      text: "It was raining, ____ the match continued.",
      answers: ["but", "yet"],
      explanation: "'But' or 'yet' contrasts the rain with the match continuing."
    },
    {
      text: "Is there a swimming pool ____ this hotel?",
      answers: ["in", "at", "near"],
      explanation: "'In/at this hotel' asks whether the hotel has a pool."
    },
    {
      text: "____ won the tennis match yesterday? Maria did.",
      answers: ["who"],
      explanation: "'Who' asks about the person; the answer is a name."
    },
    {
      text: "In winter it gets dark ____ five o'clock.",
      answers: ["at", "before", "by", "around", "about"],
      explanation: "'At/before/by/around five' all describe when it gets dark."
    },
    {
      text: "The map shows ____ to get to the old castle.",
      answers: ["how", "where"],
      explanation: "'How to get' (the way) or 'where to get to' fits after 'shows'."
    },
    {
      text: "We ran to the station ____ we still missed the train.",
      answers: ["but", "yet"],
      explanation: "'But/yet' contrasts running fast with missing the train."
    },
    {
      text: "____ anybody want another ticket for the match?",
      answers: ["does"],
      explanation: "'Anybody' is singular, so questions use 'does'."
    },
    {
      text: "The sea was warm enough ____ swimming.",
      answers: ["for"],
      explanation: "'Enough for + noun/-ing' shows suitability: warm enough for swimming."
    },
    {
      text: "She goes jogging ____ the park before work.",
      answers: ["in", "around", "through", "to"],
      explanation: "'In/around/through the park' all describe where she jogs."
    },
    {
      text: "____ you like to come sailing with us on Saturday?",
      answers: ["would"],
      explanation: "'Would you like to...?' is a polite invitation."
    },
    {
      text: "The stadium was built more ____ fifty years ago.",
      answers: ["than"],
      explanation: "'More than + number' expresses a larger quantity or time."
    },
    {
      text: "Our flight was delayed ____ two hours because of snow.",
      answers: ["for", "by"],
      explanation: "'Delayed for/by two hours' — both describe the length of the delay."
    },
    {
      text: "Let's meet ____ the cinema at seven.",
      answers: ["outside", "at", "near", "by", "opposite", "inside"],
      explanation: "A place preposition like 'outside' or 'at' names the meeting point."
    },
    {
      text: "____ far is it from here to the station? About a kilometre.",
      answers: ["how"],
      explanation: "'How far' asks about distance; the answer gives kilometres."
    },
    {
      text: "I always feel nervous ____ a big race.",
      answers: ["before", "during"],
      explanation: "'Before/during a race' both describe when the nerves come."
    },
    {
      text: "He fell ____ his bike but he wasn't hurt.",
      answers: ["off"],
      explanation: "'Fall off' a bike means to fall from it to the ground."
    },
    {
      text: "There ____ a lot of tourists in the square this morning.",
      answers: ["were", "are"],
      explanation: "Plural 'tourists' needs 'were' (past) or 'are' (present)."
    },
    {
      text: "You can rent a boat ____ ten euros an hour.",
      answers: ["for"],
      explanation: "'For + price' shows the cost of renting something."
    },
    {
      text: "The weather forecast says it ____ be sunny tomorrow.",
      answers: ["will", "might", "should", "may", "could"],
      explanation: "A modal of future or possibility fits: will/might/may be sunny."
    },
    {
      text: "We visited the zoo ____ our last day in the city.",
      answers: ["on"],
      explanation: "'On + day' is used with specific days: on our last day."
    },
    {
      text: "____ team do you play for? The school team.",
      answers: ["which", "what"],
      explanation: "'Which/what team' asks about the team's identity."
    },
    {
      text: "The hotel is ____ the sea, so we can hear the waves.",
      answers: ["near", "by", "beside", "opposite"],
      explanation: "A place preposition like 'near' or 'by' locates the hotel."
    },
    {
      text: "I'm looking forward ____ seeing you next month.",
      answers: ["to"],
      explanation: "'Look forward to' is always followed by 'to' + -ing."
    },
    {
      text: "It was the first time she ____ ever flown in a plane.",
      answers: ["had", "has"],
      explanation: "'Had/has ever flown' — the perfect auxiliary completes the experience."
    },
    {
      text: "Cycling is ____ than driving in the city centre.",
      answers: ["faster", "quicker", "cheaper", "better", "easier", "healthier", "safer"],
      explanation: "A comparative adjective goes before 'than': faster, cheaper, better."
    },
    {
      text: "Please stand ____ the yellow line on the platform.",
      answers: ["behind"],
      explanation: "'Stand behind the line' is the safety instruction at stations."
    },
    {
      text: "We watched the fireworks ____ the roof of our building.",
      answers: ["from", "on"],
      explanation: "'From/on the roof' describes where you watched from."
    },
    {
      text: "____ does this road lead? To the harbour.",
      answers: ["where"],
      explanation: "'Where' asks about the destination of the road."
    },
    {
      text: "He is not old ____ to drive a car yet.",
      answers: ["enough"],
      explanation: "'Adjective + enough + to' shows sufficiency: old enough to drive."
    },
    {
      text: "The tour guide told us ____ about the city's history.",
      answers: ["everything", "all", "lots", "much", "something", "stories"],
      explanation: "A pronoun or quantifier fits after 'told us': everything, all, lots."
    },
    {
      text: "I usually read a book ____ the train to work.",
      answers: ["on"],
      explanation: "'On the train' is the standard preposition for public transport."
    },
    {
      text: "____ hot today! Let's find some shade.",
      answers: ["how"],
      explanation: "'How + adjective!' forms an exclamation: How hot today!"
    },
    {
      text: "They walked ____ the hill to see the view from the top.",
      answers: ["up"],
      explanation: "'Walk up the hill' shows movement to a higher place."
    },
    {
      text: "You can't ride your skateboard here. Look at ____ sign.",
      answers: ["that", "the", "this"],
      explanation: "A determiner like 'that/the/this' points to the sign."
    },
    {
      text: "We had a wonderful time ____ our school trip to the farm.",
      answers: ["on", "during"],
      explanation: "'On/during a trip' both place the good time within the trip."
    },
    {
      text: "He kicked the ball ____ the goal and scored.",
      answers: ["into", "towards", "at", "in"],
      explanation: "'Into/towards the goal' show the direction of the kick."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
