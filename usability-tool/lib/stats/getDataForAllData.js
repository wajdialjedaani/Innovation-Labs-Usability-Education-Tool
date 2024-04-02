export default function getDataForAllData(data) {
  const totalData = { sumData: {} };
  for (const [key, val] of Object.entries(data)) {
    const currSum = { attempts: val["attemptCount"] };
    val["attempts"].forEach((attempt) => {
      for (const [dataName, dataVal] of Object.entries(attempt)) {
        totalData["sumData"][dataName] =
          (totalData["sumData"][dataName] || 0) + dataVal;
        currSum[dataName] = (currSum[dataName] || 0) + dataVal;
      }
    });
    totalData[key] = currSum;
  }
  return totalData;
}
