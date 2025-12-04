import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [suggetions,setSuggetions]=useState([]);
    const [value,setValue]=useState("");
    const [flag,setFlag]=useState(false);
    const [catchSuggestions,setCatchSuggestions]=useState({});
    const fetchSugg=async ()=>{
      // if we have value in catch then return without fetching
      if(catchSuggestions[value]){
        setSuggetions(catchSuggestions[value]);
        return;
      }
      try {
        // if not found in catch then fetch from network and set suggetions
        // and also catch the data in memory
        const response=await fetch(`https://dummyjson.com/recipes/search?q=${value}`)
        const data=await response.json();
        setSuggetions(data.recipes);
        setCatchSuggestions((prev)=>{
          return {...prev,[value]:data.recipes};
        })      
      } catch (error) {
        console.log(error.message);
      }
    }
    // handle side effects
    useEffect(()=>{
        if(value==""){
          setSuggetions([]);
          return;
        };
        const timer=setTimeout(fetchSugg,400);
        return ()=>{
          clearTimeout(timer);
        }
    },[value]);
    // handle change data
    const changeValue=(e)=>{
      setValue(e.target.value);
    }
    return(<div className='container'>
      <h1>Search Recipe</h1>
      {/* input field */}
      <div>
        <input type="text" value={value} 
        onChange={changeValue}
        onBlur={()=>setFlag(false)}
        onFocus={()=>setFlag(true)} />
      </div>
      {/* only display data when available */}
      { flag && <div className='suggetion-list'>
        {(suggetions.length>0) && suggetions.map((p,index)=>{
          return <span key={index}>{p.name}</span>
        })}
      </div>}
    </div>)
}

export default App
