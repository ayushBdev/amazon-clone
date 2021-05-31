import React from "react";
import "./Subtotal.css";
import img2 from "../Images/img2.png";
import { Link } from "react-router-dom";

const Subtotal = ({ item, total }) => {

    return(
        <div className="subtotal">
            <div className="imgs">
                <img src={img2}/>
            </div>
            <div className="mains_div">
                <p> Subtotal { item } items : <span> ₹ {total} </span></p>
                <Link to="/addaddress" className="links">
                    <button className="buy" disabled={!item}>
                        Proceed to Buy
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Subtotal;