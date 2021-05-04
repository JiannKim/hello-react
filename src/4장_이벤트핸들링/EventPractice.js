import React, { useState } from 'react';

const EventPractice = () => {
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);
  // const onClick = () => {
  //   alert(username + ':' + message);
  //   setUsername('');
  //   setMessage('');
  // };
  // const onKeyPress = (e) => {
  //   if (e.key === 'Enter') onClick();
  // };

  // 위 코드에서는 e.target.name을 활용하지 않았다. 하지만 input의 개수가 많다면 e.target.name을 활용하는 것이 좋을 수가 있다.
  // e.target.name 값을 활용하려면 아래와 같이 useState를 쓸 때 input값들이 들어있는 form 객체를 사용해 주면 된다.
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존 form 내용을 이 곳에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌운다.
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClick();
  };
  return (
    <div>
      <h1>이벤트 실습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        // onChange={onChangeUsername}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력..."
        value={message}
        // onChange={onChangeMessage}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
