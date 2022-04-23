const LoginForm = () => {
    return ( 
        <div className="login-form">
            <h1>Welcome back</h1>
            <p>Welcome back ! please enter your details.</p>
            <form>
                <label>Email</label>
                <input type="text" required/>
                <label>Password</label>
                <input type="password" required/>
                <div className="password-options">
                    <p>Remmember for 30 days</p>
                    <a href="/">Forgot password</a>
                </div>
                <button>Login</button>
            </form>
        </div>
     );
}
 
export default LoginForm;