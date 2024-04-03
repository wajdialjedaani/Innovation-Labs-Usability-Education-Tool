import styles from "@/styles/stats.module.scss";
import getDataForAllData from "@/lib/stats/getDataForAllData";
export default function AllData({ data }) {
  if (!data) {
    return;
  }
  const allQuizData = getDataForAllData(data["HeuristicData"]);
  const allUIData = getDataForAllData(data["UIBuilderData"]);
  console.log(allQuizData, allUIData);

  function getDataList(dataObject) {
    const listObj = [];
    for (const [key, val] of Object.entries(dataObject)) {
      if (key === "sumData") continue;
      listObj.push(
        <div className={`list-group-item ${styles.listGroupItem}`}>
          <div className="me-auto">
            <div className="fw-bold">{key}</div>
            <div>
              Correct:{" "}
              <span className="text-success fw-bold">{val["correct"]}</span>
            </div>
            <div>
              Incorrect:{" "}
              <span className="text-danger fw-bold">{val["incorrect"]}</span>
            </div>
            <div>
              Time: <span className="text-primary fw-bold">{val["time"]}s</span>
            </div>
          </div>
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
          className={`col-6 list-group list-group-flush ${styles.listGroup}`}
        >
          {getDataList(allQuizData)}
        </section>
        <section
          className={`col-6 list-group list-group-flush ${styles.listGroup}`}
        >
          {getDataList(allUIData)}
        </section>
      </article>
    </div>
  );
}
