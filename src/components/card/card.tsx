import React from "react";
import { Rate } from "antd";

import "./card.scss";

const Card = ({ name, category, facilities }) => (
  <div className="p-flex p-flex-column wrapper">
    <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
    <Rate className="rate" disabled defaultValue={category} />
    <div className="box p-flex p-items-center">
      <span className="name">{name}</span>
      <img
        className="pin"
        src="https://i.pinimg.com/originals/30/98/49/309849c5815761081926477e5e872f1e.png"
      />
    </div>
    <div className="p-flex">
      {facilities.map((facility, index) => (
        <div key={index} className="p-flex p-wrap facility">
          <div className="facility-item p-flex p-items-center">
            <img className="facility-icon" src={facility.image} />
            <span className="facility-name">{facility.name}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Card;
