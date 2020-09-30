import {
  SET_ACCESS_TOKEN,
  SetAccessTokenAction,
  UserState,
} from "./user-type";
import { getValueForKeyInBrowserStorage } from "../../services/shared";
import {BROWSER_STORAGE_KEY_ACCESS_TOKEN} from "../../shared/constants/localStorageConstants";

export const initialUserState: UserState = {
  accessToken:
    getValueForKeyInBrowserStorage<string>(BROWSER_STORAGE_KEY_ACCESS_TOKEN) || null,
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
