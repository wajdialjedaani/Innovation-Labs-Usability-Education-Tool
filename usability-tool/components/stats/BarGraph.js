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
    <div className={`d-flex flex-column h-100`}>
      <h3 className={styles.graphTitle}>{graphTitle}</h3>
      <ResponsiveContainer height="100%" width="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="correct"
            fill="#4BAE4F"
            activeBar={<Rectangle stroke="black" />}
          />
          <Bar
            dataKey="incorrect"
            fill="#F24336"
            activeBar={<Rectangle stroke="black" />}
          />
          <Bar
            dataKey="time"
            fill="lightblue"
            activeBar={<Rectangle stroke="black" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
