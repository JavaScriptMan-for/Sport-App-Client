import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { MainNav } from "../../types/routes.types";


const MainScreen: FC = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.main_text}>Начнём тренироваться</Text>
            <View style={styles.choose_block}>
                <ButtonCreateWorkout />
                <ButtonChooseReadyWorkout />
            </View>
            <View>
                <Text style={styles.secondary_text}>
                    Вы можете создать
                    абсолютно кастомную тренировку
                    или выбрать одну из тренировок,
                    созданную нашими экспертами.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default MainScreen

const ButtonCreateWorkout: FC = () => {
    const nav = useNavigation<MainNav>()

    const onClick = () => {
        nav.navigate('create_workout', { screen: 'create_custom_workout' })
    }

    return (
        <TouchableOpacity style={styles.blocks} onPress={onClick}>
            <Text style={styles.blocks_text}>+</Text>
            <Text style={styles.blocks_text}>Создай свою тренировку</Text>
        </TouchableOpacity>
    )
}
const ButtonChooseReadyWorkout: FC = () => {
    const nav = useNavigation<MainNav>()

    const onClick = () => {
        nav.navigate('create_workout', { screen: 'choose_ready_workout' })
    }

    return (
        <TouchableOpacity style={styles.blocks} onPress={onClick}>
            <Text style={styles.blocks_text}>✓</Text>
            <Text style={styles.blocks_text}>Выбери готовую тренировку</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        gap: 25
    },
    main_text: {
        fontSize: 35,
        fontWeight: 600
    },
    choose_block: {
        flexDirection: 'row',
        gap: 20
    },
    blocks: {
        padding: 20,
        borderWidth: 2,
        borderColor: '#82001c',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 180
    },
    blocks_text: {
        textAlign: 'center',
        fontSize: 20
    },
    secondary_text: {
        fontSize: 20,
        fontWeight: 300,
        textAlign: 'center'
    }
})