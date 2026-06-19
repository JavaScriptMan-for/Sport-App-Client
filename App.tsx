
import { QueryClientProvider } from "@tanstack/react-query";
import store from "./store/store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation";




export default function App() {
  return (
  <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
  </Provider>
  );
}

