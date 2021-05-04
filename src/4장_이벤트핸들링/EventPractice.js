import React, { Component } from 'react';

// 4.2.1.1 컴포넌트 생성
class EventPractice extends Component {
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
          // 4.2.2.1 onChange 이벤트 설정
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
    );
  }
}

export default EventPractice;
