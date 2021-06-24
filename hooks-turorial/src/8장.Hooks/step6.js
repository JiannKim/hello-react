// useRef (* Average.js 참조)

/*
  useRef는 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해준다.
  Average 컴포넌트에서 등록 버튼을 눌렀을 때 포커스가 인풋쪽으로 넘어가도록 코드를 작성해 보자
 */

// 8.6.1 로컬 변수 사용하기
/*
  추가로 컴포넌트 로컬 변수를 사용해야 할 때도 useRef를 활용할 수 있다.
  여기서 로컬 변수란 렌더링과 상관없이 바뀔 수 있는 값을 의미한다.
  클래스 형태로 작성된 컴포넌트의 경우에는 로컬 변수를 사용해야 할 때 다음과 같이 작성할 수 있다.

  import React, {Component} from 'react';

  class MyComponent extends Component {
    id = 1
    setId = (n) => {
        this.id = n;
    }
    printId = () => {
        console.log(this.id);
    }
    render() {
        return (
            <div>
                MyComponent
            </div>
        );
    }
  }

  export default MyComponent;

  
  ** 함수형 컴포넌트
  
  import React, {useRef} from 'react';

  const RefSample = () => {
    const id = useRef(1);
    const setId = (n) => {
        id.current = n;
    }
    const printId = () => {
        console.log(id.current);
    }
    return (
        <div>
            RefSample
        </div>
    );
  };

  export default RefSample;

  이렇게 ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다는 점에 주의해야 한다.
  렌더링과 관련되지 않은 값을 관리할 때만 해당 방식을 사용하자
 */
