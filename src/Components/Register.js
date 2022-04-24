import RegisterForm from "./RegisterForm";


const Register = () => {
    return ( 
        <div className="register-page">
            <div className="left">
                <h1>Title</h1>
                <RegisterForm/>
                <h3>Watermark</h3>
            </div>
            <div className="right">
                <div className="image"></div>
            </div>
        </div>
     );
}
 
export default Register;