import './App.css';

// 2.5 ESLint와 Prettier 적용하기
// f1 누르고 Format Document 선택
// p. 82를 참고하여 아래 코드와 같이 prettierrc 파일을 만들어 원하는 설정을 할 수 있다.
// {
//   "singleQuote": true,
//   "semi": true,
//   "useTabs": false,
//   "tabWidth": 2
// }
function App() {
  const name = '리액트';
  return (
    <div className="react">
      {name}
      <input>this</input>
    </div>
  );
}

export default App;
