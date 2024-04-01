export default function getDataForTable(data = {}) {
    // Initialize variables to store total correct, incorrect, and total time
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalTime = 0;
    let averageCorrect = 0;
    let averageIncorrect = 0;
    let average = 0;
    let averageTime = 0;
    let totalAttempts = 0;

    // Iterate through all attempts to aggregate data
    data.attempts.forEach((attempt) => {
      totalCorrect += attempt.correct;
      totalIncorrect += attempt.incorrect;
      totalTime += attempt.time;
      totalAttempts += 1;
    });
    
    
    averageCorrect = (totalCorrect / totalAttempts).toFixed(2);
    averageIncorrect = (totalIncorrect / totalAttempts).toFixed(2);
    average = ((averageCorrect / 10) * 100).toFixed(2);
    averageTime = (totalTime / totalAttempts).toFixed(2);
    // Return the aggregated data
    return [
      {
        name: "Total Attempts",
        value: totalAttempts,
      },
      {
        name: "Total Correct Answers",
        value: totalCorrect,
      },
      {
        name: "Total Incorrect Answers",
        value: totalIncorrect,
      },
      {
        name: "Total Time (s)",
        value: totalTime,
      },
      {
        name: "Average Correct Answers",
        value: averageCorrect,
      },
      {
        name: "Average Incorrect Answers",
        value: averageIncorrect,
      },
      {
        name: "Average Time per Game (s)",
        value: averageTime,
      },
      {
        name: "Average Score per Game",
        value: average + "%",
      },
    ];
}
