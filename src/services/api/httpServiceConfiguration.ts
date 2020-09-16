import Axios from 'axios';

import { getValueForKeyInBrowserStorage } from '../shared';
import { SecurityHttpHeaders } from '../../shared/constants';
import { isLoginUrl } from './util';
import {ACCESS_TOKEN_STORAGE_KEY} from "../../stores/user-store/user-type";


Axios.interceptors.request.use(req => {
  // Don't attach any headers for the login or refresh token requests
  if (isLoginUrl(req.url)) {
    return req;
  }

  const token = getValueForKeyInBrowserStorage(ACCESS_TOKEN_STORAGE_KEY);
  if (token) {
    req.headers[SecurityHttpHeaders.authorization] = `Bearer ${token}`;
  }

  return req;
});

Axios.interceptors.response.use(
    data => data,
    async error => {
      const { response } = error;

      if (response && response.status === 401) {
        // TODO: Handle 401 Error Do logout or something
      }

      return Promise.reject(error);
    }
);



