import React from 'react';
import './Display.css';

export default function CalculatorDisplay(props) {
  return (
    <div className="calc-display">
      <p className="calc-display-num">{props.num}</p>
    </div>
  );
}
