import React from "react";
import "./Rightbar.scss";
import { rightbarData } from "./data";
import { useDispatch } from "react-redux";
import { toggleNotifications } from "../../features/notifications/notificationsSlice";

const Rightbar = () => {
  const dispatch = useDispatch();

  return (
    <aside className="rightbar">
      {/* Header */}
      {/* <div className="rightbar__header">
        <h4>Notifications</h4>
        <button
          className="rightbar__close"
          onClick={() => dispatch(toggleNotifications())}
        >
          ✕
        </button>
      </div> */}

      <div className="rightbar__scroll">
        {/* Notifications Section */}
        <div className="rightbar__section">
          <h5 className="rightbar__title">Notifications</h5>
          {rightbarData.notifications.map((item, i) => (
            <div className="rightbar__item" key={i}>
              <img src={item.icon} alt="notif" className="rightbar__icon" />
              <div className="rightbar__text">
                <p>{item.text.slice(0, 24) + (item.text.length > 25 ? "..." : "")}</p>
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Activities Section */}
        <div className="rightbar__section">
          <h5 className="rightbar__title">Activities</h5>
          {rightbarData.activities.map((item, i) => (
            <div className="rightbar__activity" key={i}>
              <img src={item.icon} alt="activity" className="rightbar__avatar" />
              <div className="rightbar__activity-text">
                      <p>{item.text.slice(0, 24) + (item.text.length > 25 ? "..." : "")}</p>
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contacts Section */}
        <div className="rightbar__section">
          <h5 className="rightbar__title">Contacts</h5>
          {rightbarData.contacts.map((item, i) => (
            <div className="rightbar__contact" key={i}>
              <img src={item.icon} alt={item.name} className="rightbar__avatar" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Rightbar;
