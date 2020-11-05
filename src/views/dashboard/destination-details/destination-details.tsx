import React, { useEffect, useState } from "react";

import Card from "../../../components/card/card";
import Filter from "./filter/filter";

import "./destination-details.scss";
import { getAccomodationsForPlace } from "../../../services/api/destination/accomodationService";
import { useParams } from "react-router-dom";
import { getDestinationByName } from "../../../services/api/destination/destinationService";

const DestinationDetails = () => {
  const params = useParams();
  const [setDestination] = useState<any>(null);
  const [accomodations, setAccomodations] = useState<Array<any>>([]);
  // const { id } = useParams();

  useEffect(() => {
    fetchDestination();
    fetchAccomodations();
  }, []);

  const fetchDestination = async () => {
    const { data } = await getDestinationByName(params["name"]);
    setDestination(data);
  };

  const fetchAccomodations = async () => {
    const { data } = await getAccomodationsForPlace(params["name"]);
    setAccomodations(data);
  };

  return (
    <div className="p-flex p-flex-column">
      <div className="destination-header p-flex p-justify-center p-items-center">
        <h1 className="destination-header_title">{params["name"]}</h1>
      </div>
      <div className="destination-filter-box p-flex p-wrap">
        <Filter />
        <div className="destination-results p-flex p-wrap">
          {accomodations.map((accomodation) => (
            <div key={accomodation.id}>
              <Card
                name={accomodation.name}
                facilities={accomodation.facilities}
                category={accomodation.category}
              ></Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
