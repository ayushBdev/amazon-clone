import { combineReducers } from "redux";
import AuthReducer from './Auth_Reducer';
import Product_Reducer from './Product_Reducer';
import CartReducer from "./Cart_Reducer";
import OrderReducer from "./Order_Reducer";

const combReducer = combineReducers({
    AuthReducer: AuthReducer,
    Product_Reducer: Product_Reducer,
    CartReducer: CartReducer,
    OrderReducer: OrderReducer
});

export default combReducer;