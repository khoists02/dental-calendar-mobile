import axios from "axios";
import { ILogin, IUserRegister } from "../../types/user";
import { AppDispatch, AppThunk } from "../index";
import { ErrorAction } from "../reducers/error";
import { LoginAction } from "../reducers/login";

export const getUser = (): AppThunk => async (dispatch) => {
  try {
    dispatch(LoginAction.loginStart());
    const userResponse = await axios.get(
      `http://192.168.1.5:1337/api/authenticatedUser`
    );
    dispatch(LoginAction.getUserSuccess(userResponse.data));
  } catch (err) {
    dispatch(LoginAction.loginFail());
    // dispatch(ErrorAction.setError(err.response?.data));
  }
};

export const logout = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    await axios.post(`http://192.168.1.5:1337/api/logout`);
    dispatch(LoginAction.clearSession());
  } catch (err) {
    dispatch(ErrorAction.setError([err]));
  }
};

export const submitLogin =
  (props: ILogin): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(LoginAction.loginStart());
      const data = await axios.post(
        `http://192.168.1.5:1337/api/authenticate`,
        props
      );
      dispatch(LoginAction.loginSuccess(data.data.accessToken));
    } catch (err) {
      dispatch(LoginAction.loginFail());
      dispatch(ErrorAction.setError(err.response?.data));
    }
  };

export const register =
  (props: IUserRegister): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(LoginAction.startRegister());
      await axios.post(`http://192.168.1.5:1337/api/users`, props);
      dispatch(LoginAction.registerSuccess());
    } catch (err) {
      dispatch(LoginAction.registerFail());
      dispatch(ErrorAction.setError([err]));
    }
  };
