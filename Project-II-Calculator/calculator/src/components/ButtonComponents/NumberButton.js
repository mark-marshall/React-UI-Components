import React from 'react';
import './Button.css';

export default function NumberButton({ props }) {
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    );
  }
  