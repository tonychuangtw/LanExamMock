/* KET Prep extra bank: part1 wave 5 */
(function () {
  var BANK = [
    /* ---------- Seaside and summer ---------- */
    {
      text: "Put on some sun ____ before you go to the beach.",
      options: ["water", "milk", "cream", "juice"],
      answer: 2,
      explanation: "'Sun cream' protects your skin from the sun. 'Sun water', 'sun milk' and 'sun juice' are not the usual English words."
    },
    {
      text: "We sat under a beach ____ because the sun was very strong.",
      options: ["ball", "towel", "bag", "umbrella"],
      answer: 3,
      explanation: "A beach umbrella gives shade from the sun. A ball, towel and bag do not protect you from the sun above."
    },
    {
      text: "The children collected ____ on the beach and put them in a bucket.",
      options: ["clouds", "waves", "shells", "stars"],
      answer: 2,
      explanation: "Shells are small objects you can collect on a beach. Clouds, waves and stars cannot be put in a bucket."
    },
    {
      text: "Dry yourself with a ____ after you swim.",
      options: ["plate", "spoon", "towel", "fork"],
      answer: 2,
      explanation: "A towel dries your body after swimming. A plate, spoon and fork are for eating."
    },
    {
      text: "The ____ were big, so it was fun to jump in the sea.",
      options: ["rocks", "boats", "hills", "waves"],
      answer: 3,
      explanation: "Waves move in the sea and are fun to jump in. Rocks, boats and hills do not move like this."
    },
    {
      text: "I wore my new ____ hat and sunglasses at the pool.",
      options: ["winter", "wool", "sun", "night"],
      answer: 2,
      explanation: "A sun hat protects you at the pool in summer. Winter, wool and night hats are for cold or dark times."
    },
    {
      text: "It was so hot that we bought an ice ____ from the van.",
      options: ["water", "soup", "cream", "bread"],
      answer: 2,
      explanation: "'Ice cream' is the cold sweet food sold from vans. 'Ice water', 'ice soup' and 'ice bread' are not sold from ice cream vans."
    },
    {
      text: "You can hire a small ____ and row around the lake.",
      options: ["car", "bike", "plane", "boat"],
      answer: 3,
      explanation: "You row a boat on a lake. A car, bike and plane are not rowed on water."
    },
    {
      text: "The sand was too ____ to walk on without shoes.",
      options: ["cold", "wet", "hot", "dark"],
      answer: 2,
      explanation: "Hot sand burns bare feet in summer. Cold, wet and dark sand does not hurt to walk on."
    },
    {
      text: "We watched the sun go ____ over the sea in the evening.",
      options: ["up", "off", "down", "out"],
      answer: 2,
      explanation: "The sun goes down in the evening. 'Go up' is the morning, and 'go off' and 'go out' are for alarms and lights."
    },
    /* ---------- Winter activities ---------- */
    {
      text: "The children made a ____ in the garden with a carrot for its nose.",
      options: ["sandcastle", "kite", "birthday cake", "snowman"],
      answer: 3,
      explanation: "A snowman is made in winter and has a carrot nose. A sandcastle, cake and kite do not have carrot noses."
    },
    {
      text: "Wear your ____ so your hands stay warm in the snow.",
      options: ["socks", "shorts", "gloves", "sandals"],
      answer: 2,
      explanation: "Gloves keep hands warm. Socks are for feet, and shorts and sandals are summer clothes."
    },
    {
      text: "The lake was frozen, so we went ____ on it.",
      options: ["swimming", "surfing", "skating", "sailing"],
      answer: 2,
      explanation: "You skate on frozen ice. Swimming, surfing and sailing need open water, not ice."
    },
    {
      text: "The children threw ____ at each other and laughed.",
      options: ["snowballs", "pillows", "leaves", "books"],
      answer: 0,
      explanation: "Snowballs are thrown in winter games. Pillows, leaves and books are not part of playing in the snow."
    },
    {
      text: "It snowed all night, so everything was ____ in the morning.",
      options: ["green", "black", "white", "orange"],
      answer: 2,
      explanation: "Snow makes everything white. Green, black and orange are not the colour of snow."
    },
    {
      text: "We drank hot ____ to warm up after playing outside in the cold.",
      options: ["ice", "milk", "lemonade", "cola"],
      answer: 1,
      explanation: "Hot milk warms you up. Ice is cold, and lemonade and cola are cold drinks."
    },
    {
      text: "The roads were ____ with ice, so cars drove very slowly.",
      options: ["dry", "warm", "clean", "dangerous"],
      answer: 3,
      explanation: "Icy roads are dangerous, so drivers slow down. 'Dry', 'warm' and 'clean' roads are safe."
    },
    {
      text: "In December it gets dark very ____ in the afternoon.",
      options: ["late", "early", "slowly", "rarely"],
      answer: 1,
      explanation: "Winter days are short, so it gets dark early. 'Late' is for summer, and 'slowly' and 'rarely' do not fit."
    },
    {
      text: "My little sister sat on the ____ and I pulled her over the snow.",
      options: ["bike", "skateboard", "sledge", "surfboard"],
      answer: 2,
      explanation: "A sledge is pulled over snow. A bike, skateboard and surfboard do not work on snow this way."
    },
    {
      text: "Close the window! You're letting all the ____ air in.",
      options: ["warm", "fresh", "cold", "clean"],
      answer: 2,
      explanation: "In winter you close windows to keep cold air out. 'Warm', 'fresh' and 'clean' air is not a reason to complain."
    },
    /* ---------- Pronouns and possessives ---------- */
    {
      text: "This isn't my pencil case. Is it ____?",
      options: ["your", "yours", "you", "you're"],
      answer: 1,
      explanation: "'Yours' is the possessive pronoun that stands alone. 'Your' needs a noun after it, and 'you' and 'you're' are not possessives."
    },
    {
      text: "That's my brother's bike. The red one is ____.",
      options: ["my", "me", "mine", "I"],
      answer: 2,
      explanation: "'Mine' stands alone as a possessive pronoun. 'My' needs a noun, and 'me' and 'I' are not possessive."
    },
    {
      text: "Maria lost ____ keys, so she can't open the door.",
      options: ["his", "she", "hers", "her"],
      answer: 3,
      explanation: "'Her keys' uses the possessive adjective before a noun. 'His' is for a man, 'hers' stands alone, and 'she' is a subject pronoun."
    },
    {
      text: "The dog is licking ____ paw. Maybe it hurt it.",
      options: ["it's", "its", "his'", "their"],
      answer: 1,
      explanation: "'Its' is the possessive of 'it'. 'It's' means 'it is', 'his'' is not a word, and 'their' is for plural owners."
    },
    {
      text: "My grandparents live near us, and we visit ____ every week.",
      options: ["they", "their", "them", "theirs"],
      answer: 2,
      explanation: "'Them' is the object pronoun after 'visit'. 'They' is a subject, and 'their' and 'theirs' are possessive."
    },
    {
      text: "Whose phone is this? I think it belongs to ____.",
      options: ["he", "his", "him", "himself"],
      answer: 2,
      explanation: "'Belongs to him' needs the object pronoun. 'He' is a subject, 'his' would need no 'to... him' pattern, and 'himself' is reflexive."
    },
    {
      text: "We made this cake ____ , without any help from Mum.",
      options: ["our", "ourself", "us", "ourselves"],
      answer: 3,
      explanation: "'Ourselves' means we did it with no help. 'Ourself' is not standard, and 'us' and 'our' do not express doing it alone."
    },
    {
      text: "____ bag is heavier, yours or mine?",
      options: ["Whose", "Who's", "Which's", "What's"],
      answer: 0,
      explanation: "'Whose' asks about the owner. 'Who's' means 'who is', and 'which's' and 'what's' cannot ask about possession here."
    },
    {
      text: "Anna and I are in the same class. ____ often do homework together.",
      options: ["Us", "Our", "We", "Them"],
      answer: 2,
      explanation: "'We' is the subject pronoun for 'Anna and I'. 'Us' is an object, 'our' is possessive, and 'them' is for other people."
    },
    {
      text: "The cat drank all the milk and then washed ____ face.",
      options: ["it", "its", "it's", "her's"],
      answer: 1,
      explanation: "'Its face' uses the possessive adjective. 'It' is a pronoun, 'it's' means 'it is', and 'her's' is not a word."
    },
    /* ---------- Linking words ---------- */
    {
      text: "I wanted to play outside, ____ it started to rain.",
      options: ["so", "because", "but", "or"],
      answer: 2,
      explanation: "'But' shows a contrast between the plan and the rain. 'So', 'because' and 'or' do not show this contrast."
    },
    {
      text: "She was tired, ____ she went to bed early.",
      options: ["but", "so", "or", "if"],
      answer: 1,
      explanation: "'So' shows the result of being tired. 'But' shows contrast, 'or' shows choice, and 'if' shows condition."
    },
    {
      text: "We stayed at home ____ the weather was terrible.",
      options: ["because", "but", "so", "although"],
      answer: 0,
      explanation: "'Because' gives the reason for staying home. 'But' and 'although' show contrast, and 'so' shows a result."
    },
    {
      text: "Would you like tea ____ coffee with your breakfast?",
      options: ["and", "but", "so", "or"],
      answer: 3,
      explanation: "'Or' offers a choice between two drinks. 'And' would mean both, and 'but' and 'so' do not offer choices."
    },
    {
      text: "____ you hurry, you will miss the school bus.",
      options: ["Because", "Although", "So", "Unless"],
      answer: 3,
      explanation: "'Unless' means 'if you don't'. 'Because', 'so' and 'although' do not give this warning meaning."
    },
    {
      text: "First we did our homework, and ____ we played video games.",
      options: ["while", "before", "until", "then"],
      answer: 3,
      explanation: "'Then' shows the next action in order. 'Before', 'until' and 'while' do not simply mean 'after that'."
    },
    {
      text: "____ I was walking to school, I saw a little lost dog.",
      options: ["Until", "While", "So", "Than"],
      answer: 1,
      explanation: "'While' introduces a longer action when something happened. 'Until', 'so' and 'than' do not fit this time meaning."
    },
    {
      text: "You can come with us ____ you promise to be quiet.",
      options: ["if", "or", "but", "so"],
      answer: 0,
      explanation: "'If' gives the condition for coming. 'Or', 'but' and 'so' do not express a condition."
    },
    {
      text: "I like both cats ____ dogs, so I can't choose a favourite.",
      options: ["or", "but", "and", "because"],
      answer: 2,
      explanation: "'Both... and' is the fixed pair. 'Or', 'but' and 'because' do not follow 'both'."
    },
    {
      text: "Wait here ____ I come back. I won't be long.",
      options: ["since", "during", "while", "until"],
      answer: 3,
      explanation: "'Until' means up to the time I return. 'During' needs a noun, 'while' needs a longer action, and 'since' looks back in time."
    },
    /* ---------- Verbs of movement ---------- */
    {
      text: "The monkey ____ up the tree very quickly.",
      options: ["swam", "climbed", "drove", "cooked"],
      answer: 1,
      explanation: "Monkeys climb trees. 'Swim' is for water, 'drive' is for cars, and 'cook' is for food."
    },
    {
      text: "Be careful! Don't ____ on the wet leaves.",
      options: ["sleep", "read", "slip", "sing"],
      answer: 2,
      explanation: "You can slip on wet leaves and fall. 'Sleep', 'read' and 'sing' are not dangers on wet leaves."
    },
    {
      text: "The ball went over the wall, so Tom ____ over to get it.",
      options: ["ate", "drank", "slept", "jumped"],
      answer: 3,
      explanation: "You jump over a wall. 'Ate', 'drank' and 'slept' are not ways to get over a wall."
    },
    {
      text: "She ____ into the pool and swam to the other end.",
      options: ["dived", "walked", "danced", "flew"],
      answer: 0,
      explanation: "'Dive into a pool' means to jump in head first. 'Walk', 'dance' and 'fly' are not how you enter water for a swim."
    },
    {
      text: "The old man walked slowly up the ____ to the first floor.",
      options: ["fridge", "stairs", "table", "cupboard"],
      answer: 1,
      explanation: "You walk up stairs to another floor. A fridge, table and cupboard are not for walking up."
    },
    {
      text: "The bird ____ out of the window and into the sky.",
      options: ["ran", "swam", "flew", "climbed"],
      answer: 2,
      explanation: "Birds fly into the sky. 'Ran', 'swam' and 'climbed' are not how birds leave through a window."
    },
    {
      text: "We ____ our bikes along the river path all morning.",
      options: ["rode", "drove", "sailed", "flew"],
      answer: 0,
      explanation: "'Ride a bike' is the correct verb. 'Drive' is for cars, 'sail' is for boats, and 'fly' is for planes."
    },
    {
      text: "The little boy ____ behind the sofa during the scary film.",
      options: ["painted", "cooked", "shopped", "hid"],
      answer: 3,
      explanation: "'Hid' means he went where nobody could see him. 'Cooked', 'shopped' and 'painted' do not fit being scared."
    },
    {
      text: "Please ____ over the small bridge and wait on the other side.",
      options: ["fall", "drop", "walk", "throw"],
      answer: 2,
      explanation: "You walk over a bridge. 'Fall' and 'drop' are accidents, and 'throw' needs an object."
    },
    {
      text: "The taxi ____ outside the hotel and we got in.",
      options: ["stopped", "started", "slept", "swam"],
      answer: 0,
      explanation: "A taxi stops so passengers can get in. 'Started', 'slept' and 'swam' do not let you get into a taxi."
    },
    /* ---------- At the airport ---------- */
    {
      text: "Please show your ____ card and passport at the gate.",
      options: ["birthday", "post", "playing", "boarding"],
      answer: 3,
      explanation: "A boarding card lets you get on the plane. Birthday, playing and post cards are not for flights."
    },
    {
      text: "Our ____ to Rome was two hours late because of the fog.",
      options: ["seat", "ticket", "suitcase", "flight"],
      answer: 3,
      explanation: "A flight can be late. A ticket, suitcase and seat cannot be late by hours."
    },
    {
      text: "You can't take that big bag on the plane. It's too ____.",
      options: ["light", "cheap", "heavy", "quiet"],
      answer: 2,
      explanation: "Heavy bags are not allowed in the cabin. 'Light', 'cheap' and 'quiet' bags are not a problem."
    },
    {
      text: "Please put on your ____ before the plane lands.",
      options: ["pyjamas", "seatbelt", "swimsuit", "apron"],
      answer: 1,
      explanation: "Passengers wear seatbelts for landing. Pyjamas, a swimsuit and an apron are not needed for landing."
    },
    {
      text: "We waited for our suitcases to ____ on the belt after we landed.",
      options: ["appear", "disappear", "sing", "cook"],
      answer: 0,
      explanation: "'Appear' means to come into view on the belt. 'Disappear' is the opposite, and 'sing' and 'cook' are impossible for suitcases."
    },
    {
      text: "The plane ____ safely at the airport just after midnight.",
      options: ["parked", "landed", "stopped by", "rode"],
      answer: 1,
      explanation: "'Land' is the verb for a plane coming down. 'Parked', 'stopped by' and 'rode' are not used for planes arriving."
    },
    {
      text: "Window or ____ seat? Which do you prefer on a plane?",
      options: ["aisle", "roof", "floor", "door"],
      answer: 0,
      explanation: "'Aisle seat' is next to the walkway. Roof, floor and door seats do not exist on planes."
    },
    {
      text: "We went through ____ control and showed our passports.",
      options: ["sports", "music", "food", "passport"],
      answer: 3,
      explanation: "'Passport control' is where documents are checked. Music, food and sports control are not airport areas."
    },
    {
      text: "The pilot said we would ____ off in ten minutes.",
      options: ["get", "take", "put", "turn"],
      answer: 1,
      explanation: "'Take off' is what a plane does when it leaves the ground. 'Get off', 'put off' and 'turn off' have different meanings."
    },
    {
      text: "I always feel a bit nervous ____ the plane goes up.",
      options: ["when", "what", "who", "which"],
      answer: 0,
      explanation: "'When' introduces the time something happens. 'What', 'who' and 'which' do not introduce a time clause here."
    },
    /* ---------- At the market ---------- */
    {
      text: "The fruit at this ____ is always fresh and cheap.",
      options: ["cinema", "airport", "hospital", "market"],
      answer: 3,
      explanation: "Fresh fruit is sold at a market. A cinema, hospital and airport do not sell fresh fruit stalls."
    },
    {
      text: "A ____ of milk, please, and half a dozen eggs.",
      options: ["slice", "bar", "bottle", "pair"],
      answer: 2,
      explanation: "Milk comes in a bottle. 'Slice' is for bread, 'bar' is for chocolate, and 'pair' is for two things."
    },
    {
      text: "Can I have a ____ of chocolate from the sweet stall?",
      options: ["drop", "loaf", "glass", "bar"],
      answer: 3,
      explanation: "'A bar of chocolate' is the fixed phrase. 'Loaf' is for bread, and 'glass' and 'drop' are for liquids."
    },
    {
      text: "These apples are two pounds a ____ . Shall we get one kilo or two?",
      options: ["minute", "metre", "kilo", "litre"],
      answer: 2,
      explanation: "Fruit is sold by the kilo. Minutes, metres and litres are not used for weighing apples."
    },
    {
      text: "The man at the cheese stall let us ____ a small piece before buying.",
      options: ["taste", "smell only", "throw", "hide"],
      answer: 0,
      explanation: "'Taste' means to try a little food. 'Smell only', 'throw' and 'hide' are not ways to try cheese before buying."
    },
    {
      text: "Put the eggs at the top of the bag so they don't ____.",
      options: ["fly", "break", "sing", "grow"],
      answer: 1,
      explanation: "Eggs break easily under heavy things. They cannot fly, sing or grow in a bag."
    },
    {
      text: "I need a ____ of rice for tonight's dinner.",
      options: ["packet", "pair", "sheet", "metre"],
      answer: 0,
      explanation: "Rice is sold in a packet. 'Pair' is for two things, 'sheet' is for paper, and 'metre' measures length, not food."
    },
    {
      text: "The vegetables were in a big ____ next to the bread.",
      options: ["envelope", "basket", "kettle", "mirror"],
      answer: 1,
      explanation: "Vegetables are kept in a basket. An envelope is for letters, a kettle is for water, and a mirror is for looking."
    },
    {
      text: "Everything is half ____ today, so let's buy lots of fruit!",
      options: ["time", "price", "past", "empty"],
      answer: 1,
      explanation: "'Half price' means it costs 50% less. 'Half time', 'half past' and 'half empty' are not about cheap shopping."
    },
    {
      text: "Don't forget the shopping ____ , or we won't remember what to buy.",
      options: ["dance", "song", "story", "list"],
      answer: 3,
      explanation: "A shopping list tells you what to buy. A song, story and dance do not help you remember shopping."
    },
    /* ---------- Modals and polite requests ---------- */
    {
      text: "____ I open the window? It's really hot in here.",
      options: ["Must", "Am", "Would", "May"],
      answer: 3,
      explanation: "'May I...?' politely asks for permission. 'Must' is obligation, 'would' needs 'you' for requests, and 'am' does not fit."
    },
    {
      text: "You ____ be quiet in the library. People are reading.",
      options: ["can't", "must", "may", "would"],
      answer: 1,
      explanation: "'Must' expresses a rule you have to follow. 'Can't' would mean it is impossible, and 'may' and 'would' do not state rules."
    },
    {
      text: "____ you help me carry this box upstairs, please?",
      options: ["Must", "Should", "Could", "May"],
      answer: 2,
      explanation: "'Could you...?' is a polite request for help. 'Must' and 'should' give advice or rules, and 'may' asks for my own permission."
    },
    {
      text: "You ____ eat in the classroom. It's against the school rules.",
      options: ["mustn't", "must", "have to", "need"],
      answer: 0,
      explanation: "'Mustn't' means it is not allowed. 'Must' and 'have to' mean it is necessary, and 'need' is not a rule form here."
    },
    {
      text: "It might rain later, so you ____ take an umbrella.",
      options: ["can't", "mustn't", "should", "wouldn't"],
      answer: 2,
      explanation: "'Should' gives friendly advice. 'Can't', 'mustn't' and 'wouldn't' do not give advice."
    },
    {
      text: "____ you like to come swimming with us tomorrow?",
      options: ["Should", "Could", "Must", "Would"],
      answer: 3,
      explanation: "'Would you like to...?' is the polite invitation. 'Should', 'could' and 'must' do not make this invitation."
    },
    {
      text: "I ____ swim when I was four years old. My dad taught me.",
      options: ["may", "should", "must", "could"],
      answer: 3,
      explanation: "'Could' is the past of 'can' for ability. 'Should', 'must' and 'may' do not express past ability."
    },
    {
      text: "You don't ____ to bring food. There will be pizza at the party.",
      options: ["must", "should", "have", "ought"],
      answer: 2,
      explanation: "'Don't have to' means it is not necessary. 'Must', 'should' and 'ought' do not follow 'don't' this way."
    },
    {
      text: "____ I borrow your bike for an hour? Mine has a flat tyre.",
      options: ["Can", "Must", "Should", "Do"],
      answer: 0,
      explanation: "'Can I...?' asks for permission in a friendly way. 'Must', 'should' and 'do' do not ask to borrow something."
    },
    {
      text: "We ____ hurry. The shop closes in fifteen minutes!",
      options: ["may", "might", "had better", "would rather"],
      answer: 2,
      explanation: "'Had better' means we should do it or there will be a problem. 'May' and 'might' are possibility, and 'would rather' is preference."
    },
    /* ---------- Question words ---------- */
    {
      text: "____ did you put my keys? I can't find them anywhere.",
      options: ["What", "Where", "Who", "Why"],
      answer: 1,
      explanation: "'Where' asks about a place, which fits looking for keys. 'What', 'who' and 'why' do not ask about a place."
    },
    {
      text: "____ are you crying? Did something bad happen?",
      options: ["Where", "Which", "Why", "Whose"],
      answer: 2,
      explanation: "'Why' asks for a reason, which fits asking about crying. 'Where', 'which' and 'whose' do not ask for reasons."
    },
    {
      text: "____ did the film finish? At about ten o'clock.",
      options: ["When", "Who", "What", "Whose"],
      answer: 0,
      explanation: "'When' asks about time, and the answer gives a time. 'Who', 'what' and 'whose' do not match a time answer."
    },
    {
      text: "____ one do you want, the blue shirt or the green one?",
      options: ["What", "Who", "Where", "Which"],
      answer: 3,
      explanation: "'Which' asks about a choice between known things. 'What', 'who' and 'where' do not fit choosing between two shirts."
    },
    {
      text: "____ old is your dog? He's three.",
      options: ["What", "How", "Which", "Why"],
      answer: 1,
      explanation: "'How old' asks about age. 'What', 'which' and 'why' cannot combine with 'old' to ask age."
    },
    {
      text: "____ is your favourite colour, red or yellow?",
      options: ["Who", "Where", "When", "What"],
      answer: 3,
      explanation: "'What' asks about a thing like a colour. 'Where', 'when' and 'who' ask about places, times and people."
    },
    {
      text: "____ taught you to play chess? My grandfather did.",
      options: ["What", "When", "Who", "Where"],
      answer: 2,
      explanation: "'Who' asks about the person, and the answer names a person. 'What', 'when' and 'where' do not ask about a person."
    },
    {
      text: "____ way is the beach? Is it left or right from here?",
      options: ["Which", "Who", "Why", "When"],
      answer: 0,
      explanation: "'Which way' asks about direction. 'Who', 'why' and 'when' cannot be used with 'way' for directions."
    },
    {
      text: "____ does the next bus arrive? In about ten minutes.",
      options: ["Whose", "Who", "Where's", "When"],
      answer: 3,
      explanation: "'When' asks about time, matching 'in about ten minutes'. 'Whose', 'who' and 'where's' do not ask about time."
    },
    {
      text: "____ colour are her eyes, blue or brown?",
      options: ["How", "Why", "Whose", "What"],
      answer: 3,
      explanation: "'What colour' asks about colour. 'How', 'whose' and 'why' do not combine with 'colour' this way."
    },
    /* ---------- Everyday mixed ---------- */
    {
      text: "I always ____ my grandparents a big hug when I see them.",
      options: ["do", "take", "put", "give"],
      answer: 3,
      explanation: "'Give someone a hug' is the correct collocation. 'Take', 'put' and 'do' are not used with 'a hug' this way."
    },
    {
      text: "Can you ____ a photo of us in front of the fountain?",
      options: ["make", "do", "take", "put"],
      answer: 2,
      explanation: "'Take a photo' is the correct collocation. 'Make', 'do' and 'put' are not used with 'a photo'."
    },
    {
      text: "It's dark in here. Can you ____ the light, please?",
      options: ["turn off", "turn on", "take off", "get on"],
      answer: 1,
      explanation: "'Turn on' makes the light work, which helps in the dark. 'Turn off' makes it darker, and 'take off' and 'get on' do not fit lights."
    },
    {
      text: "The alarm clock ____ at six, but I stayed in bed until seven.",
      options: ["went off", "put off", "took off", "got off"],
      answer: 0,
      explanation: "An alarm 'goes off' when it rings. 'Put off', 'take off' and 'get off' are not used for alarms ringing."
    },
    {
      text: "I'm ____ forward to the school holidays. Only two weeks left!",
      options: ["seeing", "looking", "watching", "getting"],
      answer: 1,
      explanation: "'Look forward to' means to feel happy about a future event. 'See', 'watch' and 'get' do not make this phrase."
    },
    {
      text: "Could you ____ the salt, please? It's next to you.",
      options: ["pass", "throw", "kick", "post"],
      answer: 0,
      explanation: "'Pass the salt' is the polite table request. 'Throw' and 'kick' are rude or silly at the table, and 'post' is for letters."
    },
    {
      text: "Let me ____ you my new skateboard. It's in the garage.",
      options: ["watch", "see", "look", "show"],
      answer: 3,
      explanation: "'Show you' means to let you see it. 'See', 'look' and 'watch' cannot take 'you my skateboard' as objects."
    },
    {
      text: "It's late. It's time to say ____ and go home.",
      options: ["hello", "goodbye", "please", "sorry"],
      answer: 1,
      explanation: "You say goodbye when leaving. 'Hello' is for arriving, and 'please' and 'sorry' are not for leaving."
    },
    {
      text: "____ me, is this the right platform for the London train?",
      options: ["Forgive", "Sorry", "Excuse", "Pardon of"],
      answer: 2,
      explanation: "'Excuse me' politely starts a question to a stranger. 'Forgive me' and 'sorry' are for apologising, and 'pardon of' is not correct."
    },
    {
      text: "Good ____! Sleep well and see you in the morning.",
      options: ["morning", "afternoon", "night", "day"],
      answer: 2,
      explanation: "'Good night' is said before sleeping. 'Good morning', 'good afternoon' and 'good day' are greetings for other times."
    },
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
