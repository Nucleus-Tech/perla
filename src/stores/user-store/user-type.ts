import { UserModel } from "../../shared/models/onboarding/internal";

export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

export interface UserState {
  accessToken: string | null;
  user: UserModel | null;
}

export interface SetAccessTokenActionPayload {
  accessToken: string;
  user: UserModel;
}

export interface SetAccessTokenAction {
  type: typeof SET_ACCESS_TOKEN;
  payload: SetAccessTokenActionPayload;
}
