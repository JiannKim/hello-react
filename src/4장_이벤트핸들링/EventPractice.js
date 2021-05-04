import React, { Component } from 'react';

// 4.2.1.1 컴포넌트 생성
class EventPractice extends Component {
  // 4.2.2.2 state에 input값 담기
  state = {
    message: '',
  };

  // 4.2.3 임의 메서드 만들기
  // 앞서 배운 방법 대신 함수를 미리 만들어놓고 전달하는 방법도 있다.
  // 성능상으로는 차이가 거의 없지만, 가독성이 훨씬 좋다.
  // onChange와 onClick에 전달한 함수를 따로 빼내서 컴포넌트의 임의 메서드를 만들어 준다.

  // 4.2.3.1 기본 방식
  //-----------------------------------------------------------------------------//
  //  함수가 호출될 때 this는 호출부에 따라 결정되기 때문에                                  //
  //  클래스 임의 메서드가 특정 html 요소의 이벤트로 등록되는 과정에서                          //
  //  메서드와 this의 관계가 끊어져 버린다.                                              //
  //  이 때문에 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는    //
  //  메서드를 this와 바인딩(binding)하는 작업이 필요하다.                                //
  //  만약 바인딩하지 않는 경우라면 this가 undefined를 가리키게 된다.                       //
  //----------------------------------------------------------------------------//
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick(e) {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 실습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력..."
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
