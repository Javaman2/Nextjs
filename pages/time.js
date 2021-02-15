import { useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div>
      <h3>Time</h3>
      <p>{time}</p>
    </div>
  );
}
