export function getUnixTimeStamp(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const timeStamps = [];

  for (let i = 0; i < 7; i += 1) {
    const firstDayOfMonth = new Date(year, month - i);
    const unixStart = Math.floor(firstDayOfMonth.getTime() / 1000);
    timeStamps.push(unixStart);
  }

  const start = timeStamps[0];
  const end = timeStamps[timeStamps.length - 1];
  // const unixStart = new Date(firstDayOfReportPeriod * 1000);
  // const unixEnd = new Date(lastDayOfReportPeriod * 1000);
  // console.log('start', unixStart);
  // console.log('end', unixEnd);
  return { start, end };
}
