import { Admin } from "../stateTypes";
import { LoginCredentialAction } from "../actionTypes";
import { LOGIN, LOGIN_FAIL } from "../types";

const initialState: Admin = { isAuthentciated: false, tinyUrlHistory: [] };

export default function (state = initialState, action: LoginCredentialAction) {
  switch (action.type) {
    case LOGIN:
      return { isAuthentciated: true, tinyUrlHistory: [...action.payload] };
    case LOGIN_FAIL:
      return { isAuthentciated: false, tinyUrlHistory: [] };

    default:
      return state;
  }
}
