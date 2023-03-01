import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { PomodoroContextProvider } from "./src/contexts/PomodoroContext";
import { ThemeContextProvider } from "./src/contexts/ThemeProvider";
import { PomodoroPage } from "./src/pages/PomodoroPage/PomodoroPage";

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
        <PomodoroPage />
        <StatusBar style="auto" />
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
