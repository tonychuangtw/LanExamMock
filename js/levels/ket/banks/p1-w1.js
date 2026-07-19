/* KET Prep extra bank: part1 wave 1 */
(function () {
  var BANK = [
    /* ---------- Daily routines ---------- */
    {
      text: "I ____ up at seven o'clock every morning.",
      options: ["go", "get", "take", "put"],
      answer: 1,
      explanation: "'Get up' means to leave your bed in the morning. 'Go up', 'take up' and 'put up' do not have this meaning."
    },
    {
      text: "She always ____ her teeth before she goes to bed.",
      options: ["washes", "cleans", "brushes", "makes"],
      answer: 2,
      explanation: "'Brush your teeth' is the normal collocation. We do not usually say 'wash', 'clean' or 'make' your teeth in everyday English."
    },
    {
      text: "My father ____ a shower every morning before work.",
      options: ["does", "makes", "gets", "takes"],
      answer: 3,
      explanation: "'Take a shower' is the correct collocation. 'Do', 'make' and 'get' are not used with 'a shower' in this way."
    },
    {
      text: "We ____ lunch at school at half past twelve.",
      options: ["have", "do", "make", "take"],
      answer: 0,
      explanation: "'Have lunch' means to eat lunch. 'Make lunch' means to prepare it, and 'do' and 'take' do not collocate with 'lunch' here."
    },
    {
      text: "Please ____ off the light when you leave the room.",
      options: ["close", "turn", "stop", "open"],
      answer: 1,
      explanation: "'Turn off' is the phrasal verb for stopping a light or machine. 'Close', 'stop' and 'open' are not used with 'off' for lights."
    },
    {
      text: "I usually go to ____ at ten o'clock at night.",
      options: ["sleep", "rest", "bed", "dream"],
      answer: 2,
      explanation: "'Go to bed' is the fixed phrase for the time you lie down at night. 'Go to sleep' means to start sleeping, but with 'at ten o'clock' about routine, 'bed' fits; 'rest' and 'dream' are wrong here."
    },
    {
      text: "My mum ____ breakfast for us every day.",
      options: ["does", "puts", "gives", "makes"],
      answer: 3,
      explanation: "'Make breakfast' means to prepare it. 'Do', 'put' and 'give' do not collocate with 'breakfast' in this meaning."
    },
    {
      text: "He ____ his homework after dinner every evening.",
      options: ["plays", "makes", "writes", "does"],
      answer: 3,
      explanation: "'Do homework' is the standard collocation. 'Make', 'write' and 'play' are not used with 'homework'."
    },
    {
      text: "I'm tired because I went to bed very ____ last night.",
      options: ["late", "slow", "long", "far"],
      answer: 0,
      explanation: "'Late' means after the usual time. 'Slow', 'long' and 'far' do not describe the time you go to bed."
    },
    {
      text: "She ____ the bus to school at eight o'clock.",
      options: ["rides", "goes", "catches", "drives"],
      answer: 2,
      explanation: "'Catch the bus' means to get on it at the right time. 'Ride' is unusual for buses, 'go' needs 'by bus', and 'drive' is for the driver."
    },
    /* ---------- Family ---------- */
    {
      text: "My mother's brother is my ____.",
      options: ["grandfather", "cousin", "nephew", "uncle"],
      answer: 3,
      explanation: "Your mother's brother is your uncle. A cousin is an uncle's child, a nephew is your brother's or sister's son, and a grandfather is a parent's father."
    },
    {
      text: "My aunt has a baby girl, so now I have a new ____.",
      options: ["uncle", "sister", "cousin", "daughter"],
      answer: 2,
      explanation: "Your aunt's child is your cousin. An uncle is an adult man, a sister has the same parents as you, and a daughter is your own child."
    },
    {
      text: "My grandparents ____ in a small village near the sea.",
      options: ["stay", "live", "sit", "keep"],
      answer: 1,
      explanation: "'Live' is used for your permanent home. 'Stay' is for short visits, and 'sit' and 'keep' do not describe where your home is."
    },
    {
      text: "I look ____ my little brother when my parents are at work.",
      options: ["for", "at", "after", "up"],
      answer: 2,
      explanation: "'Look after' means to take care of someone. 'Look for' means to search, 'look at' means to watch, and 'look up' means to find information."
    },
    {
      text: "My sister is two years ____ than me.",
      options: ["old", "older", "oldest", "elder"],
      answer: 1,
      explanation: "We use the comparative 'older' with 'than'. 'Old' is not comparative, 'oldest' is superlative, and 'elder' is not used with 'than'."
    },
    {
      text: "There are five ____ in my family.",
      options: ["persons", "peoples", "people", "person"],
      answer: 2,
      explanation: "'People' is the normal plural of 'person'. 'Persons' is very formal, 'peoples' means nations, and 'person' is singular."
    },
    {
      text: "My dad is ____ than my uncle, but they are both tall.",
      options: ["tall", "tallest", "so tall", "taller"],
      answer: 3,
      explanation: "The comparative 'taller' is needed with 'than'. 'Tall', 'tallest' and 'so tall' cannot be followed by 'than'."
    },
    {
      text: "We visit our grandmother ____ Sundays.",
      options: ["in", "on", "at", "by"],
      answer: 1,
      explanation: "We use 'on' with days of the week. 'In' is for months and years, 'at' is for times, and 'by' does not fit here."
    },
    {
      text: "My parents ____ married twenty years ago.",
      options: ["got", "made", "did", "took"],
      answer: 0,
      explanation: "'Get married' is the fixed phrase for a wedding. 'Make', 'do' and 'take' are not used with 'married'."
    },
    {
      text: "My brother and I ____ a bedroom because our flat is small.",
      options: ["give", "join", "divide", "share"],
      answer: 3,
      explanation: "'Share a bedroom' means to use it together. 'Give', 'divide' and 'join' do not describe using a room together in this way."
    },
    /* ---------- School ---------- */
    {
      text: "Our English ____ gives us homework every Friday.",
      options: ["student", "teacher", "doctor", "driver"],
      answer: 1,
      explanation: "A teacher gives homework to students. A student receives it, and a doctor or driver does not work in a classroom."
    },
    {
      text: "I can't find my pencil. Can I ____ yours?",
      options: ["lend", "borrow", "give", "buy"],
      answer: 1,
      explanation: "'Borrow' means to take something and give it back later. 'Lend' is what the owner does, and 'give' and 'buy' do not fit asking to use a pencil."
    },
    {
      text: "The maths test was very ____, so everybody passed it.",
      options: ["easy", "difficult", "heavy", "expensive"],
      answer: 0,
      explanation: "If everybody passed, the test was easy. 'Difficult' means the opposite, and 'heavy' and 'expensive' do not describe tests."
    },
    {
      text: "Please write your name at the ____ of the page.",
      options: ["side", "front", "top", "back"],
      answer: 2,
      explanation: "You write your name at the top of a page. 'Side', 'front' and 'back' are not the usual place for a name on a page."
    },
    {
      text: "Our school ____ start at nine and finish at three.",
      options: ["breaks", "offices", "holidays", "lessons"],
      answer: 3,
      explanation: "Lessons are the classes that start and finish during the school day. Offices, holidays and breaks do not fit this meaning."
    },
    {
      text: "I have to ____ a lot of new words for the English exam.",
      options: ["forget", "learn", "teach", "lose"],
      answer: 1,
      explanation: "Students learn new words for an exam. 'Teach' is what a teacher does, and 'forget' and 'lose' are the opposite of what you want."
    },
    {
      text: "Put your books in your ____ before you go home.",
      options: ["bag", "cup", "shoe", "plate"],
      answer: 0,
      explanation: "You carry books in a bag. A cup, shoe or plate is not used for carrying books."
    },
    {
      text: "My favourite ____ at school is history.",
      options: ["game", "sport", "job", "subject"],
      answer: 3,
      explanation: "History is a school subject. It is not a game, a sport or a job."
    },
    {
      text: "The teacher asked us to ____ our books at page ten.",
      options: ["look", "start", "open", "read"],
      answer: 2,
      explanation: "'Open your books at page ten' is the usual classroom phrase. 'Start' and 'read' do not take 'at page ten' this way, and 'look' needs 'at'."
    },
    {
      text: "I was ____ for school because I missed the bus.",
      options: ["early", "quick", "slow", "late"],
      answer: 3,
      explanation: "If you miss the bus, you arrive late. 'Early' is the opposite, and 'slow' and 'quick' are not used with 'for school'."
    },
    /* ---------- Food and drink ---------- */
    {
      text: "Would you like a ____ of tea?",
      options: ["plate", "bowl", "cup", "bag"],
      answer: 2,
      explanation: "We drink tea from a cup. A plate and a bowl are for food, and a bag is not used for tea you drink."
    },
    {
      text: "I'm ____. Can we have dinner now?",
      options: ["hungry", "thirsty", "angry", "tired"],
      answer: 0,
      explanation: "'Hungry' means you want food. 'Thirsty' is for drink, and 'angry' and 'tired' are not about wanting dinner."
    },
    {
      text: "Can I have a ____ of water, please? I'm really thirsty.",
      options: ["piece", "slice", "glass", "loaf"],
      answer: 2,
      explanation: "We say 'a glass of water'. 'Piece' and 'slice' are for solid food, and 'loaf' is only for bread."
    },
    {
      text: "My favourite ____ is chicken with rice.",
      options: ["drink", "dish", "fruit", "cake"],
      answer: 1,
      explanation: "A dish is a type of cooked food. Chicken with rice is not a drink, a fruit or a cake."
    },
    {
      text: "Would you like a ____ of bread with your soup?",
      options: ["cup", "glass", "bottle", "piece"],
      answer: 3,
      explanation: "'A piece of bread' is correct. 'Cup', 'glass' and 'bottle' are containers for drinks, not for bread."
    },
    {
      text: "I don't eat meat. I'm a ____.",
      options: ["waiter", "cook", "vegetarian", "farmer"],
      answer: 2,
      explanation: "A vegetarian is a person who does not eat meat. A waiter serves food, a cook prepares it, and a farmer grows it."
    },
    {
      text: "This soup is too ____. Can I have some water?",
      options: ["cold", "hot", "small", "empty"],
      answer: 1,
      explanation: "You want water because the soup is too hot. 'Cold' soup does not make you need water, and 'small' and 'empty' do not describe soup's temperature."
    },
    {
      text: "We need to buy some eggs, milk and ____ at the supermarket.",
      options: ["bread", "shoes", "books", "chairs"],
      answer: 0,
      explanation: "Bread is food, like eggs and milk. Shoes, books and chairs are not food you buy for meals."
    },
    {
      text: "Do you take ____ in your coffee, or do you drink it black?",
      options: ["salt", "butter", "milk", "oil"],
      answer: 2,
      explanation: "People often put milk in coffee; without milk it is 'black'. Salt, butter and oil are not usually added to coffee."
    },
    {
      text: "Let's ____ a pizza tonight. I don't want to cook.",
      options: ["count", "send", "grow", "order"],
      answer: 3,
      explanation: "'Order a pizza' means to ask a restaurant to bring it. 'Send', 'grow' and 'count' do not fit getting food from a restaurant."
    },
    /* ---------- Time and dates ---------- */
    {
      text: "My birthday is ____ May.",
      options: ["on", "at", "in", "by"],
      answer: 2,
      explanation: "We use 'in' with months. 'On' is for days and dates, 'at' is for clock times, and 'by' means 'not later than'."
    },
    {
      text: "The film starts ____ eight o'clock, so don't be late.",
      options: ["at", "in", "on", "to"],
      answer: 0,
      explanation: "We use 'at' with clock times. 'In' is for months and years, 'on' is for days, and 'to' is not used before a time here."
    },
    {
      text: "We play football ____ the weekend.",
      options: ["in", "at", "for", "since"],
      answer: 1,
      explanation: "'At the weekend' is the usual British phrase. 'In', 'for' and 'since' are not used with 'the weekend' this way."
    },
    {
      text: "I have lived in this town ____ 2020.",
      options: ["for", "during", "from", "since"],
      answer: 3,
      explanation: "'Since' is used with a starting point like 2020. 'For' needs a length of time, and 'from' and 'during' do not fit with the present perfect here."
    },
    {
      text: "Hurry up! The train leaves ____ five minutes.",
      options: ["on", "at", "for", "in"],
      answer: 3,
      explanation: "'In five minutes' means after five minutes from now. 'On', 'at' and 'for' do not express this future time."
    },
    {
      text: "What ____ is it? I think it's half past three.",
      options: ["hour", "clock", "time", "watch"],
      answer: 2,
      explanation: "'What time is it?' is the fixed question. 'Hour', 'clock' and 'watch' are not used in this question."
    },
    {
      text: "Yesterday was Tuesday, so today is ____.",
      options: ["Monday", "Wednesday", "Thursday", "Sunday"],
      answer: 1,
      explanation: "Wednesday comes after Tuesday. Monday is before Tuesday, and Thursday and Sunday are on other days."
    },
    {
      text: "December is the ____ month of the year.",
      options: ["first", "second", "tenth", "last"],
      answer: 3,
      explanation: "December is the twelfth and last month. It is not the first, second or tenth month."
    },
    {
      text: "I'll see you ____ Monday morning.",
      options: ["of", "in", "at", "on"],
      answer: 3,
      explanation: "We use 'on' with days and parts of a named day, like 'on Monday morning'. 'In', 'at' and 'of' are wrong here."
    },
    {
      text: "She was born ____ the first of April.",
      options: ["in", "at", "on", "since"],
      answer: 2,
      explanation: "We use 'on' with dates. 'In' is for months and years, 'at' is for times, and 'since' means from a time until now."
    },
    /* ---------- House and home ---------- */
    {
      text: "We cook dinner in the ____.",
      options: ["bathroom", "kitchen", "garage", "garden"],
      answer: 1,
      explanation: "The kitchen is the room for cooking. A bathroom is for washing, a garage is for the car, and a garden is outside."
    },
    {
      text: "There is a big ____ on the wall in the living room. It shows my family at the beach.",
      options: ["picture", "carpet", "cupboard", "fridge"],
      answer: 0,
      explanation: "A picture hangs on the wall and can show people. A carpet is on the floor, and a cupboard and fridge are furniture, not wall art."
    },
    {
      text: "My flat is on the third ____, so I use the lift.",
      options: ["wall", "roof", "floor", "door"],
      answer: 2,
      explanation: "'Floor' means a level of a building. 'Wall', 'roof' and 'door' are parts of a building, not levels."
    },
    {
      text: "Put the milk in the ____ so it stays cold.",
      options: ["oven", "fridge", "sink", "drawer"],
      answer: 1,
      explanation: "A fridge keeps food and drink cold. An oven makes food hot, a sink is for washing, and a drawer does not keep things cold."
    },
    {
      text: "I sleep in a small ____ next to my brother's room.",
      options: ["bedroom", "kitchen", "lift", "stairs"],
      answer: 0,
      explanation: "You sleep in a bedroom. A kitchen is for cooking, and a lift and stairs are for moving between floors."
    },
    {
      text: "Can you ____ the door, please? It's very cold in here.",
      options: ["turn", "clean", "break", "close"],
      answer: 3,
      explanation: "'Close the door' stops the cold air coming in. 'Turn', 'break' and 'clean' do not solve the problem of cold air."
    },
    {
      text: "The children are playing ____ in the garden.",
      options: ["inside", "outside", "under", "between"],
      answer: 1,
      explanation: "A garden is outside the house, so the children play outside. 'Inside' is the opposite, and 'under' and 'between' need an object."
    },
    {
      text: "We keep our car in the ____ next to the house.",
      options: ["kitchen", "bathroom", "garage", "balcony"],
      answer: 2,
      explanation: "A garage is the place for a car. A kitchen and bathroom are inside rooms, and a balcony is too small for a car."
    },
    {
      text: "There are some flowers in a ____ on the table.",
      options: ["pocket", "box", "wallet", "vase"],
      answer: 3,
      explanation: "Flowers are usually put in a vase with water. A box, wallet or pocket is not used for flowers on a table."
    },
    {
      text: "My room is always tidy because I ____ my clothes in the cupboard.",
      options: ["throw", "lose", "put", "leave"],
      answer: 2,
      explanation: "'Put clothes in the cupboard' keeps a room tidy. 'Throw', 'lose' and 'leave' suggest an untidy room."
    },
    /* ---------- Free time and hobbies ---------- */
    {
      text: "I like ____ to music when I do my homework.",
      options: ["hearing", "listening", "sounding", "watching"],
      answer: 1,
      explanation: "'Listen to music' is the correct phrase. 'Hear' is not used with 'to' for enjoying music, and 'sound' and 'watch' are wrong for music."
    },
    {
      text: "My best friend and I ____ computer games every Saturday.",
      options: ["play", "do", "make", "go"],
      answer: 0,
      explanation: "'Play computer games' is the correct collocation. 'Do', 'make' and 'go' are not used with 'computer games'."
    },
    {
      text: "We often go ____ in the pool near our house in summer.",
      options: ["swim", "to swim", "swimming", "swims"],
      answer: 2,
      explanation: "'Go swimming' is the pattern 'go + -ing' for activities. 'Go swim', 'go to swim' and 'go swims' are not correct here."
    },
    {
      text: "She takes ____ of animals with her new camera.",
      options: ["films", "photos", "paints", "papers"],
      answer: 1,
      explanation: "'Take photos' is the correct collocation with a camera. 'Films' are not 'taken' this way, and 'paints' and 'papers' do not fit."
    },
    {
      text: "I ____ reading books about space. It's my favourite hobby.",
      options: ["want", "hope", "enjoy", "decide"],
      answer: 2,
      explanation: "'Enjoy' is followed by an -ing form: 'enjoy reading'. 'Want', 'hope' and 'decide' are followed by 'to' + verb."
    },
    {
      text: "My grandfather goes ____ at the lake every Sunday morning.",
      options: ["fished", "fish", "to fish", "fishing"],
      answer: 3,
      explanation: "'Go fishing' uses 'go + -ing' for free-time activities. 'Go fish', 'go to fish' and 'go fished' are incorrect."
    },
    {
      text: "Let's ____ for a walk in the park this afternoon.",
      options: ["do", "take", "make", "go"],
      answer: 3,
      explanation: "'Go for a walk' is the fixed phrase. 'Do' and 'make' do not collocate, and we say 'take a walk' without 'for'."
    },
    {
      text: "He can ____ the guitar very well.",
      options: ["make", "sing", "play", "do"],
      answer: 2,
      explanation: "'Play the guitar' is the correct collocation for instruments. 'Make', 'sing' and 'do' are not used with 'the guitar'."
    },
    {
      text: "We watched a funny ____ at the cinema last night.",
      options: ["film", "book", "song", "photo"],
      answer: 0,
      explanation: "You watch a film at the cinema. A book is read, a song is heard, and a photo is not shown at the cinema."
    },
    {
      text: "I'm learning ____ to ride a horse at the weekend.",
      options: ["what", "how", "where", "who"],
      answer: 1,
      explanation: "'Learn how to' + verb means to learn the way to do something. 'What', 'where' and 'who' do not fit before 'to ride' here."
    },
    /* ---------- Weather ---------- */
    {
      text: "Take your umbrella. It's ____ outside.",
      options: ["sunny", "raining", "dry", "warm"],
      answer: 1,
      explanation: "You need an umbrella when it is raining. 'Sunny', 'dry' and 'warm' weather does not need an umbrella."
    },
    {
      text: "It's very ____ today, so wear your warm coat.",
      options: ["hot", "cold", "sunny", "nice"],
      answer: 1,
      explanation: "A warm coat is needed when it is cold. 'Hot', 'sunny' and 'nice' weather does not need a warm coat."
    },
    {
      text: "In winter it often ____ in the mountains, and the ground turns white.",
      options: ["rains", "shines", "snows", "blows"],
      answer: 2,
      explanation: "Snow makes the ground white. Rain does not, 'shine' is for the sun, and 'blow' is for the wind."
    },
    {
      text: "The sun is ____ and the sky is blue. Let's go to the beach.",
      options: ["shining", "snowing", "raining", "falling"],
      answer: 0,
      explanation: "The sun shines when the sky is blue. 'Snowing', 'raining' and 'falling' do not describe the sun."
    },
    {
      text: "It was so ____ that my hat flew off my head.",
      options: ["foggy", "cloudy", "quiet", "windy"],
      answer: 3,
      explanation: "Wind can blow a hat off your head. Fog, quiet and clouds cannot move a hat."
    },
    {
      text: "What's the ____ like today? Is it hot or cold?",
      options: ["time", "news", "weather", "way"],
      answer: 2,
      explanation: "'What's the weather like?' asks about hot, cold, rain and sun. 'Time', 'news' and 'way' do not fit this question."
    },
    {
      text: "I can't see the mountains today because it's very ____.",
      options: ["bright", "sunny", "clear", "cloudy"],
      answer: 3,
      explanation: "Clouds can hide mountains. 'Sunny', 'clear' and 'bright' weather makes it easy to see them."
    },
    {
      text: "Last night there was a big ____ with thunder and lightning.",
      options: ["wind", "cloud", "ice", "storm"],
      answer: 3,
      explanation: "A storm brings thunder and lightning. 'Wind', 'cloud' and 'ice' do not include thunder and lightning."
    },
    {
      text: "In summer the days are long and the weather is usually ____.",
      options: ["snowy", "freezing", "warm", "icy"],
      answer: 2,
      explanation: "Summer weather is usually warm. 'Snowy', 'freezing' and 'icy' describe winter weather."
    },
    {
      text: "Spring is my favourite ____ because of all the flowers.",
      options: ["month", "season", "week", "date"],
      answer: 1,
      explanation: "Spring is one of the four seasons. It is not a month, a week or a date."
    },
    /* ---------- Shopping ---------- */
    {
      text: "How ____ is this T-shirt? It doesn't have a price on it.",
      options: ["many", "much", "old", "far"],
      answer: 1,
      explanation: "'How much' asks about the price. 'How many' is for counting things, 'how old' is for age, and 'how far' is for distance."
    },
    {
      text: "These shoes are too small. Can I ____ them, please?",
      options: ["try", "change", "carry", "count"],
      answer: 1,
      explanation: "'Change' means to swap them for a different pair. 'Try' would need 'on', and 'carry' and 'count' do not fit here."
    },
    {
      text: "I'd like to ____ on this jacket before I buy it.",
      options: ["put", "look", "take", "try"],
      answer: 3,
      explanation: "'Try on' means to wear clothes to see if they fit. 'Put on' means to dress, and 'take' and 'look' do not fit before buying."
    },
    {
      text: "The shop ____ opens at nine and closes at six.",
      options: ["assistant", "centre", "window", "door"],
      answer: 1,
      explanation: "A shopping centre opens and closes at fixed times. An assistant is a person, and a window and door are parts of a shop, not the whole place."
    },
    {
      text: "I paid for the book and the shop assistant gave me my ____.",
      options: ["price", "money", "change", "cost"],
      answer: 2,
      explanation: "'Change' is the money you get back after paying. 'Price' and 'cost' are what you pay, and 'money' alone does not mean the returned coins."
    },
    {
      text: "This dress is very ____. I don't have enough money for it.",
      options: ["cheap", "expensive", "free", "old"],
      answer: 1,
      explanation: "'Expensive' means it costs a lot of money. 'Cheap' and 'free' mean you can pay easily, and 'old' is not about price."
    },
    {
      text: "You can buy meat at the ____ near the market.",
      options: ["butcher's", "chemist's", "bank", "library"],
      answer: 0,
      explanation: "A butcher's sells meat. A chemist's sells medicine, a bank is for money, and a library is for books."
    },
    {
      text: "Excuse me, do you ____ this jumper in a bigger size?",
      options: ["make", "have", "put", "give"],
      answer: 1,
      explanation: "'Do you have...?' asks if the shop sells it. 'Make', 'put' and 'give' are not used to ask about sizes in a shop."
    },
    {
      text: "I bought a ____ of jeans in the sale on Saturday.",
      options: ["piece", "couple", "pair", "group"],
      answer: 2,
      explanation: "'A pair of jeans' is the fixed phrase for trousers. 'Piece', 'couple' and 'group' are not used with 'jeans'."
    },
    {
      text: "Can I pay by ____, or do you only take cash?",
      options: ["purse", "coin", "wallet", "card"],
      answer: 3,
      explanation: "'Pay by card' is the normal phrase for a bank card. Coins are cash, and a wallet and purse hold money but are not ways to pay."
    },
    /* ---------- Travel and transport ---------- */
    {
      text: "We went to Paris ____ plane last summer.",
      options: ["on", "in", "with", "by"],
      answer: 3,
      explanation: "'By plane' describes how you travel. 'On' and 'in' need 'the/a', and 'with' is not used for transport this way."
    },
    {
      text: "The train to London leaves from ____ two.",
      options: ["platform", "street", "corner", "bridge"],
      answer: 0,
      explanation: "Trains leave from platforms at a station. A street, corner or bridge is not where trains leave from."
    },
    {
      text: "You must buy a ____ before you get on the train.",
      options: ["menu", "recipe", "letter", "ticket"],
      answer: 3,
      explanation: "You need a ticket to travel by train. A menu is for restaurants, a letter is for the post, and a recipe is for cooking."
    },
    {
      text: "We ____ off the bus at the stop near the museum.",
      options: ["went", "got", "took", "left"],
      answer: 1,
      explanation: "'Get off' a bus means to leave it. 'Go', 'take' and 'leave' are not used with 'off the bus' in this way."
    },
    {
      text: "The airport is far away, so we should ____ a taxi.",
      options: ["take", "make", "bring", "buy"],
      answer: 0,
      explanation: "'Take a taxi' means to travel by taxi. 'Make', 'bring' and 'buy' do not collocate with 'taxi' for travelling."
    },
    {
      text: "Don't forget your ____ when you travel to another country.",
      options: ["pillow", "homework", "umbrella", "passport"],
      answer: 3,
      explanation: "You need a passport to enter another country. Homework, an umbrella and a pillow are not needed at the border."
    },
    {
      text: "How ____ is it from here to the beach? About two kilometres?",
      options: ["long", "far", "much", "old"],
      answer: 1,
      explanation: "'How far' asks about distance in kilometres. 'How long' is for time, 'how much' is for price, and 'how old' is for age."
    },
    {
      text: "The plane ____ at ten and lands at midday.",
      options: ["takes off", "puts on", "gets up", "turns on"],
      answer: 0,
      explanation: "'Take off' means a plane leaves the ground. 'Put on', 'get up' and 'turn on' are not used for planes."
    },
    {
      text: "I ride my ____ to school when the weather is nice.",
      options: ["boat", "plane", "bike", "ship"],
      answer: 2,
      explanation: "You ride a bike to school. A boat, plane or ship cannot be used on the road to school."
    },
    {
      text: "We waited at the bus ____ for twenty minutes this morning.",
      options: ["driver", "seat", "ticket", "stop"],
      answer: 3,
      explanation: "You wait for a bus at a bus stop. A seat, ticket and driver are not places to wait."
    },
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
