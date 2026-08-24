/* CAE Prep bank: IELTS-style True/False/Not Given reading (wave 2) */
(function () {
var BANK = [
  {
    id: "c-tfng2-01",
    title: "The Trade in Frozen Water",
    text: "In the winter of 1806, a young Boston merchant named Frederic Tudor loaded a brig with blocks of ice cut from a New England pond and sailed for the Caribbean island of Martinique. The venture was widely considered ridiculous. Newspapers reported it as a joke, insurers declined the cargo, and Tudor arrived to find no ice house on the island, no customers who had ever seen ice and no obvious way of persuading anyone that a melting commodity was worth paying for. He lost a substantial sum, and would spend part of the following decade in debtors' prison.\nWhat rescued the idea was not better shipping but better insulation. Tudor's associate Nathaniel Wyeth designed a horse-drawn cutter that scored the frozen surface of a lake into a grid, so that uniform rectangular blocks could be levered out and stacked without gaps. Sawdust, a waste product of New England's timber mills and therefore almost free, turned out to be an excellent packing material. Together these innovations cut losses on a long voyage from roughly two thirds of the cargo to well under a tenth, and what had been an eccentric gamble became an industry.\nBy the 1850s ships were carrying pond ice from Massachusetts to Calcutta, Rio de Janeiro and Sydney; a British official in India remarked that the arrival of the ice ship was the only event capable of emptying the club. At home the trade quietly reorganised domestic life. Iceboxes appeared in ordinary kitchens, dairies could send milk further, and brewers gained the ability to lager beer through the summer months. Cities acquired a new class of worker, the iceman, whose daily deliveries were as routine as the postman's.\nThe industry's decline was neither sudden nor, at first, obvious. Mechanical refrigeration existed from the 1870s but remained expensive and unreliable, and natural ice held much of the market into the twentieth century. What damaged it was contamination: as towns grew along the rivers and lakes that supplied the harvest, the water became suspect, and public health officials began to campaign against it. Manufactured ice, whatever its cost, could at least be made from water of known purity.\nA trade that had employed tens of thousands and moved millions of tonnes had effectively vanished within a generation, leaving behind little more than a scattering of ice houses now converted into homes, and a vocabulary - the icebox, the ice tray - that outlived the thing it described.",
    questions: [
      {
        q: "Tudor's first shipment of ice earned him a considerable profit.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - 'He lost a substantial sum, and would spend part of the following decade in debtors' prison.'"
      },
      {
        q: "Insurance companies were unwilling to cover the first cargo.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'insurers declined the cargo'."
      },
      {
        q: "Wyeth's cutting device made it possible to stack blocks closely together.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - the cutter produced 'uniform rectangular blocks' that could be 'stacked without gaps'."
      },
      {
        q: "Sawdust was chosen mainly because it was cheaper than the alternatives available.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text says sawdust was almost free and worked well, but it never compares its cost with other insulating materials."
      },
      {
        q: "Losses in transit fell to below ten per cent of a cargo.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - losses fell 'from roughly two thirds of the cargo to well under a tenth'."
      },
      {
        q: "Mechanical refrigeration replaced natural ice almost as soon as it was invented.",
        options: ["True", "False", "Not Given"],
        answer: 1,
        explanation: "False - it existed from the 1870s but 'remained expensive and unreliable, and natural ice held much of the market into the twentieth century'."
      },
      {
        q: "Concerns about polluted water contributed to the collapse of the natural ice trade.",
        options: ["True", "False", "Not Given"],
        answer: 0,
        explanation: "True - 'What damaged it was contamination', with health officials campaigning against ice cut from suspect water."
      },
      {
        q: "Most former ice houses in New England have been demolished.",
        options: ["True", "False", "Not Given"],
        answer: 2,
        explanation: "Not Given - the text mentions 'a scattering of ice houses now converted into homes' but says nothing about how many were demolished."
      }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.tfng = (window.READING.tfng || []).concat(BANK);
})();
