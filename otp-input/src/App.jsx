import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
    const NUMB_OF_INPUTS=5;
    const [inputState,setInputState]=useState([...new Array(NUMB_OF_INPUTS).fill("")]);
    const inputRef=useRef([]);
    useEffect(()=>{
      inputRef.current[0]?.focus()
    },[])
    const handleChange=(value,index)=>{
      // update value of state on change
      if(isNaN(value)) return;
      const trimValue=value.trim();
      setInputState((prev)=>{
        const newinput=[...prev];
        newinput[index]=trimValue.slice(-1);
        return newinput;
      })
      if(trimValue && index+1<NUMB_OF_INPUTS){
        inputRef.current[index+1]?.focus()
      }
    }
    const handleKeys=(e,index)=>{
      // handle key based navigation between input fields
      if(e.code==="ArrowRight"){
          inputRef.current[index+1]?.focus()
          return;
      }else if(e.code==="ArrowLeft"){
        inputRef.current[index-1]?.focus()
        return;
       }else if(inputState[index]==="" && e.code==="Backspace"){
        inputRef.current[index-1]?.focus()
        return;
       }
    }
    return(<div className='container'>
        <h1>Enter OTP</h1>
        <div className='otp-inputs'>
            {inputState.map((value,index)=>{
              return <input type="text" key={index} value={value}
                      ref={(el)=>(inputRef.current[index]=el)}
                      onChange={(e)=>handleChange(e.currentTarget.value,index)}
                      onKeyDown={(e)=>handleKeys(e,index)}
                      />
            })}
        </div>
    </div>)
}

export default App
