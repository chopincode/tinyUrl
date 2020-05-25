import { Alert } from "../stateTypes";
import { AlertAction } from "../actionTypes";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const initialState: Alert[] = [];

export default function (state = initialState, action: AlertAction) {
  switch (action.type) {
    case SET_ALERT:
      return [...initialState, action.payload];

    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);

    default:
      return state;
  }
}
