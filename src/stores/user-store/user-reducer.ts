import {
  ACCESS_TOKEN_STORAGE_KEY,
  SET_ACCESS_TOKEN,
  SetAccessTokenAction,
  UserState,
} from "./user-type";
import { getValueForKeyInBrowserStorage } from "../../services/shared";

export const initialUserState: UserState = {
  accessToken:
    getValueForKeyInBrowserStorage<string>(ACCESS_TOKEN_STORAGE_KEY) || null,
};

type UserAction = SetAccessTokenAction;

export const userReducer = (
  state = initialUserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
