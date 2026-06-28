import { IAuthData } from "./auth_data.type"

export interface AuthStateType {
    isAuth: boolean | null,
    email: string | null,
    image_base64: string | null
}
export interface AppStateType {
    finalNumber: number | null,
    auth_data: IAuthData | null
}