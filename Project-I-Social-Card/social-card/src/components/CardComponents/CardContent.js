import React from 'react';
import './Card.css';

export default function CardContent() {
  return (
    <div className="card-content">
      <h1 className="card-header">Get started with React</h1>
      <p className="content-intro">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <p className="site-link">reactjs.org</p>
    </div>
  );
}
