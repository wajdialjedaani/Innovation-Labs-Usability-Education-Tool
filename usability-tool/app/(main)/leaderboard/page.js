"use client";
import { getDataForLeaderboard } from "@/lib/firebase/firestore";
import { useEffect, useState, useMemo } from "react";

import styles from "@/styles/leaderboard.module.scss";

export default function Leaderboard() {
  const [tableData, setTableData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [dataSort, setDataSort] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDataForLeaderboard();
        setTableData(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const dataSortedByQuiz = useMemo(() => {
    return [...tableData].sort((a, b) => b.quizScore - a.quizScore);
  }, [tableData]);

  const dataSortedByUIBuilder = useMemo(() => {
    return [...tableData].sort((a, b) => b.UIScore - a.UIScore);
  }, [tableData]);

  const displayData =
    dataSort == "Quiz"
      ? dataSortedByQuiz
      : "UI Builder"
      ? dataSortedByUIBuilder
      : tableData;

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <main className="col-md-8 mx-auto mt-4">
      <table className={`table table-striped ${styles.table} `}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">
              <button
                className={styles.tableButton}
                onClick={() =>
                  setDataSort((prevSort) =>
                    prevSort == "Quiz" ? undefined : "Quiz"
                  )
                }
              >
                Quiz
                <i
                  className={
                    dataSort == "Quiz"
                      ? "bi bi-sort-down ps-1"
                      : "bi bi-filter ps-1"
                  }
                ></i>
              </button>
            </th>
            <th scope="col">
              <button
                className={styles.tableButton}
                onClick={() =>
                  setDataSort((prevSort) =>
                    prevSort == "UI Builder" ? undefined : "UI Builder"
                  )
                }
              >
                UI Builder Score
                <i
                  className={
                    dataSort == "UI Builder"
                      ? "bi bi-sort-down ps-1"
                      : "bi bi-filter ps-1"
                  }
                ></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((data, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{data.displayName}</td>
              <td>{data.quizScore}</td>
              <td>{data.UIScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
