import { FC, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { useFetch } from "../../hooks/useFetch";
import { setFinalNumber } from "../../store/app.reducer";
import { useNavigation } from "@react-navigation/native";

import { Text, StyleSheet, View } from "react-native";
import VerifyCases from "../../components/VerifyCases";
import ServerMessage from "../../components/ServerMessage";

import { RegisterNav } from "../../types/routes.types";
import { IOnlyMessage } from "../../types/request_output.types";
import { IVerifyRegisterCodeInput } from "../../types/request_input.types";

const CodeScreen: FC = () => {
    const dispatch = useAppDispatch()
    const nav = useNavigation<RegisterNav>()
    const state_email = useAppSelector(state => state.auth.email)
    const finallyCode = useAppSelector(state => state.app.finalNumber)

    const [validateErrors, setValidateErrors] = useState<boolean>(false)
    const [serverMessage, setServerMessage] = useState<string>('')

    const axios = useFetch<IVerifyRegisterCodeInput, IOnlyMessage>('POST', 'verify-register')

    const onFinallyCode = async () => {
    
    setValidateErrors(false)
    dispatch(setFinalNumber(null))
    if (!finallyCode || !state_email) {
        setValidateErrors(true)
        setServerMessage('Вы не ввели все данные')
        return
    }

    const data = await axios.send(
        { user_code: Number(finallyCode), email: state_email },
        { "Content-Type": "application/json" }
    )


    // Если сервер вернул ошибку
    if (axios.isError) {
        setServerMessage(axios.error || 'Ошибка')
        return
    }

    // Успех
    if (data) {
        setServerMessage(data.message)
        nav.navigate('create_user')
    }
}

    useEffect(() => {
    if (finallyCode && String(finallyCode).length === 5) {
        onFinallyCode()
    }
}, [finallyCode])


    const hashed_email = (email: string) => {
        const domain_mail = email.split('@')[0]
        const host_mail = email.split('@')[1]

        const half_domain_mail_index = Math.floor(domain_mail.length / 2)

        return `${domain_mail.slice(0, -half_domain_mail_index)}****@${host_mail || 'not.com'}`
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.main_text}>Введите код подтверждения</Text>
            <View style={styles.text_container}>
                <Text style={styles.sub_text}>Код пришёл на почту</Text>
                <Text style={styles.sub_text}>{hashed_email(state_email || 'unknown')}</Text>
            </View>
           <VerifyCases /> 
           <ServerMessage isLoading={axios.isLoading} isSuccess={!axios.isError && !validateErrors}>{ serverMessage }</ServerMessage>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    },
    text_container: {
      flexDirection: 'row',
      gap: 3,
      marginBottom: 8
    },
    main_text: {
        fontSize: 30,
        fontWeight: 600,
    },
    sub_text: {
        fontSize: 18,
        marginBottom: 5
    }
})

export default CodeScreen