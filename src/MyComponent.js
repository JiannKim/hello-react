import React from 'react';

// 3.3 props
// properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소이다.
// 해당 컴포를 불러와 사용하는 부모 컴포에서 설정할 수 있다. (현재 App <- 부모 컴포)

// 3.3.1 JSX 내부에서 props 렌더링
// 아래 코드에서 name props를 렌더링하도록 설정 하였다.
const MyComponent = (props) => {
  //   return <div>안녕하세요. 저는 {props.name} 이예요.</div>;
  // };

  // 3.3.3 props 기본값 설정: defaultProps (* App.js 참조)
  // 기본값을 설정 할 때는 아래 코드와 같이 작성한다.
  MyComponent.defaultProps = {
    name: '기본 이름',
  };

  // 3.3.4 태그 사이 내용을 보여 주는 children (* App.js 참조)
  // 태그 사이의 내용을 보여줄 때는 아래 코드 처럼 작성하면 부모에게서 받아온 props값을 렌더링한다.
  return (
    <div>
      안녕하세요, 저는 {props.name}이예요. <br />
      children 값은 {props.children}이예요.
    </div>
  );
};

export default MyComponent;
