import { FC } from "react";
import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const LoginStack = createNativeStackNavigator()

import HelloScreen from "../../screens/login/HelloScreen";
import AuthDataScreen from "../../screens/login/AuthDataScreen";

const LoginStacks: FC = () => {
    return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
        <LoginStack.Screen name="hello" component={HelloScreen} />
        <LoginStack.Screen name="form" component={AuthDataScreen} />
    </LoginStack.Navigator>
    )
}

export default LoginStacks