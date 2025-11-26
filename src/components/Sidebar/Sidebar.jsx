import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "./data";
import "./Sidebar.scss";
import { ChevronDown, ChevronRight } from "lucide-react";
import avatar from "../../assets/icons/IconSet (4).png";


const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <aside className="sidebar">
      {/* Header */}
      <div className="sidebar__header">
        <img
          src={avatar}
          alt="avatar"
          className="sidebar__avatar"
        />
        <h3 className="sidebar__title">ByeWind</h3>
      </div>

      {/* Menu */}
      <nav className="sidebar__menu">
        {/* Favorites (special header with Recently) */}
        <div className="sidebar__section">
          <div className="sidebar__section-head">
            <p className="sidebar__section-title">Favorites</p>
            <p className="sidebar__section-sub">Recently</p>
          </div>

          <ul className="sidebar__list favorites">
            {sidebarData[0].items.map((item, i) => (
              <li key={i} className="sidebar__fav-item">
                <span className="sidebar__fav-dot">•</span>
                <span className="sidebar__fav-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboards (only Default & eCommerce per your request) */}
        <div className="sidebar__section">
          <p className="sidebar__section-title">Dashboards</p>
          <ul className="sidebar__list">
            {sidebarData[1].items.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                //   end={item.path === "/"}
                  className={({ isActive }) =>
                    isActive ? "sidebar__item active" : "sidebar__item"
                  }
                >
                  <div className="sidebar__item-left">
                    {/* left pill indicator is done via .active styles */}
                    <span className="sidebar__icon-placeholder" />
                    <span className="sidebar__label">{item.label}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages */}
        <div className="sidebar__section">
          <p className="sidebar__section-title">Pages</p>
          <ul className="sidebar__list pages">
            {sidebarData[2].items.map((item, i) => (
              <li key={i}>
                {item.hasDropdown ? (
                  <>
                    <div
                      className="sidebar__item dropdown-no-bg"
                      onClick={() => toggleDropdown(item.label)}
                      role="button"
                      tabIndex={0}
                    //   onKeyDown={(e) => e.key === "Enter" && toggleDropdown(item.label)}
                    >
                      {openDropdown === item.label ? (
                        <ChevronDown size={14} className="sidebar__arrow" />
                      ) : (
                        <ChevronRight size={14} className="sidebar__arrow" />
                      )}
                      <div className="sidebar__item-left no-bullet">
                      
                        <img className="sidebar__page-icon"   src={item.icon} alt={`${item.label} icon`} />
                        <span className="sidebar__label">{item.label}</span>
                      </div>

                    
                    </div>

                    {/* Subitems */}
                    {openDropdown === item.label && (
                      <ul className="sidebar__sublist">
                        {item.subItems.map((sub, si) => (
                          <li key={si} className="sidebar__subitem">
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <div className="sidebar__item no-bullet">
                   {openDropdown === item.label ? (
                        <ChevronDown size={14} className="sidebar__arrow" />
                      ) : (
                        <ChevronRight size={14} className="sidebar__arrow" />
                      )}
                    <div className="sidebar__item-left no-bullet">
                      <img className="sidebar__page-icon" src={item.icon} alt={`${item.label} icon`} />

                      <span className="sidebar__label">{item.label}</span>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
