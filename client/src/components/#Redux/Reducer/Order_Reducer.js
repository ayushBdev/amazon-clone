import { CREATE_ORDER, GET_ORDER } from "../Types/Types";

const OrderReducer = (state = [], action) => {
    switch(action.type) {

        case GET_ORDER:
            return action.payload;

        case CREATE_ORDER : 
            return [...state, action.payload];

        default: return state;

    }
};


export default OrderReducer;