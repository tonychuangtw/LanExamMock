/* KET Prep extra bank: part2 wave 1 */
(function () {
  var BANK = [
    {
      text: "She ____ got a red bicycle and a blue helmet.",
      answers: ["has"],
      explanation: "'Has got' expresses possession with he/she/it. The auxiliary 'has' fills the gap."
    },
    {
      text: "My brother gets up ____ seven o'clock every morning.",
      answers: ["at"],
      explanation: "We use 'at' with clock times: at seven o'clock, at midnight."
    },
    {
      text: "____ you like chocolate ice cream?",
      answers: ["do"],
      explanation: "Present simple questions with 'you' need the auxiliary 'do'."
    },
    {
      text: "There ____ two bedrooms in our flat.",
      answers: ["are"],
      explanation: "'There are' is used with plural nouns like 'two bedrooms'."
    },
    {
      text: "I have breakfast ____ the morning before school.",
      answers: ["in"],
      explanation: "We say 'in the morning', 'in the afternoon' and 'in the evening'."
    },
    {
      text: "My sister is older ____ me by three years.",
      answers: ["than"],
      explanation: "Comparatives like 'older' are followed by 'than' when we compare two people."
    },
    {
      text: "We watch TV ____ the evening after dinner.",
      answers: ["in"],
      explanation: "The preposition 'in' is used with parts of the day: in the evening."
    },
    {
      text: "____ is your favourite colour, blue or green?",
      answers: ["what", "which"],
      explanation: "'What' or 'which' asks about a choice of colour; 'which' is common with a limited choice."
    },
    {
      text: "My dad ____ work at six o'clock in the evening.",
      answers: ["finishes", "leaves", "starts"],
      explanation: "A present simple verb with -es/-s fits after 'my dad': finishes, leaves or starts work."
    },
    {
      text: "Can I have ____ apple, please? I'm hungry.",
      answers: ["an"],
      explanation: "'An' is used before words that begin with a vowel sound, like 'apple'."
    },
    {
      text: "We don't have ____ milk in the fridge.",
      answers: ["any"],
      explanation: "'Any' is used with uncountable nouns in negative sentences."
    },
    {
      text: "My grandmother lives ____ a small village near the sea.",
      answers: ["in"],
      explanation: "We use 'in' with towns, cities and villages: live in a village."
    },
    {
      text: "____ old is your little sister?",
      answers: ["how"],
      explanation: "'How old' is the question phrase for asking about age."
    },
    {
      text: "He ____ his teeth twice a day.",
      answers: ["brushes", "cleans"],
      explanation: "Present simple with 'he' takes -es: he brushes or cleans his teeth."
    },
    {
      text: "I like tea, ____ I don't like coffee.",
      answers: ["but"],
      explanation: "'But' joins two ideas that are different or opposite."
    },
    {
      text: "____ there a supermarket near your house?",
      answers: ["is"],
      explanation: "Questions with 'there' and a singular noun use 'Is there...?'."
    },
    {
      text: "My mum ____ cooking dinner in the kitchen now.",
      answers: ["is"],
      explanation: "Present continuous needs 'is' with 'my mum': is cooking."
    },
    {
      text: "We go to the cinema ____ Saturdays.",
      answers: ["on"],
      explanation: "'On' is used with days of the week: on Saturdays, on Monday."
    },
    {
      text: "____ you swim when you were five years old?",
      answers: ["could"],
      explanation: "'Could' is the past form of 'can' for ability: Could you swim?"
    },
    {
      text: "This is my book and that one is ____.",
      answers: ["yours", "hers", "his", "mine", "theirs", "ours"],
      explanation: "A possessive pronoun like 'yours' or 'hers' stands alone without a noun."
    },
    {
      text: "I was tired, ____ I went to bed early.",
      answers: ["so"],
      explanation: "'So' introduces the result: tired, so I went to bed."
    },
    {
      text: "____ many people live in your house?",
      answers: ["how"],
      explanation: "'How many' asks about the number of countable things or people."
    },
    {
      text: "She doesn't ____ up early on Sundays.",
      answers: ["get", "wake"],
      explanation: "After 'doesn't' we use the base verb: get up or wake up."
    },
    {
      text: "There is ____ orange juice in the bottle.",
      answers: ["some"],
      explanation: "'Some' is used with uncountable nouns in positive sentences."
    },
    {
      text: "My parents ____ born in a small town.",
      answers: ["were"],
      explanation: "'Born' goes with the past of 'be': my parents were born."
    },
    {
      text: "He plays football ____ his friends after school.",
      answers: ["with"],
      explanation: "'With' shows who is together with you: play with friends."
    },
    {
      text: "____ is that girl over there? She's my cousin.",
      answers: ["who"],
      explanation: "'Who' is the question word for asking about a person."
    },
    {
      text: "I can't find ____ keys. Have you seen them?",
      answers: ["my", "the"],
      explanation: "A possessive like 'my' or the article 'the' fits before the noun 'keys'."
    },
    {
      text: "We are going ____ visit our grandparents next weekend.",
      answers: ["to"],
      explanation: "'Going to' + verb expresses a future plan: going to visit."
    },
    {
      text: "How ____ does this T-shirt cost?",
      answers: ["much"],
      explanation: "'How much' asks about price or amount of uncountable things."
    },
    {
      text: "My uncle works ____ a big hospital in the city.",
      answers: ["in", "at"],
      explanation: "Both 'in' and 'at' can be used for a place of work: work in/at a hospital."
    },
    {
      text: "You ____ wear a helmet when you ride a bike.",
      answers: ["must", "should"],
      explanation: "'Must' or 'should' expresses obligation or strong advice before a base verb."
    },
    {
      text: "____ name is Anna and she is ten years old.",
      answers: ["her"],
      explanation: "The possessive adjective 'her' matches 'she' in the second part."
    },
    {
      text: "I usually walk to school, but today I ____ going by car.",
      answers: ["am"],
      explanation: "Present continuous with 'I' needs 'am': I am going."
    },
    {
      text: "We stayed at home ____ it was raining.",
      answers: ["because", "as"],
      explanation: "'Because' or 'as' gives the reason: it was raining."
    },
    {
      text: "____ your father drive a car?",
      answers: ["does", "can"],
      explanation: "'Does' makes a present simple question; 'can' asks about ability."
    },
    {
      text: "There aren't ____ chairs in the classroom.",
      answers: ["any", "enough", "many"],
      explanation: "In negative sentences with plural nouns, 'any', 'enough' or 'many' fit."
    },
    {
      text: "My birthday is ____ May, in the spring.",
      answers: ["in"],
      explanation: "We use 'in' with months and seasons: in May, in spring."
    },
    {
      text: "He is the ____ student in the class; he always gets top marks.",
      answers: ["best", "cleverest", "smartest"],
      explanation: "A superlative adjective follows 'the': the best or cleverest student."
    },
    {
      text: "Would you like ____ cup of tea?",
      answers: ["a"],
      explanation: "'A' is used before singular countable nouns starting with a consonant sound."
    },
    {
      text: "I ____ my homework yesterday evening.",
      answers: ["did", "finished"],
      explanation: "A past simple verb fits with 'yesterday': did or finished my homework."
    },
    {
      text: "She always ____ a shower before breakfast.",
      answers: ["has", "takes"],
      explanation: "We say 'have a shower' or 'take a shower'; third person adds -s."
    },
    {
      text: "____ do you live? In the city centre.",
      answers: ["where"],
      explanation: "'Where' asks about a place; the answer is 'in the city centre'."
    },
    {
      text: "My cat sleeps ____ the sofa all day.",
      answers: ["on"],
      explanation: "'On' shows position on a surface: on the sofa, on the table."
    },
    {
      text: "They ____ watching a film at the moment.",
      answers: ["are"],
      explanation: "Present continuous with 'they' needs 'are': they are watching."
    },
    {
      text: "I'd like ____ eggs for breakfast, please.",
      answers: ["some", "two", "three", "fried"],
      explanation: "'Some' or a number fits before the plural noun 'eggs' in a request."
    },
    {
      text: "He can speak English ____ he can't speak French.",
      answers: ["but"],
      explanation: "'But' contrasts two ideas: he can do one thing but not the other."
    },
    {
      text: "____ often do you visit your grandparents?",
      answers: ["how"],
      explanation: "'How often' asks about frequency: every week, once a month."
    },
    {
      text: "We had a picnic ____ the park last Sunday.",
      answers: ["in", "at"],
      explanation: "'In' or 'at' is used for the place: a picnic in/at the park."
    },
    {
      text: "My mum ____ like loud music.",
      answers: ["doesn't"],
      explanation: "Negative present simple with 'my mum' needs 'doesn't' + base verb."
    },
    {
      text: "____ is a cinema next to the shopping centre.",
      answers: ["there"],
      explanation: "'There is' introduces the existence of something singular."
    },
    {
      text: "The children are playing ____ the garden.",
      answers: ["in"],
      explanation: "'In' is used for enclosed spaces: in the garden, in the room."
    },
    {
      text: "I ____ to music every day on my phone.",
      answers: ["listen"],
      explanation: "'Listen to music' is the correct collocation; present simple with 'I'."
    },
    {
      text: "____ was the weather like on your holiday?",
      answers: ["what", "how"],
      explanation: "'What ... like?' or 'How was...' asks for a description of the weather."
    },
    {
      text: "She bought a present ____ her best friend.",
      answers: ["for"],
      explanation: "'For' shows who receives something: a present for her friend."
    },
    {
      text: "You can't swim here. It ____ dangerous.",
      answers: ["is", "looks", "seems"],
      explanation: "'Is', 'looks' or 'seems' links the subject to the adjective 'dangerous'."
    },
    {
      text: "My dad is taller ____ my mum.",
      answers: ["than"],
      explanation: "'Than' follows a comparative adjective: taller than."
    },
    {
      text: "We didn't ____ to the beach because it was cold.",
      answers: ["go", "drive", "walk"],
      explanation: "After 'didn't' we use the base form of the verb: go, drive or walk."
    },
    {
      text: "____ many brothers and sisters have you got?",
      answers: ["how"],
      explanation: "'How many' asks about a number of people or things."
    },
    {
      text: "I always drink a glass ____ water before bed.",
      answers: ["of"],
      explanation: "'A glass of water' uses 'of' to show the container and its contents."
    },
    {
      text: "He was late ____ he missed the bus.",
      answers: ["because", "as", "so"],
      explanation: "'Because/as' gives a reason; 'so' can show a result — all make sense here."
    },
    {
      text: "____ you at school yesterday morning?",
      answers: ["were"],
      explanation: "Past simple questions with 'you' and 'be' use 'Were you...?'."
    },
    {
      text: "There isn't ____ sugar in my coffee. Can I have more?",
      answers: ["any", "much", "enough"],
      explanation: "With uncountable nouns in negatives, 'any', 'much' or 'enough' fit."
    },
    {
      text: "My little brother is afraid ____ dogs.",
      answers: ["of"],
      explanation: "The adjective 'afraid' is followed by the preposition 'of'."
    },
    {
      text: "____ time does the film start tonight?",
      answers: ["what"],
      explanation: "'What time' is the fixed phrase for asking about clock time."
    },
    {
      text: "She usually goes shopping ____ Saturday morning.",
      answers: ["on"],
      explanation: "'On' is used with days and parts of named days: on Saturday morning."
    },
    {
      text: "I ____ never been to another country.",
      answers: ["have"],
      explanation: "Present perfect with 'I' uses 'have' + past participle: have never been."
    },
    {
      text: "Turn left ____ the end of this street.",
      answers: ["at"],
      explanation: "'At the end of' is the fixed phrase for a point in a street."
    },
    {
      text: "The shop opens ____ nine in the morning.",
      answers: ["at"],
      explanation: "We use 'at' with times: opens at nine."
    },
    {
      text: "My friends and I ____ tennis every weekend.",
      answers: ["play"],
      explanation: "Present simple with a plural subject takes the base form: play tennis."
    },
    {
      text: "____ is my pencil? I can't see it anywhere.",
      answers: ["where"],
      explanation: "'Where' asks about the place or position of something."
    },
    {
      text: "It's cold outside. Put ____ your coat.",
      answers: ["on"],
      explanation: "The phrasal verb 'put on' means to start wearing clothes."
    },
    {
      text: "He ____ got a big dog called Max.",
      answers: ["has"],
      explanation: "'Has got' is used with he/she/it to talk about possession."
    },
    {
      text: "I want ____ buy a new phone next month.",
      answers: ["to"],
      explanation: "'Want' is followed by 'to' + infinitive: want to buy."
    },
    {
      text: "We can meet ____ the bus stop at ten.",
      answers: ["at", "near", "by"],
      explanation: "'At', 'near' or 'by' the bus stop all describe the meeting place."
    },
    {
      text: "____ colour is your new school bag?",
      answers: ["what", "which"],
      explanation: "'What colour' or 'which colour' asks about the colour of something."
    },
    {
      text: "She was ____ tired that she fell asleep on the sofa.",
      answers: ["so"],
      explanation: "'So + adjective + that' shows a result: so tired that she fell asleep."
    },
    {
      text: "They live in the house ____ the corner of the street.",
      answers: ["on", "at"],
      explanation: "We say 'on the corner' or 'at the corner' of a street."
    },
    {
      text: "____ we go to the park this afternoon?",
      answers: ["shall", "can", "could", "should"],
      explanation: "'Shall/Can/Could we...?' makes a suggestion or asks for permission."
    },
    {
      text: "My teacher gave ____ a lot of homework today.",
      answers: ["us", "me", "them"],
      explanation: "An object pronoun like 'us' or 'me' follows the verb 'gave'."
    },
    {
      text: "I don't like this song. Can you turn it ____?",
      answers: ["off", "down"],
      explanation: "'Turn off' means stop it; 'turn down' means make it quieter."
    },
    {
      text: "There was ____ old castle on the hill.",
      answers: ["an"],
      explanation: "'An' comes before vowel sounds: an old castle."
    },
    {
      text: "He goes swimming twice ____ week.",
      answers: ["a", "per", "every"],
      explanation: "'Twice a week' is the common frequency phrase; 'per' and 'every' also work."
    },
    {
      text: "____ did you go last summer? To Spain.",
      answers: ["where"],
      explanation: "'Where' asks about the place; the answer names a country."
    },
    {
      text: "The bank is ____ the post office and the cafe.",
      answers: ["between", "near"],
      explanation: "'Between' places something in the middle of two things."
    },
    {
      text: "You mustn't ____ in the library. Be quiet, please.",
      answers: ["talk", "shout", "eat", "run"],
      explanation: "After 'mustn't' we use a base verb for a forbidden action: talk, shout, eat."
    },
    {
      text: "I'll call you ____ I get home from work.",
      answers: ["when", "after", "before", "if", "once"],
      explanation: "A time conjunction like 'when' or 'after' joins the two actions."
    },
    {
      text: "She is good ____ maths and science.",
      answers: ["at"],
      explanation: "The adjective 'good' takes the preposition 'at' with subjects and skills."
    },
    {
      text: "____ pen is this? Is it yours?",
      answers: ["whose"],
      explanation: "'Whose' asks about possession: whose pen = who does it belong to."
    },
    {
      text: "We haven't got ____ bread for sandwiches.",
      answers: ["any", "enough", "much"],
      explanation: "With uncountable 'bread' in a negative, 'any', 'enough' or 'much' fit."
    },
    {
      text: "My cousin is coming to stay ____ us next week.",
      answers: ["with"],
      explanation: "'Stay with' someone means live at their house for a short time."
    },
    {
      text: "It ____ raining, so we took our umbrellas.",
      answers: ["was", "started", "kept"],
      explanation: "'Was raining' (past continuous) or 'started/kept raining' all fit the past story."
    },
    {
      text: "____ a nice day! Let's go outside.",
      answers: ["what"],
      explanation: "'What a + adjective + noun' is an exclamation: What a nice day!"
    },
    {
      text: "The museum is open ____ Monday to Friday.",
      answers: ["from"],
      explanation: "'From ... to ...' shows the start and end of a period."
    },
    {
      text: "He never ____ meat because he is a vegetarian.",
      answers: ["eats"],
      explanation: "Present simple with 'he' adds -s: he never eats meat."
    },
    {
      text: "Look ____ that beautiful bird in the tree!",
      answers: ["at"],
      explanation: "'Look at' is the correct verb + preposition for directing eyes at something."
    },
    {
      text: "I'm sorry, I ____ understand this question.",
      answers: ["don't", "can't", "didn't"],
      explanation: "'Don't/can't understand' means you do not understand; 'didn't' works for the past."
    },
    {
      text: "There were a lot ____ people at the concert.",
      answers: ["of"],
      explanation: "'A lot of' is the fixed quantity phrase before a noun."
    },
    {
      text: "My sister wants to ____ a doctor when she grows up.",
      answers: ["be", "become"],
      explanation: "'Want to be/become + job' describes a future ambition."
    },
    {
      text: "We eat dinner together ____ seven every evening.",
      answers: ["at", "around", "about", "before"],
      explanation: "'At seven' gives the exact time; 'around/about' means approximately."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
