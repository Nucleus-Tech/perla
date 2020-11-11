import Axios from "axios";
import { apiUrl } from "../../shared/constants";

// needed to load the config.
import "./httpServiceConfiguration";

const getApiUrl = (): string => apiUrl();

export const post = <T, R>(url: string, payload: T) =>
  Axios.post<R>(`${getApiUrl()}/${url}`, payload);

export const get = <R>(url: string) => Axios.get<R>(`${getApiUrl()}/${url}`);
