import React from "react";
import entryStatuses from "../entryStatuses";
import "./CardStatus.css";
import ProfilePicture from "../assets/Mask.png";

const CardStatus = () => {
  return (
    <div className="card__stats">
      <ul className="card__stats__list">
        {Object.keys(entryStatuses).map((item) => (
          <li
            key={item}
            className="card__stats__list__item"
            style={{ color: entryStatuses[item].color }}
          >
            <span> {entryStatuses[item].label} </span>{" "}
          </li>
        ))}
      </ul>
      <img
        src={ProfilePicture}
        alt="ProfilePicture"
        className="card__stats__profile-picture"
      />
    </div>
  );
};

export default CardStatus;
