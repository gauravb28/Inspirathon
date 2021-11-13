import React from 'react';
import './Popup.css';
function Popup() {
  return (
    <div>
      <div className="outer">
        <div className="content animated fadeInLeft">
          <span className="bg animated fadeInDown">EXCLUSIVE</span>
          <h1>
            Afro
            <br /> baseball hair
          </h1>
          <p>
            Shadow your real allegiance to New York's Pirate radio with this
            cool cap featuring the Graphic Know Wave logo.
          </p>

          <div className="button">
            <a href="#">$115</a>
            <a className="cart-btn" href="#">
              <i className="cart-icon ion-bag"></i>ADD TO CART
            </a>
          </div>
        </div>
        <div className="popup_image">
          <img
            src="https://media.istockphoto.com/photos/blue-pottery-works-in-okinawa-picture-id694329856?b=1&k=20&m=694329856&s=170667a&w=0&h=xlgzwV5pFLpLDKyrijNZ5oPalKjiZIKbe3MSYUzwxs0="
            width="300px"
            className="animated fadeInRight popup_img"
          />
        </div>
      </div>
      <p className="footer">Based on the Silk UI Kit - DesignModo Market</p>
    </div>
  );
}

export default Popup;
