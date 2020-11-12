import React from "react";
import moment from "moment";
import "./search-menu.scss";
import { useTranslation } from "react-i18next";
import Search from "../../../../components/search-dropdown/search";
import Dropdown from "../../../../components/dropdown/dropdown";
import { DatePicker } from "antd";
import { SearchTransaltion } from "../../context/searchTransaltion";
import "antd/dist/antd.css";
import { CAPACITY } from "../../../../shared/mocks/capacity.mock";
import { buildQueryString } from "../../../../shared/utils/buildRoute";
import { useHistory } from "react-router-dom";
import { destinationRoute } from "../../../../shared/routes/routes";

const SearchMenu = () => {
  const { t: translate } = useTranslation();
  const history = useHistory();

  const { RangePicker } = DatePicker;
  const dateFormat = "DD-MM-YYYY";

  let destination = "all";
  let queryParams = {};

  const disabledDate = (current) => {
    return current && current < moment().endOf("day");
  };

  const onSearchDestination = (selectedDestination) => {
    destination = selectedDestination;
  };

  const onSelectAdults = (capacity) => {
    queryParams["capacity"] = capacity;
  };

  const onSelectChildren = () => {};

  const search = () => {
    const query = buildQueryString(queryParams);
    history.push({
      pathname: destinationRoute(destination),
      search: `?${query}`,
    });
  };

  return (
    <div className="p-flex container">
      <Search destination={onSearchDestination} />
      <RangePicker
        format={dateFormat}
        className={"customSelect"}
        placeholder={["From:", "To:"]}
        disabledDate={disabledDate}
      />
      <Dropdown
        data={CAPACITY}
        placeHolder={"adults"}
        selected={onSelectAdults}
      ></Dropdown>
      <Dropdown
        data={CAPACITY}
        placeHolder={"children"}
        selected={onSelectChildren}
      ></Dropdown>
      <button className="searchButton" onClick={search}>
        {translate(SearchTransaltion.search)}
      </button>
    </div>
  );
};

export default SearchMenu;
