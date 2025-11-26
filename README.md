📊 Juspay Dashboard (Admin Panel UI)

A modern, responsive Admin Dashboard & Ecommerce Orders UI built using React + Vite + SCSS + Recharts + Redux Toolkit.
This project visualizes e-commerce metrics (revenue, orders, customers, locations, products) and also includes a fully functional Orders List page with searching, sorting and pagination.


🔗 Live Demo

👉 Live URL: (Add your Vercel link after deployment)

https://juspay-dashboard.vercel.app


👉 GitHub Repository:

https://github.com/harshy1620/juspay-dashboard

🖥️ Tech Stack

React 19 – UI library

Vite 7 – Fast build & dev server

SCSS – Styling & layout

Redux Toolkit – State management (theme & UI state)

Recharts – Line/Bar/Donut charts

react-simple-maps – World map visualization

Vercel – Deployment platform

✨ Features
📌 1. Dashboard (Default view)

Clean, card-based layout

Responsive grid using Flex + CSS Grid

Stats cards (Customers, Orders, Revenue, Growth) with change percentages

Projections vs Actuals bar chart

Revenue comparison line chart (current vs previous week)

Revenue by Location:

World map with markers (react-simple-maps)

Location-wise revenue list

Top Selling Products table

Total Sales donut chart with legend

Subtle hover + micro-interactions on cards and table rows

📌 2. Ecommerce Orders List Page

Accessible via the Sidebar → “eCommerce” item.

Orders table with columns:

Checkbox selection

Order ID

User (with avatar)

Project

Address

Date

Status badge (In Progress, Complete, Pending, Approved, Rejected)

Dummy dataset of 50 orders to mimic real API data

Search with debouncing:

Search by user / project / status

Debounced with setTimeout to avoid unnecessary re-renders

Sorting:

Sort by Order ID (ascending/descending)

Pagination:

Page size: 10 items per page

Pagination controls: numbered pages + previous/next arrows

Row hover effect:

Highlight row background on hover

Status styling:

Colored dot + colored text for each status type

📌 3. General

Modular, reusable components

Scalable folder structure

Ready for real API integration (data currently mocked)


📁 Folder Structure
src/
│
├── assets/
│   └── icons/                # Local icons / images
│
├── app/
│   ├── store.js              # Redux store
│   └── rootReducer.js        # Root reducer
│
├── components/
│   ├── Sidebar/              # Left navigation
│   ├── Topbar/               # Header with search & icons
│   ├── Rightbar/             # Notifications panel
│   └── Dashboard/
│       ├── StatsCard/
│       ├── BarChartCard/
│       ├── RevenueChart/
│       ├── LocationMap/
│       ├── ProductTable/     # Top Selling Products
│       └── TotalSales/
│
├── pages/
│   ├── Dashboard/
│   │   ├── Dashboard.jsx
│   │   └── styles.scss
│   └── Ecommerce/
│       ├── Ecommerce.jsx     # Orders List page
│       ├── data.js           # Orders mock data (50 entries)
│       └── Ecommerce.scss
│
├── layout/
│   └── Layout.jsx            # Sidebar + Topbar + Content layout
│
├── features/
│   ├── theme/                # Theme slice (light/dark ready)
│   ├── notifications/        # Notification sidebar toggle
│   └── orders/               # (optional / future) orders state
│
├── utils/
│   ├── constants.js
│   └── formatters.js
│
├── index.scss                # Global styles
└── main.jsx                  # React root

🚀 Running the Project Locally
1️⃣ Clone the repository
git clone https://github.com/harshy1620/juspay-dashboard.git
cd juspay-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


Now open:

http://localhost:5173


⚠️ Node Version Requirement
Vite 7 requires Node.js ≥ 20.19 (or 22.x).
Check your version:

node -v


If it’s lower, update Node (via NVM or https://nodejs.org
).

🏗️ Production Build

To create a production-optimized build:

npm run build


To preview the production build locally:

npm run preview


Build output is generated in the dist/ folder.
