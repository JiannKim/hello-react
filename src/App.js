import { Component } from 'react';
import './App.css';
import ScrollBox from './5장.ref:DOM에_이름달기/ScrollBox';

class App extends Component {
  render() {
    // 5.2.2.2 App 컴포에서 스크롤 박스 컴포 렌더링
    return (
      <div>
        <ScrollBox
          // 5.3.4 컴포넌트에 ref 달고 내부 메서드 사용
          ref={(ref) => (this.scrollBox = ref)}
        />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
