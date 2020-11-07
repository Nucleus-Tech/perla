import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import qs from "query-string";

import { getAccomodationsForPlace } from "../../../services/api/destination/accomodationService";
import Card from "../../../components/card/card";
import Filter from "./filter/filter";

import "./destination-details.scss";

const DestinationDetails = () => {
  const params = useParams();
  const { search } = useLocation();
  const [accomodations, setAccomodations] = useState<Array<any>>([]);
  const queryParams = useMemo(() => qs.parse(search), [search]);

  useEffect(() => {
    fetchDestination();
    fetchAccomodations();
  }, [params]);

  useEffect(() => {
    fetchAccomodations();
  }, [queryParams]);

  const fetchDestination = async () => {
    // @TODO
  };

  const fetchAccomodations = async () => {
    let queryString = "";
    if (Object.keys(queryParams).length > 0) {
      delete queryParams[""];
      Object.keys(queryParams).forEach((key) => {
        console.log(Object.keys(queryParams).length);
        queryString = queryString.concat(`&${key}=${queryParams[key]}`);
      });
    }
    const { data } = await getAccomodationsForPlace(
      params["name"],
      queryString
    );
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
                image={accomodation.images[0]}
              ></Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
