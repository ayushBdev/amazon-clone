import * as api from "../../#Api/Api";
import { CREATE, FETCH_ALL } from "../Types/Types";

export const getProducts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchProducts();
        dispatch({
            type: FETCH_ALL,
            payload: data
        });
    }catch (err) {
        console.log(err);
    }
};

export const createProducts = (post) => async(dispatch) => {
    try {
        const { data } = await api.createProducts(post);
        dispatch({
            type: CREATE,
            payload: data
        });
    }catch (err) {
        console.log(err);
    }
};