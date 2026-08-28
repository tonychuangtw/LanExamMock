/* 版本紀錄（新版在最上面）。每次改版在最上方加一條：{ v, date, items: [...] }
 * 站內 UI 全英文（沉浸式），版本說明也用英文。 */
window.APP_VERSIONS = [
  {
    v: "v40", date: "2026-08-29", items: [
      "\ud83d\udcd5 Recovered questions are now labelled honestly. For a day recorded before question-by-question logging existed, only what went into the mistake book can be brought back — so those appear in their own “Recovered — the ones you missed that day” section, with a note explaining why every one of them is marked wrong, and they no longer drag down that day’s score."
    ]
  },
  {
    v: "v39", date: "2026-08-29", items: [
      "\ud83d\udd01 Everything in a day’s record can be done again. Each section under Review → What you did now has “Do these N again”, and where something was missed, “Just the N I got wrong” — not just the word lists.",
      "\ud83d\udcda The Review Test now draws on everything you did that day. Use of English, Reading, Listening and mistake-book practice you did on your own count towards the day you tick, not only the daily mission; a day with practice but no daily mission can now be picked too.",
      "\ud83d\udcc5 Days that only kept a score still appear in What you did, and practice done before question-by-question logging existed is filled in from the mistake book, so a day is never silently missing.",
      "\ud83d\udcd6 The read-the-explanation check no longer repeats itself: once a sentence has been asked about, it is not asked again for two weeks, so a familiar explanation lets you move straight on."
    ]
  },
  {
    v: "v38", date: "2026-08-29", items: [
      "\u270d\ufe0f The 10 spelling words are back in the day’s record. Rounds finished before question-by-question logging existed are filled in from the daily record, so “Spelling round — 10 items” and every word now show up under Review → What you did, and they count towards the day’s total again.",
      "\ud83d\udcd5 The mistake book can be browsed. “See every mistake” lists all of them, newest first, with the question, the correct answer and the explanation — no need to start a review round to look at one. Each item can be removed on its own."
    ]
  },
  {
    v: "v37", date: "2026-08-29", items: [
      "📋 A day\u2019s record now opens fully. Tapping a day in Review \u2192 What you did shows a one-line summary of everything done that day (Daily mission 20 \u00b7 Spelling round 10 \u00b7 Vocabulary cards 10 \u2014 40 items in total) and every section is already expanded, so the spelling words are no longer hidden behind a collapsed heading.",
      "\u270d\ufe0f The spelling round now picks words you are actually learning. It used to be a random pick of the day; it now takes the words you got wrong or guessed on today\u2019s vocabulary cards first, then words due for review, and only fills the rest at random. The set is still fixed for the day.",
      "\ud83d\udd01 Any list of words in a day\u2019s record has a \u201cPractise these words again\u201d button that starts a spelling round on exactly those words.",
      "\ud83d\udcaf Mock results show the number of questions again. Part 4 answers are worth 2 marks each in the real exam, so a 6-question Part 4 scored 12 \u2014 the score line now reads \u201c4 / 6 right\u201d with the marks shown underneath and explained."
    ]
  },
  {
    v: "v36", date: "2026-08-28", items: [
      "Everything you answer is now kept, and Review is where you go back to it. The Review tab opens with \u201cWhat you did\u201d \u2014 a list of the days you practised. Tap a day and it opens into what you actually answered that day, grouped by where it came from: daily mission, spelling round, vocabulary cards, Use of English, Reading, Listening, mistake-book review and review tests. Right answers are listed too, not just the wrong ones, so a question you got right but were not sure about can be looked at again.",
      "Each question in that list shows the question, the correct answer and the explanation, and correct ones still carry the \u201cI was guessing\u201d button \u2014 tapping it sends the question to the mistake book so it comes back another day.",
      "The mistake book has moved from Progress to Review, along with the mistake-review drill: Review now holds everything to do with looking back, and Progress is only statistics and progress. The mistake book also gained a \u201cPractise them anyway\u201d button for when nothing is due yet.",
      "The 10-word spelling round after the daily mission is recorded separately from the vocabulary cards, so the two can be looked at on their own."
    ]
  },
  {
    v: "v35", date: "2026-08-28", items: [
      "Vocabulary cards now have an \u201cI was guessing\u201d button while you answer, not just on the summary at the end. Tapping it counts the card as not known, so it drops back to Box 1 and comes round again \u2014 in both the flashcard and the typing mode.",
      "What you did in Vocabulary no longer disappears when you leave the page. Every card you answer is logged for the day, and the Vocabulary page shows \u201cVocabulary on <date>\u201d underneath, with the word, the definition and whether you got it right \u2014 correct ones still carry the \u201cI was guessing\u201d button.",
      "Review now opens up day by day. Each day in the daily-records list has a \u201cView questions\u201d button that lists exactly what was answered that day \u2014 daily-mission questions with the correct answer and explanation, plus that day's vocabulary cards \u2014 right and wrong alike, instead of only the score."
    ]
  },
  {
    v: "v34", date: "2026-08-27", items: [
      "Getting a question wrong now means reading the explanation. After a wrong answer you must answer one question about the explanation correctly before \u201cNext question\u201d appears. The answer is only in the explanation you were just shown, so skimming past it no longer works.",
      "How many of these checks you get right is recorded, and shows up in the Parent / Teacher view as its own line, so it is visible whether the explanations are actually being read."
    ]
  },
  {
    v: "v33", date: "2026-08-27", items: [
      "Answers now stay locked long enough to actually read the question. The lock was a fixed 8 seconds for a whole reading passage and 3 seconds for everything else \u2014 nowhere near enough to read a text, so a mission could be blasted through in four minutes. The wait is now worked out from the length of what is on screen, at roughly 240 words per minute plus three seconds to think: a 250-word passage unlocks after about a minute, a single cloze sentence after five or six seconds. Anyone who is really reading will never see the countdown finish.",
      "Listening now waits for the whole recording. Pressing play used to unlock the answers immediately; the options now stay locked for as long as the recording takes to read out.",
      "Both waits are capped (two minutes for a passage, 25 seconds for a single question), so a long CPE text never turns into an endless wait."
    ]
  },
  {
    v: "v32", date: "2026-08-27", items: [
      "The Parent / Teacher view now breaks the day down by activity. A new \u201cTime & accuracy by activity\u201d table lists Daily practice, the spelling round, Use of English, Reading, Listening, Vocabulary, Writing, Speaking and Review tests on separate lines \u2014 questions answered, first-try accuracy and time spent for each \u2014 with a total row underneath. You can switch it between today, the last 7 days and the last 30 days.",
      "Time is now measured honestly. Every activity is timed on its own, and the timer stops after two minutes with no input, so a tab left open is no longer counted as study time. This also fixes the history rows that showed absurd totals such as \u201c568 min\u201d for a single daily mission.",
      "The spelling round is timed too. Until now the daily mission stopped its clock before the spelling round began, so the minutes shown for a day never included the spelling practice. Daily practice history now shows the spelling time in brackets next to the spelling score."
    ]
  },
  {
    v: "v31", date: "2026-08-26", items: [
      "Listening now lets you choose the accent. A new Accent selector sits next to Speed in the listening player: British (the default, and the accent Cambridge exams are built around) or American. Your choice is remembered on this device and is used everywhere speech is played \u2014 mock exams, mistake practice and the speaking interview questions.",
      "Three bugs behind the accent are fixed. The voice list is now reloaded when the browser finishes loading it (Chrome returns an empty list on the first call, so the very first playback used to fall back to the system default), every sentence now carries an explicit language tag as well as a voice (some phones ignore the voice and follow the tag), and British voices are recognised by name as well as by language code.",
      "The player now shows which voice you are actually hearing. If the accent you picked is not installed on your device, it says so and names the voice being used instead, rather than switching accent silently."
    ]
  },
  {
    v: "v30", date: "2026-08-25", items: [
      "Reading wave 13: one more True/False/Not Given text and one more Matching Headings text at every level (10 texts, 65 questions). Both banks now hold 6 sets per level, and every reading task type has grown today.",
      "New topics: why bread rises and learning to swim at the town pool (KET), why roundabouts work and the bakery that works at night (PET), why ships keep getting bigger and learning a language after forty (FCE), the insects we stopped counting and the second life of the shipping container (CAE), the women who measured the sky and the museum of the ordinary (CPE)."
    ]
  },
  {
    v: "v29", date: "2026-08-25", items: [
      "Reading wave 12: a new multiple matching set and a new gapped text at every level (10 texts, 75 questions). Multiple matching goes from 13 sets per level to 14, gapped text from 19 to 20.",
      "New multiple matching topics: how four students get to school (KET), four people remembering their first job (PET), four volunteers coaching a junior team (FCE), four researchers on fieldwork that went wrong (CAE) and four translators on the sentence they could not solve (CPE).",
      "New gapped texts: the morning the school lift broke (KET), how one street got a bench (PET), a summer working in a bookshop (FCE), the museum label that took four years (CAE) and the river that became a legal person (CPE)."
    ]
  },
  {
    v: "v28", date: "2026-08-25", items: [
      "Reading wave 11: another True/False/Not Given text and another Matching Headings text at every level (10 texts, 65 questions). Both IELTS-style banks now hold 5 sets per level. New topics: the story of popcorn and a Saturday at the animal shelter (KET), the codes that sort your post and learning to cook at sixty (PET), selling bottled water and the return of the repair shop (FCE), noise as pollution and who owns the view upwards (CAE), a history of the fingerprint and the argument inside every map (CPE).",
      "Every one of these texts also feeds the Evidence check question added in v26, so the new sets ask you to go back and find the sentence, not just remember the answer."
    ]
  },
  {
    v: "v27", date: "2026-08-25", items: [
      "Vocabulary is no longer a pile of 2,000+ cards. Pick how many you want to do now — 5, 10, 15 or 20 — and that is your session. The choice is remembered per level.",
      "Cards you miss go back into the pile and come round again a couple of cards later, until you get them right. Cards you know are done for the session. Your Leitner box always moves on the FIRST answer, so a card you had to see twice still drops back to Box 1.",
      "Every session ends with a summary of the cards you did, with the ones you missed marked. Any card you got right but were really guessing about has a “🤔 I was guessing” button — tap it and that card goes back to Box 1 so it returns tomorrow. From the summary you can start the next batch straight away."
    ]
  },
  {
    v: "v26", date: "2026-08-25", items: [
      "Reading answers no longer sit still. Every time you open a reading task the options are reshuffled, so doing the same text twice will not put the answer back in the same place. Multiple choice, gapped text and matching headings shuffle their options; True/False/Not Given and multiple matching keep their fixed options but shuffle the question order instead.",
      "New at the end of every multiple choice and True/False/Not Given set: an Evidence check question — which sentence in the text supports the answer to one of the questions you just did? All four options are sentences taken from that same text, so remembering the answer does not help; you have to go back and read.",
      "Reading tasks now come from the sets you have practised least, instead of being picked at random each time."
    ]
  },
  {
    v: "v25", date: "2026-08-25", items: [
      "Reading wave 10: a new True/False/Not Given text and a new Matching Headings text at every level (10 texts, 65 questions). These two IELTS-style banks were the thinnest reading sets left at 3 per level and are now 4. New topics: the story of the umbrella and our school garden (KET), the return of the night train and the village that shares its tools (PET), light pollution and working from a small town (FCE), the second-hand clothing trade and the return of the tram (CAE), retiring the standard kilogram and the digital archive problem (CPE)."
    ]
  },
  {
    v: "v24", date: "2026-08-24", items: [
      "Reading wave 9: a new multiple matching set and a new gapped text at every level (10 texts, 79 questions). Multiple matching was the thinnest reading bank left at 12 sets per level and is now 13; gapped text goes from 18 to 19. New topics: favourite seasons and painting the classroom (KET), learning to drive and the dog on platform two (PET), a year living abroad and a summer at a lighthouse museum (FCE), conservators repairing damaged objects and an abandoned orchard (CAE), film editors on what they cut and an apprenticeship in silence (CPE)."
    ]
  },
  {
    v: "v23", date: "2026-08-24", items: [
      "Flag a guess after the fact. Every question in a results list now carries a “🤔 I was guessing” button — mock exams, reading, listening, speed reading and the Review Test — so a question you got right but were really unsure about can be sent to the mistake book while you are looking at the answer, not only in the moment before you answer it.",
      "The Daily tab now keeps a record of the mission you finished today: tap “📋 Today's questions” to go through every question with your result, the correct answer and the explanation — and to flag any you guessed. Questions you already flagged during the run are marked and not offered again."
    ]
  },
  {
    v: "v22", date: "2026-08-24", items: [
      "Reading wave 8: a new True/False/Not Given passage and a new Matching Headings passage at every level (10 texts, 85 questions, each with an explanation). These two task types had only two sets each — the thinnest banks on the site — and now have three. New topics: the world's first postage stamp and a school that learned to cook (KET), how the world agreed on time zones and a Saturday farmers' market (PET), how the wristwatch won its place and living in a tiny house (FCE), the nineteenth-century trade in shipped ice and the city after midnight (CAE), and the invention of the weekend and the afterlife of old buildings (CPE)."
    ]
  },
  {
    v: "v21", date: "2026-08-24", items: [
      "“🤔 I'm guessing” is now under every question. It used to appear only in Use of English mock exams; it is now in reading, listening, speed reading, the daily mission, the Review Test and mistake practice too. A flagged answer that happens to be right still counts for your score, but it goes into the mistake book, does not move up a review box, and shows you the explanation straight away — so a lucky guess can never masquerade as mastery.",
      "The Review Test and the mastery check can also be 10, 15 or 20 questions (they follow your daily mission length unless you set them separately). Both are still scored out of 100 — a shorter test just makes each question worth more."
    ]
  },
  {
    v: "v20", date: "2026-08-24", items: [
      "Choose how long the daily mission is: 10, 15 or 20 questions. Higher levels now start shorter by default (CAE and CPE 10, FCE 15, KET and PET 20), because one C1/C2 question carries several times the reading of an A2 one — the same 20 questions took two to three times as long. The setting is per level, syncs with your progress, and the start button shows the estimated time.",
      "Shorter missions are balanced, not just cut off: the mix of Use of English, Reading and Listening keeps its proportions, the reading share comes from fewer passages (1 instead of 3) since long texts are what really costs time, and the closing spelling round scales with it (5 words on a 10-question mission)."
    ]
  },
  {
    v: "v19", date: "2026-08-22", items: [
      "Stay signed in for 30 days. Sign-in used to rely on the Google credential itself, which expires after an hour and was cleared whenever the browser dropped the tab — so on a phone you were asked to sign in again almost every visit. Signing in now exchanges that for a 30-day pass stored on your device, and every visit renews it, so regular users should not see the sign-in prompt again. The pass stays on your device and is never copied to your other devices by progress sync."
    ]
  },
  {
    v: "v18", date: "2026-08-16", items: [
      "Reading practice expanded: 3 new multiple-choice passages at every level (KET, PET, FCE, CAE, CPE) — 15 texts, 90 questions, each with an answer explanation. New topics include the school lost property box and a street's old lime tree (KET), a bus turned into a village library and a school's pre-loved uniform shop (PET), a community orchard, a theatre costume store and reading tidal causeways (FCE), the economics of empty seats, cockpit automation and office-to-flat conversions (CAE), and essays on unloved architecture, anniversaries and the art of losing well (CPE). Each level now has 28 reading multiple-choice sets."
    ]
  },
  {
    v: "v17", date: "2026-08-15", items: [
      "All alerts and confirmation prompts now use in-app dialogs styled to match the site (they used to be native browser popups). Applies to exam exit/submit checks, drill quits, clearing records, sign-out and access management; confirmations keep the two-step OK / Cancel flow."
    ]
  },
  {
    v: "v16", date: "2026-08-15", items: [
      "Fix: the sign-in button was missing when the site was opened inside an in-app browser (LINE / Telegram, etc.). The sign-in button now always shows; if the in-app browser blocks Google Sign-In, tapping it explains how to open the site in Safari or Chrome."
    ]
  },
  {
    v: "v15", date: "2026-08-12", items: [
      "Practice outside the daily mission now shows in the Parent / Teacher view: days with any practice (mock exams, reading, listening, vocabulary) get a dashed • cell in the 14-day strip with the number of questions answered, plus a new \"questions answered, last 7 days · all practice\" tile.",
      "New 🎯 Mastery check on the Review page: 20 fresh questions drawn from the sections practised in the last 7 days — new questions rather than repeats, scored out of 100. Results appear in the Review history and the Parent / Teacher view."
    ]
  },
  {
    v: "v14", date: "2026-08-11", items: [
      "Question bank upgrade: one new original reading passage (6 questions) at every level — a class garden (KET), a market jam stall (PET), a man who records his town's vanishing sounds (FCE), a daily paper that went weekly (CAE), and an essay defending deep knowledge of one small place (CPE)."
    ]
  },
  {
    v: "v13", date: "2026-08-11", items: [
      "Signing in with Google is now required to start any practice — mock exams, reading, speed reading, listening, vocabulary review, daily practice, and the writing / speaking timers — so progress always syncs to the cloud and the Parent/Teacher view stays complete. Browsing pages needs no sign-in, and a run already in progress is never interrupted."
    ]
  },
  {
    v: "v12", date: "2026-08-09", items: [
      "The daily spelling round is now a required part of the daily mission — the skip button is gone. (Leaving mid-round is still possible; the round stays pending until you finish it.)"
    ]
  },
  {
    v: "v11", date: "2026-08-08", items: [
      "Question bank upgrade: one new original listening recording (5 questions) at every level — from a pool announcement (KET) to a lecture on the history of the pencil (CPE) — plus 4 new Use of English items per level (2 multiple-choice cloze, 2 open cloze)."
    ]
  },
  {
    v: "v10", date: "2026-08-08", items: [
      "Question bank upgrade: one new original reading passage (6 questions) at every level, KET to CPE, difficulty rising from a school cooking club story to a C2 essay on memory and forgetting."
    ]
  },
  {
    v: "v9", date: "2026-08-08", items: [
      "Cross-account viewing: grant a parent or teacher read access by entering their Google email in the Parent/Teacher view — they sign in with their own account on any device and see the learner's full dashboard (revocable any time).",
      "Daily practice now saves mid-run progress to the cloud: pause at question 10, reopen on any device, and continue from question 10 — no more starting over.",
      "Faster sync: the site pulls the latest cloud progress on page open and when you return to the tab, and a stale background tab can no longer overwrite newer progress from another device.",
      "Desktop fix: pressing Enter to submit a typed answer now shows the correct/wrong feedback properly instead of skipping straight to the next question."
    ]
  },
  {
    v: "v8", date: "2026-08-08", items: [
      "Daily practice now ends with a spelling round: review 10 words of your level (same 10 all day), then spell each one from its definition — misses repeat until you get them all.",
      "Parent / Teacher view (button at the top of Progress): streak, last-14-day completion strip, 7-day first-try accuracy, words practised/mastered, accuracy by section, words that won't stick, and recent mistakes with the chosen vs correct answer.",
      "Spelling results feed the vocabulary boxes, and first-try mistakes from Daily practice are now logged for the dashboard."
    ]
  },
  {
    v: "v7", date: "2026-08-07", items: [
      "Question bank upgrade: 2 new reading passages (12 questions) and 2 new listening recordings (10 questions) at every level — KET to CPE, all original."
    ]
  },
  {
    v: "v6", date: "2026-08-07", items: [
      "Review Test: pick past Daily-20 days (plus mistake-book items) and take a 20-question test scored out of 100 — see how much really stuck.",
      "Daily and Review now have their own tabs next to Progress.",
      "\"← Previous\" buttons: look back at answered questions (read-only) in daily/mistake practice and mock exams.",
      "Site URLs are no longer case-sensitive (lanexammock works)."
    ]
  },
  {
    v: "v5", date: "2026-08-07", items: [
      "Daily mission trimmed to 20 questions: 8 Use of English + 6 Reading (3 passages) + 4 Listening + up to 2 due mistakes.",
      "Questions from the same passage or recording now appear consecutively.",
      "Listening audio fixed: Stop button works, playback stops automatically on the next question.",
      "Anti-rush guards: answers unlock after a short reading delay; listening unlocks after playing the recording; hasty answers are counted and shown to parents.",
      "Text size now goes up to 175%."
    ]
  },
  {
    v: "v4", date: "2026-08-05", items: [
      "Daily 25 mission: a fresh seeded set every day, weak-area weighting, mastery redo loop, day streaks and per-day records."
    ]
  },
  {
    v: "v3", date: "2026-07-19", items: [
      "Five exam levels: KET (A2), PET (B1), FCE (B2), CAE (C1), CPE (C2) — progress stored per level.",
      "AI essay grading and AI speaking examiner (on-device speech-to-text).",
      "Speed-reading trainer with WPM timing and memory check.",
      "Text-size control in the theme sheet."
    ]
  },
  {
    v: "v2", date: "2026-07-17", items: [
      "Real rendered charts for IELTS-style Writing Task 1 prompts.",
      "English-only interface polish and input fixes."
    ]
  },
  {
    v: "v1", date: "2026-07-16", items: [
      "Launch (CPE): Use of English Parts 1–4 mock exams, Reading, Listening (two-voice audio), timed Writing, Speaking prompts, vocabulary trainer, mistake book with spaced repetition, progress dashboard.",
      "Google sign-in with cloud progress sync across devices."
    ]
  }
];
