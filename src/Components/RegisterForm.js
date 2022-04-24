import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    return ( 
        <div className="register-form">
            <h1>Register</h1>
            <p>Please enter your details to register.</p>
            <form>
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
                <label>Password confirmation</label>
                <input type="password"
                value={passwordConfirm}
                onChange={(e) => {setPasswordConfirm(e.target.value)}}
                required/>
                <button>Register</button>
            </form>
            <p>Already have an account ? <Link to="/login">Login</Link></p>
        </div>
     );
}
 
export default RegisterForm;