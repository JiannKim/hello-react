// 5.3 컴포넌트에 ref 달기
// 컴포넌트에도 ref를 달 수 있다.
// 이러한 방법은 주로 컴포 내부에 있는 DOM을 컴포 외부에서 사용할 때 쓴다. 방법은 동일하다.

// 5.3.1 사용법
/* 
    예시코드: <MyComponent ref={(ref) => {this.myComponent=ref}} />

    이렇게 하면 해당 컴포넌트 내부의 메서드 및 멤버 변수에도 접근할 수 있다.
    즉, 내부의 ref에도 접근할 수 있다. (예: myComponent.handleClick, myComponent.input 등)
*/

// 다음 실습 진행 순서 (* 5.3.2의 ScrollBox.js 참조)
// ScrollBox 컴포넌트 만들기 -> 컴포넌트에 ref 달기 -> ref를 사용하여 컴포넌트 내부 메서드 호출하기

// 5.3.3 컴포넌트에 메서드 생성(* ScrollBox.js 참조)

// 5.3.4 컴포넌트에 ref 달고 내부 메서드 사용(* App.js 참조)
