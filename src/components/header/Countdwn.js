import React from 'react';
import Countdown from 'react-countdown';
import './Countdwn.css';

export default function Countdwn() {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="timer">
          <div>
            <span className="text">روز</span>
            <span className="day number">{days}</span>
          </div>
          <span className="dot">:</span>
          <div>
            <span className="text">ساعت</span>
            <span className="hour number">{hours}</span>
          </div>
          <span className="dot">:</span>
          <div>
            <span className="text">دقیقه</span>
            <span className="minutes number">{minutes}</span>
          </div>
          <span className="dot">:</span>
          <div>
            <span className="text">ثانیه</span>
            <span className="seconds number">{seconds}</span>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <Countdown date={Date.now() + 500000000} renderer={renderer} />
    </div>
  );
}
