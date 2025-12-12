import { useState } from 'react'
import './App.css'
import nestedData from './assets/List'
import CheckBoxs from './components/CheckBox';
import { updateNodeRecursive,parentCheck } from './util/UtilityFuncs.js';
function App() {
    const [itemList,setItemList]=useState(nestedData);

    const handleChange = (e, node) => {
      const targetId = node.id;
      const checkedValue = e.target.checked;
      
      setItemList((prevList) => {
          // Map over the root list. This is the only shallow copy needed at the root.
          const updatedList = prevList.map((rootNode) => 
              updateNodeRecursive(rootNode, targetId, checkedValue)
          );
          // updated list for parent
          const parentList=updatedList.map((rootnode)=>parentCheck(rootnode,checkedValue));
          return parentList;
      });
  };
    return(
      <div className='container'>
          <h1>Nested CheckBox</h1>
          <div className='checkBox-cont'>
            <CheckBoxs items={itemList} handleChange={handleChange}/>
          </div>
      </div>
    )
}

export default App
