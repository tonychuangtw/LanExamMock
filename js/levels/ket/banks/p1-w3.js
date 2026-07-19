/* KET Prep extra bank: part1 wave 3 */
(function () {
  var BANK = [
    /* ---------- Music, films and TV ---------- */
    {
      text: "She sings in a ____ with three of her friends.",
      options: ["queue", "team", "class", "band"],
      answer: 3,
      explanation: "Singers perform in a band. A team is for sport, a class is for school, and a queue is a line of people waiting."
    },
    {
      text: "The ____ in that film was a famous actor from America.",
      options: ["star", "fan", "boss", "guest"],
      answer: 0,
      explanation: "A film star is a famous actor. A fan watches films, and a boss and guest are not roles in a film."
    },
    {
      text: "Can you turn ____ the radio? I love this song!",
      options: ["down", "away", "off", "up"],
      answer: 3,
      explanation: "'Turn up' makes the sound louder, which fits loving the song. 'Turn down' and 'turn off' reduce or stop it, and 'turn away' is for people."
    },
    {
      text: "We bought ____ for the concert next month.",
      options: ["keys", "plates", "tickets", "stamps"],
      answer: 2,
      explanation: "You need tickets to go to a concert. Plates, keys and stamps are not for entering a concert."
    },
    {
      text: "My favourite ____ on TV is about cooking.",
      options: ["programme", "picture", "page", "poster"],
      answer: 0,
      explanation: "A programme is a show on TV. A picture, page and poster are not things you watch on TV."
    },
    {
      text: "He plays the ____ in the school orchestra. It has black and white keys.",
      options: ["drum", "guitar", "piano", "violin"],
      answer: 2,
      explanation: "A piano has black and white keys. Drums, guitars and violins do not have keys."
    },
    {
      text: "The concert ____ two hours, from eight until ten.",
      options: ["lasted", "spent", "passed", "stayed"],
      answer: 0,
      explanation: "'Last' means to continue for a time. 'Spend' needs a person as subject, and 'pass' and 'stay' do not fit here."
    },
    {
      text: "I know all the ____ to this song, so I can sing it.",
      options: ["numbers", "letters", "pages", "words"],
      answer: 3,
      explanation: "The words of a song are what you sing. Letters, pages and numbers are not what you sing in a song."
    },
    {
      text: "The cinema was ____, so we couldn't find seats together.",
      options: ["empty", "full", "closed", "cheap"],
      answer: 1,
      explanation: "A full cinema has few free seats. An empty or closed cinema has no seat problem, and 'cheap' is about price."
    },
    {
      text: "We ____ a really good film on TV last night.",
      options: ["looked", "heard", "saw", "listened"],
      answer: 2,
      explanation: "'See a film' is correct. 'Look' and 'listen' need prepositions, and 'hear' is for sounds, not films."
    },
    /* ---------- Nature and countryside ---------- */
    {
      text: "The ____ is very high. It takes six hours to climb to the top.",
      options: ["river", "mountain", "lake", "field"],
      answer: 1,
      explanation: "You climb a mountain to its top. A river, lake and field are not climbed."
    },
    {
      text: "A long ____ runs through the city and into the sea.",
      options: ["hill", "forest", "river", "beach"],
      answer: 2,
      explanation: "A river flows through a city into the sea. A hill, forest and beach do not flow."
    },
    {
      text: "We had a picnic under a big ____ in the park.",
      options: ["tree", "cloud", "star", "wave"],
      answer: 0,
      explanation: "You sit under a tree for shade. Clouds and stars are in the sky, and waves are in the sea."
    },
    {
      text: "There are lots of tall trees in the ____ behind our village.",
      options: ["desert", "forest", "beach", "pool"],
      answer: 1,
      explanation: "A forest is full of trees. A desert, beach and pool do not have lots of tall trees."
    },
    {
      text: "At night you can see the ____ and the stars in the sky.",
      options: ["sun", "wind", "rainbow", "moon"],
      answer: 3,
      explanation: "The moon appears at night with the stars. The sun and rainbows appear in the day, and wind cannot be seen."
    },
    {
      text: "We picked some ____ in the garden to give to our teacher.",
      options: ["stones", "flowers", "clouds", "roads"],
      answer: 1,
      explanation: "Flowers are picked as a gift. Stones are not a nice gift, and clouds and roads cannot be picked."
    },
    {
      text: "The boat sailed across the ____ to the little island.",
      options: ["field", "hill", "lake", "farm"],
      answer: 2,
      explanation: "Boats sail on water like a lake. A field, hill and farm are land, not water."
    },
    {
      text: "In autumn the ____ fall from the trees.",
      options: ["rocks", "roots", "seas", "leaves"],
      answer: 3,
      explanation: "Leaves fall from trees in autumn. Roots stay in the ground, and seas and rocks do not fall from trees."
    },
    {
      text: "After the rain we saw a beautiful ____ in the sky.",
      options: ["rainbow", "river", "road", "roof"],
      answer: 0,
      explanation: "A rainbow appears in the sky after rain. A river, road and roof are not in the sky."
    },
    {
      text: "The path up the ____ was steep, but the view from the top was great.",
      options: ["beach", "hill", "lake", "cave"],
      answer: 1,
      explanation: "A hill has a steep path and a view from the top. A beach, lake and cave do not have a top with a view."
    },
    /* ---------- Restaurant and cooking ---------- */
    {
      text: "Can we see the ____, please? We'd like to order some food.",
      options: ["bill", "menu", "recipe", "ticket"],
      answer: 1,
      explanation: "You look at the menu before ordering. The bill comes after eating, a recipe is for cooking at home, and a ticket is not used in restaurants."
    },
    {
      text: "Could we have the ____, please? We've finished our meal.",
      options: ["menu", "table", "bill", "chair"],
      answer: 2,
      explanation: "You ask for the bill to pay after eating. The menu is for ordering, and a table and chair are furniture."
    },
    {
      text: "First, ____ the onions into small pieces.",
      options: ["cut", "drink", "pour", "boil"],
      answer: 0,
      explanation: "You cut onions into pieces. 'Drink' is for liquids, 'pour' is for liquids too, and 'boil' does not make pieces."
    },
    {
      text: "____ the water until it is very hot, then add the pasta.",
      options: ["Freeze", "Dry", "Cut", "Boil"],
      answer: 3,
      explanation: "You boil water to cook pasta. 'Freeze' makes it cold, and 'cut' and 'dry' are not for water."
    },
    {
      text: "I'd like my steak with a ____ of chips, please.",
      options: ["glass", "cup", "plate", "spoon"],
      answer: 2,
      explanation: "'A plate of chips' is correct for food. A glass and cup are for drinks, and a spoon is too small."
    },
    {
      text: "We ____ a table for four at the Italian restaurant.",
      options: ["sold", "cooked", "washed", "booked"],
      answer: 3,
      explanation: "'Book a table' means to reserve it. 'Cook', 'wash' and 'sell' are not things customers do with a table."
    },
    {
      text: "Use a ____ to eat your soup.",
      options: ["fork", "knife", "spoon", "plate"],
      answer: 2,
      explanation: "Soup is eaten with a spoon. A fork and knife cannot hold liquid, and a plate is not for eating with."
    },
    {
      text: "This cake is delicious! Can I have another ____?",
      options: ["slice", "glass", "bottle", "drop"],
      answer: 0,
      explanation: "'A slice of cake' is the correct phrase. 'Glass', 'bottle' and 'drop' are for liquids."
    },
    {
      text: "The waiter ____ our food to the table quickly.",
      options: ["thought", "bought", "taught", "brought"],
      answer: 3,
      explanation: "'Brought' means carried it to us. 'Bought' means paid for, and 'taught' and 'thought' do not fit serving food."
    },
    {
      text: "Add a little ____ and pepper to the soup for more taste.",
      options: ["sugar", "salt", "milk", "jam"],
      answer: 1,
      explanation: "'Salt and pepper' is the fixed pair for seasoning. Sugar, milk and jam are not paired with pepper."
    },
    /* ---------- Describing people ---------- */
    {
      text: "My grandfather has grey ____ and a white beard.",
      options: ["hair", "eyes", "hands", "shoes"],
      answer: 0,
      explanation: "Hair can be grey and goes with a beard. Eyes are not usually grey with a beard mentioned, and hands and shoes do not fit."
    },
    {
      text: "She is quite ____, so she can reach the top shelf easily.",
      options: ["short", "tall", "young", "slow"],
      answer: 1,
      explanation: "A tall person can reach high shelves. 'Short', 'young' and 'slow' do not help you reach high places."
    },
    {
      text: "My little cousin is only three years ____.",
      options: ["old", "age", "young", "tall"],
      answer: 0,
      explanation: "'Three years old' is the fixed way to give age. 'Age', 'young' and 'tall' are not used after 'three years' here."
    },
    {
      text: "Everyone likes Tom because he is very ____ and always helps people.",
      options: ["lazy", "friendly", "angry", "noisy"],
      answer: 1,
      explanation: "A friendly person is liked and helpful. 'Lazy', 'angry' and 'noisy' are negative qualities."
    },
    {
      text: "My sister has long ____ hair, like our mother.",
      options: ["blue", "green", "dark", "purple"],
      answer: 2,
      explanation: "'Dark' is a natural hair colour. Blue, green and purple are not natural hair colours a mother usually has."
    },
    {
      text: "He looks ____ his father. They have the same eyes and smile.",
      options: ["after", "as", "for", "like"],
      answer: 3,
      explanation: "'Look like' means to be similar in appearance. 'Look as' is wrong, 'look for' means to search, and 'look after' means to care for."
    },
    {
      text: "The teacher is very ____ with us when we make mistakes. She never gets angry.",
      options: ["patient", "hungry", "dangerous", "expensive"],
      answer: 0,
      explanation: "A patient person stays calm about mistakes. 'Hungry', 'dangerous' and 'expensive' do not describe a calm teacher."
    },
    {
      text: "My baby brother is so ____ that everyone smiles at him in the street.",
      options: ["closed", "heavy", "wrong", "cute"],
      answer: 3,
      explanation: "'Cute' means sweet and nice to look at, so people smile. 'Heavy', 'wrong' and 'closed' do not make people smile at a baby."
    },
    {
      text: "She wears a beautiful gold ____ on her finger.",
      options: ["necklace", "belt", "watch", "ring"],
      answer: 3,
      explanation: "A ring is worn on a finger. A necklace goes on the neck, a watch on the wrist, and a belt on the waist."
    },
    {
      text: "My best friend is very ____. She always tells funny stories.",
      options: ["quiet", "sad", "funny", "tired"],
      answer: 2,
      explanation: "A funny person tells funny stories. 'Quiet', 'sad' and 'tired' people do not usually make others laugh."
    },
    /* ---------- Prepositions ---------- */
    {
      text: "The cat is sleeping ____ the sofa, so I can't sit down.",
      options: ["on", "at", "of", "from"],
      answer: 0,
      explanation: "The cat sleeps on the sofa, taking your seat. 'At', 'of' and 'from' do not describe a position on furniture."
    },
    {
      text: "There's a small shop ____ the end of our street.",
      options: ["in", "at", "on", "with"],
      answer: 1,
      explanation: "'At the end of' is the fixed phrase for position. 'In', 'on' and 'with' are not used with 'the end of the street'."
    },
    {
      text: "I got a nice card ____ my aunt for my birthday.",
      options: ["from", "of", "by", "at"],
      answer: 0,
      explanation: "'From' shows who sent the card. 'Of', 'by' and 'at' do not show the sender in this sentence."
    },
    {
      text: "She's really interested ____ old films from the 1950s.",
      options: ["on", "at", "in", "for"],
      answer: 2,
      explanation: "'Interested in' is the fixed preposition pattern. 'On', 'at' and 'for' are not used after 'interested'."
    },
    {
      text: "We walked ____ the bridge to the other side of the river.",
      options: ["against", "between", "inside", "across"],
      answer: 3,
      explanation: "'Across the bridge' means from one side to the other. 'Between', 'inside' and 'against' do not describe crossing."
    },
    {
      text: "The dog is hiding ____ the table. I can see its tail.",
      options: ["over", "under", "above", "onto"],
      answer: 1,
      explanation: "'Under the table' means below it, where a dog can hide. 'Over', 'above' and 'onto' mean higher positions."
    },
    {
      text: "He comes ____ a small town in the north of Spain.",
      options: ["of", "at", "from", "by"],
      answer: 2,
      explanation: "'Come from' tells us someone's home place. 'Of', 'at' and 'by' are not used after 'come' for origin."
    },
    {
      text: "The picture of my dog is ____ the front of my school book.",
      options: ["on", "in", "at", "of"],
      answer: 0,
      explanation: "'On the front of' describes a surface. 'In', 'at' and 'of' are not correct with 'the front of' a book here."
    },
    {
      text: "I'm not very good ____ maths, but I love art.",
      options: ["in", "at", "on", "for"],
      answer: 1,
      explanation: "'Good at' is the fixed pattern for skills. 'In', 'on' and 'for' are not used after 'good' in this meaning."
    },
    {
      text: "We waited ____ the rain under a shop door.",
      options: ["for", "up", "to", "in"],
      answer: 3,
      explanation: "'In the rain' describes the weather around you. 'For', 'to' and 'up' do not fit 'the rain' as weather here."
    },
    /* ---------- Phrasal verbs ---------- */
    {
      text: "Please ____ up. The film is starting in five minutes!",
      options: ["marry", "carry", "worry", "hurry"],
      answer: 3,
      explanation: "'Hurry up' means to be quick. 'Carry', 'worry' and 'marry' do not mean to go faster with 'up'."
    },
    {
      text: "Can you turn ____ the TV? I want to watch the news.",
      options: ["in", "on", "of", "out"],
      answer: 1,
      explanation: "'Turn on' means to start a machine. 'Turn in', 'turn of' and 'turn out' do not mean starting the TV."
    },
    {
      text: "____ out! There's a car coming!",
      options: ["Take", "Go", "Look", "Give"],
      answer: 2,
      explanation: "'Look out!' warns of danger. 'Take out', 'go out' and 'give out' are not warnings."
    },
    {
      text: "I need to ____ up early tomorrow to catch the first train.",
      options: ["stand", "wake", "grow", "pick"],
      answer: 1,
      explanation: "'Wake up' means to stop sleeping. 'Stand up' is from a chair, 'grow up' means become an adult, and 'pick up' means to lift."
    },
    {
      text: "Please ____ down and be quiet. The lesson is starting.",
      options: ["sit", "fall", "cut", "write"],
      answer: 0,
      explanation: "'Sit down' is what students do at the start of a lesson. 'Fall down', 'cut down' and 'write down' have different meanings."
    },
    {
      text: "Don't ____ up! You can try the exercise again tomorrow.",
      options: ["get", "give", "go", "grow"],
      answer: 1,
      explanation: "'Give up' means to stop trying. 'Get up', 'go up' and 'grow up' do not mean stopping."
    },
    {
      text: "Can you ____ up that pencil? It fell under your chair.",
      options: ["pick", "put", "look", "wash"],
      answer: 0,
      explanation: "'Pick up' means to lift something from the floor. 'Put up', 'look up' and 'wash up' have different meanings."
    },
    {
      text: "I always ____ off my shoes when I enter the house.",
      options: ["make", "turn", "do", "take"],
      answer: 3,
      explanation: "'Take off' means to remove shoes or clothes. 'Make off', 'do off' and 'turn off' do not mean removing shoes."
    },
    {
      text: "She ____ up in a small village, but now she lives in the city.",
      options: ["gave", "took", "grew", "turned"],
      answer: 2,
      explanation: "'Grow up' means to spend your childhood somewhere. 'Give up', 'take up' and 'turn up' have different meanings."
    },
    {
      text: "Please ____ on your seatbelt before the plane takes off.",
      options: ["get", "put", "take", "give"],
      answer: 1,
      explanation: "'Put on a seatbelt' means to fasten it. 'Get on' is for boarding, and 'take on' and 'give on' do not fit."
    },
    /* ---------- Fruit and vegetables ---------- */
    {
      text: "Monkeys love eating ____. They are yellow and sweet.",
      options: ["carrots", "onions", "potatoes", "bananas"],
      answer: 3,
      explanation: "Bananas are yellow, sweet and loved by monkeys. Onions, potatoes and carrots are vegetables and not yellow and sweet."
    },
    {
      text: "Would you like an ____ or a banana with your lunch?",
      options: ["orange", "bread", "cheese", "cake"],
      answer: 0,
      explanation: "'An' is used before a vowel sound, and 'orange' is fruit like a banana. 'Bread', 'cheese' and 'cake' do not follow 'an'."
    },
    {
      text: "We grow tomatoes and ____ in our garden.",
      options: ["fish", "carrots", "eggs", "chickens"],
      answer: 1,
      explanation: "Carrots are vegetables you grow with tomatoes. Fish and eggs are not grown, and chickens are kept, not grown."
    },
    {
      text: "This lemon is very ____. I need some sugar with it.",
      options: ["sweet", "sour", "salty", "soft"],
      answer: 1,
      explanation: "Lemons are sour, which is why you want sugar. 'Sweet' is the opposite, and 'salty' and 'soft' do not describe lemons."
    },
    {
      text: "Can you buy a ____ of grapes at the market?",
      options: ["cup", "loaf", "bunch", "pair"],
      answer: 2,
      explanation: "'A bunch of grapes' is the fixed phrase. 'Loaf' is for bread, 'cup' is for drinks, and 'pair' is for two things."
    },
    {
      text: "Strawberries are small, red and very ____ in summer.",
      options: ["popular", "angry", "heavy", "loud"],
      answer: 0,
      explanation: "'Popular' means many people like them. 'Angry', 'heavy' and 'loud' do not describe strawberries."
    },
    {
      text: "Peel the ____ before you cook the chips.",
      options: ["apples", "cherries", "grapes", "potatoes"],
      answer: 3,
      explanation: "Chips are made from potatoes, which you peel first. Apples, grapes and cherries are not used for chips."
    },
    {
      text: "I drink a glass of orange ____ every morning.",
      options: ["juice", "bread", "rice", "salad"],
      answer: 0,
      explanation: "'Orange juice' is a common drink. Bread, rice and salad are foods, not drinks."
    },
    {
      text: "There is a big ____ of fruit on the kitchen table.",
      options: ["spoon", "glass", "bowl", "fork"],
      answer: 2,
      explanation: "Fruit is kept in a bowl. A glass is for drinks, and a spoon and fork are for eating, not holding fruit."
    },
    {
      text: "Rabbits love eating ____. They are long and orange.",
      options: ["tomatoes", "peas", "carrots", "beans"],
      answer: 2,
      explanation: "Carrots are long, orange and a favourite of rabbits. Tomatoes are round and red, and peas and beans are green."
    },
    /* ---------- Making plans ---------- */
    {
      text: "____ we go to the park this afternoon? It's sunny.",
      options: ["Shall", "Are", "Do", "Have"],
      answer: 0,
      explanation: "'Shall we...?' is a common way to suggest a plan. 'Are', 'do' and 'have' cannot make this suggestion with 'go'."
    },
    {
      text: "How ____ meeting at the café at ten o'clock?",
      options: ["for", "about", "with", "like"],
      answer: 1,
      explanation: "'How about + -ing' makes a suggestion. 'How for', 'how with' and 'how like' are not correct phrases."
    },
    {
      text: "I'm sorry, I can't come on Friday. I'm ____ that day.",
      options: ["free", "busy", "empty", "open"],
      answer: 1,
      explanation: "'Busy' explains why you cannot come. 'Free', 'empty' and 'open' would mean you can come."
    },
    {
      text: "Let's ____ tomorrow's picnic if it rains.",
      options: ["invite", "cancel", "agree", "arrive"],
      answer: 1,
      explanation: "'Cancel' means to decide not to do a planned thing. 'Invite', 'agree' and 'arrive' do not fit stopping a picnic for rain."
    },
    {
      text: "Would you like to come to my birthday ____ on Saturday?",
      options: ["office", "exam", "lesson", "party"],
      answer: 3,
      explanation: "People invite friends to a birthday party. An exam, lesson and office are not birthday events."
    },
    {
      text: "I'll ____ you at the station at six. Don't be late!",
      options: ["meet", "know", "hear", "hope"],
      answer: 0,
      explanation: "'Meet you at the station' means to come together there. 'Know', 'hear' and 'hope' do not describe meeting at a place."
    },
    {
      text: "Are you ____ anything this evening? Do you want to play tennis?",
      options: ["making", "getting", "going", "doing"],
      answer: 3,
      explanation: "'Are you doing anything?' asks about plans. 'Making', 'going' and 'getting' do not fit with 'anything' for plans."
    },
    {
      text: "Thanks for the invitation, but I'm ____ I can't come.",
      options: ["afraid", "sure", "glad", "ready"],
      answer: 0,
      explanation: "'I'm afraid' politely introduces bad news. 'Sure', 'glad' and 'ready' do not soften a refusal this way."
    },
    {
      text: "Let's meet in front ____ the sports centre at nine.",
      options: ["at", "of", "to", "on"],
      answer: 1,
      explanation: "'In front of' is the fixed phrase for position. 'At', 'to' and 'on' are not used after 'in front'."
    },
    {
      text: "Everyone in the class is ____ to the end-of-year show.",
      options: ["opened", "closed", "invited", "finished"],
      answer: 2,
      explanation: "'Invited' means asked to come. 'Closed', 'opened' and 'finished' are not used about people and events this way."
    },
    /* ---------- At the doctor's ---------- */
    {
      text: "I have a ____, so I keep sneezing and my nose is red.",
      options: ["cold", "cut", "burn", "broken arm"],
      answer: 0,
      explanation: "Sneezing and a red nose are signs of a cold. A cut, a burn and a broken arm do not make you sneeze."
    },
    {
      text: "The nurse took my ____ to see if I was hot.",
      options: ["ticket", "photograph", "money", "temperature"],
      answer: 3,
      explanation: "'Take someone's temperature' checks how hot they are. A photograph, money and ticket do not show if you are hot."
    },
    {
      text: "Take this medicine three ____ a day after meals.",
      options: ["hours", "times", "days", "weeks"],
      answer: 1,
      explanation: "'Three times a day' says how often. 'Hours', 'days' and 'weeks' do not fit after 'three' with 'a day'."
    },
    {
      text: "My ____ hurts because I ate too much cake.",
      options: ["hair", "stomach", "finger", "ear"],
      answer: 1,
      explanation: "Eating too much hurts your stomach. Your hair, finger and ear are not affected by eating cake."
    },
    {
      text: "You should stay in bed and drink lots of ____ when you have a fever.",
      options: ["coffee", "salt", "water", "ice cream"],
      answer: 2,
      explanation: "Doctors say to drink water when you are ill. Coffee, salt and ice cream are not the standard advice for a fever."
    },
    {
      text: "I cut my finger, so I put a ____ on it.",
      options: ["plaster", "hat", "glove", "ring"],
      answer: 0,
      explanation: "A plaster covers a small cut. A hat, glove and ring do not protect a cut."
    },
    {
      text: "He can't play in the match because he ____ his ankle yesterday.",
      options: ["won", "hurt", "made", "found"],
      answer: 1,
      explanation: "'Hurt his ankle' explains why he cannot play. 'Won', 'made' and 'found' do not describe an injury."
    },
    {
      text: "The doctor told me to open my mouth and say '____'.",
      options: ["ah", "no", "hi", "bye"],
      answer: 0,
      explanation: "Doctors ask patients to say 'ah' to look in their throat. 'No', 'hi' and 'bye' are not used in this check."
    },
    {
      text: "I have an ____ with the dentist at half past four.",
      options: ["exam", "appointment", "exercise", "answer"],
      answer: 1,
      explanation: "An appointment is a fixed time to see a dentist or doctor. An exam, exercise and answer are not meetings."
    },
    {
      text: "Don't eat too many sweets. They are bad ____ your teeth.",
      options: ["at", "of", "for", "with"],
      answer: 2,
      explanation: "'Bad for' means harmful to something. 'At', 'of' and 'with' are not used after 'bad' in this meaning."
    },
    /* ---------- Quantities and numbers ---------- */
    {
      text: "There isn't ____ milk left. Can you buy some?",
      options: ["many", "much", "few", "lots"],
      answer: 1,
      explanation: "'Much' is used with uncountable nouns like milk in negatives. 'Many' and 'few' are for countables, and 'lots' needs 'of'."
    },
    {
      text: "How many eggs do we need? Only a ____, maybe three or four.",
      options: ["little", "bit", "much", "few"],
      answer: 3,
      explanation: "'A few' is used with countable nouns like eggs. 'A little' and 'a bit' are for uncountables, and 'much' is not used here."
    },
    {
      text: "I have ____ of friends at my new school.",
      options: ["much", "lots", "many", "few"],
      answer: 1,
      explanation: "'Lots of' means a large number. 'Much', 'many' and 'few' are not followed by 'of' in this simple pattern."
    },
    {
      text: "There are ____ students in my class: fifteen boys and fifteen girls.",
      options: ["thirteen", "thirty", "three", "third"],
      answer: 1,
      explanation: "Fifteen plus fifteen is thirty. 'Thirteen', 'three' and 'third' do not equal fifteen plus fifteen."
    },
    {
      text: "Can I have a ____ more sugar in my tea, please?",
      options: ["few", "many", "little", "lot"],
      answer: 2,
      explanation: "'A little' is used with uncountable nouns like sugar. 'Few' and 'many' are for countables, and 'a lot' needs 'of'."
    },
    {
      text: "We need two ____ of bread for the sandwiches.",
      options: ["bottles", "loaves", "cups", "cans"],
      answer: 1,
      explanation: "Bread is counted in loaves. Bottles, cups and cans are for liquids."
    },
    {
      text: "My birthday is on the ____ of June. It's the day after the fourth.",
      options: ["first", "third", "fifth", "second"],
      answer: 2,
      explanation: "The day after the fourth is the fifth. The first, second and third come before the fourth."
    },
    {
      text: "There are ____ people in the queue, so we won't wait long.",
      options: ["too many", "a lot of", "hundreds of", "only a few"],
      answer: 3,
      explanation: "'Only a few' people means a short wait. 'A lot of', 'hundreds of' and 'too many' would mean a long wait."
    },
    {
      text: "A week has seven days and a year has twelve ____.",
      options: ["hours", "minutes", "months", "seconds"],
      answer: 2,
      explanation: "A year has twelve months. Hours, minutes and seconds are much shorter than a month."
    },
    {
      text: "The tickets cost ten pounds ____, so twenty pounds for both of us.",
      options: ["all", "some", "every", "each"],
      answer: 3,
      explanation: "'Each' means for every single ticket. 'All', 'every' and 'some' cannot follow the price in this pattern."
    },
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
