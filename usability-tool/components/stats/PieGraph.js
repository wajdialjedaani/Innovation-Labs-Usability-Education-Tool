import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import styles from "@/styles/stats.module.scss";

export default function PieGraph({ data, graphTitle }) {
  return (
    <div className={`card ${styles.graphContainer}`}>
      <h3 className={`card-header`}>{graphTitle}</h3>
      <ResponsiveContainer>
        <PieChart>
          {/* <text
            x="50%"
            y="7.5%"
            style={{
              fontSize: "2em",
              textAnchor: "middle",
              dominantBaseline: "middle",
              color: "white",
            }}
          >
            {graphTitle}
          </text> */}
          <Pie
            label
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={"75%"}
          >
            {data.map((entry, i) => (
              <Cell
                key={i}
                fill={entry === "Correct" ? "#4BAE4F" : "#F24336"}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
