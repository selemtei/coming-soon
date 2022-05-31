import './App.css';
import React from 'react';
import CountdownTimer from './CountdownTimer';

function App() {
  const SIX_DAYS_IN_MS = 6 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterSixDays = NOW_IN_MS + SIX_DAYS_IN_MS;

  return (
    <div className="background-image">
      <div className="top-left">
        <h3>MAKENIS LIMITED</h3>
        <p>A company involved in the technology and travel sector</p>
      </div>
      <div className="middle">
        <h1>COMING SOON</h1>
        <CountdownTimer targetDate={dateTimeAfterSixDays} />
      </div>
    </div>
  );
}

export default App;