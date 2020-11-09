import React from "react";
import { useTranslation } from "react-i18next";

import { MenuTransaltion } from "../context/menuTranslation";

import "./styles.scss";

const AboutUs = () => {
  const { t: translate } = useTranslation();

  return (
    <div className="p-flex p-justify-center">
      <h1>{translate(MenuTransaltion.aboutUs)}</h1>
    </div>
  );
};

export default AboutUs;
