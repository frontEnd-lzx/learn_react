import React from "react";
const B = (props) => {
    const { onAddA }  = props
    console.log("B渲染了");
    
    return (
        <div>
            <h2>组件B</h2>
            <button onClick={onAddA}>增加A的count</button>
        </div>
    );
};

export default React.memo(B);