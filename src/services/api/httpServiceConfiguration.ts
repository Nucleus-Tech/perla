import Axios from "axios";

import { getValueForKeyInBrowserStorage } from "../shared";
import { SecurityHttpHeaders } from "../../shared/constants";
import { isLoginUrl } from "./util";
import { BROWSER_STORAGE_KEY_ACCESS_TOKEN } from "../../shared/constants/localStorageConstants";
import { history } from "../shared";
import { internalServerRoute } from "../../shared/routes/routes";

Axios.interceptors.request.use((req) => {
  // Don't attach any headers for the login or refresh token requests
  if (isLoginUrl(req.url)) {
    return req;
  }

  const token = getValueForKeyInBrowserStorage(
    BROWSER_STORAGE_KEY_ACCESS_TOKEN
  );
  if (token) {
    req.headers[SecurityHttpHeaders.authorization] = `Bearer ${token}`;
  }

  return req;
});

Axios.interceptors.response.use(
  (data) => data,
  async (error) => {
    const { response } = error;
    
    if (response && response.status === 502) {
      history.push(internalServerRoute());
    }
    if (response && response.status === 401) {
      // TODO: Handle 401 Error Do logout or something
    }

    return Promise.reject(error);
  }
);
