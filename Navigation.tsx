import { FC } from "react";
import { useAppSelector } from "./store/store";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterStacks from "./stacks/register/RegisterStacks"
import MainTabs from "./tabs/Main.tabs";
import LoginStacks from "./stacks/login/LoginStacks";

const RootStack = createNativeStackNavigator()

const Navigation: FC = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuth ? (
          <>
            <RootStack.Screen name="register" component={RegisterStacks} />
            <RootStack.Screen name="login" component={LoginStacks} />
          </>
        ) : (
          <RootStack.Screen name="main" component={MainTabs} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation