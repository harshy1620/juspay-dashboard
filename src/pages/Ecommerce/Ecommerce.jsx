import React, { useState, useMemo, useEffect } from "react";
import "./Ecommerce.scss";
import { ordersData } from "./data";

const Ecommerce = () => {
  const [orders, setOrders] = useState(ordersData);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);
//   const [filterOpen, setFilterOpen] = useState(false);

  const ITEMS_PER_PAGE = 10;

  //Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = ordersData.filter(
        (item) =>
          item.user.toLowerCase().includes(search.toLowerCase()) ||
          item.project.toLowerCase().includes(search.toLowerCase()) ||
          item.status.toLowerCase().includes(search.toLowerCase())
      );
      setOrders(filtered);
      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // Sort toggle
  const handleSort = () => {
    console.log("Sorting");
    const sorted = [...orders].sort((a, b) => {
      if (sortAsc) return a.id.localeCompare(b.id);
      return b.id.localeCompare(a.id);
    });
    setOrders(sorted);
    setSortAsc(!sortAsc);
  };

  // Pagination
  const paginatedOrders = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return orders.slice(start, start + ITEMS_PER_PAGE);
  }, [orders, page]);

  return (
    <div className="ecommerce">
      {/* HEADER */}
      <h2 className="ecommerce__title">Order List</h2>

      {/* TOOLBAR */}
      <div className="ecommerce__toolbar">
        <div className="toolbar__left">
          <button  title="Dummy Add New Order">
            <img src="https://res.cloudinary.com/do7f1dw68/image/upload/v1763005432/Button_4_pzu9eg.png" alt="add" />
          </button>
          <button  title=" Dummy Filter">
            <img src="https://res.cloudinary.com/do7f1dw68/image/upload/v1763005388/Button_3_l2vk04.png" alt="filter" />
          </button>
          <button onClick={handleSort} title="Sort By ID">
            <img src="https://res.cloudinary.com/do7f1dw68/image/upload/v1763005313/Button_2_qqiycn.png" alt="sort by ID" />
          </button>
        </div>

        <div className="toolbar__right">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          
        </div>
      </div>

      {/* TABLE */}
      <table className="order-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody className="t-body">
          {paginatedOrders.map((order, i) => (
            <tr key={i}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{order.id}</td>
              <td className="user-cell">
                <img src={order.avatar} alt={order.user} />
                {order.user}
              </td>
              <td>{order.project}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
             <td className={`status ${order.status.replace(" ", "-").toLowerCase()}`}>
  <span className="status-dot"></span>
  {order.status}
</td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
   <div className="pagination">
  {/* Left arrow */}
  <button
    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
    disabled={page === 1}
    className="arrow"
  >
    &lt;
  </button>

  {/* Numbered page buttons */}
  {Array.from({ length: Math.ceil(orders.length / ITEMS_PER_PAGE) }, (_, i) => (
    <button
      key={i}
      className={page === i + 1 ? "active" : ""}
      onClick={() => setPage(i + 1)}
    >
      {i + 1}
    </button>
  ))}

  {/* Right arrow */}
  <button
    onClick={() =>
      setPage((prev) =>
        Math.min(prev + 1, Math.ceil(orders.length / ITEMS_PER_PAGE))
      )
    }
    disabled={page === Math.ceil(orders.length / ITEMS_PER_PAGE)}
    className="arrow"
  >
    &gt;
  </button>
</div>

    </div>
  );
};

export default Ecommerce;
