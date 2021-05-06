import { Component } from 'react';
import IterationSample from './6장.컴포넌트_반복/IterationSample';
import './App.css';

class App extends Component {
  render() {
    // 6.2.2 App 컴포에서 예제 컴포넌트 렌더링
    return (
      <div>
        <IterationSample />
      </div>
    );
  }
}

export default App;
