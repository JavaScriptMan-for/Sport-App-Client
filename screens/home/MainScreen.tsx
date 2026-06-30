import { FC, useRef, useCallback } from "react";
import { ScrollView, Text, StyleSheet, Image, Animated, View } from "react-native";
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
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.main_img} source={sport_man}/>
            <Animated.View
                style={{opacity: animate_opacity}}
            >
                <Text style={styles.main_text}>Добро пожаловать, {auth_data?.name || 'уважаемый клиент'}!</Text>
            </Animated.View>
            <Streak /> 
            <View style={styles.info}>
                <Text style={styles.info_text}>
                    В Sport App вы можете создать абсолютно кастомную тренировку. Помимо этого
                    вы можете выбрать тренировки, созданные нашими экспертами.
                </Text>
                <Text style={styles.info_text}>В этом приложении вы встретите более 100 упражнений.</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    main_text: {
        fontSize: 30,
        fontWeight: 600,
        marginBottom: 20,
        textAlign: 'center'
    },
    main_img: {
        width: '100%',
        height: 780,
    },
    info: {
        marginTop: 30
    },
    info_text: {
        fontSize: 18,
        fontWeight: 400,
        textAlign: 'center'
    }
})

export default MainScreen