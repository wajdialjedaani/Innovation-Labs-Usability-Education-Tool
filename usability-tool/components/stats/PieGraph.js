import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import styles from "@/styles/stats.module.scss";

export default function PieGraph({ data, graphTitle }) {
  return (
    <div className={`list-group-item ${styles.graphContainer}`}>
      <h3 className={styles.graphTitle}>{graphTitle}</h3>
      <ResponsiveContainer height="100%" width="100%">
        <PieChart>
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
                fill={entry.name === "Correct" ? "#4BAE4F" : "#F24336"}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
