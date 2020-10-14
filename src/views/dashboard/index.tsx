import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { aboutUsRoute, homeRoute } from '../../shared/routes/routes';
import AboutUs from './about-us/about-us';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Explore from './explore/explore';

const Dashboard = () => {

  return (
    <>
      <Header/>
      <Switch>
        <Route path={homeRoute()} component={Explore}/>
        <Route path={aboutUsRoute()} component={AboutUs}/>
        <Redirect to={homeRoute()}/>
      </Switch>
      <Footer />
    </>
  )
}

export default Dashboard;
