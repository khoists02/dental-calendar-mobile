import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ErrorAction, ErrorMessage } from "../redux/reducers/error";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry: boolean;
}

interface CustomAxiosError extends AxiosError {
  config: CustomAxiosRequestConfig;
}

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;

axios.defaults.withCredentials = true;

const setupAxiosInterceptors = (store: any): void => {
  const onRequestSuccess = (config: AxiosRequestConfig) => {
    const token = store.getState().login?.token;
    if (token) {
      // tslint:disable-next-line: no-string-literal
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  };
  const onResponseSuccess = (response: AxiosResponse) => response;
  const onResponseError = async (err: CustomAxiosError) => {
    const status = err.response?.status;
    if (status === undefined) {
      const errorMessage: ErrorMessage = {
        type: "Network Error",
        code: 502,
        message: "Unable to connect to API, please try again.",
      };
      store.dispatch(ErrorAction.setError([errorMessage]));
      return Promise.reject();
    }
    store.dispatch(ErrorAction.setError(err?.response?.data?.errors));
    return Promise.reject(err);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
