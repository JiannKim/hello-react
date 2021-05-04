import React, { useState } from 'react';

// 3.4.2 함수형 컴포넌트에서 useState 사용하기
// 리액트 v16.8 이전 버전에서는 함수형 컴포넌트에서 state를 사용할 수 없었지만
// 16.8 이후부터는 useState라는 함수를 사용하여 함수형 컴포넌트에서도 state를 사용할 수 있게 되었다.
// 이번 과정에서 사용법을 간단하게 알아보고 8장에서 더욱 자세히 다룰것.

// 3.4.2.1 배열 비구조화 할당
// 아래의 코드에서 배열을 비구조화 할당으로 간단히 사용할 수 있다.
// const array = [1, 2];
// const one = array[0];
// const two = array[1];

// 비구조화 할당으로 배열 값 가져오기
// const array = [1, 2];
// const [one, two] = array;

// 3.4.2.2 useState 사용하기
//--------------------------------------------------------------------//
//  useState 함수의 인자에는 상태의 초깃값을 넣고,                             //
//  클래스형 컴포 state 초깃값은 객체 형태를 넣어야한다.                         //
//  하지만 useState에서는 반드시 객체가 아니어도 된다.                          //
//  값의 형태는 자유이다. 배열, 객체, 문자, 숫자 등등..                          //
//  함수를 호출하면 배열이 반환된다.                                          //
//  배열의 첫 번째 원소는 현상태이고, 두 번째는 상태를 바꾸어주는 setter 함수이다.     //
//  배열 비구조화 할당을 통해 이름을 자유롭게 지정해 줄 수 있다.                    //
//--------------------------------------------------------------------//

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요.');
  const onClickLeave = () => setMessage('안녕히 가세요.');

  // 3.4.2.3 한 컴포넌트에서 useState 여러 번 사용하기
  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        RED
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        GREEN
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        BLUE
      </button>
    </div>
  );
};

// 3.5 state를 사용할 때 주의 사항
// 어디에서든 state를 사용할 때는 주의 사항이 있다.
// 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달받은 세터(setter) 함수를 사용해야 합니다.

// 아래 코드들은 잘못된 코드이다.
// 클래스형 컴포에서...
// this.state.number = this.state.number + 1;
// this.state.array = this.array.push(2);
// this.state.object.value = 5;

// 함수형 컴포넌트에서...
// const [object, setObject] = useState({ a: 1, b: 1 });
// object.b = 2;

// 배열이나 객체를 업데이트 할 때는 배열이나 객체 사본을 만들고 사본의 값을 업데이트한 후에
// 사본의 상태를 useState 혹은 세터 함수를 통해 업데이트한다. 아래 예시 참고

// 객체
// const object = { a: 1, b: 2, c: 3 };
// const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b의 값만 덮어 쓰기

// 배열
// const array = [
//   { id: 1, value: true },
//   { id: 2, value: true },
//   { id: 3, value: false },
// ];
// let nextArray = array.concat({ id: 4 }); // 새 항목 추가
// nextArray.fileter((item) => item.id !== 2); // id가 2인 항목을 제거
// nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item));

// 객체 사본을 만들 때는 spread 연산자(...)를 사용하여 처리하고,
// 배열 사본을 만들 때는 배열의 내장 함수들인 filter나 map을 사용한다.

export default Say;
