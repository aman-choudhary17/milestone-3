import React from 'react'
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import { Card, Navbar, Slider } from './components';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
        <header className="App-header">
          <Navbar />
          <Slider />
          <Card />
        </header>
      </div>
    </Provider>
  );
}

export default App;
