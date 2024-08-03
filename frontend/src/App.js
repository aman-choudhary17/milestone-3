import React, {useState} from 'react'
import './App.css';

function App() {
  const [state, setState] = useState("");

  const onChange = (text) => {
    setState(text)
  }

  const onClick = () => {
    localStorage.setItem('cart', state);
  }
;
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={state} onChange={(e) => onChange(e.target.value)}/>
        <input type="submit" onClick={() => onClick()}/>
        <p>Hello World</p>
      </header>
    </div>
  );
}

export default App;
