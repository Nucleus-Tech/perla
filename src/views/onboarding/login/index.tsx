import React from "react";
import { Container, Row, Col } from "react-grid-system";
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
      <Container
        className={
          "p-login__container p-flex p-flex-column p-items-center p-justify-center p-box-shadow"
        }
      >
        <div className={"p-login__logo"} />
        <label className={"p-login__label"}>
          <h1>{translate(OnboardingTranslation.signInPlaceholder)}</h1>
        </label>
        <Row className={"p-login__input"}>
          <Col xs={12} sm={12} md={12} lg={12}>
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
          <div className={"p-login__forgot"}>
            {translate(OnboardingTranslation.forgotPasswordPlaceholder)}
          </div>
        </Row>
        <Row>
          <Button
            label={translate(OnboardingTranslation.signInPlaceholder)}
            onClick={submitLogin}
            disabled={!dirty || !isValid}
            className={"p-login__button"}
          />
        </Row>
        <div className={"p-login__or"}>
          <h1>{translate(OnboardingTranslation.orPlaceholder)}</h1>
        </div>
        <div className={"p-login__fbgoolge"}>
          <div>FB</div>
          <div>Google</div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
