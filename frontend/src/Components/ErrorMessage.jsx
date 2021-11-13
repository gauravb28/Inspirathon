import React, { useState } from 'react';
import './ErrorMessage.css';
function ErrorMessage() {
  const [errorMessage, setErrorMessage] = useState('');
  const handleClick = () => {
    setErrorMessage('Example error message!');
  };
  return (
    <div>
      <div className="alert">
        <span
          className="closebtn"
          onclick="this.parentElement.style.display='none';"
        >
          &times;
        </span>
        <strong>Error !</strong> Please try again .
      </div>
    </div>
  );
}

export default ErrorMessage;
