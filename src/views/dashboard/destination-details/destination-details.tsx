import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../../../components/card/card";
import Filter from "./filter/filter";

import "./destination-details.scss";
import { getAccomodationsForPlace } from "../../../services/api/destination/accomodationService";

const DestinationDetails = () => {
  // const [destination, setDestination] = useState<any>(null);
  const [accomodations, setAccomodations] = useState<Array<any>>([]);
  // const { id } = useParams();

  useEffect(() => {
    fetchDestination();
    fetchAccomodations();
  }, []);

  const fetchDestination = async () => {
    // const { data } = await destinationRequest();
    //   setDestination(data);
  };

  const fetchAccomodations = async () => {
    //      console.log(id)
    const { data } = await getAccomodationsForPlace(
      "fee8f4ae-fcdb-11ea-adc1-0242ac120002"
    );
    setAccomodations(data);
  };

  return (
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
  );
};

export default DestinationDetails;
