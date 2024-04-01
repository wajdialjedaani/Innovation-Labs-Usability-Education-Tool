"use client";
import { useState, useEffect } from "react";

import { getAuthContext } from "../../components/AuthContextProvider";
import { readHeuristicData, readUIData, readAllData } from "@/lib/firebase/firestore";

import styles from "@/styles/stats.module.scss";

import getDataForTable from "@/lib/stats/getDataForTable";

import BarGraph from "@/components/stats/BarGraph";
import AllData from "@/components/stats/AllData";

const heuristics = Array.from({ length: 10 }, (x, i) => `Heuristic ${i + 1}`);

function NoData({ title }) {
  return (
    <div className="list-group-item h-50 text-center text-danger">
      <h3>{title}</h3>
      <h4>
        <i className="bi bi-exclamation-circle-fill fs-5 m-3"></i>
        No Data
      </h4>
    </div>
  );
}

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
  //Loading all data
  const [loadingAllData, setLoadingAllData] = useState(true);
  //State for if there's no quiz data
  const [noQuizData, setNoQuizData] = useState(false);
  //State for if there's no UI Data
  const [noUIData, setNoUIData] = useState(false);

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

    // return () => localStorage.clear();
  }, [currHeuristic]);

  //Get the data for the all data panel at component load
  useEffect(() => {
    const getAllData = async () => {
      try {
        const data = await readAllData(user.uid);
        console.log(data)
      } catch(e) {
        console.error(e)
      } finally {
        setLoadingAllData(false)
      }
    }

    getAllData();
  }, [])

  //Get the heuristic data.
  async function getNewHeuristicdata(heuristic) {
    try {
      const data = await readHeuristicData(heuristic, user.uid);
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
      if (!data) setNoUIData(true);
      else {
        setNoUIData(false);
        setCurrUIData(data);
      }
    } catch (e) {
      console.error("Error reading UI data");
    }
    // data = getHeuristicDataForPie();
    // setHeuristicData(data);
  }


  return (
    <main className={`container-fluid p-4 ${styles.mainContainer}`}>
      <div className="dropdown d-lg-none mb-3 text-center">
        <button
          className={`dropdown-toggle ${styles.dropDownBtn}`}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Heuristic
        </button>
        <ul className={`dropdown-menu ${styles.dropDownMenu}`}>
          {heuristics.map((_, i) => (
            <li key={i}>
              <button
                key={i}
                type="button"
                className={`btn h-100 text-center dropdown-item`}
                disabled={completedHeuristics[i] < 1}
                onClick={() => setCurrheuristic(i)}
              >
                Heuristic {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="row h-50 mb-3">
        {
          //The buttons
        }
        <div
          className={` col-md-2 btn-group-vertical d-none d-lg-flex ${styles.heuristicBtnGroup} `}
          role="group"
          aria-label="Heuristic data buttons"
        >
          {heuristics.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`btn h-100 text-center ${styles.heuristicBtn}`}
              disabled={completedHeuristics[i] < 1}
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
            <div className={`row h-100`}>
              <div
                className={`col-lg-4 col-12 list-group list-group-flush ${styles.listGroup}`}
              >
                {!noQuizData ? (
                  <div
                    className={`list-group-item d-flex flex-column table-responsive h-50`}
                  >
                    <h3 className={`${styles.graphTitle}`}>
                      Quiz {currHeuristic + 1} Data
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
                        {getDataForTable(currHeuristicData).map((data, i) => (
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
                  <NoData title={"Total Heuristic Data"} />
                )}
                {!noUIData ? (
                  <div
                    className={`list-group-item d-flex flex-column table-responsive h-50`}
                  >
                    <h3 className={styles.graphTitle}>UI Builder {currHeuristic + 1} Data</h3>
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
                        {getDataForTable(currUIData).map((data, i) => (
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
                  <NoData title={"Total UI Builder Data"} />
                )}
              </div>
              <div
                className={`col-lg-8 col-12 list-group list-group-flush ${styles.listGroup}`}
              >
                {!noQuizData ? (
                  <div className="list-group-item d-flex flex-column h-50">
                    <BarGraph
                      data={currHeuristicData.attempts}
                      graphTitle={`Quiz ${currHeuristic + 1} Attempts`}
                    />
                  </div>
                ) : (
                  <NoData title={`Quiz ${currHeuristic + 1} Attempts`} />
                )}
                {!noUIData ? (
                  <div className="list-group-item d-flex flex-column h-50">
                    <BarGraph
                      data={currUIData.attempts}
                      graphTitle={`UI Builder ${currHeuristic + 1} Attempts`}
                    />
                  </div>
                ) : (
                  <NoData title={`UI Builder ${currHeuristic + 1} Attempts`} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="spinner-border mx-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="row h-50">
        {!loadingAllData ?
          <AllData />
        :
        <div className="spinner-border mx-auto" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
        }
      </div>
    </main>
  );
}
