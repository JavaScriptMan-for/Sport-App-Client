import { FC, ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
    children: ReactNode,
    isSuccess: boolean,
    isLoading: boolean | null
}

const ServerMessage: FC<Props> = ({ children, isSuccess, isLoading }) => {
    return (
        <View>
            {!isLoading && <Text style={ isSuccess ? styles.success_message : styles.unsuccess_message }>{children}</Text>}    
        </View>
    )
}

const styles = StyleSheet.create({
    success_message: {
        fontSize: 20,
        fontWeight: 600,
        color: "rgb(119, 187, 85)"
    },
    unsuccess_message: {
        fontSize: 20,
        fontWeight: 600,
        color: "rgb(130, 0, 28)"
    }
})

export default ServerMessage