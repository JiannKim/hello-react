import React, { useState, useMemo, useCallback } from 'react';

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

  const onChange = useCallback((e) => {
    console.log(e.target.value, '=> 타겟값');
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number)); //parseInt() -> 문자열 인자를 구문분석하여 특정 진수의 정수를 반환
    console.log(nextList, '=> 리스트');
    setList(nextList);
    setNumber(''); // input값(박스안 내용) 초기화
  }, [number, list]); // number 혹은 list가 바뀌었을때만 함수 생성
  
  // useMemo는 memoization된 값을 반환한다. 모든 렌더링 시의 고비용 계산을 방지하게 해준다. 그리고 렌더링중에 실행되기 때문에 렌더링중에 하면 안되는일을 해당 함수 내에서 시키지않도록 주의하자
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
