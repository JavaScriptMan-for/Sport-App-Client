import axios from "axios";
import constants from "expo-constants";
import { useState, useEffect } from "react";

const API = constants.expoConfig?.extra?.API_PROTO;

const api = axios.create({
  baseURL: API,
  timeout: 5000,
});

export const useAxiosGet = <T = any>(path: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    setIsError(false);
    setError(null);

    api
      .get(`/${path}`, { signal: controller.signal })
      .then((res) => setData(res.data))
      .catch((err) => {
        if (axios.isCancel(err)) return;

        setIsError(true);
        setError(err.response?.data?.message || "Ошибка запроса");
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [path]);

  return { data, isLoading, isError, error };
};
