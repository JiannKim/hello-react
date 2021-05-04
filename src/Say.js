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

export default Say;
