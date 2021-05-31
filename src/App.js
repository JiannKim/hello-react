import { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

// 랜덤 색상 생성
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 1677215).toString(16); // 랜덤 값을 16진수로 변환
}

class App extends Component {
  state = {
    color: '#000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div id="app">
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
