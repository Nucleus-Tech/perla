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
import { exploreRoute, registrationRoute } from "../../../shared/routes/routes";
import { useUserStore } from "../../../stores/user-store/user-store";
import { useSocialLogin } from "../context/hooks/social-login.hook";
import { Facebook, Google, LogoBlack } from "../../../shared/icons";
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
    } catch (error) {
      // TODO: Handle error https://brick-link.atlassian.net/browse/BRIC-15
    }
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
      className={"p-login p-flex p-flex-column p-items-center p-justify-center"}
    >
      <div
        className={
          "p-login__wrapper p-flex p-flex-column p-items-center p-justify-center"
        }
      >
        <div className={"p-login__wrapper__container p-w-100"}>
          <div  className={"p-login__wrapper__container__logo p-w-100 p-text-center"} >
              <LogoBlack/>   
          </div>
          <label className={"p-login__wrapper__container__label p-text-center"}>
            <h1 className={"p-flex p-flex-row"}>
              {translate(OnboardingTranslation.signInPlaceholder)}
            </h1>
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
            <h1 className={"p-flex p-flex-row"}>
              {translate(OnboardingTranslation.orPlaceholder)}
            </h1>
          </div>
          <div className={"p-login__wrapper__container__social p-flex"}>
            <div
              className={"p-login__wrapper__container__social__facebook p-w-100"}
              onClick={() => handleSocial("FACEBOOK")}
            >
              <Facebook />
            </div>
            <div
              className={"p-login__wrapper__container__social__google p-w-100"}
              onClick={() => handleSocial("GOOGLE")}
            >
              <Google />
            </div>
          </div>
          <div
            className={
              "p-login__wrapper__container__member p-flex p-items-center p-justify-center"
            }
          >
            <p>
              {" "}
              Not a member?{" "}
              <Link
                className={"p-login__wrapper__container__member__link"}
                to={registrationRoute()}
              >
                {" "}
                Sign up now
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
