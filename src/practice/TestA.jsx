import { useState, useCallback, useEffect } from "react";
import B from './TestB'
const A = () => {
    console.log("log ~ A ~ A渲染了:")
    const [count, setCount] = useState(1);
    const [num, setNum] = useState(1);

    const clickHandler = useCallback(() => {
        setCount(prevState => prevState + num); // 
        setNum(prevNum => prevNum + 1); // 每次点击 num 都会增加 1，导致 clickHandler 的依赖 num 发生变化，从而触发 A 组件重新渲染。
    }, [num]);

    useEffect(() => {
        console.log(num,'num变化了');
    }, [num]);

    return (
        <div className="demo-card">
            <h2>组件A -- {count}</h2>
            <button onClick={clickHandler}>增加</button>
            <B onAddA={clickHandler}/>
        </div>
    );
};

export default A;