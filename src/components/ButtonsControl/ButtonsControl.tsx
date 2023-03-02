import { DotsThree, FastForward, Play, Pause } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { usePomodoro } from "../../contexts/PomodoroContext";
import {
  Container,
  PrimaryButton,
  SecondaryButton,
} from "./ButtonsControl.styles";

interface ButtonsControlProps {
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ButtonsControl({ setOpenSettings }: ButtonsControlProps) {
  const { setRunning, handleStateChange, running } = usePomodoro();
  const { colors } = useTheme();

  return (
    <Container>
      <SecondaryButton onPress={() => setOpenSettings(prev => !prev)}>
        <DotsThree size={45} color={colors.primary} weight="bold" />
      </SecondaryButton>
      <PrimaryButton onPress={() => setRunning((prev) => !prev)}>
        {!running ? (
          <Play size={32} color={colors.primary} weight="fill" />
        ) : (
          <Pause size={32} color={colors.primary} weight="fill" />
        )}
      </PrimaryButton>
      <SecondaryButton onPress={() => handleStateChange()}>
        <FastForward size={32} color={colors.primary} weight="fill" />
      </SecondaryButton>
    </Container>
  );
}
