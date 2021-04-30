import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // 하나의 요소로 반드시 감싸주어야한다.
    // 이유는 Virtual DOM 에서 컴포넌트의 변화를 감지 할 때에 효율적으로 비교 할 수 있도록
    // 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어 져야한다는 규칙이 있다.
    // div가 마음에 안든다면 react v16이상부터 도입된 <Fragment /> 를 사용 할 수 있다.
    // <Fragment> or <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // </Fragment> or </>
  );
}

export default App;
