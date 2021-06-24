import React from 'react';
import useInputs from './useInputs';

const Info = () => {
  const [state, onChange] = useInputs({ name: '', nickname: '' });
  console.log(state, '스테이트');
  const { name, nickname } = state;
  return (
    <>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <br />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </>
  );
};

export default Info;
