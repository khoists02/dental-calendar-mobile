import axios from "axios";
import { ILogin } from "../../types/user";
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
    dispatch(ErrorAction.setError([err]));
  }
};

export const logout = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    await axios.delete(`http://192.168.1.5:1337/api/sessions`);
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
      dispatch(ErrorAction.setError([err]));
    }
  };
