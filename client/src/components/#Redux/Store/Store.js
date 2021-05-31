import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combReducer from './../Reducer/index';

const store = createStore(combReducer, compose(applyMiddleware(thunk)));

export default store;