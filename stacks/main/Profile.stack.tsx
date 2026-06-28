import { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProfileStack = createNativeStackNavigator()

import MainScreen from "../../screens/profile/MainScreen"

const ProfileStacks: FC = () => {
    return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
        <ProfileStack.Screen name="main_screen" component={MainScreen} />
    </ProfileStack.Navigator>
    )
}

export default ProfileStacks