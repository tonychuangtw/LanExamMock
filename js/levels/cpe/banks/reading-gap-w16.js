/* CPE Prep bank: Reading gapped text (C2) — wave 16 */
(function () {
var BANK = [
  {
    id: "cpe-rgap16-01",
    title: "Casting a Note",
    segments: [
      "A bell is a musical instrument that is made once, cannot be adjusted upwards afterwards, and is expected to remain in tune for several centuries, which places its makers in a position that no other instrument builder occupies.",
      "The sound it produces is not a single note but a set of them sounding together, and this is the fact that makes bell founding difficult rather than merely laborious. A well-made bell produces a series of partials at intervals that must stand in particular relations to one another, and the ear hears a pitch that is not necessarily present as any partial at all.",
      "Achieving those relations is a matter of the profile: the curve describing how the thickness of the metal varies from the crown to the rim. Small changes in that curve alter the partials by different amounts, and the profiles used by successful foundries were arrived at empirically over generations and were treated as commercial secrets.",
      "The casting itself is a single irreversible operation and is conducted accordingly. A mould is built in two parts around a core, molten bronze is poured in one continuous pour, and any interruption, moisture or trapped gas produces a flaw that will not be discovered until the bell is cool and struck.",
      "Tuning is possible after casting and only in one direction. Metal removed from the inside of the bell lowers particular partials depending on where it is taken from, and the operation is performed on a large lathe by somebody working from measurements and from the sound.",
      "That constraint governs the whole design, since a founder must cast slightly sharp and tune downwards. A bell cast flat is a bell that cannot be corrected, and the material cannot be added back, so the margins allowed at the casting stage exist entirely to make the subsequent correction possible.",
      "The permanence of the result is what distinguishes the trade from every other kind of instrument making. A bell hung in a tower is struck several times a week for four hundred years, is exposed to weather, and is expected to sound the same at the end of that as at the beginning, which places demands on the alloy that have very little margin in them.",
      "What has survived, therefore, is a craft whose fundamental operations have not changed and whose supporting knowledge has, since the partials can now be measured directly rather than judged, and the profiles that were once secret can be analysed from any existing bell. The result is that a trade with almost no practitioners is producing bells that are, by every measurable standard, better than the historic instruments it is repairing."
    ],
    options: [
      "Bronze of a particular composition is used because it is hard enough to ring rather than thud, resistant enough to survive centuries of weather, and brittle enough that a cracked bell is generally beyond repair, which is the price of the other two properties.",
      "The strike note, as it is called, is a phenomenon of hearing rather than of physics, produced by the relationship between several higher partials, and a bell whose partials are wrong will produce a strike note that listeners find unsettling without being able to say why.",
      "Change ringing developed as a distinct tradition around exactly this constraint, since a set of bells too heavy to be played melodically can be rung in permutations, and the mathematics of those permutations became an amateur pursuit with a literature of its own.",
      "The margin for that correction is not generous. Removing too much metal at the wrong point alters several partials at once, and a bell can be ruined by an over-enthusiastic tuner as thoroughly as by a poor casting.",
      "It is the only stage at which a mistake is recoverable, which is why so much attention is paid to the preparation of the mould, and why the founders who survived commercially were those whose casting failure rate was low rather than those whose designs were most admired.",
      "Recasting is the usual remedy when a bell has cracked or has always been wrong, and it consumes the original metal, which means that the number of genuinely old bells declines steadily and that the ones remaining are the ones that were right in the first place.",
      "Measurement has not replaced the craft so much as removed the guesswork from part of it, since knowing which partial is wrong does not by itself tell a founder how to alter a profile, and the relationship between the shape and the sound remains something learnt by making bells.",
      "That empirical inheritance is why the great foundries were family concerns lasting for centuries. A profile that worked was an asset transmitted by apprenticeship rather than by documentation, and a foundry that lost its continuity lost the knowledge with it."
    ],
    answers: [1, 7, 4, 3, 5, 0, 6],
    explanations: [
      "The preceding paragraph says the perceived pitch may be present in no partial; the option names the strike note and its effect.",
      "The previous paragraph describes profiles arrived at empirically and kept secret; the option explains why the foundries were long family concerns.",
      "The preceding paragraph describes the irreversible pour; the option notes it is the only stage where a mistake is unrecoverable and what that implied commercially.",
      "The previous paragraph describes tuning by removing metal; the option warns how little margin that correction allows.",
      "The preceding paragraph explains casting sharp to tune downwards; the option describes recasting as the remedy when a bell is wrong.",
      "The previous paragraph describes the demands of four centuries in a tower; the option explains the properties of the bronze used.",
      "The option explains that measurement removed guesswork without replacing the craft, which the final paragraph develops."
    ]
  },
  {
    id: "cpe-rgap16-02",
    title: "The Body as a Password",
    segments: [
      "Identifying a person by a physical characteristic is presented as a solution to the problems of passwords and is a different arrangement with a different set of problems, several of which have no remedy at all.",
      "The attraction is obvious and is real as far as it goes. A characteristic cannot be forgotten, cannot easily be lent to somebody else, and requires no effort from the person being identified, which removes at a stroke the failures that account for most of the difficulty with knowledge-based systems.",
      "The first difficulty is that such a characteristic is not secret. A face is displayed continuously, fingerprints are left on everything touched, and a voice is recorded by every device in a room, so that the identifying feature is available to anybody who takes an interest in obtaining it.",
      "The second and more serious difficulty follows from the first, and it is the one that has no solution. A compromised password is replaced in a minute; a compromised fingerprint cannot be replaced at all, and a person whose biometric template has been copied has lost that credential permanently for every system that uses it.",
      "The systems themselves do not store the image, which is a partial and frequently overstated mitigation. What is stored is a template derived from the measurement, the derivation is not reversible in the strict sense, and it has repeatedly proved possible to construct an input that a system will accept from a template that was supposed to reveal nothing.",
      "Matching, moreover, is probabilistic rather than exact, which distinguishes it from every password system and produces consequences that designers must choose between. A threshold set to reject impostors reliably will also reject legitimate users, and a threshold set to admit legitimate users will admit some impostors.",
      "The distribution of those errors is not uniform across a population, and this is where the technology has caused the most damage. Systems trained on unrepresentative data perform measurably worse on groups underrepresented in that data, so that the burden of false rejection falls on the people least likely to be able to contest it.",
      "What the technology is well suited to is a narrow case that is frequently confused with a broader one. Confirming that the person present is the one who enrolled on this device is a task it performs well; establishing who an unknown person is, by searching a large database, is a different operation whose errors scale with the size of the database and whose consequences fall on people who were never asked."
    ],
    options: [
      "Liveness detection exists to address exactly this and is a continuing contest rather than a settled solution, since each method of distinguishing a person from a reproduction is followed by a method of defeating that method.",
      "The distinction matters legally as well as technically, since consent obtained for the first purpose is routinely treated as covering the second, and a database assembled for verification becomes an instrument of identification without any further decision being taken.",
      "Multi-factor arrangements sidestep some of this by treating the characteristic as one component rather than as the credential itself, which restores the possibility of revocation: the biometric identifies the device holder, and the device holds a secret that can be replaced.",
      "It is a permanence that also raises a question about children, whose characteristics are being enrolled in systems that will outlast the institutions operating them and whose consent, in any meaningful sense, was not obtained.",
      "That threshold is therefore a policy decision presented as a technical setting, and it is generally made by an engineer without anybody outside the project being told what balance was chosen or on what basis.",
      "Nor is presentation difficult to fake in many cases. Photographs have defeated face systems, moulded replicas have defeated fingerprint readers, and recordings have defeated voice systems, in each case using materials that required no specialist access.",
      "Correction is also harder than it should be, since a person rejected by such a system has no way to demonstrate that the fault lies with the system, and the operator's default assumption is that the machine is right and the person is not who they claim.",
      "Iris patterns perform better than most alternatives on the accuracy measures, being stable over a lifetime and highly distinctive, and their adoption has been limited by the requirement for cooperation from the person being scanned rather than by any weakness in the underlying characteristic."
    ],
    answers: [5, 3, 0, 4, 6, 2, 1],
    explanations: [
      "The preceding paragraph says the characteristic is not secret; the option describes how easily presentations have been faked.",
      "The previous paragraph says a compromised biometric cannot be replaced; the option extends that permanence to children enrolled in such systems.",
      "The preceding paragraph explains that templates can yield acceptable inputs; the option introduces liveness detection as the continuing response.",
      "The previous paragraph describes the threshold trade-off; the option calls it a policy decision presented as a technical setting.",
      "The preceding paragraph says false rejection falls on those least able to contest it; the option explains why correction is so hard.",
      "The option offers multi-factor arrangements as a partial escape, restoring revocability before the closing distinction.",
      "The option notes that consent for verification is treated as covering identification, which follows the final paragraph's distinction."
    ]
  },
  {
    id: "cpe-rgap16-03",
    title: "The Record and the Equipment",
    segments: [
      "A sporting record is presented as a measurement of human performance and is in fact a measurement of a person, an implement, a surface and a set of rules, and the difficulty of separating these is the reason the history of records is so much more complicated than the tables suggest.",
      "The clearest cases are those in which an equipment change produced a discontinuity that nobody could attribute to athletes. A new material, a redesigned implement or a different surface has repeatedly produced improvements across an entire field within a single season, which is a pattern that human development does not generate.",
      "Governing bodies have responded to such episodes in two quite different ways, and the inconsistency is instructive. Some changes have been banned and the affected records annulled; others have been accepted, with the previous marks left standing in a table that no longer measures the same thing.",
      "The principle usually invoked is that equipment should not confer an advantage that the athlete has not earned, which is unhelpful as stated, since every implement confers an advantage over having none and the whole of the sport consists of using one.",
      "The workable version of the principle is narrower and concerns availability. A development that is expensive, exclusive or available only to athletes with particular sponsors distorts competition; the same development, once it is cheap and universal, has simply moved the sport to a new baseline.",
      "Surfaces and venues are the component most often forgotten and are frequently the largest. Tracks have become measurably faster over decades, pools are constructed to absorb rather than reflect waves, and altitude affects some events substantially, which is why the annotation beside a mark can matter more than the mark itself.",
      "The comparison across eras that everybody wants to make is therefore not available in the form they want it. What can be said is how an athlete performed relative to their contemporaries under the conditions of their period, and the transposition of a performance from one era into another is an exercise with no defensible method.",
      "What survives, when all of this is admitted, is something less tidy and more interesting than a table of numbers. A record is a snapshot of what was achievable at a moment, under conditions that were themselves a product of the technology and the economics of that moment, and reading it as a pure measurement of a body is a category error that the presentation of the sport encourages at every turn."
    ],
    options: [
      "Shoes with embedded plates produced exactly this argument in distance running, with a step change in times across the field followed by a regulatory response that specified permitted dimensions rather than banning the technology, which is the compromise that most sports eventually reach.",
      "Suits used in swimming were the most conspicuous instance, producing a season of records that were subsequently frozen in the tables when the garments were banned, so that a generation of swimmers competed for years against marks nobody could approach legally.",
      "It is also why record progression flattens in events where the equipment has been fixed for decades and continues in events where it has not, a pattern that has nothing to do with the athletes in either group.",
      "That distinction is workable because it is observable. A development in its first season is available to a few; three years later it is in every catalogue, and the sport can decide whether to accept the new baseline rather than adjudicating on the merits of a material.",
      "Timing itself has changed the numbers, since hand timing and electronic timing differ systematically, and the transition produced an apparent regression in several events that reflected only the arrival of an instrument that did not anticipate the finish.",
      "Doping occupies a different category in principle and the same one in practice, since a mark set under a testing regime that could not detect what was being used is a mark set under different conditions, whatever the rules said at the time.",
      "The alternative principle, that any development available to everybody should be permitted, has the advantage of clarity and the disadvantage of accepting whatever manufacturers produce, which in several sports has meant a continuous escalation that the governing bodies eventually stopped for reasons they found difficult to articulate.",
      "Records are also a commercial asset, since a broken record is an event that attracts attention, and governing bodies have an interest in the conditions under which they fall that is rarely acknowledged in the deliberations about equipment."
    ],
    answers: [1, 0, 6, 3, 4, 5, 2],
    explanations: [
      "The preceding paragraph describes equipment producing improvements across a whole field; the option gives swimming suits as the conspicuous instance.",
      "The previous paragraph describes bans and annulments versus acceptance; the option gives the plated shoe case and the dimensional compromise.",
      "The preceding paragraph says the usual principle is unhelpful; the option sets out the alternative principle and its disadvantage.",
      "The previous paragraph proposes availability as the workable criterion; the option explains why that distinction is observable.",
      "The preceding paragraph concerns surfaces and venues; the option adds timing technology as another change in the numbers.",
      "The previous paragraph says cross-era comparison has no defensible method; the option places doping in the same practical category.",
      "The option explains flattening and continuing progression by equipment stability, consistent with the closing account of records as snapshots."
    ]
  },
  {
    id: "cpe-rgap16-04",
    title: "Renting the Bees",
    segments: [
      "A substantial proportion of the crops grown for human consumption require an animal to move pollen between flowers, and the arrangement by which this is achieved in modern agriculture is a commercial service delivered by lorry.",
      "The scale of that service is not widely appreciated outside the industry. Hives are transported across continents in numbers running to hundreds of thousands, arriving at a crop as it comes into flower, remaining for a few weeks and moving on to the next crop in a schedule that occupies the entire growing season.",
      "The arrangement exists because the landscapes in which these crops are grown cannot support the pollinators required. A region planted with a single crop provides an enormous quantity of forage for two weeks and nothing at all for the remaining fifty, which is not a habitat that any resident population can occupy.",
      "The consequences for the bees are the subject of a large and contested literature, and the areas of agreement are worth separating from the disputes. Transport, crowding, mixing of colonies from different origins and the nutritional limitation of a single-crop diet are all stressors, and their effects compound rather than adding.",
      "The disease dimension is where the concentration matters most. Bringing colonies from many sources into a single location for several weeks is an arrangement that would be recognised immediately as dangerous in any other kind of livestock management, and it is repeated several times a year.",
      "The pesticide question has dominated public discussion and has produced a body of evidence that is more complicated than either side's summary of it. Sub-lethal exposures affect navigation, foraging and colony development in ways that laboratory studies demonstrate clearly and field studies detect inconsistently, largely because field conditions contain everything else as well.",
      "The wild pollinators that the managed ones have displaced are meanwhile more effective at the job in most crops that have been examined, and their decline is driven by the same landscape simplification that made the rental service necessary in the first place.",
      "What that suggests is that the service is a symptom presented as a solution. A landscape that supported a resident pollinator population would not require hives to be delivered to it, the measures that would produce such a landscape are known and are modest in cost, and they are not adopted because the benefit accrues to the farm as a whole while the cost appears against a specific field."
    ],
    options: [
      "Solitary bees and hoverflies do a disproportionate share of the work where they are present, visiting flowers in ways that transfer pollen more efficiently, and several crops are pollinated better by a modest population of these than by a large delivery of managed colonies.",
      "Hedgerows, field margins, flowering strips and a modest reduction in the uniformity of a rotation are the measures in question, and their effect on pollinator populations has been demonstrated repeatedly at a scale that leaves little room for argument.",
      "Almond production is the standard illustration, requiring a concentration of hives at one moment in the year that amounts to a large share of the managed colonies in an entire country, all converging on the same region within a few days.",
      "Nor is a single crop a balanced diet. Pollen from different plants differs in protein content and amino acid composition, and colonies confined to one source for weeks show deficiencies that beekeepers correct with supplements, which is an admission of what the arrangement does.",
      "Parasites and pathogens have spread globally by exactly this route, arriving with transported colonies and establishing themselves in populations that had no exposure to them, and the timeline of several such spreads maps precisely onto the growth of the migratory industry.",
      "Regulatory responses have accordingly focused on specific compounds, and the restrictions imposed have in several cases been followed by the substitution of alternatives whose effects are less studied rather than by any reduction in overall use.",
      "Honey has become a secondary product of this business rather than its purpose, and the income from pollination contracts now exceeds the income from the hive's output in the operations that specialise in it, which is a reversal of the entire economic basis of the trade.",
      "The mobility itself is ancient in principle, since hives were moved by river and by cart long before lorries existed, and what has changed is the distance, the scale and the fact that the destination is now chosen by a contract rather than by the beekeeper."
    ],
    answers: [2, 7, 3, 4, 5, 0, 1],
    explanations: [
      "The preceding paragraph describes the scale of the service; the option gives almond production as the standard illustration.",
      "The previous paragraph explains why such landscapes cannot support residents; the option notes that hive mobility is ancient and what has changed.",
      "The preceding paragraph lists compounding stressors including diet; the option explains the nutritional limitation directly.",
      "The previous paragraph describes concentration and disease risk; the option records how parasites spread by that route.",
      "The preceding paragraph describes the pesticide evidence; the option describes regulatory responses and substitution.",
      "The previous paragraph says wild pollinators are more effective; the option specifies which species and why.",
      "The option lists the landscape measures whose effect is well demonstrated, which the closing paragraph says are not adopted."
    ]
  },
  {
    id: "cpe-rgap16-05",
    title: "The Library After the Books",
    segments: [
      "A public library was for a century an institution defined by the scarcity of the object it held, and the disappearance of that scarcity ought to have ended it. That it has not is the most interesting thing about the sector and is generally explained badly by everybody involved.",
      "The original proposition was straightforward. Books were expensive relative to incomes, a collection could be shared, and a building holding one made available to a whole population a resource that no household could assemble, which is a clear case for public provision and required no further argument.",
      "The proposition weakened as books became cheap and weakened further as text became free, and the institutions responded by describing themselves in new terms. Community hub, learning centre, digital access point: the vocabulary changed faster than the buildings, and the change was frequently received as an evasion.",
      "The evasion reading is unfair, because what the new vocabulary describes is what the buildings were already doing. Use surveys conducted over the last two decades find that a large proportion of visits involve no borrowing at all, and that what is being used is the space, the connection and the staff.",
      "The property that makes the space valuable is one that almost nothing else in a modern town possesses. It is somewhere a person may remain for several hours without buying anything, without an appointment and without explaining why they are there, and the number of such places has fallen to almost none.",
      "That property does most of the work in the accounts of who actually uses libraries. People without a suitable home for study, without an office, without a device or a connection, and people whose day contains no other reason to be anywhere at all, use the building in preference to anything else available to them.",
      "The staff are the component that funding decisions most often treat as removable and that the evidence identifies as central. Assistance in finding, judging and using information is a service with no free substitute, and the interactions recorded in busy branches are overwhelmingly requests for help rather than transactions of any kind.",
      "What the sector has failed to do is state this clearly enough to be defended. An institution whose case rests on lending is vulnerable to the observation that lending has declined; one whose case rests on being the last unconditional public interior in a town is making a claim that is harder to dismiss and considerably closer to what the buildings are actually for."
    ],
    options: [
      "Automated issue desks and self-service systems were introduced on the assumption that the transaction was the service, and their consequence in several places was a reduction in exactly the encounters that the surveys identify as the reason people came.",
      "Unconditional is the operative word. A shop tolerates a person for as long as they might buy something, a cafe for as long as their cup lasts, and a station until somebody asks where they are travelling, whereas a library asks nothing of anybody who is quiet.",
      "The buildings themselves are frequently the most substantial public structures in a district, built in a period of civic confidence, and their maintenance costs are the item that appears in every proposal to close them.",
      "That argument won it public funding across the world within a few decades, and the physical form followed: a reading room, a lending counter, a reference collection, and opening hours designed for people who worked.",
      "Those requests are also the ones that no algorithm has replaced, since a person who does not know how to phrase a question cannot be helped by a system that requires one, and the intervention that works is a conversation with somebody who has done it before.",
      "Hours are where the reductions have actually fallen, since closing a branch is politically difficult and reducing its opening from six days to three is not, and the resulting service is unusable by precisely the people who cannot choose when they visit.",
      "Homelessness has made this visible in an uncomfortable way, since staff in many towns spend a substantial part of their day on situations for which they have no training, and the sector has been asked to absorb a problem that other services stopped addressing.",
      "The response was not dishonest so much as poorly argued. What the institutions were describing was real, and it was expressed in the language of strategy documents rather than in terms anybody outside the profession would recognise as a reason to keep a building open."
    ],
    answers: [3, 7, 1, 6, 4, 0, 5],
    explanations: [
      "The preceding paragraph states the original proposition; the option describes the funding it won and the physical form that followed.",
      "The previous paragraph says the new vocabulary was received as evasion; the option explains that the response was poorly argued rather than dishonest.",
      "The preceding paragraph identifies the space as uniquely unconditional; the option develops what unconditional means in contrast with shops and stations.",
      "The previous paragraph describes who uses the building; the option adds the uncomfortable case of homelessness.",
      "The preceding paragraph says interactions are requests for help; the option explains why no algorithm replaces them.",
      "The previous paragraph says staff are treated as removable; the option describes self-service systems removing the valued encounters.",
      "The option notes that reductions have fallen on opening hours, consistent with the closing argument about how the case should be stated."
    ]
  },
  {
    id: "cpe-rgap16-06",
    title: "Paying for Water in a Bottle",
    segments: [
      "The sale of drinking water in containers, in places where the same substance arrives at a tap for a negligible price, is among the more remarkable commercial achievements of the last half century, and explaining it requires more than an appeal to gullibility.",
      "The product being sold is not principally the water. It is portability, a container that can be carried and closed, an assurance about origin, and a set of associations constructed by marketing, and consumers who would not pay for the liquid pay readily for the combination.",
      "The assurance component deserves examination because it is the one that varies most between markets. Where public supply is unreliable, bottled water is a rational purchase and its price is a measure of a failure elsewhere; where supply is excellent, the same purchase is a preference and is marketed as though it were a precaution.",
      "The comparison of quality between the two sources is more equivocal than either industry admits. Public supply is tested continuously to standards that specify a great many parameters; bottled water is tested less often against a shorter list, and studies sampling both have not produced the clear advantage that the pricing implies.",
      "The environmental accounting is the part of the subject that has moved public opinion, and it is dominated by the container rather than by the contents. Manufacture, transport of a heavy product over long distances and disposal of a package used for a few minutes account for almost the entire impact.",
      "Recycling has been the industry's answer and is a weaker answer than its prominence suggests. Collection rates vary enormously, a bottle collected is frequently converted into something that cannot be recycled again, and the material recovered competes with new plastic whose price it must match to find a buyer.",
      "The deposit systems that work are unpopular with the industry for a reason that is visible in the figures. A refundable deposit attached to a container raises return rates dramatically, produces a clean stream of material that can be recycled repeatedly, and imposes the cost of the system on the party that put the container into circulation.",
      "What has changed the market most is not any of these arguments but the reappearance of the drinking fountain. Public refill points, and a container the consumer already owns, remove the need for the purchase entirely, and the trajectory of that substitution suggests that the demand was for portability all along and that the industry had simply been the only party supplying it."
    ],
    options: [
      "Sparkling and flavoured products complicate the comparison, since these are genuinely manufactured goods with no equivalent from a tap, and a substantial share of the growth in the sector has come from them rather than from still water.",
      "The distinction is rarely made in the advertising, which uses imagery of springs and mountains in markets whose tap water is drawn from the same aquifers and treated to a higher standard than anything the bottle is required to meet.",
      "Taste tests conducted blind reinforce the point, with participants unable to identify their preferred brand reliably and frequently rating a treated public supply above products costing several hundred times as much per litre.",
      "That combination is what defeated the early assumption that the market would collapse once consumers noticed what they were buying. They had noticed; the purchase was not a mistake about the contents but a decision about everything else attached to them.",
      "Weight is the decisive factor in the transport component, since water is heavy and much of it is moved hundreds of kilometres from a source whose identity is a marketing asset rather than a technical requirement.",
      "The schemes are not new, having operated for decades on glass containers before being dismantled in most places when packaging shifted to single use, which means the mechanism is well understood and its removal was a deliberate choice rather than an oversight.",
      "Filtration devices sold for domestic use occupy a middle position, addressing taste rather than safety in most cases, and their own environmental accounting is rarely presented alongside the comparison that is used to sell them.",
      "Municipal fountains were once ubiquitous and were removed from many towns during a period when they were regarded as unhygienic and expensive to maintain, so that their return is a restoration rather than an innovation."
    ],
    answers: [3, 1, 2, 4, 6, 5, 7],
    explanations: [
      "The preceding paragraph explains what is actually being sold; the option says this defeated the assumption that the market would collapse.",
      "The previous paragraph distinguishes rational purchase from marketed precaution; the option notes that advertising never makes the distinction.",
      "The preceding paragraph says quality comparisons are equivocal; the option reports blind taste tests.",
      "The previous paragraph says transport dominates the impact; the option explains that weight is the decisive factor.",
      "The preceding paragraph assesses recycling; the option places domestic filtration devices in the same accounting.",
      "The previous paragraph describes deposit systems; the option notes they are not new and were deliberately dismantled.",
      "The option explains that fountains were removed and are now returning, which the final paragraph describes as the decisive change."
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.gap = (window.READING.gap || []).concat(BANK);
})();
