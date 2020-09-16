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

const Login = () => {
  const { t: translate } = useTranslation();

  // @ts-ignore
  const { handleChange, values, errors } = useFormik({
    initialValues: defaultLoginValues,
    validationSchema: loginValidators,
  });

  const submitLogin = async (values) => {
    try {
      console.log(values);
      await loginRequest(values);
    } catch (error) {
      // TODO: Handle error https://brick-link.atlassian.net/browse/BRIC-15
    }
  };

  console.log(errors)

  return (
    <Container className={"bl-login__container"}>
      <label>{translate(OnboardingTranslation.loginPlaceholder)}</label>
      <Row>
        <Col xs={4} lg={12}>
          <Input
            id={LoginFormFields.email}
            placeholder={"test"}
            name={LoginFormFields.email}
            onChange={handleChange}
            value={values.email}
            label={'nemanja'}
          />
          <Input
            id={LoginFormFields.password}
            placeholder={"test"}
            name={LoginFormFields.password}
            onChange={handleChange}
            value={values.password}
            label={'nemanja'}
          />
        </Col>
      </Row>
      <Row>
        <Button label={"Login"} onClick={() => submitLogin(values)} />
      </Row>
    </Container>
  );
};

export default Login;
