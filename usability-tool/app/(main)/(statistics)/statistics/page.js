"use client";
import "@/styles/statistics.scss";
import { useState, useEffect, Suspense } from "react";

import { getAuthContext } from "../../components/AuthContextProvider";
import { readHeuristicData, readUIData } from "@/lib/firebase/firestore";

import styles from "@/styles/stats.module.scss";

import PieGraph from "@/components/stats/PieGraph";
import BarGraph from "@/components/stats/BarGraph";

const heuristics = Array.from({ length: 10 }, (x, i) => `Heuristic ${i + 1}`);

export default function Statistics() {
  //Stores the data for the current heuristic
  const [currHeuristicData, setCurrHeuristicData] = useState(null);
  const [currUIData, setCurrUIData] = useState(null);

  //Stores the current heuristic that is selected
  const [currHeuristic, setCurrheuristic] = useState(0);

  //Loading state
  const [loading, setLoading] = useState(true);

  //Get user and metadata
  const {
    user,
    metaDataSuite: {
      metaData: { completedHeuristics },
    },
  } = getAuthContext();

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
      setCurrHeuristicData(data);
    } catch (e) {
      console.error("Erroring reading heuristic data");
    }
  }

  //Get the UI data
  async function getNewUIdata(heuristic) {
    try {
      const data = await readUIData(heuristic, user.uid);
      console.log(data);
      setCurrUIData(data);
    } catch (e) {
      console.error("Erroring reading UI data");
    }
  }

  const getHeuristicDataForPie = () => {
    const latestAttempt = currHeuristicData.attempts.slice(-1)[0];
    return Object.keys(latestAttempt)
      .filter((key) => key === "correct" || key === "incorrect")
      .map((key) => {
        return {
          name: key.charAt(0).toUpperCase() + key.slice(1),
          value: latestAttempt[key],
        };
      });
  };

  const getUIDataForPie = () => {
    const latestAttempt = currUIData.attempts.slice(-1)[0];
    return Object.keys(latestAttempt)
      .filter((key) => key === "correct" || key === "incorrect")
      .map((key) => {
        return {
          name: key.charAt(0).toUpperCase() + key.slice(1),
          value: latestAttempt[key],
        };
      });
  };

  return (
    <main class="container-fluid p-4">
      <div class="row h-100">
        {
          //The buttons
        }
        <div
          className={`col col-md-2 btn-group-vertical ${styles.heuristicBtnGroup}`}
          role="group"
          aria-label="Heuristic data buttons"
        >
          {heuristics.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`btn h-100 text-center ${styles.heuristicBtn}`}
              disabled={completedHeuristics[i] != 3}
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
          <div className={`col ${styles.statsContainer}`}>
            <div class="row h-100">
              <div
                className={`col col-md-4 list-group list-group-flush ${styles.listGroup}`}
                style={{
                  height: "100%",
                }}
              >
                <PieGraph
                  data={getHeuristicDataForPie()}
                  graphTitle={"Most Recent Heuristic Data"}
                />
                <PieGraph
                  data={getUIDataForPie()}
                  graphTitle={"Most Recent UI Builder Data"}
                />
              </div>
              <div
                className={`col list-group list-group-flush ${styles.listGroup}`}
              >
                <BarGraph
                  data={currHeuristicData.attempts}
                  graphTitle={"All Heuristic Data"}
                />
                <BarGraph
                  data={currUIData.attempts}
                  graphTitle={"All UI Builder Data"}
                />
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
