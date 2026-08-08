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
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.LISTENING = (window.LISTENING || []).concat(BANK);
})();
