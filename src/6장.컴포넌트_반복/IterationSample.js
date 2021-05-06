import React from 'react';

// 6장 컴포넌트 반복
// 반복적인 내용을 효율적으로 보여주고 관리 하기
const IterationSample = () => {
  // 6.2 데이터 배열을 컴포넌트 배열로 변환하기
  const name = ['눈사람', '눈', '얼음', '바람'];
  // 6.3.1 key 설정
  // 고유한 값이 없을 때만 index를 key로 사용해야 한다. 일반적으로 index를 사용하면 배열이 변경될 때 효율적으로 리렌더링 하지 못한다.
  const nameList = name.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
