import './App.css';
import MyComponent from './MyComponent';

// 3.3.2 컴포넌트를 사용할 때 props값 지정하기
// name 프로퍼티를 사용하여 props값('React')을 전달할 수 있도록 하였다.
const App = () => {
  // return <MyComponent name="React" />;

  // 3.3.3 props 기본값 설정: defaultProps (* MyComponent.js 참조)
  // return <MyComponent />;

  // 3.3.4 태그 사이 내용을 보여 주는 children (* MyComponent.js 참조)
  return <MyComponent> 리액트 </MyComponent>;
};

export default App;
