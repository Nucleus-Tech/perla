import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  dashboardRoute,
  internalServerRoute,
  onboardingRoute,
} from "./shared/routes/routes";
import Dashboard from "./views/dashboard";
import Onboarding from "./views/onboarding";
import NotFound from "./views/fallback/not-found/not-found";
import InternalServer from "./views/fallback/internal-server/internal-server";

const App = () => {
  return (
    <Switch>
      <Route path={onboardingRoute()} component={Onboarding} />
      <Route path={dashboardRoute()} component={Dashboard} />
      <Route path={internalServerRoute()} component={InternalServer} />
      <Route exact path={"/"} component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
