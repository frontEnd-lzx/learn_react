import "./App.css";
import {
  AutoMessageFunction,
  ClockClass,
  CounterClass,
  CounterFunction,
  HelloCard,
  ToggleClass,
} from "./practice";

function App() {
  return (
    <div className="App">
      <h1>React 组件练习区</h1>
      <p className="hint">你可以修改任意组件，观察页面实时变化。</p>

      <div className="demo-grid">
        <HelloCard name="小明" city="上海" />
        <CounterFunction />
        <AutoMessageFunction />
        <ToggleClass />
        <CounterClass />
        <ClockClass />
      </div>
    </div>
  );
}

export default App;
