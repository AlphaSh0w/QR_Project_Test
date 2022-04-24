import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
const Login = () => {
    const {loggedIn} = useSelector((state) => state.user)
    return ( 
        <div className="login-page">
            <div className="left">
                <h1>Title</h1>
                {loggedIn && <h1>You are logged in !</h1>}
                <LoginForm/>
                <h3>Watermark</h3>
            </div>
            <div className="right">
                <div className="image"></div>
            </div>
        </div>
     );
}
 
export default Login;