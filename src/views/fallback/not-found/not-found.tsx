import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Button } from "../../../components";
import { FallbackTranslation } from "../context/translation/fallbackTranslation";
import { exploreRoute } from "../../../shared/routes/routes";
import { Smile } from "../../../shared/icons";

import "../styles.scss";
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
        "p-fallback p-flex p-flex-column p-items-center p-justify-center"
      }
    >
      <div
        className={"p-fallback__wrapper p-flex p-items-center p-justify-center"}
      >
        <div className={"p-fallback__wrapper__message p-left-align "}>
          <div className={"p-fallback__wrapper__message__code"}>404</div>
          <div className={"p-fallback__wrapper__message__text"}>
            <span className={"p-fallback__wrapper__message__text__info"}>
              {" "}
              {translate(FallbackTranslation.notFoundPlaceholder)}
            </span>
            <br />
            <span>
              {" "}
              {translate(FallbackTranslation.notFoundMessagePlaceholder)}
            </span>
          </div>
        </div>
        <div className={"p-fallback__wrapper__image p-w-100"}>
          <Smile />
        </div>
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
