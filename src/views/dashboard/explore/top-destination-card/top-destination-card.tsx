import React from "react";

import crown from "../../../../assets/images/crown.svg";

import "./top-destination-card.scss";

const TopDestinationCard = ({ destination, image, onClick }) => {
  return (
    <div
      className="p-flex p-flex-column top-destination-card"
      onClick={onClick}
    >
      <img
        className="top-destination-card-image"
        src={image}
        alt="destination image"
      />
      <div className="top-destination-card-header p-flex p-justify-between">
        <div className="p-flex p-justify-center top-destination-card-header_destination">
          <span>{destination}</span>
        </div>
        <img className="crown" src={crown} alt="crown" />
      </div>
    </div>
  );
};

export default TopDestinationCard;
