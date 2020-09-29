import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { exploreRoute } from "../../shared/routes/routes";
import Home from "./home/home";

const Dashboard = () => {
  return (
    <Switch>
      <Route path={exploreRoute()} component={Home} />
      <Redirect to={exploreRoute()} />
    </Switch>
  );
};

export default Dashboard;
