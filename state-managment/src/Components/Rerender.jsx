/* eslint-disable react/prop-types */
import  { useState } from 'react'

export const Rerender = function RerenderIssue() {


  return (
    <div style={{textAlign:'center', margin:"100px"}}>
      <Counter/>
    </div>
  )
}




// component file
export const Counter = function Counter(){
  const [count, setCount] = useState(0)
  return <>
    <CounterComp count={count}/>
    <Increase setCount={setCount}/>
    <Decrease setCount={setCount}/>
  </>
}



// component file
export const CounterComp = function CounterComp({count}){
  return <span>count :{count}</span>
}


// component file
export const Increase = function Increase({setCount}){
  return <div>
    <button onClick={()=>{
      setCount(c => c+1)
    }}>Increase</button>
  </div>
}



// component file
export const Decrease = function Decrease({setCount}){
  return <div>
    <button 
    onClick={()=>{
      setCount(c => c-1)
    }}>Decrease</button>
  </div>
}

