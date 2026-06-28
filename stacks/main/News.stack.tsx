import { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NewsStack = createNativeStackNavigator()

import MainScreen from "../../screens/news/MainScreen";

const NewsStacks: FC = () => {
    return (
    <NewsStack.Navigator screenOptions={{ headerShown: false }}>
        <NewsStack.Screen name="main_screen" component={MainScreen} />
    </NewsStack.Navigator>
    )
}

export default NewsStacks