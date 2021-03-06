import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import SearchMenu from "./search-menu/search-menu";
import TopDestinationCard from "./top-destination-card/top-destination-card";
import { ExploreTranslation } from "../context/exploreTranslations";
import { getTopDestinations } from "../../../services/api/destination/destinationService";

import "./styles.scss";

const Explore = () => {
  const { t: translate } = useTranslation();
  const [topDestinations, seTopDestinations] = useState<any[]>([]);

  useEffect(() => {
    fetchTopDestinations();
  }, []);

  const fetchTopDestinations = async () => {
    const { data } = await getTopDestinations();
    seTopDestinations(data);
  };

  return (
    <div className="p-flex p-flex-column">
      <div className="search-box p-flex p-justify-center p-items-center p-wrap">
        <SearchMenu />
      </div>
      <div className="destination-box p-flex p-flex-column p-items-center">
        <h1 className="destination-box-title">
          {" "}
          {translate(ExploreTranslation.topDestinations)}
        </h1>
        <div className="p-flex p-wrap p-justify-center">
          {topDestinations.map((destination) => (
            <div key={destination.id}>
              <TopDestinationCard
                image={destination.image}
                destination={destination.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
