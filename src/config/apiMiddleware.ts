import { Middleware } from "redux";
import { RootState } from "../redux";

const apiMiddleware: Middleware<unknown, RootState> =
  () => (next) => (action) => {
    return next(action);
  };

export default apiMiddleware;
