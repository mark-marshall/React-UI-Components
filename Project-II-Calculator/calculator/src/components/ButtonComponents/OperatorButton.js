import React from 'react';
import './Button.css';

export default function OperatorButton(props) {
    return (
        <button onClick={() => props.operatorPress(props.text)} className={props.buttonStyle}>{props.text}</button>
    );
}