import { Dispatch } from "react";
import { SET_ACCESS_TOKEN, SetAccessTokenAction } from "./user-type";

export const setUserAccessTokenAction = (
  accessToken: string,
  dispatch: Dispatch<SetAccessTokenAction>
): void =>
  dispatch({
    type: SET_ACCESS_TOKEN,
    payload: { accessToken },
  });
