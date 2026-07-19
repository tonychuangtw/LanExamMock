/* PET Prep extra bank: part4 wave 4 */
(function () {
  var BANK = [
    /* ---------- so / such ---------- */
    {
      original: "The queue was so long that we gave up waiting.",
      keyword: "such",
      gapped: "It was ____ long queue that we gave up waiting.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' becomes 'such a + adjective + noun' with a singular noun."
    },
    {
      original: "The stairs were so steep that Grandpa needed a rest.",
      keyword: "such",
      gapped: "They were ____ steep stairs that Grandpa needed a rest.",
      answers: ["such"],
      model: "such",
      explanation: "With plural nouns we use 'such' without an article."
    },
    {
      original: "It was such a windy day that our hats blew off.",
      keyword: "so",
      gapped: "The day was ____ windy that our hats blew off.",
      answers: ["so"],
      model: "so",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' when no noun follows."
    },
    {
      original: "The cheese was so smelly that Daniel left the kitchen.",
      keyword: "such",
      gapped: "It was ____ smelly cheese that Daniel left the kitchen.",
      answers: ["such"],
      model: "such",
      explanation: "'Cheese' is uncountable, so we use 'such' without 'a'."
    },
    {
      original: "It was such a brilliant concert that we clapped for ten minutes.",
      keyword: "so",
      gapped: "The concert was ____ brilliant that we clapped for ten minutes.",
      answers: ["so"],
      model: "so",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' with the noun as subject."
    },
    {
      original: "The mountain was so high that few climbers reached the top.",
      keyword: "such",
      gapped: "It was ____ high mountain that few climbers reached the top.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So high' becomes 'such a high mountain' when the noun follows."
    },
    {
      original: "The message was so strange that Grace read it twice.",
      keyword: "such",
      gapped: "It was ____ strange message that Grace read it twice.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' changes to 'such a + adjective + noun'."
    },
    {
      original: "It was such a heavy bag that Ella couldn't lift it.",
      keyword: "so",
      gapped: "The bag was ____ heavy that Ella couldn't lift it.",
      answers: ["so"],
      model: "so",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' after the verb 'be'."
    },
    {
      original: "Leo is so patient that he never gets angry with anyone.",
      keyword: "such",
      gapped: "Leo is ____ patient person that he never gets angry with anyone.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So patient' becomes 'such a patient person' when we add a noun."
    },
    {
      original: "The corridor was so dark that Mia switched on her torch.",
      keyword: "such",
      gapped: "It was ____ dark corridor that Mia switched on her torch.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' becomes 'such a + adjective + noun'."
    },
    /* ---------- too / enough ---------- */
    {
      original: "The rope is too thin to hold my weight.",
      keyword: "enough",
      gapped: "The rope is not thick ____ hold my weight.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too thin' means 'not thick enough to'; use the opposite adjective."
    },
    {
      original: "Harry is too nervous to give the presentation.",
      keyword: "enough",
      gapped: "Harry is not calm ____ give the presentation.",
      answers: ["enough to", "enough for"],
      model: "enough to",
      explanation: "'Too nervous' equals 'not calm enough to + infinitive'."
    },
    {
      original: "The sauce was too spicy for the guests to enjoy.",
      keyword: "enough",
      gapped: "The sauce was not mild ____ the guests to enjoy.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too spicy' means 'not mild enough for + person + to + verb'."
    },
    {
      original: "Clara isn't fit enough to run a marathon.",
      keyword: "too",
      gapped: "Clara is ____ to run a marathon.",
      answers: ["too unfit"],
      model: "too unfit",
      explanation: "'Not fit enough' means 'too unfit'; the opposite adjective goes with 'too'."
    },
    {
      original: "The photo was too blurry for us to recognise anyone.",
      keyword: "enough",
      gapped: "The photo was not clear ____ us to recognise anyone.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too blurry' becomes 'not clear enough for + person + to + verb'."
    },
    {
      original: "Adam isn't tall enough to touch the ceiling.",
      keyword: "too",
      gapped: "Adam is ____ to touch the ceiling.",
      answers: ["too short"],
      model: "too short",
      explanation: "'Not tall enough' equals 'too short'."
    },
    {
      original: "The soup was too cold to serve.",
      keyword: "enough",
      gapped: "The soup was not hot ____ serve.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too cold' means 'not hot enough to'."
    },
    {
      original: "This desk is too wide for my bedroom.",
      keyword: "enough",
      gapped: "This desk is not narrow ____ my bedroom.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too wide' becomes 'not narrow enough for'."
    },
    {
      original: "The guide walks too quickly for the older tourists.",
      keyword: "enough",
      gapped: "The guide does not walk slowly ____ the older tourists.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too quickly' means 'not slowly enough'; the pattern works with adverbs."
    },
    {
      original: "The office is too noisy for making phone calls.",
      keyword: "enough",
      gapped: "The office is not quiet ____ making phone calls.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too noisy' equals 'not quiet enough for + -ing'."
    },
    /* ---------- ago / for / since ---------- */
    {
      original: "Grace moved to Vienna six years ago.",
      keyword: "for",
      gapped: "Grace has lived in Vienna ____.",
      answers: ["for six years"],
      model: "for six years",
      explanation: "'Moved ... ago' becomes present perfect 'has lived for + period'."
    },
    {
      original: "Daniel bought his drone in 2023.",
      keyword: "since",
      gapped: "Daniel has had his drone ____ 2023.",
      answers: ["since"],
      model: "since",
      explanation: "'Bought in + year' becomes 'has had since + year'."
    },
    {
      original: "Ella has worked at the bookshop for seven months.",
      keyword: "ago",
      gapped: "Ella started working at the bookshop seven ____.",
      answers: ["months ago"],
      model: "months ago",
      explanation: "Present perfect with 'for' becomes past simple 'started ... ago'."
    },
    {
      original: "Leo began learning the piano four years ago.",
      keyword: "for",
      gapped: "Leo has been learning the piano ____ four years.",
      answers: ["for"],
      model: "for",
      explanation: "'Began ... ago' becomes present perfect continuous with 'for'."
    },
    {
      original: "The last time we saw Mia was in February.",
      keyword: "since",
      gapped: "We haven't seen Mia ____ February.",
      answers: ["since"],
      model: "since",
      explanation: "'The last time was in February' means 'haven't seen her since February'."
    },
    {
      original: "Harry last cleaned his room a week ago.",
      keyword: "for",
      gapped: "Harry hasn't cleaned his room ____ a week.",
      answers: ["for"],
      model: "for",
      explanation: "'Last cleaned ... ago' becomes negative present perfect with 'for'."
    },
    {
      original: "It's three years since Clara passed her driving test.",
      keyword: "ago",
      gapped: "Clara passed her driving test three ____.",
      answers: ["years ago"],
      model: "years ago",
      explanation: "'It's three years since' equals a past simple sentence with 'ago'."
    },
    {
      original: "Adam started his paper round last summer.",
      keyword: "since",
      gapped: "Adam has had his paper round ____ last summer.",
      answers: ["since"],
      model: "since",
      explanation: "'Started' becomes 'has had' with 'since + point in time'."
    },
    {
      original: "I met Grace eight years ago.",
      keyword: "for",
      gapped: "I have known Grace ____ eight years.",
      answers: ["for"],
      model: "for",
      explanation: "'Met ... ago' becomes 'have known for + period of time'."
    },
    {
      original: "Daniel hasn't watered the garden for ten days.",
      keyword: "ago",
      gapped: "The last time Daniel watered the garden was ten ____.",
      answers: ["days ago"],
      model: "days ago",
      explanation: "Negative present perfect with 'for' equals 'the last time was ... ago'."
    },
    /* ---------- comparatives / as...as ---------- */
    {
      original: "My uncle is richer than my father.",
      keyword: "as",
      gapped: "My father is not ____ my uncle.",
      answers: ["as rich as"],
      model: "as rich as",
      explanation: "'X is richer than Y' means 'Y is not as rich as X'."
    },
    {
      original: "This song is more famous than that one.",
      keyword: "as",
      gapped: "That song is not ____ famous as this one.",
      answers: ["as"],
      model: "as",
      explanation: "A comparative becomes 'not as + adjective + as' from the other side."
    },
    {
      original: "Ella reads faster than Harry.",
      keyword: "as",
      gapped: "Harry does not read ____ Ella.",
      answers: ["as fast as"],
      model: "as fast as",
      explanation: "'Faster than' becomes 'not as fast as' when the subjects swap."
    },
    {
      original: "This beach isn't as clean as the one near our hotel.",
      keyword: "than",
      gapped: "The beach near our hotel is cleaner ____ this one.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as clean as' means the other one is 'cleaner than' it."
    },
    {
      original: "The bakery is closer than the supermarket.",
      keyword: "as",
      gapped: "The supermarket is not ____ close as the bakery.",
      answers: ["as"],
      model: "as",
      explanation: "'Closer than' becomes 'not as close as' the other way round."
    },
    {
      original: "Leo's room is tidier than Adam's.",
      keyword: "as",
      gapped: "Adam's room is not ____ Leo's.",
      answers: ["as tidy as"],
      model: "as tidy as",
      explanation: "A comparative can be rewritten as 'not as + adjective + as'."
    },
    {
      original: "No other lake in the region is as deep as this one.",
      keyword: "than",
      gapped: "This lake is deeper ____ any other in the region.",
      answers: ["than"],
      model: "than",
      explanation: "'No other ... as ... as' equals a comparative with 'than any other'."
    },
    {
      original: "The old model isn't as reliable as the new one.",
      keyword: "than",
      gapped: "The new model is more reliable ____ the old one.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as reliable as' means 'more reliable than' from the other side."
    },
    {
      original: "My old bike was heavier than this one.",
      keyword: "as",
      gapped: "This bike is not as heavy ____ my old one.",
      answers: ["as"],
      model: "as",
      explanation: "'Heavier than' becomes 'not as heavy as' when reversed."
    },
    {
      original: "This month isn't as rainy as last month.",
      keyword: "than",
      gapped: "Last month was rainier ____ this month.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as rainy as' can be expressed with a comparative + 'than'."
    },
    /* ---------- passive ---------- */
    {
      original: "Somebody took my umbrella from the stand.",
      keyword: "was",
      gapped: "My umbrella ____ from the stand.",
      answers: ["was taken"],
      model: "was taken",
      explanation: "Past simple passive: was + past participle when the doer is unknown."
    },
    {
      original: "They print these books in Germany.",
      keyword: "are",
      gapped: "These books ____ in Germany.",
      answers: ["are printed"],
      model: "are printed",
      explanation: "Present simple passive: are + past participle for a plural subject."
    },
    {
      original: "A local farmer produces this honey.",
      keyword: "by",
      gapped: "This honey is produced ____ a local farmer.",
      answers: ["by"],
      model: "by",
      explanation: "The agent in a passive sentence is introduced with 'by'."
    },
    {
      original: "They knocked down the old cinema in 2015.",
      keyword: "was",
      gapped: "The old cinema ____ down in 2015.",
      answers: ["was knocked"],
      model: "was knocked",
      explanation: "Past simple passive: the object becomes the subject with was + past participle."
    },
    {
      original: "Someone empties the bins every Tuesday.",
      keyword: "are",
      gapped: "The bins ____ every Tuesday.",
      answers: ["are emptied"],
      model: "are emptied",
      explanation: "Present simple passive: are + past participle for a plural subject."
    },
    {
      original: "The vet treated the injured bird.",
      keyword: "was",
      gapped: "The injured bird ____ by the vet.",
      answers: ["was treated"],
      model: "was treated",
      explanation: "Past simple passive with 'by' shows who did the action."
    },
    {
      original: "They will publish the results on Friday.",
      keyword: "be",
      gapped: "The results will ____ on Friday.",
      answers: ["be published"],
      model: "be published",
      explanation: "Future passive: will + be + past participle."
    },
    {
      original: "People celebrate this festival in many countries.",
      keyword: "is",
      gapped: "This festival ____ in many countries.",
      answers: ["is celebrated"],
      model: "is celebrated",
      explanation: "Present simple passive: is + past participle; 'people' is dropped."
    },
    {
      original: "A teenager invented this game.",
      keyword: "by",
      gapped: "This game was invented ____ a teenager.",
      answers: ["by"],
      model: "by",
      explanation: "In the passive, the doer of the action follows 'by'."
    },
    {
      original: "They serve breakfast at the hotel until ten.",
      keyword: "is",
      gapped: "Breakfast ____ served at the hotel until ten.",
      answers: ["is"],
      model: "is",
      explanation: "Present simple passive: 'breakfast' is singular, so 'is served'."
    },
    /* ---------- reported speech ---------- */
    {
      original: "'I am cold,' said Clara.",
      keyword: "was",
      gapped: "Clara said that she ____ cold.",
      answers: ["was"],
      model: "was",
      explanation: "In reported speech, present simple 'am' changes to past simple 'was'."
    },
    {
      original: "'Do you collect stamps?' Leo asked me.",
      keyword: "if",
      gapped: "Leo asked me ____ collected stamps.",
      answers: ["if I"],
      model: "if I",
      explanation: "Reported yes/no questions use 'if' and the verb moves one tense back."
    },
    {
      original: "'Put on your helmets,' the instructor said to us.",
      keyword: "told",
      gapped: "The instructor ____ to put on our helmets.",
      answers: ["told us"],
      model: "told us",
      explanation: "A reported command uses 'told + person + to + infinitive'."
    },
    {
      original: "'I will water your plants,' Adam said to Grace.",
      keyword: "would",
      gapped: "Adam told Grace that he ____ water her plants.",
      answers: ["would"],
      model: "would",
      explanation: "In reported speech, 'will' changes to 'would'."
    },
    {
      original: "'Where do you train?' Ella asked Harry.",
      keyword: "where",
      gapped: "Ella asked Harry ____ trained.",
      answers: ["where he"],
      model: "where he",
      explanation: "Reported wh-questions keep the question word but use statement word order."
    },
    {
      original: "'Don't leave your bags here,' the driver said to the passengers.",
      keyword: "not",
      gapped: "The driver told the passengers ____ leave their bags there.",
      answers: ["not to"],
      model: "not to",
      explanation: "A reported negative command uses 'told + person + not to + infinitive'."
    },
    {
      original: "'I can play the violin,' said Mia.",
      keyword: "could",
      gapped: "Mia said that she ____ play the violin.",
      answers: ["could"],
      model: "could",
      explanation: "In reported speech, 'can' changes to 'could'."
    },
    {
      original: "'We are getting a puppy soon,' Daniel said.",
      keyword: "were",
      gapped: "Daniel said that they ____ getting a puppy soon.",
      answers: ["were"],
      model: "were",
      explanation: "Present continuous 'are getting' becomes past continuous 'were getting'."
    },
    {
      original: "'Have you fed the cat?' Grandma asked me.",
      keyword: "whether",
      gapped: "Grandma asked me ____ had fed the cat.",
      answers: ["whether I"],
      model: "whether I",
      explanation: "Reported yes/no questions can use 'whether'; present perfect becomes past perfect."
    },
    {
      original: "'Carry this box upstairs, please,' Grace said to Leo.",
      keyword: "asked",
      gapped: "Grace ____ carry the box upstairs.",
      answers: ["asked Leo to"],
      model: "asked Leo to",
      explanation: "A polite request is reported with 'asked + person + to + infinitive'."
    },
    /* ---------- would rather / prefer ---------- */
    {
      original: "I prefer jogging to swimming.",
      keyword: "rather",
      gapped: "I would ____ than swim.",
      answers: ["rather jog"],
      model: "rather jog",
      explanation: "'Prefer X to Y' becomes 'would rather + infinitive + than + infinitive'."
    },
    {
      original: "Daniel would rather travel by night than by day.",
      keyword: "prefers",
      gapped: "Daniel ____ by night to travelling by day.",
      answers: ["prefers travelling"],
      model: "prefers travelling",
      explanation: "'Would rather + verb' becomes 'prefers + -ing + to + -ing'."
    },
    {
      original: "Mia prefers lemonade to cola.",
      keyword: "rather",
      gapped: "Mia would ____ have lemonade than cola.",
      answers: ["rather"],
      model: "rather",
      explanation: "'Prefers X to Y' can be expressed as 'would rather have X than Y'."
    },
    {
      original: "I'd rather eat at home than in a restaurant tonight.",
      keyword: "prefer",
      gapped: "I ____ at home to eating in a restaurant tonight.",
      answers: ["prefer eating"],
      model: "prefer eating",
      explanation: "'Would rather + infinitive + than' becomes 'prefer + -ing + to + -ing'."
    },
    {
      original: "Clara prefers writing emails to making phone calls.",
      keyword: "rather",
      gapped: "Clara would ____ emails than make phone calls.",
      answers: ["rather write"],
      model: "rather write",
      explanation: "'Prefers + -ing' becomes 'would rather + bare infinitive'."
    },
    {
      original: "Harry would rather do judo than gymnastics.",
      keyword: "prefers",
      gapped: "Harry ____ judo to gymnastics.",
      answers: ["prefers doing", "prefers"],
      model: "prefers doing",
      explanation: "'Would rather do X than Y' becomes 'prefers (doing) X to Y'."
    },
    {
      original: "Ella prefers dancing to singing.",
      keyword: "rather",
      gapped: "Ella would ____ than sing.",
      answers: ["rather dance"],
      model: "rather dance",
      explanation: "'Prefers + -ing to + -ing' becomes 'would rather + verb + than + verb'."
    },
    {
      original: "I prefer orange juice to apple juice at breakfast.",
      keyword: "rather",
      gapped: "I would ____ orange juice than apple juice at breakfast.",
      answers: ["rather have", "rather drink"],
      model: "rather have",
      explanation: "'Prefer X to Y' with nouns becomes 'would rather have X than Y'."
    },
    /* ---------- unless / if ---------- */
    {
      original: "If you don't tidy your room, you can't go out.",
      keyword: "unless",
      gapped: "You can't go out ____ tidy your room.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'If ... not' can be replaced by 'unless' with a positive verb."
    },
    {
      original: "Unless the shop opens soon, we will leave.",
      keyword: "if",
      gapped: "We will leave ____ open soon.",
      answers: ["if the shop doesn't"],
      model: "if the shop doesn't",
      explanation: "'Unless the shop opens' means 'if the shop doesn't open'."
    },
    {
      original: "If you don't listen, you won't understand the instructions.",
      keyword: "unless",
      gapped: "You won't understand the instructions ____ listen.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'Unless you listen' means 'if you don't listen'."
    },
    {
      original: "You can't ride this rollercoaster unless you are over twelve.",
      keyword: "if",
      gapped: "You can't ride this rollercoaster ____ over twelve.",
      answers: ["if you aren't", "if you are not"],
      model: "if you aren't",
      explanation: "'Unless you are' becomes 'if you aren't'."
    },
    {
      original: "If Mia doesn't set an alarm, she will oversleep.",
      keyword: "unless",
      gapped: "Mia will oversleep ____ sets an alarm.",
      answers: ["unless she"],
      model: "unless she",
      explanation: "'If she doesn't set' can be rewritten as 'unless she sets'."
    },
    {
      original: "Unless you cover the food, the flies will get on it.",
      keyword: "if",
      gapped: "The flies will get on the food ____ cover it.",
      answers: ["if you don't", "if you do not"],
      model: "if you don't",
      explanation: "'Unless you cover' equals 'if you don't cover'."
    },
    {
      original: "If you don't ask, you will never know the answer.",
      keyword: "unless",
      gapped: "You will never know the answer ____ ask.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'Unless' replaces 'if ... not'; the verb after 'unless' stays positive."
    },
    {
      original: "We won't climb the hill unless the fog clears.",
      keyword: "if",
      gapped: "We won't climb the hill ____ clear.",
      answers: ["if the fog doesn't"],
      model: "if the fog doesn't",
      explanation: "'Unless the fog clears' means 'if the fog doesn't clear'."
    },
    /* ---------- although / despite ---------- */
    {
      original: "Although it was late, Harry kept studying.",
      keyword: "despite",
      gapped: "Harry kept studying ____ late hour.",
      answers: ["despite the"],
      model: "despite the",
      explanation: "'Although + clause' becomes 'despite + noun': despite the late hour."
    },
    {
      original: "Despite feeling shy, Ella joined the drama club.",
      keyword: "although",
      gapped: "Ella joined the drama club ____ felt shy.",
      answers: ["although she"],
      model: "although she",
      explanation: "'Despite + -ing' becomes 'although + subject + verb'."
    },
    {
      original: "Although he was hungry, Leo shared his sandwich.",
      keyword: "spite",
      gapped: "Leo shared his sandwich in ____ hungry.",
      answers: ["spite of being", "spite of feeling"],
      model: "spite of being",
      explanation: "'Although + clause' becomes 'in spite of + -ing form'."
    },
    {
      original: "Despite the storm, the ferry sailed on time.",
      keyword: "although",
      gapped: "The ferry sailed on time ____ was a storm.",
      answers: ["although there"],
      model: "although there",
      explanation: "'Despite + noun' becomes a clause with 'although there was'."
    },
    {
      original: "Although the test was long, nobody complained.",
      keyword: "despite",
      gapped: "Nobody complained ____ the length of the test.",
      answers: ["despite"],
      model: "despite",
      explanation: "'Although + clause' can become 'despite + noun phrase'."
    },
    {
      original: "Despite her broken arm, Clara kept playing the piano.",
      keyword: "although",
      gapped: "Clara kept playing the piano ____ arm was broken.",
      answers: ["although her"],
      model: "although her",
      explanation: "'Despite + noun' is rewritten as 'although + subject + verb'."
    },
    {
      original: "Although Adam saved for months, he couldn't afford the bike.",
      keyword: "despite",
      gapped: "Adam couldn't afford the bike ____ for months.",
      answers: ["despite saving"],
      model: "despite saving",
      explanation: "'Although + clause' becomes 'despite + -ing form'."
    },
    {
      original: "Despite the crowds, we enjoyed the festival.",
      keyword: "although",
      gapped: "We enjoyed the festival ____ was crowded.",
      answers: ["although it"],
      model: "although it",
      explanation: "'Despite + noun' becomes a clause with 'although'."
    },
    /* ---------- advice ---------- */
    {
      original: "You should book your tickets early.",
      keyword: "ought",
      gapped: "You ____ book your tickets early.",
      answers: ["ought to"],
      model: "ought to",
      explanation: "'Should' can be replaced by 'ought to' with the same meaning."
    },
    {
      original: "You should join the school choir.",
      keyword: "why",
      gapped: "____ you join the school choir?",
      answers: ["Why don't"],
      model: "Why don't",
      explanation: "Advice with 'should' can become a suggestion: 'Why don't you ...?'"
    },
    {
      original: "Why don't you drink more water during exercise?",
      keyword: "should",
      gapped: "You ____ more water during exercise.",
      answers: ["should drink"],
      model: "should drink",
      explanation: "'Why don't you + verb?' can be rewritten as 'You should + verb'."
    },
    {
      original: "You ought to wear a helmet when you cycle.",
      keyword: "should",
      gapped: "You ____ a helmet when you cycle.",
      answers: ["should wear"],
      model: "should wear",
      explanation: "'Ought to' and 'should' both give advice with the same meaning."
    },
    {
      original: "I think you should enter the photography competition.",
      keyword: "why",
      gapped: "____ enter the photography competition?",
      answers: ["Why don't you"],
      model: "Why don't you",
      explanation: "'You should' can become the suggestion 'Why don't you ...?'"
    },
    {
      original: "Why don't you save a little money every week?",
      keyword: "ought",
      gapped: "You ____ a little money every week.",
      answers: ["ought to save"],
      model: "ought to save",
      explanation: "A 'Why don't you' suggestion equals advice with 'ought to'."
    },
    /* ---------- never / first time ---------- */
    {
      original: "This is the first time I have ridden a camel.",
      keyword: "never",
      gapped: "I have ____ a camel before.",
      answers: ["never ridden"],
      model: "never ridden",
      explanation: "'The first time I have done X' means 'I have never done X before'."
    },
    {
      original: "Grace has never baked a birthday cake before.",
      keyword: "first",
      gapped: "This is the ____ time Grace has baked a birthday cake.",
      answers: ["first"],
      model: "first",
      explanation: "'Never before' means it is the first time it has happened."
    },
    {
      original: "I have never stayed up all night before.",
      keyword: "time",
      gapped: "This is the first ____ stayed up all night.",
      answers: ["time I have", "time I've"],
      model: "time I have",
      explanation: "'Never before' becomes 'the first time + present perfect'."
    },
    {
      original: "This is the first time Leo has scored a goal.",
      keyword: "never",
      gapped: "Leo has ____ a goal before.",
      answers: ["never scored"],
      model: "never scored",
      explanation: "'The first time' equals 'never ... before' in the present perfect."
    },
    {
      original: "Mia has never travelled by boat before.",
      keyword: "first",
      gapped: "This is the ____ Mia has travelled by boat.",
      answers: ["first time"],
      model: "first time",
      explanation: "'Never before' can be rewritten as 'the first time + present perfect'."
    },
    {
      original: "This is the first time we have visited a castle.",
      keyword: "never",
      gapped: "We have ____ a castle before.",
      answers: ["never visited"],
      model: "never visited",
      explanation: "'The first time we have visited' means 'we have never visited before'."
    },
    /* ---------- lend / borrow ---------- */
    {
      original: "Harry borrowed a charger from Clara.",
      keyword: "lent",
      gapped: "Clara ____ a charger.",
      answers: ["lent Harry", "lent him"],
      model: "lent Harry",
      explanation: "'Borrow from someone' becomes 'someone lent + person + object'."
    },
    {
      original: "Ella lent her racket to Daniel.",
      keyword: "borrowed",
      gapped: "Daniel ____ from Ella.",
      answers: ["borrowed her racket", "borrowed the racket", "borrowed a racket"],
      model: "borrowed her racket",
      explanation: "'Lend to someone' becomes 'someone borrowed + object + from'."
    },
    {
      original: "Leo borrowed ten dollars from his cousin.",
      keyword: "lent",
      gapped: "Leo's cousin ____ ten dollars.",
      answers: ["lent him", "lent Leo"],
      model: "lent him",
      explanation: "The lender gives; 'borrowed from' becomes 'lent + person'."
    },
    {
      original: "Grace lent her laptop to Mia.",
      keyword: "borrowed",
      gapped: "Mia ____ from Grace.",
      answers: ["borrowed her laptop", "borrowed the laptop"],
      model: "borrowed her laptop",
      explanation: "'Lent to Mia' means 'Mia borrowed it from Grace'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
