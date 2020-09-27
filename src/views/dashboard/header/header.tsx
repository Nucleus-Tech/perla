import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss";
import logo from '../../../assets/images/logo.svg';
import arrow from '../../../assets/images/arrow.svg';

const Header = () => {
  return (
    <div className="menu p-flex p-items-center">
      <img className="logo" src={logo} alt="Perla Imperial"/>
      <nav className="menu-box">
        <ul className="menu-nav p-flex p-wrap p-justify-between">
          <div className="p-flex">
            <li className="menu-item p-flex p-items-center">
              <span>Destination</span>
              <img className="arrow" src={arrow} alt="arrow"/>
            </li>
            <Link className="menu-item" to="/dashboard/about-us">About us</Link>
          </div>
          <Link className="menu-item" to="/onboarding/login">Login</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header;