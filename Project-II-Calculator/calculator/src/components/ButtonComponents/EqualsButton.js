import React from 'react';
import './Button.css';

export default function EqualsButton(props) {
  return (
    <button onClick={() => props.equalsPress()} className={props.buttonStyle}>
      =
    </button>
  );
}
