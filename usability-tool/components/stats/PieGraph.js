import { ResponsiveContainer, PieChart, Pie } from "recharts";

export default function PieGraph({ data, graphTitle }) {
  return (
    <ResponsiveContainer height={"50%"}>
      <PieChart>
        <text
          x="50%"
          y="7.5%"
          style={{
            fontSize: "2em",
            textAnchor: "middle",
            dominantBaseline: "middle",
          }}
        >
          {graphTitle}
        </text>
        <Pie
          label
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={"75%"}
          fill="#8884d8"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
