/* PET Prep extra bank: part2 wave 1 */
(function () {
  var BANK = [
    {
      text: "She has been learning Spanish ____ three years.",
      answers: ["for"],
      explanation: "Present perfect with a period of time takes 'for': 'for three years'."
    },
    {
      text: "We haven't seen our cousins ____ last Christmas.",
      answers: ["since"],
      explanation: "'Since' is used with a point in time (last Christmas) in the present perfect."
    },
    {
      text: "Have you ____ finished your homework, or do you need more time?",
      answers: ["already"],
      explanation: "'Already' in a question shows surprise that something happened so soon."
    },
    {
      text: "I haven't decided what to wear to the party ____.",
      answers: ["yet"],
      explanation: "'Yet' goes at the end of negative present perfect sentences to mean 'until now'."
    },
    {
      text: "Have you ____ tried Japanese food before?",
      answers: ["ever"],
      explanation: "'Ever' means 'at any time in your life' and is common in present perfect questions."
    },
    {
      text: "My grandmother has ____ come back from the market, so the fruit is fresh.",
      answers: ["just"],
      explanation: "'Just' with the present perfect means something happened a very short time ago."
    },
    {
      text: "That's the boy ____ won the school photography competition.",
      answers: ["who", "that"],
      explanation: "A defining relative clause about a person can use 'who' or 'that' as the subject."
    },
    {
      text: "This is the hotel ____ we stayed during our holiday in Rome.",
      answers: ["where"],
      explanation: "'Where' introduces a relative clause about a place: the hotel where we stayed."
    },
    {
      text: "She's the singer ____ new album sold a million copies.",
      answers: ["whose"],
      explanation: "'Whose' shows possession in a relative clause: the album belongs to the singer."
    },
    {
      text: "The bus ____ goes to the airport leaves every twenty minutes.",
      answers: ["which", "that"],
      explanation: "For things, a defining relative clause uses 'which' or 'that' as the subject."
    },
    {
      text: "____ it rains tomorrow, we will have the picnic indoors.",
      answers: ["if"],
      explanation: "'If' introduces a first conditional: if + present simple, will + infinitive."
    },
    {
      text: "You will miss the train ____ you leave home right now.",
      answers: ["unless"],
      explanation: "'Unless' means 'if... not': you will miss the train if you do not leave now."
    },
    {
      text: "The new sports centre ____ opened by the mayor last Saturday.",
      answers: ["was"],
      explanation: "Past simple passive uses 'was/were' + past participle; 'centre' is singular, so 'was'."
    },
    {
      text: "These cakes ____ baked fresh every morning in our kitchen.",
      answers: ["are"],
      explanation: "Present simple passive with a plural subject uses 'are' + past participle."
    },
    {
      text: "My brother is much taller ____ me, although he is younger.",
      answers: ["than"],
      explanation: "Comparative adjectives are followed by 'than' when comparing two people."
    },
    {
      text: "This exercise is not as difficult ____ the one we did yesterday.",
      answers: ["as"],
      explanation: "The structure 'as + adjective + as' compares things; the second 'as' is needed."
    },
    {
      text: "Could you pass me ____ salt, please? It's next to your plate.",
      answers: ["the"],
      explanation: "We use 'the' because both speakers know exactly which salt is meant."
    },
    {
      text: "How ____ money do you need for the school trip?",
      answers: ["much"],
      explanation: "'Money' is uncountable, so we ask 'how much', not 'how many'."
    },
    {
      text: "There aren't ____ apples left, so I'll buy some at the market.",
      answers: ["any", "many"],
      explanation: "In negative sentences we use 'any' (or 'many') with plural countable nouns."
    },
    {
      text: "You ____ wear a helmet when you ride a motorbike; it's the law.",
      answers: ["must"],
      explanation: "'Must' expresses strong obligation, especially rules and laws."
    },
    {
      text: "You look tired. You ____ go to bed earlier tonight.",
      answers: ["should", "must"],
      explanation: "'Should' gives advice; 'must' is also possible for strong advice."
    },
    {
      text: "Take an umbrella because it ____ rain later this afternoon.",
      answers: ["might", "may", "could"],
      explanation: "'Might', 'may' and 'could' all express possibility about the future."
    },
    {
      text: "I ____ to play with dolls when I was a little girl, but I don't any more.",
      answers: ["used"],
      explanation: "'Used to' + infinitive describes past habits that are no longer true."
    },
    {
      text: "You're coming to the meeting, ____ you?",
      answers: ["aren't"],
      explanation: "A positive sentence with 'are' takes the negative tag 'aren't you?'."
    },
    {
      text: "She doesn't like coffee, ____ she?",
      answers: ["does"],
      explanation: "A negative sentence with 'doesn't' takes the positive tag 'does she?'."
    },
    {
      text: "____ he was feeling ill, he still went to work.",
      answers: ["although", "though"],
      explanation: "'Although/though' + clause expresses contrast between feeling ill and going to work."
    },
    {
      text: "The little boy is old enough to dress ____ now.",
      answers: ["himself"],
      explanation: "The reflexive pronoun 'himself' shows the boy does the action to his own body."
    },
    {
      text: "The film was ____ boring that we left the cinema before the end.",
      answers: ["so"],
      explanation: "'So + adjective + that' expresses result: so boring that we left."
    },
    {
      text: "It was ____ a lovely day that we decided to eat lunch in the garden.",
      answers: ["such"],
      explanation: "'Such + a + adjective + noun' is used before a noun phrase; 'so' would need no noun."
    },
    {
      text: "This soup is ____ hot to eat right now; let's wait a minute.",
      answers: ["too"],
      explanation: "'Too + adjective + to' means more than is good or possible."
    },
    {
      text: "I'm afraid she isn't old ____ to watch that film at the cinema.",
      answers: ["enough"],
      explanation: "'Adjective + enough + to' means the necessary amount: old enough to watch."
    },
    {
      text: "My best friend was born ____ the fifth of May, the same day as me.",
      answers: ["on"],
      explanation: "We use 'on' with dates and days: on the fifth of May, on Monday."
    },
    {
      text: "The shop opens ____ nine o'clock every morning except Sunday.",
      answers: ["at"],
      explanation: "We use 'at' with exact clock times: at nine o'clock."
    },
    {
      text: "We usually go skiing ____ winter, when there is plenty of snow.",
      answers: ["in"],
      explanation: "We use 'in' with seasons, months and years: in winter, in July."
    },
    {
      text: "I'm really looking forward ____ seeing you at the weekend.",
      answers: ["to"],
      explanation: "'Look forward to' is followed by 'to' + -ing form."
    },
    {
      text: "She is very good ____ drawing animals, especially horses.",
      answers: ["at"],
      explanation: "The adjective 'good' takes the preposition 'at' before an activity."
    },
    {
      text: "Are you interested ____ joining the school chess club?",
      answers: ["in"],
      explanation: "'Interested' is always followed by the preposition 'in'."
    },
    {
      text: "It depends ____ the weather whether we go to the beach or not.",
      answers: ["on", "upon"],
      explanation: "The verb 'depend' takes the preposition 'on' (or more formal 'upon')."
    },
    {
      text: "Thank you very much ____ helping me carry these heavy boxes.",
      answers: ["for"],
      explanation: "We thank somebody 'for' something or for doing something."
    },
    {
      text: "My sister is afraid ____ spiders, so she never goes into the garage.",
      answers: ["of"],
      explanation: "'Afraid' takes the preposition 'of': afraid of spiders."
    },
    {
      text: "____ you like some more orange juice with your breakfast?",
      answers: ["would"],
      explanation: "'Would you like...?' is a polite way of offering something."
    },
    {
      text: "How long ____ you known your best friend?",
      answers: ["have"],
      explanation: "'How long have you known...?' uses the present perfect for a state that continues."
    },
    {
      text: "There is ____ milk in the fridge if you want to make hot chocolate.",
      answers: ["some"],
      explanation: "'Some' is used with uncountable nouns in positive sentences."
    },
    {
      text: "I've got two brothers. One is a doctor and the ____ is a teacher.",
      answers: ["other"],
      explanation: "With two people, we say 'one... the other' for the second of the pair."
    },
    {
      text: "Hurry up! We haven't got ____ time before the show starts.",
      answers: ["much", "enough"],
      explanation: "'Much' (or 'enough') is used with the uncountable noun 'time' here."
    },
    {
      text: "____ people came to the concert than the organisers expected.",
      answers: ["more", "fewer"],
      explanation: "A comparative quantifier ('more' or 'fewer') is needed before 'than'."
    },
    {
      text: "This is ____ most exciting book I have read this year.",
      answers: ["the"],
      explanation: "Superlatives always take the definite article: the most exciting."
    },
    {
      text: "My uncle works ____ a chef in a famous restaurant in the city centre.",
      answers: ["as"],
      explanation: "'Work as + job' describes somebody's profession."
    },
    {
      text: "We had to walk home ____ the last bus had already left.",
      answers: ["because", "as", "since"],
      explanation: "'Because', 'as' or 'since' can introduce the reason for walking home."
    },
    {
      text: "Turn the music down, please. I can't hear ____ my friend is saying.",
      answers: ["what"],
      explanation: "'What' introduces the object clause: I can't hear the thing that she is saying."
    },
    {
      text: "Can you tell me ____ the nearest bank is? I need some cash.",
      answers: ["where"],
      explanation: "An indirect question about place uses 'where': tell me where the bank is."
    },
    {
      text: "I don't know ____ time the film starts; let's check online.",
      answers: ["what"],
      explanation: "'What time' asks about the hour of an event in an indirect question."
    },
    {
      text: "She asked me ____ I wanted tea or coffee.",
      answers: ["whether", "if"],
      explanation: "'Whether' or 'if' introduces an indirect yes/no question with a choice."
    },
    {
      text: "____ was raining hard, so we stayed inside and played cards.",
      answers: ["it"],
      explanation: "Weather verbs need the empty subject 'it': it was raining."
    },
    {
      text: "____ are more than fifty students in the school choir this year.",
      answers: ["there"],
      explanation: "'There are' introduces the existence of plural things."
    },
    {
      text: "My father has worked at the same company ____ over twenty years.",
      answers: ["for"],
      explanation: "'For' + a length of time (over twenty years) with the present perfect."
    },
    {
      text: "I've known Maria ____ we were at primary school together.",
      answers: ["since"],
      explanation: "'Since' + a past starting point (when we were at primary school)."
    },
    {
      text: "Has your sister come home from university ____? I'd love to see her.",
      answers: ["yet"],
      explanation: "'Yet' is used in present perfect questions to ask if something has happened."
    },
    {
      text: "This is the funniest joke I have ____ heard in my life.",
      answers: ["ever"],
      explanation: "Superlative + present perfect + 'ever' means 'at any time until now'."
    },
    {
      text: "The woman ____ lives next door has three very noisy dogs.",
      answers: ["who", "that"],
      explanation: "'Who' or 'that' is the subject of the relative clause describing the woman."
    },
    {
      text: "I lost the pen ____ my grandfather gave me for my birthday.",
      answers: ["which", "that"],
      explanation: "'Which' or 'that' refers to the pen; the pronoun can also be omitted, but one word fits here."
    },
    {
      text: "That's the village ____ my mother grew up many years ago.",
      answers: ["where"],
      explanation: "'Where' relates a place (the village) to the action of growing up there."
    },
    {
      text: "He's the student ____ project won first prize at the science fair.",
      answers: ["whose"],
      explanation: "'Whose' shows that the project belongs to the student."
    },
    {
      text: "____ you heat ice, it turns into water.",
      answers: ["if", "when", "whenever"],
      explanation: "The zero conditional for facts can use 'if', 'when' or 'whenever'."
    },
    {
      text: "I ____ buy that jacket if it were a little cheaper.",
      answers: ["would", "might", "could"],
      explanation: "Second conditional: if + past simple, would/might/could + infinitive."
    },
    {
      text: "If I ____ you, I would apologise to her immediately.",
      answers: ["were", "was"],
      explanation: "'If I were you' gives advice; informal 'was' is also accepted."
    },
    {
      text: "Paper ____ invented in China about two thousand years ago.",
      answers: ["was"],
      explanation: "Past simple passive: was + invented, with a singular subject."
    },
    {
      text: "English and French ____ spoken in many parts of Canada.",
      answers: ["are"],
      explanation: "Present simple passive with a plural subject (two languages) uses 'are'."
    },
    {
      text: "The missing keys have not ____ found anywhere in the house.",
      answers: ["been"],
      explanation: "Present perfect passive: have/has + been + past participle."
    },
    {
      text: "My new phone is far more expensive ____ my old one, but it's faster.",
      answers: ["than"],
      explanation: "Comparatives with 'more' are followed by 'than'."
    },
    {
      text: "Today is just as cold ____ yesterday, so wear your thick coat.",
      answers: ["as"],
      explanation: "'As... as' compares equal degrees: as cold as yesterday."
    },
    {
      text: "The film gets better and ____ towards the end.",
      answers: ["better"],
      explanation: "'Better and better' shows gradual change with a repeated comparative."
    },
    {
      text: "She plays the piano ____ than anyone else in her class.",
      answers: ["better"],
      explanation: "'Better' is the irregular comparative of 'well' and is followed by 'than'."
    },
    {
      text: "We visited ____ old castle on a hill near the Scottish border.",
      answers: ["an"],
      explanation: "'An' comes before a vowel sound: an old castle."
    },
    {
      text: "My aunt is ____ engineer who designs bridges and tunnels.",
      answers: ["an"],
      explanation: "Jobs take a/an, and 'engineer' begins with a vowel sound, so 'an'."
    },
    {
      text: "Is there ____ cheese left, or did you finish it all last night?",
      answers: ["any"],
      explanation: "'Any' is used in questions with uncountable nouns like cheese."
    },
    {
      text: "There are only a ____ tickets left for tonight's show, so book quickly.",
      answers: ["few"],
      explanation: "'A few' is used with plural countable nouns to mean a small number."
    },
    {
      text: "There's very ____ sugar left, so buy some when you're at the shop.",
      answers: ["little"],
      explanation: "'Little' is used with uncountable nouns like sugar to mean not much."
    },
    {
      text: "____ of my friends has a car, so we always travel by bus.",
      answers: ["none", "neither"],
      explanation: "'None of' (or 'neither of' for two people) means not one of the group."
    },
    {
      text: "You ____ pay to enter the museum on Sundays; it's completely free.",
      answers: ["needn't"],
      explanation: "'Needn't' means there is no obligation: it is not necessary to pay."
    },
    {
      text: "Students ____ not use mobile phones during the examination.",
      answers: ["must", "may", "should"],
      explanation: "'Must not' expresses prohibition; 'may not' and 'should not' are also possible in rules."
    },
    {
      text: "____ I open the window? It's getting really warm in here.",
      answers: ["shall", "can", "may", "could", "should"],
      explanation: "'Shall I...?' offers to do something; 'can/may/could I' asks permission."
    },
    {
      text: "When I was young, I ____ not swim, but now I love the pool.",
      answers: ["could"],
      explanation: "'Could' is the past form of 'can' for ability: I could not swim."
    },
    {
      text: "He used ____ live in Brazil before his family moved to Portugal.",
      answers: ["to"],
      explanation: "The structure is 'used to + infinitive' for past habits and states."
    },
    {
      text: "Your parents have met my parents, ____ they?",
      answers: ["haven't"],
      explanation: "A positive present perfect sentence takes the negative tag 'haven't they?'."
    },
    {
      text: "Tom can speak Italian, ____ he?",
      answers: ["can't"],
      explanation: "A positive sentence with 'can' takes the tag 'can't he?'."
    },
    {
      text: "It won't take long to get there, ____ it?",
      answers: ["will"],
      explanation: "A negative sentence with 'won't' takes the positive tag 'will it?'."
    },
    {
      text: "____ the ticket was expensive, the concert was definitely worth it.",
      answers: ["although", "though", "while"],
      explanation: "'Although/though/while' + clause introduces a contrast with the main sentence."
    },
    {
      text: "____ the bad weather, the football match was not cancelled.",
      answers: ["despite"],
      explanation: "'Despite' + noun phrase shows contrast; 'although' would need a full clause."
    },
    {
      text: "I wanted to go out; ____, I had too much homework to finish.",
      answers: ["however", "unfortunately", "sadly"],
      explanation: "'However' links two contrasting sentences after a semicolon or full stop."
    },
    {
      text: "Be careful with that knife or you might cut ____.",
      answers: ["yourself"],
      explanation: "The reflexive 'yourself' is needed because the action returns to the subject 'you'."
    },
    {
      text: "We really enjoyed ____ at the theme park last weekend.",
      answers: ["ourselves"],
      explanation: "'Enjoy' takes a reflexive pronoun when there is no other object: enjoyed ourselves."
    },
    {
      text: "The instructions were ____ complicated that nobody could follow them.",
      answers: ["so"],
      explanation: "'So + adjective + that' shows the result of an extreme quality."
    },
    {
      text: "They are ____ friendly people that everyone loves visiting them.",
      answers: ["such"],
      explanation: "'Such + adjective + plural noun' (no article) is used before nouns."
    },
    {
      text: "The suitcase was ____ heavy for the child to carry on his own.",
      answers: ["too"],
      explanation: "'Too + adjective + for someone + to' means beyond what is possible."
    },
    {
      text: "Is the water warm ____ for swimming, or is it still freezing?",
      answers: ["enough"],
      explanation: "'Enough' comes after the adjective: warm enough for swimming."
    },
    {
      text: "The train arrives ____ platform four in about ten minutes.",
      answers: ["at", "on"],
      explanation: "Trains arrive 'at/on a platform'; both prepositions are commonly used."
    },
    {
      text: "She has lived ____ Manchester since she started university.",
      answers: ["in"],
      explanation: "We live 'in' a city or country: in Manchester."
    },
    {
      text: "I'll meet you ____ front of the cinema at half past seven.",
      answers: ["in"],
      explanation: "The fixed phrase is 'in front of': directly before a place."
    },
    {
      text: "The children walked ____ the bridge to reach the playground on the other side.",
      answers: ["across", "over"],
      explanation: "'Across' or 'over' describes movement from one side of the bridge to the other."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
