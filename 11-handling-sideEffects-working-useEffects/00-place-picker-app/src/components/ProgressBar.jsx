import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remaingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <progress className="timer-progress" value={remaingTime} max={timer} />
  );
}
