import React from 'react';
import './Button.css';

export default function ZeroButton(props) {
    return (
        <button onClick={() => props.zeroPress()} className='zero'>0</button>
    );
}