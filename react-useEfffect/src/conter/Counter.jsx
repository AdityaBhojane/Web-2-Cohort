import { useState } from "react";
import { useEffect } from "react";


function Counter() {
  const [count,setCount] = useState(0);

  useEffect(()=> {
    setInterval(()=> setCount(count+1),1000)
},[])
     
  return (
    <div>count - {count}</div>
  )
}

export default Counter;