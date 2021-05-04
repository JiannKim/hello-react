import React, { Component } from 'react';

// 4.2.1.1 컴포넌트 생성
class EventPractice extends Component {
  // 4.2.2.2 state에 input값 담기
  state = {
    message: '',
  };
  render() {
    // 4.2.2 onChange 이벤트 핸들링하기
    // 메서드 내부에 input 요소를 렌더링하는 코드와 해당 요소에 onChange 이벤트를 설정하는 코드 작성
    return (
      <div>
        <h1>이벤트 실습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력..."
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        {/* 
        4.2.2.3 버튼을 누를 때 comment 값을 공백으로 설정 
        클릭 이벤트가 발생하면 현재 comment값(state의 message)을 alert박스로 띄운 후
        comment값을 공백으로 변경한다.
        */}
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
