export type IOnlyMessage = { message: string }

export interface ICreateUserOutput {
    message: string,
    access_token: string
}

export interface ILoginOutput {
    access_token: string,
    message: string
}