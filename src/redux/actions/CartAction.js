import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/CartConstant";

import axios from "axios";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`https://apiexpress-fekv.onrender.com/api/getProductDetail/${id}`);
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
};
