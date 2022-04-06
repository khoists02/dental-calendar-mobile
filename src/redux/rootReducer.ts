import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
