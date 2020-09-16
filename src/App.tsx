import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { onboardingRoute } from './shared/routes/routes';
import Onboarding from './views/onboarding';

const App = () => {
  return (
    <Switch>
      <Route path={onboardingRoute()} component={Onboarding} />
      <Redirect to={onboardingRoute()} />
    </Switch>
  );
}

export default App;
