import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
  if (numbers.length === 0) {
    console.log('계산할 값이 없습니다.');
  } else {
    console.log('평균값 계산시작..');
  }
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  console.log(sum / numbers.length, '=> 평균값');
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    console.log(e.target.value, '=> 타겟값');
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number)); //parseInt() -> 문자열 인자를 구문분석하여 특정 진수의 정수를 반환
    console.log(nextList, '=> 리스트');
    setList(nextList);
    setNumber(''); // input값(박스안 내용) 초기화
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <div>
        <b>평균값(Average) : </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
