import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
const Login = () => {
    const {loggedIn, userData} = useSelector((state) => state.user)
    return ( 
        <div className="login-page">
            <div className="left">
                <h1>Awesome website</h1>
                {loggedIn && <h1><img src={userData.avatar} alt="profile"/>You are logged in !</h1>}
                <LoginForm/>
                <h3>Bouchelaghem Abdelghani Yanis 2022</h3>
            </div>
            <div className="right">
                <div className="image"></div>
            </div>
        </div>
     );
}
 
export default Login;