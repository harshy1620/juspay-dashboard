import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./styles.scss";

const data = [
  { month: "Jan", projected: 30, actual: 22 },
  { month: "Feb", projected: 40, actual: 32 },
  { month: "Mar", projected: 45, actual: 39 },
  { month: "Apr", projected: 50, actual: 42 },
  { month: "May", projected: 60, actual: 50 },
  { month: "Jun", projected: 70, actual: 52 },
];

const BarChartCard = () => {
  return (
    <div className="bar-chart-card">
      
      {/* Header */}
      <div className="bar-chart-header">
        <h3>Projections vs Actuals</h3>

        <div className="chart-legend">
          <div className="item projected">
            <span className="dot"></span> Projected
          </div>
          <div className="item actual">
            <span className="dot"></span> Actual
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data} barSize={16}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />

            <Bar
              dataKey="projected"
              fill="#E1ECFF"   
              radius={[6, 6, 0, 0]} 
            />
            <Bar
              dataKey="actual"
              fill="#4C8EF7"  
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default BarChartCard;
