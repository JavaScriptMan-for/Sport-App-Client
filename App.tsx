import { StatusBar, View } from "react-native";
import store from "./store/store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation";




export default function App() {
  return (
  <Provider store={store}>
      <View style={{ height: StatusBar.currentHeight, backgroundColor: "black", opacity: 0.8 }} />

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
  </Provider>
  );
}

