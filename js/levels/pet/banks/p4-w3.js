/* PET Prep extra bank: part4 wave 3 */
(function () {
  var BANK = [
    /* ---------- so / such ---------- */
    {
      original: "The exam was so hard that many students failed.",
      keyword: "such",
      gapped: "It was ____ hard exam that many students failed.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' becomes 'such a + adjective + noun' with a singular noun."
    },
    {
      original: "The instructions were so confusing that nobody understood them.",
      keyword: "such",
      gapped: "They were ____ confusing instructions that nobody understood them.",
      answers: ["such"],
      model: "such",
      explanation: "With plural nouns we use 'such' without an article."
    },
    {
      original: "It was such a hot afternoon that we stayed in the shade.",
      keyword: "so",
      gapped: "The afternoon was ____ hot that we stayed in the shade.",
      answers: ["so"],
      model: "so",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' when no noun follows."
    },
    {
      original: "The coffee was so bitter that Helen added more sugar.",
      keyword: "such",
      gapped: "It was ____ bitter coffee that Helen added more sugar.",
      answers: ["such"],
      model: "such",
      explanation: "'Coffee' is uncountable, so we use 'such' without 'a'."
    },
    {
      original: "It was such a wonderful holiday that we didn't want to leave.",
      keyword: "so",
      gapped: "The holiday was ____ wonderful that we didn't want to leave.",
      answers: ["so"],
      model: "so",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' with the noun as subject."
    },
    {
      original: "The wind was so strong that several trees fell down.",
      keyword: "such",
      gapped: "It was ____ strong wind that several trees fell down.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So strong' becomes 'such a strong wind' when the noun follows."
    },
    {
      original: "The film was so frightening that Ruby covered her eyes.",
      keyword: "such",
      gapped: "It was ____ frightening film that Ruby covered her eyes.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' changes to 'such a + adjective + noun'."
    },
    {
      original: "It was such a slow train that we arrived an hour late.",
      keyword: "so",
      gapped: "The train was ____ slow that we arrived an hour late.",
      answers: ["so"],
      model: "so",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' after the verb 'be'."
    },
    {
      original: "Mark is so generous that he always pays for everyone.",
      keyword: "such",
      gapped: "Mark is ____ generous person that he always pays for everyone.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So generous' becomes 'such a generous person' when we add a noun."
    },
    {
      original: "The streets were so noisy that we couldn't sleep.",
      keyword: "such",
      gapped: "They were ____ noisy streets that we couldn't sleep.",
      answers: ["such"],
      model: "such",
      explanation: "With plural nouns like 'streets' we use 'such' without an article."
    },
    /* ---------- too / enough ---------- */
    {
      original: "The ladder is too short to reach the roof.",
      keyword: "enough",
      gapped: "The ladder is not long ____ reach the roof.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too short' means 'not long enough to'; use the opposite adjective."
    },
    {
      original: "Julia is too weak to open this jar.",
      keyword: "enough",
      gapped: "Julia is not strong ____ open this jar.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too weak' equals 'not strong enough'; 'enough' follows the adjective."
    },
    {
      original: "The pool was too shallow for diving.",
      keyword: "enough",
      gapped: "The pool was not deep ____ diving.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too shallow' becomes 'not deep enough for + -ing'."
    },
    {
      original: "Oscar isn't experienced enough to lead the team.",
      keyword: "too",
      gapped: "Oscar is ____ to lead the team.",
      answers: ["too inexperienced"],
      model: "too inexperienced",
      explanation: "'Not experienced enough' means 'too inexperienced'."
    },
    {
      original: "The print was too small for Grandma to read.",
      keyword: "enough",
      gapped: "The print was not large ____ Grandma to read.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too small' means 'not large enough for + person + to + verb'."
    },
    {
      original: "Nina isn't strong enough to move the wardrobe.",
      keyword: "too",
      gapped: "The wardrobe is ____ for Nina to move.",
      answers: ["too heavy"],
      model: "too heavy",
      explanation: "'Not strong enough' about the person becomes 'too heavy' about the object."
    },
    {
      original: "The bread was too stale to make sandwiches.",
      keyword: "enough",
      gapped: "The bread was not fresh ____ make sandwiches.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too stale' means 'not fresh enough to'."
    },
    {
      original: "This car is too expensive for us to buy.",
      keyword: "enough",
      gapped: "This car is not cheap ____ us to buy.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too expensive' becomes 'not cheap enough for + person + to + verb'."
    },
    {
      original: "The teacher speaks too fast for the beginners to follow.",
      keyword: "enough",
      gapped: "The teacher does not speak slowly ____ the beginners to follow.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too fast' means 'not slowly enough'; the pattern works with adverbs."
    },
    {
      original: "The garden is too shady for growing tomatoes.",
      keyword: "enough",
      gapped: "The garden is not sunny ____ growing tomatoes.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too shady' equals 'not sunny enough for + -ing'."
    },
    /* ---------- ago / for / since ---------- */
    {
      original: "Helen moved to Dublin five years ago.",
      keyword: "for",
      gapped: "Helen has lived in Dublin ____.",
      answers: ["for five years"],
      model: "for five years",
      explanation: "'Moved ... ago' becomes present perfect 'has lived for + period'."
    },
    {
      original: "Mark bought his guitar in 2019.",
      keyword: "since",
      gapped: "Mark has had his guitar ____ 2019.",
      answers: ["since"],
      model: "since",
      explanation: "'Bought in + year' becomes 'has had since + year'."
    },
    {
      original: "Julia has worked at the airport for nine months.",
      keyword: "ago",
      gapped: "Julia started working at the airport nine ____.",
      answers: ["months ago"],
      model: "months ago",
      explanation: "Present perfect with 'for' becomes past simple 'started ... ago'."
    },
    {
      original: "Chris began learning Japanese a year ago.",
      keyword: "for",
      gapped: "Chris has been learning Japanese ____ a year.",
      answers: ["for"],
      model: "for",
      explanation: "'Began ... ago' becomes present perfect continuous with 'for'."
    },
    {
      original: "The last time we saw Oscar was in October.",
      keyword: "since",
      gapped: "We haven't seen Oscar ____ October.",
      answers: ["since"],
      model: "since",
      explanation: "'The last time was in October' means 'haven't seen him since October'."
    },
    {
      original: "Nina last went to the cinema two months ago.",
      keyword: "for",
      gapped: "Nina hasn't been to the cinema ____ two months.",
      answers: ["for"],
      model: "for",
      explanation: "'Last went ... ago' becomes negative present perfect with 'for'."
    },
    {
      original: "It's six years since Ruby left university.",
      keyword: "ago",
      gapped: "Ruby left university six ____.",
      answers: ["years ago"],
      model: "years ago",
      explanation: "'It's six years since' equals a past simple sentence with 'ago'."
    },
    {
      original: "Steve started his own business last January.",
      keyword: "since",
      gapped: "Steve has had his own business ____ last January.",
      answers: ["since"],
      model: "since",
      explanation: "'Started' becomes 'has had' with 'since + point in time'."
    },
    {
      original: "I met Helen fifteen years ago.",
      keyword: "for",
      gapped: "I have known Helen ____ fifteen years.",
      answers: ["for"],
      model: "for",
      explanation: "'Met ... ago' becomes 'have known for + period of time'."
    },
    {
      original: "Mark hasn't ridden his motorbike for a month.",
      keyword: "ago",
      gapped: "The last time Mark rode his motorbike was a ____.",
      answers: ["month ago"],
      model: "month ago",
      explanation: "Negative present perfect with 'for' equals 'the last time was ... ago'."
    },
    /* ---------- comparatives / as...as ---------- */
    {
      original: "My cousin is younger than me.",
      keyword: "as",
      gapped: "I am not ____ my cousin.",
      answers: ["as young as"],
      model: "as young as",
      explanation: "'X is younger than Y' means 'Y is not as young as X'."
    },
    {
      original: "This puzzle is more difficult than the last one.",
      keyword: "as",
      gapped: "The last puzzle was not ____ difficult as this one.",
      answers: ["as"],
      model: "as",
      explanation: "A comparative becomes 'not as + adjective + as' from the other side."
    },
    {
      original: "Ruby types faster than Chris.",
      keyword: "as",
      gapped: "Chris does not type ____ Ruby.",
      answers: ["as fast as"],
      model: "as fast as",
      explanation: "'Faster than' becomes 'not as fast as' when the subjects swap."
    },
    {
      original: "This village isn't as quiet as ours.",
      keyword: "than",
      gapped: "Our village is quieter ____ this one.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as quiet as' means the other one is 'quieter than' it."
    },
    {
      original: "The market is cheaper than the supermarket.",
      keyword: "as",
      gapped: "The supermarket is not ____ cheap as the market.",
      answers: ["as"],
      model: "as",
      explanation: "'Cheaper than' becomes 'not as cheap as' the other way round."
    },
    {
      original: "Oscar's essay is longer than Nina's.",
      keyword: "as",
      gapped: "Nina's essay is not ____ Oscar's.",
      answers: ["as long as"],
      model: "as long as",
      explanation: "A comparative can be rewritten as 'not as + adjective + as'."
    },
    {
      original: "No other bridge in the city is as old as this one.",
      keyword: "than",
      gapped: "This bridge is older ____ any other in the city.",
      answers: ["than"],
      model: "than",
      explanation: "'No other ... as ... as' equals a comparative with 'than any other'."
    },
    {
      original: "The ferry isn't as fast as the hydrofoil.",
      keyword: "than",
      gapped: "The hydrofoil is faster ____ the ferry.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as fast as' means 'faster than' from the other point of view."
    },
    {
      original: "My old flat was smaller than this one.",
      keyword: "as",
      gapped: "This flat is not as small ____ my old one.",
      answers: ["as"],
      model: "as",
      explanation: "'Smaller than' becomes 'not as small as' when reversed."
    },
    {
      original: "This winter isn't as wet as last winter.",
      keyword: "than",
      gapped: "Last winter was wetter ____ this winter.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as wet as' can be expressed with a comparative + 'than'."
    },
    /* ---------- passive ---------- */
    {
      original: "Somebody left the front door open.",
      keyword: "was",
      gapped: "The front door ____ open.",
      answers: ["was left"],
      model: "was left",
      explanation: "Past simple passive: was + past participle when the doer is unknown."
    },
    {
      original: "They grow coffee in Brazil.",
      keyword: "is",
      gapped: "Coffee ____ in Brazil.",
      answers: ["is grown"],
      model: "is grown",
      explanation: "Present simple passive: is + past participle for an uncountable subject."
    },
    {
      original: "A famous architect designed this building.",
      keyword: "by",
      gapped: "This building was designed ____ a famous architect.",
      answers: ["by"],
      model: "by",
      explanation: "The agent in a passive sentence is introduced with 'by'."
    },
    {
      original: "They closed the old factory in 2010.",
      keyword: "was",
      gapped: "The old factory ____ in 2010.",
      answers: ["was closed"],
      model: "was closed",
      explanation: "Past simple passive: the object becomes the subject with was + past participle."
    },
    {
      original: "Someone waters these plants twice a week.",
      keyword: "are",
      gapped: "These plants ____ twice a week.",
      answers: ["are watered"],
      model: "are watered",
      explanation: "Present simple passive: are + past participle for a plural subject."
    },
    {
      original: "The lifeguard saved the swimmer.",
      keyword: "was",
      gapped: "The swimmer ____ by the lifeguard.",
      answers: ["was saved"],
      model: "was saved",
      explanation: "Past simple passive with 'by' shows who did the action."
    },
    {
      original: "They will announce the winners tomorrow.",
      keyword: "be",
      gapped: "The winners will ____ tomorrow.",
      answers: ["be announced"],
      model: "be announced",
      explanation: "Future passive: will + be + past participle."
    },
    {
      original: "People drink tea all over Asia.",
      keyword: "is",
      gapped: "Tea ____ all over Asia.",
      answers: ["is drunk"],
      model: "is drunk",
      explanation: "Present simple passive: is + past participle; 'people' is dropped."
    },
    {
      original: "A student wrote this article.",
      keyword: "by",
      gapped: "This article was written ____ a student.",
      answers: ["by"],
      model: "by",
      explanation: "In the passive, the doer of the action follows 'by'."
    },
    {
      original: "They repair bicycles at that shop.",
      keyword: "are",
      gapped: "Bicycles ____ repaired at that shop.",
      answers: ["are"],
      model: "are",
      explanation: "Present simple passive: plural subject takes 'are repaired'."
    },
    /* ---------- reported speech ---------- */
    {
      original: "'I am busy,' said Helen.",
      keyword: "was",
      gapped: "Helen said that she ____ busy.",
      answers: ["was"],
      model: "was",
      explanation: "In reported speech, present simple 'am' changes to past simple 'was'."
    },
    {
      original: "'Do you enjoy cooking?' Mark asked me.",
      keyword: "if",
      gapped: "Mark asked me ____ enjoyed cooking.",
      answers: ["if I"],
      model: "if I",
      explanation: "Reported yes/no questions use 'if' and the verb moves one tense back."
    },
    {
      original: "'Open your books,' the teacher said to us.",
      keyword: "told",
      gapped: "The teacher ____ to open our books.",
      answers: ["told us"],
      model: "told us",
      explanation: "A reported command uses 'told + person + to + infinitive'."
    },
    {
      original: "'I will send you the photos,' Chris said to Julia.",
      keyword: "would",
      gapped: "Chris told Julia that he ____ send her the photos.",
      answers: ["would"],
      model: "would",
      explanation: "In reported speech, 'will' changes to 'would'."
    },
    {
      original: "'Where do you study?' Nina asked Oscar.",
      keyword: "where",
      gapped: "Nina asked Oscar ____ studied.",
      answers: ["where he"],
      model: "where he",
      explanation: "Reported wh-questions keep the question word but use statement word order."
    },
    {
      original: "'Don't feed the animals,' the keeper said to the children.",
      keyword: "not",
      gapped: "The keeper told the children ____ feed the animals.",
      answers: ["not to"],
      model: "not to",
      explanation: "A reported negative command uses 'told + person + not to + infinitive'."
    },
    {
      original: "'I can fix the printer,' said Steve.",
      keyword: "could",
      gapped: "Steve said that he ____ fix the printer.",
      answers: ["could"],
      model: "could",
      explanation: "In reported speech, 'can' changes to 'could'."
    },
    {
      original: "'We are flying to Rome on Friday,' Ruby said.",
      keyword: "were",
      gapped: "Ruby said that they ____ flying to Rome on Friday.",
      answers: ["were"],
      model: "were",
      explanation: "Present continuous 'are flying' becomes past continuous 'were flying'."
    },
    {
      original: "'Have you locked the door?' Mum asked me.",
      keyword: "whether",
      gapped: "Mum asked me ____ had locked the door.",
      answers: ["whether I"],
      model: "whether I",
      explanation: "Reported yes/no questions can use 'whether'; present perfect becomes past perfect."
    },
    {
      original: "'Pass me the salt, please,' Julia said to Mark.",
      keyword: "asked",
      gapped: "Julia ____ pass her the salt.",
      answers: ["asked Mark to"],
      model: "asked Mark to",
      explanation: "A polite request is reported with 'asked + person + to + infinitive'."
    },
    /* ---------- would rather / prefer ---------- */
    {
      original: "I prefer cycling to driving.",
      keyword: "rather",
      gapped: "I would ____ than drive.",
      answers: ["rather cycle"],
      model: "rather cycle",
      explanation: "'Prefer X to Y' becomes 'would rather + infinitive + than + infinitive'."
    },
    {
      original: "Helen would rather work in the morning than at night.",
      keyword: "prefers",
      gapped: "Helen ____ in the morning to working at night.",
      answers: ["prefers working"],
      model: "prefers working",
      explanation: "'Would rather + verb' becomes 'prefers + -ing + to + -ing'."
    },
    {
      original: "Oscar prefers water to fizzy drinks.",
      keyword: "rather",
      gapped: "Oscar would ____ have water than fizzy drinks.",
      answers: ["rather"],
      model: "rather",
      explanation: "'Prefers X to Y' can be expressed as 'would rather have X than Y'."
    },
    {
      original: "I'd rather go camping than stay in a hotel.",
      keyword: "prefer",
      gapped: "I ____ camping to staying in a hotel.",
      answers: ["prefer going"],
      model: "prefer going",
      explanation: "'Would rather + infinitive + than' becomes 'prefer + -ing + to + -ing'."
    },
    {
      original: "Ruby prefers shopping online to visiting shops.",
      keyword: "rather",
      gapped: "Ruby would ____ online than visit shops.",
      answers: ["rather shop"],
      model: "rather shop",
      explanation: "'Prefers + -ing' becomes 'would rather + bare infinitive'."
    },
    {
      original: "Chris would rather study languages than science.",
      keyword: "prefers",
      gapped: "Chris ____ languages to science.",
      answers: ["prefers studying", "prefers"],
      model: "prefers studying",
      explanation: "'Would rather study X than Y' becomes 'prefers (studying) X to Y'."
    },
    {
      original: "Nina prefers painting to drawing.",
      keyword: "rather",
      gapped: "Nina would ____ than draw.",
      answers: ["rather paint"],
      model: "rather paint",
      explanation: "'Prefers + -ing to + -ing' becomes 'would rather + verb + than + verb'."
    },
    {
      original: "I prefer hot chocolate to coffee in winter.",
      keyword: "rather",
      gapped: "I would ____ hot chocolate than coffee in winter.",
      answers: ["rather have", "rather drink"],
      model: "rather have",
      explanation: "'Prefer X to Y' with nouns becomes 'would rather have X than Y'."
    },
    /* ---------- unless / if ---------- */
    {
      original: "If you don't slow down, you will have an accident.",
      keyword: "unless",
      gapped: "You will have an accident ____ slow down.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'If ... not' can be replaced by 'unless' with a positive verb."
    },
    {
      original: "Unless the bus comes soon, we will walk.",
      keyword: "if",
      gapped: "We will walk ____ come soon.",
      answers: ["if the bus doesn't"],
      model: "if the bus doesn't",
      explanation: "'Unless the bus comes' means 'if the bus doesn't come'."
    },
    {
      original: "If you don't save money, you can't buy a car.",
      keyword: "unless",
      gapped: "You can't buy a car ____ save money.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'Unless you save' means 'if you don't save'."
    },
    {
      original: "You can't enter the club unless you are a member.",
      keyword: "if",
      gapped: "You can't enter the club ____ a member.",
      answers: ["if you aren't", "if you are not"],
      model: "if you aren't",
      explanation: "'Unless you are' becomes 'if you aren't'."
    },
    {
      original: "If Helen doesn't hurry, she will be late for class.",
      keyword: "unless",
      gapped: "Helen will be late for class ____ hurries.",
      answers: ["unless she"],
      model: "unless she",
      explanation: "'If she doesn't hurry' can be rewritten as 'unless she hurries'."
    },
    {
      original: "Unless you charge your phone, it will switch off.",
      keyword: "if",
      gapped: "Your phone will switch off ____ charge it.",
      answers: ["if you don't", "if you do not"],
      model: "if you don't",
      explanation: "'Unless you charge' equals 'if you don't charge'."
    },
    {
      original: "If you don't take a map, you will get lost.",
      keyword: "unless",
      gapped: "You will get lost ____ take a map.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'Unless' replaces 'if ... not'; the verb after 'unless' stays positive."
    },
    {
      original: "We won't start the barbecue unless the wind drops.",
      keyword: "if",
      gapped: "We won't start the barbecue ____ drop.",
      answers: ["if the wind doesn't"],
      model: "if the wind doesn't",
      explanation: "'Unless the wind drops' means 'if the wind doesn't drop'."
    },
    /* ---------- although / despite ---------- */
    {
      original: "Although it was foggy, the plane took off.",
      keyword: "despite",
      gapped: "The plane took off ____ fog.",
      answers: ["despite the"],
      model: "despite the",
      explanation: "'Although + clause' becomes 'despite + noun': despite the fog."
    },
    {
      original: "Despite feeling scared, Nina climbed the tower.",
      keyword: "although",
      gapped: "Nina climbed the tower ____ felt scared.",
      answers: ["although she"],
      model: "although she",
      explanation: "'Despite + -ing' becomes 'although + subject + verb'."
    },
    {
      original: "Although he was exhausted, Mark kept running.",
      keyword: "spite",
      gapped: "Mark kept running in ____ exhausted.",
      answers: ["spite of being", "spite of feeling"],
      model: "spite of being",
      explanation: "'Although + clause' becomes 'in spite of + -ing form'."
    },
    {
      original: "Despite the high prices, the shop is always full.",
      keyword: "although",
      gapped: "The shop is always full ____ prices are high.",
      answers: ["although the", "although its"],
      model: "although the",
      explanation: "'Despite + noun' becomes 'although + subject + verb'."
    },
    {
      original: "Although the water was cold, the children went swimming.",
      keyword: "despite",
      gapped: "The children went swimming ____ the cold water.",
      answers: ["despite"],
      model: "despite",
      explanation: "'Although + clause' can become 'despite + noun phrase'."
    },
    {
      original: "Despite his fear of heights, Chris tried the zip wire.",
      keyword: "although",
      gapped: "Chris tried the zip wire ____ is afraid of heights.",
      answers: ["although he"],
      model: "although he",
      explanation: "'Despite + noun' is rewritten as 'although + subject + verb'."
    },
    {
      original: "Although Julia practised every day, she didn't win the competition.",
      keyword: "despite",
      gapped: "Julia didn't win the competition ____ every day.",
      answers: ["despite practising"],
      model: "despite practising",
      explanation: "'Although + clause' becomes 'despite + -ing form'."
    },
    {
      original: "Despite the delay, everyone stayed calm.",
      keyword: "although",
      gapped: "Everyone stayed calm ____ was a delay.",
      answers: ["although there"],
      model: "although there",
      explanation: "'Despite + noun' becomes a clause with 'although there was'."
    },
    /* ---------- advice ---------- */
    {
      original: "You should apologise to your sister.",
      keyword: "ought",
      gapped: "You ____ apologise to your sister.",
      answers: ["ought to"],
      model: "ought to",
      explanation: "'Should' can be replaced by 'ought to' with the same meaning."
    },
    {
      original: "You should take an umbrella today.",
      keyword: "why",
      gapped: "____ you take an umbrella today?",
      answers: ["Why don't"],
      model: "Why don't",
      explanation: "Advice with 'should' can become a suggestion: 'Why don't you ...?'"
    },
    {
      original: "Why don't you keep a diary in English?",
      keyword: "should",
      gapped: "You ____ a diary in English.",
      answers: ["should keep"],
      model: "should keep",
      explanation: "'Why don't you + verb?' can be rewritten as 'You should + verb'."
    },
    {
      original: "You ought to check your emails more often.",
      keyword: "should",
      gapped: "You ____ your emails more often.",
      answers: ["should check"],
      model: "should check",
      explanation: "'Ought to' and 'should' both give advice with the same meaning."
    },
    {
      original: "I think you should visit the new art gallery.",
      keyword: "why",
      gapped: "____ visit the new art gallery?",
      answers: ["Why don't you"],
      model: "Why don't you",
      explanation: "'You should' can become the suggestion 'Why don't you ...?'"
    },
    {
      original: "Why don't you wear your warmer coat?",
      keyword: "ought",
      gapped: "You ____ your warmer coat.",
      answers: ["ought to wear"],
      model: "ought to wear",
      explanation: "A 'Why don't you' suggestion equals advice with 'ought to'."
    },
    /* ---------- never / first time ---------- */
    {
      original: "This is the first time I have played golf.",
      keyword: "never",
      gapped: "I have ____ golf before.",
      answers: ["never played"],
      model: "never played",
      explanation: "'The first time I have done X' means 'I have never done X before'."
    },
    {
      original: "Steve has never used chopsticks before.",
      keyword: "first",
      gapped: "This is the ____ time Steve has used chopsticks.",
      answers: ["first"],
      model: "first",
      explanation: "'Never before' means it is the first time it has happened."
    },
    {
      original: "I have never grown my own vegetables before.",
      keyword: "time",
      gapped: "This is the first ____ grown my own vegetables.",
      answers: ["time I have", "time I've"],
      model: "time I have",
      explanation: "'Never before' becomes 'the first time + present perfect'."
    },
    {
      original: "This is the first time Ruby has made bread.",
      keyword: "never",
      gapped: "Ruby has ____ bread before.",
      answers: ["never made"],
      model: "never made",
      explanation: "'The first time' equals 'never ... before' in the present perfect."
    },
    {
      original: "Helen has never been sailing before.",
      keyword: "first",
      gapped: "This is the ____ Helen has been sailing.",
      answers: ["first time"],
      model: "first time",
      explanation: "'Never before' can be rewritten as 'the first time + present perfect'."
    },
    {
      original: "This is the first time we have watched a cricket match.",
      keyword: "never",
      gapped: "We have ____ a cricket match before.",
      answers: ["never watched"],
      model: "never watched",
      explanation: "'The first time we have watched' means 'we have never watched before'."
    },
    /* ---------- lend / borrow ---------- */
    {
      original: "Oscar borrowed a calculator from Nina.",
      keyword: "lent",
      gapped: "Nina ____ a calculator.",
      answers: ["lent Oscar", "lent him"],
      model: "lent Oscar",
      explanation: "'Borrow from someone' becomes 'someone lent + person + object'."
    },
    {
      original: "Julia lent her scarf to Helen.",
      keyword: "borrowed",
      gapped: "Helen ____ from Julia.",
      answers: ["borrowed her scarf", "borrowed the scarf"],
      model: "borrowed her scarf",
      explanation: "'Lend to someone' becomes 'someone borrowed + object + from'."
    },
    {
      original: "Mark borrowed fifty euros from his flatmate.",
      keyword: "lent",
      gapped: "Mark's flatmate ____ fifty euros.",
      answers: ["lent him", "lent Mark"],
      model: "lent him",
      explanation: "The lender gives; 'borrowed from' becomes 'lent + person'."
    },
    {
      original: "Steve lent his tent to Chris.",
      keyword: "borrowed",
      gapped: "Chris ____ from Steve.",
      answers: ["borrowed his tent", "borrowed the tent", "borrowed a tent"],
      model: "borrowed his tent",
      explanation: "'Lent to Chris' means 'Chris borrowed it from Steve'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
