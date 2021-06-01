// 8.2 useEffect
// useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설장할 수 있는 Hook이다.
// 클래스형 컴포넌트의 componentDidUpdate를 합친 형태로 봐도 무방하다.
// 기존에 Info.js에서 useEffect를 적용해보자. (* Info.js 참조)

// 8.2.1 마운트될 때만 실행하고 싶을 때
// useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어있는 배열을 넣어주면 된다. (* Info.js 참조)

// 8.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때
/**
 * useEffect를 사용할 때, 특정 값이 변경될 때만  호출하고 싶을 경우도 있을것이다
 * 클래스형 컴포넌트라면 아래 처럼 작성해야 할것이다.
 * componentDidUpdate(prevProps, prevState) {
 *  if(prevProps.value !== this.props.value) {
 *      doSomething();
 *  }
 * }
 * 위 코드는 props 안에  들어 있는 value 값이 바뀔 때만 특정 작업을 수행한다.
 * 이러한 작업을 useEffect에서 해야 한다면? 아래 코드를 확인해보자.
 * useEffect(() => {
 *  console.log(name);
 * }, [name]); <-- 이처럼 useState를 통해 관리하고 있는 상태를 넣어줘도 되고, props로 전달받은 값을 넣어도 된다. (* Info.js 참조)
 */

// 8.2.3 뒷정리하기
// useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
// 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanup) 함수를 반환해 줘야한다.