/* PET Prep extra bank: listening week 5 */
(function () {
var BANK = [
  { id: "pet-lis5-01", title: "Announcement: Changes to the Museum Tour", kind: "monologue",
    script: "Good afternoon, visitors, and welcome to the City History Museum. Before this afternoon's guided tour begins, please listen to a few important announcements. First, the tour will start at a quarter past two instead of two o'clock, because our guide, Mr Adeyemi, has been delayed by traffic. We apologise for the short wait. While you wait, you are welcome to visit the photography exhibition on the ground floor, which is free today. Second, the tour route has changed this week. Normally we begin in the Roman gallery, but that room is closed for cleaning, so today the tour will begin upstairs in the Victorian street, which many visitors say is the best part of the museum anyway. You will still see the Roman coins, as the most important ones have been moved temporarily into the entrance hall. Third, photography is allowed everywhere except the painting gallery — flash can damage the older pictures, so please check your camera settings. The tour lasts about ninety minutes and finishes at the museum café, where tour members receive a twenty per cent discount on hot drinks this month — just show the sticker you were given with your ticket. Finally, please keep bags with you at all times, or leave large ones in the free lockers beside the main stairs. If you have any questions, our staff in the red T-shirts will be happy to help. Enjoy your visit.",
    questions: [
      { q: "Why will the tour start later than planned?", options: ["The guide is stuck in traffic.", "The museum opened late.", "The Roman gallery is flooded.", "Not enough visitors have arrived."], answer: 0, explanation: "Mr Adeyemi 'has been delayed by traffic', so the tour starts at 2:15." },
      { q: "Where will today's tour begin?", options: ["In the Roman gallery.", "In the Victorian street upstairs.", "In the museum café.", "In the painting gallery."], answer: 1, explanation: "The Roman gallery is closed for cleaning, so the tour 'will begin upstairs in the Victorian street'." },
      { q: "Where can visitors see the most important Roman coins today?", options: ["In the photography exhibition.", "In the lockers.", "In the entrance hall.", "In the Victorian street."], answer: 2, explanation: "The most important coins 'have been moved temporarily into the entrance hall'." },
      { q: "Where is photography NOT allowed?", options: ["In the entrance hall.", "In the Victorian street.", "On the ground floor.", "In the painting gallery."], answer: 3, explanation: "Photography is allowed 'everywhere except the painting gallery' because flash can damage old pictures." },
      { q: "How can tour members get cheaper hot drinks?", options: ["By showing the sticker from their ticket.", "By wearing a red T-shirt.", "By booking the next tour.", "By leaving a bag in a locker."], answer: 0, explanation: "Tour members get twenty per cent off if they 'show the sticker you were given with your ticket'." }
    ] },
  { id: "pet-lis5-02", title: "Interview: Working as a Weekend Lifeguard", kind: "dialogue",
    script: "Presenter: On today's programme we're meeting Jack, who's seventeen and works as a lifeguard at the Riverside Pool every weekend. Jack, how did you get into this?\nJack: Well, I've swum for the town club since I was eight, and when I turned sixteen my coach suggested I take the lifeguard training course. It was a full week during the summer holidays, with a written exam and a practical test at the end.\nPresenter: Was the course difficult?\nJack: The swimming part wasn't, but the first aid section really surprised me. There's a lot to remember, and you have to stay calm while you do everything in the right order. I actually failed the first aid test the first time and had to retake it two weeks later.\nPresenter: And now you work every weekend. What does the job actually involve?\nJack: People imagine we just sit on the tall chair watching the water, and that is the main part, honestly. But we also check the changing rooms, test the water quality every two hours, and set up lanes for the swimming club. The rule is you never take your eyes off the pool while you're on the chair — we swap positions every twenty minutes so nobody loses concentration.\nPresenter: Have you ever rescued anyone?\nJack: Only once, a little boy who jumped into the deep end after his ball. His dad reached the side before I even hit the water, but we followed the procedure anyway and he was fine. Mostly the job is about preventing problems before they happen — spotting the tired swimmer, stopping the running before someone slips.\nPresenter: Would you recommend it to other teenagers?\nJack: Definitely. The pay is decent, but it's more that people trust you. That changes how you see yourself.",
    questions: [
      { q: "Who suggested that Jack train as a lifeguard?", options: ["His father.", "His swimming coach.", "A pool manager.", "The radio presenter."], answer: 1, explanation: "When he turned sixteen, 'my coach suggested I take the lifeguard training course'." },
      { q: "What surprised Jack about the training course?", options: ["The length of the swimming test.", "The cost of the course.", "How much first aid he had to learn.", "How easy the written exam was."], answer: 2, explanation: "He says 'the first aid section really surprised me' — he even failed it the first time." },
      { q: "Why do lifeguards at the pool swap positions every twenty minutes?", options: ["So nobody loses concentration.", "So everyone can rest in the changing rooms.", "Because the chair is uncomfortable.", "To test the water quality."], answer: 0, explanation: "They swap 'every twenty minutes so nobody loses concentration' while watching the pool." },
      { q: "What happened in Jack's only rescue?", options: ["He pulled a boy's father from the deep end.", "The boy's father reached the side first.", "The boy was seriously hurt.", "Jack lost the boy's ball."], answer: 1, explanation: "His dad 'reached the side before I even hit the water', but they still followed the procedure." },
      { q: "According to Jack, what is the job mostly about?", options: ["Sitting and relaxing by the pool.", "Setting up lanes for the club.", "Earning as much money as possible.", "Preventing problems before they happen."], answer: 3, explanation: "He says 'mostly the job is about preventing problems before they happen'." }
    ] }
,
  {
    id: "pet-lis5-03",
    title: "Planning a Surprise Party",
    kind: "dialogue",
    script: "Lucy: Ben, have you got a minute? It's about Grandpa's seventieth birthday.\nBen: Of course. Are we still having the party at your house?\nLucy: That's the problem. Mum's painting the kitchen that week, so the house will be a mess. I phoned the community hall — it's free that Sunday afternoon, and it only costs twenty pounds.\nBen: That's cheaper than I expected. What about food? Shall we order pizza?\nLucy: I thought about that, but Grandpa doesn't really like it. Aunt Rosa offered to cook — she wants to make his favourite fish soup and an apple cake.\nBen: Perfect. Then I can spend my money on the present instead. Did you ask everyone about the photo album idea?\nLucy: Yes! Fourteen people have already sent me old photos. I just need one from your dad — the one from the fishing trip in 1998.\nBen: I'll scan it tonight and send it to you. And the most important thing: how do we get Grandpa to the hall without telling him?\nLucy: Uncle Marco will say he needs help choosing a new radio, and the shop is just across the street from the hall.\nBen: He'll believe that. Grandpa loves giving advice about radios. What time should everyone arrive?\nLucy: Guests at three, Grandpa at half past. And Ben — remember, not a word in the family group chat. Grandpa reads it secretly on Dad's phone!",
    questions: [
      { q: "Why can't the party be at Lucy's house?",
        options: ["The house is too small for the family", "Her mum will be painting the kitchen", "It costs too much to hold it there", "Grandpa lives too far away"],
        answer: 1,
        explanation: "Lucy says 'Mum's painting the kitchen that week, so the house will be a mess'." },
      { q: "Why did they decide not to order pizza?",
        options: ["It is too expensive", "Aunt Rosa refuses to eat it", "Grandpa doesn't really like it", "The hall doesn't allow hot food"],
        answer: 2,
        explanation: "Lucy thought about pizza, 'but Grandpa doesn't really like it'." },
      { q: "What present are they preparing for Grandpa?",
        options: ["A new radio", "A fishing rod", "An apple cake", "A photo album"],
        answer: 3,
        explanation: "Fourteen people have sent old photos for 'the photo album idea'." },
      { q: "How will Uncle Marco get Grandpa to the hall?",
        options: ["By asking for help choosing a new radio", "By inviting him for fish soup", "By taking him on a fishing trip", "By saying there is a photo exhibition"],
        answer: 0,
        explanation: "Uncle Marco 'will say he needs help choosing a new radio', in the shop across the street from the hall." },
      { q: "Why must they keep the plan out of the family group chat?",
        options: ["Ben often forgets to reply there", "Grandpa secretly reads it on Dad's phone", "Aunt Rosa is not a member of it", "The group chat has stopped working"],
        answer: 1,
        explanation: "Lucy warns: 'Grandpa reads it secretly on Dad's phone!'" }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.LISTENING = (window.LISTENING || []).concat(BANK);
})();
