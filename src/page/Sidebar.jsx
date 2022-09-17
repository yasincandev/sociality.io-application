import React, { useState } from "react";
import sociality from "../assets/sidebar-logos/Sociality-logo.png";
import { SidebarBrandLogos, SidebarButtons } from "../SidebarData";

import "./Sidebar.css";
import plusIcon from "../assets/sidebar-icons/plus.svg";
import minusIcon from "../assets/sidebar-icons/minus.svg";
import LocationIcon from "../assets/sidebar-logos/Location.png";

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("#f55661");

  const handleSubMenu = (title) => {
    setSelectedMenu(title);
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="sidebar__header__logo">
            <img src={sociality} alt="sociality" />
          </div>
        </div>
        <div className="sidebar__menu">
          <div className="sidebar__menu__brands">
            <img
              className="sidebar__menu__brands__location"
              src={LocationIcon}
              alt="location"
            />
            <ul className="sidebar__menu__brand__logos">
              {SidebarBrandLogos.map((item, index) => {
                return (
                  <li
                    className="brand__list"
                    style={{ listStyle: "none" }}
                    key={index}
                  >
                    <img src={item.logo} alt="logo" />
                    {item.notification && (
                      <div className="brand__notificaton">99</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sidebar__menu__categories__container">
            <div className="arrow-down"></div>
            {SidebarButtons.map((item, index) => {
              return (
                <div
                  className="sidebar__menu__categories__dropdown__menu"
                  key={index}
                  style={{}}
                >
                  <div className="sidebar__menu__categories__list__container">
                    <ul
                      onClick={() => handleSubMenu(item.title)}
                      className="sidebar__menu__categories__list"
                      style={{
                        backgroundColor: item.color ? "#f55661" : "",
                      }}
                    >
                      <li
                        className="category__list"
                        style={{
                          listStyle: "none",
                        }}
                      >
                        <div className="sidebar__menu__categories__list__container">
                          <div className="sidebar__menu__categories__list__container__icon__text">
                            <img
                              style={{ width: "20px", height: "20px" }}
                              src={item.icon}
                              alt="icon"
                            />

                            <p>{item.title}</p>
                            {item.notification ? (
                              <div className="notification">
                                <p>29</p>
                              </div>
                            ) : null}
                          </div>
                          <div className="sidebar__menu__categories__dropdown">
                            <div
                              onClick={() => handleSubMenu(item.title)}
                              className="sidebar__menu__categories__dropdown__button"
                            >
                              {openSubMenu && item.title === selectedMenu ? (
                                <img src={minusIcon} alt="minus" />
                              ) : (
                                <img src={plusIcon} alt="plus" />
                              )}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {openSubMenu && selectedMenu === item.title ? (
                    <ul className="publish__dropdown__content">
                      {item.title === selectedMenu
                        ? item.subMenu.map((item, index) => {
                            return (
                              <li
                                className="publish__dropdown__content__list"
                                key={index}
                                style={{ color: item.color }}
                              >
                                {item.title}
                              </li>
                            );
                          })
                        : ""}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
