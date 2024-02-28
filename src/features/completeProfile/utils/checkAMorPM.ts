export function checkAMorPM(time: Date) {
  const date = new Date(time);
  const hour = date.getHours();

  if (hour >= 12) {
    return "PM";
  } else {
    return "AM";
  }
}
