import { FC, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LoginNav } from "../../types/routes.types";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../register/AuthDataScreen";
import { SafeAreaView } from "react-native-safe-area-context";

import ServerMessage from "../../components/ServerMessage";
import { useFetch } from "../../hooks/useFetch";
import { useAppDispatch } from "../../store/store";
import { setStateEmail } from "../../store/auth.reducer";

import { ILoginInput } from "../../types/request_input.types";
import { IOnlyMessage } from "../../types/request_output.types";


const AuthDataScreen: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [serverMessage, setServerMessage] = useState<string>('')
    
    const login_fetch = useFetch<ILoginInput, IOnlyMessage>('POST', 'login')
    const dispatch = useAppDispatch()

    const nav = useNavigation<LoginNav>()

    const next = async () => {

        const result = await login_fetch.send({ email })
        console.log(result)

        if(!result.res) {
            setServerMessage("Ошибка")
            return
        }

        if(!result.ok) {
            setServerMessage(result.res.message)
            return
        }

        
        setServerMessage("Осталось немного...")
        dispatch(setStateEmail(email))
        nav.navigate('code')
    }

    const back = () => {
        nav.goBack()
    }

    return (
        <SafeAreaView style={styles.form}>
            <Text style={styles.main_text}>Авторизация</Text>
            <View style={styles.labels}>
                <Text style={styles.text_labels}>Email:</Text>
                <TextInput
                 style={styles.inputs}
                 placeholder="example@gmail.com"
                 value={email}
                 onChangeText={(text) => setEmail(text)}
                 />
            </View>
            <TouchableOpacity style={styles.button} onPress={next}>
                <Text style={styles.button_text}>Далее</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_back} onPress={back}>
                <Text style={styles.button_back_text}>Назад</Text>
            </TouchableOpacity>
            <ServerMessage isLoading={login_fetch.isLoading} isSuccess={!login_fetch.isError}>{ serverMessage }</ServerMessage>
        </SafeAreaView>
    )
}

export default AuthDataScreen