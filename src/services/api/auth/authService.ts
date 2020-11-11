import { post } from "../httpService";
import { LoginResponse } from "../../../shared/models/onboarding/response";
import {
  LoginRequest,
  LoginSocialRequest,
  RegistrationRequest,
} from "../../../shared/models/onboarding/request";

export const loginUrl = () => `auth/login`;
export const loginSocialUrl = () => `auth/login-social`;
export const registrationUrl = () => `auth/registration`;

export const loginRequest = async (payload) =>
  post<LoginRequest, LoginResponse>(loginUrl(), payload);

export const loginSocialRequest = async (payload) =>
  post<LoginSocialRequest, LoginResponse>(loginSocialUrl(), payload);

export const registrationRequest = async (payload) =>
  post<RegistrationRequest, void>(registrationUrl(), payload);
