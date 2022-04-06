import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum MainRoutes {
  Main = "Main",
  Splash = "Splash",
  Login = "Login",
}

export type MainStackParamList = {
  [MainRoutes.Main]: { update: boolean } | undefined; // just an example, "update" will later be used for version checks
  [MainRoutes.Splash]: undefined;
  [MainRoutes.Login]: undefined;
};

export enum HomeRoutes {
  Home = "Home",
  Settings = "Settings",
  Calendar = "Calendar",
  Profile = "Profile",
}

export type HomeStackParamList = {
  [HomeRoutes.Home]: { update: boolean } | undefined; // just an example, "update" will later be used for version checks
  [HomeRoutes.Settings]: undefined;
  [HomeRoutes.Calendar]: undefined;
  [HomeRoutes.Profile]: undefined;
};

export const HomeStack = createBottomTabNavigator<HomeStackParamList>();
export const MainStack = createNativeStackNavigator<MainStackParamList>();
