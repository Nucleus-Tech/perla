import React from "react";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import { loginRequest } from "../../../services/api/auth/authService";
import {
  defaultLoginValues,
  LoginFormFields,
  loginValidators,
} from "../form/loginForm";
import { OnboardingTranslation } from "../context/onboardingTranslation";
import { exploreRoute } from "../../../shared/routes/routes";
import "./styles.scss";
import { useUserStore } from "../../../stores/user-store/user-store";
import logoBlack from "../../../assets/images/logoBlack.svg";
import { Facebook } from "../../../shared/icons";
import { Google } from "../../../shared/icons";

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
      <Row
        className={
          "p-login__wrapper p-w-100 p-flex p-flex-column p-items-center p-justify-center"
        }
      >
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          className={"p-login__wrapper__container p-w-100 p-box-shadow"}
        >
          <Row className={"p-flex p-justify-center"}>
            <Col
              xs={4}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              className={"p-flex p-justify-center"}
            >
              <img
                className={"p-login__wrapper__container__logo"}
                src={logoBlack}
                alt="Perla Imperial"
              />
            </Col>
            <label
              className={"p-login__wrapper__container__label p-text-center"}
            >
              <h1 className={"p-flex p-flex-row"}>
                {translate(OnboardingTranslation.signInPlaceholder)}
              </h1>
            </label>
          </Row>
          <Row
            className={
              "p-login__wrapper__container__form p-flex p-flex-column p-justify-center p-w-100"
            }
          >
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Input
                id={LoginFormFields.email}
                placeholder={translate(OnboardingTranslation.emailPlaceholder)}
                name={LoginFormFields.email}
                onChange={handleChange}
                value={values.email}
                errors={errors}
                type={"email"}
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={"p-flex p-flex-column"}
            >
              <Input
                id={LoginFormFields.password}
                placeholder={translate(
                  OnboardingTranslation.passwordPlaceholder
                )}
                name={LoginFormFields.password}
                onChange={handleChange}
                value={values.password}
                errors={errors}
                type={"password"}
              />
              <div className={"p-login__wrapper__container__form__forgot"}>
                {translate(OnboardingTranslation.forgotPasswordPlaceholder)}
              </div>
            </Col>
          </Row>
          <Row className={"p-flex p-justify-center"}>
            <Button
              label={translate(OnboardingTranslation.signInPlaceholder)}
              onClick={submitLogin}
              disabled={!dirty || !isValid}
              className={"p-login__wrapper__container__button"}
            />
          </Row>
          <Row className={"p-flex p-justify-center"}>
            <div className={"p-login__wrapper__container__or p-text-center"}>
              <h1 className={"p-flex p-flex-row"}>
                {translate(OnboardingTranslation.orPlaceholder)}
              </h1>
            </div>
          </Row>
          <Row
            className={
              "p-flex p-justify-center p-login__wrapper__container__fbgoogle "
            }
          >
            <Col xs={11} sm={11} md={11} lg={9} xl={6}>
              <div
                className={"p-login__wrapper__container__fbgoogle__facebook"}
              >
                <Facebook />
              </div>
            </Col>
            <Col xs={11} sm={11} md={11} lg={9} xl={6}>
              <div className={"p-login__wrapper__container__fbgoogle__google"}>
                <Google />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
