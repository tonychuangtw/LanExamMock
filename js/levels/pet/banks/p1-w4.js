/* PET Prep extra bank: part1 wave 4 — Entertainment, Music & Film, Relationships, Feelings */
(function () {
  var BANK = [
    /* ---------- Entertainment & Media ---------- */
    {
      text: "There's nothing good ____ at the cinema this week.",
      options: ["on", "in", "at", "up"],
      answer: 0,
      explanation: "'On' means being shown or performed ('What's on?'). 'In', 'at' and 'up' are not used this way for films and shows."
    },
    {
      text: "The magician's tricks really ____ the children at the party.",
      options: ["enjoyed", "amused", "laughed", "funned"],
      answer: 1,
      explanation: "'Amuse' means to entertain and make people smile. 'Enjoy' needs the children as subject, 'laugh' doesn't take an object, and 'funned' is not a word."
    },
    {
      text: "We booked front-row ____ for the comedy show on Saturday.",
      options: ["chairs", "places up", "seats", "benches"],
      answer: 2,
      explanation: "You book 'seats' at a theatre or show. 'Chairs' and 'benches' are furniture, and 'places up' is incorrect."
    },
    {
      text: "The play was so boring that half the ____ left before the end.",
      options: ["public", "crowd up", "spectators", "audience"],
      answer: 3,
      explanation: "The 'audience' watches a play or concert. 'The public' means people in general, 'spectators' watch sport, and 'crowd up' is incorrect."
    },
    {
      text: "This talent show is broadcast ____ , so anything could happen.",
      options: ["live", "alive", "lively", "living"],
      answer: 0,
      explanation: "'Live' (adjective/adverb) means happening as you watch. 'Alive' means not dead, 'lively' means energetic, and 'living' means alive or earning money."
    },
    {
      text: "I couldn't put the novel ____ — I finished it in one day.",
      options: ["off", "down", "away up", "out"],
      answer: 1,
      explanation: "'Put down' a book means to stop reading it. 'Put off' means to postpone, 'away up' is incorrect, and 'put out' means to extinguish."
    },
    {
      text: "The newspaper's front-page ____ was about the flooding in the north.",
      options: ["title", "topline", "headline", "caption"],
      answer: 2,
      explanation: "A 'headline' is the large text above a news story. A 'title' is for books, 'topline' is not standard, and a 'caption' explains a photo."
    },
    {
      text: "She plays the main ____ in the new television drama.",
      options: ["person", "figure", "paper", "role"],
      answer: 3,
      explanation: "'Play a role' is the collocation for acting parts. 'Person' and 'figure' are not used with 'play', and 'paper' is a false friend from other languages."
    },
    {
      text: "Do you mind if I ____ over to the sports channel for the match?",
      options: ["switch", "change up", "turn up", "move up"],
      answer: 0,
      explanation: "'Switch over' means to change TV channels. 'Change up', 'turn up' and 'move up' do not mean changing channels."
    },
    {
      text: "The novel was so popular that it was ____ into more than thirty languages.",
      options: ["transferred", "translated", "converted", "exchanged"],
      answer: 1,
      explanation: "Books are 'translated' into other languages. 'Transferred' means moved, 'converted' means changed in form or belief, and 'exchanged' means swapped."
    },
    {
      text: "I read a really interesting ____ about space travel in this magazine.",
      options: ["notice", "chapter", "article", "advert"],
      answer: 2,
      explanation: "An 'article' is a piece of writing in a magazine or newspaper. A 'chapter' is part of a book, a 'notice' gives information, and an 'advert' sells something."
    },
    {
      text: "The band's new album comes ____ at the end of the month.",
      options: ["on", "over", "off", "out"],
      answer: 3,
      explanation: "'Come out' means to be released or published. 'Come on' means hurry, 'come off' means succeed, and 'come over' means visit."
    },
    {
      text: "Could you turn the volume ____ ? The neighbours will complain.",
      options: ["down", "under", "below", "less"],
      answer: 0,
      explanation: "'Turn down' means to reduce the volume. 'Under', 'below' and 'less' do not combine with 'turn' for volume."
    },
    {
      text: "This quiz show has been running for years and is still hugely ____ .",
      options: ["famous", "popular", "known", "public"],
      answer: 1,
      explanation: "'Popular' means liked by many people. 'Famous' means widely recognised, 'known' needs 'well-', and 'public' means for everyone, not liked."
    },
    {
      text: "The library lets you ____ up to six books at a time.",
      options: ["lend", "hire", "borrow", "loan up"],
      answer: 2,
      explanation: "You 'borrow' books from a library. The library 'lends' them, 'hire' involves paying, and 'loan up' is not correct."
    },
    {
      text: "The film is ____ on a true story that happened in the 1970s.",
      options: ["formed", "built", "taken", "based"],
      answer: 3,
      explanation: "'Based on' means using something as the starting point. 'Built', 'taken' and 'formed' do not collocate with 'on a true story'."
    },
    {
      text: "We arrived late and missed the ____ of the film.",
      options: ["beginning", "entrance", "introduction up", "opening act"],
      answer: 0,
      explanation: "The 'beginning' is the first part of a film. An 'entrance' is a door, 'introduction up' is incorrect, and an 'opening act' is a support performer at concerts."
    },
    {
      text: "The exhibition ____ works by more than fifty local artists.",
      options: ["contains up", "includes", "consists", "encloses"],
      answer: 1,
      explanation: "'Includes' means to have as a part. 'Contains up' is incorrect, 'consists' needs 'of', and 'encloses' means to surround or put in an envelope."
    },
    {
      text: "It's a brilliant book — I really ____ you to read it.",
      options: ["suggest", "propose", "recommend", "advise up"],
      answer: 2,
      explanation: "'Recommend somebody to do something' fits here. 'Suggest' and 'propose' cannot take 'you to read', and 'advise up' is incorrect."
    },
    {
      text: "Tickets for the festival ____ out within two hours.",
      options: ["emptied", "finished", "ended", "sold"],
      answer: 3,
      explanation: "'Sell out' means all tickets were bought. 'Finished', 'ended' and 'emptied' do not combine with 'out' for tickets."
    },
    {
      text: "I don't like reality shows — they're a complete ____ of time.",
      options: ["waste", "loss", "spend", "cost"],
      answer: 0,
      explanation: "'A waste of time' is the fixed expression. 'Loss', 'spend' and 'cost' do not form this phrase with 'of time'."
    },
    {
      text: "The documentary ____ how bees make honey.",
      options: ["looks", "shows", "watches", "views"],
      answer: 1,
      explanation: "A programme 'shows' information to viewers. 'Looks' needs 'at', and 'watches' and 'views' describe what the audience does."
    },
    {
      text: "He entered a photography ____ and won first prize.",
      options: ["match", "game", "competition", "play"],
      answer: 2,
      explanation: "A 'competition' is an organised event with prizes. A 'game' and 'match' are for sports, and a 'play' is a theatre performance."
    },
    {
      text: "Let's ____ a look at the programme before we choose a film.",
      options: ["give", "make", "put", "have"],
      answer: 3,
      explanation: "'Have a look' is the standard collocation (also 'take a look'). 'Give a look', 'make a look' and 'put a look' are incorrect."
    },
    {
      text: "The series was so successful that they ____ a second season immediately.",
      options: ["announced", "filmed up", "advertised up", "noticed"],
      answer: 0,
      explanation: "'Announce' means to tell the public officially. 'Filmed up' and 'advertised up' are incorrect forms, and 'notice' means to see or observe."
    },
    /* ---------- Music & Film ---------- */
    {
      text: "She's been ____ the piano since she was six years old.",
      options: ["touching", "playing", "performing up", "sounding"],
      answer: 1,
      explanation: "You 'play' a musical instrument. 'Touch' is physical contact, 'performing up' is incorrect, and 'sound' is what the instrument does."
    },
    {
      text: "The ____ gave three encores because the crowd wouldn't stop cheering.",
      options: ["team", "class", "band", "council"],
      answer: 2,
      explanation: "A 'band' is a group of musicians. A 'team' plays sport, a 'class' is students, and a 'council' governs a town."
    },
    {
      text: "I can't get that song out of my head — it's such a catchy ____ .",
      options: ["step", "noise", "voice", "tune"],
      answer: 3,
      explanation: "A 'tune' is the melody of a song. A 'noise' is unpleasant sound, a 'voice' belongs to a person, and a 'step' is for walking or dancing."
    },
    {
      text: "The concert hall was packed, and we had to watch from the ____ row.",
      options: ["back", "end up", "behind", "rear up"],
      answer: 0,
      explanation: "The 'back row' is the furthest from the stage. 'End up' and 'rear up' are incorrect forms, and 'behind' is a preposition, not an adjective here."
    },
    {
      text: "Who ____ the music for this film? It's absolutely beautiful.",
      options: ["invented", "composed", "constructed", "designed"],
      answer: 1,
      explanation: "'Compose' is the verb for writing music. 'Invent' is for machines and ideas, 'construct' is for buildings, and 'design' is for objects and plans."
    },
    {
      text: "The film was quite frightening, so it's not ____ for young children.",
      options: ["comfortable", "convenient", "suitable", "capable"],
      answer: 2,
      explanation: "'Suitable' means right or appropriate. 'Convenient' means easy to use, 'comfortable' means physically pleasant, and 'capable' means able to do something."
    },
    {
      text: "The main ____ in the film is a young detective from Naples.",
      options: ["figure head", "personality up", "actor person", "character"],
      answer: 3,
      explanation: "A 'character' is a person in a story or film. The other options are incorrect or invented forms — the actor is the real person, the character is the role."
    },
    {
      text: "The film has English ____ , so you can follow the Italian dialogue.",
      options: ["subtitles", "titles", "headings", "footnotes"],
      answer: 0,
      explanation: "'Subtitles' are translated words at the bottom of the screen. 'Titles' name the film, 'headings' are in documents, and 'footnotes' are in books."
    },
    {
      text: "She sang the national anthem completely out of ____ , poor thing.",
      options: ["sound", "tune", "note up", "rhythm up"],
      answer: 1,
      explanation: "'Out of tune' means singing the wrong notes. 'Sound' doesn't form this phrase, and 'note up' and 'rhythm up' are incorrect."
    },
    {
      text: "The audience ____ loudly as the singer walked onto the stage.",
      options: ["shouted up", "screamed at", "cheered", "called on"],
      answer: 2,
      explanation: "'Cheer' means to shout with approval and excitement. 'Shouted up' is incorrect, 'screamed at' shows anger, and 'called on' means to ask someone to speak."
    },
    {
      text: "The film ____ place in Paris during the 1920s.",
      options: ["gets", "makes", "holds", "takes"],
      answer: 3,
      explanation: "'Take place' means to happen or be set somewhere. 'Make', 'hold' and 'get' do not form this expression with 'place'."
    },
    {
      text: "He won the award for best ____ for his part in the war drama.",
      options: ["actor", "player", "performer up", "artist man"],
      answer: 0,
      explanation: "An 'actor' performs in films and plays. A 'player' is in sport or games, and 'performer up' and 'artist man' are not correct terms."
    },
    {
      text: "I prefer watching films in the ____ language with subtitles.",
      options: ["first", "original", "native up", "primary"],
      answer: 1,
      explanation: "The 'original language' is the one the film was made in. 'First' and 'primary' are for languages people speak, and 'native up' is incorrect."
    },
    {
      text: "The dancers moved perfectly in ____ with the drums.",
      options: ["order", "pace up", "time", "beat up"],
      answer: 2,
      explanation: "'In time with' means matching the rhythm. 'In order' means organised, and 'pace up' and 'beat up' are incorrect forms."
    },
    {
      text: "We couldn't stop laughing — it's the funniest ____ I've seen for years.",
      options: ["horror", "tragedy", "documentary", "comedy"],
      answer: 3,
      explanation: "A 'comedy' is a funny film. A 'tragedy' is sad, a 'documentary' gives facts, and a 'horror' film is frightening."
    },
    {
      text: "Rehearsals for the school musical ____ next Monday afternoon.",
      options: ["begin", "open up", "enter", "launch up"],
      answer: 0,
      explanation: "'Begin' means to start. 'Open up' is for shops and hearts, 'enter' means to go in, and 'launch up' is incorrect."
    },
    {
      text: "Turn the radio ____ a bit — I love this song!",
      options: ["over", "up", "along", "above"],
      answer: 1,
      explanation: "'Turn up' means to increase the volume. 'Turn over' is for pages and TV channels, and 'along' and 'above' don't combine with 'turn' for volume."
    },
    {
      text: "The critics gave the new thriller excellent ____ .",
      options: ["reports up", "revisions", "reviews", "remarks up"],
      answer: 2,
      explanation: "'Reviews' are critics' opinions of films and books. 'Revisions' are changes to texts, and 'reports up' and 'remarks up' are incorrect forms."
    },
    {
      text: "She has a beautiful ____ and sings in the church choir.",
      options: ["speech", "tone up", "sound up", "voice"],
      answer: 3,
      explanation: "A 'voice' is what you sing with. 'Speech' is formal talking, and 'sound up' and 'tone up' are incorrect forms here."
    },
    {
      text: "The orchestra was ____ by a famous Italian conductor.",
      options: ["led", "driven", "steered", "commanded up"],
      answer: 0,
      explanation: "An orchestra is 'led' by a conductor. 'Driven' is for vehicles, 'steered' is for ships and cars, and 'commanded up' is incorrect."
    },
    {
      text: "I couldn't hear the actors because the people behind us kept ____ .",
      options: ["whispering to", "chatting", "saying", "discussing to"],
      answer: 1,
      explanation: "'Chatting' means talking casually. 'Whispering to' and 'discussing to' need objects, and 'saying' cannot stand alone without words."
    },
    {
      text: "The special ____ in the space scenes were absolutely amazing.",
      options: ["results", "affects", "effects", "impacts"],
      answer: 2,
      explanation: "'Special effects' is the fixed term for film tricks. 'Affects' is a verb, and 'results' and 'impacts' don't form this expression."
    },
    {
      text: "Everyone stood up and ____ at the end of the performance.",
      options: ["tapped", "knocked", "slapped", "clapped"],
      answer: 3,
      explanation: "'Clap' means to hit your hands together in approval. 'Knock' is on doors, 'slap' is hitting a person, and 'tap' is a light touch."
    },
    {
      text: "The tickets ____ us thirty pounds each, but the show was worth it.",
      options: ["cost", "charged", "paid", "spent"],
      answer: 0,
      explanation: "Things 'cost' people money. People 'pay' and 'spend', and sellers 'charge' — tickets can't do those things."
    },
    {
      text: "He's learning to play the guitar by ____ videos online.",
      options: ["looking", "watching", "seeing", "viewing to"],
      answer: 1,
      explanation: "'Watch videos' is the correct collocation. 'Look' needs 'at', 'see' is for films at the cinema or general perception, and 'viewing to' is incorrect."
    },
    /* ---------- Relationships & Family ---------- */
    {
      text: "I really ____ on well with my younger cousin — we're like best friends.",
      options: ["make", "go", "get", "take"],
      answer: 2,
      explanation: "'Get on well with' means to have a good relationship. 'Make', 'go' and 'take' do not form this phrasal verb."
    },
    {
      text: "My parents first ____ each other at a friend's birthday party.",
      options: ["introduced", "knew", "found", "met"],
      answer: 3,
      explanation: "'Meet' means to see someone for the first time. 'Knew' describes a state, 'found' is for lost things, and 'introduced' needs a third person doing it."
    },
    {
      text: "She takes ____ her mother — they have exactly the same laugh.",
      options: ["after", "on", "up", "at"],
      answer: 0,
      explanation: "'Take after' means to resemble an older family member. 'Take at' isn't a phrasal verb, 'take on' means to accept work, and 'take up' means to start a hobby."
    },
    {
      text: "They've been ____ out together for about six months now.",
      options: ["walking", "going", "running", "moving"],
      answer: 1,
      explanation: "'Go out with someone' means to be in a romantic relationship. 'Walking', 'running' and 'moving' do not have this meaning with 'out together'."
    },
    {
      text: "He finally ____ friends with the boy he used to argue with.",
      options: ["got", "did", "made", "took"],
      answer: 2,
      explanation: "'Make friends' is the fixed collocation. 'Got', 'did' and 'took' are not used with 'friends' in this way."
    },
    {
      text: "My sister and her husband are ____ their first baby in March.",
      options: ["attending", "waiting", "hoping", "expecting"],
      answer: 3,
      explanation: "'Expecting a baby' means being pregnant. 'Waiting' and 'hoping' need 'for', and 'attending' means going to an event."
    },
    {
      text: "We had a silly ____ about whose turn it was to wash up.",
      options: ["argument", "discussion up", "fight up", "debate up"],
      answer: 0,
      explanation: "An 'argument' is an angry disagreement. The other options are incorrect forms — 'discussion' and 'debate' would be calmer and don't take 'up'."
    },
    {
      text: "Don't worry, they always ____ up again five minutes after arguing.",
      options: ["do", "make", "take", "put"],
      answer: 1,
      explanation: "'Make up' means to become friends again after a quarrel. 'Do up' means to fasten or renovate, 'take up' means to start, and 'put up' means to build."
    },
    {
      text: "Sam invited his closest friends to his eighteenth birthday ____ .",
      options: ["festival", "celebration up", "party", "ceremony"],
      answer: 2,
      explanation: "A birthday 'party' is a social event with friends. A 'festival' is a large public event, 'celebration up' is incorrect, and a 'ceremony' is formal, like a wedding."
    },
    {
      text: "My grandmother ____ up five children on her own.",
      options: ["grew", "carried", "raised on", "brought"],
      answer: 3,
      explanation: "'Bring up' means to care for children until they are adults. 'Grew up' has no object, 'raised on' is incorrect here, and 'carried' means transported."
    },
    {
      text: "He asked her to ____ him, and she happily said yes.",
      options: ["marry", "marry with", "get married", "wedding"],
      answer: 0,
      explanation: "'Marry someone' takes a direct object with no preposition. 'Marry with' is a common error, 'get married' needs 'to', and 'wedding' is a noun."
    },
    {
      text: "I've known Paula ____ we were at primary school together.",
      options: ["for", "since", "during", "from"],
      answer: 1,
      explanation: "'Since' introduces the starting point of a period. 'For' is used with lengths of time, 'during' is for events, and 'from' would need 'to' or 'until'."
    },
    {
      text: "Our neighbours kindly look ____ our cat whenever we go away.",
      options: ["at", "for", "after", "into"],
      answer: 2,
      explanation: "'Look after' means to take care of. 'Look at' means to watch, 'look for' means to search, and 'look into' means to investigate."
    },
    {
      text: "It was nice to catch ____ with old classmates at the reunion.",
      options: ["on", "over", "out", "up"],
      answer: 3,
      explanation: "'Catch up with' means to exchange news with someone. 'Catch on' means to understand or become popular, and 'catch over' and 'catch out' don't fit."
    },
    {
      text: "You can always ____ on Maria — she never lets anyone down.",
      options: ["rely", "trust", "believe", "hope"],
      answer: 0,
      explanation: "'Rely on' means to depend on. 'Trust' and 'believe' take a direct object without 'on', and 'hope' is followed by 'for' or a clause."
    },
    {
      text: "The twins are so ____ that even their teachers confuse them.",
      options: ["same", "alike", "equal", "like"],
      answer: 1,
      explanation: "'Alike' means very similar (used after the verb). 'Same' needs 'the', 'equal' is for amounts and rights, and 'like' is a preposition."
    },
    {
      text: "We've invited all our ____ to the housewarming party next door.",
      options: ["residents up", "citizens", "neighbours", "locals up"],
      answer: 2,
      explanation: "'Neighbours' are the people living near you. 'Citizens' belong to a country, and 'residents up' and 'locals up' are incorrect forms."
    },
    {
      text: "He's an only ____ , so he sometimes wished he had a brother.",
      options: ["son up", "boy one", "kid one", "child"],
      answer: 3,
      explanation: "An 'only child' has no brothers or sisters. 'Son up', 'kid one' and 'boy one' are not correct expressions."
    },
    {
      text: "I'd like you to meet my ____ , Carlos — we got engaged last week.",
      options: ["fiancé", "groom", "widower", "nephew"],
      answer: 0,
      explanation: "A 'fiancé' is the man you have promised to marry. A 'groom' is the man on the wedding day itself, a 'widower' has lost his wife, and a 'nephew' is a brother's or sister's son."
    },
    {
      text: "Everyone says I look ____ my father, especially when I smile.",
      options: ["as", "like", "similar", "same as"],
      answer: 1,
      explanation: "'Look like someone' means to resemble them. 'As' is for jobs and roles, 'similar' needs 'to', and 'same as' needs 'the'."
    },
    {
      text: "They fell ____ over money and didn't speak for a whole year.",
      options: ["off", "down", "out", "over"],
      answer: 2,
      explanation: "'Fall out' means to stop being friends after an argument. 'Fall off' means to drop from something, 'fall down' means to collapse, and 'fall over' means to trip."
    },
    {
      text: "My best friend never lets me ____ when I need help.",
      options: ["behind", "off", "away", "down"],
      answer: 3,
      explanation: "'Let somebody down' means to disappoint them. 'Let off' means not to punish, 'let away' is incorrect, and 'let behind' is not a phrasal verb."
    },
    {
      text: "We're having a family ____ this weekend — even my cousins from Canada are coming.",
      options: ["gathering", "collection", "meeting up", "grouping"],
      answer: 0,
      explanation: "A 'gathering' is an informal social meeting of people. A 'collection' is of objects, 'meeting up' is incorrect as a noun, and 'grouping' is for categories."
    },
    {
      text: "She ____ up with her boyfriend after three years together.",
      options: ["cut", "broke", "finished on", "ended on"],
      answer: 1,
      explanation: "'Break up with' means to end a romantic relationship. 'Cut up' means to cut into pieces, and 'finished on' and 'ended on' are incorrect."
    },
    {
      text: "My grandparents celebrated their fiftieth wedding ____ in June.",
      options: ["birthday", "ceremony up", "anniversary", "memory up"],
      answer: 2,
      explanation: "An 'anniversary' marks the date of a past event each year. A 'birthday' is for a person's birth, and 'ceremony up' and 'memory up' are incorrect forms."
    },
    /* ---------- Feelings & Personality ---------- */
    {
      text: "She was ____ with her exam results and celebrated all evening.",
      options: ["delight", "delightful", "delighting", "delighted"],
      answer: 3,
      explanation: "'Delighted' (-ed adjective) describes how a person feels. 'Delightful' describes things that cause the feeling, and 'delighting' and 'delight' don't fit here."
    },
    {
      text: "The instructions were so ____ that nobody knew what to do.",
      options: ["confusing", "confused", "confuse", "confusion"],
      answer: 0,
      explanation: "'Confusing' (-ing adjective) describes the thing causing the feeling. 'Confused' describes people, and 'confuse' and 'confusion' are a verb and noun."
    },
    {
      text: "I'm really ____ about starting my new job on Monday.",
      options: ["excite", "excited", "exciting", "excitement"],
      answer: 1,
      explanation: "'Excited' describes a person's feeling. 'Exciting' describes things, 'excite' is a verb, and 'excitement' is a noun."
    },
    {
      text: "He's very ____ — he gives money to charity every single month.",
      options: ["jealous", "greedy", "generous", "selfish"],
      answer: 2,
      explanation: "'Generous' means happy to give. 'Greedy' means wanting more, 'jealous' means envious, and 'selfish' means thinking only of yourself — the opposite of the sentence."
    },
    {
      text: "Don't be ____ — the dentist isn't going to hurt you.",
      options: ["afraid up", "scary", "fearful up", "frightened"],
      answer: 3,
      explanation: "'Frightened' describes how the person feels. 'Scary' describes what causes fear, and 'afraid up' and 'fearful up' are incorrect forms."
    },
    {
      text: "She felt terribly ____ when she forgot the teacher's name.",
      options: ["embarrassed", "embarrassing", "embarrass", "embarrassment"],
      answer: 0,
      explanation: "'Embarrassed' describes a person's uncomfortable feeling. 'Embarrassing' describes the situation, and 'embarrass' and 'embarrassment' are a verb and noun."
    },
    {
      text: "My grandfather is quite ____ — he chats happily to complete strangers.",
      options: ["shy", "sociable", "quiet up", "reserved up"],
      answer: 1,
      explanation: "'Sociable' means enjoying other people's company. 'Shy' is the opposite, and 'quiet up' and 'reserved up' are incorrect forms."
    },
    {
      text: "Thank you so much — that's really ____ of you.",
      options: ["warm up", "friendly up", "kind", "gentle up"],
      answer: 2,
      explanation: "'Kind of you' is the fixed pattern for thanking. 'Friendly', 'warm' and 'gentle' aren't used with 'of you' this way, and the '-up' forms are incorrect."
    },
    {
      text: "He was ____ disappointed when the concert was cancelled.",
      options: ["bitter", "bittering", "bitterness", "bitterly"],
      answer: 3,
      explanation: "'Bitterly disappointed' is a strong collocation — an adverb is needed before the adjective. 'Bitter' is an adjective, 'bitterness' a noun, and 'bittering' is not a word."
    },
    {
      text: "I get really ____ when my brother borrows my things without asking.",
      options: ["annoyed", "annoying", "annoy", "annoyance"],
      answer: 0,
      explanation: "'Annoyed' describes the feeling of the person. 'Annoying' describes the behaviour causing it, and 'annoy' and 'annoyance' are a verb and noun."
    },
    {
      text: "She's very ____ of her daughter, who has just qualified as a doctor.",
      options: ["pleased", "proud", "happy up", "glad up"],
      answer: 1,
      explanation: "'Proud of' is the correct adjective-preposition pair. 'Pleased' takes 'with', and 'happy up' and 'glad up' are incorrect forms."
    },
    {
      text: "Are you ____ in joining our photography club this term?",
      options: ["interesting", "interest", "interested", "interests"],
      answer: 2,
      explanation: "'Interested in' describes a person's feeling. 'Interesting' describes things, and 'interest' and 'interests' are noun and verb forms."
    },
    {
      text: "Try to stay ____ — shouting won't solve anything.",
      options: ["still up", "silent up", "peaceful up", "calm"],
      answer: 3,
      explanation: "'Stay calm' means to remain relaxed and in control. 'Silent up', 'peaceful up' and 'still up' are incorrect forms."
    },
    {
      text: "He's too ____ to ask anyone for directions, even when he's lost.",
      options: ["proud", "brave", "confident", "cheerful"],
      answer: 0,
      explanation: "'Too proud' means his pride stops him asking for help. 'Brave' and 'confident' would make asking easier, and 'cheerful' means happy."
    },
    {
      text: "The children were ____ of excitement on the last day of term.",
      options: ["filled", "full", "complete", "loaded up"],
      answer: 1,
      explanation: "'Full of excitement' is the fixed expression. 'Filled' takes 'with', 'complete' means finished, and 'loaded up' is for vehicles."
    },
    {
      text: "It was very ____ of him to carry the old lady's shopping upstairs.",
      options: ["thoughtless", "thinking", "thoughtful", "thought"],
      answer: 2,
      explanation: "'Thoughtful' means kind and considerate. 'Thinking' is a verb form, 'thoughtless' means the opposite, and 'thought' is a noun."
    },
    {
      text: "I'm a bit ____ about my driving test tomorrow morning.",
      options: ["nerving", "nerve", "nervously", "nervous"],
      answer: 3,
      explanation: "'Nervous' is the adjective for feeling worried. 'Nerve' is a noun, 'nervously' is an adverb, and 'nerving' is not a standard adjective."
    },
    {
      text: "She burst ____ tears when she heard the sad news.",
      options: ["into", "in", "onto", "out to"],
      answer: 0,
      explanation: "'Burst into tears' means to suddenly start crying. 'In', 'onto' and 'out to' do not form this fixed expression."
    },
    {
      text: "Miguel is quite ____ — he always believes everything will turn out well.",
      options: ["pessimistic", "optimistic", "realistic up", "romantic up"],
      answer: 1,
      explanation: "'Optimistic' means expecting good things. 'Pessimistic' is the opposite, and 'realistic up' and 'romantic up' are incorrect forms."
    },
    {
      text: "I could tell she was ____ because she kept looking at her watch.",
      options: ["patient", "unpatient", "impatient", "dispatient"],
      answer: 2,
      explanation: "'Impatient' means unable to wait calmly. 'Patient' is the opposite, and 'unpatient' and 'dispatient' are not real words."
    },
    {
      text: "The long journey home was ____ , so I slept most of the way.",
      options: ["tired", "tiredness", "tire", "tiring"],
      answer: 3,
      explanation: "'Tiring' describes something that makes you tired. 'Tired' describes the person, and 'tire' and 'tiredness' are a verb and noun."
    },
    {
      text: "You can trust Leo with your secrets — he's completely ____ .",
      options: ["honest", "curious", "talkative", "proudful"],
      answer: 0,
      explanation: "'Honest' means truthful and trustworthy. 'Curious' means wanting to know things, 'talkative' means speaking a lot (bad for secrets), and 'proudful' is not a word."
    },
    {
      text: "He was ____ his sixteenth birthday party for weeks beforehand.",
      options: ["waiting up", "looking forward to", "expecting on", "hoping on"],
      answer: 1,
      explanation: "'Look forward to' means to feel excited about a future event. 'Waiting up', 'expecting on' and 'hoping on' are incorrect patterns."
    },
    {
      text: "Calm down! There's no need to lose your ____ over such a small thing.",
      options: ["spirit", "mood", "temper", "humour"],
      answer: 2,
      explanation: "'Lose your temper' means to become suddenly angry. 'Mood', 'spirit' and 'humour' do not form this fixed expression."
    },
    {
      text: "She gave me a warm ____ and said everything would be fine.",
      options: ["joke up", "laugh at", "grin at", "smile"],
      answer: 3,
      explanation: "'Give somebody a smile' is the natural collocation. 'Laugh at' and 'grin at' don't fit after 'a warm', and 'joke up' is incorrect."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
