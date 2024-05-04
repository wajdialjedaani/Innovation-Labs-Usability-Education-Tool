function getDataForAllData(data) {
  const totalData = [];
  data.forEach((curData, i) => {
    const currSum = {
      attempts: curData["attemptCount"],
      name: `Heuristic ${i + 1}`,
    };
    curData["attempts"].forEach((attempt) => {
      for (const [dataName, dataVal] of Object.entries(attempt)) {
        // totalData["sumData"][dataName] =
        //   (totalData["sumData"][dataName] || 0) + dataVal;
        currSum[dataName] = (currSum[dataName] || 0) + dataVal;
      }
    });
    totalData[i] = currSum;
  });

  return totalData;
}

//Pass in the entire data object (not just data["heuristic"])
//Basically data is gotten by adding correct answers and subtracting incorrect ones
function formatDataForLeaderboard(data) {
  const score = {
    quizScore: 0,
    UIScore: 0,
  };
  const quizData = getDataForAllData(data["HeuristicData"]);
  const UIdata = getDataForAllData(data["UIBuilderData"]);

  quizData.forEach(({ incorrect, correct }) => {
    score.quizScore -= incorrect;
    score.quizScore += correct;
  });

  UIdata.forEach(({ incorrect, correct }) => {
    score.UIScore -= incorrect;
    score.UIScore += correct;
  });

  return score;
}

export { getDataForAllData, formatDataForLeaderboard };
