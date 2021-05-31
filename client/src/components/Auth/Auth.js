import React, {useState} from "react";
import "./Auth.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signin, signup } from "../#Redux/Actions/Auth_Action";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import logo from "../Images/logo2.png";
import { wrongPassword } from "../Notifications/Notifications";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Auth = () => {

    const [form, setForm] = useState(initialState);
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();


    const handelShowPassword = () => {
        return setShowPassword(preValue => !preValue);
    };

    const switchMode = () => {
        setForm(initialState);
        setIsSignUp(prevIsSignup => !prevIsSignup);
        setShowPassword(false);
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        if(isSignUp) {
            if(form.password === form.confirmPassword) {
                dispatch(signup(form, history));
            } else {
                wrongPassword();
            }
        } else {
            dispatch(signin(form, history));
        }
    };

    const handelChange = (event) => {
        return setForm({...form, [event.target.name] : event.target.value});
    }


  return (
    <div className="loginSignup">
        <div className="main_div">
            <div className="amazon_logo">
                <img src={logo}/>
            </div>
            <div className="center_div">
                <form className="forms" onSubmit={handelSubmit}>
                    <div className="heading">
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </div> 
                    {isSignUp && (
                        <div className="inputs">
                            <p> Enter Name </p>
                            <input
                                name="name"
                                onChange={handelChange}
                                type="text"
                            />
                        </div>
                    )}
                    <div className="inputs">
                        <p> Enter Email </p>
                        <input
                            name="email"
                            onChange={handelChange}
                            type="email"
                        />
                    </div>
                    <div className="inputs">
                        <p> Enter Password </p>
                        <div className="c">
                            <input
                                type={showPassword ? "text" : "password"}
                                name= "password"
                                onChange={handelChange}
                            />
                            {showPassword ? <VisibilityIcon onClick={handelShowPassword}/> : <VisibilityOffIcon onClick={handelShowPassword}/>}
                        </div>
                    </div>
                    {isSignUp && (
                        <div className="inputs">
                            <p> Confirm Password </p>
                            <input
                                name="confirmPassword"
                                onChange={handelChange}
                                type="password"
                            />
                        </div>
                    )}
                    <button className="form_submit" type="submit"> 
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                    <div className="agree">
                        <p> By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
                    </div>
                </form>
                <div className="switch_btn">
                    <button className="switch_btns" onClick={switchMode}>
                        {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign Up" }
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Auth;