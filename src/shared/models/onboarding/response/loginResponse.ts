import {UserModel} from "../internal";

export interface LoginResponse {
  user: UserModel;
  accessToken: string;
}