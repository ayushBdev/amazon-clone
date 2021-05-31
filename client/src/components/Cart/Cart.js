import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Subtotal from "../Subtotal/Subtotal";
import CartBasket from "../CartBasket/CartBasket";
import "./Cart.css";

import { useSelector, useDispatch } from "react-redux";
import { getCarts } from "../#Redux/Actions/Cart_Action";
import { getProducts } from "../#Redux/Actions/Products_Action";

const Cart = () => {

    const user = JSON.parse(localStorage.getItem("profile"));
 
    const dispatch = useDispatch();

    const cartProducts = useSelector(state => state.CartReducer);
    const products = useSelector(state => state.Product_Reducer);
    
    const item = cartProducts.filter(arr => arr.userId === user?.result._id).length;
    const total = cartProducts.reduce((sum, e) => sum + e.price*e.qty, 0);
    
    useEffect(()=> {
        dispatch(getCarts());
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className="cart">
            <div className="cart_navbar">
                <Navbar/>
            </div>
            <div className="banner">
                <img src=""/>
            </div>
            <div className="shop_basket">
                <div className="cartbasket_div">
                    <p1> Shopping Basket </p1>
                    {cartProducts && cartProducts.filter(arr => arr.userId === user?.result._id).map((val) => (
                        products.filter(ar => ar._id === val.productId).map(e => (
                            <CartBasket
                                key={e._id}
                                e={e}
                                val={val}
                            />
                        ))
                    ))}
                </div>
                <div className="subtotal_div">
                    <Subtotal
                        item={item}
                        total={total}
                    />
                </div>
            </div>
        </div>
    );
};
  
export default Cart;  