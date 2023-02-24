import { createContext, useContext, useState } from "react";

const STOPS_ULTIL_LONG_BREAK = 5;

interface IPomodoroContextProviderProps {
  children: React.ReactNode;
}

export enum PomodoroState {
  FOCUS = "FOCUS",
  SHORT_BREAK = "SHORT_BREAK",
  LONG_BREAK = "LONG_BREAK",
}

interface IPomodoroContextType {
  state: PomodoroState;
  running: boolean;
  setRunning: React.Dispatch<React.SetStateAction<boolean>>;
  focusTime: number;
  setFocusTime: React.Dispatch<React.SetStateAction<number>>;
  shortBreakTime: number;
  setShortBreakTime: React.Dispatch<React.SetStateAction<number>>;
  longBreakTime: number;
  setLongBreakTime: React.Dispatch<React.SetStateAction<number>>;
  autoReset: boolean;
  setAutoReset: React.Dispatch<React.SetStateAction<boolean>>;
  handleStateChange: (state: PomodoroState) => void;
}

const PomodoroContext = createContext({} as IPomodoroContextType);
const usePomodoro = () => useContext(PomodoroContext);

const PomodoroContextProvider: React.FC<IPomodoroContextProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<PomodoroState>(PomodoroState.FOCUS);
  const [running, setRunning] = useState<boolean>(false);
  const [stopCount, setStopCount] = useState<number>(0);
  const [autoReset, setAutoReset] = useState<boolean>(false);
  const [focusTime, setFocusTime] = useState<number>(25);
  const [shortBreakTime, setShortBreakTime] = useState<number>(5);
  const [longBreakTime, setLongBreakTime] = useState<number>(15);

  const handleStateChange = () => {
    if (stopCount === STOPS_ULTIL_LONG_BREAK) {
      setState(PomodoroState.LONG_BREAK);
      setRunning(false);
      setStopCount(0);
    } else {
      setState((prev) =>
        prev === PomodoroState.FOCUS
          ? PomodoroState.SHORT_BREAK
          : PomodoroState.FOCUS
      );
      setRunning(false);
      setStopCount(stopCount + 1);
    }
  };

  return (
    <PomodoroContext.Provider
      value={{
        state,
        handleStateChange,
        running,
        setRunning,
        autoReset,
        setAutoReset,
        focusTime,
        longBreakTime,
        setFocusTime,
        setLongBreakTime,
        setShortBreakTime,
        shortBreakTime,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

export { usePomodoro, PomodoroContext, PomodoroContextProvider };
