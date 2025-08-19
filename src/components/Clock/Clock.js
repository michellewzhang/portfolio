import React, { useState, useEffect } from 'react';
import './Clock.css';
import bedtime from '../../images/bedtime.png';
import daytime from '../../images/daytime.png';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const options = {
      timeZone: 'America/Los_Angeles',
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    };
    
    return date.toLocaleTimeString('en-US', options).toLowerCase();
  };

  const isBedtime = (date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const timeInMinutes = hour * 60 + minute;
    
    // Bedtime: 8:00 PM (1200 minutes) to 6:00 AM (360 minutes)
    const bedtimeStart = 20 * 60; // 8:00 PM
    const bedtimeEnd = 6 * 60;    // 6:00 AM
    
    return timeInMinutes >= bedtimeStart || timeInMinutes < bedtimeEnd;
  };

  const illustration = isBedtime(time) ? bedtime : daytime;

  return (
    <div 
      className="clock-container" 
    >
      <img src={illustration} alt="illustration" className="illustration" />
      <div className="time">{formatTime(time)}</div>
      <div className="timezone">in san francisco</div>
    </div>
  );
};

export default Clock;
