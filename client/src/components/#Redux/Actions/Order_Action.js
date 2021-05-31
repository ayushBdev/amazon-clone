import * as api from "../../#Api/Api";
import { CREATE_ORDER, GET_ORDER } from "../Types/Types";

export const createOrders = (orders) => async(dispatch) => {
    try {
        const { data } = await api.createOrder(orders);
        console.log(data);
        dispatch({
            type: CREATE_ORDER,
            payload: data
        });
    }catch (err) {
        console.log(err);
    }
};

export const getOrder = () => async(dispatch) => {
    try {
        const { data } = await api.fetchOrder();
        dispatch({
            type: GET_ORDER,
            payload: data
        });
    }catch (err) {
        console.log(err);
    }
};