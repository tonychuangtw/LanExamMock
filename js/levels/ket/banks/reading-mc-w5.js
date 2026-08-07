/* KET Prep bank: reading multiple-choice (wave 5) */
(function () {
var BANK = [
  {
    id: "ket-rmc5-01",
    title: "The New Bicycle",
    text: "Anna is thirteen and lives with her family in a small town by the sea. For her birthday last week, her grandparents gave her some money, and her parents added a little more. On Saturday morning, Anna and her dad went to the bicycle shop in the town centre to choose her first new bicycle. The shop opens at nine o'clock, and they arrived early because Anna was so excited. The shop assistant, a young woman called Marta, showed Anna three bicycles: a red one, a green one, and a silver one. The red bicycle was beautiful, but it was too expensive. The green one was cheap, but it was a little too small for Anna's long legs. The silver one was just right, and it had a light, a bell, and a small bag under the seat for tools. Anna rode it slowly around the car park behind the shop to try it. Her dad watched and said she looked very happy. They also bought a white helmet, because Anna's mum said she must always wear one. On the way home, Anna rode her new bicycle beside her dad, who walked. It took them thirty minutes, which was longer than usual, because Anna stopped twice to show her friends. On Sunday, the whole family rode to the beach together. Anna's brother Tom, who is only seven, rode his old orange bicycle and was slow, so they rested at the park in the middle of the trip. Anna thinks next summer she will ride to school every day and save her bus money for a new bell.",
    questions: [
      { q: "Who gave Anna money for her birthday?", options: ["Only her parents", "Her grandparents and her parents", "Her friend Marta", "Her brother Tom"], answer: 1, explanation: "The text says her grandparents gave her some money 'and her parents added a little more'." },
      { q: "Why did Anna and her dad arrive at the shop early?", options: ["The shop closes at nine o'clock", "They wanted to walk to the beach", "Anna was very excited", "Marta asked them to come early"], answer: 2, explanation: "They arrived early 'because Anna was so excited'." },
      { q: "What was wrong with the green bicycle?", options: ["It was too expensive", "It had no light", "It was too big", "It was too small for Anna"], answer: 3, explanation: "The green one was cheap 'but it was a little too small for Anna's long legs'." },
      { q: "Where did Anna try the silver bicycle?", options: ["In the car park behind the shop", "On the road to the beach", "In the town centre", "In the park"], answer: 0, explanation: "She 'rode it slowly around the car park behind the shop to try it'." },
      { q: "Why did the trip home take thirty minutes?", options: ["Anna's dad rode very slowly", "Anna stopped to show her friends", "They rested at the park", "The helmet was heavy"], answer: 1, explanation: "It took longer than usual 'because Anna stopped twice to show her friends'." },
      { q: "What does Anna want to do next summer?", options: ["Buy a new orange bicycle", "Take the bus to the beach", "Ride to school every day", "Sell her old bell"], answer: 2, explanation: "She thinks 'next summer she will ride to school every day and save her bus money'." }
    ]
  },
  {
    id: "ket-rmc5-02",
    title: "A Job at the Animal Home",
    text: "Every Saturday, Marco helps at the animal home near his house. The animal home is a place for cats and dogs that do not have families. Marco started helping there six months ago, after he read about it in the town newspaper. He is fourteen, so he cannot work with the biggest dogs yet — that is a job for people over sixteen — but there are many other things to do. Marco arrives at half past eight in the morning. First, he helps Mrs Field, the manager, to wash the food bowls and fill them with fresh food and clean water. Then he sweeps the floor of the cat rooms while the cats watch him from their warm beds. His favourite cat is a fat black one called Pepper, who always tries to sit on his shoes. At ten o'clock, Marco and the other helpers take the small dogs to the garden. The dogs run, jump, and play with old tennis balls. Marco's job is to close the gate carefully and count the dogs when they go out and come back in. Once, a little brown dog called Nut hid behind a tree, and everyone looked for him for ten minutes! At twelve o'clock, Marco eats his sandwiches with the other helpers in the kitchen. In the afternoon, he makes posters about the animals. The posters go on the animal home's website, and families read them and sometimes come to give a cat or dog a new home. Last month, seven dogs and eleven cats found new families. Marco feels proud when that happens, although he is always a little sad to say goodbye to Pepper's friends.",
    questions: [
      { q: "How did Marco learn about the animal home?", options: ["From the town newspaper", "From Mrs Field", "From a school poster", "From his parents"], answer: 0, explanation: "He started helping 'after he read about it in the town newspaper'." },
      { q: "Why can't Marco work with the biggest dogs?", options: ["He is afraid of them", "He is not old enough", "Mrs Field needs him in the kitchen", "The big dogs live in the garden"], answer: 1, explanation: "That job is 'for people over sixteen', and Marco is fourteen." },
      { q: "What is the first thing Marco does at the animal home?", options: ["He sweeps the cat rooms", "He takes the dogs to the garden", "He helps wash and fill the food bowls", "He makes posters"], answer: 2, explanation: "First, he helps Mrs Field 'to wash the food bowls and fill them with fresh food and clean water'." },
      { q: "What is Marco's job in the garden?", options: ["To throw tennis balls", "To wash the small dogs", "To hide behind a tree", "To close the gate and count the dogs"], answer: 3, explanation: "His job is 'to close the gate carefully and count the dogs'." },
      { q: "What happens because of Marco's posters?", options: ["Families come to give animals a home", "The animals get more food", "The newspaper writes about Marco", "Helpers get free sandwiches"], answer: 0, explanation: "Families read the posters on the website 'and sometimes come to give a cat or dog a new home'." },
      { q: "How does Marco feel when animals find new families?", options: ["Only sad", "Proud, but a little sad too", "Angry with Mrs Field", "Afraid for the cats"], answer: 1, explanation: "He 'feels proud when that happens, although he is always a little sad' to say goodbye." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.mc = window.READING.mc.concat(BANK);
})();
