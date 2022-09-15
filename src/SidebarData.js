import logo1 from "./assets/sidebar-logos/Logo1.png";
import logo2 from "./assets/sidebar-logos/Logo2.png";
import logo3 from "./assets/sidebar-logos/Logo3.png";
import logo4 from "./assets/sidebar-logos/Logo4.png";
import logo5 from "./assets/sidebar-logos/Logo5.png";
import logo6 from "./assets/sidebar-logos/Logo6.png";
import icon1 from "./assets/sidebar-icons/Icon1.png";
import icon2 from "./assets/sidebar-icons/Icon2.png";
import icon3 from "./assets/sidebar-icons/Icon3.png";
import icon4 from "./assets/sidebar-icons/Icon4.png";
import icon5 from "./assets/sidebar-icons/Icon5.png";
import icon6 from "./assets/sidebar-icons/Icon6.png";

export const SidebarButtons = [
  {
    title: "NOTIFICATIONS",
    icon: icon1,
    cName: "sidebar__menu__buttons__button",
    color: false,
    notification: true,
    subMenu: [],
  },
  {
    title: "SUMMARY",
    icon: icon2,
    color: false,
    cName: "sidebar__menu__buttons__button",
    notification: false,
    subMenu: [],
  },
  {
    title: "PUBLISH",
    icon: icon3,
    color: true,
    cName: "sidebar__menu__buttons__button",
    notification: false,

    subMenu: [
      {
        title: "Compose",
        color: "#ffffff",
      },
      {
        title: "Feed",
        color: "#f55661",
      },
    ],
  },
  {
    title: "ENGAGE",
    icon: icon4,
    color: false,
    cName: "sidebar__menu__buttons__button",
    notification: false,
    subMenu: [],
  },
  {
    title: "LISTEN",
    icon: icon5,
    color: false,
    cName: "sidebar__menu__buttons__button",
    notification: false,
    subMenu: [],
  },
  {
    title: "REPORT",
    icon: icon6,
    color: false,
    cName: "sidebar__menu__buttons__button",
    notification: false,
    subMenu: [],
  },
];

export const SidebarBrandLogos = [
  {
    logo: logo1,
    cName: "sidebar__brand__menu__icon",
    notification: true,
  },
  {
    logo: logo2,
    cName: "sidebar__brand__menu__icon",
    notification: false,
  },
  {
    logo: logo3,
    cName: "sidebar__brand__menu__icon",
    notification: false,
  },
  {
    logo: logo4,
    cName: "sidebar__brand__menu__icon",
    notification: false,
  },
  {
    logo: logo5,
    cName: "sidebar__brand__menu__icon",
    notification: false,
  },
  {
    logo: logo6,
    cName: "sidebar__brand__menu__icon",
    notification: false,
  },
];
