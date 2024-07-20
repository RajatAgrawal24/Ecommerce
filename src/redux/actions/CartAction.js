import { json } from "react-router-dom";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/CartConstant";

import axios from "axios";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/getProductDetail/${id}`);
//   console.log(quantity);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.productDetail._id,
      name: data.productDetail.name,
      price: data.productDetail.price,
      image: data.productDetail.images.url,
      stock: data.productDetail.stock,
      quantity,
    },
  });
  localStorage.setItem('cart123', JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING INFO
export const removeCartItem = (id) => async (dispatch, getState) => {

  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cart123", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  // console.log(data)
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};