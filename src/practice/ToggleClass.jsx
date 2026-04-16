import React from "react";

class ToggleClass extends React.Component {
  state = {
    isOn: true,
  };

  handleToggle = () => {
    this.setState((prev) => ({ isOn: !prev.isOn }));
  };

  render() {
    return (
      <div className="demo-card">
        <h3>ToggleClass (类组件)</h3>
        <p>当前状态：{this.state.isOn ? "开启" : "关闭"}</p>
        <button onClick={this.handleToggle}>切换状态</button>
      </div>
    );
  }
}

export default ToggleClass;
