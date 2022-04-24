import { useState } from "react";
import { useDispatch } from "react-redux";
import {setLoggedIn} from "../Redux/UserHandler";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "../API/axios";
const LOGIN_URL = "/login";


const LoginForm = () => {
    const [remmemberPass, setRemmemberPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(setLoggedIn(false));
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username: email, password}),
                {
                    headers: {"content-type":"application/json"}
                });
            console.log(response?.data);
            dispatch(setLoggedIn(true));
        }
        catch (err){
            console.log(err.message)
        }
    };

    return ( 
        <div className="login-form">
            <h1>Welcome back</h1>
            <p>Welcome back ! please enter your details.</p>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="text"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                required/>
                <label>Password</label>
                <input type="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                required/>
                <div className="password-options">
                    <label>
                        <input
                              type="checkbox"
                              name="remmemberPass"
                              checked={remmemberPass}
                              onChange={(e) => setRemmemberPass(e.target.checked)}
                        />
                        Remmember password
                    </label>
                    <Link to="/resetpassword">Forgot password</Link>
                </div>
                <button>Login</button>
            </form>
            <p>Don't have an account ? <Link to="/register">Sign up</Link></p>
        </div>
     );
}
 
export default LoginForm;