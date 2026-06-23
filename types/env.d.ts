declare module "expo-constants" {
  // Типизация extra — твои переменные окружения
  export interface Extra {
    API_PROTO: string;
    DOMAIN: string
  }

  // expoConfig — старый API (есть в рантайме, нет в типах)
  export interface ExpoConfig {
    extra?: Extra;
  }

  // manifest2 — новый API (официальный для Expo SDK 49+)
  export interface Manifest2 {
    extra?: Extra;
  }

  // Патчим основной интерфейс Constants
  export interface Constants {
    expoConfig?: ExpoConfig;
    manifest2?: Manifest2;
  }

  const constants: Constants;
  export default constants;
}
