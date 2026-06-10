import { FC } from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { RegisterNav, NavType } from "../../types/routes.types";

const path_to_favicon = '../../assets/icons/favicon.png'

const HelloScreen: FC = () => {
    const nav = useNavigation<RegisterNav>()
    const nav_2 = useNavigation<NavType<'login'>>()

    const onClick = () => {
        nav.navigate('form')
    }

    const onReText = () => {
        nav_2.navigate('register', { screen:'hello' })
    }

    return (
        <SafeAreaView style={styles.hello_div}>
            <Image style={styles.logo} source={require(path_to_favicon)} />
            <Text style={styles.main_text}>С возвращением в Sport App!</Text>
            <Text style={styles.secondary_text}>Чтобы пользоваться нашим приложением, войдите в аккаунт.</Text>
            <TouchableOpacity style={styles.button} onPress={onClick}>
                <Text style={styles.button_text}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onReText}>
                <Text style={styles.re_text}>Нет аккаунта? Зарегистрироваться.</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    hello_div: {
        padding: 5,
        height: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 100
    },
    main_text: {
        fontSize: 20,
    },
    secondary_text: {
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 10
    },
    button: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
        borderColor: 'black',
        backgroundColor: 'rgb(130, 0, 28)',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 5
    },
    button_text: {
        color: 'white',
        fontSize: 20
    },
    re_text: {
        fontSize: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
})

export default HelloScreen