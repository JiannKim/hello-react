import React from 'react';

// 3.3 props
// 3.3.5 비구조화 할당 문법을 통해 props 내부값 추출하기
// const MyComponent = (props) => {
//   // 비구조 할당
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요. 저는 {name} 이예요. <br />
//       저는 {children} 이예요.
//     </div>
//   );
// };
// 비구조 할당은 함수의 파라미터에서도 사용할 수 있다.
// 코드가 간결해지고 사용하기 편하다.
const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요. 저는 {name} 이예요. <br />
      저는 {children} 이예요.
    </div>
  );
};

// 3.3.3 props 기본값 설정: defaultProps (* App.js 참조)
// 기본값을 설정 할 때는 아래 코드와 같이 작성한다.
MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;
