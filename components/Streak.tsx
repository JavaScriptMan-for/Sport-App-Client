import { FC, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { Text, View } from "react-native";

const Streak: FC = () => {

  const [streak, setStreak] = useState<number>(0);

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

  return (
    <View>
      <Text>{ streak }</Text>
    </View>
  );
};

export default Streak;
