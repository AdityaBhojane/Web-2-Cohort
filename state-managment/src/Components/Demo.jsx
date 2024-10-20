
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from '../store/atom/counterStore';
import { memo, useEffect, useState } from 'react';


function Demo() {

  return (
    <RecoilRoot>
     <Counter />
    </RecoilRoot>
  )
}

function Counter() {
  const [count,setCount] = useState(0);

  useEffect(()=> {
    setInterval(() => {
    setCount(c => c+1)
  }, 3000)} ,[])

  return <div>
    {/* <CurrentCount />
    <Increase />
    <Decrease /> */}

    {/* // memo deme */}
    <MemoCounter count={count}/>
    <MemoIncrease/>
    <MemoDecrease/>
  </div>
}



function CurrentCount({count}) {
//   const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}


function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount(c => c - 1);
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}


function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}


export default Demo;


// memo - HOC use case;

const MemoCounter = memo(CurrentCount);
const MemoIncrease = memo(Increase);
const MemoDecrease = memo(Decrease);



// // counter.js
// import { atom } from "recoil";

// export const counterAtom = atom({
//     default: 0,
//     key: "counter"
// })

