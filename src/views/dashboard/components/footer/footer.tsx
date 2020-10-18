import React from 'react';

import "./footer.scss";

const Footer = () =>
    <div className="footer p-flex p-flex-column">
        <div  className="p-flex">
            <ul className="nav p-flex p-wrap">
                <li className="nav__item">
                    <a className="nav__link">About us</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link">FAQs</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link">Login</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link">Terms & conditions</a>
                </li>
            </ul>
            <div className="contact-section p-flex p-flex-column">
                <span>Contact us:</span>
            </div>
        </div>
        <span className="copyright">&copy;Copyright 2020</span>
    </div>

export default Footer;