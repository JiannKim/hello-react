// 8.3 useReducer
/**
 * useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook이다.
 * 리듀서(reducer)라는 개념은 17장에서 리덕스를 배울때 더 자세히 알아볼것.
 * 리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수이다.
 * 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜줘야 한다.
 *
 * function reducer(state, action) {
 *  return {...}; // 불변성을 지키면서 업데이트한 새로운 상태를 반환한다.
 *
 * 액션값은 주로 다음과 같은 형태로 이루어져 있다.
 * {
 *  type: 'INCREMENT'},
 *  // 다른 값들이 필요할경우 추가로 들어감
 * }
 *
 * 17장에서 다룰 리덕스에서 사용하는 액션 객체에는 어떤 액션인지 알려주는 type필드가 꼭 있어야 하지만,
 * useReducer에서 사용하는 액션 객체는 반드시 type을 지니고 있을 필요가 없다.
 * 심지어 객체가 아니라 문자열이나 숫자여도 상관없다.
 */

// 8.3.1 카운터 구현하기 (* Counter.js 참조)

// 8.3.2 인풋 상태 관리하기 (* Info.js 참조)
// 기존에는 useState를 여러번 사용하여 변경되는 값을 관리 했었다. useReducer를 사용해서 useState와 유사한 방식으로 작업을 처리할 수도있다.
