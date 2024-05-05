"use client";
import { getDataForLeaderboard } from "@/lib/firebase/firestore";
import { useEffect, useState, useMemo } from "react";

import styles from "@/styles/leaderboard.module.scss";

const limitOptions = [10, 20, 50, "None"];

export default function Leaderboard() {
  const [allTableData, setAllTableData] = useState();

  const [tableData, setTableData] = useState([]);

  const [loading, setLoading] = useState(true);

  //What is the data sorted by
  const [dataSort, setDataSort] = useState();

  const [limit, setLimit] = useState();

  const [heuristic, setHeuristic] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDataForLeaderboard();
        setAllTableData(data);
      } catch (e) {
        console.error(e);
      } finally {
        setHeuristic(0);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!allTableData) return;
    const heuristicData = [];
    allTableData.forEach((data) => {
      heuristicData.push({
        ...data[heuristic],
        displayName: data.displayName,
      });
    });
    /*
                  For Testing
    
    for (let i = 0; i < 100; i++) {
      heuristicData.push({
        quizScore: Math.floor(Math.random() * (500 - -500 + 1)) + -500,
        UIScore: Math.floor(Math.random() * (500 - -500 + 1)) + -500,
        displayName: `Test ${i}`,
      });
    }
    
    */
    setTableData(heuristicData);
  }, [heuristic]);

  const dataSortedByQuiz = useMemo(() => {
    return [...tableData].sort((a, b) => b.quizScore - a.quizScore);
  }, [tableData]);

  const dataSortedByUIBuilder = useMemo(() => {
    return [...tableData].sort((a, b) => b.UIScore - a.UIScore);
  }, [tableData]);

  const displayData =
    dataSort == "Quiz"
      ? dataSortedByQuiz
      : dataSort == "UI Builder"
      ? dataSortedByUIBuilder
      : tableData;

  const displayLimit = limit
    ? Math.min(limit, tableData.length)
    : tableData.length;

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
      <div className="d-flex justify-content-center gap-4">
        <div className="dropdown mb-3 text-center">
          <button
            className={`dropdown-toggle ${styles.dropDownBtn}`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Heuristic {` - ${heuristic + 1}`}
          </button>
          <ul className={`dropdown-menu ${styles.dropDownMenu}`}>
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <li key={i}>
                  <button
                    type="button"
                    className={`btn h-100 text-center dropdown-item`}
                    onClick={() => setHeuristic(i)}
                  >
                    Heuristic {i + 1}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="dropdown mb-3 text-center">
          <button
            className={`dropdown-toggle ${styles.dropDownBtn}`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Limit {limit ? ` - ${limit}` : ""}
          </button>
          <ul className={`dropdown-menu ${styles.dropDownMenu}`}>
            {limitOptions.map((option, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={`btn h-100 text-center dropdown-item`}
                  onClick={() =>
                    setLimit(option != "None" ? option : undefined)
                  }
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

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
                Quiz Score
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
          {displayData.slice(0, displayLimit).map((data, i) => (
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
