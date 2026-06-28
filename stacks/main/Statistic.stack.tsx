import { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StatisticStack = createNativeStackNavigator()

import MainScreen from "../../screens/statistic/MainScreen";

const StatisticStacks: FC = () => {
    return (
    <StatisticStack.Navigator screenOptions={{ headerShown: false }}>
        <StatisticStack.Screen name="main_screen" component={MainScreen} />
    </StatisticStack.Navigator>
    )
}

export default StatisticStacks