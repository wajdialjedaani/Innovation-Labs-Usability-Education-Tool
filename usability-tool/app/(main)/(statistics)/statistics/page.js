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
import { readHeuristicData, readUIData } from "@/lib/firebase/firestore";

import { IoAlertCircle } from "react-icons/io5";
import { IconContext } from "react-icons";

import { getDataSuite } from "../../components/ContextProvider";
import { Enriqueta } from "next/font/google";

const heuristics = Array.from({ length: 10 }, (x, i) => `Heuristic ${i + 1}`);
/*
[
    { name: "Correct", value: 3 },
    { name: "incorrect", value: 2 },
  ]
  */
const AlertIcon = (
  <IconContext.Provider
    value={{
      color: "red",
      size: "25%",
    }}
  >
    <IoAlertCircle />
    <h3>No Data</h3>
  </IconContext.Provider>
);

export default function Statistics() {
  const { user } = getAuthContext();
  const [currHeuristic, setCurrHeuristic] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [currData, setCurrData] = useState(null);
  const colors = { incorrect: "#F24336", correct: "#4BAE4F" };

  function handleClick(index) {
    setCurrHeuristic(index);
    setActiveButton(index);
  }

  // const { dataState: importedUserData } = getDataSuite();

  useEffect(() => {
    async function getData() {
      //Figure out a caching mechanism
      const { result, error, data } = await readHeuristicData(
        currHeuristic + 1,
        user.uid
      );
      //TODO: Get UI builder data

      // console.log(data);

      if (!data) {
        setCurrData(null);
      } else {
        let i = 0;
        const newData = [];
        for (const [key, value] of Object.entries(data)) {
          newData[i] = {
            type: key === "correct" ? 1 : 0,
            name: `Number of questions ${key}`,
            value,
          };
          i++;
        }
        setCurrData(newData);
      }
    }

    getData();
  }, [currHeuristic]);

  return (
    <main>
      {/* <div className="progress-container">
        <h2>Current Progress:</h2>
        <ResponsiveContainer width="50%" height={250}>
          <PieChart width={100} height={100}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={importedUserData.progressData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {importedUserData.progressData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div> */}
      <div className="main-stat-container">
        <section className="stat-buttons">
          {heuristics.map((heuristic, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={activeButton === index ? "active" : ""}
            >
              {heuristic}
            </button>
          ))}
        </section>
        <section className="stat-container">
          <div className="stat-graphs">
            <ResponsiveContainer
              width="100%"
              height="100%"
              className="stats-container"
            >
              <div className="stat-graph-container">
                <h2 className="heuristic-title">Heuristic Data</h2>
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
                        {currData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              entry.type ? colors.correct : colors.incorrect
                            }
                          />
                        ))}
                      </Pie>

                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  AlertIcon
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
                        {currData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              entry.type ? colors.correct : colors.incorrect
                            }
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  AlertIcon
                )}
              </div>
            </ResponsiveContainer>
          </div>

          {/* <div className="wrong-questions-container">
            <h1>Questions Wrong</h1>
            <hr></hr>
            <ul>
              {importedUserData.heuristicData[currHeuristic].questionsWrong.map(
                (Q, i) => (
                  <li>{Q}</li>
                )
              )}
            </ul>
          </div> */}
        </section>
      </div>
    </main>
  );
}
