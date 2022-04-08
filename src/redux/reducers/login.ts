import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";
import {
  storageGetItem,
  storageDeleteItem,
  storageSetItem,
} from "../../utils/storage";

type LoginState = {
  token: string | undefined;
  fetchingSession: boolean;
  isAuthenticated: boolean;
  user: IUser | undefined;
  loading: boolean;
  registerActon: "back" | "state";
};

const initialState: LoginState = {
  token: "",
  fetchingSession: false,
  isAuthenticated: false,
  user: undefined,
  loading: false,
  registerActon: "state",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginStart(state) {
      state.fetchingSession = true;
    },
    loginSuccess(state, action: PayloadAction<string>) {
      state.token = action.payload;
      storageSetItem("accessToken", action.payload);
      state.fetchingSession = false;
      state.isAuthenticated = true;
    },
    loginFail(state) {
      state.fetchingSession = false;
      state.isAuthenticated = false;
    },
    getUserSuccess(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.fetchingSession = false;
      storageSetItem("email", action.payload.email);
      storageSetItem("name", action.payload.name);
    },
    clearSession(state) {
      state.isAuthenticated = false;
      state.user = undefined;
      state.token = undefined;
      storageDeleteItem("accessToken");
    },
    startRegister(state) {
      state.loading = true;
    },
    registerSuccess(state) {
      state.loading = false;
      state.registerActon = "back";
      storageDeleteItem("email");
      storageDeleteItem("name");
    },
    registerFail(state) {
      state.loading = false;
      state.registerActon = "state";
    },
    clearRegisterState(state) {
      state.loading = false;
      state.registerActon = "state";
    },
  },
});

export const LoginAction = loginSlice.actions;
export default loginSlice.reducer;
