import { Dispatch } from "react";
import { UserModel } from "../../shared/models/onboarding/internal";
import { SET_ACCESS_TOKEN, SetAccessTokenAction } from "./user-type";

export const setUserAccessTokenAction = (
  accessToken: string,
  user: UserModel,
  dispatch: Dispatch<SetAccessTokenAction>
): void =>
  dispatch({
    type: SET_ACCESS_TOKEN,
    payload: { accessToken, user },
  });