import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Select } from "antd";
import { Checkbox, Rate, DatePicker } from "antd";

import { getFacilities } from "../../../../services/api/destination/facilityService";
import { CAPACITY } from "../../../../shared/mocks/capacity.mock";

import "antd/dist/antd.css";
import "./filter.scss";

const Filter = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const dateFormat = "DD-MM-YYYY";
  const history = useHistory();
  const params = useParams();

  const [hotelFacilities, setHotelFacilities] = useState<any[]>([]);
  const [roomFacilities, setRoomFacilities] = useState<any[]>([]);
  const [queryParams, setQueryParams] = useState<any>({
    rate: [],
    hotelFilters: [],
    roomFilters: [],
    adults: 0,
  });

  useEffect(() => {
    fetchHotelFacilities();
    fetchRoomFacilities();
  }, []);

  useEffect(() => {
    buildRoute();
  }, [queryParams]);

  const fetchHotelFacilities = async () => {
    const { data } = await getFacilities("HOTEL");
    setHotelFacilities(data);
  };

  const fetchRoomFacilities = async () => {
    const { data } = await getFacilities("ROOM");
    setRoomFacilities(data);
  };

  const buildRoute = () => {
    history.push({
      pathname: `/dashboard/destination/${params["name"]}`,
      search: `?${
        queryParams.adults > 0 ? `adults=${queryParams.adults}` : ""
      }${
        queryParams.hotelFilters.length > 0
          ? `&hotelFilters=${queryParams.hotelFilters}`
          : ""
      }${
        queryParams.roomFilters.length > 0
          ? `&roomFilters=${queryParams.roomFilters}`
          : ""
      }${queryParams.rate.length > 0 ? `&rate=${queryParams.rate}` : ""}`,
    });
  };

  const handleChangeAdultsDropdown = (event) => {
    setQueryParams({ ...queryParams, adults: event });
  };

  const handleCheckboxChange = (event, type, value) => {
    if (event) {
      setQueryParams({ ...queryParams, [type]: [...queryParams[type], value] });
    } else {
      setQueryParams({
        ...queryParams,
        [type]: queryParams[type].filter((item) => item != value),
      });
    }
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
        <Select
          className="p-mt3"
          placeholder="Adults"
          onChange={handleChangeAdultsDropdown}
        >
          {CAPACITY.map((item) => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
      </div>
      <div className="p-flex p-flex-column border-bottom padding">
        <h2 className="destination-filter_subtitle">Choose star rating</h2>
        <div>
          <Checkbox
            className="p-mr2"
            onChange={(e) => handleCheckboxChange(e.target.checked, "rate", 5)}
          ></Checkbox>
          <Rate className="destination-filter_rate" disabled defaultValue={5} />
        </div>
        <div>
          <Checkbox
            className="p-mr2"
            onChange={(e) => handleCheckboxChange(e.target.checked, "rate", 4)}
          ></Checkbox>
          <Rate className="destination-filter_rate" disabled defaultValue={4} />
        </div>
        <div>
          <Checkbox
            className="p-mr2"
            onChange={(e) => handleCheckboxChange(e.target.checked, "rate", 3)}
          ></Checkbox>
          <Rate className="destination-filter_rate" disabled defaultValue={3} />
        </div>
        <div>
          <Checkbox
            className="p-mr2"
            onChange={(e) => handleCheckboxChange(e.target.checked, "rate", 2)}
          ></Checkbox>
          <Rate className="destination-filter_rate" disabled defaultValue={2} />
        </div>
        <div>
          <Checkbox
            className="p-mr2"
            onChange={(e) => handleCheckboxChange(e.target.checked, "rate", 1)}
          ></Checkbox>
          <Rate className="destination-filter_rate" disabled defaultValue={1} />
        </div>
      </div>
      <div className="p-flex p-flex-column border-bottom padding">
        <h2 className="destination-filter_subtitle">Hotel filters</h2>
        {hotelFacilities.map((hotelFacility) => (
          <div key={hotelFacility.id}>
            <Checkbox
              className="p-mr2"
              onChange={(e) =>
                handleCheckboxChange(
                  e.target.checked,
                  "hotelFilters",
                  hotelFacility.name
                )
              }
            ></Checkbox>
            <span className="facility-name">{hotelFacility.name}</span>
          </div>
        ))}
      </div>
      <div className="p-flex p-flex-column padding">
        <h2 className="destination-filter_subtitle">Room filters</h2>
        {roomFacilities.map((roomFacility) => (
          <div key={roomFacility.id}>
            <Checkbox
              className="p-mr2"
              onChange={(e) =>
                handleCheckboxChange(
                  e.target.checked,
                  "roomFilters",
                  roomFacility.name
                )
              }
            ></Checkbox>
            <span className="facility-name">{roomFacility.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
