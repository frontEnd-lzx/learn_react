// function HelloCard({ name="张三", city="北京" }) {
function HelloCard(props) {
  const { name, city } = props;
  return (
    <div className="demo-card">
      <h3>HelloCard (函数组件)</h3>
      <p>
        你好，{name}。你现在在 {city} 练习 React。
      </p>
    </div>
  );
}

export default HelloCard;
