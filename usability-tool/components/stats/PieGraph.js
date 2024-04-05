import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import styles from "@/styles/stats.module.scss";

export default function PieGraph({ data, graphTitle, formatData = false }) {
  const formattedData = [];
  if (formatData) {
    for (const [name, val] of Object.entries(data)) {
      formattedData.push({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        value: val,
      });
    }
    data = formattedData;
  }
  console.log(data);
  return (
    <div className={` ${styles.graphContainer}`}>
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
                fill={
                  entry.name === "Correct"
                    ? "#4BAE4F"
                    : entry.name === "Incorrect"
                    ? "#F24336"
                    : "lightblue"
                }
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
