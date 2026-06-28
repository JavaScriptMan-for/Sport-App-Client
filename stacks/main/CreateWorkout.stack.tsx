import { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const CreateWorkoutStack = createNativeStackNavigator()

import MainScreen from "../../screens/create_workout/MainScreen";

const CreateWorkoutStacks: FC = () => {
    return (
    <CreateWorkoutStack.Navigator screenOptions={{ headerShown: false }}>
        <CreateWorkoutStack.Screen name="main_screen" component={MainScreen} />
    </CreateWorkoutStack.Navigator>
    )
}

export default CreateWorkoutStacks