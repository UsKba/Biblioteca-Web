const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

// -1 = Sábado, 0 = Domingo, 1 = Segunda, 2 = Terça...

export default function getFirstDayOfWeek(): Date {
  const today = new Date();
  const todayDayOfWeek = today.getDay();

  // if (todayDayOfWeek === 6) {
  //   todayDayOfWeek = -1;
  // }

  const daysToSubtract = todayDayOfWeek;

  const firstDayOfWeek = new Date(today.getTime() - daysToSubtract * DAY_IN_MILLISECONDS);

  return firstDayOfWeek;
}
