/* FCE Prep bank: Reading True/False/Not Given (B2) — wave 9 */
(function () {
var TFNG = ["True", "False", "Not Given"];
var BANK = [
  {
    id: "fce-rtfng9-01",
    title: "The Flask That Was Not Made for Tea",
    text: "James Dewar built the first vacuum flask in 1892 and he was not thinking about anybody's lunch. He was a chemist working with liquefied gases, and his problem was keeping a substance at a temperature far below anything in the room around it for long enough to study it. His solution was a glass vessel with two walls and almost nothing between them. Heat moves in three ways, and the design addresses all of them. Conduction and convection both require matter, so removing the air from the space between the walls removes both. Radiation does not require matter, and Dewar dealt with it by silvering the glass surfaces so that heat radiating outwards is reflected back. What is left is the neck, where the two walls must join and where heat can travel through the glass, and the stopper, which is why a flask left open loses its contents' temperature far faster than a closed one. Dewar never patented it. He regarded the flask as a piece of laboratory equipment rather than a product, and when a German glassblowing firm saw its commercial possibilities a decade later there was nothing to stop them. That company held a public competition to name the thing, and the winning entry was Thermos, from the Greek for heat. Dewar took legal action and lost. The design has changed remarkably little: modern flasks are usually steel rather than glass, which survives being dropped, but the principle inside them is exactly what Dewar assembled to hold liquid oxygen.",
    questions: [
      { q: "The flask was originally made for scientific work.", options: TFNG, answer: 0, explanation: "True: 'James Dewar built the first vacuum flask in 1892 and he was not thinking about anybody's lunch.'" },
      { q: "Dewar took out a patent on his design.", options: TFNG, answer: 1, explanation: "False: 'Dewar never patented it.'" },
      { q: "Removing the air prevents two of the three kinds of heat transfer.", options: TFNG, answer: 0, explanation: "True: conduction and convection both require matter." },
      { q: "The silver coating reduces heat lost as radiation.", options: TFNG, answer: 0, explanation: "True: silvering reflects radiating heat back." },
      { q: "The name Thermos was chosen by the inventor.", options: TFNG, answer: 1, explanation: "False: it was chosen in a public competition run by the German company." },
      { q: "Dewar won his legal case.", options: TFNG, answer: 1, explanation: "False: 'Dewar took legal action and lost.'" },
      { q: "Steel flasks keep liquids hot for longer than glass ones.", options: TFNG, answer: 2, explanation: "Not Given: steel is said to survive being dropped, but no comparison of performance is made." },
      { q: "Heat can escape through the neck of the flask.", options: TFNG, answer: 0, explanation: "True: the neck is where the walls join and heat can travel through the glass." }
    ]
  },
  {
    id: "fce-rtfng9-02",
    title: "Why the Sky Is Blue",
    text: "Sunlight contains all the visible wavelengths, and when it enters the atmosphere it meets molecules of nitrogen and oxygen that are very much smaller than the wavelengths themselves. Such molecules scatter light, and they do not scatter all of it equally: the shorter the wavelength, the more strongly it is scattered, by a relationship worked out by Lord Rayleigh in the nineteenth century in which the effect increases very steeply as wavelength decreases. Blue light is therefore thrown around the sky in every direction while red light passes more directly through, and when you look at a patch of sky away from the sun what you are seeing is scattered blue. An obvious objection follows immediately. Violet has a shorter wavelength than blue and is scattered even more strongly, so why is the sky not violet? There are two reasons, and both are needed. The sun emits less violet than blue to begin with, and the human eye is considerably less sensitive to violet than to blue, so the signal that reaches us is weaker at both ends of the process. The same mechanism explains sunsets. When the sun is low, its light travels through a much greater thickness of atmosphere, the blue is scattered out of the direct beam long before it reaches you, and what is left arriving at your eye is the red and orange end of the spectrum. The blue of the sea, incidentally, has a different cause altogether: water absorbs red light over distance, so deep clear water looks blue because the red has been taken out of it rather than because anything has been scattered.",
    questions: [
      { q: "Shorter wavelengths of light are scattered more strongly.", options: TFNG, answer: 0, explanation: "True: 'the shorter the wavelength, the more strongly it is scattered'." },
      { q: "Violet light is scattered less than blue light.", options: TFNG, answer: 1, explanation: "False: violet 'is scattered even more strongly'." },
      { q: "The sun emits less violet light than blue light.", options: TFNG, answer: 0, explanation: "True: this is one of the two reasons given." },
      { q: "The sea is blue for the same reason as the sky.", options: TFNG, answer: 1, explanation: "False: 'The blue of the sea, incidentally, has a different cause altogether.'" },
      { q: "At sunset the light passes through more atmosphere.", options: TFNG, answer: 0, explanation: "True: low sun means light travels through a greater thickness of atmosphere." },
      { q: "The scattering effect was described in the nineteenth century.", options: TFNG, answer: 0, explanation: "True: the relationship was worked out by Lord Rayleigh in that century." },
      { q: "Astronauts in orbit see a black sky for the same reason.", options: TFNG, answer: 2, explanation: "Not Given: the text says nothing about what is seen from orbit." }
    ]
  },
  {
    id: "fce-rtfng9-03",
    title: "The Lines on the Packet",
    text: "The barcode was patented in 1952 by Norman Woodland and Bernard Silver, who had been trying to solve a problem posed by a supermarket manager: how to record what had been sold at the moment of sale rather than by counting the shelves afterwards. Woodland's first design was not a set of lines at all. It was a series of concentric circles, a bullseye, which could be read from any angle, and he arrived at the idea by drawing dots and dashes in the sand on a beach and then pulling them downwards with his fingers into lines. The patent was granted and then sat unused for two decades, because the technology to read it did not exist at a price any shop could pay. Reading a barcode requires a light source of a very specific kind and a computer to interpret the result, and neither the laser nor cheap computing arrived until the late 1960s. By the time a working system was ready, the original patent had expired, and neither inventor made any significant money from it. The other obstacle was not technical. Retailers would not buy scanners until manufacturers printed codes on their products, and manufacturers would not print codes until shops had scanners, a standoff that was only broken by a committee of the grocery industry agreeing on a single standard in 1973. The first item ever scanned in a shop was a packet of chewing gum, in Ohio, in June 1974, and the packet is now in a museum.",
    questions: [
      { q: "The barcode was patented long before it came into use.", options: TFNG, answer: 0, explanation: "True: the 1952 patent 'sat unused for two decades'." },
      { q: "The original design used straight lines.", options: TFNG, answer: 1, explanation: "False: 'It was a series of concentric circles, a bullseye'." },
      { q: "The inventors earned a great deal from the patent.", options: TFNG, answer: 1, explanation: "False: 'neither inventor made any significant money from it'." },
      { q: "Cheap computers were necessary before the system could work.", options: TFNG, answer: 0, explanation: "True: neither the laser nor cheap computing arrived until the late 1960s." },
      { q: "Shops and manufacturers each waited for the other to act.", options: TFNG, answer: 0, explanation: "True: the text describes exactly that standoff." },
      { q: "The first scan in a shop took place in Britain.", options: TFNG, answer: 1, explanation: "False: it took place in Ohio in June 1974." },
      { q: "Barcodes are also used to track books in libraries.", options: TFNG, answer: 2, explanation: "Not Given: only retail use is discussed." }
    ]
  },
  {
    id: "fce-rtfng9-04",
    title: "Moving the Clocks",
    text: "The idea of shifting clocks forward in summer is usually credited to William Willett, a London builder who published a pamphlet in 1907 after noticing on an early morning ride how many blinds were still drawn. He campaigned for the rest of his life and did not live to see it: Willett died in 1915, and Britain adopted the change in 1916. It was not the first country to do so. Germany introduced it a few weeks earlier, and the reason in both cases was war rather than leisure, since an hour of daylight moved into the evening was an hour in which lighting and fuel were not being used in factories and homes. That original justification has proved surprisingly hard to demonstrate since. Studies of energy consumption have produced results that point in both directions, and the modern picture is complicated by air conditioning, which increases demand in the very evening hours the change extends. The arguments that now carry most weight are about road safety and health, and they too are contested: there is reasonable evidence of a small rise in heart attacks and road collisions in the days immediately after each spring change, and reasonable evidence of fewer collisions on lighter evenings overall. One belief can be dismissed. It is frequently said that the change was introduced at the request of farmers, and the opposite is true: agricultural organisations in several countries opposed it, on the grounds that livestock and crops respond to the sun rather than to a clock and that the change simply moved the working day away from everybody else's.",
    questions: [
      { q: "Germany introduced the change before Britain did.", options: TFNG, answer: 0, explanation: "True: 'Germany introduced it a few weeks earlier'." },
      { q: "Willett saw his proposal adopted in his lifetime.", options: TFNG, answer: 1, explanation: "False: 'Willett died in 1915, and Britain adopted the change in 1916.'" },
      { q: "The original reason for the change was to save fuel.", options: TFNG, answer: 0, explanation: "True: an hour of daylight moved into the evening saved lighting and fuel." },
      { q: "Studies have clearly shown that the change saves energy.", options: TFNG, answer: 1, explanation: "False: studies 'have produced results that point in both directions'." },
      { q: "Farmers asked for the change to be introduced.", options: TFNG, answer: 1, explanation: "False: agricultural organisations opposed it." },
      { q: "There is evidence of more road collisions just after the spring change.", options: TFNG, answer: 0, explanation: "True: the text reports reasonable evidence of a small rise." },
      { q: "Several countries have recently voted to abolish the practice.", options: TFNG, answer: 2, explanation: "Not Given: no recent votes or abolitions are mentioned." }
    ]
  },
  {
    id: "fce-rtfng9-05",
    title: "What a Postcode Is For",
    text: "The British postcode system was tested in Norwich in 1959, extended gradually over the following fifteen years and completed nationally in 1974. Its purpose was mechanical sorting. A machine that can read a short alphanumeric string can direct an envelope far faster than a person reading an address, and the code was designed so that the first half identifies a postal area and district and the second half narrows the destination to a group of addresses, usually somewhere between one and about a hundred of them. What has happened since is that the code has been adopted by almost everybody for purposes it was never intended to serve. Insurers price policies by postcode. Delivery companies plan routes by it. Statistical agencies publish figures by it, health services allocate patients by it, and a great deal of published research about neighbourhoods rests on it. It was never designed to do any of that. The consequences are not always trivial, because postcode units vary enormously in the number of addresses they contain and in how much they resemble a coherent neighbourhood, and a comparison between two of them may be comparing four houses with ninety. There are also codes that correspond to no place at all: large organisations that receive very high volumes of mail are given their own, and certain codes exist for administrative reasons and cannot be found on any map. The system continues to work extremely well for the job it was built to do, which is getting a letter to the right delivery office.",
    questions: [
      { q: "The system was first tried in Norwich.", options: TFNG, answer: 0, explanation: "True: it 'was tested in Norwich in 1959'." },
      { q: "The system covered the whole country by 1974.", options: TFNG, answer: 0, explanation: "True: it was 'completed nationally in 1974'." },
      { q: "Postcodes were designed with insurance pricing in mind.", options: TFNG, answer: 1, explanation: "False: 'It was never designed to do any of that.'" },
      { q: "Every postcode unit contains a similar number of addresses.", options: TFNG, answer: 1, explanation: "False: units 'vary enormously in the number of addresses'." },
      { q: "The first part of a code identifies a broad area.", options: TFNG, answer: 0, explanation: "True: the first half identifies a postal area and district." },
      { q: "Some codes do not correspond to a physical location.", options: TFNG, answer: 0, explanation: "True: certain codes exist for administrative reasons and are not on any map." },
      { q: "Most European countries use a similar alphanumeric system.", options: TFNG, answer: 2, explanation: "Not Given: no other country's system is discussed." }
    ]
  },
  {
    id: "fce-rtfng9-06",
    title: "The First Crossword",
    text: "The crossword is a good deal younger than most people assume. The first one appeared in a New York newspaper in December 1913, was compiled by a journalist named Arthur Wynne, and was not called a crossword at all but a word-cross. It was diamond-shaped rather than square, had no blacked-out squares in the modern sense, and was printed in the entertainment supplement as one item among several. It was popular immediately and was widely copied, and within a decade the puzzle had crossed the Atlantic and begun to develop in a direction the Americans did not follow. British setters started writing clues that were not definitions but small puzzles in themselves, containing a definition and a piece of wordplay that arrive at the same answer by different routes. This became the cryptic crossword, and the man usually credited with establishing it as a form was Edward Powys Mathers, who set under the name Torquemada for the Observer from 1926. The rules of fairness that govern cryptic clueing were not written down until later, by another setter, and they are the reason a good cryptic clue is solvable rather than merely obscure: every clue must contain a straight definition of the answer, and the wordplay must lead to the answer by instructions that can be followed. Some newspapers were slow. The Times, which is now associated with the puzzle more closely than any other paper in the world, did not print a crossword until 1930, having previously described the craze as a menace.",
    questions: [
      { q: "The first crossword was published in 1913.", options: TFNG, answer: 0, explanation: "True: 'The first one appeared in a New York newspaper in December 1913'." },
      { q: "It was originally given a different name.", options: TFNG, answer: 0, explanation: "True: it was called a word-cross." },
      { q: "The first puzzle was square in shape.", options: TFNG, answer: 1, explanation: "False: 'It was diamond-shaped rather than square'." },
      { q: "The Times printed a crossword as soon as the craze began.", options: TFNG, answer: 1, explanation: "False: The Times 'did not print a crossword until 1930'." },
      { q: "A cryptic clue should contain a definition of the answer.", options: TFNG, answer: 0, explanation: "True: 'every clue must contain a straight definition of the answer'." },
      { q: "Torquemada set puzzles for the Observer.", options: TFNG, answer: 0, explanation: "True: Mathers set under that name for the Observer from 1926." },
      { q: "Cryptic crosswords are widely solved in the United States today.", options: TFNG, answer: 2, explanation: "Not Given: the text says the Americans did not follow that direction but says nothing about today." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
