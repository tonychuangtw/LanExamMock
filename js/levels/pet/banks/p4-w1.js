/* PET Prep extra bank: part4 wave 1 */
(function () {
  var BANK = [
    /* ---------- so / such ---------- */
    {
      original: "The film was so boring that we left early.",
      keyword: "such",
      gapped: "It was ____ boring film that we left early.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' becomes 'such a + adjective + noun' when a singular noun follows."
    },
    {
      original: "The questions were so difficult that nobody finished the test.",
      keyword: "such",
      gapped: "They were ____ difficult questions that nobody finished the test.",
      answers: ["such"],
      model: "such",
      explanation: "With plural nouns we use 'such' without an article: such difficult questions."
    },
    {
      original: "It was such a cold day that we stayed indoors.",
      keyword: "so",
      gapped: "The day was ____ that we stayed indoors.",
      answers: ["so cold"],
      model: "so cold",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' when no noun follows."
    },
    {
      original: "The soup was so hot that I couldn't eat it.",
      keyword: "such",
      gapped: "It was ____ hot soup that I couldn't eat it.",
      answers: ["such"],
      model: "such",
      explanation: "With uncountable nouns like 'soup' we use 'such' without an article."
    },
    {
      original: "It was such an exciting match that everyone stood up.",
      keyword: "so",
      gapped: "The match was ____ exciting that everyone stood up.",
      answers: ["so"],
      model: "so",
      explanation: "'Such an + adjective + noun' becomes 'so + adjective' when the noun moves before the verb."
    },
    {
      original: "The music was so loud that we couldn't talk.",
      keyword: "such",
      gapped: "It was ____ loud music that we couldn't talk.",
      answers: ["such"],
      model: "such",
      explanation: "'Music' is uncountable, so we use 'such' without 'a': such loud music."
    },
    {
      original: "The hotel was so expensive that we looked for another one.",
      keyword: "such",
      gapped: "It was ____ expensive hotel that we looked for another one.",
      answers: ["such an"],
      model: "such an",
      explanation: "Before a vowel sound we need 'such an': such an expensive hotel."
    },
    {
      original: "It was such a funny joke that everybody laughed.",
      keyword: "so",
      gapped: "The joke was ____ funny that everybody laughed.",
      answers: ["so"],
      model: "so",
      explanation: "When the noun comes first, we use 'so + adjective' instead of 'such a + adjective + noun'."
    },
    {
      original: "Anna is so kind that everyone likes her.",
      keyword: "such",
      gapped: "Anna is ____ kind person that everyone likes her.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So kind' becomes 'such a kind person' when we add a singular noun."
    },
    {
      original: "The road was so busy that we couldn't cross it.",
      keyword: "such",
      gapped: "It was ____ busy road that we couldn't cross it.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' changes to 'such a + adjective + noun' with a singular countable noun."
    },
    /* ---------- too / enough ---------- */
    {
      original: "The box is too heavy for me to carry.",
      keyword: "enough",
      gapped: "The box is not light ____ me to carry.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too heavy' means 'not light enough'; 'enough' goes after the adjective, followed by 'for + person'."
    },
    {
      original: "Tom is too young to drive a car.",
      keyword: "enough",
      gapped: "Tom is not old ____ drive a car.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too young' equals 'not old enough'; 'enough' is followed by 'to + infinitive'."
    },
    {
      original: "The coffee was too hot to drink.",
      keyword: "enough",
      gapped: "The coffee was not cool ____ drink.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too hot' means 'not cool enough to'; use the opposite adjective with 'enough'."
    },
    {
      original: "Lucy isn't tall enough to reach the shelf.",
      keyword: "too",
      gapped: "Lucy is ____ to reach the shelf.",
      answers: ["too short"],
      model: "too short",
      explanation: "'Not tall enough' means 'too short'; swap the adjective for its opposite with 'too'."
    },
    {
      original: "The test was too difficult for the students to finish.",
      keyword: "enough",
      gapped: "The test was not easy ____ the students to finish.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too difficult' becomes 'not easy enough for + person + to + verb'."
    },
    {
      original: "Ben isn't strong enough to lift that suitcase.",
      keyword: "too",
      gapped: "That suitcase is ____ for Ben to lift.",
      answers: ["too heavy"],
      model: "too heavy",
      explanation: "'Not strong enough' about the person becomes 'too heavy' about the object."
    },
    {
      original: "The water was too cold for swimming.",
      keyword: "enough",
      gapped: "The water was not warm ____ swimming.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too cold' means 'not warm enough'; 'enough for + -ing' expresses the purpose."
    },
    {
      original: "This flat is too small for our family.",
      keyword: "enough",
      gapped: "This flat is not big ____ our family.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too small' equals 'not big enough for'; the opposite adjective is needed."
    },
    {
      original: "Maria speaks too quickly for me to understand.",
      keyword: "enough",
      gapped: "Maria does not speak slowly ____ me to understand.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too quickly' means 'not slowly enough'; the pattern works with adverbs too."
    },
    {
      original: "The shelf is too high for the children to reach.",
      keyword: "enough",
      gapped: "The shelf is not low ____ the children to reach.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too high' becomes 'not low enough for + person + to + verb'."
    },
    /* ---------- ago / for / since ---------- */
    {
      original: "Emma moved to Madrid three years ago.",
      keyword: "for",
      gapped: "Emma has lived in Madrid ____.",
      answers: ["for three years"],
      model: "for three years",
      explanation: "A past action with 'ago' becomes present perfect with 'for + period of time'."
    },
    {
      original: "Jack bought his bike in 2021.",
      keyword: "since",
      gapped: "Jack has had his bike ____ 2021.",
      answers: ["since"],
      model: "since",
      explanation: "'Since' is used with a point in time in the present perfect: since 2021."
    },
    {
      original: "David has worked at the bank for six months.",
      keyword: "ago",
      gapped: "David started working at the bank six ____.",
      answers: ["months ago"],
      model: "months ago",
      explanation: "Present perfect with 'for' becomes past simple 'started ... ago'."
    },
    {
      original: "Anna began learning French two years ago.",
      keyword: "for",
      gapped: "Anna has been learning French ____ two years.",
      answers: ["for"],
      model: "for",
      explanation: "'Began ... ago' becomes present perfect continuous with 'for + period'."
    },
    {
      original: "The last time we saw Tom was in March.",
      keyword: "since",
      gapped: "We haven't seen Tom ____ March.",
      answers: ["since"],
      model: "since",
      explanation: "'The last time was in March' means 'haven't seen him since March'."
    },
    {
      original: "Lucy last visited her grandmother a month ago.",
      keyword: "for",
      gapped: "Lucy hasn't visited her grandmother ____ a month.",
      answers: ["for"],
      model: "for",
      explanation: "'Last visited ... ago' becomes negative present perfect with 'for + period'."
    },
    {
      original: "It's five years since Ben left school.",
      keyword: "ago",
      gapped: "Ben left school five ____.",
      answers: ["years ago"],
      model: "years ago",
      explanation: "'It's five years since' equals a past simple sentence with 'ago'."
    },
    {
      original: "Maria started her job last September.",
      keyword: "since",
      gapped: "Maria has had her job ____ last September.",
      answers: ["since"],
      model: "since",
      explanation: "'Started' becomes 'has had' with 'since + point in time'."
    },
    {
      original: "I met Emma ten years ago.",
      keyword: "for",
      gapped: "I have known Emma ____ ten years.",
      answers: ["for"],
      model: "for",
      explanation: "'Met ... ago' becomes 'have known for + period' in the present perfect."
    },
    {
      original: "Tom hasn't played football for two weeks.",
      keyword: "ago",
      gapped: "The last time Tom played football was two ____.",
      answers: ["weeks ago"],
      model: "weeks ago",
      explanation: "Negative present perfect with 'for' equals 'the last time was ... ago'."
    },
    /* ---------- comparatives / as...as ---------- */
    {
      original: "My brother is taller than me.",
      keyword: "as",
      gapped: "I am not ____ my brother.",
      answers: ["as tall as"],
      model: "as tall as",
      explanation: "'X is taller than Y' means 'Y is not as tall as X'."
    },
    {
      original: "This book is more interesting than that one.",
      keyword: "as",
      gapped: "That book is not ____ interesting as this one.",
      answers: ["as"],
      model: "as",
      explanation: "A comparative becomes 'not as + adjective + as' from the other point of view."
    },
    {
      original: "Jack runs faster than David.",
      keyword: "as",
      gapped: "David does not run ____ Jack.",
      answers: ["as fast as"],
      model: "as fast as",
      explanation: "'Faster than' becomes 'not as fast as' when the subjects swap."
    },
    {
      original: "This exercise isn't as easy as the last one.",
      keyword: "than",
      gapped: "This exercise is more difficult ____ the last one.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as easy as' means 'more difficult than'; use the opposite adjective."
    },
    {
      original: "The blue dress is cheaper than the red one.",
      keyword: "as",
      gapped: "The red dress is not ____ cheap as the blue one.",
      answers: ["as"],
      model: "as",
      explanation: "'Cheaper than' becomes 'not as cheap as' when we compare the other way round."
    },
    {
      original: "Anna's hair is longer than Lucy's.",
      keyword: "as",
      gapped: "Lucy's hair is not ____ Anna's.",
      answers: ["as long as"],
      model: "as long as",
      explanation: "A comparative sentence can be rewritten as 'not as + adjective + as'."
    },
    {
      original: "No other student in the class is as clever as Emma.",
      keyword: "than",
      gapped: "Emma is cleverer ____ any other student in the class.",
      answers: ["than"],
      model: "than",
      explanation: "'No other ... as ... as' equals a comparative with 'than any other'."
    },
    {
      original: "The train isn't as expensive as the plane.",
      keyword: "than",
      gapped: "The plane is more expensive ____ the train.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as expensive as' means the other thing is 'more expensive than' it."
    },
    {
      original: "My old phone was slower than this one.",
      keyword: "as",
      gapped: "This phone is not as slow ____ my old one.",
      answers: ["as"],
      model: "as",
      explanation: "'Slower than' becomes 'not as slow as' with the subjects reversed."
    },
    {
      original: "Today isn't as cold as yesterday.",
      keyword: "than",
      gapped: "Yesterday was colder ____ today.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as cold as' can be expressed with a comparative + 'than'."
    },
    /* ---------- passive ---------- */
    {
      original: "Somebody stole my bike last night.",
      keyword: "was",
      gapped: "My bike ____ last night.",
      answers: ["was stolen"],
      model: "was stolen",
      explanation: "Past simple passive: was/were + past participle when the doer is unknown."
    },
    {
      original: "They make these shoes in Italy.",
      keyword: "are",
      gapped: "These shoes ____ in Italy.",
      answers: ["are made"],
      model: "are made",
      explanation: "Present simple passive: are + past participle for a plural subject."
    },
    {
      original: "Shakespeare wrote this play.",
      keyword: "by",
      gapped: "This play was written ____ Shakespeare.",
      answers: ["by"],
      model: "by",
      explanation: "In the passive, the doer of the action is introduced with 'by'."
    },
    {
      original: "They built this bridge in 1990.",
      keyword: "was",
      gapped: "This bridge ____ in 1990.",
      answers: ["was built"],
      model: "was built",
      explanation: "Past simple passive: the object becomes the subject with was + past participle."
    },
    {
      original: "Someone cleans the office every evening.",
      keyword: "is",
      gapped: "The office ____ every evening.",
      answers: ["is cleaned"],
      model: "is cleaned",
      explanation: "Present simple passive: is + past participle for a singular subject."
    },
    {
      original: "The police found the missing dog.",
      keyword: "was",
      gapped: "The missing dog ____ by the police.",
      answers: ["was found"],
      model: "was found",
      explanation: "Past simple passive with 'by' to show who did the action."
    },
    {
      original: "They will open the new library next month.",
      keyword: "be",
      gapped: "The new library will ____ next month.",
      answers: ["be opened"],
      model: "be opened",
      explanation: "Future passive: will + be + past participle."
    },
    {
      original: "People speak English all over the world.",
      keyword: "is",
      gapped: "English ____ all over the world.",
      answers: ["is spoken"],
      model: "is spoken",
      explanation: "Present simple passive: is + past participle; 'people' is not needed."
    },
    {
      original: "A famous chef cooked the meal.",
      keyword: "by",
      gapped: "The meal was cooked ____ a famous chef.",
      answers: ["by"],
      model: "by",
      explanation: "The agent in a passive sentence is introduced with 'by'."
    },
    {
      original: "They grow rice in many Asian countries.",
      keyword: "is",
      gapped: "Rice ____ grown in many Asian countries.",
      answers: ["is"],
      model: "is",
      explanation: "Present simple passive: 'rice' is singular/uncountable, so we use 'is grown'."
    },
    /* ---------- reported speech ---------- */
    {
      original: "'I am tired,' said Maria.",
      keyword: "was",
      gapped: "Maria said that she ____ tired.",
      answers: ["was"],
      model: "was",
      explanation: "In reported speech, present simple 'am' changes to past simple 'was'."
    },
    {
      original: "'Do you like pizza?' Tom asked me.",
      keyword: "if",
      gapped: "Tom asked me ____ liked pizza.",
      answers: ["if I"],
      model: "if I",
      explanation: "Reported yes/no questions use 'if' and normal word order; 'like' becomes 'liked'."
    },
    {
      original: "'Wait outside,' the teacher said to us.",
      keyword: "told",
      gapped: "The teacher ____ to wait outside.",
      answers: ["told us"],
      model: "told us",
      explanation: "A reported command uses 'told + person + to + infinitive'."
    },
    {
      original: "'I will help you,' Jack said to Anna.",
      keyword: "would",
      gapped: "Jack told Anna that he ____ help her.",
      answers: ["would"],
      model: "would",
      explanation: "In reported speech, 'will' changes to 'would'."
    },
    {
      original: "'Where do you live?' Emma asked Ben.",
      keyword: "where",
      gapped: "Emma asked Ben ____ lived.",
      answers: ["where he"],
      model: "where he",
      explanation: "Reported wh-questions keep the question word but use statement word order."
    },
    {
      original: "'Don't touch the paintings,' the guide said to the visitors.",
      keyword: "not",
      gapped: "The guide told the visitors ____ touch the paintings.",
      answers: ["not to"],
      model: "not to",
      explanation: "A reported negative command uses 'told + person + not to + infinitive'."
    },
    {
      original: "'I can swim very well,' said Lucy.",
      keyword: "could",
      gapped: "Lucy said that she ____ swim very well.",
      answers: ["could"],
      model: "could",
      explanation: "In reported speech, 'can' changes to 'could'."
    },
    {
      original: "'We are leaving tomorrow,' David said.",
      keyword: "were",
      gapped: "David said that they ____ leaving the next day.",
      answers: ["were"],
      model: "were",
      explanation: "Present continuous 'are leaving' becomes past continuous 'were leaving'."
    },
    {
      original: "'Have you finished your homework?' Mum asked me.",
      keyword: "whether",
      gapped: "Mum asked me ____ had finished my homework.",
      answers: ["whether I"],
      model: "whether I",
      explanation: "Reported yes/no questions can use 'whether'; present perfect becomes past perfect."
    },
    {
      original: "'Close the window, please,' Anna said to Tom.",
      keyword: "asked",
      gapped: "Anna ____ close the window.",
      answers: ["asked Tom to"],
      model: "asked Tom to",
      explanation: "A polite request is reported with 'asked + person + to + infinitive'."
    },
    /* ---------- would rather / prefer ---------- */
    {
      original: "I prefer walking to cycling.",
      keyword: "rather",
      gapped: "I would ____ than cycle.",
      answers: ["rather walk"],
      model: "rather walk",
      explanation: "'Prefer X to Y' becomes 'would rather + infinitive + than + infinitive'."
    },
    {
      original: "Tom would rather stay at home than go to the party.",
      keyword: "prefers",
      gapped: "Tom ____ at home to going to the party.",
      answers: ["prefers staying"],
      model: "prefers staying",
      explanation: "'Would rather + verb' becomes 'prefers + -ing + to + -ing'."
    },
    {
      original: "Anna prefers tea to coffee.",
      keyword: "rather",
      gapped: "Anna would ____ have tea than coffee.",
      answers: ["rather"],
      model: "rather",
      explanation: "'Prefers X to Y' can be expressed as 'would rather have X than Y'."
    },
    {
      original: "I'd rather watch a film than read a book tonight.",
      keyword: "prefer",
      gapped: "I ____ a film to reading a book tonight.",
      answers: ["prefer watching"],
      model: "prefer watching",
      explanation: "'Would rather + infinitive + than' becomes 'prefer + -ing + to + -ing'."
    },
    {
      original: "Lucy prefers travelling by train to flying.",
      keyword: "rather",
      gapped: "Lucy would ____ by train than fly.",
      answers: ["rather travel"],
      model: "rather travel",
      explanation: "'Prefers + -ing' becomes 'would rather + bare infinitive'."
    },
    {
      original: "Ben would rather play tennis than football.",
      keyword: "prefers",
      gapped: "Ben ____ tennis to football.",
      answers: ["prefers playing", "prefers"],
      model: "prefers playing",
      explanation: "'Would rather play X than Y' becomes 'prefers (playing) X to Y'."
    },
    {
      original: "Emma prefers listening to music to watching TV.",
      keyword: "rather",
      gapped: "Emma would ____ to music than watch TV.",
      answers: ["rather listen"],
      model: "rather listen",
      explanation: "'Prefers + -ing to + -ing' becomes 'would rather + verb + than + verb'."
    },
    {
      original: "I prefer coffee to tea in the morning.",
      keyword: "rather",
      gapped: "I would ____ coffee than tea in the morning.",
      answers: ["rather have", "rather drink"],
      model: "rather have",
      explanation: "'Prefer X to Y' with nouns becomes 'would rather have X than Y'."
    },
    /* ---------- unless / if ---------- */
    {
      original: "If you don't hurry, you will miss the bus.",
      keyword: "unless",
      gapped: "You will miss the bus ____ hurry.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'If ... not' can be replaced by 'unless' with a positive verb."
    },
    {
      original: "Unless it rains, we will have a picnic tomorrow.",
      keyword: "if",
      gapped: "We will have a picnic tomorrow ____ rain.",
      answers: ["if it doesn't", "if it does not"],
      model: "if it doesn't",
      explanation: "'Unless' means 'if ... not', so we need a negative verb with 'if'."
    },
    {
      original: "If you don't study, you won't pass the exam.",
      keyword: "unless",
      gapped: "You won't pass the exam ____ study.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'Unless you study' means 'if you don't study'."
    },
    {
      original: "You can't come in unless you have a ticket.",
      keyword: "if",
      gapped: "You can't come in ____ have a ticket.",
      answers: ["if you don't", "if you do not"],
      model: "if you don't",
      explanation: "'Unless you have' becomes 'if you don't have'."
    },
    {
      original: "If Tom doesn't leave now, he will be late.",
      keyword: "unless",
      gapped: "Tom will be late ____ leaves now.",
      answers: ["unless he"],
      model: "unless he",
      explanation: "'If he doesn't leave' can be rewritten as 'unless he leaves'."
    },
    {
      original: "Unless you water the plants, they will die.",
      keyword: "if",
      gapped: "The plants will die ____ water them.",
      answers: ["if you don't", "if you do not"],
      model: "if you don't",
      explanation: "'Unless you water' equals 'if you don't water'."
    },
    {
      original: "If you don't wear a coat, you will get cold.",
      keyword: "unless",
      gapped: "You will get cold ____ wear a coat.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'Unless' replaces 'if ... not'; the verb after 'unless' stays positive."
    },
    {
      original: "We won't go to the beach unless the weather improves.",
      keyword: "if",
      gapped: "We won't go to the beach ____ improve.",
      answers: ["if the weather doesn't"],
      model: "if the weather doesn't",
      explanation: "'Unless the weather improves' means 'if the weather doesn't improve'."
    },
    /* ---------- although / despite ---------- */
    {
      original: "Although it was raining, we went for a walk.",
      keyword: "despite",
      gapped: "We went for a walk ____ rain.",
      answers: ["despite the"],
      model: "despite the",
      explanation: "'Although + clause' becomes 'despite + noun': despite the rain."
    },
    {
      original: "Despite feeling tired, Anna finished her homework.",
      keyword: "although",
      gapped: "Anna finished her homework ____ felt tired.",
      answers: ["although she"],
      model: "although she",
      explanation: "'Despite + -ing' becomes 'although + subject + verb'."
    },
    {
      original: "Although he was ill, Tom went to work.",
      keyword: "spite",
      gapped: "Tom went to work in ____ ill.",
      answers: ["spite of being", "spite of feeling"],
      model: "spite of being",
      explanation: "'Although + clause' becomes 'in spite of + -ing form'."
    },
    {
      original: "Despite the bad weather, the match continued.",
      keyword: "although",
      gapped: "The match continued ____ weather was bad.",
      answers: ["although the"],
      model: "although the",
      explanation: "'Despite + noun' becomes 'although + subject + verb'."
    },
    {
      original: "Although the tickets were expensive, we bought them.",
      keyword: "despite",
      gapped: "We bought the tickets ____ their high price.",
      answers: ["despite"],
      model: "despite",
      explanation: "'Although + clause' can become 'despite + noun phrase'."
    },
    {
      original: "Despite his age, my grandfather plays tennis every week.",
      keyword: "although",
      gapped: "My grandfather plays tennis every week ____ is old.",
      answers: ["although he"],
      model: "although he",
      explanation: "'Despite + noun' is rewritten as 'although + subject + verb'."
    },
    {
      original: "Although Lucy studied hard, she failed the test.",
      keyword: "despite",
      gapped: "Lucy failed the test ____ hard.",
      answers: ["despite studying"],
      model: "despite studying",
      explanation: "'Although + clause' becomes 'despite + -ing form'."
    },
    {
      original: "Despite the noise, the baby slept well.",
      keyword: "although",
      gapped: "The baby slept well ____ was noisy.",
      answers: ["although it"],
      model: "although it",
      explanation: "'Despite + noun' becomes a clause with 'although'."
    },
    /* ---------- advice ---------- */
    {
      original: "You should see a dentist about that tooth.",
      keyword: "ought",
      gapped: "You ____ see a dentist about that tooth.",
      answers: ["ought to"],
      model: "ought to",
      explanation: "'Should' can be replaced by 'ought to' with the same meaning."
    },
    {
      original: "You should try the new Italian restaurant.",
      keyword: "why",
      gapped: "____ you try the new Italian restaurant?",
      answers: ["Why don't"],
      model: "Why don't",
      explanation: "Advice with 'should' can become a suggestion: 'Why don't you ...?'"
    },
    {
      original: "Why don't you ask your teacher for help?",
      keyword: "should",
      gapped: "You ____ your teacher for help.",
      answers: ["should ask"],
      model: "should ask",
      explanation: "'Why don't you + verb?' can be rewritten as 'You should + verb'."
    },
    {
      original: "You ought to drink more water.",
      keyword: "should",
      gapped: "You ____ more water.",
      answers: ["should drink"],
      model: "should drink",
      explanation: "'Ought to' and 'should' both give advice with the same meaning."
    },
    {
      original: "I think you should join the swimming club.",
      keyword: "why",
      gapped: "____ join the swimming club?",
      answers: ["Why don't you"],
      model: "Why don't you",
      explanation: "'You should' can become the suggestion 'Why don't you ...?'"
    },
    {
      original: "Why don't you take the earlier train?",
      keyword: "ought",
      gapped: "You ____ the earlier train.",
      answers: ["ought to take"],
      model: "ought to take",
      explanation: "A 'Why don't you' suggestion equals advice with 'ought to'."
    },
    /* ---------- never / first time ---------- */
    {
      original: "This is the first time I have visited Rome.",
      keyword: "never",
      gapped: "I have ____ Rome before.",
      answers: ["never visited"],
      model: "never visited",
      explanation: "'The first time I have done X' means 'I have never done X before'."
    },
    {
      original: "Emma has never flown in a plane before.",
      keyword: "first",
      gapped: "This is the ____ time Emma has flown in a plane.",
      answers: ["first"],
      model: "first",
      explanation: "'Never before' means it is the first time it has happened."
    },
    {
      original: "I have never eaten sushi before.",
      keyword: "time",
      gapped: "This is the first ____ eaten sushi.",
      answers: ["time I have", "time I've"],
      model: "time I have",
      explanation: "'Never before' becomes 'the first time + present perfect'."
    },
    {
      original: "This is the first time Tom has driven abroad.",
      keyword: "never",
      gapped: "Tom has ____ abroad before.",
      answers: ["never driven"],
      model: "never driven",
      explanation: "'The first time' equals 'never ... before' in the present perfect."
    },
    {
      original: "Lucy has never seen snow before.",
      keyword: "first",
      gapped: "This is the ____ Lucy has seen snow.",
      answers: ["first time"],
      model: "first time",
      explanation: "'Never before' can be rewritten as 'the first time + present perfect'."
    },
    {
      original: "This is the first time we have stayed in this hotel.",
      keyword: "never",
      gapped: "We have ____ in this hotel before.",
      answers: ["never stayed"],
      model: "never stayed",
      explanation: "'The first time we have stayed' means 'we have never stayed before'."
    },
    /* ---------- lend / borrow ---------- */
    {
      original: "Jack borrowed a pen from Maria.",
      keyword: "lent",
      gapped: "Maria ____ a pen.",
      answers: ["lent Jack"],
      model: "lent Jack",
      explanation: "'Borrow from someone' becomes 'someone lent + person + object'."
    },
    {
      original: "Anna lent her bike to Tom.",
      keyword: "borrowed",
      gapped: "Tom ____ from Anna.",
      answers: ["borrowed her bike", "borrowed the bike"],
      model: "borrowed her bike",
      explanation: "'Lend to someone' becomes 'someone borrowed + object + from'."
    },
    {
      original: "Ben borrowed some money from his sister.",
      keyword: "lent",
      gapped: "Ben's sister ____ some money.",
      answers: ["lent him", "lent Ben"],
      model: "lent him",
      explanation: "The lender gives; 'borrowed from' becomes 'lent + person'."
    },
    {
      original: "David lent his camera to Emma.",
      keyword: "borrowed",
      gapped: "Emma ____ from David.",
      answers: ["borrowed his camera", "borrowed the camera", "borrowed a camera"],
      model: "borrowed his camera",
      explanation: "'Lent to Emma' means 'Emma borrowed it from David'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
