export default function CheckBoxs({items,handleChange}){
    return(
        <div className="checkboxes">
           {items.map((item,index)=>{
            return(<div className="parent" key={index}>
                <input type="checkbox" checked={item.isChecked} onChange={(e)=>handleChange(e,item)}/>
                <span>{item.name}</span>
                {(item?.children.length>0) && <CheckBoxs items={item.children} handleChange={handleChange}/>}
            </div>)
           })}
        </div>
    )
}

