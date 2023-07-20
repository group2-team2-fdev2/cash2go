export function getMonthsBackwards(numMonths) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const months = [];

  for (let i = 0; i < numMonths; i++) {
    const prevMonth = (currentMonth - i + 12) % 12;
    months.push(monthNames[prevMonth]);
  }

  return months;
}
