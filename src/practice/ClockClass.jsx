import React from "react";

class ClockClass extends React.Component {
  state = {
    now: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="demo-card">
        <h3>ClockClass (类组件 + 生命周期)</h3>
        <p>当前时间：{this.state.now.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default ClockClass;
