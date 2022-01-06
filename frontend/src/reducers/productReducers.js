import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case PRODUCT_LIST_SUCCESS: {
      console.log('reducer: ', action.payload);
      return { ...state, loading: false, products: action.payload };
    }
    case PRODUCT_LIST_FAIL: {
      console.log('reducer-err: ', action.payload);
      return { ...state, loading: false, error: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export const productDetailReducer = (state = { product: {reviews: []} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST: {
      return { ...state, loading: true };
    }
    case PRODUCT_DETAILS_SUCCESS: {
      console.log('reducer: ', action.payload);
      return { ...state, loading: false, product: action.payload };
    }
    case PRODUCT_DETAILS_FAIL: {
      console.log('reducer-err: ', action.payload);
      return { ...state, loading: false, error: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};
