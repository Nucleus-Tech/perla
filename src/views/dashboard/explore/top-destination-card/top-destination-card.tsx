import React from "react";

import "./top-destination-card.scss";

const TopDestinationCard = ({ destination, image }) => {
  return (
    <div className="p-flex p-flex-column top-destination-card">
      <img
        className="top-destination-card-image"
        src={image}
        alt="destination image"
      />
      <div className="top-destination-card-header p-flex p-justify-center">
        <span>{destination}</span>
      </div>
    </div>
  );
};

export default TopDestinationCard;
