import { ADD_TO_CART, GET_FROM_CART, UPDATE, DELETE_CART } from "../Types/Types";

const CartReducer = (state = [], action) => {
    switch(action.type) {

        case GET_FROM_CART:
            return action.payload;

        case ADD_TO_CART : 
            return [...state, action.payload];

        case UPDATE :
            return state.map((arr) => (arr._id === action.payload._id ? action.payload : state));

        case DELETE_CART : 
            return state.filter((arr) => arr._id !== action.payload);

        case DELETE_CART : 
            return state.filter((arr) => arr.userId !== action.payload);

        default: return state;

    }
};


export default CartReducer;