"use client";
import { useState, useEffect } from "react";

import { getAuthContext } from "../../components/AuthContextProvider";
import { readHeuristicData, readUIData } from "@/lib/firebase/firestore";

import styles from "@/styles/stats.module.scss";

import PieGraph from "@/components/stats/PieGraph";
import BarGraph from "@/components/stats/BarGraph";

const heuristics = Array.from({ length: 10 }, (x, i) => `Heuristic ${i + 1}`);

export default function Statistics() {
  //Get user and metadata
  const {
    user,
    metaDataSuite: {
      metaData: { completedHeuristics },
    },
  } = getAuthContext();
  //Stores the data for the current heuristic
  const [currHeuristicData, setCurrHeuristicData] = useState(null);
  const [currUIData, setCurrUIData] = useState(null);

  //Stores the current heuristic that is selected
  const [currHeuristic, setCurrheuristic] = useState(
    completedHeuristics.forEach((heu, i) => {
      if (heu === 3) return i;
    }) || 0
  );

  //Loading state
  const [loading, setLoading] = useState(true);

  //State for if there's no quiz data
  const [noQuizData, setNoQuizData] = useState(false);
  //State for if there's no UI Data
  const [noUIData, setNoUIData] = useState(false);
  const [heuristicData, setHeuristicData] = useState(null);

  const getHeuristicDataForPie = () => {
    // Initialize variables to store total correct, incorrect, and total time
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalTime = 0;
    let averageCorrect = 0;
    let averageIncorrect = 0;
    let averageTime = 0;
    let totalAttempts = 0;
    let average = 0;

    // Iterate through all attempts to aggregate data
    currHeuristicData.attempts.forEach((attempt) => {
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
        name: "Average Time per Quiz (s)",
        value: averageTime,
      },
      {
        name: "Average Score per Quiz",
        value: average + "%",
      },
    ];
  };

  //Get new data when the heuristic changes
  useEffect(() => {
    setLoading(true);
    const getAllCurrData = async () => {
      try {
        await Promise.all([
          getNewHeuristicdata(currHeuristic + 1),
          getNewUIdata(currHeuristic + 1),
        ]);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    getAllCurrData();
  }, [currHeuristic]);

  //Get the heuristic data.
  async function getNewHeuristicdata(heuristic) {
    try {
      const data = await readHeuristicData(heuristic, user.uid);
      console.log(data);
      if (!data) setNoQuizData(true);
      else {
        setNoQuizData(false);
        setCurrHeuristicData(data);
      }
    } catch (e) {
      console.error("Error reading heuristic data");
    }
  }

  //Get the UI data
  async function getNewUIdata(heuristic) {
    try {
      const data = await readUIData(heuristic, user.uid);
      console.log(data);
      if (!data) setNoUIData(true);
      else {
        setNoUIData(false);
        setCurrUIData(data);
      }
    } catch (e) {
      console.error("Error reading UI data");
    }
    data = getHeuristicDataForPie();
    setHeuristicData(data);
    console.log(heuristicData);
  }

  const getUIDataForPie = () => {
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
    currUIData.attempts.forEach((attempt) => {
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
  };

  return (
    <main className={`container-fluid p-4 ${styles.mainContainer}`}>
      <div class="row h-100">
        {
          //The buttons
        }
        <div
          className={`col col-md-2 btn-group-vertical d-none d-md-flex ${styles.heuristicBtnGroup} `}
          role="group"
          aria-label="Heuristic data buttons"
        >
          {heuristics.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`btn h-100 text-center ${styles.heuristicBtn}`}
              disabled={completedHeuristics[i] <= 1}
              onClick={() => setCurrheuristic(i)}
            >
              Heuristic {i + 1}
            </button>
          ))}
        </div>
        {
          //The actual graphs / data
        }
        {!loading ? (
          <div className={`col h-100 ${styles.statsContainer}`}>
            <div class={`row h-100 ${styles.graphContainer}`}>
              <div
                className={`col-md-4 list-group list-group-flush ${styles.listGroup}`}
              >
                {!noQuizData ? (
                  <div
                    className={`list-group-item d-flex flex-column table-responsive h-50`}
                  >
                    <h3 className={`${styles.graphTitle}`}>
                      Total Heuristic Data
                    </h3>
                    <table
                      className={`table table-sm table-striped h-100 ${styles.table}`}
                    >
                      <thead>
                        <tr>
                          <th scope="col">Value</th>
                          <th scope="col">Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getHeuristicDataForPie().map((data, i) => (
                          <tr key={i}>
                            <th className="align-middle" scope="row">
                              {data.name}
                            </th>
                            <td className="align-middle">{data.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <i class="bi bi-exclamation-circle-fill"></i>
                )}
                {!noUIData ? (
                  <div
                    className={`list-group-item d-flex flex-column table-responsive h-50`}
                  >
                    <h3 className={styles.graphTitle}>Total UI Builder Data</h3>
                    <table
                      className={`table table-sm table-striped h-100 ${styles.table}`}
                    >
                      <thead>
                        <tr>
                          <th scope="col">Value</th>
                          <th scope="col">Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getUIDataForPie().map((data, i) => (
                          <tr key={i}>
                            <th className="align-middle" scope="row">
                              {data.name}
                            </th>
                            <td className="align-middle">{data.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <i class="bi bi-exclamation-circle-fill"></i>
                )}
              </div>
              <div
                className={`col-md-8 list-group list-group-flush ${styles.listGroup}`}
              >
                {!noQuizData ? (
                  <BarGraph
                    data={currHeuristicData.attempts}
                    graphTitle={"All Heuristic Data"}
                  />
                ) : (
                  <i class="bi bi-exclamation-circle-fill"></i>
                )}
                {!noUIData ? (
                  <BarGraph
                    data={currUIData.attempts}
                    graphTitle={"All UI Builder Data"}
                  />
                ) : (
                  <i class="bi bi-exclamation-circle-fill"></i>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </main>
  );
}
