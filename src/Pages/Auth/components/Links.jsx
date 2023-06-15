// library
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="Auth-links-wrapper">
      <Link to="email-request" className="Auth-link">
        Forgot Password?
      </Link>
      <Link to="email-and-companyID-auth" className="Auth-link">
        Sign Up
      </Link>
    </div>
  );
}
