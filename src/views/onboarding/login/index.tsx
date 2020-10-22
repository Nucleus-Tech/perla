import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";

import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import { OnboardingTranslation } from "../context/onboardingTranslation";
import { exploreRoute, registrationRoute } from "../../../shared/routes/routes";
import { loginRequest } from "../../../services/api/auth/authService";
import {
  defaultLoginValues,
  LoginFormFields,
  loginValidators,
} from "../form/loginForm";
import "./styles.scss";
import { useUserStore } from "../../../stores/user-store/user-store";
import logoBlack from "../../../assets/images/logoBlack.svg";
import { Facebook, Google } from "../../../shared/icons";

const Login = () => {
  const history = useHistory();
  const { t: translate } = useTranslation();

  const { setAccessToken } = useUserStore();

  // @ts-ignore
  const { handleChange, values, errors, dirty, isValid } = useFormik({
    initialValues: defaultLoginValues,
    validationSchema: loginValidators,
  });

  const submitLogin = async () => {
    try {
      const { data } = await loginRequest(values);
      const accessToken = data.accessToken;
      setAccessToken(accessToken);
      history.push(exploreRoute());
    } catch (error) {
      // TODO: Handle error https://brick-link.atlassian.net/browse/BRIC-15
    }
  };

  return (
    <div
      className={"p-login p-flex p-flex-column p-items-center p-justify-center"}
    >
      <div className={"p-login__wrapper p-flex p-flex-column p-items-center p-justify-center"}>
        <div className={"p-login__wrapper__container p-w-100"}>
          <div className={"p-flex p-justify-center p-items-center"}>
          <img
          className={"p-login__wrapper__container__logo"}
            src={logoBlack}
            alt="Perla Imperial"
          />
          </div>
          <label className={"p-login__wrapper__container__label p-text-center"}>
            <h1 className={"p-flex p-flex-row"}>{translate(OnboardingTranslation.signInPlaceholder)}</h1>
          </label>
          <div
            className={
              "p-login__wrapper__container__form p-flex p-flex-column p-justify-center p-w-100"
            }
          >
            <Input
              id={LoginFormFields.email}
              placeholder={translate(OnboardingTranslation.emailPlaceholder)}
              name={LoginFormFields.email}
              onChange={handleChange}
              value={values.email}
              errors={errors}
              type={"email"}
            />
            <Input
              id={LoginFormFields.password}
              placeholder={translate(OnboardingTranslation.passwordPlaceholder)}
              name={LoginFormFields.password}
              onChange={handleChange}
              value={values.password}
              errors={errors}
              type={"password"}
            />
            <div className={"p-login__wrapper__container__form__forgot"}>
              {translate(OnboardingTranslation.forgotPasswordPlaceholder)}
            </div>
          </div>
          <div className={"p-flex p-justify-center"}>
            <Button
              label={translate(OnboardingTranslation.signInPlaceholder)}
              onClick={submitLogin}
              disabled={!dirty || !isValid}
              className={"p-login__wrapper__container__button"}
            />
          </div>
          <div className={"p-login__wrapper__container__or p-text-center"}>
            <h1 className={"p-flex p-flex-row"}>{translate(OnboardingTranslation.orPlaceholder)}</h1>
          </div>
          <div className={"p-login__wrapper__container__social p-flex"}>
           <div className={"p-login__wrapper__container__social__facebook"}><Facebook/></div>
           <div className={"p-login__wrapper__container__social__google"}><Google/></div>
          </div>
          <div className={"p-login__wrapper__container__member p-flex p-items-center p-justify-center"}>
          <p> Not a member? <Link className={"p-login__wrapper__container__member__link"}  to={registrationRoute()} > Sign up now</Link> </p></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
