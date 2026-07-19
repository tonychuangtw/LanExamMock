/* PET Prep extra bank: part1 wave 3 — Health, Sport, Environment, Weather & Animals */
(function () {
  var BANK = [
    /* ---------- Health & Body ---------- */
    {
      text: "I've got a terrible ____ — I can hardly swallow anything.",
      options: ["sore throat", "hurt throat", "painful neck", "throat pain"],
      answer: 0,
      explanation: "'Sore throat' is the standard collocation for this illness. 'Hurt throat', 'painful neck' and 'throat pain' are not natural English expressions."
    },
    {
      text: "You look pale — I think you should ____ an appointment with the doctor.",
      options: ["do", "make", "take", "put"],
      answer: 1,
      explanation: "'Make an appointment' is the correct collocation. 'Do', 'take' and 'put' are not used with 'appointment' in this way."
    },
    {
      text: "The doctor gave me a ____ for some strong painkillers.",
      options: ["receipt", "recipe", "prescription", "instruction"],
      answer: 2,
      explanation: "A 'prescription' is a doctor's written order for medicine. A 'receipt' proves payment, a 'recipe' is for cooking, and an 'instruction' is a general direction."
    },
    {
      text: "Take this medicine three times a day and you'll soon get ____ your cold.",
      options: ["by", "through", "off", "over"],
      answer: 3,
      explanation: "'Get over' an illness means to recover from it. 'Get through' means to finish or survive something difficult, and 'get off' and 'get by' don't fit illness."
    },
    {
      text: "She fell off her bike and ____ her arm in two places.",
      options: ["broke", "cracked", "smashed", "tore"],
      answer: 0,
      explanation: "'Break your arm' is the standard collocation for bones. 'Cracked' is possible for ribs but less common here, 'smashed' is for objects, and 'torn' is for muscles."
    },
    {
      text: "My grandfather has to take ____ for his high blood pressure.",
      options: ["cures", "tablets", "recipes", "drugs up"],
      answer: 1,
      explanation: "You 'take tablets' (pills) for a medical condition. 'Cures' aren't taken daily, 'drugs up' is not correct, and 'recipes' are for cooking."
    },
    {
      text: "I feel dizzy every time I ____ up too quickly.",
      options: ["rise", "raise", "stand", "lift"],
      answer: 2,
      explanation: "'Stand up' means to move to a standing position. 'Rise up' means to rebel, and 'raise' and 'lift' need an object."
    },
    {
      text: "He's been sneezing all day — I think he's ____ a cold.",
      options: ["getting on", "taking", "receiving", "catching"],
      answer: 3,
      explanation: "'Catch a cold' means to become ill with one. 'Take', 'receive' and 'get on' do not collocate with 'a cold'."
    },
    {
      text: "The nurse put a ____ on the cut to stop the bleeding.",
      options: ["plaster", "paper", "cover", "sheet"],
      answer: 0,
      explanation: "A 'plaster' is a small sticky bandage (British English). 'Paper', 'cover' and 'sheet' are not used for treating cuts."
    },
    {
      text: "If the ____ doesn't go away, take two more painkillers this evening.",
      options: ["ache", "pain", "hurt", "harm"],
      answer: 1,
      explanation: "'Pain' is the general noun for physical suffering. 'Ache' usually forms compounds like 'headache', 'hurt' is mainly a verb, and 'harm' means damage."
    },
    {
      text: "You should lie down and ____ until your temperature comes down.",
      options: ["pause", "remain", "rest", "relax up"],
      answer: 2,
      explanation: "'Rest' means to stop activity and recover. 'Remain' means to stay in a place, 'pause' means to stop briefly, and 'relax up' is not correct English."
    },
    {
      text: "Eating too much fast food is bad ____ your heart.",
      options: ["to", "with", "at", "for"],
      answer: 3,
      explanation: "'Bad for' is the correct dependent preposition for health effects. 'To', 'with' and 'at' are not used after 'bad' in this meaning."
    },
    {
      text: "The injury isn't serious, but it will take a few weeks to ____ completely.",
      options: ["heal", "cure", "treat", "repair"],
      answer: 0,
      explanation: "Wounds and injuries 'heal' by themselves. Doctors 'cure' diseases and 'treat' patients, and you 'repair' machines, not bodies."
    },
    {
      text: "He was ____ in a car accident but luckily not seriously.",
      options: ["wounded", "injured", "damaged", "harmed up"],
      answer: 1,
      explanation: "People are 'injured' in accidents. 'Wounded' is used for weapons and war, 'damaged' is for objects, and 'harmed up' is not correct."
    },
    {
      text: "I've got a splitting ____ — do you have any aspirin?",
      options: ["head hurt", "head pain", "headache", "mind ache"],
      answer: 2,
      explanation: "A 'splitting headache' is a very bad pain in the head. 'Head pain', 'head hurt' and 'mind ache' are not natural collocations."
    },
    {
      text: "You should ____ down on coffee if you can't sleep at night.",
      options: ["slow", "put", "take", "cut"],
      answer: 3,
      explanation: "'Cut down on' means to reduce consumption. 'Put down' means to place, 'take down' means to remove, and 'slow down' doesn't take 'on'."
    },
    {
      text: "The dentist said I need to have a tooth taken ____ next week.",
      options: ["out", "off", "up", "away"],
      answer: 0,
      explanation: "'Take out' a tooth means to remove it. 'Take away' is for objects and food, 'take off' is for clothes and planes, and 'take up' means to start a hobby."
    },
    {
      text: "Regular exercise helps you stay ____ and healthy.",
      options: ["form", "fit", "strong up", "shaped"],
      answer: 1,
      explanation: "'Fit' means in good physical condition. 'Form' is a noun, 'strong up' is not correct, and 'shaped' needs a description like 'well-shaped'."
    },
    {
      text: "The waiting room was full, so we had to wait an hour to ____ the doctor.",
      options: ["visit to", "look", "see", "meet with"],
      answer: 2,
      explanation: "'See the doctor' is the standard expression for a medical visit. 'Visit to' is grammatically wrong, 'look' needs 'at', and 'meet with' is for business."
    },
    {
      text: "She's allergic ____ nuts, so please check the ingredients carefully.",
      options: ["from", "of", "with", "to"],
      answer: 3,
      explanation: "'Allergic to' is the correct dependent preposition. 'From', 'of' and 'with' are not used after 'allergic'."
    },
    {
      text: "Try to get a good night's ____ before your exam tomorrow.",
      options: ["sleep", "dream", "bed", "nap"],
      answer: 0,
      explanation: "'A good night's sleep' is the fixed expression. A 'dream' happens during sleep, 'bed' is the furniture, and a 'nap' is a short daytime sleep."
    },
    {
      text: "My eyes are getting worse — I probably need to wear ____ .",
      options: ["lenses up", "glasses", "windows", "mirrors"],
      answer: 1,
      explanation: "'Glasses' correct poor eyesight. 'Lenses up' is not correct (contact lenses would be), and 'windows' and 'mirrors' are objects in buildings."
    },
    {
      text: "He fainted in the heat, but he came ____ after a few minutes.",
      options: ["off", "up", "round", "along"],
      answer: 2,
      explanation: "'Come round' means to become conscious again. 'Come up' means to arise, 'come off' means to succeed or fall from, and 'come along' means to accompany or progress."
    },
    {
      text: "Smoking can seriously ____ your health, as every packet warns.",
      options: ["hurt", "injure", "wound", "damage"],
      answer: 3,
      explanation: "'Damage your health' is the standard collocation. 'Hurt' and 'injure' are for people and body parts directly, and 'wound' involves weapons."
    },
    {
      text: "I'm trying to lose ____ before my sister's wedding in June.",
      options: ["weight", "fat up", "heaviness", "kilos of me"],
      answer: 0,
      explanation: "'Lose weight' is the fixed collocation for becoming slimmer. 'Fat up', 'heaviness' and 'kilos of me' are not natural English."
    },
    /* ---------- Sport & Fitness ---------- */
    {
      text: "Do you fancy a ____ of tennis after work this evening?",
      options: ["play", "game", "sport", "competition"],
      answer: 1,
      explanation: "A 'game of tennis' is one occasion of playing. 'Play' is a verb or theatre piece, 'sport' is the general activity, and a 'competition' is an organised event."
    },
    {
      text: "Our team ____ the match by three goals to one.",
      options: ["gained", "beat", "won", "succeeded"],
      answer: 2,
      explanation: "You 'win a match' but 'beat an opponent'. 'Gained' and 'succeeded' do not collocate with 'match' in this way."
    },
    {
      text: "United ____ City two-nil in the final on Saturday.",
      options: ["won", "gained", "scored", "beat"],
      answer: 3,
      explanation: "You 'beat' another team. 'Win' takes a match or prize as its object, 'score' is for goals, and 'gain' doesn't fit here."
    },
    {
      text: "She goes ____ in the pool every morning before school.",
      options: ["swimming", "to swim", "swim", "for swim"],
      answer: 0,
      explanation: "'Go swimming' is the pattern for sports activities. 'Go to swim', 'go swim' and 'go for swim' are all grammatically incorrect."
    },
    {
      text: "He ____ the winning goal in the last minute of the game.",
      options: ["marked", "scored", "made in", "shot in"],
      answer: 1,
      explanation: "'Score a goal' is the standard collocation. 'Marked', 'made in' and 'shot in' are not used for goals in English."
    },
    {
      text: "I've decided to ____ up jogging to get a bit fitter.",
      options: ["pick", "get", "take", "put"],
      answer: 2,
      explanation: "'Take up' means to start a new hobby or sport. 'Get up' means to rise, 'pick up' means to collect or learn casually, and 'put up' means to build."
    },
    {
      text: "Thousands of ____ filled the stadium for the cup final.",
      options: ["viewers", "audiences", "watchers", "spectators"],
      answer: 3,
      explanation: "'Spectators' watch live sport. 'Viewers' watch television, 'watchers' is not the standard term, and 'audience' is for concerts and is rarely plural like this."
    },
    {
      text: "You'll need to ____ hard if you want to run the marathon in spring.",
      options: ["train", "exercise on", "practise on", "study"],
      answer: 0,
      explanation: "Athletes 'train' for events. 'Exercise on' and 'practise on' are wrong with these prepositions, and 'study' is for academic subjects."
    },
    {
      text: "The referee blew his ____ and the match finally began.",
      options: ["horn", "whistle", "bell", "alarm"],
      answer: 1,
      explanation: "A referee uses a 'whistle'. A 'horn' is on a car, a 'bell' is in schools and churches, and an 'alarm' wakes you up or warns of danger."
    },
    {
      text: "Both teams played well, so the match ended in a ____ .",
      options: ["equal", "pass", "draw", "level"],
      answer: 2,
      explanation: "A 'draw' is when neither team wins. 'Pass', 'equal' and 'level' are not nouns used for match results this way."
    },
    {
      text: "She's a strong swimmer, but she isn't very good ____ tennis.",
      options: ["in", "for", "on", "at"],
      answer: 3,
      explanation: "'Good at + activity' is the correct pattern. 'In', 'on' and 'for' are not used after 'good' with sports."
    },
    {
      text: "We ____ aerobics at the sports centre twice a week.",
      options: ["do", "play", "go", "make"],
      answer: 0,
      explanation: "'Do aerobics' is correct for exercise activities without a ball. 'Go' is used with -ing forms like 'go running', 'play' is for ball games, and 'make' doesn't fit sports."
    },
    {
      text: "The race was called ____ because of the icy conditions.",
      options: ["out", "off", "away", "down"],
      answer: 1,
      explanation: "'Call off' means to cancel. 'Call out' means to shout or summon help, and 'call away' and 'call down' don't mean cancelling."
    },
    {
      text: "He came ____ in the 100 metres, just behind the world champion.",
      options: ["twice", "double", "second", "runner"],
      answer: 2,
      explanation: "'Come second' means to finish in second place. 'Twice' means two times, 'double' means twice the amount, and 'runner' would need '-up'."
    },
    {
      text: "You have to wear a ____ when you ride a motorbike in this country.",
      options: ["cap", "hat", "hood", "helmet"],
      answer: 3,
      explanation: "A 'helmet' is hard protective headwear. A 'cap' and 'hat' are soft fashion items, and a 'hood' is part of a jacket."
    },
    {
      text: "Arsenal are playing ____ Chelsea in the semi-final next week.",
      options: ["against", "opposite", "versus to", "with each"],
      answer: 0,
      explanation: "'Play against' a team is the standard pattern. 'Opposite' is for position, 'versus to' is incorrect, and 'with each' makes no sense here."
    },
    {
      text: "I try to keep ____ by cycling to work every day.",
      options: ["sporty", "fit", "trained", "athletic"],
      answer: 1,
      explanation: "'Keep fit' is the fixed expression for staying healthy through exercise. 'Sporty', 'trained' and 'athletic' don't follow 'keep' in this way."
    },
    {
      text: "The gym gives new members a free one-hour session with a personal ____ .",
      options: ["teacher", "professor", "trainer", "master"],
      answer: 2,
      explanation: "A 'personal trainer' helps you exercise. 'Teacher' and 'professor' are for schools and universities, and 'master' is for skills or degrees."
    },
    {
      text: "It was her first competition, and she was proud just to ____ part.",
      options: ["make", "have", "get", "take"],
      answer: 3,
      explanation: "'Take part' means to participate. 'Make', 'have' and 'get' do not collocate with 'part' in this meaning."
    },
    {
      text: "Our school football ____ trains every Tuesday and Thursday.",
      options: ["team", "crew", "band", "staff"],
      answer: 0,
      explanation: "A 'team' plays sport together. A 'band' plays music, a 'crew' works on ships or planes, and 'staff' are employees."
    },
    {
      text: "Slow down! I can't keep ____ with you when you walk so fast.",
      options: ["on", "up", "off", "away"],
      answer: 1,
      explanation: "'Keep up with' means to move at the same speed as. 'Keep on' means to continue, 'keep off' means to avoid, and 'keep away' means to stay at a distance."
    },
    {
      text: "The championship takes ____ in Rome at the end of May.",
      options: ["part", "point", "place", "position"],
      answer: 2,
      explanation: "'Take place' means to happen. 'Take part' means to participate, and 'take point' and 'take position' are not standard expressions for events."
    },
    {
      text: "Always ____ up properly before you start running, or you might pull a muscle.",
      options: ["hot", "fire", "heat on", "warm"],
      answer: 3,
      explanation: "'Warm up' means to prepare your body with gentle exercise. 'Hot' is an adjective, 'heat on' is incorrect, and 'fire up' is for engines and enthusiasm."
    },
    {
      text: "After losing three times, he decided to give ____ boxing for good.",
      options: ["up", "out", "in", "off"],
      answer: 0,
      explanation: "'Give up' means to stop doing an activity permanently. 'Give off' means to release a smell, 'give out' means to distribute, and 'give in' means to surrender."
    },
    {
      text: "The final ____ was 3–2 to the home side.",
      options: ["result up", "score", "mark", "count"],
      answer: 1,
      explanation: "The 'score' is the number of goals or points in a game. 'Result up' is not correct, a 'mark' is for schoolwork, and a 'count' is the act of counting."
    },
    /* ---------- Environment & Nature ---------- */
    {
      text: "We should all ____ our rubbish instead of throwing everything away.",
      options: ["repair", "return", "recycle", "replace"],
      answer: 2,
      explanation: "'Recycle' means to process waste so it can be used again. 'Return' means give back, 'repair' means fix, and 'replace' means put something new in its place."
    },
    {
      text: "Air ____ in big cities is a serious problem for people's health.",
      options: ["dirt", "waste", "poison", "pollution"],
      answer: 3,
      explanation: "'Pollution' is harmful substances in the environment. 'Dirt' is soil or dust, 'poison' is a toxic substance, and 'waste' is rubbish."
    },
    {
      text: "Please switch off the lights to ____ energy when you leave the room.",
      options: ["save", "keep", "hold", "spare up"],
      answer: 0,
      explanation: "'Save energy' means to avoid wasting it. 'Keep' and 'hold' don't collocate with 'energy' this way, and 'spare up' is not correct English."
    },
    {
      text: "Many rare animals are in ____ of disappearing forever.",
      options: ["risk", "danger", "threat", "fear"],
      answer: 1,
      explanation: "'In danger of' is the correct expression. 'Risk' takes 'at risk of', 'threat' takes 'under threat', and 'fear' doesn't fit this pattern."
    },
    {
      text: "Scientists say the planet is getting ____ every decade.",
      options: ["warmest", "more warm", "warmer", "the warmer"],
      answer: 2,
      explanation: "'Warmer' is the correct one-syllable comparative. 'More warm' is wrong for short adjectives, and 'warmest' and 'the warmer' don't fit this sentence."
    },
    {
      text: "Thousands of trees are cut ____ every year to make paper.",
      options: ["off", "out", "away", "down"],
      answer: 3,
      explanation: "'Cut down' is used for felling trees. 'Cut off' means to disconnect, 'cut away' means to remove a part, and 'cut out' means to stop doing something."
    },
    {
      text: "You can help the environment by ____ plastic bags when you go shopping.",
      options: ["reusing", "repeating", "returning up", "recovering"],
      answer: 0,
      explanation: "'Reuse' means to use again. 'Repeat' is for actions and words, 'returning up' is incorrect, and 'recover' means to get better or get back."
    },
    {
      text: "The ____ near our town is home to deer, foxes and hundreds of birds.",
      options: ["dessert", "forest", "field house", "greenery"],
      answer: 1,
      explanation: "A 'forest' is a large area of trees where wild animals live. A 'dessert' is a sweet course (not 'desert'), and 'field house' and 'greenery' don't fit."
    },
    {
      text: "There was a terrible ____ last summer, and the river almost dried up completely.",
      options: ["flood", "storm", "drought", "earthquake"],
      answer: 2,
      explanation: "A 'drought' is a long period without rain. A 'flood' is too much water, a 'storm' brings wind and rain, and an 'earthquake' shakes the ground."
    },
    {
      text: "Heavy rain caused the river to ____ its banks and flood the village.",
      options: ["overdo", "overtake", "overcome", "overflow"],
      answer: 3,
      explanation: "'Overflow' means water rises above the edges. 'Overtake' means to pass a vehicle, 'overcome' means to defeat a problem, and 'overdo' means to do too much."
    },
    {
      text: "Don't ____ litter in the park — use the bins provided.",
      options: ["drop", "throw away", "fall", "put off"],
      answer: 0,
      explanation: "'Drop litter' is the standard collocation for leaving rubbish on the ground. 'Fall' has no object, 'throw away' is what you do into a bin, and 'put off' means to postpone."
    },
    {
      text: "Solar panels turn sunlight ____ electricity for the whole building.",
      options: ["onto", "into", "up to", "out of"],
      answer: 1,
      explanation: "'Turn something into something' means to change its form. 'Onto', 'up to' and 'out of' don't express transformation."
    },
    {
      text: "The new law aims to ____ the amount of plastic waste we produce.",
      options: ["shorten", "lessen up", "reduce", "descend"],
      answer: 2,
      explanation: "'Reduce' means to make an amount smaller. 'Shorten' is for length and time, 'lessen up' is incorrect, and 'descend' means to go down physically."
    },
    {
      text: "Whales and dolphins are ____ animals that live in family groups.",
      options: ["brutal", "savage", "rough", "wild"],
      answer: 3,
      explanation: "'Wild' animals live free in nature. 'Savage' means violently aggressive, and 'rough' and 'brutal' describe behaviour, not natural living."
    },
    {
      text: "This region is famous for its stunning natural ____ .",
      options: ["beauty", "appearance", "prettiness", "image"],
      answer: 0,
      explanation: "'Natural beauty' is the standard collocation for attractive landscapes. 'Appearance', 'prettiness' and 'image' are not used this way about regions."
    },
    {
      text: "Farmers here still grow their ____ without any chemicals.",
      options: ["corps", "crops", "growths", "seeds up"],
      answer: 1,
      explanation: "'Crops' are plants grown for food. 'Corps' is a military group, 'growths' is medical, and 'seeds up' is not correct English."
    },
    {
      text: "The path was steep, so we stopped to rest at the ____ of the hill.",
      options: ["roof", "peak up", "top", "head"],
      answer: 2,
      explanation: "The 'top of the hill' is its highest point. A 'roof' is on a building, 'peak up' is incorrect ('peak' alone would work for mountains), and 'head' is not used for hills."
    },
    {
      text: "Several villages were destroyed when the ____ erupted last year.",
      options: ["valley", "mountain top", "cave", "volcano"],
      answer: 3,
      explanation: "A 'volcano' erupts with lava and ash. Mountain tops, caves and valleys do not erupt."
    },
    {
      text: "Climate ____ is affecting weather patterns all over the world.",
      options: ["change", "difference", "movement", "turning"],
      answer: 0,
      explanation: "'Climate change' is the fixed term for global warming effects. 'Difference', 'movement' and 'turning' do not form this expression."
    },
    {
      text: "Turn the tap off while brushing your teeth — don't ____ water.",
      options: ["lose", "waste", "spend", "empty"],
      answer: 1,
      explanation: "'Waste' means to use carelessly. 'Lose' means to misplace, 'spend' is for money and time, and 'empty' means to remove all contents."
    },
    {
      text: "We watched the sun ____ slowly behind the mountains.",
      options: ["drop", "fall", "set", "descend up"],
      answer: 2,
      explanation: "The sun 'sets' in the evening. 'Fall' and 'drop' are not used for the sun's daily movement, and 'descend up' is contradictory."
    },
    {
      text: "The island's beaches are covered ____ soft white sand.",
      options: ["by", "over", "at", "in"],
      answer: 3,
      explanation: "'Covered in' (or 'with') describes a surface layer. 'Covered by' suggests an agent, and 'at' and 'over' are incorrect here."
    },
    {
      text: "Most of the country's electricity now comes from wind ____ .",
      options: ["farms", "fields", "gardens", "parks up"],
      answer: 0,
      explanation: "A 'wind farm' is a group of wind turbines. 'Fields', 'gardens' and 'parks up' do not combine with 'wind' in this meaning."
    },
    {
      text: "Fish are dying because factories ____ chemicals into the river.",
      options: ["spill up", "pour", "flow", "drain off"],
      answer: 1,
      explanation: "'Pour chemicals into' means to release them deliberately. 'Spill up' is incorrect, 'flow' has no object, and 'drain off' means to remove liquid."
    },
    {
      text: "We went for a long walk along the ____ , watching the waves crash below.",
      options: ["shore up", "grounds", "cliffs", "banks up"],
      answer: 2,
      explanation: "'Cliffs' are high rocks along a coast. 'Shore up' and 'banks up' are incorrect forms, and 'grounds' are areas around buildings."
    },
    /* ---------- Weather & Animals ---------- */
    {
      text: "Take an umbrella — the ____ says it's going to rain all afternoon.",
      options: ["prevision", "estimate", "preview", "forecast"],
      answer: 3,
      explanation: "The weather 'forecast' predicts future weather. 'Prevision' is not standard English, a 'preview' is for films, and an 'estimate' is for costs."
    },
    {
      text: "It was ____ heavily, so we couldn't see the road ahead.",
      options: ["snowing", "blowing", "shining", "freezing up"],
      answer: 0,
      explanation: "'Snowing heavily' describes falling snow. Wind 'blows', the sun 'shines', and 'freezing up' describes pipes, not weather falling heavily."
    },
    {
      text: "There was a loud crash of ____ just after the lightning flash.",
      options: ["storm", "thunder", "shower", "breeze"],
      answer: 1,
      explanation: "'Thunder' is the loud sound after lightning. A 'storm' is the whole event, a 'shower' is light rain, and a 'breeze' is a gentle wind."
    },
    {
      text: "It's quite ____ today, so wear a jacket over your T-shirt.",
      options: ["melting", "boiling", "chilly", "heating"],
      answer: 2,
      explanation: "'Chilly' means unpleasantly cold. 'Boiling' means very hot, and 'melting' and 'heating' describe processes, not how weather feels."
    },
    {
      text: "The morning ____ was so thick that flights were delayed for hours.",
      options: ["cloud", "smoke", "steam", "fog"],
      answer: 3,
      explanation: "'Fog' is thick low cloud that reduces visibility. 'Cloud' is in the sky, 'steam' comes from hot water, and 'smoke' comes from fire."
    },
    {
      text: "A gentle ____ was blowing off the sea, which made the heat bearable.",
      options: ["breeze", "gale", "blow", "current"],
      answer: 0,
      explanation: "A 'breeze' is a light pleasant wind. 'Blow' is a verb or a hit, a 'gale' is a very strong wind, and a 'current' is moving water or electricity."
    },
    {
      text: "The ground was white this morning because of the hard ____ overnight.",
      options: ["ice up", "frost", "hail up", "dew"],
      answer: 1,
      explanation: "'Frost' is the white ice layer that forms on cold nights. 'Ice up' and 'hail up' are incorrect forms, and 'dew' is water drops, not white ice."
    },
    {
      text: "We got caught ____ a heavy shower on the way home.",
      options: ["below", "under", "in", "inside up"],
      answer: 2,
      explanation: "'Caught in the rain/a shower' is the fixed expression. 'Under', 'below' and 'inside up' are not used in this phrase."
    },
    {
      text: "Temperatures are expected to ____ below zero tonight.",
      options: ["sink up", "lower down", "reduce", "drop"],
      answer: 3,
      explanation: "Temperatures 'drop' or 'fall' when they get lower. 'Sink up' is contradictory, 'reduce' needs an object, and 'lower down' is incorrect."
    },
    {
      text: "The sky was completely ____ , so we decided to sleep outside under the stars.",
      options: ["clear", "clean", "plain", "empty up"],
      answer: 0,
      explanation: "A 'clear' sky has no clouds. 'Clean' means without dirt, 'plain' means simple, and 'empty up' is not correct English."
    },
    {
      text: "Don't forget to ____ the dog before you go to school.",
      options: ["food", "feed", "nourish up", "eat"],
      answer: 1,
      explanation: "'Feed' means to give food to an animal. 'Food' is a noun, 'nourish up' is incorrect, and 'eat' is what the dog itself does."
    },
    {
      text: "Our cat loves ____ mice in the garden, though she never catches any.",
      options: ["fishing", "shooting", "hunting", "searching up"],
      answer: 2,
      explanation: "Cats 'hunt' small animals. 'Shooting' needs a gun, 'fishing' is for fish with equipment, and 'searching up' is not correct."
    },
    {
      text: "You have to take a dog for a ____ at least twice a day.",
      options: ["run up", "path", "march", "walk"],
      answer: 3,
      explanation: "'Take a dog for a walk' is the fixed expression. 'Run up' and 'march' are not used this way, and a 'path' is where you walk."
    },
    {
      text: "The farmer keeps chickens, pigs and a small ____ of sheep.",
      options: ["flock", "pack", "swarm", "shoal"],
      answer: 0,
      explanation: "A 'flock' is a group of sheep or birds. A 'pack' is for wolves or dogs, a 'swarm' is for insects, and a 'shoal' is for fish."
    },
    {
      text: "Be careful — that dog might ____ you if you touch its food.",
      options: ["sting", "bite", "scratch up", "kick up"],
      answer: 1,
      explanation: "Dogs 'bite' with their teeth. Bees and wasps 'sting', and 'scratch up' and 'kick up' are incorrect forms here."
    },
    {
      text: "I was ____ by a mosquito, and now my arm is really itchy.",
      options: ["hit", "punched", "bitten", "knocked"],
      answer: 2,
      explanation: "Mosquitoes 'bite' people (past participle 'bitten'). 'Hit', 'punched' and 'knocked' describe physical blows, not insect bites."
    },
    {
      text: "Parrots can learn to ____ human speech surprisingly well.",
      options: ["translate up", "pretend", "act up", "imitate"],
      answer: 3,
      explanation: "'Imitate' means to copy sounds or behaviour. 'Pretend' means to act as if something is true, and 'act up' and 'translate up' don't fit."
    },
    {
      text: "The zoo's baby elephant was ____ up by hand after its mother rejected it.",
      options: ["brought", "grown", "raised up in", "born"],
      answer: 0,
      explanation: "'Bring up' means to care for a young animal or child. 'Grown up' has no object, 'raised up in' is incorrect, and 'born' is what happens at birth."
    },
    {
      text: "Camels can survive for days in the ____ without drinking any water.",
      options: ["dessert", "desert", "deserve", "dessert bar"],
      answer: 1,
      explanation: "A 'desert' is a hot dry sandy area. A 'dessert' is a sweet dish, 'deserve' is a verb, and 'dessert bar' is a place for sweets."
    },
    {
      text: "Most birds fly south in autumn to ____ the cold winter months.",
      options: ["escape from up", "prevent", "avoid", "refuse"],
      answer: 2,
      explanation: "'Avoid' means to keep away from something unpleasant. 'Escape from up' is incorrect, 'prevent' means to stop something happening, and 'refuse' means to say no."
    },
    {
      text: "Keep your food in the tent, or wild animals might ____ it during the night.",
      options: ["rob", "thieve up", "burgle", "steal"],
      answer: 3,
      explanation: "'Steal' takes the thing taken as its object. 'Rob' takes the person or place, 'thieve up' is incorrect, and 'burgle' is for breaking into buildings."
    },
    {
      text: "The horse jumped over the ____ and ran off across the field.",
      options: ["fence", "ceiling", "floor", "carpet up"],
      answer: 0,
      explanation: "A 'fence' is a barrier around a field. Ceilings and floors are inside buildings, and 'carpet up' is not a real thing."
    },
    {
      text: "Dolphins are among the most ____ animals in the ocean.",
      options: ["brainy up", "intelligent", "clever-minded", "knowing"],
      answer: 1,
      explanation: "'Intelligent' means able to learn and understand well. 'Brainy up' and 'clever-minded' are not standard, and 'knowing' describes a look, not general ability."
    },
    {
      text: "My little brother is scared ____ spiders, even tiny ones.",
      options: ["from", "with", "of", "about"],
      answer: 2,
      explanation: "'Scared of' is the correct dependent preposition. 'From', 'with' and 'about' are not used after 'scared' in this meaning."
    },
    {
      text: "The mother bird builds the ____ and then lays her eggs in it.",
      options: ["basket", "cage", "hole up", "nest"],
      answer: 3,
      explanation: "Birds build 'nests' for their eggs. A 'cage' is made by people, 'hole up' is incorrect, and a 'basket' is a household object."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
