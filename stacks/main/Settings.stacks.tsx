import { FC } from "react";
import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNav = createNativeStackNavigator()

import MainScreen from "../../screens/settings/MainScreen";

const SettingsStacks: FC = () => {
    return (
    <HomeStackNav.Navigator screenOptions={{ headerShown: false }}>
        <HomeStackNav.Screen name="main_screen" component={MainScreen} />
    </HomeStackNav.Navigator>
    )
}

export default SettingsStacks