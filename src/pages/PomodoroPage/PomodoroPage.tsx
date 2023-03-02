import { ButtonsControl } from "../../components/ButtonsControl/ButtonsControl";
import { State } from "../../components/State/State";
import Time from "../../components/Time/Time";
import { Container } from "./PomodoroPage.styles";
import { useState } from "react";
import { Settings } from "../../components/Settings/Settings";

export function PomodoroPage() {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <Container>
      <State />
      <Time />
      <ButtonsControl setOpenSettings={setOpenSettings} />
      <Settings openSettings={openSettings} setOpenSettings={setOpenSettings} />
    </Container>
  )
}