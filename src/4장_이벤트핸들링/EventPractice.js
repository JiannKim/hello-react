import React, { Component } from 'react';

// 4.2.1.1 컴포넌트 생성
class EventPractice extends Component {
  // 4.2.2.2 state에 input값 담기
  state = {
    username: '',
    message: '',
  };

  // 4.2.3 임의 메서드 만들기
  // 앞서 배운 방법 대신 함수를 미리 만들어놓고 전달하는 방법도 있다.
  // 성능상으로는 차이가 거의 없지만, 가독성이 훨씬 좋다.
  // onChange와 onClick에 전달한 함수를 따로 빼내서 컴포넌트의 임의 메서드를 만들어 준다.

  // 4.2.3.2 Property Initializer Syntax를 사용한 메서드 작성
  // 메서드 바인딩은 생성자 메서드에서 하는것이 정석이다.
  // 하지만 이 작업을 불편하다고 느낄 수 있다.
  // 새 메서드를 만들 때마다  constructor도 수정해야 하기 때문이다.
  // 이 작업을 더 간단하게 하는 방법으로는 바벨의 transform-class-properties 문법을 사용하여
  // 화살표 함수 형태로 메서드를 정의하는 것이다.

  // 4.2.4 input 여러 개 다루기
  // 핵심 코드
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // 위의 코드 처럼 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용된다.
  // 예시 코드
  // const name = 'variantKey';
  // const object = {
  //   [name]: 'value'
  // };
  // 결과
  // {
  //   'variantKey': 'value'
  // }

  handleClick = (e) => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  // 4.2.5 onKeyPress 이벤트 핸들링
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Enter를 눌렀을 때
      this.handleClick(); // handleClick 메서드 호출
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 실습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명 입력..."
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력..."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
