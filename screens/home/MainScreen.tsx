import { FC, useRef, useCallback } from "react";
import { ScrollView, Text, StyleSheet, Image, Animated } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { useAppSelector } from "../../store/store";

import { SafeAreaView } from "react-native-safe-area-context";

import sport_man from "../../assets/img/sport_man.jpg"

import Streak from "../../components/Streak";

const MainScreen: FC = () => {
    const auth_data = useAppSelector(state => state.app.auth_data)

    const animate_position = useRef(new Animated.Value(-100)).current

    useFocusEffect(
    useCallback(() => {
        animate_position.setValue(-100);

        Animated.timing(animate_position, {
            toValue: 0,
            duration: 700,
            useNativeDriver: false
        }).start();
    }, [])
);

    return (
        <SafeAreaView>
            <ScrollView>
            <Image source={sport_man}/>
            <Animated.View
                style={{marginLeft: animate_position}}
            >
                <Text style={styles.main_text}>Добро пожаловать в Sport App</Text>
                <Text>Привет {auth_data?.name}</Text>
            </Animated.View>
            <Streak /> 
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main_text: {
        fontSize: 30
    }
})

export default MainScreen