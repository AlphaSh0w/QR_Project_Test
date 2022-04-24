import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found-page">
            <h2>Sorry</h2>
            <p>This page does not exist</p>
            <Link to="/login">Return to login page...</Link>
        </div>
     );
}
 
export default NotFound;