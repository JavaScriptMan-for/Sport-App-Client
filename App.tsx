import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types/routes.types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from './screens/Home.screen'
import DetailsScreen from './screens/Details.screen'
import SettingsScreen from './screens/Settings.screen'

import HomeIcon from "./assets/icons/home";


const Tab = createBottomTabNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true, 
        }}
      >
        <Tab.Screen
         name="home"
         component={HomeScreen}
         options={{
            tabBarIcon: ({ focused }) => (
              <HomeIcon focused={focused}/>
            ),
          }}
          />
        <Tab.Screen name="details" component={DetailsScreen} />
        <Tab.Screen name="settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

