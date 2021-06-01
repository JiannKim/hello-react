import './App.css';
import React, { useState } from 'react';
import Info from './Info';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr />
        {visible && <Info />}
      </header>
    </div>
  );
}

export default App;
