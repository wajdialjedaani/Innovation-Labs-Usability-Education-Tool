"use client";
import "@/styles/statistics.scss";
import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Text,
} from "recharts";

import { getAuthContext } from "../../components/AuthContextProvider";
import { readHeuristicData, readUIData, readAllHeuristicData } from "@/lib/firebase/firestore";

import { IoAlertCircle } from "react-icons/io5";
import { IconContext } from "react-icons";


const heuristics = Array.from({ length: 10 }, (x, i) => `Heuristic ${i + 1}`);
/*
[
    { name: "Correct", value: 3 },
    { name: "incorrect", value: 2 },
  ]
  */
 function AlertIcon()  {
  return (
    <IconContext.Provider
      value={{
        color: "red",
        size: "25%",
      }}
    >
      <IoAlertCircle />
      <h3>No Data</h3>
    </IconContext.Provider>
  )
};

export default function Statistics() {
  const { user } = getAuthContext();
  const [currHeuristic, setCurrHeuristic] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [currData, setCurrData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [dataArray, setDataArray] = useState([]);

  const colors = { incorrect: "#F24336", correct: "#4BAE4F" };

  function handleScreenResize() {
    if (window.innerWidth <= 768) setIsMobile(true);
    else setIsMobile(false);
  }

  //Returns the data in a form that the graph can read
  function getDataForGraph() {
      return Object.keys(currData)
      .filter(key => key ==="correct" || key === "incorrect")
      .map(key => {
        return {
          name: key,
          value: currData[key]
        }
      })
  }

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);

  //Get the data on the first load
  useEffect(() => {
    async function getAllHeuristicData() {
      //The new state array
      const heuristicDataArray = []
      try {
        //Loop through all 10 heurisics
        for (let i = 0; i < 10; i++) {
          //Get the data or put null if there isn't any
          const heuristicData = await readHeuristicData(i + 1, user.uid)
          heuristicDataArray[i] = heuristicData.data || null
        }
        //Set the state
        setDataArray(heuristicDataArray)
        setCurrData(heuristicDataArray[0])
      } catch(e) {
        console.error(e)
      }
    }
    getAllHeuristicData()
  }, [])

  //Set the currData to the new heuristic's data
  useEffect(() => {
    setCurrData(dataArray[currHeuristic])
  }, [currHeuristic])

  function handleClick(index) {
    setCurrHeuristic(index);
    setActiveButton(index);
  }
  return (
    <main>
      {isMobile ? (
        <label className="mobile-dropdown">
          Select a Heuristic:
          <select
            name="selectedHeuristic"
            value={currHeuristic}
            onChange={(e) => handleClick(Number(e.target.value))}
          >
            {heuristics.map((_, i) => (
              <option value={i}>{i + 1}</option>
            ))}
          </select>
        </label>
      ) : null}

      <div className="main-stat-container">
        {
          !isMobile ? (
            <section className="stat-buttons">
              {dataArray.map((data, i) => (
                 !data ? (
                  <button
                  key={i}
                  disabled
                  className="disabled"
                  >
                    Complete Heuristic {i + 1} to Unlock
                  </button>
                 ) : (
                  <button
                  key={i}
                  onClick={() => handleClick(i)}
                  className={activeButton === i ? "active" : ""}
                  >
                    Heuristic {i + 1}
                  </button>
                 )
              ))}
            </section>
          ) : null
        }
        <section className="stat-container">
          <div className="stat-graphs">
            {/* <ResponsiveContainer className="stats-container"> */}
            <div className="stat-graph-container">
              <h2 className="heuristic-title">Heuristic Data</h2>
              {currData ? (
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={getDataForGraph()}
                      fill="#8884d8"
                      label
                    >
                      {getDataForGraph().map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[entry.name]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <AlertIcon />
              )}
            </div>
            <div className="stat-graph-container">
              <h2 className="heuristic-title">UI Builder Data</h2>
              {currData ? (
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={currData}
                      fill="#8884d8"
                      label
                    >
                      {/* {currData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.type ? colors.correct : colors.incorrect}
                        />
                      ))} */}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <AlertIcon />
              )}
            </div>
            {/* </ResponsiveContainer> */}
          </div>
        </section>
      </div>
    </main>
  );
}
