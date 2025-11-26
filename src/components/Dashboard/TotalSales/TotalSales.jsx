import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./styles.scss";

const data = [
  { name: "Direct", value: 300.56, color: "#7367f0" },
  { name: "Affiliate", value: 135.12, color: "#51d29a" },
  { name: "Sponsored", value: 154.02, color: "#5aa8ff" },
  { name: "E-mail", value: 48.96, color: "#f8c255" },
];

const TotalSales = () => {
  return (
    <div className="total-sales-card">
      <h3 className="total-sales-title">Total Sales</h3>

      <div className="sales-content">
        {/* Donut Chart */}
        <div className="donut-container">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Right List */}
        <div className="sales-list">
          {data.map((item, i) => (
            <div className="sales-row" key={i}>
              <div className="left">
                <span className="dot" style={{ background: item.color }}></span>
                <p>{item.name}</p>
              </div>
              <span className="amount">${item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
