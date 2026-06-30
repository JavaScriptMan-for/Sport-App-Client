import { FC, useEffect, useState, useCallback } from "react";
import * as SecureStore from 'expo-secure-store';
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { MainNav } from "../types/routes.types";

import fire_img from "../assets/img/fire.png"

const Streak: FC = () => {
  const [streak, setStreak] = useState<number>(0);

  const nav = useNavigation<MainNav>()

  function daysBetween(date1: string, date2: string): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
  }

  async function getStreak() {
    const saved_streak = await SecureStore.getItemAsync('streak');
    const lastDay = await SecureStore.getItemAsync('lastDay');
    const today = new Date().toISOString().slice(0, 10);

    // Первый запуск
    if (!lastDay || !saved_streak) {
      await SecureStore.setItemAsync("lastDay", today);
      await SecureStore.setItemAsync('streak', "1");
      setStreak(1);
      return;
    }

    const diff = daysBetween(lastDay, today);

    // Продолжение streak
    if (diff === 1) {
      const new_streak = Number(saved_streak) + 1;
      await SecureStore.setItemAsync('streak', new_streak.toString());
      await SecureStore.setItemAsync('lastDay', today);
      setStreak(new_streak);
      return;
    }

    // Заход в тот же день — streak не меняется
    if (diff === 0) {
      setStreak(Number(saved_streak));
      return;
    }

    // Пропуск дня — сброс
    await SecureStore.setItemAsync('streak', "1");
    await SecureStore.setItemAsync('lastDay', today);
    setStreak(1);
  }

  useEffect(() => {
    getStreak();
  }, []);

  const onClick = () => {
    nav.navigate("home", { screen: 'streak' })
  }

  const casesDays = useCallback((streak_arg: number): string => {
    const days = String(streak_arg)

    const last_num: string = days.at(-1) || '1'

    const number_last_num = parseInt(last_num)

    if(number_last_num === 1) {
      return 'день'
    } else if(number_last_num > 1 && number_last_num < 5) {
      return 'дня'
    } else {
      return 'дней'
    }
  }, [streak])

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.h_text}>Вы тренируетесь подряд уже</Text>
      <Text style={styles.streak_text}>{streak} {casesDays(streak)}</Text> 
      <Image style={styles.fire} source={fire_img}/>
    </TouchableOpacity>
  );
};

export default Streak;


const styles = StyleSheet.create({
  container: {
    borderRadius: 150,
    borderWidth: 5,
    borderColor: 'rgb(130, 0, 28)',
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  h_text: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center'
  },
  streak_text: {
    fontSize: 18,
    fontWeight: 400
  },
  fire: {
    width: 30,
    height: 30
  }
})