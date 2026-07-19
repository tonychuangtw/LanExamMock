/* PET Prep extra bank: part3 wave 3 */
(function () {
  var BANK = [
    {
      stem: "PERFORM",
      text: "The band gave a fantastic ____ at the open-air theatre.",
      answers: ["performance"],
      explanation: "A noun is needed after 'a fantastic'. 'Perform' becomes 'performance' with -ance."
    },
    {
      stem: "CHILD",
      text: "My grandmother often talks about her happy ____ on the farm.",
      answers: ["childhood"],
      explanation: "A noun is needed after 'her happy'. 'Child' becomes 'childhood' with -hood."
    },
    {
      stem: "DESIGN",
      text: "A well-known fashion ____ created the costumes for the film.",
      answers: ["designer"],
      explanation: "A person noun is needed after 'fashion'. 'Design' becomes 'designer' with -er."
    },
    {
      stem: "COMFORT",
      text: "Sit ____ and close your eyes before we start the relaxation exercise.",
      answers: ["comfortably"],
      explanation: "An adverb is needed to describe how you sit. 'Comfort' becomes 'comfortably'."
    },
    {
      stem: "HAPPY",
      text: "Money alone cannot bring you ____ , as my grandfather always said.",
      answers: ["happiness"],
      explanation: "A noun is needed after 'bring you'. 'Happy' becomes 'happiness' with -ness."
    },
    {
      stem: "ARGUE",
      text: "They had a silly ____ about whose turn it was to wash up.",
      answers: ["argument"],
      explanation: "A noun is needed after 'a silly'. 'Argue' becomes 'argument' with -ment."
    },
    {
      stem: "SPEED",
      text: "The ambulance drove ____ through the empty streets.",
      answers: ["speedily"],
      explanation: "An adverb is needed to describe how it drove. 'Speed' becomes 'speedily'."
    },
    {
      stem: "TOOTH",
      text: "I woke up with terrible ____ and had to see the dentist.",
      answers: ["toothache"],
      explanation: "The compound noun 'toothache' names the pain in a tooth."
    },
    {
      stem: "WAIT",
      text: "The ____ brought our drinks quickly, but the food took an hour.",
      answers: ["waiter", "waitress"],
      explanation: "A person noun is needed after 'The'. Add -er to 'wait' to make 'waiter'."
    },
    {
      stem: "RELAX",
      text: "Listening to quiet music in the bath is very ____ after work.",
      answers: ["relaxing"],
      explanation: "The activity causes the feeling, so we use the -ing adjective 'relaxing'."
    },
    {
      stem: "FORTUNE",
      text: "____ , nobody was hurt when the two cars crashed.",
      answers: ["Fortunately", "fortunately"],
      explanation: "A sentence adverb is needed. 'Fortune' becomes 'fortunately'."
    },
    {
      stem: "OPTIMIST",
      text: "Despite the bad weather forecast, the sailors stayed ____.",
      answers: ["optimistic"],
      explanation: "An adjective is needed after 'stayed'. 'Optimist' becomes 'optimistic'."
    },
    {
      stem: "LIBRARY",
      text: "The ____ helped me find three books for my history project.",
      answers: ["librarian"],
      explanation: "A person noun is needed after 'The'. 'Library' becomes 'librarian' with -ian."
    },
    {
      stem: "FLY",
      text: "Our ____ to Madrid was delayed for two hours because of fog.",
      answers: ["flight"],
      explanation: "A noun is needed after 'Our'. The noun form of 'fly' is 'flight'."
    },
    {
      stem: "RESPONSIBLE",
      text: "Feeding the class hamster is my little brother's ____ this term.",
      answers: ["responsibility"],
      explanation: "A noun is needed after the possessive. 'Responsible' becomes 'responsibility'."
    },
    {
      stem: "MIX",
      text: "Pour the ____ into a hot pan and cook it for two minutes.",
      answers: ["mixture"],
      explanation: "A noun is needed after 'the'. 'Mix' becomes 'mixture' with the suffix -ture."
    },
    {
      stem: "CLOSE",
      text: "The sudden ____ of the factory left many people without jobs.",
      answers: ["closure"],
      explanation: "A noun is needed after 'The sudden'. 'Close' becomes 'closure' with -ure."
    },
    {
      stem: "FUR",
      text: "The cat is white and ____ with bright green eyes.",
      answers: ["furry"],
      explanation: "An adjective is needed to describe the cat. 'Fur' becomes 'furry' with -ry."
    },
    {
      stem: "ELECT",
      text: "The school ____ for a new student president takes place in May.",
      answers: ["election"],
      explanation: "A noun is needed after 'The school'. 'Elect' becomes 'election' with -ion."
    },
    {
      stem: "CAREFUL",
      text: "He broke the glass because he was carrying the tray ____.",
      answers: ["carelessly"],
      explanation: "A negative adverb is needed because he broke the glass: 'carelessly'."
    },
    {
      stem: "GARDEN",
      text: "The ____ waters the roses in the park every morning.",
      answers: ["gardener"],
      explanation: "A person noun is needed after 'The'. 'Garden' becomes 'gardener' with -er."
    },
    {
      stem: "TERROR",
      text: "The special effects in that horror film were absolutely ____.",
      answers: ["terrifying"],
      explanation: "The effects cause the fear, so we use the -ing adjective 'terrifying'."
    },
    {
      stem: "SIGN",
      text: "Please put your ____ at the bottom of the form.",
      answers: ["signature"],
      explanation: "A noun is needed after 'your'. 'Sign' becomes 'signature' with -ature."
    },
    {
      stem: "COMMUNICATE",
      text: "Good ____ between players is important in team sports.",
      answers: ["communication"],
      explanation: "A noun is needed after 'Good'. 'Communicate' becomes 'communication'."
    },
    {
      stem: "STONE",
      text: "Be careful on the ____ path down to the beach.",
      answers: ["stony"],
      explanation: "An adjective is needed before 'path'. 'Stone' becomes 'stony' with -y."
    },
    {
      stem: "EXAMINE",
      text: "The final ____ will cover everything we studied this year.",
      answers: ["examination", "exam"],
      explanation: "A noun is needed after 'The final'. 'Examine' becomes 'examination'."
    },
    {
      stem: "PAIN",
      text: "Luckily the injection was quick and completely ____.",
      answers: ["painless"],
      explanation: "The meaning is 'without pain', so we add -less to make 'painless'."
    },
    {
      stem: "MANAGE",
      text: "Good time ____ helps students finish their homework without stress.",
      answers: ["management"],
      explanation: "A noun is needed after 'time'. 'Manage' becomes 'management' with -ment."
    },
    {
      stem: "CURIOUS",
      text: "Out of ____ , I opened the old box in the attic.",
      answers: ["curiosity"],
      explanation: "A noun is needed after 'Out of'. 'Curious' becomes 'curiosity' with -ity."
    },
    {
      stem: "PILOT",
      text: "Fewer pilots are needed now that some planes can almost fly ____.",
      answers: ["pilotless"],
      explanation: "An adjective meaning 'without a pilot' is needed: add -less to 'pilot'."
    },
    {
      stem: "ANNOY",
      text: "It is really ____ when people talk during a film at the cinema.",
      answers: ["annoying"],
      explanation: "The behaviour causes the feeling, so we use the -ing adjective 'annoying'."
    },
    {
      stem: "SIT",
      text: "There is ____ for two hundred people in the concert hall.",
      answers: ["seating"],
      explanation: "A noun is needed as the subject after 'There is'. 'Sit' relates to 'seating'."
    },
    {
      stem: "PROUD",
      text: "Her parents watched with great ____ as she collected her prize.",
      answers: ["pride"],
      explanation: "A noun is needed after 'great'. The noun form of 'proud' is 'pride'."
    },
    {
      stem: "ASSIST",
      text: "The shop ____ helped me choose a present for my mother.",
      answers: ["assistant"],
      explanation: "A person noun is needed after 'shop'. 'Assist' becomes 'assistant' with -ant."
    },
    {
      stem: "DARK",
      text: "The lights went out and we sat in complete ____ for ten minutes.",
      answers: ["darkness"],
      explanation: "A noun is needed after 'complete'. 'Dark' becomes 'darkness' with -ness."
    },
    {
      stem: "ACCIDENT",
      text: "I ____ sent the message to my teacher instead of my friend.",
      answers: ["accidentally"],
      explanation: "An adverb is needed to describe how I sent it. 'Accident' becomes 'accidentally'."
    },
    {
      stem: "EMPLOY",
      text: "After months of ____ , he finally found work at the airport.",
      answers: ["unemployment"],
      explanation: "A noun with a negative prefix is needed: 'unemployment', time without a job."
    },
    {
      stem: "MAGIC",
      text: "The old town looks almost ____ when the lanterns are lit at night.",
      answers: ["magical"],
      explanation: "An adjective is needed after 'almost'. 'Magic' becomes 'magical' with -al."
    },
    {
      stem: "SUCCEED",
      text: "The ____ of the school play surprised even the drama teacher.",
      answers: ["success"],
      explanation: "A noun is needed after 'The'. The noun form of 'succeed' is 'success'."
    },
    {
      stem: "WOOD",
      text: "My uncle made this beautiful ____ chair by hand.",
      answers: ["wooden"],
      explanation: "An adjective is needed before 'chair'. 'Wood' becomes 'wooden' with -en."
    },
    {
      stem: "BEHAVE",
      text: "The teacher praised the class for their excellent ____ during the trip.",
      answers: ["behaviour", "behavior"],
      explanation: "A noun is needed after 'their excellent'. 'Behave' becomes 'behaviour'."
    },
    {
      stem: "ATHLETE",
      text: "You have to be very ____ to complete a triathlon.",
      answers: ["athletic"],
      explanation: "An adjective is needed after 'very'. 'Athlete' becomes 'athletic'."
    },
    {
      stem: "DELIGHT",
      text: "The soup smelled ____ and tasted even better.",
      answers: ["delightful"],
      explanation: "An adjective is needed after 'smelled'. 'Delight' becomes 'delightful' with -ful."
    },
    {
      stem: "PRINT",
      text: "The ____ in our office is out of paper again.",
      answers: ["printer"],
      explanation: "A thing noun is needed here. 'Print' becomes 'printer', the machine that prints."
    },
    {
      stem: "SAD",
      text: "____ , the old cinema will close at the end of the month.",
      answers: ["Sadly", "sadly"],
      explanation: "A sentence adverb is needed at the start. Add -ly to 'sad'."
    },
    {
      stem: "RESERVE",
      text: "I made a ____ for a table for four at eight o'clock.",
      answers: ["reservation"],
      explanation: "A noun is needed after 'a'. 'Reserve' becomes 'reservation' with -ation."
    },
    {
      stem: "HERO",
      text: "The firefighters were praised for their ____ actions during the flood.",
      answers: ["heroic"],
      explanation: "An adjective is needed before 'actions'. 'Hero' becomes 'heroic'."
    },
    {
      stem: "TYPE",
      text: "It is very ____ of my brother to be late for dinner.",
      answers: ["typical"],
      explanation: "An adjective is needed after 'very'. 'Type' becomes 'typical' with -ical."
    },
    {
      stem: "SOLVE",
      text: "Nobody has found a ____ to the problem of litter in the park.",
      answers: ["solution"],
      explanation: "A noun is needed after 'a'. The noun form of 'solve' is 'solution'."
    },
    {
      stem: "WASH",
      text: "Put your dirty clothes in the ____ machine, not on the floor.",
      answers: ["washing"],
      explanation: "The -ing form is needed before 'machine': a 'washing machine' cleans clothes."
    },
    {
      stem: "DEEP",
      text: "She breathed ____ before walking onto the stage.",
      answers: ["deeply"],
      explanation: "An adverb is needed to describe how she breathed. Add -ly to 'deep'."
    },
    {
      stem: "JOURNAL",
      text: "The ____ interviewed people in the street about the new law.",
      answers: ["journalist"],
      explanation: "A person noun is needed after 'The'. 'Journal' becomes 'journalist' with -ist."
    },
    {
      stem: "EXPECT",
      text: "The film's ending was completely ____ — nobody guessed it.",
      answers: ["unexpected"],
      explanation: "A negative adjective is needed; 'expect' becomes 'unexpected' with un- and -ed."
    },
    {
      stem: "ARCHITECT",
      text: "Students of ____ often visit this city to study its unusual buildings.",
      answers: ["architecture"],
      explanation: "A subject noun is needed after 'of'. 'Architect' becomes 'architecture'."
    },
    {
      stem: "SMOKE",
      text: "The kitchen was hot and ____ , so we opened all the windows.",
      answers: ["smoky"],
      explanation: "An adjective is needed to describe the kitchen. 'Smoke' becomes 'smoky'."
    },
    {
      stem: "ADMIRE",
      text: "I have great ____ for nurses who work long night shifts.",
      answers: ["admiration"],
      explanation: "A noun is needed after 'great'. 'Admire' becomes 'admiration' with -ation."
    },
    {
      stem: "COMEDY",
      text: "The ____ told jokes about everyday life that made everyone laugh.",
      answers: ["comedian"],
      explanation: "A person noun is needed after 'The'. 'Comedy' becomes 'comedian' with -ian."
    },
    {
      stem: "USE",
      text: "The hotel staff gave us some really ____ advice about local buses.",
      answers: ["useful"],
      explanation: "An adjective is needed after 'really'. 'Use' becomes 'useful' with -ful."
    },
    {
      stem: "INVITE",
      text: "Only ____ guests can enter the club on Friday nights.",
      answers: ["invited"],
      explanation: "The -ed form is needed before 'guests': people who have been invited."
    },
    {
      stem: "STUPID",
      text: "Losing the tickets was a moment of pure ____ on my part.",
      answers: ["stupidity"],
      explanation: "A noun is needed after 'pure'. 'Stupid' becomes 'stupidity' with -ity."
    },
    {
      stem: "FISH",
      text: "The old ____ repairs his nets on the beach every evening.",
      answers: ["fisherman"],
      explanation: "A person noun is needed after 'The old'. 'Fish' becomes 'fisherman'."
    },
    {
      stem: "IMPRESS",
      text: "Everyone was ____ by how well the little girl played the violin.",
      answers: ["impressed"],
      explanation: "The people feel the emotion, so we use the -ed adjective 'impressed'."
    },
    {
      stem: "SHINE",
      text: "She polished the old silver spoons until they were ____.",
      answers: ["shiny"],
      explanation: "An adjective is needed after 'were'. 'Shine' becomes 'shiny' with -y."
    },
    {
      stem: "POLLUTE",
      text: "____ from cars is a serious problem in many big cities.",
      answers: ["Pollution", "pollution"],
      explanation: "A noun is needed as the subject. 'Pollute' becomes 'pollution' with -ion."
    },
    {
      stem: "MUD",
      text: "Our boots got really ____ walking across the wet fields.",
      answers: ["muddy"],
      explanation: "An adjective is needed after 'really'. 'Mud' becomes 'muddy' with double d and -y."
    },
    {
      stem: "ARRANGE",
      text: "I need to change the travel ____ for our school trip.",
      answers: ["arrangements", "arrangement"],
      explanation: "A noun is needed after 'travel'. 'Arrange' becomes 'arrangement' with -ment."
    },
    {
      stem: "HEART",
      text: "It was ____ of them to leave the injured bird in the cold.",
      answers: ["heartless"],
      explanation: "A negative adjective is needed: 'heartless' means cruel, without feeling."
    },
    {
      stem: "SKI",
      text: "The hotel is popular with ____ because it is next to the lifts.",
      answers: ["skiers"],
      explanation: "A plural person noun is needed after 'with'. 'Ski' becomes 'skiers'."
    },
    {
      stem: "DESCRIBE",
      text: "The police asked for a full ____ of the missing dog.",
      answers: ["description"],
      explanation: "A noun is needed after 'a full'. 'Describe' becomes 'description'."
    },
    {
      stem: "LEGAL",
      text: "It is ____ to park on these yellow lines at any time.",
      answers: ["illegal"],
      explanation: "The meaning is negative, so we add the prefix il- to 'legal'."
    },
    {
      stem: "BREAK",
      text: "The vase arrived without any damage because it was packed as ____.",
      answers: ["breakable"],
      explanation: "An adjective is needed after 'as'. 'Break' becomes 'breakable' with -able."
    },
    {
      stem: "MEET",
      text: "The staff ____ starts at nine o'clock in the main office.",
      answers: ["meeting"],
      explanation: "A noun is needed after 'staff'. 'Meet' becomes 'meeting' with -ing."
    },
    {
      stem: "TOUR",
      text: "Foreign ____ brings a lot of money to this small island.",
      answers: ["tourism"],
      explanation: "A noun is needed after 'Foreign'. 'Tour' becomes 'tourism' with -ism."
    },
    {
      stem: "SHY",
      text: "He answered the interviewer's questions ____ , looking at the floor.",
      answers: ["shyly"],
      explanation: "An adverb is needed to describe how he answered. Add -ly to 'shy'."
    },
    {
      stem: "DEVELOP",
      text: "The ____ of the new shopping centre will take two years.",
      answers: ["development"],
      explanation: "A noun is needed after 'The'. 'Develop' becomes 'development' with -ment."
    },
    {
      stem: "WEAK",
      text: "Spelling has always been my biggest ____ in English.",
      answers: ["weakness"],
      explanation: "A noun is needed after 'my biggest'. 'Weak' becomes 'weakness' with -ness."
    },
    {
      stem: "ACCEPT",
      text: "Chatting during the exam is completely ____ in our school.",
      answers: ["unacceptable"],
      explanation: "A negative adjective is needed: un- + accept + -able = 'unacceptable'."
    },
    {
      stem: "MOTOR",
      text: "A group of ____ stopped on the bridge to watch the sunset.",
      answers: ["motorists", "motorcyclists"],
      explanation: "A plural person noun is needed. 'Motor' becomes 'motorists', people who drive."
    },
    {
      stem: "STAR",
      text: "We lay on the grass and looked up at the clear, ____ sky.",
      answers: ["starry"],
      explanation: "An adjective is needed before 'sky'. 'Star' becomes 'starry' with double r and -y."
    },
    {
      stem: "INTRODUCE",
      text: "The book begins with a short ____ about the author's life.",
      answers: ["introduction"],
      explanation: "A noun is needed after 'a short'. 'Introduce' becomes 'introduction'."
    },
    {
      stem: "DIE",
      text: "The ____ of the famous singer shocked fans all over the world.",
      answers: ["death"],
      explanation: "A noun is needed after 'The'. The noun form of 'die' is 'death'."
    },
    {
      stem: "PRACTICE",
      text: "You should ____ the piano for half an hour every day.",
      answers: ["practise"],
      explanation: "A verb is needed after 'should'. In British English the verb spelling is 'practise'."
    },
    {
      stem: "OFFICE",
      text: "A police ____ helped the lost tourists find their hotel.",
      answers: ["officer"],
      explanation: "A person noun is needed after 'police'. 'Office' becomes 'officer' with -r."
    },
    {
      stem: "COLD",
      text: "The old wooden house was terribly cold, and the ____ kept us awake.",
      answers: ["coldness"],
      explanation: "A noun is needed after 'the'. 'Cold' becomes 'coldness' with the suffix -ness."
    },
    {
      stem: "EXCITE",
      text: "The fans could not hide their ____ before the cup final.",
      answers: ["excitement"],
      explanation: "A noun is needed after 'their'. 'Excite' becomes 'excitement' with -ment."
    },
    {
      stem: "NATURE",
      text: "It is ____ to feel tired after such a long journey.",
      answers: ["natural"],
      explanation: "An adjective is needed after 'It is'. 'Nature' becomes 'natural' with -al."
    },
    {
      stem: "BUILD",
      text: "The ____ promised to finish our new kitchen by Friday.",
      answers: ["builder", "builders"],
      explanation: "A person noun is needed after 'The'. Add -er to 'build' to make 'builder'."
    },
    {
      stem: "CLEAN",
      text: "The hotel ____ knocks on the door at ten every morning.",
      answers: ["cleaner"],
      explanation: "A person noun is needed after 'The hotel'. Add -er to 'clean' to make 'cleaner'."
    },
    {
      stem: "FLEX",
      text: "My working hours are quite ____ , so I can start early or late.",
      answers: ["flexible"],
      explanation: "An adjective is needed after 'quite'. The root gives us 'flexible' with -ible."
    },
    {
      stem: "WIN",
      text: "Crossing the line first, she gave a ____ smile to the cameras.",
      answers: ["winning"],
      explanation: "The -ing adjective 'winning' is needed to describe her smile."
    },
    {
      stem: "EXHIBIT",
      text: "The photography ____ at the gallery is free for students.",
      answers: ["exhibition"],
      explanation: "A noun is needed after 'photography'. 'Exhibit' becomes 'exhibition' with -ion."
    },
    {
      stem: "BASIC",
      text: "The course teaches you the ____ of first aid in one weekend.",
      answers: ["basics"],
      explanation: "A plural noun is needed after 'the'. 'Basic' becomes 'basics', the simple facts."
    },
    {
      stem: "DIRECT",
      text: "We asked a police officer for ____ to the nearest bank.",
      answers: ["directions"],
      explanation: "A plural noun is needed after 'for'. 'Direct' becomes 'directions'."
    },
    {
      stem: "SERVE",
      text: "The ____ in that restaurant is slow, but the food is worth the wait.",
      answers: ["service"],
      explanation: "A noun is needed after 'The'. 'Serve' becomes 'service' with the suffix -ice."
    },
    {
      stem: "ORDINARY",
      text: "The magician's tricks were really ____ — I still don't know how he did them.",
      answers: ["extraordinary"],
      explanation: "An adjective meaning 'very unusual' is needed: 'extraordinary'."
    },
    {
      stem: "LIVE",
      text: "The desert seems empty, but it is full of ____ creatures.",
      answers: ["living"],
      explanation: "The -ing adjective 'living' is needed to describe the creatures."
    },
    {
      stem: "PSYCHOLOGY",
      text: "The school ____ talks to students who feel worried about exams.",
      answers: ["psychologist"],
      explanation: "A person noun is needed after 'The school'. 'Psychology' becomes 'psychologist'."
    },
    {
      stem: "SALE",
      text: "The ____ in the phone shop persuaded me to buy a cheaper model.",
      answers: ["salesman", "salesperson", "saleswoman"],
      explanation: "A person noun is needed after 'The'. 'Sale' forms the compound 'salesman'."
    },
    {
      stem: "TRUE",
      text: "I ____ believe that our team can win the league this season.",
      answers: ["truly"],
      explanation: "An adverb is needed before 'believe'. 'True' becomes 'truly' without the e."
    },
    {
      stem: "GUIDE",
      text: "There is helpful ____ on the first page about how to fill in the form.",
      answers: ["guidance"],
      explanation: "A noun is needed after 'helpful'. 'Guide' becomes 'guidance' with -ance."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part3 = QUESTIONS.part3.concat(BANK);
})();
