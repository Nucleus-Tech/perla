import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { aboutUsRoute, homeRoute } from '../../shared/routes/routes';
import AboutUs from './about-us/about-us';
import Footer from './footer/footer';
import Header from './header/header';
import Home from './home/home';

const Dashboard = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route path={homeRoute()} component={Home}/>
        <Route path={aboutUsRoute()} component={AboutUs}/>
        <Redirect to={homeRoute()}/>
      </Switch>
      <Footer />
    </>
  )
}

export default Dashboard;