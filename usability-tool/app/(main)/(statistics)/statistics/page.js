"use client";
import "@/styles/statistics.scss";
import { useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Text,
} from "recharts";

import { getDataSuite } from "../../components/ContextProvider";

const heuristics = Array.from({ length: 10 }, (x, i) => `Heuristic ${i + 1}`);

export default function Statistics() {
  const [currHeuristic, setCurrHeuristic] = useState(0);

  const { dataState: importedUserData } = getDataSuite();
  console.log(importedUserData);
  return (
    <main>
      <div className="progress-container">
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
      </div>
      <div className="main-stat-container">
        <section className="stat-buttons">
          {heuristics.map((heuristic, index) => (
            <button key={index} onClick={() => setCurrHeuristic(index)}>
              {heuristic}
            </button>
          ))}
        </section>
        <section className="stat-container">
          <div className="stats-container">
            <ResponsiveContainer
              width="100%"
              height="40%"
              className="stat-graph-container"
            >
              <h2 className="heuristic-title">Heuristic Data</h2>
              <PieChart width="50%" height="50%">
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={importedUserData.heuristicData[currHeuristic].data}
                  cx="50%"
                  cy="50%"
                  fill="#8884d8"
                  label
                >
                  {importedUserData.heuristicData[currHeuristic].data.map(
                    (entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    )
                  )}
                </Pie>
                <Tooltip />
              </PieChart>
              <h2 className="heuristic-title">UI Builder Data</h2>
              <PieChart width="50%" height="50%">
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={importedUserData.heuristicData[currHeuristic].data}
                  cx="50%"
                  cy="50%"
                  fill="#8884d8"
                  label
                >
                  {importedUserData.heuristicData[currHeuristic].data.map(
                    (entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    )
                  )}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="wrong-questions-container">
            <h1>Questions Wrong</h1>
            <hr></hr>
            <ul>
              {importedUserData.heuristicData[currHeuristic].questionsWrong.map(
                (Q, i) => (
                  <li>{Q}</li>
                )
              )}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
