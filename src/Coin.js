// src/Coin.js
import React from 'react';
import './Coin.css';

const Coin = ({ side }) => {
  return (
    <div className={`coin ${side}`}>
      {side === 'heads' ? '😊' : '😈'}
    </div>
  );
};

export default Coin;
