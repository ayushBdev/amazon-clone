import React from "react";
import "./Products.css";

import { createCarts } from "../#Redux/Actions/Cart_Action";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { added } from "../Notifications/Notifications";

const Products = ({ pro }) => {

    const user = JSON.parse(localStorage.getItem("profile"));
    const dispatch = useDispatch();

    const handelClick = () => {
        const data = {
            productId: pro._id,
            qty: 1,
            price: pro.price,
            userId: user?.result._id,
        };
        dispatch(createCarts(user?.result._id, data));
        added();
    };

    return (
        <div className="main_product">
            <Link to={`/product/${pro._id}`} className="link">
                <div className="products">
                    <div className="product_imgs">
                        <img src={pro.selectedFile}/>
                    </div>
                    <div className="product_det">
                        <p1> {pro.title} </p1>
                        <p> ₹ {pro.price} </p>
                    </div>
                </div>
            </Link>
            <button className="addTOBasket_btn" onClick={handelClick}>
                Add to Cart
            </button>
        </div>
    );
};

export default Products;