// 7.3 라이프사이클 메서드 사용하기
// 라이프사이클 메서드 사용
// LifeCycleSample 컴포넌트 만들기 -> App에 렌더링하기 -> 버튼 누르고 콘솔창 관찰하기

// 7.3.1 예제 컴포넌트 생성 (* LifeCycleSample.js 참조)

// 7.3.2 App 컴포넌트에서 예제 컴포넌트 사용 (* LifeCycleSample.js 참조)

// 7.3.3 에러 잡기 (* LifeCycleSample.js 참조)
// 방금전 만든 LifeCycleSample 컴포넌트의 render함수에서 의도적으로 에러를 만들어 확인 해보자.
// render 함수에서의 에러는 주로 존재하지 않는 함수를 사용하려고 하거나
// 존재하지 않는 객체 값을 조회하려고 할 때 발생한다.

// 7.4 정리
/*
    라이프 사이클 메서드는 컴포넌트 상태에 변화가 있을 때마다 실행하는 메서드이다.
    이 메서드들은 서드파티 라이브러리를 사용하거나 DOM을 직접 건드려야 하는 상황에서 유용하다.
    추가로 컴포넌트 업데이트의 성능을 개선할 때는 shouldComponentUpdate가 중요하게 사용된다.
    shouldComponentUpdate를 사용하여 컴포넌트의 업데이트 성능을 개선하는 내용은 추후 11장에서 다시 다룬다.
 */