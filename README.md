📊 Juspay Dashboard (Admin Panel UI)

A modern, responsive Admin Dashboard UI built using React + Vite + SCSS + Recharts.
This project visualizes e-commerce metrics like revenue, orders, customers, locations, and product performance.

Built as a UI assignment / showcase inspired by Juspay-style analytics dashboards.

🔗 Live Demo

👉 Live URL: (https://juspay-dashboard-one.vercel.app/)

👉 GitHub Repository:

https://github.com/harshy1620/juspay-dashboard

🖥️ Tech Stack

React 18 – UI development

Vite – Fast bundler & dev server

SCSS – Styling

Recharts – Bar / Line / Donut charts

Redux Toolkit – App state (theme + features ready)

react-simple-maps – World map visualization

Vercel – Deployment

✨ Features

✅ Clean & modern dashboard UI
✅ Responsive layout (desktop, tablet, mobile)
✅ Stats cards with trend indicators
✅ Projections vs Actuals bar chart
✅ Revenue comparison line chart
✅ World map with location markers
✅ Revenue by location list
✅ Top selling products table
✅ Donut chart for total sales
✅ Hover & interaction effects
✅ Modular, reusable components

📁 Folder Structure
src/
│
├── assets/
│   └── icons/
│
├── components/
│   └── Dashboard/
│       ├── StatsCard/
│       ├── BarChartCard/
│       ├── RevenueChart/
│       ├── LocationMap/
│       ├── ProductsTable/
│       └── TotalSales/
│
├── pages/
│   └── Dashboard/
│       ├── Dashboard.jsx
│       └── styles.scss
│
├── layout/
│   └── Layout.jsx
│
├── app/
│   ├── store.js
│   └── rootReducer.js
│
├── utils/
│   ├── constants.js
│   └── formatters.js
│
└── main.jsx

🚀 How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/harshy1620/juspay-dashboard.git
cd juspay-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


Now open this in your browser:

http://localhost:5173


