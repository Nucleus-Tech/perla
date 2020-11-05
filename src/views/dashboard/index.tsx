import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import {
  aboutUsRoute,
  destinationDetailsRoute,
  homeRoute,
} from "../../shared/routes/routes";
import AboutUs from "./about-us/about-us";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import DestinationDetails from "./destination-details/destination-details";
import Explore from "./explore/explore";

import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Switch>
        <div className="content-container">
          <Route path={homeRoute()} component={Explore} />
          <Route path={aboutUsRoute()} component={AboutUs} />
          <Route
            path={destinationDetailsRoute()}
            component={DestinationDetails}
          />
          <Redirect to={homeRoute()} />
        </div>
      </Switch>
      <Footer />
    </>
  );
};

export default Dashboard;
