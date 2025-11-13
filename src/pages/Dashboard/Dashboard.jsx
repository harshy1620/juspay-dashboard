import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const orders = useSelector((state) => state.orders.data);

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Orders List</h3>
      <ul>
        {orders.map((item) => (
          <li key={item.id}>
            {item.name} — ${item.amount} — {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
