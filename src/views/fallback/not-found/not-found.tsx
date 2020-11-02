import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Button } from "../../../components";
import { FallbackTranslation } from "../context/translation/fallbackTranslation";
import { exploreRoute } from "../../../shared/routes/routes";

import "./styles.scss";

const NotFound = () => {
  const history = useHistory();
  const { t: translate } = useTranslation();

  const home = () => {
    history.push(exploreRoute());
  };

  return (
    <div
      className={
        "p-notFound p-flex p-flex-column p-items-center p-justify-center"
      }
    >
      <div className={"p-notFound__message p-text-center"}>
        <p>404</p>
        <p>{translate(FallbackTranslation.notFoundPlaceholder)}</p>
      </div>
      <Button
        label={translate(FallbackTranslation.homePlaceholder)}
        onClick={home}
        className={"p-notFound__button"}
      />
    </div>
  );
};

export default NotFound;
