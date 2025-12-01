export default function Cell({filled,onclick,started}){
    return(<button type="button"
                   className={filled?"active-cell":"cell"}
                   onClick={onclick} 
                   disabled={filled || started}/>)
} 