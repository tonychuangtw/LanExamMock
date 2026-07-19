/* PET Prep extra bank: part1 wave 5 — Home, Town, Grammar patterns, Mixed phrasal verbs */
(function () {
  var BANK = [
    /* ---------- House & Home ---------- */
    {
      text: "We're moving ____ a bigger flat at the end of the month.",
      options: ["into", "onto", "up to on", "in at"],
      answer: 0,
      explanation: "'Move into' a home means to start living there. 'Onto' is for surfaces, and 'up to on' and 'in at' are incorrect combinations."
    },
    {
      text: "Whose turn is it to ____ the washing-up tonight?",
      options: ["make", "do", "take", "clean"],
      answer: 1,
      explanation: "'Do the washing-up' is the standard collocation for cleaning dishes. 'Make', 'take' and 'clean' are not used with 'the washing-up'."
    },
    {
      text: "Could you ____ the rubbish out before you go to bed?",
      options: ["bring up", "carry on", "take", "move on"],
      answer: 2,
      explanation: "'Take out the rubbish' means to put it outside. 'Bring up' means to mention or raise children, 'carry on' means to continue, and 'move on' means to progress."
    },
    {
      text: "The heating isn't working, so the whole house is absolutely ____ .",
      options: ["frosting", "chilling up", "snowing", "freezing"],
      answer: 3,
      explanation: "'Freezing' means extremely cold. 'Chilling up' is incorrect, 'snowing' happens outside, and 'frosting' is icing on cakes."
    },
    {
      text: "We've just had a new kitchen ____ in our house.",
      options: ["fitted", "put off", "dressed", "planted"],
      answer: 0,
      explanation: "'Have something fitted' means to have it installed. 'Put off' means postponed, 'dressed' is for people, and 'planted' is for gardens."
    },
    {
      text: "My room is on the second ____ , next to the bathroom.",
      options: ["ground", "floor", "storey up", "level up"],
      answer: 1,
      explanation: "Rooms are on a 'floor' of a building. 'Ground' alone is outside, and 'storey up' and 'level up' are incorrect forms."
    },
    {
      text: "Don't forget to ____ the door when you leave the house.",
      options: ["key", "close up on", "lock", "seal up"],
      answer: 2,
      explanation: "'Lock the door' means to secure it with a key. 'Close up on' is incorrect, 'key' is a noun, and 'seal up' is for envelopes and containers."
    },
    {
      text: "The lift is broken again, so we'll have to take the ____ .",
      options: ["steps up", "escalator up", "ladders", "stairs"],
      answer: 3,
      explanation: "'Take the stairs' is the standard expression in a building. 'Steps up' and 'escalator up' are incorrect forms, and 'ladders' are portable equipment."
    },
    {
      text: "We paid a ____ of one month's rent before moving in.",
      options: ["deposit", "debt", "fee up", "fine"],
      answer: 0,
      explanation: "A 'deposit' is money paid in advance as security. A 'debt' is money owed, 'fee up' is incorrect, and a 'fine' is a punishment payment."
    },
    {
      text: "It's your turn to ____ your bed before school.",
      options: ["do up", "make", "build", "prepare up"],
      answer: 1,
      explanation: "'Make your bed' means to tidy the sheets and covers. 'Do up' means to fasten or renovate, 'build' is for construction, and 'prepare up' is incorrect."
    },
    {
      text: "The landlord promised to ____ the broken window this week.",
      options: ["cure", "heal", "repair", "recover"],
      answer: 2,
      explanation: "You 'repair' broken objects. 'Cure' and 'heal' are for illness and injuries, and 'recover' means to get better or get something back."
    },
    {
      text: "Hang your wet coat on the ____ behind the door.",
      options: ["handle", "nail up", "pin up", "hook"],
      answer: 3,
      explanation: "A 'hook' is for hanging coats. 'Nail up' and 'pin up' are verbs meaning to attach, and a 'handle' is for opening doors."
    },
    {
      text: "The garden is looking messy — I really must ____ the grass.",
      options: ["cut", "chop", "shave", "slice"],
      answer: 0,
      explanation: "'Cut the grass' is the everyday collocation. 'Chop' is for wood and vegetables, 'shave' is for faces, and 'slice' is for bread and cake."
    },
    {
      text: "There isn't ____ room in the garage for two cars.",
      options: ["plenty", "enough", "sufficient of", "much of"],
      answer: 1,
      explanation: "'Enough + noun' expresses sufficient quantity. 'Plenty' needs 'of', 'sufficient of' is wrong, and 'much of' doesn't fit before 'room' here."
    },
    {
      text: "Can you water the ____ while I'm on holiday next week?",
      options: ["curtains", "furniture", "plants", "carpets"],
      answer: 2,
      explanation: "You 'water plants' to keep them alive. Furniture, curtains and carpets do not need watering."
    },
    {
      text: "We keep old boxes and suitcases up in the ____ .",
      options: ["cellar", "garage up", "basement up", "attic"],
      answer: 3,
      explanation: "The 'attic' is the space under the roof ('up' is the clue). A 'cellar' is below the house, and 'basement up' and 'garage up' are incorrect forms."
    },
    {
      text: "Turn the ____ on — it's getting dark in here.",
      options: ["light", "fire up", "candle up", "sun"],
      answer: 0,
      explanation: "You 'turn on the light' with a switch. 'Fire up' and 'candle up' are incorrect, and you cannot turn on the sun."
    },
    {
      text: "Our flat ____ a kitchen, two bedrooms and a small balcony.",
      options: ["consists", "has got", "includes up", "composes"],
      answer: 1,
      explanation: "'Has got' means possesses. 'Consists' needs 'of', 'includes up' is incorrect, and 'composes' means to write music."
    },
    {
      text: "The smoke ____ went off while I was frying the onions.",
      options: ["signal up", "bell up", "alarm", "clock"],
      answer: 2,
      explanation: "A 'smoke alarm' warns of fire. 'Bell up' and 'signal up' are incorrect forms, and a 'clock' tells the time."
    },
    {
      text: "Could you help me ____ this heavy wardrobe upstairs?",
      options: ["raise on", "hold on", "lift on", "carry"],
      answer: 3,
      explanation: "'Carry' means to move something while holding it. 'Hold on' means to wait, and 'lift on' and 'raise on' are incorrect combinations."
    },
    {
      text: "We're having the living room ____ blue and white next month.",
      options: ["painted", "coloured", "drawn", "brushed"],
      answer: 0,
      explanation: "You have walls 'painted'. 'Coloured' is for pictures, 'drawn' is with pencils, and 'brushed' is for hair and teeth."
    },
    {
      text: "The rent doesn't include electricity, so the ____ arrive separately.",
      options: ["tickets", "bills", "cheques", "menus"],
      answer: 1,
      explanation: "'Bills' show how much you must pay for services. 'Tickets' are for travel and events, 'cheques' are a way of paying, and 'menus' list food."
    },
    {
      text: "I always ____ the beds and vacuum the floors on Saturday mornings.",
      options: ["replace up", "exchange", "change", "switch up"],
      answer: 2,
      explanation: "'Change the beds' means to put on clean sheets. 'Exchange' is for swapping items, and 'replace up' and 'switch up' are incorrect forms."
    },
    {
      text: "The neighbours complained because our music was far too ____ .",
      options: ["strong up", "aloud", "noisy up", "loud"],
      answer: 3,
      explanation: "'Loud' describes high volume. 'Aloud' means spoken out loud, and 'noisy up' and 'strong up' are incorrect forms."
    },
    {
      text: "There's a lovely ____ of the park from the kitchen window.",
      options: ["view", "vision", "scene up", "watch"],
      answer: 0,
      explanation: "A 'view' is what you can see from a place. 'Vision' is the ability to see or a dream, 'scene up' is incorrect, and 'watch' is a verb or a timepiece."
    },
    /* ---------- Town & Services ---------- */
    {
      text: "Excuse me, could you tell me the ____ to the railway station?",
      options: ["road", "way", "direction up", "street"],
      answer: 1,
      explanation: "'Tell someone the way' is the fixed expression for directions. 'Road' and 'street' are specific places, and 'direction up' is incorrect."
    },
    {
      text: "Go straight on and turn left ____ the traffic lights.",
      options: ["in", "on", "at", "to"],
      answer: 2,
      explanation: "'At the traffic lights' is the correct preposition for a point. 'In', 'on' and 'to' are not used with 'traffic lights' for directions."
    },
    {
      text: "You can ____ money from the cash machine outside the bank.",
      options: ["extract", "pull up", "remove up", "withdraw"],
      answer: 3,
      explanation: "'Withdraw' is the word for taking money from an account. 'Extract' is for teeth and information, and 'remove up' and 'pull up' are incorrect."
    },
    {
      text: "I need to go to the ____ to post this parcel to Japan.",
      options: ["post office", "police station", "town hall", "estate agent"],
      answer: 0,
      explanation: "The 'post office' handles letters and parcels. The police station is for crime, the town hall for local government, and an estate agent sells houses."
    },
    {
      text: "The chemist's is just ____ the corner, next to the bakery.",
      options: ["behind", "round", "along up", "beside up"],
      answer: 1,
      explanation: "'Round the corner' means very near. 'Behind the corner' is unnatural, and 'along up' and 'beside up' are incorrect forms."
    },
    {
      text: "The museum is ____ the cathedral and the old market square.",
      options: ["among", "middle", "between", "inside up"],
      answer: 2,
      explanation: "'Between' is used with two places. 'Among' is for three or more, 'middle' needs 'in the', and 'inside up' is incorrect."
    },
    {
      text: "There's a pedestrian ____ just past the school — always use it.",
      options: ["stepping", "passing", "walking", "crossing"],
      answer: 3,
      explanation: "A 'pedestrian crossing' is a marked place to cross the road. 'Passing', 'walking' and 'stepping' do not form this term."
    },
    {
      text: "You'll get a parking ____ if you leave your car there.",
      options: ["fine", "bill", "price", "payment"],
      answer: 0,
      explanation: "A 'fine' is money you pay as a punishment. A 'bill' is for services, a 'price' is for goods, and a 'payment' is neutral, not a punishment."
    },
    {
      text: "The town ____ is where the mayor and local council work.",
      options: ["house up", "hall", "office up", "centre up"],
      answer: 1,
      explanation: "The 'town hall' is the local government building. 'House up', 'office up' and 'centre up' are incorrect forms."
    },
    {
      text: "Is there a bus ____ near here? I need the number 42.",
      options: ["end", "point", "stop", "wait"],
      answer: 2,
      explanation: "A 'bus stop' is where buses pick up passengers. 'End', 'point' and 'wait' do not combine with 'bus' this way."
    },
    {
      text: "The city centre gets very ____ during rush hour, so leave early.",
      options: ["filled", "occupied", "engaged", "busy"],
      answer: 3,
      explanation: "'Busy' describes places full of traffic and people. 'Occupied' and 'engaged' are for seats, toilets and phone lines, and 'filled' needs 'with'."
    },
    {
      text: "We got ____ the wrong bus and ended up on the other side of town.",
      options: ["on", "in", "at", "up"],
      answer: 0,
      explanation: "You get 'on' a bus (and 'off' it). 'In' is for cars and taxis, and 'at' and 'up' are not used for boarding buses."
    },
    {
      text: "The library is open every day ____ Sundays and public holidays.",
      options: ["unless", "except", "besides", "instead"],
      answer: 1,
      explanation: "'Except' means not including. 'Unless' introduces conditions, 'besides' means in addition to, and 'instead' means in place of."
    },
    {
      text: "The old cinema was pulled ____ to make space for a car park.",
      options: ["off", "out", "down", "away"],
      answer: 2,
      explanation: "'Pull down' means to demolish a building. 'Pull off' means to succeed, 'pull out' means to withdraw, and 'pull away' is for vehicles leaving."
    },
    {
      text: "There's no ____ to the castle on Mondays — the gates are locked.",
      options: ["entry up", "permission up", "invitation", "admission"],
      answer: 3,
      explanation: "'Admission' means the right to enter a public place. 'Entry up' and 'permission up' are incorrect forms, and an 'invitation' is personal."
    },
    {
      text: "The baker's is ____ the street from the butcher's.",
      options: ["across", "along to", "opposite to on", "over at"],
      answer: 0,
      explanation: "'Across the street from' means on the other side. 'Along to', 'opposite to on' and 'over at' are incorrect combinations."
    },
    {
      text: "Take the second ____ on the right after the bridge.",
      options: ["curving", "turning", "bending", "rounding"],
      answer: 1,
      explanation: "A 'turning' is a road that leads off another. 'Curving', 'bending' and 'rounding' are not used for streets in directions."
    },
    {
      text: "The fire ____ arrived within minutes and put out the blaze.",
      options: ["army up", "band", "brigade", "troop up"],
      answer: 2,
      explanation: "The 'fire brigade' fights fires (British English). A 'band' plays music, and 'army up' and 'troop up' are incorrect forms."
    },
    {
      text: "My appointment at the ____ is at three — my tooth has been aching for days.",
      options: ["doctor's up", "vet's", "chemist's up", "dentist's"],
      answer: 3,
      explanation: "A 'dentist' treats teeth. Doctors treat general illness, chemists sell medicine, and vets treat animals — and the '-up' forms are incorrect anyway."
    },
    {
      text: "The streets were ____ with tourists during the summer festival.",
      options: ["crowded", "collected", "gathered up", "grouped up"],
      answer: 0,
      explanation: "'Crowded with' means full of people. 'Collected' is for objects, and 'gathered up' and 'grouped up' are incorrect here."
    },
    {
      text: "You need to book an ____ before you can see the doctor.",
      options: ["arrangement", "appointment", "engagement up", "occasion"],
      answer: 1,
      explanation: "An 'appointment' is a fixed time to see a professional. An 'arrangement' is a general plan, 'engagement up' is incorrect, and an 'occasion' is an event."
    },
    {
      text: "The supermarket is giving ____ free samples of their new cheese today.",
      options: ["off", "up", "away", "in"],
      answer: 2,
      explanation: "'Give away' means to give free of charge. 'Give off' is for smells, 'give up' means to stop, and 'give in' means to surrender."
    },
    {
      text: "There was a long ____ in the traffic because of the roadworks.",
      options: ["wait up", "pause up", "stop up", "delay"],
      answer: 3,
      explanation: "A 'delay' is a period of waiting caused by a problem. 'Pause up', 'stop up' and 'wait up' are incorrect noun forms here."
    },
    {
      text: "You can't park here — look at that 'No ____ ' sign.",
      options: ["Parking", "Stopping up", "Cars up", "Waiting on"],
      answer: 0,
      explanation: "'No Parking' is the standard road sign. 'Stopping up', 'Cars up' and 'Waiting on' are not standard signs."
    },
    {
      text: "Cross the bridge and keep ____ until you reach the fountain.",
      options: ["moving up", "going", "walking on to", "heading on at"],
      answer: 1,
      explanation: "'Keep going' means to continue in the same direction. The other options use incorrect combinations of particles."
    },
    /* ---------- Linking words & verb patterns ---------- */
    {
      text: "I'll lend you my notes ____ you promise to return them tomorrow.",
      options: ["in spite of", "even if", "as long as", "so that"],
      answer: 2,
      explanation: "'As long as' means on condition that. 'Even if' means it doesn't matter whether, 'in spite of' needs a noun, and 'so that' expresses purpose."
    },
    {
      text: "____ the heavy rain, the match went ahead as planned.",
      options: ["Although", "Even though", "However", "Despite"],
      answer: 3,
      explanation: "'Despite + noun' expresses contrast. 'Although' and 'even though' need a subject and verb, and 'however' joins two separate sentences."
    },
    {
      text: "Take a map with you ____ you get lost in the old town.",
      options: ["in case", "unless", "so that", "as long as"],
      answer: 0,
      explanation: "'In case' means as a precaution against something happening. 'So that' expresses purpose, 'unless' means if not, and 'as long as' expresses a condition."
    },
    {
      text: "She turned the TV down ____ she wouldn't wake the baby.",
      options: ["in order", "so that", "because of", "in case of"],
      answer: 1,
      explanation: "'So that' introduces a purpose clause with a verb. 'In order' needs 'to', and 'because of' and 'in case of' need nouns."
    },
    {
      text: "He's saving money ____ buy his first motorbike next year.",
      options: ["for", "so", "to", "that"],
      answer: 2,
      explanation: "'To + infinitive' expresses purpose. 'For' would need an -ing form or noun, and 'so' and 'that' cannot introduce this purpose structure alone."
    },
    {
      text: "My mum let me ____ up late to watch the election results.",
      options: ["to stay", "staying", "stayed", "stay"],
      answer: 3,
      explanation: "'Let' is followed by the bare infinitive without 'to'. 'To stay', 'staying' and 'stayed' are all wrong after 'let'."
    },
    {
      text: "Our teacher made us ____ the exercise again from the beginning.",
      options: ["do", "to do", "doing", "done"],
      answer: 0,
      explanation: "'Make somebody do' takes the bare infinitive in the active. 'To do', 'doing' and 'done' are incorrect after 'make us'."
    },
    {
      text: "I don't mind ____ the dishes if you cook the dinner.",
      options: ["to wash", "washing", "wash", "washed"],
      answer: 1,
      explanation: "'Mind' is followed by the -ing form. 'To wash', 'wash' and 'washed' cannot follow 'mind'."
    },
    {
      text: "Remember ____ the lights before you leave the office tonight.",
      options: ["turning off", "turn off", "to turn off", "turned off"],
      answer: 2,
      explanation: "'Remember + to-infinitive' means don't forget to do a future action. 'Remember + -ing' refers to a past memory, and the other forms are ungrammatical."
    },
    {
      text: "I'll never forget ____ the northern lights for the first time.",
      options: ["to see", "saw", "see", "seeing"],
      answer: 3,
      explanation: "'Forget + -ing' refers to a memory of a past experience. 'Forget + to-infinitive' is for future duties, and 'see' and 'saw' are ungrammatical here."
    },
    {
      text: "She stopped ____ chocolate because of her diet.",
      options: ["eating", "to eat", "eat", "eaten"],
      answer: 0,
      explanation: "'Stop + -ing' means to quit an activity. 'Stop + to-infinitive' means to pause in order to do something, and 'eat' and 'eaten' don't fit."
    },
    {
      text: "They offered ____ us a lift to the airport on Sunday.",
      options: ["giving", "to give", "give", "gave"],
      answer: 1,
      explanation: "'Offer' is followed by the to-infinitive. 'Giving', 'give' and 'gave' cannot follow 'offer' in this pattern."
    },
    {
      text: "We'd better ____ now, or we'll be late for the wedding.",
      options: ["to leave", "leaving", "leave", "left"],
      answer: 2,
      explanation: "'Had better' takes the bare infinitive. 'To leave', 'leaving' and 'left' are incorrect after 'we'd better'."
    },
    {
      text: "He kept ____ the same question until someone finally answered.",
      options: ["asked", "to ask", "ask", "asking"],
      answer: 3,
      explanation: "'Keep + -ing' means to continue doing something. The infinitive and other forms are not used after 'keep'."
    },
    {
      text: "Would you like ____ with us to the lake on Saturday?",
      options: ["to come", "coming", "come", "came"],
      answer: 0,
      explanation: "'Would like' is followed by the to-infinitive. 'Coming', 'come' and 'came' are wrong after 'would like'."
    },
    {
      text: "I'm not used to ____ up so early on Sundays.",
      options: ["get", "getting", "got", "have got"],
      answer: 1,
      explanation: "'Be used to' is followed by -ing because 'to' is a preposition here. 'Get', 'got' and 'have got' are incorrect in this pattern."
    },
    {
      text: "____ he was tired, he offered to drive us all home.",
      options: ["Despite", "However", "Even though", "Because of"],
      answer: 2,
      explanation: "'Even though' introduces a contrast clause with subject and verb. 'Despite' and 'because of' need nouns, and 'however' joins separate sentences."
    },
    {
      text: "The film was boring. ____ , the acting was excellent.",
      options: ["Whereas", "Although", "Despite", "However"],
      answer: 3,
      explanation: "'However' contrasts two separate sentences. 'Although', 'despite' and 'whereas' cannot stand alone at the start of a new sentence like this."
    },
    {
      text: "You should take some cash ____ well as your credit card.",
      options: ["as", "so", "too", "such"],
      answer: 0,
      explanation: "'As well as' means in addition to. 'So', 'too' and 'such' do not form this expression with 'well as'."
    },
    {
      text: "It was raining hard. ____ , we decided to cancel the barbecue.",
      options: ["Although", "Therefore", "Unless", "Whereas"],
      answer: 1,
      explanation: "'Therefore' introduces a logical result. 'Although' and 'whereas' express contrast, and 'unless' expresses a condition."
    },
    {
      text: "I enjoy ____ to podcasts while I'm cooking dinner.",
      options: ["listen", "to listen", "listening", "listened"],
      answer: 2,
      explanation: "'Enjoy' is always followed by the -ing form. 'To listen', 'listen' and 'listened' cannot follow 'enjoy'."
    },
    {
      text: "They agreed ____ the meeting until everyone could attend.",
      options: ["postponing", "postponed", "postpone", "to postpone"],
      answer: 3,
      explanation: "'Agree' is followed by the to-infinitive. 'Postponing', 'postpone' and 'postponed' are incorrect after 'agree'."
    },
    {
      text: "____ of going by train, why don't we share a car?",
      options: ["Instead", "Except", "Rather", "Apart up"],
      answer: 0,
      explanation: "'Instead of + -ing' means as an alternative to. 'Except' means not including, 'rather' needs 'than', and 'apart up' is incorrect."
    },
    {
      text: "He avoided ____ his boss about the mistake for as long as possible.",
      options: ["to tell", "telling", "tell", "told"],
      answer: 1,
      explanation: "'Avoid' is followed by the -ing form. 'To tell', 'tell' and 'told' cannot follow 'avoid'."
    },
    {
      text: "You'd better take a jacket, ____ it might get cold later.",
      options: ["so", "because of", "as", "despite"],
      answer: 2,
      explanation: "'As' introduces a reason clause here. 'So' introduces a result, 'because of' needs a noun, and 'despite' expresses contrast."
    },
    /* ---------- Mixed prepositions & phrasal verbs ---------- */
    {
      text: "I came ____ some old photos while I was tidying the attic.",
      options: ["through", "over", "into", "across"],
      answer: 3,
      explanation: "'Come across' means to find by chance. 'Come over' means to visit, 'come into' means to inherit, and 'come through' means to survive."
    },
    {
      text: "The meeting has been put ____ until next Thursday afternoon.",
      options: ["back", "away", "out", "up"],
      answer: 0,
      explanation: "'Put back' means to move to a later time. 'Put away' means to store, 'put out' means to extinguish, and 'put up' means to build or host."
    },
    {
      text: "Could you fill ____ this jug with water for the flowers?",
      options: ["out", "up", "in", "over"],
      answer: 1,
      explanation: "'Fill up' means to make completely full. 'Fill out' and 'fill in' are for forms, and 'fill over' is not a phrasal verb."
    },
    {
      text: "We've run ____ of milk — could you get some on your way home?",
      options: ["off", "away", "out", "down"],
      answer: 2,
      explanation: "'Run out of' means to have none left. 'Run off' means to leave quickly, 'run away' means to escape, and 'run down' means to criticise or lose power."
    },
    {
      text: "I'm trying to work ____ how much the holiday will cost altogether.",
      options: ["on", "up", "off", "out"],
      answer: 3,
      explanation: "'Work out' means to calculate. 'Work up' means to develop a feeling, 'work off' means to burn energy, and 'work on' means to improve something."
    },
    {
      text: "The plane is due to take off ____ ten minutes, so hurry.",
      options: ["in", "on", "at", "for"],
      answer: 0,
      explanation: "'In ten minutes' means after that period from now. 'On', 'at' and 'for' are not used with periods in this future sense."
    },
    {
      text: "She turned ____ the job offer because the salary was too low.",
      options: ["off", "down", "over", "away"],
      answer: 1,
      explanation: "'Turn down' means to refuse. 'Turn off' is for machines, 'turn over' is for pages, and 'turn away' means to refuse entry to a person."
    },
    {
      text: "Look ____ ! There's a car coming round the corner.",
      options: ["into", "after", "out", "forward"],
      answer: 2,
      explanation: "'Look out!' is a warning of danger. 'Look after' means to care for, 'look into' means to investigate, and 'look forward' needs 'to'."
    },
    {
      text: "The concert was called off ____ the singer's illness.",
      options: ["because", "due", "as", "because of"],
      answer: 3,
      explanation: "'Because of + noun' gives a reason. 'Because' and 'as' need a full clause, and 'due' needs 'to'."
    },
    {
      text: "I'll pick you ____ outside the cinema at half past seven.",
      options: ["up", "over", "out", "on"],
      answer: 0,
      explanation: "'Pick up' means to collect someone by car. 'Pick on' means to treat unfairly, 'pick over' is for choosing food, and 'pick out' means to select."
    },
    {
      text: "This old jacket belonged ____ my grandfather in the 1960s.",
      options: ["with", "to", "at", "for"],
      answer: 1,
      explanation: "'Belong to' is the correct dependent preposition. 'With', 'at' and 'for' are never used after 'belong'."
    },
    {
      text: "We set ____ for the mountains just after sunrise.",
      options: ["in", "over", "out", "about"],
      answer: 2,
      explanation: "'Set out' means to begin a journey. 'Set in' is for bad weather starting, 'set over' is not a phrasal verb, and 'set about' means to start a task."
    },
    {
      text: "Please go ____ — I didn't mean to interrupt your story.",
      options: ["round", "off", "under", "on"],
      answer: 3,
      explanation: "'Go on' means to continue. 'Go off' means to explode or go bad, 'go under' means to sink, and 'go round' means to visit or be enough for everyone."
    },
    {
      text: "It took her months to get ____ the disappointment of losing the final.",
      options: ["over", "across", "along", "by"],
      answer: 0,
      explanation: "'Get over' means to recover from something unpleasant. 'Get across' means to communicate, 'get along' means to have a good relationship, and 'get by' means to manage."
    },
    {
      text: "The teacher asked us to ____ out the mistakes in each sentence.",
      options: ["show", "point", "indicate", "signal"],
      answer: 1,
      explanation: "'Point out' means to draw attention to. 'Show', 'indicate' and 'signal' are not used with 'out' in this meaning."
    },
    {
      text: "My car broke ____ on the motorway, and I had to wait for help.",
      options: ["off", "up", "down", "away"],
      answer: 2,
      explanation: "'Break down' means to stop working. 'Break off' means to end suddenly, 'break up' means to end a relationship, and 'break away' means to escape."
    },
    {
      text: "This medicine is very strong — it depends ____ your age how much you take.",
      options: ["of", "from", "at", "on"],
      answer: 3,
      explanation: "'Depend on' is the fixed dependent preposition. 'Of', 'at' and 'from' are never used after 'depend'."
    },
    {
      text: "Could you turn ____ the oven? The pizza needs twenty minutes at 200 degrees.",
      options: ["on", "in", "at", "round"],
      answer: 0,
      explanation: "'Turn on' means to start a machine. 'Turn in' means to go to bed, 'turn at' is not a phrasal verb, and 'turn round' means to face the other way."
    },
    {
      text: "The story turned ____ to be completely untrue.",
      options: ["up", "out", "in", "over"],
      answer: 1,
      explanation: "'Turn out' means to be discovered to be in the end. 'Turn up' means to arrive, 'turn in' means to go to bed, and 'turn over' is for pages."
    },
    {
      text: "I don't approve ____ people dropping chewing gum on the pavement.",
      options: ["with", "at", "of", "for"],
      answer: 2,
      explanation: "'Approve of' is the correct dependent preposition. 'With', 'at' and 'for' are never used after 'approve'."
    },
    {
      text: "He grew ____ in a small fishing village on the west coast.",
      options: ["on", "off", "out", "up"],
      answer: 3,
      explanation: "'Grow up' means to spend your childhood somewhere. 'Grow on' means to become gradually liked, 'grow off' is not a phrasal verb, and 'grow out' needs 'of'."
    },
    {
      text: "Sorry we're late — we got ____ in terrible traffic near the stadium.",
      options: ["stuck", "held", "kept", "blocked"],
      answer: 0,
      explanation: "'Get stuck in traffic' is the fixed expression. 'Held' would need 'up' ('held up'), and 'kept' and 'blocked' don't collocate with 'in traffic' this way."
    },
    {
      text: "Please carry ____ with your work while I speak to the head teacher.",
      options: ["out", "on", "off", "up"],
      answer: 1,
      explanation: "'Carry on' means to continue. 'Carry out' means to perform a task or experiment, and 'carry off' and 'carry up' don't mean continue."
    },
    {
      text: "The teacher told the students ____ talking and open their books.",
      options: ["stop", "stopping", "to stop", "stopped"],
      answer: 2,
      explanation: "'Tell somebody to do' takes the to-infinitive. 'Stop', 'stopping' and 'stopped' are incorrect after 'told the students'."
    },
    {
      text: "I'm really pleased ____ the progress you've made this term.",
      options: ["of", "at", "for", "with"],
      answer: 3,
      explanation: "'Pleased with' is the correct adjective-preposition combination. 'Of', 'at' and 'for' are not used after 'pleased' with achievements."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
