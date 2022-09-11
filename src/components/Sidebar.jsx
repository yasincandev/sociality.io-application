import React from "react";
import sociality from "../assets/sidebar-logos/Sociality-logo.png";
import { SidebarBrandLogos, SidebarButtons } from "./SidebarData";
import menu from "../assets/menu.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = React.useState(true);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      {openSidebar ? (
        <div className="sidebar">
          <div className="sidebar__header">
            <div className="sidebar__header__logo">
              <img src={sociality} alt="sociality" />
            </div>
            <div className="sidebar__header__menu">
              <button onClick={handleSidebar} className="sidebar__menu__open">
                <img src={menu} alt="" />
              </button>
            </div>
          </div>
          <div className="sidebar__menu">
            <div className="sidebar__menu__brands">
              <ul className="sidebar__menu__brand__logos">
                {SidebarBrandLogos.map((item, index) => {
                  return (
                    <li
                      className="brand__list"
                      style={{ listStyle: "none" }}
                      key={index}
                    >
                      <img src={item.logo} alt="logo" />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="sidebar__menu__buttons">
              <ul className="sidebar__menu__buttons__list">
                {SidebarButtons.map((item, index) => {
                  return (
                    <li
                      className="button__list"
                      style={{ listStyle: "none" }}
                      key={index}
                    >
                      <img src={item.icon} alt="icon" />
                      <p>{item.title}</p>

                      {item.notification ? (
                        <span className="notification__text">29</span>
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar__menu__open">
          <button
            onClick={handleSidebar}
            className="sidebar__menu__open__button"
          >
            <img src={menu} alt="" />
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
