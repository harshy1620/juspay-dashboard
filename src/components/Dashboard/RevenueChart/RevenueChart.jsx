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
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="current"
            stroke="#6C91F7"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#000"
            strokeDasharray="4 4"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
