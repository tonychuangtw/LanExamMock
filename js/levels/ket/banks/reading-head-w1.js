/* KET Prep bank: matching headings reading (wave 1) */
(function () {
var BANK = [
  {
    id: "k-head-01",
    title: "A Weekend Visit to London",
    sections: [
      { label: "A", text: "Last month, my family and I visited London for the weekend. We live in a small village in the north, so the trip was very exciting for us. We travelled by train because Dad said driving in London is difficult and parking costs a lot of money. The journey took three hours. I sat by the window and watched the fields, then the small towns, and finally the tall buildings of the city. My little brother slept for most of the journey, but I was too excited to close my eyes." },
      { label: "B", text: "Our hotel was small but clean, and it was near a station, which was very useful. The best thing about the room was the view. From our window on the sixth floor, we could see the river and hundreds of lights in the evening. Breakfast was in a bright room downstairs. There was fruit, eggs, toast and juice, and the staff were kind to my brother when he dropped his plate. Mum said the hotel was good value because it was not expensive for London." },
      { label: "C", text: "On Saturday we visited the famous clock tower and the palace where the King lives. There were people from many countries taking photos everywhere. We also went to a science museum, which was my favourite place. Many things there were free, and you could touch and try a lot of the machines. My brother liked a big model of the moon. We stayed there for three hours, and we only left because our stomachs were making noises. Dad promised we would return one day." },
      { label: "D", text: "For lunch on Sunday, we went to a street food market near the river. The smells were amazing. You could buy food from Mexico, India, Thailand and many other countries, all in one place. I chose noodles in a hot sauce, and Mum tried a cheese sandwich that was as big as her head. We sat on the steps by the water to eat. It was the best meal of the whole trip, and it was cheaper than a restaurant." },
      { label: "E", text: "On the train home, we talked about our next visit. There were so many things we did not have time to see. Mum wants to watch a show in a big theatre, and I want to visit the zoo. Dad says next time we should stay for a whole week, not just a weekend. My brother just wants to ride on the top of a red bus again. I fell asleep before we arrived home, with the map of London still in my hand." }
    ],
    options: [
      "Plans for another trip",
      "The journey to the city",
      "A problem with the train tickets",
      "Tasting dishes from around the world",
      "A day of famous sights and museums",
      "Shopping for presents and souvenirs",
      "The place where the family stayed",
      "Why London taxis are famous"
    ],
    questions: [
      { q: "Paragraph A", answer: 1, explanation: "Paragraph A describes travelling by train from the village to London and watching the fields and towns from the window - the journey to the city." },
      { q: "Paragraph B", answer: 6, explanation: "Paragraph B is about the small clean hotel, the view from the room and the breakfast - the place where the family stayed." },
      { q: "Paragraph C", answer: 4, explanation: "Paragraph C describes visiting the clock tower, the palace and the science museum - a day of famous sights and museums." },
      { q: "Paragraph D", answer: 3, explanation: "Paragraph D is about the street food market with food from Mexico, India and Thailand - tasting dishes from around the world." },
      { q: "Paragraph E", answer: 0, explanation: "Paragraph E lists what each person wants to do next time, like the theatre and the zoo - plans for another trip." }
    ]
  },
  {
    id: "k-head-02",
    title: "Keeping a Pet Rabbit",
    sections: [
      { label: "A", text: "Rabbits are quiet, gentle animals, and many families choose them as pets. Before you get a rabbit, you should think carefully. A rabbit can live for eight years or more, so it is a friend for a long time, not just for a few months. Rabbits are not good presents for very small children, because they do not like loud noise or being carried all the time. If your family is calm and patient, a rabbit can be a wonderful pet for everyone." },
      { label: "B", text: "A rabbit needs a safe and comfortable place to live. The house, called a hutch, must be big enough for the rabbit to stand up and jump three times from one end to the other. Put soft, dry grass on the floor and clean the hutch every week. Rabbits also need time outside the hutch every day. A garden with a fence is perfect, but always watch for cats and other animals that could hurt your pet." },
      { label: "C", text: "Feeding a rabbit is easy, but you must give it the right things. The most important food is hay, which is dry grass, and your rabbit should have it all day. Rabbits also enjoy dark green leaves and a small piece of carrot or apple sometimes. Do not give them bread, cake or sweets, because these can make them very ill. Fresh, clean water must always be there, in a heavy bowl that the rabbit cannot turn over." },
      { label: "D", text: "Rabbits are happier when they are not alone. In nature, they live in big groups under the ground, so a single rabbit can feel sad and lonely. Many animal doctors say it is better to keep two rabbits together, usually two sisters or two brothers from the same family. Two rabbits will sleep next to each other, clean each other's ears and play together. Watching two rabbit friends run around the garden is one of the best parts of having them." },
      { label: "E", text: "A healthy rabbit has bright eyes, clean ears and soft fur, and it is interested in food and play. If your rabbit stops eating for a day, sits still in a corner, or has wet eyes, take it to an animal doctor quickly. Rabbits often hide it when they feel ill, so owners must watch them carefully every day. It is also a good idea to visit the animal doctor once a year for a general check, even when your pet seems fine." }
    ],
    options: [
      "The right food and drink",
      "Famous rabbits in stories and films",
      "Think before you choose this pet",
      "How to teach a rabbit simple tricks",
      "Why one rabbit is not enough",
      "A good home for your rabbit",
      "Watching your pet's health",
      "The history of rabbits in Europe"
    ],
    questions: [
      { q: "Paragraph A", answer: 2, explanation: "Paragraph A tells readers to think carefully before getting a rabbit, because it lives many years and does not suit very small children." },
      { q: "Paragraph B", answer: 5, explanation: "Paragraph B is about the hutch, its size, cleaning it, and safe time in the garden - a good home for your rabbit." },
      { q: "Paragraph C", answer: 0, explanation: "Paragraph C explains what rabbits should eat and drink, like hay, green leaves and fresh water - the right food and drink." },
      { q: "Paragraph D", answer: 4, explanation: "Paragraph D says a single rabbit can feel lonely and that it is better to keep two together - why one rabbit is not enough." },
      { q: "Paragraph E", answer: 6, explanation: "Paragraph E describes the signs of a healthy rabbit and when to see an animal doctor - watching your pet's health." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
