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
  // 아래 코드와 같이 constructor를 사용하여 state를 설정할 수 있다.
  constructor(props) {  // constructor는 컴포넌트의 생성자 메서드이다.
    super(props); // 클래스형 컴포에서 constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 한다.
    // state의 초깃값 설정
    this.state = {  // 컴포넌트의 state는 객체 형태여야 한다.
      number: 0,
    };
  }
  render() {
    const { number } = this.state; // state를 조회할 때는 this.state로 조회한다.
    return (
      <div>
        <h1>{number}</h1>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => {  // onClick(이벤트) props는 클릭시 호출될 함수를 설정할 수 있게 해준다.
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다. (state값을 바꿀 수 있게 해줌)
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
