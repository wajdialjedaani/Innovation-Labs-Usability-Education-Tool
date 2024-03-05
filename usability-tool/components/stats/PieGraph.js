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
            <Cell fill={"#F24336"} />
            <Cell fill={"#4BAE4F"} />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
