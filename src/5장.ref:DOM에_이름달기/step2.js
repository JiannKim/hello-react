// 5.2 ref 사용
// 5.2.1 콜백 함수를 통한 ref 설정
/*
    ref를 만드는 가장 기본적인 방법은 콜백 함수를 사용하는 것이다.
    ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해 주면 된다.
    이 콜백 함수는 ref 값을 파라미터로 전달 받는다.
    그리고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 맴버 변수로 설정해 준다.
    예시코드: <input ref={(ref) => {this.input=ref}} />
    이러면 앞으로 this.input은 input 요소의 DOM을 가리킨다.
    ref의 이름은 자유롭게 지정할 수 있다.
*/

// 5.2.2 createRef를 통한 ref 설정
/*
    ref를 만드는 또 다른 방법은 리액트에 내장되 있는 createRef 함수를 사용하는 것이다.
    이 함수를 사용하면 더 적은 코드로 쉽게 사용할 수 있다.
    해당 기능은 리액트 v16.3부터 도입되었으며 이전 버전에서는 작동하지 않는다.

    예시코드:
    import React, { Component } from 'react';
    
    class RefSample extends Component {
        input = React.createRef();

        handleFocus = () => {
            this.input.current.focus();
        }

        render() {
            return(
                <div>
                    <input ref={this.input} />
                </div>
            );
        }
    }
    export default RefSample;

    createRef를 사용하여 ref를 만들려면 우선 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아줘야 한다.
    그리고 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어 주면 ref 설정이 완료된다.
    그런뒤 나중에 ref를 설정해 준 DOM에 접근하려면 this.input.current를 조회하면 된다.
    콜백 함수를 사용할 때와 다른점은 이렇게 뒷부분에 current를 넣어 주어야 한다는 것이다.
    ref를 만드는 방법은 둘 중 편한 방법으로 사용하면된다.
 */

// 5.2.3 적용(* ValidationSample.js 참조)
