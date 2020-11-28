import React, { useState } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Provider } from "react-redux";

import Navigator from "./routes/drawer";
import store from "./redux/store";

LogBox.ignoreLogs([
  "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.",
]);

const getFonts = () =>
  Font.loadAsync({
    "Kalam-Bold": require("./assets/fonts/Kalam-Bold.ttf"),
    "Kalam-Light": require("./assets/fonts/Kalam-Light.ttf"),
    "Kalam-Regular": require("./assets/fonts/Kalam-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5555",

    // fontFamily: "Kalam-Bold"
  },
});
