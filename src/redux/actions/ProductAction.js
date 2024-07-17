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
    CLEAR_ERRORS
} from '../constants/ProductConstant'

import axios from 'axios'

export const getProducts = () => async(dispatch) => {
    try{
        dispatch({type : ALL_PRODUCT_REQUEST})
        let link = '/api/products'
        const {data} = await axios.get(link)
        // console.log(data)

        dispatch({
            type : ALL_PRODUCT_SUCCESS,
            payload : data
        })
    }catch(err){
        dispatch({
            type : ALL_PRODUCT_FAIL,
            payload : err.respond.data.message
        })
    }
}

export const getProductDetails = (id) => async(dispatch) => {
    try{
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        let link = `/api/getProductDetail/${id}`

        const { data } = await axios.get(link)
        // console.log(data)
        
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: err.response.data.message
        })
    }
}

export const listCategoryProducts = (category) => async (dispatch) => {
  try {
    // console.log(category)
    dispatch({ type: CATEGORY_PRODUCT_REQUEST });

    const { data } = await axios.get(
      `/api/product/getCategoryProducts?category=${category}`
    );
    // console.log(data);

    dispatch({
      type: CATEGORY_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};