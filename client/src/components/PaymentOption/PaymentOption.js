import React, { useEffect } from "react";
import "./PaymentOption.css";
import img4 from "../Images/img4.gif";

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deletesCartByUserId } from "../#Redux/Actions/Cart_Action";
import { createOrders } from "../#Redux/Actions/Order_Action";
import { getCarts } from "../#Redux/Actions/Cart_Action";

const PaymentOption = () => {

    const user = JSON.parse(localStorage.getItem("profile"));

    const dispatch = useDispatch();

    const cartProducts = useSelector(state => state.CartReducer);
    const proId = cartProducts.map((val) => val.productId);

    const total = cartProducts.reduce((sum, e) => sum + e.price*e.qty, 0);

    const newDate = new Date()
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const dates = `${date} ${months[month]} ${year}`;

    const handelClick = () => {
        const data = {
            orderPlaced: dates,
            total: total,
            userName: user?.result.name,
            proId: proId,
            userId: user?.result._id ,
        };
        dispatch(createOrders(data));
        dispatch(deletesCartByUserId(user?.result._id));//
    };

    useEffect(()=> {
        dispatch(getCarts());
    }, [dispatch]);


    return (
        <div className="pay_option">
            <Link to="/">
                <img src={img4}/>
            </Link>
            <form className="list_div">
                <p1> Select a payment method </p1>
                <div>
                    <input
                        type="radio"
                        name="s"
                        value="a"
                    /> 
                    <p> Add Debit/Credit/ATM Card </p>
                </div>
                <div>
                    <input
                        type="radio"
                        name="s"
                        value="b"
                    /> 
                    <p>  Net Banking </p>
                </div>
                <div>
                    <input
                        type="radio"
                        name="s"
                        value="c"
                    /> 
                    <p> Other UPI Apps </p>
                </div>
                <div>
                    <input
                        type="radio"
                        name="s"
                        value="d"
                    /> 
                    <p> Pay on Delivery </p>
                </div>
            </form>
            <div className="continue_div">
                <Link to="/" className="links">
                    <button className="continue_btn" onClick={handelClick}>
                        Continue
                    </button>
                </Link>
                <p> Make sure to review the order before it's final. </p>
            </div>
        </div>
    );
};

export default PaymentOption;