import React, { Component } from 'react';

// 3장 컴포넌트
// 3.4 state
//------------------------------------------------------//
//  리액트에서 state는 컴포 내부에서 바뀔 수 있는 값을 의미한다.     //
//  props는 컴포넌트가 사용되는 과정에서 부모 컴포가 설정하는 값이고,  //
//  컴포 자신은 해당 props를 읽기 전용으로만 사용할 수 있는것이다.    //
//  props를 바꾸려면 실제 사용 되는 부모 컴포에서 바꾸어야 한다.     //
//------------------------------------------------------//

// 리액트에는 두가지 종류의 state가 있다.
// - 클래스형 컴포넌트에서 사용하는 state
// - 함수형 컴포넌트에서의 useState라는 함수를 통해 사용하는 state
class Counter extends Component {
  // 3.4.1.2 state를 constructor에서 꺼내기
  // 아래와 같이 하면 constructor 메서드를 선언하지 않고도 state 초깃값을 설정할 수 있다. (이후로는 이방식을 사용)
  state = {
    number: 0,
    fiexdNumber: 0,
  };
  render() {
    // 3.4.1.1 state 객체 안에 여러값이 있을 때
    const { number, fiexdNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fiexdNumber}</h2>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => {
            // 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기
            //-----------------------------------------------------------------------//
            // this.setState를 사용하여 state값을 업데이트할 때는 비동기적으로 상태가 업데이트 된다. //
            //-----------------------------------------------------------------------//
            // 만일 아래 코드를 추가한다고 해도 버튼을 클릭할 때 숫자는 1씩 더해 진다.
            // this.setState를 사용한다고 해서 state값이 바로 바뀌지는 않기 때문이다. (비동기)
            // this.setState({nunber: this.state.number + 1});

            // 이에 대한 해결책은 this.setState를 사용할 때 객체 대신 함수를 인자로 넣어주면 된다.
            // 예: this.setState((prevState, props) => { // prevState -> 기존상태 , props -> 현재 지닌 props (이과정에서 props가 필요 없다면 생략 가능하다.)
            
            // this.setState((prevState) => {
            //   return {
            //     // 업데이트할 내용
            //     number: prevState.number + 1,
            //   };
            // });

            // 위 코드와 아래 코드는 완전히 똑같은 기능을 갖는다.
            // 아래의 코드는 함수에서 바로 객체를 반환한다는 의미이다.
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));

            // 두 번째로 this.setState 함수를 사용할 때는 바로 객체를 반환하도록 했기 때문에 prevState => ({}) 형태로 작성되었다.
            // 숫자는 2씩 증가한다.
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
