/* PET Prep extra bank: writing */
(function () {
  var BANK = [
    /* ---------- Part 1 Emails (16) ---------- */
    {
      id: "pwx01",
      part: 1,
      type: "Email",
      title: "Email — Birthday party plans",
      length: "about 100 words",
      task: "You received this email from your English friend Ben: 'It's my birthday on Saturday and I'm having a party at my house! Can you come? It starts at six. Could you bring some music you like? Also, what food should I get — pizza or burgers?' Write your email to Ben, answering the questions. Write about 100 words.",
      checklist: [
        "Content: say if you can come, mention the music, and choose the food",
        "Organisation: friendly greeting, short paragraphs, warm ending",
        "Language: thanking, accepting and making suggestions",
        "Length: about 100 words"
      ],
      model: "Hi Ben, Happy almost-birthday! Of course I'll come to your party on Saturday — I wouldn't miss it. Six o'clock is perfect because my basketball practice finishes at five. I'll bring my speaker and a playlist of pop and dance songs that everyone can sing along to. Is that okay? About the food, I'd choose pizza, because you can order different kinds and even Maria, who doesn't eat meat, will find something. Do you want me to come a bit earlier and help you decorate the living room? Just tell me. See you Saturday! Best, Nico"
    },
    {
      id: "pwx02",
      part: 1,
      type: "Email",
      title: "Email — Your friend visits your town",
      length: "about 100 words",
      task: "You received this email from your English friend Holly: 'Great news — my family is visiting your town next month! We'll be there for two days. What should we visit? What's the weather like in April? And is there a good place to try local food?' Write your email to Holly, answering the questions. Write about 100 words.",
      checklist: [
        "Content: recommend places to visit, describe the weather, suggest a restaurant",
        "Organisation: answer each question in a clear order",
        "Language: recommendations (you should…, don't miss…) and weather words",
        "Length: about 100 words"
      ],
      model: "Hi Holly, That's fantastic news — I can't believe you're finally coming! With two days, you should visit the old castle on the hill first, because the view is amazing, and then the street market near the river. In April the weather is usually warm and sunny, but bring a light jacket for the evenings, and sometimes it rains a little. For local food, my favourite place is a small restaurant called The Green Door, where my whole family goes on Sundays. The soup there is famous! Shall I come with you and be your guide? Love, Carla"
    },
    {
      id: "pwx03",
      part: 1,
      type: "Email",
      title: "Email — Joining the swimming club",
      length: "about 100 words",
      task: "You received this email from your English friend Jack: 'I've just joined a swimming club and it's brilliant! You said you wanted to do more sport — why don't you join too? We train on Tuesdays and Saturdays. Which day would suit you better? And do you need to borrow any swimming things?' Write your email to Jack, answering the questions. Write about 100 words.",
      checklist: [
        "Content: react to the idea, choose a day, say what you need to borrow",
        "Organisation: friendly opening, clear answers, positive ending",
        "Language: agreeing, explaining choices, asking for information",
        "Length: about 100 words"
      ],
      model: "Hi Jack, Thanks for thinking of me — joining your swimming club sounds like a great idea! You're right, I really need more exercise, and swimming is my favourite sport after football. Saturdays would suit me much better, because on Tuesdays I have guitar lessons until seven and I'd arrive tired and late. I've got my own swimsuit and towel, but could I borrow a pair of goggles for the first few weeks? The water always hurts my eyes. One question: how much does the club cost each month? Ask your coach for me, please. See you soon! Best, Sofia"
    },
    {
      id: "pwx04",
      part: 1,
      type: "Email",
      title: "Email — A film evening",
      length: "about 100 words",
      task: "You received this email from your English friend Amira: 'Some friends are coming to my flat on Friday to watch a film. Would you like to join us? What kind of film should we choose? And could you come a little early to help me get things ready?' Write your email to Amira, answering the questions. Write about 100 words.",
      checklist: [
        "Content: accept the invitation, suggest a film type, respond about coming early",
        "Organisation: greeting, body answering all questions, friendly close",
        "Language: preferences (I'd rather…, how about…?) and offers of help",
        "Length: about 100 words"
      ],
      model: "Hi Amira, A film evening at your flat sounds perfect — count me in! After this long school week, I think we should watch a comedy. Everybody laughs at the same jokes, and nobody falls asleep like they do during long serious films. There's a new one about a talking dog that people say is really funny. And yes, I can come early! I'll be there at six to help you move the sofa and prepare the snacks. Shall I bring my big bowl for the popcorn and some orange juice too? Just say the word. See you Friday! Hugs, Dani"
    },
    {
      id: "pwx05",
      part: 1,
      type: "Email",
      title: "Email — Looking after a new puppy",
      length: "about 100 words",
      task: "You received this email from your English friend Theo: 'Guess what — we've got a puppy! He's lovely but very naughty. You've had a dog for years, so I need your advice. How can I stop him chewing everything? How often should I walk him? And what's a good name for him?' Write your email to Theo, answering the questions. Write about 100 words.",
      checklist: [
        "Content: give advice about chewing and walks, and suggest a name",
        "Organisation: one clear piece of advice at a time",
        "Language: advice structures (you should…, try + -ing, it's important to…)",
        "Length: about 100 words"
      ],
      model: "Hi Theo, Congratulations on the puppy — how exciting! Don't worry about the chewing; all puppies do it. You should buy him some rubber toys and give him one every time he starts biting shoes. It worked with my dog Luna after a few weeks. About walks, twice a day is enough while he's small: a short one in the morning and a longer one after school. Puppies get tired quickly! As for a name, what about Biscuit? You told me he's brown and always hungry, so it's perfect. Send me photos soon, please! Best, Marta"
    },
    {
      id: "pwx06",
      part: 1,
      type: "Email",
      title: "Email — Help with a school project",
      length: "about 100 words",
      task: "You received this email from your English friend Lily: 'Our teacher wants us to do a project about an interesting person, and I've chosen someone from your country! Who do you think I should write about? Where can I find information? And could you check my project when it's finished?' Write your email to Lily, answering the questions. Write about 100 words.",
      checklist: [
        "Content: suggest a person, say where to find information, agree to check the project",
        "Organisation: clear answers with reasons",
        "Language: suggestions and offering help",
        "Length: about 100 words"
      ],
      model: "Hi Lily, What a nice surprise — I'd love to help with your project! You should write about Elena Duarte, our most famous climber. She was the first woman from my country to climb the highest mountain in Asia, and children here learn about her at school. You can find information on the national museum's website, which has an English page with photos and interviews. There's also a short film about her life online. And of course I'll check your project when it's ready — just send it to me a few days before you give it in. Good luck! Love, Petra"
    },
    {
      id: "pwx07",
      part: 1,
      type: "Email",
      title: "Email — A weekend camping trip",
      length: "about 100 words",
      task: "You received this email from your English friend Oscar: 'My family is going camping by the lake next weekend and you're invited! We leave on Saturday morning. Can you come? What food do you like for the barbecue? And do you have a sleeping bag, or should we bring one for you?' Write your email to Oscar, answering the questions. Write about 100 words.",
      checklist: [
        "Content: accept, mention barbecue food you like, answer about the sleeping bag",
        "Organisation: friendly start, answers in order, enthusiastic ending",
        "Language: thanks, food vocabulary and polite requests",
        "Length: about 100 words"
      ],
      model: "Hi Oscar, Thank you so much for inviting me — I'd love to come camping with your family! I've already asked my parents and they said yes, so I'll be ready on Saturday morning. For the barbecue, I like chicken and corn best, and my mum says she'll send her famous potato salad with me. I hope everyone's hungry! Unfortunately I don't have a sleeping bag, so could you bring one for me, please? I'll bring my torch and a pack of cards for the evening instead. What time should I be at your house? Best, Tomas"
    },
    {
      id: "pwx08",
      part: 1,
      type: "Email",
      title: "Email — Moving to a new house",
      length: "about 100 words",
      task: "You received this email from your English friend Grace: 'We're moving to our new house on Saturday and it's chaos here! Could you come and help us carry boxes? We start at nine. Also, my little brother will be bored — could you think of something to keep him busy? And how should we thank everyone who helps?' Write your email to Grace, answering the questions. Write about 100 words.",
      checklist: [
        "Content: agree to help, suggest an activity for the brother, give an idea for thanking helpers",
        "Organisation: clear paragraphs for each answer",
        "Language: offers, suggestions and future arrangements",
        "Length: about 100 words"
      ],
      model: "Hi Grace, Of course I'll come and help — that's what friends are for! Nine o'clock is fine, and I'll wear my old clothes and bring my dad's gloves for the heavy boxes. For your little brother, why don't you give him a special job, like being the 'box counter'? He can put a sticker on every box and tell us the number. Kids love feeling important. To thank everyone, you could order pizzas for lunch and eat together in the empty living room — helpers are always hungry! See you Saturday, and try not to worry. Love, Ana"
    },
    {
      id: "pwx09",
      part: 1,
      type: "Email",
      title: "Email — Practising languages together",
      length: "about 100 words",
      task: "You received this email from your English friend Noah: 'My teacher says the best way to learn a language is to practise with a real person. Could we help each other? I'll help you with English if you teach me some of your language. How often should we talk? And is a video call or messages better for you?' Write your email to Noah, answering the questions. Write about 100 words.",
      checklist: [
        "Content: agree to the exchange, suggest how often to talk, choose video or messages",
        "Organisation: friendly reply that answers every question",
        "Language: arrangements, frequency expressions, preferences",
        "Length: about 100 words"
      ],
      model: "Hi Noah, What a brilliant idea — yes, let's help each other! Your English teacher is right: I remember words much better when I actually use them. I think we should talk twice a week, maybe Wednesdays and Sundays, because once a week isn't enough and every day is too much with homework. For me, video calls are much better than messages. When I see your face, I understand you even when I don't know every word, and we can laugh at our mistakes together. Shall we try this Sunday at five? I'll prepare ten easy words for you. Best, Emre"
    },
    {
      id: "pwx10",
      part: 1,
      type: "Email",
      title: "Email — Plans for the summer holidays",
      length: "about 100 words",
      task: "You received this email from your English friend Ruby: 'The summer holidays are nearly here! What are you doing in July? My parents said I can invite a friend to our house by the sea for a week. Would you like to come? And what activities do you enjoy doing at the beach?' Write your email to Ruby, answering the questions. Write about 100 words.",
      checklist: [
        "Content: describe your July plans, accept the invitation, mention beach activities",
        "Organisation: enthusiastic opening, clear middle, warm ending",
        "Language: future plans (going to, present continuous) and activity words",
        "Length: about 100 words"
      ],
      model: "Hi Ruby, I'm so excited about the holidays too! In July I'm going to my grandparents' farm for the first two weeks, and after that I'm free — so yes, I would absolutely love to come to your house by the sea! Thank you, and please thank your parents too. At the beach I enjoy swimming and playing volleyball, and I've always wanted to try surfing. Is the sea good for beginners where you live? I'm also happy just walking and collecting shells when the weather is bad. Tell me which week is best for your family. Love, Julia"
    },
    {
      id: "pwx11",
      part: 1,
      type: "Email",
      title: "Email — A broken games console",
      length: "about 100 words",
      task: "You received this email from your English friend Max: 'Disaster! My games console broke yesterday, one week before the school tournament we entered together. Should I try to repair it or buy a second-hand one? Could we practise at your house instead? And which game should we practise most?' Write your email to Max, answering the questions. Write about 100 words.",
      checklist: [
        "Content: give your opinion about repairing or buying, invite him over, choose a game",
        "Organisation: calm, helpful reply covering all three questions",
        "Language: opinions, comparisons and invitations",
        "Length: about 100 words"
      ],
      model: "Hi Max, Don't panic — we can fix this! Honestly, I wouldn't repair the console. My cousin tried that once, it cost a lot and took three weeks, which is too late for us. A second-hand one from the shop near the station is cheaper and they test everything before selling it. But the best news: yes, come and practise at my house! My console works fine and my mum already said it's okay. We should practise the football game most, because the final is always football and the team from Northside is really strong. Come on Wednesday after school? Best, Leo"
    },
    {
      id: "pwx12",
      part: 1,
      type: "Email",
      title: "Email — Cooking for the class party",
      length: "about 100 words",
      task: "You received this email from your English friend Ava: 'Our class is having an international food party on Friday and everyone must bring a dish from a different country. You're such a good cook — what should I make? Is it difficult? And could you help me buy the ingredients?' Write your email to Ava, answering the questions. Write about 100 words.",
      checklist: [
        "Content: suggest a dish, say how difficult it is, agree to help with shopping",
        "Organisation: clear answers with helpful details",
        "Language: food vocabulary, instructions and arrangements",
        "Length: about 100 words"
      ],
      model: "Hi Ava, What a fun idea for a party! You should make Spanish tortilla — it's a thick omelette with potatoes and onions, everyone loves it, and it tastes good even when it's cold, which is perfect for a school party. Don't worry, it isn't difficult at all. You only need five ingredients, and the trickiest part is turning it over in the pan. I'll show you how! Let's go shopping together on Thursday after school; the market near my house has cheap eggs and potatoes. Then we can cook it at yours and practise. It'll be the best dish there! Love, Rosa"
    },
    {
      id: "pwx13",
      part: 1,
      type: "Email",
      title: "Email — Tickets for the big match",
      length: "about 100 words",
      task: "You received this email from your English friend Harry: 'My uncle gave me two tickets for the big football match on Sunday afternoon — do you want to come with me? How should we get to the stadium? And after the match, would you like to come to my house for dinner?' Write your email to Harry, answering the questions. Write about 100 words.",
      checklist: [
        "Content: accept the ticket, suggest transport, answer about dinner",
        "Organisation: excited opening, practical middle, polite ending",
        "Language: thanks, travel suggestions and accepting invitations",
        "Length: about 100 words"
      ],
      model: "Hi Harry, Are you serious? Tickets for Sunday's match? YES, I want to come — thank you, and please thank your uncle a million times! About getting there, let's take the special match-day bus from the main square. Driving is a bad idea because there's never anywhere to park, and the bus stops right outside the stadium gates. It leaves at one o'clock, so let's meet at the square at quarter to. And I'd love to come for dinner afterwards — I'll ask my parents tonight, but I'm sure they'll say yes. What an amazing day this will be! Best, Diego"
    },
    {
      id: "pwx14",
      part: 1,
      type: "Email",
      title: "Email — Starting a school band",
      length: "about 100 words",
      task: "You received this email from your English friend Chloe: 'Some of us want to start a school band and we need more musicians! You play the drums, don't you? Will you join us? Where could we practise without annoying anyone? And what should we call the band?' Write your email to Chloe, answering the questions. Write about 100 words.",
      checklist: [
        "Content: agree to join, suggest a practice place, propose a band name",
        "Organisation: answer all three questions with reasons",
        "Language: enthusiasm, suggestions and explanations",
        "Length: about 100 words"
      ],
      model: "Hi Chloe, A school band? I'm in! Yes, I've played the drums for three years and I've always dreamed of playing with other people instead of alone in the garage. Talking of which — that's where we should practise! Our garage is big, my parents don't mind noise before eight o'clock, and my drum kit is already there, so nobody has to carry it around. For the name, what about 'The Loud Lunchbreak'? It's funny, it sounds like a school band, and nobody will forget it. When is the first practice? I can't wait to start. Best, Kasia"
    },
    {
      id: "pwx15",
      part: 1,
      type: "Email",
      title: "Email — A day at the funfair",
      length: "about 100 words",
      task: "You received this email from your English friend Ellie: 'The funfair arrives in town next week! Shall we go together on Saturday? Which rides do you want to go on? And my mum says she'll drive us — where should she pick you up?' Write your email to Ellie, answering the questions. Write about 100 words.",
      checklist: [
        "Content: agree to go, name the rides you like, arrange the pick-up place",
        "Organisation: short friendly paragraphs answering each question",
        "Language: excitement, preferences and arrangements",
        "Length: about 100 words"
      ],
      model: "Hi Ellie, The funfair — finally! Yes, let's go on Saturday, I've been waiting all year. I definitely want to go on the big wheel first, because you can see the whole town from the top, and then the fast roller coaster, if you're brave enough to come with me! I'm not doing the haunted house though — last year I screamed so loudly that everyone laughed. Please tell your mum thank you for driving. She can pick me up outside the library at two o'clock; it's easy to stop there. Shall we take some money for candy floss? Love, Mia"
    },
    {
      id: "pwx16",
      part: 1,
      type: "Email",
      title: "Email — Advice about a first bike ride to school",
      length: "about 100 words",
      task: "You received this email from your English friend Sam: 'My parents finally said I can cycle to school, but I've never done it before! You cycle every day. Which way should I go to avoid the busy roads? What do I need to take with me? And shall we ride together the first time?' Write your email to Sam, answering the questions. Write about 100 words.",
      checklist: [
        "Content: describe a safe route, list what to take, agree to ride together",
        "Organisation: practical, clearly ordered answers",
        "Language: directions, advice and arrangements",
        "Length: about 100 words"
      ],
      model: "Hi Sam, Great news — cycling to school is the best part of my day! Don't use Station Road; the cars go too fast there. Instead, go through the park, along the river path, and come out by the supermarket. It takes five minutes longer but it's quiet and really pretty. You need a helmet, lights for dark mornings, and a lock — the good kind, not the cheap one my brother lost his bike with! And of course we'll ride together the first time. Meet me at the park gates at eight on Monday and follow me. Easy! Best, Finn"
    }
,
    /* ---------- Part 2 Articles (16) ---------- */
    {
      id: "pwx17",
      part: 2,
      type: "Article",
      title: "Article — My favourite season",
      length: "about 100 words",
      task: "You see this notice in an English-language magazine for teenagers: 'Articles wanted! MY FAVOURITE SEASON — Which season of the year do you like best? What do you do then? Why do you enjoy it so much? The best articles will be printed next month.' Write your article. Write about 100 words.",
      checklist: [
        "Content: say which season you prefer, what you do and why you enjoy it",
        "Organisation: catchy opening, clear paragraphs, short ending",
        "Language: present simple, weather and activity vocabulary",
        "Length: about 100 words"
      ],
      model: "Winter Wins Every Time! Most of my friends love summer, but for me, nothing beats winter. When the first snow falls, our quiet town suddenly looks like a postcard. Every weekend my cousins and I take our sledges to the hill behind the school, and we stay out until our fingers freeze. Afterwards, my grandmother makes hot chocolate, which tastes a hundred times better when you're cold. Winter also means my birthday, the holidays and long evenings playing board games with my family. Summer is fine — but can you drink hot chocolate by a fire in July? Exactly."
    },
    {
      id: "pwx18",
      part: 2,
      type: "Article",
      title: "Article — A sport everyone should try",
      length: "about 100 words",
      task: "You see this announcement on your school's English website: 'A SPORT EVERYONE SHOULD TRY — Write an article about a sport you think more people should do. What is it? Why do you like it? Why is it good for everyone? We will publish the best articles.' Write your article. Write about 100 words.",
      checklist: [
        "Content: name the sport, explain why you like it and why it suits everyone",
        "Organisation: interesting title and opening question, logical paragraphs",
        "Language: sports vocabulary and persuasive expressions",
        "Length: about 100 words"
      ],
      model: "Grab a Paddle! Have you ever tried table tennis? If not, you're missing my favourite sport in the world. I started playing two years ago at my youth club, and now I practise three times a week. What makes it special? First, anyone can play — young or old, tall or short, sporty or not. Second, it's cheap: you only need a bat, a small ball and a table. Third, it's fantastic exercise for your body and your brain, because the ball moves so fast that you must think quickly. Try it once, and I promise you'll want to play again!"
    },
    {
      id: "pwx19",
      part: 2,
      type: "Article",
      title: "Article — Mobile phones at school",
      length: "about 100 words",
      task: "You see this notice in an international school magazine: 'MOBILE PHONES AT SCHOOL — good idea or big problem? Should students be allowed to use their phones during the school day? Tell us what you think and why. The most interesting articles will appear in our next issue.' Write your article. Write about 100 words.",
      checklist: [
        "Content: give a clear opinion with at least two reasons",
        "Organisation: introduction, arguments, short conclusion",
        "Language: opinion phrases (in my view, I believe) and linking words",
        "Length: about 100 words"
      ],
      model: "Phones in Class? Not for Me. Everyone in my class owns a phone, and I love mine too — but I don't think we should use them during lessons. First, phones make it hard to concentrate. When a message arrives, you stop listening, even if the lesson is interesting. Second, at break time people stare at screens instead of talking, and school should be a place for real friends. However, I believe phones are useful for emergencies, so my idea is simple: keep them in our bags, turned off, and enjoy them after school. Lessons are boring enough without losing them completely!"
    },
    {
      id: "pwx20",
      part: 2,
      type: "Article",
      title: "Article — The best place to relax in my area",
      length: "about 100 words",
      task: "You see this notice on an English-language community website: 'THE BEST PLACE TO RELAX — Where do you go when you need to rest and forget your problems? Describe the place and explain why it helps you relax. We will publish our favourite articles online.' Write your article. Write about 100 words.",
      checklist: [
        "Content: describe the place and explain why it is relaxing for you",
        "Organisation: set the scene first, then give reasons",
        "Language: descriptive adjectives and place vocabulary",
        "Length: about 100 words"
      ],
      model: "My Secret Corner by the River. Ten minutes from my noisy street, there is a small wooden bridge over the river, and that is where I go when my head is full of worries. Under the bridge, the water moves slowly, and you can watch ducks and sometimes a silver fish. I usually sit on the grass with an apple and my headphones, although often I don't even play any music — the sound of the water is enough. After half an hour there, my problems always seem smaller. Everyone needs a quiet corner like mine. Have you found yours yet?"
    },
    {
      id: "pwx21",
      part: 2,
      type: "Article",
      title: "Article — Shopping online or in real shops?",
      length: "about 100 words",
      task: "You see this announcement in an English-language magazine: 'ONLINE OR IN THE SHOP? — How do you prefer to buy things, on the internet or in real shops? Write an article giving your opinion and your reasons. The best articles win a book token.' Write your article. Write about 100 words.",
      checklist: [
        "Content: state your preference and support it with reasons or examples",
        "Organisation: balanced structure with a clear conclusion",
        "Language: comparatives and shopping vocabulary",
        "Length: about 100 words"
      ],
      model: "Why I Still Love Real Shops. My friends buy everything online, and I understand why: it's fast, it's often cheaper, and the parcel comes to your door. But for me, real shops win. In a shop, I can try on the trainers, feel if a jumper is soft, and see the true colour of things — my sister once ordered a 'red' dress online that arrived orange! I also enjoy shopping as a day out with friends, with a pizza afterwards. I do buy books online, I admit. But for everything else, give me a real shop, a real bag and no waiting."
    },
    {
      id: "pwx22",
      part: 2,
      type: "Article",
      title: "Article — Music in my life",
      length: "about 100 words",
      task: "You see this notice on a music website for young people: 'MUSIC IN MY LIFE — When do you listen to music? How does it change the way you feel? Has music ever helped you? Write an article and share your story with our readers.' Write your article. Write about 100 words.",
      checklist: [
        "Content: describe when you listen, how it makes you feel and a personal example",
        "Organisation: personal, engaging style with a strong final line",
        "Language: feelings vocabulary and time expressions",
        "Length: about 100 words"
      ],
      model: "The Soundtrack of My Day. My day starts with music and ends with it. In the morning, loud pop songs help me wake up and find matching socks. On the bus, calm piano music stops me worrying about tests. And when I do my homework, I play quiet guitar playlists — with words, I start singing and stop working! Music has really helped me too. Last year, when we moved to a new city and I had no friends yet, my favourite band made me feel less alone. Then a girl at school saw my band T-shirt, and now she's my best friend. Thank you, music."
    },
    {
      id: "pwx23",
      part: 2,
      type: "Article",
      title: "Article — Learning English outside the classroom",
      length: "about 100 words",
      task: "You see this notice in your school's English magazine: 'ENGLISH EVERYWHERE! — How do you practise English outside your lessons? Write an article describing what works for you, and give advice to other students. The best articles will be shown on the school noticeboard.' Write your article. Write about 100 words.",
      checklist: [
        "Content: describe your methods and give advice to other learners",
        "Organisation: clear tips the reader can follow",
        "Language: advice forms and learning vocabulary",
        "Length: about 100 words"
      ],
      model: "English Without a Classroom. Do you only speak English during lessons? Then you're missing the fun part! Here's what works for me. First, I changed my phone's language to English — now I learn new words every time I use it. Second, I watch my favourite series with English subtitles; after a month, I stopped needing to pause. Third, and best of all, I play online games with players from other countries, so I have to use English to win. My advice is simple: connect English to something you already love. Then it stops being homework and becomes your superpower."
    },
    {
      id: "pwx24",
      part: 2,
      type: "Article",
      title: "Article — A meal I could eat every day",
      length: "about 100 words",
      task: "You see this notice on an English-language food website: 'A MEAL I COULD EAT EVERY DAY — Tell us about your favourite meal. What is it? Who makes it best? Why do you love it so much? We will publish the tastiest articles!' Write your article. Write about 100 words.",
      checklist: [
        "Content: describe the meal, who makes it and why you love it",
        "Organisation: mouth-watering opening and personal details",
        "Language: food adjectives and present simple",
        "Length: about 100 words"
      ],
      model: "Dumplings Forever. If I could choose one meal for the rest of my life, it would be my grandmother's dumplings. She makes them every Sunday: soft outside, filled with meat and herbs, served in a hot soup that smells like her kitchen. The secret, she says, is patience — she never hurries the dough. I love them partly because of the taste, but mostly because of the day itself: the whole family around one table, everyone talking too loudly, my uncle always burning his mouth on the first one. Restaurants sell dumplings too, of course. They're fine. But they're not Sunday."
    },
    {
      id: "pwx25",
      part: 2,
      type: "Article",
      title: "Article — Keeping fit without a gym",
      length: "about 100 words",
      task: "You see this announcement on a health website for teenagers: 'FIT FOR FREE — You don't need an expensive gym to stay healthy! Write an article about how young people can keep fit without spending money. Include your own ideas and experience.' Write your article. Write about 100 words.",
      checklist: [
        "Content: give free ways to exercise, including your own experience",
        "Organisation: practical tips in a logical order",
        "Language: activity vocabulary and encouraging expressions",
        "Length: about 100 words"
      ],
      model: "No Gym? No Problem! Gyms cost money, but moving your body is free. My first tip: use your legs as transport. I walk to school every day, and it wakes me up better than any alarm. Second, the park is an open-air gym — my friends and I do a running circuit there every Saturday, and we finish with football, which never feels like exercise. Third, try online workout videos at home; even fifteen minutes in your bedroom counts. Since I started this last year, I sleep better and feel stronger. Save your money for the cinema, and let the world be your gym!"
    },
    {
      id: "pwx26",
      part: 2,
      type: "Article",
      title: "Article — A film worth watching twice",
      length: "about 100 words",
      task: "You see this notice on an English-language film website: 'A FILM WORTH WATCHING TWICE — Which film do you never get tired of? What is it about, and why do you like it so much? Write an article for our readers — but don't tell them the ending!' Write your article. Write about 100 words.",
      checklist: [
        "Content: introduce the film, describe it briefly and explain its appeal without spoiling it",
        "Organisation: hook the reader, then give reasons",
        "Language: film vocabulary and adjectives of opinion",
        "Length: about 100 words"
      ],
      model: "The Film I've Seen Nine Times. Some films you watch once and forget. 'The Paper Kite' is not one of them. It tells the story of a boy who moves to a tiny village with his grandfather and enters a kite competition to make his first friend. That sounds simple, but the film is full of surprises, and the music is so beautiful that my mum cries every single time. Why watch it twice? Because the second time, you notice little clues hidden everywhere from the very first scene. I won't say more — just watch it. Then watch it again."
    },
    {
      id: "pwx27",
      part: 2,
      type: "Article",
      title: "Article — Is it good to have a hobby that's difficult?",
      length: "about 100 words",
      task: "You see this notice in an English-language magazine for young people: 'HARD HOBBIES — Some hobbies are easy and relaxing, but others take years to learn. Is it good to choose a difficult hobby? Write an article about your experience and opinion.' Write your article. Write about 100 words.",
      checklist: [
        "Content: give an opinion about difficult hobbies with a personal example",
        "Organisation: opinion supported by experience, clear conclusion",
        "Language: hobby vocabulary and expressions of difficulty and progress",
        "Length: about 100 words"
      ],
      model: "Why I Chose the Violin. Three years ago I picked the hardest hobby I could find: the violin. For the first months, my playing sounded like a cat in the rain, and my brother wore headphones around the house. So is a difficult hobby a good idea? I say yes. Easy hobbies relax you, but hard ones change you. The violin taught me patience, because progress comes slowly, note by note. It taught me that being bad at something is just the first step to being good. Last month I played in my first concert. My brother clapped loudest."
    },
    {
      id: "pwx28",
      part: 2,
      type: "Article",
      title: "Article — Travelling by train",
      length: "about 100 words",
      task: "You see this announcement on a travel website: 'THE JOY OF TRAINS — Do you enjoy train journeys? Write an article about travelling by train. What do you like about it? Describe a journey you remember. The best articles will appear on our home page.' Write your article. Write about 100 words.",
      checklist: [
        "Content: explain what you like about trains and describe a real journey",
        "Organisation: general opinion first, then a specific memory",
        "Language: travel vocabulary and past tenses for the memory",
        "Length: about 100 words"
      ],
      model: "Window Seat, Please. Planes are faster and cars go door to door, but nothing beats a train. On a train you can walk around, eat your sandwiches with a view, and watch the world change from city to fields to mountains. Last summer I took the slow train along the coast with my aunt. For three hours, the sea was right outside our window, and at every tiny station, someone interesting got on. An old man showed us photos of the same journey fifty years ago! You don't get stories like that on a motorway. Take the train — and take the window seat."
    },
    {
      id: "pwx29",
      part: 2,
      type: "Article",
      title: "Article — Pets in a small flat",
      length: "about 100 words",
      task: "You see this notice on an English-language website for animal lovers: 'PETS IN THE CITY — Can people keep pets happily in a small flat? Which animals are suitable and which are not? Write an article giving your opinion and advice.' Write your article. Write about 100 words.",
      checklist: [
        "Content: give an opinion about pets in flats with examples of suitable animals",
        "Organisation: clear argument with advice for readers",
        "Language: animal vocabulary and modal verbs for advice",
        "Length: about 100 words"
      ],
      model: "Small Flat, Happy Pet? People say you shouldn't keep pets in a flat, but I disagree — you just need to choose the right one. I live on the fourth floor with my cat, Milo, and he's perfectly happy sleeping on the windowsill and chasing paper balls down the hall. Cats, hamsters and fish all suit small homes. Big dogs are different, though: my neighbour's dog needs two long walks a day, and I can hear how bored he is when they're out. My advice? Think about the animal's needs first, not about how cute it looks. A happy pet makes a happy home."
    },
    {
      id: "pwx30",
      part: 2,
      type: "Article",
      title: "Article — My dream job",
      length: "about 100 words",
      task: "You see this notice in an international magazine for students: 'MY DREAM JOB — What job would you love to do in the future? Why does it attract you? What are you doing now to make it happen? Write an article for our readers.' Write your article. Write about 100 words.",
      checklist: [
        "Content: name the job, explain its appeal and describe your preparation",
        "Organisation: future dream linked to present actions",
        "Language: future forms and job vocabulary",
        "Length: about 100 words"
      ],
      model: "Fixing People's Smiles. When people ask about my dream job, they expect 'footballer' or 'singer'. My answer surprises them: I want to be a dentist. Strange? Maybe. But when I was ten, I broke my front tooth falling off my bike, and I was so embarrassed that I stopped smiling in photos. The dentist who repaired it gave me my smile back, and I've never forgotten that feeling. That's the job I want — fixing something small that means something big. For now, I'm working hard at science, and I volunteer at a health centre in the holidays. Future patients, don't worry: I'll be gentle."
    },
    {
      id: "pwx31",
      part: 2,
      type: "Article",
      title: "Article — Old friends and new friends",
      length: "about 100 words",
      task: "You see this announcement in an English-language teen magazine: 'OLD FRIENDS, NEW FRIENDS — Is it better to have a few old friends or lots of new ones? How do you make new friends without losing old ones? Share your thoughts in an article.' Write your article. Write about 100 words.",
      checklist: [
        "Content: compare old and new friendships and answer the questions",
        "Organisation: balanced discussion with a personal conclusion",
        "Language: comparatives and friendship vocabulary",
        "Length: about 100 words"
      ],
      model: "Two Kinds of Treasure. My best friend Zara has known me since kindergarten. She remembers my terrible haircut in Year 4, and I know exactly which joke will make her laugh. You can't buy that — it takes years. But last September, a new boy joined our class, and he's now one of my favourite people. New friends bring new music, new ideas, new games. So which is better? I think it's the wrong question. Old friends are your roots; new friends are your branches, and a tree needs both. My trick for keeping everyone? One big film night a month, all invited."
    },
    {
      id: "pwx32",
      part: 2,
      type: "Article",
      title: "Article — What to do on a rainy weekend",
      length: "about 100 words",
      task: "You see this notice on a website for young people: 'RAINY DAYS DON'T HAVE TO BE BORING! — What do you do when it rains all weekend? Write an article with your best ideas for enjoying bad weather. We'll publish the most creative ones.' Write your article. Write about 100 words.",
      checklist: [
        "Content: suggest several rainy-day activities with personal touches",
        "Organisation: lively tone with clearly separated ideas",
        "Language: suggestion forms and indoor activity vocabulary",
        "Length: about 100 words"
      ],
      model: "Let It Rain! When rain ruins the weekend, my friends complain — but I secretly smile, because rainy days are the best days. First, there's baking: nothing smells better than biscuits in the oven while water runs down the windows. Second, my sister and I build a cinema in the living room with blankets, snacks and three films in a row. Third, board games! Our family championship has lasted two years, and Dad still hasn't won. And if the rain gets lighter? Put on boots and jump in the puddles — you're never too old. Boring weekends don't exist. Only boring plans do."
    }
,
    /* ---------- Part 2 Stories (16) ---------- */
    {
      id: "pwx33",
      part: 2,
      type: "Story",
      title: "Story — The box on the doorstep",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'When Anna opened the front door, there was a large box on the doorstep.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: clear beginning, middle and end",
        "Language: past tenses and time expressions",
        "Length: about 100 words"
      ],
      model: "When Anna opened the front door, there was a large box on the doorstep. There was no name on it, only a small hole in one side. Then the box moved! Anna jumped back, and a soft sound came from inside. Carefully, she lifted the top — and found a tiny grey kitten looking up at her. A note lay under it: 'Please look after me. I have nowhere to go.' Anna's mum had always said no to pets, but when she saw the kitten's big eyes, she sighed and smiled. 'One night,' she said. That was two years ago. Cloudy still lives with them."
    },
    {
      id: "pwx34",
      part: 2,
      type: "Story",
      title: "Story — The wrong bus",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'Marco was so busy reading his book that he got on the wrong bus.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: a problem, events and a satisfying ending",
        "Language: past simple and past continuous",
        "Length: about 100 words"
      ],
      model: "Marco was so busy reading his book that he got on the wrong bus. He only noticed when he looked up and saw fields instead of shops. His heart jumped — where was he? The bus stopped in a tiny village he had never seen before. While he waited an hour for the bus back, he walked around and discovered a little shop selling old books. The owner, a friendly woman with white hair, showed him shelves of adventure stories, exactly the kind he loved. Marco now takes the 'wrong' bus there every month. Some mistakes, he thinks, are really invitations."
    },
    {
      id: "pwx35",
      part: 2,
      type: "Story",
      title: "Story — A voice from the garden",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'In the middle of the night, Leila heard a strange noise coming from the garden.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: build tension, then explain the mystery",
        "Language: past tenses and descriptive vocabulary for sounds and feelings",
        "Length: about 100 words"
      ],
      model: "In the middle of the night, Leila heard a strange noise coming from the garden. It sounded like crying. She woke her dad, took the torch, and together they walked slowly across the wet grass. The noise came from behind the shed. Leila's hands were shaking as she pointed the light — and there stood a baby sheep, cold and frightened. It had escaped from the farm up the hill through a broken fence. They dried it with old towels and gave it warm milk. When the farmer arrived in the morning, he thanked them and made a promise: the lamb would be called Leila."
    },
    {
      id: "pwx36",
      part: 2,
      type: "Story",
      title: "Story — The photograph in the library book",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'Inside the old library book, Tom found a photograph of two children.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: mystery, search and resolution",
        "Language: past tenses and expressions for guessing (perhaps, it might be)",
        "Length: about 100 words"
      ],
      model: "Inside the old library book, Tom found a photograph of two children. It was black and white, and on the back someone had written 'Summer 1969'. Who were they? Tom showed the librarian, who studied the picture and suddenly laughed. 'That's Mr Evans from the bakery!' she said. 'And his sister, I think.' After school, Tom took the photo to the bakery. The old baker held it for a long time without speaking. His sister had moved to Australia forty years ago, and he had lost all his pictures of her. 'Thank you,' he whispered. Tom got free bread for a month."
    },
    {
      id: "pwx37",
      part: 2,
      type: "Story",
      title: "Story — Last five minutes of the match",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'There were only five minutes left, and Rosa's team was losing.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: exciting build-up to a clear ending",
        "Language: past tenses and dramatic time expressions",
        "Length: about 100 words"
      ],
      model: "There were only five minutes left, and Rosa's team was losing. One goal behind, in the final, with the whole school watching. Rosa's legs felt heavy, but then she heard her little brother shouting her name from the crowd. Something woke up inside her. She won the ball, passed to Maya, ran forward and — goal! One all. The crowd went crazy. In the last minute, Rosa jumped for a high ball, closed her eyes and headed it. Silence. Then a roar. She opened her eyes to see the ball in the net and her whole team running towards her. Best. Day. Ever."
    },
    {
      id: "pwx38",
      part: 2,
      type: "Story",
      title: "Story — The message in the bottle",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'While they were walking along the beach, Sam and Nina saw a bottle with paper inside it.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: discovery, action and a memorable ending",
        "Language: past tenses and direct speech",
        "Length: about 100 words"
      ],
      model: "While they were walking along the beach, Sam and Nina saw a bottle with paper inside it. Nina pulled out the note. 'It's a birthday wish!' she said. A girl called Emmi had written it exactly a year ago: 'I wish someone finds this and has a party for me, because nobody came to mine.' There was an address from a town only ten kilometres away. The next Saturday, with their parents' help, they knocked on Emmi's door with balloons and a cake. Emmi cried, then laughed, then cried again. Now the three of them throw a bottle party every single year."
    },
    {
      id: "pwx39",
      part: 2,
      type: "Story",
      title: "Story — Alone on the stage",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'When the curtain opened, Daniel suddenly forgot all his words.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: problem, turning point, resolution",
        "Language: past tenses and feelings vocabulary",
        "Length: about 100 words"
      ],
      model: "When the curtain opened, Daniel suddenly forgot all his words. The lights were hot, the hall was full, and his mind was completely empty. Three hundred people waited. Then, from the side of the stage, he heard a tiny whisper: 'To be brave...' It was Mrs Cole, his teacher, holding the script. 'To be brave,' Daniel repeated — and like magic, the rest of the speech flooded back. He spoke louder and louder, and when he finished, the audience stood up and clapped. Afterwards his dad hugged him. 'You looked so confident!' Daniel smiled and decided some secrets belong to the stage."
    },
    {
      id: "pwx40",
      part: 2,
      type: "Story",
      title: "Story — The day the lift stopped",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'Between the fourth and fifth floors, the lift suddenly stopped moving.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: tension first, then a positive resolution",
        "Language: past tenses and conversation in direct speech",
        "Length: about 100 words"
      ],
      model: "Between the fourth and fifth floors, the lift suddenly stopped moving. Jae pressed every button. Nothing. The only other person inside was an old lady with a shopping bag. 'Well,' she said calmly, 'I have biscuits. Do you prefer chocolate or lemon?' While they waited for help, she told Jae stories about the building fifty years ago, when there was a dance hall on the top floor. Jae forgot to be scared. Forty minutes later, the doors opened and firefighters looked in — at two people laughing among biscuit crumbs. Jae visits Mrs Novak every Thursday now. He always takes the stairs."
    },
    {
      id: "pwx41",
      part: 2,
      type: "Story",
      title: "Story — Snow on the school trip",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'Nobody expected snow on the day of the school trip.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: an unexpected event handled with a clear ending",
        "Language: past tenses and weather vocabulary",
        "Length: about 100 words"
      ],
      model: "Nobody expected snow on the day of the school trip. The bus was supposed to take Class 8 to the science museum, but halfway up the mountain road, everything turned white. The driver stopped at a small village to wait, and the teacher looked worried — until the village children ran out with sledges. What followed was the greatest morning in Class 8 history: sledge races, a giant snowman with the teacher's scarf, and hot soup made by the driver's cousin, who lived there. They never reached the museum. On Monday, everyone had to write about 'what we learned'. Ben wrote one line: 'Snow days teach more than screens.'"
    },
    {
      id: "pwx42",
      part: 2,
      type: "Story",
      title: "Story — Grandpa's old map",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'In a drawer in Grandpa's desk, Maya found a map with a red cross on it.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: a small adventure with a warm ending",
        "Language: past tenses and place vocabulary",
        "Length: about 100 words"
      ],
      model: "In a drawer in Grandpa's desk, Maya found a map with a red cross on it. It showed the woods behind his house. Treasure! She grabbed a spade and followed the path, counting her steps like a real explorer. Under the tallest oak tree, exactly at the cross, she dug — and hit a metal box. Inside were old photos, a toy car and a letter: 'To whoever finds this. I buried it in 1975, aged ten. I hope the world is kind. Peter.' Maya ran home shouting. Grandpa Peter laughed until he cried. That evening, they buried a new box together."
    },
    {
      id: "pwx43",
      part: 2,
      type: "Story",
      title: "Story — The talent show surprise",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'Priya never planned to enter the talent show, but her friends had other ideas.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: reluctance, change and a rewarding ending",
        "Language: past tenses and feelings vocabulary",
        "Length: about 100 words"
      ],
      model: "Priya never planned to enter the talent show, but her friends had other ideas. They had secretly written her name on the list, because they had heard her singing in the music room when she thought nobody was listening. When the teacher called her name, Priya wanted to disappear. Her friends pushed her gently towards the stage. Her first notes were quiet and shaky. Then she closed her eyes, imagined the empty music room, and sang properly. When she opened her eyes, people were holding up their phone lights, waving them slowly. Priya didn't win the show that night. She won something better: she stopped hiding."
    },
    {
      id: "pwx44",
      part: 2,
      type: "Story",
      title: "Story — The borrowed camera",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'Alex promised to be careful with his sister's new camera.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: promise, problem and honest resolution",
        "Language: past tenses and reported promises",
        "Length: about 100 words"
      ],
      model: "Alex promised to be careful with his sister's new camera. And he was — until the duck. He was photographing birds by the pond when a duck flew straight at him. Alex jumped, slipped, and watched the camera fly into the water in slow motion. Disaster. He fished it out, but the screen stayed black. All the way home, he practised excuses: a thief, a storm, an earthquake. But when his sister opened the door, he simply told the truth and offered all his savings. She was angry for exactly one day. The repair cost less than his savings. The duck photo, amazingly, survived — and it's brilliant."
    },
    {
      id: "pwx45",
      part: 2,
      type: "Story",
      title: "Story — A knock at the window",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'During the online lesson, something knocked twice on Lena's window.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: curiosity, discovery and a light-hearted ending",
        "Language: past tenses and descriptive detail",
        "Length: about 100 words"
      ],
      model: "During the online lesson, something knocked twice on Lena's window. She lived on the third floor, so that was impossible. Knock, knock — again! She turned off her camera and pulled back the curtain. A parrot stood on the window ledge, looking at her with one eye. 'Hello!' it said clearly. Lena nearly fell off her chair. She opened the window, and the bird walked in like it owned the flat. A neighbour's poster in the lift solved the mystery: 'LOST: Charlie, green parrot, talks too much.' The reward was ten euros. Charlie's owner cried with happiness. Lena's teacher never believed her excuse."
    },
    {
      id: "pwx46",
      part: 2,
      type: "Story",
      title: "Story — The empty new school",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'On Kofi's first morning at his new school, the playground was strangely empty.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: confusion explained by a clear ending",
        "Language: past tenses and school vocabulary",
        "Length: about 100 words"
      ],
      model: "On Kofi's first morning at his new school, the playground was strangely empty. No shouting, no football, nobody. His stomach turned cold — was he late? Was it the wrong day? He checked the gate again: the right school, a normal Tuesday. Then he heard music coming from the sports hall. He followed it and opened the door onto a full hall, balloons everywhere, and a banner: 'HAPPY 100TH BIRTHDAY, GREENHILL SCHOOL!' The whole school was celebrating with cake for breakfast. A girl waved him over to her class's table. 'New boy! You picked the best possible day to start.' She was right."
    },
    {
      id: "pwx47",
      part: 2,
      type: "Story",
      title: "Story — The oldest runner",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'Everyone smiled when the old man arrived at the start line of the town race.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: expectations turned around by the ending",
        "Language: past tenses and sport vocabulary",
        "Length: about 100 words"
      ],
      model: "Everyone smiled when the old man arrived at the start line of the town race. He wore ancient shorts and shoes older than most of the runners. 'Good luck, grandad!' someone joked. The gun fired, and the crowd of young runners rushed past him. But the race was ten kilometres, and the day was hot. One by one, the fast starters slowed down, stopped, sat on walls. The old man never changed his speed — small, steady steps, kilometre after kilometre. He crossed the line in fourth place. A reporter asked his secret. 'Sixty years of practice,' he said. 'You lot are still beginners.'"
    },
    {
      id: "pwx48",
      part: 2,
      type: "Story",
      title: "Story — Two euros short",
      length: "about 100 words",
      task: "Write a story that begins with this sentence: 'At the front of the queue, Elif realised she didn't have enough money.' Write about 100 words.",
      checklist: [
        "Content: continue naturally from the opening sentence",
        "Organisation: embarrassing moment leading to a kind ending",
        "Language: past tenses and money vocabulary",
        "Length: about 100 words"
      ],
      model: "At the front of the queue, Elif realised she didn't have enough money. The birthday present for her mum — a blue scarf — cost twelve euros, and she had ten. Her face went red as she counted the coins again. Behind her, a tall boy from her school quietly put two euros on the counter. 'Pay me back whenever,' he said, and left before she could speak. On Monday, Elif found him and returned the money with a slice of birthday cake. They've been friends ever since. Her mum wears the blue scarf all winter, and she knows the whole story now. She calls it the two-euro scarf."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  WRITING = WRITING.concat(BANK);
})();
