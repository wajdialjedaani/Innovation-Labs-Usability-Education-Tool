import styles from "@/styles/stats.module.scss";
import getDataForAllData from "@/lib/stats/getDataForAllData";
export default function AllData({ data }) {
  if (!data) {
    return;
  }
  const allQuizData = getDataForAllData(data["HeuristicData"]);
  const allUIData = getDataForAllData(data["UIBuilderData"]);

  function getWorst(dataObject) {
    let worst = { val: 0, heuristic: 0 };
    for (const [key, val] of Object.entries(dataObject)) {
      if (key === "sumData") continue;
      const curSum = Math.floor(
        (val["incorrect"] - val["correct"]) / val["attempts"]
      );
      console.log(key, curSum, worst);
      if (curSum > worst.val) {
        worst.val = curSum;
        worst.heuristic = key;
      }
    }
    return worst.heuristic;
  }

  function getDataList(dataObject) {
    const listObj = [];
    const worst = getWorst(dataObject);
    for (const [key, val] of Object.entries(dataObject)) {
      if (key === "sumData") continue;
      listObj.push(
        <div
          className={`list-group-item d-flex justify-content-between align-items-start ${styles.listGroupItem} `}
        >
          <div className="me-auto">
            <div className="fw-bold">{key}</div>
            <div>
              Correct Answers:{" "}
              <span className="text-success fw-bold">{val["correct"]}</span>
            </div>
            <div>
              Incorrect Answers:{" "}
              <span className="text-danger fw-bold">{val["incorrect"]}</span>
            </div>
            <div>
              Total Attempts:{" "}
              <span className="text-warning fw-bold">{val["attempts"]}</span>
            </div>
            <div>
              Total Time:{" "}
              <span className="text-primary fw-bold">{val["time"]}s</span>
            </div>
          </div>
          {worst === key ? (
            <span className="badge text-bg-danger rounded-pill">
              <i class="bi bi-exclamation-circle-fill me-1"></i>
              Lowest Score
            </span>
          ) : null}
        </div>
      );
    }
    return listObj;
  }

  return (
    <div className={`col-12 p-3 mx-auto ${styles.statsContainer}`}>
      <h2 className={`h2 ${styles.graphTitle}`}>All Data</h2>
      <article className="row">
        <section
          className={`col-3 list-group list-group-flush ${styles.listGroup}`}
        >
          <h3 className={`h3 m-0 list-group-item ${styles.graphTitle}`}>
            Quizzes
          </h3>
          {getDataList(allQuizData)}
        </section>
        <section
          className={`col-3 list-group list-group-flush ${styles.listGroup}`}
        >
          <h3 className={`h3 m-0 list-group-item ${styles.graphTitle}`}>
            UI Builders
          </h3>
          {getDataList(allUIData)}
        </section>

        <section className={`col-3 ${styles.graphContainer}`}></section>
      </article>
    </div>
  );
}
