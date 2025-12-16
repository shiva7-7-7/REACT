import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [str,setStr]=useState("");
  const [tickets,setTickets]=useState([]);
  const handleKeyDown=(e)=>{
      if(e.code!=="Enter") return;
        if(str.trim()!==""){
            setTickets((prev)=>{
              const newArr=[...prev,str]
              return newArr;
            });
            setStr("");
        }
  }
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("tickets"))
    if(data?.length>0){
      setTickets(data);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("tickets",JSON.stringify(tickets));
  },[tickets])
  const handleDelete=(index)=>{
    setTickets((prev)=>{
      const newState=[...prev];
      newState.splice(index,1);
      return newState;
    })
  }
  return (
    <div className='container'>
        <h1>Enter Text</h1>
        <input type="text" value={str}
              onChange={(e)=>setStr(e.target.value)} 
              onKeyDown={handleKeyDown}/>
        <div className='tickets'>
            {(tickets.length>0) && tickets.map((value,index)=>{
              return <div key={index}><span>{value}</span> <button onClick={()=>handleDelete(index)}>X</button> </div>
            })}
        </div>
    </div>
  )
}

export default App
