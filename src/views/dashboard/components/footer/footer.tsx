import React from "react";
import { useTranslation } from "react-i18next";

import facebook from "../../../../assets/images/Face.svg";
import instagram from "../../../../assets/images/Insta.svg";
import twitter from "../../../../assets/images/Twitter.svg";
import { FooterTransaltion } from "../../context/footerTransaltion";
import { MenuTransaltion } from "../../context/menuTranslation";

import "./footer.scss";

const Footer = () => {
  const { t: translate } = useTranslation();

  return (
    <div className="footer p-flex p-flex-column">
      <div className="p-flex">
        <ul className="nav p-flex p-wrap">
          <li className="nav__item">
            <a className="nav__link">{translate(MenuTransaltion.aboutUs)}</a>
          </li>
          <li className="nav__item">
            <a className="nav__link">{translate(FooterTransaltion.faq)}</a>
          </li>
          <li className="nav__item">
            <a className="nav__link">{translate(MenuTransaltion.login)}</a>
          </li>
          <li className="nav__item">
            <a className="nav__link">
              {translate(FooterTransaltion.termsAndConditions)}
            </a>
          </li>
        </ul>
        <div className="contact-section p-flex p-flex-column">
          <span>{translate(FooterTransaltion.contactUs)}</span>
          <div className="p-flex p-mt3">
            <img className="social-icon" src={facebook} alt="Facebook" />
            <img className="social-icon" src={instagram} alt="Instagram" />
            <img className="social-icon" src={twitter} alt="Twitter" />
          </div>
        </div>
      </div>
      <span className="copyright">&copy;Copyright 2020</span>
    </div>
  );
};

export default Footer;
