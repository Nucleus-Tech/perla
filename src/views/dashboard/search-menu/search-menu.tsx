import React from 'react';
import "./search-menu.scss";
import { useTranslation } from 'react-i18next';
import Search from '../../../components/search-dropdown/search';
import Dropdown from '../../../components/dropdown/dropdown';
import { DatePicker } from 'antd';
import { SearchTransaltion } from '../../../views/dashboard/context/searchTransaltion';
import 'antd/dist/antd.css'
import { CAPACITY } from '../../../shared/mocks/capacity.mock';

const SearchMenu = () => {

  const { t: translate } = useTranslation();

  const { RangePicker } = DatePicker;
  const dateFormat = "DD-MM-YYYY";

  return <div className="p-flex container">
    <Search/>
    <RangePicker format={dateFormat} className={"customSelect"} placeholder={['From:', 'To:']}/>
    <Dropdown data={CAPACITY} placeholder={'adults'}></Dropdown>
    <Dropdown data={CAPACITY} placeholder={'children'}></Dropdown>
    <button className="searchButton">{translate(SearchTransaltion.search)}</button>
  </div>
}

export default SearchMenu;
