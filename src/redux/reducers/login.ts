import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AsyncStorage } from "react-native";
import { IUser } from "../../types/user";

type LoginState = {
  token: string | undefined;
  fetchingSession: boolean;
  isAuthenticated: boolean;
  user: IUser | undefined;
};

const initialState: LoginState = {
  token: "",
  fetchingSession: false,
  isAuthenticated: false,
  user: undefined,
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
      AsyncStorage.setItem("accessToken", action.payload);
      state.fetchingSession = false;
      state.isAuthenticated = true;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    loginFail(state) {
      state.fetchingSession = false;
      state.isAuthenticated = false;
    },
    getUserSuccess(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.fetchingSession = false;
    },
    clearSession(state) {
      state.isAuthenticated = false;
      state.user = undefined;
      state.token = undefined;
      AsyncStorage.clear();
    },
  },
});

export const LoginAction = loginSlice.actions;
export default loginSlice.reducer;
