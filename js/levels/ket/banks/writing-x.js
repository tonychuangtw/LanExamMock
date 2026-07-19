/* KET Prep extra bank: writing */
(function () {
  var BANK = [
    /* ---------- Part 1: Emails (24) ---------- */
    {
      id: "kwx01", part: 1, type: "Email", title: "Email — Cinema on Friday", length: "25+ words",
      task: "You want to go to the cinema with your friend Jo on Friday. Write an email to Jo. Say: 1. which film you want to see, 2. what time it starts, 3. where you can meet. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending (Hi Jo / See you)", "Language: correct present and future forms", "Length: 25 words or more"],
      model: "Hi Jo! Let's go to the cinema on Friday. I want to see the new space film. It starts at six o'clock. We can meet at the bus stop at five thirty. See you! Ben"
    },
    {
      id: "kwx02", part: 1, type: "Email", title: "Email — My new pet", length: "25+ words",
      task: "You have a new pet. Write an email to your friend Alex. Say: 1. what pet you have, 2. what its name is, 3. why you like it. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: correct present simple", "Length: 25 words or more"],
      model: "Hi Alex! I have a new pet now. It is a small black kitten and her name is Luna. I like her because she is funny and sleeps on my bed. Come and see her! Mia"
    },
    {
      id: "kwx03", part: 1, type: "Email", title: "Email — Thank you for the present", length: "25+ words",
      task: "Your friend Pat gave you a birthday present. Write an email to Pat. Say: 1. thank you, 2. why you like the present, 3. when you will use it. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: polite thanking phrases", "Length: 25 words or more"],
      model: "Hi Pat! Thank you very much for the football you gave me. I love it because it is my favourite colour, red. I will use it on Saturday in the park. Thanks again! Leo"
    },
    {
      id: "kwx04", part: 1, type: "Email", title: "Email — I can't come to your house", length: "25+ words",
      task: "You cannot visit your friend Sam tomorrow. Write an email to Sam. Say: 1. sorry you cannot come, 2. why you cannot come, 3. when you can come. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: apology phrases (I'm sorry, but...)", "Length: 25 words or more"],
      model: "Hi Sam! I'm sorry, but I can't come to your house tomorrow. I am ill and I must stay in bed. Can I come next Saturday? I hope you are well. Anna"
    },
    {
      id: "kwx05", part: 1, type: "Email", title: "Email — A picnic in the park", length: "25+ words",
      task: "You are planning a picnic on Sunday. Write an email to your friend Kim. Say: 1. where the picnic is, 2. what time it starts, 3. what food Kim can bring. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: correct future forms and 'Can you...?'", "Length: 25 words or more"],
      model: "Hi Kim! We are having a picnic in Green Park on Sunday. It starts at twelve o'clock, near the lake. Can you bring some sandwiches and apples? It will be fun! Tom"
    },
    {
      id: "kwx06", part: 1, type: "Email", title: "Email — My new school", length: "25+ words",
      task: "You started at a new school last week. Write an email to your friend Robin. Say: 1. what the school is like, 2. what your favourite subject is, 3. about a new friend. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: correct present simple and adjectives", "Length: 25 words or more"],
      model: "Hi Robin! My new school is big and really nice. My favourite subject is art, because the teacher is funny. I have a new friend called Maria. She sits next to me. Write soon! Ella"
    },
    {
      id: "kwx07", part: 1, type: "Email", title: "Email — Borrowing a bike", length: "25+ words",
      task: "You want to borrow your friend Charlie's bike. Write an email to Charlie. Say: 1. why you need the bike, 2. when you need it, 3. when you will give it back. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: polite requests (Can I...? / Please)", "Length: 25 words or more"],
      model: "Hi Charlie! Can I borrow your bike, please? My bike is broken and I want to ride to the lake on Saturday with my brother. I will give it back on Sunday morning. Thanks! Max"
    },
    {
      id: "kwx08", part: 1, type: "Email", title: "Email — Come to my football match", length: "25+ words",
      task: "You are playing in a football match next week. Write an email to your friend Nicky. Say: 1. when the match is, 2. where it is, 3. why you want Nicky to come. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: correct future forms and place words", "Length: 25 words or more"],
      model: "Hi Nicky! I am playing in a football match next Wednesday at four o'clock. It is at the school field. Please come and watch, because it is my first match! See you there. Dan"
    },
    {
      id: "kwx09", part: 1, type: "Email", title: "Email — A trip to the museum", length: "25+ words",
      task: "Your class is going to a museum on Thursday. Write an email to your friend Andy, who is in another class. Say: 1. where you are going, 2. how you will travel, 3. what you want to see there. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: going to / will for plans", "Length: 25 words or more"],
      model: "Hi Andy! On Thursday my class is going to the science museum in town. We will go by train. I want to see the big dinosaur and the old planes. I'm so excited! Lily"
    },
    {
      id: "kwx10", part: 1, type: "Email", title: "Email — I lost my jacket", length: "25+ words",
      task: "You think you left your jacket at your friend Jamie's house. Write an email to Jamie. Say: 1. what you lost, 2. what it looks like, 3. what Jamie should do if he finds it. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: colours and describing words", "Length: 25 words or more"],
      model: "Hi Jamie! I think I left my jacket at your house yesterday. It is blue with a white zip. If you find it, can you bring it to school tomorrow, please? Thank you! Sofia"
    },
    {
      id: "kwx11", part: 1, type: "Email", title: "Email — My holiday plans", length: "25+ words",
      task: "You are going on holiday next month. Write an email to your friend Chris. Say: 1. where you are going, 2. who you are going with, 3. one thing you will do there. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: going to for future plans", "Length: 25 words or more"],
      model: "Hi Chris! Next month I am going to Italy on holiday with my parents and my sister. We are going to swim in the sea every day. I will send you a postcard! Nina"
    },
    {
      id: "kwx12", part: 1, type: "Email", title: "Email — A new hobby", length: "25+ words",
      task: "You started a new hobby. Write an email to your friend Frankie. Say: 1. what your new hobby is, 2. when you do it, 3. why Frankie should try it too. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: present simple for routines", "Length: 25 words or more"],
      model: "Hi Frankie! I have a new hobby now: I play the guitar. I practise every evening after dinner. You should try it too, because it is fun and we can play songs together! Omar"
    },
    {
      id: "kwx13", part: 1, type: "Email", title: "Email — Help with homework", length: "25+ words",
      task: "You need help with your maths homework. Write an email to your friend Ricky. Say: 1. what homework you have, 2. why it is difficult for you, 3. when you can meet. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: asking for help politely", "Length: 25 words or more"],
      model: "Hi Ricky! Can you help me with the maths homework, please? It is about big numbers, and it is difficult for me because I was ill last week. Can we meet tomorrow after school? Thanks! Zoe"
    },
    {
      id: "kwx14", part: 1, type: "Email", title: "Email — Swimming on Saturday", length: "25+ words",
      task: "You want to go swimming with your friend Ash on Saturday. Write an email to Ash. Say: 1. where you want to go, 2. what time, 3. what Ash needs to bring. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: correct time phrases (at, on)", "Length: 25 words or more"],
      model: "Hi Ash! Do you want to go swimming on Saturday? Let's go to the new pool in town at ten o'clock. Bring your towel and some money for an ice cream after. See you! Jack"
    },
    {
      id: "kwx15", part: 1, type: "Email", title: "Email — My grandmother is visiting", length: "25+ words",
      task: "Your grandmother is visiting you this weekend, so you cannot play with your friend Billy. Write an email to Billy. Say: 1. who is visiting you, 2. what you will do with her, 3. when you can play with Billy. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: family words and future forms", "Length: 25 words or more"],
      model: "Hi Billy! I can't play this weekend because my grandmother is visiting us. We are going to cook cakes and look at old photos. Can we play on Monday after school? Sorry! Emma"
    },
    {
      id: "kwx16", part: 1, type: "Email", title: "Email — A film at my house", length: "25+ words",
      task: "You want to watch a film at your house with your friend Val. Write an email to Val. Say: 1. what day, 2. what film you want to watch, 3. what snacks you will have. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: invitations (Do you want to...?)", "Length: 25 words or more"],
      model: "Hi Val! Do you want to come to my house on Friday evening? We can watch the funny dog film on TV. My mum will make popcorn and we have orange juice. Please come! Adam"
    },
    {
      id: "kwx17", part: 1, type: "Email", title: "Email — I found your phone", length: "25+ words",
      task: "You found your friend Lou's phone at school. Write an email to Lou. Say: 1. what you found, 2. where you found it, 3. how Lou can get it back. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: past simple (found, was)", "Length: 25 words or more"],
      model: "Hi Lou! Good news: I found your phone today! It was under your desk in the classroom. I have it at my house now. You can come and get it this evening. Bye! Grace"
    },
    {
      id: "kwx18", part: 1, type: "Email", title: "Email — Our school concert", length: "25+ words",
      task: "You are singing in your school concert. Write an email to your friend Danny. Say: 1. when the concert is, 2. what you are doing in it, 3. how much a ticket costs. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: present continuous for arrangements", "Length: 25 words or more"],
      model: "Hi Danny! Our school concert is on Thursday at six o'clock. I am singing two songs with my class. A ticket costs three pounds. I hope you can come and watch me! Ruby"
    },
    {
      id: "kwx19", part: 1, type: "Email", title: "Email — A day at the beach", length: "25+ words",
      task: "Your family is going to the beach on Sunday and your friend Toni can come. Write an email to Toni. Say: 1. where you are going, 2. what time you will leave, 3. what Toni should bring. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: imperatives and future forms", "Length: 25 words or more"],
      model: "Hi Toni! My family is going to Sandy Beach on Sunday and you can come! We will leave at nine in the morning. Bring your swimming things and a hat. It will be great! Noah"
    },
    {
      id: "kwx20", part: 1, type: "Email", title: "Email — My broken arm", length: "25+ words",
      task: "You broke your arm last week. Write an email to your friend Bobby. Say: 1. what happened, 2. how you feel now, 3. what you cannot do. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: past simple and can't", "Length: 25 words or more"],
      model: "Hi Bobby! Last week I fell off my bike and broke my arm. I feel better now, but it still hurts a little. I can't play tennis for six weeks. Visit me soon! Amir"
    },
    {
      id: "kwx21", part: 1, type: "Email", title: "Email — The new pizza place", length: "25+ words",
      task: "You want to try the new pizza restaurant with your friend Jessie. Write an email to Jessie. Say: 1. where the restaurant is, 2. when you want to go, 3. why you want to go there. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: place phrases (next to, near)", "Length: 25 words or more"],
      model: "Hi Jessie! There is a new pizza restaurant next to the cinema. Do you want to go on Saturday at one o'clock? My cousin says the pizza is cheap and really tasty! Love, Carla"
    },
    {
      id: "kwx22", part: 1, type: "Email", title: "Email — Joining the chess club", length: "25+ words",
      task: "You joined the school chess club. Write an email to your friend Morgan. Say: 1. what club you joined, 2. when the club meets, 3. ask Morgan to join too. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: suggestions (Why don't you...?)", "Length: 25 words or more"],
      model: "Hi Morgan! I joined the school chess club last week. We meet every Tuesday at lunchtime in room five. Why don't you join too? Then we can play together. It's free! Best, Felix"
    },
    {
      id: "kwx23", part: 1, type: "Email", title: "Email — Rainy day plans", length: "25+ words",
      task: "You wanted to play tennis with your friend Casey tomorrow, but it is going to rain. Write an email to Casey. Say: 1. what the problem is, 2. what you can do instead, 3. what time to meet. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: weather words and suggestions", "Length: 25 words or more"],
      model: "Hi Casey! Bad news: it is going to rain tomorrow, so we can't play tennis. Let's play games at my house instead. Come at two o'clock. My mum can make hot chocolate! Sara"
    },
    {
      id: "kwx24", part: 1, type: "Email", title: "Email — Selling my old skateboard", length: "25+ words",
      task: "You want to sell your old skateboard, and your friend Micky wants one. Write an email to Micky. Say: 1. what you are selling, 2. how much it costs, 3. when Micky can see it. Write 25 words or more.",
      checklist: ["Content: answer all three points", "Organisation: greeting and ending", "Language: numbers and prices", "Length: 25 words or more"],
      model: "Hi Micky! I am selling my old skateboard because I got a new one. It is green and only ten pounds. You can come and see it after school on Friday. Interested? Theo"
    },
    /* ---------- Part 2: Stories (24) ---------- */
    {
      id: "kwx25", part: 2, type: "Story", title: "Story — The strange box", length: "about 35 words",
      task: "Look at this sentence: 'On Monday morning, Tim found a big box in front of his door.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "On Monday morning, Tim found a big box in front of his door. He opened it slowly. Inside there was a new bike! It was from his uncle in Canada. Tim rode it to school, smiling all the way."
    },
    {
      id: "kwx26", part: 2, type: "Story", title: "Story — The cat in the tree", length: "about 35 words",
      task: "Look at this sentence: 'Amy heard a strange noise coming from the old tree in the garden.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "Amy heard a strange noise coming from the old tree in the garden. She looked up and saw a little white cat. It couldn't get down. Amy's dad brought a ladder and saved it. Now the cat lives with them."
    },
    {
      id: "kwx27", part: 2, type: "Story", title: "Story — Late for school", length: "about 35 words",
      task: "Look at this sentence: 'When Ben woke up, the clock said nine o'clock.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "When Ben woke up, the clock said nine o'clock. School started at eight thirty! He ran downstairs without breakfast. But his mum laughed and said, 'It's Saturday, Ben!' He went back to bed, very happy."
    },
    {
      id: "kwx28", part: 2, type: "Story", title: "Story — The beach surprise", length: "about 35 words",
      task: "Look at this sentence: 'Lisa was walking on the beach when she saw something shiny in the sand.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "Lisa was walking on the beach when she saw something shiny in the sand. It was a silver watch. She took it to the beach café, and an old man was very happy. He gave her an ice cream to say thank you."
    },
    {
      id: "kwx29", part: 2, type: "Story", title: "Story — The wrong bus", length: "about 35 words",
      task: "Look at this sentence: 'Paul got on the bus and sat down, but soon he saw a problem.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "Paul got on the bus and sat down, but soon he saw a problem. It was the wrong bus! It went to the sea, not to town. Paul phoned his mum, and in the end they had a nice day at the beach."
    },
    {
      id: "kwx30", part: 2, type: "Story", title: "Story — The little dog at the market", length: "about 35 words",
      task: "Look at this sentence: 'At the market, a small brown dog started to follow Clara.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "At the market, a small brown dog started to follow Clara. He looked hungry, so she gave him some bread. Then a girl ran up and shouted, 'Coco!' It was her dog. She thanked Clara, and they became friends."
    },
    {
      id: "kwx31", part: 2, type: "Story", title: "Story — The football through the window", length: "about 35 words",
      task: "Look at this sentence: 'Jake kicked the ball hard, and it flew over the garden wall.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "Jake kicked the ball hard, and it flew over the garden wall. He heard a loud noise. Oh no, the neighbour's window! Jake said sorry and helped Mr Brown clean up. Then he paid for the window with his pocket money."
    },
    {
      id: "kwx32", part: 2, type: "Story", title: "Story — A rainy camping night", length: "about 35 words",
      task: "Look at this sentence: 'In the middle of the night, it started to rain on the tent.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "In the middle of the night, it started to rain on the tent. Water came inside! Dad and I ran to the car and slept there. In the morning, the sun came out and we laughed about our wet night."
    },
    {
      id: "kwx33", part: 2, type: "Story", title: "Story — The empty classroom", length: "about 35 words",
      task: "Look at this sentence: 'When Maya walked into the classroom, nobody was there.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "When Maya walked into the classroom, nobody was there. Where was everybody? Then she remembered: the class was in the library today! She ran there fast. The teacher smiled and said, 'You're only five minutes late.'"
    },
    {
      id: "kwx34", part: 2, type: "Story", title: "Story — The birthday cake problem", length: "about 35 words",
      task: "Look at this sentence: 'Dad opened the oven, and the birthday cake looked very strange.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "Dad opened the oven, and the birthday cake looked very strange. It was flat and black! We had no time to make another one. So we bought ice cream and put a candle on it. Grandpa said it was his best birthday ever."
    },
    {
      id: "kwx35", part: 2, type: "Story", title: "Story — The talking parrot", length: "about 35 words",
      task: "Look at this sentence: 'In the pet shop, a green parrot suddenly said Ella's name.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "In the pet shop, a green parrot suddenly said Ella's name. Ella was very surprised! The shop man laughed and said, 'He hears me talking to my daughter Ella every day.' Ella visited the funny parrot every Saturday after that."
    },
    {
      id: "kwx36", part: 2, type: "Story", title: "Story — Snow in the morning", length: "about 35 words",
      task: "Look at this sentence: 'Oliver looked out of the window and saw that everything was white.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "Oliver looked out of the window and saw that everything was white. Snow! School was closed, so he called his friends. They made a big snowman with a carrot nose. It was the best Tuesday of the winter."
    },
    {
      id: "kwx37", part: 2, type: "Story", title: "Story — The lost ticket", length: "about 35 words",
      task: "Look at this sentence: 'At the station, Sophie put her hand in her pocket, but the ticket was not there.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "At the station, Sophie put her hand in her pocket, but the ticket was not there. She looked everywhere. Then a boy called, 'Excuse me! This fell from your bag.' It was her ticket. Sophie thanked him and caught her train."
    },
    {
      id: "kwx38", part: 2, type: "Story", title: "Story — The best goal", length: "about 35 words",
      task: "Look at this sentence: 'It was the last minute of the match, and the score was one all.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "It was the last minute of the match, and the score was one all. Then Marco got the ball. He ran past two players and kicked it hard. Goal! His team won, and everyone shouted his name."
    },
    {
      id: "kwx39", part: 2, type: "Story", title: "Story — Grandpa's old photo", length: "about 35 words",
      task: "Look at this sentence: 'Inside the old book, Nina found a photo of a young man.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "Inside the old book, Nina found a photo of a young man. She showed it to her mum. 'That's Grandpa when he was twenty!' Mum said. That evening, Grandpa told them wonderful stories about the photo."
    },
    {
      id: "kwx40", part: 2, type: "Story", title: "Story — The wrong bag", length: "about 35 words",
      task: "Look at this sentence: 'After sports class, Harry took a blue bag, but it was not his.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "After sports class, Harry took a blue bag, but it was not his. At home he found girls' shoes inside! The next day he gave the bag to his classmate Lena. She had his bag too. They laughed a lot."
    },
    {
      id: "kwx41", part: 2, type: "Story", title: "Story — A knock at night", length: "about 35 words",
      task: "Look at this sentence: 'Late in the evening, someone knocked at the window.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "Late in the evening, someone knocked at the window. I was afraid, but I looked out. It was only a tree in the wind! My dad cut the branch the next day, and I slept well again."
    },
    {
      id: "kwx42", part: 2, type: "Story", title: "Story — The school cooking day", length: "about 35 words",
      task: "Look at this sentence: 'On cooking day at school, Ryan forgot to bring the eggs.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "On cooking day at school, Ryan forgot to bring the eggs. He was very sad. But his friend Kate had six eggs, and she gave him two. Their cakes were the best in the class, and they shared them."
    },
    {
      id: "kwx43", part: 2, type: "Story", title: "Story — The bird in the kitchen", length: "about 35 words",
      task: "Look at this sentence: 'When Mum opened the kitchen window, a little bird flew inside.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "When Mum opened the kitchen window, a little bird flew inside. It sat on the fridge and sang. The cat watched it, very interested! Mum opened the door wide, and the bird flew out into the garden again."
    },
    {
      id: "kwx44", part: 2, type: "Story", title: "Story — First day at the pool", length: "about 35 words",
      task: "Look at this sentence: 'Anna stood next to the swimming pool and felt very nervous.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "Anna stood next to the swimming pool and felt very nervous. It was her first lesson. The teacher held her hands, and she kicked her legs. After an hour, she could swim two metres! She felt like a champion."
    },
    {
      id: "kwx45", part: 2, type: "Story", title: "Story — The old key", length: "about 35 words",
      task: "Look at this sentence: 'Under his grandmother's sofa, Sam found a small gold key.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "Under his grandmother's sofa, Sam found a small gold key. 'What does it open?' he asked. Grandmother smiled and took out an old wooden box. Inside were letters from Grandfather and a photo of their wedding day."
    },
    {
      id: "kwx46", part: 2, type: "Story", title: "Story — The quiet library", length: "about 35 words",
      task: "Look at this sentence: 'The library was quiet until a phone started to ring loudly.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "The library was quiet until a phone started to ring loudly. Everybody looked around. Then the librarian's face went red. It was her phone! She said sorry, and everyone laughed quietly behind their books."
    },
    {
      id: "kwx47", part: 2, type: "Story", title: "Story — The ice cream van", length: "about 35 words",
      task: "Look at this sentence: 'Ben heard the music of the ice cream van and ran outside.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: events in a clear order", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "Ben heard the music of the ice cream van and ran outside. But he had no money! The ice cream man smiled and said, 'You helped me push my van last week. This one is free.' It was chocolate, Ben's favourite."
    },
    {
      id: "kwx48", part: 2, type: "Story", title: "Story — The surprise visitor", length: "about 35 words",
      task: "Look at this sentence: 'When Lucy came home from school, there was a big red car outside her house.' Write a story that begins with this sentence. Write about 35 words.",
      checklist: ["Content: continue the story from the first sentence", "Organisation: a clear beginning, middle and end", "Language: simple past tense is correct", "Length: about 35 words"],
      model: "When Lucy came home from school, there was a big red car outside her house. She opened the door slowly. 'Surprise!' It was her aunt from Australia! She stayed for two weeks, and every day was fun."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  WRITING = WRITING.concat(BANK);
})();
