import LoginFields from "./LoginFields";

const Login = () => {
    return ( 
        <div className="login-page">
            <div className="left">
                <h1>Title</h1>
                <LoginFields/>
                <h3>watermark</h3>
            </div>
            <img src="https://wallpaperaccess.com/full/3997333.jpg" alt="Abstract art" className="right"/>
        </div>
     );
}
 
export default Login;