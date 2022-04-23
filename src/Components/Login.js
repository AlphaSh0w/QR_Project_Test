import LoginForm from "./LoginForm";

const Login = () => {
    return ( 
        <div className="login-page">
            <div className="left">
                <h1>Title</h1>
                <LoginForm/>
                <h3>watermark</h3>
            </div>
            <div className="right">
                <div className="image"></div>
            </div>
        </div>
     );
}
 
export default Login;