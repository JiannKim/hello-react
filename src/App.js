import './App.css';
import MyComponent from './MyComponent';

// 3.3.2 컴포넌트를 사용할 때 props값 지정하기
// name 프로퍼티를 사용하여 props값('React')을 전달할 수 있도록 하였다.
const App = () => {
  // return <MyComponent name="React" />;

  // 3.3.3 props 기본값 설정: defaultProps (* MyComponent.js 참조)
  // return <MyComponent />;

  // 3.3.6 propTypes를 통한 props 검증
  // MyComponent에서 propTypes를 문자열로 받도록 설정하였다.
  // 브라우저내에서는 정상적으로 렌더링되지만 검사에 콘솔로그를 보면 propTypes(props의 name)가 잘못되었다는 경고문구가 떠있다.
  return (
    // 3.3.6.1 isRequired를 사용하여 필수 propTypes 설정 (* MyComponent.js 참조)
    // favoriteNumber까지 잘 렌더링된것을 볼 수 있다.
    <MyComponent name="React" favoriteNumber={3}>
      리액트
    </MyComponent>
  );

  // 에러 메세지를 확인한 후 제대로된 name값을 작성한다. (문자열로)
  // return <MyComponent name={3}> 리액트 </MyComponent>; <-- errer
  // return <MyComponent name="React"> 리액트 </MyComponent>; <-- rendering
};

export default App;
