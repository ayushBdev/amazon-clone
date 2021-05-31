import { CREATE, FETCH_ALL } from "../Types/Types";

const Product_Reducer = (state = [], action) => {
    switch(action.type) {

        case FETCH_ALL:
            return action.payload;

        case CREATE : 
            return [...state, action.payload];

        default: return state;

    }
};

export default Product_Reducer;