import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import store from "./redux";
import MainNavigation from "./routing/MainNavigation";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <MainNavigation></MainNavigation>
    </Provider>
  );
};

export default App;
