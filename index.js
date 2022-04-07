import {registerRootComponent} from 'expo';
import App from './src/App';
import setupAxiosInterceptors from "./src/config/axios-interceptor";
import store from "./src/redux";

setupAxiosInterceptors(store);
registerRootComponent(App);