import {Link} from "react-router-dom"
const NotFound = () => {
    return ( 
        <div className="not-found">
            <p>Not found</p>
            <Link to="/">back to the home page</Link>
        </div>
     );
}
 
export default NotFound;