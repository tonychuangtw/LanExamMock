/* PET Prep extra bank: part2 wave 3 */
(function () {
  var BANK = [
    {
      text: "I have worked at this bakery ____ I left school three years ago.",
      answers: ["since"],
      explanation: "'Since' + a past event (leaving school) marks when the period began."
    },
    {
      text: "We've been waiting at the bus stop ____ over forty minutes now.",
      answers: ["for"],
      explanation: "'For' + a length of time is used with the present perfect continuous."
    },
    {
      text: "She has ____ visited ten different countries, and she's only sixteen.",
      answers: ["already"],
      explanation: "'Already' stresses that the total was reached sooner than expected."
    },
    {
      text: "Don't wash up ____; I haven't finished my dinner.",
      answers: ["yet"],
      explanation: "'Yet' in negatives and requests means 'not until now / not so soon'."
    },
    {
      text: "This is the first time I have ____ flown in a helicopter.",
      answers: ["ever"],
      explanation: "'The first time + present perfect + ever' emphasises a completely new experience."
    },
    {
      text: "They've ____ moved into the new house, so everything is still in boxes.",
      answers: ["just", "recently"],
      explanation: "'Just' (or 'recently') with present perfect shows the move happened a short time ago."
    },
    {
      text: "The teacher ____ helped me most last year has moved to another school.",
      answers: ["who", "that"],
      explanation: "'Who/that' acts as the subject of the relative clause about the teacher."
    },
    {
      text: "Is this the bag ____ you lost at the swimming pool last week?",
      answers: ["which", "that"],
      explanation: "'Which/that' refers to the bag as the object of the relative clause."
    },
    {
      text: "We drove past the school ____ my mother used to teach English.",
      answers: ["where"],
      explanation: "'Where' links the place (the school) with the action of teaching there."
    },
    {
      text: "I met a woman ____ son plays for the national basketball team.",
      answers: ["whose"],
      explanation: "'Whose' expresses possession: the son belongs to the woman."
    },
    {
      text: "____ you press this red button, the machine stops immediately.",
      answers: ["if", "when", "whenever", "once"],
      explanation: "Zero conditional about how something works accepts 'if/when/whenever/once'."
    },
    {
      text: "I'll lend you my bike ____ you promise to be careful with it.",
      answers: ["if", "provided", "providing"],
      explanation: "'If' (or 'provided/providing') introduces the condition for lending the bike."
    },
    {
      text: "____ you hurry, you'll be late for your dentist appointment.",
      answers: ["unless"],
      explanation: "'Unless you hurry' means 'if you do not hurry'."
    },
    {
      text: "If I had more free time, I ____ learn to play the guitar.",
      answers: ["would", "could", "might"],
      explanation: "Second conditional result clause uses would/could/might + infinitive."
    },
    {
      text: "The letter ____ sent to the wrong address, so it arrived a month late.",
      answers: ["was", "got"],
      explanation: "Past simple passive: was + sent; informal 'got sent' is also possible."
    },
    {
      text: "Millions of emails ____ sent around the world every single minute.",
      answers: ["are", "get"],
      explanation: "Present simple passive with a plural subject: are sent."
    },
    {
      text: "Our school hall is being ____ at the moment, so assemblies are outside.",
      answers: ["painted", "repaired", "renovated", "decorated", "rebuilt", "redecorated"],
      explanation: "Present continuous passive needs a past participle: is being painted/repaired."
    },
    {
      text: "The match has been ____ off because of the frozen pitch.",
      answers: ["called", "put"],
      explanation: "'Called off' means cancelled; 'put off' means postponed — both fit the context."
    },
    {
      text: "Gold is heavier ____ silver, which surprises many people.",
      answers: ["than"],
      explanation: "The comparative 'heavier' must be followed by 'than'."
    },
    {
      text: "Nobody in the team runs as fast ____ our captain.",
      answers: ["as"],
      explanation: "The equal comparison 'as fast as' needs the second 'as'."
    },
    {
      text: "This winter has been ____ colder than the last one.",
      answers: ["much", "far", "even", "considerably"],
      explanation: "'Much/far/even' can strengthen a comparative: much colder than."
    },
    {
      text: "August is usually ____ hottest month of the year here.",
      answers: ["the"],
      explanation: "Superlatives require 'the': the hottest month."
    },
    {
      text: "My father plays ____ violin in a small local orchestra.",
      answers: ["the"],
      explanation: "Musical instruments take 'the': play the violin, play the piano."
    },
    {
      text: "We're planning a trip to ____ United States next spring.",
      answers: ["the"],
      explanation: "Country names with 'States', 'Kingdom' or 'Republic' take 'the'."
    },
    {
      text: "She wants to become ____ actress when she finishes drama school.",
      answers: ["an"],
      explanation: "Professions take a/an, and 'actress' starts with a vowel sound."
    },
    {
      text: "How ____ times have you watched that video? It must be twenty by now!",
      answers: ["many"],
      explanation: "'Times' is countable, so we ask 'how many times'."
    },
    {
      text: "There isn't ____ furniture in the flat yet, just a bed and a table.",
      answers: ["much", "any", "enough"],
      explanation: "'Furniture' is uncountable, so 'much/any/enough' work in a negative sentence."
    },
    {
      text: "Only a ____ people know the real reason the shop closed down.",
      answers: ["few"],
      explanation: "'A few' + plural countable noun means a small number: a few people."
    },
    {
      text: "Add a ____ salt to the water before you boil the pasta.",
      answers: ["little"],
      explanation: "'A little' + uncountable noun means a small amount: a little salt."
    },
    {
      text: "____ of my parents can swim, so they both want me to have lessons.",
      answers: ["neither"],
      explanation: "'Neither of' + two people means not one and not the other."
    },
    {
      text: "____ student must bring a dictionary to Friday's lesson.",
      answers: ["every", "each"],
      explanation: "'Every/each' + singular noun means all members considered one by one."
    },
    {
      text: "You ____ smoke anywhere inside the hospital; it's strictly forbidden.",
      answers: ["mustn't", "cannot", "can't"],
      explanation: "'Mustn't' or 'can't' expresses prohibition by rules."
    },
    {
      text: "I ____ remember her name, but her face is very familiar.",
      answers: ["can't", "cannot", "don't"],
      explanation: "'Can't remember' (or 'don't remember') expresses present inability."
    },
    {
      text: "We ____ to wear a uniform at my old school, but here we can wear anything.",
      answers: ["had", "used"],
      explanation: "'Had to' expresses past obligation; 'used to' a past habit — both fit."
    },
    {
      text: "You don't ____ to bring food; everything will be provided at the party.",
      answers: ["have", "need"],
      explanation: "'Don't have to' and 'don't need to' both mean it isn't necessary."
    },
    {
      text: "____ your father use to read you stories when you were small?",
      answers: ["did"],
      explanation: "Questions about 'used to' are formed with 'Did... use to...?'."
    },
    {
      text: "It's a beautiful morning, ____ it?",
      answers: ["isn't"],
      explanation: "A positive sentence with 'is' takes the negative tag 'isn't it?'."
    },
    {
      text: "You haven't seen my keys anywhere, ____ you?",
      answers: ["have"],
      explanation: "Negative present perfect takes the positive tag 'have you?'."
    },
    {
      text: "We should leave before the traffic gets bad, ____ we?",
      answers: ["shouldn't"],
      explanation: "'Should' in a positive sentence takes the tag 'shouldn't we?'."
    },
    {
      text: "____ the restaurant was expensive, the portions were surprisingly small.",
      answers: ["although", "though", "while"],
      explanation: "'Although/though/while' introduces the contrast between price and portions."
    },
    {
      text: "____ her fear of heights, she agreed to try the climbing wall.",
      answers: ["despite"],
      explanation: "'Despite' + noun phrase: despite her fear, she still tried."
    },
    {
      text: "The trip was badly organised. ____, everyone seemed to enjoy it.",
      answers: ["however", "nevertheless", "nonetheless", "still", "surprisingly"],
      explanation: "A contrast adverb like 'however' or 'nevertheless' starts the second sentence."
    },
    {
      text: "I stayed at home ____ I was feeling ill after lunch.",
      answers: ["because", "as", "since"],
      explanation: "'Because/as/since' gives the reason for staying at home."
    },
    {
      text: "He looked at ____ in the mirror before going on stage.",
      answers: ["himself"],
      explanation: "'Himself' is the reflexive form after a verb when subject and object are the same man."
    },
    {
      text: "Don't worry about us — we can look after ____ for one evening.",
      answers: ["ourselves"],
      explanation: "'Look after ourselves' means take care of our own needs."
    },
    {
      text: "The queue was ____ long that we decided to come back another day.",
      answers: ["so"],
      explanation: "'So + adjective + that' expresses the result of the long queue."
    },
    {
      text: "I've never stayed in ____ a comfortable hotel before.",
      answers: ["such"],
      explanation: "'Such + a + adjective + noun' emphasises the noun phrase."
    },
    {
      text: "The maths problem was ____ difficult for most of the class to solve.",
      answers: ["too", "very", "quite"],
      explanation: "'Too difficult for... to solve' means impossibly hard; 'very/quite' also fit grammatically."
    },
    {
      text: "Do we have ____ eggs to make pancakes for everyone?",
      answers: ["enough"],
      explanation: "'Enough + noun' asks about the necessary quantity: enough eggs."
    },
    {
      text: "The keys are hanging ____ the hook next to the front door.",
      answers: ["on"],
      explanation: "Things hang 'on' a hook, a wall or a line."
    },
    {
      text: "There's a beautiful painting ____ the wall above the fireplace.",
      answers: ["on"],
      explanation: "Pictures and posters go 'on' the wall."
    },
    {
      text: "The cat is hiding ____ the sofa and refuses to come out.",
      answers: ["under", "behind", "beneath", "underneath"],
      explanation: "'Under/behind/beneath' all describe possible hiding places relative to the sofa."
    },
    {
      text: "We flew ____ Rome to Athens in less than two hours.",
      answers: ["from"],
      explanation: "'From... to...' marks the start and end points of a journey."
    },
    {
      text: "She jumped ____ the swimming pool without checking how deep it was.",
      answers: ["into", "in"],
      explanation: "'Jump into/in' describes movement to the inside of the pool."
    },
    {
      text: "The bank is ____ the supermarket and the post office on the high street.",
      answers: ["between"],
      explanation: "'Between' places something in the middle of two other things."
    },
    {
      text: "He has been keen ____ photography ever since he got his first camera.",
      answers: ["on"],
      explanation: "'Keen on' + noun/-ing expresses strong interest."
    },
    {
      text: "I completely agree ____ you about the new homework policy.",
      answers: ["with"],
      explanation: "We agree 'with' a person: I agree with you."
    },
    {
      text: "She spends a lot of money ____ clothes and make-up every month.",
      answers: ["on"],
      explanation: "'Spend money on something' is the correct pattern."
    },
    {
      text: "Who is going to pay ____ the meal tonight — shall we share?",
      answers: ["for"],
      explanation: "'Pay for something' means give money in exchange for it."
    },
    {
      text: "My little brother is really excited ____ the school trip to the zoo.",
      answers: ["about"],
      explanation: "'Excited about' introduces the cause of the excitement."
    },
    {
      text: "This area is quite different ____ the neighbourhood where I grew up.",
      answers: ["from", "to"],
      explanation: "'Different from' is standard; British English also accepts 'different to'."
    },
    {
      text: "____ invented the telephone, Bell or Edison? I always forget.",
      answers: ["who"],
      explanation: "'Who' asks about the person that did the action."
    },
    {
      text: "____ far is it from your house to the nearest train station?",
      answers: ["how"],
      explanation: "'How far' asks about distance."
    },
    {
      text: "____ of these two jackets do you think suits me better?",
      answers: ["which"],
      explanation: "'Which' asks for a choice from a limited set of two jackets."
    },
    {
      text: "____ don't we go to the cinema on Saturday instead of Sunday?",
      answers: ["why"],
      explanation: "'Why don't we...?' is a common way of making a suggestion."
    },
    {
      text: "I looked everywhere for my ticket, but I couldn't find it ____.",
      answers: ["anywhere"],
      explanation: "'Anywhere' replaces 'somewhere' in negative sentences."
    },
    {
      text: "____ phoned while you were out, but they didn't leave a message.",
      answers: ["someone", "somebody"],
      explanation: "'Someone/somebody' is an unknown person in a positive statement."
    },
    {
      text: "There was ____ to eat in the fridge, so we ordered a takeaway.",
      answers: ["nothing"],
      explanation: "'Nothing' means 'not anything' and makes the clause negative on its own."
    },
    {
      text: "____ has to tidy their own bedroom in our house — even Dad.",
      answers: ["everyone", "everybody"],
      explanation: "'Everyone/everybody' + singular verb refers to all the people."
    },
    {
      text: "My aunt hasn't visited us ____ she moved to Australia.",
      answers: ["since"],
      explanation: "'Since' + past event (her move) starts the period of not visiting."
    },
    {
      text: "He's played in the school orchestra ____ five years without missing a concert.",
      answers: ["for"],
      explanation: "'For five years' expresses the duration with the present perfect."
    },
    {
      text: "Hurry up — the taxi has ____ arrived and it's waiting outside.",
      answers: ["just", "already", "now"],
      explanation: "'Just/already' with present perfect shows the arrival happened moments ago."
    },
    {
      text: "The engineer ____ repaired our boiler was extremely quick and polite.",
      answers: ["who", "that"],
      explanation: "'Who/that' introduces the clause identifying which engineer."
    },
    {
      text: "The medicine ____ the doctor prescribed worked almost immediately.",
      answers: ["which", "that"],
      explanation: "'Which/that' refers to the medicine, object of 'prescribed'."
    },
    {
      text: "Do you remember the exact day ____ we first arrived in this city?",
      answers: ["when", "that"],
      explanation: "'When' (or 'that') introduces a relative clause about a time."
    },
    {
      text: "If it ____ sunny tomorrow, we're going to cycle along the coast.",
      answers: ["is", "stays", "turns"],
      explanation: "First conditional: if + present simple (is sunny), going to + infinitive."
    },
    {
      text: "What ____ you do if you found a wallet full of money in the street?",
      answers: ["would"],
      explanation: "Second conditional question: What would you do if + past simple?"
    },
    {
      text: "The results of the competition ____ announced on the school website yesterday.",
      answers: ["were"],
      explanation: "Past simple passive with a plural subject (results) uses 'were'."
    },
    {
      text: "This kind of cheese ____ made only in one small region of France.",
      answers: ["is"],
      explanation: "Present simple passive with a singular subject: is made."
    },
    {
      text: "Hundreds of photos have ____ uploaded to the class page since Monday.",
      answers: ["been"],
      explanation: "Present perfect passive: have + been + past participle."
    },
    {
      text: "Her handwriting is much neater ____ mine, so she writes the birthday cards.",
      answers: ["than"],
      explanation: "The comparative 'neater' takes 'than' before the second item."
    },
    {
      text: "The old market isn't as busy ____ it used to be twenty years ago.",
      answers: ["as"],
      explanation: "The second 'as' completes the equal comparison 'as busy as'."
    },
    {
      text: "The harder you train, ____ stronger you become.",
      answers: ["the"],
      explanation: "Parallel comparatives use 'the... the...': the harder, the stronger."
    },
    {
      text: "That was ____ worst meal I've had in a very long time.",
      answers: ["the"],
      explanation: "The superlative 'worst' requires the article 'the'."
    },
    {
      text: "Would you like to be ____ astronaut and travel into space one day?",
      answers: ["an"],
      explanation: "'Astronaut' starts with a vowel sound, so it takes 'an'."
    },
    {
      text: "We watched ____ sun go down over the ocean from the balcony.",
      answers: ["the"],
      explanation: "Unique natural objects such as the sun take the definite article."
    },
    {
      text: "How much ____ this second-hand bicycle cost when you bought it?",
      answers: ["did"],
      explanation: "Past simple questions use the auxiliary 'did' + infinitive: did it cost."
    },
    {
      text: "There was hardly ____ traffic on the roads early on Sunday morning.",
      answers: ["any"],
      explanation: "'Hardly any' means almost none; 'hardly' makes the clause negative in meaning."
    },
    {
      text: "____ of the information on that website turned out to be wrong.",
      answers: ["some", "most", "much", "all", "none", "half"],
      explanation: "A quantifier + 'of the' + uncountable noun: some/most/much of the information."
    },
    {
      text: "I have ____ idea where I left my umbrella — it's completely gone.",
      answers: ["no"],
      explanation: "'Have no idea' is a fixed expression meaning 'not know at all'."
    },
    {
      text: "You ____ have seen my sister at the match; she was in bed with flu.",
      answers: ["can't", "couldn't", "cannot"],
      explanation: "'Can't/couldn't have + past participle' means it was impossible in the past."
    },
    {
      text: "I think you ____ apologise; it was clearly your fault.",
      answers: ["should", "must", "ought"],
      explanation: "'Should' gives advice; 'must' is stronger; 'ought' (to) also expresses duty."
    },
    {
      text: "____ we meet outside the station at six, or is that too early?",
      answers: ["shall", "should", "could", "can"],
      explanation: "'Shall we...?' makes a suggestion; 'should/could/can we' also work."
    },
    {
      text: "My grandparents ____ to have a small farm with chickens and goats.",
      answers: ["used"],
      explanation: "'Used to + infinitive' describes a past state that is no longer true."
    },
    {
      text: "Nobody phoned while I was out, ____ they?",
      answers: ["did"],
      explanation: "After 'nobody' (negative meaning), the tag is positive: did they?"
    },
    {
      text: "I'm a bit late again, ____ I? I'm really sorry.",
      answers: ["aren't"],
      explanation: "The tag for 'I am' is irregular: 'aren't I?'."
    },
    {
      text: "____ he only started guitar lessons last year, he already plays beautifully.",
      answers: ["although", "though", "while"],
      explanation: "'Although/though/while' contrasts the short time with the great result."
    },
    {
      text: "She kept smiling ____ the pain in her injured ankle.",
      answers: ["despite"],
      explanation: "'Despite + noun phrase' shows the pain did not stop her smiling."
    },
    {
      text: "The soup smelled delicious, ____ it tasted rather disappointing.",
      answers: ["but", "yet", "although", "though"],
      explanation: "'But/yet' joins two contrasting clauses about smell and taste."
    },
    {
      text: "He hurt ____ quite badly when he fell off the skateboard.",
      answers: ["himself"],
      explanation: "'Hurt himself' — the reflexive pronoun shows the boy injured his own body."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
