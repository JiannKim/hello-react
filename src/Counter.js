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
          onClick={() => {  // onClick(이벤트) props는 클릭시 호출될 함수를 설정할 수 있게 해준다.
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다. (state값을 바꿀 수 있게 해줌)
            this.setState({ number: number + 1 });  // setState 함수는 안자로 전달된 객체 안에 들어있는 값만 바꾼다.
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
