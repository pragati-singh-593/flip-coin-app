// src/App.js
import React, { useState } from 'react';
import Coin from './Coin';
import './App.css';

function App() {
  const [side, setSide] = useState('heads');
  const [flipping, setFlipping] = useState(false);

  const flipCoin = () => {
    setFlipping(true);
    setTimeout(() => {
      const newSide = Math.random() > 0.5 ? 'heads' : 'tails';
      setSide(newSide);
      setFlipping(false);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Flip Coin</h1>
      <Coin side={side} />
      <button onClick={flipCoin} disabled={flipping}>
        {flipping ? 'Flipping...' : 'Flip Coin'}
      </button>
    </div>
  );
}

export default App;
