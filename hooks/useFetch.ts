import { useState } from "react";
import constants from "expo-constants";
type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE'

const proto = constants.expoConfig?.extra?.API_PROTO

interface ReturnedMethods<B, T> {
    send: (body?: B, headers?: any) => Promise<T | undefined>,
    isError: boolean,
    isLoading: boolean,
    error: string | null
}

export const useFetch = <B, T>(method: Methods, path: string): ReturnedMethods<B, T> => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const send = async (body?: B, headers?: any): Promise<T | undefined> => {
        try {
            setIsError(false)
            setError(null)
            setIsLoading(true)

            const req = await fetch(`${proto}/${path}`, {
                method,
                body: method !== "GET" ? JSON.stringify(body) : undefined,
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                }
            })

            const res = await req.json()

            if (!req.ok) {
                setIsError(true)
                setError(res.message)
                setIsLoading(false)
                return
            }

            setIsLoading(false)
            return res
        } catch (err) {
            setIsError(true)
            setError("Ошибка сети")
            setIsLoading(false)
        }
    }

    return { send, isError, isLoading, error }
}

