import { FC, useRef, useCallback } from "react";
import { ScrollView, Text, StyleSheet, Image, Animated } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { useAppSelector } from "../../store/store";

import { SafeAreaView } from "react-native-safe-area-context";

import sport_man from "../../assets/img/sport_man.jpeg"

import Streak from "../../components/Streak";

const MainScreen: FC = () => {
    const auth_data = useAppSelector(state => state.app.auth_data)

    const animate_opacity = useRef(new Animated.Value(0)).current

    useFocusEffect(
    useCallback(() => {
        animate_opacity.setValue(0);

        Animated.timing(animate_opacity, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true
        }).start();
    }, [])
);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image style={styles.main_img} source={sport_man}/>
            <Animated.View
                style={{opacity: animate_opacity}}
            >
                <Text style={styles.main_text}>Добро пожаловать в Sport App</Text>
            </Animated.View>
            <Streak /> 
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    main_text: {
        fontSize: 30,
        fontWeight: 600,
    },
    main_img: {
        width: '100%',
        height: 780,
    }
})

export default MainScreen