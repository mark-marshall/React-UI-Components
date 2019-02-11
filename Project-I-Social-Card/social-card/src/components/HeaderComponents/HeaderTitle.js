import React from 'react';
import './Header.css';
import moment from 'moment';

export default function HeaderTitle() {
  return (
    <div className="header-title">
      <h1 className="main-heading">Lambda School</h1>
      <div className="main-heading-items">@LambdaSchool · {moment().format('Do MMM')}</div>
    </div>
  );
}
