/* FCE Prep bank: Reading True/False/Not Given (B2) — wave 10 */
(function () {
var TFNG = ["True", "False", "Not Given"];
var BANK = [
  {
    id: "fce-rtfng10-01",
    title: "Why Ice Floats",
    text: "Almost every substance is denser as a solid than as a liquid, because cooling slows the movement of particles and allows them to pack more closely. Water does not behave like this, and the exception has consequences out of all proportion to its apparent triviality. As water cools it does become denser, but only down to about four degrees above freezing. Below that point the molecules begin to arrange themselves into the open, six-sided structure that hydrogen bonds impose on ice, and that structure contains more empty space than the jostling arrangement of a liquid. Ice is about nine per cent less dense than water. The most obvious result is that ice forms at the top of a body of water rather than the bottom. A lake in a hard winter develops a lid, and beneath that lid the water stays liquid, insulated from the air above, and everything living in it survives until spring. If ice sank, each layer that froze would fall to the bottom and the process would continue until the whole lake was solid, and shallow lakes in cold regions would be lifeless. The same expansion is a considerable nuisance at a domestic scale, and it is the reason plumbers are busiest in the first week of a thaw rather than during the frost itself. Water freezing inside a pipe expands with a force that steel cannot resist, which is why the damage from a hard frost usually appears not during the cold spell but during the thaw, when the split that was made while the water was solid begins to leak as it melts.",
    questions: [
      { q: "Most substances become denser when they solidify.", options: TFNG, answer: 0, explanation: "True: 'Almost every substance is denser as a solid than as a liquid'." },
      { q: "Water is at its densest at zero degrees.", options: TFNG, answer: 1, explanation: "False: it becomes denser only down to about four degrees above freezing." },
      { q: "Ice is less dense than liquid water.", options: TFNG, answer: 0, explanation: "True: 'Ice is about nine per cent less dense than water.'" },
      { q: "Lakes freeze from the bottom upwards.", options: TFNG, answer: 1, explanation: "False: ice forms at the top and the water below stays liquid." },
      { q: "The structure of ice contains more empty space than liquid water.", options: TFNG, answer: 0, explanation: "True: the six-sided structure 'contains more empty space'." },
      { q: "Damage from frozen pipes is usually noticed during the thaw.", options: TFNG, answer: 0, explanation: "True: the split leaks as the ice melts." },
      { q: "Sea water freezes at the same temperature as fresh water.", options: TFNG, answer: 2, explanation: "Not Given: sea water is not mentioned." }
    ]
  },
  {
    id: "fce-rtfng10-02",
    title: "The Extra Day",
    text: "A year, meaning the time the earth takes to go once round the sun, is not a whole number of days, and every calendar anybody has ever used is an attempt to deal with that inconvenient fact. It is about three hundred and sixty-five and a quarter, and slightly less than a quarter: the figure usually quoted is 365.2422 days. The Julian calendar, introduced in 46 BC, dealt with the awkward quarter by adding a day every four years, which is a good approximation and is very slightly too generous. The error is about eleven minutes a year, which nobody notices in a lifetime and which amounts to a full day every hundred and twenty-eight years. By the sixteenth century the calendar had drifted about ten days away from the seasons, and the date of Easter, which is calculated from the spring equinox, was visibly wrong. The correction issued in 1582 kept the four-year rule but removed three leap days every four hundred years: a year divisible by a hundred is not a leap year unless it is also divisible by four hundred. The year 1900 was therefore an ordinary year and 2000 was not. Catholic countries adopted the new calendar immediately and others took a great deal longer. Britain did not change until 1752, by which time the gap had grown to eleven days, all of which were removed at once in September of that year. The current system is still not exact, and will be a day out in about three thousand years, which the people who designed it regarded, reasonably enough, as somebody else's problem.",
    questions: [
      { q: "A year is slightly less than 365.25 days long.", options: TFNG, answer: 0, explanation: "True: the figure quoted is 365.2422 days." },
      { q: "The Julian calendar was slightly too short.", options: TFNG, answer: 1, explanation: "False: it was 'very slightly too generous'." },
      { q: "The year 1900 was not a leap year.", options: TFNG, answer: 0, explanation: "True: divisible by a hundred but not by four hundred." },
      { q: "Britain adopted the corrected calendar in 1582.", options: TFNG, answer: 1, explanation: "False: 'Britain did not change until 1752'." },
      { q: "Eleven days were removed from the British calendar in 1752.", options: TFNG, answer: 0, explanation: "True: all eleven were removed at once in September." },
      { q: "There were public protests about the days that were lost.", options: TFNG, answer: 2, explanation: "Not Given: no reaction to the change is described." },
      { q: "The present calendar will never need further correction.", options: TFNG, answer: 1, explanation: "False: it 'will be a day out in about three thousand years'." }
    ]
  },
  {
    id: "fce-rtfng10-03",
    title: "The Shape of a Sheet of Paper",
    text: "A sheet of A4 measures two hundred and ten millimetres by two hundred and ninety-seven, which looks like an arbitrary pair of numbers and is not. The proportion between them is neither an accident nor a tradition, and it was chosen to solve one specific problem. The ratio of the long side to the short side is the square root of two, and this is the only ratio that has a useful property: if you cut the sheet in half across the longer side, each half has exactly the same proportion as the original. That is why A5 is A4 folded, A3 is two sheets of A4, and why a photocopier can enlarge or reduce between any two sizes in the series without leaving a margin or cutting anything off. The system is anchored by area rather than by length, which is the second decision that makes it work and the one people notice least. A0, the largest standard size, has an area of one square metre, and every subsequent size is half the area of the one before it. The proportion itself was noticed long before it was standardised: a German scientist, Georg Lichtenberg, described it in a letter in 1786. Turning it into a national standard took until 1922, when Walter Porstmann's proposal was adopted in Germany, and the system spread from there across most of the world during the following decades. North America is the significant exception, using a set of sizes with no consistent ratio between them, so that halving a sheet of American letter paper produces something of a different shape and enlarging between sizes always involves a compromise.",
    questions: [
      { q: "Cutting an A-series sheet in half gives two sheets of the same proportions.", options: TFNG, answer: 0, explanation: "True: this is the defining property of the ratio." },
      { q: "A0 has an area of one square metre.", options: TFNG, answer: 0, explanation: "True: 'A0, the largest standard size, has an area of one square metre'." },
      { q: "The proportion was first described in the twentieth century.", options: TFNG, answer: 1, explanation: "False: Lichtenberg described it in 1786." },
      { q: "The system became a German standard in 1922.", options: TFNG, answer: 0, explanation: "True: Porstmann's proposal was adopted that year." },
      { q: "North America uses the same series of sizes.", options: TFNG, answer: 1, explanation: "False: North America 'is the significant exception'." },
      { q: "The ratio allows copying between sizes without losing part of the page.", options: TFNG, answer: 0, explanation: "True: a photocopier can enlarge or reduce 'without leaving a margin or cutting anything off'." },
      { q: "Paper thickness is also covered by the same standard.", options: TFNG, answer: 2, explanation: "Not Given: thickness or weight is not mentioned." }
    ]
  },
  {
    id: "fce-rtfng10-04",
    title: "The Lens That Made Lighthouses Work",
    text: "For most of their history lighthouses were, by the standards of what was needed, disappointing, and mariners said so in print at some length. A fire, and later an oil lamp, was placed behind or in front of a polished metal reflector, and a great deal of the light went in directions where nobody needed it. The problem could not be solved by making a bigger conventional lens, because a lens thick enough to bend light from a large source would be too heavy to support and would absorb much of the light passing through it. The solution came from a French engineer, Augustin-Jean Fresnel, in 1822. He realised that the bending of light happens at the surface of a lens and that the glass in the middle contributes almost nothing except weight. His design keeps the curvature and removes the bulk, dividing the surface into a series of concentric rings, each at a slightly different angle, mounted on a flat or gently curved base. The rings are not identical: those near the edge are angled much more sharply than those near the centre. The result was a lens that could throw a usable beam more than thirty kilometres out to sea, and lighthouses were rebuilt around the world to accommodate them. Some of the largest assemblies stood four metres high and enclosed a room in which the keeper could stand. They weighed several tonnes and were rotated, in the most refined installations, floating on a bath of mercury that reduced friction almost to nothing and allowed a mechanism driven by a falling weight to turn the whole apparatus with very little effort.",
    questions: [
      { q: "A Fresnel lens uses less glass than a conventional lens of the same power.", options: TFNG, answer: 0, explanation: "True: the design 'keeps the curvature and removes the bulk'." },
      { q: "Fresnel produced the design in the nineteenth century.", options: TFNG, answer: 0, explanation: "True: the design came in 1822." },
      { q: "Earlier lighthouses relied on polished reflectors.", options: TFNG, answer: 0, explanation: "True: a lamp was placed behind or in front of a polished metal reflector." },
      { q: "The rotating lenses floated on water.", options: TFNG, answer: 1, explanation: "False: they floated on 'a bath of mercury'." },
      { q: "All the rings in the lens are set at the same angle.", options: TFNG, answer: 1, explanation: "False: 'The rings are not identical'." },
      { q: "The rotation was powered by a falling weight in some installations.", options: TFNG, answer: 0, explanation: "True: a mechanism driven by a falling weight turned the apparatus." },
      { q: "Fresnel lenses are still manufactured for lighthouses today.", options: TFNG, answer: 2, explanation: "Not Given: current manufacture is not discussed." }
    ]
  },
  {
    id: "fce-rtfng10-05",
    title: "The Letters Nobody Says",
    text: "English is full of letters that are written and not spoken, and anybody learning the language is entitled to ask why. The answer is that they arrived by several quite different routes and that no single explanation covers them all. Many of them were pronounced once. The k in knight and knee, the g in gnaw, the w in write: all of these were sounded in Middle English, and the spellings preserve a pronunciation that has since disappeared. What made the spellings permanent was printing. When presses were established in England in the late fifteenth century, a set of spellings was fixed in a relatively short period, and the pronunciation of the language then went on changing for several centuries afterwards, most dramatically in the long shift in vowel sounds that separated Middle English from modern speech. Other silent letters were never spoken at all and were inserted deliberately by scholars who wished to show a word's origin. The b in debt and doubt is there because the Latin source was debitum; the word had arrived in English from French without any b and did not need one. Occasionally the scholars were simply wrong. The s in island was added on the assumption that the word was related to the Latin insula, which it is not: it is an entirely native word, and the s has no business being there at all. Proposals to reform the whole system have been made repeatedly for four hundred years, by figures including a president of the United States and a well-known playwright, and none of them has ever come close to succeeding.",
    questions: [
      { q: "The k in knight was pronounced at one time.", options: TFNG, answer: 0, explanation: "True: it was sounded in Middle English." },
      { q: "Spellings were fixed after the pronunciation had stopped changing.", options: TFNG, answer: 1, explanation: "False: pronunciation went on changing for centuries after printing fixed the spellings." },
      { q: "Some silent letters were added on purpose.", options: TFNG, answer: 0, explanation: "True: scholars inserted letters to show a word's origin." },
      { q: "The s in island was added because of a mistaken belief.", options: TFNG, answer: 0, explanation: "True: it was added on a false assumption about insula." },
      { q: "English spelling has been officially reformed several times.", options: TFNG, answer: 1, explanation: "False: no proposal 'has ever come close to succeeding'." },
      { q: "Printing helped to make the spellings permanent.", options: TFNG, answer: 0, explanation: "True: 'What made the spellings permanent was printing.'" },
      { q: "Other European languages have as many silent letters as English.", options: TFNG, answer: 2, explanation: "Not Given: no other language is compared." }
    ]
  },
  {
    id: "fce-rtfng10-06",
    title: "Heating It Just Enough",
    text: "The process that carries Louis Pasteur's name was not developed for milk, which is the first thing to say about it and the thing that is least often said. In the 1860s Pasteur was asked to investigate why French wine and beer so often spoiled, and he established that the cause was microorganisms and that heating the liquid to a moderate temperature for a defined period killed enough of them to prevent spoilage without boiling it and ruining the taste. The application to milk came decades later, driven by public health rather than by commerce: milk was a reliable route for several serious diseases, and heating it removed most of that risk. The word sterilise is not the right one. Pasteurisation does not kill everything in the liquid; it reduces the population of harmful organisms to a level that is not dangerous and delays the growth of the rest, which is why pasteurised milk still goes sour and still has to be kept cold. There are two common versions. The ordinary method holds the milk at about seventy-two degrees for fifteen seconds and produces something that keeps for a matter of days in a refrigerator. The ultra-heat treatment used for long-life milk takes it above one hundred and thirty-five degrees for a few seconds, which does effectively sterilise it, and an unopened carton will then keep for months without refrigeration at the cost of a noticeably different flavour. Arguments about untreated milk have continued for a century, are conducted with a good deal of feeling on both sides, and are not going to be settled here.",
    questions: [
      { q: "Pasteur developed the process in order to treat milk.", options: TFNG, answer: 1, explanation: "False: 'The process that carries Louis Pasteur's name was not developed for milk, which is the first thing to say about it and the thing that is least often said.'" },
      { q: "The method kills organisms without boiling the liquid.", options: TFNG, answer: 0, explanation: "True: heating to a moderate temperature avoids boiling and ruining the taste." },
      { q: "Pasteur's original investigation concerned wine and beer.", options: TFNG, answer: 0, explanation: "True: he was asked why French wine and beer spoiled." },
      { q: "Pasteurised milk is completely free of microorganisms.", options: TFNG, answer: 1, explanation: "False: it 'does not kill everything in the liquid'." },
      { q: "Ordinary pasteurised milk must be kept refrigerated.", options: TFNG, answer: 0, explanation: "True: it keeps for days in a refrigerator and still goes sour." },
      { q: "Unopened long-life milk can be stored without refrigeration.", options: TFNG, answer: 0, explanation: "True: an unopened carton keeps for months without refrigeration." },
      { q: "The sale of untreated milk is illegal in most countries.", options: TFNG, answer: 2, explanation: "Not Given: the legal position is not stated." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
