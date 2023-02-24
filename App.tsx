import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { PomodoroContextProvider } from "./src/contexts/PomodoroContext";
import { ThemeContextProvider } from "./src/contexts/ThemeProvider";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_Flex_Regular: require("./src/assets/Roboto-Flex-Regular.ttf"),
    Roboto_Flex_Medium: require("./src/assets/Roboto-Flex-Medium.ttf"),
    Roboto_Flex_Bold: require("./src/assets/Roboto-Flex-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PomodoroContextProvider>
      <ThemeContextProvider>
        <View style={[styles.container]}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </ThemeContextProvider>
    </PomodoroContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
