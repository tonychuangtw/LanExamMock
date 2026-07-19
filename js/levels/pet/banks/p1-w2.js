/* PET Prep extra bank: part1 wave 2 — Work, Study, Technology, Communication */
(function () {
  var BANK = [
    /* ---------- Work & Jobs ---------- */
    {
      text: "I've decided to ____ for the job at the new sports centre.",
      options: ["apply", "ask", "request", "demand"],
      answer: 0,
      explanation: "'Apply for a job' is the standard collocation. 'Ask for' and 'request' are for smaller things, and 'demand' is too aggressive and doesn't fit job applications."
    },
    {
      text: "She has a job ____ tomorrow morning, so she's feeling quite nervous.",
      options: ["meeting", "interview", "conversation", "appointment"],
      answer: 1,
      explanation: "A job 'interview' is where an employer asks you questions. A 'meeting' is more general, a 'conversation' is informal, and an 'appointment' is with a doctor or dentist."
    },
    {
      text: "The ____ is good, but the working hours are terribly long.",
      options: ["price", "money", "salary", "cost"],
      answer: 2,
      explanation: "A 'salary' is the money you receive for your job. 'Price' and 'cost' are what you pay for things, and 'money' is too general to fit naturally here."
    },
    {
      text: "It's difficult to ____ a living as an artist these days.",
      options: ["win", "gain", "take", "earn"],
      answer: 3,
      explanation: "'Earn a living' is the fixed expression for making money to live. 'Win', 'gain' and 'take' do not collocate with 'a living'."
    },
    {
      text: "My father plans to ____ when he reaches sixty-five.",
      options: ["retire", "resign", "remove", "retreat"],
      answer: 0,
      explanation: "'Retire' means to stop working because of age. 'Resign' means to leave a job by choice, 'remove' means take away, and 'retreat' means move back."
    },
    {
      text: "She works ____ , from nine to five, Monday to Friday.",
      options: ["long-time", "full-time", "all-time", "whole-time"],
      answer: 1,
      explanation: "'Full-time' describes working complete normal hours. 'Long-time' describes old friendships, and 'all-time' and 'whole-time' are not used for jobs."
    },
    {
      text: "The restaurant is taking ____ extra staff for the busy summer season.",
      options: ["in", "up", "on", "over"],
      answer: 2,
      explanation: "'Take on' means to employ. 'Take in' means to deceive or give shelter, 'take up' means to start a hobby, and 'take over' means to gain control of a company."
    },
    {
      text: "After ten years at the bank, he decided to ____ his job and travel.",
      options: ["give in", "give away", "give out", "give up"],
      answer: 3,
      explanation: "'Give up' means to quit. 'Give in' means to surrender, 'give away' means to donate, and 'give out' means to distribute."
    },
    {
      text: "Marta is ____ charge of the marketing department now.",
      options: ["in", "on", "for", "at"],
      answer: 0,
      explanation: "'In charge of' means responsible for. 'At', 'on' and 'for' do not form this expression with 'charge'."
    },
    {
      text: "We're working late tonight to meet the project ____ .",
      options: ["endline", "deadline", "timeline", "headline"],
      answer: 1,
      explanation: "A 'deadline' is the time by which work must be finished. A 'timeline' shows a sequence of events, a 'headline' is in a newspaper, and 'endline' is not a common word."
    },
    {
      text: "I get on really well with my ____ at the office.",
      options: ["companions", "members", "colleagues", "partners"],
      answer: 2,
      explanation: "'Colleagues' are the people you work with. 'Companions' are people you spend time with, 'members' belong to clubs, and 'partners' share a business or relationship."
    },
    {
      text: "Please ____ in this application form and return it by Friday.",
      options: ["write", "put", "set", "fill"],
      answer: 3,
      explanation: "'Fill in' a form means to complete it. 'Write in', 'put in' and 'set in' do not mean completing a form."
    },
    {
      text: "After only two years, Ana was ____ to manager of the whole store.",
      options: ["promoted", "improved", "advanced", "increased"],
      answer: 0,
      explanation: "'Promoted' means given a higher position. 'Improved' means made better, 'advanced' isn't used in the passive this way for jobs, and 'increased' is for numbers."
    },
    {
      text: "I'm exhausted — I really need a day ____ next week.",
      options: ["out", "off", "away", "over"],
      answer: 1,
      explanation: "A 'day off' is a day when you don't work. A 'day out' is a trip for pleasure, and 'day away' and 'day over' are not standard expressions."
    },
    {
      text: "He often does ____ at the weekend to earn some extra money.",
      options: ["overwork", "extra time", "overtime", "double time"],
      answer: 2,
      explanation: "'Overtime' is time worked beyond normal hours. 'Overwork' means working too much (a problem), 'extra time' is in football, and 'double time' refers to pay rate, not the activity."
    },
    {
      text: "You don't need any previous ____ to apply for this position.",
      options: ["expedition", "experiment", "existence", "experience"],
      answer: 3,
      explanation: "'Experience' is knowledge from doing a job before. An 'experiment' is a scientific test, 'existence' means being alive, and an 'expedition' is a journey."
    },
    {
      text: "Nurses at this hospital often have to work the night ____ .",
      options: ["shift", "round", "turn", "period"],
      answer: 0,
      explanation: "A 'shift' is a fixed period of work, like the night shift. 'Turn', 'round' and 'period' are not used for work schedules in this way."
    },
    {
      text: "He's been ____ since the factory closed down last spring.",
      options: ["unoccupied", "unemployed", "disemployed", "unworked"],
      answer: 1,
      explanation: "'Unemployed' means without a job. 'Unoccupied' describes empty buildings, and 'disemployed' and 'unworked' are not standard English words."
    },
    {
      text: "The hotel ____ were all given a bonus at the end of the year.",
      options: ["team", "crew", "staff", "group"],
      answer: 2,
      explanation: "'Staff' means all the employees of a company. A 'crew' works on a ship or plane, and 'team' and 'group' don't specifically mean employees of a hotel."
    },
    {
      text: "Every ____ at the company receives five weeks of paid holiday.",
      options: ["employer", "unemployment", "employment", "employee"],
      answer: 3,
      explanation: "An 'employee' is a person who works for a company. An 'employer' gives people jobs, and 'employment' and 'unemployment' are abstract nouns, not people."
    },
    {
      text: "My aunt ____ her own small business selling handmade jewellery.",
      options: ["runs", "goes", "walks", "moves"],
      answer: 0,
      explanation: "'Run a business' means to manage it. 'Walk', 'go' and 'move' do not collocate with 'business' in this meaning."
    },
    {
      text: "In this job you have to ____ with difficult customers every day.",
      options: ["treat", "deal", "handle", "manage"],
      answer: 1,
      explanation: "'Deal with' means to handle a situation or person. 'Treat' and 'handle' take a direct object without 'with', and 'manage' doesn't take 'with' either."
    },
    {
      text: "They ____ up the company in a garage with almost no money.",
      options: ["put", "got", "set", "made"],
      answer: 2,
      explanation: "'Set up' means to start a business. 'Put up' means to build or raise, 'get up' means to rise from bed, and 'make up' means to invent."
    },
    {
      text: "During the summer holidays I worked ____ a waiter in a beach café.",
      options: ["like", "for", "by", "as"],
      answer: 3,
      explanation: "'Work as + job' describes your role. 'Like' means similar to, 'for' introduces the employer, and 'by' is incorrect here."
    },
    {
      text: "She's really good ____ organising events and meetings.",
      options: ["at", "in", "on", "with"],
      answer: 0,
      explanation: "'Good at + -ing' is the correct dependent preposition. 'In', 'on' and 'with' are not used after 'good' with activities."
    },
    /* ---------- Study & Education ---------- */
    {
      text: "If you don't study harder, you might ____ the end-of-year exam.",
      options: ["lose", "fail", "fall", "miss"],
      answer: 1,
      explanation: "'Fail an exam' means not to pass it. 'Lose' is for games, 'fall' means drop down, and 'miss an exam' means not attend it."
    },
    {
      text: "I have to ____ an important English exam next Thursday.",
      options: ["give", "make", "take", "write"],
      answer: 2,
      explanation: "You 'take' (or 'sit') an exam in English. 'Make', 'give' and 'write' are not the standard collocations for exams in British English."
    },
    {
      text: "You should start ____ for your exams at least a month early.",
      options: ["repeating", "reviewing", "reminding", "revising"],
      answer: 3,
      explanation: "'Revise' means to study again before an exam (British English). 'Repeat' means say again, 'remind' means help someone remember, and 'review' is more American usage."
    },
    {
      text: "My brother has a ____ in engineering from Manchester University.",
      options: ["degree", "grade", "title", "level"],
      answer: 0,
      explanation: "A 'degree' is a university qualification. A 'grade' is a mark, a 'title' is a name, and a 'level' describes difficulty or ability."
    },
    {
      text: "History was always my favourite ____ at secondary school.",
      options: ["topic", "subject", "theme", "matter"],
      answer: 1,
      explanation: "A 'subject' is an area you study at school. A 'topic' or 'theme' is one part of a subject, and 'matter' means an issue or problem."
    },
    {
      text: "The autumn ____ starts in September and finishes in December.",
      options: ["session", "period", "term", "stage"],
      answer: 2,
      explanation: "A 'term' is one of the parts of the school year. A 'period' is one lesson, a 'session' is a single meeting, and a 'stage' is a step in a process."
    },
    {
      text: "According to the ____ , we have maths first thing on Monday morning.",
      options: ["calendar", "agenda", "diary", "timetable"],
      answer: 3,
      explanation: "A 'timetable' shows the times of lessons. A 'calendar' shows dates, a 'diary' is personal, and an 'agenda' is for a meeting."
    },
    {
      text: "She got the highest ____ in the class for her science project.",
      options: ["mark", "point", "number", "sign"],
      answer: 0,
      explanation: "A 'mark' is the score a teacher gives your work. 'Points' are for games, and 'number' and 'sign' don't describe school results."
    },
    {
      text: "Two students were caught trying to ____ in the final test.",
      options: ["trick", "cheat", "lie", "steal"],
      answer: 1,
      explanation: "'Cheat' means to act dishonestly in an exam. 'Trick' and 'lie' need different structures, and 'steal' means to take things that aren't yours."
    },
    {
      text: "Don't forget to ____ in your homework before the end of the lesson.",
      options: ["give", "put", "hand", "send"],
      answer: 2,
      explanation: "'Hand in' means to give completed work to the teacher. 'Give in' means surrender, 'put in' means insert, and 'send in' is for posting applications."
    },
    {
      text: "If you don't know a word, ____ it up in the dictionary.",
      options: ["find", "check", "search", "look"],
      answer: 3,
      explanation: "'Look up' means to find information in a book or online. 'Find up', 'search up' and 'check up' are not correct phrasal verbs for dictionaries."
    },
    {
      text: "We had to learn the whole poem ____ heart for Friday's class.",
      options: ["by", "at", "in", "with"],
      answer: 0,
      explanation: "'Learn by heart' means to memorise completely. 'At', 'in' and 'with' do not form this fixed expression."
    },
    {
      text: "Students must ____ at least ninety per cent of the classes to pass.",
      options: ["assist", "attend", "present", "follow"],
      answer: 1,
      explanation: "'Attend' means to go to classes. 'Assist' means to help, 'present' means to show or give, and 'follow' a course is possible but not with 'classes' and a percentage."
    },
    {
      text: "Professor Lane is giving a ____ on climate change this afternoon.",
      options: ["conference", "speech", "lecture", "lesson"],
      answer: 2,
      explanation: "A 'lecture' is a formal university talk on a subject. A 'conference' is a large event, a 'speech' is for ceremonies, and a 'lesson' is a school class."
    },
    {
      text: "Children in Britain usually start ____ school at the age of five.",
      options: ["junior high", "first", "early", "primary"],
      answer: 3,
      explanation: "'Primary school' is the British term for the first school stage. 'First school' and 'early school' aren't standard, and 'junior high' is American."
    },
    {
      text: "School ____ up for the summer holidays at the end of July.",
      options: ["breaks", "stops", "closes", "ends"],
      answer: 0,
      explanation: "'Break up' means school finishes for the holidays. 'Closes up', 'stops up' and 'ends up' have different meanings and don't describe school holidays."
    },
    {
      text: "She's hoping to get ____ one of the top universities in the country.",
      options: ["onto", "into", "up to", "over to"],
      answer: 1,
      explanation: "'Get into' a university means to be accepted. 'Get onto' is for buses or committees, and 'get up to' and 'get over to' don't fit university entrance."
    },
    {
      text: "My parents paid for ____ lessons to help me with my French.",
      options: ["personal", "individual", "private", "single"],
      answer: 2,
      explanation: "'Private lessons' are paid one-to-one classes. 'Personal', 'individual' and 'single' are not the usual collocation with 'lessons'."
    },
    {
      text: "Keep practising every day and you'll soon make real ____ .",
      options: ["movement", "process", "increase", "progress"],
      answer: 3,
      explanation: "'Make progress' means to improve. A 'process' is a series of steps, an 'increase' is a rise in amount, and 'movement' is physical motion."
    },
    {
      text: "It's hard to ____ on my homework with all that noise outside.",
      options: ["concentrate", "focus up", "think", "attend"],
      answer: 0,
      explanation: "'Concentrate on' means to give full attention to. 'Think' needs 'about', 'focus up' isn't correct (just 'focus on'), and 'attend' means to go to an event."
    },
    {
      text: "I'm doing an online ____ in digital photography this autumn.",
      options: ["career", "course", "carrier", "practice"],
      answer: 1,
      explanation: "A 'course' is a series of lessons. A 'career' is your working life, a 'carrier' transports things, and 'practice' is repeated training, not a class programme."
    },
    {
      text: "My cousin will ____ from law school next June.",
      options: ["certify", "pass", "graduate", "qualify up"],
      answer: 2,
      explanation: "'Graduate' means to complete a degree successfully. 'Pass' needs an object like 'an exam', 'certify' means to confirm officially, and 'qualify up' is not correct English."
    },
    {
      text: "She won a ____ that pays for all her university fees.",
      options: ["partnership", "membership", "sponsorship", "scholarship"],
      answer: 3,
      explanation: "A 'scholarship' is money given to a good student for education. 'Membership' is belonging to a club, 'sponsorship' supports events or athletes, and 'partnership' is a business relationship."
    },
    {
      text: "Remember to ____ notes during the lecture — there's a test next week.",
      options: ["take", "write on", "make up", "put"],
      answer: 0,
      explanation: "'Take notes' means to write down key information. 'Make up' means invent, 'write on' needs a surface, and 'put' doesn't collocate with 'notes'."
    },
    {
      text: "Our teacher always ____ us plenty of homework at the weekend.",
      options: ["puts", "gives", "makes", "does"],
      answer: 1,
      explanation: "Teachers 'give' homework and students 'do' it. 'Put' and 'make' do not collocate with 'homework' in this way."
    },
    /* ---------- Technology ---------- */
    {
      text: "Could you ____ on the printer? I need to print my essay.",
      options: ["start", "open", "turn", "light"],
      answer: 2,
      explanation: "'Turn on' is the phrasal verb for starting a machine. 'Open' is for doors and files, 'start' isn't followed by 'on', and 'light' is for fires."
    },
    {
      text: "You need a username and password to ____ in to the school website.",
      options: ["check", "go", "enter", "log"],
      answer: 3,
      explanation: "'Log in' means to enter a computer system. 'Check in' is for hotels and airports, and 'enter in' and 'go in' aren't used for websites this way."
    },
    {
      text: "It took ages to ____ the film because the internet was so slow.",
      options: ["download", "unload", "reload", "overload"],
      answer: 0,
      explanation: "'Download' means to copy a file from the internet to your device. 'Unload' is for lorries, 'reload' means load again, and 'overload' means to give too much."
    },
    {
      text: "Don't forget to ____ your photos to the cloud before deleting them.",
      options: ["upgrade", "upload", "update", "uphold"],
      answer: 1,
      explanation: "'Upload' means to send files to the internet. 'Upgrade' means to improve equipment, 'update' means to make current, and 'uphold' means to support a decision."
    },
    {
      text: "My phone battery is almost ____ — have you got a charger?",
      options: ["low down", "empty", "flat", "finished"],
      answer: 2,
      explanation: "A 'flat' battery has no power (British English). 'Empty' is for containers, 'low down' isn't correct here, and 'finished' isn't the natural collocation."
    },
    {
      text: "I dropped my phone and now the ____ is cracked.",
      options: ["monitor", "board", "window", "screen"],
      answer: 3,
      explanation: "A phone's 'screen' is the glass surface you touch. A 'board' is for writing, a 'window' is on a computer program, and a 'monitor' is a separate display for a desktop computer."
    },
    {
      text: "I accidentally ____ the email before I had read it properly.",
      options: ["deleted", "removed", "rubbed", "cancelled"],
      answer: 0,
      explanation: "'Delete' is the word for removing digital files or messages. 'Remove' is more physical, 'rub' out is for pencil marks, and 'cancel' is for plans or orders."
    },
    {
      text: "Remember to ____ your work every few minutes in case the computer crashes.",
      options: ["hold", "save", "keep", "store up"],
      answer: 1,
      explanation: "'Save' means to store work on a computer. 'Hold' and 'keep' aren't used for computer files this way, and 'store up' means to collect for the future."
    },
    {
      text: "You have to ____ the app before you can use the bank's new service.",
      options: ["introduce", "insert", "install", "include"],
      answer: 2,
      explanation: "'Install' means to put software onto a device. 'Insert' is for physical objects, 'introduce' is for people or ideas, and 'include' means to contain."
    },
    {
      text: "My laptop ____ while I was writing, and I lost the whole document.",
      options: ["broke off", "collapsed", "smashed", "crashed"],
      answer: 3,
      explanation: "A computer 'crashes' when it suddenly stops working. 'Broke off' means ended suddenly, 'smashed' means physically broken, and 'collapsed' is for buildings or people."
    },
    {
      text: "The hotel offers free wi-fi ____ in every room.",
      options: ["connection", "conjunction", "communication", "combination"],
      answer: 0,
      explanation: "A wi-fi 'connection' links your device to the internet. 'Conjunction' is a grammar word, 'communication' is exchanging information, and 'combination' is a mixture."
    },
    {
      text: "If you're not sure of the answer, just ____ for it online.",
      options: ["seek", "search", "find", "discover"],
      answer: 1,
      explanation: "'Search for' means to look for information. 'Seek' is formal and rarely used with 'for' online, and 'find' and 'found' describe the result, not the action of looking."
    },
    {
      text: "I'll ____ the photos to my email so you can print them.",
      options: ["stick", "join", "attach", "connect"],
      answer: 2,
      explanation: "'Attach' is the word for adding files to an email. 'Stick' is for glue, 'join' is for groups, and 'connect' is for devices and networks."
    },
    {
      text: "Choose a strong ____ that nobody could easily guess.",
      options: ["passport", "signal", "keyword", "password"],
      answer: 3,
      explanation: "A 'password' protects your accounts. A 'passport' is for travel, a 'keyword' is for searching, and a 'signal' is for phones and wi-fi strength."
    },
    {
      text: "Could you ____ out two copies of this document for the meeting?",
      options: ["print", "paper", "press", "type"],
      answer: 0,
      explanation: "'Print out' means to produce a paper copy. 'Press', 'paper' and 'type' do not combine with 'out' in this meaning."
    },
    {
      text: "You should ____ up your files regularly in case your laptop is stolen.",
      options: ["keep", "back", "store", "copy"],
      answer: 1,
      explanation: "'Back up' means to make a safety copy of computer files. 'Keep up' means to maintain pace, 'store up' means to collect, and 'copy up' is not a phrasal verb."
    },
    {
      text: "____ the printer in and press the green button to start it.",
      options: ["Push", "Place", "Plug", "Point"],
      answer: 2,
      explanation: "'Plug in' means to connect to the electricity supply. 'Push', 'place' and 'point' do not combine with 'in' to mean connecting a device."
    },
    {
      text: "Please ____ off your mobile phones before the performance begins.",
      options: ["shut", "close", "put", "switch"],
      answer: 3,
      explanation: "'Switch off' means to stop a device working. 'Shut' and 'close' are for doors and windows, and 'put off' means to postpone."
    },
    {
      text: "I spent the whole evening ____ the internet for cheap flights.",
      options: ["browsing", "looking", "watching", "reading"],
      answer: 0,
      explanation: "'Browse the internet' means to look through websites casually. 'Looking' needs 'at' or 'through', and 'watching' and 'reading' don't collocate with 'the internet' here."
    },
    {
      text: "Just ____ on the link and the video will start playing.",
      options: ["touch", "click", "press", "hit"],
      answer: 1,
      explanation: "'Click on' is the standard verb for using a mouse on a link. 'Touch', 'press' and 'hit' are not used with 'on the link' in this way."
    },
    {
      text: "You should ____ the software to get the latest security features.",
      options: ["refresh", "renew", "update", "revise"],
      answer: 2,
      explanation: "'Update' software means to install the newest version. 'Renew' is for contracts, 'refresh' is for web pages, and 'revise' is for studying or texts."
    },
    {
      text: "She spends hours every day on ____ media talking to her friends.",
      options: ["public", "shared", "common", "social"],
      answer: 3,
      explanation: "'Social media' is the fixed term for sites like Instagram. 'Public', 'common' and 'shared' do not form this expression."
    },
    {
      text: "Tablets and smartphones are the most popular electronic ____ among teenagers.",
      options: ["devices", "engines", "instruments", "vehicles"],
      answer: 0,
      explanation: "A 'device' is a piece of electronic equipment. An 'engine' powers vehicles, an 'instrument' is for music or science, and a 'vehicle' is for transport."
    },
    {
      text: "My internet keeps ____ down whenever it rains heavily.",
      options: ["falling", "breaking", "getting", "cutting"],
      answer: 1,
      explanation: "'Break down' means to stop working. 'Fall down' is for physical objects, 'get down' means to descend or depress, and 'cut down' means to reduce."
    },
    /* ---------- Communication & Language ---------- */
    {
      text: "I must get in ____ with my old school friends before the reunion.",
      options: ["contact", "connection", "touch", "reach"],
      answer: 2,
      explanation: "'Get in touch with' means to contact someone. 'Contact' is a verb or noun but not used in this phrase, and 'connection' and 'reach' don't fit this expression."
    },
    {
      text: "She's busy right now — could you ____ back in half an hour?",
      options: ["answer", "speak", "say", "call"],
      answer: 3,
      explanation: "'Call back' means to telephone again. 'Speak', 'say' and 'answer' do not combine with 'back' to mean phoning again."
    },
    {
      text: "Don't ____ up! I haven't finished explaining the problem yet.",
      options: ["hang", "hold", "put", "cut"],
      answer: 0,
      explanation: "'Hang up' means to end a phone call. 'Hold up' means to delay, 'put up' means to build, and 'cut up' means to cut into pieces."
    },
    {
      text: "He wasn't at home, so I ____ a message with his sister.",
      options: ["put", "left", "said", "wrote"],
      answer: 1,
      explanation: "'Leave a message' is the standard collocation. 'Put', 'said' and 'wrote' do not collocate with 'a message with someone'."
    },
    {
      text: "I still haven't ____ to Elena's wedding invitation.",
      options: ["responded", "answered", "replied", "returned"],
      answer: 2,
      explanation: "'Reply to' is the correct pattern here. 'Responded' also takes 'to' but is less natural at this level with invitations, 'answered' takes a direct object without 'to', and 'returned' means to give back."
    },
    {
      text: "Could you ____ up a bit? I can't hear you from the back of the room.",
      options: ["sound", "talk", "voice", "speak"],
      answer: 3,
      explanation: "'Speak up' means to talk more loudly. 'Talk', 'voice' and 'sound' do not combine with 'up' in this meaning."
    },
    {
      text: "____ me a text when you arrive so I know you're safe.",
      options: ["Send", "Post", "Write", "Put"],
      answer: 0,
      explanation: "'Send a text' is the standard collocation. 'Write' focuses on composing, 'post' is for letters and social media, and 'put' doesn't work with 'a text'."
    },
    {
      text: "After twenty years in Canada, she speaks English ____ .",
      options: ["frequently", "fluently", "factually", "formerly"],
      answer: 1,
      explanation: "'Fluently' means smoothly and well. 'Frequently' means often, 'factually' means based on facts, and 'formerly' means in the past."
    },
    {
      text: "Could you ____ this menu into English for me, please?",
      options: ["transfer", "transform", "translate", "transport"],
      answer: 2,
      explanation: "'Translate' means to change words into another language. 'Transfer' means to move something, 'transform' means to change completely, and 'transport' means to carry goods."
    },
    {
      text: "I never know how to ____ this word — is the 'h' silent?",
      options: ["produce", "prescribe", "propose", "pronounce"],
      answer: 3,
      explanation: "'Pronounce' means to make the sound of a word. 'Prescribe' is for medicine, 'propose' means to suggest, and 'produce' means to make."
    },
    {
      text: "What exactly does this expression ____ in everyday English?",
      options: ["mean", "say", "signify to", "explain"],
      answer: 0,
      explanation: "'Mean' asks about the sense of a word. 'Say' needs a person as subject, 'signify to' is incorrect, and 'explain' is what a person does, not a word."
    },
    {
      text: "In other ____ , the concert has been cancelled completely.",
      options: ["terms", "words", "phrases", "speech"],
      answer: 1,
      explanation: "'In other words' introduces a simpler explanation. 'Terms', 'phrases' and 'speech' do not form this fixed expression."
    },
    {
      text: "Let's ____ in touch even after you move to Australia.",
      options: ["hold", "keep on", "stay", "remain on"],
      answer: 2,
      explanation: "'Stay in touch' (or 'keep in touch') means to continue contacting each other. 'Hold', 'keep on' and 'remain on' do not form this expression."
    },
    {
      text: "The phone's ringing — could someone please ____ it?",
      options: ["return", "reply", "respond", "answer"],
      answer: 3,
      explanation: "'Answer the phone' is the correct collocation. 'Reply' and 'respond' take 'to' and are for messages, and 'return' a call means to phone back later."
    },
    {
      text: "Portuguese is her mother ____ , but she also speaks French and German.",
      options: ["tongue", "voice", "speech", "talk"],
      answer: 0,
      explanation: "'Mother tongue' means your first language. 'Speech', 'voice' and 'talk' do not combine with 'mother' in this expression."
    },
    {
      text: "We had a long ____ about our plans for the future.",
      options: ["communication", "conversation", "speech", "comment"],
      answer: 1,
      explanation: "You 'have a conversation' with someone. 'Communication' is uncountable in this sense, a 'speech' is formal and one-way, and a 'comment' is a single remark."
    },
    {
      text: "Could you ____ the rules of the game to me again?",
      options: ["say", "tell", "explain", "talk"],
      answer: 2,
      explanation: "'Explain something to somebody' is the correct pattern. 'Say' and 'talk' don't take this structure, and 'tell' would need 'tell me the rules' without 'to'."
    },
    {
      text: "We stayed up all night ____ politics and music.",
      options: ["saying", "discussing about", "talking", "discussing"],
      answer: 3,
      explanation: "'Discuss' takes a direct object — no 'about'. 'Discussing about' is a common error, 'talking' needs 'about', and 'saying' doesn't fit topics this way."
    },
    {
      text: "He didn't ____ me the truth about where he had been.",
      options: ["tell", "say", "speak", "express"],
      answer: 0,
      explanation: "'Tell somebody the truth' is the correct pattern. 'Say' and 'speak' cannot take a person as an indirect object like this, and 'express' doesn't collocate with 'the truth' plus a person."
    },
    {
      text: "Put your hand up if you'd like to ____ a question.",
      options: ["make", "ask", "say", "put on"],
      answer: 1,
      explanation: "'Ask a question' is the standard collocation. 'Make' and 'say' are common learner errors with 'question', and 'put on' is for clothes."
    },
    {
      text: "I think you've ____ the wrong number — there's no Maria here.",
      options: ["rung", "phoned", "dialled", "called"],
      answer: 2,
      explanation: "'Dial the wrong number' is the set phrase for pressing incorrect digits. 'Phoned', 'rung' and 'called' take a person, not 'the wrong number' naturally."
    },
    {
      text: "I tried to phone the office, but the line was ____ all morning.",
      options: ["employed", "reserved", "occupied", "engaged"],
      answer: 3,
      explanation: "An 'engaged' line means someone is already using it (British English). 'Employed' is for workers, 'occupied' is for seats and toilets, and 'reserved' means booked."
    },
    {
      text: "Sorry, I completely ____ you — I thought you said Tuesday, not Thursday.",
      options: ["misheard", "mistook", "mislaid", "misled"],
      answer: 0,
      explanation: "'Mishear' means to hear incorrectly. 'Mistake' needs 'for' ('mistook you for'), 'mislay' means to lose something temporarily, and 'mislead' means to deceive."
    },
    {
      text: "It can be difficult to ____ with people who don't share your language.",
      options: ["contact", "communicate", "converse to", "connect up"],
      answer: 1,
      explanation: "'Communicate with' is the correct pattern. 'Contact' takes a direct object, 'converse to' should be 'converse with', and 'connect up' is for machines."
    },
    {
      text: "She ____ goodbye to everyone and got on the train.",
      options: ["told", "greeted", "waved", "shook"],
      answer: 2,
      explanation: "'Wave goodbye' means to move your hand as a farewell. 'Told' and 'greeted' don't collocate with 'goodbye' this way, and 'shook' is used with 'hands'."
    },
    {
      text: "Please don't ____ me while I'm on the phone to the doctor.",
      options: ["interfere", "intervene", "introduce", "interrupt"],
      answer: 3,
      explanation: "'Interrupt' means to stop someone while they are speaking. 'Interfere' takes 'with' or 'in', 'introduce' means to present someone, and 'intervene' means to get involved in a dispute."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
