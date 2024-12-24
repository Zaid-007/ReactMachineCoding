import useTimer from './useTimer.js';
import './App.css';
import { useEffect } from 'react';

export default function App() {
  const TOTAL_TIME = 5;
  const { isRunning, start, stop, seconds } = useTimer(TOTAL_TIME);

  // useEffect(()=>{
  //   start();
  // }, [start]);

  return (
    <div className="App">
      <h1>Custom Timer</h1>
      <h2>{isRunning ? seconds : 'No timer'}</h2>
      <button onClick={start} disabled={isRunning}>
        Start
      </button>
      <button onClick={stop} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
}
