import { useState } from "react";

function CounterFunction() {
  const [count, setCount] = useState(0);

  const onCountPlus = () => {
    setCount((count) => count + 1);
  }

  const onCountMinus = () => {
    setCount((count) => count - 1);
  }
  const onCountReset = () => {  
    setCount(0);
  };
  
  return (
    <div className="demo-card">
      <h3>CounterFunction (函数组件)</h3>
      <p>当前计数：{count}</p>
      <button onClick={onCountPlus}>+1</button>
      <button onClick={onCountMinus}>-1</button>
      <button onClick={onCountReset}>重置</button>
    </div>
  );
}

export default CounterFunction;
