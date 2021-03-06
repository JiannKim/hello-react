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

// 5.4 정리
/*
    컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref를 사용한다. 
    먼저 ref를 사용하지 않고도 원하는 기능을 구현할 수 있는지 반드시 고려한 후에 활용하도록 한다.
    이 시점에서 오해할 수 있는 부분이 있다.
    바로 서로 다른 컴포끼리 데이터를 교류해야할 때 ref를 사용하는 경우인데 이는 잘못된 사용이다.
    물론 가능하긴하다. 컴포에 ref를 달고 그 ref를 다른 컴포로 전달하고, 다른 컴포에서 ref로 전달받은 컴포의 메서드를 실행하고...
    하지만 이러한 방법은 리액트 사상에 어긋난 설계이다.
    앱 규모가 커지면 마치 스파게티처럼 구조가 꼬여버려서 유지 보수가 불가능하게된다.
    컴포끼리 데이터를 교류할 때는 언제나 데이터를 부모 <-> 자식 흐름으로 교류해야 한다.
    나중에 리덕스 혹은 Context API를 사용하여 효율적으로 교류하는 방법을 배울 것이다.
*/