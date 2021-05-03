import React from 'react';

// 3.2 첫 컴포 생성
// 3.2.2 코드 작성하기
const MyComponent = () => {
  return <div>my new component</div>;
};

// 노트1
// 화살표 함수는 ES6 문법에서 함수를 표현하는 새로운 방식이다.
// 하지만 이것이 기존 function을 완전히 대체하지는 않는다.
// 사용 용도가 조금 다른데, 주로 함수를 파라미터로 전달할 때 유용하다. 아래 코드를 보면서 이해해보자.
setTimeout(function () {
  console.log('hello world');
}, 1000);

setTimeout(() => {
  console.log('hello world');
}, 1000);

// 이 문법이 기존 function을 대체 할 수 없는 것은 용도가 다르기 때문이다. 무엇보다 서로 가리키고 있는 this값이 다르다.
// 아래 코드를 확인해보자.

function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: function () {
      console.log(this.name + ': 멍멍');
    },
  };
}
const blackDog = new BlackDog();
blackDog.dark(); // 검둥이: 멍멍

function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    dark: () => {
      console.log(this.name + ': 멍멍');
    },
  };
}
const whiteDog = new WhiteDog();
whiteDog.dark(); // 흰둥이: 멍멍

// function()을 사용했을 때는 검둥이, () => 를 사용했을 때는 흰둥이가 나타난다.
// 일반 함수는 자신이 종속된 객체를 this로 가르킨다.
// 화살표 함수는 자신이 종속된 인스턴스를 가르킨다.
// 화살표 함수는 값 연산 후 바로 반환해야 할 때 사용하면 가독성을 높일 수 있다.
function twice(value) {
  return value * 2;
}
const triple = (value) => value * 3;
// 위 처럼 {}를 작성하지 않으면 연산값을 그대로 반환한다는 의미이다.

// 노트2
// 코드 스니펫을 사용하면 화살표 함수를 사용한 컴포넌트를 빠르게 작성 할 수 있다.
// reactjs code snippet 확장 프로그램이 설치 되어있다면 rsc -> Enter 해서 빠르게 작성해보자.
// 아래의 코드는 스니펫을 사용한 컴포넌트 이다.
// import React from 'react';

// const componentName = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default componentName;
