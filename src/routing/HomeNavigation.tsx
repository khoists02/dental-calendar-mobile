import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack, HomeRoutes } from "./routes";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Color } from "../theme/color";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/operations/login.operation";

const HomeNavigation = (): React.ReactElement => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const getIconName = (routeName: string, focused: boolean) => {
    let iconName;

    if (routeName === "Home") {
      iconName = focused ? "home" : "home-outline";
    } else if (routeName === "Settings") {
      iconName = focused ? "ios-list" : "ios-list-outline";
    } else if (routeName === "Calendar") {
      iconName = focused ? "calendar" : "calendar-outline";
    } else {
      iconName = focused ? "person" : "person-outline";
    }
    return iconName;
  };

  return (
    <NavigationContainer independent>
      <HomeStack.Navigator
        initialRouteName={HomeRoutes.Calendar}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = getIconName(route.name, focused);
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Color.primary,
          tabBarInactiveTintColor: Color.grey,
        })}
      >
        <HomeStack.Screen name={HomeRoutes.Home} component={HomeScreen} />
        <HomeStack.Screen
          name={HomeRoutes.Calendar}
          component={CalendarScreen}
        />
        <HomeStack.Screen
          name={HomeRoutes.Settings}
          component={SettingsScreen}
        />
        <HomeStack.Screen name={HomeRoutes.Profile} component={ProfileScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};
export default HomeNavigation;
