/* KET Prep extra bank: IELTS Writing Task 1 (simple data description) */
(function () {
  var BANK = [
    {
      id: "kiw01",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Favourite sports bar chart",
      length: "about 100 words · about 20 minutes",
      task: "The chart below shows how many students in one school chose each sport as their favourite. Describe the main information in the chart and compare the sports.",
      chart: {
        type: "bar",
        title: "Students' favourite sports at Hill School",
        yUnit: "students",
        categories: ["Football", "Swimming", "Basketball", "Tennis", "Running"],
        series: [
          { name: "Boys", values: [45, 20, 30, 10, 15] },
          { name: "Girls", values: [25, 35, 20, 22, 18] }
        ]
      },
      checklist: [
        "Content: say which sport is the most popular and which is the least popular",
        "Comparison: compare boys and girls with simple sentences (more, fewer, the same)",
        "Organisation: start with one sentence about the whole chart, then give details",
        "Language: use numbers correctly and simple present tense"
      ],
      model: "The chart shows the favourite sports of boys and girls at Hill School. Football is the most popular sport for boys, with 45 boys choosing it. For girls, swimming is the favourite, chosen by 35 girls. Basketball is more popular with boys than with girls. Tennis is the least popular sport for boys, with only 10 choosing it, but 22 girls like it. Running is a small group for both boys and girls. In general, boys prefer football and basketball, while girls prefer swimming and tennis. The numbers for running are almost the same for both groups."
    },
    {
      id: "kiw02",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — How students travel to school pie",
      length: "about 100 words · about 20 minutes",
      task: "The chart below shows how the students at one school travel to school in the morning. Describe the main information and say which ways are the most and least common.",
      chart: {
        type: "pie",
        title: "How students travel to school",
        pies: [
          {
            title: "All students",
            slices: [
              { label: "Walk", value: 35 },
              { label: "Bus", value: 30 },
              { label: "Car", value: 20 },
              { label: "Bicycle", value: 10 },
              { label: "Train", value: 5 }
            ]
          }
        ]
      },
      checklist: [
        "Content: name the most common and the least common way to travel",
        "Numbers: use the figures from the chart to support your sentences",
        "Organisation: one opening sentence, then details from biggest to smallest",
        "Language: simple present tense and words like most, some, only a few"
      ],
      model: "The chart shows how students at one school travel to school in the morning. The most common way is walking, which 35 in every 100 students do. The bus is also very popular, used by 30 in every 100 students. About 20 in every 100 come by car with their parents. Fewer students ride a bicycle, only 10 in every 100. The least common way is the train, used by just 5 in every 100 students. In general, most students walk or take the bus, and only a few use the train."
    },
    {
      id: "kiw03",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Library visitors table",
      length: "about 100 words · about 20 minutes",
      task: "The table below shows the number of visitors to a town library on different days of one week. Describe the main information and compare the days.",
      chart: {
        type: "table",
        title: "Visitors to Greenhill Library in one week",
        columns: ["Day", "Morning visitors", "Afternoon visitors"],
        rows: [
          ["Monday", "40", "65"],
          ["Wednesday", "55", "80"],
          ["Friday", "60", "95"],
          ["Saturday", "120", "150"]
        ]
      },
      checklist: [
        "Content: say which day is the busiest and which is the quietest",
        "Comparison: compare mornings and afternoons with simple sentences",
        "Organisation: one opening sentence about the table, then the details",
        "Language: numbers, days of the week and simple present tense"
      ],
      model: "The table shows how many people visited Greenhill Library on four days in one week. Saturday is the busiest day, with 120 visitors in the morning and 150 in the afternoon. Monday is the quietest day, with only 40 visitors in the morning and 65 in the afternoon. The numbers for Wednesday and Friday are in the middle, and Friday is a little busier than Wednesday. On every day, the afternoon is busier than the morning. In general, more people visit the library at the weekend, and afternoons are always more popular than mornings."
    }
  ];
  if (typeof module !== "undefined") { module.exports = BANK; return; }
  window.WRITING = (window.WRITING || []).concat(BANK);
})();
