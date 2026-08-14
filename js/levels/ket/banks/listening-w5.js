/* KET Prep extra bank: listening week 5 */
(function () {
var BANK = [
  { id: "ket-lis5-01", title: "Announcement: The School Library Is Moving", kind: "monologue",
    script: "Hello, everyone, this is Miss Porter, the school librarian, with some news about our library. Next week, the library is moving to a new room. The old room next to the science lab is too small now, because we have many new books. The new library will be on the first floor, next to the art room. It is twice as big and has large windows, so there is lots of light for reading. Please listen carefully to the dates. The library will close on Monday and Tuesday, because we will put all the books into boxes and carry them upstairs. If you have books at home, please bring them back before Monday. You can put them in the brown box outside the school office. The new library will open on Wednesday at lunchtime. To celebrate, there will be a small party with fruit juice and a book quiz. The winner of the quiz will get a ten-pound book ticket. One more thing: we need six strong students from Year Eight to help us move the boxes on Tuesday afternoon. If you want to help, write your name on the list on my door before Friday. Helpers will get a free hot chocolate from the kitchen. Thank you, and see you in our beautiful new library.",
    questions: [
      { q: "Why is the library moving?", options: ["The old room is too small.", "The science lab needs the room.", "The old room has no door.", "The art room is closing."], answer: 0, explanation: "Miss Porter says the old room 'is too small now, because we have many new books'." },
      { q: "Where will the new library be?", options: ["Next to the science lab.", "Next to the art room.", "Behind the school office.", "Near the kitchen."], answer: 1, explanation: "The new library 'will be on the first floor, next to the art room'." },
      { q: "When will the new library open?", options: ["On Monday morning.", "On Tuesday afternoon.", "On Wednesday at lunchtime.", "On Friday."], answer: 2, explanation: "She says 'the new library will open on Wednesday at lunchtime'." },
      { q: "What will the quiz winner get?", options: ["A free hot chocolate.", "A box of fruit juice.", "A new library card.", "A ten-pound book ticket."], answer: 3, explanation: "The winner of the book quiz 'will get a ten-pound book ticket'." },
      { q: "What should students do if they want to help on Tuesday?", options: ["Write their name on the list on Miss Porter's door.", "Go to the school office on Monday.", "Bring a brown box from home.", "Ask the kitchen for hot chocolate."], answer: 0, explanation: "Helpers should 'write your name on the list on my door before Friday'." }
    ] },
  { id: "ket-lis5-02", title: "Radio Chat: Mia's Baking Hobby", kind: "dialogue",
    script: "Presenter: Welcome back to Young Talents. Today our guest is Mia, who is twelve and loves baking. Hello, Mia!\nMia: Hello! Thank you for having me.\nPresenter: When did you start baking?\nMia: Two years ago, when I was ten. My grandma showed me how to make banana bread one rainy weekend, and I loved it.\nPresenter: What do you like baking most now?\nMia: Most people think it's cakes, but my favourite thing is bread. I make white bread for my family every Saturday morning. I get up at seven to start, because the bread needs time to grow before it goes in the oven.\nPresenter: Wow, that's early for a weekend! Who eats all this bread?\nMia: My mum, my dad and my two little brothers. My brothers always want it warm, with butter and honey.\nPresenter: Do you ever have problems in the kitchen?\nMia: Of course! Last month I forgot the salt, and the bread tasted very boring. And once I used the wrong flour and it was flat like a pizza. My dad ate it anyway. He said it was a new invention!\nPresenter: What's next for you, Mia?\nMia: There's a baking competition for children at the town hall in July. I want to make a chocolate and orange cake for it. My grandma is helping me practise every Sunday.\nPresenter: Good luck, Mia, and thanks for coming in today!",
    questions: [
      { q: "How old was Mia when she started baking?", options: ["Seven.", "Ten.", "Twelve.", "Two."], answer: 1, explanation: "She started two years ago, 'when I was ten'; she is twelve now." },
      { q: "What does Mia like baking most?", options: ["Cakes.", "Banana bread.", "Bread.", "Pizza."], answer: 2, explanation: "She says most people think it's cakes, 'but my favourite thing is bread'." },
      { q: "Why does Mia get up at seven on Saturdays?", options: ["To buy flour at the shop.", "To watch a baking show.", "To make breakfast for her grandma.", "Because the bread needs time to grow."], answer: 3, explanation: "She starts early 'because the bread needs time to grow before it goes in the oven'." },
      { q: "What happened when Mia forgot the salt?", options: ["The bread tasted boring.", "The bread was flat like a pizza.", "Her dad refused to eat it.", "The oven stopped working."], answer: 0, explanation: "Last month she forgot the salt 'and the bread tasted very boring'." },
      { q: "What will Mia make for the competition?", options: ["White bread with honey.", "A chocolate and orange cake.", "Banana bread.", "An orange pizza."], answer: 1, explanation: "She wants 'to make a chocolate and orange cake' for the competition in July." }
    ] }
,
  {
    id: "ket-lis5-03",
    title: "Swimming Pool Announcement",
    kind: "monologue",
    script: "Hello, everyone. This is an announcement for all members of the town swimming pool. From next Monday, the pool will open earlier in the morning, at half past six, so people can swim before work or school. The evening closing time stays the same: nine o'clock. Please remember that the small pool will be closed on Tuesday morning, because we are teaching baby swimming classes there. If you come by bicycle, please do not leave it by the front door. There is a new bicycle park behind the building, next to the café, and it is free for members. Our summer competition is on Saturday the second of August. You can put your name on the list at the front desk before Friday. It costs two pounds to enter, and every swimmer gets a T-shirt at the end. The fastest swimmers in each group will win cinema tickets. One more thing: we still need two helpers for the competition day. Helpers do not pay for lunch, and they can use the pool free for one month. If you would like to help, please speak to Anna in the office before Thursday. Thank you for listening, and enjoy your swim!",
    questions: [
      { q: "From next Monday, what time will the pool open in the morning?",
        options: ["At six o'clock", "At half past six", "At half past seven", "At nine o'clock"],
        answer: 1,
        explanation: "The pool 'will open earlier in the morning, at half past six'." },
      { q: "Why will the small pool be closed on Tuesday morning?",
        options: ["For cleaning", "For a competition", "For baby swimming classes", "Because of repairs"],
        answer: 2,
        explanation: "It is closed 'because we are teaching baby swimming classes there'." },
      { q: "Where is the new bicycle park?",
        options: ["By the front door", "Behind the building, next to the café", "In front of the office", "At the front desk"],
        answer: 1,
        explanation: "'There is a new bicycle park behind the building, next to the café.'" },
      { q: "What does every swimmer in the competition get?",
        options: ["Cinema tickets", "Two pounds", "A T-shirt", "A free month at the pool"],
        answer: 2,
        explanation: "'Every swimmer gets a T-shirt at the end'; only the fastest win cinema tickets." },
      { q: "What do helpers on competition day receive?",
        options: ["Free lunch and one month of free swimming", "Cinema tickets for their family", "Two pounds each", "A new bicycle"],
        answer: 0,
        explanation: "'Helpers do not pay for lunch, and they can use the pool free for one month.'" }
    ]
  }
,
  { id: "ket-lis5-04", title: "Announcement: School Trip to the Farm", kind: "monologue",
    script: "Good morning, Class Six. This is Mr Evans with some information about our trip to Green Hill Farm on Thursday. The bus will leave from the school gate at half past eight, so please arrive at twenty past eight. Do not be late! The journey takes about forty minutes. At the farm, a farmer called Mrs Field will show us the cows, the sheep and the new baby goats. You can feed the goats, but please do not run near the animals, because it makes them afraid. Bring a packed lunch and a bottle of water. There is a small shop at the farm, but it only sells ice cream, so eat a good breakfast. Wear old shoes or boots, because the paths can be wet and dirty. The farm has a museum of old tractors, and we will visit it after lunch. In the afternoon, everyone can take photos in the sunflower field. We will be back at school at four o'clock, one hour later than normal, so please tell your parents. If it rains a lot on Thursday, the trip will move to the following Tuesday. Any questions? Come and ask me at break time.",
    questions: [
      { q: "What time should students arrive at the school gate?", options: ["At twenty past eight.", "At half past eight.", "At eight o'clock.", "At four o'clock."], answer: 0, explanation: "The bus leaves at half past eight, so students must 'arrive at twenty past eight'." },
      { q: "What can students do with the baby goats?", options: ["Run with them.", "Feed them.", "Take them home.", "Give them water."], answer: 1, explanation: "Mr Evans says 'you can feed the goats' but must not run near the animals." },
      { q: "What does the farm shop sell?", options: ["Packed lunches.", "Bottles of water.", "Only ice cream.", "Old boots."], answer: 2, explanation: "The small shop 'only sells ice cream'." },
      { q: "What will the class do after lunch?", options: ["Feed the cows.", "Go home early.", "Meet Mrs Field.", "Visit the tractor museum."], answer: 3, explanation: "He says 'we will visit it after lunch', talking about the museum of old tractors." },
      { q: "What happens if it rains a lot on Thursday?", options: ["The trip moves to the following Tuesday.", "The class stays at school for ever.", "The bus leaves earlier.", "The trip is cancelled for the year."], answer: 0, explanation: "If it rains a lot, 'the trip will move to the following Tuesday'." }
    ] },
  { id: "ket-lis5-05", title: "Phone Message: Ben's Birthday Plans", kind: "monologue",
    script: "Hi Sam, it's Ben. I'm calling about my birthday on Saturday. The plan has changed a little, so listen carefully. First, we are not going to the cinema any more. The film we wanted to see finishes on Friday, one day before my birthday. So instead, we are going to the bowling centre in King Street. It's the new one, next to the supermarket, not the old one near the station. My dad will drive us there. He can take four people in the car, so it will be you, me, Tom and Lucy. We will pick you up at your house at two o'clock. The bowling costs six pounds each, but you don't need to bring money, because my grandma gave me some for my birthday, and I want to pay for everybody. After bowling, we are going back to my house for pizza. My mum is making a chocolate cake too. Oh, and one more thing: please don't tell Lucy about the cake. It has her name on it as well, because her birthday was last week, and we want to surprise her. Can you call me back tonight after seven? Thanks! Bye!",
    questions: [
      { q: "Why aren't they going to the cinema?", options: ["The cinema is closed on Saturdays.", "The film finishes on Friday.", "Ben doesn't like films.", "The tickets are too expensive."], answer: 1, explanation: "The film 'finishes on Friday, one day before my birthday'." },
      { q: "Where is the new bowling centre?", options: ["Near the station.", "In the supermarket.", "Next to the supermarket in King Street.", "At Ben's house."], answer: 2, explanation: "It is 'the new one, next to the supermarket' in King Street." },
      { q: "Who is paying for the bowling?", options: ["Sam.", "Ben's dad.", "Each person pays six pounds.", "Ben, with money from his grandma."], answer: 3, explanation: "Ben says his grandma gave him money 'and I want to pay for everybody'." },
      { q: "What is the surprise for Lucy?", options: ["The cake has her name on it too.", "She is going to the cinema.", "Ben's mum is making pizza.", "She gets six pounds."], answer: 0, explanation: "The cake has Lucy's name on it 'because her birthday was last week, and we want to surprise her'." },
      { q: "What should Sam do tonight?", options: ["Go to Ben's house at seven.", "Call Ben back after seven.", "Buy a chocolate cake.", "Tell Lucy about the plan."], answer: 1, explanation: "Ben asks: 'Can you call me back tonight after seven?'" }
    ] },
  { id: "ket-lis5-06", title: "Conversation: Lost and Found at the Sports Centre", kind: "dialogue",
    script: "Woman: Good afternoon, sports centre reception. How can I help you?\nBoy: Hello. I think I left my bag here yesterday evening. I had a basketball lesson.\nWoman: I see. What does the bag look like?\nBoy: It's a blue sports bag with white letters on the side. The letters say City Tigers — that's my team.\nWoman: Let me look in our lost property box... We have a black school bag, an umbrella, and yes — a blue bag with white letters.\nBoy: Brilliant! That's mine!\nWoman: Can you tell me what's inside it, please? We have to check.\nBoy: Of course. There are my white trainers, a red water bottle and my house keys.\nWoman: That's all correct. And your name, please?\nBoy: It's Jack Turner. T-U-R-N-E-R.\nWoman: Thank you, Jack. You can come and get the bag any day this week. We're open from nine in the morning until ten at night. But don't come between one and two, because the reception is closed for lunch then.\nBoy: OK. I'll come tomorrow after school, at about four. Do I need to bring anything?\nWoman: Yes, please bring your student card, so we know it's really you.\nBoy: No problem. Thank you very much!\nWoman: You're welcome. See you tomorrow, Jack.",
    questions: [
      { q: "What did Jack lose?", options: ["A blue sports bag.", "A black school bag.", "An umbrella.", "A basketball."], answer: 0, explanation: "Jack says he left 'a blue sports bag with white letters on the side'." },
      { q: "What is inside the bag?", options: ["A student card and keys.", "White trainers, a red water bottle and house keys.", "Basketball clothes and an umbrella.", "A red bottle and black shoes."], answer: 1, explanation: "Jack lists 'my white trainers, a red water bottle and my house keys'." },
      { q: "When is the reception closed?", options: ["After ten at night... and all morning.", "On school days.", "Between one and two.", "Tomorrow at four."], answer: 2, explanation: "The woman says 'don't come between one and two, because the reception is closed for lunch'." },
      { q: "When will Jack collect the bag?", options: ["Yesterday evening.", "Today at lunchtime.", "Next week.", "Tomorrow after school at about four."], answer: 3, explanation: "Jack says: 'I'll come tomorrow after school, at about four.'" },
      { q: "What must Jack bring?", options: ["His student card.", "His team shirt.", "Two pounds.", "His house keys."], answer: 0, explanation: "The woman asks him to 'bring your student card, so we know it's really you'." }
    ] }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.LISTENING = (window.LISTENING || []).concat(BANK);
})();
