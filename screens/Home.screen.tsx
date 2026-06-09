import { FC } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NavType } from "../types/routes.types";
import MainLayout from "../layouts/main.layout";
 
const HomeScreen: FC = () => {
    const nav = useNavigation<NavType>()

    return (
        <View>
            <Text>Home screen</Text>
        </View>
    )
}

export default HomeScreen