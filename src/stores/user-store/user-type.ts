export const ACCESS_TOKEN_STORAGE_KEY = "accessToken";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

export interface UserState {
  accessToken: string | null;
}

export interface SetAccessTokenActionPayload {
  accessToken: string;
}

export interface SetAccessTokenAction {
  type: typeof SET_ACCESS_TOKEN;
  payload: SetAccessTokenActionPayload;
}
