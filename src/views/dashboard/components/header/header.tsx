import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";
import logo from '../../../../assets/images/logo.svg';
import zakynthos  from '../../../../assets/images/zakynthos-JPEG.jpg';

const Header = () => {

  const [menuContentVisibility, setMenuContentVisibility] = useState(false);

  const handleMenuContent = (show: boolean) => {
    setMenuContentVisibility(show);
  }

  return (
    <>
    <div className="menu p-flex p-align-strech">
      <img className="logo" src={logo} alt="Perla Imperial" onMouseEnter={() => handleMenuContent(false)}/>
      <nav className="menu-box">
        <ul className="menu-nav p-flex p-wrap p-justify-between p-align-strech  m-0">
          <div className="p-flex">
            <li className="menu-item p-flex p-items-center margin" onClick={() => handleMenuContent(true)}  onMouseEnter={() => handleMenuContent(true)}>
              <span>Destination</span>
            </li>
            <Link className="menu-item p-flex p-items-center" to="/dashboard/about-us" onMouseEnter={() => handleMenuContent(false)}>About us</Link>
          </div>
          <Link className="menu-item p-flex p-items-center margin" to="/onboarding/login" onMouseEnter={() => handleMenuContent(false)}>Login</Link>
        </ul>
      </nav>
    </div>
    { menuContentVisibility ? 
      <div className="menu-content p-flex" onMouseLeave={() => handleMenuContent(false)}>
       <div className="box p-flex p-wrap">
        <div className="country">
            <h3 className="country-name">Grcka</h3>
            <h4 className="region">Tasos</h4>
            <ul>
              <li>
                <span className="place">Limenaria</span>
              </li>
              <li>
                <span className="place">Limenaria</span>
              </li>
              <li>
                <span className="place">Limenaria</span>
              </li>
            </ul>
          </div>
          <div className="country">
            <h3 className="country-name">Turska</h3>
            <h4 className="region">Pieria</h4>
            <ul>
              <li>
                <span className="place">Paralia</span>
              </li>
              <li>
                <span className="place">Paralia</span>
              </li>
            </ul>
          </div>
       </div>
        <img className="destination-image" src={zakynthos} />
      </div>
      : ''}
    </>
  )
}

export default Header;