import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";

import { Input, Button } from "../../../components/";
import {
  loginRequest,
  loginSocialRequest,
} from "../../../services/api/auth/authService";
import {
  defaultLoginValues,
  LoginFormFields,
  loginValidators,
} from "../form/loginForm";
import { OnboardingTranslation } from "../context/translation/onboardingTranslation";
import {
  exploreRoute,
  homeRoute,
  registrationRoute,
} from "../../../shared/routes/routes";
import { useUserStore } from "../../../stores/user-store/user-store";
import { useSocialLogin } from "../context/hooks/social-login.hook";
import {
  Email,
  Facebook,
  Google,
  LogoBlack,
  Password,
} from "../../../shared/icons";
import { UserModel } from "../../../shared/models/onboarding/internal";

import "./styles.scss";

const Login = () => {
  const history = useHistory();
  const { t: translate } = useTranslation();

  const { setAccessToken } = useUserStore();

  const { socialLogin } = useSocialLogin();

  // @ts-ignore
  const { handleChange, values, errors, dirty, isValid } = useFormik({
    initialValues: defaultLoginValues,
    validationSchema: loginValidators,
  });

  const submitLogin = async () => {
    try {
      const {
        data: { accessToken, user },
      } = await loginRequest(values);
      completeLogin(accessToken, user);
    } catch (error) {}
  };

  const handleSocial = async (vendor: string) => {
    socialLogin("facebook").then(async (socialData) => {
      const {
        data: { accessToken, user },
      } = await loginSocialRequest({
        ...socialData,
        vendor,
      });
      completeLogin(accessToken, user);
    });
  };

  const completeLogin = (accessToken: string, user: UserModel) => {
    setAccessToken(accessToken, user);
    history.push(exploreRoute());
  };

  return (
    <div
      className={
        "p-onboarding p-flex p-flex-column p-items-center p-justify-center"
      }
    >
      <div
        className={
          "p-onboarding__wrapper p-flex p-flex-column p-items-center p-justify-center"
        }
      >
        <div className={"p-onboarding__wrapper__container p-w-100"}>
          <Link
            to={homeRoute()}
            className={
              "p-onboarding__wrapper__container__logo p-w-100 p-text-center"
            }
          >
            <LogoBlack />
          </Link>
          <label
            className={"p-onboarding__wrapper__container__label p-text-center"}
          >
            <h1 className={"p-flex p-flex-row"}>
              {translate(OnboardingTranslation.signInPlaceholder)}
            </h1>
          </label>
          <div
            className={
              "p-onboarding__wrapper__container__form p-flex p-flex-column p-justify-center p-w-100"
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
              icon={<Email />}
            />
            <Input
              id={LoginFormFields.password}
              placeholder={translate(OnboardingTranslation.passwordPlaceholder)}
              name={LoginFormFields.password}
              onChange={handleChange}
              value={values.password}
              errors={errors}
              type={"password"}
              icon={<Password />}
            />
            <div
              className={
                "p-onboarding__wrapper__container__form__forgot p-items-end"
              }
            >
              {translate(OnboardingTranslation.forgotPasswordPlaceholder)}
            </div>
          </div>
          <div className={"p-flex p-justify-center"}>
            <Button
              label={translate(OnboardingTranslation.signInPlaceholder)}
              onClick={submitLogin}
              disabled={!dirty || !isValid}
              className={"p-onboarding__wrapper__container__button"}
            />
          </div>
          <div className={"p-onboarding__wrapper__container__or p-text-center"}>
            <h1 className={"p-flex p-flex-row"}>
              {translate(OnboardingTranslation.orPlaceholder)}
            </h1>
          </div>
          <div className={"p-login__social p-flex"}>
            <div
              className={"p-login__social__facebook p-w-100 "}
              onClick={() => handleSocial("FACEBOOK")}
            >
              <Facebook />
            </div>
            <div
              className={"p-login__social__google p-w-100"}
              onClick={() => handleSocial("GOOGLE")}
            >
              <Google />
            </div>
          </div>
          <div
            className={
              "p-onboarding__wrapper__container__member p-flex p-items-center p-justify-center"
            }
          >
            <p>
              {" "}
              {translate(OnboardingTranslation.notAMemberPlaceholder)}{" "}
              <Link
                className={"p-onboarding__wrapper__container__member__link"}
                to={registrationRoute()}
              >
                {" "}
                {translate(OnboardingTranslation.signUpNowPlaceholder)}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
