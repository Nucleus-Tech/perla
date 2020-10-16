import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUserStore } from '../../../../stores/user-store/user-store';
import { aboutUsRoute, homeRoute, loginRoute } from '../../../../shared/routes/routes';
import { useTranslation } from 'react-i18next';
import { MenuTransaltion } from '../../context/menuTranslation';
import { destinationRequest } from '../../../../services/api/destination/destinationService';
import userIcon  from '../../../../assets/images/user.svg';
// @TODO change logo and zakynthos
import logo from '../../../../assets/images/logo.svg';
import zakynthos  from '../../../../assets/images/zakynthos-JPEG.jpg';

import "./header.scss";

const Header = () => {

  const history = useHistory();
  const { t: translate } = useTranslation();
  const [menuContentVisibility, setMenuContentVisibility] = useState(false);

  const [destinations, setDestinations] = useState<any[]>([]);

  const { state: {user} } = useUserStore();
  const { logoutUser } = useUserStore();

  useEffect(() => {
    fetchDestinations();
  },[]);

  const fetchDestinations = async () => {
    const { data } = await destinationRequest();
    setDestinations(data);
  }

  const handleMenuContent = (show: boolean) => {
    setMenuContentVisibility(show);
  }

  const redirectToHomePage = () => {
    handleMenuContent(true);
    history.push(homeRoute());
  }

  const logOut = () => {
    logoutUser(null, null);
  }

  return (
    <>
      <div className="menu p-flex p-align-strech">
        <img className="logo" src={logo} alt="Perla Imperial" onMouseEnter={() => handleMenuContent(false)}/>
        <nav className="menu-box">
          <ul className="menu-nav p-flex p-wrap p-justify-between p-align-strech  m-0">
            <div className="p-flex">
              <li className="menu-item p-flex p-items-center margin" onMouseEnter={() => handleMenuContent(true)} onClick={redirectToHomePage}>
                <span>{translate(MenuTransaltion.destination)}</span>
              </li>
              <Link className="menu-item p-flex p-items-center" to={aboutUsRoute()} onMouseEnter={() => handleMenuContent(false)}>{translate(MenuTransaltion.aboutUs)}</Link>
            </div>
            { user ?
              <div className="p-flex">
                <Link className="menu-item p-flex p-items-center margin-username" to={homeRoute()} onMouseEnter={() => handleMenuContent(false)}>
                  <img src={userIcon}></img>
                  <span className="username">{user.firstName ? user.firstName : user.email}</span>
                </Link>
                <Link className="menu-item p-flex p-items-center margin" onClick={() => logOut()} to={loginRoute()} onMouseEnter={() => handleMenuContent(false)}>{translate(MenuTransaltion.logout)}</Link>
              </div>
              : <Link className="menu-item p-flex p-items-center margin" to={loginRoute()} onMouseEnter={() => handleMenuContent(false)}>{translate(MenuTransaltion.login)}</Link>
            }
          </ul>
        </nav>
      </div>
      { menuContentVisibility &&
        <div className="menu-content p-flex" onMouseLeave={() => handleMenuContent(false)}>
          <div className="box p-flex p-wrap">
            {
              destinations.map((destination) => (
                <div key={destination.code} className="country">
                  <h3 className="country-name">{destination.name}</h3>
                  {
                    destination.regions.map((region) => (
                      <div>
                        <h4 className="region">{region.name}</h4>
                        <ul>
                        {
                          region.places.map((place) => (
                            <li>
                              <span className="place">{place.name}</span>
                            </li>
                          ))
                        }
                        </ul>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
          <img className="destination-image" src={zakynthos} />
        </div>
      }
    </>
  )
}

export default Header;