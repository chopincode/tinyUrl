import { LOGIN, LOGIN_FAIL, SET_ALERT, REMOVE_ALERT } from "./types";
import { TinyUrl, Alert } from "./stateTypes";

export interface LoginAdminAction {
  type: typeof LOGIN;
  payload: TinyUrl[];
}

export interface LoginFailAction {
  type: typeof LOGIN_FAIL;
}

export type LoginCredentialAction = LoginAdminAction | LoginFailAction;

export interface SetAlertAction {
  type: typeof SET_ALERT;
  payload: Alert;
}

export interface RemoveAlertAction {
  type: typeof REMOVE_ALERT;
  payload: string;
}

export type AlertAction = SetAlertAction | RemoveAlertAction;

export type AppAction = LoginCredentialAction | AlertAction;
