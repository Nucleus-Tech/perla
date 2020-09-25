import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { dashboardRoute, onboardingRoute } from './shared/routes/routes';
import Dashboard from './views/dashboard';
import Onboarding from './views/onboarding';


const App = () => {
  return (
    <Switch>
    <Route path={onboardingRoute()} component={Onboarding}/>
    <Route path={dashboardRoute()} component={Dashboard}/>
    <Redirect to={onboardingRoute()}/>
  </Switch>
  );
}

export default App;
