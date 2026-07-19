/* PET Prep extra bank: part4 wave 5 */
(function () {
  var BANK = [
    /* ---------- so / such ---------- */
    {
      original: "The speech was so dull that people started chatting.",
      keyword: "such",
      gapped: "It was ____ dull speech that people started chatting.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' becomes 'such a + adjective + noun' with a singular noun."
    },
    {
      original: "The waves were so big that surfers stayed on the beach.",
      keyword: "such",
      gapped: "They were ____ big waves that surfers stayed on the beach.",
      answers: ["such"],
      model: "such",
      explanation: "With plural nouns we use 'such' without an article."
    },
    {
      original: "It was such a rainy morning that we cancelled the tennis.",
      keyword: "so",
      gapped: "The morning was ____ rainy that we cancelled the tennis.",
      answers: ["so"],
      model: "so",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' when no noun follows."
    },
    {
      original: "The perfume was so sweet that Olivia sneezed.",
      keyword: "such",
      gapped: "It was ____ sweet perfume that Olivia sneezed.",
      answers: ["such"],
      model: "such",
      explanation: "'Perfume' is uncountable here, so we use 'such' without 'a'."
    },
    {
      original: "It was such a tasty pizza that George ordered another one.",
      keyword: "so",
      gapped: "The pizza was ____ tasty that George ordered another one.",
      answers: ["so"],
      model: "so",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' with the noun as subject."
    },
    {
      original: "The lift was so slow that we took the stairs.",
      keyword: "such",
      gapped: "It was ____ slow lift that we took the stairs.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So slow' becomes 'such a slow lift' when the noun follows."
    },
    {
      original: "The puzzle was so complicated that Amy gave up.",
      keyword: "such",
      gapped: "It was ____ complicated puzzle that Amy gave up.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' changes to 'such a + adjective + noun'."
    },
    {
      original: "It was such a friendly dog that everyone stroked it.",
      keyword: "so",
      gapped: "The dog was ____ friendly that everyone stroked it.",
      answers: ["so"],
      model: "so",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' after the verb 'be'."
    },
    {
      original: "Hannah is so organised that she never forgets a birthday.",
      keyword: "such",
      gapped: "Hannah is ____ organised person that she never forgets a birthday.",
      answers: ["such an"],
      model: "such an",
      explanation: "Before a vowel sound we need 'such an': such an organised person."
    },
    {
      original: "The market was so colourful that Zoe took lots of photos.",
      keyword: "such",
      gapped: "It was ____ colourful market that Zoe took lots of photos.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' becomes 'such a + adjective + noun'."
    },
    /* ---------- too / enough ---------- */
    {
      original: "The wall is too high to climb over.",
      keyword: "enough",
      gapped: "The wall is not low ____ climb over.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too high' means 'not low enough to'; use the opposite adjective."
    },
    {
      original: "Ethan is too shy to sing in public.",
      keyword: "enough",
      gapped: "Ethan is not confident ____ sing in public.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too shy' equals 'not confident enough to + infinitive'."
    },
    {
      original: "The ice was too thin for skating.",
      keyword: "enough",
      gapped: "The ice was not thick ____ skating.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too thin' becomes 'not thick enough for + -ing'."
    },
    {
      original: "Ryan isn't careful enough to look after the goldfish.",
      keyword: "too",
      gapped: "Ryan is ____ to look after the goldfish.",
      answers: ["too careless"],
      model: "too careless",
      explanation: "'Not careful enough' means 'too careless'."
    },
    {
      original: "The instructions were too complicated for us to follow.",
      keyword: "enough",
      gapped: "The instructions were not simple ____ us to follow.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too complicated' means 'not simple enough for + person + to + verb'."
    },
    {
      original: "Martin isn't quick enough to catch the ball.",
      keyword: "too",
      gapped: "Martin is ____ to catch the ball.",
      answers: ["too slow"],
      model: "too slow",
      explanation: "'Not quick enough' equals 'too slow'."
    },
    {
      original: "The knife was too blunt to cut the bread.",
      keyword: "enough",
      gapped: "The knife was not sharp ____ cut the bread.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too blunt' means 'not sharp enough to'."
    },
    {
      original: "This tent is too small for four people.",
      keyword: "enough",
      gapped: "This tent is not big ____ four people.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too small' becomes 'not big enough for'."
    },
    {
      original: "The actor speaks too quietly for the audience to hear.",
      keyword: "enough",
      gapped: "The actor does not speak loudly ____ the audience to hear.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too quietly' means 'not loudly enough'; the pattern works with adverbs."
    },
    {
      original: "The lake is too dirty for swimming.",
      keyword: "enough",
      gapped: "The lake is not clean ____ swimming.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too dirty' equals 'not clean enough for + -ing'."
    },
    /* ---------- ago / for / since ---------- */
    {
      original: "Olivia moved to Lisbon seven years ago.",
      keyword: "for",
      gapped: "Olivia has lived in Lisbon ____.",
      answers: ["for seven years"],
      model: "for seven years",
      explanation: "'Moved ... ago' becomes present perfect 'has lived for + period'."
    },
    {
      original: "Ethan bought his skateboard in 2024.",
      keyword: "since",
      gapped: "Ethan has had his skateboard ____ 2024.",
      answers: ["since"],
      model: "since",
      explanation: "'Bought in + year' becomes 'has had since + year'."
    },
    {
      original: "Amy has worked at the museum for five months.",
      keyword: "ago",
      gapped: "Amy started working at the museum five ____.",
      answers: ["months ago"],
      model: "months ago",
      explanation: "Present perfect with 'for' becomes past simple 'started ... ago'."
    },
    {
      original: "George began learning Italian six months ago.",
      keyword: "for",
      gapped: "George has been learning Italian ____ six months.",
      answers: ["for"],
      model: "for",
      explanation: "'Began ... ago' becomes present perfect continuous with 'for'."
    },
    {
      original: "The last time we saw Hannah was in August.",
      keyword: "since",
      gapped: "We haven't seen Hannah ____ August.",
      answers: ["since"],
      model: "since",
      explanation: "'The last time was in August' means 'haven't seen her since August'."
    },
    {
      original: "Ryan last visited the dentist a year ago.",
      keyword: "for",
      gapped: "Ryan hasn't visited the dentist ____ a year.",
      answers: ["for"],
      model: "for",
      explanation: "'Last visited ... ago' becomes negative present perfect with 'for'."
    },
    {
      original: "It's four years since Zoe joined the band.",
      keyword: "ago",
      gapped: "Zoe joined the band four ____.",
      answers: ["years ago"],
      model: "years ago",
      explanation: "'It's four years since' equals a past simple sentence with 'ago'."
    },
    {
      original: "Martin started his blog last autumn.",
      keyword: "since",
      gapped: "Martin has had his blog ____ last autumn.",
      answers: ["since"],
      model: "since",
      explanation: "'Started' becomes 'has had' with 'since + point in time'."
    },
    {
      original: "I met Olivia twelve years ago.",
      keyword: "for",
      gapped: "I have known Olivia ____ twelve years.",
      answers: ["for"],
      model: "for",
      explanation: "'Met ... ago' becomes 'have known for + period of time'."
    },
    {
      original: "Ethan hasn't checked his emails for five days.",
      keyword: "ago",
      gapped: "The last time Ethan checked his emails was five ____.",
      answers: ["days ago"],
      model: "days ago",
      explanation: "Negative present perfect with 'for' equals 'the last time was ... ago'."
    },
    /* ---------- comparatives / as...as ---------- */
    {
      original: "My neighbour is friendlier than my landlord.",
      keyword: "as",
      gapped: "My landlord is not ____ my neighbour.",
      answers: ["as friendly as"],
      model: "as friendly as",
      explanation: "'X is friendlier than Y' means 'Y is not as friendly as X'."
    },
    {
      original: "This museum is more modern than that one.",
      keyword: "as",
      gapped: "That museum is not ____ modern as this one.",
      answers: ["as"],
      model: "as",
      explanation: "A comparative becomes 'not as + adjective + as' from the other side."
    },
    {
      original: "Amy cycles faster than George.",
      keyword: "as",
      gapped: "George does not cycle ____ Amy.",
      answers: ["as fast as"],
      model: "as fast as",
      explanation: "'Faster than' becomes 'not as fast as' when the subjects swap."
    },
    {
      original: "This café isn't as cosy as the one on Mill Street.",
      keyword: "than",
      gapped: "The café on Mill Street is cosier ____ this one.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as cosy as' means the other one is 'cosier than' it."
    },
    {
      original: "The park is nearer than the sports centre.",
      keyword: "as",
      gapped: "The sports centre is not ____ near as the park.",
      answers: ["as"],
      model: "as",
      explanation: "'Nearer than' becomes 'not as near as' the other way round."
    },
    {
      original: "Hannah's speech was shorter than Ryan's.",
      keyword: "as",
      gapped: "Ryan's speech was not ____ Hannah's.",
      answers: ["as short as"],
      model: "as short as",
      explanation: "A comparative can be rewritten as 'not as + adjective + as'."
    },
    {
      original: "No other shop in the street is as busy as this one.",
      keyword: "than",
      gapped: "This shop is busier ____ any other in the street.",
      answers: ["than"],
      model: "than",
      explanation: "'No other ... as ... as' equals a comparative with 'than any other'."
    },
    {
      original: "The footpath isn't as steep as the main road.",
      keyword: "than",
      gapped: "The main road is steeper ____ the footpath.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as steep as' means 'steeper than' from the other point of view."
    },
    {
      original: "My old watch was cheaper than this one.",
      keyword: "as",
      gapped: "This watch is not as cheap ____ my old one.",
      answers: ["as"],
      model: "as",
      explanation: "'Cheaper than' becomes 'not as cheap as' when reversed."
    },
    {
      original: "This week isn't as warm as last week.",
      keyword: "than",
      gapped: "Last week was warmer ____ this week.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as warm as' can be expressed with a comparative + 'than'."
    },
    /* ---------- passive ---------- */
    {
      original: "Somebody moved my car while I was shopping.",
      keyword: "was",
      gapped: "My car ____ while I was shopping.",
      answers: ["was moved"],
      model: "was moved",
      explanation: "Past simple passive: was + past participle when the doer is unknown."
    },
    {
      original: "They pick these strawberries by hand.",
      keyword: "are",
      gapped: "These strawberries ____ by hand.",
      answers: ["are picked"],
      model: "are picked",
      explanation: "Present simple passive: are + past participle for a plural subject."
    },
    {
      original: "A famous singer recorded this song.",
      keyword: "by",
      gapped: "This song was recorded ____ a famous singer.",
      answers: ["by"],
      model: "by",
      explanation: "The agent in a passive sentence is introduced with 'by'."
    },
    {
      original: "They painted the school gates last month.",
      keyword: "were",
      gapped: "The school gates ____ last month.",
      answers: ["were painted"],
      model: "were painted",
      explanation: "Past simple passive: plural subject takes 'were + past participle'."
    },
    {
      original: "Someone checks the tickets at the entrance.",
      keyword: "are",
      gapped: "The tickets ____ at the entrance.",
      answers: ["are checked"],
      model: "are checked",
      explanation: "Present simple passive: are + past participle for a plural subject."
    },
    {
      original: "The coastguard rescued the sailors.",
      keyword: "were",
      gapped: "The sailors ____ by the coastguard.",
      answers: ["were rescued"],
      model: "were rescued",
      explanation: "Past simple passive with 'by' shows who did the action."
    },
    {
      original: "They will repair the road next week.",
      keyword: "be",
      gapped: "The road will ____ next week.",
      answers: ["be repaired"],
      model: "be repaired",
      explanation: "Future passive: will + be + past participle."
    },
    {
      original: "People recycle glass in most towns.",
      keyword: "is",
      gapped: "Glass ____ in most towns.",
      answers: ["is recycled"],
      model: "is recycled",
      explanation: "Present simple passive: is + past participle; 'people' is dropped."
    },
    {
      original: "A small company makes these toys.",
      keyword: "by",
      gapped: "These toys are made ____ a small company.",
      answers: ["by"],
      model: "by",
      explanation: "In the passive, the doer of the action follows 'by'."
    },
    {
      original: "They show old films at that cinema on Sundays.",
      keyword: "are",
      gapped: "Old films ____ shown at that cinema on Sundays.",
      answers: ["are"],
      model: "are",
      explanation: "Present simple passive: plural subject takes 'are shown'."
    },
    /* ---------- reported speech ---------- */
    {
      original: "'I am late,' said George.",
      keyword: "was",
      gapped: "George said that he ____ late.",
      answers: ["was"],
      model: "was",
      explanation: "In reported speech, present simple 'am' changes to past simple 'was'."
    },
    {
      original: "'Do you know my brother?' Hannah asked me.",
      keyword: "if",
      gapped: "Hannah asked me ____ knew her brother.",
      answers: ["if I"],
      model: "if I",
      explanation: "Reported yes/no questions use 'if' and the verb moves one tense back."
    },
    {
      original: "'Bring your own lunch,' the guide said to us.",
      keyword: "told",
      gapped: "The guide ____ to bring our own lunch.",
      answers: ["told us"],
      model: "told us",
      explanation: "A reported command uses 'told + person + to + infinitive'."
    },
    {
      original: "'I will fix your printer,' Martin said to Zoe.",
      keyword: "would",
      gapped: "Martin told Zoe that he ____ fix her printer.",
      answers: ["would"],
      model: "would",
      explanation: "In reported speech, 'will' changes to 'would'."
    },
    {
      original: "'Where do you practise?' Olivia asked Ryan.",
      keyword: "where",
      gapped: "Olivia asked Ryan ____ practised.",
      answers: ["where he"],
      model: "where he",
      explanation: "Reported wh-questions keep the question word but use statement word order."
    },
    {
      original: "'Don't swim past the flags,' the lifeguard said to the swimmers.",
      keyword: "not",
      gapped: "The lifeguard told the swimmers ____ swim past the flags.",
      answers: ["not to"],
      model: "not to",
      explanation: "A reported negative command uses 'told + person + not to + infinitive'."
    },
    {
      original: "'I can ride a unicycle,' said Ethan.",
      keyword: "could",
      gapped: "Ethan said that he ____ ride a unicycle.",
      answers: ["could"],
      model: "could",
      explanation: "In reported speech, 'can' changes to 'could'."
    },
    {
      original: "'We are painting the house this weekend,' Amy said.",
      keyword: "were",
      gapped: "Amy said that they ____ painting the house that weekend.",
      answers: ["were"],
      model: "were",
      explanation: "Present continuous 'are painting' becomes past continuous 'were painting'."
    },
    {
      original: "'Have you posted the letter?' Grandpa asked me.",
      keyword: "whether",
      gapped: "Grandpa asked me ____ had posted the letter.",
      answers: ["whether I"],
      model: "whether I",
      explanation: "Reported yes/no questions can use 'whether'; present perfect becomes past perfect."
    },
    {
      original: "'Hold the door open, please,' Zoe said to George.",
      keyword: "asked",
      gapped: "Zoe ____ hold the door open.",
      answers: ["asked George to"],
      model: "asked George to",
      explanation: "A polite request is reported with 'asked + person + to + infinitive'."
    },
    /* ---------- would rather / prefer ---------- */
    {
      original: "I prefer skating to skiing.",
      keyword: "rather",
      gapped: "I would ____ than ski.",
      answers: ["rather skate"],
      model: "rather skate",
      explanation: "'Prefer X to Y' becomes 'would rather + infinitive + than + infinitive'."
    },
    {
      original: "Olivia would rather revise alone than in a group.",
      keyword: "prefers",
      gapped: "Olivia ____ alone to revising in a group.",
      answers: ["prefers revising"],
      model: "prefers revising",
      explanation: "'Would rather + verb' becomes 'prefers + -ing + to + -ing'."
    },
    {
      original: "Ryan prefers smoothies to milkshakes.",
      keyword: "rather",
      gapped: "Ryan would ____ have a smoothie than a milkshake.",
      answers: ["rather"],
      model: "rather",
      explanation: "'Prefers X to Y' can be expressed as 'would rather have X than Y'."
    },
    {
      original: "I'd rather cycle to school than take the bus.",
      keyword: "prefer",
      gapped: "I ____ to school to taking the bus.",
      answers: ["prefer cycling"],
      model: "prefer cycling",
      explanation: "'Would rather + infinitive + than' becomes 'prefer + -ing + to + -ing'."
    },
    {
      original: "Zoe prefers acting to directing.",
      keyword: "rather",
      gapped: "Zoe would ____ than direct.",
      answers: ["rather act"],
      model: "rather act",
      explanation: "'Prefers + -ing' becomes 'would rather + bare infinitive'."
    },
    {
      original: "George would rather learn drums than guitar.",
      keyword: "prefers",
      gapped: "George ____ drums to guitar.",
      answers: ["prefers learning", "prefers"],
      model: "prefers learning",
      explanation: "'Would rather learn X than Y' becomes 'prefers (learning) X to Y'."
    },
    {
      original: "Hannah prefers baking to cooking.",
      keyword: "rather",
      gapped: "Hannah would ____ than cook.",
      answers: ["rather bake"],
      model: "rather bake",
      explanation: "'Prefers + -ing to + -ing' becomes 'would rather + verb + than + verb'."
    },
    {
      original: "I prefer sparkling water to still water with meals.",
      keyword: "rather",
      gapped: "I would ____ sparkling water than still water with meals.",
      answers: ["rather have", "rather drink"],
      model: "rather have",
      explanation: "'Prefer X to Y' with nouns becomes 'would rather have X than Y'."
    },
    /* ---------- unless / if ---------- */
    {
      original: "If you don't lock your bike, someone may steal it.",
      keyword: "unless",
      gapped: "Someone may steal your bike ____ lock it.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'If ... not' can be replaced by 'unless' with a positive verb."
    },
    {
      original: "Unless the printer works, we will write by hand.",
      keyword: "if",
      gapped: "We will write by hand ____ work.",
      answers: ["if the printer doesn't"],
      model: "if the printer doesn't",
      explanation: "'Unless the printer works' means 'if the printer doesn't work'."
    },
    {
      original: "If you don't warm up, you might hurt yourself.",
      keyword: "unless",
      gapped: "You might hurt yourself ____ warm up.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'Unless you warm up' means 'if you don't warm up'."
    },
    {
      original: "You can't get a refund unless you keep the receipt.",
      keyword: "if",
      gapped: "You can't get a refund ____ keep the receipt.",
      answers: ["if you don't", "if you do not"],
      model: "if you don't",
      explanation: "'Unless you keep' becomes 'if you don't keep'."
    },
    {
      original: "If Amy doesn't call a taxi, she will be late for the airport.",
      keyword: "unless",
      gapped: "Amy will be late for the airport ____ calls a taxi.",
      answers: ["unless she"],
      model: "unless she",
      explanation: "'If she doesn't call' can be rewritten as 'unless she calls'."
    },
    {
      original: "Unless you label your bag, you might lose it.",
      keyword: "if",
      gapped: "You might lose your bag ____ label it.",
      answers: ["if you don't", "if you do not"],
      model: "if you don't",
      explanation: "'Unless you label' equals 'if you don't label'."
    },
    {
      original: "If you don't read the instructions, you will make mistakes.",
      keyword: "unless",
      gapped: "You will make mistakes ____ read the instructions.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'Unless' replaces 'if ... not'; the verb after 'unless' stays positive."
    },
    {
      original: "We won't light the campfire unless the wind dies down.",
      keyword: "if",
      gapped: "We won't light the campfire ____ die down.",
      answers: ["if the wind doesn't"],
      model: "if the wind doesn't",
      explanation: "'Unless the wind dies down' means 'if the wind doesn't die down'."
    },
    /* ---------- although / despite ---------- */
    {
      original: "Although it was midnight, the streets were full of people.",
      keyword: "despite",
      gapped: "The streets were full of people ____ late hour.",
      answers: ["despite the"],
      model: "despite the",
      explanation: "'Although + clause' becomes 'despite + noun': despite the late hour."
    },
    {
      original: "Despite feeling unwell, Hannah ran the whole race.",
      keyword: "although",
      gapped: "Hannah ran the whole race ____ felt unwell.",
      answers: ["although she"],
      model: "although she",
      explanation: "'Despite + -ing' becomes 'although + subject + verb'."
    },
    {
      original: "Although he was frightened, Ethan spoke to the huge dog calmly.",
      keyword: "spite",
      gapped: "Ethan spoke to the huge dog calmly in ____ frightened.",
      answers: ["spite of being", "spite of feeling"],
      model: "spite of being",
      explanation: "'Although + clause' becomes 'in spite of + -ing form'."
    },
    {
      original: "Despite the power cut, the show went on.",
      keyword: "although",
      gapped: "The show went on ____ was a power cut.",
      answers: ["although there"],
      model: "although there",
      explanation: "'Despite + noun' becomes a clause with 'although there was'."
    },
    {
      original: "Although the journey was tiring, everyone smiled at the end.",
      keyword: "despite",
      gapped: "Everyone smiled at the end ____ the tiring journey.",
      answers: ["despite"],
      model: "despite",
      explanation: "'Although + clause' can become 'despite + noun phrase'."
    },
    {
      original: "Despite her sore throat, Zoe finished the song.",
      keyword: "although",
      gapped: "Zoe finished the song ____ throat was sore.",
      answers: ["although her"],
      model: "although her",
      explanation: "'Despite + noun' is rewritten as 'although + subject + verb'."
    },
    {
      original: "Although Martin rehearsed all week, he forgot his lines.",
      keyword: "despite",
      gapped: "Martin forgot his lines ____ all week.",
      answers: ["despite rehearsing"],
      model: "despite rehearsing",
      explanation: "'Although + clause' becomes 'despite + -ing form'."
    },
    {
      original: "Despite the heat, the players kept running.",
      keyword: "although",
      gapped: "The players kept running ____ was hot.",
      answers: ["although it"],
      model: "although it",
      explanation: "'Despite + noun' becomes a clause with 'although'."
    },
    /* ---------- advice ---------- */
    {
      original: "You should recycle your old batteries properly.",
      keyword: "ought",
      gapped: "You ____ recycle your old batteries properly.",
      answers: ["ought to"],
      model: "ought to",
      explanation: "'Should' can be replaced by 'ought to' with the same meaning."
    },
    {
      original: "You should walk to work instead of driving.",
      keyword: "why",
      gapped: "____ you walk to work instead of driving?",
      answers: ["Why don't"],
      model: "Why don't",
      explanation: "Advice with 'should' can become a suggestion: 'Why don't you ...?'"
    },
    {
      original: "Why don't you plant some flowers on your balcony?",
      keyword: "should",
      gapped: "You ____ some flowers on your balcony.",
      answers: ["should plant"],
      model: "should plant",
      explanation: "'Why don't you + verb?' can be rewritten as 'You should + verb'."
    },
    {
      original: "You ought to stretch before playing sport.",
      keyword: "should",
      gapped: "You ____ before playing sport.",
      answers: ["should stretch"],
      model: "should stretch",
      explanation: "'Ought to' and 'should' both give advice with the same meaning."
    },
    {
      original: "I think you should read the book before watching the film.",
      keyword: "why",
      gapped: "____ read the book before watching the film?",
      answers: ["Why don't you"],
      model: "Why don't you",
      explanation: "'You should' can become the suggestion 'Why don't you ...?'"
    },
    {
      original: "Why don't you keep a spare key at your neighbour's house?",
      keyword: "ought",
      gapped: "You ____ a spare key at your neighbour's house.",
      answers: ["ought to keep", "ought to leave"],
      model: "ought to keep",
      explanation: "A 'Why don't you' suggestion equals advice with 'ought to'."
    },
    /* ---------- never / first time ---------- */
    {
      original: "This is the first time I have tasted mango.",
      keyword: "never",
      gapped: "I have ____ mango before.",
      answers: ["never tasted"],
      model: "never tasted",
      explanation: "'The first time I have done X' means 'I have never done X before'."
    },
    {
      original: "Ethan has never climbed a mountain before.",
      keyword: "first",
      gapped: "This is the ____ time Ethan has climbed a mountain.",
      answers: ["first"],
      model: "first",
      explanation: "'Never before' means it is the first time it has happened."
    },
    {
      original: "I have never won a prize before.",
      keyword: "time",
      gapped: "This is the first ____ won a prize.",
      answers: ["time I have", "time I've"],
      model: "time I have",
      explanation: "'Never before' becomes 'the first time + present perfect'."
    },
    {
      original: "This is the first time Amy has knitted a scarf.",
      keyword: "never",
      gapped: "Amy has ____ a scarf before.",
      answers: ["never knitted"],
      model: "never knitted",
      explanation: "'The first time' equals 'never ... before' in the present perfect."
    },
    {
      original: "George has never been ice skating before.",
      keyword: "first",
      gapped: "This is the ____ George has been ice skating.",
      answers: ["first time"],
      model: "first time",
      explanation: "'Never before' can be rewritten as 'the first time + present perfect'."
    },
    {
      original: "This is the first time we have grown sunflowers.",
      keyword: "never",
      gapped: "We have ____ sunflowers before.",
      answers: ["never grown"],
      model: "never grown",
      explanation: "'The first time we have grown' means 'we have never grown before'."
    },
    /* ---------- lend / borrow ---------- */
    {
      original: "Ryan borrowed a torch from Martin.",
      keyword: "lent",
      gapped: "Martin ____ a torch.",
      answers: ["lent Ryan", "lent him"],
      model: "lent Ryan",
      explanation: "'Borrow from someone' becomes 'someone lent + person + object'."
    },
    {
      original: "Olivia lent her hairdryer to Amy.",
      keyword: "borrowed",
      gapped: "Amy ____ from Olivia.",
      answers: ["borrowed her hairdryer", "borrowed the hairdryer"],
      model: "borrowed her hairdryer",
      explanation: "'Lend to someone' becomes 'someone borrowed + object + from'."
    },
    {
      original: "George borrowed thirty pounds from his uncle.",
      keyword: "lent",
      gapped: "George's uncle ____ thirty pounds.",
      answers: ["lent him", "lent George"],
      model: "lent him",
      explanation: "The lender gives; 'borrowed from' becomes 'lent + person'."
    },
    {
      original: "Hannah lent her sleeping bag to Zoe.",
      keyword: "borrowed",
      gapped: "Zoe ____ from Hannah.",
      answers: ["borrowed her sleeping bag", "borrowed the sleeping bag"],
      model: "borrowed her sleeping bag",
      explanation: "'Lent to Zoe' means 'Zoe borrowed it from Hannah'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
