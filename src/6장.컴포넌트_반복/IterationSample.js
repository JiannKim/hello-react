import React from 'react';

// 6장 컴포넌트 반복
// 반복적인 내용을 효율적으로 보여주고 관리 하기
const IterationSample = () => {
  // 6.2 데이터 배열을 컴포넌트 배열로 변환하기
  const name = ['눈사람', '눈', '얼음', '바람'];
  const nameList = name.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
