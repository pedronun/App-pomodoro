import {
  CloseButton,
  Container,
  Input,
  SettingsItem,
  SettingsItems,
  SettingsItemTitle,
  Title,
} from "./Settings.styles";
import { X } from "phosphor-react-native";
import {
  Switch,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useTheme } from "styled-components/native";
import { useTheme as useCustomTheme } from "../../contexts/ThemeProvider";
import { usePomodoro } from "../../contexts/PomodoroContext";

interface SettingsProps {
  openSettings: boolean;
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Settings({ openSettings, setOpenSettings }: SettingsProps) {
  const { autoReset, setAutoReset, focusTime, setFocusTime, shortBreakTime, setShortBreakTime, longBreakTime, setLongBreakTime } = usePomodoro();
  const { darkMode, setDarkMode } = useCustomTheme();
  const { colors } = useTheme();

  return openSettings ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Title>Settings</Title>
        <CloseButton onPress={() => setOpenSettings(false)}>
          <X size={18} color={colors.primary} weight="bold" />
        </CloseButton>
        <SettingsItems>
          <SettingsItem>
            <SettingsItemTitle>Dark Mode</SettingsItemTitle>
            <Switch
              thumbColor={colors.background}
              trackColor={{ false: "#ffffff3d", true: "#ffffff3d" }}
              ios_backgroundColor={darkMode ? "#ffffff3d" : "#0000003d"}
              value={darkMode}
              onValueChange={() => setDarkMode((prev) => !prev)}
            />
          </SettingsItem>
          <SettingsItem>
            <SettingsItemTitle>Focus length</SettingsItemTitle>
            <Input
              keyboardType="number-pad"
              defaultValue="25"
              placeholder="25"
              placeholderTextColor={colors.primary}
              value={focusTime.toString()}
              onChangeText={(text) => setFocusTime(Number(text))}
            />
          </SettingsItem>
          <SettingsItem>
            <SettingsItemTitle>Short break length</SettingsItemTitle>
            <Input
              keyboardType="number-pad"
              defaultValue="5"
              placeholder="5"
              placeholderTextColor={colors.primary}
              value={shortBreakTime.toString()}
              onChangeText={(text) => setShortBreakTime(Number(text))}
            />
          </SettingsItem>
          <SettingsItem>
            <SettingsItemTitle>Long break length</SettingsItemTitle>
            <Input
              keyboardType="number-pad"
              defaultValue="15"
              placeholder="15"
              placeholderTextColor={colors.primary}
              value={longBreakTime.toString()}
              onChangeText={(text) => setLongBreakTime(Number(text))}
            />
          </SettingsItem>
          <SettingsItem>
            <SettingsItemTitle>Auto resume timer</SettingsItemTitle>
            <Switch
              thumbColor={colors.background}
              trackColor={{ false: "#ffffff3d", true: "#ffffff3d" }}
              ios_backgroundColor={darkMode ? "#ffffff3d" : "#0000003d"}
              value={autoReset}
              onValueChange={() => setAutoReset((prev) => !prev)}
            />
          </SettingsItem>
        </SettingsItems>
      </Container>
    </TouchableWithoutFeedback>
  ) : null;
}
