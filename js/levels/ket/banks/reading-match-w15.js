/* KET Prep bank: Reading multiple matching (A2) — wave 15 */
(function () {
var BANK = [
  {
    id: "ket-rmatch15-01",
    title: "Four People Talk About Food They Do Not Eat",
    sections: [
      { label: "A", text: "Nadia: I cannot eat nuts and I have known this since I was two, when I was in hospital for a night. It is not a preference and I have to ask in every restaurant, every time, which some people find tiring and which is not optional for me. Most places are extremely good about it now, which was not true when I was small." },
      { label: "B", text: "Tom: I do not eat meat and I have not since I was fifteen, which is nine years. My family found it difficult for about six months and then stopped noticing. I do not talk about it unless somebody asks, because I decided early that I did not want to be the person at the table who has opinions." },
      { label: "C", text: "Ines: I do not like fish and I have tried it eleven times, deliberately, over about ten years, because I did not want to be somebody who says they do not like something they have not eaten since childhood. I still do not like it. I now say so without any explanation and nobody has ever minded." },
      { label: "D", text: "Ravi: I stopped drinking coffee two years ago after about eleven years of four cups a day. I did not sleep well and a doctor mentioned it as one possible reason among several. It took eleven days to stop feeling terrible and I now sleep about an hour longer, and I still like the smell of it." }
    ],
    questions: [
      { q: "Who has a medical reason?", answer: 0, explanation: "A: Nadia cannot eat nuts and was hospitalised as a child." },
      { q: "Who made a choice as a teenager?", answer: 1, explanation: "B: Tom stopped eating meat at fifteen." },
      { q: "Who tested their dislike repeatedly?", answer: 2, explanation: "C: Ines tried fish eleven times." },
      { q: "Who gave up a drink?", answer: 3, explanation: "D: Ravi stopped drinking coffee." },
      { q: "Who must ask about it every time they eat out?", answer: 0, explanation: "A: Nadia asks in every restaurant." },
      { q: "Who deliberately avoids discussing it?", answer: 1, explanation: "B: Tom does not talk about it unless asked." },
      { q: "Who felt unwell for a period after stopping?", answer: 3, explanation: "D: It took eleven days to stop feeling terrible." },
      { q: "Who no longer explains their choice?", answer: 2, explanation: "C: Ines says so without any explanation." },
      { q: "Whose family took time to adjust?", answer: 1, explanation: "B: Tom's family found it difficult for six months." },
      { q: "Who mentions sleeping better?", answer: 3, explanation: "D: Ravi sleeps about an hour longer." }
    ]
  },
  {
    id: "ket-rmatch15-02",
    title: "Four People Talk About the Sea",
    sections: [
      { label: "A", text: "Bea: I have lived four hundred metres from the sea my whole life and I look at it about twice a week, which people who visit find impossible to believe. It is like a wall or a road: it is simply there. When I went to live inland for a year at nineteen I did not miss it and I noticed the silence." },
      { label: "B", text: "Kofi: I saw the sea for the first time at twenty-six, which is not unusual in the country I grew up in and which surprises everybody here. I stood and looked at it for about half an hour and did not say anything, and my friend, who had seen it a thousand times, waited and did not ask me any questions." },
      { label: "C", text: "Marta: My father worked on boats and my grandfather did, and I do not go on the sea at all. I swim in it in July and that is all. My father did not want me to work on it and said so directly when I was about fourteen, which some people would find sad and which I understood completely." },
      { label: "D", text: "Sam: I photograph the same stretch of coast about four times a month and have done for six years. It is never the same twice, which sounds like something people say and is a fact: the light, the tide, the weather and the season give about four hundred combinations and I have not had two identical mornings." }
    ],
    questions: [
      { q: "Who has always lived near the sea?", answer: 0, explanation: "A: Bea has lived four hundred metres from it." },
      { q: "Who saw the sea late in life?", answer: 1, explanation: "B: Kofi first saw it at twenty-six." },
      { q: "Whose family worked at sea?", answer: 2, explanation: "C: Marta's father and grandfather worked on boats." },
      { q: "Who photographs the coast?", answer: 3, explanation: "D: Sam photographs it four times a month." },
      { q: "Who did not miss it when away?", answer: 0, explanation: "A: Bea did not miss it during a year inland." },
      { q: "Who was given time by a friend?", answer: 1, explanation: "B: His friend waited and asked no questions." },
      { q: "Who was told not to follow the family occupation?", answer: 2, explanation: "C: Marta's father did not want her to work on the sea." },
      { q: "Who says it is never the same?", answer: 3, explanation: "D: Sam has not had two identical mornings." },
      { q: "Who swims in the sea only in summer?", answer: 2, explanation: "C: Marta swims in it in July and that is all." },
      { q: "Who compares the sea to an everyday object?", answer: 0, explanation: "A: Bea compares it to a wall or a road." }
    ]
  },
  {
    id: "ket-rmatch15-03",
    title: "Four People Talk About a Club They Belong To",
    sections: [
      { label: "A", text: "Ola: I am in a walking club with about forty members and an average age of about sixty-two. I am twenty-four and I joined by accident, because I met two of them on a path and they invited me. They walk faster than I expected and they know the name of everything, and I have learned more about this county in a year than in the previous twenty-three." },
      { label: "B", text: "Ivan: I belong to a chess club that meets on Thursdays in a room above a shop. There are usually eleven or twelve of us and we have no committee, no membership fee and no rules except that the room must be left tidy. It has existed since 1998 and nobody has ever written anything down." },
      { label: "C", text: "Lena: I am in a choir of about sixty people and I cannot read music. Nobody in that choir needs to: we learn everything by ear, in parts, over about six weeks per piece. Four of us joined in the same year and all four of us said the same thing in the first month, which is that we would not last." },
      { label: "D", text: "Ben: I run a small club at school for people who repair things: bicycles, clothes, small electrical items. There are nine of us and we meet on Wednesdays. Two teachers supervise and neither of them can repair anything, which they both say cheerfully, and which is the reason the students do all of it." }
    ],
    questions: [
      { q: "Who is much younger than the other members?", answer: 0, explanation: "A: Ola is twenty-four in a club averaging sixty-two." },
      { q: "Whose club has no formal organisation?", answer: 1, explanation: "B: No committee, fee or rules." },
      { q: "Who belongs to a large musical group?", answer: 2, explanation: "C: Lena's choir has about sixty people." },
      { q: "Who organises a club?", answer: 3, explanation: "D: Ben runs the repair club." },
      { q: "Who joined by chance?", answer: 0, explanation: "A: Ola met two members on a path." },
      { q: "Whose club has existed since the 1990s?", answer: 1, explanation: "B: The chess club has existed since 1998." },
      { q: "Who cannot read music?", answer: 2, explanation: "C: Lena cannot read music and nobody needs to." },
      { q: "Whose supervisors have no relevant skill?", answer: 3, explanation: "D: Neither teacher can repair anything." },
      { q: "Who thought they would not continue?", answer: 2, explanation: "C: All four said they would not last." },
      { q: "Who has learned a lot about the local area?", answer: 0, explanation: "A: Ola has learned more about the county in a year." }
    ]
  },
  {
    id: "ket-rmatch15-04",
    title: "Four People Talk About Their Earliest Memory",
    sections: [
      { label: "A", text: "Sofia: Mine is a kitchen floor, from below, with a table above me and somebody's shoes. I am told I was about two and a half and that we moved out of that house when I was three, so it cannot be later than that. I do not remember anybody in it and I remember the pattern on the floor exactly." },
      { label: "B", text: "Callum: Mine is my sister being brought home, which makes me four years and one month old exactly, and that is why I trust it more than most people trust their first memory. What I remember is being told to sit on a chair and wait, and the waiting, and not the baby at all." },
      { label: "C", text: "Nour: I have a memory of being on a beach at about three which I now think is not mine. There is a photograph of that afternoon that I have seen perhaps two hundred times, and I cannot tell whether I am remembering the day or the photograph, and my mother says I was asleep for most of it." },
      { label: "D", text: "Tobias: Mine is a smell rather than a picture: the inside of my grandfather's car, which was a mixture of old wool and something he kept in the door. He sold that car in 2011 and I was four. I have smelled something similar twice since, both times in other people's cars, and both times it stopped me completely." }
    ],
    questions: [
      { q: "Whose memory is of a floor?", answer: 0, explanation: "A: Sofia remembers a kitchen floor from below." },
      { q: "Who can date their memory exactly?", answer: 1, explanation: "B: His sister's arrival dates it precisely." },
      { q: "Who doubts their memory is real?", answer: 2, explanation: "C: Nour thinks it may come from a photograph." },
      { q: "Whose memory is a smell?", answer: 3, explanation: "D: Tobias remembers the smell of a car." },
      { q: "Who remembers waiting rather than the event?", answer: 1, explanation: "B: He remembers the waiting, not the baby." },
      { q: "Whose parent contradicts the memory?", answer: 2, explanation: "C: Nour's mother says she was asleep." },
      { q: "Who has experienced the same sensation since?", answer: 3, explanation: "D: He has smelled something similar twice." },
      { q: "Who uses a house move to date the memory?", answer: 0, explanation: "A: They moved out when she was three." },
      { q: "Who remembers a detail very precisely?", answer: 0, explanation: "A: She remembers the pattern on the floor exactly." },
      { q: "Who mentions a photograph seen many times?", answer: 2, explanation: "C: She has seen it perhaps two hundred times." }
    ]
  },
  {
    id: "ket-rmatch15-05",
    title: "Four People Talk About Handwriting",
    sections: [
      { label: "A", text: "Ellie: Mine is bad and I have stopped apologising for it. I write about four things a week by hand and everything else is typed, and I have decided that spending time on something I do four times a week is not sensible. My grandmother, whose handwriting is beautiful, wrote perhaps forty letters a week for fifty years." },
      { label: "B", text: "Marc: I write everything by hand first, including things that will be typed later, because I think differently with a pen. It is slower and that is the point: at typing speed I write down the first thing I think of and at writing speed I have time to decide whether it is any good." },
      { label: "C", text: "Aisha: I changed my handwriting deliberately at nineteen. I did not like it, I found four examples I did like, and I practised for about twenty minutes a day for two months, which sounds obsessive and took about ten hours in total. It is now completely different and nobody has ever mentioned it." },
      { label: "D", text: "Dev: I am left-handed and I was taught by a teacher who was left-handed, which I now know was lucky, because she showed me how to hold the paper at an angle so that my hand does not go through what I have just written. Two other left-handed people in my year were never shown that." }
    ],
    questions: [
      { q: "Who has poor handwriting and accepts it?", answer: 0, explanation: "A: Ellie has stopped apologising for it." },
      { q: "Who prefers writing by hand first?", answer: 1, explanation: "B: Marc writes everything by hand first." },
      { q: "Who changed their handwriting on purpose?", answer: 2, explanation: "C: Aisha changed hers at nineteen." },
      { q: "Who mentions being left-handed?", answer: 3, explanation: "D: Dev is left-handed." },
      { q: "Who says slowness is an advantage?", answer: 1, explanation: "B: At writing speed he has time to decide." },
      { q: "Who compares themselves with a relative?", answer: 0, explanation: "A: Ellie compares herself with her grandmother." },
      { q: "Who practised for months?", answer: 2, explanation: "C: Aisha practised twenty minutes a day for two months." },
      { q: "Who was taught a practical technique?", answer: 3, explanation: "D: He was shown how to angle the paper." },
      { q: "Whose change was never noticed by others?", answer: 2, explanation: "C: Nobody has ever mentioned it." },
      { q: "Who mentions others who were not helped?", answer: 3, explanation: "D: Two other left-handed students were never shown." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = (window.READING.match || []).concat(BANK);
})();
