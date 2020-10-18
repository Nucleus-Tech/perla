import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { aboutUsRoute, destinationDetailsRoute, homeRoute } from '../../shared/routes/routes';
import AboutUs from './about-us/about-us';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import DestinationDetails from './destination-details/destination-details';
import Explore from './explore/explore';

const Dashboard = () => {

  return (
    <>
      <Header/>
      <Switch>
        <Route path={homeRoute()} component={Explore}/>
        <Route path={aboutUsRoute()} component={AboutUs}/>
        <Route path={destinationDetailsRoute()} component={DestinationDetails}/>
        <Redirect to={homeRoute()}/>
      </Switch>
      <Footer />
    </>
  )
}

export default Dashboard;
