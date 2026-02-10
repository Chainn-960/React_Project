import React,{useState , useRef} from 'react';

function Api() {
  const [seconds , setSeconds]  = useState(0);
  const intervalRef = useRef(null);

   const startTimer =() =>{
    if(intervalRef.current) return;

    intervalRef.current = setInterval(()=>{
      setSeconds((prev) => prev +1);
    }, 1000)
   }
    const stopTimer = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  return (
    <div>
      <p>Time :{seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Api