export function checkRecursive(node, checkedValue) {
    // 1. Create a clone of the current node
    let newNode = { ...node, isChecked: checkedValue };
    // 2. Recursively update children and clone the children array
    if (newNode?.children.length > 0) {
        const newChildren = newNode.children.map((child) => {
            // Recursive call returns the cloned child
            return checkRecursive(child, checkedValue);
        });
        // 3. Update the cloned node's children array with the new cloned children
        newNode.children = newChildren;
    }
    // 4. Return the fully cloned and updated node
    return newNode;
}

export const updateNodeRecursive = (currNode, targetId, checkedValue) => {
    // Base Case: Target Node Found
    if (currNode.id === targetId) {
        // Use the dedicated recursive checker to clone and check all children
        return checkRecursive(currNode, checkedValue);
    }
    // Recursive Case: Check Children
    if (currNode?.children.length > 0) {
        let changed = false;
        
        // Map over children to get new list of children
        const newChildren = currNode.children.map((child) => {
            const result = updateNodeRecursive(child, targetId, checkedValue);
            if (result !== child) {
                changed = true; // Mark this branch as having changed a child
            }
            return result;
        });
        // If a child was changed, we must clone the current node (currNode)
        if (changed) {
            // Clone and update the children property
            return { ...currNode, children: newChildren };
        }
    }
    //  No Change: Return the original node reference to maintain efficiency
    return currNode;
};

export function parentCheck(node){
    let newNode={...node};
    if(node.children && node.children.length>0){
        let newChildren = node.children.map(child =>
            parentCheck(child) 
        );
        newNode.children=newChildren;
        const status=newChildren.every((child)=>child.isChecked===true);
        newNode.isChecked=status;
    }
    return newNode
}