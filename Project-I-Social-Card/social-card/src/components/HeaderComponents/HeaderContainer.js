import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

export default function HeaderContainer() {
  return (
    <div className="App">
      <ImageThumbnail />
      <div className="header-text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
}
