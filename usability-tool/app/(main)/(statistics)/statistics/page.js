"use client";
import "@/styles/statistics.scss";
import { useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const heuristics = Array.from({ length: 10 }, (x, i) => `Heuristic ${i + 1}`);

const exampleData = heuristics.map(() => [
  {
    name: `Number of Questions Right`,
    value: Math.floor(Math.random() * 10),
  },
  {
    name: `Number of Questions Wrong`,
    value: Math.floor(Math.random() * 10),
  },
  {
    name: `Example`,
    value: Math.floor(Math.random() * 25),
  },
]);

export default function Statistics() {
  const [currHeuristic, setCurrHeuristic] = useState(0);

  return (
    <main>
      <section className="stat-buttons">
        {heuristics.map((heuristic, index) => (
          <button key={index} onClick={() => setCurrHeuristic(index)}>
            {heuristic}
          </button>
        ))}
      </section>
      <section className="stat-container">
        <ResponsiveContainer width="50%" height="50%">
          <BarChart width={150} height={40} data={exampleData[currHeuristic]}>
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="50%" height="50%">
          <PieChart width={350} height={450}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={exampleData[currHeuristic]}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </section>
    </main>
  );
}
