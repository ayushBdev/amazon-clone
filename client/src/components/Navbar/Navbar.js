import React, {useState, useEffect} from "react";import "./Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from "../Images/logo.png";

import SidebarMenu from "../SidebarMenu/SidebarMenu";
import * as actionType from "../#Redux/Types/Types";

import decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { getCarts } from "../#Redux/Actions/Cart_Action";
import { logouts } from "../Notifications/Notifications";

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const cartProducts = useSelector(state => state.CartReducer);

    const items = cartProducts.filter(arr => arr.userId === user?.result._id).length;

    const logout = () => {
        dispatch({
            type: actionType.LOGOUT
        });
        history.push("/auth");
        setUser(null);
        logouts();
    };

    useEffect (()=> {
        const token = user?.token;
        if(token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    useEffect(()=> {
        dispatch(getCarts());
    });

    return (
        <div className="navbar">
            <div className="slidebar">
                <SidebarMenu/>
            </div>
            <div className="logos">
                <Link className="link" to="">
                    <img src={logo}/>
                </Link>
            </div>
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Search products..."
                />
                <SearchIcon/>
            </div>
            <div className="login">
                <Link className="link2" to="/auth">
                    {user?.result ? (
                        <>
                            <p1> {user?.result.name} </p1>
                            <ExitToAppIcon onClick={logout}/>
                        </>

                    ) : (
                        <p> Hello, Guest Sign In </p>
                    )}
                </Link>
            </div>
            <div className="orders">
                <Link className="link2" to="/order_history">
                    <p> Return & Orders </p>
                </Link>
            </div>
            <div className="cart_icon">
                <Link className="link2" to="/cart">
                    <ShoppingCartIcon/>
                    <p> {items} </p>
                </Link>
            </div>
        </div>
    );
};
  
export default Navbar;