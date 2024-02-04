import { Link } from "react-router-dom/cjs/react-router-dom.min";

// sfc
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>404 Error</h2>
            <p>Hmm...Sorry, but that page can't be found.</p>
            <Link to="/">Return to Homepage</Link>
        </div>
    );
};

export default NotFound;
