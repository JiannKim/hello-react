import './App.css';

// 2.4.7 class 대신 className
// react v16부터는 class를 className으로 변환시켜주고 경고를 띄운다.
function App() {
  const name = '리액트'
  return <div className='react'>{name}</div>
}

export default App;
