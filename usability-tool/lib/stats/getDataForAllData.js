export default function getDataForAllData(data) {
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
