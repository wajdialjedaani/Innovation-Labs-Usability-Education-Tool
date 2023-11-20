"use client";
import "@/styles/statistics.scss";
import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";

export default function Statistics() {
  const heuristics = [
    "Heuristic 1",
    "Heuristic 2",
    "Heuristic 3",
    "Heuristic 4",
    "Heuristic 5",
    "Heuristic 6",
    "Heuristic 7",
    "Heuristic 8",
    "Heuristic 9",
    "Heuristic 10",
  ];

  const exampleData = [
    { name: "Heuristic 1", value: 400 },
    { name: "Heuristic 2", value: 434 },
    { name: "Heuristic 3", value: 203 },
    { name: "Heuristic 4", value: 145 },
    { name: "Heuristic 5", value: 457 },
    { name: "Heuristic 6", value: 48 },
  ];

  return (
    <main>
      <section className="stat-buttons">
        {heuristics.map((heuristic) => (
          <button key={heuristic}>{heuristic}</button>
        ))}
      </section>
      <section className="stat-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={3} height={3}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={exampleData}
              cx="50%"
              cy="50%"
              outerRadius={80}
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
