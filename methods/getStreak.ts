import * as SecureStore from 'expo-secure-store';

function daysBetween(date1: string, date2: string): number {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function getStreak() {

    const saved_streak = SecureStore.getItem('streak')
    const lastDay = SecureStore.getItem('lastDay')
    const toDay = new Date().toISOString().slice(0, 10)
    
    if(!lastDay || !saved_streak) {
        SecureStore.setItem("last_day", toDay)
        SecureStore.setItem('streak', "1")

    } else {
        const diff = daysBetween(lastDay, toDay)

    }
}

console.log(new Date().toISOString().slice(0, 10))