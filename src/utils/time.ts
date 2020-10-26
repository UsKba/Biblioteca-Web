export function isWeekend(day: Date) {
  return day.getDay() === 0 || day.getDay() === 6;
}

export const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
