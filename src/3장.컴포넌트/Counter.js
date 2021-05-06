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
            // 3.4.1.4 this.setState가 끝난 후 특정 작업 실행하기
            console.log(this.state, 'onClick 실행');  // 실제 state값 확인

            this.setState(
              {
                number: number + 1,
              },
              // setState를 사용하여 값을 업데이트하고 난 다음 특정 작업을 하고 싶을 때는
              // setState의 두 번째 파라미터로 콜백 함수를 등록하여 작업을 처리할 수 있다.

              // 아래 코드는 setState의 두 번째 파라미터 (콜백 함수)
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state, 'setState 함수 실행');  // setState 함수 실행 후 state값 확인
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
