import { use, useState } from 'react'
import './App.css'
import Cell from './components/Cell';

function App() {
  const grid=[[1,1,1],
              [1,0,1],
              [1,1,1]];
  const [colored,setColored]=useState([]);
  const [started,setStarted]=useState(false);
  const startDeColoring=()=>{
      setStarted(true);
      const interval=setInterval(()=>{
        setColored((prev)=>{
          const newCol=[...prev];
          newCol.pop();
          if(newCol.length==0){
            clearInterval(interval);
            setStarted(false);
          }          
          return newCol;
        })
      },500)
  }
  const addToColored=(index)=>{
    const newColored=[...colored,index];
    setColored(newColored);
    if(newColored.length===grid.flat(1).filter((value)=>value===1).length){
      startDeColoring();
    }
  }
  return (
    <div className='wrapper'>
      <div className='container' style={{gridTemplateColumns:`repeat(${grid[0].length},1fr)`}}>
        {grid.flat(1).map((value,index)=>{
          return value===1?<Cell key={index} 
                            filled={colored.includes(index)}
                            onclick={()=>addToColored(index)}
                            started={started} />:<span></span>
        })}
      </div>
      </div>
  )
}

export default App
