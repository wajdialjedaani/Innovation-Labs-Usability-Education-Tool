import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "@/styles/stats.module.scss";

export default function BarGraph({ data, graphTitle }) {
  return (
    <div className={styles.graphContainer}>
      <h3 className={styles.graphTitle}>{graphTitle}</h3>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="correct"
            fill="#8884d8"
            activeBar={<Rectangle fill="green" stroke="blue" />}
          />
          <Bar
            dataKey="incorrect"
            fill="#82ca9d"
            activeBar={<Rectangle fill="red" stroke="purple" />}
          />
          <Bar
            dataKey="time"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
