import styles from "@/styles/stats.module.scss";
import getDataForAllData from "@/lib/stats/getDataForAllData";
export default function AllData({ data }) {
  if (!data) {
    return;
  }
  const allQuizData = getDataForAllData(data["HeuristicData"]);
  const allUIData = getDataForAllData(data["UIBuilderData"]);

  return (
    <div className={`col-12 p-3 mx-auto ${styles.statsContainer}`}>
      <h2 className={`h2 ${styles.graphTitle}`}>All Data</h2>

      {
        // show data
      }
    </div>
  );
}
