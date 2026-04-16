import { useState } from "react";

function CounterFunction() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-card">
      <h3>CounterFunction (函数组件)</h3>
      <p>当前计数：{count}</p>
      <button onClick={() => setCount((n) => n + 1)}>+1</button>
      <button onClick={() => setCount((n) => n - 1)}>-1</button>
      <button onClick={() => setCount(0)}>重置</button>
    </div>
  );
}

export default CounterFunction;
