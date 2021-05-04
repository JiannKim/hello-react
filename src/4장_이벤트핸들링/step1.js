// 4.1.1 이벤트를 사용할 때 주의 사항

// 1. 이벤트 이름은 카멜 표기법으로 작성한다.
// 예를 들어 html에서의 onclick은 리액트에서 onClick. onkeyup은 onKeyUp으로 작성한다.

// 2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아닌, 함수 형태의 값을 전달한다.
// html에서 이벤트를 설정할 때는 큰따옴표 안에 실행할 코드를 넣었다. 하지만 리액트에서는 함수 형태의 객체를 전달한다.

// 3. DOM 요소에만 이벤트를 설정할 수 있다.
// div, button, input, form, span 등의 DOM 요소에는 이벤트를 설정할 수 있지만,
// 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없다.
// 예를 들어 MyComponent에 onClick 값을 설정했다 치고 (예시코드: <MyComponent onClick={doSomething} />)
// MyComponent를 클릭할 때 onClick에 설정한 함수를 실행하는것이 아니라
// 그냥 이름이 onClick인 props를 MyComponent에 전달하는 것일 뿐이다.
// 하지만 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수는 있다. (예시코드: <div onClick={this.props.onClick}>(...)</div>)

// 4.1.2 이벤트 종류

// - Clipboard
// - Composition
// - Keyboard
// - Focus
// - Mouse
// - Selection
// - Touch
// - UI
// - Wheel
// - Media
// - Image
// - Animation
// - Transition
// ... 이외에도 많은 이벤트가 있다. 나머지 이벤트는 리액트 메뉴얼에서 참고(https://facebook.github.io/react/docs/events.html)