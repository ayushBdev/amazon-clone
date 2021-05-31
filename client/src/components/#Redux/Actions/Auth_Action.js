import * as api from "../../#Api/Api";
import { AUTH } from "../Types/Types";
import { success } from "../../Notifications/Notifications";

const signin = (formData,router) => async(dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({
            type: AUTH,
            payload: data
        });
        success(data?.result.name);
        router.push("/");
    } catch(err) {
        console.log(err);
    }
};

const signup = (formData,router) => async(dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({
            type: AUTH,
            payload: data
        });
        success(data?.result.name);
        router.push("/");
    } catch(err) {
        console.log(err);
    }
};

export { signin, signup };