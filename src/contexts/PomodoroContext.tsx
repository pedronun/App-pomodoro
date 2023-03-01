import { createContext, useContext, useEffect, useState } from "react";

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
  handleStateChange: () => void;
  time: number;
}

const PomodoroContext = createContext({} as IPomodoroContextType);
const usePomodoro = () => useContext(PomodoroContext);

const PomodoroContextProvider: React.FC<IPomodoroContextProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<PomodoroState>(PomodoroState.FOCUS);
  const [running, setRunning] = useState(false);
  const [stopCount, setStopCount] = useState(0);
  const [autoReset, setAutoReset] = useState(false);
  const [focusTime, setFocusTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [time, setTime] = useState(focusTime * 60);

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

  useEffect(() => {
    if (state === PomodoroState.FOCUS) {
      setTime(focusTime * 60);
    } else if (state === PomodoroState.SHORT_BREAK) {
      setTime(shortBreakTime * 60);
    } else if (state === PomodoroState.LONG_BREAK) {
      setTime(longBreakTime * 60);
    }
  }, [state]);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev !== 0) return prev - 1;

        handleStateChange();

        if (autoReset) return time;

        setRunning(false);
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time, running]);

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
        time,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

export { usePomodoro, PomodoroContext, PomodoroContextProvider };

