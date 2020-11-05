import { Checkbox, Rate, DatePicker } from "antd";
import React, { useEffect, useState } from "react";

import { getFacilities } from "../../../../services/api/destination/facilityService";

import "antd/dist/antd.css";
import "./filter.scss";

const Filter = () => {
  const { RangePicker } = DatePicker;
  const dateFormat = "DD-MM-YYYY";

  const [hotelFacilities, setHotelFacilities] = useState<any[]>([]);
  const [roomFacilities, setRoomFacilities] = useState<any[]>([]);

  useEffect(() => {
    fetchHotelFacilities();
    fetchRoomFacilities();
  }, []);

  const fetchHotelFacilities = async () => {
    const { data } = await getFacilities("HOTEL");
    setHotelFacilities(data);
  };

  const fetchRoomFacilities = async () => {
    const { data } = await getFacilities("ROOM");
    setRoomFacilities(data);
  };

  return (
    <div className="wrapper destination-filter p-flex p-flex-column p-pb4">
      <h1 className="destination-filter_title border-bottom">Filters</h1>
      <div className="p-flex p-flex-column border-bottom padding">
        <RangePicker
          format={dateFormat}
          className={"customSelect"}
          placeholder={["From:", "To:"]}
        />
      </div>
      <div className="p-flex p-flex-column border-bottom padding">
        <h2 className="destination-filter_subtitle">Choose star rating</h2>
        <div>
          <Checkbox className="p-mr2"></Checkbox>
          <Rate className="destination-filter_rate" disabled defaultValue={5} />
        </div>
        <div>
          <Checkbox className="p-mr2"></Checkbox>
          <Rate className="destination-filter_rate" disabled defaultValue={4} />
        </div>
        <div>
          <Checkbox className="p-mr2"></Checkbox>
          <Rate className="destination-filter_rate" disabled defaultValue={3} />
        </div>
        <div>
          <Checkbox className="p-mr2"></Checkbox>
          <Rate className="destination-filter_rate" disabled defaultValue={2} />
        </div>
        <div>
          <Checkbox className="p-mr2"></Checkbox>
          <Rate className="destination-filter_rate" disabled defaultValue={1} />
        </div>
      </div>
      <div className="p-flex p-flex-column border-bottom padding">
        <h2 className="destination-filter_subtitle">Hotel filters</h2>
        {hotelFacilities.map((hotelFacility) => (
          <div key={hotelFacility.id}>
            <Checkbox className="p-mr2"></Checkbox>
            <span className="facility-name">{hotelFacility.name}</span>
          </div>
        ))}
      </div>
      <div className="p-flex p-flex-column padding">
        <h2 className="destination-filter_subtitle">Room filters</h2>
        {roomFacilities.map((hotelFacility) => (
          <div key={hotelFacility.id}>
            <Checkbox className="p-mr2"></Checkbox>
            <span className="facility-name">{hotelFacility.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
