import { useState, useRef } from "react";
import axios, { AxiosRequestHeaders, Method } from "axios";
import constants from "expo-constants";

const API = constants.expoConfig?.extra?.API_PROTO;

export const api = axios.create({
  baseURL: API,
  timeout: 5000,
});

type HttpMethod = "post" | "put" | "delete";

export const useAxiosRequest = <T = any, B = any>(path: string, method: HttpMethod) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const send = async (
    body?: B,
    headers?: AxiosRequestHeaders
  ): Promise<T | null> => {
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const res = await api.request<T>({
        url: `/${path}`,
        method: method as Method,
        data: body,
        headers,
        signal: controllerRef.current.signal,
      });

      setData(res.data);
      return res.data;
    } catch (err: any) {
      if (axios.isCancel(err)) return null;

      setIsError(true);
      setError(err.response?.data?.message || "Ошибка запроса");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const cancel = () => {
    controllerRef.current?.abort();
  };

  return { send, cancel, data, isLoading, isError, error };
};
