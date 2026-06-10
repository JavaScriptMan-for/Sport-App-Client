import { FC } from "react";
import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RegisterStack = createNativeStackNavigator()

import HelloScreen from "../../screens/register/HelloScreen";
import AuthDataScreen from "../../screens/register/AuthDataScreen";

const RegisterStacks: FC = () => {
    return (
    <RegisterStack.Navigator screenOptions={{ headerShown: false }}>
        <RegisterStack.Screen name="hello" component={HelloScreen} />
        <RegisterStack.Screen name="form" component={AuthDataScreen} />
    </RegisterStack.Navigator>
    )
}

export default RegisterStacks