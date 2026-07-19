/* KET Prep extra bank: part2 wave 5 */
(function () {
  var BANK = [
    {
      text: "My mother works ____ an office in the town centre.",
      answers: ["in", "at"],
      explanation: "'Work in/at an office' — both prepositions describe the workplace."
    },
    {
      text: "____ does a pilot do? He or she flies planes.",
      answers: ["what"],
      explanation: "'What does ... do?' asks about someone's job or duties."
    },
    {
      text: "The shop assistant was very helpful, ____ I bought two shirts.",
      answers: ["so", "and"],
      explanation: "'So/and' link the helpfulness with the result of buying shirts."
    },
    {
      text: "He starts work early ____ finishes at three in the afternoon.",
      answers: ["and", "but"],
      explanation: "'And' joins the two parts of his working day; 'but' adds contrast."
    },
    {
      text: "____ there a bank near here? I need some money.",
      answers: ["is"],
      explanation: "'Is there + singular noun?' asks about the existence of a place."
    },
    {
      text: "You can find the answer ____ the internet.",
      answers: ["on"],
      explanation: "'On the internet' is the fixed preposition phrase."
    },
    {
      text: "My laptop is broken, so I ____ to buy a new one.",
      answers: ["need", "have", "want", "plan", "hope"],
      explanation: "'Need/have/want to' + verb explains the plan to buy a laptop."
    },
    {
      text: "She sent ____ email to her boss this morning.",
      answers: ["an"],
      explanation: "'An' is used before the vowel sound in 'email'."
    },
    {
      text: "Please turn ____ your phones during the film.",
      answers: ["off"],
      explanation: "'Turn off' means stop a device working."
    },
    {
      text: "____ much does it cost to park here for an hour?",
      answers: ["how"],
      explanation: "'How much' asks about the price of parking."
    },
    {
      text: "The post office is ____ the other side of the road.",
      answers: ["on"],
      explanation: "'On the other side of' is the fixed phrase for location."
    },
    {
      text: "I'll meet you ____ the library at midday.",
      answers: ["outside", "at", "near", "by", "inside", "opposite"],
      explanation: "A place preposition like 'outside' or 'near' names the meeting place."
    },
    {
      text: "He has worked at the hospital ____ 2019.",
      answers: ["since"],
      explanation: "'Since + year' marks the starting point with the present perfect."
    },
    {
      text: "____ button do I press to start the machine?",
      answers: ["which", "what"],
      explanation: "'Which/what button' asks about a choice of buttons."
    },
    {
      text: "The museum is free ____ children under twelve.",
      answers: ["for"],
      explanation: "'Free for + group' says who does not have to pay."
    },
    {
      text: "My computer is much ____ than my old one.",
      answers: ["faster", "better", "quicker", "lighter", "newer", "quieter"],
      explanation: "A comparative goes before 'than': faster, better, lighter."
    },
    {
      text: "Excuse me, ____ you tell me the way to the station?",
      answers: ["can", "could", "would", "will"],
      explanation: "'Can/could you...?' politely asks a stranger for directions."
    },
    {
      text: "She wants to work ____ a hospital when she finishes university.",
      answers: ["in", "at"],
      explanation: "'Work in/at a hospital' describes a future workplace."
    },
    {
      text: "There are lots of tall buildings ____ the city centre.",
      answers: ["in", "around", "near"],
      explanation: "'In/around/near the city centre' all locate the buildings."
    },
    {
      text: "____ do you turn this camera on? Press the red button.",
      answers: ["how"],
      explanation: "'How' asks about the method of doing something."
    },
    {
      text: "I saved my photos ____ my new phone.",
      answers: ["on", "onto", "to"],
      explanation: "'Save on/onto/to a device' — all describe where files go."
    },
    {
      text: "The lift isn't working, so we must use the ____.",
      answers: ["stairs", "steps"],
      explanation: "The 'stairs' are what you use when the lift is broken."
    },
    {
      text: "My dad has a meeting ____ nine to eleven tomorrow.",
      answers: ["from"],
      explanation: "'From ... to ...' marks the start and end times of the meeting."
    },
    {
      text: "____ works in that big grey building? Lawyers, I think.",
      answers: ["who"],
      explanation: "'Who' asks about people as the subject of the sentence."
    },
    {
      text: "You ____ smoke in this restaurant. It is not allowed.",
      answers: ["can't", "mustn't", "cannot", "shouldn't"],
      explanation: "'Can't/mustn't' express prohibition: it is against the rules."
    },
    {
      text: "The bookshop is ____ the cinema, on the same street.",
      answers: ["near", "opposite", "beside", "behind"],
      explanation: "A place preposition locates the shop: near/opposite/beside."
    },
    {
      text: "I always listen ____ the radio while I drive.",
      answers: ["to"],
      explanation: "'Listen to' is the correct verb + preposition pair."
    },
    {
      text: "____ old buildings in this street are two hundred years old.",
      answers: ["the", "these", "those", "some", "many"],
      explanation: "A determiner or quantifier fits before 'old buildings'."
    },
    {
      text: "He forgot his password ____ he couldn't open his email.",
      answers: ["so", "and"],
      explanation: "'So' shows the result of forgetting the password."
    },
    {
      text: "This town is quieter ____ the capital city.",
      answers: ["than"],
      explanation: "'Than' follows the comparative 'quieter'."
    },
    {
      text: "The concert tickets go on sale ____ Monday morning.",
      answers: ["on", "next", "this"],
      explanation: "'On Monday' or 'next/this Monday' places the event in time."
    },
    {
      text: "She is learning Spanish ____ she wants to work in Madrid.",
      answers: ["because", "as", "since"],
      explanation: "A reason word explains why she is learning Spanish."
    },
    {
      text: "____ you ever worked in a shop before?",
      answers: ["have"],
      explanation: "Present perfect experience questions start with 'Have you ever...'."
    },
    {
      text: "The train was ____ crowded that we couldn't sit down.",
      answers: ["so"],
      explanation: "'So + adjective + that' expresses a result."
    },
    {
      text: "Write your name and address ____ this form, please.",
      answers: ["on"],
      explanation: "'On a form' is the standard preposition for filling in documents."
    },
    {
      text: "I'll wait here ____ you finish your shopping.",
      answers: ["while", "until", "till"],
      explanation: "'While/until you finish' describe the waiting period."
    },
    {
      text: "____ is the quickest way to the hospital? Down this road.",
      answers: ["what", "which"],
      explanation: "'What/which way' asks about the best route."
    },
    {
      text: "The waiter wrote ____ our order in a little notebook.",
      answers: ["down"],
      explanation: "'Write down' means record something on paper."
    },
    {
      text: "You don't ____ to pay. The exhibition is free today.",
      answers: ["have", "need"],
      explanation: "'Don't have to' or 'don't need to' means it is not necessary."
    },
    {
      text: "There is a bridge ____ the river near the market.",
      answers: ["over", "across"],
      explanation: "'Over/across the river' describe the bridge's position."
    },
    {
      text: "He took the wrong bus and got completely ____.",
      answers: ["lost", "confused"],
      explanation: "'Get lost' means not know where you are."
    },
    {
      text: "My cousin is a nurse. ____ works at night sometimes.",
      answers: ["she", "he"],
      explanation: "A subject pronoun (she/he) refers back to 'my cousin'."
    },
    {
      text: "Could you speak more ____, please? I can't hear you.",
      answers: ["loudly", "slowly", "clearly"],
      explanation: "An adverb after 'more' fixes the problem: loudly, slowly, clearly."
    },
    {
      text: "____ many floors does this building have? Twenty.",
      answers: ["how"],
      explanation: "'How many' asks about the number of floors."
    },
    {
      text: "The city was ____ busy in the past than it is now.",
      answers: ["less", "more"],
      explanation: "'Less/more busy' compares the past with the present."
    },
    {
      text: "Put your rubbish ____ the bin, not on the ground.",
      answers: ["in", "into", "inside"],
      explanation: "'In/into the bin' shows where the rubbish should go."
    },
    {
      text: "____ this street on the map? I can't find it.",
      answers: ["is"],
      explanation: "'Is + subject + place?' asks if the street appears on the map."
    },
    {
      text: "The alarm goes ____ at six every morning.",
      answers: ["off"],
      explanation: "'Go off' describes an alarm making its sound."
    },
    {
      text: "He paid ____ the tickets with his credit card.",
      answers: ["for"],
      explanation: "'Pay for something' uses 'for' before the thing bought."
    },
    {
      text: "You'll find the toilets ____ the ground floor.",
      answers: ["on"],
      explanation: "'On + floor' is the correct preposition: on the ground floor."
    },
    {
      text: "____ anyone know where the manager is?",
      answers: ["does"],
      explanation: "'Anyone' is singular, so the question uses 'does'."
    },
    {
      text: "I'm afraid the doctor is busy ____ the moment.",
      answers: ["at"],
      explanation: "'At the moment' is the fixed phrase meaning 'now'."
    },
    {
      text: "She turned ____ the TV to watch the news.",
      answers: ["on"],
      explanation: "'Turn on' means start a device working."
    },
    {
      text: "The letter arrived two days ____. I read it already.",
      answers: ["ago", "later", "before", "early"],
      explanation: "'Two days ago' places the arrival in the past."
    },
    {
      text: "This machine is easy ____ use. Just follow the pictures.",
      answers: ["to"],
      explanation: "'Easy to + verb' describes how simple an action is."
    },
    {
      text: "____ you help me carry these boxes upstairs?",
      answers: ["can", "could", "will", "would"],
      explanation: "'Can/could/will/would you...?' politely asks for help."
    },
    {
      text: "The children aren't allowed ____ play in this area.",
      answers: ["to"],
      explanation: "'Allowed to + verb' is the passive permission pattern."
    },
    {
      text: "Our office is closed ____ the holidays until January.",
      answers: ["for", "during", "over"],
      explanation: "'For/during/over the holidays' all describe the closed period."
    },
    {
      text: "____ wrote this message on the board? It's very funny.",
      answers: ["who"],
      explanation: "'Who' is the subject of 'wrote', asking about the writer."
    },
    {
      text: "The bus stop is only two minutes ____ foot from here.",
      answers: ["on"],
      explanation: "'On foot' is the fixed phrase for walking."
    },
    {
      text: "I'd like to open a window because it's very hot in ____.",
      answers: ["here"],
      explanation: "'In here' means inside this room or place."
    },
    {
      text: "He was born ____ the first of March.",
      answers: ["on"],
      explanation: "'On' is used with dates: on the first of March."
    },
    {
      text: "There's too ____ noise in this cafe. Let's go somewhere quieter.",
      answers: ["much"],
      explanation: "'Too much' goes with the uncountable noun 'noise'."
    },
    {
      text: "My phone battery is low. Can I ____ it here?",
      answers: ["charge"],
      explanation: "'Charge a phone' means fill its battery with power."
    },
    {
      text: "The meeting will finish ____ an hour, at about four.",
      answers: ["in"],
      explanation: "'In + period' means after that time passes: in an hour."
    },
    {
      text: "____ far is the nearest petrol station? Five kilometres.",
      answers: ["how"],
      explanation: "'How far' asks about distance to a place."
    },
    {
      text: "This road is closed, so drivers ____ to turn left.",
      answers: ["have", "need"],
      explanation: "'Have to' or 'need to' expresses what drivers must do."
    },
    {
      text: "She looked ____ the word in an online dictionary.",
      answers: ["up"],
      explanation: "'Look up' means find information in a book or online."
    },
    {
      text: "____ is it today? It's the tenth of June.",
      answers: ["what"],
      explanation: "'What is it today?' with a date answer asks about the date."
    },
    {
      text: "The film starts at eight, so let's leave home ____ seven thirty.",
      answers: ["at", "by", "before", "around", "about"],
      explanation: "'At/by/before seven thirty' all give a suitable leaving time."
    },
    {
      text: "I can't open this door. Have you got the ____?",
      answers: ["key", "keys", "code"],
      explanation: "You need a 'key' (or keys/code) to open a locked door."
    },
    {
      text: "We moved ____ this town when I was five years old.",
      answers: ["to"],
      explanation: "'Move to + place' describes changing where you live."
    },
    {
      text: "Take the second street ____ the right after the bank.",
      answers: ["on"],
      explanation: "'On the right/left' is the fixed phrase for directions."
    },
    {
      text: "____ your new job difficult? Not really, I like it.",
      answers: ["is"],
      explanation: "'Is + subject + adjective?' forms the yes/no question."
    },
    {
      text: "The keys were ____ the table all the time!",
      answers: ["on", "under"],
      explanation: "'On/under the table' locate the missing keys."
    },
    {
      text: "He speaks English very ____ for a beginner.",
      answers: ["well"],
      explanation: "'Well' is the adverb of 'good': speak English well."
    },
    {
      text: "I'll text you ____ soon as the taxi arrives.",
      answers: ["as"],
      explanation: "'As soon as' is the fixed phrase meaning immediately when."
    },
    {
      text: "There isn't ____ to sit. All the chairs are taken.",
      answers: ["anywhere", "space", "room"],
      explanation: "'Anywhere to sit' or 'room/space to sit' fit the negative."
    },
    {
      text: "____ did you park the car? Behind the supermarket.",
      answers: ["where"],
      explanation: "'Where' asks about the place; the answer gives a location."
    },
    {
      text: "The manager wants to speak ____ you about the new project.",
      answers: ["to", "with"],
      explanation: "'Speak to/with someone' — both prepositions are correct."
    },
    {
      text: "Everything in this shop costs ____ than five pounds.",
      answers: ["less", "more"],
      explanation: "'Less/more than + amount' compares prices."
    },
    {
      text: "I was ____ the phone when you knocked at the door.",
      answers: ["on"],
      explanation: "'On the phone' means talking on it at that moment."
    },
    {
      text: "____ shall we do this weekend? Maybe visit the market?",
      answers: ["what"],
      explanation: "'What shall we do?' asks for ideas about activities."
    },
    {
      text: "The lights went out ____ the storm last night.",
      answers: ["during", "in", "after", "because"],
      explanation: "'During/in/after the storm' place the event in time."
    },
    {
      text: "He isn't at his desk. He must ____ at lunch.",
      answers: ["be"],
      explanation: "'Must be' expresses a logical guess about the present."
    },
    {
      text: "Please fill ____ this form and sign it at the bottom.",
      answers: ["in", "out"],
      explanation: "'Fill in' (British) or 'fill out' (American) a form."
    },
    {
      text: "This is the street ____ my father grew up.",
      answers: ["where"],
      explanation: "'Where' introduces a relative clause about a place."
    },
    {
      text: "I haven't seen my old teacher ____ a long time.",
      answers: ["for", "in"],
      explanation: "'For/in a long time' both follow the present perfect negative."
    },
    {
      text: "____ people were waiting outside the shop before it opened.",
      answers: ["some", "many", "several", "twenty", "most", "few", "two"],
      explanation: "A quantifier or number fits before plural 'people'."
    },
    {
      text: "The traffic is bad today, so the taxi ____ be late.",
      answers: ["might", "may", "could", "will"],
      explanation: "A modal of possibility or prediction fits: might/may/will be late."
    },
    {
      text: "You can leave your coat ____ the door on the hook.",
      answers: ["by", "behind", "near", "beside"],
      explanation: "'By/behind/near the door' locate the coat hook."
    },
    {
      text: "____ works harder, your brother or your sister?",
      answers: ["who"],
      explanation: "'Who' asks which person does the action more."
    },
    {
      text: "The new bakery opens ____ week, next Monday I think.",
      answers: ["next", "this"],
      explanation: "'Next/this week' places the opening in the near future."
    },
    {
      text: "I always check my emails ____ I start work.",
      answers: ["before", "when", "after", "once"],
      explanation: "A time conjunction links the two actions: before/when/after."
    },
    {
      text: "How ____ is your office from the station? Ten minutes' walk.",
      answers: ["far"],
      explanation: "'How far' asks about distance; the answer gives walking time."
    },
    {
      text: "Don't worry ____ the test. You will do well.",
      answers: ["about"],
      explanation: "'Worry about' is the fixed verb + preposition pair."
    },
    {
      text: "The programme was boring, so I turned the TV ____ and read a book.",
      answers: ["off"],
      explanation: "'Turn off' the TV means stop watching it."
    },
    {
      text: "There's a small cafe at the top of the hill ____ you can rest.",
      answers: ["where"],
      explanation: "'Where' introduces a relative clause about the cafe as a place."
    },
    {
      text: "____ we finish early today, we can go to the beach.",
      answers: ["if"],
      explanation: "'If' introduces the condition for going to the beach."
    },
    {
      text: "The library is very quiet ____ the mornings.",
      answers: ["in", "during"],
      explanation: "'In/during the mornings' place the quietness in that part of the day."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
