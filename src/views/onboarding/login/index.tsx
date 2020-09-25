import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import { loginRequest } from "../../../services/api/auth/authService";
import {
  defaultLoginValues,
  LoginFormFields,
  loginValidators,
} from "../form/loginForm";
import { OnboardingTranslation } from "../context/onboardingTranslation";

import "./styles.scss";
import { withRouter } from "react-router-dom";
import { homeRoute } from "../../../shared/routes/routes";

const Login = ({ history }) => {
  const { t: translate } = useTranslation();

  // @ts-ignore
  const { handleChange, values, errors, dirty, isValid } = useFormik({
    initialValues: defaultLoginValues,
    validationSchema: loginValidators,
  });

  const submitLogin = async (values) => {
    try {
      console.log(values);
      const { data } = await loginRequest(values);
      localStorage.setItem("jwtToken", data["accessToken"]);
      history.push(homeRoute());
    } catch (error) {
      // TODO: Handle error https://brick-link.atlassian.net/browse/BRIC-15
    }
  };

  return (
    <div className={"p-login"}>
      <Container
        className={"p-login__container p-flex p-flex-column p-items-center"}
      >
        <div className={"p-login__logo"}>LOGO</div>
        <label className={"p-login__label"}>
          <h1>{translate(OnboardingTranslation.signInPlaceholder)}</h1>
        </label>
        <Row className={"p-login__input"}>
          <Col xs={4} lg={12}>
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
          </Col>
          <div className={"p-login__forgot"}>Forgot password?</div>
        </Row>
        <Row>
          <Button
            label={translate(OnboardingTranslation.signInPlaceholder)}
            onClick={() => submitLogin(values)}
            disabled={!dirty || !isValid}
          />
        </Row>
        <div className={"p-login__or"}>
          <h1>or</h1>
        </div>
        <div className={"p-login__fbgoolge"}>
          <div>FB</div>
          <div>Google</div>
        </div>
      </Container>
    </div>
  );
};

export default withRouter(Login);
