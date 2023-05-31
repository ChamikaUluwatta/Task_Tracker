import React, { useState, useEffect } from "react";
import TimerButton from "./TimerButton";
import TimerCloser from "./TimerCloser";

const Timer = (props) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [remainingTime, setremainingTime] = useState(props.duration * 60 * 60);
  const [isPaused, setIsPaused] = useState(false);
  const estimatedDuration = props.duration * 60 * 60;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setremainingTime(remainingTime - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  const getTime = () => {
    setHours(Math.floor(remainingTime / (60 * 60)));
    setMinutes(Math.floor((remainingTime / 60) % 60));
    setSeconds(Math.floor(remainingTime % 60));
  };

  const resetTimerHandler = () => {
    setremainingTime(estimatedDuration);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  });

  const pauseTimeHandler = () => {
    setIsPaused(!isPaused);
  };

  const onCloseTimerHandler = () => {
    props.onCloseTimer();
    setIsPaused(false);
  }


  return (
    <div className="flex flex-col h-screen bg-slate-900 content-around">
      <TimerCloser onCloseTime={onCloseTimerHandler} />
      <div className="flex justify-evenly flex-row grow bg-slate-900 items-center">
        <div className="text-slate-400 text-4xl">
          Hours<div className="text-slate-400 text-8xl">{hours}</div>
        </div>
        <div className="text-slate-400 text-4xl">
          Minutes<div className="text-slate-400 text-8xl">{minutes}</div>
        </div>
        <div className="text-slate-400 text-4xl">
          Seconds<div className="text-slate-400 text-8xl">{seconds}</div>
        </div>
        <div>
          <TimerButton
            onResetTime={resetTimerHandler}
            onPauseTime={pauseTimeHandler}
            isPaused={isPaused}
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;
