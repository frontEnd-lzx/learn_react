import React from "react";

class CounterClass extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  minus = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="demo-card">
        <h3>CounterClass (类组件)</h3>
        <p>当前计数：{this.state.count}</p>
        <button onClick={this.add}>+1</button>
        <button onClick={this.minus}>-1</button>
        <button onClick={this.reset}>重置</button>
      </div>
    );
  }
}

export default CounterClass;
