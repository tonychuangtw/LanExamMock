/* CPE Prep bank: Reading heading matching (C2) — wave 8 */
(function () {
var BANK = [
  {
    id: "cpe-rhead8-01",
    title: "Glass",
    sections: [
      { label: "A", text: "Glass is a material in an unusual physical condition: it has the disordered molecular arrangement of a liquid and the rigidity of a solid, having been cooled too quickly for its components to organise themselves into a crystal. That description accounts for most of its properties, including its transparency, its behaviour when heated, which is a gradual softening rather than a sharp melting point, and its tendency to fail suddenly from a surface flaw rather than to deform first, which is the characteristic that governs how it must be used." },
      { label: "B", text: "For most of its history the making of flat glass was the limiting difficulty. Sheets were produced by blowing a cylinder, cutting it and flattening it, or by spinning a disc and cutting panes from it, both of which produce material of uneven thickness and modest size, and the window of a pre-industrial building is therefore an assembly of small pieces held in a framework. The plate process that followed, in which glass was cast and then ground and polished flat, produced larger and better sheets at a cost that restricted them to expensive buildings." },
      { label: "C", text: "The process that resolved the problem is elegantly simple and was arrived at after years of unsuccessful attempts. Molten glass is poured onto a bath of molten tin, on which it floats and spreads to a uniform thickness with both surfaces flat, and it is drawn off as a continuous ribbon and cooled. No grinding is required, the thickness can be controlled by the speed of drawing, and the cost of flat glass fell by a large factor within a decade of its adoption." },
      { label: "D", text: "The consequences for building were immediate and are visible in every skyline. A material available in large sheets at low cost permits a wall that is entirely glazed, which changes what a structure must do, since the building's frame must now carry all of the load and the envelope becomes a skin. The thermal consequences of that arrangement were poor and were addressed subsequently by coatings and by multiple layers, which means that the modern glazed facade is a considerably more elaborate assembly than it appears." },
      { label: "E", text: "The material's other career is in communication. A fibre of extremely pure glass carries light along its length by internal reflection, and the purity required is remarkable: the attenuation must be low enough that a signal survives many kilometres, which was regarded as unachievable until the impurities responsible were identified and removed. The result is the medium through which almost all long-distance data now travels, and it rests on the same substance as a window." },
    ],
    options: [
      "The physical state that explains its behaviour",
      "A simple process that transformed the cost",
      "Why flat sheets were difficult to make",
      "Recycling and its practical limits",
      "A second use in carrying signals",
      "Effects on how buildings are constructed",
      "Decorative techniques of the medieval period",
      "How glass is coloured",
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "It describes the disordered arrangement of a liquid with the rigidity of a solid and what follows from it." },
      { q: "Paragraph B", answer: 2, explanation: "Cylinder, crown and plate methods all produced limited sheets — why flat sheets were difficult to make." },
      { q: "Paragraph C", answer: 1, explanation: "Floating glass on molten tin removed grinding and cut costs sharply." },
      { q: "Paragraph D", answer: 5, explanation: "Fully glazed walls changed what the frame and envelope must do — effects on how buildings are constructed." },
      { q: "Paragraph E", answer: 4, explanation: "Optical fibre carrying data is a second use in carrying signals." },
    ]
  },
  {
    id: "cpe-rhead8-02",
    title: "Roads Before the Motor Car",
    sections: [
      { label: "A", text: "The long decline of the road network after the collapse of centralised administration is usually described as neglect and was in part a change of purpose. Roads maintained for the movement of an army over long distances require a different standard from tracks used to reach a market twelve miles away, and once the first requirement disappeared the surviving obligation fell on parishes whose interest extended to their own boundary. The result was a network that was adequate locally and impassable in sequence, since no authority was responsible for a route as a route." },
      { label: "B", text: "The mechanism that eventually produced improvement was a charge on the user. Trusts were established by statute to take over stretches of road, borrow against future income, and levy tolls on those passing along them, which converted maintenance from an obligation nobody could afford into an investment with a return. The system was resented, produced riots in several places, and covered a substantial proportion of the main routes within a century, which is a fair summary of most successful infrastructure arrangements." },
      { label: "C", text: "The engineering that accompanied this was less concerned with the surface than with what lay beneath it. The insight that mattered was that a road fails when water accumulates in its foundation, so that drainage, camber and a well-graded base determine durability more than any quality of the top layer. One influential practitioner dispensed with the heavy stone foundations his contemporaries favoured and demonstrated that a compacted layer of small angular stone over a well-drained subgrade performed better and cost less." },
      { label: "D", text: "The improvement in the roads produced a transformation in the speed of travel that is easy to underestimate. Journey times between major towns fell by more than half within a few decades, coaching services operated to published timetables, and the resulting network of scheduled long-distance transport supported the mail, the newspapers and a set of expectations about the reliability of communication. All of this was achieved with horses, on a network that the railway would render obsolete within a generation of its completion." },
      { label: "E", text: "The railway removed the traffic and the tolls disappeared with it. Trusts wound up, their roads reverted to public authorities, and the maintained network deteriorated over the following decades because the funding mechanism had gone and the traffic no longer justified it. When motor vehicles arrived they encountered a system built for horses and then neglected, and the resulting reconstruction was undertaken by county authorities under a new arrangement, which is broadly the arrangement still in place." },
    ],
    options: [
      "Funding through charges on travellers",
      "A network fit for local use only",
      "What the arrival of railways destroyed",
      "The speed of travel before mechanisation",
      "Drainage as the key to durability",
      "How bridges were financed",
      "Coaching inns and their decline",
      "Why stone paving was abandoned in cities",
    ],
    questions: [
      { q: "Paragraph A", answer: 1, explanation: "Parish responsibility produced a network adequate locally and impassable in sequence." },
      { q: "Paragraph B", answer: 0, explanation: "Turnpike trusts levied tolls on users — funding through charges on travellers." },
      { q: "Paragraph C", answer: 4, explanation: "Water in the foundation causes failure, so drainage and base determine durability." },
      { q: "Paragraph D", answer: 3, explanation: "Journey times halved and scheduled coaching services ran — the speed of travel before mechanisation." },
      { q: "Paragraph E", answer: 2, explanation: "Railways removed the traffic and tolls, and the maintained network deteriorated." },
    ]
  },
  {
    id: "cpe-rhead8-03",
    title: "The Abolition of Surgical Pain",
    sections: [
      { label: "A", text: "Before the middle of the nineteenth century, surgery was conducted on conscious patients and was therefore governed by speed. Operations were limited to procedures that could be completed in a few minutes, chiefly amputations and the removal of superficial growths, and a surgeon's reputation rested substantially on how quickly he worked. Anything requiring entry into the abdomen or the chest was impossible not because the anatomy was unknown but because no patient could tolerate the time required." },
      { label: "B", text: "The substances that changed this had been available for decades and were used for entertainment. Nitrous oxide and ether were inhaled at public demonstrations and private gatherings, their effects were widely known, and the observation that a person under their influence did not react to injury was made repeatedly without anybody drawing the surgical conclusion. The gap between an available substance and its application is the part of the story that historians find most instructive." },
      { label: "C", text: "The demonstration that established the practice took place in a hospital theatre before an audience of sceptical surgeons, and the news travelled with unusual speed for the period. Within months the technique was in use across Europe, which is a rate of adoption that no other surgical innovation of the century approached, and the explanation is that the benefit required no argument: everybody present at an operation could see what had changed." },
      { label: "D", text: "The consequences were not confined to comfort. Once an operation could take an hour, the abdomen became accessible, and a surgery that had consisted of speed applied to the surface became a discipline capable of addressing internal disease. That expansion immediately exposed the next obstacle, since opening a body cavity in the conditions of the period produced infection at a rate that made many of the newly possible operations lethal, and the antiseptic principle followed within two decades." },
      { label: "E", text: "The specialism that grew around the administration of these agents was slow to acquire standing. Giving an anaesthetic was initially a task delegated to a junior or to whoever was available, the dose was judged by observation, and mortality attributable to the anaesthetic rather than to the operation was substantial. The development of measurement, of specific agents and of a trained profession reduced that risk by orders of magnitude, and the resulting safety is now so complete that it is invisible to patients." },
    ],
    options: [
      "Delay between availability and use",
      "Surgery constrained by the need for speed",
      "A new field that had to establish itself",
      "Unusually rapid adoption of a technique",
      "The next obstacle that success revealed",
      "How pain was managed with alcohol and opium",
      "Modern debate about awareness during operations",
      "The training of surgeons in the eighteenth century",
    ],
    questions: [
      { q: "Paragraph A", answer: 1, explanation: "Operations were limited to a few minutes and reputation rested on speed." },
      { q: "Paragraph B", answer: 0, explanation: "The substances were used for entertainment for decades before anybody drew the surgical conclusion." },
      { q: "Paragraph C", answer: 3, explanation: "Within months the technique was in use across Europe — unusually rapid adoption." },
      { q: "Paragraph D", answer: 4, explanation: "Longer operations exposed infection as the next obstacle." },
      { q: "Paragraph E", answer: 2, explanation: "The specialism was slow to acquire standing and had to develop training and measurement." },
    ]
  },
  {
    id: "cpe-rhead8-04",
    title: "Wool and the Shape of a Country",
    sections: [
      { label: "A", text: "The landscape that visitors describe as timeless in much of upland Britain is the product of an export trade. Sheep were kept in enormous numbers because their wool could be sold abroad at a price that no other agricultural product from the same ground could approach, and the grazing that resulted removed the woodland that would otherwise cover most of those hills. What is now valued as open country is therefore an industrial residue, maintained by continued grazing and reverting to scrub wherever the grazing stops." },
      { label: "B", text: "The wealth generated is legible in the buildings of the districts that produced it. Churches of a scale entirely disproportionate to the population of the parishes around them were built from the proceeds of the trade, frequently with the names of individual merchants recorded in the fabric, and the survival of these buildings in places that are now agriculturally marginal is the clearest evidence of where the money once was." },
      { label: "C", text: "The trade's organisation determined where the profit accumulated. For a long period raw wool was exported and the manufacture of cloth was conducted elsewhere, so that the value added by weaving and finishing accrued abroad, and successive administrations attempted to alter that arrangement by restricting export, encouraging immigration of skilled weavers and taxing the raw material. The eventual shift towards exporting cloth rather than fleece was the object of policy rather than an accident of the market." },
      { label: "D", text: "The mechanisation of spinning and weaving relocated the industry decisively. Processes that had been conducted in households across a wide area were concentrated into buildings requiring power, first from water and then from steam, which moved production to the valleys where that power was available and subsequently to the coalfields. The districts that had prospered under the domestic system declined within a generation, and the pattern of settlement in several regions still records the transition." },
      { label: "E", text: "The industry's collapse in the face of synthetic fibres and cheaper production elsewhere left a set of problems that are still being managed. The mills are large, structurally sound and expensive to convert; the settlements around them were built for a workforce that no longer exists; and the sheep remain, supported now by subsidy and by the demand for meat rather than for fleece, since the price of wool has for some time been insufficient to cover the cost of shearing." },
    ],
    options: [
      "Buildings that record vanished wealth",
      "A landscape created by an export trade",
      "Attempts to capture more of the value",
      "What remains after the industry has gone",
      "Where machinery moved the work",
      "Sheep breeds and their characteristics",
      "The role of monasteries in early farming",
      "Modern demand for natural fibres",
    ],
    questions: [
      { q: "Paragraph A", answer: 1, explanation: "Grazing for the wool trade removed woodland and created the open uplands." },
      { q: "Paragraph B", answer: 0, explanation: "Disproportionately large churches record where the money once was." },
      { q: "Paragraph C", answer: 2, explanation: "Policy sought to shift from exporting fleece to exporting cloth — capturing more of the value." },
      { q: "Paragraph D", answer: 4, explanation: "Power requirements moved production to valleys and coalfields." },
      { q: "Paragraph E", answer: 3, explanation: "Mills, settlements and sheep remain after the industry's collapse." },
    ]
  },
  {
    id: "cpe-rhead8-05",
    title: "Identifying a Person",
    sections: [
      { label: "A", text: "Before any biological method existed, the identification of a repeat offender depended on recognition by an officer who had seen the person before, which failed as populations became mobile and as cities grew. The first systematic replacement was a set of body measurements, recorded on a card and filed according to a scheme that allowed a new set to be compared with those already held. It worked well enough to be adopted internationally and depended on measurements being taken consistently, which they frequently were not." },
      { label: "B", text: "The pattern of ridges on the fingertips has two properties that made it a better instrument. It is formed before birth and does not change with age or with ordinary wear, and the arrangement of the small features within it varies sufficiently between individuals that a match of a modest number of points is extremely unlikely to occur by chance. Both claims rest on empirical study rather than on any theoretical necessity, which is a distinction that was not always made clearly in the courtroom." },
      { label: "C", text: "The practical difficulty is not comparing two complete impressions but working with what a scene provides. A mark left on a surface is partial, distorted by pressure and movement, frequently overlapping another, and deposited on a material that may hold it well or badly. The examiner is therefore comparing a degraded and incomplete pattern with a clean reference, and the judgement about whether they share an origin is one that no procedure fully specifies." },
      { label: "D", text: "That judgement was for a long period expressed with a certainty the underlying method could not support. Reports stated identification to the exclusion of all other persons, no error rate was acknowledged, and the profession maintained that a correctly conducted comparison could not be wrong. A small number of publicised misidentifications, in which examiners in reputable laboratories agreed with each other and were mistaken, made that position untenable and prompted a substantial revision of how conclusions are worded." },
      { label: "E", text: "The changes that followed have been procedural rather than technical. Examiners now document the features they rely on before seeing the reference print, verification is conducted by somebody unaware of the first conclusion where resources permit, and conclusions are expressed as support for a proposition rather than as identification. The underlying comparison is the same operation it always was, and what has altered is the honesty with which its limits are described." },
    ],
    options: [
      "Claims stated more strongly than the evidence allowed",
      "An earlier system based on measurement",
      "Reforms in how the work is conducted and reported",
      "Why marks from a scene are hard to use",
      "The properties that made ridges useful",
      "The chemistry of developing latent marks",
      "International exchange of criminal records",
      "How databases are searched automatically",
    ],
    questions: [
      { q: "Paragraph A", answer: 1, explanation: "Body measurements recorded on cards were the first systematic replacement for recognition." },
      { q: "Paragraph B", answer: 4, explanation: "Ridges are fixed before birth and vary sufficiently between individuals." },
      { q: "Paragraph C", answer: 3, explanation: "Scene marks are partial, distorted and overlapping — why they are hard to use." },
      { q: "Paragraph D", answer: 0, explanation: "Identification to the exclusion of all others was stated beyond what the method supported." },
      { q: "Paragraph E", answer: 2, explanation: "Documentation, blind verification and reworded conclusions are procedural reforms." },
    ]
  },
  {
    id: "cpe-rhead8-06",
    title: "Concrete",
    sections: [
      { label: "A", text: "Concrete is not a modern invention and its modern form is not the same material as its ancient one. Roman builders produced a mortar using volcanic ash that hardened under water and has survived two thousand years in marine structures, and the chemistry responsible has been studied intensively because the material appears to become stronger over time as seawater reacts with it. The recipe was not transmitted, and structures of comparable durability were not built again for a very long period." },
      { label: "B", text: "The modern material depends on a cement produced by heating limestone and clay to a temperature at which they combine, grinding the result, and mixing it with aggregate and water. The reaction that follows is a chemical setting rather than a drying, which is why concrete cures under water and why the quantity of water used determines its final strength: more water produces a workable mix and a weaker product, and the whole practice of the material is a negotiation between those two properties." },
      { label: "C", text: "Its transformation into a structural material followed from combining it with steel. Concrete is strong in compression and weak in tension, steel is strong in tension, and a beam containing steel where the tension occurs behaves quite differently from one that does not. The two materials also expand at similar rates with temperature and the alkalinity of concrete protects the steel from corrosion, which are coincidences without which the combination would not work at all." },
      { label: "D", text: "The environmental cost is dominated by the cement rather than by anything else in the mix. Producing it requires high temperatures and releases carbon dioxide from the limestone itself as a chemical consequence of the reaction, so that a substantial share of the emissions cannot be removed by changing the fuel. Substitutes that replace part of the cement with industrial by-products reduce the total considerably and depend on the availability of those by-products, which is falling as the industries producing them change." },
      { label: "E", text: "The material's reputation has followed a curve that has little to do with its properties. Celebrated as the medium of a new architecture, then blamed for the failures of the buildings that used it, it is now discussed largely in terms of its emissions, and each of those framings has obscured the ordinary fact that it is the most used manufactured substance on the planet and that almost every alternative under discussion is available in quantities that would supply a fraction of the demand." },
    ],
    options: [
      "An ancient version with different chemistry",
      "Emissions that cannot be avoided by changing fuel",
      "How setting differs from drying",
      "Why reinforcement works so well",
      "Shifting public perceptions of the material",
      "Decorative finishes and surface treatments",
      "The cost of demolition and disposal",
      "Why timber is preferred for housing",
    ],
    questions: [
      { q: "Paragraph A", answer: 0, explanation: "Roman marine mortar using volcanic ash is an ancient version with different chemistry." },
      { q: "Paragraph B", answer: 2, explanation: "Setting is a chemical reaction, not drying, and water content determines strength." },
      { q: "Paragraph C", answer: 3, explanation: "Compression, tension, matched expansion and alkalinity explain why reinforcement works." },
      { q: "Paragraph D", answer: 1, explanation: "Carbon dioxide released from limestone cannot be removed by changing the fuel." },
      { q: "Paragraph E", answer: 4, explanation: "Celebration, blame and emissions framing describe shifting public perceptions." },
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.head = (window.READING.head || []).concat(BANK);
})();
