import './App.css';

function App() {
  // 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황은 만들면 안된다.
  // 아래와 같은 코드는 아무것도 렌더링하지 않으려면 null을 반환하라는 에러문구가 뜬다.
  const name = undefined;
  // 아래 코드처럼 or 연산자를 사용하면 해당 값이 undefined일 때 사용 할 값을 지정해줌으로써 간단히 오류 방지가 가능하다.
  return name || '값이 undefined입니다.';
  // 반면에 jsx 내부에 렌더링은 가능하다.
  // return <div>{name}</div>
}

export default App;
