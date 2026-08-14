/* FCE Prep extra bank: part4 wave 5 */
(function () {
  var BANK = [
    {
      original: "Could I use your calculator for a minute?",
      keyword: "BORROWED",
      gapped: "Would you mind ____ calculator for a minute?",
      answers: ["if I borrowed your"],
      model: "if I borrowed your",
      explanation: "After 'Would you mind if', a past tense verb is used to make a polite request, so 'borrowed' replaces 'use'."
    },
    {
      original: "Workers took the old statue down from its base last month.",
      keyword: "REMOVED",
      gapped: "The old statue ____ its base last month.",
      answers: ["was removed from"],
      model: "was removed from",
      explanation: "The active sentence becomes passive: the statue is the subject, so we need 'was removed from'."
    },
    {
      original: "Rita can translate legal documents without any help.",
      keyword: "CAPABLE",
      gapped: "Rita is ____ legal documents without any help.",
      answers: ["capable of translating"],
      model: "capable of translating",
      explanation: "'Capable' is followed by the preposition 'of' plus an -ing form, replacing the modal 'can'."
    },
    {
      original: "Jamie finds it impossible to distinguish the twin brothers.",
      keyword: "APART",
      gapped: "Jamie finds it impossible to ____.",
      answers: ["tell the twin brothers apart", "tell the twins apart"],
      model: "tell the twin brothers apart",
      explanation: "'Tell somebody apart' means to distinguish between two very similar people or things."
    },
    {
      original: "Do you still communicate with your university friends?",
      keyword: "TOUCH",
      gapped: "Do you still ____ your university friends?",
      answers: ["keep in touch with", "stay in touch with"],
      model: "keep in touch with",
      explanation: "'Keep/stay in touch with someone' means to continue communicating with them."
    },
    {
      original: "About two hundred runners competed in the charity race.",
      keyword: "PART",
      gapped: "About two hundred runners ____ the charity race.",
      answers: ["took part in"],
      model: "took part in",
      explanation: "'Take part in' means to participate or compete in an event; the past form 'took' matches the original tense."
    },
    {
      original: "Nobody listened to the safety announcement at the airport.",
      keyword: "ATTENTION",
      gapped: "Nobody ____ the safety announcement at the airport.",
      answers: ["paid attention to", "paid any attention to"],
      model: "paid attention to",
      explanation: "'Pay attention to something' means to listen to or watch it carefully."
    },
    {
      original: "Marek organises all the deliveries at the warehouse.",
      keyword: "RESPONSIBLE",
      gapped: "Marek is ____ all the deliveries at the warehouse.",
      answers: ["responsible for organising"],
      model: "responsible for organising",
      explanation: "'Responsible' takes the preposition 'for' followed by an -ing form."
    },
    {
      original: "Yusuf stopped finding stamp collecting interesting years ago.",
      keyword: "INTEREST",
      gapped: "Yusuf ____ stamp collecting years ago.",
      answers: ["lost interest in", "lost his interest in", "lost all interest in"],
      model: "lost interest in",
      explanation: "'Lose interest in something' means to stop finding it interesting."
    },
    {
      original: "The weather will determine whether we hold the ceremony outdoors.",
      keyword: "DEPENDS",
      gapped: "Whether we hold the ceremony outdoors ____ weather.",
      answers: ["depends on the", "depends upon the"],
      model: "depends on the",
      explanation: "'Depend on something' expresses that one thing determines another; note the preposition 'on'."
    },
    {
      original: "Nadia's parents dislike her staying out so late.",
      keyword: "APPROVE",
      gapped: "Nadia's parents do not ____ staying out so late.",
      answers: ["approve of her"],
      model: "approve of her",
      explanation: "'Not approve of someone doing something' means to dislike or disagree with their behaviour."
    },
    {
      original: "Ravi didn't drive to the conference; he took the coach.",
      keyword: "INSTEAD",
      gapped: "Ravi took the coach ____ to the conference.",
      answers: ["instead of driving"],
      model: "instead of driving",
      explanation: "'Instead of' is followed by an -ing form to show the action that was replaced."
    },
    {
      original: "Buying a season ticket is sensible if you commute every day.",
      keyword: "SENSE",
      gapped: "It ____ a season ticket if you commute every day.",
      answers: ["makes sense to buy"],
      model: "makes sense to buy",
      explanation: "'It makes sense to do something' means it is a sensible or reasonable thing to do."
    },
    {
      original: "Dozens of trains were cancelled because of the signal failure.",
      keyword: "RESULT",
      gapped: "Dozens of trains were cancelled as a ____ signal failure.",
      answers: ["result of the"],
      model: "result of the",
      explanation: "'As a result of' is a formal way of saying 'because of'."
    },
    {
      original: "Farid and his landlord have an excellent relationship.",
      keyword: "TERMS",
      gapped: "Farid is on very good ____ landlord.",
      answers: ["terms with his"],
      model: "terms with his",
      explanation: "'Be on good terms with someone' means to have a friendly relationship with them."
    },
    {
      original: "Greta really likes old black-and-white films.",
      keyword: "FOND",
      gapped: "Greta is very ____ black-and-white films.",
      answers: ["fond of old"],
      model: "fond of old",
      explanation: "'Be fond of something' means to like it very much; 'fond' is followed by 'of'."
    },
    {
      original: "If you skip breakfast, you might feel dizzy later.",
      keyword: "RISK",
      gapped: "If you skip breakfast, you ____ feeling dizzy later.",
      answers: ["run the risk of"],
      model: "run the risk of",
      explanation: "'Run the risk of doing something' means there is a danger that it might happen."
    },
    {
      original: "Elif manages the ticket office on Sundays.",
      keyword: "CHARGE",
      gapped: "Elif is ____ the ticket office on Sundays.",
      answers: ["in charge of"],
      model: "in charge of",
      explanation: "'Be in charge of something' means to be responsible for managing it."
    },
    {
      original: "A kind woman helped me; her son goes to my school.",
      keyword: "WHOSE",
      gapped: "The kind woman ____ to my school helped me.",
      answers: ["whose son goes"],
      model: "whose son goes",
      explanation: "The relative pronoun 'whose' shows possession and joins the two sentences into one."
    },
    {
      original: "Dmitri quickly got used to the freezing winters.",
      keyword: "ACCUSTOMED",
      gapped: "Dmitri quickly became ____ the freezing winters.",
      answers: ["accustomed to"],
      model: "accustomed to",
      explanation: "'Become accustomed to something' is a more formal equivalent of 'get used to'."
    },
    {
      original: "The new parking rules start to apply in April.",
      keyword: "EFFECT",
      gapped: "The new parking rules ____ in April.",
      answers: ["come into effect", "take effect", "will come into effect", "will take effect"],
      model: "come into effect",
      explanation: "'Come into effect' or 'take effect' means that a rule or law officially starts to apply."
    },
    {
      original: "Kasia couldn't decide which course to choose.",
      keyword: "MIND",
      gapped: "Kasia couldn't ____ which course to choose.",
      answers: ["make up her mind", "make up her mind about"],
      model: "make up her mind",
      explanation: "'Make up your mind' means to reach a decision about something."
    },
    {
      original: "Timo disappointed his teammates by missing the penalty.",
      keyword: "DOWN",
      gapped: "Timo ____ by missing the penalty.",
      answers: ["let his teammates down"],
      model: "let his teammates down",
      explanation: "The phrasal verb 'let somebody down' means to disappoint them."
    },
    {
      original: "Zosia made a formal request for the scholarship in March.",
      keyword: "APPLIED",
      gapped: "Zosia ____ the scholarship in March.",
      answers: ["applied for"],
      model: "applied for",
      explanation: "'Apply for something' means to make a formal request for it, such as a job or scholarship."
    },
    {
      original: "The tournament was postponed because the rain was so heavy.",
      keyword: "OWING",
      gapped: "The tournament was postponed ____ heavy rain.",
      answers: ["owing to the", "owing to"],
      model: "owing to the",
      explanation: "'Owing to' is a formal way of saying 'because of' and is followed by a noun phrase."
    },
    {
      original: "In my opinion, the ending spoiled the whole film.",
      keyword: "FAR",
      gapped: "As ____ concerned, the ending spoiled the whole film.",
      answers: ["far as I am", "far as I'm"],
      model: "far as I am",
      explanation: "'As far as I am concerned' is a fixed expression meaning 'in my opinion'."
    },
    {
      original: "My colleagues started cycling as a hobby last summer.",
      keyword: "TOOK",
      gapped: "My colleagues ____ a hobby last summer.",
      answers: ["took up cycling as"],
      model: "took up cycling as",
      explanation: "The phrasal verb 'take up' means to start doing a new hobby or activity."
    },
    {
      original: "We found it hard to follow the guide's instructions.",
      keyword: "TROUBLE",
      gapped: "We ____ the guide's instructions.",
      answers: ["had trouble following", "had trouble in following"],
      model: "had trouble following",
      explanation: "'Have trouble doing something' means to find it difficult to do."
    },
    {
      original: "Did you succeed in booking the campsite for August?",
      keyword: "MANAGE",
      gapped: "Did you ____ the campsite for August?",
      answers: ["manage to book"],
      model: "manage to book",
      explanation: "'Manage to do something' means to succeed in doing it; note the to-infinitive after 'manage'."
    },
    {
      original: "Ines had never flown a drone before yesterday.",
      keyword: "FIRST",
      gapped: "Yesterday was the ____ ever flown a drone.",
      answers: ["first time Ines had"],
      model: "first time Ines had",
      explanation: "'The first time' plus past perfect expresses that the action had never happened before that moment."
    },
    { original: "\"I'm sorry I broke your headphones,\" said Leo.", keyword: "APOLOGISED", gapped: "Leo ____ my headphones.", answers: ["apologised for breaking"], model: "apologised for breaking", explanation: "'Apologise for + -ing' reports an apology." },
    { original: "The last time I saw Marta was in 2019.", keyword: "SINCE", gapped: "I ____ 2019.", answers: ["haven't seen Marta since", "have not seen Marta since"], model: "haven't seen Marta since", explanation: "'The last time ... was' becomes present perfect negative + 'since'." },
    { original: "It was wrong of you to read my diary.", keyword: "SHOULD", gapped: "You ____ my diary.", answers: ["should not have read"], model: "should not have read", explanation: "'Should not have + past participle' criticises a past action." },
    { original: "They say the castle is more than eight hundred years old.", keyword: "SAID", gapped: "The castle ____ more than eight hundred years old.", answers: ["is said to be"], model: "is said to be", explanation: "The passive reporting structure is 'is said to be'." },
    { original: "I regret selling my old bicycle.", keyword: "WISH", gapped: "I ____ my old bicycle.", answers: ["wish I hadn't sold", "wish I had not sold"], model: "wish I hadn't sold", explanation: "'Wish + past perfect' expresses regret about the past." },
    { original: "The play was so boring that we left at the interval.", keyword: "SUCH", gapped: "It was ____ that we left at the interval.", answers: ["such a boring play"], model: "such a boring play", explanation: "'So + adjective' becomes 'such + a + adjective + noun'." },
    { original: "Ben started learning the drums three years ago.", keyword: "BEEN", gapped: "Ben ____ the drums for three years.", answers: ["has been learning"], model: "has been learning", explanation: "'Started ... ago' becomes present perfect continuous + 'for'." },
    { original: "Maybe Rosa didn't get my message.", keyword: "MIGHT", gapped: "Rosa ____ my message.", answers: ["might not have got", "might not have gotten", "might not have received"], model: "might not have got", explanation: "'Might not have + past participle' expresses uncertainty about the past." },
    { original: "Passengers are not allowed to speak to the driver.", keyword: "MUST", gapped: "Passengers ____ to the driver.", answers: ["must not speak"], model: "must not speak", explanation: "A prohibition can be expressed with 'must not'." },
    { original: "The storm prevented the ferry from sailing.", keyword: "BECAUSE", gapped: "The ferry did not sail ____ storm.", answers: ["because of the"], model: "because of the", explanation: "'Prevent' is re-expressed with 'because of + noun'." },
    { original: "This puzzle is too difficult for the younger children.", keyword: "ENOUGH", gapped: "This puzzle is ____ for the younger children.", answers: ["not easy enough", "not simple enough"], model: "not easy enough", explanation: "'Too difficult' becomes 'not easy enough'." },
    { original: "I haven't eaten sushi before.", keyword: "TIME", gapped: "This is the ____ eaten sushi.", answers: ["first time I have", "first time I've"], model: "first time I have", explanation: "'This is the first time + present perfect' describes a new experience." },
    { original: "Someone stole my rucksack at the station.", keyword: "HAD", gapped: "I ____ at the station.", answers: ["had my rucksack stolen"], model: "had my rucksack stolen", explanation: "'Have something done' describes something that happened to you." },
    { original: "\"Don't touch the paintings,\" the guard told the visitors.", keyword: "WARNED", gapped: "The guard ____ touch the paintings.", answers: ["warned the visitors not to"], model: "warned the visitors not to", explanation: "'Warn someone not to do' reports a negative command." },
    { original: "Cycling to work is cheaper than driving.", keyword: "AS", gapped: "Driving to work is ____ cycling.", answers: ["not as cheap as", "not so cheap as"], model: "not as cheap as", explanation: "The comparative is rewritten with 'not as ... as'." },
    { original: "I'm sure Petra is at home — her lights are on.", keyword: "MUST", gapped: "Petra ____ home — her lights are on.", answers: ["must be at"], model: "must be at", explanation: "'Must be' expresses a confident deduction about the present." },
    { original: "The coach made the players train an extra hour.", keyword: "WERE", gapped: "The players ____ train an extra hour.", answers: ["were made to"], model: "were made to", explanation: "In the passive, 'make someone do' becomes 'be made to do'." },
    { original: "We couldn't go sailing because of the strong wind.", keyword: "IF", gapped: "We could have gone sailing ____ been so strong.", answers: ["if the wind hadn't", "if the wind had not"], model: "if the wind hadn't", explanation: "A third conditional re-expresses the past cause." },
    { original: "Ali finds getting up early difficult.", keyword: "USED", gapped: "Ali isn't ____ up early.", answers: ["used to getting"], model: "used to getting", explanation: "'Be used to + -ing' means be accustomed to." },
    { original: "\"Did you post the letters, Tom?\" asked his mother.", keyword: "WHETHER", gapped: "Tom's mother asked him ____ the letters.", answers: ["whether he had posted"], model: "whether he had posted", explanation: "A reported yes/no question uses 'whether' and the past perfect." },
    { original: "The concert might be cancelled, so keep your receipt.", keyword: "CASE", gapped: "Keep your receipt ____ is cancelled.", answers: ["in case the concert"], model: "in case the concert", explanation: "'In case' introduces a precaution." },
    { original: "The pool is closed because they are repairing the roof.", keyword: "BEING", gapped: "The pool is closed because the roof ____.", answers: ["is being repaired"], model: "is being repaired", explanation: "The present continuous passive is 'is being repaired'." },
    { original: "It's a pity we don't have a bigger garden.", keyword: "ONLY", gapped: "If ____ a bigger garden.", answers: ["only we had"], model: "only we had", explanation: "'If only + past simple' expresses a present wish." },
    { original: "Nobody in the class is faster than Erik.", keyword: "FASTEST", gapped: "Erik is ____ the class.", answers: ["the fastest in"], model: "the fastest in", explanation: "The comparison is rewritten with a superlative." },
    { original: "I advise you to book the tickets today.", keyword: "WERE", gapped: "If I ____ book the tickets today.", answers: ["were you, I would", "were you, I'd"], model: "were you, I would", explanation: "'If I were you, I would...' gives advice." },
    { original: "Anna said she would help me, whatever happened.", keyword: "MATTER", gapped: "Anna said she would help me, ____ happened.", answers: ["no matter what"], model: "no matter what", explanation: "'No matter what' means whatever." },
    { original: "The thief got into the house through an open window.", keyword: "BROKE", gapped: "The thief ____ the house through an open window.", answers: ["broke into"], model: "broke into", explanation: "'Break into' means enter illegally." },
    { original: "It took us five hours to climb to the refuge.", keyword: "SPENT", gapped: "We ____ to the refuge.", answers: ["spent five hours climbing"], model: "spent five hours climbing", explanation: "'Spend + time + -ing' replaces 'it took us + time + to'." },
    { original: "I'm sure it wasn't Maria you saw; she's abroad.", keyword: "CAN'T", gapped: "It ____ Maria you saw; she's abroad.", answers: ["can't have been"], model: "can't have been", explanation: "'Can't have + past participle' expresses certainty that something did not happen." },
    { original: "Our teacher checks our homework every Friday.", keyword: "IS", gapped: "Our homework ____ our teacher every Friday.", answers: ["is checked by"], model: "is checked by", explanation: "The present simple passive is 'is checked by'." },
    { original: "Despite the rain, the barbecue went ahead.", keyword: "EVEN", gapped: "The barbecue went ahead ____ was raining.", answers: ["even though it", "even if it"], model: "even though it", explanation: "'Despite + noun' becomes 'even though + clause'." },
    { original: "Swimming in this part of the river is forbidden.", keyword: "NOT", gapped: "You are ____ in this part of the river.", answers: ["not allowed to swim", "not permitted to swim"], model: "not allowed to swim", explanation: "The prohibition is re-expressed with 'not allowed to'." },
    { original: "My handwriting is worse than my brother's.", keyword: "WELL", gapped: "I don't write ____ my brother does.", answers: ["as well as"], model: "as well as", explanation: "The comparison is rewritten with 'as well as' after a negative verb." },
    { original: "\"I'll carry your suitcase, Grandma,\" said Paula.", keyword: "OFFERED", gapped: "Paula ____ her grandmother's suitcase.", answers: ["offered to carry"], model: "offered to carry", explanation: "'Offer to do' reports a promise of help." },
    { original: "We arrived too late to see the opening ceremony.", keyword: "TIME", gapped: "We didn't arrive ____ see the opening ceremony.", answers: ["in time to"], model: "in time to", explanation: "'Too late to' becomes 'not ... in time to'." },
    { original: "Keeping a diary was something I did as a child.", keyword: "USED", gapped: "I ____ a diary as a child.", answers: ["used to keep"], model: "used to keep", explanation: "'Used to + infinitive' describes a past habit." },
    { original: "The manager will only sign the contract if the price falls.", keyword: "UNLESS", gapped: "The manager won't sign the contract ____ falls.", answers: ["unless the price"], model: "unless the price", explanation: "'Only if' is rewritten with 'unless' + affirmative clause." },
    { original: "They are building a new stadium near the port.", keyword: "BUILT", gapped: "A new stadium ____ near the port.", answers: ["is being built"], model: "is being built", explanation: "The present continuous passive is 'is being built'." },
    { original: "I find his handwriting impossible to read.", keyword: "CANNOT", gapped: "His handwriting ____ read.", answers: ["cannot be"], model: "cannot be", explanation: "'Impossible to read' becomes the passive 'cannot be read'." },
    { original: "The film star wore dark glasses so that nobody would recognise her.", keyword: "AVOID", gapped: "The film star wore dark glasses to ____ recognised.", answers: ["avoid being"], model: "avoid being", explanation: "'Avoid + being + past participle' expresses the purpose of not being noticed." },
    { original: "\"Why don't we take the coast road?\" said Nina.", keyword: "SUGGESTED", gapped: "Nina ____ the coast road.", answers: ["suggested taking", "suggested that they take", "suggested they take"], model: "suggested taking", explanation: "'Suggest + -ing' reports a proposal." },
    { original: "I would prefer you to stay at home tonight.", keyword: "RATHER", gapped: "I would ____ at home tonight.", answers: ["rather you stayed"], model: "rather you stayed", explanation: "'Would rather + person + past tense' expresses a preference about someone else." },
    { original: "The museum was closed, so we couldn't see the exhibition.", keyword: "BEEN", gapped: "If the museum hadn't ____ have seen the exhibition.", answers: ["been closed, we could", "been closed, we would"], model: "been closed, we could", explanation: "A third conditional describes the unreal past." },
    { original: "The dentist is examining Lucy's teeth right now.", keyword: "HAVING", gapped: "Lucy ____ examined right now.", answers: ["is having her teeth"], model: "is having her teeth", explanation: "'Have something done' in the continuous form: 'is having her teeth examined'." },
    { original: "Everyone believes the manuscript was written by a monk.", keyword: "BELIEVED", gapped: "The manuscript ____ written by a monk.", answers: ["is believed to have been"], model: "is believed to have been", explanation: "The passive reporting of a past event uses 'is believed to have been'." },
    { original: "The trip was cancelled because not enough people signed up.", keyword: "DUE", gapped: "The trip was cancelled ____ lack of participants.", answers: ["due to a", "due to the"], model: "due to a", explanation: "'Due to + noun phrase' expresses cause." },
    { original: "I started this job five years ago.", keyword: "WORKING", gapped: "I ____ this job for five years.", answers: ["have been working in", "have been working at"], model: "have been working in", explanation: "'Started ... ago' becomes present perfect continuous + 'for'." },
    { original: "You can't bring drinks into the computer room.", keyword: "FORBIDDEN", gapped: "It ____ bring drinks into the computer room.", answers: ["is forbidden to"], model: "is forbidden to", explanation: "The impersonal structure 'it is forbidden to' expresses a rule." },
    { original: "\"I've never seen this man before,\" said the witness.", keyword: "DENIED", gapped: "The witness ____ the man before.", answers: ["denied having seen", "denied ever seeing", "denied seeing"], model: "denied having seen", explanation: "'Deny + having + past participle' reports a denial about the past." },
    { original: "As soon as the alarm rang, the staff left the building.", keyword: "MOMENT", gapped: "The staff left the building ____ alarm rang.", answers: ["the moment the"], model: "the moment the", explanation: "'The moment (that)' means as soon as." },
    { original: "Learning a language is easier when you are young.", keyword: "IT", gapped: "When you are young, ____ learn a language.", answers: ["it is easier to"], model: "it is easier to", explanation: "The introductory 'it' structure: 'it is easier to + infinitive'." },
    { original: "The two houses are exactly alike.", keyword: "DIFFERENCE", gapped: "There is ____ the two houses.", answers: ["no difference between"], model: "no difference between", explanation: "'Exactly alike' becomes 'no difference between'." },
    { original: "The teacher let us leave early on Friday.", keyword: "ALLOWED", gapped: "We ____ leave early on Friday.", answers: ["were allowed to"], model: "were allowed to", explanation: "'Let someone do' becomes passive 'be allowed to do'." },
    { original: "It's possible that the parcel got lost in the post.", keyword: "MAY", gapped: "The parcel ____ lost in the post.", answers: ["may have got", "may have gotten", "may have been"], model: "may have got", explanation: "'May have + past participle' expresses past possibility." },
    { original: "Tom regretted not applying for the scholarship.", keyword: "WISHED", gapped: "Tom ____ for the scholarship.", answers: ["wished he had applied"], model: "wished he had applied", explanation: "'Wish + past perfect' expresses regret about the past." },
    { original: "The waves were so big that swimming was dangerous.", keyword: "SUCH", gapped: "There were ____ that swimming was dangerous.", answers: ["such big waves"], model: "such big waves", explanation: "'So + adjective' becomes 'such + adjective + plural noun'." },
    { original: "The company no longer prints a paper catalogue.", keyword: "STOPPED", gapped: "The company ____ a paper catalogue.", answers: ["has stopped printing"], model: "has stopped printing", explanation: "'No longer does' becomes 'has stopped + -ing'." },
    { original: "Whose idea was it to paint the door purple?", keyword: "CAME", gapped: "Who ____ the idea of painting the door purple?", answers: ["came up with"], model: "came up with", explanation: "'Come up with an idea' means think of it." },
    { original: "You must water this plant every day, or it will die.", keyword: "NEEDS", gapped: "This plant ____ every day, or it will die.", answers: ["needs watering", "needs to be watered"], model: "needs watering", explanation: "'Need + -ing' has a passive meaning: needs to be watered." },
    { original: "Although he trained hard, he didn't make the team.", keyword: "SPITE", gapped: "____ hard, he didn't make the team.", answers: ["In spite of training", "In spite of having trained"], model: "In spite of training", explanation: "'Although + clause' becomes 'in spite of + -ing'." },
    { original: "\"Please, please don't tell Dad about the scratch,\" said Emma.", keyword: "BEGGED", gapped: "Emma ____ her dad about the scratch.", answers: ["begged me not to tell", "begged us not to tell"], model: "begged me not to tell", explanation: "'Beg someone not to do' reports an urgent request." },
    { original: "The critics loved the film, and so did the public.", keyword: "ONLY", gapped: "The film was loved not ____ critics but also by the public.", answers: ["only by the"], model: "only by the", explanation: "The structure 'not only ... but also' links the two groups." },
    { original: "I forgot my password, which was really annoying.", keyword: "WAS", gapped: "Annoyingly, my password ____ me.", answers: ["was forgotten by"], model: "was forgotten by", explanation: "The passive rewrites the sentence with the keyword 'was'." },
    { original: "The garden needs a lot of attention this month.", keyword: "AFTER", gapped: "The garden must be ____ carefully this month.", answers: ["looked after"], model: "looked after", explanation: "'Look after' means take care of; here in the passive." },
    { original: "Sofia is a better cook than her sister.", keyword: "COOK", gapped: "Sofia's sister can't ____ she can.", answers: ["cook as well as"], model: "cook as well as", explanation: "The comparison is rewritten with 'as well as'." },
    { original: "Miguel couldn't open the jar, however hard he tried.", keyword: "SUCCEED", gapped: "However hard he tried, Miguel didn't ____ the jar.", answers: ["succeed in opening"], model: "succeed in opening", explanation: "'Succeed in + -ing' means manage to do." },
    { original: "The last train had already left when we reached the station.", keyword: "BY", gapped: "The last train had already left ____ we reached the station.", answers: ["by the time"], model: "by the time", explanation: "'By the time + clause' means before that moment." },
    { original: "It was Clara who organised the whole festival.", keyword: "ORGANISED", gapped: "The whole festival ____ Clara.", answers: ["was organised by"], model: "was organised by", explanation: "The cleft sentence becomes a simple passive." },
    { original: "I don't play tennis as often as I used to.", keyword: "LESS", gapped: "I play tennis ____ than I used to.", answers: ["less often", "less frequently"], model: "less often", explanation: "'Not as often as' becomes 'less often than'." },
    { original: "\"You cheated in the card game, Alex!\" said Ben.", keyword: "OF", gapped: "Ben accused Alex ____ in the card game.", answers: ["of cheating", "of having cheated"], model: "of cheating", explanation: "'Accuse someone of + -ing' reports the accusation." },
    { original: "The path was so muddy that our boots sank.", keyword: "TOO", gapped: "The path was ____ walk on without sinking.", answers: ["too muddy to"], model: "too muddy to", explanation: "'So ... that' becomes 'too + adjective + to'." },
    { original: "The council will plant a hundred trees along the avenue.", keyword: "BE", gapped: "A hundred trees will ____ along the avenue.", answers: ["be planted"], model: "be planted", explanation: "The future passive is 'will be planted'." },
    { original: "I only recognised him because of his red scarf.", keyword: "IF", gapped: "I wouldn't have recognised him ____ been wearing his red scarf.", answers: ["if he hadn't", "if he had not"], model: "if he hadn't", explanation: "A third conditional expresses the unreal past condition." },
    { original: "Talking during the test is against the rules.", keyword: "SUPPOSED", gapped: "You are ____ during the test.", answers: ["not supposed to talk"], model: "not supposed to talk", explanation: "'Be not supposed to' expresses what the rules forbid." },
    { original: "The lecture bored me from start to finish.", keyword: "FOUND", gapped: "I ____ from start to finish.", answers: ["found the lecture boring"], model: "found the lecture boring", explanation: "'Find + object + adjective' expresses an opinion." },
    { original: "Hana is proud of winning the chess championship.", keyword: "TAKES", gapped: "Hana ____ having won the chess championship.", answers: ["takes pride in"], model: "takes pride in", explanation: "'Take pride in + -ing' means be proud of." },
    { original: "The hall can hold five hundred people at most.", keyword: "MAXIMUM", gapped: "The hall can hold a ____ five hundred people.", answers: ["maximum of"], model: "maximum of", explanation: "'A maximum of + number' means at most." },
    { original: "Petr said he was sorry for the misunderstanding, and I accepted.", keyword: "APOLOGY", gapped: "I accepted ____ the misunderstanding.", answers: ["Petr's apology for", "his apology for"], model: "Petr's apology for", explanation: "The verb 'apologise' becomes the noun 'apology'." },
    { original: "Do you know who owns this scooter?", keyword: "BELONGS", gapped: "Do you know who this scooter ____?", answers: ["belongs to"], model: "belongs to", explanation: "'Own' is rewritten as 'belong to'." }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
