import React, { useState, useEffect } from 'react';
import "./Board.scss";


function Clock({endClock}) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
        endClock();
    }, 90000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Time remaining: <span className="text-danger">{ seconds} </span> seconds</div>;
}

export default Clock;