import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";

import { Input, Button } from "../../../components/";

import {
  defaultRegistartionValue,
  RegistartionFromFields,
  registrationValidators,
} from "../form/registrationForm";
import { OnboardingTranslation } from "../context/translation/onboardingTranslation";
import { loginRoute } from "../../../shared/routes/routes";
import { Email, LogoBlack, Password } from "../../../shared/icons";

import "../login/styles.scss";
import { registrationRequest } from "../../../services/api/auth/authService";

const Registration = () => {
  const { t: translate } = useTranslation();

  const history = useHistory();

  // @ts-ignore
  const { handleChange, values, errors, dirty, isValid } = useFormik({
    initialValues: defaultRegistartionValue,
    validationSchema: registrationValidators,
  });

  const submitRegistration = async () => {
    try {
      registrationRequest(values);
      completeRegistration();
    } catch (error) {
      // TODO: Handle error https://brick-link.atlassian.net/browse/BRIC-15
    }
  };

  const completeRegistration = () => {
    history.push(loginRoute());
  };

  return (
    <div
      className={"p-login p-flex p-flex-column p-items-center p-justify-center"}
    >
      <div
        className={
          "p-login__wrapper p-flex p-flex-column p-items-center p-justify-center"
        }
      >
        <div className={"p-login__wrapper__container p-w-100"}>
          <div
            className={
              "p-login__wrapper__container__logo p-w-100 p-text-center"
            }
          >
            <LogoBlack />
          </div>
          <label className={"p-login__wrapper__container__label p-text-center"}>
            <h1 className={"p-flex p-flex-row"}>
              {translate(OnboardingTranslation.signUpPlaceholder)}
            </h1>
          </label>
          <div
            className={
              "p-login__wrapper__container__form p-flex p-flex-column p-justify-center p-w-100"
            }
          >
            <Input
              id={RegistartionFromFields.firstName}
              placeholder={translate(
                OnboardingTranslation.firstNamePlaceholder
              )}
              name={RegistartionFromFields.firstName}
              onChange={handleChange}
              value={values.firstName}
              errors={errors}
              type={"text"}
              // icon={<UserIcon/>}
            />
            <Input
              id={RegistartionFromFields.lastName}
              placeholder={translate(OnboardingTranslation.lastNamePlaceholder)}
              name={RegistartionFromFields.lastName}
              onChange={handleChange}
              value={values.lastName}
              errors={errors}
              type={"text"}
              // icon={<UserIcon/>}
            />
            <Input
              id={RegistartionFromFields.email}
              placeholder={translate(OnboardingTranslation.emailPlaceholder)}
              name={RegistartionFromFields.email}
              onChange={handleChange}
              value={values.email}
              errors={errors}
              type={"email"}
              icon={<Email />}
            />
            <Input
              id={RegistartionFromFields.password}
              placeholder={translate(OnboardingTranslation.passwordPlaceholder)}
              name={RegistartionFromFields.password}
              onChange={handleChange}
              value={values.password}
              errors={errors}
              type={"password"}
              icon={<Password />}
            />
          </div>
          <div className={"p-flex p-justify-center"}>
            <Button
              label={translate(OnboardingTranslation.confirmPlaceholder)}
              onClick={submitRegistration}
              disabled={!dirty || !isValid}
              className={"p-login__wrapper__container__button"}
            />
          </div>
          <div
            className={
              "p-login__wrapper__container__member p-flex p-items-center p-justify-center"
            }
          >
            <p>
              {" "}
              {translate(OnboardingTranslation.haveAccPlaceholder)}{" "}
              <Link
                className={"p-login__wrapper__container__member__link"}
                to={loginRoute()}
              >
                {" "}
                {translate(OnboardingTranslation.signInPlaceholder)}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
