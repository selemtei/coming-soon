import './App.css';
import React from 'react';
import CountdownTimer from './CountdownTimer';

function App() {
  const date = new Date("06/27/2022 23:59:59");
  const dateTimeInMilliseconds = date.getTime();

  return (
    <div className="background-image">
      <div className="top-left">
        <h3>MAKENIS LIMITED</h3>
        <p>A company involved in the technology and travel sector</p>
      </div>
      <div className="middle">
        <h1>COMING SOON</h1>
        <CountdownTimer targetDate={dateTimeInMilliseconds} />
      </div>
    </div>
  );
}

export default App;