export interface IAuthRegisterInput {
    email: string,
    name: string
}
export interface IVerifyRegisterCodeInput {
    user_code: number,
    email: string
}