/* CPE Prep bank: True/False/Not Given reading (wave 4) */
(function () {
var BANK = [
  {
    id: "p-tfng4-01",
    title: "Identifying Strangers: A Short History of the Fingerprint",
    text: "The administrative problem that produced fingerprinting was not crime but bureaucracy. Nineteenth-century states were acquiring pensions, contracts and prisons, all of which required certainty that the person before the clerk was the person named in the file, at a time when most transactions rested on personal recognition and a signature that many could not produce.\nThe first systematic solution was not fingerprints at all. Alphonse Bertillon, working for the Paris police in the 1880s, devised a system of precise bodily measurements — head length, forearm, ear — that could be filed and searched. Bertillonage was adopted internationally and worked tolerably well, but it demanded trained measurers, tolerated no inconsistency, and collapsed embarrassingly when two prisoners at Leavenworth in 1903 were found to have nearly identical measurements.\nFingerprints had meanwhile been proposed from a different direction. William Herschel, a British administrator in Bengal, had required handprints on contracts from the 1850s, initially, by his own account, to impress signatories with the solemnity of the agreement rather than because he believed prints were unique. Henry Faulds, a physician in Japan, published in Nature in 1880 arguing for their forensic use. Francis Galton assembled the statistical case for uniqueness and permanence, and Edward Henry devised the classification scheme that made large collections searchable, which is what turned a curiosity into an instrument of government.\nThe technique's reputation for infallibility took a century to acquire and rather less to qualify. What is highly reliable is a full, clean print. Latent marks recovered from surfaces are usually partial, smudged and overlaid, and identification then depends on an examiner's judgement about which features to count. Studies in which examiners were shown the same marks twice, without knowing it, found a small but non-zero rate of inconsistent conclusions, and the misidentification of a Portland lawyer after the Madrid bombings of 2004 demonstrated that expert consensus can be confidently wrong.\nNone of this returns us to Bertillon. It does suggest that the interesting question was never whether two fingers are identical — as far as anyone can tell, they are not — but how much weight a partial impression, interpreted by a human being who knows what answer the investigation would prefer, ought to carry.",
    questions: [
      {
        q: "Fingerprinting was first developed to solve a problem of administration rather than of crime.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the opening states that the problem 'was not crime but bureaucracy': pensions, contracts and prisons needed certain identification."
      },
      {
        q: "Bertillon's system was based on measuring the body.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'a system of precise bodily measurements — head length, forearm, ear — that could be filed and searched'."
      },
      {
        q: "Bertillonage was never used outside France.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - it 'was adopted internationally', and the case that discredited it occurred at Leavenworth in the United States."
      },
      {
        q: "Herschel required handprints because he was convinced from the start that prints were unique.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - by his own account it was 'to impress signatories with the solemnity of the agreement rather than because he believed prints were unique'."
      },
      {
        q: "Faulds and Herschel disagreed publicly about who had made the discovery first.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - both men's contributions are described, but the text says nothing about a dispute between them."
      },
      {
        q: "Henry's contribution was a way of organising collections so that they could be searched.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - he 'devised the classification scheme that made large collections searchable'."
      },
      {
        q: "Examiners shown the same marks on two occasions always reached the same conclusion.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - such studies 'found a small but non-zero rate of inconsistent conclusions'."
      },
      {
        q: "The writer concludes that fingerprints from different people may in fact be identical.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'as far as anyone can tell, they are not'; the doubt concerns partial marks and human interpretation, not uniqueness itself."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
