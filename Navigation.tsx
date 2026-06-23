import { FC, useEffect, useState } from "react";
import { useAppSelector } from "./store/store";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterStacks from "./stacks/register/RegisterStacks"
import MainTabs from "./tabs/Main.tabs";
import LoginStacks from "./stacks/login/LoginStacks";
import LoadingScreen from "./screens/LoadingScreen";


const RootStack = createNativeStackNavigator()
import * as SecureStore from 'expo-secure-store';

import { useFetch } from "./hooks/useFetch";
import { useAppDispatch } from "./store/store";
import { setIsAuth } from "./store/auth.reducer";
import { IOnlyMessage } from "./types/request_output.types";


const Navigation: FC = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const dispatch = useAppDispatch()

    const auth_fetch = useFetch<undefined, IOnlyMessage>('GET', 'auth')
    const refresh_fetch = useFetch<{ refresh_token: string }, IOnlyMessage>('POST', 'refresh')

    const [isLoading, setIsLoading] = useState<boolean | null>(null)

    const checkAuth = async () => {
      const access_token = await SecureStore.getItemAsync("access_token")
      const refresh_token = await SecureStore.getItemAsync('refresh_token')


      if(!access_token) {
        console.log("Access token отсутствует")
      }

       const r = await auth_fetch.send(undefined, {
        "Authorization": `Bearer ${access_token}`
      })

      
      if(r.ok) {
        console.log(r.res?.message)
        dispatch(setIsAuth(true))
        return
      }

      if(!r.ok) {
        console.log("Вы не авторизованы")
      } 
      
      //Если access token отсутствует
      if(!refresh_token) {
        dispatch(setIsAuth(false))
        return
      }
      const req = await refresh_fetch.send({ refresh_token })

      if(!req.ok) {
        console.log('Refresh token отсутствует')
        dispatch(setIsAuth(false))
        return
      } 

      if(!req?.headers){
        console.log("Нет cookie")
        dispatch(setIsAuth(false))
        return
      }
      const cookies = req?.headers.get('set-cookie')

      const new_access_token = cookies?.split(";")[0].split("=")[1]

      if(!new_access_token) {
        dispatch(setIsAuth(false))
        return
      }

      await SecureStore.setItemAsync('access_token', new_access_token)
      
      const r_2 = await auth_fetch.send(undefined, {
        "Authorization": `Bearer ${new_access_token}`
      })

      if(!r_2.ok) {
        dispatch(setIsAuth(false))
        return
      }
      if(r_2.ok) {
        console.log("Успешная авторизация")
        dispatch(setIsAuth(true))
      }
     
    }

    useEffect(() => {
      checkAuth()
    }, [])

    useEffect(() => {
      setIsLoading(auth_fetch.isLoading)
    },[auth_fetch.isLoading, isLoading])

    return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        { isLoading || isAuth === null ?
        <RootStack.Screen name="loading" component={LoadingScreen} />
        :
        <>
        {!isAuth ? (
          <>
            <RootStack.Screen name="register" component={RegisterStacks} />
            <RootStack.Screen name="login" component={LoginStacks} />
          </>
        ) : (
          <RootStack.Screen name="main" component={MainTabs} />
        )}
        </>
        
      }
      </RootStack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation