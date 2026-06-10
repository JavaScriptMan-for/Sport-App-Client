import { FC } from "react";

import { RootStackParamList } from "../types/routes.types";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIcon from "../assets/icons/home";

import HomeStacks from "../stacks/main/Home.stacks";
import DetailsStacks from "../stacks/main/Details.stacks";
import SettingsStacks from "../stacks/main/Settings.stacks";

import { NavType } from "../types/routes.types";


const Tab = createBottomTabNavigator<RootStackParamList>();

const MainTabs: FC = () => {
    return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: true, 
        }}
      >
        <Tab.Screen
         name="home"
         component={HomeStacks}
         options={{
            tabBarIcon: ({ focused }) => (
              <HomeIcon focused={focused}/>
            ),
          }}
          />
        <Tab.Screen name="details" component={DetailsStacks} />
        <Tab.Screen name="settings" component={SettingsStacks} />
      </Tab.Navigator>
    </>
    )
}

export default MainTabs