import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack, MainRoutes } from "./routes";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/login/LoginScreen";
import HomeNavigation from "./HomeNavigation";
import { useReduxSelector } from "../redux";
import RegisterScreen from "../screens/login/RegisterScreen";

const MainNavigation = (): React.ReactElement => {
  const { isAuthenticated } = useReduxSelector((state) => state.user);
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <MainStack.Screen
              name={MainRoutes.Main}
              component={HomeNavigation}
            />
          </>
        ) : (
          <>
            <MainStack.Screen
              name={MainRoutes.Splash}
              component={SplashScreen}
            />
            <MainStack.Screen name={MainRoutes.Login} component={LoginScreen} />
            <MainStack.Screen
              name={MainRoutes.Register}
              component={RegisterScreen}
            />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
