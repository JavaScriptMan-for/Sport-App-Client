import { FC } from "react";

import { MainTabParamList } from "../types/routes.types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIcon from "../assets/icons/home";
import NewsIcon from "../assets/icons/news"
import StatisticsIcon from "../assets/icons/statistic";
import CreateWorkoutIcon from "../assets/icons/create_workout";
import SettingsIcon from "../assets/icons/settings";

import HomeStacks from "../stacks/main/Home.stack";
import NewsStacks from "../stacks/main/News.stack";
import StatisticStacks from "../stacks/main/Statistic.stack";
import SettingsStacks from "../stacks/main/Settings.stacks";
import CreateWorkoutStacks from "../stacks/main/CreateWorkout.stack";



const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs: FC = () => {
    return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "rgb(130, 0, 28)",
          tabBarInactiveTintColor: "#9CA3AF", 
        }}
      >
        <Tab.Screen
         name="home"
         component={HomeStacks}
         options={{
            title: "Главная",
            tabBarIcon: ({ focused }) => (
               <HomeIcon focused={focused}/>
            ),
          }}
          />
        <Tab.Screen
         name="news"
         component={NewsStacks}
         options={{
          title: "Новости",
          tabBarIcon: ({ focused }) => (
               <NewsIcon focused={focused}/>
            ),
         }}
          />
        <Tab.Screen 
          name="statistic"
          component={StatisticStacks}
          options={{
            title: "Статистика",
            tabBarIcon: ({ focused }) => (
               <StatisticsIcon focused={focused}/>
            ),
          }}
        />
        <Tab.Screen
          name="create_workout"
          component={CreateWorkoutStacks}
          options={{
            title: "Тренировки",
            tabBarIcon: ({ focused }) => (
               <CreateWorkoutIcon focused={focused}/>
            ),
          }}
          />
        <Tab.Screen
         name="settings"
         component={SettingsStacks}
         options={{
          tabBarIcon({ focused }) {
            return <SettingsIcon focused={focused}/>
          },
         }}
           />
      </Tab.Navigator>
    </>
    )
}

export default MainTabs