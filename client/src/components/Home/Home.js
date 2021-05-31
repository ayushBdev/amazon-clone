import React, { useEffect } from 'react';
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Auth from "../Auth/Auth";
import Products from "../Products/Products";
import banner from "../Images/banner.jpg";

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from "../#Redux/Actions/Products_Action";


const Home = () => {

    const dispatch = useDispatch();
    const user = localStorage.getItem("profile");

    const products = useSelector(state => state.Product_Reducer);

    useEffect(()=> {
        dispatch(getProducts());
    }, [dispatch]);

    if (!user) {
        return (
           <Auth/>
        );
    }
    

    return (
        <div className="homepage">
            <div>
                <Navbar/> 
            </div>
            <div className="banner_div">
                <img src={banner}/>
            </div>
            <div className="products_div linkss">
                {products && products.map((pro) => (
                    <Products 
                        key={pro._id}
                        pro={pro}
                    />
                ))}
            </div>
        </div>  
    );
};

export default Home;