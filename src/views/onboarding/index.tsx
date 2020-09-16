import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import {loginRoute, registrationRoute} from '../../shared/routes/routes';
import Login from './login';
import Registration from './registration';

const Onboarding = () => {
  return (
    <>
      <Switch>
        <Route path={loginRoute()} component={Login} />
        <Route path={registrationRoute()} component={Registration} />
        <Redirect to={loginRoute()} />
      </Switch>
    </>
  );
};

export default Onboarding;
