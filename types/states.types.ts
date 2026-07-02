import { IAuthData } from "./auth_data.type"
import { Muscles, Place, ImageKey, Options } from "../objects/exercise"

type MaybeNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

type Exercise = {
    name: string,
    id: number,
    image: ImageKey,
    place: Place,
    groupMuscles: Muscles[],
    difficulty: number,
    effectiveness: Options
}

export interface AuthStateType {
    isAuth: boolean | null,
    email: string | null,
    image_base64: string | null
}
export interface AppStateType {
    finalNumber: number | null,
    auth_data: IAuthData | null
}
export interface SearchStateType {
    search_string: string,
    desired_muscles: Muscles[] | null,
    desired_place: Place | null,
    desired_difficulty_start: MaybeNumbers | null,
    desired_difficulty_end: MaybeNumbers | null,

    desired_onMass_start: MaybeNumbers | null,
    desired_onMass_end: MaybeNumbers | null,
    desired_endurance_start: MaybeNumbers | null,
    desired_endurance_end: MaybeNumbers | null,

    filtered_workouts: Exercise[]
}