import React, { Component } from 'react';
import './ValidationSample.css';

// 5.1.1 예제 컴포넌트 생성
class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    // 5.2.3.2 버튼 onClick 이벤트 코드 수정
    // 버튼 클릭시 input에 포커스를 주도록 코드를 수정해보자.
    // this.input이 컴포넌트 내부의 input을 가리키고 있으니 일반 DOM을 다루듯이 코드를 작성하면 된다.
    this.input.focus();
  };

  render() {
    return (
      <div>
        {/* 5.2.3.1 input에 ref 달기 */}
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
