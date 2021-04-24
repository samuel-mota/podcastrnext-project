export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / (60 * 60));
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");
  // to add "0" when time has only one character, "1" will be "01"
  return timeString;
}
