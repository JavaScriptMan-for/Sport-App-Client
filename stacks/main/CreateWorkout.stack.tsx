import { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const CreateWorkoutStack = createNativeStackNavigator()

import MainScreen from "../../screens/create_workout/MainScreen";
import CreateCustomWorkout from "../../screens/create_workout/CreateCustomWorkout";
import ChooseReadyWorkout from "../../screens/create_workout/ChooseReadyWorkout";

const CreateWorkoutStacks: FC = () => {
    return (
    <CreateWorkoutStack.Navigator screenOptions={{ headerShown: false }}>
        <CreateWorkoutStack.Screen name="main" component={MainScreen} />
        <CreateWorkoutStack.Screen name="create_custom_workout" component={CreateCustomWorkout} />
        <CreateWorkoutStack.Screen name="choose_ready_workout" component={ChooseReadyWorkout} />
    </CreateWorkoutStack.Navigator>
    )
}

export default CreateWorkoutStacks