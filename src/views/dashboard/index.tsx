import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { homeRoute } from '../../shared/routes/routes';
import Home from './home/home';


const Dashboard = () => {
  return (
    <Switch>
      <Route path={homeRoute()} component={Home}/>
      <Redirect to={homeRoute()}/>
    </Switch>
  )
}

export default Dashboard;