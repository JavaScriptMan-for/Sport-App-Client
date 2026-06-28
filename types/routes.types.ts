import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";

// --- STACKS INSIDE TABS ---

export type HomeStackParamList = {
  main: undefined;
  my_workouts: undefined;
  streak: undefined
};

export type NewsStackParamList = {
  main: undefined;
};

export type StatisticStackParamList = {
  main: undefined
}

export type CreateWorkoutStackParamList = {
  main: undefined
}

export type SettingsStackParamList = {
  main: undefined;
};

export type ProfileStackParamList = {
  main: undefined
}

// --- TABS ---

export type MainTabParamList = {
  home: NavigatorScreenParams<HomeStackParamList>;
  news: NavigatorScreenParams<NewsStackParamList>;
  statistic: NavigatorScreenParams<StatisticStackParamList>;
  create_workout: NavigatorScreenParams<CreateWorkoutStackParamList>;
  settings: NavigatorScreenParams<SettingsStackParamList>;
  profile: NavigatorScreenParams<ProfileStackParamList>
};

// --- AUTH STACKS ---

export type RegisterStackParamList = {
  hello: undefined;
  form: undefined;
  code: undefined;
  create_user: undefined
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
export type LoginNav = NativeStackNavigationProp<LoginStackParamList>

export type NavType<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
