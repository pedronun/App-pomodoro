import { createContext, useContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components/native";
import {
  redDarkTheme,
  greenDarkTheme,
  blueDarkTheme,
} from "../global/darkTheme";
import {
  redLightTheme,
  blueLightTheme,
  greenLightTheme,
} from "../global/lightTheme";
import { usePomodoro } from "./PomodoroContext";

interface IThemeContextProviderProps {
  children: React.ReactNode;
}

interface IThemeContextType {
  theme: DefaultTheme;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleThemeChange: () => void;
}

const ThemeContext = createContext({} as IThemeContextType);
const useTheme = () => useContext(ThemeContext);

const ThemeContextProvider: React.FC<IThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<DefaultTheme>(redLightTheme);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { state } = usePomodoro();

  useEffect(() => {
    if (darkMode) {
      if (state === "FOCUS") {
        setTheme(redDarkTheme);
      } else if (state === "SHORT_BREAK") {
        setTheme(greenDarkTheme);
      } else {
        setTheme(blueDarkTheme);
      }
    } else {
      if (state === "FOCUS") {
        setTheme(redLightTheme);
      } else if (state === "SHORT_BREAK") {
        setTheme(greenLightTheme);
      } else {
        setTheme(blueLightTheme);
      }
    }
  }, [state, darkMode]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{ handleThemeChange, theme, darkMode, setDarkMode }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeContext, ThemeContextProvider };
