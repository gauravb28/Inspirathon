import { product } from '../actions/product';
import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  GET_PRODUCT,

} from '../actions/types';

const initialState = {
  products: [],
  product: null,
};

  
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
