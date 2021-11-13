import axios from 'axios';
import { GET_PRODUCTS, GET_PRODUCT, PRODUCT_ERROR } from './types';

// Get Products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/products');
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    dispatch({
      type: PRODUCT_ERROR,
      payload: errors,
    });
  }
};

// Get Product
export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/products/${id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    dispatch({
      type: PRODUCT_ERROR,
      payload: errors,
    });
  }
};
