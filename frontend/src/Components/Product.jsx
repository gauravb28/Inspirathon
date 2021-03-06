import React from 'react';
import './Product.css';
import './Popup.css';
function Product() {
  return (
    <div>
      <div className="card">
        <div className="img_con">
          <img
            src="https://media.istockphoto.com/photos/typical-mexican-crafts-picture-id1277561930?b=1&k=20&m=1277561930&s=170667a&w=0&h=PFLjavUGHfGV5ldjJMaGaCWM0-A44s9G0OXCwFFDQas="
            alt="Denim Jeans"
          />
        </div>
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>
          Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.
        </p>
        <button
          type="button"
          className="btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#myModal"
        >
          Add to cart
        </button>
      </div>

      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Modal Header</h4>
            </div>
            <div className="modal-body">
              <div className="outer">
                <div className="content animated fadeInLeft">
                  <span className="bg animated fadeInDown">EXCLUSIVE</span>
                  <h1>
                    Afro
                    <br /> baseball hair
                  </h1>
                  <p>
                    Shadow your real allegiance to New York's Pirate radio with
                    this cool cap featuring the Graphic Know Wave logo.
                  </p>

                  <div className="button">
                    <a href="#">$115</a>
                    <a className="cart-btn" href="#">
                      <i className="cart-icon ion-bag"></i>ADD TO CART
                    </a>
                  </div>
                </div>
                <img
                  src="https://media.istockphoto.com/photos/blue-pottery-works-in-okinawa-picture-id694329856?b=1&k=20&m=694329856&s=170667a&w=0&h=xlgzwV5pFLpLDKyrijNZ5oPalKjiZIKbe3MSYUzwxs0="
                  width="300px"
                  className="animated fadeInRight modal_img"
                />
              </div>
              <p className="footer">
                Based on the Silk UI Kit - DesignModo Market
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
