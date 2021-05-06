import React, { Component } from 'react';

// 5.3.2 컴포넌트 초기 설정
// 5.3.2.1 컴포넌트 파일 생성
class ScrollBox extends Component {
  // 5.3.3 컴포넌트에 메서드 생성
  // 스크롤바를 맨 아래쪽으로 내리는 메서드를 만들어보자.
  // 자바스크립트로 스크롤바를 내릴 때는 DOM 노드가 가진 다음 값들을 사용합니다.
  // - scrollTop: 세로 스크롤바 위치(0~350)
  // - scrollHeight: 스크롤이 있는 박스 안의 div 높이(650)
  // - clientHeight: 스크롤이 있는 박스의 높이(300)
  // 만일 스크롤바를 맨 아래쪽으로 내리려면 scrollHeight에서 clientHeight 높이를 빼면 될것이다.

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    // 위에서 비구조화 할당 문법을 사용했다.
    // 같은 의미 -> const scrollHeight = this.box.scrollHeight; , const clientHeight = this.box.clientHeight;
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relarive',
    };
    const innerStyle = {
      border: '3px solid pink',
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />뿅
      </div>
    );
  }
}

export default ScrollBox;
