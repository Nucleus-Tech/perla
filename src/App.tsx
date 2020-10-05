import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { dashboardRoute, onboardingRoute, playgroundRoute } from './shared/routes/routes';
import Dashboard from './views/dashboard';
import Playground from './views/dashboard/playground/playground';
import Onboarding from './views/onboarding';


const App = () => {
  return (
    <Switch>
    <Route path={onboardingRoute()} component={Onboarding}/>
    <Route path={dashboardRoute()} component={Dashboard}/>
    <Route path={playgroundRoute()} component={Playground}/>
    <Redirect to={onboardingRoute()}/>
  </Switch>
  );
}

export default App;
