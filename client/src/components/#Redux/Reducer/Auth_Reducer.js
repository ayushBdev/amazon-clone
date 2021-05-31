import { AUTH, LOGOUT} from "../Types/Types";

const AuthReducer = (states = {authData:null}, action) => {
    switch (action.type) {

        case AUTH: 
            localStorage.setItem("profile", JSON.stringify({ ...action.payload}));
            return {...states ,authData: action.payload, loading:false, error:null};
        
        case LOGOUT:
            localStorage.clear();
            return {...states, authData:null, loading:false, errors:null};

        default: return states;
    }
};

export default AuthReducer;