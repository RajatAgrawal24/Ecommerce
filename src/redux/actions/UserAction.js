import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
    CLEAR_ERRORS
} from '../constants/UserConstant'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import axios from 'axios'

export const createUser = (formData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })
        let link = `${API_BASE_URL}/userInsert`

        const { data } = await axios.post(link, formData)
        // console.log(data)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: err.response.data.message
        })
    }
}

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        let link = `${API_BASE_URL}/loginUser`

        const { data } = await axios.post(link, { email, password }, config)
        // console.log(data)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.message
        })
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        // console.log('loading')
        dispatch({ type: LOAD_USER_REQUEST })

        let link = `${API_BASE_URL}/me`

        const { data } = await axios.get(link)
        // console.log(data)

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })
    } catch (err) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: err.response.data.message
        })
    }
}

// Logout User
export const logout = () => async (dispatch) => {
    try {
        await axios.get(`${API_BASE_URL}/logOut`);

        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
};

export const updateProfile = (formData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        const { data } = await axios.post(`${API_BASE_URL}/updateProfile`, formData, config);
        // console.log(data);

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.status,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post(`${API_BASE_URL}/updatePassword`, passwords, config);
        console.log(data)

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data.status,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const resetUpdateProfile = () => async (dispatch) => {
    dispatch({ type: UPDATE_PROFILE_RESET });
};

export const resetUpdatePassword = () => async (dispatch) => {
    dispatch({ type: UPDATE_PASSWORD_RESET });
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}