import React, { createContext, useContext, useReducer } from "react";

import { ACCESS_TOKEN_STORAGE_KEY, UserState } from "./user-type";
import { initialUserState, userReducer } from "./user-reducer";
import { setUserAccessTokenAction } from "./user-actions";
import { storeInBrowserStorage } from "../../services/shared";

interface UserContext {
  state: UserState;
  setAccessToken: (accessToken: string) => void;
}

export const UserStore = createContext({} as UserContext);

export const useUserStore = () => useContext(UserStore);

export const UserStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const setAccessToken = (accessToken: string): void => {
    storeInBrowserStorage(ACCESS_TOKEN_STORAGE_KEY, accessToken);
    setUserAccessTokenAction(accessToken, dispatch);
  };

  return (
    <UserStore.Provider value={{ state, setAccessToken }}>
      {children}
    </UserStore.Provider>
  );
};
