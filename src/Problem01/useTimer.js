import React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';

const useTimer = (Duration) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(Duration);
  let timerId = useRef(null);

  const start = useCallback(() => {
    setIsRunning(true);
    timerId.current = setInterval(() => {
      setSeconds((state) => state - 1);
    }, 1000);
  }, [setSeconds, setIsRunning]);

  const stop = useCallback(() => {
    clearInterval(timerId.current);
    setIsRunning(false);
    setSeconds(Duration);
  }, [setSeconds, setIsRunning]);

  useEffect(() => {
    if (seconds < 1) {
      stop();
    }
  }, [seconds, stop]);

  /* Edge Case: 
     Suppose timer is running and due to some action the app component is unmounted,
     So we need to clear the timer, else timer will keep running till it reaches zero
  */
  useEffect(() => timerId && clearInterval(timerId.current), []);

  return { isRunning, start, stop, seconds };
};

export default useTimer;
