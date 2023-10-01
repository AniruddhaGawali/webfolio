export function getDate(date: Date) {
  return date.getDate();
}

export function getMonth(date: Date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[date.getMonth()];
}

export function getShortMonth(date: Date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  return months[date.getMonth()];
}

export function getDay(date: Date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return days[date.getDay()];
}

export function getOrdinal(date: Date) {
  const day = date.getDate();
  const j = day % 10;
  const k = day % 100;

  if (j === 1 && k !== 11) {
    return day + 'st';
  }

  if (j === 2 && k !== 12) {
    return day + 'nd';
  }

  if (j === 3 && k !== 13) {
    return day + 'rd';
  }

  return day + 'th';
}

export function getYear(date: Date) {
  return date.getFullYear();
}

export function getFullDate(date: Date) {
  return `${getDay(date)}, ${getMonth(date)} ${getOrdinal(date)}, ${getYear(
    date
  )}`;
}

export function getShortDate(date: Date) {
  return `${getMonth(date)} ${getOrdinal(date)}, ${getYear(date)}`;
}

export function getLongDate(date: Date) {
  return `${getDay(date)}, ${getMonth(date)} ${getOrdinal(date)}, ${getYear(
    date
  )}`;
}

export function getShortDateWithTime(date: Date) {
  return `${getMonth(date)} ${getOrdinal(date)}, ${getYear(date)} at ${date
    .toLocaleTimeString()
    .replace(/:\d+ /, ' ')}`;
}
