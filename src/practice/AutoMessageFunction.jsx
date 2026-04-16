import { useEffect, useState } from "react";

function AutoMessageFunction() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="demo-card">
      <h3>AutoMessageFunction (函数组件 + useEffect)</h3>
      <p>页面运行了 {seconds} 秒</p>
      <p>{seconds % 2 === 0 ? "偶数秒，继续加油" : "奇数秒，保持节奏"}</p>
    </div>
  );
}

export default AutoMessageFunction;
