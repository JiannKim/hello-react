import './App.css';

function App() {
  // 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황은 만들면 안된다.
  // 아래와 같은 코드는 아무것도 렌더링하지 않으려면 null을 반환하라는 에러문구가 뜬다.
  const name = undefined;
  return name;
}

export default App;
