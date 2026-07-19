/* PET Prep extra bank: part4 wave 2 */
(function () {
  var BANK = [
    /* ---------- so / such ---------- */
    {
      original: "The lecture was so long that some students fell asleep.",
      keyword: "such",
      gapped: "It was ____ long lecture that some students fell asleep.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' becomes 'such a + adjective + noun' with a singular noun."
    },
    {
      original: "The shoes were so uncomfortable that Sarah took them off.",
      keyword: "such",
      gapped: "They were ____ uncomfortable shoes that Sarah took them off.",
      answers: ["such"],
      model: "such",
      explanation: "With plural nouns we use 'such' without an article."
    },
    {
      original: "It was such a boring programme that Paul turned off the TV.",
      keyword: "so",
      gapped: "The programme was ____ boring that Paul turned off the TV.",
      answers: ["so"],
      model: "so",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' when no noun follows."
    },
    {
      original: "The weather was so awful that we cancelled the trip.",
      keyword: "such",
      gapped: "It was ____ awful weather that we cancelled the trip.",
      answers: ["such"],
      model: "such",
      explanation: "'Weather' is uncountable, so we use 'such' without 'a'."
    },
    {
      original: "It was such a delicious cake that everyone asked for more.",
      keyword: "so",
      gapped: "The cake was ____ that everyone asked for more.",
      answers: ["so delicious"],
      model: "so delicious",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' after the verb 'be'."
    },
    {
      original: "The traffic was so bad that Kate missed her flight.",
      keyword: "such",
      gapped: "It was ____ bad traffic that Kate missed her flight.",
      answers: ["such"],
      model: "such",
      explanation: "'Traffic' is uncountable, so 'such' is used without an article."
    },
    {
      original: "The story was so sad that Laura started to cry.",
      keyword: "such",
      gapped: "It was ____ sad story that Laura started to cry.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So sad' becomes 'such a sad story' when the noun follows."
    },
    {
      original: "It was such an easy quiz that everyone got full marks.",
      keyword: "so",
      gapped: "The quiz was ____ easy that everyone got full marks.",
      answers: ["so"],
      model: "so",
      explanation: "'Such an + adjective + noun' becomes 'so + adjective' with the noun as subject."
    },
    {
      original: "Mike is so funny that he makes everybody laugh.",
      keyword: "such",
      gapped: "Mike is ____ funny person that he makes everybody laugh.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So funny' becomes 'such a funny person' when we add a noun."
    },
    {
      original: "The beach was so crowded that we went home early.",
      keyword: "such",
      gapped: "It was ____ crowded beach that we went home early.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' changes to 'such a + adjective + noun'."
    },
    /* ---------- too / enough ---------- */
    {
      original: "The suitcase is too big to take on the plane.",
      keyword: "enough",
      gapped: "The suitcase is not small ____ take on the plane.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too big' means 'not small enough to'; use the opposite adjective."
    },
    {
      original: "Peter is too short to play basketball professionally.",
      keyword: "enough",
      gapped: "Peter is not tall ____ play basketball professionally.",
      answers: ["enough to"],
      model: "enough to",
      explanation: "'Too short' equals 'not tall enough'; 'enough' comes after the adjective."
    },
    {
      original: "The tea was too strong for me to drink.",
      keyword: "enough",
      gapped: "The tea was not weak ____ me to drink.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too strong' means 'not weak enough for + person + to + verb'."
    },
    {
      original: "Sophie isn't old enough to vote in the election.",
      keyword: "too",
      gapped: "Sophie is ____ to vote in the election.",
      answers: ["too young"],
      model: "too young",
      explanation: "'Not old enough' means 'too young'; use the opposite adjective with 'too'."
    },
    {
      original: "The room was too dark for reading.",
      keyword: "enough",
      gapped: "The room was not bright ____ reading.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too dark' becomes 'not bright enough for + -ing'."
    },
    {
      original: "Alex isn't fast enough to win the race.",
      keyword: "too",
      gapped: "Alex is ____ to win the race.",
      answers: ["too slow"],
      model: "too slow",
      explanation: "'Not fast enough' equals 'too slow'."
    },
    {
      original: "The music was too quiet for us to hear.",
      keyword: "enough",
      gapped: "The music was not loud ____ us to hear.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too quiet' means 'not loud enough for + person + to + verb'."
    },
    {
      original: "These trousers are too long for my little brother.",
      keyword: "enough",
      gapped: "These trousers are not short ____ my little brother.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too long' becomes 'not short enough for'."
    },
    {
      original: "Sarah speaks too softly for the class to hear her.",
      keyword: "enough",
      gapped: "Sarah does not speak loudly ____ the class to hear her.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too softly' means 'not loudly enough'; the pattern works with adverbs."
    },
    {
      original: "The path is too narrow for cars to use.",
      keyword: "enough",
      gapped: "The path is not wide ____ cars to use.",
      answers: ["enough for"],
      model: "enough for",
      explanation: "'Too narrow' equals 'not wide enough for + noun + to + verb'."
    },
    /* ---------- ago / for / since ---------- */
    {
      original: "Kate moved to Berlin four years ago.",
      keyword: "for",
      gapped: "Kate has lived in Berlin ____.",
      answers: ["for four years"],
      model: "for four years",
      explanation: "'Moved ... ago' becomes present perfect 'has lived for + period'."
    },
    {
      original: "Paul bought his laptop in 2022.",
      keyword: "since",
      gapped: "Paul has had his laptop ____ 2022.",
      answers: ["since"],
      model: "since",
      explanation: "'Bought in + year' becomes 'has had since + year'."
    },
    {
      original: "Laura has worked at the hospital for eight months.",
      keyword: "ago",
      gapped: "Laura started working at the hospital eight ____.",
      answers: ["months ago"],
      model: "months ago",
      explanation: "Present perfect with 'for' becomes past simple 'started ... ago'."
    },
    {
      original: "Mike began learning Spanish three years ago.",
      keyword: "for",
      gapped: "Mike has been learning Spanish ____ three years.",
      answers: ["for"],
      model: "for",
      explanation: "'Began ... ago' becomes present perfect continuous with 'for'."
    },
    {
      original: "The last time we saw Sophie was in June.",
      keyword: "since",
      gapped: "We haven't seen Sophie ____ June.",
      answers: ["since"],
      model: "since",
      explanation: "'The last time was in June' means 'haven't seen her since June'."
    },
    {
      original: "Peter last washed his car a fortnight ago.",
      keyword: "for",
      gapped: "Peter hasn't washed his car ____ a fortnight.",
      answers: ["for"],
      model: "for",
      explanation: "'Last washed ... ago' becomes negative present perfect with 'for'."
    },
    {
      original: "It's ten years since Sarah moved abroad.",
      keyword: "ago",
      gapped: "Sarah moved abroad ten ____.",
      answers: ["years ago"],
      model: "years ago",
      explanation: "'It's ten years since' equals a past simple sentence with 'ago'."
    },
    {
      original: "Alex started his new job last April.",
      keyword: "since",
      gapped: "Alex has had his new job ____ last April.",
      answers: ["since"],
      model: "since",
      explanation: "'Started' becomes 'has had' with 'since + point in time'."
    },
    {
      original: "I met Paul twenty years ago.",
      keyword: "for",
      gapped: "I have known Paul ____ twenty years.",
      answers: ["for"],
      model: "for",
      explanation: "'Met ... ago' becomes 'have known for + period of time'."
    },
    {
      original: "Kate hasn't been to the gym for three weeks.",
      keyword: "ago",
      gapped: "The last time Kate went to the gym was three ____.",
      answers: ["weeks ago"],
      model: "weeks ago",
      explanation: "Negative present perfect with 'for' equals 'the last time was ... ago'."
    },
    /* ---------- comparatives / as...as ---------- */
    {
      original: "My sister is older than me.",
      keyword: "as",
      gapped: "I am not ____ my sister.",
      answers: ["as old as"],
      model: "as old as",
      explanation: "'X is older than Y' means 'Y is not as old as X'."
    },
    {
      original: "This hotel is more comfortable than that one.",
      keyword: "as",
      gapped: "That hotel is not ____ comfortable as this one.",
      answers: ["as"],
      model: "as",
      explanation: "A comparative becomes 'not as + adjective + as' from the other side."
    },
    {
      original: "Sophie swims faster than Laura.",
      keyword: "as",
      gapped: "Laura does not swim ____ Sophie.",
      answers: ["as fast as"],
      model: "as fast as",
      explanation: "'Faster than' becomes 'not as fast as' when the subjects swap."
    },
    {
      original: "This road isn't as busy as the motorway.",
      keyword: "than",
      gapped: "The motorway is busier ____ this road.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as busy as' means the other one is 'busier than' it."
    },
    {
      original: "The green shirt is cheaper than the white one.",
      keyword: "as",
      gapped: "The white shirt is not ____ cheap as the green one.",
      answers: ["as"],
      model: "as",
      explanation: "'Cheaper than' becomes 'not as cheap as' the other way round."
    },
    {
      original: "Peter's garden is bigger than ours.",
      keyword: "as",
      gapped: "Our garden is not ____ Peter's.",
      answers: ["as big as"],
      model: "as big as",
      explanation: "A comparative can be rewritten as 'not as + adjective + as'."
    },
    {
      original: "No other café in town is as popular as this one.",
      keyword: "than",
      gapped: "This café is more popular ____ any other in town.",
      answers: ["than"],
      model: "than",
      explanation: "'No other ... as ... as' equals a comparative with 'than any other'."
    },
    {
      original: "The bus isn't as quick as the underground.",
      keyword: "than",
      gapped: "The underground is quicker ____ the bus.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as quick as' means 'quicker than' from the other point of view."
    },
    {
      original: "My old computer was noisier than this one.",
      keyword: "as",
      gapped: "This computer is not as noisy ____ my old one.",
      answers: ["as"],
      model: "as",
      explanation: "'Noisier than' becomes 'not as noisy as' when reversed."
    },
    {
      original: "This summer isn't as hot as last summer.",
      keyword: "than",
      gapped: "Last summer was hotter ____ this summer.",
      answers: ["than"],
      model: "than",
      explanation: "'Not as hot as' can be expressed with a comparative + 'than'."
    },
    /* ---------- passive ---------- */
    {
      original: "Somebody broke the classroom window yesterday.",
      keyword: "was",
      gapped: "The classroom window ____ yesterday.",
      answers: ["was broken"],
      model: "was broken",
      explanation: "Past simple passive: was + past participle when the doer is unknown."
    },
    {
      original: "They produce this cheese in France.",
      keyword: "is",
      gapped: "This cheese ____ in France.",
      answers: ["is produced"],
      model: "is produced",
      explanation: "Present simple passive: is + past participle for a singular subject."
    },
    {
      original: "A local artist painted this picture.",
      keyword: "by",
      gapped: "This picture was painted ____ a local artist.",
      answers: ["by"],
      model: "by",
      explanation: "The agent in a passive sentence is introduced with 'by'."
    },
    {
      original: "They opened this museum in 1985.",
      keyword: "was",
      gapped: "This museum ____ in 1985.",
      answers: ["was opened"],
      model: "was opened",
      explanation: "Past simple passive: the object becomes the subject with was + past participle."
    },
    {
      original: "Someone delivers the newspapers every morning.",
      keyword: "are",
      gapped: "The newspapers ____ every morning.",
      answers: ["are delivered"],
      model: "are delivered",
      explanation: "Present simple passive: are + past participle for a plural subject."
    },
    {
      original: "The firefighters rescued the cat from the tree.",
      keyword: "was",
      gapped: "The cat ____ from the tree by the firefighters.",
      answers: ["was rescued"],
      model: "was rescued",
      explanation: "Past simple passive with 'by' shows who did the action."
    },
    {
      original: "They will build a new stadium next year.",
      keyword: "be",
      gapped: "A new stadium will ____ next year.",
      answers: ["be built"],
      model: "be built",
      explanation: "Future passive: will + be + past participle."
    },
    {
      original: "People play football in almost every country.",
      keyword: "is",
      gapped: "Football ____ in almost every country.",
      answers: ["is played"],
      model: "is played",
      explanation: "Present simple passive: is + past participle; 'people' is dropped."
    },
    {
      original: "A young designer created this dress.",
      keyword: "by",
      gapped: "This dress was created ____ a young designer.",
      answers: ["by"],
      model: "by",
      explanation: "In the passive, the doer of the action follows 'by'."
    },
    {
      original: "They sell fresh bread at that bakery.",
      keyword: "is",
      gapped: "Fresh bread ____ sold at that bakery.",
      answers: ["is"],
      model: "is",
      explanation: "Present simple passive: 'bread' is uncountable, so 'is sold'."
    },
    /* ---------- reported speech ---------- */
    {
      original: "'I am hungry,' said Peter.",
      keyword: "was",
      gapped: "Peter said that he ____ hungry.",
      answers: ["was"],
      model: "was",
      explanation: "In reported speech, present simple 'am' changes to past simple 'was'."
    },
    {
      original: "'Do you play tennis?' Kate asked me.",
      keyword: "if",
      gapped: "Kate asked me ____ played tennis.",
      answers: ["if I"],
      model: "if I",
      explanation: "Reported yes/no questions use 'if' and the verb moves one tense back."
    },
    {
      original: "'Stand in a line,' the coach said to us.",
      keyword: "told",
      gapped: "The coach ____ to stand in a line.",
      answers: ["told us"],
      model: "told us",
      explanation: "A reported command uses 'told + person + to + infinitive'."
    },
    {
      original: "'I will phone you later,' Mike said to Sarah.",
      keyword: "would",
      gapped: "Mike told Sarah that he ____ phone her later.",
      answers: ["would"],
      model: "would",
      explanation: "In reported speech, 'will' changes to 'would'."
    },
    {
      original: "'Where do you work?' Laura asked Alex.",
      keyword: "where",
      gapped: "Laura asked Alex ____ worked.",
      answers: ["where he"],
      model: "where he",
      explanation: "Reported wh-questions keep the question word but use statement word order."
    },
    {
      original: "'Don't run in the corridor,' the teacher said to the pupils.",
      keyword: "not",
      gapped: "The teacher told the pupils ____ run in the corridor.",
      answers: ["not to"],
      model: "not to",
      explanation: "A reported negative command uses 'told + person + not to + infinitive'."
    },
    {
      original: "'I can speak three languages,' said Sophie.",
      keyword: "could",
      gapped: "Sophie said that she ____ speak three languages.",
      answers: ["could"],
      model: "could",
      explanation: "In reported speech, 'can' changes to 'could'."
    },
    {
      original: "'We are moving house next week,' Paul said.",
      keyword: "were",
      gapped: "Paul said that they ____ moving house the following week.",
      answers: ["were"],
      model: "were",
      explanation: "Present continuous 'are moving' becomes past continuous 'were moving'."
    },
    {
      original: "'Have you seen my keys?' Dad asked me.",
      keyword: "whether",
      gapped: "Dad asked me ____ had seen his keys.",
      answers: ["whether I"],
      model: "whether I",
      explanation: "Reported yes/no questions can use 'whether'; present perfect becomes past perfect."
    },
    {
      original: "'Turn off the lights, please,' Sarah said to Peter.",
      keyword: "asked",
      gapped: "Sarah ____ turn off the lights.",
      answers: ["asked Peter to"],
      model: "asked Peter to",
      explanation: "A polite request is reported with 'asked + person + to + infinitive'."
    },
    /* ---------- would rather / prefer ---------- */
    {
      original: "I prefer swimming to running.",
      keyword: "rather",
      gapped: "I would ____ than run.",
      answers: ["rather swim"],
      model: "rather swim",
      explanation: "'Prefer X to Y' becomes 'would rather + infinitive + than + infinitive'."
    },
    {
      original: "Kate would rather cook at home than eat out.",
      keyword: "prefers",
      gapped: "Kate ____ at home to eating out.",
      answers: ["prefers cooking"],
      model: "prefers cooking",
      explanation: "'Would rather + verb' becomes 'prefers + -ing + to + -ing'."
    },
    {
      original: "Paul prefers juice to milk.",
      keyword: "rather",
      gapped: "Paul would ____ have juice than milk.",
      answers: ["rather"],
      model: "rather",
      explanation: "'Prefers X to Y' can be expressed as 'would rather have X than Y'."
    },
    {
      original: "I'd rather listen to the radio than watch television.",
      keyword: "prefer",
      gapped: "I ____ to the radio to watching television.",
      answers: ["prefer listening"],
      model: "prefer listening",
      explanation: "'Would rather + infinitive + than' becomes 'prefer + -ing + to + -ing'."
    },
    {
      original: "Sophie prefers going by bus to driving.",
      keyword: "rather",
      gapped: "Sophie would ____ by bus than drive.",
      answers: ["rather go", "rather travel"],
      model: "rather go",
      explanation: "'Prefers + -ing' becomes 'would rather + bare infinitive'."
    },
    {
      original: "Mike would rather play chess than cards.",
      keyword: "prefers",
      gapped: "Mike ____ chess to cards.",
      answers: ["prefers playing", "prefers"],
      model: "prefers playing",
      explanation: "'Would rather play X than Y' becomes 'prefers (playing) X to Y'."
    },
    {
      original: "Laura prefers reading magazines to watching films.",
      keyword: "rather",
      gapped: "Laura would ____ magazines than watch films.",
      answers: ["rather read"],
      model: "rather read",
      explanation: "'Prefers + -ing to + -ing' becomes 'would rather + verb + than + verb'."
    },
    {
      original: "I prefer tea to coffee after dinner.",
      keyword: "rather",
      gapped: "I would ____ tea than coffee after dinner.",
      answers: ["rather have", "rather drink"],
      model: "rather have",
      explanation: "'Prefer X to Y' with nouns becomes 'would rather have X than Y'."
    },
    /* ---------- unless / if ---------- */
    {
      original: "If you don't wear sunscreen, you will get burnt.",
      keyword: "unless",
      gapped: "You will get burnt ____ wear sunscreen.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'If ... not' can be replaced by 'unless' with a positive verb."
    },
    {
      original: "Unless it snows, the school will stay open.",
      keyword: "if",
      gapped: "The school will stay open ____ snow.",
      answers: ["if it doesn't", "if it does not"],
      model: "if it doesn't",
      explanation: "'Unless' means 'if ... not', so the verb becomes negative with 'if'."
    },
    {
      original: "If you don't practise, you won't improve.",
      keyword: "unless",
      gapped: "You won't improve ____ practise.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'Unless you practise' means 'if you don't practise'."
    },
    {
      original: "You can't borrow books unless you have a library card.",
      keyword: "if",
      gapped: "You can't borrow books ____ have a library card.",
      answers: ["if you don't", "if you do not"],
      model: "if you don't",
      explanation: "'Unless you have' becomes 'if you don't have'."
    },
    {
      original: "If Sarah doesn't run, she will miss the train.",
      keyword: "unless",
      gapped: "Sarah will miss the train ____ runs.",
      answers: ["unless she"],
      model: "unless she",
      explanation: "'If she doesn't run' can be rewritten as 'unless she runs'."
    },
    {
      original: "Unless you feed the fish, they will get ill.",
      keyword: "if",
      gapped: "The fish will get ill ____ feed them.",
      answers: ["if you don't", "if you do not"],
      model: "if you don't",
      explanation: "'Unless you feed' equals 'if you don't feed'."
    },
    {
      original: "If you don't book early, you won't get a seat.",
      keyword: "unless",
      gapped: "You won't get a seat ____ book early.",
      answers: ["unless you"],
      model: "unless you",
      explanation: "'Unless' replaces 'if ... not'; the verb after 'unless' stays positive."
    },
    {
      original: "We won't play the match unless the rain stops.",
      keyword: "if",
      gapped: "We won't play the match ____ stop.",
      answers: ["if the rain doesn't"],
      model: "if the rain doesn't",
      explanation: "'Unless the rain stops' means 'if the rain doesn't stop'."
    },
    /* ---------- although / despite ---------- */
    {
      original: "Although it was snowing, Peter cycled to work.",
      keyword: "despite",
      gapped: "Peter cycled to work ____ snow.",
      answers: ["despite the"],
      model: "despite the",
      explanation: "'Although + clause' becomes 'despite + noun': despite the snow."
    },
    {
      original: "Despite feeling nervous, Kate gave a great speech.",
      keyword: "although",
      gapped: "Kate gave a great speech ____ felt nervous.",
      answers: ["although she"],
      model: "although she",
      explanation: "'Despite + -ing' becomes 'although + subject + verb'."
    },
    {
      original: "Although he was injured, Alex finished the marathon.",
      keyword: "spite",
      gapped: "Alex finished the marathon in ____ injured.",
      answers: ["spite of being"],
      model: "spite of being",
      explanation: "'Although + clause' becomes 'in spite of + -ing form'."
    },
    {
      original: "Despite the heavy traffic, we arrived on time.",
      keyword: "although",
      gapped: "We arrived on time ____ traffic was heavy.",
      answers: ["although the"],
      model: "although the",
      explanation: "'Despite + noun' becomes 'although + subject + verb'."
    },
    {
      original: "Although the flat was small, they bought it.",
      keyword: "despite",
      gapped: "They bought the flat ____ its small size.",
      answers: ["despite"],
      model: "despite",
      explanation: "'Although + clause' can become 'despite + noun phrase'."
    },
    {
      original: "Despite her cold, Laura sang beautifully at the concert.",
      keyword: "although",
      gapped: "Laura sang beautifully at the concert ____ had a cold.",
      answers: ["although she"],
      model: "although she",
      explanation: "'Despite + noun' is rewritten as 'although + subject + verb'."
    },
    {
      original: "Although Mike trained hard, he lost the match.",
      keyword: "despite",
      gapped: "Mike lost the match ____ hard.",
      answers: ["despite training"],
      model: "despite training",
      explanation: "'Although + clause' becomes 'despite + -ing form'."
    },
    {
      original: "Despite the long queue, we waited for tickets.",
      keyword: "although",
      gapped: "We waited for tickets ____ queue was long.",
      answers: ["although the"],
      model: "although the",
      explanation: "'Despite + noun' becomes a clause with 'although'."
    },
    /* ---------- advice ---------- */
    {
      original: "You should visit the doctor about your headaches.",
      keyword: "ought",
      gapped: "You ____ visit the doctor about your headaches.",
      answers: ["ought to"],
      model: "ought to",
      explanation: "'Should' can be replaced by 'ought to' with the same meaning."
    },
    {
      original: "You should get more sleep before the exam.",
      keyword: "why",
      gapped: "____ you get more sleep before the exam?",
      answers: ["Why don't"],
      model: "Why don't",
      explanation: "Advice with 'should' can become a suggestion: 'Why don't you ...?'"
    },
    {
      original: "Why don't you write a list before you go shopping?",
      keyword: "should",
      gapped: "You ____ a list before you go shopping.",
      answers: ["should write", "should make"],
      model: "should write",
      explanation: "'Why don't you + verb?' can be rewritten as 'You should + verb'."
    },
    {
      original: "You ought to eat more vegetables.",
      keyword: "should",
      gapped: "You ____ more vegetables.",
      answers: ["should eat"],
      model: "should eat",
      explanation: "'Ought to' and 'should' both give advice with the same meaning."
    },
    {
      original: "I think you should learn to swim this summer.",
      keyword: "why",
      gapped: "____ learn to swim this summer?",
      answers: ["Why don't you"],
      model: "Why don't you",
      explanation: "'You should' can become the suggestion 'Why don't you ...?'"
    },
    {
      original: "Why don't you catch the later bus?",
      keyword: "ought",
      gapped: "You ____ the later bus.",
      answers: ["ought to catch", "ought to take"],
      model: "ought to catch",
      explanation: "A 'Why don't you' suggestion equals advice with 'ought to'."
    },
    /* ---------- never / first time ---------- */
    {
      original: "This is the first time I have tried skiing.",
      keyword: "never",
      gapped: "I have ____ skiing before.",
      answers: ["never tried"],
      model: "never tried",
      explanation: "'The first time I have done X' means 'I have never done X before'."
    },
    {
      original: "Paul has never ridden a horse before.",
      keyword: "first",
      gapped: "This is the ____ time Paul has ridden a horse.",
      answers: ["first"],
      model: "first",
      explanation: "'Never before' means it is the first time it has happened."
    },
    {
      original: "I have never cooked Indian food before.",
      keyword: "time",
      gapped: "This is the first ____ cooked Indian food.",
      answers: ["time I have", "time I've"],
      model: "time I have",
      explanation: "'Never before' becomes 'the first time + present perfect'."
    },
    {
      original: "This is the first time Sophie has sung on stage.",
      keyword: "never",
      gapped: "Sophie has ____ on stage before.",
      answers: ["never sung"],
      model: "never sung",
      explanation: "'The first time' equals 'never ... before' in the present perfect."
    },
    {
      original: "Kate has never visited Scotland before.",
      keyword: "first",
      gapped: "This is the ____ Kate has visited Scotland.",
      answers: ["first time"],
      model: "first time",
      explanation: "'Never before' can be rewritten as 'the first time + present perfect'."
    },
    {
      original: "This is the first time we have camped by a lake.",
      keyword: "never",
      gapped: "We have ____ by a lake before.",
      answers: ["never camped"],
      model: "never camped",
      explanation: "'The first time we have camped' means 'we have never camped before'."
    },
    /* ---------- lend / borrow ---------- */
    {
      original: "Peter borrowed an umbrella from Laura.",
      keyword: "lent",
      gapped: "Laura ____ an umbrella.",
      answers: ["lent Peter", "lent him"],
      model: "lent Peter",
      explanation: "'Borrow from someone' becomes 'someone lent + person + object'."
    },
    {
      original: "Sarah lent her dictionary to Mike.",
      keyword: "borrowed",
      gapped: "Mike ____ from Sarah.",
      answers: ["borrowed her dictionary", "borrowed the dictionary", "borrowed a dictionary"],
      model: "borrowed her dictionary",
      explanation: "'Lend to someone' becomes 'someone borrowed + object + from'."
    },
    {
      original: "Alex borrowed twenty pounds from his brother.",
      keyword: "lent",
      gapped: "Alex's brother ____ twenty pounds.",
      answers: ["lent him", "lent Alex"],
      model: "lent him",
      explanation: "The lender gives; 'borrowed from' becomes 'lent + person'."
    },
    {
      original: "Kate lent her headphones to Sophie.",
      keyword: "borrowed",
      gapped: "Sophie ____ from Kate.",
      answers: ["borrowed her headphones", "borrowed the headphones"],
      model: "borrowed her headphones",
      explanation: "'Lent to Sophie' means 'Sophie borrowed them from Kate'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
