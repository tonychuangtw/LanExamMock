/* KET Prep bank: Reading True/False/Not Given (A2) — wave 8 */
(function () {
var TFNG = ["True", "False", "Not Given"];
var BANK = [
  {
    id: "ket-rtfng8-01",
    title: "Why Onions Make You Cry",
    text: "An onion sitting on a table does nothing to anybody. It is only when you cut it that your eyes begin to hurt, and the reason is that an onion contains two things that are kept apart while the onion is whole. When the knife breaks the cells, those two things meet and a chemical reaction happens. The result is a gas. The gas rises, reaches your eyes and mixes with the water on the surface of them, and this produces a small amount of acid. Your eyes are not damaged by it, but they do what they are supposed to do with anything unpleasant, which is to wash it away, and that is why you cry. Every part of this happens in a few seconds. There are several ways to make it better and some of them work. Cutting the onion under running water helps because the gas dissolves in water before it reaches you. A very sharp knife helps because it breaks fewer cells than a blunt one, which crushes. Putting the onion in the fridge for half an hour first helps, because the reaction is slower when the onion is cold. Wearing glasses that fit closely works extremely well and looks ridiculous. Two things that do not work, whatever people say, are holding a piece of bread in your mouth and putting a spoon between your teeth. Some onions are stronger than others. Older onions and onions grown in dry conditions generally produce more gas than young ones, which is why the same recipe can be much worse in one month than in another.",
    questions: [
      { q: "A whole onion does not affect your eyes.", options: TFNG, answer: 0, explanation: "True: 'An onion sitting on a table does nothing to anybody.'" },
      { q: "The gas is produced before the onion is cut.", options: TFNG, answer: 1, explanation: "False: the two substances only meet when the knife breaks the cells." },
      { q: "The gas damages the eyes.", options: TFNG, answer: 1, explanation: "False: 'Your eyes are not damaged by it'." },
      { q: "Cutting an onion under water can help.", options: TFNG, answer: 0, explanation: "True: the gas dissolves in water first." },
      { q: "A sharp knife makes the problem worse.", options: TFNG, answer: 1, explanation: "False: a sharp knife breaks fewer cells and helps." },
      { q: "Red onions are stronger than white ones.", options: TFNG, answer: 2, explanation: "Not Given: colours of onion are not mentioned." },
      { q: "Older onions usually produce more gas.", options: TFNG, answer: 0, explanation: "True: older onions generally produce more gas." }
    ]
  },
  {
    id: "ket-rtfng8-02",
    title: "How a Fridge Works",
    text: "A fridge does not make cold. There is no such thing as cold: there is only heat, and less of it. What a fridge does is take heat out of the space inside it and put that heat somewhere else, which is the room the fridge is standing in. This is why the back of a fridge is warm, and why a fridge with its door left open will heat a small room rather than cool it. Inside the machine there is a liquid that boils at a very low temperature. It passes through a pipe inside the fridge, where it takes heat from the food and the air and turns into a gas. The gas is then pumped to the pipes at the back, where it is squeezed by a pump, becomes hot, and gives its heat to the room. As it cools it turns back into a liquid and goes round again. The pump is the part that uses electricity, and it is the noise you hear when a fridge is working. A fridge does not run all the time. It runs until the inside reaches the right temperature, then stops, and starts again when the temperature rises, which is why opening the door often makes a fridge use more power. The freezer works in exactly the same way at a lower temperature. Food lasts longer when it is cold because the bacteria that spoil it grow much more slowly, and in a freezer they stop growing almost completely, although they are not killed and will start again when the food is warm.",
    questions: [
      { q: "A fridge produces cold air.", options: TFNG, answer: 1, explanation: "False: 'A fridge does not make cold.'" },
      { q: "The back of a fridge becomes warm.", options: TFNG, answer: 0, explanation: "True: the heat is given to the room at the back." },
      { q: "Leaving the door open would cool a room.", options: TFNG, answer: 1, explanation: "False: it would heat a small room rather than cool it." },
      { q: "The liquid inside boils at a low temperature.", options: TFNG, answer: 0, explanation: "True: 'a liquid that boils at a very low temperature'." },
      { q: "A fridge runs continuously.", options: TFNG, answer: 1, explanation: "False: it stops when the right temperature is reached." },
      { q: "Modern fridges use less electricity than older ones.", options: TFNG, answer: 2, explanation: "Not Given: no comparison between old and new is made." },
      { q: "Freezing kills the bacteria in food.", options: TFNG, answer: 1, explanation: "False: 'they are not killed'." }
    ]
  },
  {
    id: "ket-rtfng8-03",
    title: "The Moon",
    text: "The Moon goes round the Earth once every twenty-seven days and it turns exactly once in the same period. This is not an accident and it has a result that surprises people: the same side of the Moon always faces us. Everybody on Earth, in every country, has always seen the same half. The other side was not photographed until 1959, when a spacecraft went round it and sent back pictures. It is often called the dark side, which is wrong, because it gets exactly as much sunlight as the side we see. The Moon has no air, no weather and almost no water, and this is why footprints left there in 1969 are still there. Nothing moves them. There is no wind to blow dust across them and no rain to wash them away, and they will probably last for millions of years. The Moon is also responsible for the tides. Its gravity pulls the water on the side of the Earth nearest to it, and the sea rises there, and this happens twice a day as the Earth turns. The Sun also affects the tides but less than the Moon does, because although the Sun is far larger it is very much further away. The Moon is moving away from us at about four centimetres a year. This is measured with mirrors that astronauts left on the surface: a beam of light is sent from Earth, bounces off a mirror and comes back, and the time it takes gives the distance very precisely.",
    questions: [
      { q: "We always see the same side of the Moon.", options: TFNG, answer: 0, explanation: "True: 'the same side of the Moon always faces us'." },
      { q: "The far side of the Moon never receives sunlight.", options: TFNG, answer: 1, explanation: "False: it gets exactly as much sunlight." },
      { q: "The far side was first photographed in 1959.", options: TFNG, answer: 0, explanation: "True: a spacecraft sent back pictures in 1959." },
      { q: "Footprints from 1969 have been blown away.", options: TFNG, answer: 1, explanation: "False: there is no wind or rain to remove them." },
      { q: "The Sun has more effect on tides than the Moon.", options: TFNG, answer: 1, explanation: "False: the Sun affects them less." },
      { q: "The Moon is moving away from the Earth.", options: TFNG, answer: 0, explanation: "True: about four centimetres a year." },
      { q: "Astronauts have visited the far side of the Moon.", options: TFNG, answer: 2, explanation: "Not Given: only a spacecraft photographing it is mentioned." }
    ]
  },
  {
    id: "ket-rtfng8-04",
    title: "Spiders",
    text: "There are more than fifty thousand kinds of spider and almost all of them are harmless to people. In most countries there is no spider that can do a person any serious harm at all. Spiders are not insects, which is a common mistake: an insect has six legs and three body parts, and a spider has eight legs and two. All spiders make silk, but not all of them make webs. Some hunt on the ground and run after what they eat. Some wait in a hole with a lid and jump out. Some make a small net and throw it. Spider silk is one of the strongest materials known for its weight, stronger than steel of the same thickness, and scientists have been trying for many years to make something similar in a factory without much success. A spider that lives in a house eats a very large number of flies and other small insects in a year. This is the main reason many people who dislike spiders leave them alone. Spiders in houses are usually not the same species as those outside and often cannot survive outside at all, so putting one out of the window in winter is not the kind act it appears to be. A spider does not chew. It puts a liquid into what it has caught, which makes the inside soft, and then drinks it. What is left is dropped, which is why the corner of a web often has small empty shapes hanging in it.",
    questions: [
      { q: "Most spiders are dangerous to people.", options: TFNG, answer: 1, explanation: "False: 'almost all of them are harmless to people'." },
      { q: "Spiders are insects.", options: TFNG, answer: 1, explanation: "False: an insect has six legs; a spider has eight." },
      { q: "All spiders produce silk.", options: TFNG, answer: 0, explanation: "True: 'All spiders make silk'." },
      { q: "All spiders build webs.", options: TFNG, answer: 1, explanation: "False: 'not all of them make webs'." },
      { q: "Spider silk is stronger than steel of the same thickness.", options: TFNG, answer: 0, explanation: "True: this comparison is made in the text." },
      { q: "House spiders may not survive outdoors.", options: TFNG, answer: 0, explanation: "True: they often cannot survive outside at all." },
      { q: "Spiders live for about two years.", options: TFNG, answer: 2, explanation: "Not Given: lifespan is not mentioned." }
    ]
  },
  {
    id: "ket-rtfng8-05",
    title: "Why There Is No Sound in Space",
    text: "Sound is movement. When you speak, your voice makes the air move in waves, and those waves reach another person's ear and move a thin piece of skin inside it, and that movement is what the brain understands as sound. Everything about this depends on there being something for the waves to move through. In space there is almost nothing at all: no air, no water, nothing between one place and the next. A large explosion in space would therefore make no sound whatever, however close you were to it, because there is nothing to carry the movement. Films that show loud noises in space are wrong, and the people who make them usually know that. Sound does not only travel through air. It travels through water about four times faster than through air, which is why whales can communicate over very long distances, and it travels through solid material faster still. A person putting an ear against a metal rail can hear a train a long time before anybody standing nearby can. Astronauts outside a spacecraft cannot hear each other's voices at all and talk by radio, because radio is not sound: it is a kind of light and light does not need anything to travel through. Inside a spacecraft, where there is air, everything sounds normal. Astronauts have reported that a spacecraft is in fact a noisy place to live, because of the fans and pumps that must run continuously to keep the air moving. Several of them have said that the first thing they notice on returning to Earth is how quiet an ordinary room is.",
    questions: [
      { q: "Sound needs something to travel through.", options: TFNG, answer: 0, explanation: "True: it depends on there being something for the waves to move through." },
      { q: "An explosion in space would be very loud.", options: TFNG, answer: 1, explanation: "False: it 'would therefore make no sound whatever'." },
      { q: "Sound travels faster in water than in air.", options: TFNG, answer: 0, explanation: "True: about four times faster." },
      { q: "Astronauts outside a spacecraft speak by radio.", options: TFNG, answer: 0, explanation: "True: they talk by radio." },
      { q: "Radio waves are a kind of sound.", options: TFNG, answer: 1, explanation: "False: 'radio is not sound: it is a kind of light'." },
      { q: "The inside of a spacecraft is quiet.", options: TFNG, answer: 1, explanation: "False: astronauts report that it is noisy." },
      { q: "Whales can hear each other from a hundred kilometres away.", options: TFNG, answer: 2, explanation: "Not Given: no distance is given." }
    ]
  },
  {
    id: "ket-rtfng8-06",
    title: "The Zip",
    text: "The zip took about thirty years to become useful. The first version was shown at a large exhibition in Chicago in 1893 and almost nobody bought one, because it opened by itself, it caught in cloth and it rusted if it got wet. A better design appeared in 1913, made by an engineer who had studied the old one and started again, and this is essentially the zip we use today: two rows of teeth, each of which locks into the row opposite when a slider pulls them together. Even then, clothes companies did not want it. The first large orders were for boots and for bags used by the army, not for clothing, and it was fifteen years before a company used zips in trousers. Children's clothes helped: parents liked anything that a small child could fasten alone. The word zip comes from the sound it makes and was invented by a company selling boots in 1923. Before that it had a much longer name that nobody could remember. A modern zip is made of many small parts and works because each tooth has a hollow on one side and a bump on the other. It fails in two common ways. Either a tooth is bent, which cannot usually be repaired, or the slider becomes loose and stops pressing the teeth together, and that second problem can often be fixed in a few seconds by squeezing the slider very gently with a pair of pliers. Repair shops say that most zips brought to them have nothing wrong with the teeth at all.",
    questions: [
      { q: "The first zip was successful immediately.", options: TFNG, answer: 1, explanation: "False: 'almost nobody bought one'." },
      { q: "The early version had problems with rust.", options: TFNG, answer: 0, explanation: "True: it rusted if it got wet." },
      { q: "The 1913 design is close to the modern zip.", options: TFNG, answer: 0, explanation: "True: it is essentially the zip we use today." },
      { q: "Clothing companies used zips before boot makers did.", options: TFNG, answer: 1, explanation: "False: the first orders were for boots and army bags." },
      { q: "The word zip comes from the sound.", options: TFNG, answer: 0, explanation: "True: it comes from the sound it makes." },
      { q: "Zips are more expensive to make than buttons.", options: TFNG, answer: 2, explanation: "Not Given: no comparison of cost is made." },
      { q: "A loose slider can sometimes be repaired.", options: TFNG, answer: 0, explanation: "True: it can often be fixed by squeezing it gently." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
