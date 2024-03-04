import { useEffect, useState } from "react";

let Time = () => {
  
  const [time , setTime] = useState(new Date())

  useEffect(()=> {
  
    const timeInterval = setInterval(() =>{
      setTime(new Date())
    }, 1000)


    return () =>{
      clearInterval(timeInterval);
      console.log("Cancle the Interval ");
    }
  }, [])

  return (
    <p className="lead">
      This is the current time : <strong>{time.toLocaleDateString()}</strong> - {" "} <br />
      <strong className="time">{time.toLocaleTimeString()}</strong>
    </p>
  );
};

export default Time;
