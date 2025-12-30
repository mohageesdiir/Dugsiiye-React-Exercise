import { useState, useEffect } from "react";

export default function StopTime() {
  const [time, setTime] = useState(0);
  const [choose, setChoose] = useState("");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timeId;

    if (running && time > 0) {
      timeId = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            setRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timeId);
  }, [running, time]);

  const handleStart = () => {
    if (!choose || choose <= 0) return;
    const seconds = parseInt(choose);
    setTime(seconds);
    setRunning(true);
  };
  const handleStop = () => {
    setRunning(false);
  };
  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };
  const handleClear = () => {
    setRunning(false);
    setTime(0);
    setChoose("");
  };

  return (
    <div className="timer-container">
      <h1>Exercise - 8 </h1>
      <div className="input-section">
        <span>Choose the seconds</span>
        <input
          min={1}
          className="time-input"
          type="number"
          value={choose}
          onChange={(e) => setChoose(e.target.value)}
        />
      </div>
      <h1 className="stopwatch-display">
        Stop Watch <span className="time-value">{time}</span> Seconds
      </h1>

      <div className="controls">
        <button
          className="btn"
          onClick={handleStart}
          disabled={running || !choose || choose <= 0}
        >
          Start
        </button>
        <button className="btn" onClick={handleStop} disabled={!running}>
          Stop
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
        <button className="btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}
