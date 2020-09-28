import { post } from "../httpService";
import { LoginResponse } from "../../../shared/models/onboarding/response";
import { LoginRequest } from "../../../shared/models/onboarding/request";

export const loginUrl = () => `auth/login`;

export const loginRequest = async (payload) =>
  post<LoginRequest, LoginResponse>(loginUrl(), payload);
