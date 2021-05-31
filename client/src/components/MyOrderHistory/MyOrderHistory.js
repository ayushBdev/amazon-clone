import React, { useEffect } from "react";
import "./MyOrderHistory.css";
import Navbar from './../Navbar/Navbar';

import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../#Redux/Actions/Order_Action";
import { getProducts } from "../#Redux/Actions/Products_Action";
import { Link } from "react-router-dom";

const MyOrderHistory = () => {
    
    const user = JSON.parse(localStorage.getItem("profile"));
 
    const dispatch = useDispatch();

    const orders = useSelector(state => state.OrderReducer);
    const products = useSelector(state => state.Product_Reducer);

    useEffect(()=> {
        dispatch(getOrder());
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className="myorderhistory">
            <Navbar/>
            {orders.filter(arr => arr.userId === user?.result._id).map((val) => (
                <div className="order_div">
                    <div className="order_details">
                        <div>
                            <p> ORDER PLACED </p>
                            <p> {val.orderPlaced} </p>
                        </div>
                        <div>
                            <p> TOTAL </p>
                            <p> ₹ {val.total} </p>
                        </div>
                        <div>
                            <p> SHIP TO </p>
                            <p> {user?.result.name} </p>
                        </div>
                    </div>
                    <div className="products_detail">
                        <p> Dispatching Soon </p>
                        {val.proId.map((val) => (
                            products.filter(arr => arr._id === val).map((ar) => (
                                <div>
                                    <Link to={`/product/${ar._id}`}> <img src={ar.selectedFile}/> </Link>
                                    <p> {ar.title} </p>
                                </div>
                            ))
                        ))}
                    </div>
                </div> 
            ))}
        </div>
    );
};

export default MyOrderHistory;