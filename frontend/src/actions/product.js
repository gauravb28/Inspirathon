import axios from 'axios';
import {
  GET_PRODUCTS,
   GET_PRODUCT,
   PRODUCT_ERROR
  
} from './types';

// Get Posts
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/products');
    console.log(res);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
     
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
    dispatch({
      type: PRODUCT_ERROR,
    
    });
  }
};