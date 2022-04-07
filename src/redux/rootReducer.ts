import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login";
import errorReducer from "./reducers/error";

const rootReducer = combineReducers({
  login: loginReducer,
  error: errorReducer,
});

export default rootReducer;
