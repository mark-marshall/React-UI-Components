import React from 'react';
import './Header.css';
import moment from 'moment';

export default function HeaderTitle() {
  return (
    <div className="header-title">
      <h1 className="main-heading">Lambda School</h1>
      <span>@LambdaSchool</span>
      <span>·</span>
      <span>{moment().format('Do MMM')}</span>
    </div>
  );
}
