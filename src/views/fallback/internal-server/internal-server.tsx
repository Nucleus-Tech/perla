import React from "react";
import { useTranslation } from "react-i18next";

import { Smile } from "../../../shared/icons";
import { FallbackTranslation } from "../context/translation/fallbackTranslation";

import "./styles.scss";

const InternalServer = () => {
  const { t: translate } = useTranslation();
  return (
    <div className={"p-internalServer p-flex p-items-center p-justify-center"}>
      <div
        className={
          "p-internalServer__wrapper p-flex p-items-center p-justify-center"
        }
      >
        <div className={"p-internalServer__wrapper__message p-left-align "}>
          <div className={"p-internalServer__wrapper__message__code"}>500</div>
          <div className={"p-internalServer__wrapper__message__text"}>
            {translate(FallbackTranslation.internalServerPlaceholder)}
          </div>
        </div>
        <div className={"p-internalServer__wrapper__image p-w-100"}>
          <Smile />
        </div>
      </div>
    </div>
  );
};

export default InternalServer;
