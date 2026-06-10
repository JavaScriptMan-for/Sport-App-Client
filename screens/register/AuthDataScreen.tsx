import { FC, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { RegisterNav } from "../../types/routes.types";


const AuthDataScreen: FC = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>()

    const nav = useNavigation<RegisterNav>()

    const next = () => {
        nav.navigate('code')
    }

    const back = () => {
        nav.goBack()
    }

    return (
        <SafeAreaView>
            <View style={styles.form}>
                <Text style={styles.main_text}>Введите данные для авторизации.</Text>     
                <View style={styles.labels}>
                    <Text style={styles.text_labels}>Имя:</Text>
                    <TextInput value={name} onChangeText={setName} placeholder="Максим" style={styles.inputs} />
                </View>
                <View style={styles.labels}>
                    <Text style={styles.text_labels}>Email:</Text>
                    <TextInput value={email} onChangeText={setEmail} placeholder="example@gmail.com" style={styles.inputs} />
                </View> 
                <TouchableOpacity style={styles.button} onPress={next}>
                    <Text style={styles.button_text}>Далее</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_no_back} onPress={back}>
                    <Text style={styles.button_no_back_text}>Назад</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    form: {
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 10
    },
    main_text: {
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'center'
    },
    labels: {
        justifyContent: 'center',
        gap: 5,
        width: '100%'

    },
    text_labels: {
        fontSize: 18,
        fontWeight: 500,
        marginLeft: 5,
    },
    inputs: {
        borderColor: '#82001c',
        borderWidth: 1,
        borderRadius: 15,
        width: '100%',
        height: 65,
        fontSize: 20,
        padding: 10
    },
      button: {
        width: '100%',
        padding: 20,
        borderColor: 'black',
        backgroundColor: 'rgb(130, 0, 28)',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 5,
        alignItems: 'center'
    },
    button_text: {
        color: 'white',
        fontSize: 20,
    },
    button_no_back: {
        width: '100%',
        padding: 20,
        borderColor: 'black',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 5,
        alignItems: 'center' 
    },
    button_no_back_text: {
        color: 'black',
        fontSize: 20
    }
})

export default AuthDataScreen