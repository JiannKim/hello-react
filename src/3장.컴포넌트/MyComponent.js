import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 3.3 props
// 3.3.7 클래스형 컴포넌트에서 props 사용하기
class MyComponent extends Component {
  // 클래스 내부에서 defualtProps와 propTypes 사용이 가능하다.
  static defaultProps = {
    name: '기본 이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  // defaultProps와 propTypes는 꼭 사용해야 하나?
  // 이 두가지 설정은 컴포넌트 필수 사항이 아니다. 그러므로 반드시 사용할 필요가 있는것은 아니다.
  // 하지만 react를 사용하여 큰 규모의 프로젝트를 진행하거나 다른 개발자들과의 협업을 한다면
  // 해당 컴포에 어떤 props가 필요한지 쉽게 알 수 있기에 개발 능률이 좋아지는 것이다.

  render() {
    const { name, children, favoriteNumber } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요. 저는 {name} 이예요. <br />
        저는 {children} 이예요.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}예요.
      </div>
    );
  }
}

// 3.3.3 props 기본값 설정: defaultProps (* App.js 참조)
// 기본값을 설정 할 때는 아래 코드와 같이 작성한다.
MyComponent.defaultProps = {
  name: '기본 이름',
};

// 3.3.6 propTypes를 통한 props 검증 (* App.js 참조)
// 아래와 같이 설정하면 name값은 무조건 문자열(string) 형태로 전달해야 된다는 것을 의미한다.
MyComponent.propTypes = {
  name: PropTypes.string,
  // 3.3.6.1 isRequired를 사용하여 필수 propTypes 설정
  // propTypes이 잘못 되엇을 때 경고문구를 띄우도록 아래 코드와같이 작성하여 설정한다.
  // 지정한 favoriteNumber를 사용하지 않았을때는 해당값이 'undefined'라는 별도의 에러메세지가 뜬다.
  favoriteNumber: PropTypes.number.isRequired,
};

// 3.3.6.2 더 많은 PropTypes 종류
// - array: 배열
// - arrayOf(다른 PropTyep): 특정 PropType으로 이루어진 배열을 의미. (예: arrayOf(PropTypes.number)는 숫자로 이루어진 배열이다.)
// - bool: true 혹은 false로 이루어진 값
// - func: 함수
// - number: 숫자
// - object: 객체
// - string: 문자열
// - symbol: ES6의 Symbol
// - node: 렌더링할 수 있는 모든 것(숫자, 문자열, 혹은 JSX 코드, children도 node PropType이다.)
// - instanceOf(클래스): 특정 클래스의 인스턴스(예: instanceOf(MyClass))
// - onbeforeprint(['dog', 'cat']): 주어진 배열 요소 중 값 하나
// - oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안의 종류 중 하나
// - objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
// - shape({name: PropTypes.string, num: PropTypes.number}): 주어진 스키마를 가진 객체
// - any: 아무 종류

export default MyComponent;
