import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Collapse } from "antd";

import { useUserStore } from "../../../../stores/user-store/user-store";
import {
  aboutUsRoute,
  homeRoute,
  loginRoute,
} from "../../../../shared/routes/routes";
import { MenuTransaltion } from "../../context/menuTranslation";
import { destinationRequest } from "../../../../services/api/destination/destinationService";

import "./header.scss";
import {
  UserIcon,
  Logo,
  HamburgerMenu,
  Close,
  Circle,
} from "../../../../shared/icons/index";
import zakynthos from "../../../../assets/images/zakynthos-JPEG.jpg";

const Header = () => {
  const history = useHistory();
  const { t: translate } = useTranslation();
  const [menuContentVisibility, setMenuContentVisibility] = useState(false);
  const [menuMobileVisibility, setMenuMobileVisibility] = useState(false);
  const [menuMobileStyle, setMenuMobileStyle] = useState({ maxHeight: "0rem" });

  const [destinations, setDestinations] = useState<any[]>([]);

  const {
    state: { user },
    logoutUser,
  } = useUserStore();

  const { Panel } = Collapse;

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    const { data } = await destinationRequest();
    setDestinations(data);
  };

  const handleMenuContent = (show: boolean) => {
    setMenuContentVisibility(show);
  };

  const handleMenuMobile = (value: boolean) => {
    setMenuMobileVisibility(value);
    setMenuMobileStyle({ maxHeight: value ? "200rem" : "0rem" });
  };

  const redirectToHomePage = () => {
    handleMenuContent(true);
    history.push(homeRoute());
  };

  const logOut = () => {
    logoutUser(null, null);
  };

  return (
    <>
      <div className="menu p-flex p-align-strech">
        <Logo
          className="logo"
          onMouseEnter={() => handleMenuContent(false)}
        ></Logo>
        <nav className="menu-box">
          <ul className="menu-nav p-flex p-wrap p-justify-between p-align-strech  m-0">
            <div className="p-flex">
              <li
                className="menu-item p-flex p-items-center margin"
                onMouseEnter={() => handleMenuContent(true)}
                onClick={redirectToHomePage}
              >
                <span>{translate(MenuTransaltion.destination)}</span>
              </li>
              <Link
                className="menu-item p-flex p-items-center"
                to={aboutUsRoute()}
                onMouseEnter={() => handleMenuContent(false)}
              >
                {translate(MenuTransaltion.aboutUs)}
              </Link>
            </div>
            {user ? (
              <div className="p-flex">
                <Link
                  className="menu-item p-flex p-items-center margin-username"
                  to={homeRoute()}
                  onMouseEnter={() => handleMenuContent(false)}
                >
                  <UserIcon className="menu-item__img"></UserIcon>
                  <span className="username">
                    {user.firstName ? user.firstName : user.email}
                  </span>
                </Link>
                <Link
                  className="menu-item p-flex p-items-center margin"
                  onClick={logOut}
                  to={loginRoute()}
                  onMouseEnter={() => handleMenuContent(false)}
                >
                  {translate(MenuTransaltion.logout)}
                </Link>
              </div>
            ) : (
              <Link
                className="menu-item p-flex p-items-center margin"
                to={loginRoute()}
                onMouseEnter={() => handleMenuContent(false)}
              >
                {translate(MenuTransaltion.login)}
              </Link>
            )}
          </ul>
        </nav>
        {menuMobileVisibility ? (
          <Close
            className="menu-hamburger"
            onClick={() => handleMenuMobile(false)}
          ></Close>
        ) : (
          <HamburgerMenu
            className="menu-hamburger"
            onClick={() => handleMenuMobile(true)}
          ></HamburgerMenu>
        )}
      </div>
      {menuContentVisibility && (
        <div
          className="menu-content p-flex"
          onMouseLeave={() => handleMenuContent(false)}
        >
          <div className="box p-flex p-wrap">
            {destinations.map((destination) => (
              <div key={destination.code} className="country">
                <h3 className="country-name">{destination.name}</h3>
                {destination.regions.map((region) => (
                  <div key={region.id} className="country-wrapper">
                    <h4 className="region">{region.name}</h4>
                    <ul>
                      {region.places.map((place) => (
                        <li key={place.id}>
                          <span className="place">{place.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <img className="destination-image" src={zakynthos} />
        </div>
      )}
      <div style={menuMobileStyle} className="menu-mobile">
        {menuMobileVisibility && (
          <div className="menu-mobile-content p-flex p-column">
            <div className="menu-mobile-content-item">
              <Collapse className="destination-menu">
                <Panel
                  header={translate(MenuTransaltion.destination)}
                  key="1"
                  showArrow={false}
                >
                  {destinations.map((destination) => (
                    <Collapse className="destination-menu">
                      <Panel
                        className="destination-panel"
                        header={destination.name}
                        key={destination.id}
                      >
                        {destination.regions.map((region) => (
                          <Collapse className="destination-menu">
                            <Panel
                              className="destination-panel"
                              header={region.name}
                              key={region.id}
                            >
                              {region.places.map((place) => (
                                <p className="place-box" key={place.id}>
                                  <span>
                                    <Circle className="menu-mobile-content-item__img" />
                                    {place.name}
                                  </span>
                                </p>
                              ))}
                            </Panel>
                          </Collapse>
                        ))}
                      </Panel>
                    </Collapse>
                  ))}
                </Panel>
              </Collapse>
            </div>
            <div className="menu-mobile-content-item">
              <Link to={aboutUsRoute()}>
                {translate(MenuTransaltion.aboutUs)}
              </Link>
            </div>
            {!user && (
              <div className="menu-mobile-content-item">
                <Link to={loginRoute()}>
                  {translate(MenuTransaltion.login)}
                </Link>
              </div>
            )}
            {user && (
              <div className="menu-mobile-content-item">
                <Link className="margin-username" to={homeRoute()}>
                  <span className="username">
                    <UserIcon></UserIcon>
                    {user.firstName ? user.firstName : user.email}
                  </span>
                </Link>
              </div>
            )}
            {user && (
              <div className="menu-mobile-content-item">
                <Link
                  onClick={logOut}
                  to={loginRoute()}
                  onMouseEnter={() => handleMenuContent(false)}
                >
                  {translate(MenuTransaltion.logout)}
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
