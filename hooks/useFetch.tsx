import { useState } from "react";
import constants from "expo-constants";
type Methods = "GET" | "POST" | "PUT" | "DELETE";

const proto = constants.expoConfig?.extra?.API_PROTO;

type Response<T> = { res: T | null; headers: Headers | null, ok: boolean }

interface ReturnedMethods<B, T> {
  send: (body?: B, headers?: any) => Promise<Response<T>>;
  isError: boolean | null;
  isLoading: boolean | null;
  error: string | null;
}

export const useFetch = <B = undefined, T = undefined>(
  method: Methods,
  path: string,
): ReturnedMethods<B, T> => {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [isError, setIsError] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const send = async (body?: B, headers?: object): Promise<Response<T>> => {
    try {
      setIsError(null)
      setError(null);
      setIsLoading(true);

      const req = await fetch(`${proto}/${path}`, {
        method,
        body: method !== "GET" ? JSON.stringify(body) : undefined,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });

      const response_headers = req.headers;
      const res = await req.json();

      if (!req.ok) {
        setIsError(true);
        setError(res.message);
        setIsLoading(false);
        return { res, headers: response_headers, ok: false };
      }

      setIsLoading(false);
      return { res, headers: response_headers, ok: true };
    } catch (err) {
      console.log(err)
      setIsError(true);
      setError("Ошибка сети");
      setIsLoading(false);
      return { ok: false, res: null, headers: null }
    }
  };

  return { send, isError, isLoading, error };
};
