import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import adminReducer from "./redux/reducers/adminReducer";
import alertReducer from "./redux/reducers/alertReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  admin: adminReducer,
  alert: alertReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
