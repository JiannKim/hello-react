// 6장 컴포넌트 반복 (* IterationSample.js 참조)

// 6.1 자바스크립트 배열의 map() 함수
// 6.1.1 문법
/*
    arr.map(callback, [thisArg])
    이 함수의 파라미터는 다음과 같다.
    # callback: 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세 가지이다.
    - currentValue: 현재 처리하고 있는 요소
    - index: 현재 처리하고 있는 요소의 index 값
    - array: 현재 처리하고 있는 원본 배열
    # thisArg(선택항목): callback 함수 내부에서 사용할 this 레퍼런스
 */

// 6.1.2 예제
// 아래 map()을 사용하여 배열 [1,2,3,4,5]의 각 요소를 제곱해서 새로운 배열을 생성해보자. (콘솔에서 Shift + Enter로 개행할 수 있다.)
/*
    예제코드:
    var numbers = [1,2,3,4,5];
    
    var processed = numbers.map(function(num) {
        return num * num;
    });

    console.log(processed);

    ES6 문법
    const numbers = [1,2,3,4,5]; // var 대신 const
    const result = numbers.map(num => num * num); // 화살표 함수 사용
    console.log(result);
*/
