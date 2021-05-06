import React, { useState } from 'react';

// 6장 컴포넌트 반복
// 반복적인 내용을 효율적으로 보여주고 관리 하기
const IterationSample = () => {
  // 6.4.1 초기 상태 설정하기
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '눈' },
    { id: 3, text: '얼음' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  // 6.4.2 데이터 추가기능 구현하기
  const onChange = (e) => setInputText(e.target.value);
  // 그 다음 버튼 클릭시 호출할 onClick 함수를 선언하여 클릭이벤트 설정하기
  // 배열 내장 함수인 concat을 사용하여 새 항목을 추가한 배열을 만들고, setNames를 통해 상태를 업데이트 해준다.
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId값을 id로 설정
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더한다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(''); // inputText를 비운다.
    console.log(nextNames);
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  // 6.3.1 key 설정
  // 고유한 값이 없을 때만 index를 key로 사용해야 한다. 일반적으로 index를 사용하면 배열이 변경될 때 효율적으로 리렌더링 하지 못한다.
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
