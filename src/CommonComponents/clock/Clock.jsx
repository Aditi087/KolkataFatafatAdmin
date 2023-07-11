import React, { useEffect, useState } from 'react';
import './style.css';

function Clock() {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const convertToTwoDigit = (number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });
  };

  let now = new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div
      className={
        'clock ' +
        (time.hours >= 4 && time.hours < 6
          ? 'rise'
          : time.hours >= 6 && time.hours < 16
          ? 'day'
          : time.hours >= 16 && time.hours < 19
          ? 'dawn'
          : time.hours >= 19 && time.hours < 24
          ? 'evening'
          : time.hours >= 0 && time.hours < 4 && 'night')
      }
    >
      <div className="d-flex my-auto">
        <span>{convertToTwoDigit(time.hours)}:</span>
        <span>{convertToTwoDigit(time.minutes)}:</span>
        <span>{convertToTwoDigit(time.seconds)}</span>
        <span style={{ fontSize: '15px' }} className="mt-1 ms-1">
          {time.hours >= 16 ? ' PM' : ' AM'}
        </span>
      </div>

      <span className="day_st">{now}</span>
    </div>
  );
}

export default Clock;
