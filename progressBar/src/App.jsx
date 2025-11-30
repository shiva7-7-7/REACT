import { use, useEffect, useState } from 'react'
import './App.css'
import { ProgressBar } from './components/progressbar'
function App() {
  const [percentage,setPercentage]=useState(0);
  useEffect(()=>{
    const timer=setInterval(()=>{
      setPercentage((prev)=>{
        if(prev>=100){
          clearInterval(timer)
          return prev
        }
        return prev+1;
      })
    },100)
    return ()=>clearInterval(timer);
  },[])
  return (
    <>
    <div className='container'>
        <h2>Progress Bars</h2>
        <ProgressBar value={percentage} />
    </div>
    </>
  )
}

export default App
