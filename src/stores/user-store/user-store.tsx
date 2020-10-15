import React, { createContext, useContext, useReducer } from "react";

import { UserState } from "./user-type";
import { initialUserState, userReducer } from "./user-reducer";
import { setUserAccessTokenAction } from "./user-actions";
import { storeInBrowserStorage, removeFromBrowserStorage } from "../../services/shared";
import {BROWSER_STORAGE_KEY_ACCESS_TOKEN, USER} from "../../shared/constants/localStorageConstants";
import { UserModel } from "../../shared/models/onboarding/internal";

interface UserContext {
  state: UserState;
  setAccessToken: (accessToken: string, user: UserModel) => void;
  logoutUser: (accessToken, user) => void;
}

export const UserStore = createContext({} as UserContext);

export const useUserStore = () => useContext(UserStore);

export const UserStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const setAccessToken = (accessToken: string, user: UserModel): void => {
    storeInBrowserStorage(BROWSER_STORAGE_KEY_ACCESS_TOKEN, accessToken);
    storeInBrowserStorage(USER, user);
    setUserAccessTokenAction(accessToken, user, dispatch);
  };

  const logoutUser = (accessToken, user): void => {
    removeFromBrowserStorage(BROWSER_STORAGE_KEY_ACCESS_TOKEN);
    removeFromBrowserStorage(USER);
    setUserAccessTokenAction(accessToken, user, dispatch);
  }

  return (
    <UserStore.Provider value={{ state, setAccessToken, logoutUser }}>
      {children}
    </UserStore.Provider>
  );
};
