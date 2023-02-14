function epochweek() {
  const epoch = new Date(0);
  const today = new Date();

  const diff = today - epoch;

  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let ew = weekday[today.getUTCDay()];
  ew += " ";
  ew += Math.ceil(Math.ceil(diff / (60 * 60 * 24 * 1000) + 3) / 7);

  return ew;
}

export default epochweek;
