import React from 'react';
import './Header.css';
import moment from 'moment';

const newDayFormat = moment().format('Do').replace(/th|st|rd/gi,'');
const Date = `${newDayFormat} ${moment().format('MMM')}`

export default function HeaderTitle() {
  return (
    <div className="header-title">
      <h1 className="main-heading">Lambda School</h1>
      <div className="main-heading-items">@LambaSchool · {Date}</div>
    </div>
  );
}
