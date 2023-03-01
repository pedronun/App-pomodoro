import { ButtonsControl } from "../../components/ButtonsControl/ButtonsControl";
import { State } from "../../components/State/State";
import Time from "../../components/Time/Time";
import { Container } from "./PomodoroPage.styles";

export function PomodoroPage() {
  return (
    <Container>
      <State />
      <Time />
      <ButtonsControl />
    </Container>
  )
}