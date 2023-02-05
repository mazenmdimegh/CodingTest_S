import React, { useState, useEffect } from 'react';
// import "./Board.scss";


function Clock({endClock}) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds==90){
        endClock();
        // console.log("time's up")    
    }
  }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Time remaining: <span className="text-danger">{ seconds}' </span> minutes</div>;
}

export default Clock;