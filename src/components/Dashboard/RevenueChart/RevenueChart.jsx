import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import "./styles.scss";

const data = [
  { month: "Jan", current: 12, previous: 18 },
  { month: "Feb", current: 18, previous: 10 },
  { month: "Mar", current: 10, previous: 20 },
  { month: "Apr", current: 20, previous: 15 },
  { month: "May", current: 28, previous: 22 },
  { month: "Jun", current: 24, previous: 28 }
];

const RevenueChart = () => {
  return (
    <div className="revenue-chart">
      <h3>Revenue</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="var(--border-color)" />
          <XAxis dataKey="month" axisLine={{ stroke: "var(--border-color)" }} tick={{ fill: "var(--muted)" }} />
          <YAxis axisLine={{ stroke: "var(--border-color)" }} tick={{ fill: "var(--muted)" }} />
          <Tooltip contentStyle={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)", border: "1px solid var(--border-color)" }} itemStyle={{ color: "var(--text-color)" }} />
          <Legend wrapperStyle={{ color: "var(--muted)" }} />

          <Line
            type="monotone"
            dataKey="current"
            stroke="var(--primary)"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="var(--text-color)"
            strokeDasharray="4 4"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
