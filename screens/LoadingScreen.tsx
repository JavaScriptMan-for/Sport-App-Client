import { FC } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoadingScreen: FC = () => {
    return (
        <SafeAreaView>
            <Text>Загрузка авторизации...</Text>
        </SafeAreaView>
    )
}

export default LoadingScreen