/* 版本紀錄（新版在最上面）。每次改版在最上方加一條：{ v, date, items: [...] }
 * 站內 UI 全英文（沉浸式），版本說明也用英文。 */
window.APP_VERSIONS = [
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
