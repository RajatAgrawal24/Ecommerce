import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CATEGORY_PRODUCT_REQUEST,
  CATEGORY_PRODUCT_SUCCESS,
  CATEGORY_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/ProductConstant";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.allProducts,
      };
    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        product: [],
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload.productDetail,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const categoryProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case CATEGORY_PRODUCT_REQUEST:
      return {
        loading: true,
        products: []
      };
    case CATEGORY_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products
      };
    case CATEGORY_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload

      };
    default:
      return state;
  }
};
