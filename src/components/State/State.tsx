import { usePomodoro } from "../../contexts/PomodoroContext";
import { formatState } from "../../helpers/formatState";
import { Container, StateTitle } from "./State.styles";
import { Brain, Coffee } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

export function State() {
  const { state } = usePomodoro();
  const { colors } = useTheme();

  return (
    <Container>
      {state === "FOCUS" ? (
        <Brain color={colors.primary} size={32} weight="fill" />
      ) : (
        <Coffee color={colors.primary} size={32} />
      )}
      <StateTitle>{formatState(state)}</StateTitle>
    </Container>
  );
}
