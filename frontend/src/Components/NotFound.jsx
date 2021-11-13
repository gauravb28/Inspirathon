import React from 'react';
import NotFoundImg from './images/notfound.svg';
import './NotFound.css';
function NotFound() {
  return (
    <div className="notfound">
      <img src={NotFoundImg} />
    </div>
  );
}

export default NotFound;
