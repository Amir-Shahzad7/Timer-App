import React, { useState } from "react";
import "./Controls.css";

type Props = {
  setTimeSec: Function;
};

const Controls = (props: Props) => {
  const { setTimeSec } = props;
  const [intervalID, setIntervalID] = useState<number>(0);

  const handleStartButton = () => {
    let interval: any = setInterval(() => {
      setTimeSec((previousState: number) => previousState + 1);
    }, 1000);

    setIntervalID(interval);
  };

  const handleStopButton = () => {
    clearInterval(intervalID);
  };

  const handleResetButton = () => {
    clearInterval(intervalID);
    setTimeSec(0);
  };

  return (
    <div className="controls-container">
      <button id="start-button" className="start-button" onClick={handleStartButton}>Start</button>
      <button id="stop-button" className="stop-button" onClick={handleStopButton}>Stop</button>
      <button id="reset-button" className="reset-button" onClick={handleResetButton}>Reset</button>
    </div>
  );
};

export default Controls;
