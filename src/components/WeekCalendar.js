import React from "react";

function WeekCalendar() {
  const start = new Date(1970, 0, 1);
  const today = new Date();
  const diff = today - start;

  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return (
    <div>
      {weekday[today.getDay()]}
      &nbsp;
      {Math.ceil(Math.ceil(diff / (60 * 60 * 24 * 1000) + 3) / 7)}
    </div>
  );
}

export default WeekCalendar;
