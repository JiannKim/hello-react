import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    // (1) 렌더링될 때 실행
    // console.log('렌더링이 완료되었습니다!');
    // console.log({
    //   name,
    //   nickname,
    // });
    // (2) 마운트될 때만 실행
    // console.log('마운트될 때만 실행됩니다.');
    // (3) 특정 값(이름/name)이 변경되어 렌더링될 때 실행
    // console.log('name 값이 변경되었습니다!');
    // console.log({
    //   name,
    // });
    // (4) 마운트되거나 언마운트될 때마다 실행
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <br />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
