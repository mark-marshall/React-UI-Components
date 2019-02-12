import React from 'react';
import './Button.css';

export default function ActionButton(props) {
  return <button onClick={() => props.clearAll()} className="action-button">{props.text}</button>;
}
