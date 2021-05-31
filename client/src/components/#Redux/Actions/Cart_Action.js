import * as api from "../../#Api/Api";
import { ADD_TO_CART, GET_FROM_CART, UPDATE, DELETE_CART, DELETE_CART_BY_USER_ID } from "../Types/Types";

export const createCarts = (id, cart) => async(dispatch) => {
    try {
        const { data } = await api.createCart(id, cart);
        dispatch({
            type: ADD_TO_CART,
            payload: data
        });
    }catch (err) {
        console.log(err);
    }
};

export const getCarts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchCarts();
        dispatch({
            type: GET_FROM_CART,
            payload: data
        });
    }catch (err) {
        console.log(err);
    }
};

export const update = (id, iqty) => async(dispatch) => {
    try {
        const { data } = await api.updateCart(id, iqty);
        dispatch({
            type: UPDATE,
            payload: data
        });
    }catch (err) {
        console.log(err);
    }
};

export const deletesCart = (id) => async(dispatch) => {
    try{
        const { data } = await api.deleteCart(id);
        dispatch({
            type: DELETE_CART,
            payload: data
        });
    }catch(err) {
        console.log(err);
    }
};

export const deletesCartByUserId = (id) => async(dispatch) => {
    try{
        const { data } = await api.deleteCartByUserId(id);
        dispatch({
            type: DELETE_CART_BY_USER_ID,
            payload: data
        });
    }catch(err) {
        console.log(err);
    }
};