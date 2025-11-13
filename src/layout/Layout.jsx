import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import Rightbar from "../components/Rightbar/Rightbar";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotifications } from "../features/notifications/notificationsSlice";
import "./Layout.scss";

const Layout = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.notifications);

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Topbar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>

      {open && (
        <>
          <div
            className="rightbar-backdrop"
            onClick={() => dispatch(toggleNotifications())}
          />
          <Rightbar />
        </>
      )}
    </div>
  );
};

export default Layout;
