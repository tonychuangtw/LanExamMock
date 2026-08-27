/* KET Prep bank: Reading multiple matching (A2) — wave 8 */
(function () {
var BANK = [
  {
    id: "ket-rmatch8-01",
    title: "Four People Talk About Their First Job",
    sections: [
      { label: "A", text: "Leo: My first job was washing up in a small restaurant on Friday and Saturday evenings. I was sixteen and I worked from six until eleven. It was hot, my hands were always wet and I was tired at school on Monday. I learned two things: how fast a person can work when they have to, and that the people in a kitchen look after each other more than any group I have been in since." },
      { label: "B", text: "Anna: I delivered leaflets for a shop when I was fourteen, which is the youngest age you can work here. Four hundred houses, two afternoons a week, seven pounds an afternoon. It is very boring work and it is completely alone, and I did it for nine months and then stopped because the money was too little for the time." },
      { label: "C", text: "Petros: I worked in my aunt's shop on Saturdays for two years. She paid me properly, which some people were surprised about, and she was stricter with me than with anybody else because she did not want people to say she was easy on family. I learned to use the till, to count money and to say no to people politely." },
      { label: "D", text: "Yasmin: My first job is the one I have now, in a garden centre at weekends. I started in March. The best part is that I am outside for most of it and the worst part is the first hour on a cold morning. I have learned the names of about forty plants and I could not name four in February." }
    ],
    questions: [
      { q: "Who worked in the evening?", answer: 0, explanation: "A: Leo worked from six until eleven." },
      { q: "Who worked alone?", answer: 1, explanation: "B: Anna says the work is completely alone." },
      { q: "Who worked for a relative?", answer: 2, explanation: "C: Petros worked in his aunt's shop." },
      { q: "Who still has this job?", answer: 3, explanation: "D: Yasmin's first job is the one she has now." },
      { q: "Who says the pay was too low?", answer: 1, explanation: "B: Anna stopped because the money was too little." },
      { q: "Who was treated more strictly than others?", answer: 2, explanation: "C: His aunt was stricter with him than with anybody else." },
      { q: "Who found the work physically uncomfortable?", answer: 0, explanation: "A: Leo mentions the heat and wet hands." },
      { q: "Who has learned a lot of names?", answer: 3, explanation: "D: Yasmin has learned about forty plant names." },
      { q: "Who mentions the people they worked with?", answer: 0, explanation: "A: Leo says kitchen staff look after each other." },
      { q: "Who started at fourteen?", answer: 1, explanation: "B: Anna was fourteen, the youngest legal age." }
    ]
  },
  {
    id: "ket-rmatch8-02",
    title: "Four Students Talk About Music Lessons",
    sections: [
      { label: "A", text: "Bea: I have played the violin since I was six and I am now seventeen, which is eleven years. I practise for about twenty minutes a day, which is not very much, and I have never once wanted to stop. I play in a group of about thirty people on Thursday evenings and that group is the reason I still play." },
      { label: "B", text: "Ravi: I had piano lessons for two years and stopped when I was thirteen. I did not enjoy them and I did not practise, and my parents let me stop, which some of my friends' parents would not have done. I can still read music, which is useful now because I sing in a choir at school." },
      { label: "C", text: "Nour: I started the guitar at fifteen, which is late, and I taught myself from videos for a year before I had any lessons at all. My teacher had to correct the way I hold my left hand, which took about two months and which was much harder than learning something new would have been." },
      { label: "D", text: "Finn: I play the drums, which is the loudest instrument and the hardest one to practise in a house. I practise at school in a room with three doors between me and everybody else. My neighbours have never complained because they have never heard me, and my family have only heard me twice, at concerts." }
    ],
    questions: [
      { q: "Who has played for the longest?", answer: 0, explanation: "A: Bea has played the violin for eleven years." },
      { q: "Who gave up lessons?", answer: 1, explanation: "B: Ravi stopped when he was thirteen." },
      { q: "Who taught themselves first?", answer: 2, explanation: "C: Nour learned from videos for a year." },
      { q: "Who cannot practise at home?", answer: 3, explanation: "D: Finn practises at school." },
      { q: "Who plays with a large group?", answer: 0, explanation: "A: Bea plays with about thirty people." },
      { q: "Who still uses one skill from those lessons?", answer: 1, explanation: "B: Ravi can still read music and sings in a choir." },
      { q: "Who had to correct a bad habit?", answer: 2, explanation: "C: Nour's left hand position had to be corrected." },
      { q: "Whose family rarely hear them play?", answer: 3, explanation: "D: Finn's family have heard him twice." },
      { q: "Who practises for a short time each day?", answer: 0, explanation: "A: Bea practises about twenty minutes a day." },
      { q: "Who started an instrument later than most?", answer: 2, explanation: "C: Nour started the guitar at fifteen." }
    ]
  },
  {
    id: "ket-rmatch8-03",
    title: "Four People Talk About a Favourite Place",
    sections: [
      { label: "A", text: "Sofia: Mine is a bench at the top of the hill behind our town. It takes about twenty-five minutes to walk up and you can see the whole town, the river and, on a clear day, the hills on the other side. I go about once a fortnight, usually alone, and I have never once seen more than two other people there." },
      { label: "B", text: "Hugo: The public library, and specifically the corner on the first floor by the window. I go after school about three days a week and do my homework there, because at home there are three younger children and a television. The librarians know me and one of them keeps books for me that she thinks I will like." },
      { label: "C", text: "Mira: My grandmother's kitchen, which is small and always too warm and where four people can sit if two of them do not mind being near the cooker. I have eaten more meals in that room than anywhere except my own house, and everything important that this family has ever discussed has been discussed at that table." },
      { label: "D", text: "Sam: A beach about forty minutes from here, in winter rather than summer. In August there are two thousand people on it and in January there are about six, and it is the same beach and it is not the same place at all. I go with my father four or five times between November and March." }
    ],
    questions: [
      { q: "Whose favourite place is outdoors and high up?", answer: 0, explanation: "A: Sofia's bench is at the top of a hill." },
      { q: "Who goes somewhere to work?", answer: 1, explanation: "B: Hugo does his homework at the library." },
      { q: "Whose place belongs to a relative?", answer: 2, explanation: "C: Mira's place is her grandmother's kitchen." },
      { q: "Who prefers a place in winter?", answer: 3, explanation: "D: Sam prefers the beach in winter." },
      { q: "Who goes there with a parent?", answer: 3, explanation: "D: Sam goes with his father." },
      { q: "Who says it is usually empty?", answer: 0, explanation: "A: Sofia has never seen more than two other people." },
      { q: "Who goes there because home is noisy?", answer: 1, explanation: "B: Hugo has three younger siblings and a television at home." },
      { q: "Who mentions important family conversations?", answer: 2, explanation: "C: Everything important has been discussed at that table." },
      { q: "Who is known by the staff there?", answer: 1, explanation: "B: The librarians know Hugo." },
      { q: "Who describes the same place being different at different times?", answer: 3, explanation: "D: Sam contrasts August with January." }
    ]
  },
  {
    id: "ket-rmatch8-04",
    title: "Four People Talk About Mornings",
    sections: [
      { label: "A", text: "Ola: I get up at ten past six and I like it. The house is quiet, nobody speaks to me for about forty minutes, and I do my reading for school then rather than in the evening when I am tired. My family think this is strange and two of them have tried it and neither of them lasted a week." },
      { label: "B", text: "Dan: I get up as late as I possibly can, which is twenty past seven, and I leave the house at twenty-five to eight. Everything is prepared the night before: my bag, my clothes and my breakfast, which is the same six days a week. If anything goes wrong at all I am late, and I am late about once a month." },
      { label: "C", text: "Yuki: I share a bathroom with three other people and the whole morning is arranged around that. We have a list on the door with times on it, which sounds ridiculous and which was my mother's idea and which works. I have the bathroom from ten to seven until five past, which is fifteen minutes." },
      { label: "D", text: "Tom: I do not eat breakfast at home. I eat on the bus, which my grandmother says is terrible and which means I get twenty more minutes in bed. I take a sandwich made the night before and a drink, and I have done this since Year 9, and I have never once been late in three years." }
    ],
    questions: [
      { q: "Who gets up earliest?", answer: 0, explanation: "A: Ola gets up at ten past six." },
      { q: "Who gets up as late as possible?", answer: 1, explanation: "B: Dan gets up at twenty past seven." },
      { q: "Who shares a bathroom with several people?", answer: 2, explanation: "C: Yuki shares with three other people." },
      { q: "Who eats breakfast away from home?", answer: 3, explanation: "D: Tom eats on the bus." },
      { q: "Who uses the early morning to study?", answer: 0, explanation: "A: Ola does school reading then." },
      { q: "Who prepares everything the night before?", answer: 1, explanation: "B: Dan prepares his bag, clothes and breakfast." },
      { q: "Who follows a written timetable at home?", answer: 2, explanation: "C: Yuki's family has a list on the bathroom door." },
      { q: "Who has never been late?", answer: 3, explanation: "D: Tom has never been late in three years." },
      { q: "Whose family have tried and failed to copy them?", answer: 0, explanation: "A: Two of Ola's family tried and did not last a week." },
      { q: "Who is occasionally late?", answer: 1, explanation: "B: Dan is late about once a month." }
    ]
  },
  {
    id: "ket-rmatch8-05",
    title: "Four People Talk About Their Neighbours",
    sections: [
      { label: "A", text: "Rosa: We have lived in this house for eleven years and I know the names of four neighbours out of about twelve. That sounds bad and it is normal for this street. The ones I do know are the ones with dogs, because everybody with a dog talks to everybody else with a dog, which is a rule I did not know before we had one." },
      { label: "B", text: "Ken: I live in a block of nine flats and there is a group message with everybody in it. It is used about four times a month, mostly about the bins and about the door at the front that does not always lock. Two people organised a barbecue in July and seven of the nine came." },
      { label: "C", text: "Amara: Our next-door neighbour is ninety-one and lives alone, and my mother goes in every evening at about seven for ten minutes. She has done that for four years. It is not arranged and nobody calls it anything, and if my mother is away my father goes instead, and if both of them are away I go. She has a key and we have hers, and neither family has ever mentioned that either." },
      { label: "D", text: "Nils: I have a neighbour I have never spoken to in six years. We nod. He goes to work at the same time as my father and they have nodded at each other about a thousand times. Last winter my father cleared the snow from both paths and the man came out and said thank you and that was the whole conversation." }
    ],
    questions: [
      { q: "Who knows only a few neighbours by name?", answer: 0, explanation: "A: Rosa knows four out of about twelve." },
      { q: "Who is in a group message with neighbours?", answer: 1, explanation: "B: Ken's block has a group message." },
      { q: "Whose family checks on an older neighbour?", answer: 2, explanation: "C: Amara's mother goes in every evening." },
      { q: "Who has never had a conversation with a neighbour?", answer: 3, explanation: "D: Nils has never spoken to him in six years." },
      { q: "Who says having a dog changed things?", answer: 0, explanation: "A: People with dogs talk to each other." },
      { q: "Who mentions a shared event?", answer: 1, explanation: "B: Two people organised a barbecue in July." },
      { q: "Whose arrangement has no name and no plan?", answer: 2, explanation: "C: It is not arranged and nobody calls it anything." },
      { q: "Who describes a very short conversation?", answer: 3, explanation: "D: The thank you after the snow was the whole conversation." },
      { q: "Who mentions a practical problem in the building?", answer: 1, explanation: "B: The front door does not always lock." },
      { q: "Who says another family member takes over sometimes?", answer: 2, explanation: "C: Amara's father goes if her mother is away." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
