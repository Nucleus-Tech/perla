import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { Checkbox, Rate, DatePicker } from "antd";

import { getFacilities } from "../../../../services/api/destination/facilityService";
import { CAPACITY } from "../../../../shared/mocks/capacity.mock";
import { FilterTranslation } from "../../context/filterTranslation";
import filter from "../../../../assets/images/filter.svg";

import "antd/dist/antd.css";
import "./filter.scss";

const Filter = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const dateFormat = "DD-MM-YYYY";
  const history = useHistory();
  const params = useParams();
  const { t: translate } = useTranslation();

  const [hotelFacilities, setHotelFacilities] = useState<any[]>([]);
  const [roomFacilities, setRoomFacilities] = useState<any[]>([]);
  const [queryParams, setQueryParams] = useState<any>({
    category: [],
    roomFacilities: [],
    accommodationFacilities: [],
    capacity: 0,
  });
  const [filtersVisibility, setFiltersVisibility] = useState<boolean>(true);

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
        queryParams.capacity > 0 ? `capacity=${queryParams.capacity}` : ""
      }${
        queryParams.accommodationFacilities.length > 0
          ? `&accommodationFacilities=${queryParams.accommodationFacilities}`
          : ""
      }${
        queryParams.roomFacilities.length > 0
          ? `&roomFacilities=${queryParams.roomFacilities}`
          : ""
      }${
        queryParams.category.length > 0
          ? `&category=${queryParams.category}`
          : ""
      }`,
    });
  };

  const handleChangeAdultsDropdown = (event) => {
    setQueryParams({ ...queryParams, capacity: event });
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

  const handleFiltersVisibility = () => {
    setFiltersVisibility(!filtersVisibility);
  };

  return (
    <div className="wrapper destination-filter p-flex p-flex-column">
      <div className="p-flex p-items-center">
        <h1 className="destination-filter_title">
          {translate(FilterTranslation.filters)}
        </h1>
        <img
          className="filter-img"
          src={filter}
          onClick={handleFiltersVisibility}
        />
      </div>
      {filtersVisibility ? (
        <>
          <div className="p-flex p-flex-column border-bottom border-top padding">
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
            <h2 className="destination-filter_subtitle">
              {translate(FilterTranslation.starRating)}
            </h2>
            <div>
              <Checkbox
                className="p-mr2"
                onChange={(e) =>
                  handleCheckboxChange(e.target.checked, "category", 5)
                }
              ></Checkbox>
              <Rate
                className="destination-filter_rate"
                disabled
                defaultValue={5}
              />
            </div>
            <div>
              <Checkbox
                className="p-mr2"
                onChange={(e) =>
                  handleCheckboxChange(e.target.checked, "category", 4)
                }
              ></Checkbox>
              <Rate
                className="destination-filter_rate"
                disabled
                defaultValue={4}
              />
            </div>
            <div>
              <Checkbox
                className="p-mr2"
                onChange={(e) =>
                  handleCheckboxChange(e.target.checked, "category", 3)
                }
              ></Checkbox>
              <Rate
                className="destination-filter_rate"
                disabled
                defaultValue={3}
              />
            </div>
            <div>
              <Checkbox
                className="p-mr2"
                onChange={(e) =>
                  handleCheckboxChange(e.target.checked, "category", 2)
                }
              ></Checkbox>
              <Rate
                className="destination-filter_rate"
                disabled
                defaultValue={2}
              />
            </div>
            <div>
              <Checkbox
                className="p-mr2"
                onChange={(e) =>
                  handleCheckboxChange(e.target.checked, "category", 1)
                }
              ></Checkbox>
              <Rate
                className="destination-filter_rate"
                disabled
                defaultValue={1}
              />
            </div>
          </div>
          <div className="p-flex p-flex-column border-bottom padding">
            <h2 className="destination-filter_subtitle">
              {translate(FilterTranslation.hotelFilters)}
            </h2>
            {hotelFacilities.map((hotelFacility) => (
              <div key={hotelFacility.id}>
                <Checkbox
                  className="p-mr2"
                  onChange={(e) =>
                    handleCheckboxChange(
                      e.target.checked,
                      "accommodationFacilities",
                      hotelFacility.name
                    )
                  }
                ></Checkbox>
                <span className="facility-name">{hotelFacility.name}</span>
              </div>
            ))}
          </div>
          <div className="p-flex p-flex-column padding p-pb4">
            <h2 className="destination-filter_subtitle">
              {translate(FilterTranslation.roomFilters)}
            </h2>
            {roomFacilities.map((roomFacility) => (
              <div key={roomFacility.id}>
                <Checkbox
                  className="p-mr2"
                  onChange={(e) =>
                    handleCheckboxChange(
                      e.target.checked,
                      "roomFacilities",
                      roomFacility.name
                    )
                  }
                ></Checkbox>
                <span className="facility-name">{roomFacility.name}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
