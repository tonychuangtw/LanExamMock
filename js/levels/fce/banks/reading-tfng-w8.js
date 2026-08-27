/* FCE Prep bank: Reading True/False/Not Given (B2) — wave 8 */
(function () {
var TFNG = ["True", "False", "Not Given"];
var BANK = [
  {
    id: "fce-rtfng8-01",
    title: "A Letter for a Penny",
    text: "Before 1840 the British postal system worked in a way that would strike a modern user as backwards. In most cases the person receiving a letter paid for it, not the person sending it, and the amount depended on the distance travelled and on the number of sheets of paper, so that a letter written on two sheets cost twice as much to receive as the same letter on one. A recipient who did not want the letter, or could not afford it, was entitled to refuse it, in which case the Post Office had carried it for nothing. Rowland Hill, who was not a postal official and had no connection with the department, published a pamphlet in 1837 arguing that the whole structure was self-defeating. His central claim was that the cost of carrying a letter from one town to another was tiny compared with the cost of calculating, recording and collecting the charge, and that a single low prepaid rate would produce more revenue rather than less. The Post Office opposed him. The reform went ahead in 1840 in any case: a uniform rate of one penny for a half-ounce letter anywhere in the country, paid in advance, with the payment shown by an adhesive stamp. That stamp, the Penny Black, was the first of its kind anywhere. The effect on volume was immediate and enormous, with the number of letters carried more than doubling within a year and continuing to rise for decades afterwards, and within twenty years postal administrations across Europe and North America had adopted versions of the same system.",
    questions: [
      { q: "Before 1840 the sender normally paid for a letter.", options: TFNG, answer: 1, explanation: "False: 'the person receiving a letter paid for it'." },
      { q: "The old charge depended partly on how far the letter travelled.", options: TFNG, answer: 0, explanation: "True: the amount depended on distance and number of sheets." },
      { q: "People were allowed to refuse a letter and not pay.", options: TFNG, answer: 0, explanation: "True: a recipient was entitled to refuse it." },
      { q: "Rowland Hill was employed by the Post Office when he wrote his pamphlet.", options: TFNG, answer: 1, explanation: "False: he 'was not a postal official and had no connection with the department'." },
      { q: "Hill was later given a knighthood.", options: TFNG, answer: 2, explanation: "Not Given: no honours are mentioned." },
      { q: "The Penny Black was the world's first adhesive postage stamp.", options: TFNG, answer: 0, explanation: "True: it 'was the first of its kind anywhere'." },
      { q: "The number of letters sent fell after the reform.", options: TFNG, answer: 1, explanation: "False: the number more than doubled within a year." },
      { q: "Other countries copied the system within a few decades.", options: TFNG, answer: 0, explanation: "True: administrations across Europe and North America adopted versions of it." }
    ]
  },
  {
    id: "fce-rtfng8-02",
    title: "How a Lock Works",
    text: "A canal lock is a device for moving a boat between two levels of water, and the first thing to understand about it is that nothing is pumped. A lock is simply a chamber with a gate at each end, and every movement it makes is driven by gravity: to raise a boat, the chamber is emptied to the level of the lower water, the boat enters, the lower gates are closed, and water is admitted from above through small openings until the chamber matches the upper level. To lower a boat the sequence runs the other way. Because the water always comes from the upper level and always ends up in the lower one, every single operation sends one chamber-full of water permanently downhill, and this is true whichever direction the boat is travelling. That has a consequence which surprises people: a canal is not a closed system and must be continuously supplied. On most routes the water enters at the highest point, from reservoirs built specifically for the purpose or from streams diverted into the summit level, and in a dry summer the number of boats allowed through can be restricted to protect the supply. Where a canal has to climb steeply, locks are sometimes built directly one above another, sharing gates, in what is called a staircase; these are efficient in space and awkward to operate, because a boat cannot pass another halfway up. The largest single cause of avoidable water loss is not leakage but carelessness: a gate left open at one end while the other is worked can empty a pound of water that took hours to arrive.",
    questions: [
      { q: "Locks use pumps to move water between levels.", options: TFNG, answer: 1, explanation: "False: 'A canal lock is a device for moving a boat between two levels of water, and the first thing to understand about it is that nothing is pumped'." },
      { q: "Every use of a lock sends water downhill.", options: TFNG, answer: 0, explanation: "True: 'every single operation sends one chamber-full of water permanently downhill'." },
      { q: "A boat going uphill uses more water than one going downhill.", options: TFNG, answer: 1, explanation: "False: it is true 'whichever direction the boat is travelling'." },
      { q: "Reservoirs are sometimes built to supply canals.", options: TFNG, answer: 0, explanation: "True: water enters from reservoirs built specifically for the purpose." },
      { q: "Boat movements may be limited when water is short.", options: TFNG, answer: 0, explanation: "True: numbers can be restricted in a dry summer." },
      { q: "In a staircase, two boats can pass each other partway up.", options: TFNG, answer: 1, explanation: "False: 'a boat cannot pass another halfway up'." },
      { q: "French canals are built to the same dimensions as British ones.", options: TFNG, answer: 2, explanation: "Not Given: no other country's canals are mentioned." },
      { q: "Leaving a gate open can waste a large amount of water.", options: TFNG, answer: 0, explanation: "True: it can empty a pound of water that took hours to arrive." }
    ]
  },
  {
    id: "fce-rtfng8-03",
    title: "Why Aircraft Windows Are Round",
    text: "The first jet airliner to enter service, the de Havilland Comet, began flying passengers in 1952 and was withdrawn less than two years later after two aircraft broke apart in the air within four months of each other. The investigation that followed is one of the most important in the history of engineering, and it took a great deal longer than a month: wreckage was recovered from the sea, reassembled on a frame, and studied for over a year. The decisive experiment did not involve the recovered aircraft at all. Investigators took a complete fuselage, placed it in a specially built tank, filled it with water and then pressurised and depressurised it repeatedly, simulating thousands of flights in a few weeks. Water was used rather than air because a failure in a water-filled tank releases far less energy and leaves the evidence intact. The fuselage failed, and it failed at the corner of an opening. The Comet's windows and hatches had corners that were close to square, and a sharp corner in a pressurised shell concentrates stress at that point far more than a curved one does. Each flight stretched the metal very slightly; a crack began at a corner and grew a fraction with every cycle until the structure gave way. The engineering response was to eliminate sharp corners from pressurised structures, which is why the window beside you on any modern airliner is a rounded rectangle or an oval, and why the same principle now governs the design of doors, hatches and inspection panels throughout the aircraft.",
    questions: [
      { q: "The Comet was the first jet airliner to carry passengers.", options: TFNG, answer: 0, explanation: "True: it 'began flying passengers in 1952' as the first jet airliner in service." },
      { q: "The investigation was completed in under a month.", options: TFNG, answer: 1, explanation: "False: the wreckage was studied 'for over a year'." },
      { q: "A fuselage was tested in a tank of water.", options: TFNG, answer: 0, explanation: "True: a complete fuselage was placed in a water-filled tank." },
      { q: "Water was chosen because it releases less energy on failure.", options: TFNG, answer: 0, explanation: "True: this reason is given explicitly." },
      { q: "The failure started at the corner of an opening.", options: TFNG, answer: 0, explanation: "True: 'it failed at the corner of an opening'." },
      { q: "The Comet was later redesigned and returned to service.", options: TFNG, answer: 2, explanation: "Not Given: what happened to the aircraft afterwards is not stated." },
      { q: "Sharp corners spread stress evenly through a structure.", options: TFNG, answer: 1, explanation: "False: a sharp corner concentrates stress far more than a curve." }
    ]
  },
  {
    id: "fce-rtfng8-04",
    title: "Forty Days",
    text: "The word quarantine comes from a number. In the fourteenth century, ports around the Adriatic and the eastern Mediterranean began requiring ships arriving from places where plague was known to be present to wait offshore before anybody or anything could be landed. The city of Ragusa, on the coast of what is now Croatia, is generally credited with the first formal rule of this kind, in 1377, and the period it imposed was thirty days, a trentino. Venice and other ports subsequently extended the period to forty days, quaranta giorni, and it is that word which passed into English by way of the Venetian dialect. It is important to be clear that none of this rested on any understanding of how disease is transmitted. There was no theory of infection available in 1377 that would identify a rat, a flea or a bacterium, and the practice was based on the observation, entirely correct as far as it went, that people arriving from certain places sometimes fell ill after arriving and that a delay allowed this to become visible before contact was made. The system was elaborate. Dedicated islands were used to hold arrivals, goods as well as people were held and aired, and ships displayed flags indicating their status, a convention that survives in the international signal flag system to this day. The modern use of the word has drifted: quarantine now normally means the separation of people who may have been exposed to a disease but are not known to be ill, which is a narrower meaning than the medieval one and a rather more precise one.",
    questions: [
      { q: "The word quarantine is derived from a period of days.", options: TFNG, answer: 0, explanation: "True: it comes from quaranta giorni, forty days." },
      { q: "The first recorded rule of this kind specified forty days.", options: TFNG, answer: 1, explanation: "False: Ragusa's rule of 1377 specified thirty days." },
      { q: "The practice began in ports of the Mediterranean region.", options: TFNG, answer: 0, explanation: "True: ports around the Adriatic and eastern Mediterranean." },
      { q: "The rules were based on a scientific understanding of infection.", options: TFNG, answer: 1, explanation: "False: 'none of this rested on any understanding of how disease is transmitted'." },
      { q: "The forty-day period was chosen for religious reasons.", options: TFNG, answer: 2, explanation: "Not Given: the text does not explain why forty was chosen." },
      { q: "Goods as well as people were held on arrival.", options: TFNG, answer: 0, explanation: "True: 'goods as well as people were held and aired'." },
      { q: "Ships used flags to show their condition.", options: TFNG, answer: 0, explanation: "True: ships displayed flags indicating their status." },
      { q: "The modern meaning of the word is broader than the medieval one.", options: TFNG, answer: 1, explanation: "False: the modern meaning is described as narrower and more precise." }
    ]
  },
  {
    id: "fce-rtfng8-05",
    title: "What Happens to a Leaf in Autumn",
    text: "The colours that appear in a deciduous wood in October are not created in October, or at least not all of them. Two of the three groups of pigment involved have been in the leaf throughout the summer and have simply been invisible. Chlorophyll, which is green and which the tree uses to capture light, is present in such quantity during the growing season that it masks everything else; the yellows and oranges of the carotenoids sit underneath it all year and are revealed only when the chlorophyll is broken down. This breakdown is not damage. As the days shorten, a tree begins to withdraw useful material from its leaves, particularly nitrogen and phosphorus, and move it into the twigs and roots for storage; the dismantling of chlorophyll is part of that recovery, and a leaf that falls has already given up much of what the tree can use. At the same time a corky layer forms across the base of the leaf stalk, gradually sealing the connection and eventually allowing the leaf to detach cleanly. The reds and purples are a separate matter, because anthocyanins are manufactured fresh in the autumn rather than uncovered, which raises the question of why a tree would invest in producing a pigment in a leaf it is about to discard. Several explanations have been proposed and none is settled. What is well established is that the display depends on the weather: warm sunny days followed by cool nights, without a hard frost, produce the strongest reds, which is why the same wood can look spectacular one year and disappointing the next.",
    questions: [
      { q: "Yellow pigments are present in leaves during the summer.", options: TFNG, answer: 0, explanation: "True: carotenoids 'sit underneath it all year'." },
      { q: "Red pigments are produced in the autumn rather than revealed.", options: TFNG, answer: 0, explanation: "True: anthocyanins are 'manufactured fresh in the autumn'." },
      { q: "Trees recover nutrients from leaves before they fall.", options: TFNG, answer: 0, explanation: "True: nitrogen and phosphorus are moved into twigs and roots." },
      { q: "Scientists agree on why trees produce red pigments.", options: TFNG, answer: 1, explanation: "False: 'Several explanations have been proposed and none is settled.'" },
      { q: "A hard frost improves the colour display.", options: TFNG, answer: 1, explanation: "False: the strongest reds come from cool nights 'without a hard frost'." },
      { q: "A special layer forms at the base of the leaf stalk.", options: TFNG, answer: 0, explanation: "True: 'a corky layer forms across the base of the leaf stalk'." },
      { q: "The finest autumn colours in the world are found in Japan.", options: TFNG, answer: 2, explanation: "Not Given: no country is mentioned." }
    ]
  },
  {
    id: "fce-rtfng8-06",
    title: "The Keyboard Nobody Designed Twice",
    text: "The arrangement of letters on most English-language keyboards was fixed in the 1870s, on a mechanical typewriter developed by Christopher Latham Sholes and his collaborators, and it has survived essentially unchanged through every technological change since. The story most people have heard is that the layout was designed to slow typists down in order to prevent the mechanism jamming, and this is a simplification of something more interesting. Early machines did jam when neighbouring type bars were struck in quick succession, and separating common letter pairs was certainly among the considerations. But historians who have studied the surviving correspondence point to another influence: the machine's early buyers included telegraph operators transcribing Morse code, and some of the more curious features of the layout appear to reflect their requirements rather than any question of speed. Whatever the original reasoning, the layout became fixed for reasons that had nothing to do with design. By the 1890s a large number of people had been trained on it, manufacturers had an interest in compatibility, and any alternative had to overcome the cost of retraining an entire workforce. The best-known challenger, proposed by August Dvorak in 1936, arranges the most frequent letters on the home row and has been the subject of claims and counter-claims ever since. Independent studies have not established a clear advantage large enough to justify a general change, and the layout in front of you is therefore the product of a mechanical problem that has not existed for a century and of the difficulty of persuading several hundred million people to learn something new at the same time.",
    questions: [
      { q: "The layout dates from the nineteenth century.", options: TFNG, answer: 0, explanation: "True: it was fixed in the 1870s." },
      { q: "The claim that it was designed purely to slow typists is accurate.", options: TFNG, answer: 1, explanation: "False: the text calls this 'a simplification'." },
      { q: "Telegraph operators may have influenced the arrangement.", options: TFNG, answer: 0, explanation: "True: some features appear to reflect their requirements." },
      { q: "Training costs helped the layout to survive.", options: TFNG, answer: 0, explanation: "True: 'the layout became fixed for reasons that had nothing to do with design' — retraining costs kept it in place." },
      { q: "The Dvorak layout has been proved substantially faster.", options: TFNG, answer: 1, explanation: "False: studies 'have not established a clear advantage'." },
      { q: "Sholes became wealthy as a result of his invention.", options: TFNG, answer: 2, explanation: "Not Given: nothing is said about what he earned." },
      { q: "The mechanical problem the layout addressed no longer exists.", options: TFNG, answer: 0, explanation: "True: it 'has not existed for a century'." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
