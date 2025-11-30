import { useEffect, useState } from "react"

export const ProgressBar=({value=0})=>{
    const [percentage,setPercentage]=useState(value);
    useEffect(()=>{
        if(value<=0){
            setPercentage(0);
        }else if(value>=100){
            setPercentage(100);
        }else{
            setPercentage(value);
        }
    },[value])
    return (
        <div className="progress">
                <p style={{color:`${percentage>49?"white":"black"}`}}>{value.toFixed()}%</p>
                <span style={{width:`${percentage}%`}}></span>
        </div>
    )
}