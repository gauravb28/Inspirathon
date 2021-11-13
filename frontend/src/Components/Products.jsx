import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../actions/product';
import Product from "./Product";
function Products({ getProducts,product:{products}}) {
     useEffect(() => {
    getProducts();
  }, [getProducts]);
    return (
         <Fragment>
          <div className="products">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
         </Fragment>
    )
}
Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,

});

export default connect(mapStateToProps, { getProducts })(Products);
