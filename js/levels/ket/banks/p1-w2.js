/* KET Prep extra bank: part1 wave 2 */
(function () {
  var BANK = [
    /* ---------- Sports ---------- */
    {
      text: "My brother ____ tennis every Saturday morning.",
      options: ["plays", "does", "goes", "makes"],
      answer: 0,
      explanation: "'Play tennis' is the correct collocation for ball games. 'Do', 'go' and 'make' are not used with 'tennis'."
    },
    {
      text: "In winter we go ____ in the mountains.",
      options: ["ski", "skiing", "to skiing", "skied"],
      answer: 1,
      explanation: "'Go skiing' follows the 'go + -ing' pattern for sports. 'Go ski', 'go to skiing' and 'go skied' are incorrect."
    },
    {
      text: "Our team ____ the match three to one yesterday.",
      options: ["won", "beat", "made", "passed"],
      answer: 0,
      explanation: "'Win a match' is correct. 'Beat' needs the other team as its object, and 'make' and 'pass' do not fit with 'the match'."
    },
    {
      text: "You need a ____ and a ball to play tennis.",
      options: ["glove", "board", "racket", "net only"],
      answer: 2,
      explanation: "A racket is the thing you hit the ball with in tennis. A board is for other sports, a glove is for baseball, and 'net only' is not enough."
    },
    {
      text: "I go to the ____ twice a week to keep fit.",
      options: ["cinema", "post office", "bank", "gym"],
      answer: 3,
      explanation: "People keep fit at the gym. A cinema, bank and post office are not places for exercise."
    },
    {
      text: "She can ____ very fast. She wins every race at school.",
      options: ["walk", "sit", "run", "stand"],
      answer: 2,
      explanation: "You run in a race, and running fast helps you win. 'Walk', 'sit' and 'stand' do not win races."
    },
    {
      text: "He ____ karate lessons after school on Tuesdays.",
      options: ["has", "plays", "goes", "makes"],
      answer: 0,
      explanation: "'Have lessons' is the correct collocation. 'Play' is for games, 'go' needs an -ing form, and 'make' does not fit."
    },
    {
      text: "There were thousands of people watching the football ____ at the stadium.",
      options: ["party", "lesson", "meeting", "match"],
      answer: 3,
      explanation: "A football match is watched at a stadium. A lesson, meeting and party are not usually held there for fans."
    },
    {
      text: "Wear a ____ on your head when you ride your bike.",
      options: ["scarf", "helmet", "belt", "sock"],
      answer: 1,
      explanation: "A helmet protects your head when cycling. A scarf, belt and sock do not protect your head."
    },
    {
      text: "Our PE teacher says we should do ____ every day to stay healthy.",
      options: ["exercise", "shopping", "homework", "noise"],
      answer: 0,
      explanation: "'Do exercise' keeps you healthy. Shopping and homework are not for health, and 'do noise' is not a correct phrase."
    },
    /* ---------- Animals ---------- */
    {
      text: "A ____ is a big grey animal with very large ears.",
      options: ["mouse", "cat", "elephant", "chicken"],
      answer: 2,
      explanation: "An elephant is big, grey and has large ears. A mouse, cat and chicken are small animals."
    },
    {
      text: "My cat likes to ____ with a small ball of paper.",
      options: ["play", "cook", "read", "drive"],
      answer: 0,
      explanation: "Cats play with small things like paper balls. Cats cannot cook, read or drive."
    },
    {
      text: "Fish can't live out of ____.",
      options: ["food", "water", "grass", "air"],
      answer: 1,
      explanation: "Fish need water to live. Food, grass and air are not what fish must stay in."
    },
    {
      text: "The farmer keeps cows, sheep and ____ on his farm.",
      options: ["sharks", "whales", "dolphins", "horses"],
      answer: 3,
      explanation: "Horses live on farms with cows and sheep. Sharks, whales and dolphins live in the sea."
    },
    {
      text: "I take my dog for a ____ in the park every evening.",
      options: ["fly", "swim", "walk", "drive"],
      answer: 2,
      explanation: "'Take a dog for a walk' is the normal phrase. Dogs are not taken for a swim, fly or drive every evening."
    },
    {
      text: "Birds build their ____ in trees in spring.",
      options: ["houses", "nests", "beds", "farms"],
      answer: 1,
      explanation: "Birds build nests. 'Houses', 'beds' and 'farms' are words for people, not for birds in trees."
    },
    {
      text: "We saw lions and monkeys at the ____ on Sunday.",
      options: ["library", "hospital", "zoo", "station"],
      answer: 2,
      explanation: "A zoo has lions and monkeys. A library, hospital and station do not keep wild animals."
    },
    {
      text: "Be quiet! You'll ____ the baby rabbits if you shout.",
      options: ["feed", "carry", "brush", "frighten"],
      answer: 3,
      explanation: "Shouting can frighten small animals. 'Feed', 'brush' and 'carry' are not results of shouting."
    },
    {
      text: "A ____ says 'woof' and a cat says 'miaow'.",
      options: ["bird", "horse", "fish", "dog"],
      answer: 3,
      explanation: "Dogs say 'woof'. Birds sing, horses neigh, and fish make no sound."
    },
    {
      text: "Don't forget to ____ the fish before you go to school.",
      options: ["feed", "walk", "wash", "drive"],
      answer: 0,
      explanation: "You feed pet fish every day. You cannot walk, wash or drive fish."
    },
    /* ---------- Health and body ---------- */
    {
      text: "I have a bad ____, so I can't sing today.",
      options: ["foot", "throat", "knee", "hand"],
      answer: 1,
      explanation: "A sore throat stops you singing. A foot, knee or hand problem does not affect your voice."
    },
    {
      text: "You should see a ____ if your tooth hurts.",
      options: ["waiter", "farmer", "dentist", "pilot"],
      answer: 2,
      explanation: "A dentist looks after teeth. A farmer, waiter and pilot do not treat teeth."
    },
    {
      text: "My head ____ , so I'm going to lie down.",
      options: ["breaks", "hurts", "falls", "cuts"],
      answer: 1,
      explanation: "'My head hurts' means you feel pain. 'Breaks', 'falls' and 'cuts' are not used to describe a headache."
    },
    {
      text: "The doctor gave me some ____ for my cough.",
      options: ["medicine", "chocolate", "paper", "soap"],
      answer: 0,
      explanation: "Doctors give medicine for illness. Chocolate, paper and soap do not treat a cough."
    },
    {
      text: "Eat more fruit and vegetables to stay ____.",
      options: ["ill", "healthy", "hungry", "tired"],
      answer: 1,
      explanation: "Fruit and vegetables keep you healthy. 'Ill' is the opposite, and 'hungry' and 'tired' are not results of good food."
    },
    {
      text: "He broke his ____ playing football, so he can't walk.",
      options: ["arm", "ear", "leg", "nose"],
      answer: 2,
      explanation: "A broken leg stops you walking. A broken arm, ear or nose does not stop walking."
    },
    {
      text: "Wash your ____ before you eat your dinner.",
      options: ["hands", "shoes", "hair", "clothes"],
      answer: 0,
      explanation: "We wash our hands before eating to be clean. Shoes, hair and clothes are not washed before every meal."
    },
    {
      text: "I feel ____, so I'm going to stay in bed today.",
      options: ["well", "happy", "strong", "ill"],
      answer: 3,
      explanation: "You stay in bed when you feel ill. 'Well', 'happy' and 'strong' are reasons to get up, not stay in bed."
    },
    {
      text: "She wears ____ because she can't see the board at school.",
      options: ["gloves", "earrings", "boots", "glasses"],
      answer: 3,
      explanation: "Glasses help you see better. Gloves, boots and earrings do not help your eyes."
    },
    {
      text: "You look tired. You should ____ a rest.",
      options: ["do", "make", "have", "put"],
      answer: 2,
      explanation: "'Have a rest' is the fixed phrase. 'Do', 'make' and 'put' do not collocate with 'a rest'."
    },
    /* ---------- Places in town ---------- */
    {
      text: "You can borrow books from the ____ for free.",
      options: ["bookshop", "library", "cinema", "café"],
      answer: 1,
      explanation: "A library lends books for free. A bookshop sells books, and a cinema and café do not lend books."
    },
    {
      text: "I need to buy stamps. Is there a ____ office near here?",
      options: ["lost", "police", "ticket", "post"],
      answer: 3,
      explanation: "You buy stamps at a post office. A police office, ticket office and lost property office do not sell stamps."
    },
    {
      text: "We crossed the ____ at the traffic lights.",
      options: ["river", "road", "wall", "roof"],
      answer: 1,
      explanation: "You cross the road at traffic lights. A river, wall and roof are not crossed at traffic lights."
    },
    {
      text: "There's a beautiful old ____ in the centre of town where people pray.",
      options: ["church", "garage", "factory", "car park"],
      answer: 0,
      explanation: "People pray in a church. A garage, factory and car park are not places for praying."
    },
    {
      text: "You can see old paintings and interesting things at the ____.",
      options: ["swimming pool", "museum", "supermarket", "bus station"],
      answer: 1,
      explanation: "A museum shows old paintings and objects. A swimming pool, supermarket and bus station do not."
    },
    {
      text: "Let's meet ____ the cinema at seven o'clock.",
      options: ["on", "under", "outside", "between"],
      answer: 2,
      explanation: "'Outside the cinema' is a normal meeting place. 'On' and 'under' the cinema are impossible, and 'between' needs two places."
    },
    {
      text: "I put some money in the ____ on Monday. Now I can buy the game.",
      options: ["bridge", "park", "hotel", "bank"],
      answer: 3,
      explanation: "You keep money in a bank. A park, hotel and bridge are not places for keeping money."
    },
    {
      text: "Excuse me, how do I ____ to the train station from here?",
      options: ["make", "put", "get", "have"],
      answer: 2,
      explanation: "'How do I get to...?' asks for directions. 'Make', 'put' and 'have' are not used to ask the way."
    },
    {
      text: "Turn left at the corner and the hotel is on your ____.",
      options: ["right", "top", "front", "middle"],
      answer: 0,
      explanation: "'On your right' tells you which side. 'Top', 'front' and 'middle' are not used for sides of a street this way."
    },
    {
      text: "The chemist's is ____ the bank and the bakery.",
      options: ["under", "inside", "between", "over"],
      answer: 2,
      explanation: "'Between' is used with two places, the bank and the bakery. 'Under', 'inside' and 'over' do not fit two buildings on a street."
    },
    /* ---------- Jobs and work ---------- */
    {
      text: "A ____ flies planes to different countries.",
      options: ["driver", "pilot", "sailor", "waiter"],
      answer: 1,
      explanation: "A pilot flies planes. A driver drives cars, a sailor works on ships, and a waiter works in a restaurant."
    },
    {
      text: "The ____ brought us the menu and took our order.",
      options: ["waiter", "teacher", "nurse", "farmer"],
      answer: 0,
      explanation: "A waiter brings menus and takes orders in a restaurant. A teacher, nurse and farmer do not do this job."
    },
    {
      text: "My mum is a ____. She helps sick people at the hospital.",
      options: ["singer", "painter", "nurse", "baker"],
      answer: 2,
      explanation: "A nurse helps sick people in a hospital. A singer, painter and baker do not work with patients."
    },
    {
      text: "The ____ stopped the cars so the children could cross the road.",
      options: ["cook", "shop assistant", "dentist", "police officer"],
      answer: 3,
      explanation: "A police officer can stop traffic. A shop assistant, dentist and cook do not control cars on the road."
    },
    {
      text: "My uncle works ____ a hospital in the city.",
      options: ["on", "in", "under", "of"],
      answer: 1,
      explanation: "'Work in a hospital' means his job is there. 'On', 'under' and 'of' are not used for a workplace like this."
    },
    {
      text: "A ____ grows vegetables and keeps animals.",
      options: ["farmer", "pilot", "dentist", "actor"],
      answer: 0,
      explanation: "A farmer grows food and keeps animals. A pilot, dentist and actor do different jobs."
    },
    {
      text: "She wants to ____ a doctor when she grows up.",
      options: ["make", "become", "get", "turn"],
      answer: 1,
      explanation: "'Become a doctor' means to start being one. 'Make', 'get' and 'turn' are not followed directly by 'a doctor' in this meaning."
    },
    {
      text: "My dad starts ____ at eight and comes home at six.",
      options: ["money", "job", "office", "work"],
      answer: 3,
      explanation: "'Start work' is the fixed phrase. 'Job' and 'office' need 'his', and 'money' does not fit."
    },
    {
      text: "The ____ cut my hair too short last week.",
      options: ["hairdresser", "mechanic", "postman", "chef"],
      answer: 0,
      explanation: "A hairdresser cuts hair. A mechanic repairs cars, a postman brings letters, and a chef cooks food."
    },
    {
      text: "A ____ makes bread and cakes early in the morning.",
      options: ["butcher", "cleaner", "waiter", "baker"],
      answer: 3,
      explanation: "A baker makes bread and cakes. A butcher sells meat, a waiter serves food, and a cleaner cleans rooms."
    },
    /* ---------- Technology and phones ---------- */
    {
      text: "Can you ____ me a message when you arrive?",
      options: ["send", "put", "say", "speak"],
      answer: 0,
      explanation: "'Send a message' is the correct collocation. 'Put', 'say' and 'speak' are not used with 'a message' this way."
    },
    {
      text: "I need to ____ my phone. The battery is nearly empty.",
      options: ["wash", "charge", "cook", "paint"],
      answer: 1,
      explanation: "'Charge' means to put electricity into the battery. 'Wash', 'cook' and 'paint' do not help an empty battery."
    },
    {
      text: "She ____ the internet every day to watch videos.",
      options: ["makes", "plays", "uses", "does"],
      answer: 2,
      explanation: "'Use the internet' is the normal collocation. 'Play', 'make' and 'do' are not used with 'the internet'."
    },
    {
      text: "Turn ____ your phone before the film starts, please.",
      options: ["up", "off", "at", "under"],
      answer: 1,
      explanation: "'Turn off' means to stop a phone working. 'Turn up' makes it louder, and 'at' and 'under' do not make phrasal verbs here."
    },
    {
      text: "I ____ my grandma every Sunday to tell her my news.",
      options: ["call", "look", "listen", "open"],
      answer: 0,
      explanation: "'Call' means to phone someone. 'Look' and 'listen' need prepositions, and 'open' does not fit talking to grandma."
    },
    {
      text: "He took a lovely ____ of the sunset with his phone.",
      options: ["letter", "email", "photo", "game"],
      answer: 2,
      explanation: "You take a photo with a phone camera. A letter, email and game are not 'taken' of a sunset."
    },
    {
      text: "My laptop isn't working. I think it's ____.",
      options: ["quiet", "closed", "empty", "broken"],
      answer: 3,
      explanation: "'Broken' means it does not work. 'Closed', 'empty' and 'quiet' do not explain why a laptop fails to work."
    },
    {
      text: "You can ____ music from this website for free.",
      options: ["download", "climb", "drive", "cook"],
      answer: 0,
      explanation: "'Download' means to copy music from the internet. 'Climb', 'drive' and 'cook' have nothing to do with websites."
    },
    {
      text: "Please speak ____. I can't hear you on the phone.",
      options: ["shorter", "louder", "smaller", "younger"],
      answer: 1,
      explanation: "'Louder' means with more sound, which helps on a bad phone line. 'Shorter', 'smaller' and 'younger' do not help hearing."
    },
    {
      text: "I sent her an ____ with the photos from the party.",
      options: ["email", "answer", "exam", "hour"],
      answer: 0,
      explanation: "You send photos in an email. An answer, exam and hour are not things you send with photos."
    },
    /* ---------- Clothes ---------- */
    {
      text: "It's cold outside, so ____ on your coat.",
      options: ["take", "turn", "give", "put"],
      answer: 3,
      explanation: "'Put on' means to start wearing clothes. 'Take' would need 'off' for the opposite, and 'give' and 'turn' do not fit."
    },
    {
      text: "He always ____ a suit and tie to the office.",
      options: ["dresses", "carries", "wears", "puts"],
      answer: 2,
      explanation: "'Wear' means to have clothes on your body. 'Carry' means to hold, 'dress' needs an object like 'himself', and 'put' needs 'on'."
    },
    {
      text: "These trousers don't ____ me. They're too long.",
      options: ["fit", "match", "wear", "close"],
      answer: 0,
      explanation: "'Fit' means to be the right size. 'Match' is about colours going together, and 'wear' and 'close' do not describe size."
    },
    {
      text: "She bought a blue ____ to wear at her friend's wedding.",
      options: ["boot", "sock", "glove", "dress"],
      answer: 3,
      explanation: "A dress is a common thing to wear at a wedding. One sock, glove or boot is not an outfit."
    },
    {
      text: "Take ____ your wet shoes before you come into the house.",
      options: ["on", "off", "up", "over"],
      answer: 1,
      explanation: "'Take off' means to remove clothes or shoes. 'Take on', 'take up' and 'take over' have different meanings."
    },
    {
      text: "In summer I wear ____ because my feet get hot in boots.",
      options: ["scarves", "gloves", "sandals", "jumpers"],
      answer: 2,
      explanation: "Sandals are open summer shoes. Scarves, gloves and jumpers are warm clothes for winter."
    },
    {
      text: "Your shirt is dirty. Put it in the washing ____.",
      options: ["machine", "cooker", "cupboard", "mirror"],
      answer: 0,
      explanation: "A washing machine cleans clothes. A cooker is for food, a cupboard is for storing, and a mirror is for looking at yourself."
    },
    {
      text: "This green hat looks ____ on you. You should buy it!",
      options: ["terrible", "wrong", "great", "sad"],
      answer: 2,
      explanation: "'Looks great' is a reason to buy the hat. 'Terrible', 'wrong' and 'sad' would be reasons not to buy it."
    },
    {
      text: "I keep my keys and phone in my ____.",
      options: ["pocket", "sleeve", "collar", "button"],
      answer: 0,
      explanation: "A pocket holds small things like keys. A sleeve, collar and button are parts of clothes that cannot hold things."
    },
    {
      text: "He wore a warm ____ around his neck in the snow.",
      options: ["belt", "scarf", "shirt", "shoe"],
      answer: 1,
      explanation: "A scarf goes around your neck in cold weather. A belt is for your waist, and a shirt and shoe are not worn on the neck."
    },
    /* ---------- Basic grammar: verbs and questions ---------- */
    {
      text: "____ you like some more juice?",
      options: ["Do", "Would", "Are", "Have"],
      answer: 1,
      explanation: "'Would you like...?' is the polite offer. 'Do you like' asks about general taste, and 'are' and 'have' do not fit with 'like some more'."
    },
    {
      text: "She ____ speak French, but she can't speak German.",
      options: ["has", "does", "is", "can"],
      answer: 3,
      explanation: "'Can' expresses ability and matches 'can't' later. 'Does', 'is' and 'has' cannot be followed by 'speak' this way."
    },
    {
      text: "There ____ some apples in the bowl on the table.",
      options: ["is", "am", "are", "be"],
      answer: 2,
      explanation: "'Are' is used because 'apples' is plural. 'Is' and 'am' are singular, and 'be' is not a finite form here."
    },
    {
      text: "____ your brother play basketball at school?",
      options: ["Do", "Is", "Does", "Are"],
      answer: 2,
      explanation: "'Does' is used for questions with 'he/she/it'. 'Do' is for I/you/we/they, and 'is' and 'are' are not used with 'play' here."
    },
    {
      text: "We ____ to the beach last Sunday because it rained.",
      options: ["don't go", "doesn't go", "not went", "didn't go"],
      answer: 3,
      explanation: "'Didn't go' is the past simple negative, matching 'last Sunday'. 'Don't' and 'doesn't' are present, and 'not went' is not correct English."
    },
    {
      text: "Look at those clouds! It ____ rain soon.",
      options: ["is going to", "was", "did", "has"],
      answer: 0,
      explanation: "'Is going to' predicts the future from what you can see. 'Was', 'did' and 'has' cannot be followed by 'rain' for a prediction."
    },
    {
      text: "I ____ my keys! I can't open the door.",
      options: ["was lost", "lose", "am losing", "have lost"],
      answer: 3,
      explanation: "'Have lost' shows a past action with a result now. 'Lose' and 'am losing' do not fit, and 'was lost' means someone lost me."
    },
    {
      text: "____ is that girl over there? She's my cousin.",
      options: ["What", "Who", "Where", "When"],
      answer: 1,
      explanation: "'Who' asks about a person, and the answer names a person. 'What', 'where' and 'when' ask about things, places and times."
    },
    {
      text: "You ____ do your homework before you watch TV.",
      options: ["must", "are", "would", "do"],
      answer: 0,
      explanation: "'Must' expresses obligation before another verb. 'Are', 'would' and 'do' do not give this meaning before 'do your homework'."
    },
    {
      text: "How ____ brothers and sisters do you have?",
      options: ["much", "many", "long", "often"],
      answer: 1,
      explanation: "'How many' is used with countable nouns like brothers. 'Much' is for uncountables, 'long' is for time, and 'often' is for frequency."
    },
    /* ---------- Holidays ---------- */
    {
      text: "We stayed at a nice ____ near the beach for a week.",
      options: ["hotel", "school", "office", "factory"],
      answer: 0,
      explanation: "Tourists stay at a hotel on holiday. A school, office and factory are not places for holiday stays."
    },
    {
      text: "Don't forget to ____ your suitcase the night before the trip.",
      options: ["paint", "cook", "read", "pack"],
      answer: 3,
      explanation: "'Pack a suitcase' means to put your things in it. 'Cook', 'read' and 'paint' do not fit a suitcase."
    },
    {
      text: "We sent a ____ to our friends from Italy.",
      options: ["postcard", "pillow", "sandwich", "towel"],
      answer: 0,
      explanation: "People send postcards from holidays. A pillow, sandwich and towel are not sent by post to friends."
    },
    {
      text: "The children made a big ____ castle on the beach.",
      options: ["snow", "sand", "stone", "glass"],
      answer: 1,
      explanation: "You make sand castles on a beach. Snow is for winter, and stone and glass castles are not made by children on beaches."
    },
    {
      text: "I always buy a small ____ for my mum when I travel.",
      options: ["ticket", "passport", "present", "map"],
      answer: 2,
      explanation: "A present is a gift you bring back for someone. A ticket, passport and map are for the traveller, not gifts for mum."
    },
    {
      text: "We went ____ a boat trip around the island.",
      options: ["to", "in", "at", "on"],
      answer: 3,
      explanation: "'Go on a trip' is the fixed phrase. 'In', 'at' and 'to' are not used with 'a boat trip' this way."
    },
    {
      text: "The sea was warm, so we ____ in it all afternoon.",
      options: ["swam", "flew", "drove", "cooked"],
      answer: 0,
      explanation: "You swim in the sea. You cannot fly, drive or cook in the sea."
    },
    {
      text: "Our hotel room had a great ____ of the mountains.",
      options: ["view", "look", "watch", "sight"],
      answer: 0,
      explanation: "'A view of' is what you can see from a place. 'Look', 'watch' and 'sight' are not used with 'of the mountains' after 'had a great'."
    },
    {
      text: "We're going camping, so we need a ____ to sleep in.",
      options: ["car park", "boat", "tent", "kitchen"],
      answer: 2,
      explanation: "Campers sleep in a tent. A boat, car park and kitchen are not for camping sleep."
    },
    {
      text: "The tour ____ showed us the old castle and told us its history.",
      options: ["ticket", "bag", "map", "guide"],
      answer: 3,
      explanation: "A tour guide shows visitors around and explains history. A ticket, map and bag cannot talk."
    },
    /* ---------- Feelings and adjectives ---------- */
    {
      text: "She was very ____ when she won first prize.",
      options: ["sad", "happy", "angry", "bored"],
      answer: 1,
      explanation: "Winning a prize makes you happy. 'Sad', 'angry' and 'bored' are not normal feelings after winning."
    },
    {
      text: "I'm ____ of spiders. I always run away from them.",
      options: ["afraid", "proud", "sure", "full"],
      answer: 0,
      explanation: "'Afraid of' means frightened by something. 'Proud of', 'sure of' and 'full of' do not explain running away."
    },
    {
      text: "The film was so ____ that I fell asleep.",
      options: ["exciting", "funny", "boring", "fast"],
      answer: 2,
      explanation: "A boring film can make you sleep. 'Exciting', 'funny' and 'fast' films keep you awake."
    },
    {
      text: "He was ____ because his team lost the final.",
      options: ["glad", "sad", "lucky", "hungry"],
      answer: 1,
      explanation: "Losing a final makes you sad. 'Glad' and 'lucky' are positive, and 'hungry' is about food."
    },
    {
      text: "Thank you so much! That's very ____ of you.",
      options: ["cloudy", "tall", "heavy", "kind"],
      answer: 3,
      explanation: "'Very kind of you' is the fixed phrase for thanking someone. 'Tall', 'heavy' and 'cloudy' do not describe helpful behaviour."
    },
    {
      text: "The baby is ____ because she wants her milk.",
      options: ["crying", "laughing", "singing", "dancing"],
      answer: 0,
      explanation: "A hungry baby cries. 'Laughing', 'singing' and 'dancing' are not signs a baby wants milk."
    },
    {
      text: "I was ____ to hear that you passed all your exams. Well done!",
      options: ["angry", "pleased", "worried", "frightened"],
      answer: 1,
      explanation: "'Pleased' fits good news like passing exams. 'Angry', 'worried' and 'frightened' are negative feelings."
    },
    {
      text: "This suitcase is too ____ for me to carry. Can you help?",
      options: ["light", "cheap", "heavy", "soft"],
      answer: 2,
      explanation: "You need help with a heavy suitcase. 'Light', 'cheap' and 'soft' suitcases are easy to carry."
    },
    {
      text: "Don't be ____ with your sister. She didn't break your toy.",
      options: ["angry", "happy", "polite", "friendly"],
      answer: 0,
      explanation: "'Angry with' someone fits when you think they did something bad. 'Happy', 'polite' and 'friendly' do not need this warning."
    },
    {
      text: "It was a ____ day, so we stayed inside and played cards.",
      options: ["lovely", "sunny", "rainy", "perfect"],
      answer: 2,
      explanation: "Rainy weather makes people stay inside. 'Lovely', 'sunny' and 'perfect' days are for going out."
    },
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
