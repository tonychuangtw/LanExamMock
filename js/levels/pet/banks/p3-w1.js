/* PET Prep extra bank: part3 wave 1 */
(function () {
  var BANK = [
    {
      stem: "INVITE",
      text: "Thank you very much for the ____ to your birthday party.",
      answers: ["invitation"],
      explanation: "After 'the' we need a noun. The noun form of 'invite' is 'invitation'."
    },
    {
      stem: "PAINT",
      text: "My grandfather was a famous ____ who sold pictures all over Europe.",
      answers: ["painter"],
      explanation: "We need a person noun after 'a famous'. Add -er to 'paint' to make 'painter'."
    },
    {
      stem: "DANGER",
      text: "It is ____ to ride a bicycle at night without lights.",
      answers: ["dangerous"],
      explanation: "An adjective is needed after 'It is'. 'Danger' becomes 'dangerous' with the suffix -ous."
    },
    {
      stem: "CARE",
      text: "Please read the instructions ____ before you start the test.",
      answers: ["carefully"],
      explanation: "An adverb is needed to describe how you read. 'Care' becomes 'carefully'."
    },
    {
      stem: "HAPPY",
      text: "The children were ____ because the trip to the zoo was cancelled.",
      answers: ["unhappy"],
      explanation: "The meaning is negative because the trip was cancelled, so we add the prefix un- to 'happy'."
    },
    {
      stem: "SING",
      text: "The band is looking for a new ____ for their summer concerts.",
      answers: ["singer"],
      explanation: "A person noun is needed after 'a new'. Add -er to 'sing' to make 'singer'."
    },
    {
      stem: "FRIEND",
      text: "Everyone in the village was very ____ and helped us find the hotel.",
      answers: ["friendly"],
      explanation: "An adjective is needed after 'very'. 'Friend' becomes 'friendly'."
    },
    {
      stem: "EXCITE",
      text: "The last ten minutes of the match were really ____.",
      answers: ["exciting"],
      explanation: "The match causes the feeling, so we use the -ing adjective 'exciting'."
    },
    {
      stem: "POSSIBLE",
      text: "It was ____ to hear the teacher because of the noise outside.",
      answers: ["impossible"],
      explanation: "The sentence needs a negative meaning, so we add the prefix im- to 'possible'."
    },
    {
      stem: "ARRIVE",
      text: "We waited at the station for the ____ of the night train.",
      answers: ["arrival"],
      explanation: "A noun is needed after 'the'. The noun form of 'arrive' is 'arrival'."
    },
    {
      stem: "SUN",
      text: "It was a warm and ____ morning, perfect for a picnic.",
      answers: ["sunny"],
      explanation: "An adjective is needed to describe the morning. 'Sun' becomes 'sunny' with -y."
    },
    {
      stem: "HELP",
      text: "The map on my phone was very ____ when I got lost in the city.",
      answers: ["helpful"],
      explanation: "An adjective is needed after 'very'. 'Help' becomes 'helpful' with the suffix -ful."
    },
    {
      stem: "SCIENCE",
      text: "A famous ____ visited our school to talk about space travel.",
      answers: ["scientist"],
      explanation: "A person noun is needed. 'Science' becomes 'scientist' with the suffix -ist."
    },
    {
      stem: "AGREE",
      text: "My sister and I often ____ about which TV programme to watch.",
      answers: ["disagree"],
      explanation: "The sentence needs the opposite meaning of 'agree', so we add the prefix dis-."
    },
    {
      stem: "BORE",
      text: "The film was so ____ that I fell asleep before the end.",
      answers: ["boring"],
      explanation: "The film causes the feeling, so we use the -ing adjective 'boring'."
    },
    {
      stem: "QUICK",
      text: "She finished her homework ____ so she could go out with her friends.",
      answers: ["quickly"],
      explanation: "An adverb is needed to describe how she finished. Add -ly to 'quick'."
    },
    {
      stem: "MUSIC",
      text: "My uncle is a ____ who plays the guitar in a jazz band.",
      answers: ["musician"],
      explanation: "A person noun is needed after 'a'. 'Music' becomes 'musician' with the suffix -ian."
    },
    {
      stem: "LUCK",
      text: "We were very ____ to get the last two tickets for the show.",
      answers: ["lucky"],
      explanation: "An adjective is needed after 'very'. 'Luck' becomes 'lucky' with -y."
    },
    {
      stem: "BUILD",
      text: "The tallest ____ in our town is the new hospital.",
      answers: ["building"],
      explanation: "A noun is needed after 'The tallest'. The noun form of 'build' is 'building'."
    },
    {
      stem: "KIND",
      text: "Thank you for your ____ in helping me carry my heavy bags.",
      answers: ["kindness"],
      explanation: "A noun is needed after 'your'. 'Kind' becomes 'kindness' with the suffix -ness."
    },
    {
      stem: "USE",
      text: "This old phone is ____ now because the screen is completely broken.",
      answers: ["useless"],
      explanation: "The meaning is negative, so we add -less to 'use' to make the adjective 'useless'."
    },
    {
      stem: "VISIT",
      text: "Thousands of ____ come to the castle every summer.",
      answers: ["visitors"],
      explanation: "A plural person noun is needed after 'Thousands of'. 'Visit' becomes 'visitors'."
    },
    {
      stem: "HEALTH",
      text: "Eating fruit and vegetables every day is very ____ for children.",
      answers: ["healthy"],
      explanation: "An adjective is needed after 'very'. 'Health' becomes 'healthy' with -y."
    },
    {
      stem: "TRAIN",
      text: "Our football ____ makes us run five kilometres before every practice.",
      answers: ["trainer"],
      explanation: "A person noun is needed after 'Our football'. Add -er to 'train' to make 'trainer'."
    },
    {
      stem: "SLOW",
      text: "The old man walked ____ up the hill towards the church.",
      answers: ["slowly"],
      explanation: "An adverb is needed to describe how he walked. Add -ly to 'slow'."
    },
    {
      stem: "TEACH",
      text: "My favourite ____ at school gives us interesting projects instead of tests.",
      answers: ["teacher"],
      explanation: "A person noun is needed after 'My favourite'. Add -er to 'teach'."
    },
    {
      stem: "SURPRISE",
      text: "I was really ____ when my cousin arrived from Australia without telling us.",
      answers: ["surprised"],
      explanation: "The person feels the emotion, so we use the -ed adjective 'surprised'."
    },
    {
      stem: "NOISE",
      text: "The classroom next door is always ____ during the lunch break.",
      answers: ["noisy"],
      explanation: "An adjective is needed to describe the classroom. 'Noise' becomes 'noisy'."
    },
    {
      stem: "PAY",
      text: "You can make the ____ by card or in cash at the ticket office.",
      answers: ["payment"],
      explanation: "A noun is needed after 'the'. 'Pay' becomes 'payment' with the suffix -ment."
    },
    {
      stem: "WIN",
      text: "The ____ of the competition will receive a new laptop.",
      answers: ["winner"],
      explanation: "A person noun is needed after 'The'. 'Win' becomes 'winner' with a double n and -er."
    },
    {
      stem: "COMFORT",
      text: "The hotel bed was so ____ that I slept for ten hours.",
      answers: ["comfortable"],
      explanation: "An adjective is needed after 'so'. 'Comfort' becomes 'comfortable' with -able."
    },
    {
      stem: "TIRE",
      text: "After the long walk in the mountains we were all extremely ____.",
      answers: ["tired"],
      explanation: "The people feel the emotion, so we use the -ed adjective 'tired'."
    },
    {
      stem: "EXPLAIN",
      text: "The teacher's ____ of the maths problem was very clear.",
      answers: ["explanation"],
      explanation: "A noun is needed after the possessive. 'Explain' becomes 'explanation'."
    },
    {
      stem: "RAIN",
      text: "Take an umbrella because the weather will be ____ this afternoon.",
      answers: ["rainy"],
      explanation: "An adjective is needed to describe the weather. 'Rain' becomes 'rainy' with -y."
    },
    {
      stem: "ACT",
      text: "My dream is to become an ____ and appear in films.",
      answers: ["actor"],
      explanation: "A person noun is needed after 'an'. 'Act' becomes 'actor' with the suffix -or."
    },
    {
      stem: "PATIENT",
      text: "Don't be so ____ — the bus will arrive in a few minutes.",
      answers: ["impatient"],
      explanation: "The meaning is negative, so we add the prefix im- to 'patient'."
    },
    {
      stem: "DIFFERENT",
      text: "There is a big ____ between the prices in the two supermarkets.",
      answers: ["difference"],
      explanation: "A noun is needed after 'a big'. 'Different' becomes 'difference'."
    },
    {
      stem: "SWIM",
      text: "She is the fastest ____ in our school team.",
      answers: ["swimmer"],
      explanation: "A person noun is needed after 'the fastest'. 'Swim' becomes 'swimmer' with double m."
    },
    {
      stem: "EASY",
      text: "You can ____ find the museum because it is next to the station.",
      answers: ["easily"],
      explanation: "An adverb is needed to describe the verb 'find'. 'Easy' becomes 'easily'."
    },
    {
      stem: "WONDER",
      text: "We had a ____ holiday by the sea last August.",
      answers: ["wonderful"],
      explanation: "An adjective is needed to describe the holiday. 'Wonder' becomes 'wonderful' with -ful."
    },
    {
      stem: "INTEREST",
      text: "The guide told us many ____ facts about the old palace.",
      answers: ["interesting"],
      explanation: "The facts cause the feeling, so we use the -ing adjective 'interesting'."
    },
    {
      stem: "EXPENSIVE",
      text: "Trainers in that shop are quite ____, so students often buy shoes there.",
      answers: ["inexpensive"],
      explanation: "The sentence needs the opposite meaning of 'expensive', so we add the prefix in-."
    },
    {
      stem: "FARM",
      text: "The ____ gets up at five o'clock to feed his animals.",
      answers: ["farmer"],
      explanation: "A person noun is needed after 'The'. Add -er to 'farm' to make 'farmer'."
    },
    {
      stem: "CLOUD",
      text: "The sky was grey and ____ all weekend, but it never rained.",
      answers: ["cloudy"],
      explanation: "An adjective is needed to describe the sky. 'Cloud' becomes 'cloudy' with -y."
    },
    {
      stem: "MOVE",
      text: "You should do more exercise, and even a short daily walk is good ____.",
      answers: ["movement"],
      explanation: "A noun is needed at the end of the sentence. 'Move' becomes 'movement' with -ment."
    },
    {
      stem: "DIRECT",
      text: "The film's ____ won an important prize at the festival.",
      answers: ["director"],
      explanation: "A person noun is needed after the possessive. 'Direct' becomes 'director' with -or."
    },
    {
      stem: "SAFE",
      text: "For your own ____, please do not lean out of the train window.",
      answers: ["safety"],
      explanation: "A noun is needed after 'your own'. 'Safe' becomes 'safety' with the suffix -ty."
    },
    {
      stem: "WEEK",
      text: "There is a ____ market in the square every Saturday morning.",
      answers: ["weekly"],
      explanation: "An adjective is needed to describe the market. 'Week' becomes 'weekly' with -ly."
    },
    {
      stem: "COOK",
      text: "There is a big electric ____ in the kitchen of our new flat.",
      answers: ["cooker"],
      explanation: "A thing noun is needed here. 'Cook' becomes 'cooker', the machine you cook on."
    },
    {
      stem: "AMAZE",
      text: "The view from the top of the tower was absolutely ____.",
      answers: ["amazing"],
      explanation: "The view causes the feeling, so we use the -ing adjective 'amazing'."
    },
    {
      stem: "NATION",
      text: "The ____ team will play its first match on Friday evening.",
      answers: ["national"],
      explanation: "An adjective is needed before 'team'. 'Nation' becomes 'national' with -al."
    },
    {
      stem: "DRIVE",
      text: "The bus ____ told us to sit down before he started the engine.",
      answers: ["driver"],
      explanation: "A person noun is needed after 'The bus'. Add -er to 'drive' to make 'driver'."
    },
    {
      stem: "ILL",
      text: "He missed two weeks of school because of a serious ____.",
      answers: ["illness"],
      explanation: "A noun is needed after 'a serious'. 'Ill' becomes 'illness' with the suffix -ness."
    },
    {
      stem: "ENJOY",
      text: "The picnic by the river was really ____ for the whole class.",
      answers: ["enjoyable"],
      explanation: "An adjective is needed after 'really'. 'Enjoy' becomes 'enjoyable' with -able."
    },
    {
      stem: "APPEAR",
      text: "The police asked questions about the strange ____ of the shopkeeper.",
      answers: ["disappearance"],
      explanation: "A noun with a negative prefix is needed; 'appear' becomes 'disappearance'."
    },
    {
      stem: "WRITE",
      text: "J.K. Rowling is one of the most successful ____ in the world.",
      answers: ["writers"],
      explanation: "A plural person noun is needed after 'the most successful'. 'Write' becomes 'writers'."
    },
    {
      stem: "WIND",
      text: "It was too ____ to play badminton in the garden.",
      answers: ["windy"],
      explanation: "An adjective is needed after 'too'. 'Wind' becomes 'windy' with -y."
    },
    {
      stem: "POLITE",
      text: "It is ____ to talk loudly on your phone in the library.",
      answers: ["impolite"],
      explanation: "The meaning is negative, so we add the prefix im- to 'polite'."
    },
    {
      stem: "GROW",
      text: "Scientists have studied the ____ of these plants for many years.",
      answers: ["growth"],
      explanation: "A noun is needed after 'the'. The noun form of 'grow' is 'growth'."
    },
    {
      stem: "BEAUTY",
      text: "The old bridge looks really ____ in the evening light.",
      answers: ["beautiful"],
      explanation: "An adjective is needed after 'really'. 'Beauty' becomes 'beautiful' with -ful."
    },
    {
      stem: "MANAGE",
      text: "The hotel ____ apologised because our room was not ready.",
      answers: ["manager"],
      explanation: "A person noun is needed after 'The hotel'. 'Manage' becomes 'manager' with -er."
    },
    {
      stem: "HOPE",
      text: "It was raining, but we set off on our trip feeling quite ____.",
      answers: ["hopeful"],
      explanation: "An adjective is needed after 'quite'. 'Hope' becomes 'hopeful' with the suffix -ful."
    },
    {
      stem: "SELL",
      text: "The market ____ gave us a discount because we bought so many apples.",
      answers: ["seller"],
      explanation: "A person noun is needed after 'The market'. 'Sell' becomes 'seller' with -er."
    },
    {
      stem: "TRADITION",
      text: "The dancers wore ____ costumes from the north of the country.",
      answers: ["traditional"],
      explanation: "An adjective is needed before 'costumes'. 'Tradition' becomes 'traditional' with -al."
    },
    {
      stem: "FIT",
      text: "Regular swimming has really improved my ____ this year.",
      answers: ["fitness"],
      explanation: "A noun is needed after 'my'. 'Fit' becomes 'fitness' with the suffix -ness."
    },
    {
      stem: "FRIGHTEN",
      text: "The thunder was so loud that the little dog looked really ____.",
      answers: ["frightened"],
      explanation: "The dog feels the emotion, so we use the -ed adjective 'frightened'."
    },
    {
      stem: "DAY",
      text: "Brushing your teeth should be part of your ____ routine.",
      answers: ["daily"],
      explanation: "An adjective is needed before 'routine'. 'Day' becomes 'daily'."
    },
    {
      stem: "SUCCESS",
      text: "Her plan to open a small café was very ____.",
      answers: ["successful"],
      explanation: "An adjective is needed after 'very'. 'Success' becomes 'successful' with -ful."
    },
    {
      stem: "TOUR",
      text: "In summer the old town is full of ____ taking photographs.",
      answers: ["tourists"],
      explanation: "A plural person noun is needed after 'full of'. 'Tour' becomes 'tourists' with -ist."
    },
    {
      stem: "QUIET",
      text: "She opened the door ____ so she would not wake the baby.",
      answers: ["quietly"],
      explanation: "An adverb is needed to describe how she opened the door. Add -ly to 'quiet'."
    },
    {
      stem: "CELEBRATE",
      text: "The New Year ____ in the main square lasted until midnight.",
      answers: ["celebration", "celebrations"],
      explanation: "A noun is needed after 'The New Year'. 'Celebrate' becomes 'celebration'."
    },
    {
      stem: "SALT",
      text: "This soup is too ____ for me — did you follow the recipe?",
      answers: ["salty"],
      explanation: "An adjective is needed after 'too'. 'Salt' becomes 'salty' with -y."
    },
    {
      stem: "APPOINT",
      text: "I have an ____ with the dentist at half past three.",
      answers: ["appointment"],
      explanation: "A noun is needed after 'an'. 'Appoint' becomes 'appointment' with the suffix -ment."
    },
    {
      stem: "FASHION",
      text: "My cousin always wears very ____ clothes to parties.",
      answers: ["fashionable"],
      explanation: "An adjective is needed before 'clothes'. 'Fashion' becomes 'fashionable' with -able."
    },
    {
      stem: "LOSE",
      text: "The ____ of his house keys made him late for work.",
      answers: ["loss"],
      explanation: "A noun is needed after 'The'. The noun form of 'lose' is 'loss'."
    },
    {
      stem: "COLLECT",
      text: "The museum has an amazing ____ of old coins from Roman times.",
      answers: ["collection"],
      explanation: "A noun is needed after 'an amazing'. 'Collect' becomes 'collection' with -ion."
    },
    {
      stem: "PERSON",
      text: "The waiter gave us a really ____ welcome and remembered our names.",
      answers: ["personal"],
      explanation: "An adjective is needed before 'welcome'. 'Person' becomes 'personal' with -al."
    },
    {
      stem: "TALK",
      text: "My little brother is so ____ that he never stops asking questions.",
      answers: ["talkative"],
      explanation: "An adjective is needed after 'so'. 'Talk' becomes 'talkative' with the suffix -ative."
    },
    {
      stem: "PLAY",
      text: "The tennis ____ practised for three hours before the final.",
      answers: ["player", "players"],
      explanation: "A person noun is needed after 'The tennis'. Add -er to 'play' to make 'player'."
    },
    {
      stem: "COLOUR",
      text: "The market was full of ____ fruit and flowers.",
      answers: ["colourful", "colorful"],
      explanation: "An adjective is needed before 'fruit'. 'Colour' becomes 'colourful' with -ful."
    },
    {
      stem: "DEEP",
      text: "Divers measured the ____ of the lake near the old bridge.",
      answers: ["depth"],
      explanation: "A noun is needed after 'the'. The noun form of 'deep' is 'depth'."
    },
    {
      stem: "REGULAR",
      text: "You should visit the dentist ____ , at least twice a year.",
      answers: ["regularly"],
      explanation: "An adverb is needed to describe how often you visit. Add -ly to 'regular'."
    },
    {
      stem: "USUAL",
      text: "It is ____ to see snow in this city, even in winter.",
      answers: ["unusual"],
      explanation: "The meaning is negative here, so we add the prefix un- to 'usual'."
    },
    {
      stem: "DISCUSS",
      text: "We had a long ____ about where to go on holiday this year.",
      answers: ["discussion"],
      explanation: "A noun is needed after 'a long'. 'Discuss' becomes 'discussion' with -ion."
    },
    {
      stem: "DIRT",
      text: "Take off those ____ boots before you come into the house!",
      answers: ["dirty"],
      explanation: "An adjective is needed before 'boots'. 'Dirt' becomes 'dirty' with -y."
    },
    {
      stem: "REPORT",
      text: "A young ____ from the local newspaper interviewed our head teacher.",
      answers: ["reporter"],
      explanation: "A person noun is needed after 'A young'. 'Report' becomes 'reporter' with -er."
    },
    {
      stem: "WARM",
      text: "She thanked her fans for the ____ of their welcome at the airport.",
      answers: ["warmth"],
      explanation: "A noun is needed after 'the'. The noun form of 'warm' is 'warmth'."
    },
    {
      stem: "CREATE",
      text: "Painting and writing stories are good ways to be ____.",
      answers: ["creative"],
      explanation: "An adjective is needed after 'to be'. 'Create' becomes 'creative' with -ive."
    },
    {
      stem: "TRUE",
      text: "To tell you the ____, I have never enjoyed camping.",
      answers: ["truth"],
      explanation: "A noun is needed after 'the'. The noun form of 'true' is 'truth'."
    },
    {
      stem: "DISAPPOINT",
      text: "We were ____ when the concert was cancelled at the last minute.",
      answers: ["disappointed"],
      explanation: "The people feel the emotion, so we use the -ed adjective 'disappointed'."
    },
    {
      stem: "FOOT",
      text: "My brother plays ____ for the school team every Wednesday.",
      answers: ["football"],
      explanation: "The compound noun 'football' is formed from 'foot' and names the sport."
    },
    {
      stem: "STRONG",
      text: "You need a lot of ____ to lift these heavy boxes.",
      answers: ["strength"],
      explanation: "A noun is needed after 'a lot of'. The noun form of 'strong' is 'strength'."
    },
    {
      stem: "PHOTOGRAPH",
      text: "A professional ____ took pictures at my sister's wedding.",
      answers: ["photographer"],
      explanation: "A person noun is needed after 'A professional'. Add -er to make 'photographer'."
    },
    {
      stem: "COMPETE",
      text: "More than fifty runners entered the ____ in the park.",
      answers: ["competition"],
      explanation: "A noun is needed after 'the'. 'Compete' becomes 'competition' with -ition."
    },
    {
      stem: "HONEST",
      text: "It was ____ of him to keep the wallet he found on the bus.",
      answers: ["dishonest"],
      explanation: "The meaning is negative, so we add the prefix dis- to 'honest'."
    },
    {
      stem: "SAND",
      text: "The beach near our campsite is long, ____ and perfect for children.",
      answers: ["sandy"],
      explanation: "An adjective is needed to describe the beach. 'Sand' becomes 'sandy' with -y."
    },
    {
      stem: "EDUCATE",
      text: "Free ____ is one of the most important things a country can offer.",
      answers: ["education"],
      explanation: "A noun is needed after 'Free'. 'Educate' becomes 'education' with the suffix -ion."
    },
    {
      stem: "CROWD",
      text: "The shopping centre gets very ____ on Saturday afternoons.",
      answers: ["crowded"],
      explanation: "An -ed adjective is needed after 'very' to describe the place: 'crowded'."
    },
    {
      stem: "REAL",
      text: "I didn't ____ how late it was until the film finished.",
      answers: ["realise", "realize"],
      explanation: "A verb is needed after 'didn't'. 'Real' becomes the verb 'realise'."
    },
    {
      stem: "SHORT",
      text: "The new tunnel will ____ the journey by twenty minutes.",
      answers: ["shorten"],
      explanation: "A verb is needed after 'will'. 'Short' becomes 'shorten' with the suffix -en."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part3 = QUESTIONS.part3.concat(BANK);
})();
