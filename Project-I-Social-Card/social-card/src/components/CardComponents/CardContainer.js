import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

export default function CardContainer() {
  return (
    <a className="react-link" href="https://www.reactjs.org">
      <div className="card-container">
        <CardBanner />
        <CardContent />
      </div>
    </a>
  );
}
