import React from 'react';

import Card from '../../../components/card/card';
import Filter from './filter/filter';

import "./destination-details.scss";

const DestinationDetails = () =>
    <div className="p-flex p-flex-column">
        <div className="destination-header p-flex p-justify-center p-items-center">
            <h1 className="destination-header_title">Zakintos</h1>
        </div>
        <div className="destination-filter-box p-flex p-justify-between">
            <Filter />
            <div className="destination-results p-flex p-wrap p-justify-between">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>

export default DestinationDetails;