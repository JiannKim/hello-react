import React, { useReducer } from 'react';

function reducer(state, action) {
  console.log(...state, 'tmtm');
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  console.log(state, '스테이트');
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
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
