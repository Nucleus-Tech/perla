import React from 'react';
import { Rate } from 'antd';

// @TODO change wifi
import wifi from '../../assets/icons/wifi.svg';

import "./card.scss";

const Card = () =>
    <div className="p-flex p-flex-column wrapper">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
        <Rate className="rate" disabled defaultValue={4} />
        <div className="box p-flex p-items-center">
            <span className="name">Hotel Spirus</span>
            <img className="pin" src="https://i.pinimg.com/originals/30/98/49/309849c5815761081926477e5e872f1e.png" />
        </div>
        <div className="p-flex p-wrap facility">
            <div className="facility-item p-flex p-items-center">
                <img className="facility-icon" src={wifi} />
                <span className="facility-name">Wi-fi</span>
            </div>
        </div>
    </div>

export default Card;