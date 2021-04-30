import './App.css';

// 2.4.6 인라인 스타일링
function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black', // background-color와 같은 경우 - 가 사라지고 카멜 표기법(camelCase)으로 작성한다.
    color: 'aqua',
    fontSize: '48px', // font-size -> fontSize
    fontWeight: 'bold', // font-weight -> fontWeight
    padding: 16 // 단위 생략시 px로 지정된다.
  }
  return <div style={style}>{name}</div>;
  // 만일 스타일 객체를 미리 선언하지않고 바로 지정하고 싶다면 div의 style 값에 직접 지정하는 방법이 있다.
  // ex) style = {{color: red, fontSize: 20}}
}

export default App;
