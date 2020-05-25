import { Dispatch } from "redux";
import { AppAction } from "../actionTypes";
import { LOGIN_FAIL, LOGIN, SET_ALERT, REMOVE_ALERT } from "../types";
import { v4 } from "uuid";
import axios from "axios";

export interface LoginBody {
  username: string;
  password: string;
}

export const loginAdmin = (loginCredential: LoginBody) => async (
  dispatch: Dispatch<AppAction>
) => {
  const id = v4();

  // login request does not use admin information
  if (
    loginCredential.username !== "admin" ||
    loginCredential.password !== "123456"
  ) {
    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch({
      type: SET_ALERT,
      payload: {
        id: id,
        msg: "Wrong Admin Credential",
        alertType: "danger",
      },
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      3000
    );
  } else {
    const res = await axios.get("/api/data");
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  }
};
