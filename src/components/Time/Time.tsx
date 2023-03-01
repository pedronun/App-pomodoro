import { usePomodoro } from "../../contexts/PomodoroContext";
import { Container, Timing } from "./Time.styles";

export default function Time() {
  const { time, running } = usePomodoro();

  // Transform seconds to milliseconds and then to a date object to get the minutes and seconds
  const pomodoroTime = new Date(time * 1000).toISOString().substr(14, 5);
  const [minutes, seconds] = pomodoroTime.split(":");

  return (
    <Container>
      <Timing style={{fontFamily: !running ? 'Roboto_Flex_Regular' : 'Roboto_Flex_Bold'}}>{minutes}</Timing>
      <Timing style={{fontFamily: !running ? 'Roboto_Flex_Regular' : 'Roboto_Flex_Bold'}}>{seconds}</Timing>
    </Container>
  );
}
