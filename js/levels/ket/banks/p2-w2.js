/* KET Prep extra bank: part2 wave 2 */
(function () {
  var BANK = [
    {
      text: "Our English lesson starts ____ half past nine.",
      answers: ["at"],
      explanation: "'At' is used with exact times: at half past nine."
    },
    {
      text: "____ does your school day finish? At four o'clock.",
      answers: ["when"],
      explanation: "'When' asks about time; the answer gives a time of day."
    },
    {
      text: "I sit next ____ my best friend in class.",
      answers: ["to"],
      explanation: "'Next to' is the fixed phrase meaning beside someone."
    },
    {
      text: "We ____ lunch in the school canteen every day.",
      answers: ["have", "eat"],
      explanation: "'Have lunch' or 'eat lunch' with a plural subject uses the base verb."
    },
    {
      text: "____ subject do you like best, history or geography?",
      answers: ["which", "what"],
      explanation: "'Which' is used when choosing from a limited set; 'what' is also possible."
    },
    {
      text: "The teacher asked us ____ open our books.",
      answers: ["to"],
      explanation: "'Ask someone to do something' needs 'to' + infinitive."
    },
    {
      text: "I ____ a sandwich and an apple for lunch today.",
      answers: ["had", "ate", "brought", "bought"],
      explanation: "A past simple verb fits with 'today' in a finished action: had, ate, brought."
    },
    {
      text: "There are thirty students ____ my class.",
      answers: ["in"],
      explanation: "'In my class' uses 'in' for membership of a group."
    },
    {
      text: "You ____ to do your homework before you watch TV.",
      answers: ["have", "need", "ought"],
      explanation: "'Have to', 'need to' and 'ought to' all express obligation here."
    },
    {
      text: "She is learning ____ play the guitar.",
      answers: ["to"],
      explanation: "'Learn' is followed by 'to' + infinitive: learn to play."
    },
    {
      text: "How ____ apples do we need for the cake?",
      answers: ["many"],
      explanation: "'How many' is used with countable plural nouns like 'apples'."
    },
    {
      text: "This soup is too hot. I can't eat ____ yet.",
      answers: ["it"],
      explanation: "The object pronoun 'it' refers back to the singular noun 'soup'."
    },
    {
      text: "Would you like some cake? Yes, ____, thanks.",
      answers: ["please"],
      explanation: "'Yes, please' is the polite way to accept an offer."
    },
    {
      text: "We bought some bread ____ the bakery this morning.",
      answers: ["from", "at", "in"],
      explanation: "'From/at/in the bakery' all describe where the bread was bought."
    },
    {
      text: "I don't eat ____ sweets because they are bad for my teeth.",
      answers: ["many", "any"],
      explanation: "'Many' or 'any' fits with plural 'sweets' in a negative sentence."
    },
    {
      text: "My favourite food ____ pizza with cheese and tomatoes.",
      answers: ["is"],
      explanation: "The singular subject 'my favourite food' takes 'is'."
    },
    {
      text: "____ you ever tried Japanese food?",
      answers: ["have"],
      explanation: "Present perfect questions with 'you' need 'Have you ever...?'."
    },
    {
      text: "Can I pay ____ card, or only cash?",
      answers: ["by", "with"],
      explanation: "'Pay by card' and 'pay with a card' are both used; single word 'by' or 'with'."
    },
    {
      text: "These shoes are too small. Have you got a ____ size?",
      answers: ["bigger", "larger", "different"],
      explanation: "A comparative adjective like 'bigger' or 'larger' fits when asking for another size."
    },
    {
      text: "The supermarket is closed ____ Sundays in our town.",
      answers: ["on"],
      explanation: "'On' is used with days of the week: closed on Sundays."
    },
    {
      text: "____ much is this jacket? It's forty euros.",
      answers: ["how"],
      explanation: "'How much' asks about the price of something."
    },
    {
      text: "I'd like a kilo ____ tomatoes, please.",
      answers: ["of"],
      explanation: "'A kilo of' shows the quantity of a noun: a kilo of tomatoes."
    },
    {
      text: "She tried the dress ____ but it didn't fit.",
      answers: ["on"],
      explanation: "'Try on' is the phrasal verb for testing clothes."
    },
    {
      text: "We need ____ onions and a carrot for the soup.",
      answers: ["some", "two", "three"],
      explanation: "'Some' or a number fits before plural 'onions' in a positive sentence."
    },
    {
      text: "My mum always makes a cake ____ my birthday.",
      answers: ["for", "on"],
      explanation: "'For my birthday' (purpose) or 'on my birthday' (day) both make sense."
    },
    {
      text: "There wasn't ____ cheese left, so I bought more.",
      answers: ["any", "much", "enough"],
      explanation: "Negative sentences with uncountable 'cheese' take 'any', 'much' or 'enough'."
    },
    {
      text: "____ does this word mean? I don't understand it.",
      answers: ["what"],
      explanation: "'What does ... mean?' asks for the meaning of a word."
    },
    {
      text: "He is the tallest boy ____ our school.",
      answers: ["in", "at"],
      explanation: "After a superlative we use 'in' (or 'at') with a place or group."
    },
    {
      text: "I forgot ____ bring my dictionary to the lesson.",
      answers: ["to"],
      explanation: "'Forget to do something' means you didn't do it."
    },
    {
      text: "Our teacher speaks slowly ____ we can understand her.",
      answers: ["so", "and"],
      explanation: "'So (that)' expresses purpose or result: slowly so we can understand."
    },
    {
      text: "____ many pages must we read for homework?",
      answers: ["how"],
      explanation: "'How many' asks about a number with plural 'pages'."
    },
    {
      text: "The exam was easier ____ I expected.",
      answers: ["than"],
      explanation: "'Than' follows the comparative 'easier' to compare with expectations."
    },
    {
      text: "Please write your name ____ the top of the page.",
      answers: ["at", "on"],
      explanation: "'At the top of' or 'on the top of' the page both locate the name."
    },
    {
      text: "I ____ remember his phone number. Can you tell me again?",
      answers: ["can't", "don't"],
      explanation: "'Can't remember' or 'don't remember' means the number is forgotten."
    },
    {
      text: "She passed the test ____ she studied very hard.",
      answers: ["because", "as", "since"],
      explanation: "'Because/as/since' introduce the reason for passing."
    },
    {
      text: "May I ____ your rubber for a moment?",
      answers: ["borrow", "use", "have"],
      explanation: "'Borrow', 'use' or 'have' fits when politely asking for an object."
    },
    {
      text: "We are having a maths test ____ Friday morning.",
      answers: ["on"],
      explanation: "'On' is used with days: on Friday morning."
    },
    {
      text: "This restaurant is famous ____ its fish dishes.",
      answers: ["for"],
      explanation: "'Famous for' is the fixed phrase describing why something is well known."
    },
    {
      text: "____ we have pasta for dinner tonight?",
      answers: ["can", "shall", "could", "should"],
      explanation: "'Can/Shall/Could we...?' makes a suggestion about dinner."
    },
    {
      text: "I put the milk ____ the fridge after breakfast.",
      answers: ["in", "into", "back"],
      explanation: "'In/into the fridge' shows where the milk goes; 'back' also works."
    },
    {
      text: "He drank two cups ____ coffee before the meeting.",
      answers: ["of"],
      explanation: "'A cup of coffee' uses 'of' between container and drink."
    },
    {
      text: "____ is that man with the white hat? He's the cook.",
      answers: ["who"],
      explanation: "'Who' asks about a person's identity."
    },
    {
      text: "The waiter brought ____ the menu and some water.",
      answers: ["us", "me", "them", "over"],
      explanation: "An object pronoun (us, me, them) follows 'brought'; 'brought over' also works."
    },
    {
      text: "I'm hungry. Let's ____ something to eat.",
      answers: ["get", "make", "buy", "find", "cook", "order", "have"],
      explanation: "After 'let's' we use a base verb: get, make, buy or find food."
    },
    {
      text: "This shop sells the ____ ice cream in town.",
      answers: ["best", "nicest", "cheapest", "tastiest"],
      explanation: "A superlative adjective follows 'the': the best or nicest ice cream."
    },
    {
      text: "You can't buy anything here. The shop is ____.",
      answers: ["closed", "shut", "empty"],
      explanation: "'Closed' or 'shut' explains why you cannot buy anything."
    },
    {
      text: "We waited ____ the bus for twenty minutes.",
      answers: ["for"],
      explanation: "'Wait for' something or someone is the correct pattern."
    },
    {
      text: "My father taught ____ how to cook rice.",
      answers: ["me", "us", "her", "him", "them"],
      explanation: "An object pronoun follows 'taught': taught me/us how to cook."
    },
    {
      text: "____ there any eggs in the kitchen?",
      answers: ["are"],
      explanation: "'Are there any + plural noun?' asks if something exists."
    },
    {
      text: "Don't forget your umbrella. It ____ rain later.",
      answers: ["might", "may", "could", "will"],
      explanation: "'Might/may/could' express possibility; 'will' a prediction."
    },
    {
      text: "I go swimming ____ Tuesday afternoons.",
      answers: ["on"],
      explanation: "'On' is used with days and repeated parts of days: on Tuesday afternoons."
    },
    {
      text: "The bread was old, ____ we gave it to the birds.",
      answers: ["so"],
      explanation: "'So' introduces the result of the bread being old."
    },
    {
      text: "____ languages can you speak? Two: English and Spanish.",
      answers: ["how"],
      explanation: "'How many languages' asks for a number; the answer is 'two'."
    },
    {
      text: "This coffee is ____ sweet for me. Less sugar next time.",
      answers: ["too"],
      explanation: "'Too + adjective' means more than is good: too sweet."
    },
    {
      text: "The lesson was boring and ____ students fell asleep.",
      answers: ["some", "two", "many", "several", "most", "the"],
      explanation: "A quantifier like 'some' or 'many' fits before plural 'students'."
    },
    {
      text: "I'm not very good ____ drawing pictures.",
      answers: ["at"],
      explanation: "'Good at' + -ing describes skill; the negative keeps 'at'."
    },
    {
      text: "____ did you have for breakfast this morning?",
      answers: ["what"],
      explanation: "'What' asks about the thing you ate."
    },
    {
      text: "There is a picture of a horse ____ the wall.",
      answers: ["on"],
      explanation: "'On the wall' describes something fixed to a vertical surface."
    },
    {
      text: "He didn't come to school ____ he was ill.",
      answers: ["because", "as", "since"],
      explanation: "A reason conjunction fits: because/as/since he was ill."
    },
    {
      text: "Can you help ____ with this exercise, please?",
      answers: ["me", "us", "her", "him", "them"],
      explanation: "An object pronoun follows 'help': help me/us with this."
    },
    {
      text: "The library is quiet, ____ the playground is very noisy.",
      answers: ["but", "while", "and", "whereas"],
      explanation: "'But' or 'while' contrasts the two places."
    },
    {
      text: "We must hurry ____ we will miss the train.",
      answers: ["or"],
      explanation: "'Or' means 'if not': hurry, or we will miss it."
    },
    {
      text: "My grandmother makes ____ best soup in the world.",
      answers: ["the"],
      explanation: "Superlatives need the definite article: the best soup."
    },
    {
      text: "____ old are these buildings? About a hundred years.",
      answers: ["how"],
      explanation: "'How old' asks about age, also for things."
    },
    {
      text: "Please turn ____ the lights when you leave the room.",
      answers: ["off", "out"],
      explanation: "'Turn off' (or 'turn out') the lights means stop them shining."
    },
    {
      text: "She cut the cake ____ a big knife.",
      answers: ["with", "using"],
      explanation: "'With' shows the tool used for an action: cut with a knife."
    },
    {
      text: "I have known my best friend ____ ten years.",
      answers: ["for"],
      explanation: "'For' + a period of time is used with the present perfect."
    },
    {
      text: "____ does the bakery open? At seven in the morning.",
      answers: ["when"],
      explanation: "'When' asks about time; the answer gives an opening time."
    },
    {
      text: "There is too ____ salt in this soup.",
      answers: ["much"],
      explanation: "'Too much' is used with uncountable nouns like 'salt'."
    },
    {
      text: "He asked me ____ I wanted tea or coffee.",
      answers: ["if", "whether"],
      explanation: "'If' or 'whether' introduces an indirect yes/no question."
    },
    {
      text: "My school is not far ____ my house. I walk there.",
      answers: ["from"],
      explanation: "'Far from' describes the distance between two places."
    },
    {
      text: "____ don't we order a pizza tonight?",
      answers: ["why"],
      explanation: "'Why don't we...?' is a common way to make a suggestion."
    },
    {
      text: "The students listened ____ the teacher carefully.",
      answers: ["to"],
      explanation: "'Listen to' someone is the correct verb + preposition."
    },
    {
      text: "This orange juice tastes ____. Try some!",
      answers: ["great", "good", "nice", "lovely", "delicious", "wonderful", "amazing", "fresh"],
      explanation: "An adjective follows the linking verb 'tastes': great, good, delicious."
    },
    {
      text: "I need a new pen ____ mine doesn't work.",
      answers: ["because", "as", "since"],
      explanation: "A reason word introduces why a new pen is needed."
    },
    {
      text: "We're going to ____ dinner at a restaurant on Friday.",
      answers: ["have", "eat"],
      explanation: "'Have dinner' or 'eat dinner' follows 'going to' with a base verb."
    },
    {
      text: "____ much homework do you get every day?",
      answers: ["how"],
      explanation: "'How much' is used with the uncountable noun 'homework'."
    },
    {
      text: "The cake smells lovely. ____ did you make it?",
      answers: ["how", "when", "why"],
      explanation: "'How' asks about the method; 'when' or 'why' are also natural questions."
    },
    {
      text: "You should eat more fruit ____ vegetables.",
      answers: ["and"],
      explanation: "'And' joins the two nouns in a list: fruit and vegetables."
    },
    {
      text: "____ is your maths teacher? Mr Green.",
      answers: ["who"],
      explanation: "'Who' asks about a person; the answer is a name."
    },
    {
      text: "The test begins ____ ten minutes, so sit down now.",
      answers: ["in"],
      explanation: "'In + period of time' means after that time passes: in ten minutes."
    },
    {
      text: "Everyone laughed ____ the teacher's funny joke.",
      answers: ["at"],
      explanation: "'Laugh at' something is the correct verb + preposition."
    },
    {
      text: "I'd like to sit ____ the window on the train.",
      answers: ["by", "near", "at"],
      explanation: "'By/near/at the window' all describe the seat position."
    },
    {
      text: "There are ____ good cafes in this street.",
      answers: ["some", "two", "many", "several", "three", "no"],
      explanation: "A quantifier like 'some' or 'many' fits before plural 'cafes'."
    },
    {
      text: "He always does his homework ____ dinner.",
      answers: ["after", "before"],
      explanation: "'After' or 'before' dinner both describe when he studies."
    },
    {
      text: "____ you spell your surname for me, please?",
      answers: ["can", "could", "will", "would"],
      explanation: "'Can/Could you...?' makes a polite request."
    },
    {
      text: "This chocolate is ____ than that one, and it's cheaper too.",
      answers: ["better", "nicer", "sweeter", "tastier"],
      explanation: "A comparative adjective goes before 'than': better, nicer, sweeter."
    },
    {
      text: "My sister works ____ a waitress in a cafe.",
      answers: ["as"],
      explanation: "'Work as + job' describes someone's job."
    },
    {
      text: "We got to school late ____ of the heavy traffic.",
      answers: ["because"],
      explanation: "'Because of' + noun gives a reason: because of the traffic."
    },
    {
      text: "Put your books ____ and listen to me, please.",
      answers: ["away", "down"],
      explanation: "'Put away' (tidy) or 'put down' (stop holding) both work in class."
    },
    {
      text: "How much ____ these strawberries cost?",
      answers: ["do"],
      explanation: "The plural subject 'strawberries' needs the auxiliary 'do'."
    },
    {
      text: "____ lunch, we went back to our classroom.",
      answers: ["after"],
      explanation: "'After lunch' shows the order of events in the day."
    },
    {
      text: "I like this cafe because the waiters are very ____.",
      answers: ["friendly", "nice", "kind", "polite", "helpful", "fast", "quick"],
      explanation: "An adjective describing people fits: friendly, nice, kind, polite."
    },
    {
      text: "Whose bag is this? It's ____, thanks. I lost it yesterday.",
      answers: ["mine"],
      explanation: "The possessive pronoun 'mine' stands alone: it belongs to me."
    },
    {
      text: "Don't eat ____ fast, or you'll feel sick.",
      answers: ["so", "too", "that"],
      explanation: "'So/too fast' warns about eating quickly; 'that fast' is also natural."
    },
    {
      text: "The teacher ____ us a funny story at the end of the lesson.",
      answers: ["told", "read"],
      explanation: "A past simple verb with two objects fits: told/read us a story."
    },
    {
      text: "The fruit at the market is fresher ____ the fruit in the supermarket.",
      answers: ["than"],
      explanation: "'Than' follows the comparative 'fresher' when comparing the two shops."
    },
    {
      text: "I can't come to the party. I ____ to look after my little brother.",
      answers: ["have", "need"],
      explanation: "'Have to' or 'need to' expresses an obligation that stops you coming."
    },
    {
      text: "The children washed their hands ____ eating.",
      answers: ["before", "after"],
      explanation: "'Before eating' or 'after eating' both describe when they washed their hands."
    },
    {
      text: "Our history teacher comes ____ Scotland.",
      answers: ["from"],
      explanation: "'Come from + place' describes where a person was born or grew up."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
