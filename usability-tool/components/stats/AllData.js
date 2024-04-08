import PieGraph from "./PieGraph";
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
    dataObject.forEach((val, i) => {
      const curSum =
        (val["correct"] * 10) / (val["attempts"] * (val["incorrect"] + 1));
      if (curSum < worst.val) {
        worst.val = curSum;
        worst.heuristic = i;
      }
    });
    return worst.heuristic;
  }

  function getDataList(dataObject) {
    const worst = getWorst(dataObject);
    return dataObject.map((val, i) => {
      return (
        <div
          key={i}
          className={`border border-top-0 col-12 col-lg-6 list-group-item d-flex justify-content-between align-items-start ${styles.listGroupItem} `}
        >
          <div className="me-auto">
            <div className="fw-bold">Heuristic {i + 1}</div>
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
          {worst === i ? (
            <span className="badge text-bg-danger rounded-pill">
              <i class="bi bi-exclamation-circle-fill me-1"></i>
              Lowest Score
            </span>
          ) : null}
        </div>
      );
    });
  }

  return (
    <div className={`col-12 p-3 mx-auto ${styles.statsContainer}`}>
      <h2 className={`h2 ${styles.graphTitle}`}>All Data</h2>

      <article className="row">
        <section
          className={`col-12 col-lg-6 list-group list-group-flush ${styles.listGroup}`}
        >
          <h3 className={`h3 m-0 list-group-item ${styles.graphTitle}`}>
            Quizzes
          </h3>
          <div
            className={` list-group list-group-flush d-flex flex-row flex-wrap p-0 ${styles.listGroup}`}
          >
            {getDataList(allQuizData)}
          </div>
        </section>
        <section
          className={`col-12 col-lg-6 list-group list-group-flush ${styles.listGroup}`}
        >
          <h3 className={`h3 m-0 list-group-item ${styles.graphTitle}`}>
            UI Builders
          </h3>
          <div
            className={` list-group list-group-flush d-flex flex-row flex-wrap p-0 ${styles.listGroup}`}
          >
            {getDataList(allUIData)}
          </div>
        </section>
      </article>
    </div>
  );
}
