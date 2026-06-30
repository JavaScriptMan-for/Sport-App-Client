import { FC } from "react";
import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator()

import MainScreen from "../../screens/home/MainScreen";
import StreakScreen from "../../screens/home/StreakScreen";
import MyWorkouts from "../../screens/home/MyWorkouts";

const HomeStacks: FC = () => {
    return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="main_screen" component={MainScreen} />
        <HomeStack.Screen name="streak" component={StreakScreen} />
        <HomeStack.Screen name="my_workouts" component={MyWorkouts} />
    </HomeStack.Navigator>
    )
}

export default HomeStacks