import { FC } from "react";
import { ActivityIndicator} from "react-native";

interface Props {
    showed: boolean | null
}

const Loader: FC<Props> = ({ showed }) => {
    return (
        <>
            { showed && <ActivityIndicator testID="loader-indicator" color={'rgb(130, 0, 28)'}/> }  
        </>
    )
}

export default Loader