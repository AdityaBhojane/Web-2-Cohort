
import  { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from '../store/atom/counterStore';

export default function RecoilDemo() {
  return (
   <>
    <RecoilRoot>
      <Count/>
    </RecoilRoot>  
   </>
  )
}


function Count(){
  return (
    <>
      <CounterComp/>
      <Increase/>
      <Decrease/>
    </>
  )
}


// component file
function CounterComp(){
  const count =  useRecoilValue(counterAtom)
  return <span>count :{count}</span>
}


// component file
function Increase(){
  const setCount = useSetRecoilState(counterAtom)
  return <div>
    <button onClick={()=>{
        setCount(c=> c+1)
    }}>Increase</button>
  </div>
}



// component file
function Decrease(){
  const setCount = useSetRecoilState(counterAtom)  
  return <div>
    <button 
    onClick={()=>{
        setCount(c=> c-1)
    }}>Decrease</button>
  </div>
}