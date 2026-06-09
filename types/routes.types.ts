import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type RootStackParamList = {
  home: undefined;
  details: undefined;
  settings: undefined;
};

export type NavType = NativeStackNavigationProp<RootStackParamList>;