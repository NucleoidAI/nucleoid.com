import epochweek from "../libs/epochweek";
import { useEffect, useState } from "react";

function Calendar() {
  document.body.style.background = "#313a40";

  const [display, setDisplay] = useState(
    <>
      {epochweek()}
      <br />
      {getUTCTime()}
    </>
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Xsx");
      setDisplay(
        <>
          {epochweek()}
          <br />
          {getUTCTime()}
        </>
      );
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "white",
        fontSize: "48px",
      }}
    >
      {display}
    </div>
  );
}

function getUTCTime() {
  const today = new Date();
  let time = today.getUTCHours();
  time += ":";
  time += String(today.getUTCMinutes()).padStart(2, "0");
  return time;
}
export default Calendar;
