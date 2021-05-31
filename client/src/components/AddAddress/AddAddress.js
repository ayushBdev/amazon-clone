import React from "react";
import { TextField } from '@material-ui/core';
import "./AddAddress.css";
import img4 from "../Images/img4.gif";
import { Link } from 'react-router-dom';

const AddAddress = () => {
    return (
        <div className="addAddress">
            <Link className="logo_div" to="/">
                <img src={img4}/>
            </Link>
            <div className="mai_div">
                <form className="form_div">
                    <p> Add a New Address </p>
                    <TextField
                        className="name"
                        variant = "outlined"
                        label = "Full name (First and Last name)"
                        fullWidth = {true}
                        required ="true"
                    />
                    <TextField
                        className="name"
                        variant = "outlined"
                        label = "Mobile number"
                        type = "number"
                        required ="true"
                    />
                    <TextField
                        className="name"
                        variant = "outlined"
                        label = "PIN code"
                        type = "number"
                        required ="true"
                    />
                    <TextField
                        className="name"
                        variant = "outlined"
                        label = "Enter Full Address"
                        required ="true"
                    />
                    <TextField
                        className="name"
                        variant = "outlined"
                        label = "Enter landmark"
                        required ="true"
                    />
                    <TextField
                        className="name"
                        variant = "outlined"
                        label = "Town/City"
                        required ="true"
                    />
                    <p1> Add delivery instructions </p1>
                    <p2> Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned. </p2>
                    <select>
                        <option> Home (7am - 9pm delivery) </option>
                        <option> Office/Commercial (10am - 6pm delivery) </option>
                    </select>
                    <Link to="/payment" className="links">
                        <button className="buy">
                            Add Address
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default AddAddress;