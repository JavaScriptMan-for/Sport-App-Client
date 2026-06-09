import { FC, ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
    children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
    return (
        <View style={styles.main}>
            <Text>1234</Text>
            { children }
        </View>
    )
}

export default MainLayout

const styles = StyleSheet.create({
    main: {
        marginTop: 80
    }
})