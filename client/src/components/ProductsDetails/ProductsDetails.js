import React, { useState, useEffect} from "react";
import "./ProductsDetails.css";
import Navbar from './../Navbar/Navbar';
import { getProducts } from "../#Redux/Actions/Products_Action";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { createCarts } from "../#Redux/Actions/Cart_Action";
import { added } from "../Notifications/Notifications";

const ProductsDetails = () => {

    const user = JSON.parse(localStorage.getItem("profile"));

    const [product, setProduct] = useState([]);
 
    const dispatch = useDispatch();

    const {id} = useParams();

    const products = useSelector(state => state.Product_Reducer);

    const handelClick = () => {
        const data = {
            productId: id,
            qty: 1,
            price: product.price,
            userId: user?.result._id,
        };
        dispatch(createCarts(user?.result._id, data));
        added();
    };

    useEffect(()=> {
        dispatch(getProducts());
        products.filter(arr => arr._id === id).map((val) => (
            setProduct(val)
        ));
    }, [dispatch, id]);

    return (
        <div className="product_details">
            <Navbar/>
            <div className="main_product_div">
                <div className="product_img">
                    <img src={product.selectedFile}/>
                </div>
                <div className="product_detals">
                    <p> {product.title} </p>
                    <p1> {product.ratings} </p1>
                    <p2> Price: <span> ₹ {product.price} </span> </p2>
                    <p3> Product Description </p3>
                    <p4> {product.description} </p4>
                </div>
                <div className="product_atb">
                    <button className="product_atbns" onClick={handelClick}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
  
export default ProductsDetails;