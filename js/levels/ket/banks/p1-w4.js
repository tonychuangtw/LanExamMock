/* KET Prep extra bank: part1 wave 4 */
(function () {
  var BANK = [
    /* ---------- Communication and languages ---------- */
    {
      text: "Can you ____ that again, please? I didn't hear you.",
      options: ["say", "talk", "speak", "tell"],
      answer: 0,
      explanation: "'Say that again' is the correct request. 'Talk' and 'speak' do not take 'that' as an object, and 'tell' needs a person after it."
    },
    {
      text: "She can ____ three languages: English, Spanish and Chinese.",
      options: ["say", "tell", "speak", "talk"],
      answer: 2,
      explanation: "'Speak a language' is the correct collocation. 'Say', 'tell' and 'talk' are not used with names of languages this way."
    },
    {
      text: "My grandma ____ me a story every night when I was small.",
      options: ["said", "told", "spoke", "talked"],
      answer: 1,
      explanation: "'Tell someone a story' is correct. 'Say', 'speak' and 'talk' cannot take both a person and 'a story' like this."
    },
    {
      text: "What does this word ____? I can't find it in my dictionary.",
      options: ["know", "want", "think", "mean"],
      answer: 3,
      explanation: "'What does this word mean?' asks for the meaning. 'Want', 'think' and 'know' are not used to ask about a word's meaning."
    },
    {
      text: "I wrote a ____ to my pen friend in Australia.",
      options: ["letter", "book", "newspaper", "sign"],
      answer: 0,
      explanation: "You write letters to pen friends. A book, newspaper and sign are not written to one friend."
    },
    {
      text: "Sorry, I don't ____ . Can you explain it more slowly?",
      options: ["understand", "stand", "listen", "open"],
      answer: 0,
      explanation: "'I don't understand' means the meaning is not clear to you. 'Stand', 'listen' and 'open' do not fit asking for an explanation."
    },
    {
      text: "How do you ____ your name? Is it with one 'n' or two?",
      options: ["play", "count", "draw", "spell"],
      answer: 3,
      explanation: "'Spell' means to say the letters of a word. 'Count', 'draw' and 'play' are not about letters in a name."
    },
    {
      text: "He ____ to his friend about the football match for an hour.",
      options: ["said", "talked", "told", "asked"],
      answer: 1,
      explanation: "'Talk to someone about something' is correct. 'Say' and 'tell' do not use 'to' this way, and 'ask' is for questions."
    },
    {
      text: "Please ____ your hand if you know the answer.",
      options: ["put down", "put up", "take off", "turn off"],
      answer: 1,
      explanation: "'Put up your hand' is the classroom phrase for answering. 'Put down', 'take off' and 'turn off' do not fit."
    },
    {
      text: "Could you speak more ____? You're talking too fast for me.",
      options: ["slowly", "quickly", "loudly", "quietly"],
      answer: 0,
      explanation: "'Slowly' is what you ask for when someone talks too fast. 'Quickly' is the problem itself, and 'loudly' and 'quietly' are about volume."
    },
    /* ---------- Birthdays and celebrations ---------- */
    {
      text: "We sang 'Happy Birthday' and she blew out the ____ on her cake.",
      options: ["matches", "windows", "lights", "candles"],
      answer: 3,
      explanation: "You blow out candles on a birthday cake. Windows and lights are not on cakes, and matches light the candles."
    },
    {
      text: "I got lots of ____ for my birthday, including a new bike.",
      options: ["presents", "lessons", "exams", "problems"],
      answer: 0,
      explanation: "People receive presents on their birthday. Lessons, exams and problems are not birthday gifts."
    },
    {
      text: "We put up colourful ____ in the living room for the party.",
      options: ["balloons", "potatoes", "spoons", "coats"],
      answer: 0,
      explanation: "Balloons are party decorations. Potatoes, spoons and coats are not used to decorate for a party."
    },
    {
      text: "Everyone ____ 'Congratulations!' when my sister passed her driving test.",
      options: ["closed", "slept", "shouted", "washed"],
      answer: 2,
      explanation: "People shout 'Congratulations!' for good news. 'Slept', 'closed' and 'washed' do not fit celebrating."
    },
    {
      text: "My birthday ____ is chocolate with strawberries on top.",
      options: ["card", "game", "song", "cake"],
      answer: 3,
      explanation: "A cake can be chocolate with strawberries. A card, song and game are not made of chocolate."
    },
    {
      text: "We had a big family ____ for my grandad's seventieth birthday.",
      options: ["dinner", "homework", "test", "queue"],
      answer: 0,
      explanation: "Families have a special dinner for big birthdays. Homework, a test and a queue are not celebrations."
    },
    {
      text: "Don't tell Anna about the party. It's a ____!",
      options: ["question", "mistake", "surprise", "reason"],
      answer: 2,
      explanation: "A surprise party must stay secret. A mistake, question and reason are not reasons to keep quiet about a party."
    },
    {
      text: "She ____ her birthday with a picnic in the park.",
      options: ["celebrated", "forgot", "closed", "washed"],
      answer: 0,
      explanation: "'Celebrate a birthday' means to do something special for it. 'Forget', 'close' and 'wash' do not fit a picnic party."
    },
    {
      text: "I sent my cousin a birthday ____ with a funny picture on it.",
      options: ["card", "bill", "menu", "map"],
      answer: 0,
      explanation: "A birthday card has pictures and good wishes. A bill, menu and map are not sent for birthdays."
    },
    {
      text: "At New Year we watched the ____ light up the night sky.",
      options: ["printers", "cookers", "fridges", "fireworks"],
      answer: 3,
      explanation: "Fireworks light up the sky at New Year. Cookers, fridges and printers are machines at home."
    },
    /* ---------- Money and prices ---------- */
    {
      text: "I can't buy this game because I don't have ____ money.",
      options: ["enough", "too", "very", "many"],
      answer: 0,
      explanation: "'Enough money' means the amount you need. 'Too' and 'very' need an adjective, and 'many' is for countable nouns."
    },
    {
      text: "This café is quite ____. A sandwich only costs two pounds.",
      options: ["expensive", "cheap", "far", "busy"],
      answer: 1,
      explanation: "Two pounds for a sandwich is a low price, so it is cheap. 'Expensive' is the opposite, and 'far' and 'busy' are not about price."
    },
    {
      text: "How much does this bag ____? Is it on sale?",
      options: ["pay", "cost", "spend", "buy"],
      answer: 1,
      explanation: "Things cost money. People 'pay', 'spend' and 'buy', but an object 'costs'."
    },
    {
      text: "I ____ all my pocket money on comics last week.",
      options: ["paid", "cost", "spent", "sold"],
      answer: 2,
      explanation: "'Spend money on something' is correct. 'Cost' is for things, 'paid' needs 'for', and 'sold' means giving things for money."
    },
    {
      text: "My parents give me pocket ____ every Saturday.",
      options: ["money", "coins", "price", "purse"],
      answer: 0,
      explanation: "'Pocket money' is the fixed phrase for money children get. 'Coins', 'price' and 'purse' do not make this phrase."
    },
    {
      text: "I'm ____ money to buy a new skateboard.",
      options: ["losing", "saving", "washing", "breaking"],
      answer: 1,
      explanation: "'Saving money' means keeping it to buy something later. 'Losing', 'washing' and 'breaking' do not help you buy things."
    },
    {
      text: "She ____ her old bike to her neighbour for thirty pounds.",
      options: ["bought", "paid", "spent", "sold"],
      answer: 3,
      explanation: "'Sold' means gave it for money. 'Bought' is the opposite, and 'spent' and 'paid' do not take 'her old bike' as an object this way."
    },
    {
      text: "The museum is ____ on Sundays, so we don't need to pay.",
      options: ["free", "empty", "broken", "heavy"],
      answer: 0,
      explanation: "'Free' means you pay nothing. 'Empty', 'broken' and 'heavy' are not about paying."
    },
    {
      text: "Have you got any ____ for the drinks machine? It doesn't take notes.",
      options: ["cards", "coins", "cheques", "papers"],
      answer: 1,
      explanation: "A drinks machine that refuses notes needs coins. Cards, cheques and papers do not work in it."
    },
    {
      text: "I lost my ____ with all my money and my bus ticket in it.",
      options: ["brush", "bottle", "wallet", "towel"],
      answer: 2,
      explanation: "A wallet holds money and tickets. A bottle, brush and towel do not hold money."
    },
    /* ---------- Comparatives and superlatives ---------- */
    {
      text: "February is the ____ month of the year.",
      options: ["shorter", "short", "shortest", "more short"],
      answer: 2,
      explanation: "'The shortest' is the superlative with 'the'. 'Shorter' and 'short' are not superlatives, and 'more short' is incorrect."
    },
    {
      text: "This book is ____ interesting than the film.",
      options: ["much", "more", "most", "very"],
      answer: 1,
      explanation: "'More interesting than' is the comparative of a long adjective. 'Much', 'most' and 'very' do not work with 'than' here."
    },
    {
      text: "My bag is heavy, but yours is even ____.",
      options: ["heavier", "heavy", "heaviest", "more heavy"],
      answer: 0,
      explanation: "'Heavier' is the comparative form after 'even'. 'Heavy' is not comparative, 'heaviest' is superlative, and 'more heavy' is wrong."
    },
    {
      text: "Peter is the ____ boy in our class. He always wins at running.",
      options: ["faster", "fast", "fastest", "most fast"],
      answer: 2,
      explanation: "'The fastest' is the superlative for one person in a group. 'Faster' and 'fast' are not superlatives, and 'most fast' is incorrect."
    },
    {
      text: "Today is ____ than yesterday, so we don't need our jackets.",
      options: ["warm", "warmer", "warmest", "more warm"],
      answer: 1,
      explanation: "'Warmer than' compares two days. 'Warm' and 'warmest' do not go with 'than', and 'more warm' is incorrect."
    },
    {
      text: "This is the ____ pizza I have ever eaten!",
      options: ["good", "better", "best", "well"],
      answer: 2,
      explanation: "'The best' is the superlative of 'good'. 'Good' and 'better' do not fit after 'the' with 'ever', and 'well' is an adverb."
    },
    {
      text: "My handwriting is bad, but my brother's is even ____.",
      options: ["more bad", "worst", "badder", "worse"],
      answer: 3,
      explanation: "'Worse' is the comparative of 'bad'. 'Worst' is the superlative, and 'badder' and 'more bad' are incorrect forms."
    },
    {
      text: "An elephant is much ____ than a horse.",
      options: ["big", "biggest", "bigger", "more big"],
      answer: 2,
      explanation: "'Bigger than' is the correct comparative. 'Big' and 'biggest' do not go with 'than', and 'more big' is wrong."
    },
    {
      text: "Maths is ____ difficult subject for me. I always need help with it.",
      options: ["the most", "the more", "most", "more"],
      answer: 0,
      explanation: "'The most difficult' is the superlative of a long adjective. 'The more', 'most' alone and 'more' do not fit this superlative pattern."
    },
    {
      text: "My new phone is ____ as my old one, so it fits in my small pocket.",
      options: ["smaller", "so small", "the smallest", "as small"],
      answer: 3,
      explanation: "'As small as' compares two equal things. 'Smaller', 'the smallest' and 'so small' do not go with the second 'as'."
    },
    /* ---------- Adverbs and frequency ---------- */
    {
      text: "I ____ eat fish. I really don't like it.",
      options: ["always", "never", "usually", "often"],
      answer: 1,
      explanation: "'Never' matches not liking fish. 'Always', 'usually' and 'often' mean you eat it many times."
    },
    {
      text: "She is ____ late for school. She arrives at half past eight every day.",
      options: ["never", "often", "sometimes", "usually"],
      answer: 0,
      explanation: "Arriving at the same early time every day means she is never late. 'Often', 'sometimes' and 'usually' suggest she is late."
    },
    {
      text: "How ____ do you visit your cousins? Once a month?",
      options: ["much", "long", "often", "old"],
      answer: 2,
      explanation: "'How often' asks about frequency, like 'once a month'. 'How much', 'how long' and 'how old' ask different questions."
    },
    {
      text: "We ____ go to the cinema on Fridays, but last Friday we stayed home.",
      options: ["never", "usually", "once", "hardly"],
      answer: 1,
      explanation: "'Usually' means most Fridays but not always. 'Never' and 'once' do not fit, and 'hardly' needs 'ever'."
    },
    {
      text: "He drives very ____, so I feel safe in his car.",
      options: ["caring", "careful", "care", "carefully"],
      answer: 3,
      explanation: "'Carefully' is the adverb describing how he drives. 'Careful' is an adjective, and 'care' and 'caring' do not fit here."
    },
    {
      text: "The children played ____ in the garden all afternoon.",
      options: ["happily", "happy", "happiness", "happier"],
      answer: 0,
      explanation: "'Happily' is the adverb describing how they played. 'Happy' is an adjective, 'happiness' is a noun, and 'happier' is comparative."
    },
    {
      text: "____ I have cereal for breakfast, but today I had eggs.",
      options: ["Never", "Normally", "Once", "Ever"],
      answer: 1,
      explanation: "'Normally' means on most days, which contrasts with today. 'Never', 'once' and 'ever' do not fit this contrast."
    },
    {
      text: "Please walk ____ on the wet floor, or you will fall.",
      options: ["angrily", "loudly", "quickly", "slowly"],
      answer: 3,
      explanation: "'Slowly' is the safe way to walk on a wet floor. 'Quickly' would make you fall, and 'loudly' and 'angrily' do not stop you falling."
    },
    {
      text: "I go swimming twice ____ week, on Tuesdays and Saturdays.",
      options: ["a", "the", "in", "for"],
      answer: 0,
      explanation: "'Twice a week' is the fixed frequency phrase. 'The', 'in' and 'for' are not used after 'twice' this way."
    },
    {
      text: "She sings very ____. Everyone loves listening to her.",
      options: ["badly", "worse", "good", "well"],
      answer: 3,
      explanation: "'Well' is the adverb of 'good' and fits people loving her singing. 'Badly' and 'worse' are negative, and 'good' is an adjective."
    },
    /* ---------- Past simple stories ---------- */
    {
      text: "Last night I ____ a strange noise in the kitchen.",
      options: ["hear", "heard", "hears", "hearing"],
      answer: 1,
      explanation: "'Heard' is the past simple, matching 'last night'. 'Hear', 'hears' and 'hearing' are not past forms."
    },
    {
      text: "We ____ to the seaside by train two weeks ago.",
      options: ["go", "goes", "went", "gone"],
      answer: 2,
      explanation: "'Went' is the past simple of 'go', matching 'two weeks ago'. 'Go' and 'goes' are present, and 'gone' needs 'have'."
    },
    {
      text: "She ____ her leg when she fell off her horse.",
      options: ["broke", "breaks", "break", "broken"],
      answer: 0,
      explanation: "'Broke' is the past simple of 'break'. 'Breaks' and 'break' are present, and 'broken' needs 'has' or 'had'."
    },
    {
      text: "Yesterday morning I ____ up very late and missed breakfast.",
      options: ["wake", "woke", "wakes", "waking"],
      answer: 1,
      explanation: "'Woke up' is the past simple, matching 'yesterday morning'. 'Wake', 'wakes' and 'waking' are not past simple forms."
    },
    {
      text: "They ____ a fantastic time at the funfair last Saturday.",
      options: ["having", "have", "has", "had"],
      answer: 3,
      explanation: "'Had a fantastic time' is past simple for 'last Saturday'. 'Have', 'has' and 'having' are not past forms."
    },
    {
      text: "He ____ me a funny message during the lesson, and I laughed.",
      options: ["sent", "send", "sends", "sending"],
      answer: 0,
      explanation: "'Sent' is the past simple of 'send'. 'Send' and 'sends' are present, and 'sending' needs 'was' or 'is'."
    },
    {
      text: "When I opened the box, I ____ a little kitten inside!",
      options: ["find", "found", "finds", "finding"],
      answer: 1,
      explanation: "'Found' is the past simple of 'find', matching 'opened'. 'Find', 'finds' and 'finding' are not past simple."
    },
    {
      text: "We ____ pizza and watched films at the sleepover.",
      options: ["eaten", "eat", "eats", "ate"],
      answer: 3,
      explanation: "'Ate' is the past simple of 'eat', matching 'watched'. 'Eat' and 'eats' are present, and 'eaten' needs 'have'."
    },
    {
      text: "The bus ____ early, so I had to run to catch it.",
      options: ["leaves", "leave", "left", "leaving"],
      answer: 2,
      explanation: "'Left' is the past simple of 'leave', matching 'had to run'. 'Leaves' and 'leave' are present, and 'leaving' is not a finite past."
    },
    {
      text: "I ____ my umbrella at home, so I got wet in the rain.",
      options: ["forgot", "forget", "forgets", "forgetting"],
      answer: 0,
      explanation: "'Forgot' is the past simple of 'forget', matching 'got wet'. 'Forget' and 'forgets' are present, and 'forgetting' is not finite here."
    },
    /* ---------- In the classroom ---------- */
    {
      text: "The teacher wrote the new words on the ____ with a marker.",
      options: ["board", "desk", "chair", "window"],
      answer: 0,
      explanation: "Teachers write on the board for the class to see. A desk, chair and window are not for writing lessons on."
    },
    {
      text: "I made a mistake, so I used a ____ to remove it.",
      options: ["ruler", "rubber", "pen", "bag"],
      answer: 1,
      explanation: "A rubber removes pencil mistakes. A ruler draws lines, a pen cannot remove marks, and a bag carries things."
    },
    {
      text: "Use a ____ to draw a straight line under the title.",
      options: ["rubber", "scissors", "ruler", "glue"],
      answer: 2,
      explanation: "A ruler helps you draw straight lines. A rubber removes marks, scissors cut, and glue sticks things."
    },
    {
      text: "Cut out the picture with your ____ and stick it in your book.",
      options: ["sharpener", "pencil", "crayons", "scissors"],
      answer: 3,
      explanation: "Scissors are for cutting paper. A pencil and crayons are for drawing, and a sharpener is for pencils."
    },
    {
      text: "My pencil is broken. Can I use your ____?",
      options: ["eraser", "sharpener", "paper", "chair"],
      answer: 1,
      explanation: "A sharpener fixes a broken pencil point. An eraser, paper and chair cannot sharpen a pencil."
    },
    {
      text: "Please open your ____ and copy the sentences from the board.",
      options: ["notebooks", "lunchboxes", "windows", "umbrellas"],
      answer: 0,
      explanation: "Students copy sentences into notebooks. Lunchboxes, windows and umbrellas are not for writing."
    },
    {
      text: "The students sat at their ____ and waited for the lesson to begin.",
      options: ["boards", "desks", "roofs", "doors"],
      answer: 1,
      explanation: "Students sit at desks in a classroom. Boards, roofs and doors are not for sitting at."
    },
    {
      text: "Listen ____ to the question before you answer.",
      options: ["careful", "careless", "carefree", "carefully"],
      answer: 3,
      explanation: "'Listen carefully' uses the adverb form. 'Careful' is an adjective, and 'careless' and 'carefree' have the wrong meaning and form."
    },
    {
      text: "We had an English ____ today, and I think I answered everything correctly.",
      options: ["holiday", "break", "test", "song"],
      answer: 2,
      explanation: "You answer questions in a test. A holiday, break and song do not have answers."
    },
    {
      text: "Our class is going on a school ____ to the science museum.",
      options: ["trip", "shop", "shelf", "team"],
      answer: 0,
      explanation: "'A school trip' is a visit somewhere with the class. 'Shop', 'shelf' and 'team' do not mean a visit."
    },
    /* ---------- Housework and chores ---------- */
    {
      text: "Can you ____ the table, please? Dinner is nearly ready.",
      options: ["lay", "wash", "cook", "eat"],
      answer: 0,
      explanation: "'Lay the table' means to put plates and forks on it. 'Wash', 'cook' and 'eat' do not mean preparing the table."
    },
    {
      text: "It's your turn to ____ the dishes tonight.",
      options: ["watch", "wash", "water", "wear"],
      answer: 1,
      explanation: "'Wash the dishes' means to clean them after eating. 'Watch', 'water' and 'wear' do not fit dishes."
    },
    {
      text: "I have to ____ my bed every morning before school.",
      options: ["cook", "do", "build", "make"],
      answer: 3,
      explanation: "'Make the bed' means to tidy it. 'Do', 'build' and 'cook' are not used with 'bed' in this meaning."
    },
    {
      text: "Dad is in the garden. He's ____ the flowers because it's been dry.",
      options: ["watering", "washing", "painting", "counting"],
      answer: 0,
      explanation: "'Watering' means giving plants water. 'Washing', 'painting' and 'counting' are not done to flowers in dry weather."
    },
    {
      text: "Please take out the ____ . The bin in the kitchen is full.",
      options: ["curtains", "furniture", "rubbish", "carpet"],
      answer: 2,
      explanation: "You take out the rubbish when the bin is full. Furniture, curtains and a carpet are not taken out daily."
    },
    {
      text: "My room was a mess, so I spent an hour ____ it up.",
      options: ["tidying", "dirtying", "sleeping", "shouting"],
      answer: 0,
      explanation: "'Tidy up' means to make a place clean and neat. 'Dirtying' is the opposite, and 'sleeping' and 'shouting' do not clean a room."
    },
    {
      text: "Mum asked me to ____ the floor because it was dirty.",
      options: ["sweep", "sleep", "steal", "smell"],
      answer: 0,
      explanation: "'Sweep the floor' means to clean it with a brush. 'Sleep', 'steal' and 'smell' do not clean a floor."
    },
    {
      text: "Hang the wet clothes ____ so they can dry in the sun.",
      options: ["inside", "outside", "under", "behind"],
      answer: 1,
      explanation: "Clothes dry outside in the sun. 'Inside' has no sun, and 'under' and 'behind' need an object."
    },
    {
      text: "Can you ____ me with the shopping bags? They're really heavy.",
      options: ["thank", "ask", "stop", "help"],
      answer: 3,
      explanation: "'Help me with' means to carry them together. 'Ask', 'stop' and 'thank' do not solve the heavy-bag problem."
    },
    {
      text: "I ____ my dirty clothes in the basket, not on the floor.",
      options: ["throw away", "put", "give up", "turn on"],
      answer: 1,
      explanation: "'Put clothes in the basket' is correct. 'Throw away' means to put in the rubbish, and 'give up' and 'turn on' do not fit."
    },
    /* ---------- At the café ---------- */
    {
      text: "I'd like a ____ of hot chocolate with cream on top, please.",
      options: ["mug", "plate", "fork", "bowl"],
      answer: 0,
      explanation: "Hot chocolate is served in a mug. A plate, fork and bowl are not used for hot drinks."
    },
    {
      text: "____ else? No, thank you, that's all.",
      options: ["Everything", "Nothing", "Anything", "Something's"],
      answer: 2,
      explanation: "'Anything else?' is the server's question in a café. 'Nothing', 'everything' and 'something's' do not form this question."
    },
    {
      text: "Let's sit at the table by the ____ so we can watch the street.",
      options: ["window", "kitchen", "toilet", "cooker"],
      answer: 0,
      explanation: "A window table lets you watch the street. The kitchen, toilet and cooker do not give a street view."
    },
    {
      text: "This coffee is too ____ for me. Can I have some more milk in it?",
      options: ["strong", "weak", "long", "young"],
      answer: 0,
      explanation: "'Strong' coffee has a lot of taste, so you add milk. 'Weak' coffee needs less milk, and 'long' and 'young' do not describe coffee."
    },
    {
      text: "I'll have a cheese and tomato ____, please, and a lemonade.",
      options: ["jacket", "shampoo", "newspaper", "sandwich"],
      answer: 3,
      explanation: "A sandwich can be cheese and tomato. Shampoo, a newspaper and a jacket are not café food."
    },
    {
      text: "Is this seat ____? Can I sit here?",
      options: ["free", "cold", "late", "tall"],
      answer: 0,
      explanation: "'Is this seat free?' asks if nobody is using it. 'Cold', 'late' and 'tall' do not ask about using a seat."
    },
    {
      text: "The café was full, so we had to ____ in a queue for a table.",
      options: ["sing", "run", "wait", "cook"],
      answer: 2,
      explanation: "You wait in a queue when a place is full. 'Run', 'sing' and 'cook' are not done in a queue for a table."
    },
    {
      text: "My tea is too hot to drink. I'll wait for it to ____ down.",
      options: ["cool", "warm", "sit", "slow"],
      answer: 0,
      explanation: "'Cool down' means to become less hot. 'Warm' is the opposite, and 'sit down' and 'slow down' are for people and speed."
    },
    {
      text: "Do you want ice ____ in your cola?",
      options: ["cubes", "boxes", "balls", "cakes"],
      answer: 0,
      explanation: "Ice cubes go in cold drinks. Boxes and balls are not put in drinks, and ice cakes is not a normal phrase for drinks."
    },
    {
      text: "We shared a ____ of chocolate ice cream with two spoons.",
      options: ["kettle", "glass", "cup", "bowl"],
      answer: 3,
      explanation: "Ice cream is served in a bowl. A glass and cup are for drinks, and a kettle boils water."
    },
    /* ---------- Getting around town ---------- */
    {
      text: "Go ____ on this road until you see the school on the left.",
      options: ["straight", "curly", "round", "deep"],
      answer: 0,
      explanation: "'Go straight on' means continue without turning. 'Curly', 'round' and 'deep' are not used for directions this way."
    },
    {
      text: "The supermarket is ____ the cinema, just on the other side of the road.",
      options: ["on top of", "inside", "opposite", "under"],
      answer: 2,
      explanation: "'Opposite' means facing it across the road. 'Inside', 'on top of' and 'under' are not across the road."
    },
    {
      text: "You can't park here. Look at that ____ - it says 'No Parking'.",
      options: ["sign", "tree", "cloud", "bird"],
      answer: 0,
      explanation: "A sign gives information like 'No Parking'. A tree, cloud and bird do not show written rules."
    },
    {
      text: "We got ____ in the old town because we didn't have a map.",
      options: ["lost", "found", "ready", "married"],
      answer: 0,
      explanation: "'Get lost' means you don't know where you are. 'Found', 'ready' and 'married' do not fit having no map."
    },
    {
      text: "Take the second street on the ____ , just after the bank.",
      options: ["roof", "back", "bottom", "left"],
      answer: 3,
      explanation: "'On the left' is a direction for turning. 'Back', 'bottom' and 'roof' are not street directions."
    },
    {
      text: "It's only a ten-minute ____ from my house to school on foot.",
      options: ["walk", "fly", "swim", "sail"],
      answer: 0,
      explanation: "'A ten-minute walk' fits going on foot. 'Fly', 'swim' and 'sail' are not how you go to school on foot."
    },
    {
      text: "Wait for the green man before you ____ the street.",
      options: ["carry", "close", "cross", "climb"],
      answer: 2,
      explanation: "You cross the street when the green man shows. 'Close', 'carry' and 'climb' are not done to a street."
    },
    {
      text: "The town ____ has a fountain and lots of benches.",
      options: ["square", "circle", "line", "point"],
      answer: 0,
      explanation: "A town square is an open place with fountains and benches. 'Circle', 'line' and 'point' are not names for this place."
    },
    {
      text: "Is it ____ to walk there, or should we take the bus?",
      options: ["far", "tall", "deep", "wide"],
      answer: 0,
      explanation: "'Is it far?' asks about distance. 'Tall', 'deep' and 'wide' do not ask how long the journey is."
    },
    {
      text: "There's a big car ____ behind the shopping centre.",
      options: ["cinema", "farm", "school", "park"],
      answer: 3,
      explanation: "'Car park' is the place to leave your car. 'Car farm', 'car school' and 'car cinema' are not real places."
    },
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
