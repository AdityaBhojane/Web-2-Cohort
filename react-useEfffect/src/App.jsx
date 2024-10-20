import { useState } from "react"
import Counter from "./conter/Counter"
import { useEffect } from "react";

function App() {
  // const [countComponent,setCountComponent] = useState(false);

  useEffect(()=> setInterval(()=> setCountComponent(c => !c),5000),[])

  return (
    <div>
      {/* {countComponent && <Counter/>} */}
      <Counter/>
    </div>   
  )
}

export default App