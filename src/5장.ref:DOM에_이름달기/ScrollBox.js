import React, { Component } from 'react';

// 5.3.2 컴포넌트 초기 설정
// 5.3.2.1 컴포넌트 파일 생성
class ScrollBox extends Component {
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relarive',
    };
    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(whire, black)',
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
