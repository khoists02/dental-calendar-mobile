import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  HomeRoutes,
  HomeStackParamList,
  MainRoutes,
  MainStackParamList,
} from "../routes";

export type SplashProps = NativeStackScreenProps<
  MainStackParamList,
  MainRoutes.Splash
>;

export type LoginProps = NativeStackScreenProps<
  MainStackParamList,
  MainRoutes.Login
>;

export type HomeProps = NativeStackScreenProps<
  HomeStackParamList,
  HomeRoutes.Home
>;

export type SettingsProps = NativeStackScreenProps<
  HomeStackParamList,
  HomeRoutes.Settings
>;

export type CalendarProps = NativeStackScreenProps<
  HomeStackParamList,
  HomeRoutes.Calendar
>;

export type ProfileProps = NativeStackScreenProps<
  HomeStackParamList,
  HomeRoutes.Profile
>;
