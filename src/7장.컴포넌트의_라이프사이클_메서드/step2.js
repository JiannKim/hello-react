// 7.2 라이프사이클 메서드 살펴보기
// 7.2.1 render() 함수
/*
    render() {...}
    라이프사이클 메서드중 유일한 필수 메서드.
    this.props와 this.state에 접근할 수 있고, 리액트 요소를 반환한다.
*/

// 7.2.2 constructor 메서드
/* 
    constructor() {...}
    컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 맨 처음으로 실행되며
    초기 state를 정할 수 있다.
*/

// 7.2.3 getDerivedStateFromProps 메서드
/*
    리액트 v16.3 이후에 새로 만든 라이프사이클 메서드이다.
    props로 온 값을 동기화시ㅣ는 용도로 사용하며, 컴포넌트가 마운트될 때와 업데이트될 때 호출된다.

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.value !== prevState.value) {   // 조건에 따라 특정 값 동기화
            return { value: nextProps.value};
        }
        return null;    // state를 변경할 필요가 없다면 null을 반환
    }
 */

// 7.2.4 componentDidMount 메서드
/*
    componentDidMount() {...}
    컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행한다.
    여기서 다른 자바스크립트 라이브러리나 프레임워크의 함수를 호출하거나 이벤트를 등록할 수 있고,
    setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리하면 된다.
 */

// 7.2.5 shouldComponentUpdate 메서드
/*
    shouldComponentUpdate() {...}
    props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드 이다.
    이 메서드에서는 반드시 ture 값 또는 false 값을 반환해야 한다.
    컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 언제나 true 값을 반환한다.
    이 메서드가 false 값을 반환하면 업데이트 과정은 여기서 중지된다.
 */

// 7.2.6 getSnapshotBeforeUpdate 메서드
/*
    리액트 v16.3 이후 만든 메서드이다. 
    render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출된다.
    이 메서드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있는데
    주로 업데이트하기 직전의 값을 참고할 일이 있을 경우 활용된다. (예: 스크롤바 위치 유지)
*/

// 7.2.7 componentDidUpdate 메서드
/*
    componentDidUpdate(prevProps, prevState, snapshot) {...}
    리렌더링을 완료한 후 실행한다. 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 무방하다.
    여기선 prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있다.
    또 getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달받을 수 있다.
 */

// 7.2.8 componentWillUnmount 메서드
/*
    componentWillUnmount() {...}
    컴포넌트를 DOM에서 제거할 때 실행한다.
    componentDidMount에서 등록한 타이머나 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야한다.
 */

// 7.2.9 componentDidCatch 메서드
/*
    componentDidChatch 메서드는 리액트 v16에서 새롭게 도입되었다.
    컴포넌트 렌더링중 에러가 발생했을 때 애플리케이션이 먹통되지 않고 오류 UI를 보여 줄 수 있게 해준다.
    
    예시코드:
    componentDidChatch(error, info) {
        this.setState({
            error: true
        });
        console.log({error, info});
    }

    여기서 error는 파라미터에 어떤 에러가 발생했는지 알려주며, info 파라미터는
    어디에 있는 코드가 오류를 발생 시키는지에 대한 정보를 준다.
    위 코드에서는 그저 콘솔로그만 했지만, 나중에 실제 사용할 때 오류가 발생하면
    서버 API를 호출하여 따로 수집할 수도 있다.

    그러나 이 메서드를 사용할 때는 컴포넌트 자신에게 발생하는 에러를 잡아낼 수 없고
    자신의 this.props.children으로 전달되는 컴포에서 발생하는 에러만 잡아낼 수 있다.
    이 메서드를 사용하는 방법은 7.3.3절 '에러 잡아내기'에서 알아보자.
 */