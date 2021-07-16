import React, { useState, useEffect } from "react";
import "./Main.css";
import CalculateTime from "../Helper/CalculateTime";
import Controls from "../Controls/Controls";

const Main: React.FC = () => {
  const [timeSec, setTimeSec] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = CalculateTime(timeSec);
    setTimerArray(timeArray);
  }, [timeSec]);

  return (
    <div>
      <div className="time-container">
        <p className="timer-text"> {timerArray[0]} </p>
        <span>:</span>
        <p className="timer-text"> {timerArray[1]} </p>
        <span>:</span>
        <p className="timer-text"> {timerArray[2]} </p>
      </div>
      <Controls setTimeSec={setTimeSec} />
    </div>
  );
};

export default Main;
