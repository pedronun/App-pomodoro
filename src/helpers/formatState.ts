export function formatState(state: string) {
  if (state === "FOCUS") {
    return "Focus";
  } else if (state === "SHORT_BREAK") {
    return "Short Break";
  } else {
    return "Long Break";
  }
}