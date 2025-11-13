import React from "react";
import "./Topbar.scss";
import { useDispatch } from "react-redux";
import { toggleNotifications } from "../../features/notifications/notificationsSlice";
import { toggleTheme } from "../../features/theme/themeSlice";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // ✅ Extract path and decide breadcrumb label
  const currentPath = location.pathname.toLowerCase();
const pageName = currentPath.split("/")[1] || "default";
const activePage = pageName.charAt(0).toUpperCase() + pageName.slice(1);


  return (
    <header className="topbar">
      {/* LEFT SECTION */}
      <div className="topbar__left">
        <div className="topbar__icons">
          <img
            src="https://res.cloudinary.com/do7f1dw68/image/upload/v1762949104/Sidebar_bvjunj.png"
            alt="menu"
            className="topbar__icon"
          />
          <img
            src="https://res.cloudinary.com/do7f1dw68/image/upload/v1762949224/Star_cdxjfq.png"
            alt="star"
            className="topbar__icon"
          />
          <div className="topbar__breadcrumb">
            <span>Dashboards</span>
            <span className="divider">/</span>
            <span className="active">{activePage}</span>
          </div>
        </div>
      </div>

      {/* CENTER SECTION - Search */}
      <div className="topbar__center">
        <div className="topbar__search-wrapper">
          <img
            src="https://res.cloudinary.com/do7f1dw68/image/upload/v1762949285/IconSet_5_qogpjv.png"
            alt="search"
            className="search-icon"
          />
          <input
            type="text"
            className="topbar__search"
            placeholder="Search"
          />
          <img
            src="https://res.cloudinary.com/do7f1dw68/image/upload/v1762949808/Text_lpxvik.png"
            alt="shortcut"
            className="search-shortcut"
          />
        </div>
      </div>

      {/* RIGHT SECTION - Theme, Refresh, Notification, Layout */}
      <div className="topbar__right">
        <button
          className="topbar__btn"
          onClick={() => dispatch(toggleTheme())}
          title="Toggle theme"
        >
          <img
            src="https://res.cloudinary.com/do7f1dw68/image/upload/v1762949928/Button_1_v0hwvj.png"
            alt="theme"
          />
        </button>

        <button className="topbar__btn" title="History">
          <img
            src="https://res.cloudinary.com/do7f1dw68/image/upload/v1762950006/IconSet_6_wyxdsj.png"
            alt="refresh"
          />
        </button>

        <button
          className="topbar__btn"
          onClick={() => dispatch(toggleNotifications())}
          title="Notifications"
        >
          <img
            src="https://res.cloudinary.com/do7f1dw68/image/upload/v1762950042/IconSet_7_htizub.png"
            alt="bell"
          />
        </button>

        <button className="topbar__btn" title="Layout">
          <img
            src="https://res.cloudinary.com/do7f1dw68/image/upload/v1762949104/Sidebar_bvjunj.png"
            alt="layout"
          />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
