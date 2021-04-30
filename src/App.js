import './App.css';

function App() {
  // 아무것도 보여주고 싶지 않을경우 아래 코드와같이 작성한다.
  // name 값을 'react'로 수정하면 "리액트입니다."가 출력 된다.
  // const name = "reeact";
  // return <div>{name === 'react' ? <h1>리액트입니다.</h1> : null}</div>;

  // 아래 코드와 같이 작성하면 위에서 작성한 코드 보다 더 짧은 코드로 똑같은 작업을 할 수 있다.
  const name = "reeact";
  return <div>{name === 'react' && <h1>리액트입니다.</h1>}</div>;
  // &&(and) 연산자로 조건부 렌더링을 할 수 있는 이유는 리액트에서 false를 랜더링 할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문이다.
}

export default App;
