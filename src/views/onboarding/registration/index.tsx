import React from "react";

import { Input } from "../../../components";

import "./style.scss";
import { useTranslation } from "react-i18next";
import { OnboardingTranslation } from "../context/onboardingTranslation";
import { useFormik } from "formik";
import {
  defaultRegistartionValue,
  registrationValidators,
} from "../form/loginForm";

const Registration = () => {
  const { t: translate } = useTranslation();

  // @ts-ignore
  const { errors, values, isValid, handleChange } = useFormik({
    initialValues: defaultRegistartionValue,
    validationSchema: registrationValidators,
  });

  console.log(values);
  console.log(errors);

  return (
    <div className={"p-registration p-mt6"}>
      <div
        className={"p-registration__header p-flex p-flex-row p-justify-between"}
      >
        <div className={"p-registration__header__icon--left"}>left</div>
        <div className={"p-registration__header__text"}>Naslov</div>
        <div className={"p-registration__header__icon--right"}>Right</div>
      </div>
      <div className={"p-registration__body p-mt3"}>
        <Input
          id={"name"}
          value={values.email}
          onChange={handleChange}
          placeholder={"Enter name"}
          name={"email"}
          label={translate(OnboardingTranslation.namePlaceholder)}
          errors={errors}
        />
      </div>
      {isValid ? (
        <div className={"p-registration__footer"}>dugmici</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Registration;
