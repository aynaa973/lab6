import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link className="btn btn-primary" to="/">Go Back to Home</Link>
    </div>
  );
}

export default NotFound;
