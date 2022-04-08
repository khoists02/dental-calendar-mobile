import React from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import Toast from "react-native-toast-message";
import { ThemeProvider } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import store from "./redux";
import MainNavigation from "./routing/MainNavigation";

const theme = {
  Button: {
    containerStyle: {
      margin: 5,
    },
    buttonStyle: {
      width: "100%",
      borderRadius: 35,
      backgroundColor: "green",
    },
    titleStyle: {
      color: "red",
    },
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StatusBar hidden />
          <MainNavigation></MainNavigation>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
