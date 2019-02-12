import React from 'react';
import './Button.css';

export default function NumberButton(props) {
  return <button onClick={() => props.buttonPress(props.text)} className={props.buttonStyle}>{props.text}</button>;
}
 