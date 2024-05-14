const crypto = require("node:crypto");

// Add more reviewers here
const reviewers = [
  "Budhi Widagdo",
  "Denny Pradipta",
  "Hari Cahya Nugraha",
  "Kevin Hermawan",
  "Lukman Adisaputro",
  "Muslim Ilmiawan",
  "Raosan Fikri Lillahi",
  "Sinta Herena",
];

(async () => {
  // Generate random number
  async function rand(min, max) {
    return (
      (min +
        ((max - min + 1) * crypto.getRandomValues(new Uint32Array(1))[0]) /
          2 ** 32) |
      0
    );
  }

  // Create the selected
  const selected = [];
  const results = {
    monika: [],
    symon: [],
  };

  // Select the reviewers
  do {
    const selectedIndex = await rand(0, 7);
    if (!selected.includes(selectedIndex)) {
      console.info("Selected", reviewers[selectedIndex]);
      selected.push(selectedIndex);
    }
  } while (selected.length < 4);

  // Assign reviewers to projects
  for (const index of selected) {
    if (results.monika.length < 2) {
      console.info("Added", reviewers[index], "as a Monika Reviewer");
      results.monika.push(reviewers[index]);
    } else {
      console.info("Added", reviewers[index], "as a Symon Reviewer");
      results.symon.push(reviewers[index]);
    }
  }

  // Create a teams message
  fetch(process.env.TEAMS_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Monika and Symon Reviewers",
      summary: "Here is the assigned reviewers for Monika and Symon today.",
      text: `Here is the assigned reviewers for Monika and Symon today:\n\n\n**Monika**: ${results.monika.join(
        ", "
      )}\n\n**Symon**: ${results.symon.join(", ")}\n`,
      themeColor: "#309942",
    }),
  }).then((response) => response.json());
})();
