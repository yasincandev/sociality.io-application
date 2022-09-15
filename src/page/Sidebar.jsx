import React, { useState } from "react";
import sociality from "../assets/sidebar-logos/Sociality-logo.png";
import { SidebarBrandLogos, SidebarButtons } from "../SidebarData";
import SliderToggle from "../assets/align-justify.svg";
import "./Sidebar.css";
import plusIcon from "../assets/sidebar-icons/plus.svg";
import minusIcon from "../assets/sidebar-icons/minus.svg";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("#f55661");

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleSubMenu = (title) => {
    setSelectedMenu(title);
    setOpenSubMenu(!openSubMenu);
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
              <div onClick={handleSidebar} className="sidebar__menu__open">
                <img src={SliderToggle} alt="" />
              </div>
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
            <div className="sidebar__menu__categories__container">
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
      ) : (
        <div className="sidebar__menu__open">
          <div onClick={handleSidebar} className="sidebar__menu__open__button">
            <img src={SliderToggle} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
