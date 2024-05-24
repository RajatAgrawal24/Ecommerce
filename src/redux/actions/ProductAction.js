import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    CLEAR_ERRORS
} from '../constants/ProductConstant'

import axios from 'axios'

export const getProducts = () => async(dispatch) => {
    try{
        dispatch({type : ALL_PRODUCT_REQUEST})
        let link = 'https://apiexpress-fekv.onrender.com/api/products'
        const {data} = await axios.get(link)
        // console.log(data)

        dispatch({
            type : ALL_PRODUCT_SUCCESS,
            payload : data
        })
    }catch(err){
        dispatch({
            type : ALL_PRODUCT_FAIL,
            payload : error.respond.data.message
        })
    }
}