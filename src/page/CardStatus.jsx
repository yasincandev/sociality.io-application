import React from "react";
import "./CardStatus.css";

const CardStatus = () => {
  return (
    <div className="card__stats">
      <ul className="card__stats__list">
        <li style={{ color: "#ACACAC" }} className="card__stats__list__item">
          <span> Published </span>
        </li>
        <li style={{ color: "#3AC183" }} className="card__stats__list__item">
          <span>Scheduled</span>
        </li>
        <li style={{ color: "#F7BF38" }} className="card__stats__list__item">
          <span>Need Approval</span>
        </li>
        <li style={{ color: "#FB6450" }} className="card__stats__list__item">
          <span>Error</span>
        </li>
        <li style={{ color: "##67B1F2" }} className="card__stats__list__item">
          <span> Notes</span>
        </li>
      </ul>
    </div>
  );
};

export default CardStatus;
