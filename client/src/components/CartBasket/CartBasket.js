import React, { useState, useEffect } from "react";
import "./CartBasket.css";

import { useDispatch } from "react-redux";
import { update, deletesCart } from "../#Redux/Actions/Cart_Action";
import { removed } from "../Notifications/Notifications";


const CartBasket = ({ e, val }) => {
    
    const dispatch = useDispatch();

    const handelSub = () => {
        dispatch(update(val._id, {qty: "sub"}));
    };

    const handelAdd = () => {
        dispatch(update(val._id, {qty: "add"}));
    };

    const handelDelete = () => {
        dispatch(deletesCart(val._id));
        removed();
    };


    return (
        <div className="cart_basket">
            <div className="pro_img">
                <img src={e.selectedFile}/>
            </div>
            <div className="pro_details">
                <div className="pro_title">
                    <p> {e.title} </p>
                </div>
                <div className="pro_ratings">
                    <p> {e.ratings} </p>
                </div>
                <div className="pro_options">
                    <div className="pro_quantitiy">
                        <button onClick={handelSub}> - </button>
                        <p> {val.qty} </p>
                        <button onClick={handelAdd}> + </button>
                    </div>
                    <div className="pro_delete">
                        <button className="delete" onClick={handelDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div className="pro_price">
                <p> ₹ {e.price * val.qty} </p>
            </div>
        </div>
    );
};
  
export default CartBasket;