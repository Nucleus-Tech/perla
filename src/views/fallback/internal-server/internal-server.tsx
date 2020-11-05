import React from "react";
import { useTranslation } from "react-i18next";

import { Smile } from "../../../shared/icons";
import { FallbackTranslation } from "../context/translation/fallbackTranslation";

import "../styles.scss";

const InternalServer = () => {
  const { t: translate } = useTranslation();
  return (
    <div className={"p-fallback p-flex p-items-center p-justify-center"}>
      <div
        className={"p-fallback__wrapper p-flex p-items-center p-justify-center"}
      >
        <div className={"p-fallback__wrapper__message p-left-align "}>
          <div className={"p-fallback__wrapper__message__code"}>502</div>
          <div className={"p-fallback__wrapper__message__text"}>
            <span className={"p-fallback__wrapper__message__text__info"}>
              {" "}
              {translate(FallbackTranslation.internalServerPlaceholder)}
            </span>
            <br />
            <span>
              {translate(FallbackTranslation.internalServerMessagePlaceholder)}
            </span>
          </div>
        </div>
        <div className={"p-fallback__wrapper__image p-w-100"}>
          <Smile />
        </div>
      </div>
    </div>
  );
};

export default InternalServer;
