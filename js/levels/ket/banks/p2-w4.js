/* KET Prep extra bank: part2 wave 4 */
(function () {
  var BANK = [
    {
      text: "My best friend and I ____ each other every day after school.",
      answers: ["call", "text", "see", "meet", "phone", "visit", "message"],
      explanation: "A present simple base verb fits with the plural subject: call, text, see, meet."
    },
    {
      text: "____ is your dog's name? It's Rex.",
      answers: ["what"],
      explanation: "'What' asks about a name, which is a thing, not a person."
    },
    {
      text: "I have two cats, and both of ____ are black.",
      answers: ["them"],
      explanation: "'Both of them' uses the object pronoun after 'of'."
    },
    {
      text: "She takes her dog ____ a walk every evening.",
      answers: ["for", "on"],
      explanation: "'Take a dog for/on a walk' — both prepositions are used."
    },
    {
      text: "Elephants are ____ than horses.",
      answers: ["bigger", "larger", "heavier", "stronger", "slower", "taller"],
      explanation: "A comparative adjective goes before 'than': bigger, heavier, stronger."
    },
    {
      text: "I feel ____ today, so I'm staying in bed.",
      answers: ["ill", "sick", "bad", "tired", "terrible", "awful", "unwell"],
      explanation: "An adjective after 'feel' describes health: ill, sick, tired."
    },
    {
      text: "You should go to the ____ if your tooth hurts.",
      answers: ["dentist", "dentists"],
      explanation: "The 'dentist' is the person who looks after teeth."
    },
    {
      text: "He broke his arm, so he can't ____ tennis for a month.",
      answers: ["play"],
      explanation: "After 'can't' we use the base verb: play tennis."
    },
    {
      text: "____ do you feel now? Much better, thanks.",
      answers: ["how"],
      explanation: "'How do you feel?' asks about someone's health or mood."
    },
    {
      text: "Take this medicine three times ____ day.",
      answers: ["a", "per", "each", "every"],
      explanation: "'Three times a day' is the standard frequency phrase."
    },
    {
      text: "My hobby is collecting stamps ____ different countries.",
      answers: ["from"],
      explanation: "'From different countries' shows the origin of the stamps."
    },
    {
      text: "She is very interested ____ old films.",
      answers: ["in"],
      explanation: "'Interested in' is the fixed adjective + preposition pair."
    },
    {
      text: "I started ____ the piano when I was seven.",
      answers: ["playing", "learning"],
      explanation: "'Start' can take an -ing form: started playing/learning the piano."
    },
    {
      text: "____ often do you practise the violin? Twice a week.",
      answers: ["how"],
      explanation: "'How often' asks about frequency; the answer gives 'twice a week'."
    },
    {
      text: "He spends a lot of time ____ computer games.",
      answers: ["playing", "on"],
      explanation: "'Spend time + -ing' (playing) or 'time on + noun' both work."
    },
    {
      text: "Painting is fun, ____ it can be quite messy.",
      answers: ["but", "although", "though"],
      explanation: "A contrast word joins the two ideas: but/although/though."
    },
    {
      text: "My grandfather taught me how ____ fish in the river.",
      answers: ["to"],
      explanation: "'How to + verb' explains the way to do something."
    },
    {
      text: "We are ____ a party for my sister's birthday next week.",
      answers: ["having", "planning", "organising", "throwing"],
      explanation: "Present continuous -ing forms fit a future arrangement: having/planning a party."
    },
    {
      text: "____ did you meet your best friend? At primary school.",
      answers: ["where", "when", "how"],
      explanation: "'Where/when/how' all fit; the answer 'at primary school' matches each."
    },
    {
      text: "I sent her a birthday card, ____ she never received it.",
      answers: ["but"],
      explanation: "'But' contrasts sending the card with it not arriving."
    },
    {
      text: "Thank you very much ____ the lovely present.",
      answers: ["for"],
      explanation: "'Thank you for' + noun is the fixed pattern."
    },
    {
      text: "Do you want to come ____ my house after school?",
      answers: ["to", "round", "over"],
      explanation: "'Come to/round/over my house' invites someone to visit."
    },
    {
      text: "Everyone ____ my little brother because he is so funny.",
      answers: ["loves", "likes"],
      explanation: "'Everyone' is singular, so the verb takes -s: loves, likes."
    },
    {
      text: "____ girl in the photo is my cousin from Canada.",
      answers: ["the", "that", "this"],
      explanation: "A determiner points to the girl: the/that/this girl."
    },
    {
      text: "He wasn't ____ school today because he had a cold.",
      answers: ["at", "in"],
      explanation: "'At school' or 'in school' both describe attendance."
    },
    {
      text: "My friend invited ____ to her house for the weekend.",
      answers: ["me", "us", "him", "her", "them", "everyone"],
      explanation: "An object pronoun follows 'invited': invited me/us to her house."
    },
    {
      text: "The doctor told him to stay ____ bed for two days.",
      answers: ["in"],
      explanation: "'Stay in bed' is the fixed phrase for resting when ill."
    },
    {
      text: "I like dogs more ____ cats, but I have both.",
      answers: ["than"],
      explanation: "'More than' compares two things you like."
    },
    {
      text: "____ pet would you like to have, a rabbit or a bird?",
      answers: ["which", "what"],
      explanation: "'Which' asks about a choice between two named pets."
    },
    {
      text: "Her hair is long and ____.",
      answers: ["dark", "brown", "black", "curly", "straight", "beautiful", "blonde", "shiny"],
      explanation: "An adjective describing hair completes the pair: dark, curly, straight."
    },
    {
      text: "We laughed a lot ____ the party last night.",
      answers: ["at", "during"],
      explanation: "'At/during the party' places the laughing at the event."
    },
    {
      text: "I must ____ my room before my friends arrive.",
      answers: ["tidy", "clean"],
      explanation: "After 'must' we use the base verb: tidy or clean my room."
    },
    {
      text: "____ does your head hurt? Since this morning.",
      answers: ["when", "why"],
      explanation: "The answer 'since this morning' fits a time question; 'why' is also askable."
    },
    {
      text: "There is something wrong ____ my eyes. I need glasses.",
      answers: ["with"],
      explanation: "'Something wrong with' + noun is the fixed pattern."
    },
    {
      text: "My aunt has three children, ____ my uncle has none.",
      answers: ["but", "and", "while", "whereas"],
      explanation: "A contrast or joining word links the two facts: but/while/and."
    },
    {
      text: "He plays the drums very ____, so the neighbours complain.",
      answers: ["loudly", "badly", "often", "late"],
      explanation: "An adverb describes how he plays: loudly, badly, often."
    },
    {
      text: "____ is the youngest person in your family?",
      answers: ["who"],
      explanation: "'Who' asks about a person; the answer would be a family member."
    },
    {
      text: "I'm sorry ____ breaking your pencil. I'll buy you a new one.",
      answers: ["for", "about"],
      explanation: "'Sorry for/about + -ing or noun' expresses an apology."
    },
    {
      text: "She looks ____ her mother — the same eyes and smile.",
      answers: ["like"],
      explanation: "'Look like' + person means to be similar in appearance."
    },
    {
      text: "We played games ____ midnight at the sleepover.",
      answers: ["until", "till", "before", "past", "at"],
      explanation: "'Until/till midnight' shows how long the games lasted."
    },
    {
      text: "____ your grandparents live near you?",
      answers: ["do"],
      explanation: "Present simple questions with plural subjects use 'do'."
    },
    {
      text: "The baby is sleeping, so please ____ quiet.",
      answers: ["be", "keep", "stay"],
      explanation: "'Be/keep/stay quiet' are all imperatives asking for silence."
    },
    {
      text: "I gave my old toys ____ my little cousin.",
      answers: ["to"],
      explanation: "'Give something to someone' uses 'to' before the receiver."
    },
    {
      text: "My friend is really good at drawing. Look at ____ picture!",
      answers: ["this", "that", "her", "his", "the"],
      explanation: "A determiner or possessive fits before 'picture': this/that/her/his."
    },
    {
      text: "He hasn't finished his project ____.",
      answers: ["yet"],
      explanation: "'Yet' comes at the end of negative present perfect sentences."
    },
    {
      text: "Grandma tells us stories ____ her childhood.",
      answers: ["about", "from"],
      explanation: "'Stories about/from her childhood' — both prepositions work."
    },
    {
      text: "____ one is your coat, the blue one or the grey one?",
      answers: ["which"],
      explanation: "'Which one' asks about a choice between two items."
    },
    {
      text: "You look tired. Why ____ you go to bed early tonight?",
      answers: ["don't"],
      explanation: "'Why don't you...?' is a common way to give advice."
    },
    {
      text: "I hurt my finger, but it doesn't hurt ____.",
      answers: ["much", "now", "anymore", "badly"],
      explanation: "'Much/now/anymore' complete the negative: it doesn't hurt much."
    },
    {
      text: "My parents have been married ____ twenty years.",
      answers: ["for"],
      explanation: "'For' + a period of time goes with the present perfect."
    },
    {
      text: "Our cat likes sleeping ____ the warm car in the garage.",
      answers: ["on", "under", "in", "near", "beside", "inside"],
      explanation: "A place preposition fits: on/under/in the car."
    },
    {
      text: "____ me introduce you to my friend Tom.",
      answers: ["let"],
      explanation: "'Let me + verb' is a polite way to offer to do something."
    },
    {
      text: "She was happy ____ she opened her present.",
      answers: ["when", "as", "after", "because"],
      explanation: "A time or reason conjunction joins the clauses: when/after/because."
    },
    {
      text: "There's no ice cream left. My brother ate ____ all.",
      answers: ["it"],
      explanation: "The object pronoun 'it' refers to the uncountable 'ice cream'."
    },
    {
      text: "I'd like to have a horse, but they are ____ expensive.",
      answers: ["too", "very", "so", "really", "quite"],
      explanation: "An intensifier before 'expensive' explains the problem: too/very/so."
    },
    {
      text: "____ you feeling better today than yesterday?",
      answers: ["are"],
      explanation: "Present continuous questions with 'you' start with 'Are'."
    },
    {
      text: "He wears glasses ____ reading and watching TV.",
      answers: ["for", "when", "while"],
      explanation: "'For + -ing' (purpose) or 'when/while + -ing' (time) both fit."
    },
    {
      text: "My friends always help me ____ I have a problem.",
      answers: ["when", "if", "whenever"],
      explanation: "'When/if/whenever' introduce the situation in which they help."
    },
    {
      text: "Can you look ____ my cat while I'm on holiday?",
      answers: ["after"],
      explanation: "'Look after' means take care of someone or something."
    },
    {
      text: "The nurse asked me to sit ____ and wait for the doctor.",
      answers: ["down", "there"],
      explanation: "'Sit down' is the phrasal verb; 'sit there' also fits the instruction."
    },
    {
      text: "I don't feel like ____ out tonight. Let's stay in.",
      answers: ["going", "eating"],
      explanation: "'Feel like' is followed by an -ing form: going out, eating out."
    },
    {
      text: "____ hobbies do you have? Reading and cooking.",
      answers: ["what", "which"],
      explanation: "'What hobbies' asks generally about someone's hobbies."
    },
    {
      text: "Both my brothers ____ taller than my father now.",
      answers: ["are"],
      explanation: "The plural subject 'both my brothers' takes 'are'."
    },
    {
      text: "This puzzle is difficult, but I won't give ____.",
      answers: ["up"],
      explanation: "'Give up' means stop trying; the particle 'up' completes it."
    },
    {
      text: "She sings ____ than anyone else in the choir.",
      answers: ["better", "louder", "worse"],
      explanation: "A comparative adverb goes before 'than': better, louder."
    },
    {
      text: "My father is a doctor and my mother is ____ engineer.",
      answers: ["an"],
      explanation: "'An' is used before a vowel sound: an engineer."
    },
    {
      text: "We watched a film together ____ home on Friday night.",
      answers: ["at"],
      explanation: "'At home' is the fixed phrase; never 'in home'."
    },
    {
      text: "____ makes you laugh the most? My uncle's jokes.",
      answers: ["what", "who"],
      explanation: "'What' (a thing) or 'who' (a person) can be the subject of 'makes'."
    },
    {
      text: "I need to buy a present, but I don't know what to ____.",
      answers: ["get", "buy", "choose"],
      explanation: "'What to + base verb' completes the thought: what to get/buy."
    },
    {
      text: "He fell asleep ____ the film because he was so tired.",
      answers: ["during"],
      explanation: "'During' + noun places the sleeping inside the film's time."
    },
    {
      text: "Are you free ____ Saturday? We could go bowling.",
      answers: ["on", "this", "next"],
      explanation: "'On Saturday', 'this Saturday' or 'next Saturday' all fit."
    },
    {
      text: "My sister and I share a bedroom, ____ we each have our own desk.",
      answers: ["but", "although", "though", "and"],
      explanation: "A contrast or joining word links the two facts."
    },
    {
      text: "____ took my chocolate? It was on the table a minute ago!",
      answers: ["who"],
      explanation: "'Who' is the subject question word for the unknown person."
    },
    {
      text: "The party was great. Everybody enjoyed ____ very much.",
      answers: ["it", "themselves"],
      explanation: "'Enjoyed it' (the party) or 'enjoyed themselves' both work."
    },
    {
      text: "Drink lots of water ____ you feel better.",
      answers: ["until", "till", "so"],
      explanation: "'Until/till you feel better' or 'so you feel better' both fit."
    },
    {
      text: "I know that girl, ____ I can't remember her name.",
      answers: ["but"],
      explanation: "'But' contrasts knowing the face with forgetting the name."
    },
    {
      text: "____ was your first day at the new club? Really fun!",
      answers: ["how"],
      explanation: "'How was...?' asks for an opinion about an experience."
    },
    {
      text: "You can borrow my bike ____ you bring it back tomorrow.",
      answers: ["if"],
      explanation: "'If' introduces the condition for borrowing the bike."
    },
    {
      text: "My grandmother is eighty, ____ she still goes dancing.",
      answers: ["but", "yet", "and"],
      explanation: "'But/yet' contrast her age with her energy; 'and' simply joins."
    },
    {
      text: "The twins look exactly the ____. I can't tell who is who.",
      answers: ["same"],
      explanation: "'The same' is the fixed phrase for being identical."
    },
    {
      text: "____ don't you like spiders? They're not dangerous here.",
      answers: ["why"],
      explanation: "'Why' asks for the reason someone dislikes spiders."
    },
    {
      text: "I'm taller than my mum, but shorter ____ my dad.",
      answers: ["than"],
      explanation: "'Than' follows the comparative 'shorter' in the comparison."
    },
    {
      text: "He always shares his sweets ____ his classmates.",
      answers: ["with"],
      explanation: "'Share something with someone' uses 'with'."
    },
    {
      text: "My friend speaks three languages. ____ clever she is!",
      answers: ["how"],
      explanation: "'How + adjective' forms the exclamation: How clever she is!"
    },
    {
      text: "There ____ nobody at home when I called.",
      answers: ["was"],
      explanation: "'Nobody' is singular, so past 'be' is 'was'."
    },
    {
      text: "It's my grandad's birthday, so we're going to ____ him a cake.",
      answers: ["make", "bake", "buy", "bring", "get"],
      explanation: "A base verb after 'going to' fits: make/bake/buy him a cake."
    },
    {
      text: "The dog ran ____ the ball and brought it back.",
      answers: ["after", "to", "towards"],
      explanation: "'Run after' means chase; 'to/towards' also describe direction."
    },
    {
      text: "____ long have you had your rabbit? About two years.",
      answers: ["how"],
      explanation: "'How long' with the present perfect asks about duration."
    },
    {
      text: "I visit my grandparents ____ a month, usually on the first Sunday.",
      answers: ["once", "twice"],
      explanation: "'Once/twice a month' expresses frequency."
    },
    {
      text: "She is kind ____ everyone, even people she doesn't know.",
      answers: ["to"],
      explanation: "'Kind to someone' is the fixed adjective + preposition pair."
    },
    {
      text: "My headache went ____ after I took the medicine.",
      answers: ["away"],
      explanation: "'Go away' describes pain disappearing."
    },
    {
      text: "____ we take some photos of the puppies?",
      answers: ["can", "shall", "could", "may", "should"],
      explanation: "A modal starts the question asking permission or making a suggestion."
    },
    {
      text: "I wrote a letter ____ my pen friend in Australia.",
      answers: ["to"],
      explanation: "'Write to someone' uses 'to' before the receiver."
    },
    {
      text: "The film was sad and it made me ____.",
      answers: ["cry", "sad", "unhappy"],
      explanation: "'Made me cry' (verb) or 'made me sad' (adjective) both follow 'made me'."
    },
    {
      text: "Please don't tell ____ about the surprise party!",
      answers: ["anyone", "anybody", "her", "him", "them", "mum", "dad"],
      explanation: "'Anyone/anybody' or an object pronoun fits after 'tell'."
    },
    {
      text: "He is ____ funniest person I know.",
      answers: ["the"],
      explanation: "Superlatives like 'funniest' need the definite article 'the'."
    },
    {
      text: "We stayed up late talking ____ our favourite films.",
      answers: ["about"],
      explanation: "'Talk about' + topic is the correct verb + preposition."
    },
    {
      text: "____ your brother older or younger than you?",
      answers: ["is"],
      explanation: "Questions with 'be' and a singular subject start with 'Is'."
    },
    {
      text: "I always wash my hands ____ I eat.",
      answers: ["before", "when", "after"],
      explanation: "A time conjunction fits: before/when/after I eat."
    },
    {
      text: "My friend lent ____ his bike for the weekend.",
      answers: ["me", "us", "her", "him", "them"],
      explanation: "An object pronoun follows 'lent': lent me/us his bike."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
