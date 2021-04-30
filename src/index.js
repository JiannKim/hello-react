import React from 'react'; //react modules 불러오기
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// React.StrictMode 란, 리액트 프로젝트에서 리액트의 레거시 기능을 사용하지 못하게 하는 기능이다.
// 이를 어기고 사용하게 되면 경고를 출력한다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
