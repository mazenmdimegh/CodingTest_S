import React, { useState, useEffect } from 'react';
// import "./Board.scss";


function Clock({endClock}) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // console.log("startClock")
    // const timeout = setTimeout(() => {
    //     endClock();
    // }, 50000);
    // return () => clearTimeout(timeout);
    if (seconds==50){
        endClock();
        // console.log("time's up")    
    }
  }, [seconds]);

  useEffect(() => {
    console.log("startClock")
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
      console.log("incrementing")
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Time remaining: <span className="text-danger">{ seconds}' </span> minutes</div>;
}

export default Clock;