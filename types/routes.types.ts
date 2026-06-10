import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";

// --- STACKS INSIDE TABS ---

export type HomeStackParamList = {
  main: undefined;
};

export type DetailsStackParamList = {
  main: undefined;
};

export type SettingsStackParamList = {
  main: undefined;
};

// --- TABS ---

export type MainTabParamList = {
  home: NavigatorScreenParams<HomeStackParamList>;
  details: NavigatorScreenParams<DetailsStackParamList>;
  settings: NavigatorScreenParams<SettingsStackParamList>;
};

// --- AUTH STACKS ---

export type RegisterStackParamList = {
  hello: undefined;
  form: undefined;
  code: undefined;
};

export type LoginStackParamList = {
  hello: undefined;
  form: undefined;
  code: undefined;
};

// --- ROOT STACK ---

export type  RootStackParamList = {
  register: NavigatorScreenParams<RegisterStackParamList>;
  login: NavigatorScreenParams<LoginStackParamList>;
  main: NavigatorScreenParams<MainTabParamList>;
}

// --- NAVIGATION TYPE ---

export type RegisterNav = NativeStackNavigationProp<RegisterStackParamList>

export type NavType<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
