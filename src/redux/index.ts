import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import rootReducer from "./rootReducer";
import apiMiddleware from "../config/apiMiddleware";

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const defaultMiddlewares = [apiMiddleware, thunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: defaultMiddlewares,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
