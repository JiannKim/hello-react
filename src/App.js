import { configure } from '@testing-library/dom';
import { Component } from 'react';
import './App.css';

// 3장
// 3.1 클래스형 컴포넌트
class App extends Component {
  render() {
    const name = '리액트';
    return (
      <div className="react">
        {name}
        <input>this</input>
      </div>
    );
  }
}
// 노트
// ES6의 클래스 문법
// es6 이전에는 js에 class가 없었다. 개념 자체는 있었지만, 그것을 구현하려면 class대신 prototype이라는 문법을 사용해야했다.
// 아래 코드를 보자.
function Dog(name) {
  this.name = name;
}
Dog.prototype.say = function () {
  console.log(this.name + ': 멍멍');
};
var dog = new Dog('검둥이');
dog.say(); // 검둥이: 멍멍

// ES6 문법부터는 위와 기능이 똑같은 코드를 class를 사용해 아래와 같이 작성 할 수 있다.
class Dog {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name + ': 멍멍');
  }
}
const dog = new Dog('흰둥이');
dog.say(); // 흰둥이: 멍멍

// 특징과 차이점 정리
// - 클래스형 컴포넌트에서는 render 함수가 꼭 있어야하고, 그 안에 보여줄 JSX를 반환 해야한다.
// - 함수형보다 메모리 자원을 더 많이 사용한다.
// - state와 라이프 사이클 기능 사용이 가능하다. (v16.8 업뎃 이후 함수형 컴포넌트에 Hooks 기능도입으로 단점 해결)
// - 임의 메서드를 정의 할 수 있다.

export default App;
