import { Checkbox, Rate } from 'antd';
import React from 'react';

import "./filter.scss";

const Filter = () =>
    <div className="wrapper destination-filter p-flex p-flex-column p-pb4">
        <h1 className="destination-filter_title border-bottom">Filters</h1>
        <div className="p-flex p-flex-column border-bottom padding">
            <h2 className="destination-filter_subtitle">Choose star rating</h2>
            <div>
                <Checkbox className="p-mr2"></Checkbox>
                <Rate disabled defaultValue={5} />
            </div>
            <div>
                <Checkbox className="p-mr2"></Checkbox>
                <Rate disabled defaultValue={4} />
            </div>
            <div>
                <Checkbox className="p-mr2"></Checkbox>
                <Rate disabled defaultValue={3} />
            </div>
            <div>
                <Checkbox className="p-mr2"></Checkbox>
                <Rate disabled defaultValue={2} />
            </div>
            <div>
                <Checkbox className="p-mr2"></Checkbox>
                <Rate disabled defaultValue={1} />
            </div>
        </div>
        <div className="p-flex p-flex-column border-bottom padding">
            <h2 className="destination-filter_subtitle">Hotel filters</h2>
            <div>
                <Checkbox className="p-mr2"></Checkbox>
               <span className="facility-name">Parking</span>
            </div>
            <div>
                <Checkbox className="p-mr2"></Checkbox>
               <span className="facility-name">Restaurant</span>
            </div>
        </div>
        <div className="p-flex p-flex-column padding">
            <h2 className="destination-filter_subtitle">Room filters</h2>
            <div>
                <Checkbox className="p-mr2"></Checkbox>
               <span className="facility-name">TV</span>
            </div>
            <div>
                <Checkbox className="p-mr2"></Checkbox>
               <span className="facility-name">Mini bar</span>
            </div>
        </div>
    </div>

export default Filter;