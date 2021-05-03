import './App.css';

// 2.4.8 꼭 닫아야 하는태그 그리고 주석
function App() {
  const name = '리액트'
  return (
  <div className='react'>
    {name}
    {/* <input> 닫지않으면 오류 발생 */}
    {/* 아래와 같이 작성해야 한다. */}
    <input /> 
  </div>
  );
}

export default App;
