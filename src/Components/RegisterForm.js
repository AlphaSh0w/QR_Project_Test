import { Link } from "react-router-dom";

const RegisterForm = () => {

    return ( 
        <div className="register-form">
            <h1>Register</h1>
            <p>Please enter your details to register.</p>
            <form>
                <label>Email</label>
                <input type="text" required/>
                <label>Password</label>
                <input type="password" required/>
                <label>Password confirmation</label>
                <input type="password" required/>
                <button>Register</button>
            </form>
            <p>Already have an account ? <Link to="/login">Login</Link></p>
        </div>
     );
}
 
export default RegisterForm;