import React, {useState} from "react";

class ToggleClass extends React.Component {
  state = {
    isOn: true,
  };

  handleToggle = () => {
    this.setState((prev) => ({ isOn: !prev.isOn }));
  };

  render() {
    const { isOn } = this.state;
    return (
      <div className="demo-card">
        <h3>ToggleClass (类组件)</h3>
        <p>当前状态：{isOn ? "开启" : "关闭"}</p>
        <button onClick={this.handleToggle}>切换状态</button>
      </div>
    );
  }
}

function ToggleFun() {
  const [isOn, setIsOn]  = useState(true);

  const handleToggle = () => {
    // setIsOn(!isOn);
    // setIsOn(!isOn);
    // setIsOn(!isOn);
    // 上面这种写法会有问题，因为 React 可能会合并多次状态更新，导致状态不正确。

    // 正确的做法是使用函数式更新，确保每次更新都基于最新的状态：（下面写奇数个和写偶数个事不一样的）
    setIsOn(prev => !prev);
    setIsOn(prev => !prev);
    setIsOn(prev => !prev);

  }
    // const handleToggle = () => {
    //   setIsOn(!isOn);
    // }

    // 总结
    // setState(值)：简单赋值
    // setState(fn)：基于旧值计算（更安全）
    
  return (
    <div className="demo-card">
      <h3>ToggleClass (函数组件 + useState)</h3>
      <p>当前状态：{isOn ? "开启" : "关闭"}</p>
      <button onClick={handleToggle}>切换状态</button>
    </div>
  );
}

export default ToggleClass;
