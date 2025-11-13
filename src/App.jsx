import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Dashboard from "./pages/Dashboard/Dashboard";
import Ecommerce from "./pages/Ecommerce/Ecommerce";
import { useSelector } from "react-redux";
import "./App.scss";

const App = () => {
  const { mode } = useSelector((state) => state.theme);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
