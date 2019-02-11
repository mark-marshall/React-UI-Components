import React from 'react';
import './Button.css';

export default function ActionButton({ props }) {
    return (
        <button className="action-button">{props.text}</button>
    );
}